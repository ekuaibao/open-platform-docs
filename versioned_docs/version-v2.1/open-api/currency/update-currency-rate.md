# 更新币种汇率

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2/currency/updateCurrencyRate"
/>

:::caution
- 使用此接口需要开通【**币种设置**】功能。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **strCode** | String | 货币字母代码 | 必填 | - | 通过 [获取企业当前生效的币种信息](/docs/open-api/currency/get-currency) 获取<br/>例如：美元 : `USD`  |
| **rate**    | String | 汇率       | 必填 | - | 基于人民币的汇率 |

## CURL
```json
curl --location --request PUT 'http://app.ekuaibao.com/api/openapi/v2/currency/updateCurrencyRate?accessToken=XRcbwWBTassg00' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "strCode":"USD",
        "rate":"10.22"
    },
    {
        "strCode":"USN",
        "rate":"10.8"
    }
]'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "kTMacKJmPAfQ00",            //ID
            "version": 1,                      //版本号
            "active": true,                    //是否有效
            "createTime": 1576493933499,       //创建时间
            "updateTime": 1576493933499,       //更新时间
            "corporationId": "JBwa4AZNzY0000", //企业ID
            "numCode": "997",                  //货币数字代码
            "strCode": "USN",                  //货币字符代码
            "scale": 2,                        //精度
            "name": "美元（次日）",             //货币名称
            "symbol": "$",                     //货币符号
            "unit": "美元",                     //货币单位
            "icon": "http://images.ekuaibao.com/currency/usn.png",  //货币图标
            "rate": "10.8",                    //汇率
            "startTime": 1576493880000,        //汇率生效开始时间
            "endTime": 4638916800000,          //汇率生效结束时间
            "order": 1576493933499             //排序
        },
        {
            "id": "mgEbwZ3iek4M00",
            "version": 1,
            "active": true,
            "createTime": 1599102169126,
            "updateTime": 1599102169126,
            "corporationId": "gwobfjObAAno00",
            "numCode": "840",
            "strCode": "USD",
            "scale": 2,
            "name": "美元",
            "symbol": "$",
            "unit": "美元",
            "icon": "http://images.ekuaibao.com/currency/usd.png",
            "rate": "10.22",
            "startTime": 1599102120000,
            "endTime": 4638916800000,
            "order": 1599100961471
        }
    ]
}
```
