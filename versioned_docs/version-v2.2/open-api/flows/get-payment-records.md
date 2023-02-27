# 根据支付批次号获取单据详情
根据单据的支付批次号获取单据详情。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/paymentRecord/getFlowInfo"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **channelTradeNos** | Array | 支付批次号 | 必填 | - | 可通过【待我支付-支付中】页面获取 |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/paymentRecord/getFlowInfo?accessToken=6X0byyG1Xsnk00' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "channelTradeNos": ["OFFLINE2020000001", "OFFLINE2020000002"]
}'
```

## 成功响应
```json
{
    "items": [
        {
            "version": 1,                       //版本号
            "active": true,                     //是否有效（或者理解为是否被删除） true-有效，false-无效
            "createTime": 1599469765944,        //创建时间(毫秒级时间戳)
            "updateTime": 1599469765921,        //修改时间(毫秒级时间戳)
            "corporationId": "3Qobu2l0cs6k00",  //企业ID
            "form": {
                "code": "B20000001",            //单据编码
                "title": "sgsgs",               //单据标题
                "details": [                    //消费明细
                    {
                        "feeTypeId": "3Qobu2l0cs6k00:office", //费用类型ID，通过【获取费用类型】接口可获得，通过【根据ID获取费用类型】查询类型详情
                        "feeTypeForm": {                      //费用类型数据明细
                            "amount": {                       //费用金额
                                "standard": "124",            //本位币
                                "standardUnit": "元",         //本位币单位
                                "standardScale": 2,           //本位币精度
                                "standardSymbol": "¥",        //本位币符号
                                "standardNumCode": "156",     //本位币数字代码
                                "standardStrCode": "CNY"      //本位币字母代码
                            },
                            "feeDate": 1599408000000,         //消费时间(毫秒级时间戳)
                            "detailId": "osobykFMBcrc00",     //发票(非必返回字段)
                            "attachments": [],                //附件 可用附件信息的数据通过调用【获取附件URL】接口来获取附件文件下载链接
                            "invoiceForm": {                  //发票信息(非必返回字段)
                                "type": "noWrite"
                            },
                            "consumptionReasons": ""
                        },
                        "specificationId": "3Qobu2l0cs6k00:office:expense:d862ab2944ebe9369de5cafd548796be16a0dc19" //单据模版ID
                    }
                ],
                "payDate": 1599469765921, 
                "payeeId": "XnIbuIH6HQ2E00",  //收款人ID
                "payMoney": {                 //支付金额
                    "standard": "124.00",
                    "standardUnit": "元",
                    "standardScale": "2",
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1599469665928,   //提交时间
                "description": "",
                "expenseDate": 1599408000000,  //报销时间
                "submitterId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00", //提交人ID
                "expenseMoney": {              //报销金额
                    "standard": "124.00",
                    "standardUnit": "元",
                    "standardScale": "2",
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "companyRealPay": {            //企业已付金额
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": "2",
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "paymentChannel": "OFFLINE",
                "specificationId": "C20bu2n6osbc00:ebd338960d9053892b3fd86dfa6f31690d014de7",
                "writtenOffMoney": {           //核销金额
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": "2",
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "paymentAccountId": "3Qobu2l0cs6k00:BANK",
                "expenseDepartment": "3Qobu2l0cs6k00",
                "timeToEnterPendingPayment": 1599469751158
            },
            "ownerId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",  //流程发起人ID
            "ownerDefaultDepartment": "3Qobu2l0cs6k00",  //流程发起人默认部门ID
            "state": "paid",                             //流程状态 pending-提交中 approving-审批中 paying-待支付 PROCESSING-支付中 paid-已支付 archived-归档 sending-寄送中 receiving-收单中
            "flowType": "freeflow",                      //流程类型
            "formType": "expense",                       //单据类型 expense-报销单 requisition-申请单  loan-借款单 permit-授权单 custom-基础单据
            "logs": [
                {
                    "action": "freeflow.submit",
                    "state": "approving",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": "ebot",
                    "nextOperatorIds": [],
                    "time": 1599469672798,
                    "attributes": {
                        "nextId": "FLOW:1107581706:1439535759",
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
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.agree",
                    "state": "approving",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "nextOperatorIds": [],
                    "time": 1599469700889,
                    "attributes": {
                        "nextId": "FLOW:576447118:557814958",
                        "nodeId": "FLOW:826115405:1409479521",
                        "comment": "",
                        "complete": true,
                        "nextName": "总经理审批",
                        "expressNum": null,
                        "isEbotNode": false,
                        "counterSign": false,
                        "nextCounterSign": false,
                        "autographImageId": null
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.agree",
                    "state": "approving",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "nextOperatorIds": [],
                    "time": 1599469740670,
                    "attributes": {
                        "nextId": "FLOW:1819409373:499160992",
                        "nodeId": "FLOW:576447118:557814958",
                        "comment": "",
                        "complete": true,
                        "nextName": "财务复核",
                        "expressNum": null,
                        "isEbotNode": false,
                        "counterSign": false,
                        "nextCounterSign": false,
                        "autographImageId": null
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.agree",
                    "state": "paying",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "nextOperatorIds": [],
                    "time": 1599469751158,
                    "attributes": {
                        "nextId": "FLOW:1384184901:409145774",
                        "nodeId": "FLOW:1819409373:499160992",
                        "comment": "",
                        "complete": true,
                        "nextName": "出纳支付",
                        "expressNum": null,
                        "isEbotNode": false,
                        "counterSign": false,
                        "nextCounterSign": false,
                        "autographImageId": null
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.paying",
                    "state": "paying",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": null,
                    "nextOperatorIds": [],
                    "time": 1599469764045,
                    "attributes": {
                        "nodeId": "FLOW:1384184901:409145774",
                        "comment": null,
                        "failureReason": "",
                        "channelTradeNo": "OFFLINE2020000002",
                        "paymentChannel": "OFFLINE",
                        "autographImageId": null,
                        "paymentAccountId": "3Qobu2l0cs6k00:BANK"
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.pay",
                    "state": "paid",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": null,
                    "nextOperatorIds": [],
                    "time": 1599469765921,
                    "attributes": {
                        "nodeId": "FLOW:1384184901:409145774",
                        "comment": "",
                        "failureReason": "",
                        "channelTradeNo": "OFFLINE2020000002",
                        "paymentChannel": "OFFLINE",
                        "autographImageId": null,
                        "paymentAccountId": "3Qobu2l0cs6k00:BANK"
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                }
            ],
            "actions": {             //操作人可执行到动作：key是操作人的员工ID；value是动作名称
                "3Qobu2l0cs6k00:dIEbu2mgTs6o00": [
                    "freeflow.archive",
                    "freeflow.copy"
                ]
            },
            "invoiceRemind": false,
            "id": "17wbykFMBcq000"   //单据ID，对应其他api的flowId
        },
        {
            "version": 1,
            "active": true,
            "createTime": 1599468317968,
            "updateTime": 1599468317945,
            "corporationId": "3Qobu2l0cs6k00",
            "form": {
                "code": "J20000002",
                "title": "gt",
                "payDate": 1599468317945,
                "payeeId": "XnIbuIH6HQ2E00",
                "loanDate": 1599468240000,
                "payMoney": {
                    "standard": "600",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "loanMoney": {
                    "st`andard": "600",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "stan`dardStrCode": "CNY"
                },
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1599468258338,
                "attachments": [],
                "description": "",
                "submitterId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                "repaymentDate": 1602060240000,
                "loanDepartment": "3Qobu2l0cs6k00",
                "paymentChannel": "OFFLINE",
                "specificationId": "jOgbu2n6osbY00:4ee314c57d8f2d595ae84274e15f6805101db743",
                "paymentAccountId": "3Qobu2l0cs6k00:BANK",
                "timeToEnterPendingPayment": 1599468299421
            },
            "ownerId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
            "ownerDefaultDepartment": "3Qobu2l0cs6k00",
            "state": "paid",
            "flowType": "freeflow",
            "formType": "loan",
            "logs": [
                {
                    "action": "freeflow.submit",
                    "state": "approving",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": "ebot",
                    "nextOperatorIds": [],
                    "time": 1599468259147,
                    "attributes": {
                        "nextId": "FLOW:1643288510:382532198",
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
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.agree",
                    "state": "approving",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "nextOperatorIds": [],
                    "time": 1599468280143,
                    "attributes": {
                        "nextId": "FLOW:694821774:295031507",
                        "nodeId": "FLOW:1064632976:1365741553",
                        "comment": "",
                        "complete": true,
                        "nextName": "总经理审批",
                        "expressNum": null,
                        "isEbotNode": false,
                        "counterSign": false,
                        "nextCounterSign": false,
                        "autographImageId": null
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.agree",
                    "state": "approving",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "nextOperatorIds": [],
                    "time": 1599468287415,
                    "attributes": {
                        "nextId": "FLOW:1706542521:973252507",
                        "nodeId": "FLOW:694821774:295031507",
                        "comment": "",
                        "complete": true,
                        "nextName": "财务复核",
                        "expressNum": null,
                        "isEbotNode": false,
                        "counterSign": false,
                        "nextCounterSign": false,
                        "autographImageId": null
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.agree",
                    "state": "paying",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "nextOperatorIds": [],
                    "time": 1599468299421,
                    "attributes": {
                        "nextId": "FLOW:826542045:1015144047",
                        "nodeId": "FLOW:1706542521:973252507",
                        "comment": "",
                        "complete": true,
                        "nextName": "出纳支付",
                        "expressNum": null,
                        "isEbotNode": false,
                        "counterSign": false,
                        "nextCounterSign": false,
                        "autographImageId": null
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.paying",
                    "state": "paying",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": null,
                    "nextOperatorIds": [],
                    "time": 1599468314767,
                    "attributes": {
                        "nodeId": "FLOW:826542045:1015144047",
                        "comment": null,
                        "failureReason": "",
                        "channelTradeNo": "OFFLINE2020000001",
                        "paymentChannel": "OFFLINE",
                        "autographImageId": null,
                        "paymentAccountId": "3Qobu2l0cs6k00:BANK"
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                },
                {
                    "action": "freeflow.pay",
                    "state": "paid",
                    "operatorId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
                    "operatorDefaultDepartment": "3Qobu2l0cs6k00",
                    "nextOperatorId": null,
                    "nextOperatorIds": [],
                    "time": 1599468317945,
                    "attributes": {
                        "nodeId": "FLOW:826542045:1015144047",
                        "comment": "",
                        "failureReason": "",
                        "channelTradeNo": "OFFLINE2020000001",
                        "paymentChannel": "OFFLINE",
                        "autographImageId": null,
                        "paymentAccountId": "3Qobu2l0cs6k00:BANK"
                    },
                    "modifyFlowLog": null,
                    "attachments": []
                }
            ],
            "actions": {
                "3Qobu2l0cs6k00:dIEbu2mgTs6o00": [
                    "freeflow.archive",
                    "freeflow.copy"
                ]
            },
            "invoiceRemind": false,
            "id": "z0cbykkgi4to00"
        }
    ]
}

```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 支付记录不存在 | 请确认 `channelTradeNos`（支付批次号）是否正确  | 





