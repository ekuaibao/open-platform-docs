# 调用失败日志列表
出站消息调用失败，会生成失败日志。外部服务器可以根据自身需求获取失败日志(如定时、定期获取)。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/outboundMessageLogs"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注                                                                                         |
| :--- | :--- | :--- | :--- |:--- |:-------------------------------------------------------------------------------------------|
| **accessToken** | String | 认证token	  | 必填   | -    | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken`                            |
| **messageType** | String | 消息类型       | 非必填 | flow | `message` : 审批事件<br/>`dataLink` : 业务对象变更<br/>`message_center` : 消息中心<br/>`repayment` : 借款事件<br/>`flow` : EBot事件<br/>`InternalMessage` : 站内信 |
| **startDate**   | Long   | 开始时间（毫秒） | 必填   | -    | 毫秒级时间戳                                                                                     |
| **endDate**     | Long   | 结束时间（毫秒） | 必填   | -    | 毫秒级时间戳                                                                                     |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/outboundMessageLogs?accessToken=yI8byd_xTQ2s00&messageType=flow&startDate=1598417222510&endDate=1598417222510' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "name":"名称1",                  //出站消息配置名称
            "messageId": "HMocIFTDM1x400",  //出站消息配置ID
            "flowId":"110000",              //单据ID
            "dataLinkId": "",               //业务对象实体定义ID
            "messageCenterConfigId": null,  //消息中心配置ID
            "repaymentApplyId": null,       //还款申请ID
            "nodeName":"节点名称",          //节点名称
            "nodeId": "51A5F3CD-8D15-43BB-B449-21E5E59748E9", //节点ID
            "request":{            //请求参数
                "aa":"bb"
            },
            "response":{           //返回结果
                "aa":"bb"
            },
            "state":"FAILURE",     //出站消息状态（SUCCESS：成功   FAILURE：失败）
            "id":"222",            //出站消息实例ID
            "type": "INVOKING",    //类型（INVOKING：出站消息调用外部服务   CALLBACK：外部服务回调）
            "version":4,
            "active":true,                    //是否有效
            "createTime":1505372614157,       //创建时间
            "updateTime":1505372614157,       //更新时间
            "corporationId":"Uq08cj71400000", //企业ID
            "messageType":"flow"              //消息类型，见参数介绍
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"items": []}` | 为空表示没有查询到相关的失败日志<br/>请确认 `messageType`（消息类型）是否为 **备注** 中的固定值<br/>请确认 `startDate`（开始时间）到 `endDate`（结束时间）范围内，是否有对应类型的失败日志 |