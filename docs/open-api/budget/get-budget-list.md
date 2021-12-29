# 获取预算树列表

返回企业全部预算树信息，对于草稿状态的也会返回记录。开发者需要判断预算包所处的状态。

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v2/budgets"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/budgets?accessToken=KS4btJTf3o5o00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "d8MalZSgiYh000",//预算树id
            "version": 8,//预算版本
            "active": true,// 是否激活
            "createTime": 1578980543973,  //创建日期
            "updateTime": 1582353878353,  //更新日期
            "name": "预算2020",   //预算名称
            "nameSpell": "YUSUAN2020",
            "corporationId": "e4A8oQS29g0w00",  //企业编码
            "period": { //预算年度
                "annual": "2020",//控制年度
                "period": "MONTH",// 年度内分割方式，MONTH: 按月份, SEASON: 按季度, HALF_YEAR: 半年, YEAR: 整年, null: 非周期控制。
                "startTime": 1577857343984,// 非周期控制开始时间
                "endTime": 1609393343984  // 非周期控制结束时间
            },
            "tree": null,
            "delete": false,  //预算是否删除
            "extendMoneys": null,
            "isCustom": false,// 是否自定义区间
            "isRollCalc": false,// 是否滚动预算
            "isEdit": false,
            "isCalcEnd": true //是否计算执行完毕
        }
    ]
}
```

