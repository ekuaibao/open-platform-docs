# 提交单据的支付结果

{% httpverb "post" %} /api/openapi/v1/paymentResults {% endhttpverb %}

#### Query Parameters:
| 名称  | 类型  | 描述 | 是否必填 | 默认值 | 备注  |
| :--- | :--- | :--- |:---    |:---   | :--- |
| **accessToken** | String  | 通过授权接口获取 |必填   | - | [通过授权接口获取](/getting-started/auth.html) |

#### Body Parameters:
| 名称  | 类型  | 描述 | 是否必填 | 默认值 | 备注  |
| :--- | :--- | :--- |:---    |:---   | :--- |
| **items**          | Array   | 提交的单据支付结果集合  | 必填 | - | 请求体集合 |
| **items/id**       | String  | 单据flowId          | 必填 | - | 通过其他接口或者出站消息获取 |
| **items/code**     | String  | 单据支付返回状态码     | 必填 | - | `P00001`:支付成功 `P00002`:支付失败 |
| **items/errorMsg** | String  | 支付返回信息          | 非必填 | - | 支付错误请将错误信息返回 |

<br/>

#### CURL:
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
<br/>

| 代码 | 含义 | 
| :--- | :--- | 
| **R00000** | 成功             |
| **R00001** | 单据不存在        |
| **R00002** | 单据已支付        |
| **R00003** | 单据不在支付中     |
| **R00004** | 单据支付渠道不正确  |
| **R00005** | 支付结果代码错误    |
| **R00006** | 无效的请求         |

#### 成功响应:
```json
{
	"items":[
		{
			"id":"id1",//单据id
			"code":"R00000",//更新成功
			"errorMsg":null
		},
		{
			"id":"id2",//单据id
			"code":"R00001",//更新失败
			"errorMsg":null
		}
	]
}
```

