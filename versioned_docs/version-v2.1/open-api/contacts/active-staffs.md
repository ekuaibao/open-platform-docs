# 停启用员工
停用员工即表示将此员工移出企业。

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1.1/staffs/disableOrEnableStaff/[`ids`]"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.4.0</b></a> -> 🚀 接口升级 <b>v1.1</b> 版本，新增 <b>type</b> 类型参数，支持 <b>id</b> 或 <b>code</b> 传参。<br/>
  </div>
</details>

:::caution
- 员工 **停用** 后重新 **启用**，需要经过【**授权员工**】接口，账号才可用。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **idsOrCodes** | Array | 员工ID或CODE集合 | 必填 | - | **与 `type` 保持一致**，可以填写多个 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**   | String   | 认证token	                 | 必填  | -     | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **active**        | Boolean  | 停用或启用标识                 | 必填  | -     | `true` : 启用<br/>`false` : 停用，停用即表示已离职 | 
| **doCheck**       | Boolean  | 停用时是否校验该员工<br/>名下有待办事项 | 非必填 | true | `true` : 校验 &emsp; `false` : 不校验 |
| **type**          | String   | 参数类型                      | 非必填 | id   | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』的 `code` 在系统上允许为空和重复** |

## CURL

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```shell
curl --location -g --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/disableOrEnableStaff/[xgJ3wajigF25H0:ID_3Be8RKT03bg,xgJ3wajigF25H0:ID_3zE5G_06Ww0]?accessToken=ID_3Dp9Znt1KHM:xgJ3wajigF25H0&active=false&doCheck=fasle'
```
</TabItem>
<TabItem value="code" label="code">

```shell
curl --location -g --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/disableOrEnableStaff/[00005,00003]?accessToken=ID_3Dp9Znt7_HM:xgJ3wajigF25H0&active=true&doCheck=fasle&type=code'
```
</TabItem>
</Tabs>

## 成功响应

:::caution
- 返回数据中员工信息数不正确时，请检查输入的对应员工ID参数是否正确。
:::

```json
{
    "items": [
        {
            "id": "xgJ3wajigF25H0:ID_3Be8RKT03bg",    //员工ID
            "name": "赵六",                           //员工姓名
            "code": "00005",                          //员工工号
            "departments": [                          //所在部门
                "xgJ3wajigF25H0"
            ],
            "defaultDepartment": "xgJ3wajigF25H0",    //默认部门ID
            "cellphone": "15588881010",               //手机号
            "active": false,                          //true：在职，false：已离职
            "userId": "ID_3Be8RKT03bg",               //第三方平台人员ID
            "email": "15588881010@163.com",           //邮箱
            "external": false,                        //是否外部员工
            "note": "Code修改",
            "staffCustomForm": {                      //员工自定义字段集合
                "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //常驻地
                "postType": "ID_3D5RavktVRM",         //岗位
                "rankType": "ID_3D5RavktTRM",         //职级
                "u_张国阳001": "ID_3yrzERx1pf0"       //员工自定义字段
            },
            "updateTime": "2022-04-11 16:15:10",      //更新时间
            "createTime": "2022-03-16 11:34:42"       //创建时间
        },
        {
            "id": "xgJ3wajigF25H0:ID_3zE5G_06Ww0",    //员工ID
            "name": "李四",                           //员工姓名
            "code": "00003",                          //员工工号
            "departments": [                          //所在部门
                "xgJ3wajigF25H0:ID_3zE5G_06Ow0"
            ],
            "defaultDepartment": "xgJ3wajigF25H0:ID_3zE5G_06Ow0",   //默认部门ID
            "cellphone": "14444444444",               //手机号
            "active": false,                          //true：在职，false：已离职
            "userId": "ID_3zE5G_06Ww0",               //第三方ID
            "email": "14444444444@163.com",           //邮箱
            "external": false,                        //是否外部员工
            "note": "批量新增",
            "staffCustomForm": {                      //员工自定义字段集合
              "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //常驻地
              "postType": "ID_3D5RavktVRM",           //岗位
              "rankType": "ID_3D5RavktTRM",           //职级
              "u_张国阳001": "ID_3yrzERx1pf0"         //员工自定义字段
            },
            "updateTime": "2022-02-24 16:28:59",      //更新时间
            "createTime": "2022-02-24 16:24:55"       //创建时间
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