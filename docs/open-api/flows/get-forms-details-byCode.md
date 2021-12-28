# 根据单据编号获取单据详情

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/flowDetails/byCode"
/>

:::caution
- 单据状态为“**已删除**”的单据无法被查询到。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token | 必填 | - |  [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **code**        | String  | 单据编号   | 必填 | - |  单据编号，可通过系统单据页面获取 |

:::tip
- 单据编号是面向企业唯一，单据的Id是面向系统唯一。
:::

## CURL
```json
curl --location --request GET 'https://460mix.ekuaibao.net/api/openapi/v1/flowDetails/byCode?code=S21000002&accessToken=ID_3uTOGXa04Vw:PCx3rwm3aA00qM'
```

## 成功响应

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="expense" label="报销单" default>

```json
{
    "value": {
        "pipeline": 1,
        "grayver": "",
        "version": 1,                   //版本号
        "active": true,                 //是否有效（或者理解为是否被删除） true：有效，false：无效
        "createTime": 1592289377126,    //创建时间(毫秒级时间戳)
        "updateTime": 1592289377125,    //创建时间(毫秒级时间戳)
        "corporationId": "djg8LshfUkfM00",    //企业id
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "form": {                    //单据详情
            "code": "B20000001",     //单据编码
            "title": "33",           //单据标题
            "details": [             //消费明细
                {
                    "feeTypeId": "djg8LshfUkfM00:office",      //费用类型id 通过【获取费用类型】此接口可获得，通过【根据id获取费用类型】查询类型详情
                    "feeTypeForm": {    //费用类型数据明细
                        "amount": {     //费用金额
                            "standard": "33",         //本位币
                            "standardUnit": "元",     //本位币单位
                            "standardScale": 2,       //本位币精度
                            "standardSymbol": "¥",    //本位币符号
                            "standardNumCode": "156", //本位币数字代码
                            "standardStrCode": "CNY"  //本位币字母代码
                        },
                        "feeDate": 1592236800000,    //消费时间(毫秒级时间戳)
                        "invoice": "1",              //发票(非必返回字段)
                        "detailId": "g8Ub7AO5So4k00",//明细id
                        "attachments": [],           //附件 可用附件信息的数据通过调用【获取附件URL】接口来获取附件文件下载链接
                        "invoiceForm": {             //发票信息(非必返回字段)
                            "type":"exist",          //发票类型
                            "invoices": [            //发票关联信息
                                {
                                    "itemIds": [
                                        "vIQbn1VrPkvc00", //发票明细id
                                        "ARcbn1VrPkvE00"
                                    ],
                                    "invoiceId": "7ds8qMsl2E0000:042001900211:67083249",  //发票id
                                    "taxAmount": {        //税额
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
                        "consumptionReasons": ""          //消费原因
                    },
                    "specificationId": "djg8LshfUkfM00:office:expense:f284154aee2445c230a436cc44798ada2becf250",    //费用类型模版ID
                    "feeType": {
                        "id": "djg8LshfUkfM00:office",  //费用类型id
                        "name": "办公|测试|测试|测试",   //费用类型名称
                        "parentId": "",                 //父级费用类型id，无表示一级类型
                        "active": true,                 //是否启用，false=停用
                        "code": "COST1"                 //费用类型编码
                    }
                }
            ],
            "payeeId": "ED0b7ANNOwlI00",    //收款人id
            "payMoney": {                   //支付金额
                "standard": "33.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "voucherNo": "",
            "printCount": "0",
            "printState": "noPrint",
            "submitDate": 1592289361103,     //提交时间
            "description": "",               //说明
            "expenseDate": 1592236800000,    //报销时间
            "submitterId": "djg8LshfUkfM00:Dwk7NVkt7o1E00", //提交人id
            "expenseMoney": {                //报销金额
                "standard": "33.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "voucherStatus": "未生成",
            "companyRealPay": {              //企业已付金额
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "specificationId": "O6s8Mmqokkbk00:a444a2bd3c65fd0331a2a7c0c2d1b0d7cd7366b2",   //单据模版ID
            "writtenOffMoney": {             //核销金额
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "expenseDepartment": "djg8LshfUkfM00",  //报销部门
            "voucherCreateTime": 0
        },
        "ownerId": "djg8LshfUkfM00:Dwk7NVkt7o1E00", //流程发起人id
        "ownerDefaultDepartment": "djg8LshfUkfM00", // 流程发起人默认部门id
        "state": "rejected",    //流程状态 pending-提交中 approving-审批中 rejected-已驳回 paying-待支付 PROCESSING-支付中 paid-已支付 archived-归档 sending-寄送中 receiving-收单中
        "flowType": "freeflow", //流程类型
        "formType": "expense",  //单据类型 expense-报销单 loan-借款单 payment-付款单 requisition-申请单 custom-通用审批单 receipt-收款单
        "logs": [   //审批记录
            {
                "action": "freeflow.submit",    //动作名称
                "state": "approving",           //操作后到流程状态
                "operatorId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",  //操作人id
                "byDelegateId": null,
                "operatorDefaultDepartment": "djg8LshfUkfM00",  //操作人默认部门id
                "nextOperatorId": "ebot",    //下一操作人id
                "nextOperatorIds": [],       //会签时的下一批操作人id
                "time": 1592289361509,       //操作时间
                "attributes": {              //动作相关属性
                    "nextId": "FLOW:1848031693:1061401484",
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
                "modifyFlowLog": [          //修改记录
                    {
                        "version": 1,
                        "flowVersionedId": "EFIb7AOeCspE00",
                        "operatorId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                        "operatorTime": 1592289361509,
                        "operatorState": "CREATE",
                        "editeReason": "",
                        "byDelegateId": null
                    }
                ],
                "attachments": []           //附件
            }
        ],
        "actions": {                        //操作人可执行到动作  `key`是操作人的员工id;`value`是动作名称
            "djg8LshfUkfM00:Dwk7NVkt7o1E00": [
                "freeflow.delete",
                "freeflow.edit",
                "freeflow.submit"
            ]
        },
        "invoiceRemind": false,
        "id": "lrMb7AO5So2800"              //单据id 对应其他api的flowId
    }
}
```
</TabItem>
<TabItem value="loan" label="借款单">

```json
{
    "value": {
        "pipeline": 1,
        "grayver": "9.7.0.0:A",
        "version": 1,   
        "active": true, 
        "createTime": 1638296463891,    
        "updateTime": 1638296463889,
        "corporationId": "djg8LshfUkfM00",
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "form": {
            "code": "J20000002",
            "title": "test",
            "loanDate": 1600095120000,
            "payMoney": {   //支付金额
                "standard": "100.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "loanMoney": {  //借款金额
                "standard": "100.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "voucherNo": "",    //凭证号
            "printCount": "0",  //打印数
            "printState": "noPrint",    //打印状态
            "submitDate": 1638296419034,
            "attachments": [],
            "description": "",
            "submitterId": "djg8LshfUkfM00:fuwb0AND7Mio00",
            "repaymentDate": 9007199254740991,  //还款日
            "voucherStatus": "未生成",           //凭证状态
            "loanDepartment": "djg8LshfUkfM00:LcEb0AGaYs1000",  //借款部门
            "specificationId": "Zp4bxmeHjAj400:02e4cad692c302a4600916a52283d5cc294d9b80",  //费用类型模版ID
            "voucherCreateTime": 0,             //凭证生成时间
            "preNodeApprovedTime": 1638296463889
        },
        "ownerId": "djg8LshfUkfM00:fuwb0AND7Mio00",
        "ownerDefaultDepartment": "djg8LshfUkfM00:LcEb0AGaYs1000",
        "state": "rejected",
        "flowType": "freeflow",
        "formType": "loan",
        "logs": [     //审批记录
            {
                "action": "freeflow.submit",
                "state": "approving",
                "operatorId": "djg8LshfUkfM00:fuwb0AND7Mio00",
                "byDelegateId": null,
                "operatorDefaultDepartment": "djg8LshfUkfM00:LcEb0AGaYs1000",
                "nextOperatorId": "ebot",
                "nextOperatorIds": [],
                "time": 1600095160535,
                "attributes": {   //动作相关属性
                    "nextId": "FLOW:1613728245:1657041998",
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
                "modifyFlowLog": [   //修改记录
                    {
                        "version": 1,
                        "flowVersionedId": "rC8bAFRme04800",
                        "operatorId": "djg8LshfUkfM00:fuwb0AND7Mio00",
                        "operatorTime": 1600095160535,
                        "operatorState": "CREATE",
                        "editeReason": "",
                        "byDelegateId": null
                    }
                ],
                "attachments": []
            },
            {
                "action": "freeflow.reject",
                "state": "rejected",
                "operatorId": "djg8LshfUkfM00:fuwb0AND7Mio00",
                "byDelegateId": null,
                "operatorDefaultDepartment": "djg8LshfUkfM00:LcEb0AGaYs1000",
                "nextOperatorId": "djg8LshfUkfM00:fuwb0AND7Mio00",
                "nextOperatorIds": [],
                "time": 1600095178396,
                "attributes": {
                    "isAuto": false,
                    "nextId": null,
                    "nodeId": "FLOW:394776106:2040792856",
                    "comment": "test",
                    "isEbotNode": false,
                    "isStaffExit": false,
                    "resubmitMethod": "FROM_START",
                    "isCostControlCheck": false
                },
                "modifyFlowLog": null,
                "attachments": []
            }
        ],
        "actions": {    //操作人可执行到动作  `key`是操作人的员工id;`value`是动作名称
            "djg8LshfUkfM00:fuwb0AND7Mio00": [
                "freeflow.delete",
                "freeflow.edit",
                "freeflow.submit"
            ]
        },
        "invoiceRemind": false,
        "id": "-UkbAFQSiIk000"
    }
}
```
</TabItem>
<TabItem value="payment" label="付款单">

```json
{
    "value": {
        "pipeline": 1,
        "grayver": "9.7.0.0:A",
        "version": 1,
        "active": true,
        "createTime": 1638439620291,
        "updateTime": 1638439620289,
        "corporationId": "djg8LshfUkfM00",
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "form": {
            "code": "Z21000001",
            "title": "测试付款",
            "payeeId": "ID_3r0cTleWAZw",
            "payMoney": {   //支付金额
                "standard": "666",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "voucherNo": "",
            "printCount": "0",
            "printState": "noPrint",
            "submitDate": 1638439589011,
            "description": "666",
            "submitterId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
            "voucherStatus": "未生成",
            "specificationId": "ID_3sTYyEIpPhM:b496343a376271dab21a31f2097bd47ecab2accc",
            "voucherCreateTime": 0,
            "preNodeApprovedTime": 1638439620289
        },
        "ownerId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
        "ownerDefaultDepartment": "djg8LshfUkfM00",
        "state": "rejected",
        "flowType": "freeflow",
        "formType": "payment",
        "logs": [
            {
                "action": "freeflow.submit",
                "state": "approving",
                "operatorId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                "byDelegateId": null,
                "operatorDefaultDepartment": "djg8LshfUkfM00",
                "nextOperatorId": "ebot",
                "nextOperatorIds": [],
                "time": 1638439589514,
                "attributes": {
                    "nextId": "FLOW:236565:921007012",
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
                "modifyFlowLog": [
                    {
                        "version": 1,
                        "flowVersionedId": "ID_3sTYlA0YDPw",
                        "operatorId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                        "operatorTime": 1638439589514,
                        "operatorState": "CREATE",
                        "editeReason": "",
                        "byDelegateId": null
                    }
                ],
                "attachments": []
            }
        ],
        "actions": {
            "djg8LshfUkfM00:ID_3ruBvlxx7m0": [
                "freeflow.delete",
                "freeflow.edit",
                "freeflow.submit"
            ]
        },
        "invoiceRemind": false,
        "id": "ID_3sTYYdqkcsM"
    }
}
```
</TabItem>
<TabItem value="requisition" label="申请单">

```json
{
    "value": {
        "pipeline": 1,
        "grayver": "",
        "version": 1,
        "active": true,
        "createTime": 1590660638427,
        "updateTime": 1590660638427,
        "corporationId": "djg8LshfUkfM00",
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "form": {
            "code": "S20000001",
            "title": "22",
            "voucherNo": "",
            "printCount": "0",
            "printState": "noPrint",
            "submitDate": 1588496639197,
            "description": "22",
            "submitterId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
            "u_订票人": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
            "voucherStatus": "未生成",
            "u_行程规划": [
                {
                    "dataLinkId": null,
                    "dataLinkForm": {
                        "E_89330ae5c7fee240b000_name": "北京市/海淀区 - 上海市/上海市区",
                        "E_89330ae5c7fee240b000_出发地": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",
                        "E_89330ae5c7fee240b000_目的地": "[{\"key\":\"858\",\"label\":\"上海市/上海市区\"}]",
                        "E_89330ae5c7fee240b000_行程日期": 1589015009029
                    },
                    "dataLinkTemplateId": "jdYaVsv-UA3Q00"
                }
            ],
            "requisitionDate": 1588435200000,
            "specificationId": "wxA8Mmqokkbw00:8a3cc00924dd83e6ba71bb24bd365754def2dd58",
            "requisitionMoney": {
                "standard": "22",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "expenseDepartment": "djg8LshfUkfM00",
            "voucherCreateTime": 0
        },
        "ownerId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
        "ownerDefaultDepartment": "djg8LshfUkfM00",
        "state": "archived",
        "flowType": "freeflow",
        "formType": "requisition",
        "logs": [
            {
                "action": "freeflow.submit",
                "state": "approving",
                "operatorId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                "byDelegateId": null,
                "operatorDefaultDepartment": "djg8LshfUkfM00",
                "nextOperatorId": "ebot",
                "nextOperatorIds": [],
                "time": 1588496639355,
                "attributes": {
                    "nextId": "FLOW:1803858383:654076721",
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
            }
        ],
        "actions": {},
        "invoiceRemind": false,
        "id": "BOIaVswERctU00"
    }
}
```
</TabItem>
<TabItem value="custom" label="通用审批单">

```json
{
    "value": {
        "pipeline": 1,
        "grayver": "",
        "version": 1,
        "active": true,
        "createTime": 1588758599350,
        "updateTime": 1588758599346,
        "corporationId": "djg8LshfUkfM00",
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "form": {
            "code": "F20000006",
            "title": "郑永欠2020-05-06入住北京审批",
            "printCount": "0",
            "printState": "noPrint",
            "submitDate": 1588758585629,
            "submitterId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
            "u_入住人": [        //自定义字段
                "djg8LshfUkfM00:Dwk7NVkt7o1E00"
            ],
            "u_是否超标": "超标", //自定义字段
            "u_订单信息": "入住北京，2020-05-06至2020-05-07（1晚），北京慕田峪长城赫家大院日式榻榻米房1间。超出差旅标准原因：经批准可不选择最低价。",
            "u_订单总额": {
                "standard": 245,
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "u_超标类型": [
                "ZbQaVrFM0k2k00"
            ],
            "u_预订星级": "FjkaVrFGR0co00",
            "specificationId": "V2MaVrFM0k7800:a5ea81fe47d6df0454d123054d1151dc91e8eb0c",
            "expenseDepartment": "djg8LshfUkfM00",
            "u_入住人部门": [
                "djg8LshfUkfM00"
            ],
            "u_提前预订天数": "0"
        },
        "ownerId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
        "ownerDefaultDepartment": "djg8LshfUkfM00",
        "state": "rejected",
        "flowType": "freeflow",
        "formType": "custom",
        "logs": [
            {
                "action": "freeflow.submit",
                "state": "approving",
                "operatorId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                "byDelegateId": null,
                "operatorDefaultDepartment": "djg8LshfUkfM00",
                "nextOperatorId": "ebot",
                "nextOperatorIds": [],
                "time": 1588758585950,
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
                },
                "modifyFlowLog": [
                    {
                        "version": 1,
                        "flowVersionedId": "08MaWq-Vqc7400",
                        "operatorId": "djg8LshfUkfM00:Dwk7NVkt7o1E00",
                        "operatorTime": 1588758585950,
                        "operatorState": "CREATE",
                        "editeReason": "",
                        "byDelegateId": null
                    }
                ],
                "attachments": []
            }
        ],
        "actions": {
            "djg8LshfUkfM00:Dwk7NVkt7o1E00": [
                "freeflow.delete",
                "freeflow.edit",
                "freeflow.submit"
            ]
        },
        "invoiceRemind": false,
        "id": "t-0aWqTJkY6U00"
    }
}
```
</TabItem>
<TabItem value="receipt" label="收款单">

```json
{
    "value": {
        "pipeline": 1,
        "grayver": "9.7.0.0:A",
        "version": 5,
        "active": true,
        "createTime": 1638347590838,
        "updateTime": 1638347590848,
        "corporationId": "djg8LshfUkfM00",
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "form": {
            "code": "A21000001",
            "title": "测试收款单",
            "details": [    //消费明细
                {
                    "feeTypeId": "NOsaY-HisUbc00",
                    "feeTypeForm": {
                        "amount": {
                            "standard": "111",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "feeDate": 1638288000000,
                        "detailId": "FtrH9sW0NSytSW",
                        "attachments": [],
                        "consumptionReasons": "11"
                    },
                    "specificationId": "NOsaY-HisUbc00:receipt:ef71b5af6a4d1516f827d829fb6025fbd1cdc0a4",
                    "feeType": {
                        "id": "NOsaY-HisUbc00",
                        "name": "813测试",
                        "parentId": "",
                        "active": true,
                        "code": "COST16"
                    }
                }
            ],
            "printCount": "0",
            "printState": "reminded",
            "submitDate": 1638347589927,
            "description": "1111",
            "flowEndTime": 1638347590829,
            "receiptDate": 1638288000000,
            "submitterId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
            "receiptMoney": {   //收款金额
                "standard": "111.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "specificationId": "ID_3sOtG3xVVkg:7202a3558f143a4b872502ef01fd1b5da2b10303",
            "expenseDepartment": "djg8LshfUkfM00",
            "preNodeApprovedTime": 1638347590820
        },
        "ownerId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
        "ownerDefaultDepartment": "djg8LshfUkfM00",
        "state": "paid",
        "flowType": "freeflow",
        "formType": "receipt",
        "logs": [
            {
                "action": "freeflow.submit",
                "state": "approving",
                "operatorId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                "byDelegateId": null,
                "operatorDefaultDepartment": "djg8LshfUkfM00",
                "nextOperatorId": "ebot",
                "nextOperatorIds": [],
                "time": 1638347590564,
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
                },
                "modifyFlowLog": null,
                "attachments": []
            }
        ],
        "actions": {
            "djg8LshfUkfM00:ID_3ruBvlxx7m0": [
                "freeflow.archive",
                "freeflow.copy"
            ]
        },
        "invoiceRemind": false,
        "id": "ID_3sOuotCppgw"
    }
}
```
</TabItem>
</Tabs>

## 失败响应
`flowId`不存在报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "单据不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
单据“已删除”报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "单据已删除",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
