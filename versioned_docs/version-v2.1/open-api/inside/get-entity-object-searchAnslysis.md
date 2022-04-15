# 获取业务对象实例信息(自定义字段)
根据业务对象实例的 **自定义字段** 查询对应数据。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/searchAnslysis/`entityId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **entityId** | String | 业务对象ID | 必填 | - | [获取业务对象](/docs/open-api/datalink/get-entity-list) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **fileds**             | Array  | 自定义字段数组 | 非必填 | - | 自定义字段数组 |
| **&emsp; ∟ key**      | String | 自定义字段名称 | 非必填 | - | 可通过 [获取业务对象](/docs/open-api/datalink/get-entity-list) 响应中 `items.fields.name` 获取<br/>目前只支持 **文本**、**数字**、**日期** 类型字段使用，支持 `id` 参数<br/>多个参数取交集查询 |
| **&emsp; ∟ value**    | String或<br/>Number | 查询参数 | 非必填 | - | 文本、数字类型传 **String**<br/>日期（转化为毫秒级时间戳）传 **Number** |
| **&emsp; ∟ operator** | String | 过滤条件 | 非必填 | = | `>、>=、<、<=、=、<>` |
| **index**              | Number | 开始索引 | 必填 | - | 从 `1` 开始，不可为 `0` |
| **count**              | Number | 查询数   | 必填 | - | 每页查询数据量，最大不能超过 `100` |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/searchAnslysis/fa0e76842feec54b3400?accessToken=ID_3Dqicr_0TSw:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "fileds":[     //自定义字段
        {
            "key":"E_fa0e76842feec54b3400_code",
            "value":"B2204-12001",
            "operator":"="
        }
    ],
    "index":1,
    "count":10
}'
```

## 成功响应
```json
{
    "count": 1,    //业务对象数量
    "items": [     //业务对象信息
        {
            "id": "ID_3Dq4b$X6VPg",  //业务对象实例ID
            "masterId": "",
            "useCount": 0,
            "totalCount": 0,
            "ownerId": null,         //负责人信息
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_fa0e76842feec54b3400_code": "B2204-12001",
            "E_fa0e76842feec54b3400_name": "测试1",
            "E_fa0e76842feec54b3400_人员": {
                "pipeline": 1,
                "grayver": "9.10.0.0:A",
                "version": 2,
                "active": true,
                "createTime": 1641969354941,
                "updateTime": 1645688797296,
                "nameSpell": "FENGJICHENG",
                "code": "9458",
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "userId": "ID_3lokDfb1p5w",
                "id": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
                "name": "冯继成",
                "avatar": "",
                "email": "ddd@163.com",
                "cellphone": "17600109458",
                "note": null,
                "fromWay": "manual",
                "departments": [
                    "bwa3wajigF0WH0"
                ],
                "defaultDepartment": "bwa3wajigF0WH0",
                "external": false,
                "useNewAccount": false,
                "order": null,
                "staffCustomForm": {
                    "defaultDepartment.form.costCenter": "",
                    "defaultDepartment.form.legalEntity": ""
                },
                "externalDepartments": null,
                "externalDefaultDepartment": null
            },
            "E_fa0e76842feec54b3400_城市": "[{\"key\":\"2\",\"label\":\"北京市区\"}]",
            "E_fa0e76842feec54b3400_开关": true,
            "E_fa0e76842feec54b3400_数字": "412",
            "E_fa0e76842feec54b3400_日期": 1649692800000,
            "E_fa0e76842feec54b3400_枚举": {
                "pipeline": 1,
                "grayver": "",
                "id": "YZ",
                "version": 1,
                "active": true,
                "createTime": 1649758515043,
                "updateTime": 1649758515043,
                "name": "硬座",
                "nameSpell": "YINGZUO",
                "code": "YZ",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "parentId": "",
                "enumCode": "TrainSeatType",
                "required": true,
                "orders": 1,
                "enName": "Hard Seat",
                "jpName": "Hard Seat"
            },
            "E_fa0e76842feec54b3400_部门": {
                "pipeline": 1,
                "grayver": "9.16.0.0:A",
                "version": 4,
                "active": true,
                "createTime": 1642750157951,
                "updateTime": 1647936461179,
                "name": "部门3",
                "nameSpell": "BUMEN1-1",
                "code": "BM003",
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "parentId": "bwa3wajigF0WH0",
                "order": 3,
                "fromWay": "manual",
                "id": "bwa3wajigF0WH0:ID_3wUvB7G2d3w",
                "form": {
                    "costCenter": "ID_3wajigF11H0"
                },
                "frozen": false,
                "leaf": true,
                "permissions": [
                    {
                        "name": "ALL",
                        "auth": true
                    }
                ],
                "belong": {
                    "name": null,
                    "auth": null
                }
            },
            "E_fa0e76842feec54b3400_金额": {
                "standard": "412",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_fa0e76842feec54b3400_附件": [
                {
                    "fileId": "ID_3Dq4b$X6RPg",
                    "fileName": "发票.jpg",
                    "hash": "FjW-prEUmBBlK2fbH7PMfTj4qN6r",
                    "id": "ID_3Dq4b$X6RPg",
                    "key": "发票-1649750703345-208.jpg",
                    "thumbUrl": "",
                    "url": "https://vipimg.ekuaibao.com/%E5%8F%91%E7%A5%A8-1649750703345-208.jpg?e=1649844915&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:99zNRbTBRlOMvCL8XIXJj3vJtL4="
                }
            ],
            "E_fa0e76842feec54b3400_文本1": "文本1",
            "E_fa0e76842feec54b3400_文本2": "文本2",
            "E_fa0e76842feec54b3400_业务对象": {
                "data": {
                    "dataLink": {
                        "id": "ID_3BPNpAnfMGw",
                        "masterId": "",
                        "useCount": 0,
                        "totalCount": 0,
                        "ownerId": null,
                        "visibility": {
                            "fullVisible": true,
                            "departmentsIncludeChildren": true,
                            "staff": [],
                            "department": [],
                            "role": []
                        },
                        "E_b90e5b6ef5e7c0718800_code": "111",
                        "E_b90e5b6ef5e7c0718800_name": "111",
                        "active": true,
                        "entityId": "b90e5b6ef5e7c0718800",
                        "entity": {
                            "pipeline": 1,
                            "grayver": "9.20.0.0:A",
                            "version": 8,
                            "active": true,
                            "createTime": 1647934475520,
                            "updateTime": 1649409108645,
                            "name": "测试业务对象1",
                            "nameSpell": "CESHIYEWUDUIXIANG1",
                            "corporationId": "bwa3wajigF0WH0",
                            "sourceCorporationId": null,
                            "dataCorporationId": null,
                            "ledgerIds": null,
                            "plannedIds": null,
                            "parentId": "",
                            "code": "",
                            "scoped": false,
                            "multiCurrencyFlag": false,
                            "importOverrideStrategy": null,
                            "visibility": {
                                "fullVisible": false,
                                "staffs": [],
                                "roles": [],
                                "departments": [],
                                "departmentsIncludeChildren": true
                            },
                            "type": "DIMENSION",
                            "disableStrategy": "MANUAL_ADMIN",
                            "maxUsageCount": 0,
                            "writtenOffField": null,
                            "fields": [
                                {
                                    "name": "E_b90e5b6ef5e7c0718800_name",
                                    "label": "name",
                                    "type": "text",
                                    "source": "dataLink",
                                    "optional": false,
                                    "defaultValue": null,
                                    "formula": false,
                                    "index": true,
                                    "systemField": false,
                                    "calculation": {
                                        "dependencies": [],
                                        "dependenciesBy": [],
                                        "order": 5
                                    }
                                },
                                {
                                    "name": "E_b90e5b6ef5e7c0718800_code",
                                    "label": "code",
                                    "type": "text",
                                    "source": "dataLink",
                                    "optional": false,
                                    "defaultValue": null,
                                    "formula": false,
                                    "index": true,
                                    "systemField": false,
                                    "calculation": {
                                        "dependencies": [],
                                        "dependenciesBy": [],
                                        "order": 4
                                    }
                                },
                                {
                                    "name": "E_b90e5b6ef5e7c0718800_链接",
                                    "label": "链接",
                                    "type": "text",
                                    "source": "dataLink",
                                    "optional": false,
                                    "defaultValue": null,
                                    "formula": false,
                                    "index": false,
                                    "systemField": false,
                                    "calculation": {
                                        "dependencies": [],
                                        "dependenciesBy": [],
                                        "order": 3
                                    }
                                },
                                {
                                    "name": "E_b90e5b6ef5e7c0718800_数字",
                                    "label": "数字",
                                    "type": "number",
                                    "source": "dataLink",
                                    "optional": false,
                                    "defaultValue": null,
                                    "formula": false,
                                    "index": false,
                                    "systemField": false,
                                    "calculation": {
                                        "dependencies": [],
                                        "dependenciesBy": [],
                                        "order": 2
                                    },
                                    "scale": 0,
                                    "unit": ""
                                },
                                {
                                    "name": "E_b90e5b6ef5e7c0718800_金额",
                                    "label": "金额",
                                    "type": "money",
                                    "source": "dataLink",
                                    "optional": false,
                                    "defaultValue": null,
                                    "formula": false,
                                    "index": false,
                                    "systemField": false,
                                    "calculation": {
                                        "dependencies": [],
                                        "dependenciesBy": [],
                                        "order": 1
                                    }
                                },
                                {
                                    "name": "E_b90e5b6ef5e7c0718800_非必填",
                                    "label": "非必填",
                                    "type": "text",
                                    "source": "dataLink",
                                    "optional": true,
                                    "defaultValue": null,
                                    "formula": false,
                                    "index": false,
                                    "systemField": false,
                                    "calculation": {
                                        "dependencies": [],
                                        "dependenciesBy": [],
                                        "order": 0
                                    }
                                }
                            ],
                            "defaultMappingRuleId": null,
                            "filterId": null,
                            "id": "b90e5b6ef5e7c0718800",
                            "platformId": "ID_3BJKZuv0qow",
                            "details": null,
                            "homePageVisibleIds": null,
                            "homeVisibility": {
                                "fullVisible": false,
                                "staffs": [
                                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                                ],
                                "roles": [],
                                "departments": [],
                                "departmentsIncludeChildren": true
                            },
                            "exportVisibility": {
                                "fullVisible": false,
                                "staffs": [],
                                "roles": [],
                                "departments": [],
                                "departmentsIncludeChildren": true
                            },
                            "ownerDepts": false,
                            "showOnPage": true,
                            "importMethod": [
                                "excel",
                                "api",
                                "flow",
                                "directly"
                            ],
                            "allowRecordLog": false,
                            "logFields": [],
                            "showBook": false,
                            "allowAddSubType": true,
                            "dataFilter": false
                        }
                    },
                    "ledger": {},
                    "planned": {},
                    "ledgers": [],
                    "source": "MANUAL",
                    "sourceId": "",
                    "plans": []
                },
                "template": {
                    "pipeline": 1,
                    "grayver": "9.16.0.0:A",
                    "id": "ID_3BJKZuv0tow",
                    "version": 1,
                    "active": true,
                    "createTime": 1647934475673,
                    "updateTime": 1647934475673,
                    "nameSpell": "",
                    "code": "",
                    "corporationId": "bwa3wajigF0WH0",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "name": "",
                    "type": "CARD",
                    "visibility": {
                        "fullVisible": true,
                        "staffs": [],
                        "roles": [],
                        "departments": [],
                        "departmentsIncludeChildren": true
                    },
                    "entityId": "b90e5b6ef5e7c0718800",
                    "content": {
                        "type": "CARD",
                        "title": {
                            "fields": [
                                {
                                    "name": "E_b90e5b6ef5e7c0718800_name",
                                    "label": "name",
                                    "type": "text",
                                    "source": "dataLink",
                                    "optional": false,
                                    "defaultValue": null,
                                    "formula": false,
                                    "index": true,
                                    "systemField": false,
                                    "calculation": {
                                        "dependencies": [],
                                        "dependenciesBy": [],
                                        "order": 1
                                    }
                                }
                            ]
                        },
                        "description": {
                            "fields": [
                                {
                                    "name": "E_b90e5b6ef5e7c0718800_code",
                                    "label": "code",
                                    "type": "text",
                                    "source": "dataLink",
                                    "optional": false,
                                    "defaultValue": null,
                                    "formula": false,
                                    "index": true,
                                    "systemField": false,
                                    "calculation": {
                                        "dependencies": [],
                                        "dependenciesBy": [],
                                        "order": 0
                                    }
                                }
                            ]
                        },
                        "overview": [],
                        "expansion": {
                            "title": {
                                "fields": [
                                    {
                                        "name": "E_b90e5b6ef5e7c0718800_name",
                                        "label": "name",
                                        "type": "text",
                                        "source": "dataLink",
                                        "optional": false,
                                        "defaultValue": null,
                                        "formula": false,
                                        "index": true,
                                        "systemField": false,
                                        "calculation": {
                                            "dependencies": [],
                                            "dependenciesBy": [],
                                            "order": 1
                                        }
                                    }
                                ]
                            },
                            "description": {
                                "fields": [
                                    {
                                        "name": "E_b90e5b6ef5e7c0718800_code",
                                        "label": "code",
                                        "type": "text",
                                        "source": "dataLink",
                                        "optional": false,
                                        "defaultValue": null,
                                        "formula": false,
                                        "index": true,
                                        "systemField": false,
                                        "calculation": {
                                            "dependencies": [],
                                            "dependenciesBy": [],
                                            "order": 0
                                        }
                                    }
                                ]
                            },
                            "overview": []
                        }
                    }
                },
                "path": {
                    "entityId": "entityId",
                    "E_b90e5b6ef5e7c0718800_name": "form.E_b90e5b6ef5e7c0718800_name",
                    "E_b90e5b6ef5e7c0718800_code": "form.E_b90e5b6ef5e7c0718800_code",
                    "E_b90e5b6ef5e7c0718800_链接": "form.E_b90e5b6ef5e7c0718800_链接",
                    "E_b90e5b6ef5e7c0718800_数字": "form.E_b90e5b6ef5e7c0718800_数字",
                    "E_b90e5b6ef5e7c0718800_金额": "form.E_b90e5b6ef5e7c0718800_金额",
                    "E_b90e5b6ef5e7c0718800_非必填": "form.E_b90e5b6ef5e7c0718800_非必填",
                    "ownerId": "ownerId",
                    "visibility": "visibility",
                    "active": "active",
                    "useCount": "useCount"
                }
            },
            "E_fa0e76842feec54b3400_人员多选": [
                {
                    "pipeline": 1,
                    "grayver": "9.8.0.0:A",
                    "version": 2,
                    "active": true,
                    "createTime": 1642406468670,
                    "updateTime": 1642414087747,
                    "nameSpell": "NEIBU1",
                    "code": "1001",
                    "corporationId": "bwa3wajigF0WH0",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "userId": "qKZ3wlg6bv9OGg",
                    "id": "bwa3wajigF0WH0:qKZ3wlg6bv9OGg",
                    "name": "内部1-修改",
                    "avatar": null,
                    "email": "",
                    "cellphone": "",
                    "note": null,
                    "fromWay": "api",
                    "departments": [
                        "bwa3wajigF0WH0"
                    ],
                    "defaultDepartment": "bwa3wajigF0WH0",
                    "external": false,
                    "useNewAccount": false,
                    "order": null,
                    "staffCustomForm": {
                        "defaultDepartment.form.costCenter": "",
                        "defaultDepartment.form.legalEntity": ""
                    },
                    "externalDepartments": null,
                    "externalDefaultDepartment": null
                },
                {
                    "pipeline": 1,
                    "grayver": "9.14.0.0:A",
                    "version": 7,
                    "active": true,
                    "createTime": 1642406490031,
                    "updateTime": 1647249459280,
                    "nameSpell": "NEIBU2",
                    "code": "1002",
                    "corporationId": "bwa3wajigF0WH0",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "userId": "IqQ3wlg6bv9QGg",
                    "id": "bwa3wajigF0WH0:IqQ3wlg6bv9QGg",
                    "name": "内部2",
                    "avatar": null,
                    "email": "youxiang@123.com",
                    "cellphone": "18811110002",
                    "note": null,
                    "fromWay": "createByApiAndEdit",
                    "departments": [
                        "bwa3wajigF0WH0"
                    ],
                    "defaultDepartment": "bwa3wajigF0WH0",
                    "external": false,
                    "useNewAccount": false,
                    "order": null,
                    "staffCustomForm": {
                        "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",
                        "defaultDepartment.form.costCenter": "",
                        "defaultDepartment.form.legalEntity": ""
                    },
                    "externalDepartments": null,
                    "externalDefaultDepartment": null
                }
            ],
            "E_fa0e76842feec54b3400_收款信息": {
                "pipeline": 1,
                "grayver": "9.8.0.0:A",
                "version": 1,
                "active": true,
                "createTime": 1642402952115,
                "updateTime": 1642402952115,
                "nameSpell": "FENGJICHENG",
                "code": "",
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "id": "ID_3wlg6bv4TGg",
                "name": "冯继成",
                "type": "PERSONAL",
                "owner": "INDIVIDUAL",
                "cardNo": "1",
                "logs": [
                    {
                        "action": "CREATE",
                        "operatorId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
                        "time": 1642402952114,
                        "attributes": null
                    }
                ],
                "sort": "BANK",
                "remark": null,
                "staffId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "branch": "北京银行",
                "icon": "https://images.ekuaibao.com/bank/bank-other.svg",
                "bank": "",
                "province": "",
                "city": "",
                "certificateType": null,
                "certificateNo": null,
                "bankLinkNo": "313100000013",
                "unionIcon": "https://images.ekuaibao.com/bank/bank-other.svg",
                "unionBank": null,
                "extensions": null
            },
            "E_fa0e76842feec54b3400_日期范围": {
                "end": 1649692800000,
                "start": 1649606400000
            },
            "E_fa0e76842feec54b3400_自动编号": "S22-001",
            "E_fa0e76842feec54b3400_自动计算": {
                "standard": "169744.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_fa0e76842feec54b3400_自定义档案": {
                "pipeline": 1,
                "grayver": "9.16.0.0:A",
                "version": 2,
                "active": true,
                "createTime": 1646104104155,
                "updateTime": 1647328381487,
                "name": "项目2-1",
                "nameSpell": "YAYAYAYA",
                "code": "CODE1",
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "parentId": "",
                "id": "ID_3zYtLIa21gM",
                "dimensionId": "bwa3wajigF0WH0:项目2",
                "orders": 1646104104155,
                "visibility": {
                    "fullVisible": true,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "payAccountIds": [],
                "form": {
                    "postType": "",
                    "rankType": "",
                    "projectBase": "",
                    "projectType": "",
                    "baseCurrencyId": "",
                    "projectManager": "",
                    "projectInspector": ""
                },
                "sourceCorpId": null,
                "taxpayerType": null,
                "permissions": [
                    {
                        "name": "ALL",
                        "auth": true
                    }
                ],
                "leaf": true
            },
            "E_fa0e76842feec54b3400_业务对象多选": [],
            "active": true,
            "entityId": "fa0e76842feec54b3400",
            "entity": {
                "pipeline": 1,
                "grayver": "9.20.0.0:A",
                "version": 4,
                "active": true,
                "createTime": 1649749917747,
                "updateTime": 1649749933713,
                "name": "业务对象全部字段",
                "nameSpell": "YEWUDUIXIANGQUANBUZIDUAN",
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "multiCurrencyFlag": false,
                "importOverrideStrategy": {
                    "api": "CODE_DUPLI_OVERRIDE",
                    "excel": "CODE_DUPLI_OVERRIDE"
                },
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "MANUAL_ADMIN",
                "maxUsageCount": 0,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_fa0e76842feec54b3400_name",
                        "label": "name",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 20
                        }
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_code",
                        "label": "code",
                        "type": "autoNumber",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 19
                        },
                        "rule": "B{YY}{MM}-{DD}{000}"
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_文本1",
                        "label": "文本1",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 18
                        }
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_文本2",
                        "label": "文本2",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 17
                        }
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_自动编号",
                        "label": "自动编号",
                        "type": "autoNumber",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 16
                        },
                        "rule": "S{YY}-{000}"
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_日期",
                        "label": "日期",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 15
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_日期范围",
                        "label": "日期范围",
                        "type": "dateRange",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 14
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_数字",
                        "label": "数字",
                        "type": "number",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [
                                "自动计算"
                            ],
                            "order": 1
                        },
                        "scale": 0,
                        "unit": ""
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [
                                "自动计算"
                            ],
                            "order": 0
                        }
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_开关",
                        "label": "开关",
                        "type": "switcher",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 13
                        }
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_收款信息",
                        "label": "收款信息",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 12
                        },
                        "entity": "pay.PayeeInfo"
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_业务对象",
                        "label": "业务对象",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 11
                        },
                        "entity": "datalink.DataLinkEntity.b90e5b6ef5e7c0718800"
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_业务对象多选",
                        "label": "业务对象多选",
                        "type": "list",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 10
                        },
                        "elemType": {
                            "type": "ref",
                            "entity": "datalink.DataLinkEntity.d00e7578097c817ab800"
                        }
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_自定义档案",
                        "label": "自定义档案",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 9
                        },
                        "entity": "basedata.Dimension.项目2"
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_城市",
                        "label": "城市",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 8
                        },
                        "entity": "basedata.city"
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_枚举",
                        "label": "枚举",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 7
                        },
                        "entity": "basedata.Enum.TrainSeatType"
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_部门",
                        "label": "部门",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 6
                        },
                        "entity": "organization.Department"
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_人员",
                        "label": "人员",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 5
                        },
                        "entity": "organization.Staff"
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_人员多选",
                        "label": "人员多选",
                        "type": "list",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 4
                        },
                        "elemType": {
                            "type": "ref",
                            "entity": "organization.Staff"
                        }
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_自动计算",
                        "label": "自动计算",
                        "type": "money",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": "`$数字` * `$金额`.本位币",
                        "formula": true,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [
                                "数字",
                                "金额"
                            ],
                            "dependenciesBy": [],
                            "order": 3
                        }
                    },
                    {
                        "name": "E_fa0e76842feec54b3400_附件",
                        "label": "附件",
                        "type": "list",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 2
                        },
                        "elemType": {
                            "type": "attachment"
                        }
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "fa0e76842feec54b3400",
                "platformId": "ID_3BJKZuv0qow",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [
                        "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                    ],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [
                    "excel",
                    "api",
                    "flow",
                    "directly"
                ],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": []
        }
    ]
}
```

## 失败响应
请保证 `entityId`（业务对象ID）参数正确无误，否则报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "未找到对应的业务对象",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `index`（开始索引）等于 `0` 时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "当前页不能为0",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `count`（查询数）大于 `100` 时，报错如下： 
```json
{
    "errorCode": 412,
    "errorMessage": "超过单次最大查询数量100",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
