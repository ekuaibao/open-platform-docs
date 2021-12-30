# 编辑某档案关系下的档案项数据

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/recordLink/editSingle/$`id`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 档案关系ID | 必填 | - | [获取企业下档案关系列表](/docs/open-api/recordLink/get-dimension-relation) | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **recordLinks**                 | Array   | 批量更新项	| 必填  | - | 批量更新项 |
| **&emsp; ∟ oldSourceValue**  | String  | 旧源维度	| 必填  | - | 旧源维度 |
| **&emsp; ∟ oldPurposeValue** | String  | 旧目标维度	| 必填  | - | 旧目标维度 |
| **&emsp; ∟ newSourceValue**  | String  | 新源维度	| 必填  | - | 新源维度 |
| **&emsp; ∟ newPurposeValue** | String  | 新目标维度  | 必填  | - | 新目标维度 |

## CURL
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v2/recordLink/editSingle/$3TIc6HKjTQio00?accessToken=BCoc8Rbufou000' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "recordLinks": [
        {
            "oldSourceValue": "FF0c6gsq-gl400:afgc6XITKkrM00",
            "oldPurposeValue": "FF0c6gsq-gl400",
            "newSourceValue": "FF0c6gsq-gl400:cygc6H4-IwmE00",
            "newPurposeValue": "FF0c6gsq-gl400"
        }
    ]
}'
```

## 成功响应
```text
关系更新成功
```

## 失败响应
```json
{
    "errorCode": 412,
    "errorMessage": "旧档案关系不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

