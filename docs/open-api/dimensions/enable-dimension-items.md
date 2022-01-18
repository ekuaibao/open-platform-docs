# 启用自定义档案项

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/dimensions/items/$`id`/enable"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 档案项ID | 必填 | - | 可通过[获取自定义档案项](/docs/open-api/dimensions/get-dimension-items)获取 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **applyToSubtree** | Boolean | 是否一并启用所有子级档案项 | 非必填 | false | `true` : 启用 &emsp; `false` : 不启用 |

:::tip
- `applyToSubtree` 参数可以不填，但是body体 `{}` 必须存在。
:::

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items/$XBUbxhnP5k8w00/enable?accessToken=hQgbxfJnlElc00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
	"applyToSubtree": true
}'
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























