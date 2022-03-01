# 更新自建应用

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2.1/datalink/editPlatform"
/>

<details>
  <summary>v2.1版本特性</summary>
  <div>
    - 🐞 新增了支持更新应用名称，对 adminIds（管理员ID）做参数真实性校验。
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth)  |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id**       | String | 应用ID  | 必填 | - | 应用ID/自定义扩展ID |
| **name**     | String | 应用名称 | 必填 | - | 应用名称/自定义扩展名称 |
| **adminIds** | Array  | 管理员ID | 非必填 | - | [员工ID获取](/docs/open-api/corporation/get-staff-ids) |

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.1/datalink/editPlatform?accessToken=cxEbrzNJSA3A00' \
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
        "name": "互联测试11",             //应用名称
        "nameSpell": "HULIANCESHI11",  
        "icon": {                        //应用图标
            "key": "applet-ekb-web2-b93dbb8d-23ca-4386-a339-e075844d8440-2.png",
            "fileId": "DLIbrAHda85Q00",
            "fileName": "2.png"
        },
        "id": "PgQbrAHda85Y00",         //应用ID
        "importMethod": [], 
        "adminIds": [                   //管理员ID
            "34A73EyI8A0w00:o1k9Z1bTXAfY00",
            "34A73EyI8A0w00:Kh0bnmDTrU9g00"
        ],
        "type": "DATA_LINK",            //应用类别
        "groupType": "NORMAL",
        "properties": null
    }
}
```



## 失败响应
请确保要更新的 `应用ID/平台ID` 是真实存在的，否则会返回如下响应：
```json
{
    "errorCode": 400,
    "errorMessage": "无效的平台id",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `adminIds`（管理员ID）不存在时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "ID为'bwa3wajigF0WH0:ID_3wlg6bv9UGg·'的员工不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `name`（应用名称）传 `""` 时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "自建应用名称不能为空",
    "errorDetails": null,
    "code": null,
    "data": null
}
```