# 获取城市组列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/cityGroup/search"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 通过授权接口获取 | 必填   | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **keyword**     | String | 查询关键字      | 非必填 | - | 按城市组名称搜索 |

## CURL
```shell
curl --location --request GET 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/search?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "count": 1,
    "items": [
        {
            "pipeline": 1,
            "id": "As0c0vI1uk7g00",
            "version": 10,
            "active": true,
            "createTime": 1607569090433,
            "updateTime": 1607571367488,
            "name": "华北区",
            "desc": "北京天津",
            "status": true,
            "cityGroup": [],  // 城市组明细, 在列表中返回为[]
            "corporationId": "AdMbpirnlY2Q00"
        }
    ]
}

```
