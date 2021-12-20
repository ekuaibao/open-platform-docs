# 获取单据列表

{% httpverb "get" %} /api/openapi/v1/docSequences {% endhttpverb %}


#### Query Parameters:

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **accessToken** | String  |通过授权接口获取。      |
| **powerCode** | String  |如无特殊说明，传入219902即可。       |
| **type** | String  |单据类型。报销单:expense; 借款单:loan; 还款记录:repayment;付款单:payment 申请单:requisition; 通用审批单:custom         |
| **index** | Number  |分页查询的起始索引序号。例如当index=1484498318240时，会查询所有index>1484498318240的单据。在分页查询时，获取上一页的单据后，取所有单据中index的最大值作为下一次分页请求的index值即可。 |
| **count** | Number  |查询数据条数。      |


#### Response:

{% codetabs name="expense", type="json" -%}
{
    "count":6345,
    "items":[
        {
            "index":1545640356544,
            "docData":{
                "type":"expense",
                "id":"gps8pNvlUAvA00",
                "corporationId":"e4A8oQS29g0w00",
                "ownerId":"e4A8oQS29g0w00:C3I8oQCy9c4I00",
                "dataType":"expense",
                "remark":null,
                "title":"差旅申请单00",
                "updateTime":1545640356200,
                "specificationId":"fIk8oQye68e000:37b805c6c4ddabbbaf6d08635bef057d7d7cef92",
                "owner":{
                    "id":"e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "name":"悟空",
                    "departments":[
                        {
                            "id":"e4A8oQS29g0w00",
                            "name":"西游记",
                            "code":""
                        }
                    ],
                    "code":""
                },
                "department":{
                    "id":"e4A8oQS29g0w00",
                    "name":"西游记",
                    "code":""
                },
                "code":"B18000003",
                "userProps":{
                    "payeeId":{
                        "id":"p448pNvlUA4g00",
                        "code":"",
                        "name":"吴承恩"
                    },
                    "submitterId":{
                        "id":"e4A8oQS29g0w00:C3I8oQCy9c4I00",
                        "code":"02",
                        "name":"悟空"
                    },
                    "companyRealPay":"0.00",
                    "specificationId":{
                        "id":"fIk8oQye68e000:37b805c6c4ddabbbaf6d08635bef057d7d7cef92",
                        "code":"",
                        "name":"差旅报销单"
                    },
                    "expenseDepartment":{
                        "id":"e4A8oQS29g0w00",
                        "code":"",
                        "name":"西游记"
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
                "state":"PAYING",
                "project":null,
                "logs":null,
                "flowPlan":null,
                "sumAmount":280,
                "writeOffAmount":0,
                "expenseDate":1545640124664,
                "details":[
                    {
                        "amount":"80.00",
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
                        "date":1545640162379,
                        "remark":null,
                        "feeTypeId":"e4A8oQS29g0w00:hotel",
                        "userProps":{
                            "amount":"80.00",
                            "invoice":"1",
                            "payeeId":"p448pNvlUA4g00",
                            "detailId":"bmo8pNvlUAvM00",
                            "payMoney":"280.00",
                            "feeTypeId":"e4A8oQS29g0w00:hotel",
                            "amount_rate":"1",
                            "attachments":"[]",
                            "expenseDate":"1545640124664",
                            "invoiceForm":"{"type":"noWrite"}",
                            "expenseMoney":"280.00",
                            "feeDatePeriod":"{"end":1545640162379,"start":1545640162379}",
                            "payMoney_rate":"1",
                            "amount_foreign":"",
                            "apportionMoney":"80.00",
                            "companyRealPay":"0.00",
                            "u_日期范围":"{"end":1545640162399,"start":1545640162399}",
                            "writtenOffMoney":"0.00",
                            "apportionPercent":"100",
                            "payMoney_foreign":"",
                            "expenseDepartment":"e4A8oQS29g0w00",
                            "expenseMoney_rate":"1",
                            "amount_foreignUnit":"",
                            "amount_standardUnit":"元",
                            "apportionMoney_rate":"1",
                            "companyRealPay_rate":"1",
                            "amount_foreignSymbol":"",
                            "expenseMoney_foreign":"",
                            "payMoney_foreignUnit":"",
                            "writtenOffMoney_rate":"1",
                            "amount_foreignNumCode":"",
                            "amount_foreignStrCode":"",
                            "amount_standardSymbol":"¥",
                            "payMoney_standardUnit":"元",
                            "amount_standardNumCode":"156",
                            "amount_standardStrCode":"CNY",
                            "apportionMoney_foreign":"",
                            "companyRealPay_foreign":"",
                            "payMoney_foreignSymbol":"",
                            "payMoney_foreignNumCode":"",
                            "payMoney_foreignStrCode":"",
                            "payMoney_standardSymbol":"¥",
                            "writtenOffMoney_foreign":"",
                            "expenseMoney_foreignUnit":"",
                            "payMoney_standardNumCode":"156",
                            "payMoney_standardStrCode":"CNY",
                            "expenseMoney_standardUnit":"元",
                            "apportionMoney_foreignUnit":"",
                            "companyRealPay_foreignUnit":"",
                            "expenseMoney_foreignSymbol":"",
                            "apportionMoney_standardUnit":"元",
                            "companyRealPay_standardUnit":"元",
                            "expenseMoney_foreignNumCode":"",
                            "expenseMoney_foreignStrCode":"",
                            "expenseMoney_standardSymbol":"¥",
                            "writtenOffMoney_foreignUnit":"",
                            "apportionMoney_foreignSymbol":"",
                            "companyRealPay_foreignSymbol":"",
                            "expenseMoney_standardNumCode":"156",
                            "expenseMoney_standardStrCode":"CNY",
                            "writtenOffMoney_standardUnit":"元",
                            "apportionMoney_foreignNumCode":"",
                            "apportionMoney_foreignStrCode":"",
                            "apportionMoney_standardSymbol":"¥",
                            "companyRealPay_foreignNumCode":"",
                            "companyRealPay_foreignStrCode":"",
                            "companyRealPay_standardSymbol":"¥",
                            "writtenOffMoney_foreignSymbol":"",
                            "apportionMoney_standardNumCode":"156",
                            "apportionMoney_standardStrCode":"CNY",
                            "companyRealPay_standardNumCode":"156",
                            "companyRealPay_standardStrCode":"CNY",
                            "writtenOffMoney_foreignNumCode":"",
                            "writtenOffMoney_foreignStrCode":"",
                            "writtenOffMoney_standardSymbol":"¥",
                            "writtenOffMoney_standardNumCode":"156",
                            "writtenOffMoney_standardStrCode":"CNY"
                        },
                        "invoiceCount":1,
                        "taxAmount":null,
                        "noTaxAmount":null,
                        "invoices":[

                        ],
                        "payeeInfo":null
                    },
                    {
                        "amount":"200.00",
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
                        "date":1545640192814,
                        "remark":null,
                        "feeTypeId":"e4A8oQS29g0w00:hotel",
                        "userProps":{
                            "amount":"200.00",
                            "invoice":"1",
                            "payeeId":"p448pNvlUA4g00",
                            "detailId":"um88pNvlUAvQ00",
                            "payMoney":"280.00",
                            "feeTypeId":"e4A8oQS29g0w00:hotel",
                            "amount_rate":"1",
                            "attachments":"[]",
                            "expenseDate":"1545640124664",
                            "invoiceForm":"{"type":"noWrite"}",
                            "expenseMoney":"280.00",
                            "feeDatePeriod":"{"end":1545640192814,"start":1545640192814}",
                            "payMoney_rate":"1",
                            "amount_foreign":"",
                            "apportionMoney":"200.00",
                            "companyRealPay":"0.00",
                            "u_日期范围":"{"end":1545640192865,"start":1545640192865}",
                            "writtenOffMoney":"0.00",
                            "apportionPercent":"100",
                            "payMoney_foreign":"",
                            "expenseDepartment":"e4A8oQS29g0w00",
                            "expenseMoney_rate":"1",
                            "amount_foreignUnit":"",
                            "amount_standardUnit":"元",
                            "apportionMoney_rate":"1",
                            "companyRealPay_rate":"1",
                            "amount_foreignSymbol":"",
                            "expenseMoney_foreign":"",
                            "payMoney_foreignUnit":"",
                            "writtenOffMoney_rate":"1",
                            "amount_foreignNumCode":"",
                            "amount_foreignStrCode":"",
                            "amount_standardSymbol":"¥",
                            "payMoney_standardUnit":"元",
                            "amount_standardNumCode":"156",
                            "amount_standardStrCode":"CNY",
                            "apportionMoney_foreign":"",
                            "companyRealPay_foreign":"",
                            "payMoney_foreignSymbol":"",
                            "payMoney_foreignNumCode":"",
                            "payMoney_foreignStrCode":"",
                            "payMoney_standardSymbol":"¥",
                            "writtenOffMoney_foreign":"",
                            "expenseMoney_foreignUnit":"",
                            "payMoney_standardNumCode":"156",
                            "payMoney_standardStrCode":"CNY",
                            "expenseMoney_standardUnit":"元",
                            "apportionMoney_foreignUnit":"",
                            "companyRealPay_foreignUnit":"",
                            "expenseMoney_foreignSymbol":"",
                            "apportionMoney_standardUnit":"元",
                            "companyRealPay_standardUnit":"元",
                            "expenseMoney_foreignNumCode":"",
                            "expenseMoney_foreignStrCode":"",
                            "expenseMoney_standardSymbol":"¥",
                            "writtenOffMoney_foreignUnit":"",
                            "apportionMoney_foreignSymbol":"",
                            "companyRealPay_foreignSymbol":"",
                            "expenseMoney_standardNumCode":"156",
                            "expenseMoney_standardStrCode":"CNY",
                            "writtenOffMoney_standardUnit":"元",
                            "apportionMoney_foreignNumCode":"",
                            "apportionMoney_foreignStrCode":"",
                            "apportionMoney_standardSymbol":"¥",
                            "companyRealPay_foreignNumCode":"",
                            "companyRealPay_foreignStrCode":"",
                            "companyRealPay_standardSymbol":"¥",
                            "writtenOffMoney_foreignSymbol":"",
                            "apportionMoney_standardNumCode":"156",
                            "apportionMoney_standardStrCode":"CNY",
                            "companyRealPay_standardNumCode":"156",
                            "companyRealPay_standardStrCode":"CNY",
                            "writtenOffMoney_foreignNumCode":"",
                            "writtenOffMoney_foreignStrCode":"",
                            "writtenOffMoney_standardSymbol":"¥",
                            "writtenOffMoney_standardNumCode":"156",
                            "writtenOffMoney_standardStrCode":"CNY"
                        },
                        "invoiceCount":1,
                        "taxAmount":null,
                        "noTaxAmount":null,
                        "invoices":[

                        ],
                        "payeeInfo":null
                    }
                ],
                "writtenOffRecords":[

                ],
                "submitTime":1545640199568,
                "payeeInfo": {//收款信息快照，单据审批后更新数据
                    "bank": "海外",
                    "city": "",
                    "name": "海外1",
                    "sort": "OVERSEABANK",
                    "type": "PERSONAL",
                    "branch": "",
                    "cardNo": "SeaCard001",
                    "bankCode": "BankCode001",
                    "bankName": "BankName001",
                    "province": "",
                    "swiftCode": "SwiftCode001",
                    "bankLinkNo": "",
                    "branchCode": "BranchCode001",
                    "certificateNo": "",
                    "certificateType": ""
                },
                "payorId":"p448pNvlUA4g00",//收款信息id
                "paymentChannel":null,
                "paymentAccountId":null,
                "payTime":null,
                "multiplePayeesMode":null,
                "channelTradeNo": null//批次号
            }
        }
    ]
}
{%- language name="loan", type="json" -%}
{
    "count":13,
    "items":[
        {
            "index":1545637773073,
            "docData":{
                "type":"loan",
                "id":"nio8pNvlUAhQ00",
                "corporationId":"e4A8oQS29g0w00",
                "ownerId":"e4A8oQS29g0w00:C3I8oQCy9c4I00",
                "dataType":"loan",
                "remark":null,
                "title":"自助虎",
                "updateTime":1545637772829,
                "specificationId":"fgo8oQye68e800:7c834e5c0f707f87215cedd8e535ebcec17c20ff",
                "owner":{
                    "id":"e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "name":"悟空",
                    "departments":[
                        {
                            "id":"e4A8oQS29g0w00",
                            "name":"西游记",
                            "code":""
                        }
                    ],
                    "code":""
                },
                "department":{
                    "id":"e4A8oQS29g0w00",
                    "name":"西游记",
                    "code":""
                },
                "code":"J18000005",
                "userProps":{
                    "payeeId":{
                        "id":"p448pNvlUA4g00",
                        "code":"",
                        "name":"吴承恩"
                    },
                    "submitterId":{
                        "id":"e4A8oQS29g0w00:C3I8oQCy9c4I00",
                        "code":"02",
                        "name":"悟空"
                    },
                    "companyRealPay":"0.00",
                    "loanDepartment":{
                        "id":"e4A8oQS29g0w00",
                        "code":"",
                        "name":"西游记"
                    },
                    "specificationId":{
                        "id":"fgo8oQye68e800:7c834e5c0f707f87215cedd8e535ebcec17c20ff",
                        "code":"",
                        "name":"借款单"
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
                "state":"PAYING",
                "project":null,
                "logs":null,
                "flowPlan":null,
                "payeeDate":1545637102505,
                "money":100,
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
                "payeeInfo": {//收款信息快照，单据审批后更新数据
                     "bank": "招商银行",
                     "city": "北京市",
                     "name": "招商卡001",
                     "sort": "BANK",
                     "type": "PERSONAL",
                     "branch": "招商银行股份有限公司北京海淀支行",
                     "cardNo": "12341234",
                     "bankCode": "",
                     "bankName": "",
                     "province": "北京市",
                     "swiftCode": "",
                     "bankLinkNo": "308100005297",
                     "branchCode": "",
                     "certificateNo": null,
                     "certificateType": null
                },
                "payorId":"p448pNvlUA4g00",//收款信息id
                "paymentChannel":null,
                "paymentAccountId":null,
                "payTime":null,
                "channelTradeNo": null//批次号
            }
        }
    ]
}
{%- language name="repayment", type="json" -%}
{
    "count": 1,
    "items": [
        {
            "index": 1561021352666,
            "docData": {
                "type": "repayment",
                "id": "PFs9j5S6won800",
                "corporationId": "e4A8oQS29g0w00",
                "ownerId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                "dataType": "repayment",
                "remark": null,
                "title": "7元借款单",
                "updateTime": 1561021234292,
                "specificationId": "fgo8oQye68e800:7c834e5c0f707f87215cedd8e535ebcec17c20ff",
                "owner": {
                    "id": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "name": "悟空",
                    "departments": [
                        {
                            "id": "e4A8oQS29g0w00:aKg9dX0aF4os00",
                            "name": "a11",
                            "code": ""
                        },
                        {
                            "id": "e4A8oQS29g0w00:xLw9dX0aF40000",
                            "name": "a部门",
                            "code": ""
                        }
                    ],
                    "code": ""
                },
                "department": {
                    "id": "e4A8oQS29g0w00:aKg9dX0aF4os00",
                    "name": "a11",
                    "code": ""
                },
                "code": "J19000003",
                "userProps": null,
                "state": "",
                "project": null,
                "logs": [
                    {
                        "time": 1561021145222,
                        "isNew": false,
                        "logid": "vZQ9iL8yio7A00",
                        "state": "approving",
                        "action": "freeflow.submit",
                        "nodeId": "SUBMIT",
                        "nodeName": "SUBMIT",
                        "nextNodeId": "FLOW:947058401:874820369",
                        "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                        "docDataCode": "J19000003",
                        "corporationId": "e4A8oQS29g0w00",
                        "nextOperatorId": "ebot"
                    },
                    {
                        "time": 1561021200835,
                        "isNew": false,
                        "logid": "RsA9iL8yio7E00",
                        "state": "approving",
                        "action": "freeflow.agree",
                        "nodeId": "FLOW:1369481403:386179044",
                        "nodeName": "主管审批",
                        "nextNodeId": "FLOW:1670254665:972855706",
                        "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                        "docDataCode": "J19000003",
                        "corporationId": "e4A8oQS29g0w00",
                        "nextOperatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                    },
                    {
                        "time": 1561021200852,
                        "isNew": false,
                        "logid": "tJ09iL8yio7I00",
                        "state": "approving",
                        "action": "freeflow.carbonCopy",
                        "nodeId": "FLOW:1369481403:386179044",
                        "nodeName": "主管审批",
                        "nextNodeId": "FLOW:1670254665:972855706",
                        "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                        "docDataCode": "J19000003",
                        "corporationId": "e4A8oQS29g0w00",
                        "nextOperatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                    },
                    {
                        "time": 1561021209294,
                        "isNew": false,
                        "logid": "rWA9iL8yio7M00",
                        "state": "approving",
                        "action": "freeflow.agree",
                        "nodeId": "FLOW:1670254665:972855706",
                        "nodeName": "财务复审",
                        "nextNodeId": "FLOW:1460645402:964421806",
                        "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                        "docDataCode": "J19000003",
                        "corporationId": "e4A8oQS29g0w00",
                        "nextOperatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                    },
                    {
                        "time": 1561021217991,
                        "isNew": false,
                        "logid": "e6M9iL8yio7Q00",
                        "state": "paying",
                        "action": "freeflow.agree",
                        "nodeId": "FLOW:1460645402:964421806",
                        "nodeName": "CEO二审",
                        "nextNodeId": "FLOW:1256844872:2111715867",
                        "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                        "docDataCode": "J19000003",
                        "corporationId": "e4A8oQS29g0w00",
                        "nextOperatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                    },
                    {
                        "time": 1561021233054,
                        "isNew": false,
                        "logid": "b7U9iL8yio7U00",
                        "state": "paying",
                        "action": "freeflow.paying",
                        "nodeId": "FLOW:1256844872:2111715867",
                        "nodeName": "出纳支付",
                        "nextNodeId": null,
                        "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                        "docDataCode": "J19000003",
                        "corporationId": "e4A8oQS29g0w00",
                        "nextOperatorId": null
                    },
                    {
                        "time": 1561021234292,
                        "isNew": false,
                        "logid": "7oY9iL8yio7Y00",
                        "state": "paid",
                        "action": "freeflow.pay",
                        "nodeId": "null",
                        "nodeName": "",
                        "nextNodeId": null,
                        "operatorId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                        "docDataCode": "J19000003",
                        "corporationId": "e4A8oQS29g0w00",
                        "nextOperatorId": null
                    }
                ],
                "flowPlan": {
                    "fromStartNode": true,
                    "id": "xXU9j5S6wokI00",
                    "version": 8,
                    "active": true,
                    "createTime": 1561021145088,
                    "updateTime": 1561021234292,
                    "corporationId": "e4A8oQS29g0w00",
                    "prevId": "FLOW:1256844872:2111715867",
                    "taskId": null,
                    "ownerId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "submitterId": "e4A8oQS29g0w00:C3I8oQCy9c4I00",
                    "flowPlanConfigId": "EZ88oQye68cA00",
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
                            "id": "FLOW:947058401:874820369",
                            "configNodeId": "ZU08oQye68cE00",
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
                            "expressConfig": null,
                            "commentWhenFlowHasRisk": false,
                            "forbidBatchApproveRiskFlow": false,
                            "condition": null,
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
                            "id": "FLOW:1369481403:386179044",
                            "configNodeId": "6G08oQye68cI00",
                            "name": "主管审批",
                            "skippedType": "NO_SKIPPED",
                            "agreeType": "NO_AUTO_AGREE",
                            "conditionalDescription": null,
                            "conditionalType": null,
                            "skipWhenApproverNonMatched": true,
                            "autoAgreeWhenApproverRepeated": false,
                            "autoAgreeWhenApproverSameAsSubmitter": false,
                            "allowModify": true,
                            "config": {
                                "isAuto": false,
                                "isSubmitterChoice": false,
                                "allowSubmitterRetract": true
                            },
                            "isAllStaffs": true,
                            "carbonCopy": [
                                {
                                    "sendTime": "AGREE",
                                    "staffIds": [
                                        "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                                    ],
                                    "matchResult": [
                                        {
                                            "values": [
                                                [
                                                    "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                                                ]
                                            ],
                                            "selection": {
                                                "type": "SUBMITTER",
                                                "submitters": [
                                                    "DELEGATE",
                                                    "SUBMITTER",
                                                    "SUBMITTER_NO_DELEGATE"
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ],
                            "timeCount": null,
                            "addCountReport": true,
                            "isAddNode": false,
                            "autoRemindPrint": false,
                            "expressConfig": null,
                            "commentWhenFlowHasRisk": false,
                            "forbidBatchApproveRiskFlow": false,
                            "condition": null,
                            "staffIds": [],
                            "approverId": "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                        },
                        {
                            "type": "normal",
                            "id": "FLOW:1670254665:972855706",
                            "configNodeId": "@@:5B51A437-1DAD-43CB-B0AD-1B089C007B01",
                            "name": "财务复审",
                            "skippedType": "NO_SKIPPED",
                            "agreeType": "NO_AUTO_AGREE",
                            "conditionalDescription": null,
                            "conditionalType": null,
                            "skipWhenApproverNonMatched": true,
                            "autoAgreeWhenApproverRepeated": false,
                            "autoAgreeWhenApproverSameAsSubmitter": false,
                            "allowModify": true,
                            "config": {
                                "isAuto": false,
                                "isSubmitterChoice": false,
                                "allowSubmitterRetract": true
                            },
                            "isAllStaffs": true,
                            "carbonCopy": [],
                            "timeCount": null,
                            "addCountReport": true,
                            "isAddNode": false,
                            "autoRemindPrint": false,
                            "expressConfig": null,
                            "commentWhenFlowHasRisk": false,
                            "forbidBatchApproveRiskFlow": false,
                            "condition": null,
                            "staffIds": [],
                            "approverId": "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                        },
                        {
                            "type": "normal",
                            "id": "FLOW:1460645402:964421806",
                            "configNodeId": "@@:604E6949-1F4C-4290-A94D-1C8294153FD7",
                            "name": "CEO二审",
                            "skippedType": "NO_SKIPPED",
                            "agreeType": "NO_AUTO_AGREE",
                            "conditionalDescription": null,
                            "conditionalType": null,
                            "skipWhenApproverNonMatched": true,
                            "autoAgreeWhenApproverRepeated": false,
                            "autoAgreeWhenApproverSameAsSubmitter": false,
                            "allowModify": true,
                            "config": {
                                "isAuto": false,
                                "isSubmitterChoice": false,
                                "allowSubmitterRetract": true
                            },
                            "isAllStaffs": true,
                            "carbonCopy": [],
                            "timeCount": null,
                            "addCountReport": true,
                            "isAddNode": false,
                            "autoRemindPrint": false,
                            "expressConfig": null,
                            "commentWhenFlowHasRisk": false,
                            "forbidBatchApproveRiskFlow": false,
                            "condition": null,
                            "staffIds": [],
                            "approverId": "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                        },
                        {
                            "type": "normal",
                            "id": "FLOW:1256844872:2111715867",
                            "configNodeId": "xx08oQye68cU00",
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
                            "expressConfig": null,
                            "commentWhenFlowHasRisk": false,
                            "forbidBatchApproveRiskFlow": false,
                            "condition": null,
                            "staffIds": [],
                            "approverId": "e4A8oQS29g0w00:C3I8oQCy9c4I00"
                        }
                    ]
                },
                "repaymentType": "MANUAL",
                "amount": 7,
                "loanId": "xXU9j5S6wokI00",
                "createTime": 1561021352599,
                "paymentAccountId": "IyE9g9Q4S8is00"
            }
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
                        "attachments":[

                        ],
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
                    "bankLinkNo":null
                },
                "payorId":"Gp09ebn1Ds8800",
                "paymentChannel":"OFFLINE",
                "paymentAccountId":"DA08B7ufk8cs00",
                "payTime":1574152167547，
                "loanMoney": null,
                "repaymentDate": null,
                "channelTradeNo": null
            }
        }
    ]
}
{%- language name="payment", type="json" -%}
{
            "index":1565104912571,
            "docData":{
                "type":"payment",
                "id":"v1g9xWruu0rI00",
                "corporationId":"e4A8oQS29g0w00",
                "ownerId":"e4A8oQS29g0w00:zKw9sqmYQc0000",
                "dataType":"payment",
                "remark":"",
                "title":"测付款单流程",
                "updateTime":1565104912520,
                "specificationId":"f6Y9xWruu0rw00:76103a4b48944a7ef83565f1d47b3f0154679a2c",
                "owner":{
                    "id":"e4A8oQS29g0w00:zKw9sqmYQc0000",
                    "name":"王占礼",
                    "departments":[
                        {
                            "id":"e4A8oQS29g0w00",
                            "name":"西游记",
                            "code":""
                        }
                    ],
                    "code":""
                },
                "department":null,
                "code":"Z19000001",
                "userProps":{
                    "payeeId":{
                        "id":"p448pNvlUA4g00",
                        "code":"",
                        "name":"吴承恩"
                    },
                    "submitterId":{
                        "id":"e4A8oQS29g0w00:zKw9sqmYQc0000",
                        "code":"",
                        "name":"王占礼"
                    },
                    "companyRealPay":"0.00",
                    "specificationId":{
                        "id":"f6Y9xWruu0rw00:76103a4b48944a7ef83565f1d47b3f0154679a2c",
                        "code":"",
                        "name":"付款单"
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
                "state":"PAYING",
                "project":null,
                "logs":[
                    {
                        "time":1565104894536,
                        "isNew":true,
                        "logid":"uGU9wCLUU45k00",
                        "state":"approving",
                        "action":"freeflow.submit",
                        "nodeId":"SUBMIT",
                        "nodeName":"SUBMIT",
                        "nextNodeId":"FLOW:1480757669:600406019",
                        "operatorId":"e4A8oQS29g0w00:zKw9sqmYQc0000",
                        "attachments":[

                        ],
                        "docDataCode":"Z19000001",
                        "corporationId":"e4A8oQS29g0w00",
                        "nextOperatorId":"ebot"
                    },
                    {
                        "time":1565104912520,
                        "isNew":true,
                        "logid":"MpE9wCLUU45o00",
                        "state":"paying",
                        "action":"freeflow.agree",
                        "nodeId":"FLOW:222918637:1870029187",
                        "nodeName":"主管",
                        "nextNodeId":"FLOW:1608379259:75535464",
                        "operatorId":"e4A8oQS29g0w00:zKw9sqmYQc0000",
                        "attachments":[

                        ],
                        "docDataCode":"Z19000001",
                        "corporationId":"e4A8oQS29g0w00",
                        "nextOperatorId":"e4A8oQS29g0w00:zKw9sqmYQc0000"
                    }
                ],
                "flowPlan":{
                    "fromStartNode":true,
                    "id":"v1g9xWruu0rI00",
                    "version":5,
                    "active":true,
                    "createTime":1565104894456,
                    "updateTime":1565104912517,
                    "corporationId":"e4A8oQS29g0w00",
                    "prevId":"FLOW:222918637:1870029187",
                    "taskId":"FLOW:1608379259:75535464",
                    "ownerId":"e4A8oQS29g0w00:zKw9sqmYQc0000",
                    "submitterId":"e4A8oQS29g0w00:zKw9sqmYQc0000",
                    "flowPlanConfigId":"TnQ8pP1KDEhM00",
                    "submitNode":{
                        "id":"SUBMIT",
                        "nextId":"SUBMIT",
                        "nextApproverIds":null,
                        "ownerId":"e4A8oQS29g0w00:zKw9sqmYQc0000",
                        "carbonCopy":[

                        ],
                        "urgent":null
                    },
                    "nodes":[
                        {
                            "type":"ebot",
                            "id":"FLOW:1480757669:600406019",
                            "configNodeId":"@@:60D7721A-1F78-4B18-AA8E-1CAB253E06FB",
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
                            "beforeRemindPrint":false,
                            "expressConfig":null,
                            "commentWhenFlowHasRisk":false,
                            "forbidBatchApproveRiskFlow":false,
                            "condition":null,
                            "laterCalcReason":null,
                            "ebotConfig":{
                                "type":"costControlCheck",
                                "setting":{
                                    "checkCostControl":[
                                        {
                                            "id":"8Jc8pNqbCguY00",
                                            "type":"old"
                                        }
                                    ],
                                    "rejectCostControl":[

                                    ],
                                    "isOutOfLimitReject":false
                                }
                            }
                        },
                        {
                            "type":"normal",
                            "id":"FLOW:222918637:1870029187",
                            "configNodeId":"@@:3BE353F2-1D41-47F5-8C6D-30E72A5C5544",
                            "name":"主管",
                            "skippedType":"NO_SKIPPED",
                            "agreeType":"NO_AUTO_AGREE",
                            "conditionalDescription":null,
                            "conditionalType":null,
                            "skipWhenApproverNonMatched":true,
                            "autoAgreeWhenApproverRepeated":false,
                            "autoAgreeWhenApproverSameAsSubmitter":false,
                            "allowModify":true,
                            "config":{
                                "isAuto":false,
                                "showConditionInBill":false,
                                "allowSubmitterRetract":true
                            },
                            "isAllStaffs":false,
                            "carbonCopy":[

                            ],
                            "timeCount":null,
                            "addCountReport":false,
                            "isAddNode":false,
                            "autoRemindPrint":false,
                            "beforeRemindPrint":false,
                            "expressConfig":null,
                            "commentWhenFlowHasRisk":false,
                            "forbidBatchApproveRiskFlow":false,
                            "condition":null,
                            "laterCalcReason":null,
                            "staffIds":[
                                "e4A8oQS29g0w00:zKw9sqmYQc0000"
                            ],
                            "approverId":"e4A8oQS29g0w00:zKw9sqmYQc0000"
                        },
                        {
                            "type":"normal",
                            "id":"FLOW:1608379259:75535464",
                            "configNodeId":"@@:5EBE55E6-1ECA-424E-A326-1C0C245198FE",
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
                            "beforeRemindPrint":false,
                            "expressConfig":null,
                            "commentWhenFlowHasRisk":false,
                            "forbidBatchApproveRiskFlow":false,
                            "condition":null,
                            "laterCalcReason":null,
                            "staffIds":[

                            ],
                            "approverId":"e4A8oQS29g0w00:zKw9sqmYQc0000"
                        }
                    ]
                },
                "payMoney":499,
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
                "payeeInfo":{
                    "name":"吴承恩",
                    "cardNo":"666",
                    "bank":"中国工商银行",
                    "branch":"666",
                    "type":"PERSONAL",
                    "province":"北京市",
                    "city":"北京市",
                    "certificateType":"",
                    "certificateNo":"",
                    "bankLinkNo":null
                },
                "payorId":"p448pNvlUA4g00",
                "paymentChannel":null,
                "paymentAccountId":null,
                "payTime":null,
                "channelTradeNo": null
            }
        }

{%- language name="custom", type="json" -%}
{
    "count": 1,
    "items": [
        {
            "index": 1577171162272,
            "docData": {
                "type": "custom",
                "id": "P3Iafgh05M3A00",
                "corporationId": "4zk9HVpwrQ1w00",
                "ownerId": "4zk9HVpwrQ1w00:6449HVpwrQko00",
                "dataType": "payment",
                "remark": "",
                "title": "基础单测试",
                "updateTime": 1577171160769,
                "specificationId": "imcafcRAfAc000:5745f79677d8073e723f45a957a48248ab02949f",
                "owner": {
                    "id": "4zk9HVpwrQ1w00:6449HVpwrQko00",
                    "name": "房雄伟",
                    "departments": [
                        {
                            "id": "4zk9HVpwrQ1w00",
                            "name": "测试新建",
                            "code": ""
                        }
                    ],
                    "code": ""
                },
                "department": null,
                "code": "F19000006",
                "userProps": {
                    "submitterId": {
                        "id": "4zk9HVpwrQ1w00:6449HVpwrQko00",
                        "code": "",
                        "name": "房雄伟"
                    },
                    "specificationId": {
                        "id": "imcafcRAfAc000:5745f79677d8073e723f45a957a48248ab02949f",
                        "code": "",
                        "name": "基础单据"
                    }
                },
                "state": "PAID",
                "project": null,
                "logs": [
                    {
                        "time": 1577171117110,
                        "isNew": true,
                        "logid": "82kafgklxs0800",
                        "state": "approving",
                        "action": "freeflow.submit",
                        "nodeId": "SUBMIT",
                        "nodeName": "SUBMIT",
                        "nextNodeId": "FLOW:757528177:97619167",
                        "operatorId": "4zk9HVpwrQ1w00:6449HVpwrQko00",
                        "attachments": [],
                        "docDataCode": "F19000006",
                        "corporationId": "4zk9HVpwrQ1w00",
                        "nextOperatorId": "ebot"
                    },
                    {
                        "time": 1577171160769,
                        "isNew": true,
                        "logid": "F14afgklxs0c00",
                        "state": "paid",
                        "action": "freeflow.agree",
                        "nodeId": "FLOW:622578971:942094897",
                        "nodeName": "审批1",
                        "nextNodeId": "null",
                        "operatorId": "4zk9HVpwrQ1w00:6449HVpwrQko00",
                        "attachments": [],
                        "docDataCode": "F19000006",
                        "corporationId": "4zk9HVpwrQ1w00",
                        "nextOperatorId": null
                    },
                    {
                        "time": 1577171160782,
                        "isNew": true,
                        "logid": "zlEafgklxs0g00",
                        "state": "paid",
                        "action": "freeflow.skipped",
                        "nodeId": null,
                        "nodeName": "",
                        "nextNodeId": "FLOW:124213300:1960359318",
                        "operatorId": "4zk9HVpwrQ1w00:6449HVpwrQko00",
                        "attachments": [],
                        "docDataCode": "F19000006",
                        "corporationId": "4zk9HVpwrQ1w00",
                        "nextOperatorId": null
                    }
                ],
                "flowPlan": {
                    "fromStartNode": true,
                    "id": "P3Iafgh05M3A00",
                    "version": 5,
                    "active": true,
                    "createTime": 1577171115611,
                    "updateTime": 1577171160739,
                    "corporationId": "4zk9HVpwrQ1w00",
                    "prevId": "FLOW:622578971:942094897",
                    "taskId": null,
                    "ownerId": "4zk9HVpwrQ1w00:6449HVpwrQko00",
                    "submitterId": "4zk9HVpwrQ1w00:6449HVpwrQko00",
                    "flowPlanConfigId": "Aac9HVsA1Q3Q00",
                    "submitNode": {
                        "id": "SUBMIT",
                        "nextId": "SUBMIT",
                        "nextApproverIds": null,
                        "ownerId": "4zk9HVpwrQ1w00:6449HVpwrQko00",
                        "carbonCopy": [],
                        "urgent": null,
                        "isSensitive": null
                    },
                    "nodes": [
                        {
                            "type": "ebot",
                            "id": "FLOW:757528177:97619167",
                            "configNodeId": "@@:4684ACEA-40CA-401B-AB64-290F38BF42A7",
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
                            "id": "FLOW:622578971:942094897",
                            "configNodeId": "@@:598F1C5E-1D1A-4D30-847E-1A833C82EB17",
                            "name": "审批1",
                            "skippedType": "NO_SKIPPED",
                            "agreeType": "NO_AUTO_AGREE",
                            "conditionalDescription": null,
                            "conditionalType": null,
                            "skipWhenApproverNonMatched": true,
                            "autoAgreeWhenApproverRepeated": false,
                            "autoAgreeWhenApproverSameAsSubmitter": false,
                            "allowModify": true,
                            "config": {
                                "isAuto": false,
                                "allowSubmitterRetract": true
                            },
                            "isAllStaffs": false,
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
                            "staffIds": [
                                "4zk9HVpwrQ1w00:6449HVpwrQko00"
                            ],
                            "approverId": "4zk9HVpwrQ1w00:6449HVpwrQko00"
                        },
                        {
                            "type": "normal",
                            "id": "FLOW:124213300:1960359318",
                            "configNodeId": "wZI9HVsA1Q4800",
                            "name": "出纳支付",
                            "skippedType": "NO_ABILITY",
                            "agreeType": "NO_AUTO_AGREE",
                            "conditionalDescription": null,
                            "conditionalType": null,
                            "skipWhenApproverNonMatched": false,
                            "autoAgreeWhenApproverRepeated": false,
                            "autoAgreeWhenApproverSameAsSubmitter": false,
                            "allowModify": true,
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
                            "beforeRemindPrint": true,
                            "expressConfig": null,
                            "commentWhenFlowHasRisk": false,
                            "forbidBatchApproveRiskFlow": false,
                            "condition": null,
                            "laterCalcReason": null,
                            "staffIds": [],
                            "approverId": null
                        }
                    ]
                }
            }
        }
    ]
}

{%- endcodetabs %}

#### 补充说明:
| Key | 说明 |
| :--- | :--- |
| PAPER_SPECIAL | ​增值税专用发票 |
| PAPER_CAR | ​机动车专用发票 |
| PAPER_NORMAL | ​增值税普通发票 |
| DIGITAL_NORMAL | ​电子普票 |
| PAPER_ROLL | 卷式发票 |