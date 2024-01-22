# 根据ID获取单据详情(可返回关联数据)(新)
将指定参数由字符串格式的ID转换为Json对象格式的关联数据返回。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1.1/docs/flowId/$`flowId`"
/>

:::caution
- 接口目前支持 **员工、部门、收款账户、自定义档案、业务对象** 类型的字段以及类似 **`expenseLink`（关联申请）、`specificationId`（单据模板）** 等 **保存了关联数据ID的字段** 的关联信息查询。
- 暂不支持 **多选类型** 以及 **费用明细** 中的字段。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **flowId**      | String  | 单据ID    | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **selectFiled** | Array  | 关联字段信息查询 | 非必填 | - | 示例：`"form/submitterId(id,name)"`<br/>**`/` 表示层级，可以是多层级，`(id,name)` 表示需要返回的关联字段，可以传多个** |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1.1/docs/flowId/$ID_3GIknsp1mNM?accessToken=ID01iqVWqLULQr:TnG3ARUO400ub0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "selectFiled":[
        "form/u_deng查询","form/submitterId(id,name)","ownerDefaultDepartment","ownerId"
    ]
}'
```

## 成功响应

```json
{
    "value": {
        "id": "ID_3GIknsp1mNM",
        "form": {
            "code": "S22000010",
            "title": "ddd",
            "trips": [
                {
                    "tripForm": {
                        "tripId": "ID_3GIknsp1oNM",
                        "tripDate": 1653235200000,
                        "tripToCity": "[{\"key\":\"2148\",\"label\":\"广东省/深圳市/深圳市区\"}]",
                        "tripFromCity": "[{\"key\":\"858\",\"label\":\"上海市/上海市区\"}]"
                    },
                    "tripTypeId": "TnG3ARUO400ub0:flight",
                    "specificationId": "TnG3ARUO400ub0:flight:18baa8ef964d8c51f4232afe343577bed36c1ad2"
                }
            ],
            "travelers": [
                "TnG3ARUO400ub0:BNMcEO0f11oo00"
            ],
            "printCount": "0",
            "printState": "noPrint",
            "submitDate": 1653278230028,
            "submitterId": {
                "id": "TnG3ARUO400ub0:BNMcEO0f11oo00",
                "name": "邓加昌"
            },
            "u_deng查询": {
                "id": "ID_3DrsoVW1HKM",
                "code": "B22000004",
                "form": {
                    "description": "",
                    "campaignType": "",
                    "E_cc0e4d78c84000d4b000_code": "B22000004",
                    "E_cc0e4d78c84000d4b000_name": "test_005",
                    "E_cc0e4d78c84000d4b000_数字": "0",
                    "E_cc0e4d78c84000d4b000_文本": "",
                    "E_cc0e4d78c84000d4b000_金额": {
                        "standard": "1200.00",
                        "standardUnit": "元",
                        "standardScale": 2,
                        "standardSymbol": "¥",
                        "standardNumCode": "156",
                        "standardStrCode": "CNY"
                    },
                    "E_cc0e4d78c84000d4b000_附件": [],
                    "E_cc0e4d78c84000d4b000_人员多": [
                        "TnG3ARUO400ub0:BNMcEO0f11oo00"
                    ],
                    "E_cc0e4d78c84000d4b000_业务对象多选": []
                },
                "name": "test_005",
                "index": 0,
                "active": true,
                "source": "EBOT",
                "grayver": "9.51.0.0-prd",
                "ownerId": "",
                "topDate": 0,
                "topFlag": 0,
                "version": 175,
                "visible": true,
                "entityId": "cc0e4d78c84000d4b000",
                "masterId": "",
                "pipeline": 1,
                "sourceId": "",
                "useCount": 0,
                "nameSpell": "test_005",
                "createTime": 1649774157329,
                "flowCounts": {
                    "ID01i0CxWokIWz": 0,
                    "ID01i0CxWolv9Z": 0,
                    "ID01ilWs1yA1TV": 0,
                    "ID01ilWs1yyLAb": 0,
                    "ID01ilWs1yz1z9": 0,
                    "ID01ilWs1yz6mr": 0,
                    "ID01ilWs1yzDVt": 0,
                    "ID01ilWs1yzIIL": 0,
                    "ID01ilWs1yzNw3": 0,
                    "ID01ilWs1yzSjl": 0,
                    "ID01ilWs1yzX6D": 0,
                    "ID01ilWs1yzb9J": 0,
                    "ID01ilWs1yzfX1": 0,
                    "ID01ilWs1yzkKj": 0,
                    "ID01ilWs1yzpxB": 0,
                    "ID01ilWs1yzukT": 0,
                    "ID01ilWs1yzz8b": 0,
                    "ID01im7c12FFBd": 0,
                    "ID01im7c12FKov": 0,
                    "ID01im7c12FPbN": 0,
                    "ID01im7c12FTZ5": 0,
                    "ID01im7c12FYMn": 0,
                    "ID01im7c12Fea3": 0,
                    "ID01im7c12FiXl": 0,
                    "ID01im7c12FnKD": 0,
                    "ID01im7c12FsxV": 0,
                    "ID01im7c12Fy8L": 0,
                    "ID01im7c12G3zF": 0,
                    "ID01im7c12G8mX": 0,
                    "ID01im7c12Gdaf": 0,
                    "ID01im7c12GhXx": 0,
                    "ID01im7c12GmKP": 0,
                    "ID_3GIknsp1mNM": 0,
                    "ID_3GoQjBk1ljg": 0,
                    "ID_3GoQjBk2kjg": 0,
                    "ID_3GoQjBk4sjg": 0,
                    "ID_3HV7_3w3mwg": 0
                },
                "operatorId": null,
                "platformId": "ID_3ARUO400Pb0",
                "totalCount": 0,
                "updateTime": 1660629204462,
                "visibility": {
                    "roles": [],
                    "staffs": [],
                    "departments": [],
                    "fullVisible": true,
                    "departmentsIncludeChildren": true
                },
                "ledgerAmount": null,
                "corporationId": "TnG3ARUO400ub0",
                "sourceMessage": "",
                "dataCorporationId": null,
                "ledgerAmountModel": null,
                "controlCalcVersion": 141,
                "rigidControlPassed": true,
                "selfPlannedConfigs": [],
                "sourceCorporationId": null
            },
            "requisitionDate": 1653235200000,
            "specificationId": "TnG3ARUO400ub0:PRESET_REQUISITION_TRIP:e42d6a1bcc1a43df24bcf7ca1097ba59c67b5c71",
            "preNodeApprovedTime": 1653279131534
        },
        "logs": [
            {
                "time": 1653279127946,
                "state": "approving",
                "action": "freeflow.submit",
                "attributes": {
                    "nextId": "FLOW:954143183:1991142681",
                    "nodeId": "SUBMIT",
                    "comment": "",
                    "isUrgent": false,
                    "nextName": "费用标准检查",
                    "urgentReason": null,
                    "resubmitMethod": "FROM_START",
                    "nextCounterSign": false,
                    "sensitiveContent": null,
                    "resubmitOperatorIds": []
                },
                "operatorId": "TnG3ARUO400ub0:BNMcEO0f11oo00",
                "attachments": [],
                "byDelegateId": null,
                "modifyFlowLog": null,
                "nextOperatorId": "ebot",
                "nextOperatorIds": [],
                "operatorDefaultDepartment": "TnG3ARUO400ub0"
            },
            {
                "time": 1653279131539,
                "state": "paid",
                "action": "freeflow.agree",
                "attributes": {
                    "nextId": null,
                    "nodeId": "FLOW:1984948847:2010831853",
                    "comment": "Ebot共更新了1条[dengj_0001]的[dengjc测试],成功更改了1条数据，编码为[B22000004]",
                    "complete": true,
                    "nextName": null,
                    "nodeName": "dengjc",
                    "expressNum": null,
                    "isEbotNode": true,
                    "counterSign": false,
                    "isRecalNode": false,
                    "oldFlowPlanId": null,
                    "nextCounterSign": false,
                    "autographImageId": null
                },
                "operatorId": "ebot",
                "attachments": [],
                "byDelegateId": null,
                "modifyFlowLog": null,
                "nextOperatorId": null,
                "nextOperatorIds": [],
                "operatorDefaultDepartment": null
            },
            {
                "time": 1653279131540,
                "state": "paid",
                "action": "freeflow.skipped",
                "attributes": {
                    "name": "出纳支付",
                    "nextId": "FLOW:209106203:1997026584",
                    "skippedType": "NO_ABILITY"
                },
                "operatorId": "ebot",
                "attachments": [],
                "byDelegateId": null,
                "modifyFlowLog": null,
                "nextOperatorId": null,
                "nextOperatorIds": [],
                "operatorDefaultDepartment": null
            }
        ],
        "state": "paid",
        "active": true,
        "actions": {
            "TnG3ARUO400ub0:BNMcEO0f11oo00": [
                "freeflow.archive",
                "freeflow.copy"
            ]
        },
        "grayver": "9.28.0.0:A",
        "ownerId": {
            "id": "TnG3ARUO400ub0:BNMcEO0f11oo00",
            "code": "0001",
            "name": "邓加昌",
            "note": null,
            "email": "",
            "order": null,
            "active": true,
            "avatar": "",
            "userId": "BNMcEO0f11oo00",
            "fromWay": "manual",
            "grayver": "9.14.0.0:A",
            "version": 2,
            "external": false,
            "pipeline": 1,
            "authState": true,
            "cellphone": "15811394394",
            "nameSpell": "DENGJIACHANG",
            "createTime": 1646995792519,
            "updateTime": 1646996774533,
            "departments": [
                "TnG3ARUO400ub0"
            ],
            "corporationId": "TnG3ARUO400ub0",
            "useNewAccount": false,
            "staffCustomForm": {
                "defaultDepartment.form.costCenter": "",
                "defaultDepartment.form.legalEntity": ""
            },
            "dataCorporationId": null,
            "defaultDepartment": "TnG3ARUO400ub0",
            "sourceCorporationId": null
        },
        "version": 4,
        "flowType": "freeflow",
        "formType": "requisition",
        "pipeline": 1,
        "createTime": 1653279131540,
        "updateTime": 1653279131539,
        "corporationId": "TnG3ARUO400ub0",
        "invoiceRemind": false,
        "dataCorporationId": null,
        "sourceCorporationId": null,
        "ownerDefaultDepartment": {
            "id": "TnG3ARUO400ub0",
            "code": "depart_001",
            "form": {},
            "name": "dengjic_test",
            "order": 0,
            "active": true,
            "belong": {
                "auth": null,
                "name": null
            },
            "frozen": false,
            "fromWay": "manual",
            "grayver": "9.14.0.0:A",
            "version": 2,
            "parentId": "",
            "pipeline": 1,
            "nameSpell": "dengjic_test",
            "createTime": 1646995792491,
            "updateTime": 1646996844155,
            "permissions": [
                {
                    "auth": true,
                    "name": "ALL"
                }
            ],
            "corporationId": "TnG3ARUO400ub0",
            "dataCorporationId": null,
            "sourceCorporationId": null
        }
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 请求参数不正确 | 请确认 `selectFiled`（关联字段信息查询）所传参数是否正确 |
