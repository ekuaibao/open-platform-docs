# 获取已激活员工列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/staffs/authorized"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	     | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number  | 分页查询的起始序号 | 必填 | - | 从第几条数据开始查询 |
| **count**       | Number  | 查询数据条数      | 必填 | - | 最大不能超过 `1000` |

:::tip
- 分页的起始值是从0开始， 而不是传统的1开始；
- 系统上获取已激活的员工人数页面如下：
![image](images/获取激活员工人数.png)
:::

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/staffs/authorized?accessToken=ID_3v7kdsVUWhg:djg8LshfUkfM00&start=0&count=100'
```

## 成功响应
```json
{
    "count": 14,  //已激活员工总数
    "items": [    //已激活员工信息
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
`start` 传参大于等于实际员工总数据量时，会得到如下响应，只显示总数据量 “count“，不显示员工信息：
```json
{
    "count": 2,
    "items": []
}
```
当 `accessToken` 失效时，得到如下回应：
```json
{
    "errorCode": 403,
    "errorMessage": "未授权",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

