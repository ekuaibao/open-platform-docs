# 获取预算节点和子节点详细信息(分页)

返回查询的预算节点和其子节点信息，包括预算执行情况。

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v2/budgets/$`budgetId`/query"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String  | 预算树id | 必填 | - | [预算树id获取](/docs/open-api/budget/get-budget-list) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**  | String | 认证token      | 必填  | -   | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **nodeId**       | String | 指定查询的节点ID | 非必填 | -   | [预算节点id获取](/docs/open-api/budget/get-budget-details),为空就是查询根节点 |
| **start**        | Number | 查询开始位置     | 必填  | 0   | - |
| **count**        | Number | 查询数量        | 必填  | 100 | 不可超过100 |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00/query?accessToken=f_kbtOJVVwdo00&start=1&count=100' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "value": {
        "nodes": [    //查询的预算节点和其子节点信息
            {
                "id": "rd0bqiMW0Yr000",
                "version": 10,  
                "active": true, // 是否激活
                "createTime": 1597314328513,
                "updateTime": 1597314328513,
                "nameSpell": "",
                "code": "1001", //预算编码
                "corporationId": "zKIbl2WX4I8I00",  //企业编码
                "nodeId": "1597314178620",  //节点编码
                "content": [  //节点维度
                         {
                             "dimensionType":"FEE_TYPE", //维度种类(DEPART: 部门， PROJECT：档案，FEE_TYPE：消费类型， STAFF：员工 )
                             "dimensionId":"feeTypeId", //维度种类的标识ID
                             "mustLeaf":true, //维度是否必定为叶节点(本部)，true:非本级 
                             "contentId":"zKIbl2WX4I8I00:allowance" //维度内容id
                         }
                ],
                "moneys": [     //节点金额
                    {
                        "nodeId": "1597314178620",  //预算节点id
                        "periodTime": "1",    //第几个周期
                        "budgetMoney": 355000,  //预算总额
                        "extendMoneys": {} //参考金额
                    }
                ],
                "control": "FORBID",  //预算节点的控制方式(ALLOW：允许， WARN：警告， FORBID：禁止，IGNORED：什么都不做)
                "overControllerRate": 100, //预算超标比例
                "budgetId": "u6wbqiMW0Yqo00", //预算树id
                "budgetVersion": 1, //预算版本
                "name": "预算2020", //预算名称
                "parentId": "", //父节点编号
                "isLeaf": false //预算节点是否是叶子节点
            },

            ...

        ],
        "monies": [ //查询节点对应的执行情况
            {
                "budgetId": "u6wbqiMW0Yqo00",
                "nodeId": "1597314273579001",
                "periodTime": "1",
                "budgetVersion": 1,
                "id": "u6wbqiMW0Yqo00:1:1",
                "version": 5,
                "active": true,
                "createTime": 1597314330412,
                "updateTime": 1597911655998,
                "corporationId": "zKIbl2WX4I8I00",
                "budgetMoney": 75000, //预算金额
                "confirmedMoney": 0,  //已使用金额
                "occupiedMoney": 30,  //占用金额
                "budgetMoneyRoll": 0, //预算金额(滚动)
                "confirmedMoneyRoll": 0,  //已使用金额(滚动)
                "occupiedMoneyRoll": 30,  //占用金额(滚动)
                "dimensionContents": [  //预算节点占用的全维度
                    {
                        "dimensionType": "FEE_TYPE",  //维度种类(DEPART: 部门， PROJECT：档案，FEE_TYPE：消费类型， STAFF：员工 )
                        "dimensionId": "feeTypeId", //维度种类的标识ID
                        "mustLeaf": true, //维度是否必定为叶节点(本部)
                        "contentId": "zKIbl2WX4I8I00:catering" //维度内容id
                    }
                ],
                "isLeaf": true  //预算节点是否是叶子节点
            },

            ...

        ],
        "count": 3, //查询节点和其子节点的总数
        "visibilities": [   // 预算可见性(预算负责人)
            {
                "id": "6pEbqiMW0Yrc00",
                "version": 2,
                "active": true,
                "createTime": 1597314328513,
                "updateTime": 1597994882143,
                "corporationId": "zKIbl2WX4I8I00",  //企业编号
                "budgetId": "u6wbqiMW0Yqo00", //预算id
                "budgetVersion": 1, //预算版本
                "nodeId": "1597314178620",  //预算节点id
                "roleDefIds": ["角色ID"], //角色id集合
                "staffIds": [  //员工id集合 
                    "zKIbl2WX4I8I00:h5wbhuSCoQh000"
                ]  
            }
        ],
        "editInChargers": [ // 预算编制人
            {
                "nodeId": "1597314178620",  //预算节点id
                "roleDefIds": [], //角色id集合
                "staffIds": [ //员工id集合
                    "zKIbl2WX4I8I00:h5wbhuSCoQh000"
                ],
                "id": "uJ8bqiMW0Yro00",
                "version": 2,
                "active": true,
                "createTime": 1597314329816,
                "updateTime": 1597994882256,
                "corporationId": "zKIbl2WX4I8I00",
                "budgetId": "u6wbqiMW0Yqo00", //预算id
                "budgetVersion": 1 //预算版本
            }
        ]
    }
}
```

## 失败响应
`budgetId` 不存在时， 返回此响应数据。
```json
{
    "errorCode": 400,
    "errorMessage": "不存在的预算包",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

程序内部错误， 返回此响应数据， 可尝试再次请求获取数据。
```json
{
    "errorCode": 500,
    "errorMessage": "Format specifier '%s'",
    "errorDetails": "com.ekuaibao.exile.boot.UnexpectedException: Format specifier '%s'\n\tat ------.remote error from whispered-invoice-rest[release-rest-server-668745ddf6-g8j9d/172.70.23.176](Unknown Source)"
    "code": null,
    "data": null
}
```

