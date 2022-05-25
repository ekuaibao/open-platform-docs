# 根据单据ID查询所有待办已办事项

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/flowDetails/allLogs"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.2.0</b></a> -> 🆕 新增了本接口。
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token    | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **flowId**      | String  | 单据ID       | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/flowDetails/allLogs?accessToken=ID_3zYtLIa1$gM:bwa3wajigF0WH0&flowId=ID_3zJ05rt0DY0'
```

## 成功响应
:::tip
`state`（任务状态）参数介绍：
- **APPROVING**：待审批、待支付。
- **PROCESSING**：支付中。
- **PROCESSED**：处理完毕（审批完成、已支付）。
- **CANCELED**：待办被取消。常见场景如下：
  - 单据被撤回。
  - A待办转交给B，A的待办被取消。
  - 会签节点一人审批通过配置，一人审批完成，其余会签待办被取消。
:::

```json
{
    "count":5,                           //待办已办总数量
    "items":[
        {
            "pipeline":1,
            "grayver":"9.10.0.0:A",
            "id":"ID_3zE5G_0dCw0",       //任务ID，唯一标识，等于出站消息的“待办ID”（backlogId）
            "version":2,
            "active":true,
            "createTime":1645692678756,
            "updateTime":1645692693493,
            "corporationId":"bwa3wajigF0WH0",
            "sourceCorporationId":null,
            "dataCorporationId":null,
            "ownerId":"bwa3wajigF0WH0:ID_3lokDfb1p5w",  //待办或已办人员ID
            "flowId":"ID_3zE5G_0bRw0",                  //单据ID
            "logId":-1,                                 //-1：表示待办，需配合 state 使用，非-1：表示已办
            "type":"expense",                           //单据类型
            "state":"PROCESSING",                       //任务状态，见 TIP 提示。
            "remindEndTime":0,
            "rejectEndTime":0,
            "autoApproveType":"NONE",
            "rejectAlert":false,
            "addCountReport":true,
            "crossCorp":false,
            "nodeId":"FLOW:1929857819:80920352",        //节点ID，等于出站消息的“节点ID”（nodeId）
            "nodeName":"出纳支付",                      //节点名称
            "isUrgent":false
        },
        {
            "pipeline":1,
            "grayver":"9.10.0.0:A",
            "id":"ID_3zE4PGk2Lrw",
            "version":2,
            "active":true,
            "createTime":1645692653852,
            "updateTime":1645692654197,
            "corporationId":"bwa3wajigF0WH0",
            "sourceCorporationId":null,
            "dataCorporationId":null,
            "ownerId":"ebot",
            "flowId":"ID_3zE5G_0bRw0",
            "logId":1,
            "type":"expense",
            "state":"PROCESSED",
            "remindEndTime":0,
            "rejectEndTime":0,
            "autoApproveType":null,
            "rejectAlert":false,
            "addCountReport":false,
            "crossCorp":false,
            "nodeId":"FLOW:447576403:261660833",
            "nodeName":"费用标准检查",
            "isUrgent":false
        },
        {
            "pipeline":1,
            "grayver":"9.10.0.0:A",
            "id":"ID_3zE5G_0cmw0",
            "version":2,
            "active":true,
            "createTime":1645692654205,
            "updateTime":1645692663330,
            "corporationId":"bwa3wajigF0WH0",
            "sourceCorporationId":null,
            "dataCorporationId":null,
            "ownerId":"bwa3wajigF0WH0:ID_3lokDfb1p5w",
            "flowId":"ID_3zE5G_0bRw0",
            "logId":1,
            "type":"expense",
            "state":"PROCESSED",
            "remindEndTime":0,
            "rejectEndTime":0,
            "autoApproveType":"NONE",
            "rejectAlert":false,
            "addCountReport":true,
            "crossCorp":false,
            "nodeId":"FLOW:329509645:1805752558",
            "nodeName":"主管审批",
            "isUrgent":false
        },
        {
            "pipeline":1,
            "grayver":"9.10.0.0:A",
            "id":"ID_3zE5G_0diw0",
            "version":2,
            "active":true,
            "createTime":1645692663340,
            "updateTime":1645692671476,
            "corporationId":"bwa3wajigF0WH0",
            "sourceCorporationId":null,
            "dataCorporationId":null,
            "ownerId":"bwa3wajigF0WH0:ID_3lokDfb1p5w",
            "flowId":"ID_3zE5G_0bRw0",
            "logId":2,
            "type":"expense",
            "state":"PROCESSED",
            "remindEndTime":0,
            "rejectEndTime":0,
            "autoApproveType":"NONE",
            "rejectAlert":false,
            "addCountReport":true,
            "crossCorp":false,
            "nodeId":"FLOW:784050093:1182764294",
            "nodeName":"总经理审批",
            "isUrgent":false
        },
        {
            "pipeline":1,
            "grayver":"9.10.0.0:A",
            "id":"ID_3zE5G_0dsw0",
            "version":2,
            "active":true,
            "createTime":1645692671487,
            "updateTime":1645692678748,
            "corporationId":"bwa3wajigF0WH0",
            "sourceCorporationId":null,
            "dataCorporationId":null,
            "ownerId":"bwa3wajigF0WH0:ID_3lokDfb1p5w",
            "flowId":"ID_3zE5G_0bRw0",
            "logId":3,
            "type":"expense",
            "state":"PROCESSED",
            "remindEndTime":0,
            "rejectEndTime":0,
            "autoApproveType":"NONE",
            "rejectAlert":false,
            "addCountReport":true,
            "crossCorp":false,
            "nodeId":"FLOW:452403684:1743733109",
            "nodeName":"财务复核",
            "isUrgent":false
        }
    ]
}
```

所查单据ID为新建的草稿状态时，返回如下：
```json
{
    "count": 0,
    "items": []
}
```

## 失败响应
`flowId`（单据ID）不存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "单据不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

`flowId`（单据ID）已删除时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "单据已删除",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
