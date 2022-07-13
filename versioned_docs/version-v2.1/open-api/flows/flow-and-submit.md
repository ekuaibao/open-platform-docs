# 填写单据审批流程(单据提交)

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/flow/data/submitFlow"
/>

:::caution
- 经由【[创建单据](/docs/open-api/flows/creat-and-save)】接口，正确保存数据后，配置审批人，调用此接口提交单据。
- 程序会对请求参数、body数据格式以及流程节点进行完整性与合法性校验。
- 与业务画面上的提交单据功能一样，需要按格式组织审批流程节点信息数据，提交单据信息。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **flowId**      | String | 单据ID    | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**isUrgent**                  | Boolean | 是否加急      | 必填   | - | `true` : 加急 &emsp; `false` : 不加急 |
|**urgentReason**              | String  | 加急原因      | 非必填 | - | 加急原因 |
|**nodes**                     | Array   | 节点信息      | 必填   | - | 至少一个节点信息 |
|**&emsp; ∟ configNodeId**    | String  | 配置节点ID    | 必填   | - | 通过 [获取流程实例](/docs/open-api/flows/get-flow) 获取【node】数组的 `id` 字段 |
|**&emsp; ∟ approverId**      | String  | 审批人Id     | 非必填  | - | 根据配置的审批流配置去判断是否需要传送|
|**&emsp; ∟ counterSigners**  | Array   | 会签审批人列表 | 非必填  | - | 根据配置的审批流配置去判断是否需要传送|
|**&emsp; &emsp; ∟ signerId** | String  | 会签审批人ID  | 非必填  | - | 当设置会签审批人列表时候必填|

## 附加说明
:::tip
- `isUrgent` 字段表达是否加急；`urgentReason` 字段为加急原因； 仅当流程配置允许加急时，`isUrgent` 才可为"true"；

- 在上一步获取的流程实例中，<br/>
  &emsp; 若某节点的 type = "normal" 时，对应传入参数为 `approverId`；<br/>
  &emsp; 若某节点的 type = "countersign" 时，对应传入参数为 `signerId`；

- 在上一步获取的流程实例中，<br/>
  &emsp; 若某节点的 type = "normal"，且 allStaffs = "true" 时，可传入企业内任意员工 ID，仅允许传入一个；<br/>
  &emsp; 若某节点的 type = "countersign"，且 allStaffs = "true" 时，可传入企业内任意员工 ID，允许传入多个；

- 在上一步获取的流程实例中，若某节点的 allstaffs = "false"，且 isauto = "false"：<br/>
  &emsp; 当其 type = "normal" 时，需传入 staffIds 数组中的任意一个员工 ID；<br/>
  &emsp; 当其 type = "countersign" 时，需传入 staffIds 数组中的任意员工 ID，允许传入多个；

- 在上一步获取的流程实例中，若某节点的 allstaffs = "false"，且 isauto = "true"：<br/>
  &emsp; 当其 type = "normal" 时，需传入 staffIds 数组中的任意一个员工 ID；<br/>
  &emsp; 当其 type = "countersign" 时，需传入 staffIds 数组中的所有员工 ID；
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/flow/data/submitFlow?accessToken=cWEbn1cA0kjU00&flowId=PQIbuN0nmYc800' \
--header 'Content-Type: application/json' \
--data-raw '{
    "isUrgent": false,
    "urgentReason": "",
    "nodes": [
        {
            "configNodeId": "@@:612A5312-1F93-4A09-B324-1CC3AE375F19", //配置节点ID
            "approverId": "KQI9kk5LZU0000:7q49kk50Cg0400"              //审批人ID
        },
        {
            "configNodeId": "@@:72BFA12C-4622-457F-A92F-F237DF9BAF26", //配置节点ID
            "counterSigners": [                                        //会签审批人列表
                {
                    "signerId": "KQI9kk5LZU0000:7q49kk50Cg0400"        //会签审批人ID
                },
                {
                    "signerId": "6Rk9l1WYNM0400:152219341224235350"    //会签审批人ID
                },
                {
                    "signerId": "6Rk9l1WYNM0400:11560833021005745"     //会签审批人ID
                }
            ]
        },
        {
            "configNodeId": "@@:5D3C0936-1E4C-49AD-BAE3-1B99C894C198",
            "counterSigners": [
                {
                    "signerId": "KQI9kk5LZU0000:7q49kk50Cg0400"
                }
            ]
        }
    ]
}'
```

## 成功响应
```json
{
    "value":"",
    "type":-1,
    "flow":{
        "version":1,                        //版本
        "active":true,                      //是否停用（是否有效）
        "createTime":1562864828130,         //创建时间
        "updateTime":1562864828130,         //更新时间
        "corporationId":"dNU9lELfXs0g00",   //企业ID
        "form":{
            "code":"B19000019",             //单据编号
            "title":"api 测试加急真",        //单据标题
            "details":[                     //明细详情
                {
                    "feeTypeId":"dNU9lELfXs0g00:office",  //费用类型ID
                    "feeTypeForm":{
                        "amount":{                        //明细金额
                            "standard":"500.00",
                            "standardUnit":"元",
                            "standardScale":2,
                            "standardSymbol":"¥",
                            "standardNumCode":"156",
                            "standardStrCode":"CNY"
                        },
                        "detailId":"Xok9pY7cXo2w00",      //明细ID
                        "invoiceForm":{                   //发票
                            "type":"wait",
                            "attachments":[

                            ]
                        }
                    },
                    "specificationId":"dNU9lELfXs0g00:office:expense:2b43fb410d8d5cadb681282ace8f14090500eedb"  //费用模板ID
                }
            ],
            "payMoney":{                   //支付金额
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "submitDate":1562864828009,    //提交日期
            "expenseDate":1562036472205,   //报销日期
            "submitterId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",   //提交人ID
            "expenseMoney":{               //报销金额
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
            "specificationId":"Ys49lCDmlgbc00:6ad521918f3ff67fe11866cab1888da290e74c85",  //单据模板ID
            "writtenOffMoney":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            }
        },
        "ownerId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",  //单据所属人ID
        "ownerDefaultDepartment":"dNU9lELfXs0g00",  //所属人部门
        "state":"pending",                          //单据状态，提交中（预算计算）
        "flowType":"freeflow",
        "formType":"expense",                       //单据类型
        "logs":[                                    //审批日志
        ],
        "actions":{},
        "id":"YLg9pY7cXo2k00"                       //单据ID
    }
}
```

## 确认提交结果
- 提交单据后，易快报预置的【**费用标准检查**】节点，会检查单据中的预算、费用标准等费控指标是否合规。
  - 如存在不合规，需要驳回时，该节点会自动驳回单据。 此时需调用【[根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details)】接口查询结果。
  - 根据返回的 `state`，判断该单据是否被【**驳回**】，如返回 `state` 不为 `draft` 或 `rejected`，则该单据提交成功。

## 失败响应
添加的审批人ID不合规时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "openapi单据数据提交，审批节点[测试下一个操作人]，设置的人员没有审批权限，请核对审批流模板配置。", //添加的审批人ID不合规
    "errorDetails": null,
    "code": null,
    "data": null
}
```
