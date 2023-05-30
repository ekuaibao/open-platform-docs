# 提交单据的支付结果

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/paymentResults"
/>

:::caution
- 单据到达 **出纳支付** 节点并且处于 **`PROCESSING` 支付中** 状态时可以通过此接口提交支付结果。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **items**              | Array | 提交的单据支付结果集合  | 必填  | - | 请求体集合 |
| **&emsp; ∟ id**       | String | 单据ID              | 必填  | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一) |
| **&emsp; ∟ code**     | String | 单据支付返回状态码     | 必填  | - | `P00001` : 支付成功 &emsp; `P00002` : 支付失败 |
| **&emsp; ∟ errorMsg** | String | 支付返回信息          | 非必填 | - | 支付错误请将错误信息返回 |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/paymentResults?accessToken=TNQbsyYQV80I00' \
--header 'Content-Type: application/json' \
--data-raw '{
	"items":[
		{
			"id":"8ZAbsRr6_QfA00",
			"code":"P00001",
			"errorMsg":null
		},
		{
			"id":"id2",
			"code":"P00002",
			"errorMsg":null
		}
	]
}'
```

## 成功响应
```json
{
	"items":[
		{
			"id":"id1",        //单据ID
			"code":"R00000",   //更新成功
			"errorMsg":null
		},
		{
			"id":"id2",        //单据ID
			"code":"R00001",   //更新失败
			"errorMsg":null
		}
	]
}
```

### 响应数据code参数含义
| 代码 | 含义                        | 
| :--- |:--------------------------| 
| **R00000** | 成功                        |
| **R00001** | 单据不存在                     |
| **R00002** | 单据已支付                     |
| **R00003** | 单据不在支付中                   |
| **R00004** | 单据支付渠道不正确                 |
| **R00005** | 支付结果代码错误，`code` 没按照参数要求传参 |
| **R00006** | 无效的请求                     |
