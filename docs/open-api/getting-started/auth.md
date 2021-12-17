# 获取授权

import Control from "../../../components/Control";

<Control
  method="POST"
  url="/api/openapi/v1/auth/getAccessToken"
/>

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **appKey**       | String | 接入账号 | 必填 | - | 请查看问题一，[了解如何获取账号](/docs/open-api/getting-started/question-answer) |
| **appSecurity**  | String | 接入密码 | 必填 | - | 请查看问题一，[了解如何获取密码](/docs/open-api/getting-started/question-answer) |

## CURL
```
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
    "refreshToken": "asg4PVy28Q0800", // 只有调用刷新有效期接口时需要传的token
    "expireTime": 1531046137469,      // 授权码过期日期时间戳(默认2小时后到期)
    "corporationId": "34A73EyI8A0w00" // 企业id
  }
}
```

## 失败响应
请确保接入账号和密码的正确性，否则返回以下结果：
```json
{
  "value": {
    "errorCode": 403,
    "errorMessage": "密钥无效",
    "errorDetail": null
  }
}
```
