# 修改城市组

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/cityGroup/update/$`id`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String  | 城市组id |必填   | - | [通过获取城市组列表获取](/docs/open-api/city/get-city-group) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 通过授权接口获取 | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name** | String | 名称 | 必填  | - | 名称 |
| **desc** | String | 描述 | 非必填 | - | 描述 |

## CURL
```json
curl --location --request PUT 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/update/$wC0cPu1DNY1400?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "name": "开放城市组",
      "desc": "通过openapi修改的城市组"
}'
```

## 成功响应
```json
{
    "value": {
        "pipeline": 1,
        "id": "wC0cPu1DNY1400",
        "version": 2,
        "active": true,
        "createTime": 1621252554481,
        "updateTime": 1621252554481,
        "name": "开放城市组",
        "desc": "通过openapi修改的城市组",
        "status": true,
        "cityGroup": [],
        "corporationId": "AdMbpirnlY2Q00"
    }
}
```
