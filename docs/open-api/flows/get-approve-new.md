---
slug: get-approve-new
title: 根据员工ID获取待审批单据
authors: [冯继成]
---

# 根据员工ID获取待审批单据

根据待办生成时间 **倒序** 排序返回待办单据详情。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/docs/byFlowId/$`approverId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.7.0**](/docs/open-api/notice/update-log#170) -> 🐞 **成功响应** 中新增了 `count` 待办总数，用于分页。<br/>
  [**1.6.0**](/docs/open-api/notice/update-log#160) -> 🆕 新增了本接口。<br/>

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
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/docs/byFlowId/$bwa3wajigF0WH0:ID_3lokDfb1p5w?accessToken=ID_3GIu1pV0diM:bwa3wajigF0WH0&index=0&count=10'
```

## 成功响应
可以参考 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details) 返回信息，单据数据结构是一样的：
```json
{
    "count": 20,                                     //待办总数
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.18.0.0:A",
            "version": 3,                            //版本号
            "active": true,                          //是否有效（或者理解为是否被删除） true：有效，false：无效
            "createTime": 1648107479901,             //创建时间(毫秒级时间戳) 
            "updateTime": 1648107479900,             //更新时间(毫秒级时间戳)，单据审批、单据字段修改都会改变此字段值
            "corporationId": "bwa3wajigF0WH0",       //企业ID
            "sourceCorporationId": null, 
            "dataCorporationId": null,
            "form": {                                //单据详情
                "code": "S22000038",                 //单据编码 
                "title": "迭代测试-不传2",           //单据标题
                "details": [                        //消费明细
                    {
                        "feeTypeId": "ID_3BJKZuv0pow", //费用类型ID，通过【获取费用类型列表】接口可获得，通过【根据ID或CODE获取费用类型模板信息】查询类型详情
                        "feeTypeForm": {               //费用类型数据明细
                            "amount": {                //费用金额
                                "standard": "10",      //本位币
                                "standardUnit": "元",  //本位币单位
                                "standardScale": 2,    //本位币精度
                                "standardSymbol": "¥", //本位币符号
                                "standardNumCode": "156", //本位币数字代码
                                "standardStrCode": "CNY"  //本位币字母代码
                            },
                            "detailId": "ID_3BPNpAnjHGw", //明细ID
                            "attachments": [],            //附件，可用附件信息的数据通过调用【下载附件】接口来获取附件文件下载链接
                            "description": "11",          //描述
                            "u_业务对象": "",             //自定义字段
                            "consumptionReasons": "11"    //消费事由
                        },
                        "specificationId": "ID_3BJKZuv0pow:requisition:87f34911c8972ee6d3a313c481594aa99a0092ae"  //费用类型模板ID
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
                "submitterId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",  //提交人ID
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
                "expenseDepartment": "bwa3wajigF0WH0",  //报销部门
                "voucherCreateTime": 0,
                "preNodeApprovedTime": 1648107479889,
                "ownerAndApproverPrintNodeFlag": false
            },
            "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",  //流程发起人ID
            "ownerDefaultDepartment": "bwa3wajigF0WH0",  //流程发起人默认部门ID
            "state": "approving",      //流程状态 pending-提交中 approving-审批中 rejected-已驳回 paying-待支付 PROCESSING-支付中 paid-已支付 archived-归档 sending-寄送中 receiving-收单中                      
            "flowType": "freeflow",    //流程类型
            "formType": "requisition", //单据类型 expense-报销单 loan-借款单 payment-付款单 requisition-申请单 custom-通用审批单 receipt-收款单
            "logs": [                  //审批记录
                { 
                    "action": "freeflow.submit",     //动作名称
                    "state": "approving",            //操作后到流程状态
                    "operatorId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",  //操作人ID
                    "byDelegateId": null,
                    "operatorDefaultDepartment": "bwa3wajigF0WH0",  //操作人默认部门ID
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
                }
            ],
            "actions": {                   //操作人可执行的动作  key是操作人的员工ID；value是动作名称
                "bwa3wajigF0WH0:ID_3lokDfb1p5w": [
                    "freeflow.urge",
                    "freeflow.copy",
                    "freeflow.print",
                    "freeflow.agree",
                    "freeflow.reject",
                    "freeflow.addnode",
                    "freeflow.select.approver",
                    "freeflow.remind",
                    "freeflow.printed"
                ]
            },
            "invoiceRemind": false,
            "id": "ID_3BPNpAnjCGw" //单据ID 对应其他api的flowId  
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - |  `{"items": []}` | 返回空表示查询的员工无待审批的单据  |
| **400** | - | 员工不存在 | 请确认 `approverId`（员工ID）是否正确  |



