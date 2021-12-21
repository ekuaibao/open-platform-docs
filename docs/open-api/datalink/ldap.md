# 同步LDAP用户数据

{% httpverb "post" %} /api/openapi/v1/ldap/sync {% endhttpverb %}

#### Query Parameters:

| 名称             | 类型     |  描述     | 是否必填      | 默认值  | 备注                                         |
| :---------      | :------  | :------  | :------- |  -     | :------------------------------------------  |
| **accessToken** | String |  认证token  | 必填      |   -    | [通过授权接口获取](/getting-started/auth.html)  |

#### Body Parameters:

| 名称             | 类型     | 描述        | 是否必填      | 默认值 | 备注                                         |
| :---------      | :------  | :------    | :------- |:---------| :------------------------------------------  |
| **ldapUsers** | object[]   | 员工集合  | 必填      | - |  -  |
| **ldapUsers/mail** | String   | 邮箱  | 必填      | - |  -  |
| **ldapUsers/name** | String   | 用户名  | 必填      | - |  -  |
| **ldapUsers/employeeNumber** | String  | 工号  | 必填      | - |  -  |
| **ldapUsers/mobile** | String   | 手机号  | 必填      | - |  -  |
| **ldapUsers/login** | String   | 登录名  | 必填      | - |  -  |



<br/>
### CURL:
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
<br/>


#### 成功响应:

```json
{
  "value": {
      "code": "200",
      "errorCode": null,
      "errorMessage": null
  }
}
```

#### 失败响应:

```json
{
  "value": {
      "code": null,
      "errorCode": "401",
      "errorMessage": "请求参数无效"
  }
}
```

