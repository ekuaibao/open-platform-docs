# 获取授权

import Control from "@theme/Control";

<Control
  method="POST"
  url="/api/openapi/v1/auth/getAccessToken"
/>

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **appKey**       | String | 接入账号 | 必填 | - | [获取接入账号，见问题一](/docs/open-api/getting-started/question-answer) |
| **appSecurity**  | String | 接入密码 | 必填 | - | [获取接入密码，见问题一](/docs/open-api/getting-started/question-answer) |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/auth/getAccessToken' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appKey": "xxxx-xxxx-xxx-xxxxx",
    "appSecurity": "xxxxx-xxxx-xxx-xxx"
}'
```

## 成功响应
```json
{
    "value": {
        "accessToken": "u-E4PVy28Q0400",  // 授权码，后续所有模块开发需要依赖此返回值
        "refreshToken": "asg4PVy28Q0800", // 调用【刷新授权】接口时需要传的token
        "expireTime": 1531046137469,      // 授权码过期日期时间戳(默认2小时后到期)
        "corporationId": "34A73EyI8A0w00" // 企业ID
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **403** | - | 密钥无效 | 请确认 `appKey`（接入账号）和 `appSecurity`（接入密码）是否正确<br/>请确认 **地址前缀** 是否与您的企业环境一致 |
