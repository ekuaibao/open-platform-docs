# 配置企微单点原生授权信息

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/yibridge"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **corpId**            | String | 易快报企业ID | 必填 | - | 易快报企业ID |
| **qwCorpId**          | String | 企业微信企业ID | 必填 | - | 企业微信管理后台获取（**必须是明文的企业ID**） |
| **qwCorpName**        | String | 企业微信企业名称 | 必填 | - | 企业微信管理后台获取 |
| **agentId**           | String | 企业微信应用的agentId | 必填 | - | 企业微信管理后台获取 |
| **agentSecret**       | String | 企业微信应用的secret | 必填 | - | 企业微信管理后台获取 |
| **corpUserMax**       | Integer | 企业最大员工数   | 非必填 | - | 企业最大员工数 |
| **corpWxqrcode**      | String | 企业微信二维码   | 非必填 | - | 企业微信管理后台获取 |
| **corpSquareLogoUrl** | String | 企业logo图片url   | 非必填 | - | 企业微信管理后台获取 |
| **authUserId**        | String | 授权用户id   | 非必填 | - | 企业微信管理后台获取 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/yibridge?accessToken=ID01kNRYIneBb1:djg8LshfUkfM00' \
--header 'content-type: application/json' \
--header 'Cookie: acw_tc=0a099d6e16687383609371695e9842384a2bc8dec417535a8d5d59d9a0bafc' \
--data-raw '{
    "corpId": "rGN3lum_4o00hM",
    "qwCorpId": "wwasddvra2b51a45743",
    "agentId": "1000080",
    "agentSecret": "m36fdOGrweSWz5zsfBBu4UmwMgfrbR2I2W6X3EDHc0zTU888",
    "qwCorpName": "某某某信息技术有限公司",
    "corpUserMax": 139300,
    "corpWxqrcode": "https://xxxxx.xxxx.cn/wwpic/546296_0L_Vd9xxxKPak_xxxx6202/0",
    "corpSquareLogoUrl": "https://x.xxxx.cn/bizmail/3MvQhk7tUxxxxxxxcWqucEvvFxLNagkOxxxxxxxxxxxRxibVFg/0",
    "authUserId": "1000446"
}'
```

## 成功响应
```json
{
    "value": {
        "corpId": "rGN3lum_4o00hM",
        "qwCorpId": "wwasddvra2b51a45743",
        "agentId": "1000080",
        "agentSecret": "m36fdOGrweSWz5zsfBBu4UmwMgfrbR2I2W6X3EDHc0zTU888",
        "qwCorpName": "某某某信息技术有限公司",
        "state" : "SUCCESS"
    }
}
```

