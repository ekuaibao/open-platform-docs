# 获取单据审批状态
根据单据id获取到当前单据执行到的审批流程信息

{% httpverb "get" %} /api/openapi/v1/approveStates/[`ids`] {% endhttpverb %}

#### Path Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **ids** | Array<String>  |单据的id|必填| - |  通过其他api接口获取或者出站消息|

>⚠️ 注意：

>ids的多个单据id请求时格式示例：[zKIbl2WX4I8I00,I8I00zKIbl2WX4,zKIbI00l2WX4I8]

#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  |通过授权接口获取。      |必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |


<br/>
#### CURL:

```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/approveStates/[yd4bn1Z-YM9000,ID_3sJUVscs$_w]?accessToken=UvsbtOEHTsk000'
```
<br/>


#### 成功响应:

```json
{
    "items": [
        {
            "flowId": "xxx",          // 单据id
            "stageName": "出纳支付",   // 审批节点名称
            "operators": [    // 审批人列表，来自员工信息
                {     
                    "id": "xxx",            // 审批人id
                    "name": "王大锤",        // 审批人姓名
                    "code": "15091"         // 审批人工号
                }
            ],
            "delegateData": []
        },
        {
            "flowId": "ID_3seTcgi0qrg",
            "stageName": "完成",
            "operators": [],
            "delegateData": []
        }
    ]
}
```

#### 失败响应:

```json
{
    "items": []   //请检查对应的单据id是否正确
}
```