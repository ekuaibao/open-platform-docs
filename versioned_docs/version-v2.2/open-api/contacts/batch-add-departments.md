# 批量新增部门

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/departments/batch/create"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.6.0**](/docs/open-api/notice/update-log#160) &emsp; -> 🐞 **成功响应** 中增加 `order`（排序序号）参数。<br/>
  [**0.7.125**](/docs/open-api/notice/update-log#07125) -> 🆕 新增了本接口。

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	| 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **departmentList**            | Array     | 新增部门的集合 | 必填  | - | 新增部门的集合 |
| **&emsp; ∟ code**       | String    | 部门编码      | 必填  | - | 可传 `""`，不可传重复的值 |
| **&emsp; ∟ name**       | String    | 部门名称      | 必填  | - | 不可传 `""`，同一层级不可传重复的值 |
| **&emsp; ∟ parentId**   | String    | 上级部门ID    | 必填  | - | 根部门为 `""` |
| **&emsp; ∟ order**      | Number    | 排序         | 非必填 | 0 | `code` 为空，`order` 相同时，按 **创建时间** 排序<br/>`code` 为空，`order` 不同时，按 `order` 排序<br/>`code` 不为空时，按 `code` 排序 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/departments/batch/create?accessToken=rv0bwKeAks4Y00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "departmentList":[
        {
            "code":"233434342121111",
            "name":"事业部11111",
            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",
            "order":1
        },
        {
            "code":"233434342121311111",
            "name":"事业部11112",
            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",
            "order":2
        }
    ]
}'
```

## 成功响应
```json
{
    "items":[
        {
            "id":"U_gb_X4Yr8aY00:YSYc6_Ipx8uI00",
            "name":"事业部11111",
            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",
            "active":true,
            "form":{                            //部门关联法人实体id和成本中心id
                "costCenter":"NzMcynfBJ43M00",  //成本中心ID
                "legalEntity":"11YcypdGzoEo00"  //法人实体ID
            },
            "order": 1,                         //排序序号
            "code":"233434342121111"
        },
        {
            "id":"U_gb_X4Yr8aY00:Ty8c6_Ipx8uM00",
            "name":"事业部11112",
            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",
            "active":true,
            "form":{                            //部门关联法人实体id和成本中心id
                "costCenter":"NzMcynfBJ43M00",  //成本中心ID
                "legalEntity":"11YcypdGzoEo00"  //法人实体ID
            },
            "order": 2,                         //排序序号
            "code":"233434342121311111"
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 该部门在同级有相同的部门名称 | 请确认对应层级是否有相同的部门名称 | 
| **400** | - | 该部门编码「cs-1」已存在   | 请确认 `code` 是否与启用部门重复 | 
