# 获取预算包详细信息
返回单个预算包的全部信息，包括预算执行情况。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/budgets/$`budgetId`"
/>

:::caution
- 请注意本接口依赖于服务的性能，当后台判定要查询的预算包超过2000个节点时，此接口就会报错。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String | 预算包ID | 必填 | - | 通过 [获取预算包列表](/docs/open-api/budget/get-budget-list) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/budgets/$ID_3D$8ov23ECg?accessToken=ID_3D$rGPUjFBg:bwa3wajigF0WH0'
```

## 成功响应
```json
{
    "value": {
        "budgetInfo": {
            "budgetInfo": {                            //预算包信息
                "pipeline": 1,
                "grayver": "9.24.0.0:A",
                "id": "ID_3D$8ov23ECg",                //预算ID
                "version": 1,                          //预算版本
                "active": true,                        //是否激活，true：发布，false：草稿
                "createTime": 1650359969300,
                "updateTime": 1650359969300,
                "name": "测试预算-1",                  //预算包名称
                "nameSpell": "CESHIYUSUAN-1",
                "corporationId": "bwa3wajigF0WH0",     //企业ID
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "period": {                            //预算年度
                    "annual": "2022",                  //控制年度
                    "period": "SEASON",                //年度内分割方式，MONTH: 按月份, SEASON: 按季度, HALF_YEAR: 半年, YEAR: 整年, null: 非周期控制
                    "startTime": 1641028769360,        //非周期控制开始时间
                    "endTime": 1672478369360           //非周期控制结束时间
                },
                "tree": null,
                "delete": false,                       //预算是否删除
                "extendMoneys": null,
                "legalEntityIds": [],
                "budgetCurrency": null,
                "dimensionIds": {                      //预算内部的全部维度值
                    "项目": "PROJECT",
                    "submitterId": "STAFF",
                    "E_system_rank": "PROJECT",
                    "expenseDepartment": "DEPART"
                },
                "isCustom": false,            //预算周期是否是自定义
                "isRollCalc": false,          //预算是否是滚动预算
                "isEdit": false               //预算包编制状态
            },
            "tree": {
                "id": "20220419",              //预算节点ID
                "code": "根节点",              //节点编号
                "content": [                   //节点维度
                    {
                        "dimensionType": "STAFF",        //维度种类（DEPART：部门，PROJECT：档案，FEE_TYPE：消费类型，STAFF：员工）
                        "dimensionId": "submitterId",    //维度种类的标识ID
                        "mustLeaf": true,                //维度是否必定为叶子节点（本部），true：非本级，false：本级
                        "contentId": "bwa3wajigF0WH0:ID_3lokDfb1p5w"  //维度内容ID
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "E_system_rank",
                        "mustLeaf": true,
                        "contentId": "ID_3Ah8fh60CEg"
                    }
                ],
                "moneys": [                       //节点金额
                    {
                        "nodeId": "20220419",     //预算节点ID
                        "periodTime": "1",        //第几个周期
                        "budgetMoney": 21.0,      //预算总额
                        "extendMoneys": {}        //参考金额
                    },
                    {
                        "nodeId": "20220419",
                        "periodTime": "2",
                        "budgetMoney": 42.0,
                        "extendMoneys": {}
                    },
                    {
                        "nodeId": "20220419",
                        "periodTime": "3",
                        "budgetMoney": 63.0,
                        "extendMoneys": {}
                    },
                    {
                        "nodeId": "20220419",
                        "periodTime": "4",
                        "budgetMoney": 84.0,
                        "extendMoneys": {}
                    }
                ],
                "control": "ALLOW",            //预算节点的控制方式
                "children": [                  //预算子节点
                    {
                        "id": "20220419-1",
                        "code": "维度-1",
                        "content": [
                            {
                                "dimensionType": "PROJECT",
                                "dimensionId": "项目",
                                "mustLeaf": true,
                                "contentId": "ID_3yrzERx0Rf0"
                            }
                        ],
                        "moneys": [
                            {
                                "nodeId": "20220419-1",
                                "periodTime": "1",
                                "budgetMoney": 10.0,
                                "extendMoneys": {}
                            },
                            {
                                "nodeId": "20220419-1",
                                "periodTime": "2",
                                "budgetMoney": 20.0,
                                "extendMoneys": {}
                            },
                            {
                                "nodeId": "20220419-1",
                                "periodTime": "3",
                                "budgetMoney": 30.0,
                                "extendMoneys": {}
                            },
                            {
                                "nodeId": "20220419-1",
                                "periodTime": "4",
                                "budgetMoney": 40.0,
                                "extendMoneys": {}
                            }
                        ],
                        "control": "FORBID",
                        "children": [
                            {
                                "id": "20220419-1-1",
                                "code": "维度-1-1",
                                "content": [
                                    {
                                        "dimensionType": "DEPART",
                                        "dimensionId": "expenseDepartment",
                                        "mustLeaf": true,
                                        "contentId": "bwa3wajigF0WH0:ID_3wUvB7G293w"
                                    }
                                ],
                                "moneys": [
                                    {
                                        "nodeId": "20220419-1-1",
                                        "periodTime": "1",
                                        "budgetMoney": 10.0,
                                        "extendMoneys": {}
                                    },
                                    {
                                        "nodeId": "20220419-1-1",
                                        "periodTime": "2",
                                        "budgetMoney": 20.0,
                                        "extendMoneys": {}
                                    },
                                    {
                                        "nodeId": "20220419-1-1",
                                        "periodTime": "3",
                                        "budgetMoney": 30.0,
                                        "extendMoneys": {}
                                    },
                                    {
                                        "nodeId": "20220419-1-1",
                                        "periodTime": "4",
                                        "budgetMoney": 40.0,
                                        "extendMoneys": {}
                                    }
                                ],
                                "control": "ALLOW",
                                "children": [],
                                "name": "",
                                "overControllerRate": 100
                            }
                        ],
                        "name": "",
                        "overControllerRate": 100
                    },
                    {
                        "id": "20220419-2",
                        "code": "维度-2",
                        "content": [
                            {
                                "dimensionType": "PROJECT",
                                "dimensionId": "项目",
                                "mustLeaf": true,
                                "contentId": "ID_3yrzERx0Sf0"
                            }
                        ],
                        "moneys": [
                            {
                                "nodeId": "20220419-2",
                                "periodTime": "1",
                                "budgetMoney": 11.0,
                                "extendMoneys": {}
                            },
                            {
                                "nodeId": "20220419-2",
                                "periodTime": "2",
                                "budgetMoney": 22.0,
                                "extendMoneys": {}
                            },
                            {
                                "nodeId": "20220419-2",
                                "periodTime": "3",
                                "budgetMoney": 33.0,
                                "extendMoneys": {}
                            },
                            {
                                "nodeId": "20220419-2",
                                "periodTime": "4",
                                "budgetMoney": 44.0,
                                "extendMoneys": {}
                            }
                        ],
                        "control": "IGNORED",
                        "children": [],
                        "name": "",
                        "overControllerRate": 100
                    }
                ], 
                "name": "",                       
                "overControllerRate": 100         //预算超标比例
            }
        },
        "moneys": [
            {
                "id": "ID_3D$8ov23ECg:1:4",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-2",
                "periodTime": "4",
                "budgetMoney": 44.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Sf0"
                    }
                ],
                "name": "项目3"
            },
            {
                "id": "ID_3D$8ov23ECg:1:3",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-2",
                "periodTime": "3",
                "budgetMoney": 33.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Sf0"
                    }
                ],
                "name": "项目3"
            },
            {
                "id": "ID_3D$8ov23ECg:1:8",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-1",
                "periodTime": "4",
                "budgetMoney": 40.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Rf0"
                    }
                ],
                "name": "项目2"
            },
            {
                "id": "ID_3D$8ov23ECg:1:2",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-2",
                "periodTime": "2",
                "budgetMoney": 22.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Sf0"
                    }
                ],
                "name": "项目3"
            },
            {
                "id": "ID_3D$8ov23ECg:1:7",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-1",
                "periodTime": "3",
                "budgetMoney": 30.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Rf0"
                    }
                ],
                "name": "项目2"
            },
            {
                "id": "ID_3D$8ov23ECg:1:1",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-2",
                "periodTime": "1",
                "budgetMoney": 11.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Sf0"
                    }
                ],
                "name": "项目3"
            },
            {
                "id": "ID_3D$8ov23ECg:1:6",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-1",
                "periodTime": "2",
                "budgetMoney": 20.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Rf0"
                    }
                ],
                "name": "项目2"
            },
            {
                "id": "ID_3D$8ov23ECg:1:5",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-1",
                "periodTime": "1",
                "budgetMoney": 10.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Rf0"
                    }
                ],
                "name": "项目2"
            },
            {
                "id": "ID_3D$8ov23ECg:1:16",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-1-1",
                "periodTime": "4",
                "budgetMoney": 40.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Rf0"
                    },
                    {
                        "dimensionType": "DEPART",
                        "dimensionId": "expenseDepartment",
                        "mustLeaf": true,
                        "contentId": "bwa3wajigF0WH0:ID_3wUvB7G293w"
                    }
                ],
                "name": "部门1"
            },
            {
                "id": "ID_3D$8ov23ECg:1:12",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419",
                "periodTime": "4",
                "budgetMoney": 84.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                "name": "测试预算-1"
            },
            {
                "id": "ID_3D$8ov23ECg:1:15",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-1-1",
                "periodTime": "3",
                "budgetMoney": 30.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Rf0"
                    },
                    {
                        "dimensionType": "DEPART",
                        "dimensionId": "expenseDepartment",
                        "mustLeaf": true,
                        "contentId": "bwa3wajigF0WH0:ID_3wUvB7G293w"
                    }
                ],
                "name": "部门1"
            },
            {
                "id": "ID_3D$8ov23ECg:1:11",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419",
                "periodTime": "3",
                "budgetMoney": 63.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                "name": "测试预算-1"
            },
            {
                "id": "ID_3D$8ov23ECg:1:14",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-1-1",
                "periodTime": "2",
                "budgetMoney": 20.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Rf0"
                    },
                    {
                        "dimensionType": "DEPART",
                        "dimensionId": "expenseDepartment",
                        "mustLeaf": true,
                        "contentId": "bwa3wajigF0WH0:ID_3wUvB7G293w"
                    }
                ],
                "name": "部门1"
            },
            {
                "id": "ID_3D$8ov23ECg:1:10",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419",
                "periodTime": "2",
                "budgetMoney": 42.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                "name": "测试预算-1"
            },
            {
                "id": "ID_3D$8ov23ECg:1:13",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419-1-1",
                "periodTime": "1",
                "budgetMoney": 10.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "项目",
                        "mustLeaf": true,
                        "contentId": "ID_3yrzERx0Rf0"
                    },
                    {
                        "dimensionType": "DEPART",
                        "dimensionId": "expenseDepartment",
                        "mustLeaf": true,
                        "contentId": "bwa3wajigF0WH0:ID_3wUvB7G293w"
                    }
                ],
                "name": "部门1"
            },
            {
                "id": "ID_3D$8ov23ECg:1:9",
                "corporationId": "bwa3wajigF0WH0",
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220419",
                "periodTime": "1",
                "budgetMoney": 21.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
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
                "name": "测试预算-1"
            }
        ],
        "visibilities": [
            {
                "pipeline": 1,
                "grayver": "9.24.0.0:A",
                "id": "ID_3D$8ov23KCg",
                "version": 1,
                "active": true,
                "createTime": 1650359969300,
                "updateTime": 1650359969300,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetId": "ID_3D$8ov23ECg",
                "budgetVersion": 1,
                "nodeId": "20220419",
                "roleDefIds": [],
                "staffIds": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ]
            },
            {
                "pipeline": 1,
                "grayver": "9.24.0.0:A",
                "id": "ID_3D$8ov23LCg",
                "version": 1,
                "active": true,
                "createTime": 1650359969300,
                "updateTime": 1650359969300,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetId": "ID_3D$8ov23ECg",
                "budgetVersion": 1,
                "nodeId": "20220419-1",
                "roleDefIds": [],
                "staffIds": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ]
            },
            {
                "pipeline": 1,
                "grayver": "9.24.0.0:A",
                "id": "ID_3D$8ov23NCg",
                "version": 1,
                "active": true,
                "createTime": 1650359969300,
                "updateTime": 1650359969300,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetId": "ID_3D$8ov23ECg",
                "budgetVersion": 1,
                "nodeId": "20220419-1-1",
                "roleDefIds": [],
                "staffIds": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ]
            },
            {
                "pipeline": 1,
                "grayver": "9.24.0.0:A",
                "id": "ID_3D$8ov23MCg",
                "version": 1,
                "active": true,
                "createTime": 1650359969300,
                "updateTime": 1650359969300,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetId": "ID_3D$8ov23ECg",
                "budgetVersion": 1,
                "nodeId": "20220419-2",
                "roleDefIds": [],
                "staffIds": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ]
            }
        ],
        "log": " 于 2022.04.19 17:19:29 openapi创建了该预算"
    }
}
```

