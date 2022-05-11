# 上传附件
文件上传后系统返回文件服务器对应的文件 **key** 和 **fileId**，提供给其他接口使用，例如单据创建的时候，带附件一起上传。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/attachment/upload"
/>

:::danger
- 附件最大不能超过 **30MB**，否则会报错**“上传附件大小不可超过30Mb”**。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name** | String | 文件名称 | 必填 | - | 不可为空，会报错<br/>不支持的特殊字符：? \ / * < > : " \| |
| **file** | file   | 文件内容 | 必填 | - | 此处保存的是文件流 |

:::tip
body的格式是form-data，file字段是文件类型，如下所示：
```text
form-data {
   name
   file
}
```
:::

## CURL
```shell
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v2/attachment/upload?accessToken=XRcbwWBTassg00' \
--form 'name=kotlin简介.docx' \
--form 'file=@/C:/Users/27537/Documents/kotlin简介.docx'
```

## 成功响应
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

## 失败响应
附件最大不能超过30MB，否则报如下错误：
```json
{
    "errorCode": 412,
    "errorMessage": "上传附件大小不可超过30Mb",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

**Body Parameters** 参数 `file` 写成 `files` 时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "空指针异常",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

文件名不合法时，将会返回：
```json
{
    "errorCode": 400,
    "errorMessage": "参数name不能为空，且必须为合法的文件名",
    "errorDetails": null,
    "code": null,
    "data": null
}
```