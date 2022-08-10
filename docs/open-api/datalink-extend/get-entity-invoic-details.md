# 获取发票明细信息

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/INVOICE/object/invoice/`invoiceId`/detail"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **invoiceId** | String | 发票ID | 必填 | - | 通过 [根据单据编号或ID查询发票ID和明细ID](/docs/open-api/datalink-extend/get-flow-invoice)<br/>或 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/INVOICE/object/invoice/0aM9AbvdhI0400:011001900111:07517347/detail?accessToken=w3UbyyG1Xsfc00'
```

## 成功响应
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
            "active": false,  //发票明细是否已使用 true：未使用（爱发票、微信卡包、支付宝卡包） false：已使用（绑定了单据或者随手记）
            "entityId": "system_发票明细",
            "entity": {
                "version": 2,
                "active": true,  //表示发票明细所保存在的那个业务对象的停启用状态  true：启用  false：停用
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

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | "items": [] | 返回空表示没有查询到实例数据，请确认 `invoiceId`（发票ID）是否正确 | 


