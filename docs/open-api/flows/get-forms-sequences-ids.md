# 通过id集合获取单据数据列表

此接口通过单据id集合，查询出各个id对应的单据的最新状态的数据内容

{% httpverb "get" %} /api/openapi/v1/docs/[`ids`] {% endhttpverb %}

#### Path Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **ids** | Array<String>  | 单据的id集合 |必填| - |  通过其他api接口获取或者出站消息<br>示例：[zKIbl2WX4I8I00,I8I00zKIbl2WX4,zKIbI00l2WX4I8]|

>⚠️ 注意：

> 单据状态为“草稿”的单据无法被查询到

#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  | 认证token | 必填  | - |  [通过授权接口获取](/getting-started/auth.html)  |
| **powerCode**   | String  | 如无特殊说明，传入219902或者219904即可  | 必填 | - | `219902`:开放接口 `219904`:开放接口(新) |      
| **type**        | String  | 单据类型   | 必填  | - |  `expense`:报销单 `loan`:借款单 `payment`:付款单 `requisition`:申请单 `custom`:通用审批单 `permit`:授权单(商城超标审批申请单) `receipt`:收款单  |

####  CURL:
```json
curl --location -g --request GET 'https://app.ekuaibao.com/api/openapi/v1/docs/[ID_3lztYYX7DJg]?accessToken=ID_3mMbt0x01LM:Urf3lsFgBp00gw&powerCode=219902&type=expense'
```

<br>

#### 成功响应:

{% codetabs name="expense", type="json" -%}
{
    "items": [
        {
            "type": "expense",
            "id": "K-w94CqZkA3o00",//单据id 对应其他api的flowId
            "corporationId": "e4A8oQS29g0w00",//企业id
            "ownerId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",//单据提交人id
            "dataType": "expense",
            "remark": "",//备注
            "title": "报销单B19000188",//标题
            "updateTime": 1557131730611,//更新日期时间戳
            "specificationId": "vbM8oQye68e400:961b7902e2640fabfa303798ae0547879d188eb1",//模板ID
            "owner": {//提交人信息
                "id": "e4A8oQS29g0w00:C3I8oQCy9c4I00",//员工id
                "name": "悟空",//姓名
                "departments": [//所属部门信息
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
            "department": {
                "id": "e4A8oQS29g0w00",
                "name": "西游记",
                "code": ""
            },//报销部门信息
            "code": "B19000188",//单据code
            "userProps": {//单据字段信息
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
            "state": "PAID",//单据状态
            "project": null,//项目信息
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
            "sumAmount": 22.00,//报销总金额
            "writeOffAmount": 0.00,//核销总金额
            "expenseDate": 1557129574147,//报销日期时间戳
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

{%- language name="loan", type="json" -%}
{
	items:[
		{
			"id":"sdsdsd",//单据id
			"corporationId":"ekuaibao",//企业id
			"ownerId":"sdsd",//单据提交人id
			"remark":"备注",//备注
			"title":"ddsd",//标题
			"updateTime":12123243434,//更新日期时间戳
			"specificationId":"sdsdsd",//模板ID
			"owner": {//提交人信息
				"id":"sdsdsd",//员工id
				"name":"zhangsan",//姓名
				"departments":[{"id":"sdsds","name":"部门1"}]//所属部门信息
				},
			"department":{"id":"dsdsdsd","name":"部门2"},//报销部门信息
			"code":"asasas",//单据code
			"userProps": {//单据自定义档案信息
				"u_项目": {
					"code": "灌灌灌灌",
					"name": "是东莞市的g"
				},
				"u_供应商": {
					"code": "CODE1",
					"name": "大供应商"
				}
			},
			"payeeDate":1121212121,//借款日期时间戳
			"money":"125.5",//借款金额
			"payee":{//收款人信息
				"name":"张三",//姓名
				"cardNo":"12121212121",//卡号
				"bank":"招商银行",//开户行
				"branch":"网点地址",//开户网点
				"type":"PERSONAL"//账户类型(PERSONAL:个人账户; PUBLIC:对公账户)
				},
			"payorId":"sdsdsd",//支付人Id
			"paymentChannel":"CREDITEASE",//支付方式，CREDITEASE为在线支付，OFFLINE为线下支付，ERP为ERP付款
			"paymentAccountId":"yjA5ILyzJ01w00"//支付账户
			"state":"PAID",//单据状态  PAYING:待支付  PROCESSING:支付中 PAID:已支付  REJECTED:被驳回
		}
	]
}
{%- language name="payment", type="json" -%}
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
{%- language name="requisition", type="json" -%}
{
    "count":1,
    "items":[
        {
            "index":1574152167778,
            "docData":{
                "type":"requisition",
                "id":"N28a40qRcw1Y00",
                "corporationId":"5mY8ntK6CM0800",
                "ownerId":"5mY8ntK6CM0800:0954412669779359",
                "dataType":"requisition",
                "remark":"",
                "title":"申请可借款1",
                "updateTime":1574152167551,
                "specificationId":"HIca40qRcw1000:c225f3f980f213db4558e7e11e26c3449ca0ecf3",
                "owner":{
                    "id":"5mY8ntK6CM0800:0954412669779359",
                    "name":"张三",
                    "departments":[
                        {
                            "id":"5mY8ntK6CM0800:58741575",
                            "name":"部门01",
                            "code":""
                        }
                    ],
                    "code":""
                },
                "department":{
                    "id":"5mY8ntK6CM0800:58741575",
                    "name":"部门01",
                    "code":""
                },
                "code":"S19000057",
                "userProps":{
                    "payeeId":{
                        "id":"Gp09ebn1Ds8800",
                        "code":"",
                        "name":"123"
                    },
                    "submitterId":{
                        "id":"5mY8ntK6CM0800:0954412669779359",
                        "code":"",
                        "name":"张三"
                    },
                    "companyRealPay":"0.00",
                    "specificationId":{
                        "id":"HIca40qRcw1000:c225f3f980f213db4558e7e11e26c3449ca0ecf3",
                        "code":"",
                        "name":"申请可借款"
                    },
                    "paymentAccountId":{
                        "id":"DA08B7ufk8cs00",
                        "code":"1119",
                        "name":"zhb-搜车"
                    },
                    "expenseDepartment":{
                        "id":"5mY8ntK6CM0800:58741575",
                        "code":"",
                        "name":"部门01"
                    },
                    "companyRealPay_rate":"1",
                    "companyRealPay_foreign":"",
                    "companyRealPay_foreignUnit":"",
                    "companyRealPay_standardUnit":"元",
                    "companyRealPay_foreignSymbol":"",
                    "companyRealPay_foreignNumCode":"",
                    "companyRealPay_foreignStrCode":"",
                    "companyRealPay_standardSymbol":"¥",
                    "companyRealPay_standardNumCode":"156",
                    "companyRealPay_standardStrCode":"CNY"
                },
                "state":"PAID",
                "project":null,
                "logs":[
                    {
                        "time":1574152080782,
                        "isNew":false,
                        "logid":"DeYa40xbVE0000",
                        "state":"approving",
                        "action":"freeflow.submit",
                        "nodeId":"SUBMIT",
                        "nodeName":"SUBMIT",
                        "nextNodeId":"FLOW:252405502:1330319751",
                        "operatorId":"5mY8ntK6CM0800:0954412669779359",
                        "attachments":[],
                        "docDataCode":"S19000057",
                        "corporationId":"5mY8ntK6CM0800",
                        "nextOperatorId":"ebot"
                    },
                    {
                        "time":1574152160369,
                        "isNew":false,
                        "logid":"R2Qa40xbVE0400",
                        "state":"paying",
                        "action":"freeflow.paying",
                        "nodeId":"FLOW:1032098865:752816139",
                        "nodeName":"出纳支付",
                        "nextNodeId":null,
                        "operatorId":"5mY8ntK6CM0800:0954412669779359",
                        "attachments":[

                        ],
                        "docDataCode":"S19000057",
                        "corporationId":"5mY8ntK6CM0800",
                        "nextOperatorId":null
                    },
                    {
                        "time":1574152167551,
                        "isNew":true,
                        "logid":"tpwa40xbVE0800",
                        "state":"paid",
                        "action":"freeflow.pay",
                        "nodeId":"FLOW:1032098865:752816139",
                        "nodeName":"出纳支付",
                        "nextNodeId":null,
                        "operatorId":"5mY8ntK6CM0800:0954412669779359",
                        "attachments":[

                        ],
                        "docDataCode":"S19000057",
                        "corporationId":"5mY8ntK6CM0800",
                        "nextOperatorId":null
                    }
                ],
                "flowPlan":{
                    "fromStartNode":true,
                    "id":"N28a40qRcw1Y00",
                    "version":5,
                    "active":true,
                    "createTime":1574152080603,
                    "updateTime":1574152167551,
                    "corporationId":"5mY8ntK6CM0800",
                    "prevId":"FLOW:1032098865:752816139",
                    "taskId":null,
                    "ownerId":"5mY8ntK6CM0800:0954412669779359",
                    "submitterId":"5mY8ntK6CM0800:0954412669779359",
                    "flowPlanConfigId":"z0c8my9Du4n800",
                    "submitNode":{
                        "id":"SUBMIT",
                        "nextId":"SUBMIT",
                        "nextApproverIds":null,
                        "ownerId":"5mY8ntK6CM0800:0954412669779359",
                        "carbonCopy":[

                        ],
                        "urgent":null
                    },
                    "nodes":[
                        {
                            "type":"ebot",
                            "id":"FLOW:252405502:1330319751",
                            "configNodeId":"@@:78132D36-4963-4BDD-B2E5-FD7621BD395A",
                            "name":"费用标准检查",
                            "skippedType":"NO_SKIPPED",
                            "agreeType":"NO_AUTO_AGREE",
                            "conditionalDescription":null,
                            "conditionalType":null,
                            "skipWhenApproverNonMatched":false,
                            "autoAgreeWhenApproverRepeated":false,
                            "autoAgreeWhenApproverSameAsSubmitter":false,
                            "allowModify":true,
                            "config":{
                                "isAuto":false
                            },
                            "isAllStaffs":false,
                            "carbonCopy":[

                            ],
                            "timeCount":null,
                            "addCountReport":false,
                            "isAddNode":false,
                            "autoRemindPrint":false,
                            "expressConfig":null,
                            "commentWhenFlowHasRisk":false,
                            "forbidBatchApproveRiskFlow":false,
                            "condition":null,
                            "ebotConfig":{
                                "type":"costControlCheck",
                                "setting":{
                                    "checkCostControl":[

                                    ],
                                    "rejectCostControl":[

                                    ],
                                    "isOutOfLimitReject":false
                                }
                            }
                        },
                        {
                            "type":"normal",
                            "id":"FLOW:1032098865:752816139",
                            "configNodeId":"rdM8my9Du4ns00",
                            "name":"出纳支付",
                            "skippedType":"NO_SKIPPED",
                            "agreeType":"NO_AUTO_AGREE",
                            "conditionalDescription":null,
                            "conditionalType":null,
                            "skipWhenApproverNonMatched":false,
                            "autoAgreeWhenApproverRepeated":false,
                            "autoAgreeWhenApproverSameAsSubmitter":false,
                            "allowModify":true,
                            "config":{
                                "isAuto":false,
                                "isNeedCashierNode":true,
                                "isSubmitterChoice":false
                            },
                            "isAllStaffs":true,
                            "carbonCopy":[

                            ],
                            "timeCount":null,
                            "addCountReport":true,
                            "isAddNode":false,
                            "autoRemindPrint":false,
                            "expressConfig":null,
                            "commentWhenFlowHasRisk":false,
                            "forbidBatchApproveRiskFlow":false,
                            "condition":null,
                            "staffIds":[

                            ],
                            "approverId":"5mY8ntK6CM0800:0954412669779359"
                        }
                    ]
                },
                "sumAmount":100,
                "requisitionDate":1574152068887,
                "details":[
                    {
                        "amount":"100",
                        "amount_standardStrCode":"CNY",
                        "amount_standardNumCode":"156",
                        "amount_standardSymbol":"¥",
                        "amount_standardUnit":"元",
                        "amount_rate":null,
                        "amount_foreignStrCode":null,
                        "amount_foreignNumCode":null,
                        "amount_foreign":null,
                        "amount_foreignSymbol":null,
                        "amount_foreignUnit":null,
                        "date":0,
                        "remark":"",
                        "feeTypeId":"5mY8ntK6CM0800:office",
                        "userProps":{
                            "amount":"100",
                            "detailId":"9aca40qRcw2k00",
                            "amount_rate":"1",
                            "attachments":[

                            ],
                            "amount_foreign":"",
                            "amount_foreignUnit":"",
                            "consumptionReasons":"",
                            "amount_standardUnit":"元",
                            "amount_foreignSymbol":"",
                            "amount_foreignNumCode":"",
                            "amount_foreignStrCode":"",
                            "amount_standardSymbol":"¥",
                            "amount_standardNumCode":"156",
                            "amount_standardStrCode":"CNY"
                        }
                    }
                ],
                "trips":[

                ],
                "travelers":[

                ],
                "submitTime":1574152080557,
                "payeeInfo":{
                    "name":"123",
                    "cardNo":"123",
                    "bank":"开发银行",
                    "branch":"123",
                    "type":"PERSONAL",
                    "province":"辽宁省",
                    "city":"朝阳市",
                    "certificateType":"11",
                    "certificateNo":"12312",
                    "bankLinkNo":null,
                    "remark": "remark", //备注
                },
                "payorId":"Gp09ebn1Ds8800",
                "paymentChannel":"OFFLINE",
                "paymentAccountId":"DA08B7ufk8cs00",
                "payTime":1574152167547
            }
        }
    ]
}

{%- language name="custom", type="json" -%}
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

{%- language name="receipt", type="json" -%}
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

{%- endcodetabs %}

```json
{
    "items": []   //表示没查到数据
}
```

#### 失败响应：
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

<style>
    table {
		width: 100%; /*表格宽度*/
		border-collapse: collapse; /*使用单一线条的边框*/
		empty-cells: show; /*单元格无内容依旧绘制边框*/
		}
    /* 悬浮变色 */
	table tr:hover {
		background: #B2B2B2 !important;
		}
    /* 首列不换行 */
	table td:nth-child(1) {
		white-space: nowrap;
	}
	table td:nth-child(2) {
		white-space: nowrap;
	}
    /* 指定列宽度 */
    table th:nth-of-type(1) {
		width: 10%;
		white-space: nowrap;
	}
    table th:nth-of-type(2) {
		width: 10%;
		white-space: nowrap;
	}
    table th:nth-of-type(3) {
		width: 15%;
		white-space: nowrap;
	}
    table th:nth-of-type(4) {
		width: 10%;
		white-space: nowrap;
	}
    table th:nth-of-type(5) {
		width: 8%;
		white-space: nowrap;
	}
    table th:nth-of-type(6) {
		width: 50%;
		white-space: nowrap;
	}

</style>