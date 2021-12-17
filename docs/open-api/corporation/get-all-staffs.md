# 获取员工列表

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/staffs"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	                         | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number  | 分页查询的起始序号，即从第几条数据开始查询 | 必填   | - | 从0开始 |
| **count**       | Number  | 查询数据条数                         | 必填   | - | 最大不能超过1000 |
| **active**      | Boolean | 查询条件：员工是否启用                 | 非必填 | true | `true`:启用<br/>`false`:停用 |

> ⚠️ 注意：
> 
> - 分页的起始值是从0开始，而不是传统的1开始
> - 默认查询未停用的员工，不是全部员工

## CURL
```
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/staffs?accessToken=RCIbwHcnF0kg00&start=0&count=20&active=true' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
      "count": 14,
      "items": [
            {
                  "id": "PCx3rwm3aA00qM:ID_3rAZNCY2V$g",
                  "name": "李四",
                  "code": "",
                  "departments": [
                    "PCx3rwm3aA00qM:ID_3rw$2RXc5lM"
                  ],
                  "defaultDepartment": "PCx3rwm3aA00qM:ID_3rw$2RXc5lM",
                  "cellphone": "",
                  "active": true,
                  "userId": "ID_3rAZNCY2U$g",
                  "email": "17777777777@163.com",
                  "external": false,
                  "note": "notea",
                  "staffCustomForm": {
                    "base": "[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",
                    "u_数字字段": "1"
                  }
            },
            {
                  "id": "PCx3rwm3aA00qM:ID_3rAZNCY2X$g",
                  "name": "王五",
                  "code": "00008",
                  "departments": [
                    "PCx3rwm3aA00qM:ID_3rw$2RXc5lM"
                  ],
                  "defaultDepartment": "PCx3rwm3aA00qM:ID_3rw$2RXc5lM",
                  "cellphone": "18888888888",
                  "active": true,
                  "userId": "ID_3rAZNCY2W$g",
                  "email": "18888888888@163.com",
                  "external": false,
                  "note": null,
                  "staffCustomForm": {
                    "u_爱好": ""
                  }
            }
      ]
}
```

## 失败响应
`start`传参大于等于实际员工总数据量时，会得到如下响应，只显示总数据量“count“，不显示员工信息
```json
{
    "count": 2,
    "items": []
}
```
当`accessToken`失效时，得到如下回应
```json
{
    "errorCode": 403,
    "errorMessage": "未授权",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

