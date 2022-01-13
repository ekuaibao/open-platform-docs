# 统一开票

import Control from "@theme/Control";

<Control
method="GET"
url="api/openapi/v1/invoice/unify"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**               | String | 认证token    | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **unifyInvoiceCorporationId** | String | 开票方id     | 必填 | - | [获取开票方](/docs/open-api/datalink/get-entity-unify-corporation) |
| **index**                     | Number | 确认开票时间戳 | 必填 | - | 例如：当index=1612344239976时，会查询所有index>1612344239976的开票信息 |
| **count**                     | Number | 查询数据条数  | 必填 | - | 不可超过10 |

## CURL
```json
curl --location --request get 'http://app.ekuaibao.com/api/openapi/v1/invoice/unify?accessToken=ojkcqAnfM40g00&unifyInvoiceCorporationId=0KkcigsqylyI00&index=1612344239976&count=10
```

## 成功响应
```json
{
    "items": [
        {
            "id": "_2cctOuhHgH800",
            "money": {
                "standard": "56.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "state": "SUCCESS",
            "active": true,
            "batchNo": "2103111619365",   //开票批次号
            "channel": "OFFLINE",
            "version": 3,
            "feeCount": 1,
            "invoices": [		//发票信息
                {
                    "invoiceId": "cWQc8EeLU41A00:011001900411:47211517",
                    "invoiceDetailIds": [
                        "zVUctOuhHgI400"
                    ],
                    "invoiceDetail": {
                    "master": {		//发票主体
                        "version": 2,
                        "active": false,
                        "createTime": 1615450904276,
                        "updateTime": 1615450911309,
                        "name": "47211517",
                        "nameSpell": "47211517",
                        "code": "011001900411:47211517",
                        "corporationId": "cWQc8EeLU41A00",
                        "id": "cWQc8EeLU41A00:011001900411:47211517",
                        "form": {
                            "E_税额": {
                                "standard": "0.00",
                                "standardUnit": "元",
                                "standardScale": "2",
                                "standardSymbol": "¥",
                                "standardNumCode": "156",
                                "standardStrCode": "CNY"
                            },
                            "E_是否抵扣": false,
                            "E_不计税金额": {
                                "standard": "131.86",
                                "standardUnit": "元",
                                "standardScale": "2",
                                "standardSymbol": "¥",
                                "standardNumCode": "156",
                                "standardStrCode": "CNY"
                            },
                            "E_system_收票状态": "NORECEIVE",
                            "E_system_发票主体_OFD": null,
                            "E_system_发票主体_PDF": "invoice/pdf/6fad2c5f-a2f8-4419-a8ff-2cae510a85ee-%E7%80%B5%E5%9B%AA%E2%82%AC%E4%BD%B8%E7%AC%80%E7%BC%81_06.pdf",
                            "E_system_发票主体_code": "011001900411",
                            "E_system_发票主体_name": "47211517",
                            "E_system_发票主体_cardId": null,
                            "E_system_发票主体_图片": null,
                            "E_system_发票主体_备注": "订单号:104195242116",
                            "E_system_发票主体_来源": "UPLOAD",
                            "E_system_发票主体_税额": {
                                "standard": "17.14",
                                "standardUnit": "元",
                                "standardScale": "2",
                                "standardSymbol": "¥",
                                "standardNumCode": "156",
                                "standardStrCode": "CNY"
                            },
                            "E_system_发票主体_验真": true,
                            "E_system_发票主体_encryptCode": null,
                            "E_system_发票主体_价税合计": {
                                "standard": "149.00",
                                "standardUnit": "元",
                                "standardScale": "2",
                                "standardSymbol": "¥",
                                "standardNumCode": "156",
                                "standardStrCode": "CNY"
                            },
                            "E_system_发票主体_发票代码": "011001900411",
                            "E_system_发票主体_发票号码": "47211517",
                            "E_system_发票主体_发票日期": 1570377600000,
                            "E_system_发票主体_发票类别": "DIGITAL_NORMAL",
                            "E_system_发票主体_发票金额": {
                                "standard": "131.86",
                                "standardUnit": "元",
                                "standardScale": "2",
                                "standardSymbol": "¥",
                                "standardNumCode": "156",
                                "standardStrCode": "CNY"
                            },
                            "E_system_发票主体_购买方名称": "个人",
                            "E_system_发票主体_销售方名称": "北京京东拓帆贸易有限公司",
                            "E_system_发票主体_购买方地址电话": "",
                            "E_system_发票主体_购买方开户行及账号": "",
                            "E_system_发票主体_购买方纳税人识别号": null,
                            "E_system_发票主体_销售方纳税人识别号": "91110113MA01ADGN8R"
                        },
                        "ledgerAmount": null,
                        "ledgerAmountModel": null,
                        "totalCount": 1,
                        "useCount": 0,
                        "entityId": "system_发票主体",
                        "platformId": "system_发票平台",
                        "source": "WRITE",
                        "masterId": null,
                        "index": 0,
                        "visibility": {
                            "fullVisible": true,
                            "staffs": null,
                            "roles": null,
                            "departments": null,
                            "departmentsIncludeChildren": true
                        },
                        "visible": true,
                        "ownerId": "",
                        "operatorId": "cWQc8EeLU41A00:080c8EeVus1E00",
                        "sourceId": "",
                        "selfPlannedConfigs": [],
                        "rigidControlPassed": true,
                        "controlCalcVersion": 2,
                        "flowCounts": {},
                        "sourceMessage": ""
                    },
                    "details": [	//发票详情
                        {
                            "version": 2,
                            "active": false,
                            "createTime": 1615450904325,
                            "updateTime": 1615450911251,
                            "name": "*软饮料*Monster 魔爪 芒果味风味饮料 维生素饮料 运动饮料 330ml*24罐 整箱装 可口可乐公司出品",
                            "nameSpell": "*RUANYINLIAO*Monster MOZHUA MANGGUOWEIFENGWEIYINLIAO WEISHENGSUYINLIAO YUNDONGYINLIAO 330ml*24GUAN ZHENGXIANGZHUANG KEKOUKELEGONGSICHUPIN",
                            "code": "zVUctOuhHgI400",
                            "corporationId": "cWQc8EeLU41A00",
                            "id": "zVUctOuhHgI400",
                            "form": {
                                "E_system_发票明细_code": "zVUctOuhHgI400",
                                "E_system_发票明细_name": "*软饮料*Monster 魔爪 芒果味风味饮料 维生素饮料 运动饮料 330ml*24罐 整箱装 可口可乐公司出品",
                                "E_system_发票明细_单价": {
                                    "standard": "131.86",
                                    "standardUnit": "元",
                                    "standardScale": "2",
                                    "standardSymbol": "¥",
                                    "standardNumCode": "156",
                                    "standardStrCode": "CNY"
                                },
                                "E_system_发票明细_数量": "1",
                                "E_system_发票明细_税率": "13%",
                                "E_system_发票明细_税额": {
                                    "standard": "17.14",
                                    "standardUnit": "元",
                                    "standardScale": "2",
                                    "standardSymbol": "¥",
                                    "standardNumCode": "156",
                                    "standardStrCode": "CNY"
                                },
                                "E_system_发票明细_金额": {
                                    "standard": "131.86",
                                    "standardUnit": "元",
                                    "standardScale": "2",
                                    "standardSymbol": "¥",
                                    "standardNumCode": "156",
                                    "standardStrCode": "CNY"
                                }
                            },
                            "ledgerAmount": null,
                            "ledgerAmountModel": null,
                            "totalCount": 1,
                            "useCount": 0,
                            "entityId": "system_发票明细",
                            "platformId": "system_发票平台",
                            "source": "WRITE",
                            "masterId": "cWQc8EeLU41A00:011001900411:47211517",
                            "index": 0,
                            "visibility": {
                                "fullVisible": true,
                                "staffs": null,
                                "roles": null,
                                "departments": null,
                                "departmentsIncludeChildren": true
                            },
                            "visible": true,
                            "ownerId": "",
                            "operatorId": "cWQc8EeLU41A00:080c8EeVus1E00",
                            "sourceId": "",
                            "selfPlannedConfigs": [],
                            "rigidControlPassed": true,
                            "controlCalcVersion": 2,
                            "flowCounts": {},
                            "sourceMessage": ""
                        }
                    ],
                    "message": null,
                    "status": "SUCCESS",
                    "ischeck": true
                    }
                }
            ],
            "createTime": 1615450776662,
            "updateTime": 1615450913978,
            "corporationId": "cWQc8EeLU41A00",
            "invoiceDetailIds": [
                "zVUctOuhHgI400"
            ],
            "onlineInvoiceInfo": null,
            "onlineInvoiceType": null,
            "onlineInvoiceState": "线下开票",
            "unifyInvoiceReceiverInfo": null,
            "unifyInvoiceCorporationId": "LCccnaJWo4Xc00",
            "InvoiceFlowRelations": [		//开票明细
                {
                    "id": "JVYcrT37_Bww00",
                    "extra": {
                        "money": {
                            "standard": "56",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "feeDate": 1615132800000,
                        "formCode": "B21000245",
                        "departure": null,
                        "feeTypeId": {
                            "id": "cWQc8EeLU41A00:catering",
                            "code": "COST2",
                            "icon": "https://images.ekuaibao.com/feetype/sf_400.png",
                            "name": "餐饮",
                            "color": "#F48FB1",
                            "active": true,
                            "version": 3,
                            "editorId": "cWQc8EeLU41A00:080c8EeVus1E00",
                            "parentId": "",
                            "nameSpell": "CANYIN",
                            "createTime": 1609752344559,
                            "updateTime": 1615188374539,
                            "description": null,
                            "corporationId": "cWQc8EeLU41A00",
                            "expenseSpecificationId": "cWQc8EeLU41A00:catering:expense:92a5c022aaf9872373c87f6e34e2790d1512634f",
                            "requisitionSpecificationId": "cWQc8EeLU41A00:catering:requisition:3834b6e21822212011388b821c252616791930d3"
                        },
                        "flowTitle": "统一开票005",
                        "orderInfo": null,
                        "useCarType": null,
                        "destination": null,
                        "expenseDate": 1615132800000,
                        "legalEntity": null,
                        "submitterId": {
                            "id": "cWQc8EeLU41A00:080c8EeVus1E00",
                            "name": "demon"
                        },
                        "departmentId": {
                            "id": "cWQc8EeLU41A00",
                            "code": "",
                            "name": "123demon"
                        },
                        "departureTime": null
                    },
                    "active": true,
                    "flowId": "6eMcsT-Dbp5000",
                    "batchId": "_2cctOuhHgH800",
                    "version": 1,
                    "feeTypeId": null,
                    "invoiceId": null,
                    "createTime": 1615202256933,
                    "updateTime": 1615202256933,
                    "corporationId": "cWQc8EeLU41A00",
                    "flowFeeDetailId": "NwHYMogKES2a9h",
                    "invoiceDetailId": null,
                    "invoiceFlowRelationType": "UNIFY",
                    "unifyInvoiceCorporationId": "LCccnaJWo4Xc00",
                    "flowDetail": {			//单据详情
                    "type": "expense",
                    "id": "6eMcsT-Dbp5000",
                    "corporationId": "cWQc8EeLU41A00",
                    "ownerId": "cWQc8EeLU41A00:080c8EeVus1E00",
                    "dataType": "expense",
                    "remark": "统一开票005",
                    "title": "统一开票005",
                    "updateTime": 1615202256576,
                    "specificationId": "i6Ec8D_qM8iY00:809f817dae13e6ea174363540a4b0a0b7969d5dc",
                    "owner": {
                        "id": "cWQc8EeLU41A00:080c8EeVus1E00",
                        "name": "demon",
                        "departments": [
                            {
                                "id": "cWQc8EeLU41A00",
                                "name": "123demon",
                                "code": ""
                            }
                        ],
                        "code": ""
                    },
                    "department": {
                        "id": "cWQc8EeLU41A00",
                        "name": "123demon",
                        "code": ""
                    },
                    "code": "B21000245",
                    "userProps": {
                        "companyRealPay": "0.00",
                        "companyRealPay_standardStrCode": "CNY",
                        "companyRealPay_standardNumCode": "156",
                        "companyRealPay_standardSymbol": "¥",
                        "companyRealPay_standardUnit": "元",
                        "companyRealPay_rate": "1",
                        "companyRealPay_foreignStrCode": "",
                        "companyRealPay_foreignNumCode": "",
                        "companyRealPay_foreign": "",
                        "companyRealPay_foreignSymbol": "",
                        "companyRealPay_foreignUnit": "",
                        "specificationId": {
                            "id": "i6Ec8D_qM8iY00:809f817dae13e6ea174363540a4b0a0b7969d5dc",
                            "code": "",
                            "name": "日常报销单"
                        },
                        "submitterId": {
                            "id": "cWQc8EeLU41A00:080c8EeVus1E00",
                            "code": "",
                            "name": "demon"
                        },
                        "expenseDepartment": {
                            "id": "cWQc8EeLU41A00",
                            "code": "",
                            "name": "123demon"
                        },
                        "paymentAccountId": {
                            "id": "cWQc8EeLU41A00:BANK",
                            "code": "BANK",
                            "name": ""
                        },
                        "payeeId": {
                            "id": "0yIcaO3h6QpE00",
                            "code": "",
                            "name": "demon"
                        },
                        "description": "统一开票005"
                    },
                    "state": "PAID",
                    "project": null,
                    "logs": [
                        {
                            "isNew": false,
                            "corporationId": "cWQc8EeLU41A00",
                            "docDataCode": "B21000245",
                            "time": 1615202105963,
                            "state": "approving",
                            "action": "freeflow.submit",
                            "operatorId": "cWQc8EeLU41A00:080c8EeVus1E00",
                            "nodeName": "SUBMIT",
                            "nodeId": "SUBMIT",
                            "nextNodeId": "FLOW:712997568:960323477",
                            "nextOperatorId": "ebot",
                            "logid": "_1gcrxUE4wbQ00",
                            "attachments": [],
                            "attributes": {
                                "nextId": "FLOW:712997568:960323477",
                                "nodeId": "SUBMIT",
                                "comment": "",
                                "isUrgent": false,
                                "nextName": "费用标准检查",
                                "urgentReason": null,
                                "resubmitMethod": "FROM_START",
                                "nextCounterSign": false,
                                "sensitiveContent": null,
                                "resubmitOperatorIds": []
                            }
                        }
                    ],
                    "flowPlan": {
                        "id": "6eMcsT-Dbp5000",
                        "version": 6,
                        "active": true,
                        "createTime": 1615202105043,
                        "updateTime": 1615202256576,
                        "corporationId": "cWQc8EeLU41A00",
                        "prevId": "FLOW:1174915341:1356077765",
                        "nextNodeId": null,
                        "taskId": null,
                        "ownerId": "cWQc8EeLU41A00:080c8EeVus1E00",
                        "submitterId": "cWQc8EeLU41A00:080c8EeVus1E00",
                        "flowPlanConfigId": "visc9UC9NIdE00",
                        "submitNode": {
                            "id": "SUBMIT",
                            "nextId": "SUBMIT",
                            "nextApproverIds": null,
                            "ownerId": "cWQc8EeLU41A00:080c8EeVus1E00",
                            "carbonCopy": [],
                            "urgent": null,
                            "isSensitive": null,
                            "isRequired": null,
                            "submitOutboundMessage": {
                                "messageId": "",
                                "failureOperation": "freeflow.reject",
                                "modifyApprovingExecute": false,
                                "submitExecute": false,
                                "waitingTime": {
                                    "isConfig": false,
                                    "value": 0,
                                    "overtimeOperation": "freeflow.reject"
                                }
                            },
                            "hidePrintBtnDependOnRemind": false,
                            "budgetCalcTime": null
                        },
                        "nodes": [
                            {
                                "type": "ebot",
                                "id": "FLOW:712997568:960323477",
                                "configNodeId": "@@:59FFF45A-1D3F-47EF-BD1F-1AA4A460D5E2",
                                "name": "费用标准检查",
                                "label": null,
                                "skippedType": "NO_SKIPPED",
                                "agreeType": "NO_AUTO_AGREE",
                                "conditionalDescription": null,
                                "conditionalType": null,
                                "skipWhenApproverNonMatched": false,
                                "autoAgreeWhenApproverRepeated": false,
                                "autoAgreeWhenApproverSameAsSubmitter": false,
                                "autoAgreeWhenCreditInsepction": false,
                                "creditNoteAvailable": false,
                                "allowModify": true,
                                "config": {
                                    "isAuto": false
                                },
                                "isAllStaffs": false,
                                "carbonCopy": [],
                                "timeCount": null,
                                "addCountReport": false,
                                "isAddNode": false,
                                "autoRemindPrint": false,
                                "beforeRemindPrint": false,
                                "expressConfig": null,
                                "commentWhenFlowHasRisk": false,
                                "forbidBatchApproveRiskFlow": false,
                                "condition": null,
                                "laterCalcReason": null,
                                "forbidAftAddNode": false,
                                "forbidShiftNode": false,
                                "ebotConfig": {
                                    "type": "costControlCheck",
                                    "setting": {
                                        "checkCostControl": [],
                                        "rejectCostControl": [],
                                        "isOutOfLimitReject": false
                                    }
                                },
                                "approveType": "NONE"
                            }
                        ],
                        "resubmitMethod": "TO_NEXTNODE",
                        "configVersion": 16
                    },
                    "sumAmount": 56,
                    "writeOffAmount": 0,
                    "expenseDate": 1615132800000,
                    "details": [
                        {
                            "amount": "56",
                            "amount_standardStrCode": "CNY",
                            "amount_standardNumCode": "156",
                            "amount_standardSymbol": "¥",
                            "amount_standardUnit": "元",
                            "amount_rate": null,
                            "amount_foreignStrCode": null,
                            "amount_foreignNumCode": null,
                            "amount_foreign": null,
                            "amount_foreignSymbol": null,
                            "amount_foreignUnit": null,
                            "date": 1615132800000,
                            "remark": null,
                            "feeTypeId": "cWQc8EeLU41A00:catering",
                            "userProps": {
                                "apportionSpecificationId": null,
                                "timeToEnterPendingPayment": "1615202183523",
                                "reviewStatus": "ALL",
                                "voucherStatus": "未生成",
                                "voucherCreateTime": "0",
                                "printCount": "0",
                                "printState": "noPrint",
                                "invoiceForm": "{\"type\":\"unify\",\"invoiceCorporationId\":\"LCccnaJWo4Xc00\"}",
                                "companyRealPay": "0.00",
                                "companyRealPay_standardStrCode": "CNY",
                                "companyRealPay_standardNumCode": "156",
                                "companyRealPay_standardSymbol": "¥",
                                "companyRealPay_standardUnit": "元",
                                "companyRealPay_rate": "1",
                                "companyRealPay_foreignStrCode": "",
                                "companyRealPay_foreignNumCode": "",
                                "companyRealPay_foreign": "",
                                "companyRealPay_foreignSymbol": "",
                                "companyRealPay_foreignUnit": "",
                                "writtenOffMoney": "0.00",
                                "writtenOffMoney_standardStrCode": "CNY",
                                "writtenOffMoney_standardNumCode": "156",
                                "writtenOffMoney_standardSymbol": "¥",
                                "writtenOffMoney_standardUnit": "元",
                                "writtenOffMoney_rate": "1",
                                "writtenOffMoney_foreignStrCode": "",
                                "writtenOffMoney_foreignNumCode": "",
                                "writtenOffMoney_foreign": "",
                                "writtenOffMoney_foreignSymbol": "",
                                "writtenOffMoney_foreignUnit": "",
                                "expenseDepartment": "cWQc8EeLU41A00",
                                "expenseMoney": "56.00",
                                "expenseMoney_standardStrCode": "CNY",
                                "expenseMoney_standardNumCode": "156",
                                "expenseMoney_standardSymbol": "¥",
                                "expenseMoney_standardUnit": "元",
                                "expenseMoney_rate": "1",
                                "expenseMoney_foreignStrCode": "",
                                "expenseMoney_foreignNumCode": "",
                                "expenseMoney_foreign": "",
                                "expenseMoney_foreignSymbol": "",
                                "expenseMoney_foreignUnit": "",
                                "expenseDate": "1615132800000",
                                "payMoney": "56.00",
                                "payMoney_standardStrCode": "CNY",
                                "payMoney_standardNumCode": "156",
                                "payMoney_standardSymbol": "¥",
                                "payMoney_standardUnit": "元",
                                "payMoney_rate": "1",
                                "payMoney_foreignStrCode": "",
                                "payMoney_foreignNumCode": "",
                                "payMoney_foreign": "",
                                "payMoney_foreignSymbol": "",
                                "payMoney_foreignUnit": "",
                                "paymentChannel": "OFFLINE",
                                "paymentAccountId": "cWQc8EeLU41A00:BANK",
                                "payDate": "1615202256486",
                                "payeeId": "0yIcaO3h6QpE00",
                                "feeTypeId": "cWQc8EeLU41A00:catering",
                                "amount": "56",
                                "amount_standardStrCode": "CNY",
                                "amount_standardNumCode": "156",
                                "amount_standardSymbol": "¥",
                                "amount_standardUnit": "元",
                                "amount_rate": "1",
                                "amount_foreignStrCode": "",
                                "amount_foreignNumCode": "",
                                "amount_foreign": "",
                                "amount_foreignSymbol": "",
                                "amount_foreignUnit": "",
                                "feeDate": "1615132800000",
                                "description": "统一开票005",
                                "attachments": "[]",
                                "apportionPercent": "100",
                                "apportionMoney": "56",
                                "apportionMoney_standardStrCode": "CNY",
                                "apportionMoney_standardNumCode": "156",
                                "apportionMoney_standardSymbol": "¥",
                                "apportionMoney_standardUnit": "元",
                                "apportionMoney_rate": "1",
                                "apportionMoney_foreignStrCode": "",
                                "apportionMoney_foreignNumCode": "",
                                "apportionMoney_foreign": "",
                                "apportionMoney_foreignSymbol": "",
                                "apportionMoney_foreignUnit": "",
                                "detailId": "NwHYMogKES2a9h"
                            },
                            "invoiceCount": 0,
                            "taxAmount": null,
                            "noTaxAmount": null,
                            "invoices": [],
                            "payeeInfo": null
                        }
                    ],
                    "writtenOffRecords": [],
                    "submitTime": 1615202104869,
                    "payeeInfo": {
                        "sort": "BANK",
                        "name": "demon",
                        "cardNo": "564891231654897",
                        "bank": "",
                        "branch": "中国农业银行南昌青山湖支行",
                        "type": "PERSONAL",
                        "province": "",
                        "city": "",
                        "certificateType": "",
                        "certificateNo": "",
                        "bankLinkNo": "103421031411",
                        "bankName": "",
                        "swiftCode": "",
                        "bankCode": "",
                        "branchCode": "",
                        "remark": "测试"
                    },
                    "payorId": "0yIcaO3h6QpE00",
                    "paymentChannel": "OFFLINE",
                    "paymentAccountId": "cWQc8EeLU41A00:BANK",
                    "payTime": 1615202256486,
                    "multiplePayeesMode": false,
                    "channelTradeNo": "OFFLINE2021000010"
                    }
                }
            ]
        } 
    ]
}
```

## 失败响应
```json
{
    "errorCode": 403,
    "errorMessage": "未授权",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

