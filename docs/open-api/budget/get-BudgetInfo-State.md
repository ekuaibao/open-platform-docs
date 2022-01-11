# 获取预算异步执行结果

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v2/budgets/$`budgetId`/async"
/>

:::caution
调用预算接口时报错 **“预算[XXX预算]未计算完成，请稍等”** 的话，可以先调用本接口，获取预算状态，为 **`DONE(预算计算完成)`** 后再执行调用预算接口操作。
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
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00/async?accessToken=KS4btJTf3o5o00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "value": {
        "status": "DONE",           //预算执行状态，DONE：完成；PROCESSING：计算中；ERROR：上次执行错误
        "errorMessage": null,       //错误消息
        "budgetInfo": {             //状态不是错误时返回预算包信息(预算包信息，同获取预算接口)
            "id": "u6wbqiMW0Yqo00", //预算ID
            "version": 1,           //预算版本
            "active": true,         //是否激活
            "createTime": 1597314328513,
            "updateTime": 1597994882124,
            "name": "预算2020",     //预算名称
            "nameSpell": "YUSUAN2020",  
            "corporationId": "zKIbl2WX4I8I00",  //企业ID
            "period": {               //预算年度
                "annual": "2020",     //控制年度
                "period": "MONTH",    //年度内分割方式，MONTH: 按月份, SEASON: 按季度, HALF_YEAR: 半年, YEAR: 整年, null: 非周期控制。
                "startTime": 1577857343984,  //非周期控制开始时间
                "endTime": 1609393343984     //非周期控制结束时间,
            },
            "tree": null,
            "delete": false,          //预算是否删除
            "extendMoneys": null,
            "dimensionIds": {         //预算内部的全部维度值
                "feeTypeId": "FEE_TYPE" 
            },
            "isEdit": false,          //预算包编制状态
            "isCustom": false,        //预算周期是否是自定义
            "isRollCalc": false       //预算是否是滚动预算
        }
    }
}
```

## 失败响应
预算异步执行完，发生错误，返回此响应数据：
```json
{
    "value": {
        "status": "ERROR",
        "errorMessage": " xxxxxxxxxx ",
        "budgetInfo": null
    }
}
```

