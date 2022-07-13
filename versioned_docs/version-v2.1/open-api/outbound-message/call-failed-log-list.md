# 调用失败日志列表
出站消息调用失败，会生成失败日志。外部服务器可以根据自身需求获取失败日志(如定时、定期获取)。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/outboundMessageLogs"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	  | 必填   | -    | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **messageType** | String | 消息类型       | 非必填 | flow | `message` : 审批事件 &emsp; `flow` : 流程(EBOT) <br/> `repayment` : 还款事件 &emsp; `dataLink` : 业务对象变更事件 |
| **startDate**   | Long   | 开始时间（毫秒） | 必填   | -    | 毫秒级时间戳 |
| **endDate**     | Long   | 结束时间（毫秒） | 必填   | -    | 毫秒级时间戳 |

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
            "name":"名称1",         //出站消息名称
            "flowId":"110000",     //单据ID
            "nodeName":"节点名称",  //节点名称
            "request":{            //请求参数
                "aa":"bb"
            },
            "response":{           //返回结果
                "aa":"bb"
            },
            "state":"FAILURE",     //失败日志
            "id":"222",
            "version":4,
            "active":true,                    //是否有效
            "createTime":1505372614157,       //创建时间
            "updateTime":1505372614157,
            "corporationId":"Uq08cj71400000", //企业ID
            "messageType":"flow"              //消息类型
        }
    ]
}
```
