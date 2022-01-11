# 根据员工获取对应权限预算节点列表

根据传入的预算树ID、员工ID、节点ID，判断员工是否有权限访问此节点，返回有权限访问的节点ID。

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/budgets/$`budgetId`/staff/$`staffId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String | 预算树ID | 必填 | - | [预算树ID获取](/docs/open-api/budget/get-budget-list) |
| **staffId**  | String | 员工ID   | 必填 | - | [查询员工ID](/docs/open-api/corporation/get-staff-ids) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **nodeIds** | Array | 指定查询的节点ID（可多个） | 必填 | - | [节点ID获取](/docs/open-api/budget/get-BudgetsDetails-ByPage) |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/budgets/$ID_3o_V3Um0XZ0/staff/$Urf3lsFgBp00gw:AvT3lntT8zzpWw?accessToken=ID_3rg$H9i0dTM:Urf3lsFgBp00gw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "nodeIds":[
        "1634112670000","1635907908830002","1635907908830001"
    ]
}'
```

## 成功响应
```json
{
    "items": [
        "1634112670000",
        "1635907908830002",
        "1635907908830001"
    ]
}
```

## 失败响应
传入的节点ID均无权限时，响应如下：
```json
{
    "items": []
}
```

不传 `nodeIds` 参数时，响应如下：
```json
{
    "errorCode": 400,
    "errorMessage": "输入存在错误:\n- 缺少预算参数",
    "errorDetails": null,
    "code": null,
    "data": null
}
```



