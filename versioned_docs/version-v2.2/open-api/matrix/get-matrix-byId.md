# 根据矩阵ID获取矩阵明细

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/matrix/search/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.27.0**](/updateLog/update-log#1270)
  - 🆕 新增了本接口。

</div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 审批矩阵ID | 必填 | - | 通过 [获取企业下所有审批矩阵](/docs/open-api/matrix/get-matrixs) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	    | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters
| 名称         | 类型     | 描述    | 是否必填 | 默认值 | 备注       |
|:-----------|:-------|:------| :--- |:----|:---------|
| **limit**  | Object | 分页限制  | 必填  | -   | 分页限制     |
| **&emsp; ∟ start**  | Number | 分页查询的起始序号	 | 必填  | `0` | 分页的起始值是从 `0` 开始， 而不是传统的 `1` 开始 |
| **&emsp; ∟ count**  | Number | 查询数据条数		     | 必填  | -   | 最大不能超过 `100` |

## CURL
```json
curl --location 'https://app.ekuaibao.com/api/openapi/v2/matrix/search/ID01wg5CyS5pg3?accessToken=ID01w7kdimGV3N%3APCx3rwm3aA00qM' \
--header 'Content-Type: application/json' \
--data '{
    "limit": {
        "start": 0,   
        "count": 20
    }
}'
```

## 成功响应
```json
{
    "count": 2,             //矩阵明细总数量            
    "items": [
        {
            "id": "ID01wg5CyS5UGX",                                   //矩阵明细ID
            "staffRange": null,                                       //审批人         
            "rule": [                                                 //条件字段信息
                {
                    "fieldConfigId": "ID01wfTnL9iwCb",                //条件字段配置ID
                    "ids": [                                          //条件字段匹配值
                        {                                             //员工类型字段
                            "id": "PCx3rwm3aA00qM:VWf3rvZHCb0ghM",    //员工ID
                            "name": "张国阳",                          //员工名称
                            "code": "00000",                          //员工编号
                            "phone": "18879049220",                   //员工手机号
                            "email": "18879049220@qq.com",            //员工邮箱
                            "active": true                            //员工是否在职  true：在职  false：离职
                        }
                    ]
                },
                {
                    "fieldConfigId": "ID01wfTnL9iwSH",                //条件字段配置ID
                    "ids": [                                          //条件字段匹配值
                        {                                             //费用类型字段
                            "id": "PCx3rwm3aA00qM:office",            //费用明细模板ID
                            "name": "办公用品",                         //费用明细模板名称
                            "code": "COST1",                          //费用明细模板编码
                            "phone": null,
                            "email": null,
                            "active": true                           //费用明细模板是否停用  true：启用  false：停用
                        }
                    ]
                },
                {
                    "fieldConfigId": "ID01wfTnL9ix9d",                //条件字段配置ID
                    "ids": [                                          //条件字段匹配值
                        {                                             //数字、金额类型字段
                            "id": "10",                               //运算匹配值
                            "name": null,
                            "code": null,
                            "phone": null,
                            "email": null,
                            "active": null
                        }
                    ]
                },
                {
                    "fieldConfigId": "ID01wfTnL9ixpJ",                //条件字段配置ID
                    "ids": [                                          //条件字段匹配值
                        {                                             //数字、金额类型字段
                            "id": "100",                              //运算匹配值
                            "name": null,
                            "code": null,
                            "phone": null,
                            "email": null,
                            "active": null
                        }
                    ]
                }
            ],
            "resultRule": [                                           //结果字段信息
                {
                    "resultConfigId": "ID01wfTnL9izhl",               //结果字段配置ID
                    "rule": [                                         //特有条件配置信息
                        {
                            "fieldConfigId": "ID01wfTnL9iydh",        //特有条件配置ID
                            "ids": [                                  //特有条件匹配值
                                {                                     //数字、金额类型字段
                                    "id": "11",                       //运算匹配值
                                    "name": null,
                                    "code": null,
                                    "phone": null,
                                    "email": null,
                                    "active": null
                                }
                            ]
                        },
                        {
                            "fieldConfigId": "ID01wfTnL9iytN",        //特有条件配置ID
                            "ids": [                                  //特有条件匹配值
                                {                                     //数字、金额类型字段
                                    "id": "99",                       //运算匹配值
                                    "name": null,
                                    "code": null,
                                    "phone": null,
                                    "email": null,
                                    "active": null
                                }
                            ]
                        },
                        {
                            "fieldConfigId": "ID01wj7Z0952QT",        //特有条件配置ID
                            "ids": [                                  //特有条件匹配值
                                {                                     //城市类型字段
                                    "id": "[{\"key\":\"2\",\"label\":\"北京市/北京市区\"}]", //城市数据
                                    "name": null,
                                    "code": null,
                                    "phone": null,
                                    "email": null,
                                    "active": null
                                }
                            ]
                        }
                    ],
                    "staffRange": {                                    //审批人配置
                        "staffIds": [                                  //员工信息
                            {
                                "id": "PCx3rwm3aA00qM:VWf3rvZHCb0ghM", //员工ID
                                "name": "张国阳",                       //员工名称
                                "code": "00000",                       //员工编号
                                "phone": "18879049220",                //员工手机号
                                "email": "18879049220@qq.com",         //员工邮箱
                                "active": true                         //员工是否在职  true：在职  false：离职
                            }
                        ],
                        "roleIds": [],                                 //角色信息
                        "departmentIds": []                            //部门信息
                    }
                },
                {
                    "resultConfigId": "ID01wfTnL9izOn",
                    "rule": [
                        {
                            "fieldConfigId": "ID01wfTnL9izxR",
                            "ids": [
                                {
                                    "id": "PCx3rwm3aA00qM:catering",
                                    "name": "餐饮",
                                    "code": "COST2",
                                    "phone": null,
                                    "email": null,
                                    "active": true
                                }
                            ]
                        }
                    ],
                    "staffRange": {
                        "staffIds": [
                            {
                                "id": "PCx3rwm3aA00qM:CQW3qD0gJz3E9M",
                                "name": "豆云谦",
                                "code": "",
                                "phone": "17718535963",
                                "email": "15811943966@163.com",
                                "active": true
                            }
                        ],
                        "roleIds": [],
                        "departmentIds": []
                    }
                },
                {
                    "resultConfigId": "ID01wfTnL9iAlp",
                    "rule": [
                        {
                            "fieldConfigId": "ID01wfTnL9iA4T",
                            "ids": []
                        }
                    ],
                    "staffRange": {
                        "staffIds": [
                            {
                                "id": "PCx3rwm3aA00qM:SUv3rzY$rz02t0",
                                "name": "冯继成",
                                "code": "00002",
                                "phone": "12222222222",
                                "email": "12222222222@163.com",
                                "active": true
                            }
                        ],
                        "roleIds": [],
                        "departmentIds": []
                    }
                },
                {
                    "resultConfigId": "ID01wh7Wjx5KEL",
                    "rule": [],
                    "staffRange": {
                        "staffIds": [
                            {
                                "id": "PCx3rwm3aA00qM:7IYaGDtLkE0800",
                                "name": "刘京龙",
                                "code": "00003",
                                "phone": "13333333333",
                                "email": "13333333333@163.com",
                                "active": true
                            }
                        ],
                        "roleIds": [],
                        "departmentIds": []
                    }
                }
            ],
            "priority": 1     //优先级 
        },
        {
            "id": "ID01wg5CyS5Xm7",
            "staffRange": null,
            "rule": [
                {
                    "fieldConfigId": "ID01wfTnL9iwCb",
                    "ids": [
                        {
                            "id": "PCx3rwm3aA00qM:SUv3rzY$rz02t0",
                            "name": "冯继成",
                            "code": "00002",
                            "phone": "12222222222",
                            "email": "12222222222@163.com",
                            "active": true
                        }
                    ]
                },
                {
                    "fieldConfigId": "ID01wfTnL9iwSH",
                    "ids": [
                        {
                            "id": "PCx3rwm3aA00qM:catering",
                            "name": "餐饮",
                            "code": "COST2",
                            "phone": null,
                            "email": null,
                            "active": true
                        }
                    ]
                },
                {
                    "fieldConfigId": "ID01wfTnL9ix9d",
                    "ids": [
                        {
                            "id": "5",
                            "name": null,
                            "code": null,
                            "phone": null,
                            "email": null,
                            "active": null
                        }
                    ]
                },
                {
                    "fieldConfigId": "ID01wfTnL9ixpJ",
                    "ids": [
                        {
                            "id": "50",
                            "name": null,
                            "code": null,
                            "phone": null,
                            "email": null,
                            "active": null
                        }
                    ]
                }
            ],
            "resultRule": [
                {
                    "resultConfigId": "ID01wfTnL9izhl",
                    "rule": [
                        {
                            "fieldConfigId": "ID01wfTnL9iydh",
                            "ids": [
                                {
                                    "id": "0",
                                    "name": null,
                                    "code": null,
                                    "phone": null,
                                    "email": null,
                                    "active": null
                                }
                            ]
                        },
                        {
                            "fieldConfigId": "ID01wfTnL9iytN",
                            "ids": [
                                {
                                    "id": "0",
                                    "name": null,
                                    "code": null,
                                    "phone": null,
                                    "email": null,
                                    "active": null
                                }
                            ]
                        }
                    ],
                    "staffRange": {
                        "staffIds": [
                            {
                                "id": "PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                                "name": "张国阳",
                                "code": "00000",
                                "phone": "18879049220",
                                "email": "18879049220@qq.com",
                                "active": true
                            }
                        ],
                        "roleIds": [],
                        "departmentIds": []
                    }
                },
                {
                    "resultConfigId": "ID01wfTnL9izOn",
                    "rule": [
                        {
                            "fieldConfigId": "ID01wfTnL9izxR",
                            "ids": []
                        }
                    ],
                    "staffRange": {
                        "staffIds": [
                            {
                                "id": "PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                                "name": "张国阳",
                                "code": "00000",
                                "phone": "18879049220",
                                "email": "18879049220@qq.com",
                                "active": true
                            }
                        ],
                        "roleIds": [],
                        "departmentIds": []
                    }
                },
                {
                    "resultConfigId": "ID01wfTnL9iAlp",
                    "rule": [
                        {
                            "fieldConfigId": "ID01wfTnL9iA4T",
                            "ids": []
                        }
                    ],
                    "staffRange": {
                        "staffIds": [
                            {
                                "id": "PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
                                "name": "张国阳",
                                "code": "00000",
                                "phone": "18879049220",
                                "email": "18879049220@qq.com",
                                "active": true
                            }
                        ],
                        "roleIds": [],
                        "departmentIds": []
                    }
                },
                {
                    "resultConfigId": "ID01wh7Wjx5KEL",
                    "rule": [],
                    "staffRange": {
                        "staffIds": [
                            {
                                "id": "PCx3rwm3aA00qM:Ry8aGDB6xM0c00",
                                "name": "付文杰",
                                "code": "00004",
                                "phone": "14444444444",
                                "email": "14444444444@163.com",
                                "active": true
                            }
                        ],
                        "roleIds": [],
                        "departmentIds": []
                    }
                }
            ],
            "priority": 2     //优先级 
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
|:--------| :--- |:---|:-----|
| **400** | - | 无效的审批矩阵  | 请检查**【审批矩阵ID】**是否正确  |

