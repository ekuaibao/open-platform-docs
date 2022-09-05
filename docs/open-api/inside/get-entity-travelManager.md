# 获取【行程管理/订单管理】业务对象数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/TRAVEL_MANAGEMENT/object/`objectId`/search"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **objectId** | String | 业务对象ID | 必填 | - | 行程管理/订单管理的业务对象ID |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids**   | Array  | 业务对象实例ID数组   | 非必填 | - | 按照业务对象实例的ID查询详情 |
| **codes** | Array  | 业务对象实例CODE数组 | 非必填 | - | 按照业务对象实例的CODE查询详情，例如：订单号 |
| **index** | Number | 查询页数           | 非必填 | - | 从 `1` 开始，不可为 `0`<br/>**表示从第几页开始查询** |
| **count** | Number | 查询数             | 非必填 | - | 每页查询数据量，最大不能超过 `100` |

:::caution
- 参数优先级 `ids` > `codes` > `index` 和 `count` ，多组参数均传值时，按优先级最高的开始生效。
- `ids` 、 `codes` 参数，可以为空：`[]`，但是不可传 `[null]`，否则会报错。
- `ids` 、 `codes` 参数，接口没有校验参数是否在系统中存在，获取不到数据时，请检查参数的准确性。
- `ids` 、 `codes` 不填时， `index` 和 `count` 两个参数必填，只要传了 `index` 和 `count` 参数，成功响应中的 **“count”** 表示总数。
- `index` 和 `count` 不填时， `ids` 或 `codes` 参数必填，任意填写其一时，成功响应中的 **“count”** 表示有效参数量，而非总数。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/TRAVEL_MANAGEMENT/object/29230ca0582216179c00/search?accessToken=ID01iL31eOfNOD:kKQcE4iHnlT000' \
--header 'Content-Type: application/json' \
--data-raw '{
    "index":1,
    "count":100,
    "ids":[],
    "codes":["1125915750055953"] 
}'
```

## 成功响应
```json
{
    "count": 43898,
    "items": [
        {
            "id": "ID_3K8tHx81nvL",
            "masterId": "",
            "topDate": 0,
            "useCount": 1,
            "totalCount": 1,
            "ownerId": {
                "pipeline": 1,
                "grayver": "9.41.0.0 prd",
                "version": 2,
                "active": true,
                "createTime": 1623612391655,
                "updateTime": 1656996032382,
                "nameSpell": "YULINLING",
                "code": "2410",
                "corporationId": "kKQcE4iHnlT000",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "userId": "ID_3f3WCA9p2bk",
                "id": "kKQcE4iHnlT000:ID_3f3WCA9p34I",
                "name": "俞林玲",
                "avatar": null,
                "nickName": null,
                "email": "2410@dbappsecurity.com.cn",
                "showEmail": null,
                "cellphone": "18868973748",
                "globalRoaming": null,
                "note": null,
                "fromWay": "api",
                "departments": [
                    "kKQcE4iHnlT000:ID_3f3WCA9lC04"
                ],
                "defaultDepartment": "kKQcE4iHnlT000:ID_3f3WCA9lC04",
                "external": false,
                "useNewAccount": false,
                "authState": true,
                "ignoreAutoAuth": false,
                "order": null,
                "staffCustomForm": null,
                "externalDepartments": null,
                "externalDefaultDepartment": null,
                "edited": true
            },
            "visibility": {
                "fullVisible": false,
                "departmentsIncludeChildren": false,
                "staff": [
                    {
                        "pipeline": 1,
                        "grayver": "9.41.0.0 prd",
                        "version": 2,
                        "active": true,
                        "createTime": 1623612391655,
                        "updateTime": 1656996032382,
                        "nameSpell": "YULINLING",
                        "code": "2410",
                        "corporationId": "kKQcE4iHnlT000",
                        "sourceCorporationId": null,
                        "dataCorporationId": null,
                        "userId": "ID_3f3WCA9p2bk",
                        "id": "kKQcE4iHnlT000:ID_3f3WCA9p34I",
                        "name": "俞林玲",
                        "avatar": null,
                        "nickName": null,
                        "email": "2410@dbappsecurity.com.cn",
                        "showEmail": null,
                        "cellphone": "18868973748",
                        "globalRoaming": null,
                        "note": null,
                        "fromWay": "api",
                        "departments": [
                            "kKQcE4iHnlT000:ID_3f3WCA9lC04"
                        ],
                        "defaultDepartment": "kKQcE4iHnlT000:ID_3f3WCA9lC04",
                        "external": false,
                        "useNewAccount": false,
                        "authState": true,
                        "ignoreAutoAuth": false,
                        "order": null,
                        "staffCustomForm": null,
                        "externalDepartments": null,
                        "externalDefaultDepartment": null,
                        "edited": true
                    }
                ],
                "department": [],
                "role": []
            },
            "E_88d10ca0582216164c00_code": "1125915750055953",
            "E_88d10ca0582216164c00_name": "安恒大厦--万科金辰之光-北1门",
            "E_88d10ca0582216164c00_折扣": "",
            "E_88d10ca0582216164c00_票号": "",
            "E_88d10ca0582216164c00_车型": "普通快车",
            "E_88d10ca0582216164c00_保险费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_88d10ca0582216164c00_出发地": "[{\"key\":\"1000\",\"label\":\"杭州市区\"}]",
            "E_88d10ca0582216164c00_出行人": [
                {
                    "pipeline": 1,
                    "grayver": "9.41.0.0 prd",
                    "version": 2,
                    "active": true,
                    "createTime": 1623612391655,
                    "updateTime": 1656996032382,
                    "nameSpell": "YULINLING",
                    "code": "2410",
                    "corporationId": "kKQcE4iHnlT000",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "userId": "ID_3f3WCA9p2bk",
                    "id": "kKQcE4iHnlT000:ID_3f3WCA9p34I",
                    "name": "俞林玲",
                    "avatar": null,
                    "nickName": null,
                    "email": "2410@dbappsecurity.com.cn",
                    "showEmail": null,
                    "cellphone": "18868973748",
                    "globalRoaming": null,
                    "note": null,
                    "fromWay": "api",
                    "departments": [
                        "kKQcE4iHnlT000:ID_3f3WCA9lC04"
                    ],
                    "defaultDepartment": "kKQcE4iHnlT000:ID_3f3WCA9lC04",
                    "external": false,
                    "useNewAccount": false,
                    "authState": true,
                    "ignoreAutoAuth": false,
                    "order": null,
                    "staffCustomForm": null,
                    "externalDepartments": null,
                    "externalDefaultDepartment": null,
                    "edited": true
                }
            ],
            "E_88d10ca0582216164c00_到达地": "[{\"key\":\"1000\",\"label\":\"杭州市区\"}]",
            "E_88d10ca0582216164c00_机建费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_88d10ca0582216164c00_票面价": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_88d10ca0582216164c00_订单号": "1125915750055953",
            "E_88d10ca0582216164c00_订票人": {
                "pipeline": 1,
                "grayver": "9.41.0.0 prd",
                "version": 2,
                "active": true,
                "createTime": 1623612391655,
                "updateTime": 1656996032382,
                "nameSpell": "YULINLING",
                "code": "2410",
                "corporationId": "kKQcE4iHnlT000",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "userId": "ID_3f3WCA9p2bk",
                "id": "kKQcE4iHnlT000:ID_3f3WCA9p34I",
                "name": "俞林玲",
                "avatar": null,
                "nickName": null,
                "email": "2410@dbappsecurity.com.cn",
                "showEmail": null,
                "cellphone": "18868973748",
                "globalRoaming": null,
                "note": null,
                "fromWay": "api",
                "departments": [
                    "kKQcE4iHnlT000:ID_3f3WCA9lC04"
                ],
                "defaultDepartment": "kKQcE4iHnlT000:ID_3f3WCA9lC04",
                "external": false,
                "useNewAccount": false,
                "authState": true,
                "ignoreAutoAuth": false,
                "order": null,
                "staffCustomForm": null,
                "externalDepartments": null,
                "externalDefaultDepartment": null,
                "edited": true
            },
            "E_88d10ca0582216164c00_车牌号": "",
            "E_88d10ca0582216164c00_退票费": null,
            "E_88d10ca0582216164c00_个人支付": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_88d10ca0582216164c00_企业支付": {
                "standard": "15.96",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_88d10ca0582216164c00_关联行程": null,
            "E_88d10ca0582216164c00_出发时间": 1656935051000,
            "E_88d10ca0582216164c00_出行类型": "-",
            "E_88d10ca0582216164c00_到达时间": 1656935742000,
            "E_88d10ca0582216164c00_成交净价": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_88d10ca0582216164c00_报销状态": "已报销",
            "E_88d10ca0582216164c00_支付方式": "企业支付",
            "E_88d10ca0582216164c00_是否超标": "",
            "E_88d10ca0582216164c00_火车坐席": "",
            "E_88d10ca0582216164c00_航班舱型": "",
            "E_88d10ca0582216164c00_订单备注": "",
            "E_88d10ca0582216164c00_订单日期": 1656935766000,
            "E_88d10ca0582216164c00_订单状态": "已支付",
            "E_88d10ca0582216164c00_订单类型": "已支付",
            "E_88d10ca0582216164c00_订单金额": {
                "standard": "15.96",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_88d10ca0582216164c00_订票平台": "滴滴企业版",
            "E_88d10ca0582216164c00_证件信息": "",
            "E_88d10ca0582216164c00_证件类型": "",
            "E_88d10ca0582216164c00_超标原因": "",
            "E_88d10ca0582216164c00_酒店星级": "",
            "E_88d10ca0582216164c00_预定金额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_88d10ca0582216164c00_出行人类型": "内部",
            "E_88d10ca0582216164c00_前收服务费": null,
            "E_88d10ca0582216164c00_后收手续费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_88d10ca0582216164c00_后收服务费": null,
            "E_88d10ca0582216164c00_实际出发地": "",
            "E_88d10ca0582216164c00_实际到达地": "",
            "E_88d10ca0582216164c00_改签服务费": null,
            "E_88d10ca0582216164c00_燃油附加费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_88d10ca0582216164c00_申请单编号": "",
            "E_88d10ca0582216164c00_退票服务费": null,
            "E_88d10ca0582216164c00_预定服务费": null,
            "E_88d10ca0582216164c00_实际出发地点": "中国农业银行(杭州月明路支行)附近",
            "E_88d10ca0582216164c00_实际到达地点": "万科·金辰之光-东门",
            "E_88d10ca0582216164c00_用车出行方式": "实时",
            "E_88d10ca0582216164c00_优惠券抵扣金额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "active": false,
            "updateTime": 1661912724790,
            "createTime": 1656970204959,
            "entityId": "29230ca0582216179c00",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "9.28.0.0:A",
                "version": 8,
                "active": true,
                "createTime": 1618196442739,
                "updateTime": 1634572940972,
                "name": "用车",
                "nameSpell": "YONGCHE",
                "corporationId": "kKQcE4iHnlT000",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "88d10ca0582216164c00",
                "code": "",
                "scoped": true,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "type": "DEFAULT",
                        "context": null,
                        "active": true
                    },
                    {
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "type": "DEFAULT",
                        "context": null,
                        "active": true
                    },
                    {
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "type": "DEFAULT",
                        "context": null,
                        "active": true
                    },
                    {
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "type": "DEFAULT",
                        "context": null,
                        "active": true
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": false
                },
                "type": "TAXI",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_88d10ca0582216164c00_实际出发地",
                        "label": "实际出发地",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 72
                        },
                        "entity": "basedata.city"
                    },
                    {
                        "name": "E_88d10ca0582216164c00_实际到达地",
                        "label": "实际到达地",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 72
                        },
                        "entity": "basedata.city"
                    },
                    {
                        "name": "E_88d10ca0582216164c00_实际住宿地",
                        "label": "实际住宿地",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 73
                        },
                        "entity": "basedata.city"
                    },
                    {
                        "name": "E_88d10ca0582216164c00_企业支付",
                        "label": "企业支付",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 72
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_个人支付",
                        "label": "个人支付",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 73
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_name",
                        "label": "订单概述",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 60
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_code",
                        "label": "订单明细编号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 59
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_票号",
                        "label": "票号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 58
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_订单号",
                        "label": "订单号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 57
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_申请单编号",
                        "label": "申请单编号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 56
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_订单类型",
                        "label": "订单类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 55
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_出行类型",
                        "label": "出行类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 54
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_订单日期",
                        "label": "订单日期",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 53
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_88d10ca0582216164c00_订单金额",
                        "label": "订单金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 52
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_订单状态",
                        "label": "订单状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 51
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_订票平台",
                        "label": "订票平台",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 50
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_订票人",
                        "label": "订票人",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 49
                        },
                        "entity": "organization.Staff"
                    },
                    {
                        "name": "E_88d10ca0582216164c00_出行人",
                        "label": "出行人",
                        "type": "list",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 48
                        },
                        "elemType": {
                            "type": "ref",
                            "entity": "organization.Staff"
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_出行人类型",
                        "label": "出行人类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 47
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_关联行程",
                        "label": "关联行程",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 46
                        },
                        "entity": "datalink.DataLinkEntity.d52d0ca0582216162400"
                    },
                    {
                        "name": "E_88d10ca0582216164c00_是否超标",
                        "label": "是否超标",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 45
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_超标原因",
                        "label": "超标原因",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 44
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_证件类型",
                        "label": "证件类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 43
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_证件信息",
                        "label": "证件信息",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 42
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_航空公司",
                        "label": "航空公司",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 41
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_航班号",
                        "label": "航班号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 40
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_出发地",
                        "label": "出发地",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 39
                        },
                        "entity": "basedata.city"
                    },
                    {
                        "name": "E_88d10ca0582216164c00_到达地",
                        "label": "到达地",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 38
                        },
                        "entity": "basedata.city"
                    },
                    {
                        "name": "E_88d10ca0582216164c00_住宿地",
                        "label": "住宿地",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 37
                        },
                        "entity": "basedata.city"
                    },
                    {
                        "name": "E_88d10ca0582216164c00_出发时间",
                        "label": "出发时间",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 36
                        },
                        "withTime": true
                    },
                    {
                        "name": "E_88d10ca0582216164c00_到达时间",
                        "label": "到达时间",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 35
                        },
                        "withTime": true
                    },
                    {
                        "name": "E_88d10ca0582216164c00_入住日期",
                        "label": "入住日期",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 34
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_88d10ca0582216164c00_离店日期",
                        "label": "离店日期",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 33
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_88d10ca0582216164c00_出发机场",
                        "label": "出发机场",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 32
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_到达机场",
                        "label": "到达机场",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 31
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_舱位类型",
                        "label": "舱位类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 30
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_车型",
                        "label": "车型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 29
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_火车席位",
                        "label": "火车席位",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 28
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_酒店名称",
                        "label": "酒店名称",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 27
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_酒店地址",
                        "label": "酒店地址",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 26
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_房型",
                        "label": "房型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 25
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_出发车站",
                        "label": "出发车站",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 24
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_到达车站",
                        "label": "到达车站",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 23
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_火车车次",
                        "label": "火车车次",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 22
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_支付方式",
                        "label": "支付方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 21
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_车牌号",
                        "label": "车牌号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 20
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_用车出行方式",
                        "label": "用车出行方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 19
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_房间数量",
                        "label": "房间数量",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 18
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_间夜数",
                        "label": "间夜数",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 17
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_订单备注",
                        "label": "订单备注",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 16
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_实际出发地点",
                        "label": "实际出发地点",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 15
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_实际到达地点",
                        "label": "实际到达地点",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 14
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_成本中心",
                        "label": "成本中心",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 13
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_项目号",
                        "label": "项目号",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 12
                        },
                        "entity": "basedata.Dimension."
                    },
                    {
                        "name": "E_88d10ca0582216164c00_业务对象项目",
                        "label": "业务对象项目",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 11
                        },
                        "entity": "datalink.DataLinkEntity."
                    },
                    {
                        "name": "E_88d10ca0582216164c00_部门",
                        "label": "部门",
                        "type": "ref",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 10
                        },
                        "entity": "organization.Department"
                    },
                    {
                        "name": "E_88d10ca0582216164c00_折扣",
                        "label": "折扣",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 9
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_航班舱型",
                        "label": "航班舱型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 8
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_火车坐席",
                        "label": "火车坐席",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 7
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_成交净价",
                        "label": "成交净价",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 6
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_票面价",
                        "label": "票面价",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 5
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_机建费",
                        "label": "机建费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 4
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_燃油附加费",
                        "label": "燃油附加费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 3
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_酒店星级",
                        "label": "酒店星级",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 2
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_保险费",
                        "label": "保险费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 1
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_报销状态",
                        "label": "报销状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": 0
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_改签日期",
                        "label": "改签日期",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": true
                    },
                    {
                        "name": "E_88d10ca0582216164c00_民航基金",
                        "label": "民航基金",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_退票费",
                        "label": "退票费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_预定服务费",
                        "label": "预定服务费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_退票服务费",
                        "label": "退票服务费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_改签服务费",
                        "label": "改签服务费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_前收服务费",
                        "label": "前收服务费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_后收服务费",
                        "label": "后收服务费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_优惠券抵扣金额",
                        "label": "优惠券抵扣金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_后收手续费",
                        "label": "后收手续费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_88d10ca0582216164c00_预定金额",
                        "label": "预定金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    }
                ],
                "defaultMappingRuleId": "LpkcE5wy5xBs00",
                "filterId": null,
                "id": "29230ca0582216179c00",
                "platformId": "wLscE5wy5xow00",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
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
                    "api",
                    "flow"
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

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 未找到对应的业务对象 | 请确认 `entityId`（业务对象ID）是否存在 | 
