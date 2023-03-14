# 获取授权（平台级、租户级）

import Control from "@theme/Control";

<Control
  method="POST"
  url="/adapter/api/v3/token"
/>

## Headers Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **Authorization** | String | 授权秘钥 | 必填 | - | 授权秘钥 |
| **corporationId** | String | 平台级企业ID | 必填 | - | 无需填写，会通过 `Authorization` 自动带出 |
| **domain** | String | 环境地址 | 必填 | - | 无需填写，会通过 `Authorization` 自动匹配企业环境 |
| **corpId** | String | 子租户企业级企业ID | 非必填 | - | - |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **appKey**       | String | 接入账号 | 必填 | - | [获取接入账号，见问题一](/docs/open-api/getting-started/question-answer) |
| **appSecurity**  | String | 接入密码 | 必填 | - | [获取接入密码，见问题一](/docs/open-api/getting-started/question-answer) |

## CURL
```json
curl --location --request POST 'https://open-01.k8s03.ekuaibao.net/adapter/api/v3/token?appKey=xxx&appSecurity=xxx'
```

## 成功响应
```json
//需要修改
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

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **403** | - | 密钥无效 | 请确认 `appKey`（接入账号）和 `appSecurity`（接入密码）是否正确<br/>请确认 **地址前缀** 是否与您的企业环境一致 |
