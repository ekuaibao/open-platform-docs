# 创建城市组

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/cityGroup/create"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name** | String | 名称 | 必填  | - | 名称 |
| **desc** | String | 描述 | 非必填 | - | 描述 |

## CURL
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/create?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "name": "openapi城市组",
      "desc": "通过openapi创建的城市组"
}'
```

## 成功响应
```json
{
    "value": {
    "pipeline": 1,
    "id": "wC0cPu1DNY1400",  //城市组ID
    "version": 1,
    "active": true,          //是否有效
    "createTime": 1621252554481,
    "updateTime": 1621252554481,
    "name": "openapi城市组",
    "desc": "通过openapi创建的城市组",
    "status": true,          //是否启用: true-启用, false-停用
    "cityGroup": [],         //城市组明细
    "corporationId": "AdMbpirnlY2Q00"
    }
}
```
