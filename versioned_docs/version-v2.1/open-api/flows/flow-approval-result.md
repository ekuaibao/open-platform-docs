# 获取单据审批结果

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/backlog/data/result"
/>

:::caution
- 需要开通【**单据审批**】功能，方可使用。
- 该接口在调用 [单据审批](/docs/open-api/flows/flow-approval) 接口后 **60秒** 内调用， 方可得到审批结果。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **approveId**   | String | 审批人ID   | 必填 | - | 可通过[查询员工](/docs/open-api/corporation/get-staff-ids)接口获取 |
| **powerCode**   | String | 功能授权码  | 必填 | - | 传 `TICKET_AUDIT_switch` 即可 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/backlog/data/result?accessToken=ID_3sTFcaTookM:djg8LshfUkfM00&approveId=djg8LshfUkfM00:ID_3kpneISgylw&powerCode=TICKET_AUDIT_switch' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "value": {
        "total": 2,       //审批总数
        "success": 0,     //成功数
        "error": 2,       //失败数
        "residue": 0,     //等待处理数
        "errorMsg": [     //错误消息
            {
                "flowCode": "B20000006",
                "flowTitle": "不同审批人",
                "msg": "您没有权限处理该待办事项",
                "flowId": "6T8bITwIaUmo00",
                "backlogId": "cxgbJuQWr0gE00"
            },
            {
                "flowCode": "J20000013",
                "flowTitle": "不选出纳003",
                "msg": "未选择下级审批人",
                "flowId": "y-EbIT7IQY7M00",
                "backlogId": "k_QbIT7IQYig00"
            }
        ],
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