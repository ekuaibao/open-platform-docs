# 更新单据

{% httpverb "put" %} /api/openapi/v2/flow/data/$flowId {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **accessToken** | String  |必填，通过授权接口获取。      |

注：与业务画面上的保存单据功能一样，按格式组织数据，保存单据信息。
保存成功后，会返回该实例。
程序会校验请求参数及body数据格式是否正确。

#### 示例:
```json
	http://wx2.ekuaibao.com/api/openapi/v2/flow/data/$flowId?accessToken=SIw9lEj3rc0800

```

#### body参数:
```json
{
    "form": {
        "title": "报销单-测试",
        "submitterId": "KQI9kk5LZU0000:7q49kk50Cg0400",
        "expenseDate": 1562036472205,
        "expenseDepartment": "KQI9kk5LZU0000:e9M9kk50CglA00",
        "description": "22222222222",
        "details": [
            {
                "feeTypeId": "",
                "specificationId": "KQI9kk5LZU0000:office:expense:29207f912e4a8e7c57f6ebf9f2908dfc4ce6c0bb",
                "feeTypeForm": {
                    "amount": {
                        "standard": "24",
                        "standardStrCode": "CNY",
                        "standardNumCode": "156",
                        "standardSymbol": "¥",
                        "standardUnit": "元",
                        "standardScale": 2
                    },
                    "feeDate": 1562036426545,
                    "invoiceForm": {
                        "type": "exist",//wait 待开发票 exist已有发票 noExist 无发票 noWrite 无需填写(当费用类型发票字段设置的不可编辑时，默认为此项)
                        "attachments": [
                            {
                                "key": "WechatIMG186-1562036381695-730.jpeg",
                                "fileName": "WechatIMG186.jpeg",
                                "fileId": "xoI9mIvN7oqY00"
                            }
                        ]
                    },
                    "consumptionReasons": "999999",
                    "attachments": [],
                    "invoiceType": "VATOrdinaryInvoice",
                    "noTaxAmount": {
                        "standard": "6",
                        "standardStrCode": "CNY",
                        "standardNumCode": "156",
                        "standardSymbol": "¥",
                        "standardUnit": "元",
                        "standardScale": 2
                    },
                    "taxAmount": {
                        "standard": "4",
                        "standardStrCode": "CNY",
                        "standardNumCode": "156",
                        "standardSymbol": "¥",
                        "standardUnit": "元",
                        "standardScale": 2
                    },
                    "expenseDepartment": "KQI9kk5LZU0000",
                    "companyRealPay": {
                        "standard": "3333"
                    },
                    "taxRate": "8",
                    "sense": "lll",
                    "项目": "l7Y9l30kHwi000",
                    "fromCity": "[{\"key\":\"2\",\"label\":\"北京市/北京市区\"}]",
                    "description": "1111",
                    "feeDatePeriod": {
                        "start": 1562036426564,
                        "end": 1562036426564
                    },
                    "city": "[{\"key\":\"2\",\"label\":\"北京市/北京市区\"}]",
                    "u_火车席别": "YW",
                    "u_确认走报销": true,
                    "toCity": "[{\"key\":\"2\",\"label\":\"北京市/北京市区\"}]",
                    "u_文本": "11111",
                    "u_数字": "3",
                    "u_金额": {
                        "standard": "3",
                        "standardStrCode": "CNY",
                        "standardNumCode": "156",
                        "standardSymbol": "¥",
                        "standardUnit": "元",
                        "standardScale": 2
                    },
                    "u_开关": true,
                    "u_日期范围": {
                        "start": 1562036426574,
                        "end": 1562036426574
                    },
                    "u_日期": 1562036426575,
                    "u_部门": "KQI9kk5LZU0000",
                    "u_员工": "KQI9kk5LZU0000:7q49kk50Cg0400",
                    "u_城市": "[{\"key\":\"2\",\"label\":\"北京市/北京市区\"}]",
                    "u_文本1": "111111",
                    "u_自定义档案": "l7Y9l30kHwi000",
                    "u_枚举": "RZ",
                    "u_法人实体1": "VTg9l30kHwi800"
                }
            },
            {
                "feeTypeId": "KQI9kk5LZU0000:catering",
                "specificationId": "KQI9kk5LZU0000:catering:expense:55b60aff01a532011c82fd097041938842ecd8e4",
                "feeTypeForm": {
                    "amount": {
                        "standard": "44444",
                        "standardStrCode": "CNY",
                        "standardNumCode": "156",
                        "standardSymbol": "¥",
                        "standardUnit": "元",
                        "standardScale": 2
                    },
                    "feeDate": 1562036453462,
                    "invoiceForm": {
                        "type": "exist",
                        "attachments": [
                            {
                                "key": "WechatIMG186-1562036466774-209.jpeg",
                                "fileName": "WechatIMG186.jpeg",
                                "fileId": "Hpc9mIvN7org00"
                            }
                        ]
                    },
                    "consumptionReasons": "1111",
                    "attachments": [
                    {
                       "key": "WechatIMG186-1562036466774-209.jpeg",
                       "fileName": "WechatIMG186.jpeg",
                       "fileId": "Hpc9mIvN7org00"
                     }
                    ]
                }
            }
        ],
        "expenseLink": "PAo9mg6d0E7U00",
        "payeeId": "-U49kk50Cg1M00",
        "u_文本1": "1",
        "u_数字": "27",
        "u_金额": {
            "standard": "3",
            "standardStrCode": "CNY",
             "standardNumCode": "156",
             "standardSymbol": "¥",
             "standardUnit": "元",
             "standardScale": 2
        },
        "u_日期": 1562036472220,
        "u_日期范围": {
            "start": 1562036472221,
            "end": 1562036472221
        },
        "u_开关": true,
        "attachments": [],
        "u_员工": "KQI9kk5LZU0000:7q49kk50Cg0400",
        "u_城市": "[{\"key\":\"7035\",\"label\":\"香港\"},{\"key\":\"7011\",\"label\":\"澳门\"}]",
        "u_枚举": "RZ",
        "项目": "l7Y9l30kHwi000",
        "法人实体": "VTg9l30kHwi800",
        "specificationId": "ftA9kk5MjI2E00:d6b9284c60193910489d7832c367aaca33ac2526"
    }
}
```