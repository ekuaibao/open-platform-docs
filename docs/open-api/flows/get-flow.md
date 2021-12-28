# 获取流程实例
根据单据id获取审批流的流程实例，就是单据模板的审批流设置的审批流数据，返回对应审批流所有节点的内容详情

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v2/flow/plan/computed/$`flowId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowId** | String | 单据的id | 必填 | - | 通过其他api接口获取或者出站消息获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

:::tip
只有单据处于未提交的情况下才能获取审批流实例，例如：草稿和驳回状态的单据才能查询到，不然会提示没有权限获取该单据的流程实例
:::

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/flow/plan/computed/$PQIbuN0nmYc800?accessToken=UvsbtOEHTsk000'
```

## 成功响应
```json
{
    "value": {
        "id":"oYo9niZxz4po00",//流程实例ID
        "flowId": "oYo9niZxz4po00",//单据ID
        "flowPlanConfigId": "dcI9lCDmlg1Y00",//流程配置ID
        "node": [//流程节点
            {
                "id":"",//节点ID，当单据提交之后就会生成对应的应用节点id
                "configNodeId": "0XQ9lCDmlg2000",//节点模版节点ID
                "name": "费用标准检查",//节点名称
                "skippedType": "NO_SKIPPED",//跳过类型【不跳过：NO_SKIPPED,匹配不到审批人：APPROVER_NOT_FOUND,通过角色或部门主管匹配不到审批人：APPROVER_NOT_FOUND_BY_ROLE,不具有该节点能力：NO_ABILITY】
                "agreeType": "NO_AUTO_AGREE",//自动同意类型【不自动同意：NO_AUTO_AGREE,自动同意失败：FAILED_AUTO_AGREE,审批人与提交人相同：APPROVER_SAME_AS_SUBMITTER,审批人重复：APPROVER_REPEATED】
                "staffIds": null,//当前节点候选人列表
                "type": "ebot",//节点类型
                "policy": null,//会签策略，当type="countersign"时，该字段有值
                "skipWhenApproverNonMatched": false,//匹配不到审批人时，是否跳过
                "autoAgreeWhenApproverRepeated": false,//审批人重复时，是否自动同意
                "autoAgreeWhenApproverSameAsSubmitter": false,//审批人与提交人相同时，是否自动同意
                "allStaffs": false,//是否选用全公司员工作为审批候选人列表
                "addNode": false//是否是加签节点
            },
            {
                "id":"",
                "configNodeId": "nj89lCDmlg2400",
                "name": "主管审批",
                "skippedType": "NO_SKIPPED",
                "agreeType": "NO_AUTO_AGREE",
                "staffIds": [
                    "LqY9lELfXs0000:4Ac9lCBulQ1Y00"
                ],
                "type": "countersign",
                "policy": "ANY",
                "skipWhenApproverNonMatched": true,
                "autoAgreeWhenApproverRepeated": false,
                "autoAgreeWhenApproverSameAsSubmitter": false,
                "allStaffs": false,
                "addNode": false
            },
            {
                "id":"",
                "configNodeId": "ai89lCDmlg2800",
                "name": "总经理审批",
                "skippedType": "NO_SKIPPED",
                "agreeType": "NO_AUTO_AGREE",
                "staffIds": [],
                "type": "normal",
                "policy": null,
                "skipWhenApproverNonMatched": false,
                "autoAgreeWhenApproverRepeated": false,
                "autoAgreeWhenApproverSameAsSubmitter": false,
                "allStaffs": true,
                "addNode": false
            },
            {
                "id":"",
                "configNodeId": "SXM9lCDmlg2c00",
                "name": "财务复核",
                "skippedType": "NO_SKIPPED",
                "agreeType": "NO_AUTO_AGREE",
                "staffIds": [
                    "LqY9lELfXs0000:4-k9nB-6Wk0000"
                ],
                "type": "normal",
                "policy": null,
                "skipWhenApproverNonMatched": true,
                "autoAgreeWhenApproverRepeated": false,
                "autoAgreeWhenApproverSameAsSubmitter": false,
                "allStaffs": false,
                "addNode": false
            },
            {
                "id":"",
                "configNodeId": "S1g9lCDmlg2g00",
                "name": "出纳支付",
                "skippedType": "NO_SKIPPED",
                "agreeType": "NO_AUTO_AGREE",
                "staffIds": [
                    "LqY9lELfXs0000:4Ac9lCBulQ1Y00"
                ],
                "type": "normal",
                "policy": null,
                "skipWhenApproverNonMatched": false,
                "autoAgreeWhenApproverRepeated": false,
                "autoAgreeWhenApproverSameAsSubmitter": false,
                "allStaffs": false,
                "addNode": false
            }
        ],
        "taskId": "SUBMIT",//当前环节所处的节点id
        "ownerId": "LqY9lELfXs0000:4Ac9lCBulQ1Y00",//流程发起人id;员工id
        "submitterId": "LqY9lELfXs0000:4Ac9lCBulQ1Y00",//单据提交人id,即该单据归属者;员工id
        "corporationId": "LqY9lELfXs0000",
        "fromStartNode": true//提交后是否重走流程
    }
}
```

## 失败响应
出现以下信息，请检查单据id是存在的
```json
{
    "errorCode": 412,
    "errorMessage": "单据不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

目前只有草稿和驳回的单据才能被查询到
```json
{
    "errorCode": 412,
    "errorMessage": "您没有权限获取该单据的流程实例",
    "errorDetails": null,
    "code": null,
    "data": null
}
```