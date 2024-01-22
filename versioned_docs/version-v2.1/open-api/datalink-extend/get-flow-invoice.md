# 根据单据编号或ID查询发票ID和明细ID

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/flow/INVOICE/search"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **type**      | String | 查询参数类型 | 必填 | - | `code` : 单据编号 &emsp; `id` : 单据ID |
| **codeOrIds** | Array  | 查询参数    | 必填 | - | 传对应参数类型值，单据编号或者单据ID |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/flow/INVOICE/search?accessToken=ZyEbyCA-_Auk00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type":"id",
    "codeOrIds":["j7sbyDMhYUpU00"]  //单据ID
}'
```

## 成功响应
```json
{
    "value": {
        "j7sbyDMhYUpU00": [                   //单据ID或者单据编号，与传参对应
            {
                "invoiceId": "gwobfjObAAno00:3700171320:38415400",    //发票ID
                "invoiceItemId": [            //发票明细ID
                    "zz4byDMhYUh400", 
                    "k1IbyDMhYUiQ00",
                    "ehQbyDMhYUjI00",
                    "5AobyDMhYUio00",
                    "8EQbyDMhYUjg00",
                    "YIwbyDMhYUhw00",
                    "buUbyDMhYUhY00"
                ],
                "invoiceType": "invoice"        //发票类型
            },
            {
                "invoiceId": "5-sbyDJSOI0800",  //发票ID 
                "invoiceItemId": [],            //发票明细ID
                "invoiceType": "taxi"           //发票类型
            }
        ]
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"value": {}}` | 返回空表示没有查询到数据<br/>请确认 `codeOrIds`（查询参数） 是否正确 | 
| **400** | - | 不支持此类型type=name | 请确认 `type`（查询参数类型） 是否为 **备注** 中的固定值 | 
