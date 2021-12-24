# 更新单据

数据结构和创建单据接口一样，此接口后面的字段说明，请参考创建单据接口

{% httpverb "put" %} /api/openapi/v2/flow/data/$`flowId` {% endhttpverb %}

#### Path Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **flowId** | String  | 单据ID| 必填 | - | [一般通过出站消息获取单据ID信息](/outbound-message/outbound-new.html) | 

#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  | 通过授权接口获取 | 必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |

#### Body Parameters:（不同表单类型参数各不相同，以下仅为示例，详见单据模板）

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
|**form**| Object | 单据信息 | 必填 | - | 单据信息数据 |
|**form/title**| String | 单据标题 | 必填 | - | 单据标题 |
|**form/submitterId**| String | 单据提交人ID<br/>(员工staffId) | 必填 | - | 通过[获取员工列表](/corporation/get-all-staffs.html)获取 |
|**form/expenseDate**| String | 报销日期 | 必填 | - | 毫秒级时间戳 |
|**form/expenseDepartment**| String | 报销部门ID | 必填 | - | 通过[获取部门列表](/corporation/get-departments.html)获取 |
|**form/description**| String | 描述 | 非必填 | - | 描述 |
|**form/payeeId**| String | 收款人信息ID | 必填 | - | 通过[获取收款账号信息](/pay/get-payeeInfos.html)获取 |
|**form/specificationId**| String | 单据模板ID | 必填 | - | 通过[获取当前版本单据模板列表](/forms/get-specifications-latest.html)获取 |
|**form/details**| Array | 费用明细 | 必填 | - | 费用明细 |
|**form/details/feeTypeId**| String | 费用类型ID | 必填 | - | 通过[获取费用类型](/feetype/get-feetypes.html)获取 |
|**form/details/specificationId**| String | 费用类型模板ID | 必填 | - | 通过[根据费用类型ids获取费用模板信息](/feetype/get-feetypes-list.html)获取 |
|**form/details/feeTypeForm**| Object | 费用信息 | 必填 | - | 费用信息,具体传参请见获取费用模板接口返回值 |
|**form/details/feeTypeForm/amount**| Object | 报销金额 | 必填 | - | 报销金额 |
|**form/details/feeTypeForm/feeDate**| String | 费用日期 | 必填 | - | 毫秒级时间戳 |
|**form/details/feeTypeForm/invoiceForm**| Object | 发票相关信息 | 必填 | - | 根据单据模板决定 |
|**form/details/feeTypeForm/type**| String | 发票开票类型 | 必填 | - | `wait`:待开发票<br/>`exist`:已有发票<br/>`noExist`:无发票<br/>`noWrite`:无需填写(当费用类型发票字段设置的不可编辑时，默认为此项) |
|**form/details/feeTypeForm/attachments**| Array | 发票附件 | 非必填 | - | 需要先通过[上传附件](/attachment/attachment-upload.html)上传数据,然后使用接口返回值为参数 |
|**form/details/feeTypeForm/consumptionReasons**| String | 消费事由 | 非必填 | - | 消费事由 |
|**form/details/feeTypeForm/apportions**| Array | 分摊明细 | 非必填 | - | 根据单据模板决定 |
|**form/details/feeTypeForm/apportions/apportionForm**|	Object |	分摊明细具体信息| 非必填 | - | 分摊明细具体信息 |

>⚠️ 注意：

>- 与业务画面上的保存单据(新建单据接口)功能一样，按格式组织数据，保存单据信息。
>- Body中不写的表单字段参数，表示清空该字段值。
>- 这边只列举常用参数解释 如果需要其他单据具体字段信息，可参考获取单据详情接口
>- 保存成功后，会返回该实例。
>- 程序会校验请求参数及body数据格式是否正确。
>- 传递参数支持计算公式自动计算，如果某个字段参数可以根据配置的计算公式在现有传参基础上计算出来结果参数，那么该字段可以不传值。
>- 传递参数支持求和公式自动计算，如果某个金额字段参数可以根据配置的求和公式在现有金额参数上计算结果，那么该字段可以不传值。
>- 传递参数支持档案关系关联参数，如果某个字段参数可以根据配置的档案关系在现有传参基础上查询出关联结果参数，那么该字段可以不传值。
>- 报销单传递参数支持关联申请单自动赋值，如果某个字段参数配置根据关联申请单自动赋值，那么该字段可以不传值。


<br/>
#### CURL:
```json
curl --location --request PUT 'https://wx2.ekuaibao.com/api/openapi/v2/flow/data/$flowId?accessToken=SIw9lEj3rc0800' \
--header 'Content-Type: application/json' \
--data-raw '{
  "form": {
      "title": "报销七月打车",
      "submitterId": "6Rk9l1WYNM0400:09496419662084319251",
      "expenseDate": 1562036472205,
      "expenseDepartment": "6Rk9l1WYNM0400:72157064",
      "description": "",
      "details": [
        {
        "feeTypeId": "6Rk9l1WYNM0400:taxi",//费用类型ID
        "specificationId": "6Rk9l1WYNM0400:taxi:expense:3ff9bb327c504b4b",//费用的报销或申请模板ID
        "feeTypeForm": {
            "amount": {
              "standard": "100",
              "standardStrCode": "CNY",
              "standardNumCode": "156",
              "standardSymbol": "¥",
              "standardUnit": "元",
              "standardScale": 2
            },
            "feeDate": 1562036453462,
            "invoiceForm": {
              "type": "exist",
              "attachments": [//如果没有附件,传空[](附件先通过上传数据)
                    {
                        "key": "WechatIMG186-1562036466774-209.jpeg",
                        "fileName": "WechatIMG186.jpeg",
                        "fileId": "Hpc9mIvN7org00"
                    }
                 ]
              },
			  "apportions": [
				  {
					"apportionForm": {
						"apportionMoney": {
							"standard": "5000.00",
							"standardStrCode": "CNY",
							"standardNumCode": "156",
							"standardSymbol": "¥",
							"standardUnit": "元",
							"standardScale": 2
						},
						"apportionPercent": "50.00",
						"expenseDepartment": "joQbMsJBw01c00:2J4bMvXHTY8U00",
						"项目": "pIAbMPbmLw4s00"
					},
					"specificationId": "joQbMsJBw01c00:报销部门&项目分摊:3188695b6e1209edef0b4ef8d4f12e351442d066"
				  }
			 ],
              "consumptionReasons": ""
          }
        }
      ],
      "payeeId":"tjc9pdqmsY5s00",
      "specificationId": "W709pbgZpoeY00:6d20266cf10554c266f76d6161eb5ceb5307a49d"
  }
  "params":{//自定义字段
        "loanWrittenOff":[ //表示核销借款
            {
                "loanInfoId":"KWYaYjurRo2000", //借款包id
                "title":"333", //借款单标题
                "repaymentDate":1591942260000,// 还款日期
                "fromApply":false,
                "flowId":"_LAaYjoV9sm000", //借款单 Id
                "hasImported":false,
                "amount":"3" //核销金额
            }
        ]
    }
}'
```
>⚠️ 注意：

> 更新单据接口与创建单据接口数据功能一样，所有参数规则说明请参考创建单据接口里的说明
> 
> 返回信息与[创建单据](/flows/creat-and-save.html)接口一样


### 成功响应:
```json
{
    "value":"",
    "type":-1,
    "flow":{
        "version":1,
        "active":true,
        "createTime":1562862829309,
        "updateTime":1562862829309,
        "corporationId":"dNU9lELfXs0g00",
        "form":{
            "title":"报销七月打车",
            "submitterId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
            "expenseDate":1562036472205,
            "details":[
                {
                    "feeTypeId":"dNU9lELfXs0g00:office",
                    "specificationId":"dNU9lELfXs0g00:office:expense:2b43fb500eedb",
                    "feeTypeForm":{
                        "invoiceForm":{
                            "type":"noWrite",
                            "attachments":[

                            ]
                        },
                        "amount":{
                            "standard":"500.00",
                            "standardNumCode":"156",
                            "standardScale":2,
                            "standardStrCode":"CNY",
                            "standardSymbol":"¥",
                            "standardUnit":"元"
                        },
						"apportions": [
						  {
							"apportionForm": {
								"apportionMoney": {
									"standard": "5000.00",
									"standardStrCode": "CNY",
									"standardNumCode": "156",
									"standardSymbol": "¥",
									"standardUnit": "元",
									"standardScale": 2
								},
								"apportionPercent": "50.00",
								"expenseDepartment": "joQbMsJBw01c00:2J4bMvXHTY8U00",
								"项目": "pIAbMPbmLw4s00"
							},
							"specificationId": "joQbMsJBw01c00:报销部门&项目分摊:3188695b6e1209edef0b4ef8d4f12e351442d066"
						  }
						 ],
                        "detailId":"swo9pY7cXo1g00"
                    }
                }
            ],
            "specificationId":"Ys49lCDmlgbc00:6ad521a290e74c85",
            "writtenOffMoney":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "payMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "companyRealPay":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "expenseMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "code":"B19000017",
            "submitDate":1562862829291
        },
        "ownerId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
        "ownerDefaultDepartment":"dNU9lELfXs0g00",
        "state":"draft",
        "flowType":"freeflow",
        "formType":"expense",
        "logs":[

        ],
        "actions":{
            "dNU9lELfXs0g00:97Y9lCBulQ4M00":[
                "freeflow.delete",
                "freeflow.edit",
                "freeflow.submit"
            ]
        },
        "id":"DQ09pY7cXo1400"
    }
}
```

### 失败响应:

单据模板错误，返回单据模板不存在，需要确认单据模板，对应字段`specificationId`值
```json
{
    "errorCode": 400,
    "errorMessage": "单据模板不存在",
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
    table th:nth-of-type(3) {
		width: 20%;
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
		width: 22%;
		white-space: nowrap;
	}

</style>
