# 停用自定义档案项

import Control from "../../../components/Control";

<Control
method="PUT"
url="/api/openapi/v1/dimensions/items/$`id`/disable"
/>

:::caution
- 所有子级档案项也会被一并停用。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 档案项id | 必填| - | 可通过[获取自定义档案项](/docs/open-api/dimensions/get-dimension-items)获取 | 

#### Query Parameters:

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items/$XBUbxhnP5k8w00/disable?accessToken=hQgbxfJnlElc00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
:::caution
- 响应需要判断状态码来确定是否成功。
:::

```text
code 204 
```

## 失败响应
```json
{
    "errorCode": 412,
    "errorMessage": "档案项不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
















