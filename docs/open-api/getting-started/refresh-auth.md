# 刷新授权
在授权码过期前，可使用此接口刷新有效期。如果 `accessToken` 已经过期，则无法刷新，只能重新获取。

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/auth/refreshToken"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**  | String | 即将过期的授权码 | 必填 | - | 通过上次获取`accessToken`时返回的值 |
| **refreshToken** | String | 刷新的授权码    | 必填 | - |  通过上次获取`accessToken`时返回的值 |
| **powerCode**    | String | 商品授权码      | 必填 | - |  传入`219904`即可   |

> ⚠️注意:
> 
> 刷新后 `accessToken` 和 `refreshToken` 的值都会变化

## CURL
```
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/auth/refreshToken?accessToken=uIEbwJeFbogA00&refreshToken=IBAbwJeFbogE00&powerCode=219904'
```
## 成功响应
```json
{
    "value": {
      "accessToken": "sdsdsdsdsd",      // 授权码，后续所有模块开发需要依赖此返回值
      "refreshToken": "oWUbwJAVVUq000", // 只有调用刷新有效期接口时需要传的token
      "expireTime": 1601802040521,      // 授权码过期日期时间戳(默认2小时后到期)
      "corporationId": "ekuaibao"       //企业id
    }
}
```

## 失败响应
请确保`accessToken`仍在有效使用时间之内，否则返回以下结果：
```text
未授权
```

