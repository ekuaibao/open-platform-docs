# 获取单据抄送消息


{% httpverb "get" %} /api/openapi/v1/carbonCopy/getCarbonCopy?accessToken=&flowId=&receiverId= {% endhttpverb %}




### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  | 授权token     |必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |
| **flowId** | String  | 单据ID     |必填   | - |  -  |
| **receiverId** | String  | 接收人Id/单据被抄送人Id必填     |必填   | - |  -  |





### CURL:
```json
   curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/carbonCopy/getCarbonCopy?accessToken=FdAcjUU3HM0s00&flowId=J4ccjUq08pRU00&receiverId=FF0c6gsq-gl400:dIEbu2mgTs6o00' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json'
```

### 成功响应:
```json
{
      "value": {
            "id": "O6YcjUq08pUw00",
            "version": 1,   
            "active": true, 
            "createTime": 1613618785090,
            "updateTime": 1613618785090,
            "corporationId":  "FF0c6gsq-gl400",     //  企业ID
            "receiverId": "FF0c6gsq-gl400:dIEbu2mgTs6o00",  //接收人Id;单据被抄送人Id
            "senderId": null, //发送人Id;单据发送人Id
            "flowId": "J4ccjUq08pRU00", //单据ID
            "state": "UNREAD",  //状态(READ=已读, UNREAD=未读)
            "type": "requisition" //单据类型
      }
}
```


### 失败响应:
```json
  单据抄送消息不存在
```