# 根据模版ID获取历史模板信息
根据模板类型和模板id获取历史模板信息

>⚠️ 注意：

>该接口只是提供历史版本模板信息。

{% httpverb "get" %} /api/openapi/v1/specifications/$`id` {% endhttpverb %}

#### Path Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **id** | String  | 模板ID | 必填 | - | 如果类型为bill，则传[获取单据列表](/flows/get-forms-sequences.html)中，单据信息里的docData.specificationId的值  |

#### Query Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String  | 认证token	| 必填 | - | [通过授权接口获取](/getting-started/auth.html) |
| **type** | String  | 模板类型  | 必填    | - | 固定值：`bill`（现在只支持这一种）  |

<br/>

### CURL:
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/specifications/$C20bu2n6osbc00:ebd338960d9053892b3fd86dfa6f31690d014de7?accessToken=qUMbutefrU8U00&type=bill' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

<br/>

#### 成功响应:
```json
{
    "value": {
        "id": "C20bu2n6osbc00:ebd338960d9053892b3fd86dfa6f31690d014de7",  //模板ID
        "name": "差旅报销单",    //模板名称
        "originalId": "C20bu2n6osbc00", //原模板ID
        "active": true    //是否启用
    }
}
```

#### 失败响应:
模板ID参数错误的情况下， 返回此响应数据。
```json
{
    "errorCode": 412,
    "errorMessage": "未知的模板",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

type传值错误， 暂时支持bill一种类型， 返回此响应数据。
```json
{
    "errorCode": 412,
    "errorMessage": "不支持的模板类型",
    "errorDetails": null,
    "code": null,
    "data": null
}
```