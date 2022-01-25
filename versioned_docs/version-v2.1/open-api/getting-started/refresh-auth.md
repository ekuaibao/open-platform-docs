# 刷新授权
在授权码过期前，可使用此接口刷新有效期。如果 `accessToken` 已经过期，则无法刷新，只能重新获取。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/auth/refreshToken"
/>

:::caution
- 刷新后 `accessToken` 的有效期为默认32天。
- 如果您企业的【**开放接口(新)**】功能授权不足32天，则刷新后有效期为实际剩余授权时间。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**  | String | 即将过期的授权码 | 必填 | - | [获取授权](/docs/open-api/getting-started/auth)返回的 `accessToken` 值 |
| **refreshToken** | String | 刷新的授权码    | 必填 | - | [获取授权](/docs/open-api/getting-started/auth)返回的 `refreshToken` 值 |
| **powerCode**    | String | 功能授权码      | 必填 | - | 传入 `219904` 即可 |

:::tip
- 刷新后 `accessToken` 和 `refreshToken` 的值都会变化。
:::

## CURL
```shell
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/auth/refreshToken?accessToken=uIEbwJeFbogA00&refreshToken=IBAbwJeFbogE00&powerCode=219904'
```

## 成功响应
```json
{
    "value": {
      "accessToken": "sdsdsdsdsd",      //授权码，后续所有模块开发需要依赖此返回值
      "refreshToken": "oWUbwJAVVUq000", //只有调用刷新授权接口时需要传的token
      "expireTime": 1601802040521,      //授权码过期日期时间戳(默认32天后到期)
      "corporationId": "ekuaibao"       //企业id
    }
}
```

## 失败响应
请确保 `accessToken` 仍在有效使用时间之内，否则返回以下结果：
```json
{
    "errorCode": 403,
    "errorMessage": "未授权",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

