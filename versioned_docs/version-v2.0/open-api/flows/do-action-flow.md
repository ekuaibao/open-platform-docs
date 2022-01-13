# 简单单据事件处理
提供【**撤销单据**】和【**删除单据**】操作。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/flow/data/$`flowId`/`action`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowId** | String  | 单据id          | 必填 | - | [一般通过出站消息获取单据ID](/docs/open-api/outbound-message/outbound-new)|
| **action** | String  | 单据的action操作 | 必填 | - | `retract` : 撤销操作 &emsp; `delete` : 删除操作 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

:::caution
- 删除操作，只能是驳回状态和草稿状态的单据。
- 撤销操作，只能是审批中状态的单据（审批流需要配置允许撤回单据）。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/flow/data/$PQIbuN0nmYc800/retract?accessToken=cWEbn1cA0kjU00'
```

## 成功响应
```json
{
    "value":"",
    "type":-1,
    "flow":{
        "version":1,
        "active":true,
        "createTime":1562862829309,
        "updateTime":1562862829309,
        "corporationId":"dNU9lELfXs0g00",
        "form":{
            "title":"api 测试加急",
            "submitterId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
            "expenseDate":1562036472205,
            "details":[
                {
                    "feeTypeId":"dNU9lELfXs0g00:office",
                    "specificationId":"dNU9lELfXs0g00:office:expense:2b43fb500eedb",
                    "feeTypeForm":{
                        "invoiceForm":{
                            "type":"noWrite",
                            "attachments":[

                            ]
                        },
                        "amount":{
                            "standard":"500.00",
                            "standardNumCode":"156",
                            "standardScale":2,
                            "standardStrCode":"CNY",
                            "standardSymbol":"¥",
                            "standardUnit":"元"
                        },
                        "detailId":"swo9pY7cXo1g00"
                    }
                }
            ],
            "specificationId":"Ys49lCDmlgbc00:6ad521a290e74c85",
            "writtenOffMoney":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "payMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "companyRealPay":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "expenseMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "code":"B19000017",
            "submitDate":1562862829291
        },
        "ownerId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
        "ownerDefaultDepartment":"dNU9lELfXs0g00",
        "state":"draft",
        "flowType":"freeflow",
        "formType":"expense",
        "logs":[

        ],
        "actions":{
            "dNU9lELfXs0g00:97Y9lCBulQ4M00":[
                "freeflow.delete",
                "freeflow.edit",
                "freeflow.submit"
            ]
        },
        "id":"DQ09pY7cXo1400"
    }
}
```

## 失败响应
```json
{
    "errorCode": 403,
    "errorMessage": "您没有权限执行此操作。可能是由于：\n1、单据已被撤回或驳回。\n2、单据当前所处审批环节根据流程配置，不允许撤回。",//或者检查单据是否已提交
    "errorDetails": null,
    "code": null,
    "data": null
}
```