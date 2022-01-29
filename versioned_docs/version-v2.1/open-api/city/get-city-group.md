# 获取城市组列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/cityGroup/search"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填   | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **keyword**     | String | 查询关键字 | 非必填 | - | 按城市组名称搜索，支持模糊查询 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/cityGroup/search?accessToken=ID_3wA7iWV0ac0:Urf3lsFgBp00gw&keyword=22'
```

## 成功响应
```json
{
    "count": 1,
    "items": [
        {
            "pipeline": 1,
            "id": "As0c0vI1uk7g00",  //城市组ID
            "version": 10,
            "active": true,         
            "createTime": 1607569090433,
            "updateTime": 1607571367488,
            "name": "华北区",         //城市组名称
            "desc": "北京天津",       //城市组描述
            "status": true,          //是否启用
            "cityGroup": [],         //城市组明细, 在列表中返回为[]
            "corporationId": "AdMbpirnlY2Q00"
        }
    ]
}

```
