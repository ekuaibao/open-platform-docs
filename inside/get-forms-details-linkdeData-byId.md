# 根据ID获取单据详情(可返回关联数据)
将指定参数由字符串格式的ID转换为Json对象格式的关联数据返回。

import Control from "@theme/Control";

<Control
method="POST"
url=" /api/openapi/v2/flow/data/flowId/$`flowId`"
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
| **select** | String  | 关联字段信息查询 | 非必填 | - | 固定格式：form(字段名称(\`...\`),\`...\`)<br/>示例：form(u_Z员工(\`...\`),payeeId(\`...\`),\`...\`)<br/>**form(\`...\`) 表示单据最外层，可多层嵌套查询** |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/flow/data/flowId/$ID01i0CxWopBin?accessToken=ID01i0F4jf2k6X:xgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "select": "form(payeeId(`...`),u_Z员工(`...`),u_Z部门(`...`),expenseLink(`...`),submitterId(`...`),u_Z_张国阳1(`...`),specificationId(`...`),expenseDepartment(`...`),u_Z张国阳测试(`...`),`...`)"
}'
```

## 成功响应

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="expense" label="报销单" default>

```json
{
    "value": {
        "form": {
            "code": "B22000292",
            "title": "单据关联数据获取测试1",
            "details": [
                {
                    "feeTypeId": "ID01i0CxWopm6X",
                    "feeTypeForm": {
                        "amount": {
                            "standard": "333",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "feeDate": 1570032000000,
                        "detailId": "tSjG6jTRuV3TtB",
                        "u_Z员工": "xgJ3wajigF25H0:ID_3E97sZ43hMw",
                        "u_Z城市": "[{\"key\":\"2\",\"label\":\"北京市/北京市区\"}]",
                        "u_Z开关": true,
                        "u_Z整数": "1",
                        "u_Z日期": 1659456000000,
                        "u_Z部门": "xgJ3wajigF25H0",
                        "u_Z金额": {
                            "standard": "1",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "u_Z附件": [
                            {
                                "key": "2(2)-1659521791202-95.png",
                                "fileId": "ID01i0CxWopuDt",
                                "fileName": "2 (2).png"
                            }
                        ],
                        "u_Z_文本": "测试1",
                        "attachments": [
                            {
                                "key": "0_1-1659521777941-740.jpg",
                                "fileId": "ID01i0CxWopumX",
                                "fileName": "0_1.jpg"
                            }
                        ],
                        "invoiceForm": {
                            "type": "exist",
                            "invoices": [
                                {
                                    "itemIds": [
                                        "ID01i0CxWopsLR"
                                    ],
                                    "taxRate": 0,
                                    "invoiceId": "xgJ3wajigF25H0:011001900311:64278013",
                                    "taxAmount": {
                                        "standard": 0,
                                        "standardUnit": "元",
                                        "standardScale": 2,
                                        "standardSymbol": "¥",
                                        "standardNumCode": "156",
                                        "standardStrCode": "CNY"
                                    }
                                }
                            ]
                        },
                        "u_Z_张国阳1": "ID_3yv5JV_0W6w",
                        "u_Z员工多选": [
                            "xgJ3wajigF25H0:ID_3E97sZ43hMw",
                            "xgJ3wajigF25H0:ID_3E97sZ43rMw",
                            "xgJ3wajigF25H0:ID_3E97sZ43tMw"
                        ],
                        "u_Z枚举航班": "BUSINESS",
                        "u_Z范围日期": {
                            "end": 1659456000000,
                            "start": 1659456000000
                        },
                        "u_Z项目多选": [
                            "ID_3LSIgzBllAv",
                            "ID_3LRUarl0DDv",
                            "ID_3D5RavkAXRM"
                        ],
                        "consumptionReasons": "",
                        "u_Z写业务对象": [
                            {
                                "dataLinkId": null,
                                "dataLinkForm": {
                                    "E_e70e7649f5774bb6bc00_code": "1",
                                    "E_e70e7649f5774bb6bc00_name": "测试12",
                                    "E_e70e7649f5774bb6bc00_价格": {
                                        "standard": "1",
                                        "standardUnit": "元",
                                        "standardScale": 2,
                                        "standardSymbol": "¥",
                                        "standardNumCode": "156",
                                        "standardStrCode": "CNY"
                                    },
                                    "E_e70e7649f5774bb6bc00_单价": {
                                        "standard": "1",
                                        "standardUnit": "元",
                                        "standardScale": 2,
                                        "standardSymbol": "¥",
                                        "standardNumCode": "156",
                                        "standardStrCode": "CNY"
                                    },
                                    "E_e70e7649f5774bb6bc00_Z数值": "1",
                                    "E_e70e7649f5774bb6bc00_Z文本": "1",
                                    "E_e70e7649f5774bb6bc00_团队成员": [
                                        "xgJ3wajigF25H0:Xfi3D10oPJ6DqM",
                                        "xgJ3wajigF25H0:eTM3rQTD1y20vw"
                                    ],
                                    "E_e70e7649f5774bb6bc00_张国阳001": "ID_3D$rGPUjLBg",
                                    "E_e70e7649f5774bb6bc00_必填数值": "1",
                                    "E_e70e7649f5774bb6bc00_必填文本": "1",
                                    "E_e70e7649f5774bb6bc00_相关部门": "xgJ3wajigF25H0:ID_3zE5G_06Ow0",
                                    "E_e70e7649f5774bb6bc00_部门必填": "xgJ3wajigF25H0",
                                    "E_e70e7649f5774bb6bc00_其他业务对象1": [
                                        "ID_3KjWXRDwC9M"
                                    ],
                                    "E_e70e7649f5774bb6bc00_必填多选业务对象": [
                                        "ID_3KjWXRDwC9M"
                                    ]
                                },
                                "dataLinkTemplateId": "ID_3Dp9ZntbOHM"
                            }
                        ],
                        "u_Z张国阳测试": "ID_3KjWXRDwL9M"
                    },
                    "specificationId": "ID01i0CxWopm6X:expense:e9f7e1555bf65b3c92211646a895a2bfd6128ef4"
                }
            ],
            "payeeId": {
                "id": "ID_3Jy1zL30kTw",
                "bank": "",
                "city": "",
                "code": "",
                "icon": "https://images.ekuaibao.com/bank/bank-other.svg",
                "logs": [
                    {
                        "time": 1656327352899,
                        "action": "CREATE",
                        "attributes": null,
                        "operatorId": "API"
                    }
                ],
                "name": "ZGY无开户网点银行卡个人账户19",
                "sort": "BANK",
                "type": "PUBLIC",
                "owner": "INDIVIDUAL",
                "active": true,
                "branch": "",
                "cardNo": "80082088200019",
                "remark": null,
                "grayver": "9.38.0.0:A",
                "staffId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                "version": 1,
                "pipeline": 1,
                "province": "",
                "nameSpell": "ZGYWUKAIHUWANGDIANYINXINGKAGERENZHANGHU19",
                "unionBank": null,
                "unionIcon": "https://images.ekuaibao.com/bank/bank-other.svg",
                "bankLinkNo": "",
                "createTime": 1656327352899,
                "extensions": null,
                "updateTime": 1656327352899,
                "visibility": {
                    "roles": [],
                    "staffs": [],
                    "departments": [],
                    "fullVisible": false,
                    "departmentsIncludeChildren": true
                },
                "certificateNo": null,
                "corporationId": "xgJ3wajigF25H0",
                "certificateType": null,
                "dataCorporationId": null,
                "sourceCorporationId": null
            },
            "payMoney": {
                "standard": "333.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "u_Z员工": {
                "id": "xgJ3wajigF25H0:DSF0001511",
                "code": "00015",
                "name": "十五-111",
                "note": "",
                "email": "1231231231111@qq.com",
                "order": null,
                "active": true,
                "avatar": null,
                "edited": true,
                "userId": "DSF0001511",
                "fromWay": "api",
                "grayver": "9.38.0.0:A",
                "version": 4,
                "external": false,
                "pipeline": 1,
                "authState": true,
                "cellphone": "12312312311",
                "nameSpell": "SHIWU-111",
                "createTime": 1651040529009,
                "updateTime": 1657529306385,
                "departments": [
                    "xgJ3wajigF25H0"
                ],
                "corporationId": "xgJ3wajigF25H0",
                "globalRoaming": null,
                "useNewAccount": false,
                "staffCustomForm": null,
                "dataCorporationId": null,
                "defaultDepartment": "xgJ3wajigF25H0",
                "sourceCorporationId": null
            },
            "u_Z开关": true,
            "u_Z整数": "2",
            "u_Z日期": 1659456000000,
            "u_Z部门": {
                "id": "xgJ3wajigF25H0",
                "code": "001",
                "form": {
                    "legalEntity": "ID_3FQR$Yx1NWM"
                },
                "leaf": true,
                "name": "洪洞大槐树",
                "order": 0,
                "active": true,
                "belong": {
                    "auth": null,
                    "name": null
                },
                "frozen": false,
                "fromWay": "manual",
                "grayver": "9.27.0.0:A",
                "version": 5,
                "parentId": "",
                "pipeline": 1,
                "nameSpell": "HONGDONGDAHUAISHU",
                "createTime": 1641969768671,
                "updateTime": 1645690589994,
                "permissions": [
                    {
                        "auth": true,
                        "name": "ALL"
                    }
                ],
                "corporationId": "xgJ3wajigF25H0",
                "dataCorporationId": null,
                "sourceCorporationId": null
            },
            "u_Z金额": {
                "standard": "1",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "u_Z附件": [
                {
                    "key": "2-1659521952967-702.pdf",
                    "fileId": "ID01i0CxWopymH",
                    "fileName": "2.pdf"
                },
                {
                    "key": "2-1659521956934-111.png",
                    "fileId": "ID01i0CxWopyDd",
                    "fileName": "2.png"
                }
            ],
            "voucherNo": "",
            "printCount": "0",
            "printState": "noPrint",
            "submitDate": 1659522371221,
            "u_Z_文本": "1",
            "description": "测试",
            "expenseDate": 1659456000000,
            "expenseLink": {
                "id": "ID_3BpmW2i2$0w",
                "code": "S22000002",
                "name": "测试申请单2",
                "state": "PROCESS",
                "title": "测试申请单2",
                "active": true,
                "flowId": "ID_3BpmW2i2$0w",
                "grayver": "9.50.0.0-prd",
                "ownerId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                "related": [
                    {
                        "id": "ID_3BpmW2i2$0w",
                        "code": "S22000002",
                        "name": "测试申请单2",
                        "rule": null,
                        "money": null,
                        "state": "PROCESS",
                        "formType": "requisition",
                        "moneyNode": null,
                        "submitDate": 1647592567643,
                        "isRequisition": true,
                        "specificationId": "xgJ3wajigF25H0:PRESET_REQUISITION_TRIP",
                        "specificationName": "差旅申请单"
                    },
                    {
                        "id": "ID_3EOtYPQPxcM",
                        "code": "B22000047",
                        "name": "测试10",
                        "rule": null,
                        "money": 2.0,
                        "state": "paid",
                        "formType": "expense",
                        "moneyNode": {
                            "standard": "2.00",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "submitDate": 1651242716589,
                        "isRequisition": false,
                        "specificationId": "ID_3w9HsnE2rq0",
                        "specificationName": "日常报销单"
                    },
                    {
                        "id": "ID_3EOtYPQUUcM",
                        "code": "B22000048",
                        "name": "测试11",
                        "rule": null,
                        "money": 1.0,
                        "state": "paid",
                        "formType": "expense",
                        "moneyNode": {
                            "standard": "1.00",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "submitDate": 1651243008716,
                        "isRequisition": false,
                        "specificationId": "ID_3w9HsnE2rq0",
                        "specificationName": "日常报销单"
                    }
                ],
                "version": 354,
                "closeLog": null,
                "pipeline": 1,
                "closeRule": null,
                "nameSpell": "CESHISHENQINGDAN2",
                "changeLogs": [
                    {
                        "action": "CREATE",
                        "reason": "申请单「测试申请单2（S22000002）」审批通过",
                        "toStaffs": [],
                        "fromStaff": "",
                        "createTime": 1647592618772,
                        "operatorId": "xgJ3wajigF25H0:dbc3wajigF1UH0"
                    }
                ],
                "createTime": 1647592618590,
                "updateTime": 1659522371712,
                "submitterId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                "corporationId": "xgJ3wajigF25H0",
                "applyCloseRule": "manual",
                "sharedOwnerIds": [],
                "requisitionDate": 1647532800000,
                "specificationId": "xgJ3wajigF25H0:PRESET_REQUISITION_TRIP:a1868ce7e52ea0752cf6aeda60c79461970c4825",
                "expenseMoneyDone": 3.0,
                "requisitionMoney": null,
                "dataCorporationId": null,
                "specificationName": "差旅申请单",
                "expenseMoneyProcess": 0,
                "sourceCorporationId": null,
                "requisitionMoneyNode": null,
                "ignoreUsageSpecificationIds": []
            },
            "submitterId": {
                "id": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                "code": "00001",
                "name": "张国阳",
                "note": null,
                "email": "18879049220@163.com",
                "order": null,
                "active": true,
                "avatar": "",
                "userId": "dbc3wajigF1UH0",
                "fromWay": "manual",
                "grayver": "9.10.0.0:A",
                "version": 5,
                "external": false,
                "pipeline": 1,
                "authState": true,
                "cellphone": "18879049220",
                "nameSpell": "ZHANGGUOYANG",
                "createTime": 1641969768705,
                "updateTime": 1645691330448,
                "departments": [
                    "xgJ3wajigF25H0"
                ],
                "corporationId": "xgJ3wajigF25H0",
                "useNewAccount": false,
                "staffCustomForm": {
                    "defaultDepartment.form.costCenter": "",
                    "defaultDepartment.form.legalEntity": ""
                },
                "dataCorporationId": null,
                "defaultDepartment": "xgJ3wajigF25H0",
                "sourceCorporationId": null
            },
            "expenseMoney": {
                "standard": "333.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "reviewStatus": "NONE",
            "voucherStatus": "未生成",
            "companyRealPay": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "u_Z_张国阳1": {
                "id": "ID_3yv5JV_0F6w",
                "code": "CODE3",
                "form": {
                    "postType": "",
                    "rankType": "",
                    "projectBase": "",
                    "projectType": "",
                    "baseCurrencyId": "",
                    "projectManager": "",
                    "projectInspector": ""
                },
                "leaf": true,
                "name": "档案3",
                "active": true,
                "orders": 1644473292116,
                "deleted": false,
                "grayver": "9.20.0.0:A",
                "version": 2,
                "parentId": "",
                "pipeline": 1,
                "nameSpell": "DANGAN3",
                "createTime": 1644473292116,
                "updateTime": 1649816029594,
                "visibility": {
                    "roles": [],
                    "staffs": [],
                    "departments": [],
                    "fullVisible": true,
                    "departmentsIncludeChildren": true
                },
                "dimensionId": "xgJ3wajigF25H0:张国阳001",
                "permissions": [
                    {
                        "auth": true,
                        "name": "ALL"
                    }
                ],
                "sourceCorpId": null,
                "taxpayerType": null,
                "corporationId": "xgJ3wajigF25H0",
                "payAccountIds": [],
                "dataCorporationId": null,
                "sourceCorporationId": null
            },
            "specificationId": {
                "id": "ID01i0CxWopljp:694f294eb3be170079216827eba63bbb9d4a60dd",
                "pri": 0,
                "code": "",
                "icon": "#EDico-mail",
                "name": "新接口测试",
                "type": "expense",
                "color": "#00acc1",
                "rules": [],
                "active": true,
                "configs": [
                    {
                        "ability": "erpVoucher",
                        "voucherNo": "",
                        "voucherStatus": "",
                        "voucherCreateTime": 0
                    },
                    {
                        "ability": "flow",
                        "flowPlanConfigId": "ID_3w9HsnE1Yq0"
                    },
                    {
                        "ability": "print",
                        "isPrintInvoice": false,
                        "printTemplateId": "ID_3w9HsnE2iq0"
                    },
                    {
                        "ability": "writtenOff",
                        "loanList": null,
                        "mustWrittenOff": false,
                        "foreignCurrency": null,
                        "writeOffTurnOff": false,
                        "writtenOffRateType": null,
                        "limitOnlyOneSubmitExpense": false,
                        "sameLegalEntityWrittenOff": null
                    },
                    {
                        "ability": "expense",
                        "feeType": {
                            "ids": [],
                            "isAll": true
                        },
                        "isEBussCard": false,
                        "isTicketReview": false,
                        "isInvoiceBagCode": false,
                        "isSubmitEditable": false,
                        "lockFeeTypeVersion": false,
                        "isForbiddenByFeeType": false,
                        "isApproveEqualExpense": false,
                        "isApproveGreatExpense": false
                    },
                    {
                        "ability": "pay",
                        "payMoney": "expenseMoney-writtenOffMoney",
                        "moneyOnly": false,
                        "payeeOnly": false,
                        "detailsOnly": false,
                        "isRequirePayeeInfo": true,
                        "allowMultiplePayees": false,
                        "optionalPayeeByZero": false,
                        "paymentPlanByApportion": false
                    },
                    {
                        "ability": "chargeAgainst",
                        "isChargeAgainst": false
                    },
                    {
                        "ability": "apply",
                        "canApply": true,
                        "mustApply": false,
                        "overCheck": null,
                        "sameCurrency": null,
                        "tripOrderInfo": false,
                        "isForbidSubmit": false,
                        "requisitionList": {
                            "ids": [],
                            "isAll": true
                        },
                        "sameLegalEntity": null,
                        "onlyRequisitionDetails": false,
                        "autoAssociateOrderConfig": null
                    }
                ],
                "grayver": "9.50.0.0-prd",
                "version": 1,
                "editorId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                "pipeline": 1,
                "nameSpell": "XINJIEKOUCESHI",
                "components": [
                    {
                        "hide": false,
                        "type": "text",
                        "field": "title",
                        "label": "标题",
                        "cnLabel": "标题",
                        "configs": [],
                        "enLabel": null,
                        "editable": true,
                        "optional": false,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "maxLength": 14,
                        "minLength": 0,
                        "placeholder": "请输入标题",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "请输入标题",
                        "enPlaceholder": null,
                        "exceedConfigs": null,
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        }
                    },
                    {
                        "hide": false,
                        "type": "select",
                        "field": "submitterId",
                        "label": "提交人",
                        "cnLabel": null,
                        "configs": null,
                        "enLabel": null,
                        "editable": true,
                        "filterId": null,
                        "hideCode": false,
                        "multiple": false,
                        "optional": false,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "placeholder": "请选择提交人",
                        "selectRange": "leaf",
                        "defaultValue": {
                            "type": "predefine",
                            "value": "submitter"
                        },
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "assignmentRule": null,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "isShowFullPath": false,
                        "valueRangeFilter": null,
                        "editStatePathRule": "choosePath",
                        "readStatePathRule": "fullPath",
                        "allowExternalStaff": false,
                        "dependenceCondition": null,
                        "isLinkageAssignment": false,
                        "onlyBelongDepartment": false,
                        "allowCancelDependence": false,
                        "inheritedFieldDependency": false
                    },
                    {
                        "hide": false,
                        "type": "date",
                        "field": "expenseDate",
                        "label": "报销日期",
                        "cnLabel": null,
                        "configs": null,
                        "enLabel": null,
                        "editable": true,
                        "optional": false,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "withTime": false,
                        "placeholder": null,
                        "dateTimeType": null,
                        "defaultValue": {
                            "type": "predefine",
                            "value": "submit.date"
                        },
                        "specificTime": false,
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        }
                    },
                    {
                        "hide": false,
                        "type": "select",
                        "field": "expenseDepartment",
                        "label": "报销部门",
                        "cnLabel": null,
                        "configs": null,
                        "enLabel": null,
                        "editable": true,
                        "filterId": null,
                        "hideCode": false,
                        "multiple": false,
                        "optional": false,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "placeholder": "请选择报销部门",
                        "selectRange": "all",
                        "defaultValue": {
                            "type": "predefine",
                            "value": "submit.department"
                        },
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "assignmentRule": null,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "isShowFullPath": false,
                        "valueRangeFilter": null,
                        "editStatePathRule": "choosePath",
                        "readStatePathRule": "fullPath",
                        "allowExternalStaff": false,
                        "dependenceCondition": null,
                        "isLinkageAssignment": false,
                        "onlyBelongDepartment": false,
                        "allowCancelDependence": false,
                        "inheritedFieldDependency": false
                    },
                    {
                        "hide": false,
                        "type": "payeeInfo",
                        "field": "payeeId",
                        "label": "收款信息",
                        "cnLabel": null,
                        "configs": null,
                        "enLabel": null,
                        "editable": true,
                        "optional": false,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "filterRules": null,
                        "placeholder": "请选择收款信息",
                        "defaultValue": {
                            "type": "predefine",
                            "value": "entity.default"
                        },
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "dependenceCondition": null
                    },
                    {
                        "hide": false,
                        "type": "textarea",
                        "field": "description",
                        "label": "描述",
                        "cnLabel": null,
                        "configs": null,
                        "enLabel": null,
                        "editable": true,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "maxLength": 140,
                        "minLength": 0,
                        "placeholder": "请输入描述",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "exceedConfigs": null,
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        }
                    },
                    {
                        "type": "separator",
                        "label": "",
                        "cnLabel": null,
                        "enLabel": null,
                        "showInDetails": false
                    },
                    {
                        "hide": false,
                        "type": "details",
                        "field": "details",
                        "label": "费用明细",
                        "cnLabel": null,
                        "configs": null,
                        "enLabel": null,
                        "editable": true,
                        "optional": false,
                        "showType": "LIST",
                        "dependence": null,
                        "visibility": null,
                        "orderByType": null,
                        "placeholder": null,
                        "showTypeNew": [
                            "LIST_P",
                            "LIST"
                        ],
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "isFeeTypeEmpty": false,
                        "dependenceCondition": null,
                        "feeTypeImportRuleId": "DEFAULT_ID",
                        "visibleStaffSelection": null,
                        "requisitionCanBindInvoice": false,
                        "mustAllFeeTypeCurrencyEqual": false
                    },
                    {
                        "type": "separator",
                        "label": "",
                        "cnLabel": null,
                        "enLabel": null,
                        "showInDetails": false
                    },
                    {
                        "hide": false,
                        "type": "select",
                        "field": "expenseLink",
                        "label": "关联申请",
                        "cnLabel": null,
                        "configs": null,
                        "enLabel": null,
                        "editable": true,
                        "filterId": null,
                        "hideCode": false,
                        "multiple": false,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "placeholder": "请选择关联申请单",
                        "selectRange": "leaf",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "assignmentRule": null,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "isShowFullPath": false,
                        "valueRangeFilter": null,
                        "editStatePathRule": "choosePath",
                        "readStatePathRule": "fullPath",
                        "allowExternalStaff": false,
                        "dependenceCondition": null,
                        "isLinkageAssignment": false,
                        "onlyBelongDepartment": false,
                        "allowCancelDependence": false,
                        "inheritedFieldDependency": false
                    },
                    {
                        "hide": false,
                        "type": "text",
                        "field": "u_Z_文本",
                        "label": "Z_文本",
                        "cnLabel": "Z_文本",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "maxLength": 14,
                        "minLength": 0,
                        "placeholder": "请输入Z_文本",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "请输入Z_文本",
                        "enPlaceholder": null,
                        "exceedConfigs": null,
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        }
                    },
                    {
                        "max": "10000000000",
                        "min": "-1000000000",
                        "hide": false,
                        "type": "number",
                        "field": "u_Z整数",
                        "label": "Z整数",
                        "cnLabel": "Z整数",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "optional": false,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "countRule": null,
                        "placeholder": "请输入Z整数",
                        "defaultValue": {
                            "type": "constant",
                            "value": 0
                        },
                        "cnPlaceholder": "请输入Z整数",
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "countRuleCheck": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        }
                    },
                    {
                        "max": "10000000000.00",
                        "min": "0.01",
                        "hide": false,
                        "type": "money",
                        "field": "u_Z金额",
                        "label": "Z金额",
                        "cnLabel": "Z金额",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "hiddenRate": false,
                        "placeholder": "请输入Z金额",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "请输入Z金额",
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "isShowThousandsSeparator": false
                    },
                    {
                        "hide": false,
                        "type": "date",
                        "field": "u_Z日期",
                        "label": "Z日期",
                        "cnLabel": "Z日期",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "optional": false,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "withTime": false,
                        "placeholder": null,
                        "dateTimeType": null,
                        "defaultValue": {
                            "type": "predefine",
                            "value": "submit.date"
                        },
                        "specificTime": false,
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        }
                    },
                    {
                        "hide": false,
                        "type": "switcher",
                        "field": "u_Z开关",
                        "label": "Z开关",
                        "cnLabel": "Z开关",
                        "configs": null,
                        "enLabel": null,
                        "editable": true,
                        "optional": false,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "placeholder": "Z开关",
                        "defaultValue": {
                            "type": "constant",
                            "value": true
                        },
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        }
                    },
                    {
                        "hide": false,
                        "type": "dateRange",
                        "field": "u_Z范围日期",
                        "label": "Z范围日期",
                        "cnLabel": "Z范围日期",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "optional": false,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "withTime": false,
                        "placeholder": null,
                        "dateTimeType": null,
                        "defaultValue": {
                            "type": "predefine",
                            "value": "submit.date"
                        },
                        "specificTime": false,
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        }
                    },
                    {
                        "type": "attachments",
                        "field": "u_Z附件",
                        "label": "Z附件",
                        "cnLabel": "Z附件",
                        "configs": [],
                        "enLabel": null,
                        "editable": true,
                        "optional": true,
                        "placeholder": null,
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": null,
                        "enPlaceholder": null,
                        "showInDetails": false
                    },
                    {
                        "hide": false,
                        "type": "select",
                        "field": "u_Z枚举航班",
                        "label": "Z枚举航班",
                        "cnLabel": "Z枚举航班",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "filterId": null,
                        "hideCode": false,
                        "multiple": false,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "placeholder": "请选择Z枚举航班",
                        "selectRange": "leaf",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "请选择Z枚举航班",
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "assignmentRule": null,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "isShowFullPath": false,
                        "valueRangeFilter": null,
                        "editStatePathRule": "choosePath",
                        "readStatePathRule": "fullPath",
                        "allowExternalStaff": false,
                        "dependenceCondition": null,
                        "isLinkageAssignment": false,
                        "onlyBelongDepartment": false,
                        "allowCancelDependence": false,
                        "inheritedFieldDependency": false
                    },
                    {
                        "hide": true,
                        "type": "city",
                        "field": "u_Z城市",
                        "label": "Z城市",
                        "cnLabel": "Z城市",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "multiple": false,
                        "optional": false,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "cityGroupId": null,
                        "placeholder": "请选择Z城市",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "请选择Z城市",
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "hasForbiddenCityGroup": false
                    },
                    {
                        "hide": false,
                        "type": "select",
                        "field": "u_Z部门",
                        "label": "Z部门",
                        "cnLabel": "Z部门",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "filterId": null,
                        "hideCode": false,
                        "multiple": false,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "placeholder": "请选择Z部门",
                        "selectRange": "all",
                        "defaultValue": {
                            "type": "predefine",
                            "value": "submit.department"
                        },
                        "cnPlaceholder": "请选择Z部门",
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "assignmentRule": null,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "isShowFullPath": false,
                        "valueRangeFilter": null,
                        "editStatePathRule": "choosePath",
                        "readStatePathRule": "fullPath",
                        "allowExternalStaff": false,
                        "dependenceCondition": null,
                        "isLinkageAssignment": false,
                        "onlyBelongDepartment": false,
                        "allowCancelDependence": false,
                        "inheritedFieldDependency": false
                    },
                    {
                        "hide": false,
                        "type": "select",
                        "field": "u_Z员工",
                        "label": "Z员工",
                        "cnLabel": "Z员工",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "filterId": null,
                        "hideCode": false,
                        "multiple": false,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "placeholder": "请选择Z员工",
                        "selectRange": "leaf",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "请选择Z员工",
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "assignmentRule": null,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "isShowFullPath": false,
                        "valueRangeFilter": null,
                        "editStatePathRule": "choosePath",
                        "readStatePathRule": "fullPath",
                        "allowExternalStaff": false,
                        "dependenceCondition": null,
                        "isLinkageAssignment": false,
                        "onlyBelongDepartment": false,
                        "allowCancelDependence": false,
                        "inheritedFieldDependency": false
                    },
                    {
                        "hide": false,
                        "type": "select",
                        "field": "u_Z员工多选",
                        "label": "Z员工多选",
                        "cnLabel": "Z员工多选",
                        "configs": [],
                        "enLabel": null,
                        "editable": true,
                        "filterId": null,
                        "hideCode": false,
                        "multiple": true,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "placeholder": "请选择Z员工多选",
                        "selectRange": "leaf",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "请选择Z员工多选",
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "assignmentRule": null,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "isShowFullPath": false,
                        "valueRangeFilter": null,
                        "editStatePathRule": "choosePath",
                        "readStatePathRule": "fullPath",
                        "allowExternalStaff": false,
                        "dependenceCondition": null,
                        "isLinkageAssignment": false,
                        "onlyBelongDepartment": false,
                        "allowCancelDependence": false,
                        "inheritedFieldDependency": false
                    },
                    {
                        "hide": false,
                        "type": "dataLink",
                        "field": "u_Z张国阳测试",
                        "label": "Z张国阳测试",
                        "cnLabel": "Z张国阳测试",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "filterId": null,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "placeholder": "请选择Z张国阳测试",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "请选择Z张国阳测试",
                        "enPlaceholder": null,
                        "referenceData": "e70e7649f5774bb6bc00",
                        "showInDetails": false,
                        "assignmentRule": null,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "dependenceCondition": null,
                        "isLinkageAssignment": false,
                        "allowCancelDependence": false,
                        "autoFillByFilterDataOnlyOne": false
                    },
                    {
                        "hide": false,
                        "type": "select",
                        "field": "u_Z_张国阳1",
                        "label": "Z_张国阳1",
                        "cnLabel": "Z_张国阳1",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "filterId": null,
                        "hideCode": false,
                        "multiple": false,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "placeholder": "请选择Z_张国阳1",
                        "selectRange": "all",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "请选择Z_张国阳1",
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "assignmentRule": null,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "isShowFullPath": false,
                        "valueRangeFilter": null,
                        "editStatePathRule": "choosePath",
                        "readStatePathRule": "fullPath",
                        "allowExternalStaff": false,
                        "dependenceCondition": null,
                        "isLinkageAssignment": false,
                        "onlyBelongDepartment": false,
                        "allowCancelDependence": false,
                        "inheritedFieldDependency": false
                    },
                    {
                        "hide": false,
                        "type": "select",
                        "field": "u_Z项目多选",
                        "label": "Z项目多选",
                        "cnLabel": "Z项目多选",
                        "configs": [],
                        "enLabel": null,
                        "editable": true,
                        "filterId": null,
                        "hideCode": false,
                        "multiple": true,
                        "optional": true,
                        "priority": [
                            {
                                "type": "MANUALLY_FILL_IN",
                                "value": 5
                            },
                            {
                                "type": "LINKAGE_ASSIGNMENT",
                                "value": 10
                            },
                            {
                                "type": "AUTOMATIC_CALCULATION",
                                "value": 15
                            },
                            {
                                "type": "COST_STANDARD",
                                "value": 20
                            }
                        ],
                        "dependence": null,
                        "placeholder": "请选择Z项目多选",
                        "selectRange": "all",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "请选择Z项目多选",
                        "enPlaceholder": null,
                        "showInDetails": false,
                        "assignmentRule": null,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "isShowFullPath": false,
                        "valueRangeFilter": null,
                        "editStatePathRule": "choosePath",
                        "readStatePathRule": "fullPath",
                        "allowExternalStaff": false,
                        "dependenceCondition": null,
                        "isLinkageAssignment": false,
                        "onlyBelongDepartment": false,
                        "allowCancelDependence": false,
                        "inheritedFieldDependency": false
                    },
                    {
                        "hide": false,
                        "type": "dataLinkEdits",
                        "field": "u_Z写业务对象",
                        "label": "Z写业务对象",
                        "cnLabel": "Z写业务对象",
                        "configs": [],
                        "enLabel": "",
                        "editable": true,
                        "optional": true,
                        "priority": null,
                        "behaviour": "INSERT",
                        "importMode": "SINGLE",
                        "placeholder": "",
                        "defaultValue": {
                            "type": "none"
                        },
                        "cnPlaceholder": "",
                        "enPlaceholder": null,
                        "referenceData": "e70e7649f5774bb6bc00",
                        "showInDetails": false,
                        "hideVisibility": {
                            "roles": [],
                            "staffs": [],
                            "departments": [],
                            "fullVisible": false,
                            "departmentsIncludeChildren": true
                        },
                        "limitEntityIds": null,
                        "dataLinkHiddenLabel": false
                    }
                ],
                "createTime": 1659522026906,
                "originalId": "ID01i0CxWopljp",
                "updateTime": 1659522026906,
                "description": "",
                "corporationId": "xgJ3wajigF25H0",
                "dataCorporationId": null,
                "mustUpdateTemplate": null,
                "sourceCorporationId": null,
                "specificationGroupId": "ID_3IurxgI0v_w:system",
                "budgetPermitAllowEdit": false
            },
            "u_Z员工多选": [
                "xgJ3wajigF25H0:ID_3Lsj_o3zDAf",
                "xgJ3wajigF25H0:DSF0001511",
                "xgJ3wajigF25H0:kWA9VElpo00Y00"
            ],
            "u_Z枚举航班": "ECONOMY",
            "u_Z范围日期": {
                "end": 1659456000000,
                "start": 1659456000000
            },
            "writtenOffMoney": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "expenseDepartment": {
                "id": "xgJ3wajigF25H0",
                "code": "001",
                "form": {
                    "legalEntity": "ID_3FQR$Yx1NWM"
                },
                "leaf": true,
                "name": "洪洞大槐树",
                "order": 0,
                "active": true,
                "belong": {
                    "auth": null,
                    "name": null
                },
                "frozen": false,
                "fromWay": "manual",
                "grayver": "9.27.0.0:A",
                "version": 5,
                "parentId": "",
                "pipeline": 1,
                "nameSpell": "HONGDONGDAHUAISHU",
                "createTime": 1641969768671,
                "updateTime": 1645690589994,
                "permissions": [
                    {
                        "auth": true,
                        "name": "ALL"
                    }
                ],
                "corporationId": "xgJ3wajigF25H0",
                "dataCorporationId": null,
                "sourceCorporationId": null
            },
            "voucherCreateTime": 0,
            "u_Z写业务对象": [
                {
                    "dataLinkId": null,
                    "dataLinkForm": {
                        "E_e70e7649f5774bb6bc00_code": "CODE11",
                        "E_e70e7649f5774bb6bc00_name": "测试11",
                        "E_e70e7649f5774bb6bc00_价格": {
                            "standard": "1",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "E_e70e7649f5774bb6bc00_单价": {
                            "standard": "1",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "E_e70e7649f5774bb6bc00_Z数值": "11",
                        "E_e70e7649f5774bb6bc00_Z文本": "测试11",
                        "E_e70e7649f5774bb6bc00_团队成员": [
                            "xgJ3wajigF25H0:ID_3E97sZ43tMw",
                            "xgJ3wajigF25H0:ID_3Lsj_o3zDAf"
                        ],
                        "E_e70e7649f5774bb6bc00_张国阳001": "ID_3yv5JV_0W6w",
                        "E_e70e7649f5774bb6bc00_必填数值": "2",
                        "E_e70e7649f5774bb6bc00_必填文本": "2",
                        "E_e70e7649f5774bb6bc00_相关部门": "xgJ3wajigF25H0",
                        "E_e70e7649f5774bb6bc00_部门必填": "xgJ3wajigF25H0",
                        "E_e70e7649f5774bb6bc00_其他业务对象1": [
                            "ID_3KjWXRDwC9M"
                        ],
                        "E_e70e7649f5774bb6bc00_必填多选业务对象": [
                            "ID_3KjWXRDwC9M"
                        ]
                    },
                    "dataLinkTemplateId": "ID_3Dp9ZntbOHM"
                }
            ],
            "u_Z张国阳测试": {
                "id": "ID_3KjWXRDwL9M",
                "code": "code1",
                "form": {
                    "E_e70e7649f5774bb6bc00_code": "code1",
                    "E_e70e7649f5774bb6bc00_name": "测试1",
                    "E_e70e7649f5774bb6bc00_价格": {
                        "standard": "1",
                        "standardUnit": "元",
                        "standardScale": 2,
                        "standardSymbol": "¥",
                        "standardNumCode": "156",
                        "standardStrCode": "CNY"
                    },
                    "E_e70e7649f5774bb6bc00_单价": {
                        "standard": "1",
                        "standardUnit": "元",
                        "standardScale": 2,
                        "standardSymbol": "¥",
                        "standardNumCode": "156",
                        "standardStrCode": "CNY"
                    },
                    "E_e70e7649f5774bb6bc00_Z数值": "1",
                    "E_e70e7649f5774bb6bc00_Z文本": "测试1",
                    "E_e70e7649f5774bb6bc00_团队成员": [
                        "xgJ3wajigF25H0:ID_3E97sZ43rMw"
                    ],
                    "E_e70e7649f5774bb6bc00_张国阳001": "ID_3yv5JV_096w",
                    "E_e70e7649f5774bb6bc00_必填数值": "1",
                    "E_e70e7649f5774bb6bc00_必填文本": "测试1",
                    "E_e70e7649f5774bb6bc00_相关部门": "xgJ3wajigF25H0",
                    "E_e70e7649f5774bb6bc00_部门必填": "xgJ3wajigF25H0",
                    "E_e70e7649f5774bb6bc00_自动计算价格": {
                        "standard": "2.00",
                        "standardUnit": "元",
                        "standardScale": 2,
                        "standardSymbol": "¥",
                        "standardNumCode": "156",
                        "standardStrCode": "CNY"
                    },
                    "E_e70e7649f5774bb6bc00_其他业务对象1": [
                        "ID_3KjWXRDwC9M"
                    ],
                    "E_e70e7649f5774bb6bc00_必填多选业务对象": [
                        "ID_3KjWXRDwC9M"
                    ]
                },
                "name": "测试1",
                "index": 0,
                "active": true,
                "source": "API",
                "grayver": "9.50.0.0-prd",
                "ownerId": "xgJ3wajigF25H0:AvX3B4CxjprN7w",
                "topDate": 0,
                "topFlag": 0,
                "version": 23,
                "visible": true,
                "entityId": "e70e7649f5774bb6bc00",
                "masterId": "",
                "pipeline": 1,
                "sourceId": "",
                "useCount": 0,
                "nameSpell": "CESHI1",
                "createTime": 1657174501815,
                "flowCounts": {
                    "ID_3LjpUmm72Q_": 0
                },
                "operatorId": null,
                "platformId": "ID_3Dp9ZntaRHM",
                "totalCount": 0,
                "updateTime": 1659522371445,
                "visibility": {
                    "roles": [
                        "ID_3BePiKZ09cw"
                    ],
                    "staffs": [
                        "xgJ3wajigF25H0:AvX3B4CxjprN7w",
                        "xgJ3wajigF25H0:DSF0001511"
                    ],
                    "departments": [
                        "xgJ3wajigF25H0:ID_3FQR$Yx0zWM",
                        "xgJ3wajigF25H0:ID_3FQR$Yx0pWM"
                    ],
                    "fullVisible": true,
                    "departmentsIncludeChildren": true
                },
                "ledgerAmount": {
                    "E_ID_3KjWXRDvw9M_支付汇总_L": "33.00000000"
                },
                "corporationId": "xgJ3wajigF25H0",
                "sourceMessage": "",
                "dataCorporationId": null,
                "ledgerAmountModel": {
                    "E_ID_3KjWXRDvw9M_支付汇总_L": {
                        "standard": "33.00",
                        "standardUnit": "元",
                        "standardScale": 2,
                        "standardSymbol": "¥",
                        "standardNumCode": "156",
                        "standardStrCode": "CNY"
                    }
                },
                "controlCalcVersion": 16,
                "rigidControlPassed": true,
                "selfPlannedConfigs": [],
                "sourceCorporationId": null
            }
        }
    }
}

```
</TabItem>
</Tabs>

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 请求参数不正确 | 请确认 `select`（关联字段信息查询）是否正确 |
