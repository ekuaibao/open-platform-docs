# 获取指定状态单据列表(包含已删除单据)
通过指定单据状态过滤单据列表（包含已删除单据：进入”出纳支付“节点后再驳回删除的单据），并且可以通过过滤字段把不需要的参数置空来缩小回应数据。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/docSequences"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token          | 必填 | - |  [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **powerCode**   | String  | 功能授权码，传入<br/>219902或者219904即可 | 必填 | - | `219902` : 开放接口 &emsp; `219904` : 开放接口(新) |       
| **type**        | String  | 单据类型            | 必填 | - | `expense` : 报销单<br/>`loan` : 借款单<br/>`repayment` : 还款记录<br/>`payment` : 付款单<br/>`requisition` : 申请单<br/>`custom` : 通用审批单<br/>`receipt` : 收款单 |
| **index**       | Number  | 分页查询的起始索引序号 | 必填 | - | 例如 : 当 `index` = `1484498318240` 时，会查询所有<br/>`index` > `1484498318240` 的单据 |
| **count**       | Number  | 查询数据条数         | 必填 | - | 最大不能超过 `100` |
| **state**       | String  | 单据状态            | 非必填 | - | `REJECTED` : 已驳回<br/>`PAYING` : 待支付<br/>`PROCESSING` : 支付中<br/>`PAID` : 已支付<br/>**不传值时，查询四种状态单据** |

## Body Parameters(以下为部分示例参数仅供参考)

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**fields**                     | Object | 过滤字段            | 非必填  | - | 指定过滤掉的字段返回空值，<br/>从而缩小响应数据 |
|**&emsp; ∟ docData**             | Object | 单据数据            | 非必填  | - | 包含所有单据数据 |
|**&emsp; &emsp; ∟ code**        | String | 单据编号            | 非必填 | -  | 单据编号 |
|**&emsp; &emsp; ∟ title**       | String | 单据标题            | 非必填 | -  | 单据标题 |
|**&emsp; &emsp; ∟ state**       | String | 单据状态            | 非必填 | -  | 单据状态 |
|**&emsp; &emsp; ∟ remark**      | String | 备注               | 非必填  | - | 备注 |
|**&emsp; &emsp; ∟ ownerId**     | String | 流程发起人ID(员工ID) | 非必填  | - | 流程发起人ID(员工ID) |
|**&emsp; &emsp; ∟ owner**       | Object | 提交人信息          | 非必填  | - | 提交人信息 |
|**&emsp; &emsp; ∟ department**  | Object | 部门信息            | 非必填 | -  | 部门信息 |
|**&emsp; &emsp; ∟ userProps**   | Object | 自定义字段集         | 非必填 | -  | 自定义字段集 |
|**&emsp; &emsp; ∟ details**     | Object | 单据明细信息         | 非必填 | -  | 单据明细信息 |
|**&emsp; &emsp; ∟ logs**        | Object | 审批日志            | 非必填 | -  | 审批日志 |
|**&emsp; &emsp; ∟ flowPlane**   | Object | 审批流信息          | 非必填 | -  | 审批流信息 |

:::tip
- **index 这个值实际是一个时间戳（毫秒级），是单据状态改变的时间**，即单据审批后，单据状态变更为 `rejected` 已驳回、`paying` 待支付、`PROCESSING` 支付中、`paid` 已支付，四种状态中任意一种的时间。最开始查询可以根据自己需求设定的"时间范围"查询，大概从什么时间开始，会返回大于该时间的单据。
- 分页查询操作：获取上一页的单据后，取所有单据中最大的 `index` 作为下一次分页请求的值即可。
- `body` 参数可根据 `response` 回应数据层级自行设置，绝大部分参数都可以置空，一些特殊参数不允许置空会有错误提示。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/docSequences?accessToken=ID_3upGgPxN7Aw:djg8LshfUkfM00&powerCode=219902&type=expense&index=1600000000000&count=1&state=REJECTED' \
--header 'Content-Type: application/json' \
--data-raw '{
    "fields": {  //过滤字段，传""或者null均可，把response里参数对应的值置空
        "docData": {               //单据数据
            "code":"",             //单据编号
            "title":"",            //单据标题
            "state":"",            //单据状态
            "remark":"",           //备注
            "ownerId":"",          //流程发起人ID(员工ID)
            "dataType":"",         //数据类型
            "project":"",          //项目信息
            "updateTime":"",       //更新时间
            "specificationId":"",  //单据模版ID
            "owner": {             //提交人信息
                "id":"", 
                "name":"",
                "departments":[
                    {
                        "id":"",
                        "name":""
                    }
                ]
            },
            "department":{        //部门信息
                "name":""
            },
            "userProps":"",       //自定义字段集
            "details":"",         //单据明细信息
            "logs":"",            //审批日志
            "flowPlan": {         //审批流信息
                //"id":"",        /不能置空，会报错，可整个把“flowPlan”置空
                "version":"",
                "pipeline":"",
                "resubmitMethod":"",
                "prevId":"",
                "sourceCorporationId":"",
                "nodes":[ 
                    {
                        "id":"",
                        "name":"",
                        "skippedType":"",
                        "config":"",
                        "ebotConfig":""
                    }
                ]
            }
        }
    }
}'
```

## 成功响应

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="expense" label="报销单" default>

```json
{
    "count": 304,  //大于传入index的单据总量
    "items": [
        {
            "index": 1601393460644,
            "docData": {
                "type": "expense",
                "id": "2nobFuHkRIbA00",
                "corporationId": "djg8LshfUkfM00",
                "ownerId": null,   //字段值置空
                "dataType": null,  //字段值置空
                "remark": null,    //字段值置空
                "title": null,     //字段值置空
                "updateTime": 0,
                "specificationId": null,  //字段值置空
                "owner": {
                    "id": null,     //字段值置空
                    "name": null,   //字段值置空
                    "departments": [
                        {
                            "id": null,
                            "name": null,
                            "code": ""
                        },
                        {
                            "id": null,
                            "name": null,
                            "code": ""
                        }
                    ],
                    "code": ""
                },
                "department": {
                    "id": "djg8LshfUkfM00:GfEaWlxbwUj000",
                    "name": null,  //字段值置空
                    "code": ""
                },
                "code": null,      //字段值置空
                "userProps": null, //字段值置空
                "state": null,     //字段值置空
                "project": null,   //字段值置空
                "logs": null,      //字段值置空
                "flowPlan": { 
                    "pipeline": 0,
                    "grayver": "",
                    "id": "2nobFuHkRIbA00",
                    "version": 0,
                    "active": true,
                    "createTime": 1601393445083,
                    "updateTime": 1601393460515,
                    "corporationId": "djg8LshfUkfM00",
                    "sourceCorporationId": null,  //字段值置空
                    "dataCorporationId": null,
                    "prevId": null,               //字段值置空
                    "nextNodeId": null,
                    "taskId": "SUBMIT",
                    "ownerId": "djg8LshfUkfM00:6CsaVMEGiMjI00",
                    "submitterId": "djg8LshfUkfM00:6CsaVMEGiMjI00",
                    "flowPlanConfigId": "7V48Mmqokk9w00",
                    "submitNode": {
                        "id": "SUBMIT",
                        "nextId": "FLOW:349462918:1012975974",
                        "nextApproverIds": null,
                        "ownerId": "djg8LshfUkfM00:6CsaVMEGiMjI00",
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
                        "hidePrintBtnDependOnRemind": null,
                        "budgetCalcTime": null,
                        "isAllowWithdraw": null
                    },
                    "nodes": [
                        {
                            "type": "ebot",
                            "id": null,           //字段值置空
                            "configNodeId": "Big8Mmqokk9A00",
                            "name": null,         //字段值置空
                            "label": null,        //字段值置空
                            "skippedType": null,  //字段值置空
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
                            "config": null,  //字段值置空
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
                            "ebotConfig": null,  //字段值置空
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "9cY8Mmqokk9E00",
                            "name": null,
                            "label": "",
                            "skippedType": null,
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
                            "config": null,
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
                            "approverId": "djg8LshfUkfM00:6CsaVMEGiMjI00",
                            "forbidRejectNode": false,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "vbs8Mmqokk9Q00",
                            "name": null,
                            "label": "出纳支付",
                            "skippedType": null,
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
                            "config": null,
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
                            "approverId": "djg8LshfUkfM00:6CsaVMEGiMjI00",
                            "forbidRejectNode": false,
                            "approveType": "NONE"
                        }
                    ],
                    "resubmitMethod": "TO_NEXTNODE",
                    "configVersion": 0,
                    "hasCrossCorpNode": false
                },
                "sumAmount": 316,
                "writeOffAmount": 0,
                "expenseDate": 1601308800000,
                "details": null,
                "writtenOffRecords": [],
                "submitTime": 1601393445045,
                "payeeInfo": {
                    "sort": "BANK",
                    "name": "胡朝鹏",
                    "cardNo": "1345679",
                    "bank": "交通银行",
                    "branch": "交通银行北京松榆里支行",
                    "type": "PERSONAL",
                    "province": "北京市",
                    "city": "北京市",
                    "certificateType": "01",
                    "certificateNo": "130126199010173412",
                    "bankLinkNo": "301100000689",
                    "bankName": "",
                    "swiftCode": "",
                    "bankCode": "",
                    "branchCode": "",
                    "remark": null
                },
                "payorId": "B9cbA-FOHY6E00",
                "paymentChannel": null,
                "paymentAccountId": null,
                "payTime": 1601393460517,
                "multiplePayeesMode": false,
                "channelTradeNo": null,
                "payPlan": null,
                "receiptState": null,
                "paymentAccount": null
            }
        }
    ]
}
```
</TabItem>
<TabItem value="loan" label="借款单">

```json
{
    "count": 17,
    "items": [
        {
            "index": 1600095178505,
            "docData": {
                "type": "loan",
                "id": "-UkbAFQSiIk000",
                "corporationId": "djg8LshfUkfM00",
                "ownerId": null,
                "dataType": null,
                "remark": null,
                "title": null,
                "updateTime": 0,
                "specificationId": null,
                "owner": {
                    "id": null,
                    "name": null,
                    "departments": [
                        {
                            "id": null,
                            "name": null,
                            "code": ""
                        }
                    ],
                    "code": ""
                },
                "department": {
                    "id": "djg8LshfUkfM00:LcEb0AGaYs1000",
                    "name": null,
                    "code": ""
                },
                "code": null,
                "userProps": null,
                "state": null,
                "project": null,
                "logs": null,
                "flowPlan": {
                    "pipeline": 0,
                    "grayver": "",
                    "id": "-UkbAFQSiIk000",
                    "version": 0,
                    "active": true,
                    "createTime": 1600095160322,
                    "updateTime": 1600095178394,
                    "corporationId": "djg8LshfUkfM00",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "prevId": null,
                    "nextNodeId": null,
                    "taskId": "SUBMIT",
                    "ownerId": "djg8LshfUkfM00:fuwb0AND7Mio00",
                    "submitterId": "djg8LshfUkfM00:fuwb0AND7Mio00",
                    "flowPlanConfigId": "14kbxmem9QgI00",
                    "submitNode": {
                        "id": "SUBMIT",
                        "nextId": "SUBMIT",
                        "nextApproverIds": null,
                        "ownerId": "djg8LshfUkfM00:fuwb0AND7Mio00",
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
                        "hidePrintBtnDependOnRemind": null,
                        "budgetCalcTime": null,
                        "isAllowWithdraw": null
                    },
                    "nodes": [
                        {
                            "type": "ebot",
                            "id": null,
                            "configNodeId": "@@:5082CA5D-8B1E-41FE-911D-216D03C66996",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                            "ebotConfig": null,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "@@:40E73E08-1FB4-4B39-8B48-34FF93A5B281",
                            "name": null,
                            "label": "",
                            "skippedType": null,
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
                            "config": null,
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
                            "approverId": "djg8LshfUkfM00:fuwb0AND7Mio00",
                            "forbidRejectNode": false,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "@@:478ABFF5-41BA-4CA0-8F15-29A7D0B2252B",
                            "name": null,
                            "label": "出纳支付",
                            "skippedType": null,
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
                            "config": null,
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
                },
                "payeeDate": 1600095120000,
                "money": 100,
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
                "payeeInfo": null,
                "payorId": null,
                "paymentChannel": null,
                "paymentAccountId": null,
                "payTime": null,
                "repaymentDate": null,
                "channelTradeNo": null,
                "receiptState": null,
                "paymentAccount": null
            }
        }
    ]
}
```
</TabItem>
<TabItem value="repayment" label="还款记录">

```json
{
    "count": 14,
    "items": [
        {
            "index": 1624865999147,
            "docData": {
                "type": "repayment",
                "id": "ID_3geWvEQ686o",
                "corporationId": "djg8LshfUkfM00",
                "ownerId": null,
                "dataType": null,
                "remark": null,
                "title": null,
                "updateTime": 0,
                "specificationId": null,
                "owner": {
                    "id": null,
                    "name": null,
                    "departments": [
                        {
                            "id": null,
                            "name": null,
                            "code": ""
                        }
                    ],
                    "code": ""
                },
                "department": {
                    "id": "djg8LshfUkfM00",
                    "name": null,
                    "code": ""
                },
                "code": null,
                "userProps": null,
                "state": null,
                "project": null,
                "logs": null,
                "flowPlan": {
                    "pipeline": 0,
                    "grayver": "",
                    "id": "ID_3fRsHqVnsfg",
                    "version": 0,
                    "active": true,
                    "createTime": 1624438888429,
                    "updateTime": 1624439198351,
                    "corporationId": "djg8LshfUkfM00",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "prevId": null,
                    "nextNodeId": null,
                    "taskId": null,
                    "ownerId": "djg8LshfUkfM00:NMu3faw7ftuVfc",
                    "submitterId": "djg8LshfUkfM00:NMu3faw7ftuVfc",
                    "flowPlanConfigId": "wVc8Mmqokk9U00",
                    "submitNode": {
                        "id": "SUBMIT",
                        "nextId": "SUBMIT",
                        "nextApproverIds": null,
                        "ownerId": "djg8LshfUkfM00:NMu3faw7ftuVfc",
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
                            "id": null,
                            "configNodeId": "YdM8Mmqokk9Y00",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                            "ebotConfig": null,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "oFI8Mmqokka000",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                            "approverId": "djg8LshfUkfM00:NMu3faw7ftuVfc",
                            "forbidRejectNode": false,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "oXQ8Mmqokkac00",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                            "approverId": "djg8LshfUkfM00:NMu3faw7ftuVfc",
                            "forbidRejectNode": false,
                            "approveType": "NONE"
                        }
                    ],
                    "resubmitMethod": "TO_NEXTNODE",
                    "configVersion": 2,
                    "hasCrossCorpNode": false
                },
                "repaymentType": "MANUAL",
                "amount": 2000,
                "loanId": "ID_3fRsHqVnsfg",
                "createTime": 1624865998955,
                "paymentAccountId": "GZsbnv67wUrI00"
            }
        }
    ]
}
```
</TabItem>
<TabItem value="requisition" label="申请单">

```json
{
    "count": 2035,
    "items": [
        {
            "index": 1588496665454,
            "docData": {
                "type": "requisition",
                "id": "BOIaVswERctU00",
                "corporationId": "djg8LshfUkfM00",
                "ownerId": null,
                "dataType": null,
                "remark": null,
                "title": null,
                "updateTime": 0,
                "specificationId": null,
                "owner": {
                    "id": null,
                    "name": null,
                    "departments": [
                        {
                            "id": null,
                            "name": null,
                            "code": ""
                        }
                    ],
                    "code": ""
                },
                "department": {
                    "id": "djg8LshfUkfM00",
                    "name": null,
                    "code": ""
                },
                "code": null,
                "userProps": null,
                "state": null,
                "project": null,
                "logs": null,
                "flowPlan": {
                    "pipeline": 0,
                    "grayver": "",
                    "id": "BOIaVswERctU00",
                    "version": 0,
                    "active": true,
                    "createTime": 1588496639228,
                    "updateTime": 1588496665327,
                    "corporationId": "djg8LshfUkfM00",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "prevId": null,
                    "nextNodeId": null,
                    "taskId": null,
                    "ownerId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                    "submitterId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                    "flowPlanConfigId": "Avs8Mmqokkag00",
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
                            "id": null,
                            "configNodeId": "AZc8Mmqokkak00",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                            "ebotConfig": null,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "zKk8Mmqokkao00",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                            "approverId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                            "forbidRejectNode": false,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "p4U8MmqokkaA00",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                },
                "sumAmount": 22,
                "requisitionDate": 1588435200000,
                "details": null,
                "trips": [],
                "travelers": [],
                "submitTime": 1588496639197,
                "payeeInfo": null,
                "payorId": null,
                "paymentChannel": null,
                "paymentAccountId": null,
                "payTime": 1588496665337,
                "loanMoney": null,
                "repaymentDate": null,
                "channelTradeNo": null,
                "receiptState": null,
                "paymentAccount": null
            }
        }
    ]
}
```
</TabItem>
<TabItem value="payment" label="付款单">

```json
{
    "count": 1,
    "items": [
        {
            "index": 1638439620418,
            "docData": {
                "type": "payment",
                "id": "ID_3sTYYdqkcsM",
                "corporationId": "djg8LshfUkfM00",
                "ownerId": null,
                "dataType": null,
                "remark": null,
                "title": null,
                "updateTime": 0,
                "specificationId": null,
                "owner": {
                    "id": null,
                    "name": null,
                    "departments": [
                        {
                            "id": null,
                            "name": null,
                            "code": ""
                        }
                    ],
                    "code": ""
                },
                "department": null,
                "code": null,
                "userProps": null,
                "state": null,
                "project": null,
                "logs": null,
                "flowPlan": {
                    "pipeline": 0,
                    "grayver": "9.7.0.0:A",
                    "id": "ID_3sTYYdqkcsM",
                    "version": 0,
                    "active": true,
                    "createTime": 1638439589095,
                    "updateTime": 1638439620284,
                    "corporationId": "djg8LshfUkfM00",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "prevId": null,
                    "nextNodeId": null,
                    "taskId": "SUBMIT",
                    "ownerId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                    "submitterId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                    "flowPlanConfigId": "ID_3sKLgregMiw",
                    "submitNode": {
                        "id": "SUBMIT",
                        "nextId": "FLOW:688557119:1817175270",
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
                        "hidePrintBtnDependOnRemind": null,
                        "budgetCalcTime": null,
                        "isAllowWithdraw": false
                    },
                    "nodes": [
                        {
                            "type": "ebot",
                            "id": null,
                            "configNodeId": "@@:5026B726-8A7F-4064-B5E2-2146C9AAD8BA",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                            "ebotConfig": null,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "@@:5D46DFC0-1E50-4208-AA8C-1B9CFDF1BE6C",
                            "name": null,
                            "label": "",
                            "skippedType": null,
                            "agreeType": "NO_AUTO_AGREE",
                            "conditionalDescription": null,
                            "conditionalType": null,
                            "skipWhenApproverNonMatched": true,
                            "autoAgreeWhenApproverRepeated": false,
                            "autoAgreeWhenApproverSameAsSubmitter": false,
                            "removeDefaultHistoryApprover": false,
                            "autoAgreeWhenCreditInsepction": false,
                            "creditNoteAvailable": false,
                            "allowModify": true,
                            "config": null,
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
                            "approverId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                            "forbidRejectNode": false,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "@@:5F293A1C-1EEC-4E1A-B83A-1C2BC917BF0D",
                            "name": null,
                            "label": "",
                            "skippedType": null,
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
                            "config": null,
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
                            "approverId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                            "forbidRejectNode": false,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "@@:5A13354F-1D45-4C0C-8582-1AAA578468E3",
                            "name": null,
                            "label": "出纳支付",
                            "skippedType": null,
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
                            "config": null,
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
                            "approverId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                            "forbidRejectNode": false,
                            "approveType": "NONE"
                        }
                    ],
                    "resubmitMethod": "TO_NEXTNODE",
                    "configVersion": 1,
                    "hasCrossCorpNode": false
                },
                "payMoney": 666,
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
                    "sort": "BANK",
                    "name": "冯继成-个人",
                    "cardNo": "62342123512365",
                    "bank": "交通银行",
                    "branch": "交通银行北京东直门支行",
                    "type": "PERSONAL",
                    "province": "北京市",
                    "city": "北京市",
                    "certificateType": null,
                    "certificateNo": null,
                    "bankLinkNo": "301100000040",
                    "bankName": "",
                    "swiftCode": "",
                    "bankCode": "",
                    "branchCode": "",
                    "remark": null
                },
                "payorId": "ID_3r0cTleWAZw",
                "paymentChannel": null,
                "paymentAccountId": null,
                "payTime": null,
                "channelTradeNo": null,
                "receiptState": "",
                "paymentAccount": null
            }
        }
    ]
}
```
</TabItem>
<TabItem value="custom" label="通用审批单">

```json
{
    "count": 331,
    "items": [
        {
            "index": 1588758599442,
            "docData": {
                "type": "custom",
                "id": "t-0aWqTJkY6U00",
                "corporationId": "djg8LshfUkfM00",
                "ownerId": null,
                "dataType": null,
                "remark": null,
                "title": null,
                "updateTime": 0,
                "specificationId": null,
                "owner": {
                    "id": null,
                    "name": null,
                    "departments": [
                        {
                            "id": null,
                            "name": null,
                            "code": ""
                        }
                    ],
                    "code": ""
                },
                "department": null,
                "code": null,
                "userProps": null,
                "state": null,
                "project": null,
                "logs": null,
                "flowPlan": {
                    "pipeline": 0,
                    "grayver": "",
                    "id": "t-0aWqTJkY6U00",
                    "version": 0,
                    "active": true,
                    "createTime": 1588758585660,
                    "updateTime": 1588758599341,
                    "corporationId": "djg8LshfUkfM00",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "prevId": null,
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
                            "id": null,
                            "configNodeId": "@@:d76bb0cb-7abb-481f-baa7-19ea5ac78154",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                            "ebotConfig": null,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "@@:4ac81f07-f2c4-44c7-acc0-672efcdeca9d",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                            "id": null,
                            "configNodeId": "@@:487c2df3-0ae1-44ae-908c-25a141857873",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
        }
    ]
}
```
</TabItem>
<TabItem value="receipt" label="收款单">

```json
{
    "count": 1,
    "items": [
        {
            "index": 1638347591098,
            "docData": {
                "type": "receipt",
                "id": "ID_3sOuotCppgw",
                "corporationId": "djg8LshfUkfM00",
                "ownerId": null,
                "dataType": null,
                "remark": null,
                "title": null,
                "updateTime": 0,
                "specificationId": null,
                "owner": {
                    "id": null,
                    "name": null,
                    "departments": [
                        {
                            "id": null,
                            "name": null,
                            "code": ""
                        }
                    ],
                    "code": ""
                },
                "department": {
                    "id": "djg8LshfUkfM00",
                    "name": null,
                    "code": ""
                },
                "code": null,
                "userProps": null,
                "state": null,
                "project": null,
                "logs": null,
                "flowPlan": {
                    "pipeline": 0,
                    "grayver": "9.7.0.0:A",
                    "id": "ID_3sOuotCppgw",
                    "version": 0,
                    "active": true,
                    "createTime": 1638347590019,
                    "updateTime": 1638347590817,
                    "corporationId": "djg8LshfUkfM00",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "prevId": null,
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
                            "id": null,
                            "configNodeId": "@@:4A4E209F-8065-4043-93E4-1ED9726BCD4C",
                            "name": null,
                            "label": null,
                            "skippedType": null,
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
                            "config": null,
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
                            "ebotConfig": null,
                            "approveType": "NONE"
                        },
                        {
                            "type": "normal",
                            "id": null,
                            "configNodeId": "@@:55DC94EF-945D-4093-AEEE-23A5B69203DC",
                            "name": null,
                            "label": "",
                            "skippedType": null,
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
                            "config": null,
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
                            "id": null,
                            "configNodeId": "@@:4E00D5EE-86C8-4DE2-BB8C-20627E4B27EB",
                            "name": null,
                            "label": "出纳支付",
                            "skippedType": null,
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
                            "config": null,
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
                "sumAmount": 111,
                "receiptDate": 1638288000000,
                "details": null,
                "submitTime": 1638347589927
            }
        }
    ]
}
```
</TabItem>
</Tabs>

查询不到数据时返回如下：
```json
{
    "count": 0,
    "items": []   //表示没查到数据
}
```

## 失败响应
`powerCode` 输入错误时，报错如下：
```json
{
    "errorCode": 403,
    "errorMessage": "未开通功能，无权访问",  //请检查powerCode参数是否正确：219902或219904
    "errorDetails": null,
    "code": null,
    "data": null
}
```
当过滤字段中包含不可置空的字段时报错如下，请检查过滤字段：
:::caution
已知不可置空字段：
- docData.type
- docData.flowPlan.id
- docData.flowPlan.nodes.type
:::

```json
{
    "errorCode": 400,
    "errorMessage": "fields过滤字段解析出错,请参照文档设置可过滤字段",
    "errorDetails": null,
    "code": null,
    "data": null
}
```


