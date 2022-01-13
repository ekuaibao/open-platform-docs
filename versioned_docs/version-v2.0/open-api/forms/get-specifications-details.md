# 根据模版类型和ID获取历史模板信息

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
| **id** | String | 模板ID | 必填 | - | 如果类型为 bill，则传[获取单据列表](/docs/open-api/flows/get-forms-sequences)中单据信息里 `docData.specificationId` 的值 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	| 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**        | String  | 模板类型    | 必填 | - | 固定值：`bill`（现在只支持这一种）|

## CURL
```json
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
模板ID参数错误的情况下， 返回此响应数据：
```json
{
    "errorCode": 412,
    "errorMessage": "未知的模板",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

`type` 传值错误， 暂时只支持 `bill` 一种类型， 返回此响应数据：
```json
{
    "errorCode": 412,
    "errorMessage": "不支持的模板类型",
    "errorDetails": null,
    "code": null,
    "data": null
}
```