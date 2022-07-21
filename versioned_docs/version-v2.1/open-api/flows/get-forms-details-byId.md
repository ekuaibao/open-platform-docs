# 根据单据ID查询所有待办已办事项

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1.1/flowDetails/allLogs"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.8.1**](/docs/open-api/notice/update-log#172) -> 🐞 修复了单据撤回再提交，接口报 **HTTP 400** 的BUG。<br/>
  &emsp; &emsp; -> 🐞 修复了单据由管理员转交给他人后审批同意，接口报 **HTTP 500** 的BUG。<br/>
  &emsp; &emsp; -> 🐞 修复了单据支付中和支付完成状态缺失 `action` 的BUG。<br/>
  [**1.7.2**](/docs/open-api/notice/update-log#172) -> 🐞 修复了待办任务自动同意时，接口报错 **HTTP 400** 的BUG。<br/>
  [**1.7.0**](/docs/open-api/notice/update-log#170) -> 🚀 接口升级 `v1.1` 版本，**成功响应** 中新增了 `action`（已办动作）参数。<br/>
  [**1.2.0**](/docs/open-api/notice/update-log#120) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token    | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **flowId**      | String  | 单据ID       | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1.1/flowDetails/allLogs?accessToken=ID_3zYtLIa1$gM:bwa3wajigF0WH0&flowId=ID_3zJ05rt0DY0'
```

## 成功响应
:::tip
- `action`（已办动作）参数介绍请参考 [审批动作](/docs/open-api/flows/forms-state#审批动作审批日志中-action-字段)
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
            "state":"PROCESSING",                       //任务状态，见“参数介绍”。
            "remindEndTime":0,
            "rejectEndTime":0,
            "autoApproveType":"NONE",
            "rejectAlert":false,
            "addCountReport":true,
            "crossCorp":false,
            "nodeId":"FLOW:1929857819:80920352",        //节点ID，等于出站消息的“节点ID”（nodeId）
            "nodeName":"出纳支付",                      //节点名称
            "action":null,                              //已办动作，待办时返回 null 
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
            "action":"freeflow.submit",        //已办动作
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
            "action":"freeflow.agree",          //已办动作
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
            "action":"freeflow.agree",          //已办动作
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
            "action":"freeflow.agree",          //已办动作
            "isUrgent":false
        }
    ]
}
```

所查单据ID为草稿状态时，返回如下：
```json
{
    "count": 0,
    "items": []
}
```

### `state`(任务状态)参数介绍
| 参数  | 备注 |
| :--- | :--- |
| **APPROVING**  | 待审批 |
| **PAYING**     | 待支付 |
| **PROCESSING** | 处理中（支付中） |
| **PROCESSED**  | 已处理（审批完成、已支付） |
| **CANCELED**   | 待办被取消。常见场景如下：<br/>&emsp;- 单据被撤回<br/>&emsp;- A待办转交给B，A的待办被取消<br/>&emsp;- 会签节点（一人审批通过节点完成），一人审批后，其余会签人员待办被取消 |
| **SENDING**    | 待寄送 |
| **RECEIVING**  | 待收单 |
| **RECEIVING_EXCEP**  | 收单异常 |
| **REQUISITION_PAID** | 临时状态（申请单支付时消息发送） |

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | Error 400 Bad Request | 代码处理未获取到唯一 `action`，此问题请反馈易快报技术人员 | 
| **412** | - | 单据不存在 | 确认 `flowId`（单据ID）是否存在 | 
| **412** | - | 单据已删除 | 确认 `flowId`（单据ID）是否已删除 | 

