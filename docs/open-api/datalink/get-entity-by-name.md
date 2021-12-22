# 根据名称查询自建应用(自定义扩展)

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/datalink/getPlatformByName"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name** | String | 应用名称/扩展名称 | 必填 | - | 自建应用（自定义扩展）名称 |

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
        "name": "自定义扩展测试1111",
        "nameSpell": "HULIANCESHI11",
        "icon": {
            "key": "applet-ekb-web2-b93dbb8d-23ca-4386-a339-e075844d8440-2.png",
            "fileId": "DLIbrAHda85Q00",
            "fileName": "2.png"
        },
        "id": "PgQbrAHda85Y00",
        "importMethod": [],
        "adminIds": [
            "34A73EyI8A0w00:Kh0bnmDTrU9g00"
        ],
        "type": "DATA_LINK",
        "groupType": "NORMAL",
        "properties": null
    }
}
```


