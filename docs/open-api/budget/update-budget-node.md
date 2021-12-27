---
slug: update-budget-node
title: 更新预算节点(废弃)
authors: [张国阳]
---

# ~~更新预算节点~~
更新指定预算节点的预算金额或负责人

:::danger
不推荐使用，接口废弃，不再更新。推荐使用【批量更新(新增/修改/删除)预算节点】接口
:::

import Control from "../../../components/Control";

<Control
method="PUT"
url="/api/openapi/v2/budgets/$`budgetId`/node/$`nodeId`/update"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String | 预算树id | 必填 |  - | [预算树id获取](/docs/open-api/budget/get-budget-list) |
| **nodeId** | String | 要更新的预算节点id | 必填 | - | [预算节点id获取](/docs/open-api/budget/get-budget-details) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**moneys**              | Object | 预算节点信息 | 必填   | - | 第N个[周期](/docs/open-api/budget/question-answer)的预算总额 | 
|**visibility**          | Object | 节点的负责人 | 必填   | - | 负责人能在相关报销单和预算报表中查看该预算节点的进度 |
|**&emsp; ∟ staffIds**  | Array  | 人员ID      | 非必填 | - | 值为[员工id](/docs/open-api/corporation/get-all-staffs) |
|**&emsp; ∟ roleDefIds**| Array  | 角色ID      | 非必填 | - | 值为[角色id](/docs/open-api/corporation/get-roles-group) |

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00/node/$1597314291146001/update?accessToken=f_kbtOJVVwdo00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "moneys":{
        "1":"10.00",  //第1个周期的预算金额，一共4个周期，所以是按季度控制，第一季度的预算金额
        "2":"20.00",  //第2个周期的预算金额，一共4个周期，所以是按季度控制，第二季度的预算金额
        "3":"30.00",  //第3个周期的预算金额，一共4个周期，所以是按季度控制，第三季度的预算金额
        "4":"40.00"   //第4个周期的预算金额，一共4个周期，所以是按季度控制，第四季度的预算金额
    },
    "visibility":{
        "staffIds":["zKIbl2WX4I8I00:h5wbhuSCoQh000"],
        "roleDefIds":[]
    }
}'
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
`budgetId` 不存在时， 返回此响应数据
```json
{
    "value": {
        "success": false,
        "errmsg": "不存在的预算包"
    }
}
```










