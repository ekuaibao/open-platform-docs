# 获取费用类型列表
获取费用类型所有列表，包括已停用。

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/feeTypes"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/feeTypes?accessToken=cCMbw_mKUs8c00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "JOYbpjPP-E2Q00:bus",              //费用类型id
            "name": "巴士",                          //费用类型名称
            "parentId": "JOYbpjPP-E2Q00:longTravel", //父级类型id
            "active": true,                          //是否停用
            "code": "COST53"                         //费用类型编码
        },
        {
            "id": "JOYbpjPP-E2Q00:office",
            "name": "办公用品",
            "parentId": "",
            "active": true,
            "code": "COST1"
        }
    ]
}
```

## 失败响应
```json
{
    "errorCode": 403,
    "errorMessage": "未授权",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
