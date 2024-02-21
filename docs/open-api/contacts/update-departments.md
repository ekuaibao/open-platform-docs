# 修改部门信息

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/departments/update/$`departmentId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.14.0**](/updateLog/update-log#1140)
  - 🐞 新增了 `form` 参数，支持传入 **部门自定义字段**。
- [**1.6.0**](/updateLog/update-log#160)
  - 🐞 **成功响应** 中增加 `order`（排序序号）参数。

</div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **departmentId** | String | 部门ID | 必填 | - | 通过 [获取部门列表](/docs/open-api/corporation/get-departments) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **code**      | String  | 部门编码        | 必填  | - | 可传 `""`，不可传重复的值 |
| **name**      | String  | 部门名称        | 必填  | - | 不可传 `""`，不可传重复的值 |
| **parentId**  | String  | 上级部门ID      | 必填  | - | 根部门为 `""` |
| **form**      | Object  | 自定义字段	    | 非必填  | - | 部门自定义字段 |
| **&emsp; ∟ costCenter**  | String  | 成本中心ID   | 非必填  | - | 通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 获取 |
| **&emsp; ∟ legalEntity** | String  | 法人实体ID   | 非必填  | - | 通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 获取 |
| **&emsp; ∟ u_字段名**     | String  | 自定义字段	   | 非必填  | - | 自定义字段，格式为"u\_字段名"，例如 : u\_项目<br/>可通过 [获取全局字段列表](/docs/open-api/forms/get-customs-param) 获取字段名 |
| **order**     | Number  | 排序           | 非必填 | 0 | code为空，order相同时，按创建时间排序<br/>code为空，order不同时，按order排序<br/>code不为空时，按code排序 |

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/departments/update/$PCx3rwm3aA00qM:ID_3rLjlEB0zrg?accessToken=ID_3rMfodi0LOM:PCx3rwm3aA00qM' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "code": "00301",
    "name": "测试事业部1",
    "parentId": "PCx3rwm3aA00qM:ID_3rLjlEB09rg",
    "form": {
        "costCenter": "cc0dbcd46cf6d0444c00",
        "legalEntity": "ID_3rPkrfrfv4M"
    },
    "order": 0
}'
```

## 成功响应
```json
{
    "value": {
        "id": "PCx3rwm3aA00qM:ID_3rLjlEB0zrg",        //部门ID
        "name": "测试事业部1",                        //部门名称
        "parentId": "PCx3rwm3aA00qM:ID_3rLjlEB09rg",  //上级部门ID
        "active": true,                               //是否停用
        "code": "00301",                              //部门编码
        "form": {                                     //部门关联法人实体ID和成本中心ID以及自定义字段
            "costCenter": "cc0dbcd46cf6d0444c00",     //成本中心ID
            "legalEntity": "ID_3rPkrfrfv4M"           //法人实体ID
        },
        "order": 0                                    //排序序号
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 未找到对应部门 | 请确认 `departmentId`（部门ID）是否正确 | 

