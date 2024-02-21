# 获取自建应用授权(旧)

import Control from "@theme/Control";

<Control
  method="POST"
  url="/api/realms/auth"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.6.1**](/updateLog/update-log#161)
  - 🆕 新增了本接口。

</div>
</details>

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **appKey**       | String | 接入账号 | 必填 | - | [获取接入账号，见问题四](/docs/open-api/getting-started/question-answer#问题四) |
| **appSecret**    | String | 接入密码 | 必填 | - | [获取接入密码，见问题四](/docs/open-api/getting-started/question-answer#问题四) |

## CURL
:::caution
- 本接口地址前缀固定为：`https://unity.ekuaibao.com`
:::

```json
curl --location --request POST 'https://unity.ekuaibao.com/api/realms/auth' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appKey":"xxxx-xxxx-xxx-xxxxx",
    "appSecret":"xxxx-xxxx-xxx-xxxxx"
}'
```

## 成功响应
```json
{
    "value": {
        "accessToken": "xjFcHAEewOxLLcijKFhKAXYOlxOdIgdL",  //获取到的accessToken
        "timeout": 7200                                     //有效期2小时，单位：秒
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | realm not found | 请确认 `appKey`（接入账号）是否正确 |
| **400** | - | ak sk not match | 请确认 `appSecurity`（接入密码）是否正确 |


