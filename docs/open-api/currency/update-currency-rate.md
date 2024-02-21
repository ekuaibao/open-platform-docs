# 更新币种汇率

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2.1/currency/currencyRate"
/>

:::caution
- 使用此接口需要开通【**币种设置**】功能。
:::

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.12.0**](/updateLog/update-log#1120)
  - 🚀 接口升级 `v2.1` 版本，更新了接口路径并支持了可更新不同本位币对应不同原币的汇率（需开通【**法人实体多币种**】）。

</div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **orgCode** | String | 本位币字母代码 | 非必填 | `CNY` | 如您已开通【**法人实体多币种**】，则可传入不同本位币对应不同原币的汇率 |
| **strCodes** | Array | 原币与本位币币种汇率   | 必填 | - | 原币与本位币币种汇率 |
| **&emsp; ∟ strCode** | String | 原币字母代码 | 必填 | - | 通过 [获取企业当前生效的币种信息](/docs/open-api/currency/get-currency) 获取<br/>例如：美元 : `USD`  |
| **&emsp; ∟ rate**    | String | 汇率        | 必填 | - | 汇率 |

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.1/currency/currencyRate?accessToken=ID01lMOs4FUjYr:xgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "orgCode": "CNY",
    "strCodes":[
        {
            "strCode": "JPY",
            "rate": "5.1"
        },
        {
            "strCode": "EUR",
            "rate": "5.1"
        }
    ]
}'
```

## 成功响应
```json
{
    "items": [
        {
            "orgCode": "CNY",                    //本位币字母代码
            "currInfos": [                       //币种汇率信息
                {
                    "pipeline": 1,
                    "grayver": "9.87.0.0-prd",
                    "id": "ID01lMOpPE9mMf",      //ID 
                    "version": 1,                //版本号
                    "active": true,              //是否有效
                    "createTime": 1671706394670, //创建时间
                    "updateTime": 1671706394670, //更新时间
                    "corporationId": "xgJ3wajigF25H0", //企业ID
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "numCode": "392",            //原币数字代码
                    "strCode": "JPY",            //原币字符代码
                    "scale": 0,                  //精度
                    "name": "日圆",              //原币名称
                    "symbol": "J¥",              //原币符号
                    "unit": "圆",                //原币单位
                    "icon": "http://images.ekuaibao.com/currency/jpy.png", //原币图标
                    "rate": "5.1",               //核算汇率（核算汇率 = 本位币：消费币种）
                    "budgetRate": null,          //预算汇率（预算汇率 = 本位币：预算币种）
                    "startTime": 1671706380000,  //汇率生效开始时间 
                    "endTime": 4638916800000,    //汇率生效结束时间
                    "order": 1652250766106,      //排序
                    "originalId": "156",
                    "isDefault": false
                },
                {
                    "pipeline": 1,
                    "grayver": "9.87.0.0-prd",
                    "id": "ID01lMOpPE9n2L",
                    "version": 1,
                    "active": true,
                    "createTime": 1671706394670,
                    "updateTime": 1671706394670,
                    "corporationId": "xgJ3wajigF25H0",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "numCode": "978",
                    "strCode": "EUR",
                    "scale": 2,
                    "name": "欧元",
                    "symbol": "€",
                    "unit": "欧元",
                    "icon": "http://images.ekuaibao.com/currency/eur.png",
                    "rate": "5.1",
                    "budgetRate": null,
                    "startTime": 1671706380000,
                    "endTime": 4638916800000,
                    "order": 1662607618770,
                    "originalId": "156",
                    "isDefault": false
                }
            ]
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 不支持USD币种!!! | 请确认 `orgCode`（本位币字母代码）在系统上已经添加了传参的外币币种 | 
| **412** | - | DZD“未开通功能【法人实体多币种】 | 请确认 `strCode`（原币字母代码）在系统上已经添加到了本位币中 | 