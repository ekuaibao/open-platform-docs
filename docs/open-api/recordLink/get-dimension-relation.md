# 获取企业下档案关系列表

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/recordLink/getRoleGroups"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/recordLink/getRoleGroups?accessToken=4vkbY22qkocU00'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "gf4bVQSClE3g00",                        //档案关系ID
            "name": "1与12",                               //档案关系名称
            "sourceType": "basedata.Dimension.项目",        //源维度
            "purposeType": "basedata.Dimension.固定资产类目" //目标维度
        },
        {
            "id": "4GAbXLhPP0go00",
            "name": "收款与档案类别蔡",
            "sourceType": "pay.PayeeInfo",
            "purposeType": "basedata.Dimension.自档案类别蔡"
        },
        {
            "id": "5W8bXsoZl8gw00",
            "name": "所属部门与所在员工",
            "sourceType": "organization.Department",
            "purposeType": "organization.Staff"
        },
        {
            "id": "76EbVvwlyke400",
            "name": "项目与法人",
            "sourceType": "basedata.Dimension.自档案类别蔡",
            "purposeType": "basedata.Dimension.法人实体"
        },
        {
            "id": "8IUbVR8ccckw00",
            "name": "项目与部门",
            "sourceType": "basedata.Dimension.项目",
            "purposeType": "organization.Department"
        },
        {
            "id": "k1IbYjF-GIvw00",
            "name": "法人与部门",
            "sourceType": "basedata.Dimension.法人实体",
            "purposeType": "organization.Department"
        },
        {
            "id": "qyMbXMvgBgaU00",
            "name": "费用类型与员工",
            "sourceType": "flow.FeeType",
            "purposeType": "organization.Staff"
        },
        {
            "id": "sG4bXpOQIE0I00",
            "name": "部门与法人",
            "sourceType": "organization.Department",
            "purposeType": "basedata.Dimension.法人实体"
        }
    ]
}
```

## 失败响应
```json
{
    "errorCode": 412,
    "errorMessage": "查询结果不存在.",
    "errorDetails": null,
    "code": null,
    "data": null
}
```