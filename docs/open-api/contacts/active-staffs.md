# 停启用员工
停用员工即表示将此员工移出企业。

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/staffs/disableOrEnableStaff/[`ids`]"
/>

:::caution
- 返回数据中员工信息数不正确时，请检查输入的对应员工id参数是否正确。
- 员工 **停用** 后重新 **启用**，需要经过**【授权员工】**接口，账号才可用。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids** | Array | 员工id | 必填 | - | 可以填写多个 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**   | String   | 认证token	                 | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **active**        | Boolean  | 停用或启用标识                 | 必填  | - | `true` : 启用<br/>`false` : 停用，停用即表示已离职 | 
| **doCheck**       | Boolean  | 停用时是否校验该员工名下有代办事项 | 非必填 | true | `true` : 校验 &emsp; `false` : 不校验 |

## CURL
```shell
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/staffs/disableOrEnableStaff/[3Qobu2l0cs6k00:Fu0bySHs1oqc00,3Qobu2l0cs6k00:1m4bySHs1orc00]?accessToken=aO8bySRCSYhQ00&active=true' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "JOYbpjPP-E2Q00:IIEbwYgR2E5M00",   //员工ID
            "name": "李四",                          //员工姓名
            "code": "",                              //员工工号
            "departments": [                         //所在部门
                "JOYbpjPP-E2Q00:pAwbwH_W7sec00"
            ],
            "defaultDepartment": "JOYbpjPP-E2Q00:pAwbwH_W7sec00", //默认部门ID
            "cellphone": "",                        //手机号
            "active": false,                        //true：在职，false：已离职
            "userId": "sQgbwYgR2E5s00",             //第三方ID
            "email": "2777481917@qq.com",           //邮箱
            "staffCustomForm":{                     //员工自定义字段集合
                "base":"[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",//常驻地
                "postType":"ltUcxNyWSQ1o00",        //岗位
                "rankType":"lUcctXntW82A00",        //职级
                "u_数字字段":"1"                     //员工自定义字段
            },
            "external": false                       //是否外部员工
        }
    ]
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "输入存在错误:\n- 开启或是停用参数不能为空",
    "errorDetails": null,
    "code": null,
    "data": null
}
```