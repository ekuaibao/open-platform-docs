# 上传附件
此接口用用文件上传，提交文件，系统返回文件服务器对应的key和文件fileId，提供给其他接口使用，例如单据创建的时候，携带附件一起上传。

{% httpverb "post" %}  /api/openapi/v2/attachment/upload {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  |通过授权接口获取。      |必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |

#### Body Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **name** | String  | 文件名称   |必填   | - |   - |
| **file** | file    | 文件内容      |必填   | - |  此处保存的是文件流 |

>⚠️ 注意：
> - 附件最大不能超过30MB，否则会报错“**上传附件大小不可超过30Mb**” 
> - body的格式是form-data，file字段是文件类型，如下面
```text
 form-data {
    name
    file
 }
```

<br/>
#### CURL:
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v2/attachment/upload?accessToken=XRcbwWBTassg00' \
--form 'name=kotlin简介.docx' \
--form 'file=@/C:/Users/27537/Documents/kotlin简介.docx'
```
<br/>

#### 成功响应:
```json
 {
    "value": {
        "key": "openapi0306c2d1-7a5b-4e96-8172-60c5ee0f971e-kotlin简介.docx",
        "fileId": "61sbwX3DEAgk00",
        "fileName": "kotlin简介.docx",
        "empty": false
    }
}
```

#### 失败响应:
目前遇到的就是token未授权(token错误或者过期失效)
```json
{
    "errorCode": 403,
    "errorMessage": "未授权",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
附件最大不能超过30MB，否则报如下错误：
```text
上传附件大小不可超过30Mb
```
