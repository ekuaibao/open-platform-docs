# 获取单据pdf文件流

根据单据id，获取单据根据打印模板生成的pdf文件流。

{% httpverb "get" %} /api/openapi/v1/flowDetails/getFlowsPdf/[`ids`] {% endhttpverb %}

#### Path Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **ids** | Array<String>  |单据的id|必填| - |  通过其他api接口获取或者出站消息|

>⚠️ 注意：
>
> ids的多个单据id请求时格式示例：[zKIbl2WX4I8I00,I8I00zKIbl2WX4,zKIbI00l2WX4I8]
> 打印的单据必须所属为同一员工

#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  |认证token      |必填    | - |  [通过授权接口获取](/getting-started/auth.html)  |


<br/>
#### CURL:
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/flowDetails/getFlowsPdf/[yd4bn1Z-YM9000]?accessToken=cWEbn1cA0kjU00'
```
<br/>


#### 成功响应:

 一个pdf文件,文件名为单据id

 例如下图：

![单据pdf流](\flows\images\单据pdf流返回.png)
