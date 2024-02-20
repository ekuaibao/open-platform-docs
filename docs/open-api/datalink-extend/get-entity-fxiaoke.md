# 获取【纷享销客】业务对象数据
用于查询【**纷享销客**】功能的业务对象数据。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/FXIAOKE/object/`entityId`/search"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.11.0**](/updateLog/update-log#1110) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **entityId** | String | 业务对象ID | 必填 | - | 通过【**纷享销客**】后台配置页面获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters（Body不能为空）

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids**   | Array  | 业务对象实例ID数组   | 非必填 | - | 按照业务对象实例的ID查询详情 |
| **codes** | Array  | 业务对象实例CODE数组 | 非必填 | - | 按照业务对象实例的CODE查询详情 |
| **index** | Number | 查询页数           | 非必填 | - | 从 `1` 开始，不可为 `0`<br/>**表示从第几页开始查询** |
| **count** | Number | 每页数量            | 非必填 | - | 每页查询数据量，最大不能超过 `100` |

:::caution
 - 参数优先级 `ids` > `codes` > `index` 和 `count` ，多组参数均传值时，按优先级最高的开始生效。
 - `ids` 、 `codes` 参数，可以为空：`[]`，但是不可传 `[null]` 或 `[""]`，否则会报错。
 - `ids` 、 `codes` 参数，接口没有校验参数是否在系统中存在，获取不到数据时，请检查参数的准确性。
 - `ids` 、 `codes` 不填时， `index` 和 `count` 两个参数必填，只要传了 `index` 和 `count` 参数，成功响应中的 **“count”** 表示总数。
 - `index` 和 `count` 不填时， `ids` 或 `codes` 参数必填，任意填写其一时，成功响应中的 **“count”** 表示有效参数量，而非总数。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/FXIAOKE/object/fe0dec96e30037bbac00/search?accessToken=ID01iMTDBd6ZQP:EZA3rQTD1y23vw' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "ids":["ID01iaSMRZqOXd"], 
    "codes":[],
    "index":1,
    "count":100
}'
```

## 成功响应
```json
{
    "count": 3,                     //对象数量
    "items": [                      //对象信息
        {
            "id": "ID01iaSMRZqOXd", //业务对象实例ID
            "masterId": "",
            "topDate": 0,
            "useCount": 0,
            "totalCount": 0,
            "ownerId": {            //负责人信息
                "pipeline": 1,
                "grayver": "5.680.0.0-prd",
                "version": 16,
                "active": true,
                "createTime": 1647244036120,
                "updateTime": 1658747169590,
                "nameSpell": "GUOMIN",
                "code": "002",
                "corporationId": "EZA3rQTD1y23vw",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "userId": "AvX3B4CxjprN7w",
                "id": "EZA3rQTD1y23vw:AvX3B4CxjprN7w",
                "name": "郭敏",
                "avatar": null,
                "nickName": null,
                "email": "18513021224718@163.com",
                "showEmail": null,
                "cellphone": "19800361061",
                "globalRoaming": null,
                "note": "note",
                "fromWay": "api",
                "departments": [
                    "EZA3rQTD1y23vw"
                ],
                "defaultDepartment": "EZA3rQTD1y23vw",
                "external": false,
                "useNewAccount": false,
                "authState": true,
                "ignoreAutoAuth": false,
                "order": null,
                "staffCustomForm": {
                    "postType": "ID_3waHqQN03Pw",
                    "rankType": "ID_3vGYgyx5$10",
                    "u_爱好": "123",
                    "defaultDepartment.form.costCenter": "",
                    "defaultDepartment.form.legalEntity": ""
                },
                "externalDepartments": null,
                "externalDefaultDepartment": null,
                "edited": true
            },
            "visibility": {                         //可见性信息
                "fullVisible": false,               //是否全部可见；true=全部，false=部分人员
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_ac0dbd263932fc0a4800_code": "24YpxoJSZz8mtj",  //对象编码
            "E_ac0dbd263932fc0a4800_name": "办公类型2&1",     //对象名称
            "E_ac0dbd263932fc0a4800_sense": "",
            "E_ac0dbd263932fc0a4800_stage": "expense",
            "E_ac0dbd263932fc0a4800_state": "approving",
            "E_ac0dbd263932fc0a4800_title": "123",
            "E_ac0dbd263932fc0a4800_amount": {
                "standard": "1",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_ac0dbd263932fc0a4800_linkId": "ID01iazdRovZMz",
            "E_ac0dbd263932fc0a4800_feeDate": 1659974400000,
            "E_ac0dbd263932fc0a4800_ownerId": "EZA3rQTD1y23vw:AvX3B4CxjprN7w",
            "E_ac0dbd263932fc0a4800_payeeId": "ID_3JHu04C2IW0",
            "E_ac0dbd263932fc0a4800_detailId": "24YpxoJSZz8mtj",
            "E_ac0dbd263932fc0a4800_linkType": "FLOW",
            "E_ac0dbd263932fc0a4800_payMoney": {
                "standard": "1.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_ac0dbd263932fc0a4800_u_手动": {
                "end": 1659974400000,
                "start": 1659974400000
            },
            "E_ac0dbd263932fc0a4800_feeTypeId": "ID_3BZsYCX5DWw",
            "E_ac0dbd263932fc0a4800_voucherNo": "",
            "E_ac0dbd263932fc0a4800_detailType": "detail",
            "E_ac0dbd263932fc0a4800_entityType": "APPORTION",
            "E_ac0dbd263932fc0a4800_printCount": "0",
            "E_ac0dbd263932fc0a4800_printState": "noPrint",
            "E_ac0dbd263932fc0a4800_settleTime": "NO_SETTLE",
            "E_ac0dbd263932fc0a4800_submitDate": 1660033739571,
            "E_ac0dbd263932fc0a4800_attachments": [],
            "E_ac0dbd263932fc0a4800_description": "",
            "E_ac0dbd263932fc0a4800_expenseDate": 1660724880000,
            "E_ac0dbd263932fc0a4800_invoiceForm": {
                "type": "noWrite"
            },
            "E_ac0dbd263932fc0a4800_submitterId": "EZA3rQTD1y23vw:AvX3B4CxjprN7w",
            "E_ac0dbd263932fc0a4800_expenseMoney": {
                "standard": "1.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_ac0dbd263932fc0a4800_settleStatus": "NO",
            "E_ac0dbd263932fc0a4800_billingStatus": "NO",
            "E_ac0dbd263932fc0a4800_voucherStatus": "未生成",
            "E_ac0dbd263932fc0a4800_apportionMoney": {
                "standard": "1",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_ac0dbd263932fc0a4800_companyRealPay": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_ac0dbd263932fc0a4800_writtenOffMoney": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_ac0dbd263932fc0a4800_writtenOffAmount": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_ac0dbd263932fc0a4800_expenseDepartment": "EZA3rQTD1y23vw",
            "E_ac0dbd263932fc0a4800_voucherCreateTime": 0,
            "E_ac0dbd263932fc0a4800_consumptionReasons": "",
            "E_ac0dbd263932fc0a4800_unwrittenOffAmount": {
                "standard": "1",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_ac0dbd263932fc0a4800_accountPropertyDate": 1660724880000,
            "E_ac0dbd263932fc0a4800_flowSpecificationId": "ID_3rQCejbXUAw:3759f288fb099b01eb8fc8e4592396e3dc9da2d0",
            "E_ac0dbd263932fc0a4800_preNodeApprovedTime": 1660043942505,
            "E_ac0dbd263932fc0a4800_accountPropertyMoney": {
                "standard": "1.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_ac0dbd263932fc0a4800_feeDetailSpecificationId": "ID_3BZsYCX5DWw:expense:482a3b6e33c0af683c3fca7f8e11313d88997d36",
            "active": true,                                 //是否启用，true：是
            "updateTime": 1660043956136,
            "createTime": 1660043956127,
            "entityId": "fe0dec96e30037bbac00",             //实体编码
            "entity": {                                     //实体字段配置
                "operateSource": "WRITE",
                "operatorId": "EZA3rQTD1y23vw:AvX3B4CxjprN7w",
                "pipeline": 1,
                "grayver": "9.45.0.0-prd",
                "version": 16,
                "active": true,
                "createTime": 1640493713480,
                "updateTime": 1658219191113,
                "name": "销售订单",
                "nameSpell": "XIAOSHOUDINGDAN",
                "corporationId": "EZA3rQTD1y23vw",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": [
                    "ID_3vBIc3rggAg"
                ],
                "plannedIds": [
                    "ID_3vBIfT9qr60"
                ],
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "name": "停用/启用",
                        "desc": "业务对象实例数据停启用状态切换",
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
                    "departmentsIncludeChildren": true
                },
                "type": "BILL",
                "disableStrategy": "MANUAL_ADMIN",
                "maxUsageCount": 0,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_fe0dec96e30037bbac00_name",
                        "label": "销售订单编号",
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
                            "order": 8
                        }
                    },
                    {
                        "name": "E_fe0dec96e30037bbac00_code",
                        "label": "id",
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
                            "order": 7
                        }
                    },
                    {
                        "name": "E_fe0dec96e30037bbac00_客户名称",
                        "label": "客户名称",
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
                            "order": 6
                        },
                        "elemType": {
                            "type": "ref",
                            "entity": "datalink.DataLinkEntity.f80dec989aeaee9ca800"
                        }
                    },
                    {
                        "name": "E_fe0dec96e30037bbac00_销售订单金额元",
                        "label": "销售订单金额元",
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
                        "name": "E_fe0dec96e30037bbac00_2021项目名称",
                        "label": "2021项目名称",
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
                            "order": 4
                        },
                        "elemType": {
                            "type": "ref",
                            "entity": "datalink.DataLinkEntity.e10dec9902041b57bc00"
                        }
                    },
                    {
                        "name": "E_fe0dec96e30037bbac00_销售订单名称",
                        "label": "销售订单名称",
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
                            "order": 3
                        }
                    },
                    {
                        "name": "E_fe0dec96e30037bbac00_2021项目名称文本",
                        "label": "2021项目名称文本",
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
                        "name": "E_fe0dec96e30037bbac00_项目执行编号",
                        "label": "项目执行编号",
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
                            "order": 1
                        }
                    }
                ],
                "defaultMappingRuleId": "ID_3LiWJocgn9v",
                "filterId": null,
                "id": "fe0dec96e30037bbac00",
                "platformId": "ID_3uOp0wgriXM",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [
                        "EZA3rQTD1y23vw:AvX3B4CxjprN7w"
                    ],
                    "roles": [
                        "ID_3uEvvLstWgw",
                        "ID_3tWvmUkNQ8g",
                        "ID_3uEB4_iXbW0",
                        "ID_3tWvmUkNO8g",
                        "ID_3uEBldcEegM"
                    ],
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
                    "api"
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
