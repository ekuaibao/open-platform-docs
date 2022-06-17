# 获取员工列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/staffs"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.1.0**](/docs/open-api/notice/update-log#110) &emsp; -> 🐞 新增了 `startDate` 和 `endDate` 参数，根据 **更新时间** 过滤列表数据，并且返回值中增加 `createTime` 和 `updateTime` 参数。<br/>
  [**0.7.155**](/docs/open-api/notice/update-log#07155) -> 🆕 新增了 `active`（是否启用）参数过滤员工列表。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	        | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number  | 分页查询的起始序号    | 必填  | - | 分页的起始值是从 `0` 开始， 而不是传统的 `1` 开始 |
| **count**       | Number  | 查询数据条数         | 必填  | - | 最大不能超过 `100` |
| **active**      | Boolean | 查询条件：员工是否启用 | 非必填 | false | `true` : 启用 &emsp; `false` : 停用 |
| **startDate**   | String  | 查询开始时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **endDate**     | String  | 查询结束时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |

:::tip
- `active` 参数传值分三种情况：
  - `active` 参数和值均 `不传`，返回企业下 **全部员工信息**（包括停用）；
  - `active` 值传 `空串` 或 `false` 或 `非true外任意值`，返回企业下全部 **停用** 的员工信息；
  - `active` 值传 `true`，返回企业下全部 **启用** 的员工信息。
- `startDate` 查询规则是”大于等于“， `endDate` 查询规则是“小于等于”（”毫秒级时间戳“与“日期”转换的影响，导致取值结果往往是”小于“，没有等于）。
:::

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/staffs?accessToken=RCIbwHcnF0kg00&start=0&count=20&active=true&startDate=2022-01-17 18:08:07&endDate=' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "count": 14,   //员工总数，传了 startDate 、endDate 的话，就是这个时间段内的总数
    "items": [
        {
            "id": "PCx3rwm3aA00qM:ID_3rAZNCY2V$g",  //员工ID
            "name": "李四",                         //员工姓名
            "code": "",                             //员工工号
            "departments": [                        //所属部门ID集合
              "PCx3rwm3aA00qM:ID_3rw$2RXc5lM"
            ],
            "defaultDepartment": "PCx3rwm3aA00qM:ID_3rw$2RXc5lM",  //默认部门ID
            "cellphone": "",                                       //手机号
            "active": true,                                        //是否停用
            "userId": "ID_3rAZNCY2U$g",                            //第三方平台人员ID
            "email": "17777777777@163.com",                        //邮箱
            "external": false,                                     //是否外部员工
            "note": "notea",                                       //备注
            "staffCustomForm": {                                   //员工自定义字段
              "base": "[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",  //常驻地
              "u_数字字段": "1"
            }, 
            "updateTime": "2022-02-10 14:49:38",                   //更新时间
            "createTime": "2022-01-17 16:22:41"                    //创建时间
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
            },
            "updateTime": "2022-01-17 18:08:07",
            "createTime": "2022-01-17 16:01:08"
        }
    ]
}
```

`start` 传参大于等于实际员工总数据量时，会得到如下响应，只显示总数据量“count“，不显示员工信息：
```json
{
    "count": 2,
    "items": []
}
```

## 失败响应
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

