# 获取城市组详情

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/cityGroup/detail/search"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**0.7.135**](/docs/open-api/notice/update-log#07135) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - |  通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |


## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **cityGroupId** | String | 城市组ID  | 必填  | - | 通过 [获取城市组列表](/docs/open-api/city/get-city-group) 获取 |
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
            "cityIds": [ //城市ID列表
                "1", "2", "19", "20"
            ]
        }
    ]
}
```
