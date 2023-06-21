---
slug: get-delivered-byStaff
title: 根据员工ID获取已支付单据
authors: [张国阳]
---

# 根据员工ID获取已支付单据

根据单据更新时间 **倒序** 排序返回已支付单据详情。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1.1/docs/delivered/$`approverId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.20.0**](/docs/open-api/notice/update-log#1200) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **approverId** | String | 员工ID | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**   | String  | 认证token     | 必填   | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **index**         | Number  | 分页查询的起始值 | 非必填 | 0 | 起始值从 `0` 开始 |
| **count**         | Number  | 查询数据条数    | 非必填 | 100 | 最大不能超过 `100`，**大于 `100` 按 `100` 返回** |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/docs/delivered/$xgJ3wajigF25H0:dbc3wajigF1UH0?accessToken=ID01w4CAZC7P6n%3AxgJ3wajigF25H0&index=0&count=10'
```

## 成功响应
可以参考 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details) 返回信息，单据数据结构是一样的：
```json
{
    "count": 20,                                     //已支付单据总数
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.18.0.0:A",
            "version": 3,                            //版本号
            "active": true,                          //是否有效（或者理解为是否被删除） true：有效，false：无效
            "createTime": 1678878038441,             //创建时间(毫秒级时间戳) 
            "updateTime": 1678878106855,             //更新时间(毫秒级时间戳)，单据审批、单据字段修改都会改变此字段值
            "corporationId": "xgJ3wajigF25H0",       //企业ID
            "sourceCorporationId": null, 
            "dataCorporationId": null,
            "form": {                                //单据详情
                "code": "J23000004",                 //单据编码 
                "title": "借款_02",                  //单据标题
                "payDate": 1678878104230,            //支付时间
                "payPlan": [                         //支付计划
                    {
                        "receiptId": [],
                        "dataLinkId": "ID01w4CANo9zuD",
                        "dataLinkForm": {
                            "E_system_支付计划_支付金额": {
                                "rate": "5.2",
                                "foreign": "4444",
                                "sysRate": "5.2",
                                "standard": "23108.80",
                                "foreignUnit": "欧元",
                                "foreignScale": 2,
                                "standardUnit": "元",
                                "foreignSymbol": "€",
                                "standardScale": 2,
                                "foreignNumCode": "978",
                                "foreignStrCode": "EUR",
                                "standardSymbol": "¥",
                                "standardNumCode": "156",
                                "standardStrCode": "CNY"
                            },
                            "E_system_支付计划_收款信息": "ID01w4CACN7Npl"
                        },
                        "dataLinkTemplateId": null
                    }
                ],
                "payeeId": "ID01w4CACN7Npl",   //收款人ID
                "payMoney": {                  //支付金额 
                    "rate": "5.2",
                    "foreign": "4444",
                    "sysRate": "5.2",
                    "standard": "23108.80",
                    "foreignUnit": "欧元",
                    "foreignScale": 2,
                    "standardUnit": "元",
                    "foreignSymbol": "€",
                    "standardScale": 2,
                    "foreignNumCode": "978",
                    "foreignStrCode": "EUR",
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "loanMoney": {                //借款金额
                    "rate": "5.2",
                    "foreign": "4444",
                    "sysRate": "5.2",
                    "standard": "23108.80",
                    "foreignUnit": "欧元",
                    "foreignScale": 2,
                    "standardUnit": "元",
                    "foreignSymbol": "€",
                    "standardScale": 2,
                    "foreignNumCode": "978",
                    "foreignStrCode": "EUR",
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1678878043253,    //提交时间
                "attachments": [],
                "flowEndTime": 1678878107448,   //单据完成时间
                "description": "",              //描述
                "submitterId": "xgJ3wajigF25H0:dbc3wajigF1UH0",  //提交人ID
                "repaymentDate": 1681556400000, //还款日期
                "onlyOwnerPrint": false,
                "paymentChannel": "OFFLINE",      //支付方式
                "specificationId": "ID_3w9HsnE2uq0:68c08cae3c56bd7cba7179f292a15f78407c75f2",  //单据模板ID
                "paymentAccountId": "ID01w4CACN7N8P",
                "preNodeApprovedTime": 1678878104230,
                "timeToEnterPendingPayment": 1678878075051,
                "ownerAndApproverPrintNodeFlag": false
            },
            "ownerId": "xgJ3wajigF25H0:dbc3wajigF1UH0",  //流程发起人ID
            "ownerDefaultDepartment": "xgJ3wajigF25H0",  //流程发起人默认部门ID
            "state": "paid",        //流程状态 pending-提交中 approving-审批中 rejected-已驳回 paying-待支付 PROCESSING-支付中 paid-已支付 archived-归档 sending-寄送中 receiving-收单中                      
            "flowType": "freeflow", //流程类型
            "formType": "loan",     //单据类型 expense-报销单 loan-借款单 payment-付款单 requisition-申请单 custom-通用审批单 receipt-收款单
            "logs": [               //审批记录
                { 
                    "action": "freeflow.submit",     //动作名称
                    "state": "approving",            //操作后到流程状态
                    "operatorId": "xgJ3wajigF25H0:dbc3wajigF1UH0",  //操作人ID
                    "byDelegateId": null,
                    "operatorDefaultDepartment": "xgJ3wajigF25H0",  //操作人默认部门ID
                    "nextOperatorId": "ebot",  //下一操作人ID
                    "nextOperatorIds": [],     //会签时的下一批操作人ID
                    "time": 1648107479529,     //操作时间
                    "attributes": {            //动作相关属性
                        "nextId": "FLOW:435478653E8:1324545105E9",
                        "nodeId": "SUBMIT",
                        "comment": "",
                        "isUrgent": false,
                        "nextName": "费用标准检查",
                        "urgentReason": "",
                        "resubmitMethod": "FROM_START",
                        "nextCounterSign": false,
                        "sensitiveContent": null,
                        "resubmitOperatorIds": []
                    },
                    "modifyFlowLog": null,   //修改记录
                    "attachments": []        //附件
                },
                {
                    "action": "freeflow.agree",
                    "state": "paying",
                    "operatorId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                    "byDelegateId": null,
                    "operatorDefaultDepartment": "xgJ3wajigF25H0",
                    "nextOperatorId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                    "nextOperatorIds": [],
                    "time": 1678878075051,
                    "attributes": {
                        "nextId": "FLOW:1469627484:354767700",
                        "nodeId": "FLOW:984046517:1988847454",
                        "comment": "同意",
                        "complete": true,
                        "nextName": "出纳支付",
                        "nodeName": "1",
                        "expressNum": null,
                        "isEbotNode": false,
                        "counterSign": false,
                        "isRecalNode": false,
                        "oldFlowPlanId": null,
                        "nextCounterSign": false,
                        "autographImageId": null
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.paying",
                    "state": "paying",
                    "operatorId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                    "byDelegateId": null,
                    "operatorDefaultDepartment": "xgJ3wajigF25H0",
                    "nextOperatorId": null,
                    "nextOperatorIds": [],
                    "time": 1678878101806,
                    "attributes": {
                        "nodeId": "FLOW:1469627484:354767700",
                        "comment": null,
                        "failureReason": null,
                        "channelTradeNo": "OFFLINE2023000003",
                        "paymentChannel": "OFFLINE",
                        "autographImageId": null,
                        "paymentAccountId": "ID01w4CACN7N8P"
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.pay",
                    "state": "paid",
                    "operatorId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                    "byDelegateId": null,
                    "operatorDefaultDepartment": "xgJ3wajigF25H0",
                    "nextOperatorId": null,
                    "nextOperatorIds": [],
                    "time": 1678878104230,
                    "attributes": {
                        "nodeId": "FLOW:1469627484:354767700",
                        "comment": "",
                        "failureReason": "",
                        "channelTradeNo": "OFFLINE2023000003",
                        "paymentChannel": "OFFLINE",
                        "autographImageId": null,
                        "paymentAccountId": "ID01w4CACN7N8P"
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                }
            ],
            "actions": {           //操作人可执行的动作  key是操作人的员工ID；value是动作名称
                "xgJ3wajigF25H0:dbc3wajigF1UH0": [
                    "freeflow.archive",
                    "freeflow.copy"
                ]
            },
            "invoiceRemind": false,
            "id": "ID01w4CANo9zuD" //单据ID 对应其他api的flowId  
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - |  `{"items": []}` | 返回空表示查询的员工无待审批的单据  |
| **400** | - | 员工不存在 | 请确认 `approverId`（员工ID）是否正确  |



