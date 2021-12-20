# 获取单据详情

{% httpverb "get" %} /api/openapi/v1/flowDetails {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述                                                |备注   |
| :--------- | :------ | :-------------------------------------------------- |:----  |
| **accessToken** | String  |通过授权接口获取。      |必填    |
| **flowId** | String  |单据ID       |必填    |

#### 示例:
```json
	https://dd2.ekuaibao.com/api/openapi/v1/flowDetails?accessToken=wWA8MlHZ_g0800&flowId=cak8Mhe7-g7c00

```
注意：单据状态为“已删除”的单据无法被查询到。

#### Response(费用明细):
```json
 {
    "value": {
        "version":1, //版本号
        "active":true, //是否有效 true-有效，false-无效
        "createTime":1551854209327, //创建时间
        "updateTime":1551854209327, //修改时间
        "corporationId":"7hw8MheAgo0g00", //企业id
        "form": {
            "code":"B19000001", //单据编码
            "title":"差旅测试", //单据标题
            "details": [ //消费明细
                 {
                    "feeTypeId":"7hw8MheAgo0g00:office", //费用类型id
                    "feeType":{
                                "id":"7hw8MheAgo0g00:office", //消费类型id
                                "name":"办公", //消费类型名称
                                "parentId":"", //父级消费类型id
                                "active":true, //是否停用，false=停用
                                "code":"COST8" //消费类型编码
                                },
                    "feeTypeForm": { //费用类型数据明细
                        "amount": { //费用金额
                            "standard":"12", //本位币
                            "standardUnit":"元", //本位币单位
                            "standardScale":2, //本位币精度
                            "standardSymbol":"¥",//本位币符号
                            "standardNumCode":"156",//本位币数字代码
                            "standardStrCode":"CNY"//本位币字母代码
                        },
                        "feeDate":1551853846478, //消费时间
                        "invoice":"1", //发票
                        "detailId":"gU48Mhe7-g6k00", //明细id
                        "apportions": [   //分摊明细
                            {
                                "apportionForm": {
                                    "apportionId": "TZc9eB2laAck00",
                                    "apportionMoney": {
                                        "standard": "200.00",
                                        "standardUnit": "元",
                                        "standardScale": 2,
                                        "standardSymbol": "¥",
                                        "standardNumCode": "156",
                                        "standardStrCode": "CNY"
                                    },
                                    "apportionPercent": "50.00",
                                    "expenseDepartment": "rTY617RJBg0s00:99715244"
                                },
                                "specificationId": "rTY617RJBg0s00:PRESET_APPORTION_DEPARTMENT_VERSIONED"
                            },
                            {
                                "apportionForm": {
                                    "apportionId": "C6k9eB2laAco00",
                                    "apportionMoney": {
                                        "standard": "200.00",
                                        "standardUnit": "元",
                                        "standardScale": 2,
                                        "standardSymbol": "¥",
                                        "standardNumCode": "156",
                                        "standardStrCode": "CNY"
                                    },
                                    "apportionPercent": "50.00",
                                    "expenseDepartment": "rTY617RJBg0s00:50439291"
                                },
                                "specificationId": "rTY617RJBg0s00:PRESET_APPORTION_DEPARTMENT_VERSIONED"
                            }
                        ],
                        "attachments": [ //附件

                        ],
                        "invoiceForm": {//发票信息
                            "type":"noWrite"
                        }
                    },
                    "specificationId":"7hw8MheAgo0g00:office:expense:f284154aee2445c230a436cc44798ada2becf250"//单据模版id
                }
            ],
            "payeeId":"eHk8Mhe7-g6o00",//收款人id
            "payMoney": {//支付金额
                "standard":"12.00",
                "standardUnit":"元",
                "standardScale":"2",
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "submitDate":1551854208239, //提交时间
            "expenseDate":1551853847663, //报销时间
            "submitterId":"7hw8MheAgo0g00:9NQ8Mhe7-g0400", //提交人id
            "expenseMoney": { //报销金额
                "standard":"12.00",
                "standardUnit":"元",
                "standardScale":"2",
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "companyRealPay": { //企业已付金额
                "standard":"0.00",
                "standardUnit":"元",
                "standardScale":"2",
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "specificationId":"JLc8MheAHY9c00:81df38a1989944dfd6b93db7233f63390aa606f6",//费用类型模版
            "writtenOffMoney": { //核销金额
                "standard":"0.00",
                "standardUnit":"元",
                "standardScale":"2",
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "multiplePayeesMode":false, //多收款人
            "expenseDepartment":"7hw8MheAgo0g00"  //报销部门
        },
        "ownerId":"7hw8MheAgo0g00:9NQ8Mhe7-g0400", //流程发起人id
        "ownerDefaultDepartment":"7hw8MheAgo0g00",// 流程发起人默认部门id
        "state":"approving", //流程状态 pending-提交中 approving-审批中 paying-待支付 paid-已支付 archived-归档 sending-寄送中 receiving-收单中
        "flowType":"freeflow", //流程类型
        "formType":"expense", //单据类型 expense-报销单 requisition-申请单  loan-借款单 permit-授权单 custom-基础单据
        "logs": [ //审批记录
             {
                "action":"freeflow.submit", //动作名称
                "state":"approving", //操作后到流程状态
                "operatorId":"7hw8MheAgo0g00:9NQ8Mhe7-g0400", //操作人id
                "operatorDefaultDepartment":"7hw8MheAgo0g00", //操作人默认部门id
                "nextOperatorId":"ebot", //下一操作人id
                "nextOperatorIds": [ //会签时的下一批操作人id

                ],
                "time":1551854208721,//操作时间
                "attributes": { //动作相关属性
                    "nextId":"FLOW:189259058:1867166192",
                    "nodeId":"SUBMIT",
                    "isUrgent":false,
                    "nextName":"费用标准检查",
                    "urgentReason":null,
                    "nextCounterSign":false
                },
                "modifyFlowLog":null, //修改记录
                "attachments": [ //附件

                ]
            }
        ],
        "actions": { //操作人可执行到动作  key是操作人的员工id;value是动作名称
            "7hw8MheAgo0g00:9NQ8Mhe7-g0400": [
                "freeflow.urge",
                "freeflow.copy",
                "freeflow.agree",
                "freeflow.reject",
                "freeflow.addnode",
                "freeflow.select.approver",
                "freeflow.remind"
            ]
        },
        "id":"iFU8Mhe7-g6800" //单据id
    }
}

```

#### Response(行程明细):
```json
 {
    "value": {
        "version":1,
        "active":true,
        "createTime":1551854493984,
        "updateTime":1551854493984,
        "corporationId":"7hw8MheAgo0g00",
        "form": {
            "code":"S19000002",
            "title":"差旅申请单",
            "trips": [ //行程
                 {
                    "tripForm": { 
                        "tripId":"SoM8Mhe7-g7g00", //行程id
                        "tripDate":1551854480476, //出发日期
                        "tripToCity":"[{"key":"20","label":"天津市"}]",//目的地
                        "tripFromCity":"[{"key":"3","label":"北京市/东城区"}]" //出发地
                    },
                    "tripTypeId":"7hw8MheAgo0g00:taxi", //行程类型id taxl-打车 hotel-酒店 aircraft或者flight-飞机 train-火车
                    "specificationId":"7hw8MheAgo0g00:taxi:5e275cd8e1c0ab4045880f1ade8f0fe81b76e93b"
                }
            ],
            "submitDate":1551854493579,
            "submitterId":"7hw8MheAgo0g00:9NQ8Mhe7-g0400",
            "requisitionDate":1551854481885,
            "specificationId":"Yhk8MheAHY9s00:597400c8911488e63beb5f60bc38509d231d9b1a"
        },
        "ownerId":"7hw8MheAgo0g00:9NQ8Mhe7-g0400",
        "ownerDefaultDepartment":"7hw8MheAgo0g00",
        "state":"approving",
        "flowType":"freeflow",
        "formType":"requisition",
        "logs": [
             {
                "action":"freeflow.submit",
                "state":"approving",
                "operatorId":"7hw8MheAgo0g00:9NQ8Mhe7-g0400",
                "operatorDefaultDepartment":"7hw8MheAgo0g00",
                "nextOperatorId":"ebot",
                "nextOperatorIds": [

                ],
                "time":1551854493902,
                "attributes": {
                    "nextId":"FLOW:2074081740:1644739041",
                    "nodeId":"SUBMIT",
                    "isUrgent":false,
                    "nextName":"费用标准检查",
                    "urgentReason":null,
                    "nextCounterSign":false
                },
                "modifyFlowLog":null,
                "attachments": [

                ]
            }
        ],
        "actions": {
            "7hw8MheAgo0g00:9NQ8Mhe7-g0400": [
                "freeflow.urge",
                "freeflow.copy",
                "freeflow.agree",
                "freeflow.reject",
                "freeflow.addnode",
                "freeflow.select.approver",
                "freeflow.remind"
            ]
        },
        "id":"cak8Mhe7-g7c00"
    }
}

```







