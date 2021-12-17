# 获取企业名称

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/corporations"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/corporations?accessToken=RCIbwHcnF0kg00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
	"value": {
		"id": "JOYbpjPP-E2Q00", // 企业id
		"name": "恒达"           // 企业名称
	}
}
```

## 失败响应
```json
{
	"errorCode": 403,
	"errorMessage": "未授权",
	"errorDetails": null,
	"code": null,
	"data": null
}
```