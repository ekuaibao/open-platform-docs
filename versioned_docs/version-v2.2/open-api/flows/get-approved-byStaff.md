---
slug: get-approved-byStaff
title: 根据员工ID获取已审批单据
authors: [张国阳]
---

# 根据员工ID获取已审批单据

根据单据更新时间 **倒序** 排序返回已审批单据详情。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1.1/docs/approved/$`approverId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.27.0**](/updateLog/update-log#1270) -> 🐞 新增了 `startDate` 和 `endDate` 参数，根据 **审批时间** 过滤列表数据。<br/>
  [**1.20.0**](/updateLog/update-log#1200) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **approverId** | String | 员工ID | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |

## Query Parameters

| 名称 | 类型 | 描述       | 是否必填 | 默认值 | 备注                                                              |
| :--- | :--- |:---------|:-----|:----|:----------------------------------------------------------------|
| **accessToken**   | String  | 认证token  | 必填   | -   | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **index**         | Number  | 分页查询的起始值 | 非必填  | 0   | 起始值从 `0` 开始                                                     |
| **count**         | Number  | 查询数据条数   | 非必填  | 100 | 最大不能超过 `100`，**大于 `100` 按 `100` 返回**                            |
| **startDate**   | String  | 查询开始时间   | 非必填  | -   | 按数据 **审批时间** 查询，格式：`yyyy-MM-dd HH:mm:ss`                        |
| **endDate**     | String  | 查询结束时间   | 非必填  | -   | 按数据 **审批时间** 查询，格式：`yyyy-MM-dd HH:mm:ss`                        |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/docs/approved/$xgJ3wajigF25H0:dbc3wajigF1UH0?accessToken=ID01w4CAZC7P6n%3AxgJ3wajigF25H0&index=0&count=10&startDate=2023-11-01%2000%3A00%3A00&endDate=2024-01-11%2000%3A00%3A00'
```

## 成功响应
可以参考 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details) 返回信息，单据数据结构是一样的：
```json
{
    "count": 20,                                     //已审批单据总数
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.18.0.0:A",
            "version": 1,                            //版本号
            "active": true,                          //是否有效（或者理解为是否被删除） true：有效，false：无效
            "createTime": 1684294671699,             //创建时间(毫秒级时间戳) 
            "updateTime": 1684294692726,             //更新时间(毫秒级时间戳)，单据审批、单据字段修改都会改变此字段值
            "corporationId": "xgJ3wajigF25H0",       //企业ID
            "sourceCorporationId": null, 
            "dataCorporationId": null,
            "form": {                                //单据详情
                "code": "B23000211",                 //单据编码 
                "title": "测试11111",               //单据标题
                "details": [                        //消费明细
                    {
                        "feeTypeId": "xgJ3wajigF25H0:office", //费用类型ID，通过【获取费用类型列表】接口可获得，通过【根据ID或CODE获取费用类型模板信息】查询类型详情
                        "feeTypeForm": {               //费用类型数据明细
                            "amount": {                //费用金额
                                "standard": "10",      //本位币
                                "standardUnit": "元",  //本位币单位
                                "standardScale": 2,    //本位币精度
                                "standardSymbol": "¥", //本位币符号
                                "standardNumCode": "156", //本位币数字代码
                                "standardStrCode": "CNY"  //本位币字母代码
                            },
                            "detailId": "0YYIqdcRf8gHOO", //明细ID
                            "attachments": [],            //附件，可用附件信息的数据通过调用【下载附件】接口来获取附件文件下载链接
                            "description": "11",          //描述
                            "u_业务对象": "",             //自定义字段
                            "consumptionReasons": "11"    //消费事由
                        },
                        "specificationId": "xgJ3wajigF25H0:office:expense:62dc20613f9d62da07d3514d1a034c36af33f084"  //费用类型模板ID
                    }
                ],
                "payeeId": "ID_3wlg6bv4TGg",   //收款人ID
                "payMoney": {                  //支付金额 
                    "standard": "10.0",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "loanMoney": {                //借款金额
                    "standard": "10.0",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1648107478373,    //提交时间
                "description": "",              //描述
                "submitterId": "xgJ3wajigF25H0:dbc3wajigF1UH0",  //提交人ID
                "E_system_rank": "ID_3Ah8fh60CEg",
                "repaymentDate": 9007199254740991, //还款日期
                "voucherStatus": "未生成",
                "onlyOwnerPrint": false,
                "requisitionDate": 1647446400000,  //申请日期
                "specificationId": "ID_3zE5G_006w0:0c7a731ccded39dfb4a19e29de9038114881e102",  //单据模板ID
                "requisitionMoney": {              //申请金额
                    "standard": "10.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "expenseDepartment": "xgJ3wajigF25H0",  //报销部门
                "voucherCreateTime": 0,
                "preNodeApprovedTime": 1648107479889,
                "ownerAndApproverPrintNodeFlag": false
            },
            "ownerId": "xgJ3wajigF25H0:dbc3wajigF1UH0",  //流程发起人ID
            "ownerDefaultDepartment": "xgJ3wajigF25H0",  //流程发起人默认部门ID
            "state": "rejected",       //流程状态 pending-提交中 approving-审批中 rejected-已驳回 paying-待支付 PROCESSING-支付中 paid-已支付 archived-归档 sending-寄送中 receiving-收单中                      
            "flowType": "freeflow",    //流程类型
            "formType": "expense",     //单据类型 expense-报销单 loan-借款单 payment-付款单 requisition-申请单 custom-通用审批单 receipt-收款单
            "logs": [                  //审批记录
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
                        "nextId": "FLOW:1039303944:344710824",
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
                    "modifyFlowLog": [    //修改记录
                        {
                            "version": 1,
                            "flowVersionedId": "ID01w4CAUyNRVR",
                            "operatorId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                            "operatorTime": 1684294673931,
                            "operatorState": "CREATE",
                            "editeReason": "",
                            "byDelegateId": null
                        }
                    ],
                    "attachments": []        //附件
                },
                {
                    "action": "freeflow.reject",
                    "state": "rejected",
                    "operatorId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                    "byDelegateId": null,
                    "operatorDefaultDepartment": "xgJ3wajigF25H0",
                    "nextOperatorId": "xgJ3wajigF25H0:dbc3wajigF1UH0",
                    "nextOperatorIds": [],
                    "time": 1684294692726,
                    "attributes": {
                        "isAuto": false,
                        "nextId": null,
                        "nodeId": "FLOW:1681211801:88107755",
                        "comment": "1",
                        "nodeName": "提交人",
                        "isEbotNode": false,
                        "isStaffExit": false,
                        "resubmitMethod": "TO_REJECTOR",
                        "isCostControlCheck": false
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                }
            ],
            "actions": {           //操作人可执行的动作  key是操作人的员工ID；value是动作名称
                "xgJ3wajigF25H0:dbc3wajigF1UH0": [
                    "freeflow.delete",
                    "freeflow.edit",
                    "freeflow.submit"
                ]
            },
            "invoiceRemind": false,
            "id": "ID01w4CAUyNzOL" //单据ID 对应其他api的flowId  
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - |  `{"items": []}` | 返回空表示查询的员工无待审批的单据  |
| **400** | - | 员工不存在 | 请确认 `approverId`（员工ID）是否正确  |



