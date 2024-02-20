# 修改员工登录手机号
用于修改新手机号已注册且企业全部解散的场景。

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/staffs/$`staffId`/phone"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.10.0**](/updateLog/update-log#1100) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffId** | String | 员工ID | 必填 | - | 可以通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **secretMsg**   | String | 企业随机串 | 必填 | - | 提供企业ID，咨询合思实施顾问获取 |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **cellphone** | String  | 手机号           | 非必填  | - | 如果手机号为国外手机号，那么应为 : "(区号)手机号" |

## CURL

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/staffs/$bwa3wajigF0WH0:12/phone?accessToken=ID01iqVpjDxrnp:bwa3wajigF0WH0&secretMsg=123' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cellphone": "117185390041111"
}'
```

## 成功响应
```json
{
    "value": {
        "id": "bwa3wajigF0WH0:12",
        "name": "1001-1",
        "code": "1001",
        "departments": [
            "bwa3wajigF0WH0"
        ],
        "defaultDepartment": "bwa3wajigF0WH0",
        "cellphone": "117185390041111",
        "active": true,
        "userId": "12",
        "email": null,
        "external": false,
        "authState": true,
        "note": "备注",
        "staffCustomForm": {
            "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]"
        },
        "updateTime": "2022-08-05 14:59:19",
        "createTime": "2022-08-05 14:59:19"
    }
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 登录手机号已被其他企业使用，由于安全问题，无法修改 | 请确认要修改的登录手机号是否存在未解散的企业 | 
| **403** | - | 不允许访问 | 请确认 `secretMsg` 是否正确 | 

