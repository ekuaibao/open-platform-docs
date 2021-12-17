# 查询员工待办数量
通过员工的 `员工ID`、`工号`、`手机号` 查询员工待办事项的数量。

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/staffs/getBacklogCount/$`type`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **type** | String | 查询方式 | 必填 | - | `id`:员工ID<br/>`code`:员工工号<br/>`cellphone`:员工手机号 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	   | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **staffParam**  | String  | 查询的员工参数  | 必填 | - | 员工信息中的 staffID、code、cellphone 任意一个即可 | 

## CURL
```
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/staffs/getBacklogCount/$id?accessToken=RCIbwHcnF0kg00&staffParam=JOYbpjPP-E2Q00:y8gbpjP9OsnI00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "count": 0 // 待办数量
}
```

## 失败响应
```json
{
    "errorCode": 412,
    "errorMessage": "未查找到此员工信息",
    "errorDetails": null,
    "code": null,
    "data": null
}
```