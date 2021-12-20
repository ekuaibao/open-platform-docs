# 获取单据审批状态
{% httpverb "get" %} /api/openapi/v1/approveStates/[`ids`] {% endhttpverb %}

#### Path Parameters:

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **ids** | String  |单据的id|

#### Query Parameters:

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **accessToken** | String  |通过授权接口获取。      |


#### Response:
```json
{
  "items": [{
    "flowId": "xxx",          // 单据id
    "stageName": "出纳支付",   // 审批节点名称
    "operators": [{           // 审批人列表，来自员工信息
      "id": "xxx",            // 审批人id
      "name": "王大锤",        // 审批人姓名
      "code": "15091"         // 审批人工号
    }]
  }]
}
```
















