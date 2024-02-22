# 获取指定员工对应权限的预算节点列表

根据传入的 `预算包ID`、`员工ID`、`节点ID`，判断员工是否有权限访问此节点，返回有权限访问的节点ID。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/budgets/$`budgetId`/staff/$`staffId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**0.7.154**](/updateLog/update-log#07154) 
  - 🆕 新增了本接口。

</div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String | 预算包ID | 必填 | - | 通过 [获取预算包列表](/docs/open-api/budget/get-budget-list) 获取 |
| **staffId**  | String | 员工ID   | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **nodeIds** | Array | 指定查询的节点ID（可多个） | 必填 | - | 通过 [获取预算包详细信息](/docs/open-api/budget/get-budget-details) 获取 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/budgets/$ID_3D$8ov23ECg/staff/$bwa3wajigF0WH0:ID_3lokDfb1p5w?accessToken=ID_3Eo3_NBaMe0:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "nodeIds":[
        "20220419","20220422-1","20220422-1-1","test001","abc123"
    ]
}'
```

## 成功响应
```json
{
    "items": [
        "20220419",
        "20220422-1",
        "20220422-1-1"
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"items": []}` | 为空表示没有查询到对应到的预算节点信息<br/>请确认 `budgetId`（预算包ID）、`staffId`（员工ID）是否正确，<br/>以及 `nodeIds`（节点ID）是否有该员工权限 |
| **400** | - | 输入存在错误: <br/>- must not be null | 请确认 `nodeIds`（节点ID）是否传入 |



