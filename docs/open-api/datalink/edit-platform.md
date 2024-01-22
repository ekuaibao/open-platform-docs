# 更新自建应用

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2.1/datalink/editPlatform"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.2.0**](/docs/open-api/notice/update-log#120) -> 🚀 接口升级 `v2.1` 版本，新增了支持更新应用名称，对 `adminIds`（管理员ID）做参数真实性校验。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken`  |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id**       | String | 应用ID  | 必填 | - | 应用ID/自定义扩展ID |
| **name**     | String | 应用名称 | 必填 | - | 应用名称/自定义扩展名称 |
| **adminIds** | Array  | 管理员ID | 非必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |

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

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 无效的平台id | 请确认要更新的 `应用ID/平台ID` 是否真实存在 | 
| **400** | - | ID为'bwa3wajigF0WH0:ID_3wlg6bv9UGg·'的员工不存在 | 请确认 `adminIds`（管理员ID）是否真实存在 | 
| **400** | - | 自建应用名称不能为空 | 请确认 `name`（应用名称）是否为空 | 
