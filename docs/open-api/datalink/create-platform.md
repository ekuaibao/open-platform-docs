# 创建自建应用(自定义扩展)

import Control from "../../../components/Control";

<Control
method="PUT"
url="/api/openapi/v2/datalink/createPlatform"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name**               | String | 扩展名称   | 必填   | - | 不能超过20个字  |
| **icon**               | Object | 扩展图标   | 非必填 | - | 已上传到服务器的图标参数 |
| **&emsp; ∟ key**      | String | 文件key   | 非必填  | - | 文件key，可通过[上传附件](/docs/open-api/attachment/attachment-upload)获取 |
| **&emsp; ∟ fileId**   | String | 文件id    | 非必填  | - | 文件id，可通过[上传附件](/docs/open-api/attachment/attachment-upload)获取 |
| **&emsp; ∟ fileName** | String | 文件名称   | 非必填  | - | 文件名称，可通过[上传附件](/docs/open-api/attachment/attachment-upload)获取 |
| **type**               | String | 扩展类别   | 非必填  | DATA_LINK | `DATA_LINK` : 业务对象<br/>`IKCRM` : 爱客CRM(爱客只能创建一个，name统一为爱客CRM) |
| **adminIds**           | Array  | 管理员id   | 非必填  | - | 管理员可以导入导出该扩展的所有业务对象数据、修改每条数据的停启用状态、修改每条数据的信息以及负责人和参与人，值为[员工ID](/docs/open-api/corporation/get-all-staffs) |
| **iconUrl**            | String | 网络图片    | 非必填  | - | 如果填写则优先使用此图标。132*132px，大小不超过2M，格式可为jpg、jpeg、png |
| **importMethod**       | Array  | 数据导入方式 | 必填   | - | `excel` : Excel &emsp; &emsp; `api` : API &emsp; `ebot` : EBot <br/> `flow` : 单据写入 &emsp; `directly` : 直接写入 |

:::danger
目前 `importMethod` 为无效字段，即设置后返回为空。此处为历史迭代遗留问题，目前依然需要填写且不为空。
:::

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/datalink/createPlatform?accessToken=cxEbrzNJSA3A00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "互联测试111",
    "icon":{
        "key": "applet-ekb-web2-1556186636163-817-.png",
        "fileId": "yKI91530GIto00",
        "fileName": "tubiao.png"
    },
    "type": "DATA_LINK",
    "importMethod": ["excel", "api"],
    "adminIds": ["34A73EyI8A0w00:Kh0bnmDTrU9g00"],
    "iconUrl": "https://www.ikcrm.com/assets/pc_baidu_ad/2.png"
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
            "34A73EyI8A0w00:Kh0bnmDTrU9g00"
        ],
        "type": "DATA_LINK",
        "groupType": "NORMAL",
        "properties": null
    }
}
```

## 失败响应
互联扩展的 `name` 值需要保证其唯一性，否则会返回如下响应：
```text
扩展名称不能重复
```