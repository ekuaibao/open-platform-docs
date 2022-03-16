# 根据单据ID集合获取单据列表
此接口通过单据ID集合，查询出各个ID对应单据最新状态的数据内容。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/docs/[`ids`]"
/>

:::caution
- 单据状态为【**draft(草稿)、已删除**】的单据无法被查询到，返回空数组。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids** | Array | 单据ID集合 | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一)<br/>示例：[ zKIbl2WX4I8I00 , I8I00zKIbl2WX4 , zKIbI00l2WX4I8 ] |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token          | 必填 | - |  [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **powerCode**   | String  | 功能授权码，传入<br/>219902或者219904即可 | 必填 | - | `219902` : 开放接口 &emsp; `219904` : 开放接口(新) |       
| **type**        | String  | 单据类型            | 必填 | - | `expense` : 报销单<br/>`loan` : 借款单<br/>`payment` : 付款单<br/>`requisition` : 申请单<br/>`custom` : 通用审批单<br/>`permit` : 授权单(商城超标审批申请单)<br/>`receipt` : 收款单 |

##  CURL
```shell
curl --location -g --request GET 'https://app.ekuaibao.com/api/openapi/v1/docs/[ID_3lztYYX7DJg]?accessToken=ID_3mMbt0x01LM:Urf3lsFgBp00gw&powerCode=219902&type=expense'
```

## 成功响应

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="expense" label="报销单" default>

```json
{
    "items": [
        {
            "type": "expense",
            "id": "K-w94CqZkA3o00",                    //单据ID 对应其他api的flowId
            "corporationId": "e4A8oQS29g0w00",         //企业ID
            "ownerId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",//单据提交人ID
            "dataType": "expense",
            "remark": "",                              //备注
            "title": "报销单B19000188",                 //标题
            "updateTime": 1557131730611,               //更新日期时间戳
            "specificationId": "vbM8oQye68e400:961b7902e2640fabfa303798ae0547879d188eb1", //模板ID
            "owner": {                                 //提交人信息
                "id": "e4A8oQS29g0w00:C3I8oQCy9c4I00", //员工ID
                "name": "悟空",                        //姓名
                "departments": [                       //所属部门信息
                    {
                        "id": "e4A8oQS29g0w00",
                        "name": "西游记",
                        "code": ""
                    },
                    {
                        "id": "e4A8oQS29g0w00:5E89yN1WCAc000",
                        "name": "董事会",
                        "code": ""
                    }
                ],
                "code": ""
            },
            "department": {  //报销部门信息
                "id": "e4A8oQS29g0w00",
                "name": "西游记",
                "code": ""
            },                    
            "code": "B19000188",  //单据code
            "userProps": {        //单据字段信息
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
                    "id": "vbM8oQye68e400:961b7902e2640fabfa303798ae0547879d188eb1",
                    "code": "",
                    "name": "日常报销单"
                },
                "submitterId": {
                    "id": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "code": "02",
                    "name": "悟空"
                },
                "expenseDepartment": {
                    "id": "e4A8oQS29g0w00",
                    "code": "",
                    "name": "西游记"
                },
                "paymentAccountId": {
                    "id": "e4A8oQS29g0w00:BANK",
                    "code": "BANK",
                    "name": "默认银行账户"
                },
                "payeeId": {
                    "id": "Z5E8pQ-uw0e000",
                    "code": "",
                    "name": "11"
                }
            },
            "state": "PAID",  //单据状态
            "project": null,  //项目信息
            "logs": [
                {
                    "isNew": false,
                    "corporationId": "e4A8oQS29g0w00",
                    "docDataCode": "B19000188",
                    "time": 1557131190311,
                    "state": "approving",
                    "action": "freeflow.submit",
                    "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "nodeName": "SUBMIT",
                    "nodeId": "SUBMIT",
                    "nextNodeId": "FLOW:1697325022:762474015",
                    "nextOperatorId": "ebot",
                    "logid": "xjY94CpTSAn800",
                    "attachments": []
                },
                {
                    "isNew": false,
                    "corporationId": "e4A8oQS29g0w00",
                    "docDataCode": "B19000188",
                    "time": 1557131190838,
                    "state": "approving",
                    "action": "freeflow.autoAgree",
                    "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "nodeName": "财务复核",
                    "nodeId": "FLOW:527085486:1596108505",
                    "nextNodeId": "FLOW:1675143494:1903529114",
                    "nextOperatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "logid": "l_894CpTSAnc00",
                    "attachments": []
                },
                {
                    "isNew": false,
                    "corporationId": "e4A8oQS29g0w00",
                    "docDataCode": "B19000188",
                    "time": 1557131727126,
                    "state": "paying",
                    "action": "freeflow.paying",
                    "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "nodeName": "出纳支付",
                    "nodeId": "FLOW:1675143494:1903529114",
                    "nextNodeId": null,
                    "nextOperatorId": null,
                    "logid": "bSA94CzdZs3o00",
                    "attachments": []
                },
                {
                    "isNew": false,
                    "corporationId": "e4A8oQS29g0w00",
                    "docDataCode": "B19000188",
                    "time": 1557131730611,
                    "state": "paid",
                    "action": "freeflow.pay",
                    "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "nodeName": "",
                    "nodeId": "null",
                    "nextNodeId": null,
                    "nextOperatorId": null,
                    "logid": "HPo94CzdZsms00",
                    "attachments": []
                }
            ],
            "flowPlan": {
                "fromStartNode": true,
                "id": "K-w94CqZkA3o00",
                "version": 5,
                "active": true,
                "createTime": 1557131189309,
                "updateTime": 1557131730611,
                "corporationId": "e4A8oQS29g0w00",
                "prevId": "FLOW:1675143494:1903529114",
                "taskId": null,
                "ownerId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                "submitterId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                "flowPlanConfigId": "_gU8oQye68cc00",
                "submitNode": {
                    "id": "SUBMIT",
                    "nextId": "SUBMIT",
                    "nextApproverIds": null,
                    "ownerId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "carbonCopy": [],
                    "urgent": null
                },
                "nodes": [
                    {
                        "type": "ebot",
                        "id": "FLOW:1697325022:762474015",
                        "configNodeId": "Rks8oQye68cg00",
                        "name": "费用标准检查",
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
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
                        "ebotConfig": {
                            "type": "costControlCheck",
                            "setting": {
                                "checkCostControl": [],
                                "rejectCostControl": [],
                                "isOutOfLimitReject": false
                            }
                        }
                    },
                    {
                        "type": "normal",
                        "id": "FLOW:527085486:1596108505",
                        "configNodeId": "ZW88oQye68cs00",
                        "name": "财务复核",
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "APPROVER_SAME_AS_SUBMITTER",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": true,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": true,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "staffIds": [],
                        "approverId": "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                    },
                    {
                        "type": "normal",
                        "id": "FLOW:1675143494:1903529114",
                        "configNodeId": "jY48oQye68cw00",
                        "name": "出纳支付",
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "staffIds": [],
                        "approverId": "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                    }
                ]
            },
            "sumAmount": 22.00,            //报销总金额
            "writeOffAmount": 0.00,        //核销总金额
            "expenseDate": 1557129574147,  //报销日期时间戳
            "details": [
                {
                    "amount": "22",
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
                    "date": 1557129565043,
                    "remark": null,
                    "feeTypeId": "e4A8oQS29g0w00:catering",
                    "userProps": {
                        "invoiceForm": "{\"type\":\"noWrite\"}",
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
                        "expenseDepartment": "e4A8oQS29g0w00",
                        "expenseMoney": "22.00",
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
                        "expenseDate": "1557129574147",
                        "payMoney": "22.00",
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
                        "paymentAccountId": "e4A8oQS29g0w00:BANK",
                        "payDate": "1557131730611",
                        "payeeId": "Z5E8pQ-uw0e000",
                        "feeTypeId": "e4A8oQS29g0w00:catering",
                        "amount": "22",
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
                        "feeDate": "1557129565043",
                        "invoice": "1",
                        "attachments": "[]",
                        "apportionPercent": "100",
                        "apportionSpecificationId":"e4A8oQS29g0w00:报销部门分摊:61a8838dea300dd6cca459126d7a3b51c4a67111",  //分摊模板ID
                        "apportionAmountType":"e4A8oQS29g0w00:报销部门分摊",  //分摊方式
                        "apportionAmountFiled":"notaxamount",                //分摊字段
                        "apportionMoney": "22",
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
                        "detailId": "I-M94A-N9ErI00"
                    },
                    "invoiceCount": 1,
                    "taxAmount": null,
                    "noTaxAmount": null,
                    "invoices": [],
                    "payeeInfo": null
                }
            ],
            "writtenOffRecords": [],
            "submitTime": 1557131189300,
            "payeeInfo": {
                "name": "11",
                "cardNo": "11",
                "bank": "国家开发银行",
                "branch": "中国工商银行股份有限公司北京南中轴路支行",
                "type": "PERSONAL",
                "province": "黑龙江省",
                "city": "勃利县",
                "certificateType": "04",
                "certificateNo": "11",
                "bankLinkNo": "102100000097",
                "remark": "remark", //备注
            },
            "payorId": "Z5E8pQ-uw0e000",
            "paymentChannel": "OFFLINE",
            "paymentAccountId": "e4A8oQS29g0w00:BANK",
            "payTime": 1557131729824,
            "multiplePayeesMode": false
        }
    ]
}
```
</TabItem>
<TabItem value="loan" label="借款单">

```json
{
    "items": [
        {
            "type": "loan",                              //单据类型
            "id": "ygAcxFK839lc00",                      //单据ID
            "corporationId": "djg8LshfUkfM00",           //企业ID
            "ownerId": "djg8LshfUkfM00:NMIaVspFrM2Q00",  //单据提交人ID
            "dataType": "loan",
            "remark": "",                                //备注
            "title": "sdfsdf",                           //标题
            "updateTime": 1616469351976,                 //更新日期时间戳
            "specificationId": "hq48Mmqokkbs00:f087d153a4fd6af111608d0cc0702bd838f99dd2",  //单据模板ID
            "owner": {                                   //提交人信息
                "id": "djg8LshfUkfM00:NMIaVspFrM2Q00",   //员工ID
                "name": "刘新爱",                        //姓名
                "departments": [                         //所属人信息
                    {
                        "id": "djg8LshfUkfM00",
                        "name": "【测试】test_zyq",
                        "code": ""
                    }
                ],
                "code": ""
            },
            "department": {  //报销部门信息
                "id": "djg8LshfUkfM00",
                "name": "【测试】test_zyq",
                "code": ""
            },
            "code": "J21000005",
            "userProps": {  //单据自定义档案信息
                "specificationId": {
                    "id": "hq48Mmqokkbs00:f087d153a4fd6af111608d0cc0702bd838f99dd2",
                    "code": "",
                    "name": "借款单"
                },
                "submitterId": {
                    "id": "djg8LshfUkfM00:NMIaVspFrM2Q00",
                    "code": "",
                    "name": "刘新爱"
                },
                "loanDepartment": {
                    "id": "djg8LshfUkfM00",
                    "code": "code1632826505239",
                    "name": "【测试】test_zyq"
                },
                "payeeId": {
                    "id": "HzAcsVLIpEGA00",
                    "code": "",
                    "name": "中国农行"
                },
                "attachments": []
            },
            "state": "APPROVING",  //单据状态
            "project": null,
            "logs": [
                {
                    "isNew": true,
                    "corporationId": "djg8LshfUkfM00",
                    "docDataCode": "J21000005",
                    "time": 1616469351660,
                    "state": "approving",
                    "action": "freeflow.submit",
                    "operatorId": "djg8LshfUkfM00:NMIaVspFrM2Q00",
                    "nodeName": "SUBMIT",
                    "nodeId": "SUBMIT",
                    "nextNodeId": "FLOW:1657910638:1834739048",
                    "nextOperatorId": "ebot",
                    "logid": "ID_3uYmxBqhQpM",
                    "attachments": [],
                    "attributes": {
                        "nextId": "FLOW:1657910638:1834739048",
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
                "pipeline": 1,
                "grayver": "",
                "id": "ygAcxFK839lc00",
                "version": 4,
                "active": true,
                "createTime": 1616469351178,
                "updateTime": 1616469351956,
                "corporationId": "djg8LshfUkfM00",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "prevId": "FLOW:1657910638:1834739048",
                "nextNodeId": null,
                "taskId": "FLOW:459950121:700022718",
                "ownerId": "djg8LshfUkfM00:NMIaVspFrM2Q00",
                "submitterId": "djg8LshfUkfM00:NMIaVspFrM2Q00",
                "flowPlanConfigId": "wVc8Mmqokk9U00",
                "submitNode": {
                    "id": "SUBMIT",
                    "nextId": "SUBMIT",
                    "nextApproverIds": null,
                    "ownerId": "djg8LshfUkfM00:NMIaVspFrM2Q00",
                    "carbonCopy": [],
                    "urgent": null,
                    "isSensitive": null,
                    "isRequired": null,
                    "submitOutboundMessage": null,
                    "hidePrintBtnDependOnRemind": null,
                    "budgetCalcTime": null,
                    "isAllowWithdraw": null
                },
                "nodes": [
                    {
                        "type": "ebot",
                        "id": "FLOW:1657910638:1834739048",
                        "configNodeId": "YdM8Mmqokk9Y00",
                        "name": "费用标准检查",
                        "label": null,
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
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
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "ebotConfig": {
                            "type": "costControlCheck",
                            "setting": {
                                "checkCostControl": [],
                                "rejectCostControl": [],
                                "isOutOfLimitReject": false
                            }
                        },
                        "approveType": "NONE"
                    },
                    {
                        "type": "normal",
                        "id": "FLOW:459950121:700022718",
                        "configNodeId": "oFI8Mmqokka000",
                        "name": "主管审批",
                        "label": null,
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": true,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
                        "autoAgreeWhenCreditInsepction": false,
                        "creditNoteAvailable": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "staffIds": [],
                        "approverId": "djg8LshfUkfM00:KA0aWldobAgY00",
                        "forbidRejectNode": false,
                        "approveType": "NONE"
                    },
                    {
                        "type": "normal",
                        "id": "FLOW:513165912:2056140698",
                        "configNodeId": "oXQ8Mmqokkac00",
                        "name": "出纳支付",
                        "label": null,
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
                        "autoAgreeWhenCreditInsepction": false,
                        "creditNoteAvailable": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "staffIds": [],
                        "approverId": null,
                        "forbidRejectNode": false,
                        "approveType": "NONE"
                    }
                ],
                "resubmitMethod": "TO_NEXTNODE",
                "configVersion": 2,
                "hasCrossCorpNode": false
            },
            "payeeDate": 1616469300000,  //借款日期时间戳
            "money": 2323,               //借款金额
            "money_standardStrCode": "CNY",
            "money_standardNumCode": "156",
            "money_standardSymbol": "¥",
            "money_standardUnit": "元",
            "money_rate": null,
            "money_foreignStrCode": null,
            "money_foreignNumCode": null,
            "money_foreign": null,
            "money_foreignSymbol": null,
            "money_foreignUnit": null,
            "payeeInfo": {            //收款人信息
                "sort": "BANK",
                "name": "中国农行",
                "cardNo": "31101201040003669",
                "bank": "农业银行",    //开户行
                "branch": "中国农业银行股份有限公司重庆巴南马王坪支行",  //开户网点
                "type": "PERSONAL",   //账号类型(PERSONAL：个人账户; PUBLIC：对公账户)
                "province": "重庆市",
                "city": "重庆市",
                "certificateType": null,
                "certificateNo": null,
                "bankLinkNo": "103653010121",
                "bankName": "",
                "swiftCode": "",
                "bankCode": "",
                "branchCode": "",
                "remark": null
            },
            "payorId": "HzAcsVLIpEGA00",  //支付人ID
            "paymentChannel": null,       //支付方式，CREDITEASE为在线支付，OFFLINE为线下支付，ERP为ERP付款
            "paymentAccountId": null,     //支付账户
            "payTime": null,
            "repaymentDate": 1617678900000,
            "channelTradeNo": null,
            "receiptState": "",
            "paymentAccount": null
        }
    ]
}
```
</TabItem>
<TabItem value="payment" label="付款单">

```json
{
    "items": [
        {
            "type": "payment",
            "id": "7_Iaapg7uU2g00",
            "corporationId": "e4A8oQS29g0w00",
            "ownerId": "e4A8oQS29g0w00:ATA9NWIlVscs00",
            "dataType": "payment",
            "remark": "",
            "title": "111付款单",
            "updateTime": 1575873021548,
            "specificationId": "0dga8TfkK06k00:b6032466e4af604f92cc71b325819bfa75acdffb",
            "owner": {
                "id": "e4A8oQS29g0w00:ATA9NWIlVscs00",
                "name": "悟空",
                "departments": [
                    {
                        "id": "e4A8oQS29g0w00",
                        "name": "西游记",
                        "code": ""
                    }
                ],
                "code": ""
            },
            "department": null,
            "code": "Z19000007",
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
                    "id": "0dga8TfkK06k00:b6032466e4af604f92cc71b325819bfa75acdffb",
                    "code": "",
                    "name": "付款单123"
                },
                "submitterId": {
                    "id": "e4A8oQS29g0w00:ATA9NWIlVscs00",
                    "code": "",
                    "name": "张杰"
                },
                "payeeId": {
                    "id": "_Tk9TouPvw0400",
                    "code": "",
                    "name": "杰哥"
                }
            },
            "state": "REJECTED",
            "project": null,
            "logs": [
                {
                    "isNew": false,
                    "corporationId": "e4A8oQS29g0w00",
                    "docDataCode": "Z19000007",
                    "time": 1575873021184,
                    "state": "approving",
                    "action": "freeflow.submit",
                    "operatorId": "e4A8oQS29g0w00:ATA9NWIlVscs00",
                    "nodeName": "SUBMIT",
                    "nodeId": "SUBMIT",
                    "nextNodeId": "FLOW:1762778775:2107127978",
                    "nextOperatorId": "ebot",
                    "logid": "iE4aaqQFyw0000",
                    "attachments": []
                },
                {
                    "isNew": false,
                    "corporationId": "e4A8oQS29g0w00",
                    "docDataCode": "Z19000007",
                    "time": 1575873021548,
                    "state": "rejected",
                    "action": "freeflow.reject",
                    "operatorId": "ebot",
                    "nodeName": "费用标准检查",
                    "nodeId": "FLOW:1762778775:2107127978",
                    "nextNodeId": "null",
                    "nextOperatorId": "e4A8oQS29g0w00:ATA9NWIlVscs00",
                    "logid": "IYcaaqQFyw0400",
                    "attachments": []
                }
            ],
            "flowPlan": {
                "fromStartNode": true,
                "id": "7_Iaapg7uU2g00",
                "version": 3,
                "active": true,
                "createTime": 1575873021065,
                "updateTime": 1575873021543,
                "corporationId": "e4A8oQS29g0w00",
                "prevId": "FLOW:1762778775:2107127978",
                "taskId": "SUBMIT",
                "ownerId": "e4A8oQS29g0w00:ATA9NWIlVscs00",
                "submitterId": "e4A8oQS29g0w00:ATA9NWIlVscs00",
                "flowPlanConfigId": "aJMa3HB5cgmQ00",
                "submitNode": {
                    "id": "SUBMIT",
                    "nextId": "SUBMIT",
                    "nextApproverIds": null,
                    "ownerId": "e4A8oQS29g0w00:ATA9NWIlVscs00",
                    "carbonCopy": [],
                    "urgent": null
                },
                "nodes": [
                    {
                        "type": "ebot",
                        "id": "FLOW:1762778775:2107127978",
                        "configNodeId": "@@:4318ABD0-3DA5-42C1-9582-27112A683D83",
                        "name": "费用标准检查",
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
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
                        "ebotConfig": {
                            "type": "costControlCheck",
                            "setting": {
                                "checkCostControl": [],
                                "rejectCostControl": [],
                                "isOutOfLimitReject": false
                            }
                        }
                    },
                    {
                        "type": "countersign",
                        "id": "FLOW:1847689517:1046631317",
                        "configNodeId": "@@:4048EEA8-3B0F-4E86-A6F3-256E187CA625",
                        "name": "主管审批",
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": true,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": true,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": false,
                        "carbonCopy": [
                            {
                                "sendTime": "AGREE",
                                "staffIds": [
                                    "e4A8oQS29g0w00:_9ca4C7kYE0800",
                                    "e4A8oQS29g0w00:4Mo9c1PcnM0400",
                                    "e4A8oQS29g0w00:9gE9Dm4IjI0k00",
                                    "e4A8oQS29g0w00:b0U9Dm4IjI0800"
                                ],
                                "matchResult": [
                                    {
                                        "values": [
                                            [
                                                "e4A8oQS29g0w00:_9ca4C7kYE0800",
                                                "e4A8oQS29g0w00:4Mo9c1PcnM0400",
                                                "e4A8oQS29g0w00:9gE9Dm4IjI0k00",
                                                "e4A8oQS29g0w00:b0U9Dm4IjI0800"
                                            ]
                                        ],
                                        "selection": {
                                            "mode": null,
                                            "type": "DESIGNATION",
                                            "roles": null,
                                            "staffIds": [
                                                "e4A8oQS29g0w00:_9ca4C7kYE0800",
                                                "e4A8oQS29g0w00:4Mo9c1PcnM0400",
                                                "e4A8oQS29g0w00:9gE9Dm4IjI0k00",
                                                "e4A8oQS29g0w00:b0U9Dm4IjI0800"
                                            ],
                                            "departments": null,
                                            "departmentsIncludeChildren": true
                                        }
                                    }
                                ]
                            }
                        ],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "policy": "ANY",
                        "counterSigners": [
                            {
                                "action": null,
                                "state": "APPROVING",
                                "signerId": "e4A8oQS29g0w00:zKw9sqmYQc0000",
                                "agreeType": "NO_AUTO_AGREE",
                                "description": "部门经理"
                            },
                            {
                                "action": null,
                                "state": "APPROVING",
                                "signerId": "e4A8oQS29g0w00:BF09cgkXo00000",
                                "agreeType": "NO_AUTO_AGREE",
                                "description": "部门经理"
                            }
                        ],
                        "counterSignersCandidate": [
                            {
                                "action": null,
                                "state": "APPROVING",
                                "signerId": "e4A8oQS29g0w00:zKw9sqmYQc0000",
                                "agreeType": "NO_AUTO_AGREE",
                                "description": "部门经理"
                            },
                            {
                                "action": null,
                                "state": "APPROVING",
                                "signerId": "e4A8oQS29g0w00:BF09cgkXo00000",
                                "agreeType": "NO_AUTO_AGREE",
                                "description": "部门经理"
                            }
                        ],
                        "nonMatchedDefines": []
                    },
                    {
                        "type": "normal",
                        "id": "FLOW:1930416833:1677330147",
                        "configNodeId": "@@:49F5624A-7FCB-4AC6-B5C1-1EB49A695A89",
                        "name": "出纳支付",
                        "skippedType": "NO_ABILITY",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isNeedCashierNode": false,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "staffIds": [],
                        "approverId": "e4A8oQS29g0w00:ATA9NWIlVscs00"
                    }
                ]
            },
            "payMoney": 100,
            "money_standardStrCode": "CNY",
            "money_standardNumCode": "156",
            "money_standardSymbol": "¥",
            "money_standardUnit": "元",
            "money_rate": null,
            "money_foreignStrCode": null,
            "money_foreignNumCode": null,
            "money_foreign": null,
            "money_foreignSymbol": null,
            "money_foreignUnit": null,
            "payeeInfo": {
                "name": "杰哥",
                "cardNo": "8888",
                "bank": "建设银行",
                "branch": "中国建设银行北京广安门支行",
                "type": "PERSONAL",
                "province": "北京市",
                "city": "北京市",
                "certificateType": "01",
                "certificateNo": "142325198710158756",
                "bankLinkNo": "105100009055",
                "remark": "remark", //备注
            },
            "payorId": "_Tk9TouPvw0400",
            "paymentChannel": null,
            "paymentAccountId": null,
            "payTime": null
        }
    ]
}
```
</TabItem>
<TabItem value="requisition" label="申请单">

```json
{
    "items": [
        {
            "type": "requisition",
            "id": "JzgbBgfbusjc00",
            "corporationId": "djg8LshfUkfM00",
            "ownerId": "djg8LshfUkfM00:NLwaVMzL2Ipc00",
            "dataType": "requisition",
            "remark": "",
            "title": "1111",
            "updateTime": 1600256270044,
            "specificationId": "J3UaZokjiYiU00:bb6772fa76207bb542e47eea3983f25a3430d9cb",
            "owner": {
                "id": "djg8LshfUkfM00:NLwaVMzL2Ipc00",
                "name": "张振",
                "departments": [
                    {
                        "id": "djg8LshfUkfM00",
                        "name": "【测试】test_zyq",
                        "code": ""
                    }
                ],
                "code": ""
            },
            "department": {
                "id": "djg8LshfUkfM00",
                "name": "【测试】test_zyq",
                "code": ""
            },
            "code": "S20000230",
            "userProps": {
                "specificationId": {
                    "id": "J3UaZokjiYiU00:bb6772fa76207bb542e47eea3983f25a3430d9cb",
                    "code": "",
                    "name": "TMC各行程单均有金额"
                },
                "submitterId": {
                    "id": "djg8LshfUkfM00:NLwaVMzL2Ipc00",
                    "code": "",
                    "name": "张振"
                },
                "expenseDepartment": {
                    "id": "djg8LshfUkfM00",
                    "code": "code1632826505239",
                    "name": "【测试】test_zyq"
                }
            },
            "state": "APPROVING",
            "project": null,
            "logs": [
                {
                    "isNew": true,
                    "corporationId": "djg8LshfUkfM00",
                    "docDataCode": "S20000230",
                    "time": 1600256269931,
                    "state": "approving",
                    "action": "freeflow.submit",
                    "operatorId": "djg8LshfUkfM00:NLwaVMzL2Ipc00",
                    "nodeName": "SUBMIT",
                    "nodeId": "SUBMIT",
                    "nextNodeId": "5C5B9549-1E03-4A99-9AC0-1B57566844B6",
                    "nextOperatorId": "ebot",
                    "logid": "ID_3uYrar3gJTM",
                    "attachments": [],
                    "attributes": {
                        "nextId": "5C5B9549-1E03-4A99-9AC0-1B57566844B6",
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
                "pipeline": 1,
                "grayver": "",
                "id": "JzgbBgfbusjc00",
                "version": 4,
                "active": true,
                "createTime": 1600256269572,
                "updateTime": 1600256270041,
                "corporationId": "djg8LshfUkfM00",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "prevId": "5C5B9549-1E03-4A99-9AC0-1B57566844B6",
                "nextNodeId": null,
                "taskId": "4E77CAB0-8796-46A8-9F98-2093E16A0052",
                "ownerId": "djg8LshfUkfM00:NLwaVMzL2Ipc00",
                "submitterId": "djg8LshfUkfM00:NLwaVMzL2Ipc00",
                "flowPlanConfigId": "YagaVrFGR00c00",
                "submitNode": {
                    "id": "SUBMIT",
                    "nextId": "SUBMIT",
                    "nextApproverIds": null,
                    "ownerId": "djg8LshfUkfM00:NLwaVMzL2Ipc00",
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
                    "budgetCalcTime": null,
                    "isAllowWithdraw": null
                },
                "nodes": [
                    {
                        "type": "ebot",
                        "id": "5C5B9549-1E03-4A99-9AC0-1B57566844B6",
                        "configNodeId": "@@:3b3555c2-5c1b-426e-a62c-92b51c82c4b3",
                        "name": "费用标准检查",
                        "label": null,
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
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
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "ebotConfig": {
                            "type": "costControlCheck",
                            "setting": {
                                "checkCostControl": [],
                                "rejectCostControl": [],
                                "isOutOfLimitReject": false
                            }
                        },
                        "approveType": "NONE"
                    },
                    {
                        "type": "normal",
                        "id": "4E77CAB0-8796-46A8-9F98-2093E16A0052",
                        "configNodeId": "@@:e41aff56-7d34-4c28-88dd-7174d10c103f",
                        "name": "一级领导审批",
                        "label": null,
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
                        "autoAgreeWhenCreditInsepction": false,
                        "creditNoteAvailable": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isSubmitterChoice": false,
                            "showConditionInBill": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "staffIds": null,
                        "approverId": "djg8LshfUkfM00:NLwaVMzL2Ipc00",
                        "forbidRejectNode": false,
                        "approveType": "NONE"
                    },
                    {
                        "type": "normal",
                        "id": "54106CB8-1B51-4AE5-9773-F8DC130E1283",
                        "configNodeId": "@@:b6bb713d-edc8-471f-b656-ad6b4e9a6482",
                        "name": "出纳支付",
                        "label": "出纳支付",
                        "skippedType": "NO_ABILITY",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
                        "autoAgreeWhenCreditInsepction": false,
                        "creditNoteAvailable": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isNeedCashierNode": false,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "staffIds": null,
                        "approverId": null,
                        "forbidRejectNode": false,
                        "approveType": "NONE"
                    }
                ],
                "resubmitMethod": "TO_NEXTNODE",
                "configVersion": 0,
                "hasCrossCorpNode": false
            },
            "sumAmount": 1000.00,
            "requisitionDate": 1600185600000,
            "details": [
                {
                    "amount": "1000.00",
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
                    "date": 0,
                    "remark": null,
                    "feeTypeId": "NOsaY-HisUbc00",
                    "userProps": {
                        "travelers": [
                            "djg8LshfUkfM00:NLwaVMzL2Ipc00"
                        ],
                        "amount": "1000.00",
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
                        "amount_budget": "",
                        "amount_budgetStrCode": "",
                        "amount_budgetNumCode": "",
                        "amount_budgetSymbol": "",
                        "amount_budgetUnit": "",
                        "amount_budgetScale": "",
                        "amount_budgetRate": "",
                        "项目": {
                            "id": "gFIbAZ_xOohQ00",
                            "code": "CODE2",
                            "name": "南京项目",
                            "dimensionId": "djg8LshfUkfM00:项目"
                        },
                        "detailId": "lAAbBgfbusko00",
                        "u_订票人": "djg8LshfUkfM00:NLwaVMzL2Ipc00",
                        "u_行程规划": [
                            {
                                "dataLinkId": null,
                                "dataLinkForm": {
                                    "E_89330ae5c7fee240b000_name": "黑龙江省/大兴安岭地区/加格达奇",
                                    "E_89330ae5c7fee240b000_住宿地": "[{\"key\":\"10010\",\"label\":\"黑龙江省/大兴安岭地区/加格达奇\"}]",
                                    "E_89330ae5c7fee240b000_入住日期": 1600272000000,
                                    "E_89330ae5c7fee240b000_离店日期": 1600358400000
                                },
                                "dataLinkTemplateId": "8csaVsv-UA4c00"
                            }
                        ],
                        "u_文本": "啊"
                    }
                }
            ],
            "trips": [],
            "travelers": [],
            "submitTime": 1600256269535,
            "payeeInfo": null,
            "payorId": null,
            "paymentChannel": null,
            "paymentAccountId": null,
            "payTime": 1600256270044,
            "loanMoney": null,
            "repaymentDate": null,
            "channelTradeNo": null,
            "receiptState": "",
            "paymentAccount": null
        }
    ]
}
```
</TabItem>
<TabItem value="custom" label="通用审批单">

```json
{
    "items": [
        {
            "type": "custom",
            "id": "t-0aWqTJkY6U00",
            "corporationId": "djg8LshfUkfM00",
            "ownerId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
            "dataType": "custom",
            "remark": null,
            "title": "郑永欠2020-05-06入住北京审批",
            "updateTime": 1588758599346,
            "specificationId": "V2MaVrFM0k7800:a5ea81fe47d6df0454d123054d1151dc91e8eb0c",
            "owner": {
                "id": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                "name": "郑永欠",
                "departments": [
                    {
                        "id": "djg8LshfUkfM00",
                        "name": "【测试】test_zyq",
                        "code": ""
                    }
                ],
                "code": ""
            },
            "department": null,
            "code": "F20000006",
            "userProps": {
                "specificationId": {
                    "id": "V2MaVrFM0k7800:a5ea81fe47d6df0454d123054d1151dc91e8eb0c",
                    "code": "",
                    "name": "商城酒店审批单"
                },
                "submitterId": {
                    "id": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                    "code": "",
                    "name": "郑永欠"
                },
                "expenseDepartment": {
                    "id": "djg8LshfUkfM00",
                    "code": "code1632826505239",
                    "name": "【测试】test_zyq"
                },
                "u_订单总额": "245.00",
                "u_订单总额_standardStrCode": "CNY",
                "u_订单总额_standardNumCode": "156",
                "u_订单总额_standardSymbol": "¥",
                "u_订单总额_standardUnit": "元",
                "u_订单总额_rate": "1",
                "u_订单总额_foreignStrCode": "",
                "u_订单总额_foreignNumCode": "",
                "u_订单总额_foreign": "",
                "u_订单总额_foreignSymbol": "",
                "u_订单总额_foreignUnit": "",
                "u_订单总额_budget": "",
                "u_订单总额_budgetStrCode": "",
                "u_订单总额_budgetNumCode": "",
                "u_订单总额_budgetSymbol": "",
                "u_订单总额_budgetUnit": "",
                "u_订单总额_budgetScale": "",
                "u_订单总额_budgetRate": "",
                "u_是否超标": "超标",
                "u_订单信息": "入住北京，2020-05-06至2020-05-07（1晚），北京慕田峪长城赫家大院日式榻榻米房1间。超出差旅标准原因：经批准可不选择最低价。",
                "u_提前预订天数": "0",
                "u_入住人": [
                    {
                        "id": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                        "code": "",
                        "name": "郑永欠"
                    }
                ],
                "u_入住人部门": "",
                "u_超标类型": "",
                "u_预订星级": {
                    "id": "FjkaVrFGR0co00",
                    "code": "706536215687593984:无星级",
                    "name": "无星级",
                    "dimensionId": "djg8LshfUkfM00:预订星级"
                }
            },
            "state": "REJECTED",
            "project": null,
            "logs": [
                {
                    "isNew": false,
                    "corporationId": "djg8LshfUkfM00",
                    "docDataCode": "F20000006",
                    "time": 1588758585950,
                    "state": "approving",
                    "action": "freeflow.submit",
                    "operatorId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                    "nodeName": "SUBMIT",
                    "nodeId": "SUBMIT",
                    "nextNodeId": "FLOW:1321137532E9:786533102E8",
                    "nextOperatorId": "ebot",
                    "logid": "-YUaWq-HXQcI00",
                    "attachments": [],
                    "attributes": {
                        "nextId": "FLOW:1321137532E9:786533102E8",
                        "nodeId": "SUBMIT",
                        "comment": "",
                        "isUrgent": false,
                        "nextName": "费用标准检查",
                        "urgentReason": "",
                        "resubmitMethod": "FROM_START",
                        "nextCounterSign": false,
                        "sensitiveContent": null,
                        "resubmitOperatorIds": []
                    }
                },
                {
                    "isNew": false,
                    "corporationId": "djg8LshfUkfM00",
                    "docDataCode": "F20000006",
                    "time": 1588758599346,
                    "state": "rejected",
                    "action": "freeflow.reject",
                    "operatorId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                    "nodeName": "一级领导审批",
                    "nodeId": "FLOW:8984974E8:601058914E8",
                    "nextNodeId": "null",
                    "nextOperatorId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                    "logid": "GZkaWq-HXQcQ00",
                    "attachments": [],
                    "attributes": {
                        "isAuto": false,
                        "nextId": null,
                        "nodeId": "FLOW:8984974E8:601058914E8",
                        "comment": "33",
                        "isEbotNode": false,
                        "isStaffExit": false,
                        "resubmitMethod": "FROM_START",
                        "isCostControlCheck": false
                    }
                }
            ],
            "flowPlan": {
                "pipeline": 1,
                "grayver": "",
                "id": "t-0aWqTJkY6U00",
                "version": 5,
                "active": true,
                "createTime": 1588758585660,
                "updateTime": 1588758599341,
                "corporationId": "djg8LshfUkfM00",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "prevId": "FLOW:8984974E8:601058914E8",
                "nextNodeId": null,
                "taskId": "SUBMIT",
                "ownerId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                "submitterId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                "flowPlanConfigId": "lQ4aVrF85ovg00",
                "submitNode": {
                    "id": "SUBMIT",
                    "nextId": "SUBMIT",
                    "nextApproverIds": null,
                    "ownerId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                    "carbonCopy": [],
                    "urgent": null,
                    "isSensitive": null,
                    "isRequired": null,
                    "submitOutboundMessage": null,
                    "hidePrintBtnDependOnRemind": null,
                    "budgetCalcTime": null,
                    "isAllowWithdraw": null
                },
                "nodes": [
                    {
                        "type": "ebot",
                        "id": "FLOW:1321137532E9:786533102E8",
                        "configNodeId": "@@:d76bb0cb-7abb-481f-baa7-19ea5ac78154",
                        "name": "费用标准检查",
                        "label": null,
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
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
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "ebotConfig": {
                            "type": "costControlCheck",
                            "setting": {
                                "checkCostControl": [],
                                "rejectCostControl": [],
                                "isOutOfLimitReject": false
                            }
                        },
                        "approveType": "NONE"
                    },
                    {
                        "type": "normal",
                        "id": "FLOW:8984974E8:601058914E8",
                        "configNodeId": "@@:4ac81f07-f2c4-44c7-acc0-672efcdeca9d",
                        "name": "一级领导审批",
                        "label": null,
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
                        "autoAgreeWhenCreditInsepction": false,
                        "creditNoteAvailable": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "staffIds": [
                            "djg8LshfUkfM00:Dwk7NVkt7o1E00"
                        ],
                        "approverId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                        "forbidRejectNode": false,
                        "approveType": "NONE"
                    },
                    {
                        "type": "normal",
                        "id": "",
                        "configNodeId": "@@:487c2df3-0ae1-44ae-908c-25a141857873",
                        "name": "出纳支付",
                        "label": null,
                        "skippedType": "NO_ABILITY",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
                        "autoAgreeWhenCreditInsepction": false,
                        "creditNoteAvailable": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isNeedCashierNode": false,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "staffIds": [],
                        "approverId": null,
                        "forbidRejectNode": false,
                        "approveType": "NONE"
                    }
                ],
                "resubmitMethod": "TO_NEXTNODE",
                "configVersion": 0,
                "hasCrossCorpNode": false
            }
        }
    ]
}
```
</TabItem>
<TabItem value="permit" label="授权单">

```json
{
    "items": [
        {
            "type": "permit",
            "id": "26UbPigoGIsc00",
            "corporationId": "djg8LshfUkfM00",
            "ownerId": "djg8LshfUkfM00:7yAbx771rE0000",
            "dataType": "custom",
            "remark": null,
            "title": "高洋洋 等4人 2020-10-30 南昌市用车审批",
            "updateTime": 1604023129994,
            "specificationId": "UNob51MvYQhY00:613dfe9c97602644dff427f9db56db3885a5aa1f",
            "owner": {
                "id": "djg8LshfUkfM00:7yAbx771rE0000",
                "name": "李凤",
                "departments": [
                    {
                        "id": "djg8LshfUkfM00",
                        "name": "【测试】test_zyq",
                        "code": ""
                    }
                ],
                "code": ""
            },
            "department": null,
            "code": "P20000321",
            "userProps": {
                "specificationId": {
                    "id": "UNob51MvYQhY00:613dfe9c97602644dff427f9db56db3885a5aa1f",
                    "code": "",
                    "name": "商城用车审批单"
                },
                "submitterId": {
                    "id": "djg8LshfUkfM00:7yAbx771rE0000",
                    "code": "",
                    "name": "李凤"
                },
                "expenseDepartment": {
                    "id": "djg8LshfUkfM00",
                    "code": "code1632826505239",
                    "name": "【测试】test_zyq"
                },
                "u_订单总额": "68.41",
                "u_订单总额_standardStrCode": "CNY",
                "u_订单总额_standardNumCode": "156",
                "u_订单总额_standardSymbol": "¥",
                "u_订单总额_standardUnit": "元",
                "u_订单总额_rate": "1",
                "u_订单总额_foreignStrCode": "",
                "u_订单总额_foreignNumCode": "",
                "u_订单总额_foreign": "",
                "u_订单总额_foreignSymbol": "",
                "u_订单总额_foreignUnit": "",
                "u_订单总额_budget": "",
                "u_订单总额_budgetStrCode": "",
                "u_订单总额_budgetNumCode": "",
                "u_订单总额_budgetSymbol": "",
                "u_订单总额_budgetUnit": "",
                "u_订单总额_budgetScale": "",
                "u_订单总额_budgetRate": "",
                "u_是否超标": "超标",
                "u_订单信息": "南昌市,南昌市江铃财务公司大楼(西门)上车,南昌市,南龙蟠街888号下车,审批通过后立即用车,乘车人：4人; 超出差旅标准原因：陪领导或客户出行",
                "u_乘车人": [
                    {
                        "id": "djg8LshfUkfM00:7yAbx771rE0000",
                        "code": "",
                        "name": "李凤"
                    },
                    {
                        "id": "djg8LshfUkfM00:RaEaWkAv54g400",
                        "code": "",
                        "name": "高洋洋"
                    },
                    {
                        "id": "djg8LshfUkfM00:qHEaWkA564fQ00",
                        "code": "",
                        "name": "胡龙凤"
                    },
                    {
                        "id": "djg8LshfUkfM00:yA0aW0kzDobI00",
                        "code": "",
                        "name": "杜学峰"
                    }
                ],
                "u_乘车人部门": "",
                "u_超标类型": "",
                "u_超标原因": "陪领导或客户出行",
                "u_车型": "经济型",
                "u_服务类型": "立即用车",
                "u_用车渠道": "曹操出行",
                "u_申请时间": "1604022821748",
                "u_用车时间": "1604022883000"
            },
            "state": "PAID",
            "project": null,
            "logs": [
                {
                    "isNew": false,
                    "corporationId": "djg8LshfUkfM00",
                    "docDataCode": "P20000321",
                    "time": 1604023117553,
                    "state": "approving",
                    "action": "freeflow.submit",
                    "operatorId": "djg8LshfUkfM00:7yAbx771rE0000",
                    "nodeName": "SUBMIT",
                    "nodeId": "SUBMIT",
                    "nextNodeId": "FLOW:1116470591E9:365442241E8",
                    "nextOperatorId": "ebot",
                    "logid": "Yy8bPikCQAtg00",
                    "attachments": [],
                    "attributes": {
                        "nextId": "FLOW:1116470591E9:365442241E8",
                        "nodeId": "SUBMIT",
                        "comment": "",
                        "isUrgent": false,
                        "nextName": "费用标准检查",
                        "urgentReason": "",
                        "resubmitMethod": "FROM_START",
                        "nextCounterSign": false,
                        "sensitiveContent": null,
                        "resubmitOperatorIds": []
                    }
                },
                {
                    "isNew": false,
                    "corporationId": "djg8LshfUkfM00",
                    "docDataCode": "P20000321",
                    "time": 1604023129994,
                    "state": "paid",
                    "action": "freeflow.agree",
                    "operatorId": "djg8LshfUkfM00:7yAbx771rE0000",
                    "nodeName": "一级领导审批",
                    "nodeId": "FLOW:1399951579E9:131782916E9",
                    "nextNodeId": "null",
                    "nextOperatorId": null,
                    "logid": "p7IbPikCQAtk00",
                    "attachments": [],
                    "attributes": {
                        "nextId": null,
                        "nodeId": "FLOW:1399951579E9:131782916E9",
                        "comment": "",
                        "complete": true,
                        "nextName": null,
                        "expressNum": null,
                        "isEbotNode": false,
                        "counterSign": false,
                        "isRecalNode": false,
                        "oldFlowPlanId": null,
                        "nextCounterSign": false,
                        "autographImageId": null
                    }
                }
            ],
            "flowPlan": {
                "pipeline": 1,
                "grayver": "",
                "id": "26UbPigoGIsc00",
                "version": 5,
                "active": true,
                "createTime": 1604023117179,
                "updateTime": 1604023129991,
                "corporationId": "djg8LshfUkfM00",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "prevId": "FLOW:1399951579E9:131782916E9",
                "nextNodeId": null,
                "taskId": null,
                "ownerId": "djg8LshfUkfM00:7yAbx771rE0000",
                "submitterId": "djg8LshfUkfM00:7yAbx771rE0000",
                "flowPlanConfigId": "8swb51MvYQgM00",
                "submitNode": {
                    "id": "SUBMIT",
                    "nextId": "SUBMIT",
                    "nextApproverIds": null,
                    "ownerId": "djg8LshfUkfM00:7yAbx771rE0000",
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
                    "budgetCalcTime": null,
                    "isAllowWithdraw": null
                },
                "nodes": [
                    {
                        "type": "ebot",
                        "id": "FLOW:1116470591E9:365442241E8",
                        "configNodeId": "@@:af7dc18a-3bc2-4cd9-9de0-4e1885a87c32",
                        "name": "费用标准检查",
                        "label": null,
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
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
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "ebotConfig": {
                            "type": "costControlCheck",
                            "setting": {
                                "checkCostControl": [],
                                "rejectCostControl": [],
                                "isOutOfLimitReject": false
                            }
                        },
                        "approveType": "NONE"
                    },
                    {
                        "type": "normal",
                        "id": "FLOW:1399951579E9:131782916E9",
                        "configNodeId": "@@:060b086a-486d-416a-97cd-3afad2388476",
                        "name": "一级领导审批",
                        "label": "",
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
                        "autoAgreeWhenCreditInsepction": false,
                        "creditNoteAvailable": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isSubmitterChoice": false,
                            "allowSubmitterRetract": true
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "staffIds": [
                            "djg8LshfUkfM00:7yAbx771rE0000"
                        ],
                        "approverId": "djg8LshfUkfM00:7yAbx771rE0000",
                        "forbidRejectNode": false,
                        "approveType": "NONE"
                    },
                    {
                        "type": "normal",
                        "id": "0s4bPikNB0fg00",
                        "configNodeId": "@@:4fdf2540-c5c0-4789-be8f-7f3873b1fe0b",
                        "name": "出纳支付",
                        "label": "出纳支付",
                        "skippedType": "NO_ABILITY",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
                        "autoAgreeWhenCreditInsepction": false,
                        "creditNoteAvailable": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isNeedCashierNode": false,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "staffIds": [],
                        "approverId": null,
                        "forbidRejectNode": false,
                        "approveType": "NONE"
                    }
                ],
                "resubmitMethod": "TO_NEXTNODE",
                "configVersion": 0,
                "hasCrossCorpNode": false
            }
        }
    ]
}
```
</TabItem>
<TabItem value="receipt" label="收款单">

```json
{
    "items": [
        {
            "type": "receipt",
            "id": "ID_3sOuotCppgw",
            "corporationId": "djg8LshfUkfM00",
            "ownerId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
            "dataType": "receipt",
            "remark": "1111",
            "title": "测试收款单",
            "updateTime": 1638347590848,
            "specificationId": "ID_3sOtG3xVVkg:7202a3558f143a4b872502ef01fd1b5da2b10303",
            "owner": {
                "id": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                "name": "张国阳",
                "departments": [
                    {
                        "id": "djg8LshfUkfM00",
                        "name": "【测试】test_zyq",
                        "code": ""
                    }
                ],
                "code": ""
            },
            "department": {
                "id": "djg8LshfUkfM00",
                "name": "【测试】test_zyq",
                "code": ""
            },
            "code": "A21000001",
            "userProps": {
                "specificationId": {
                    "id": "ID_3sOtG3xVVkg:7202a3558f143a4b872502ef01fd1b5da2b10303",
                    "code": "",
                    "name": "测试收款"
                },
                "submitterId": {
                    "id": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                    "code": "",
                    "name": "张国阳"
                },
                "expenseDepartment": {
                    "id": "djg8LshfUkfM00",
                    "code": "code1632826505239",
                    "name": "【测试】test_zyq"
                },
                "description": "1111"
            },
            "state": "PAID",
            "project": null,
            "logs": [
                {
                    "isNew": false,
                    "corporationId": "djg8LshfUkfM00",
                    "docDataCode": "A21000001",
                    "time": 1638347590564,
                    "state": "approving",
                    "action": "freeflow.submit",
                    "operatorId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                    "nodeName": "SUBMIT",
                    "nodeId": "SUBMIT",
                    "nextNodeId": "FLOW:439822812:875498347",
                    "nextOperatorId": "ebot",
                    "logid": "ID_3sOtIdZm_XM",
                    "attachments": [],
                    "attributes": {
                        "nextId": "FLOW:439822812:875498347",
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
                },
                {
                    "isNew": false,
                    "corporationId": "djg8LshfUkfM00",
                    "docDataCode": "A21000001",
                    "time": 1638347590835,
                    "state": "approving",
                    "action": "freeflow.autoAgree",
                    "operatorId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                    "nodeName": "1",
                    "nodeId": "FLOW:866178619:1527851960",
                    "nextNodeId": "FLOW:1865918734:1977110629",
                    "nextOperatorId": null,
                    "logid": "ID_3sOtIdZn0XM",
                    "attachments": [],
                    "attributes": {
                        "nextId": "FLOW:1865918734:1977110629",
                        "nodeId": "FLOW:866178619:1527851960",
                        "complete": true,
                        "nextName": null,
                        "counterSign": false,
                        "autoAgreeType": "APPROVER_SAME_AS_SUBMITTER",
                        "nextCounterSign": false
                    }
                },
                {
                    "isNew": false,
                    "corporationId": "djg8LshfUkfM00",
                    "docDataCode": "A21000001",
                    "time": 1638347590848,
                    "state": "paid",
                    "action": "freeflow.print",
                    "operatorId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                    "nodeName": "",
                    "nodeId": null,
                    "nextNodeId": null,
                    "nextOperatorId": null,
                    "logid": "ID_3sOtIdZn1XM",
                    "attachments": [],
                    "attributes": {
                        "action": "remind",
                        "autoRemind": true,
                        "operatorId": "djg8LshfUkfM00:ID_3ruBvlxx7m0"
                    }
                }
            ],
            "flowPlan": {
                "pipeline": 1,
                "grayver": "9.7.0.0:A",
                "id": "ID_3sOuotCppgw",
                "version": 4,
                "active": true,
                "createTime": 1638347590019,
                "updateTime": 1638347590817,
                "corporationId": "djg8LshfUkfM00",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "prevId": "FLOW:439822812:875498347",
                "nextNodeId": null,
                "taskId": null,
                "ownerId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                "submitterId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                "flowPlanConfigId": "ID_3rM_1pblD5g",
                "submitNode": {
                    "id": "SUBMIT",
                    "nextId": "SUBMIT",
                    "nextApproverIds": null,
                    "ownerId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
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
                    "budgetCalcTime": null,
                    "isAllowWithdraw": false
                },
                "nodes": [
                    {
                        "type": "ebot",
                        "id": "FLOW:439822812:875498347",
                        "configNodeId": "@@:4A4E209F-8065-4043-93E4-1ED9726BCD4C",
                        "name": "费用标准检查",
                        "label": null,
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
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
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "ebotConfig": {
                            "type": "costControlCheck",
                            "setting": {
                                "checkCostControl": [],
                                "rejectCostControl": [],
                                "isOutOfLimitReject": false
                            }
                        },
                        "approveType": "NONE"
                    },
                    {
                        "type": "normal",
                        "id": "FLOW:866178619:1527851960",
                        "configNodeId": "@@:55DC94EF-945D-4093-AEEE-23A5B69203DC",
                        "name": "1",
                        "label": "",
                        "skippedType": "NO_SKIPPED",
                        "agreeType": "APPROVER_SAME_AS_SUBMITTER",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": true,
                        "autoAgreeWhenApproverRepeated": true,
                        "autoAgreeWhenApproverSameAsSubmitter": true,
                        "removeDefaultHistoryApprover": false,
                        "autoAgreeWhenCreditInsepction": false,
                        "creditNoteAvailable": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isLimitFields": false
                        },
                        "isAllStaffs": false,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": true,
                        "beforeRemindPrint": true,
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "staffIds": [
                            "djg8LshfUkfM00:ID_3ruBvlxx7m0"
                        ],
                        "approverId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                        "forbidRejectNode": false,
                        "approveType": "NONE"
                    },
                    {
                        "type": "normal",
                        "id": "FLOW:1865918734:1977110629",
                        "configNodeId": "@@:4E00D5EE-86C8-4DE2-BB8C-20627E4B27EB",
                        "name": "出纳支付",
                        "label": "出纳支付",
                        "skippedType": "NO_ABILITY",
                        "agreeType": "NO_AUTO_AGREE",
                        "conditionalDescription": null,
                        "conditionalType": null,
                        "skipWhenApproverNonMatched": false,
                        "autoAgreeWhenApproverRepeated": false,
                        "autoAgreeWhenApproverSameAsSubmitter": false,
                        "removeDefaultHistoryApprover": false,
                        "autoAgreeWhenCreditInsepction": false,
                        "creditNoteAvailable": false,
                        "allowModify": false,
                        "config": {
                            "isAuto": false,
                            "isNeedCashierNode": false,
                            "isSubmitterChoice": false
                        },
                        "isAllStaffs": true,
                        "carbonCopy": [],
                        "timeCount": null,
                        "addCountReport": true,
                        "isAddNode": false,
                        "autoRemindPrint": false,
                        "beforeRemindPrint": false,
                        "allowModifyApprover": false,
                        "expressConfig": null,
                        "commentWhenFlowHasRisk": false,
                        "forbidBatchApproveRiskFlow": false,
                        "condition": null,
                        "laterCalcReason": null,
                        "forbidBeforeAddNode": false,
                        "forbidAftAddNode": false,
                        "forbidShiftNode": false,
                        "crossCorpNode": false,
                        "rejectSetting": null,
                        "staffIds": [],
                        "approverId": null,
                        "forbidRejectNode": false,
                        "approveType": "NONE"
                    }
                ],
                "resubmitMethod": "TO_NEXTNODE",
                "configVersion": 6,
                "hasCrossCorpNode": false
            },
            "sumAmount": 111.00,
            "receiptDate": 1638288000000,
            "details": [
                {
                    "amount": "111",
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
                    "date": 1638288000000,
                    "remark": "11",
                    "feeTypeId": "NOsaY-HisUbc00",
                    "userProps": {
                        "apportionSpecificationId": null,
                        "receiptDate": "1638288000000",
                        "receiptMoney": "111.00",
                        "receiptMoney_standardStrCode": "CNY",
                        "receiptMoney_standardNumCode": "156",
                        "receiptMoney_standardSymbol": "¥",
                        "receiptMoney_standardUnit": "元",
                        "receiptMoney_rate": "1",
                        "receiptMoney_foreignStrCode": "",
                        "receiptMoney_foreignNumCode": "",
                        "receiptMoney_foreign": "",
                        "receiptMoney_foreignSymbol": "",
                        "receiptMoney_foreignUnit": "",
                        "receiptMoney_budget": "",
                        "receiptMoney_budgetStrCode": "",
                        "receiptMoney_budgetNumCode": "",
                        "receiptMoney_budgetSymbol": "",
                        "receiptMoney_budgetUnit": "",
                        "receiptMoney_budgetScale": "",
                        "receiptMoney_budgetRate": "",
                        "printCount": "0",
                        "printState": "reminded",
                        "expenseDepartment": "djg8LshfUkfM00",
                        "feeTypeId": "NOsaY-HisUbc00",
                        "amount": "111",
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
                        "amount_budget": "",
                        "amount_budgetStrCode": "",
                        "amount_budgetNumCode": "",
                        "amount_budgetSymbol": "",
                        "amount_budgetUnit": "",
                        "amount_budgetScale": "",
                        "amount_budgetRate": "",
                        "feeDate": "1638288000000",
                        "description": "1111",
                        "consumptionReasons": "11",
                        "attachments": "[]",
                        "apportions": "false",
                        "apportionPercent": "100",
                        "apportionMoney": "111",
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
                        "apportionMoney_budget": "",
                        "apportionMoney_budgetStrCode": "",
                        "apportionMoney_budgetNumCode": "",
                        "apportionMoney_budgetSymbol": "",
                        "apportionMoney_budgetUnit": "",
                        "apportionMoney_budgetScale": "",
                        "apportionMoney_budgetRate": "",
                        "detailId": "FtrH9sW0NSytSW"
                    },
                    "invoiceCount": 0,
                    "taxAmount": 0,
                    "noTaxAmount": 0,
                    "invoices": []
                }
            ],
            "submitTime": 1638347589927
        }
    ]
}
```
</TabItem>
</Tabs>

查询不到数据时返回如下：
```json
{
    "items": []   //表示没查到数据，单据处于“草稿”状态、单据已删除、或者单据ID不正确
}
```

## 失败响应
```json
{
    "errorCode": 403,
    "errorMessage": "未开通功能，无权访问",  //请检查powerCode参数是否正确：219902或219904
    "errorDetails": null,
    "code": null,
    "data": null
}
```
当单据类型错误时：
```json
{
    "errorCode": 400,
    "errorMessage": "type参数错误",  //请检查单据类型
    "errorDetails": null,
    "code": null,
    "data": null
}
```

