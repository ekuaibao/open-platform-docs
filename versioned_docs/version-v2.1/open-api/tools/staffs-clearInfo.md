# 工具二：清空员工手机号和邮箱
只清空系统上员工信息的显示手机号和邮箱，并不会注销对应的登录手机号和邮箱。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/staffs/clearInfo"
/>

:::danger
- 非特定业务场景，不建议使用此接口。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**  | String | 认证token    | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **clearType**    | String | 清空类型      | 非必填 | all | `all` : 清空手机号和邮箱<br/>`phone` : 清空手机号<br/>`email` : 清空邮箱 |
| **type**         | String | 传参类型      | 必填  | - | `STAFFID` : 员工ID &emsp; `CODE` : 工号 |
| **conditionIds** | Array  | 员工标识参数   | 非必填 | - | 多个之间用英文逗号 `,` 分隔 |


## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/staffs/clearInfo?accessToken=ID_3wlg6bv8JGg:bwa3wajigF0WH0&clearType=all&type=CODE&conditionIds=9001,1001,1003'
```

## 成功响应
返回清空手机号和邮箱的员工信息：
```json
{
    "count": 2,                                    //执行成功数量
    "items": [
        {
            "id": "bwa3wajigF0WH0:ID_3wlg6bv9KGg",  //员工ID
            "name": "外部1",                        //员工姓名
            "code": "9001",                         //员工编号
            "departments": [],                      //所在部门
            "defaultDepartment": "",                //默认部门
            "cellphone": "",                        //手机号
            "active": true,                         //是否启用
            "userId": "",                           //userID
            "email": "",                            //邮箱
            "external": true,                       //是否外部员工
            "note": null,                           //备注
            "staffCustomForm": null                 //员工自定义字段
        },
        {
            "id": "bwa3wajigF0WH0:qKZ3wlg6bv9OGg",
            "name": "内部1",
            "code": "1001",
            "departments": [
                "bwa3wajigF0WH0"
            ],
            "defaultDepartment": "bwa3wajigF0WH0",
            "cellphone": "",
            "active": true,
            "userId": "qKZ3wlg6bv9OGg",
            "email": "",
            "external": false,
            "note": null,
            "staffCustomForm": {
                "defaultDepartment.form.costCenter": "",
                "defaultDepartment.form.legalEntity": ""
            }
        }
    ]
}
```

## 失败响应
`conditionIds` 未传值时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "查询conditionIds不能为空",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
