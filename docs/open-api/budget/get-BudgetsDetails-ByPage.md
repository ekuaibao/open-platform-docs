# 获取预算节点和子节点详细信息

返回查询的预算节点和其子节点信息（不包含孙子节点及更下级节点信息），包括预算执行情况（支持分页）。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/budgets/$`budgetId`/query"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String  | 预算包ID | 必填 | - | 通过 [获取预算包列表](/docs/open-api/budget/get-budget-list) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**  | String | 认证token      | 必填  | -   | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **nodeId**       | String | 指定查询的节点ID | 非必填 | -   | 通过 [获取预算包详细信息](/docs/open-api/budget/get-budget-details) 获取，**传空表示查询根节点** |
| **start**        | Number | 查询开始位置     | 必填  | 0   | 从 `0` 开始 |
| **count**        | Number | 查询数量        | 必填  | 100 | 不可超过 `100` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/budgets/$ID_3D$8ov23ECg/query?accessToken=ID_3Eo3_NB0Se0:bwa3wajigF0WH0&nodeId=20220422-1&start=0&count=100'
```

## 成功响应
```json
{
    "value": {
        "nodes": [         //查询的预算节点和其子节点信息，不包含更下级节点（孙子级）
            {
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3EnCZ9y2o5w",
                "version": 18,
                "active": true,        //是否激活，true：发布，false：草稿
                "createTime": 1650794498347,
                "updateTime": 1650794498347,
                "nameSpell": "",
                "code": "批量新增-1",   //预算编码
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "nodeId": "20220422-1",//节点ID
                "content": [           //节点维度信息
                    {
                        "dimensionType": "PROJECT",   //维度种类（DEPART：部门，PROJECT：档案，FEE_TYPE：消费类型，STAFF：员工）
                        "dimensionId": "项目",        //维度种类的标识ID
                        "mustLeaf": true,             //维度是否必定为叶子节点（本部），true：非本级，false：本级       
                        "contentId": "ID_3EdP4O159I0" //维度内容ID
                    }
                ],
                "moneys": [                      //预算节点金额
                    {
                        "nodeId": "20220422-1",  //预算节点ID
                        "periodTime": "1",       //第几个周期
                        "budgetMoney": 100.0,    //预算总额
                        "extendMoneys": {},      //参考金额
                        "periodStartTime": null, //跨财年周期区间开始时间
                        "periodEndTime": null    //跨财年周期区间结束时间
                    },
                    {
                        "nodeId": "20220422-1",
                        "periodTime": "2",
                        "budgetMoney": 200.0,
                        "extendMoneys": {},
                        "periodStartTime": null,  //跨财年周期区间开始时间
                        "periodEndTime": null     //跨财年周期区间结束时间
                    },
                    {
                        "nodeId": "20220422-1",
                        "periodTime": "3",
                        "budgetMoney": 300.0,
                        "extendMoneys": {},
                        "periodStartTime": null,  //跨财年周期区间开始时间
                        "periodEndTime": null     //跨财年周期区间结束时间
                    },
                    {
                        "nodeId": "20220422-1",
                        "periodTime": "4",
                        "budgetMoney": 400.0,
                        "extendMoneys": {},
                        "periodStartTime": null,  //跨财年周期区间开始时间
                        "periodEndTime": null     //跨财年周期区间结束时间
                    }
                ],
                "control": "ALLOW",          //当预算超额时，控制方式(ALLOW：允许单据提交，并显示警告 FORBID：禁止提交单据 IGNORED：允许单据提交，不显示警告)
                "overControllerRate": 100.0, //预算超标比例
                "freeze": false, 
                "budgetId": "ID_3D$8ov23ECg",//预算包ID
                "budgetVersion": 3,          //预算版本
                "name": "项目4",             //预算节点名称
                "parentId": "20220419",      //父节点ID
                "isLeaf": false              //预算节点是否是叶子节点  
            },
            {
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3EnCZ9y2p5w",
                "version": 3,
                "active": true,
                "createTime": 1650794498347,
                "updateTime": 1650794498347,
                "nameSpell": "",
                "code": "批量新增-1-子",
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "nodeId": "20220422-1-1",
                "content": [
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "E_system_post",
                        "mustLeaf": true,
                        "contentId": "ID_3Ah8fh60EEg"
                    }
                ],
                "moneys": [
                    {
                        "nodeId": "20220422-1-1",
                        "periodTime": "1",
                        "budgetMoney": 100.0,
                        "extendMoneys": {},
                        "periodStartTime": null,  //跨财年周期区间开始时间
                        "periodEndTime": null     //跨财年周期区间结束时间
                    },
                    {
                        "nodeId": "20220422-1-1",
                        "periodTime": "2",
                        "budgetMoney": 200.0,
                        "extendMoneys": {},
                        "periodStartTime": null,  //跨财年周期区间开始时间
                        "periodEndTime": null     //跨财年周期区间结束时间
                    },
                    {
                        "nodeId": "20220422-1-1",
                        "periodTime": "3",
                        "budgetMoney": 300.0,
                        "extendMoneys": {},
                        "periodStartTime": null,  //跨财年周期区间开始时间
                        "periodEndTime": null     //跨财年周期区间结束时间
                    },
                    {
                        "nodeId": "20220422-1-1",
                        "periodTime": "4",
                        "budgetMoney": 400.0,
                        "extendMoneys": {},
                        "periodStartTime": null,  //跨财年周期区间开始时间
                        "periodEndTime": null     //跨财年周期区间结束时间
                    }
                ],
                "control": "ALLOW",
                "overControllerRate": 100.0,
                "freeze": false,
                "budgetId": "ID_3D$8ov23ECg",
                "budgetVersion": 3,
                "name": "岗位1",
                "parentId": "20220422-1",
                "isLeaf": true
            }
        ],
        "monies": [                   //节点对应的预算执行情况
            {
                "budgetId": "ID_3D$8ov23ECg",  //预算包ID
                "nodeId": "20220422-1",        //节点ID
                "periodTime": "1",             //预算的第几个周期
                "budgetVersion": 3,
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3D$8ov23ECg:3:13",
                "version": 1,
                "active": true,
                "createTime": 1650794499883,
                "updateTime": 1650794499883,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetMoney": 100.0,   //预算金额
                "confirmedMoney": 0,    //已确认金额（已支付和已完成的单据）
                "occupiedMoney": 0,     //已占用金额（审批中和待支付的单据）
                "budgetMoneyRoll": 0,   //预算金额（滚动）
                "confirmedMoneyRoll": 0,//已确认金额（滚动）
                "occupiedMoneyRoll": 0, //已占用金额（滚动）
                "dimensionContents": [  //预算节点占用的全维度
                    {
                        "dimensionType": "STAFF",      //维度种类（DEPART：部门，PROJECT：档案，FEE_TYPE：消费类型，STAFF：员工）
                        "dimensionId": "submitterId",  //维度种类的标识ID
                        "mustLeaf": true,              //维度是否必定为叶子节点（本部），true：非本级，false：本级     
                        "contentId": "bwa3wajigF0WH0:ID_3lokDfb1p5w"  //维度内容ID
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
                        "contentId": "ID_3EdP4O159I0"
                    }
                ], 
                "isLeaf": false  //预算节点是否是叶子节点
            },
            {
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220422-1",
                "periodTime": "2",
                "budgetVersion": 3,
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3D$8ov23ECg:3:14",
                "version": 1,
                "active": true,
                "createTime": 1650794499883,
                "updateTime": 1650794499883,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetMoney": 200.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
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
                        "contentId": "ID_3EdP4O159I0"
                    }
                ],
                "isLeaf": false
            },
            {
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220422-1",
                "periodTime": "3",
                "budgetVersion": 3,
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3D$8ov23ECg:3:15",
                "version": 1,
                "active": true,
                "createTime": 1650794499884,
                "updateTime": 1650794499884,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetMoney": 300.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
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
                        "contentId": "ID_3EdP4O159I0"
                    }
                ],
                "isLeaf": false
            },
            {
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220422-1",
                "periodTime": "4",
                "budgetVersion": 3,
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3D$8ov23ECg:3:16",
                "version": 1,
                "active": true,
                "createTime": 1650794499884,
                "updateTime": 1650794499884,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetMoney": 400.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
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
                        "contentId": "ID_3EdP4O159I0"
                    }
                ],
                "isLeaf": false
            },
            {
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220422-1-1",
                "periodTime": "1",
                "budgetVersion": 3,
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3D$8ov23ECg:3:1",
                "version": 1,
                "active": true,
                "createTime": 1650794499880,
                "updateTime": 1650794499880,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetMoney": 100.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
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
                        "contentId": "ID_3EdP4O159I0"
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "E_system_post",
                        "mustLeaf": true,
                        "contentId": "ID_3Ah8fh60EEg"
                    }
                ],
                "isLeaf": false
            },
            {
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220422-1-1",
                "periodTime": "2",
                "budgetVersion": 3,
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3D$8ov23ECg:3:2",
                "version": 1,
                "active": true,
                "createTime": 1650794499881,
                "updateTime": 1650794499881,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetMoney": 200.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
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
                        "contentId": "ID_3EdP4O159I0"
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "E_system_post",
                        "mustLeaf": true,
                        "contentId": "ID_3Ah8fh60EEg"
                    }
                ],
                "isLeaf": false
            },
            {
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220422-1-1",
                "periodTime": "3",
                "budgetVersion": 3,
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3D$8ov23ECg:3:3",
                "version": 1,
                "active": true,
                "createTime": 1650794499881,
                "updateTime": 1650794499881,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetMoney": 300.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
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
                        "contentId": "ID_3EdP4O159I0"
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "E_system_post",
                        "mustLeaf": true,
                        "contentId": "ID_3Ah8fh60EEg"
                    }
                ],
                "isLeaf": false
            },
            {
                "budgetId": "ID_3D$8ov23ECg",
                "nodeId": "20220422-1-1",
                "periodTime": "4",
                "budgetVersion": 3,
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3D$8ov23ECg:3:4",
                "version": 1,
                "active": true,
                "createTime": 1650794499881,
                "updateTime": 1650794499881,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetMoney": 400.0,
                "confirmedMoney": 0,
                "occupiedMoney": 0,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
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
                        "contentId": "ID_3EdP4O159I0"
                    },
                    {
                        "dimensionType": "PROJECT",
                        "dimensionId": "E_system_post",
                        "mustLeaf": true,
                        "contentId": "ID_3Ah8fh60EEg"
                    }
                ],
                "isLeaf": false
            }
        ],
        "count": 2,           //查询节点和其子节点的总数
        "visibilities": [     //预算可见性（预算负责人）
            {
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3Ee6WVB0fcw",             
                "version": 3,
                "active": true,
                "createTime": 1650622302478,
                "updateTime": 1650622302478,
                "corporationId": "bwa3wajigF0WH0",  //企业ID
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetId": "ID_3D$8ov23ECg",       //预算包ID
                "budgetVersion": 3,                 //预算版本
                "nodeId": "20220422-1",             //预算节点ID
                "roleDefIds": [],                   //角色ID集合
                "staffIds": [                       //员工ID集合 
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ]
            },
            {
                "pipeline": 1,
                "grayver": "9.25.0.0:A",
                "id": "ID_3Ee6WVB0gcw",
                "version": 3,
                "active": true,
                "createTime": 1650622302478,
                "updateTime": 1650622302478,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetId": "ID_3D$8ov23ECg",
                "budgetVersion": 3,
                "nodeId": "20220422-1-1",
                "roleDefIds": [],
                "staffIds": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ]
            }
        ],
        "editInChargers": [               //预算编制人
            {
                "nodeId": "20220422-1",   //预算节点ID
                "roleDefIds": [],         //角色ID集合
                "staffIds": [             //员工ID集合
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ],
                "pipeline": 1,
                "grayver": "9.23.0.0:A",
                "id": "ID_3Ee6WVB0hcw",
                "version": 1,
                "active": true,
                "createTime": 1650622302544,
                "updateTime": 1650622302544,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetId": "ID_3D$8ov23ECg", //预算包ID
                "budgetVersion": 3            //预算版本
            },
            {
                "nodeId": "20220422-1-1",
                "roleDefIds": [],
                "staffIds": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ],
                "pipeline": 1,
                "grayver": "9.23.0.0:A",
                "id": "ID_3Ee6WVB0icw",
                "version": 1,
                "active": true,
                "createTime": 1650622302544,
                "updateTime": 1650622302544,
                "corporationId": "bwa3wajigF0WH0",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "budgetId": "ID_3D$8ov23ECg",
                "budgetVersion": 3
            }
        ]
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 不存在的预算包 | 请确认 `budgetId`（预算包ID）是否正确 |
| **500** | - | Format specifier '%s' | 程序内部错误，返回此响应数据， 可尝试再次请求获取数据 |


