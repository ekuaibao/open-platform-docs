# 授权员工
通过指定员工的 `id` 或 `工号` 或 `手机号` 批量激活/解除员工。

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v1/charge/powers/authStaff"
/>

:::caution
- 如果超过企业购买人数，则激活不会成功。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **type**      | String | 员工标识类型	| 必填  | - | `id` : 员工id &emsp;  `code` : 工号 &emsp;  `cellphone` : 手机号  |
| **addStaff**  | Array  | 激活的员工	    | 必填  | - | 可以为[]，如果 `type` = `id`，此处应传员工id，以此类推 |
| **delStaff**  | Array  | 解除激活的员工	| 必填  | - | 可以为[]，如果 `type` = `id`，此处应传员工id，以此类推 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/charge/powers/authStaff?accessToken=PlocOoVT4FwM00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "type":"code",
    "delStaff":[],
    "addStaff":["code1","code2"]
}'
```

## 成功响应
```json
{
    "value": true 
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "未知的type类型",
    "errorDetails": null,
    "code": null,
    "data": null
}
```