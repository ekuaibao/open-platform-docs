# 刷新授权(指定有效时间)
在授权码过期前，可使用此接口刷新有效期。如果 `accessToken` 已经过期，则无法刷新，只能重新获取。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/auth/refreshToken/expireDate"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**0.7.162**](/docs/open-api/notice/update-log#07162) -> 🆕 新增了本接口。<br/>

  </div>
</details>

:::caution
- 如果您企业的【**开放接口(新)**】功能授权不足指定有效时间，则刷新后有效期为实际剩余授权时间。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**  | String | 即将过期的授权码 | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **refreshToken** | String | 刷新的授权码    | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `refreshToken` |
| **expireDate**   | String | 有效天数       | 必填 | - | 单位：天 |
| **powerCode**    | String | 功能授权码      | 必填 | - | 传入 `219904` 即可 |

:::tip
- 刷新后 `accessToken` 和 `refreshToken` 的值都会变化。
:::

## CURL
```shell
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/auth/refreshToken/expireDate?accessToken=ID_3vMMouDbGqM:djg8LshfUkfM00&refreshToken=ID_3vMMouDbHqM:djg8LshfUkfM00&expireDate=1&powerCode=219904'
```

## 成功响应
```json
{
  "value": {
    "accessToken": "ID_3vMKHHg9gG0:djg8LshfUkfM00",   //授权码，后续所有模块开发需要依赖此返回值
    "refreshToken": "ID_3vMKHHg9hG0:djg8LshfUkfM00",  //只有调用刷新授权接口时需要传的token
    "expireTime": 1641626383724,                      //授权码过期日期时间戳 = 当前日期时间戳 + 有效天数
    "corporationId": "djg8LshfUkfM00"                 //企业id
  }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **403** | - | 未授权 | 请确认 `accessToken`（认证token）是否已过期<br/>请确认 **地址前缀** 与您的企业环境一致 |