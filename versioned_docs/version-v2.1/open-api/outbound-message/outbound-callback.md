# 外部服务回调审批接口
EBot调用出站消息后，目标服务器收到消息并进行外部处理，处理后调用此接口（目前只支持EBot节点的审批），通知Ebot执行**"同意"**或**"驳回"**操作。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/outbound/v1/approval"
/>

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **signKey**  | String | 签名秘钥(系统分配) | 必填  | - | 通过出站消息配置上获取 |
| **flowId**   | String | 单据ID	          | 必填  | - | 通过出站消息获取 |
| **nodeId**   | String | 节点ID	          | 必填  | - | 通过出站消息获取 |
| **action**   | String | 审批动作	      | 必填  | - | `accept` : 同意 &emsp; `refuse` : 驳回 |
| **comment**  | String | 审批意见          | 必填  | - | 审批意见 |
| **rejectTo** | String | 驳回的节点ID      | 非必填 | - | 填写需要驳回的节点ID，可根据单据ID<br/>通过[获取单据详情](/docs/open-api/flows/get-forms-details)中的 `logs`（审批日志）获取 |

:::tip
![image](images/出站参数获取.png)
![image](images/接口介绍.png)
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/outbound/v1/approval?accessToken=Un0bxmbZ0w8c00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "signKey":"5hPoHsymNqEf",
    "flowId":"MK48h7s2yQ6Y00",
    "nodeId":"FLOW:251847192:631543649",
    "action":"accept",
    "comment":"同意",
    "rejectTo": ""
}'
```

## 成功响应
```json
{
	"value":{
        "code":"204",            //返回编码
        "message":"EBot执行完成"  //返回消息
    }
}
```

## 失败响应
```json
{
    "value": {
        "code": "401",
        "message": "签名秘钥错误企业"
    }
}
```

## message补充说明

| 参数 | 说明 |
|:--- |:--- |
| **204** | EBot执行完成 |
| **400** | 请求参数错误 |
| **401** | 签名秘钥错误 |
| **412** | 异常message |
| **500** | EBot审批失败 |
















