# 获取单据风险标签

{% httpverb "get" %}  /api/openapi/v2/invoice/risk/label/`ids` {% endhttpverb %}



#### Path Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **ids** | Array<String>   | 单据集合   | 必填      | - | - |



#### Query Parameters:

| 名称             | 类型     | 描述        | 是否必填      | 默认值 | 备注                                         |
| :---------      | :------  | :------    | :------- |:---------| :------------------------------------------  |
| **accessToken** | String   | 认证token  | 必填      | - |  [通过授权接口获取](/getting-started/auth.html)  |


<br/>
#### CURL:
```json
curl --location --request GET 'http://app.ekuaibao.com/api/openapi/v2/invoice/risk/label/[j7sbyDMhYUpU00]?accessToken=ZyEbyCA-_Auk00'
```
<br/>

#### 成功响应:
```json
{
    "items": [
        {
            "flowId": "j7sbyDMhYUpU00",
            "details": [
                {
                    "detailId": "hwhoupBjAvQ2ha",
                    "riskTags": [
                        {
                            "tagName": "存在疑似发票重复",
                            "type": "INVOICE_REPEAT_VERIFICATION",
                            "invoiceId": "gwobfjObAAno00:3700171320:38415400"
                        }
                    ],
                    "invoiceTotal": 2,
                    "noCompliance": 1,
                    "compliance": 1
                }
            ],
            "invoiceTotal": 2,
            "noCompliance": 1,
            "compliance": 1
        }
    ]
}
```

#### 失败响应:
参数`ids`为必填项，不可为空，否则请求无效，返回状态码为404

```json
{
      "servlet": "org.glassfish.jersey.servlet.ServletContainer-23df29c6",
      "message": "Not Found",
      "url": "/api/openapi/v2/invoice/risk/label/[]",
      "status": "404"
}
```



