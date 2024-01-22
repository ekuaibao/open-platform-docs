# 获取自建应用授权

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/auth/getAppAccessToken"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.25.0**](/docs/open-api/notice/update-log#1250) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **appKey**       | String | 接入账号 | 必填 | - | [获取接入账号，见问题四](/docs/open-api/getting-started/question-answer#问题四) |
| **appSecret**    | String | 接入密码 | 必填 | - | [获取接入密码，见问题四](/docs/open-api/getting-started/question-answer#问题四) |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/auth/getAppAccessToken' \
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
        "accessToken": "RuTQLbUMrWaojvpEdXCRQJtLANoACqkA",    //获取到的accessToken
        "timeout": 7200                                       //有效期2小时，单位：秒
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | 500 | 应用不存在   | 请确认 `appKey`（接入账号）是否正确 |
| **200** | 500 | 应用鉴权失败 | 请确认 `appSecret`（接入密码）是否正确 |
