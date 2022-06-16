---
slug: delete-budget-node
title: 删除预算节点(废弃)
authors: [张国阳]
---

# ~~删除预算节点~~
删除指定的预算节点。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/budgets/$`budgetId`/node/$`nodeId`/del"
/>

:::danger
- 不推荐使用，接口废弃，不再更新维护。
- 推荐使用【[批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node)】接口。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String | 预算包ID      | 必填 | - | [预算包ID获取](/docs/open-api/budget/get-budget-list) |
| **nodeId**   | String | 要删除的节点ID | 必填 | - | [预算节点ID获取](/docs/open-api/budget/get-budget-details) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00/node/$1597314291146001/del?accessToken=f_kbtOJVVwdo00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "value": {
        "success": true,
        "errmsg": ""
    }
} 
```



## 失败响应
`budgetId`（预算包ID）不存在时，报错如下：
```json
{
    "value": {
        "success": false,
        "errmsg": "不存在的预算包"
    }
}
```