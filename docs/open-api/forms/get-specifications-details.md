# 根据模板类型和ID获取历史模板信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/specifications/$`id`"
/>

:::caution
- 该接口只是提供历史版本模板信息。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 模板ID | 必填 | - | 如果类型为 `bill`，则传 [获取单据列表](/docs/open-api/flows/get-forms-details-byStaff) 中单据信息里 `items.form.specificationId` 的值 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	| 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **type**        | String  | 模板类型    | 必填 | - | 固定值：`bill`（现在只支持这一种）|

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/specifications/$C20bu2n6osbc00:ebd338960d9053892b3fd86dfa6f31690d014de7?accessToken=qUMbutefrU8U00&type=bill' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "value": {
        "id": "C20bu2n6osbc00:ebd338960d9053892b3fd86dfa6f31690d014de7",  //单据模板版本ID
        "name": "差旅报销单",                                              //单据模板名称
        "originalId": "C20bu2n6osbc00",                                   //单据模板ID
        "active": true                                                    //是否启用
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 未知的模板 | 请确认 `id`（模板ID）是否正确 |
| **412** | - | 不支持的模板类型 | 请确认 `type`（模板类型）是否为 **备注** 中的固定值 |
