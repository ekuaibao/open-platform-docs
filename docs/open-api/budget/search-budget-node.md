# 获取预算节点配置和路径信息
通过预算名称、预算编码查询符合条件的预算节点配置和节点路径信息（从根节点到查询节点之间的路径信息）。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/budgets/searchBudgetNode/$`budgetInfoId`/$`budgetInfoVersion`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**0.7.141**](/updateLog/update-log#07141) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetInfoId**      | String  | 预算包ID | 必填 | - | 通过 [获取预算包列表](/docs/open-api/budget/get-budget-list) 获取 |
| **budgetInfoVersion** | String  | 预算版本 | 必填 | - | 通过 [获取预算包详细信息](/docs/open-api/budget/get-budget-details) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填   | -   | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **start**       | Number | 查询开始位置 | 非必填 | 0   | 从 `0` 开始 |
| **count**       | Number | 查询数量    | 非必填 | 100 | 不可超过 `100` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**name** | String | 节点名称	 | 非必填  | - | `name` 和 `code` 二选一必填 | 
|**code** | String | 节点编码	 | 非必填  | - | `name` 和 `code` 二选一必填 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/budgets/searchBudgetNode/$ID_3D$8ov23ECg/$3?accessToken=ID_3Eo3_NBaxe0:bwa3wajigF0WH0&start=0&count=100' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "name":"",               //预算节点名称
    "code":"批量新增-1-子"   //预算节点编码
}'
```

## 成功响应
```json
{
    "count": 1,      //查询到的节点数量
    "items": [
        {
            "budgetNodeEntity": {       //查询到的节点信息
                "id": "20220422-1-1",   //节点ID
                "code": "批量新增-1-子",//节点编码
                "content": [            //节点维度信息
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "E_system_post",
                        "mustLeaf": true,
                        "contentId": "ID_3Ah8fh60EEg"
                    }
                ],
                "moneys": null,        
                "control": "ALLOW",           //当预算超额时，控制方式(ALLOW：允许单据提交，并显示警告 FORBID：禁止提交单据 IGNORED：允许单据提交，不显示警告)
                "children": null,             
                "name": null,
                "overControllerRate": 100.0,  //预算超标比例
                "hasChild": false,            //是否有子节点    
                "parentId": "20220422-1",     //父节点ID
                "childCount": 0,              //子节点数量
                "hasSelfNode": false,
                "moneyExts": [
                    {
                        "nodeId": "20220422-1-1",  //节点ID
                        "periodTime": "1",         //第几个周期
                        "budgetMoney": 100.0,      //预算金额
                        "extendMoneys": {},
                        "occupiedMoney": 0,        //已占用金额（审批中和待支付的单据）
                        "confirmedMoney": 0,       //已确认金额（已支付和已完成的单据）
                        "budgetMoneyRoll": 0,      //预算金额（滚动）
                        "occupiedMoneyRoll": 0,    //已占用金额（滚动）
                        "confirmedMoneyRoll": 0,   //已确认金额（滚动）
                        "periodStartTime": null,   //跨财年周期区间开始时间
                        "periodEndTime": null      //跨财年周期区间结束时间
                    },
                    {
                        "nodeId": "20220422-1-1",
                        "periodTime": "2",
                        "budgetMoney": 200.0,
                        "extendMoneys": {},
                        "occupiedMoney": 0,
                        "confirmedMoney": 0,
                        "budgetMoneyRoll": 0,
                        "occupiedMoneyRoll": 0,
                        "confirmedMoneyRoll": 0,
                        "periodStartTime": null, //跨财年周期区间开始时间
                        "periodEndTime": null    //跨财年周期区间结束时间
                    },
                    {
                        "nodeId": "20220422-1-1",
                        "periodTime": "3",
                        "budgetMoney": 300.0,
                        "extendMoneys": {},
                        "occupiedMoney": 0,
                        "confirmedMoney": 0,
                        "budgetMoneyRoll": 0,
                        "occupiedMoneyRoll": 0,
                        "confirmedMoneyRoll": 0,
                        "periodStartTime": null, //跨财年周期区间开始时间
                        "periodEndTime": null    //跨财年周期区间结束时间
                    },
                    {
                        "nodeId": "20220422-1-1",
                        "periodTime": "4",
                        "budgetMoney": 400.0,
                        "extendMoneys": {},
                        "occupiedMoney": 0,
                        "confirmedMoney": 0,
                        "budgetMoneyRoll": 0,
                        "occupiedMoneyRoll": 0,
                        "confirmedMoneyRoll": 0,
                        "periodStartTime": null, //跨财年周期区间开始时间
                        "periodEndTime": null    //跨财年周期区间结束时间
                    }
                ],
                "freeze": false    //节点是否冻结预算
            },
            "path": [              //节点路径信息，从根节点到查询节点
                {
                    "id": "20220419",      //节点ID
                    "code": "根节点",      //节点编码
                    "content": [           //节点维度信息
                        {
                            "dimensionType": "STAFF",
                            "dimensionId": "submitterId",
                            "mustLeaf": true,
                            "contentId": "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                        },
                        {
                            "dimensionType": "PROJECT",
                            "dimensionId": "E_system_rank",
                            "mustLeaf": true,
                            "contentId": "ID_3Ah8fh60CEg"
                        }
                    ],
                    "moneys": null,
                    "control": "ALLOW",
                    "children": null,
                    "name": null,
                    "overControllerRate": 100,
                    "hasChild": true,
                    "parentId": "",
                    "childCount": 2,
                    "hasSelfNode": false,
                    "moneyExts": [
                        {
                            "nodeId": "20220419",
                            "periodTime": "1",
                            "budgetMoney": 110.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        },
                        {
                            "nodeId": "20220419",
                            "periodTime": "2",
                            "budgetMoney": 220.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        },
                        {
                            "nodeId": "20220419",
                            "periodTime": "3",
                            "budgetMoney": 330.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        },
                        {
                            "nodeId": "20220419",
                            "periodTime": "4",
                            "budgetMoney": 440.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        }
                    ],
                    "freeze": false
                },
                {
                    "id": "20220422-1",
                    "code": "批量新增-1",
                    "content": [
                        {
                            "dimensionType": "PROJECT",
                            "dimensionId": "项目",
                            "mustLeaf": true,
                            "contentId": "ID_3EdP4O159I0"
                        }
                    ],
                    "moneys": null,
                    "control": "ALLOW",
                    "children": null,
                    "name": null,
                    "overControllerRate": 100.0,
                    "hasChild": true,
                    "parentId": "20220419",
                    "childCount": 1,
                    "hasSelfNode": false,
                    "moneyExts": [
                        {
                            "nodeId": "20220422-1",
                            "periodTime": "1",
                            "budgetMoney": 100.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        },
                        {
                            "nodeId": "20220422-1",
                            "periodTime": "2",
                            "budgetMoney": 200.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        },
                        {
                            "nodeId": "20220422-1",
                            "periodTime": "3",
                            "budgetMoney": 300.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        },
                        {
                            "nodeId": "20220422-1",
                            "periodTime": "4",
                            "budgetMoney": 400.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        }
                    ],
                    "freeze": false
                },
                {
                    "id": "20220422-1-1",
                    "code": "批量新增-1-子",
                    "content": [
                        {
                            "dimensionType": "PROJECT",
                            "dimensionId": "E_system_post",
                            "mustLeaf": true,
                            "contentId": "ID_3Ah8fh60EEg"
                        }
                    ],
                    "moneys": null,
                    "control": "ALLOW",
                    "children": null,
                    "name": null,
                    "overControllerRate": 100.0,
                    "hasChild": false,
                    "parentId": "20220422-1",
                    "childCount": 0,
                    "hasSelfNode": false,
                    "moneyExts": [
                        {
                            "nodeId": "20220422-1-1",
                            "periodTime": "1",
                            "budgetMoney": 100.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        },
                        {
                            "nodeId": "20220422-1-1",
                            "periodTime": "2",
                            "budgetMoney": 200.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        },
                        {
                            "nodeId": "20220422-1-1",
                            "periodTime": "3",
                            "budgetMoney": 300.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
                        },
                        {
                            "nodeId": "20220422-1-1",
                            "periodTime": "4",
                            "budgetMoney": 400.0,
                            "extendMoneys": {},
                            "occupiedMoney": 0,
                            "confirmedMoney": 0,
                            "budgetMoneyRoll": 0,
                            "occupiedMoneyRoll": 0,
                            "confirmedMoneyRoll": 0,
                            "periodStartTime": null, //跨财年周期区间开始时间
                            "periodEndTime": null    //跨财年周期区间结束时间
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

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 请输入预算节点的名称或编码! | 请确认 `name`（节点名称）和 `code`（节点编码）二选一必填 |
| **400** | - | 输入存在错误: <br/>- 缺少查询参数 | 请确认整个 **Body Parameters** 参数是否为空 |



