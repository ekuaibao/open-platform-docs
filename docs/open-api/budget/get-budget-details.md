# 获取预算树详细信息
返回单个预算树的全部信息，包括预算执行情况。

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v2/budgets/$`budgetId`"
/>

:::caution
不推荐使用，本接口依赖于服务的性能，当后台判定要查询的预算树超过2000个节点时此接口就会报错。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String | 预算树ID | 必填 | - | [预算树ID获取](/docs/open-api/budget/get-budget-list) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
 curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00?accessToken=f_kbtOJVVwdo00' \
 --header 'content-type: application/json' \
 --header 'Accept: application/json'
```

## 成功响应
```json
{
    "value": {
        "budgetInfo": {
            "budgetInfo": {                     //预算树信息
                "id": "u6wbqiMW0Yqo00",         //预算ID
                "version": 1,                   //预算版本
                "active": true,                 //是否激活
                "createTime": 1597314328513,
                "updateTime": 1597994882124,
                "name": "预算2020",              //预算名称
                "nameSpell": "YUSUAN2020",  
                "corporationId": "zKIbl2WX4I8I00",   //企业编号
                "period": {                          //预算年度
                        "annual": "2020",            //控制年度
                        "period": "MONTH",           //年度内分割方式，MONTH: 按月份, SEASON: 按季度, HALF_YEAR: 半年, YEAR: 整年, null: 非周期控制。
                        "startTime": 1577857343984,  //非周期控制开始时间
                        "endTime": 1609393343984     //非周期控制结束时间
                },
                "tree": null,
                "delete": false,           //预算是否删除
                "extendMoneys": null,
                "dimensionIds": {          //预算内部的全部维度值
                    "feeTypeId": "FEE_TYPE"
                },
                "isEdit": false,           //预算包编制状态
                "isCustom": false,         //预算周期是否是自定义
                "isRollCalc": false        //预算是否是滚动预算
            },
            "tree": {
                "id": "1597314178620",     //预算节点id
                "code": "1001",            //节点编号
                "content": [               //节点维度
                            {
                                "dimensionType":"FEE_TYPE",               //维度种类(DEPART: 部门，PROJECT：档案，FEE_TYPE：消费类型，STAFF：员工)
                                "dimensionId":"feeTypeId",                //维度种类的标识ID
                                "mustLeaf":true,                          //维度是否必定为叶节点(本部)
                                "contentId":"zKIbl2WX4I8I00:allowance"    //维度内容id
                            }
                ],
                "moneys": [                          //节点金额
                    {
                        "nodeId": "1597314178620",   //预算节点id
                        "periodTime": "1",           //第几个周期
                        "budgetMoney": 355000,       //预算总额
                        "extendMoneys": {}           //参考金额
                    }
                ],
                "control": "FORBID",                 //预算节点的控制方式
                "children": [                        //预算子节点
                    {
                        "id": "1597314291146003",
                        "code": "",
                        "content": [
                            {
                                "dimensionType": "FEE_TYPE",
                                "dimensionId": "feeTypeId",
                                "mustLeaf": true,
                                "contentId": "zKIbl2WX4I8I00:allowance"
                            }
                        ],
                        "moneys": [
                            {
                                "nodeId": "1597314291146003",
                                "periodTime": "1",
                                "budgetMoney": 20000,
                                "extendMoneys": {}
                            }
                        ],
                        "control": "ALLOW",
                        "children": [],
                        "name": "",
                        "overControllerRate": 100
                    },
                    ...
                ],
                "name": "",                 //预算节点名称
                "overControllerRate": 100   //预算超标比例
            }
        },
        "moneys": [
            {
                "id": "u6wbqiMW0Yqo00:1:4",
                "corporationId": "zKIbl2WX4I8I00",
                "budgetId": "u6wbqiMW0Yqo00",
                "nodeId": "1597314273579000",
                "periodTime": "1",
                "budgetMoney": 75000,
                "confirmedMoney": 621,
                "occupiedMoney": 211,
                "budgetMoneyRoll": 0,
                "confirmedMoneyRoll": 0,
                "occupiedMoneyRoll": 0,
                "extendMoneys": {},
                "dimensionContents": [
                    {
                        "dimensionType": "FEE_TYPE",
                        "dimensionId": "feeTypeId",
                        "mustLeaf": true,
                        "contentId": "zKIbl2WX4I8I00:office"
                    }
                ],
                "name": "办公用品"
            },
            ...
        ],
        "visibilities": [
            {
                "id": "6pEbqiMW0Yrc00",
                "version": 2,
                "active": true,
                "createTime": 1597314328513,
                "updateTime": 1597994882143,
                "corporationId": "zKIbl2WX4I8I00",
                "budgetId": "u6wbqiMW0Yqo00",
                "budgetVersion": 1,
                "nodeId": "1597314178620",
                "roleDefIds": [],
                "staffIds": [
                    "zKIbl2WX4I8I00:h5wbhuSCoQh000"
                ]
            }
        ],
        "log": "龚恒 于 2020.08.21 15:28:02 对预算进行了修改"
    }
}
```

