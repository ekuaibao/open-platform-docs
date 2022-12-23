# 获取企业当前生效的币种信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2.1/currency"
/>

:::caution
- 使用此接口需要开通【**币种设置**】功能。
:::

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.12.1**](/docs/open-api/notice/update-log#1121) -> 🚀 接口升级 `v2.1` 版本，更新了接口路径并支持了可按本位币获取对应的原币配置。<br/>

  </div>
</details>

## Query Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2.1/currency?accessToken=XRcbwWBTassg00'
```

## 成功响应
```json
{
    "items": [
        {
            "orgCode": "CNY",             //本位币字母代码
            "currInfos": [                //币种汇率信息
                {
                    "pipeline": 1,
                    "grayver": "9.87.0.0-prd",
                    "id": "ID01lO3UpfYvXp",      //ID
                    "version": 1,                //版本号
                    "active": true,              //是否有效
                    "createTime": 1671767755504, //创建时间
                    "updateTime": 1671767755504, //更新时间
                    "corporationId": "bwa3wajigF0WH0",  //企业ID
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "numCode": "392",            //原币数字代码
                    "strCode": "JPY",            //原币字符代码
                    "scale": 0,                  //精度
                    "name": "日圆",              //原币名称
                    "symbol": "J¥",              //原币符号
                    "unit": "圆",                //原币单位
                    "icon": "http://images.ekuaibao.com/currency/jpy.png",  //原币图标
                    "rate": "1.3",               //核算汇率（核算汇率 = 本位币：消费币种）
                    "budgetRate": null,          //预算汇率（预算汇率 = 本位币：预算币种）
                    "startTime": 1671767700000,  //汇率生效开始时间 
                    "endTime": 4638916800000,    //汇率生效结束时间
                    "order": 1671707319650,      //排序
                    "originalId": "156",
                    "isDefault": false
                },
                {
                    "pipeline": 1,
                    "grayver": "9.87.0.0-prd",
                    "id": "ID01lO3UpfYwdV",
                    "version": 1,
                    "active": true,
                    "createTime": 1671767755505,
                    "updateTime": 1671767755505,
                    "corporationId": "bwa3wajigF0WH0",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "numCode": "978",
                    "strCode": "EUR",
                    "scale": 2,
                    "name": "欧元",
                    "symbol": "€",
                    "unit": "欧元",
                    "icon": "http://images.ekuaibao.com/currency/eur.png",
                    "rate": "3.4",
                    "budgetRate": null,
                    "startTime": 1671767700000,
                    "endTime": 4638916800000,
                    "order": 1671707316407,
                    "originalId": "156",
                    "isDefault": false
                },
                {
                    "pipeline": 1,
                    "grayver": "9.18.0.0:A",
                    "id": "ID_3CBPfuD8NrM",
                    "version": 1,
                    "active": true,
                    "createTime": 1648888534215,
                    "updateTime": 1648888534215,
                    "corporationId": "bwa3wajigF0WH0",
                    "sourceCorporationId": null,
                    "dataCorporationId": null,
                    "numCode": "840",
                    "strCode": "USD",
                    "scale": 2,
                    "name": "美元",
                    "symbol": "$",
                    "unit": "美元",
                    "icon": "http://images.ekuaibao.com/currency/usd.png",
                    "rate": "6.4",
                    "budgetRate": null,
                    "startTime": 1648888500000,
                    "endTime": 4638916800000,
                    "order": 1648888534215,
                    "originalId": "156",
                    "isDefault": false
                }
            ]
        }
    ]
}
```
