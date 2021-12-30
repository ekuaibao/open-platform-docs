# 根据费用类型id或code获取模板信息

此接口用于获取费用类型详情。

import Control from "../../../components/Control";

<Control method="POST"
url="/api/openapi/v2/specifications/feeType/byIdsAndCodes"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids**   | Array | 费用类型id      | 非必填 | - | 和 `codes` 至少有一个必填，可以传入多个 id |
| **codes** | Array | 费用类型编码code | 非必填 | - | 和 `ids` 至少有一个必填，可以传入多个 code |

## CURL

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/specifications/feeType/byIdsAndCodes?accessToken=cCMbw_mKUs8c00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "ids": ["JOYbpjPP-E2Q00:office"],
    "codes": []
}'
```

## 成功响应

```json
{
    "items": [
        {
        "id": "LqY9lELfXs0000:office",       //费用类型ID
        "corporationId": "LqY9lELfXs0000",   //企业ID
        "name": "办公",                      //费用类型名称
        "expenseSpecificationId": "LqY9lELfXs0000:office:expense:792110273014293af8b7c171057b33bd7a5b315a",          //报销字段版本ID,格式：费用类型ID + expense + 版本号
        "requisitionSpecificationId": "LqY9lELfXs0000:office:requisition:9613b88e57f83e6bde8a066fe4d173963f00d197",  //申请字段版本ID,格式：费用类型ID + requisition + 版本号
        "receiptSpecificationId": "LqY9lELfXs0000:office:receipt:cf9da8c731bf425d4b0586cb804193528f09f538",          //收款字段版本ID,格式：费用类型ID + receipt + 版本号（开通[收款单据]应用后才会返回）
        "expenseForm": [                    //报销字段列表
            {
                "amount": {
                    "label": "金额",         //字段显示名称
                    "type": "money",         //字段类型
                    "optional": false,       //是否选填
                    "max": "1000000000.00",  //最大值
                    "min": "0.01"            //最小值
                }
            },
            {
                "feeDate": {
                    "label": "日期",
                    "type": "date",
                    "optional": false
                }
            },
            {
                "invoiceForm": {
                    "label": "发票",
                    "type": "invoice",
                    "optional": true
                }
            },
            {
                "consumptionReasons": {
                    "label": "消费事由",
                    "type": "text",
                    "optional": true,
                    "maxLength": 140,
                    "minLength": 0
                }
            },
            {
                "attachments": {
                    "label": "附件",
                    "type": "select",
                    "optional": true,
                    "valueFrom": "attachment"
                }
            },
            {
                "apportions": {
                    "label": "分摊明细",
                    "type": "apportions",
                    "optional": true
                }
            },
            {
                "u_开关": {
                    "label": "开关",
                    "type": "switcher",
                    "optional": false
                }
            },
            {
                "u_部门": {
                    "label": "部门",
                    "type": "select",
                    "optional": false,
                    "valueFrom": "organization.Department"  //该字段取值范围，是从全局字段中获取到的
                }
            },
            {
                "u_自定义档案": {
                    "label": "自定义档案",
                    "type": "select",
                    "optional": false,
                    "valueFrom": "basedata.Dimension.项目"
                }
            }
        ],
        "requisitionForm": [  //申请字段列表
            {
                "amount": {
                    "label": "金额",
                    "type": "money",
                    "optional": false,
                    "max": "1000000000.00",
                    "min": "0.01"
                }
            },
            {
                "consumptionReasons": {
                    "label": "消费事由",
                    "type": "text",
                    "optional": true,
                    "maxLength": 140,
                    "minLength": 0
                }
            },
            {
                "attachments": {
                    "label": "附件",
                    "type": "select",
                    "optional": true,
                    "valueFrom": "attachment"
                }
            }
        ],
        "receiptForm": [  //收款字段列表（开通[收款单据]应用后才会返回）
            {
                "amount": {
                    "label": "金额",
                    "type": "money",
                    "optional": false,
                    "max": "1000000000.00",
                    "min": "0.01"
                }
            },
            {
                "feeDate": {
                    "label": "日期",
                    "type": "date",
                    "optional": false
                }
            },
            {
                "consumptionReasons": {
                    "label": "消费事由",
                    "type": "textarea",
                    "optional": true,
                    "maxLength": 140,
                    "minLength": 0
                }
            },
            {
                "attachments": {
                    "label": "附件",
                    "type": "select",
                    "optional": true,
                    "valueFrom": "attachment"
                }
            },
            {
                "apportions": {
                    "label": "分摊明细",
                    "type": "apportions",
                    "optional": true
                }
            }
        ],
        "expenseRules": [],      //报销字段规则
        "requisitionRules": [],  //申请字段规则
        "receipt": [],           //收款字段规则
        "flowType": "feeType"    //费用类型
        }
    ]
}
```

## 失败响应

```json
{
  "errorCode": 412,
  "errorMessage": "查询的费用类型不存在, 请输入有效的查询条件",
  "errorDetails": null,
  "code": null,
  "data": null
}
```