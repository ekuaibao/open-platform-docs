# 附件下载
通过附件的 `id` ， `key` 去获取附件的下载链接

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/attachment/downloadurls"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 通过授权接口获取 | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id**         | String | 通过获取单据详情获取 | 必填 | - | 对应单据详情中的 `attachments` 字段的 `fileId` |
| **key**        | String | 通过获取单据详情获取 | 必填 | - | 对应单据详情中的 `attachments` 字段的 `key` |
| **expiration** | Number | 下载链接过期时间    | 必填 | - | 用户自定义，指获取到的url的过期时间，单位：秒 |

## CURL
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v2/attachment/downloadurls?accessToken=UvsbtOEHTsk000' \
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

:::tip
url是下载的路径，thumbUrl是指缩略图的下载路径。
:::

## 失败响应
请检查请求的方式正确的Method是POST方式：
```text
Error 405 Method Not Allowed  
```

为空表示根据您所提供的附件查询信息没有找到对应的附件：
```text
[]
```


