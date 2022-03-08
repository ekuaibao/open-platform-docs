# 修改员工信息

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1.1/staffs/update/$`staffId`"
/>

<details>
  <summary>v1.1版本特性</summary>
  <div>
    - 🐞 员工自定义字段值的保存做增量更新（v1版本为全量更新，不传的字段置空处理）。<br/>
    - 🐞 添加员工自定义字段真实性校验。
  </div>
</details>

:::caution
- 使用此接口更新的员工（包括在系统上创建的），更新后您将 **无法在易快报界面上维护其通讯录**，只能通过接口更新信息和删除。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffId** | String | 员工ID | 必填 | - | 可以通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)获取 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name**                      | String  | 员工姓名          | 必填   | - | 员工姓名 |
| **code**                      | String  | 工号             | 非必填  | - | 工号 |
| **cellphone**                 | String  | 手机号           | 非必填  | - | 如果手机号为国外手机号，那么应为 : "(区号)手机号" |
| **email**                     | String  | 邮箱	            | 非必填  | - | 可以不传，但是不可以传 `""` |
| **note**                      | String  | 备注	            | 非必填  | - | 备注 |
| **defaultDepartment**         | String  | 默认部门ID        | 非必填  | - | 默认部门ID |
| **departments**               | Array   | 所在部门ID,至少1个	| 非必填  | - | 请确保默认部门在 `departments` 里。如果不在，系统会自动将 `departments` 的第一个元素视为默认部门 |
| **modifyAccountPhone**        | Boolean | 是否修改登录手机号	| 非必填  | false | `true` : 修改登录手机号，修改的手机号为 `cellphone`，不可修改成已注册企业的手机号<br/>`false` : 不修改登录手机号 |
| **modifyAccountEmail**        | Boolean | 是否修改邮箱	    | 非必填  | false | `true` : 修改邮箱 &emsp; `false` : 不修改邮箱|
| **staffCustomForm**           | Object  | 自定义字段	    | 非必填  | - | 员工自定义字段 |
| **&emsp; ∟ rankType**  | String  | 职级	            | 非必填  | - | [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) |
| **&emsp; ∟ postType**  | String  | 岗位	            | 非必填  | - | [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) |
| **&emsp; ∟ base**      | String  | 常驻地              | 非必填  | - | 参考格式 : "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]" |
| **&emsp; ∟ u_字段名**   | String  | 自定义字段	        | 非必填  | - | 自定义字段，格式为"u\_字段名"，例如 : u\_项目 |

:::tip
- `base`（常驻地）参数拼接说明：<br/>
  通过 **[获取城市列表数据](/docs/open-api/basedata/get-basedata-city)** 接口获取数据后，找到对应城市。
   - `id` 对应 `key`
   - `fullName` 对应 `label`

![城市字段拼接示例](images/城市字段拼接示例.png)
:::

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/update/$JOYbpjPP-E2Q00:IIEbwYgR2E5M00?accessToken=z0wbwXPo6sf400' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "name": "李四",                    //员工姓名
    "code": "",                        //员工工号
    "cellphone": "",                   //手机号
    "email": "2777481917@qq.com",      //邮箱
    "note": "notea",                   //备注
    "defaultDepartment": "JOYbpjPP-E2Q00:pAwbwH_W7sec00",//默认部门
    "departments":[                    //所在部门
      "JOYbpjPP-E2Q00:pAwbwH_W7sec00"
    ],
    "modifyAccountPhone": false,       //是否修改员工手机号
    "modifyAccountEmail": false,       //是否修改员工邮箱
    "staffCustomForm": {               //员工自定义字段集合
        "rankType":"lUcctXntW82A00",   //职级
        "postType":"ltUcxNyWSQ1o00",   //岗位
        "base":"[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",//常驻地
        "u_数字字段":"1"                //员工自定义字段
    }
}'
```

## 成功响应
```json
{
    "value": {
        "id": "JOYbpjPP-E2Q00:IIEbwYgR2E5M00", //员工ID
        "name": "李四",                        //员工姓名
        "code": "",                           //员工工号
        "departments": [                      //所在部门
              "JOYbpjPP-E2Q00:pAwbwH_W7sec00"
        ],
        "defaultDepartment": "JOYbpjPP-E2Q00:pAwbwH_W7sec00", //默认部门
        "cellphone": "",                                      //手机号
        "active": true,                                       //true：在职，false：已离职
        "userId": "sQgbwYgR2E5s00",                           //第三方ID
        "email": "2777481917@qq.com",
        "staffCustomForm":{                                   //员工自定义字段集合
            "base":"[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",//常驻地
            "postType":"ltUcxNyWSQ1o00",                      //岗位
            "rankType":"lUcctXntW82A00",                      //职级
            "u_数字字段":"1"                                   //员工自定义字段
        },
        "external": false                                     // 是否外部员工
    }
}
```

## 失败响应
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

