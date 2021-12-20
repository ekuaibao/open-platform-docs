# 获取指定员工的待审批单据

{% httpverb "get" %} /api/openapi/v1/docs/byApproverId/$`approverId` {% endhttpverb %}

#### Path Parameters:

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **approverId** | String  |员工的id。|

#### Query Parameters:

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **accessToken** | String  |通过授权接口获取。      |
| **index** | Number  |分页查询的起始序号，index ≥ 0 |
| **count** | Number  |查询数据条数。      |


#### Response:
```json
{
	"count": 517, //数据总条数
	"items": [{
		"index": 1484498318241, //索引
		"docData": {
			"id": "单据id",
			"corporationId": "企业id",
			"remark": "备注",
			"title": "单据标题",
			"updateTime": 1484498318241, //最后更新日期
			"specificationId": "单据类型id：单据模板id",
			"owner": { //提交人
				"id": "提交人id",
				"name": "提交人姓名",
				"departments": [{ //提交人所在部门，可能为多个
					"id": "部门id",
					"name": "部门名称",
					"code": "部门编码"
				}],
				"code": "提交人工号"
			},
			"department": {
				"id": "费用承担部门id",
				"name": "费用承担部门名称",
				"code": "费用承担部门编码"
			},
			"code": "单号",
			"userProps": { //表头自定义档案信息
				"u_项目": {
					"code": "项目编码",
					"name": "项目名称"
				},
				"u_客户": {
					"code": "客户编码",
					"name": "客户名称"
				}
			},
			"sumAmount": 1000.00, //报销金额
			"writeOffAmount": 0.0, //核销金额
			"expenseDate": 1484376711783, //报销日期
			"details": [{ //费用明细
				// ---以下是费用金额---
				"amount": "本位币金额值",
				"amount_standardStrCode": "本位币字母编码",
				"amount_standardNumCode": "本位币数字编码",
				"amount_standardSymbol": "本位币符号",
				"amount_standardUnit": "本位币单位", 
				"amount_rate": "汇率",
				"amount_foreignStrCode": "外币字母编码",
				"amount_foreignNumCode": "外币数字编码",
				"amount_foreign": "外币金额",
				"amount_foreignSymbol": "外币符号",
				"amount_foreignUnit": "外币单位",
				// ------------------
				"date": 1484375730232, //消费日期
				"remark": "备注",
				"feeTypeId": "费用类型id",
				"userProps": { //消费明细自定义档案信息
						"u_项目": {
							"code": "项目编码",
							"name": "项目名称"
						},
						"u_客户": {
							"code": "客户编码",
							"name": "客户名称"
						}
				},
				"invoiceCount": 1, //发票数量
				"invoices": [{ //发票详情
						"type": "PAPER_NORMAL", //发票类型（后面详述发票类型内容）                           
						"taxAmount": 11.38 //税额
				}]
			}],
			"writtenOffRecords": [{ //核销记录
					"id": "借款单id",
					"amount": "核销金额"
				}],
			"submitTime": 1484376711786,
			"payeeInfo": "收款信息",
			"payorId": "付款人id",
			"paymentAccountId": "支付账户id"
			"paymentChannel": "支付方式", //CREDITEASE为在线支付，OFFLINE为线下支付，ERP为ERP付款
			"paymentAccountId": "支付账户",
			"state": "单据状态", //PAYING:待支付  PROCESSING:支付中 PAID:已支付  REJECTED:被驳回
		}
	}]
}
```
















