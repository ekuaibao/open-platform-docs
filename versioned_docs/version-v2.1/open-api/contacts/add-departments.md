# 新增部门

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/departments"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.6.0**](/updateLog/update-log#160) -> 🐞 **成功响应** 中增加 `order`（排序序号）参数。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **code**     | String  | 部门编码	| 必填   | - | 可传 `""`，不可传重复的值 |
| **name**     | String  | 部门名称	| 必填   | - | 不可传 `""`，不可传重复的值 |
| **parentId** | String  | 上级部门ID	| 必填   | - | 根部门为 `""` |
| **order**    | Number  | 排序	    | 非必填 | 0 | code为空，order相同时，按创建时间排序<br/>code为空，order不同时，按order排序<br/>code不为空时，按code排序 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/departments?accessToken=rv0bwKeAks4Y00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "code": "1330",
    "name": "事业部",
    "parentId": "JOYbpjPP-E2Q00",
    "order": 0
}'
```

## 成功响应
```json
{
    "value": {
        "id": "JOYbpjPP-E2Q00:NJ4bwJTotQiA00", //部门ID
        "name": "事业部",                      //部门名称
        "parentId": "JOYbpjPP-E2Q00",         //上级部门ID
        "form":{                              //部门关联法人实体ID和成本中心ID
          "costCenter":"NzMcynfBJ43M00",      //成本中心ID
          "legalEntity":"11YcypdGzoEo00"      //法人实体ID
        },
        "active": true,                       //是否停用
        "order": 0,                           //排序序号
        "code": "1330"                        //部门编码
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 该部门在同级有相同的部门名称 | 请确认对应层级是否有相同的部门名称 | 

