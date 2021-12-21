# 获取发票明细信息

{% httpverb "post" %}  /api/openapi/v2/extension/INVOICE/object/invoice/`invoiceId`/detail {% endhttpverb %}

#### Path Parameters:

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **invoiceId** | String | 发票ID | 必填 | - | 可以通过[获取单据详情](/flows/get-forms-details.md)接口<br>或[根据单据编号或单据ID查询发票和其明细ID](/datalink/get-flow-invoice.md)接口获取 |

#### Query Parameters:

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/getting-started/auth.html) |

<br/>

#### CURL:
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v2/extension/INVOICE/object/invoice/0aM9AbvdhI0400:011001900111:07517347/detail?accessToken=w3UbyyG1Xsfc00'
```
<br/>

#### 成功响应:
```json
{
    "items": [
        {
            "id": "KzUbgEI4j4jI00",
            "masterId": "0aM9AbvdhI0400:011001900111:07517347",
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_system_发票明细_code": "KzUbgEI4j4jI00",
            "E_system_发票明细_name": "*餐饮服务*餐费",
            "E_system_发票明细_单价": null,
            "E_system_发票明细_数量": "",
            "E_system_发票明细_税率": "3%",
            "E_system_发票明细_税额": {
                "standard": "13.17",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票明细_金额": {
                "standard": "438.83",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "active": false,
            "entityId": "system_发票明细",
            "entity": {
                "version": 2,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "发票明细",
                "nameSpell": "FAPIAOZHUTI",
                "code": "",
                "corporationId": "",
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "scoped": false,
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_发票明细_name",
                        "label": "名称",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票明细_code",
                        "label": "编码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票明细_税率",
                        "label": "税率",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票明细_单价",
                        "label": "单价",
                        "type": "money",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票明细_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票明细_税额",
                        "label": "税额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票明细_数量",
                        "label": "数量",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票明细_车牌号",
                        "label": "车牌号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票明细_类型",
                        "label": "类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票明细_通行日期起",
                        "label": "通行日期起",
                        "type": "date",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_发票明细_通行日期止",
                        "label": "通行日期止",
                        "type": "date",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_发票明细",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": null,
                    "roles": null,
                    "departments": null,
                    "departmentsIncludeChildren": true
                },
                "showOnPage": true,
                "importMethod": [
                    "excel",
                    "api"
                ],
                "allowRecordLog": false,
                "logFields": [],
                "allowAddSubType": true
            }
        }
    ]
}
```

#### 失败响应:
当`invoiceId`发票ID传值错误时，返回为空：
```json
{
    "items": []
}
```

