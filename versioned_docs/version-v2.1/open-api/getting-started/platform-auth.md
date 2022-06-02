# 获取自建应用授权

import Control from "@theme/Control";

<Control
  method="POST"
  url="/api/realms/auth"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.6.1</b></a> -> 🆕 新增了本接口。<br/>
  </div>
</details>

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **appKey**       | String | 接入账号 | 必填 | - | [获取接入账号](/docs/open-api/getting-started/question-answer#问题四) |
| **appSecurity**  | String | 接入密码 | 必填 | - | [获取接入密码](/docs/open-api/getting-started/question-answer#问题四) |

## CURL
:::caution
- 本接口地址前缀固定为：`https://unity.ekuaibao.com`
:::

```json
curl --location --request POST 'https://unity.ekuaibao.com/api/realms/auth' \
--header 'Content-Type: application/json' \
--data-raw '{
    "appKey":"sQxFwPipduIQCdYrpzWFhnrKKCiwmXtr",
    "appSecret":"iAJtQdIjtiTCNegSaeqvqArgKHXSNjJj"
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
请确保接入账号和密码的正确性，否则报错如下：
```json
{
    "value": {
        "errorCode": 403,
        "errorMessage": "密钥无效",
        "errorDetail": null
    }
}
```


