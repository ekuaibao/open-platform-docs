# 更新预算节点
更新指定预算节点的预算金额或负责人。

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2/budgets/$`budgetId`/node/$`nodeId`/update"
/>

:::danger
- 不推荐使用，接口废弃，不再更新维护。
- 推荐使用【[批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node)】接口。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String | 预算包ID         | 必填 | - | 通过 [获取预算包列表](/docs/open-api/budget/get-budget-list) 获取 |
| **nodeId** | String   | 要更新的预算节点ID | 必填 | - | 通过 [获取预算包详细信息](/docs/open-api/budget/get-budget-details) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**moneys**              | Object | 预算节点信息 | 必填   | - | 第N个 [周期](/docs/open-api/budget/question-answer#问题二) 的预算总额 | 
|**visibility**          | Object | 节点的负责人 | 必填   | - | 负责人能在相关报销单和预算报表中查看该预算节点的进度 |
|**&emsp; ∟ staffIds**  | Array  | 员工ID      | 非必填 | - | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
|**&emsp; ∟ roleDefIds**| Array  | 角色ID      | 非必填 | - | 通过 [获取部门列表](/docs/open-api/corporation/get-departments) 获取 |

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
`budgetId`（预算包ID）不存在时，报错如下：
```json
{
    "value": {
        "success": false,
        "errmsg": "不存在的预算包"
    }
}
```










