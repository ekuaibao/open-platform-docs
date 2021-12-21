# 获取结算方式列表


{% httpverb "get" %}  /api/openapi/v2/settlement {% endhttpverb %}


#### Query Parameters:

| 名称             | 类型     |  描述     | 必填      | 默认值  | 备注                                         |
| :---------      | :------  | :------  | :------- |  :-     | :------------------------------------------  |
| **accessToken** | String |  认证token  | 必填      |   -    | [通过授权接口获取](/getting-started/auth.html)  |





<br/>
#### CURL:
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/settlement?accessToken=gLQbAz0Rs44E00'
```


<br/>
#### 成功响应:
```json
{
    "items": [
        {
            "id": "i50bAzG2FImo00",
            "name": "按月结",
            "opportunity": "事后统一结算",
            "period": "月"
        },
        {
            "id": "thYbAzsJXg7g00",
            "name": "商城结算",
            "opportunity": "随单支付",
            "period": null
        }
    ]
}
```

