# 获取指定员工对应权限的预算节点列表

根据传入的 `预算包ID`、`员工ID`、`节点ID`，判断员工是否有权限访问此节点，返回有权限访问的节点ID。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/budgets/$`budgetId`/staff/$`staffId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String | 预算包ID | 必填 | - | [预算包ID获取](/docs/open-api/budget/get-budget-list) |
| **staffId**  | String | 员工ID   | 必填 | - | [员工ID获取](/docs/open-api/corporation/get-staff-ids) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **nodeIds** | Array | 指定查询的节点ID（可多个） | 必填 | - | [节点ID获取](/docs/open-api/budget/get-budget-details) |

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
传入的 `nodeIds`（节点ID）均无权限时，返回如下：
```json
{
    "items": []
}
```

不传 `nodeIds`（节点ID）参数时，返回如下：
```json
{
    "errorCode": 400,
    "errorMessage": "输入存在错误:\n- 缺少预算参数",
    "errorDetails": null,
    "code": null,
    "data": null
}
```



