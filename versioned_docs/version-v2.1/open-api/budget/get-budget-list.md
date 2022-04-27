# 获取预算包列表

返回企业下全部预算包信息，对于 **草稿** 状态的也会返回（需要判断预算包所处的状态取用数据）。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/budgets"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/budgets?accessToken=ID_3D$9pAVgeG0:bwa3wajigF0WH0'
```

## 成功响应
```json
{
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.16.0.0:A",
            "id": "ID_3BKMdBcdK7g",       //预算包ID
            "version": 1,                 //预算版本
            "active": false,              //是否激活，true：发布，false：草稿
            "createTime": 1648019160064,  //创建日期
            "updateTime": 1648019484117,  //更新日期
            "name": "测试预算",           //预算包名称
            "nameSpell": "CESHIYUSUAN",
            "corporationId": "bwa3wajigF0WH0", //企业ID
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "period": {                    //预算年度
                "annual": "2022",          //控制年度
                "period": "YEAR",          //年度内分割方式，MONTH: 按月份, SEASON: 按季度, HALF_YEAR: 半年, YEAR: 整年, null: 非周期控制
                "startTime": 1641020760104,//非周期控制开始时间
                "endTime": 1672470360104   //非周期控制结束时间
            },
            "tree": null,
            "delete": false,               //预算是否删除
            "extendMoneys": null,
            "legalEntityIds": [],
            "budgetCurrency": null,
            "isCustom": false,             //是否自定义区间
            "isRollCalc": false,           //是否滚动预算
            "isEdit": false,               //预算包编制状态
            "isCalcEnd": true              //是否计算执行完毕
        },
        {
            "pipeline": 1,
            "grayver": "9.24.0.0:A",
            "id": "ID_3D$8ov23ECg",
            "version": 1,
            "active": true,
            "createTime": 1650359969300,
            "updateTime": 1650359969300,
            "name": "测试预算-1",
            "nameSpell": "CESHIYUSUAN-1",
            "corporationId": "bwa3wajigF0WH0",
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "period": {
                "annual": "2022",
                "period": "SEASON",
                "startTime": 1641028769360,
                "endTime": 1672478369360
            },
            "tree": null,
            "delete": false,
            "extendMoneys": null,
            "legalEntityIds": [],
            "budgetCurrency": null,
            "isCustom": false,
            "isRollCalc": false,
            "isEdit": false,
            "isCalcEnd": true
        }
    ]
}
```

