# 批量新增部门

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/departments/batch/create"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.6.0</b></a> -> 🐞 <b>成功响应</b>中增加 <b>'order'</b> 参数。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>0.7.125</b></a> -> 🆕 新增了本接口。
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	| 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **departmentList**            | Array     | 新增部门的集合 | 必填  | - | 新增部门的集合 |
| **&emsp; ∟ code**       | String    | 部门编码      | 必填  | - | 可传 `""`，不可传重复的值 |
| **&emsp; ∟ name**       | String    | 部门名称      | 必填  | - | 不可传 `""`，不可传重复的值 |
| **&emsp; ∟ parentId**   | String    | 上级部门ID    | 必填  | - | 根部门为 `""` |
| **&emsp; ∟ order**      | Number    | 排序         | 非必填 | 0 | code为空，order相同时，按创建时间排序<br/>code为空，order不同时，按order排序<br/>code不为空时，按code排序 |

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
            "order": 1,                             //排序序号
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
            "order": 2,                             //排序序号
            "code":"233434342121311111"
        }
    ]
}
```

## 失败响应
当同一层级部门重复时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "该级目录名称「事业11部」已存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```