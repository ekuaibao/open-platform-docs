# 单据审批

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/backlog/data/[`flowIds`]"
/>

:::caution
需要开通`单据审批`功能，且单据处于已提交的情况下，方可使用此接口。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowIds** | String  | 单据的id | 必填 | - | 通过其他api接口或者出站消息获取，可传多个，用`,`分隔 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **messageCode** | String  | 消息类型       |必填   | debug |  填写默认值debug即可  |
| **powerCode**   | String  | 功能授权码     |必填   | TICKET_AUDIT_switch | 填写默认值即可 |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **approveId**               | String | 审批人ID            | 必填  | -     | 通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)获取 |
| **action**                  | Object | 审批动作            | 必填   | -    | 审批动作 |
| **&emsp; ∟ comment**        | String | 备注               | 非必填 | -    | 备注信息 |
| **&emsp; ∟ name**           | String | 执行动作            | 必填   | -    |  `freeflow.agree`:同意<br/>`freeflow.reject`:驳回 |
| **&emsp; ∟ rejectTo**       | String | 驳回目标节点         | 非必填 | NULL | 节点实例id，可通过[获取单据详情](/docs/open-api/flows/get-forms-details)接口获取<br/>如果忽略此参数，则驳回给提交人 |
| **&emsp; ∟ resubmitMethod** | String | 驳回后再次提交送审方式 | 非必填 | -    | 驳回时必填<br/>`FROM_START`:从头开始走审批流程<br/>`TO_REJECTOR`:直接提交给驳回者 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/backlog/data/[6T8bITwIaUmo00,y-EbIT7IQY7M00]?accessToken=7W4bJtxA-ouE00&messageCode=debug&powerCode=xxxx' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "approveId": "3Qobu2l0cs6k00:dIEbu2mgTs6o00",
    "action": {
        "comment": "",
        "name": "freeflow.agree"
    }
}'
```

## 成功响应
```json
{
    "value": {
        "total": 2,     //审批总数
        "success": 0,   //成功数量
        "error": 0,     //错误数量
        "residue": 2,   //等待处理数
        "errorMsg": null,   //失败消息
        "lastBacklogId": "", 
        "filter": 0
    }
}
```

## 失败响应
```json
{
    "errorCode": 412,
    "errorMessage": "审批人必填",
    "errorDetails": null,
    "code": null,
    "data": null
}
```