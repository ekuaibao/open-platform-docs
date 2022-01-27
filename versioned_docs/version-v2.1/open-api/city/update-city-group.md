# 更新城市组

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/cityGroup/update/$`id`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 城市组ID | 必填 | - | 通过[获取城市组列表](/docs/open-api/city/get-city-group)获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name** | String | 名称 | 必填  | - | 城市组名称 |
| **desc** | String | 描述 | 非必填 | - | 城市组描述 |

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

## 失败响应
`id`（城市组ID）不正确时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "ID_3wAjiZJ1h8M1数据不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
