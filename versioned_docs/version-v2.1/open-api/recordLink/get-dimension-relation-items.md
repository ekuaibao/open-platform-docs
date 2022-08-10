# 获取某档案关系下的档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/recordLink/getRecordLinkList/$`id`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 档案关系ID | 必填 | - | 通过 [获取企业下档案关系列表](/docs/open-api/recordLink/get-dimension-relation) 获取 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **primary** | String  | 查询维度	| 非必填  | sourceType | `sourceType` : 源维度 &emsp; `purposeType` : 目标维度 |
| **keyword** | String  | 搜索关键字	| 非必填  | -          | 搜索关键字，对应维度下的数据名称 |
| **start**   | Int     | 查询开始值	| 非必填  | 0          | 从 `0` 开始 |
| **count**   | Int     | 查询记录数	| 必填    | -          | `0` < `count` ≤ `100` |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/recordLink/getRecordLinkList/$qyMbXMvgBgaU00?accessToken=73QbYDmzCc6I00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "primary": "purposeType", //sourceType=源维度; purposeType=目标维度
    "keyword": "",
    "start": 0,
    "count": 20
}'
```

## 成功响应
:::caution
- 响应数据根据维度关系的不同返回的数据详情不同。
:::

```json
{
    "data": { 
        "total": 1,  //档案关系总记录数
        "items": [
            {
                "qyMbXMvgBgaU00:sourceType": {     //源维度信息
                    "id": "ltAbQUtfE03k00:office", //源维度ID
                    "code": "COST1",
                    "icon": "https://images.ekuaibao.com/feetype/sf_1800.png",
                    "name": "办公用品",
                    "color": "#f9a825",
                    "active": true,
                    "version": 1,
                    "editorId": null,
                    "parentId": "",
                    "nameSpell": "BANGONGYONGPIN",
                    "createTime": 1604451726771,
                    "updateTime": 1604451726771,
                    "description": null,
                    "corporationId": "ltAbQUtfE03k00",
                    "expenseSpecificationId": "ltAbQUtfE03k00:office:expense:f4576a9785f1e7b056b7653a880da64e07bf3588",
                    "requisitionSpecificationId": "ltAbQUtfE03k00:office:requisition:4f039e78352b627928430324ee7821d262a713c9"
                },
                "qyMbXMvgBgaU00:purposeType": [                //目标维度信息
                    {
                        "id": "ltAbQUtfE03k00:HCUbu2mgTseg00", //目标维度ID
                        "code": "",
                        "name": "李凤",
                        "note": null,
                        "email": "",
                        "order": null,
                        "active": true,
                        "avatar": null,
                        "userId": "HCUbu2mgTseg00",
                        "version": 1,
                        "external": false,
                        "cellphone": "13928488397",
                        "nameSpell": "LIFENG",
                        "createTime": 1605670631368,
                        "updateTime": 1605670631368,
                        "departments": [
                              "ltAbQUtfE03k00:zE8bTFJSqo1k00"
                        ],
                        "corporationId": "ltAbQUtfE03k00",
                        "defaultDepartment": "ltAbQUtfE03k00:zE8bTFJSqo1k00"
                    }
                ]
            }
        ]
    },
    "header": [                                 //档案关系头
        {
            "name": "费用类型",                  //源维度名称
            "typeValue": "",
            "id": "qyMbXMvgBgaU00:sourceType",  //源维度类别ID
            "type": "flow.FeeType"
        },
        {
            "name": "员工",                       //目标维度名称
            "typeValue": "",
            "id": "qyMbXMvgBgaU00:purposeType",  //目标维度类别ID
            "type": "organization.Staff"
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | primary 无效！ | 请确认维度查询条件参数是否正确 | 
