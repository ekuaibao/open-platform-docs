# 编辑自定义扩展

import Control from "../../../components/Control";

<Control
method="PUT"
url="/api/openapi/v2/datalink/editPlatform"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth)  |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id**       | 平台id  | String              | 必填 | - | - |
| **name**     | 平台名称 | String              | 必填 | - | - |
| **adminIds** | 管理员id | Array&lt;String&gt; | 必填 | - | - |

:::danger
由于历史迭代遗留问题，该接口暂时只支持编辑管理员，但是参数`name`依然必填。
:::

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/datalink/editPlatform?accessToken=cxEbrzNJSA3A00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "互联测试1111",
    "adminIds": ["34A73EyI8A0w00:Kh0bnmDTrU9g00", "34A73EyI8A0w00:o1k9Z1bTXAfY00"],
    "id": "PgQbrAHda85Y00"
}'
```

## 成功响应
```json
{
    "value": {
        "version": 11,
        "active": true,
        "createTime": 1597657662045,
        "updateTime": 1597657662045,
        "corporationId": "34A73EyI8A0w00",
        "name": "互联测试11",
        "nameSpell": "HULIANCESHI11",
        "icon": {
            "key": "applet-ekb-web2-b93dbb8d-23ca-4386-a339-e075844d8440-2.png",
            "fileId": "DLIbrAHda85Q00",
            "fileName": "2.png"
        },
        "id": "PgQbrAHda85Y00",
        "importMethod": [],
        "adminIds": [
            "34A73EyI8A0w00:o1k9Z1bTXAfY00",
            "34A73EyI8A0w00:Kh0bnmDTrU9g00"
        ],
        "type": "DATA_LINK",
        "groupType": "NORMAL",
        "properties": null
    }
}
```


## 失败响应
请确保编辑的平台 id 是真实存在的，否则会返回如下响应：
```text
无效的平台id
```


