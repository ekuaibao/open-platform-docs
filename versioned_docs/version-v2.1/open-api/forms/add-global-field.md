# 在单据模板中追加全局字段
把全局字段名称添加到对应的单据模板id上，向单据模板中添加全局字段。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/specifications/addProperty"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**| String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**parameters**               | Array  | 字段信息     | 必填  | - | 字段详细信息 | 
|**&emsp; ∟ propertyLabel** | String | 字段名称     | 必填  | - | 字段名称 | 
|**&emsp; ∟ targetId**      | String | 单据模板id   | 必填  | - | 通过 [获取当前版本单据模板列表](/docs/open-api/forms/get-specifications-latest) 获取 | 
|**&emsp; ∟ positionNum**   | Number | 字段添加位置  | 非必填 | - | 如果不填则在最后添加 | 

:::tip
- 「**法人实体**」只能配置在单据模板中；
- 「**企业已付金额**」只能配置在报销单模板中；
- 「**结算方式**」只能配置在报销单、申请单模板中。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/specifications/addProperty?accessToken=f8QbuH2hwQ5E00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "parameters":[
        {
            "propertyLabel": "发票类型",
            "targetId": "GQgbu2n6osbI00"
        },
        {
            "propertyLabel": "法人实体",
            "targetId": "GQgbu2n6osbI00",
            "positionNum": 5
        }
    ]
}'
```

## 成功响应
:::caution
- 响应需要判断HTTP状态码来确定是否成功，响应成功时无内容返回。
:::

```text
code 204
```

## 失败响应
当添加字段在单据模板中已存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "全局字段【发票类型】已在模板【日常报销单】配置",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

