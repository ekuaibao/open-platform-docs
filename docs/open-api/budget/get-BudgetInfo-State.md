# 获取预算异步执行结果

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/budgets/$`budgetId`/async"
/>

:::caution
- 调用预算接口时报错 **“预算[XXX预算]未计算完成，请稍等”** 的话，可以先调用本接口，获取预算状态，为 **`DONE(预算计算完成)`** 后再执行调用预算接口操作。
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
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/budgets/$ID_3D$8ov23ECg/async?accessToken=ID_3Eo3_NB0Se0:bwa3wajigF0WH0'
```

## 成功响应
```json
{
    "value": {
        "status": "DONE",              //预算执行状态，DONE：完成；PROCESSING：计算中；ERROR：上次执行错误
        "errorMessage": null,          //错误消息
        "budgetInfo": {                //状态不是错误时返回预算包信息（预算包信息，同【获取预算包详细信息】接口）
            "pipeline": 1,
            "grayver": "9.25.0.0:A",
            "id": "ID_3D$8ov23ECg",    //预算ID
            "version": 3,              //预算版本
            "active": false,           //是否激活，true：发布，false：草稿
            "createTime": 1650359969300,
            "updateTime": 1650795420877,
            "name": "测试预算-1",       //预算包名称
            "nameSpell": "CESHIYUSUAN-1",
            "corporationId": "bwa3wajigF0WH0",  //企业ID
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "period": {                      //预算年度
                "annual": "2022",            //控制年度
                "period": "SEASON",          //年度内分割方式，MONTH: 按月份, SEASON: 按季度, HALF_YEAR: 半年, YEAR: 整年, null: 非周期控制
                "periodControl": "NATURAL_SEASON", //自然期间拆解（跨财年预算包需要关注）
                "startTime": 1641028769360,  //非周期控制开始时间/自定义财年区间-开始时间
                "endTime": 1672478369360     //非周期控制结束时间/自定义财年区间-截止时间
            },
            "tree": null,
            "delete": false,           //预算是否删除
            "extendMoneys": null,
            "legalEntityIds": [],
            "budgetCurrency": null,
            "dimensionIds": {          //预算内部的全部维度值
                "项目": "PROJECT",
                "submitterId": "STAFF",
                "E_system_post": "PROJECT",
                "E_system_rank": "PROJECT"
            },
            "isFiscalYear": true,      //是否跨财年
            "isCustom": false,         //预算周期是否是自定义
            "isRollCalc": false,       //预算是否是滚动预算
            "isEdit": false            //预算包编制状态
        }
    }
}
```

## 失败响应
预算异步执行完发生错误时，返回如下：
```json
{
    "value": {
        "status": "ERROR",
        "errorMessage": " xxxxxxxxxx ",
        "budgetInfo": null
    }
}
```

