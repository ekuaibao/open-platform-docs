 # 获取单据风险标签

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/invoice/risk/label/[`ids`]"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids** | Array | 单据ID集合 | 必填 | - | 通过 [根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/invoice/risk/label/[j7sbyDMhYUpU00]?accessToken=ZyEbyCA-_Auk00'
```

## 成功响应
```json
{
    "items": [
        {
            "flowId": "j7sbyDMhYUpU00",                 //单据ID
            "details": [
                {
                    "detailId": "hwhoupBjAvQ2ha",       //费用明细ID
                    "riskTags": [                       //单据风险标签
                        {
                            "tagName": "存在疑似发票重复",
                            "type": "INVOICE_REPEAT_VERIFICATION",
                            "invoiceId": "gwobfjObAAno00:3700171320:38415400"
                        }
                    ],
                    "invoiceTotal": 2,
                    "noCompliance": 1,
                    "compliance": 1
                }
            ],
            "invoiceTotal": 2,
            "noCompliance": 1,
            "compliance": 1
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"items": []}` | 返回空表示没有查询到风险标签数据<br/>请确认 `ids`（单据ID集合）对应的单据是否有风险标签或是否存在 |



