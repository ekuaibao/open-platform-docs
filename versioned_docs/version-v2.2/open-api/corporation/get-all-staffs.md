# 获取员工列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1.1/staffs"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.20.0**](/docs/open-api/notice/update-log#1200) &emsp; -> 🐞 响应信息中新增了 `nickName`（员工别名）字段。<br/>
  [**1.19.0**](/docs/open-api/notice/update-log#1190)&emsp;-> 🐞 响应信息中新增了 `globalRoaming`（国际区号）字段。<br/>
  [**1.11.1**](/docs/open-api/notice/update-log#1111)&emsp;-> 🚀 接口升级 `v1.1` 版本，新增了 `external`（是否外部员工）过滤参数，支持按照 **是否外部员工** 过滤。<br/>
  [**1.11.0**](/docs/open-api/notice/update-log#1110)&emsp;-> 🐞 新增了 `orderBy` 和 `orderByType` 参数，接口【**成功响应**】数据可按照 `updateTime`（更新时间）排序。<br/>
  [**1.1.0**](/docs/open-api/notice/update-log#110) &emsp; -> 🐞 新增了 `startDate` 和 `endDate` 参数，根据 **更新时间** 过滤列表数据，并且返回值中增加 `createTime` 和 `updateTime` 参数。<br/>
  [**0.7.155**](/docs/open-api/notice/update-log#07155) -> 🆕 新增了 `active`（是否启用）参数过滤员工列表。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	        | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **start**       | Number  | 分页查询的起始序号    | 必填  | - | 分页的起始值是从 `0` 开始， 而不是传统的 `1` 开始 |
| **count**       | Number  | 查询数据条数         | 必填  | - | 最大不能超过 `100` |
| **active**      | Boolean | 查询条件：员工是否启用 | 非必填 | false | `true` : 启用 &emsp; `false` : 停用 |
| **external**    | Boolean | 查询条件：是否外部员工 | 非必填 | false | `true` : 是 &emsp; `false` : 否 | 
| **startDate**   | String  | 查询开始时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **endDate**     | String  | 查询结束时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **orderBy**     | String  | 排序字段    | 非必填 | - | `updateTime` : 更新时间 |
| **orderByType** | String  | 排序方式    | 非必填 | asc | `asc` ：正序 &emsp; `desc` ：倒序 |

:::tip
- `active` 参数传值分三种情况：
  - `active` 参数和值均 `不传`，返回企业下 **全部员工信息**（包括停用）；
  - `active` 值传 `空串` 或 `false` 或 `非true外任意值`，返回企业下全部 **停用** 的员工信息；
  - `active` 值传 `true`，返回企业下全部 **启用** 的员工信息。
- `external` 参数传值分三种情况：
  - `external` 参数和值均 `不传`，返回企业下 **全部员工信息**（包括停用）；
  - `external` 值传 `空串` 或 `false` 或 `非true外任意值`，返回企业下全部 **内部员工** 的员工信息；
  - `external` 值传 `true`，返回企业下全部 **外部员工** 的员工信息。
- `startDate` 查询规则是”大于等于“， `endDate` 查询规则是“小于等于”（”毫秒级时间戳“与“日期”转换的影响，导致取值结果往往是”小于“，没有等于）。
:::

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1.1/staffs?accessToken=ID01iWYs8eUjHV:xgJ3wajigF25H0&start=1&count=5&active=true&external=false&orderBy=updateTime&orderByType=desc'
```

## 成功响应
```json
{
    "count": 14,   //员工总数，传了 startDate 、endDate 的话，就是这个时间段内的总数
    "items": [
        {
            "id": "xgJ3wajigF25H0:ID01iOBVJdZiEf",  //员工ID
            "name": "张大宝",                        //员工姓名
            "nickName": "老六",                      //员工别名
            "code": "",                             //员工工号
            "departments": [                        //所属部门ID集合
                "xgJ3wajigF25H0"
            ],
            "defaultDepartment": "xgJ3wajigF25H0",  //默认部门ID
            "cellphone": "15811394394",             //手机号
            "active": true,                         //true：在职，false：已离职（账号逻辑删除，在系统上不可见）
            "userId": "BNMcEO0f11oo00",             //第三方平台人员ID
            "email": "cmzhouxiaofen@xxx.com.cn",    //登录邮箱（大写字母全转换为小写字母）
            "showEmail": "Cmzhouxiaofen@xxx.com.cn",//员工个人信息显示邮箱（大写字母保持不变）
            "external": false,                      //是否外部员工
            "authState": true,                      //是否激活，表示账号是否可用
            "globalRoaming": "+86",                 //国际区号
            "note": "备注",                         //备注
            "staffCustomForm": null,                //员工自定义字段
            "updateTime": "2022-09-05 10:43:56",    //更新时间
            "createTime": "2022-09-05 10:43:56"     //创建时间
        },
        {
            "id": "xgJ3wajigF25H0:ID01iOBVJdZ93F",
            "name": "张国阳小号",
            "nickName": null,
            "code": "00006",
            "departments": [
                "xgJ3wajigF25H0"
            ],
            "defaultDepartment": "xgJ3wajigF25H0",
            "cellphone": "18515257800",
            "active": true,
            "userId": "SOV3Dvxff1m$kw",
            "email": "fd16@xxx.com.cn",
            "showEmail": "fd16@xxx.com.cn",
            "external": false,
            "authState": true,
            "globalRoaming": "+86", 
            "note": "备注",
            "staffCustomForm": null,
            "updateTime": "2022-09-02 17:39:32",
            "createTime": "2022-09-02 17:39:32"
        },
        {
            "id": "xgJ3wajigF25H0:ID01irfEujULyD",
            "name": "测试人员6",
            "nickName": null,
            "code": "556956",
            "departments": [
                "xgJ3wajigF25H0:ID_3FQR$Yx0nWM"
            ],
            "defaultDepartment": "xgJ3wajigF25H0:ID_3FQR$Yx0nWM",
            "cellphone": "18879049226",
            "active": true,
            "userId": "ID01irfEujULyD",
            "email": "1364007577@bb.com",
            "showEmail": "1364007577@bb.com",
            "external": false,
            "authState": true,
            "globalRoaming": "+86",         
            "note": "备注",
            "staffCustomForm": {},
            "updateTime": "2022-08-19 17:18:17",
            "createTime": "2022-08-19 17:18:17"
        },
        {
            "id": "xgJ3wajigF25H0:ID01irfEujUKL5",
            "name": "测试人员5",
            "nickName": "测试5",
            "code": "556953",
            "departments": [
                "xgJ3wajigF25H0:ID_3FQR$Yx0nWM"
            ],
            "defaultDepartment": "xgJ3wajigF25H0:ID_3FQR$Yx0nWM",
            "cellphone": "18879049225",
            "active": true,
            "userId": "ID01irfEujUKL5",
            "email": "fd18@xxx.com.cn",
            "showEmail": "fd18@xxx.com.cn",
            "external": false,
            "authState": true,
            "globalRoaming": "+86",               
            "note": "备注",
            "staffCustomForm": {},
            "updateTime": "2022-08-19 17:17:57",
            "createTime": "2022-08-19 17:17:57"
        },
        {
            "id": "xgJ3wajigF25H0:ID01irfEujUJXx",
            "name": "测试人员1",
            "nickName": "测试1",
            "code": "556953",
            "departments": [
                "xgJ3wajigF25H0:ID_3FQR$Yx0nWM"
            ],
            "defaultDepartment": "xgJ3wajigF25H0:ID_3FQR$Yx0nWM",
            "cellphone": "18879049224",
            "active": true,
            "userId": "ID01irfEujUJXx",
            "email": "mfujiancdm2@xxx.com.cn",
            "showEmail": "mfujianCDM2@xxx.com.cn",
            "external": false,
            "authState": true,
            "globalRoaming": "+86", 
            "note": "备注",
            "staffCustomForm": {},
            "updateTime": "2022-08-19 16:44:10",
            "createTime": "2022-08-19 16:44:10"
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"count": 2,"items": []}` | `count` 大于 `0` 但返回员工信息为空时，<br/>请确认 `start`（分页查询的起始序号）是否小于实际员工总数据量 | 
| **403** | - | 未授权 | 请确认 `accessToken`（认证token）是否已过期<br/>请确认 **地址前缀** 是否与您的企业环境一致 | 



