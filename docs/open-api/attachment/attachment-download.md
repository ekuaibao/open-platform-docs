# 下载附件
通过附件的 `id`、`key` 去获取附件的下载链接。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/attachment/downloadurls"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.6.3**](/docs/open-api/notice/update-log#163) -> 🐞 优化了接口 **HTTP 500** 错误，输出报错信息。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注                                                                                                                                                                                    |
| :--- | :--- | :--- | :--- |:--- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **--**                   | Array  | 外层数组       | 必填  | - | 外层数组 |
| **&emsp; ∟ id**         | String | 文件fileId    | 必填 | - | [上传附件](/docs/open-api/attachment/attachment-upload) 接口返回的 `fileId` 字段<br/>**接口下载单据上的附件时**，可通过 [获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 获取 `attachments` 字段的 `fileId` 值 |
| **&emsp; ∟ key**        | String | 文件key       | 必填 | - | [上传附件](/docs/open-api/attachment/attachment-upload) 接口返回的 `key` 字段<br/>**接口下载单据上的附件时**，可通过 [获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 获取 `attachments` 字段的 `key` 值       |
| **&emsp; ∟ expiration** | Number | 下载链接有效时间 | 必填 | - | 用户自定义，指下载链接在多长时间内有效，暂无上限，单位：秒                                                                                                                                                         |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/attachment/downloadurls?accessToken=UvsbtOEHTsk000' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "id": "61sbwX3DEAgk00",
        "key": "openapi0306c2d1-7a5b-4e96-8172-60c5ee0f971e-kotlin简介.docx",
        "expiration": 1000
    }
]'
```

## 成功响应
:::tip
- **url** 是文件下载路径，**thumbUrl** 是指缩略图的下载路径。
- **thumbUrl** 只针对图片有效，PDF文件生成的链接是不可用的。
:::

```json
[
    {
        "id": "61sbwX3DEAgk00",
        "key": "openapi0306c2d1-7a5b-4e96-8172-60c5ee0f971e-kotlin简介.docx",
        "url": "https://ekuaibao.oss-cn-hangzhou.aliyuncs.com/openapi0306c2d1-7a5b-4e96-8172-60c5ee0f971e-kotlin%E7%AE%80%E4%BB%8B.docx?Expires=1599099810&OSSAccessKeyId=STS.NUTdxysMYQXwZApA734jgqnJb&Signature=wTRfcimdrHhXbL3efe8MftOSOmo%3D&security-token=CAIS8AF1q6Ft5B2yfSjIr5bhL8LNnpJ45pqcWGfBpTdmOOVLnqvhgDz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapPbRkWwXEXzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAFRCqgjZY6QvIiWMtTWb7UIfba4ebfujIHa7cn7sA3r0vGyNUnObhl5H5zW4cc%2FM%2FiHehACg83wRu189TUg4Qt5MRZ0KuYre7mpa4NWPJpcILHkRjLBR2YoL6Z27iqhNbtcZoezq%2B4ky3N60IIaXhUoYJcteXtru12W%2BiLzfiB%2FuA%3D%3D",
        "thumbUrl": "https://ekuaibao.oss-cn-hangzhou.aliyuncs.com/openapi0306c2d1-7a5b-4e96-8172-60c5ee0f971e-kotlin%E7%AE%80%E4%BB%8B.docx?Expires=1599099810&OSSAccessKeyId=STS.NUTdxysMYQXwZApA734jgqnJb&Signature=evQnFfd4YhL5zkFMovDl9ZfVdlw%3D&x-oss-process=image%2Fresize%2Cw_120%2Ch_120&security-token=CAIS8AF1q6Ft5B2yfSjIr5bhL8LNnpJ45pqcWGfBpTdmOOVLnqvhgDz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapPbRkWwXEXzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAFRCqgjZY6QvIiWMtTWb7UIfba4ebfujIHa7cn7sA3r0vGyNUnObhl5H5zW4cc%2FM%2FiHehACg83wRu189TUg4Qt5MRZ0KuYre7mpa4NWPJpcILHkRjLBR2YoL6Z27iqhNbtcZoezq%2B4ky3N60IIaXhUoYJcteXtru12W%2BiLzfiB%2FuA%3D%3D"
    }
]
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{[]}` | 为空表示没有找到对应的附件<br/>请确认所提供的附件查询信息是否正确 | 


