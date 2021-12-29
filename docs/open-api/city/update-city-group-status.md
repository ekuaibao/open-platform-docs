# 启用/禁用城市组

import Control from "../../../components/Control";

<Control
method="PUT"
url="/api/openapi/v1/cityGroup/updateStatus/$`id`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 城市组id | 必填 | - | [通过获取城市组列表获取](/docs/open-api/city/get-city-group) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 通过授权接口获取 | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **status** | Boolean | 状态 | 必填 | - | - |

## CURL
```json
curl --location --request PUT 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/updateStatus/$wC0cPu1DNY1400?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "status": false
}'
```

## 成功响应
```json
{
    "value": {
        "success": true,
        "message": ""
    }
}
```
