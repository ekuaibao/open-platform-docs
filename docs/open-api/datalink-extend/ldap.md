# 同步LDAP用户数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/ldap/sync"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ldapUsers**                | Array | 员工集合 | 必填  | - |  员工集合 |
| **&emsp; ∟ mail**           | String | 邮箱     | 必填  | - |  邮箱  |
| **&emsp; ∟ name**           | String | 用户名   | 必填  | - |  用户名  |
| **&emsp; ∟ employeeNumber** | String | 工号     | 必填  | - |  工号  |
| **&emsp; ∟ mobile**         | String | 手机号   | 必填  | - |  手机号  |
| **&emsp; ∟ login**          | String | 登录名   | 必填  | - |  登录名  |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/ldap/sync?accessToken=_qkc1MVHQofY00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ldapUsers": [
        {
            "mail": "test@mail",
            "name": "user",
            "employeeNumber": "123434",
            "mobile": "13260304463",
            "login": "name"
        }
    ]
}'
```

## 成功响应
```json
{
    "value": {
        "code": "200",
        "errorCode": null,
        "errorMessage": null
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | 401 | 请求参数无效 | 请确认 `ldapUsers`（员工集合）中的参数是否正确 |

