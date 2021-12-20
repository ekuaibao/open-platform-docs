# 获取附件URL
通过附件的id,key去获取附件的下载链接
{% httpverb "post" %} /api/openapi/v2/attachment/downloadurls?accessToken=JBI99_c0lQ7800 {% endhttpverb %}

#### Query Parameters:
| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  |通过授权接口获取。      |必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |


#### Body Parameters:
| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **id** | String  |通过获取单据详情获取      |必填   | - |  对应单据详情中的attachments字段的fileId|
| **key** | String  |通过获取单据详情获取       |必填   | - |  对应单据详情中的attachments字段的key|
| **expiration** | Number  |下载链接过期时间     |必填   | - |  用户自定义，指获取到的url的过期时间，单位：秒|


<br/>
#### CURL:
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/attachment/downloadurls?accessToken=UvsbtOEHTsk000' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "id": "IxMbtPjkyw3o00",
        "key": "kotlin简介-1598255858633-639.docx",
        "expiration": 1000
    }
]'
```
<br/>


#### 成功响应:
```json
 [
    {
        "id": "Y_c99_a9zsdM00",//文件id
        "key": "data3-1558577344090-553.txt",//文件key
        "url": "https://vipimg.ekuaibao.com/data3-1558577344090-553.txt?e=1558597157&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:z5JtshnOjvfAtJ_bL2eXcilsHT8=",//必返回，原附件文件下载地址
        "thumbUrl": "https://vipimg.ekuaibao.com/data3-1558577344090-553.txt?imageView2/1/w/120/h/120&e=1558597157&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:h8d0zHQgxwquq5jbU2Li4jqBTx0="//必反回，缩略图下载路径（如果非图片，就和url一样）
    }
]
```
>⚠️ 注意：

>url是下载的路径，thumbUrl是指缩略图的下载路径


#### 失败响应:
```
如果返回：Error 405 Method Not Allowed  //请检查请求的方式正确的Method是POST方式
如果返回：[]   //表示根据您所提供的附件查询信息没有找到对应的附件
```



