# 批量修改员工

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1.1/staffs/batch/update"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.20.0**](/docs/open-api/notice/update-log#1200) -> 🐞 接口支持传入 `nickName`（员工别名）字段，且响应信息中新增了该字段。<br/>
  [**1.19.0**](/docs/open-api/notice/update-log#1190) -> 🆕 新增了本接口。<br/>

  </div>
</details>

:::caution
- 使用此接口更新的员工（包括在系统上创建的），更新后您将 **无法在合思界面上维护其通讯录**，只能通过接口更新信息和删除。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffList**                          | Array  | 批量修改的员工         | 必填  | - | 员工信息数组, **最大不能超过 `100` 条** |
| **&emsp; ∟ id**                        | String  | 员工ID             | 必填   | - | 可以通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
| **&emsp; ∟ name**                      | String  | 员工姓名            | 必填   | - | 员工姓名 |
| **&emsp; ∟ nickName**                  | String  | 员工别名            | 非必填 | - | 员工别名 |
| **&emsp; ∟ code**                      | String  | 工号               | 非必填  | - | 工号 |
| **&emsp; ∟ cellphone**                 | String  | 手机号             | 非必填  | - | 如果手机号为国外手机号，那么应为 : "(区号)手机号" |
| **&emsp; ∟ email**                     | String  | 邮箱	            | 非必填  | - | 可以不传，但是不可以传 `""` |
| **&emsp; ∟ note**                      | String  | 备注	            | 非必填  | - | 备注 |
| **&emsp; ∟ defaultDepartment**         | String  | 默认部门ID或CODE    | 非必填  | - | 所传默认部门必须在 `departments` 里 |
| **&emsp; ∟ departments**               | Array   | 所在部门ID或CODE，至少1个	| 非必填  | - | 与 `defaultDepartment` 参数须同时存在，都传或都不传 |
| **&emsp; ∟ modifyAccountPhone**        | Boolean | 是否修改登录手机号	| 非必填  | false | `true` : 是，修改后手机号为 `cellphone`<br/>**不可修改成已注册企业且企业启用中的手机号**<br/><!--可以修改成未注册企业或企业均解散的手机号<br/>-->`false` : 否 |
| **&emsp; ∟ modifyAccountEmail**        | Boolean | 是否修改登录邮箱	    | 非必填  | false | `true` : 是，修改后邮箱为 `email`<br/>**不可修改成已注册企业且企业启用中的邮箱**<br/><!--可以修改成未注册企业或企业均解散的邮箱<br/>-->`false` : 否 |
| **&emsp; ∟ staffCustomForm**           | Object  | 自定义字段	        | 非必填  | - | 员工自定义字段 |
| **&emsp;&emsp; ∟ rankType**            | String  | 职级	            | 非必填  | - | 通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 获取 |
| **&emsp;&emsp; ∟ postType**            | String  | 岗位	            | 非必填  | - | 通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 获取 |
| **&emsp;&emsp; ∟ base**                | String  | 常驻地             | 非必填  | - | 参考格式 : "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]" |
| **&emsp;&emsp; ∟ u_字段名**             | String  | 自定义字段	        | 非必填  | - | 自定义字段，格式为"u\_字段名"，例如 : u\_项目<br/>可通过 [获取员工自定义字段](/docs/open-api/contacts/get-allCustomeProperty) 获取字段名 |

:::tip
- `base`（常驻地）参数拼接说明：<br/>
  通过 **[获取城市列表数据](/docs/open-api/basedata/get-basedata-city)** 接口获取数据后，找到对应城市。
    - `id` 对应 `key`
    - `fullName` 对应 `label`

![城市字段拼接示例](images/城市字段拼接示例.png)
:::

## CURL

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/batch/update?accessToken=ID01q4lptRWBIz%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data-raw '{
    "staffList": [
        {
            "id": "TsI3tt8KjF4S7M:1222234",         //员工ID
            "name": "测试1",                         //员工姓名
            "nickName": "测1",                      //员工别名
            "code": "00001",                        //员工工号
            "cellphone": "17711111126",             //手机号
            "email": "17718535962@163.com",         //邮箱
            "note": "批量修改",                       //备注
            "defaultDepartment": "TsI3tt8KjF4S7M",  //默认部门
            "departments": [                        //所在部门
                "TsI3tt8KjF4S7M"
            ],
            "modifyAccountPhone" : false,           //是否修改员工手机号
            "modifyAccountEmail" : false,           //是否修改员工手机号
            "staffCustomForm": {                    //员工自定义字段集合
                "postType":"ID_3D5RavktVRM",        //岗位
                "rankType":"ID_3D5RavktTRM",        //职级
                "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]"  //常驻地
            }
        },
        {
            "id": "TsI3tt8KjF4S7M:BbP3CdaKi$VcRw",
            "name": "张国阳小号",
            "nickName": "小阳",
            "code": "00002",
            "cellphone": "18515257800",
            "email": "18515257800@163.com",
            "note": "批量修改",
            "defaultDepartment": "TsI3tt8KjF4S7M",
            "departments": [
                "TsI3tt8KjF4S7M"
            ],
            "modifyAccountPhone" : false,
            "modifyAccountEmail" : false,
            "staffCustomForm": {
                "postType": "ID_3D5RavktVRM", 
                "rankType": "ID_3D5RavktTRM",
                "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]"
            }
        }
    ]
}'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "TsI3tt8KjF4S7M:1222234",           //员工ID
            "name": "测试1",                           //员工姓名
            "nickName": "测1",                        //员工别名
            "code": "00001",                          //员工工号
            "departments": [                          //所在部门
                "TsI3tt8KjF4S7M"
            ],
            "defaultDepartment": "TsI3tt8KjF4S7M",    //默认部门ID
            "cellphone": "17711111126",               //手机号
            "active": true,                           //true：在职，false：已离职（账号逻辑删除，在系统上不可见）
            "userId": "1222234",                      //第三方平台人员ID
            "email": null,                            //登录邮箱（大写字母全转换为小写字母）
            "showEmail": "17718535962@163.com",       //员工个人信息显示邮箱（大写字母保持不变）
            "external": false,                        //是否外部员工
            "authState": true,                        //是否激活，表示账号是否可用
            "globalRoaming": "+86",                   //国际区号
            "note": "批量修改",                        //备注                  
            "staffCustomForm": {                      //员工自定义字段
                "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //常驻地
                "postType": "ID_3D5RavktVRM",         //岗位
                "rankType": "ID_3D5RavktTRM"          //职级
            },
            "updateTime": "2023-05-31 17:14:57",      //更新时间
            "createTime": "2022-10-18 23:26:16"       //创建时间
        },
        {
            "id": "TsI3tt8KjF4S7M:BbP3CdaKi$VcRw",    //员工ID
            "name": "张国阳小号",                       //员工姓名
            "nickName": "小阳",                        //员工别名
            "code": "00002",                          //员工工号
            "departments": [                          //所在部门
                "TsI3tt8KjF4S7M"
            ],
            "defaultDepartment": "TsI3tt8KjF4S7M",    //默认部门ID
            "cellphone": "18515257800",               //手机号
            "active": true,                           //true：在职，false：已离职（账号逻辑删除，在系统上不可见）
            "userId": "BbP3CdaKi$VcRw",               //第三方平台人员ID
            "email": null,                            //登录邮箱（大写字母全转换为小写字母）
            "showEmail": "18515257800@163.com",       //员工个人信息显示邮箱（大写字母保持不变）
            "external": false,                        //是否外部员工
            "authState": true,                        //是否激活，表示账号是否可用
            "globalRoaming": "+86",                   //国际区号
            "note": "批量修改",                        //备注                  
            "staffCustomForm": {                      //员工自定义字段
                "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //常驻地
                "postType": "ID_3D5RavktVRM",         //岗位
                "rankType": "ID_3D5RavktTRM"          //职级
            },
            "updateTime": "2023-05-31 17:14:57",      //更新时间
            "createTime": "2023-05-29 19:10:19"       //创建时间
        },
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议                                                  |
|:--------| :--- | :--- |:------------------------------------------------------|
| **400** | - | 员工名称不能为空 | 请确认 `name`（员工姓名）是否不传或者传 `""`                          | 
| **400** | - | 字段rankType不合法，没有找到对应的数据 | 请确认所传值是否存在 | 
| **400** | - | 字段postType不合法，没有找到对应的数据 | 请确认所传值是否存在 | 
| **400** | - | staffCustomForm中的u_测试1字段不属于员工自定义字段 | 请确认 `staffCustomForm`（员工自定义字段）所传参数是否存在                |
| **412** | - | 此用户无法进行修改账户手机号，因修改的手机号在系统中已经注册 | 请确认要修改的登录手机号是否存在于未解散的企业<br/>如果存在，只能在本企业新增员工时使用该手机号 | 
<!--
| **400** | - | 登录手机号已被其他企业使用，由于安全问题，无法修改 | 请确认要修改的登录手机号是否存在未解散的企业 | 
| **400** | - | 登录邮箱已被其他企业使用，由于安全问题，无法修改 | 请确认要修改的登录邮箱是否存在未解散的企业 | 
-->
