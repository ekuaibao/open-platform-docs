# 获取结算方式列表

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v2/settlement"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/settlement?accessToken=gLQbAz0Rs44E00'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "i50bAzG2FImo00",
            "name": "按月结",
            "opportunity": "事后统一结算",
            "period": "月"
        },
        {
            "id": "thYbAzsJXg7g00",
            "name": "商城结算",
            "opportunity": "随单支付",
            "period": null
        }
    ]
}
```

