# 查询预算节点配置和节点路径信息
通过传递的查询参数（名称、编码）来查询符合条件的预算节点配置信息和节点路径信息（从根节点到查询节点之间的路径节点信息）

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/budgets/searchBudgetNode/$`budgetInfoId`/$`budgetInfoVersion`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetInfoId** | String  | 预算树id | 必填 | - | [预算树id获取](/docs/open-api/budget/get-budget-list) |
| **budgetInfoVersion** | String  | 预算版本 | 必填 | - | [预算版本获取](/docs/open-api/budget/get-budget-details) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填   | -   | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number | 查询开始位置 | 非必填 | 0   | - |
| **count**       | Number | 查询数量    | 非必填 | 100 | 不可超过100 |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**name** | String | 节点名称	 | 非必填  | - | 节点名称 | 
|**code** | String | 节点编码	 | 非必填  | - | 节点编码 |

## CURL
```json
curl --location --request POST 'http://460mix.ekuaibao.net/api/openapi/v2/budgets/searchBudgetNode/$ID_3hDGFB47JaY/$7?accessToken=ID_3lEhmoq01R0:rzj3hDLar4001E' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "name":"徐建",
    "code":""
}'
```

## 成功响应
```json
{
    "count": 1,
    "items": [
        {
            "budgetNodeEntity": {
                "id": "1627633293733001",
                "code": "",
                "content": [
                    {
                        "dimensionType": "STAFF",
                        "dimensionId": "submitterId",
                        "mustLeaf": true,
                        "contentId": "rzj3hDLar4001E:9h09FFdjmoaE00"
                    }
                ],
                "moneys": null,
                "control": "ALLOW",
                "children": null,
                "name": null,
                "overControllerRate": 100,
                "hasChild": false,
                "parentId": "1626357326465",
                "childCount": 0,
                "hasSelfNode": false,
                "moneyExts": [
                    {
                        "nodeId": "1627633293733001",
                        "periodTime": "1",
                        "budgetMoney": 66666,  //预算金额
                        "extendMoneys": {},
                        "occupiedMoney": 0,  //占用金额
                        "confirmedMoney": 0,  //已使用金额
                        "budgetMoneyRoll": 0,  //预算金额（滚动）
                        "occupiedMoneyRoll": 0,  //占用金额（滚动）
                        "confirmedMoneyRoll": 0  //已使用金额（滚动）
                    }
                ],
                "freeze": false
            },
            "path": [
                {
                    "id": "1626357326465",
                    "code": "",
                    "content": [],
                    "moneys": null,
                    "control": "ALLOW",
                    "children": null,
                    "name": null,
                    "overControllerRate": 100,
                    "hasChild": true,
                    "parentId": "",
                    "childCount": 2,
                    "hasSelfNode": false,
                    "moneyExts": [],
                    "freeze": false
                },
                {
                    "id": "1627633293733001",
                    "code": "",
                    "content": [
                        {
                            "dimensionType": "STAFF",
                            "dimensionId": "submitterId",
                            "mustLeaf": true,
                            "contentId": "rzj3hDLar4001E:9h09FFdjmoaE00"
                        }
                    ],
                    "moneys": null,
                    "control": "ALLOW",
                    "children": null,
                    "name": null,
                    "overControllerRate": 100,
                    "hasChild": false,
                    "parentId": "1626357326465",
                    "childCount": 0,
                    "hasSelfNode": false,
                    "moneyExts": [
                        {
                            "nodeId": "1627633293733001",
                            "periodTime": "1",
                            "budgetMoney": 66666,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0
                        }
                    ],
                    "freeze": false
                }
            ]
        }
    ]
} 
```

## 失败响应
参数传输错误， 返回此响应数据
```json
{
    "errorCode": 400,
    "errorMessage": "请输入预算节点的名称或编码!",
    "errorDetails": null,
    "code": null,
    "data": null
}
```



