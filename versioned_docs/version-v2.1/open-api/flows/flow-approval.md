# 单据审批

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/backlog/data/[`flowIds`]"
/>

:::caution
需要开通【**单据审批**】功能，且单据处于已提交的情况下，方可使用此接口。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowIds** | String  | 单据ID | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一)，可传多个，用 `,` 分隔<br/>**一次最多不要审批超过 `10` 个单据，并且循环调用的话，间隔请大于 `1分钟`** |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token    | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **messageCode** | String | 消息类型      | 必填 | - | 填写 `debug` 即可 |
| **powerCode**   | String | 功能授权码     | 必填 | - | 填写 `TICKET_AUDIT_switch` 即可 |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **approveId**               | String | 审批人ID            | 必填  | -     | 通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)获取 |
| **action**                  | Object | 审批动作            | 必填   | -    | 审批动作 |
| **&emsp; ∟ comment**        | String | 备注               | 非必填 | -    | 备注信息 |
| **&emsp; ∟ name**           | String | 执行动作            | 必填   | -    |  `freeflow.agree` : 同意<br/>`freeflow.reject` : 驳回 |
| **&emsp; ∟ rejectTo**       | String | 驳回目标节点         | 非必填 | NULL | 节点实例ID，可通过[获取单据详情](/docs/open-api/flows/get-forms-details)接口获取<br/>如果忽略此参数，则驳回给提交人 |
| **&emsp; ∟ resubmitMethod** | String | 驳回后再次提交送审方式 | 非必填 | -    | **驳回时必填**<br/>`FROM_START` : 从头开始走审批流程<br/>`TO_REJECTOR` : 直接提交给驳回者 |

## CURL
```json
curl --location -g --request POST 'https://app.ekuaibao.com/api/openapi/v1/backlog/data/[ID_3uzqbr0AoJg]?accessToken=ID_3uzm4ZRReMM:djg8LshfUkfM00&messageCode=debug&powerCode=TICKET_AUDIT_switch' \
--header 'Content-Type: application/json' \
--data-raw '{
    "approveId": "djg8LshfUkfM00:ID_3kpneISgylw",
    "action": {
            "comment": "测试1223",
            "name": "freeflow.agree"   
            //"rejectTo":"FLOW:1177147692E9:53411358E7"
            //"resubmitMethod":"TO_REJECTOR"
    }
}'
```

## 成功响应
```json
{
    "value": {
        "total": 2,         //审批总数
        "success": 0,       //成功数量
        "error": 0,         //错误数量
        "residue": 2,       //等待处理数
        "errorMsg": null,   //失败消息
        "lastBacklogId": "", 
        "filter": 0
    }
}
```

## 失败响应
当 `approveId`（审批人ID）填写错误时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "未设置指定人员",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `flowIds` 对应的单据没有处于 **审批中** 状态时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "无待办审批事项",
    "errorDetails": null,
    "code": null,
    "data": null
}
```