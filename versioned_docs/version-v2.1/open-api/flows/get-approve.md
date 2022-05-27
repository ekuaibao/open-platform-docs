---
slug: get-approve
title: 根据员工ID获取待审批单据(废弃)
authors: [冯继成]
---

# ~~根据员工ID获取待审批单据~~

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/docs/byApproverId/$`approverId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.6.0</b></a> -> ❌ 接口废弃。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.4.1</b></a> -> 🐞 优化了接口 <b>HTTP 500</b> 错误，更新接口 <b>失败响应</b> 示例。<br/>
  </div>
</details>

:::danger
- 不推荐使用，接口废弃，不再更新维护。
- 推荐使用【[根据员工ID获取待审批单据(新)](/docs/open-api/flows/get-approve-new)】接口。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **approverId** | String | 员工ID | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |

#### Query Parameters:

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**   | String  | 认证token     | 必填   | - |  [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **powerCode**     | String  | 功能授权码      | 必填   | - | `219902` : 开放接口 &emsp; `219904` : 开放接口(新) |
| **index**         | Number  | 分页查询的起始值 | 非必填 | 0 | 起始值从 `0` 开始 |
| **count**         | Number  | 查询数据条数    | 必填   | - | 最大不能超过 `100` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/docs/byApproverId/$gwobfjObAAno00:KpIbfkxLiU7800?accessToken=cWEbn1cA0kjU00&index=0&count=10&powerCode=219902'
```

## 成功响应
可以参考[根据单据ID集合获取单据列表](/docs/open-api/flows/get-forms-sequences-ids)返回信息，单据数据结构是一样的：
```json
{
    "items":[
        {
            "type":"loan",
            "id":"ID_3sJUVscs$_w",                      //单据ID 对应其他api的flowId
            "corporationId":"PCx3rwm3aA00qM",           //企业ID
            "ownerId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",  //单据提交人ID
            "dataType":"loan",
            "remark":"333",                             //备注
            "title":"111111",                           //标题
            "updateTime":1638273586023,                 //更新日期时间戳
            "specificationId":"ID_3rwlFm525WM:783fa301dc70ce4040d2b913be214ac09f58121a",  //模板ID
            "owner":{                                   //提交人信息
                "id":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",   //员工ID
                "name":"张国阳",                        //姓名  
                "departments":[                        //所属部门信息
                    {
                        "id":"PCx3rwm3aA00qM",
                        "name":"洪洞大槐树",
                        "code":""
                    }
                ],
                "code":""
            },
            "department":{              //报销部门信息
                "id":"PCx3rwm3aA00qM",
                "name":"洪洞大槐树",
                "code":""
            },
            "code":"J21000002",         //单据code
            "userProps":{               //单据字段信息
                "specificationId":{
                    "id":"ID_3rwlFm525WM:783fa301dc70ce4040d2b913be214ac09f58121a",
                    "code":"",
                    "name":"个人借款单"
                },
                "submitterId":{
                    "id":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "code":"00000",
                    "name":"张国阳"
                },
                "loanDepartment":{
                    "id":"PCx3rwm3aA00qM",
                    "code":"000",
                    "name":"洪洞大槐树"
                },
                "payeeId":{
                    "id":"ID_3s4PKc13U$g",
                    "code":"",
                    "name":"测试账户"
                },
                "description":"333",
                "attachments":[]
            },
            "state":"APPROVING",  //单据状态
            "project":null,       //项目信息
            "logs":[              //审批日志
                {
                    "isNew":false,
                    "corporationId":"PCx3rwm3aA00qM",
                    "docDataCode":"J21000002",
                    "time":1638272215864,
                    "state":"approving",
                    "action":"freeflow.submit",
                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "nodeName":"SUBMIT",
                    "nodeId":"SUBMIT",
                    "nextNodeId":"FLOW:798772639:426695814",
                    "nextOperatorId":"ebot",
                    "logid":"ID_3sJWS7K0hpw",
                    "attachments":[],
                    "attributes":{
                        "nextId":"FLOW:798772639:426695814",
                        "nodeId":"SUBMIT",
                        "comment":"",
                        "isUrgent":false,
                        "nextName":"费用标准检查",
                        "urgentReason":null,
                        "resubmitMethod":"FROM_START",
                        "nextCounterSign":false,
                        "sensitiveContent":null,
                        "resubmitOperatorIds":[]
                    }
                },
                {
                    "isNew":false,
                    "corporationId":"PCx3rwm3aA00qM",
                    "docDataCode":"J21000002",
                    "time":1638272708533,
                    "state":"rejected",
                    "action":"freeflow.reject",
                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "nodeName":"",
                    "nodeId":"FLOW:483550292:96796672",
                    "nextNodeId":"null",
                    "nextOperatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "logid":"ID_3sJWS7K0ipw",
                    "attachments":[],
                    "attributes":{
                        "isAuto":false,
                        "nextId":null,
                        "nodeId":"FLOW:483550292:96796672",
                        "comment":"11",
                        "nodeName":"提交人",
                        "isEbotNode":false,
                        "isStaffExit":false,
                        "resubmitMethod":"TO_REJECTOR",
                        "isCostControlCheck":false
                    }
                },
                {
                    "isNew":false,
                    "corporationId":"PCx3rwm3aA00qM",
                    "docDataCode":"J21000002",
                    "time":1638272858038,
                    "state":"approving",
                    "action":"freeflow.submit",
                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "nodeName":"SUBMIT",
                    "nodeId":"SUBMIT",
                    "nextNodeId":"FLOW:798772639:426695814",
                    "nextOperatorId":"ebot",
                    "logid":"ID_3sJWS7K0jpw",
                    "attachments":[],
                    "attributes":{
                        "nextId":"FLOW:798772639:426695814",
                        "nodeId":"SUBMIT",
                        "comment":"对「凭证状态」，进行了修改，请注意！",
                        "isUrgent":false,
                        "nextName":"费用标准检查",
                        "urgentReason":null,
                        "resubmitMethod":"TO_REJECTOR",
                        "nextCounterSign":false,
                        "sensitiveContent":null,
                        "resubmitOperatorIds":[
                            "PCx3rwm3aA00qM:VWf3rvZHCb0ghM"
                        ]
                    }
                },
                {
                    "isNew":false,
                    "corporationId":"PCx3rwm3aA00qM",
                    "docDataCode":"J21000002",
                    "time":1638273200580,
                    "state":"rejected",
                    "action":"freeflow.reject",
                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "nodeName":"",
                    "nodeId":"FLOW:483550292:96796672",
                    "nextNodeId":"null",
                    "nextOperatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "logid":"ID_3sJWS7K0kpw",
                    "attachments":[],
                    "attributes":{
                        "isAuto":false,
                        "nextId":null,
                        "nodeId":"FLOW:483550292:96796672",
                        "comment":"1112",
                        "nodeName":"提交人",
                        "isEbotNode":false,
                        "isStaffExit":false,
                        "resubmitMethod":"FROM_START",
                        "isCostControlCheck":false
                    }
                },
                {
                    "isNew":false,
                    "corporationId":"PCx3rwm3aA00qM",
                    "docDataCode":"J21000002",
                    "time":1638273431095,
                    "state":"approving",
                    "action":"freeflow.submit",
                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "nodeName":"SUBMIT",
                    "nodeId":"SUBMIT",
                    "nextNodeId":"FLOW:644696586:109364268",
                    "nextOperatorId":"ebot",
                    "logid":"ID_3th9UoH0Xrg",
                    "attachments":[],
                    "attributes":{
                        "nextId":"FLOW:644696586:109364268",
                        "nodeId":"SUBMIT",
                        "comment":"",
                        "isUrgent":false,
                        "nextName":"费用标准检查",
                        "urgentReason":null,
                        "resubmitMethod":"FROM_START",
                        "nextCounterSign":false,
                        "sensitiveContent":null,
                        "resubmitOperatorIds":[]
                    }
                },
                {
                    "isNew":false,
                    "corporationId":"PCx3rwm3aA00qM",
                    "docDataCode":"J21000002",
                    "time":1638273586023,
                    "state":"approving",
                    "action":"freeflow.agree",
                    "operatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "nodeName":"主管审批",
                    "nodeId":"FLOW:1061893438:772150319",
                    "nextNodeId":"FLOW:1764849392:458464952",
                    "nextOperatorId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "logid":"ID_3th9UoH0Yrg",
                    "attachments":[],
                    "attributes":{
                        "nextId":"FLOW:1764849392:458464952",
                        "nodeId":"FLOW:1061893438:772150319",
                        "comment":"同意",
                        "complete":true,
                        "nextName":"总经理审批",
                        "nodeName":"主管审批",
                        "expressNum":null,
                        "isEbotNode":false,
                        "counterSign":false,
                        "isRecalNode":false,
                        "oldFlowPlanId":null,
                        "nextCounterSign":false,
                        "autographImageId":null
                    }
                }
            ],
            "flowPlan":{    //审批计划
                "pipeline":1,
                "grayver":"9.7.0.0:A",
                "id":"ID_3sJUVscs$_w",
                "version":6,
                "active":true,
                "createTime":1638273430336,
                "updateTime":1638273585966,
                "corporationId":"PCx3rwm3aA00qM",
                "sourceCorporationId":null,
                "dataCorporationId":null,
                "prevId":"FLOW:1061893438:772150319",
                "nextNodeId":null,
                "taskId":"FLOW:1764849392:458464952",
                "ownerId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                "submitterId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                "flowPlanConfigId":"ID_3rwlFm51JWM",
                "submitNode":{
                    "id":"SUBMIT",
                    "nextId":"SUBMIT",
                    "nextApproverIds":null,
                    "ownerId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                    "carbonCopy":[],
                    "urgent":null,
                    "isSensitive":null,
                    "isRequired":null,
                    "submitOutboundMessage":null,
                    "hidePrintBtnDependOnRemind":null,
                    "budgetCalcTime":null,
                    "isAllowWithdraw":null
                },
                "nodes":[
                    {
                        "type":"ebot",
                        "id":"FLOW:644696586:109364268",
                        "configNodeId":"ID_3rwlFm51KWM",
                        "name":"费用标准检查",
                        "label":null,
                        "skippedType":"NO_SKIPPED",
                        "agreeType":"NO_AUTO_AGREE",
                        "conditionalDescription":null,
                        "conditionalType":null,
                        "skipWhenApproverNonMatched":false,
                        "autoAgreeWhenApproverRepeated":false,
                        "autoAgreeWhenApproverSameAsSubmitter":false,
                        "removeDefaultHistoryApprover":false,
                        "autoAgreeWhenCreditInsepction":false,
                        "creditNoteAvailable":false,
                        "allowModify":true,
                        "config":{
                            "isAuto":false
                        },
                        "isAllStaffs":false,
                        "carbonCopy":[],
                        "timeCount":null,
                        "addCountReport":false,
                        "isAddNode":false,
                        "autoRemindPrint":false,
                        "beforeRemindPrint":false,
                        "allowModifyApprover":false,
                        "expressConfig":null,
                        "commentWhenFlowHasRisk":false,
                        "forbidBatchApproveRiskFlow":false,
                        "condition":null,
                        "laterCalcReason":null,
                        "forbidBeforeAddNode":false,
                        "forbidAftAddNode":false,
                        "forbidShiftNode":false,
                        "crossCorpNode":false,
                        "rejectSetting":null,
                        "ebotConfig":{
                            "type":"costControlCheck",
                            "setting":{
                                "controlIds":[],
                                "isOutOfLimitReject":false
                            }
                        },
                        "approveType":"NONE"
                    },
                    {
                        "type":"normal",
                        "id":"FLOW:1061893438:772150319",
                        "configNodeId":"ID_3rwlFm51LWM",
                        "name":"主管审批",
                        "label":null,
                        "skippedType":"NO_SKIPPED",
                        "agreeType":"NO_AUTO_AGREE",
                        "conditionalDescription":null,
                        "conditionalType":null,
                        "skipWhenApproverNonMatched":true,
                        "autoAgreeWhenApproverRepeated":false,
                        "autoAgreeWhenApproverSameAsSubmitter":false,
                        "removeDefaultHistoryApprover":false,
                        "autoAgreeWhenCreditInsepction":false,
                        "creditNoteAvailable":false,
                        "allowModify":false,
                        "config":{
                            "isAuto":false,
                            "isSubmitterChoice":false
                        },
                        "isAllStaffs":true,
                        "carbonCopy":[],
                        "timeCount":null,
                        "addCountReport":true,
                        "isAddNode":false,
                        "autoRemindPrint":false,
                        "beforeRemindPrint":false,
                        "allowModifyApprover":false,
                        "expressConfig":null,
                        "commentWhenFlowHasRisk":false,
                        "forbidBatchApproveRiskFlow":false,
                        "condition":null,
                        "laterCalcReason":null,
                        "forbidBeforeAddNode":false,
                        "forbidAftAddNode":false,
                        "forbidShiftNode":false,
                        "crossCorpNode":false,
                        "rejectSetting":null,
                        "staffIds":[],
                        "approverId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                        "forbidRejectNode":false,
                        "approveType":"NONE"
                    },
                    {
                        "type":"normal",
                        "id":"FLOW:1764849392:458464952",
                        "configNodeId":"ID_3rwlFm51MWM",
                        "name":"总经理审批",
                        "label":null,
                        "skippedType":"NO_SKIPPED",
                        "agreeType":"NO_AUTO_AGREE",
                        "conditionalDescription":null,
                        "conditionalType":null,
                        "skipWhenApproverNonMatched":true,
                        "autoAgreeWhenApproverRepeated":false,
                        "autoAgreeWhenApproverSameAsSubmitter":false,
                        "removeDefaultHistoryApprover":false,
                        "autoAgreeWhenCreditInsepction":false,
                        "creditNoteAvailable":false,
                        "allowModify":false,
                        "config":{
                            "isAuto":false,
                            "isSubmitterChoice":false
                        },
                        "isAllStaffs":true,
                        "carbonCopy":[],
                        "timeCount":null,
                        "addCountReport":true,
                        "isAddNode":false,
                        "autoRemindPrint":false,
                        "beforeRemindPrint":false,
                        "allowModifyApprover":false,
                        "expressConfig":null,
                        "commentWhenFlowHasRisk":false,
                        "forbidBatchApproveRiskFlow":false,
                        "condition":null,
                        "laterCalcReason":null,
                        "forbidBeforeAddNode":false,
                        "forbidAftAddNode":false,
                        "forbidShiftNode":false,
                        "crossCorpNode":false,
                        "rejectSetting":null,
                        "staffIds":[],
                        "approverId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                        "forbidRejectNode":false,
                        "approveType":"NONE"
                    },
                    {
                        "type":"normal",
                        "id":"FLOW:37322208:1039255624",
                        "configNodeId":"ID_3rwlFm51NWM",
                        "name":"财务复核",
                        "label":null,
                        "skippedType":"NO_SKIPPED",
                        "agreeType":"NO_AUTO_AGREE",
                        "conditionalDescription":null,
                        "conditionalType":null,
                        "skipWhenApproverNonMatched":true,
                        "autoAgreeWhenApproverRepeated":false,
                        "autoAgreeWhenApproverSameAsSubmitter":false,
                        "removeDefaultHistoryApprover":false,
                        "autoAgreeWhenCreditInsepction":false,
                        "creditNoteAvailable":false,
                        "allowModify":false,
                        "config":{
                            "isAuto":false,
                            "isSubmitterChoice":false
                        },
                        "isAllStaffs":true,
                        "carbonCopy":[],
                        "timeCount":null,
                        "addCountReport":true,
                        "isAddNode":false,
                        "autoRemindPrint":false,
                        "beforeRemindPrint":false,
                        "allowModifyApprover":false,
                        "expressConfig":null,
                        "commentWhenFlowHasRisk":false,
                        "forbidBatchApproveRiskFlow":false,
                        "condition":null,
                        "laterCalcReason":null,
                        "forbidBeforeAddNode":false,
                        "forbidAftAddNode":false,
                        "forbidShiftNode":false,
                        "crossCorpNode":false,
                        "rejectSetting":null,
                        "staffIds":[],
                        "approverId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                        "forbidRejectNode":false,
                        "approveType":"NONE"
                    },
                    {
                        "type":"normal",
                        "id":"FLOW:1388497113:849775802",
                        "configNodeId":"ID_3rwlFm51OWM",
                        "name":"出纳支付",
                        "label":null,
                        "skippedType":"NO_SKIPPED",
                        "agreeType":"NO_AUTO_AGREE",
                        "conditionalDescription":null,
                        "conditionalType":null,
                        "skipWhenApproverNonMatched":false,
                        "autoAgreeWhenApproverRepeated":false,
                        "autoAgreeWhenApproverSameAsSubmitter":false,
                        "removeDefaultHistoryApprover":false,
                        "autoAgreeWhenCreditInsepction":false,
                        "creditNoteAvailable":false,
                        "allowModify":false,
                        "config":{
                            "isAuto":false,
                            "isSubmitterChoice":false
                        },
                        "isAllStaffs":true,
                        "carbonCopy":[],
                        "timeCount":null,
                        "addCountReport":true,
                        "isAddNode":false,
                        "autoRemindPrint":false,
                        "beforeRemindPrint":false,
                        "allowModifyApprover":false,
                        "expressConfig":null,
                        "commentWhenFlowHasRisk":false,
                        "forbidBatchApproveRiskFlow":false,
                        "condition":null,
                        "laterCalcReason":null,
                        "forbidBeforeAddNode":false,
                        "forbidAftAddNode":false,
                        "forbidShiftNode":false,
                        "crossCorpNode":false,
                        "rejectSetting":null,
                        "staffIds":[],
                        "approverId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                        "forbidRejectNode":false,
                        "approveType":"NONE"
                    }
                ],
                "resubmitMethod":"TO_NEXTNODE",
                "configVersion":1,
                "hasCrossCorpNode":false
            },
            "payeeDate":1638272160000,
            "money":33333,
            "money_standardStrCode":"CNY",
            "money_standardNumCode":"156",
            "money_standardSymbol":"¥",
            "money_standardUnit":"元",
            "money_rate":null,
            "money_foreignStrCode":null,
            "money_foreignNumCode":null,
            "money_foreign":null,
            "money_foreignSymbol":null,
            "money_foreignUnit":null,
            "payeeInfo":{   //收款人信息
                "sort":"BANK",
                "name":"测试账户",
                "cardNo":"6228485558282223333",
                "bank":"商业银行",
                "branch":"北京银行昌平支行",
                "type":"PERSONAL",
                "province":"北京市",
                "city":"北京市",
                "certificateType":"01",
                "certificateNo":"142615199711116666",
                "bankLinkNo":"313100001145",
                "bankName":"",
                "swiftCode":"",
                "bankCode":"",
                "branchCode":"",
                "remark":"测试账户"
            },
            "payorId":"ID_3s4PKc13U$g",
            "paymentChannel":null,
            "paymentAccountId":null,
            "payTime":null,
            "repaymentDate":1640864160000,
            "channelTradeNo":null,
            "receiptState":"",
            "paymentAccount":null
        }
    ]
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "不允许访问",  //检查员工ID是否属于此公司的
    "errorDetails": null,
    "code": null,
    "data": null
}
```
当某个单据中有引用的数据被物理删除时（数据库中不存在），可以通过 [更新单据](/docs/open-api/flows/update-form) 清理脏数据：
```json
{
    "errorCode": 400,
    "errorMessage": "获取待审批单据异常：找不到依赖的实体：ID_3EnD3w6uTe0",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

