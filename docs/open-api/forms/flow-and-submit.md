# 填写审批流程

{% httpverb "post" %} api/openapi/v2/flow/data/submitFlow {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **accessToken** | String  |必填，通过授权接口获取。      |
| **flowId** | String  |必填，单据ID      |

注：经由[保存单据]接口，正确保存数据后，配置审批人，调用此接口提交单据;
与业务画面上的提交单据功能一样，需要按格式组织数据审批流程节点信息，提交单据信息。
程序会对请求参数、body数据格式以及流程节点进行完整性与合法性校验。



#### 示例:
```json
	http://wx2.ekuaibao.com/api/openapi/v2/flow/data/submitFlow?accessToken=SIw9lEj3rc0800&flowId=PrU9oBqBE05A00

```

#### body参数:
```json
{
    "isUrgent": false,
    "urgentReason": "",
    "nodes": [
        {
            "configNodeId": "@@:43FE9B7A-3E78-46D7-806E-27970BF18800",//配置节点ID
            "approverId": "KQI9kk5LZU0000:7q49kk50Cg0400" //审批人Id
        },
        {
            "configNodeId": "@@:4236C84D-3CD5-4A2B-BBC8-268DA42CB008", //配置节点ID
            "counterSigners": [ //会签审批人列表
                {
                    "signerId": "KQI9kk5LZU0000:7q49kk50Cg0400" //会签审批人ID
                     
                },
                {
                    "signerId": "6Rk9l1WYNM0400:152219341224235350"//会签审批人ID
                },
                {
                    "signerId": "6Rk9l1WYNM0400:11560833021005745"//会签审批人ID
                }
            ]
        },
        {
            "configNodeId": "@@:6E3B0AF6-435F-4707-8818-E8AE7ABF1EB2",
            "counterSigners": [
                {
                    "signerId": "KQI9kk5LZU0000:7q49kk50Cg0400"
                }
            ]
        },
        {
            "configNodeId": "@@:50936595-8B3A-4D1B-9CFC-2173E8C27DE3",
            "approverId": "KQI9kk5LZU0000:7q49kk50Cg0400"
        },
        {
            "configNodeId": "@@:42A2632E-3D38-47F9-8457-26CC4B6BD751",
            "approverId": "KQI9kk5LZU0000:7q49kk50Cg0400"
        }
    ]
}
```
\*isUrgent 字段表达是否加急;urgentReason 字段为加急原因; 仅当流程配置允许加急时，isUrgent 才可为 true


\*在上一步获取的流程实例中，若某节点的 type="normal"时，对应传入参数为「approverId」;若某节点的 type="countersign"时，对应传入参数为「signerId」


\*在上一步获取的流程实例中，若某节点的 type="normal",且 allStaffs=true 时，可传入企业内任意员工 ID，仅 允许传入一个;若某节点的 type="countersign",且 allStaffs=true 时，可传入企业内任意员工 ID，允许传入 多个


\*在上一步获取的流程实例中，若某节点的 allstaff=false，且 isauto=false:当其 type="normal"时，需传入 staffIds 数组中的任意一个员工 ID;当其 type="countersign"时，需传入 staffIds 数组中的任意员工 ID，允 许传入多个


\*在上一步获取的流程实例中，若某节点的 allstaff=false，且 isauto=true:当其 type="normal"时，需传入 staffIds 数组中的任意一个员工 ID;当其 type="countersign"时，需传入 staffIds 数组中的所有员工 ID


#### Response:
```json
{
    "value":"",
    "type":-1,
    "flow":{
        "version":1,
        "active":true,
        "createTime":1562864828130,
        "updateTime":1562864828130,
        "corporationId":"dNU9lELfXs0g00",
        "form":{
            "code":"B19000019",
            "title":"api 测试加急真",
            "details":[
                {
                    "feeTypeId":"dNU9lELfXs0g00:office",
                    "feeTypeForm":{
                        "amount":{
                            "standard":"500.00",
                            "standardUnit":"元",
                            "standardScale":2,
                            "standardSymbol":"¥",
                            "standardNumCode":"156",
                            "standardStrCode":"CNY"
                        },
                        "detailId":"Xok9pY7cXo2w00",
                        "invoiceForm":{
                            "type":"wait",
                            "attachments":[

                            ]
                        }
                    },
                    "specificationId":"dNU9lELfXs0g00:office:expense:2b43fb410d8d5cadb681282ace8f14090500eedb"
                }
            ],
            "payMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "submitDate":1562864828009,
            "expenseDate":1562036472205,
            "submitterId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
            "expenseMoney":{
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
            "specificationId":"Ys49lCDmlgbc00:6ad521918f3ff67fe11866cab1888da290e74c85",
            "writtenOffMoney":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            }
        },
        "ownerId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
        "ownerDefaultDepartment":"dNU9lELfXs0g00",
        "state":"pending",
        "flowType":"freeflow",
        "formType":"expense",
        "logs":[

        ],
        "actions":{

        },
        "id":"YLg9pY7cXo2k00"
    }
}
```

####确认提交结果
提交单据后，易快报预置的「费用标准检查」节点，会检查单据中的预算、费用标 准等费控指标是否合规 如存在不合规，需要驳回的情况时，该节点会自动驳回单据。 此时需调用「获取单据详情」接口，根据返回数据中的【state】，判断该单据是否被 驳回，如返回 state=!“draft”且 state=!“rejected”，则该单据提交成功。