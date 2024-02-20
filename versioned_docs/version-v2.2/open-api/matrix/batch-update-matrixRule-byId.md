# 批量新增或更新矩阵明细

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/matrix/updateRuleBatch/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.27.0**](/updateLog/update-log#1270) -> 🆕 新增了本接口。<br/>

  </div>
</details>

:::caution
- 更新时为 **全量更新**，若部分字段配置未传参，则会清空该字段配置值
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 审批矩阵ID | 必填 | - | 通过 [获取企业下所有审批矩阵](/docs/open-api/matrix/get-matrixs) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	    | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters
**目前支持的字段类型：员工、部门、自定义档案、费用类型、城市（同单据传参格式）、金额、数字**

| 名称         | 类型     | 描述    | 是否必填 | 默认值 | 备注       |
|:-----------|:-------|:------| :--- |:----|:---------|
| **--**                                | Array  |  外层数组  | 必填  | - | 外层数组 |
| **&emsp; ∟ id**                      | String | 规则明细ID      | 非必填 | -  | **更新矩阵明细时必填**<br/>通过 [根据矩阵ID获取矩阵明细](/docs/open-api/matrix/get-matrix-byId) 获取 |
| **&emsp; ∟ rule**                    | Array | 条件字段信息     | 必填  | -  | 条件字段信息 |
| **&emsp; &emsp; ∟ fieldConfigId**    | String | 条件字段配置ID	  | 必填  | -  | 条件字段配置ID |
| **&emsp; &emsp; ∟ ids**              | Array  | 条件字段匹配值	  | 必填  | -  | 条件字段匹配值具体信息 |
| **&emsp; &emsp;&emsp; ∟ id**         | String | 条件字段匹配值ID | 必填  | -  | 条件字段匹配值ID |
| **&emsp; ∟ resultRule**              | Object | 结果字段信息    | 必填  | -  | 结果字段信息  |
| **&emsp; &emsp; ∟ resultConfigId**   | String | 结果字段配置ID   | 必填  | -  | 结果字段配置ID |
| **&emsp; &emsp; ∟ rule**             | Object | 特有条件配置信息  | 非必填  | -  | 特有条件配置信息 |
| **&emsp; &emsp; &emsp; ∟ fieldConfigId**  | String | 特有条件配置ID | 必填  | -  | 特有条件配置ID |
| **&emsp; &emsp; &emsp; ∟ ids**       | Array  | 特有条件字段匹配值  | 必填  | -  | 特有条件字段匹配值 |
| **&emsp; &emsp; &emsp; &emsp; ∟ id** | String | 特有条件匹配值ID	| 必填  | -  | 特有条件匹配值ID |
| **&emsp; &emsp; ∟ staffRange**       | Object | 审批人配置信息  | 非必填  | -  | 审批人配置信息  |
| **&emsp; &emsp; &emsp; ∟ staffIds**  | String | 审批人信息 | 必填  | -  | 审批人信息 |
| **&emsp; &emsp; &emsp; &emsp; ∟ id** | String | 审批人ID	| 必填  | -  | 审批人ID，通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |
| **&emsp; ∟ priority**                | Number | 优先级     | 非必填  | 1  | 优先级不可重复，传入已存在优先级时，系统会重新排序 |

## CURL
```json
curl --location 'https://app.ekuaibao.com/api/openapi/v2/matrix/updateRule/$ID01wh4O1Yl1Cv?accessToken=ID01wiQRnmMuUn%3APCx3rwm3aA00qM' \
--header 'Content-Type: application/json' \
--data '[
    {                                                 //更新矩阵明细
        "id": "ID01wh7Wjx8IZV",                       //矩阵明细ID
        "rule": [                                     //条件字段信息
            {
                "fieldConfigId": "ID01wh7WjsCS51",    //条件字段配置ID
                "ids": [
                    {
                        "id": "3"                     //条件字段匹配值ID
                    }
                ]
            },
            {
                "fieldConfigId": "ID01wh7WjsCSlx",
                "ids": [
                    {
                        "id": "101"
                    }
                ]
            },
            {
                "fieldConfigId": "ID01wh7WjsCSC3",
                "ids": [
                    {
                        "id": "PCx3rwm3aA00qM:office"
                    }
                ]
            },
            {
                "fieldConfigId": "ID01wh7Wjx8T7x",
                "ids": [
                    {
                        "id": "ID_3JHINML06sf"
                    }
                ]
            }
        ],
        "resultRule": [                                       //结果字段信息
            {
                "resultConfigId": "ID01wh7WjsCSSz",           //结果字段配置ID
                "rule": [                                     //特有条件配置信息
                    {
                        "fieldConfigId": "ID01wiTo7NjUM7",    //特有条件配置ID
                        "ids": [
                            {
                                "id": "5"                     //特有条件匹配值ID 
                            }
                        ]
                    }
                ],
                "staffRange": {
                    "staffIds": [
                        {
                            "id": "PCx3rwm3aA00qM:VWf3rvZHCb0ghM"
                        }
                    ],
                    "roleIds": [],
                    "departmentIds": []
                }
            },
            {
                "resultConfigId": "ID01wiTo7NjV2D",
                "rule": [],
                "staffRange": {
                    "staffIds": [
                        {
                            "id": "PCx3rwm3aA00qM:jBB3t$VjpK0fbw"
                        }
                    ],
                    "roleIds": [],
                    "departmentIds": []
                }
            }
        ],
        "priority": 2
    },
    {                                      //新增矩阵明细               
        "rule": [
            {
                "fieldConfigId": "ID01wh7WjsCS51",
                "ids": [
                    {
                        "id": "4"
                    }
                ]
            },
            {
                "fieldConfigId": "ID01wh7WjsCSlx",
                "ids": [
                    {
                        "id": "102"
                    }
                ]
            },
            {
                "fieldConfigId": "ID01wh7WjsCSC3",
                "ids": [
                    {
                        "id": "PCx3rwm3aA00qM:office"
                    }
                ]
            },
            {
                "fieldConfigId": "ID01wh7Wjx8T7x",
                "ids": [
                    {
                        "id": "ID_3JHINML06sf"
                    }
                ]
            }
        ],
        "resultRule": [
            {
                "resultConfigId": "ID01wh7WjsCSSz",
                "rule": [
                    {
                        "fieldConfigId": "ID01wiTo7NjUM7",
                        "ids": [
                            {
                                "id": "5"
                            }
                        ]
                    }
                ],
                "staffRange": {
                    "staffIds": [
                        {
                            "id": "PCx3rwm3aA00qM:VWf3rvZHCb0ghM"
                        }
                    ],
                    "roleIds": [],
                    "departmentIds": []
                }
            },
            {
                "resultConfigId": "ID01wiTo7NjV2D",
                "rule": [],
                "staffRange": {
                    "staffIds": [
                        {
                            "id": "PCx3rwm3aA00qM:jBB3t$VjpK0fbw"
                        }
                    ],
                    "roleIds": [],
                    "departmentIds": []
                }
            }
        ],
        "priority": 3
    }
]'
```

## 成功响应
```json
{
  "value": true
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
|:--------| :--- |:---|:-----|
| **400** | - | 未找到规则信息，请检查规则Id是否拼写正确  | 请检查矩阵明细Id是否正确  |
| **412** | - | JSON请求参数不正确  | 请检查传参格式层级是否正确  |