# 城市组详情

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v1/cityGroup/detail/search"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 通过授权接口获取 | 必填 | - |  [通过授权接口获取](/docs/open-api/getting-started/auth) |


## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **cityGroupId** | String | 城市组id  | -	  | - | [通过获取城市组列表获取](/docs/open-api/city/get-city-group) |
| **keyword**     | String | 搜索关键字 | 非必填 | - | 人员名称或角色名称 |

## CURL
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/detail/search?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "cityGroupId": "wC0cPu1DNY1400",
    "keyword": null
}'
```

## 成功响应
```json
{
    "count": 1,
    "items": [
        {
            "roleIds": [
                "KtEcDd3_nNS000"
            ],
            "staffIds": [
                "AdMbpirnlY2Q00:HEQbpirnlYgk00"
            ],
            "cityIds": [ //城市id列表
                "1", "2", "19", "20"
            ]
        }
    ]
}
```
