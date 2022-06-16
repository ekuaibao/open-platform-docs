# 修改员工信息

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1.1/staffs/update/$`staffId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.5.0**](/docs/open-api/notice/update-log#150) -> 🐞 修复了登录邮箱中包含大写字母，更新后无法登录的BUG。<br/>
  [**1.4.0**](/docs/open-api/notice/update-log#140) -> 🆕 新增 `type` 类型参数，支持 `id` 或 `code` 传参。<br/>
  [**1.2.1**](/docs/open-api/notice/update-log#121) -> 🚀 接口升级 `v1.1` 版本，员工自定义字段值的保存做增量更新（`v1` 版本为全量更新，不传的字段置空处理），并添加员工自定义字段真实性校验。<br/>

  </div>
</details>

:::caution
- 使用此接口更新的员工（包括在系统上创建的），更新后您将 **无法在易快报界面上维护其通讯录**，只能通过接口更新信息和删除。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **IdOrCode** | String | 员工ID或CODE | 必填 | - | **与 `type` 保持一致**，可以通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)获取 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name**                      | String  | 员工姓名          | 必填   | - | 员工姓名 |
| **code**                      | String  | 工号             | 非必填  | - | 工号 |
| **cellphone**                 | String  | 手机号           | 非必填  | - | 如果手机号为国外手机号，那么应为 : "(区号)手机号" |
| **email**                     | String  | 邮箱	            | 非必填  | - | 可以不传，但是不可以传 `""` |
| **note**                      | String  | 备注	            | 非必填  | - | 备注 |
| **defaultDepartment**         | String  | 默认部门ID或CODE  | 非必填  | - | 所传默认部门必须在 `departments` 里 |
| **departments**               | Array   | 所在部门ID或CODE，至少1个	| 非必填  | - | 与 `defaultDepartment` 参数须同时存在，都传或都不传 |
| **modifyAccountPhone**        | Boolean | 是否修改登录手机号	| 非必填  | false | `true` : 修改登录手机号，修改的手机号为 `cellphone`，**不可修改成已注册企业的手机号**。<br/>`false` : 不修改登录手机号。 |
| **modifyAccountEmail**        | Boolean | 是否修改邮箱	    | 非必填  | false | `true` : 修改邮箱 &emsp; `false` : 不修改邮箱|
| **staffCustomForm**           | Object  | 自定义字段	    | 非必填  | - | 员工自定义字段 |
| **&emsp; ∟ rankType**  | String  | 职级	            | 非必填  | - | [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) |
| **&emsp; ∟ postType**  | String  | 岗位	            | 非必填  | - | [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) |
| **&emsp; ∟ base**      | String  | 常驻地              | 非必填  | - | 参考格式 : "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]" |
| **&emsp; ∟ u_字段名**   | String  | 自定义字段	        | 非必填  | - | 自定义字段，格式为"u\_字段名"，例如 : u\_项目 |

:::tip
- **若 `type` 参数为 `code` ，则『部门』、『自定义档案』类型字段，必须传 `code` 值。**
- `base`（常驻地）参数拼接说明：<br/>
  通过 **[获取城市列表数据](/docs/open-api/basedata/get-basedata-city)** 接口获取数据后，找到对应城市。
   - `id` 对应 `key`
   - `fullName` 对应 `label`

![城市字段拼接示例](images/城市字段拼接示例.png)
:::

## CURL

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/update/$JOYbpjPP-E2Q00:IIEbwYgR2E5M00?accessToken=ID_3D5RavktZRM:xgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "赵六",                         //员工姓名
    "code": "",                             //员工工号
    "cellphone": "15588881010",             //手机号
    "email": "15588881010@163.com",         //邮箱
    "note": "Id修改",                       //备注
    "defaultDepartment": "xgJ3wajigF25H0",  //默认部门
    "departments":[                         //所在部门
        "xgJ3wajigF25H0"
    ],
    "modifyAccountPhone": false,            //是否修改员工手机号
    "modifyAccountEmail": false,            //是否修改员工邮箱
    "staffCustomForm": {                    //员工自定义字段集合
        "rankType":"ID_3D5RavktTRM",        //职级
        "postType":"ID_3D5RavktVRM",        //岗位
        "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",//常驻地
        "u_张国阳001":"ID_3yrzERx1pf0"       //员工自定义字段
    }
}'
```
</TabItem>
<TabItem value="code" label="code">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/update/$00005?accessToken=ID_3D5RavktZRM:xgJ3wajigF25H0&type=code' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "赵六",                         //员工姓名
    "code": "",                             //员工工号
    "cellphone": "15588881010",             //手机号
    "email": "15588881010@163.com",         //邮箱
    "note": "Code修改",                     //备注
    "defaultDepartment": "001",             //默认部门
    "departments": [                        //所在部门
        "001"
    ],
    "modifyAccountPhone": false,            //是否修改员工手机号
    "modifyAccountEmail": false,            //是否修改员工邮箱
    "staffCustomForm": {                    //员工自定义字段集合
        "rankType": "CODE1",                //职级
        "postType": "CODE1",                //岗位
        "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",//常驻地
        "u_张国阳001": "CODE1"               //员工自定义字段
    }
}'
```
</TabItem>
</Tabs>

## 成功响应
```json
{
    "value": {
        "id": "xgJ3wajigF25H0:ID_3Be8RKT03bg",
        "name": "赵六",
        "code": "00005",
        "departments": [
            "xgJ3wajigF25H0"
        ],
        "defaultDepartment": "xgJ3wajigF25H0",
        "cellphone": "15588881010",
        "active": true,
        "userId": "ID_3Be8RKT03bg",
        "email": "15588881010@163.com",
        "external": false,
        "note": "Code修改",
        "staffCustomForm": {
            "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",
            "postType": "ID_3D5RavktVRM",
            "rankType": "ID_3D5RavktTRM",
            "u_张国阳001": "ID_3yrzERx1pf0"
        },
        "updateTime": "2022-04-11 16:15:10",
        "createTime": "2022-03-16 11:34:42"
    }
}
```

## 失败响应
`name`（员工姓名）不传或者传 `""` 时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "员工名称不能为空",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

`staffCustomForm`（员工自定义字段）所传参数不存在时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "staffCustomForm中的u_测试1字段不属于员工自定义字段",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

`type` 值为 `code` 时，部门类型字段所传 **部门CODE** 在系统中重复或不存在时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "根据字段[defaultDepartment]的code[002]不能定位到唯一部门",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
