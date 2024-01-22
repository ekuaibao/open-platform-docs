# 根据名称查询自建应用

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/datalink/getPlatformByName"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name** | String | 应用名称 | 必填 | - | 应用名称/自定义扩展名称 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/datalink/getPlatformByName?accessToken=cxEbrzNJSA3A00' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "自定义扩展测试1111"
}'
```

## 成功响应
```json
{
    "value": {
        "version": 1,
        "active": true,
        "createTime": 1597657662045,
        "updateTime": 1597657662045,
        "corporationId": "34A73EyI8A0w00",
        "name": "自定义扩展测试1111",     //应用名称
        "nameSpell": "HULIANCESHI11",
        "icon": {                       //应用图标
            "key": "applet-ekb-web2-b93dbb8d-23ca-4386-a339-e075844d8440-2.png",
            "fileId": "DLIbrAHda85Q00",
            "fileName": "2.png"
        },
        "id": "PgQbrAHda85Y00",        //应用ID
        "importMethod": [], 
        "adminIds": [                  //管理员ID
            "34A73EyI8A0w00:Kh0bnmDTrU9g00"
        ],
        "type": "DATA_LINK",           //应用类别
        "groupType": "NORMAL",
        "properties": null,
        "source": "CUSTOM_CREATE"      //来源，CUSTOM_CREATE：用户自建
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"value": null}` | 为空表示没有查询到自建应用数据<br/>请确认 `name`（应用名称）是否存在 | 


