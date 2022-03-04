# 新增员工
当员工新增到企业后，该员工可通过 **快捷登录**（短信验证码登录）的方式进入易快报，或者通过 **忘记密码** 来设置密码。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/staffs"
/>

:::caution
- 当新增员工的手机号与一个已停用的员工相同，那么系统将启用已停用的员工并更新其员工信息，而不会创建一个新员工。
- 使用此接口新增的员工，您将 **无法在易快报界面上维护其通讯录**，只能通过接口更新信息和删除。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	| 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name**                      | String    | 员工姓名           | 必填  | - | 员工姓名 |
| **code**                      | String    | 工号              | 非必填 | - | 工号 |
| **cellphone**                 | String    | 手机号            | 非必填 | - | 如果手机号为国外手机号，那么应为 : "(区号)手机号"，原生环境手机号和邮箱必须至少填一个|
| **email**                     | String    | 邮箱              | 非必填 | - | 可以不传，但是不可以传 `""`，原生环境手机号和邮箱必须至少填一个 |
| **note**                      | String    | 备注              | 非必填 | - | 备注 |
| **defaultDepartment**         | String    | 默认部门ID         | 必填   | - | 请确保默认部门在 `departments` 里。如果不在，系统会自动将departments的第一个元素视为默认部门 |
| **departments**               | Array     | 所在部门ID，至少1个  | 必填  | - | 兼职部门，请确保至少包含默认部门 |
| **userid**                    | String    | 第三方平台的ID      | 非必填 | - | 如需要同步钉钉、企业微信等第三方平台人员，需要加上此参数 |
| **useNewAccount**             | Boolean   | 是否强制启用新用户   | 非必填 | false | `true` : 启用 &emsp; `false` : 不启用 |
| **useSendEmail**              | Boolean   | 是否禁止发送邮件通知 | 非必填  | false | `true` : 禁止 &emsp; `false` : 不禁止 |
| **staffCustomForm**           | Object    | 自定义字段         | 非必填  | - | 自定义字段 |
| **&emsp; ∟ rankType**  | String    | 职级档案项ID       | 非必填  | - | [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) |
| **&emsp; ∟ postType**  | String    | 岗位档案项ID       | 非必填  | - | [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) |
| **&emsp; ∟ base**      | String    | 常驻地            | 非必填  | - | 参考格式 : "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]" |
| **&emsp; ∟ u_字段名**   | String    | 自定义字段         | 非必填  | - | 自定义字段，格式为"u\_字段名"，例如 : u\_项目 |

:::tip
- `base`（常驻地）参数拼接说明：<br/>
  通过 **[获取城市列表数据](/docs/open-api/basedata/get-basedata-city)** 接口获取数据后，找到对应城市。
  - `id` 对应 `key`
  - `fullName` 对应 `label`

![城市字段拼接示例](images/城市字段拼接示例.png)
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/staffs?accessToken=z0wbwXPo6sf400' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "name":"张三", 
    "code":"36987",
    "cellphone":"15070403486",
    "email":"2777481917@163.com",
    "note":"备注",
    "defaultDepartment":"JOYbpjPP-E2Q00:pAwbwH_W7sec00",  //默认部门
    "departments":[                                       //所在部门
        "JOYbpjPP-E2Q00:pAwbwH_W7sec00"
    ],
    "staffCustomForm":{                                   //员工自定义字段
        "rankType":"lUcctXntW82A00",   
        "postType":"ltUcxNyWSQ1o00",
        "base":"[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",
        "u_文本1":"",
        "u_num1":"1",
        "u_员工档案":"ID_3b9EX5San3s",
        "u_money1":{
            "standard":"123.1234",
            "standardStrCode":"CNY",
            "standardNumCode":"156",
            "standardSymbol":"¥",
            "standardUnit":"元",
            "standardScale":2
        },
        "u_date1":1624896000000
    }
}'
```

## 成功响应
```json
{
      "value": {
            "id": "JOYbpjPP-E2Q00:IIEbwYgR2E5M00",  //员工ID
            "name": "张三",                         //员工姓名
            "code": "36987",                        //员工工号
            "departments": [                        //所在部门
                  "JOYbpjPP-E2Q00:pAwbwH_W7sec00"
            ],
            "defaultDepartment": "JOYbpjPP-E2Q00:pAwbwH_W7sec00", //默认部门
            "cellphone": "15070403486",             //手机号
            "staffCustomForm":null,                 //员工自定义字段
            "active": true,                         //true：在职，false：已离职
            "userId": "sQgbwYgR2E5s00",             //第三方ID
            "email": "2777481917@163.com",          //邮箱
            "external": false,                      //是否外部员工
            "staffCustomForm": {                    //员工自定义字段
                  "rankType":"lUcctXntW82A00",      //职级档案项ID        
                  "postType":"ltUcxNyWSQ1o00",      //岗位档案项ID
                  "base":"[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",//常驻地
                  "u_文本1": "",
                  "u_num1": "1",
                  "u_员工档案": "ID_3b9EX5San3s",
                  "u_money1": {
                        "standard": "123.1234",
                        "standardStrCode": "CNY",
                        "standardNumCode": "156",
                        "standardSymbol": "¥",
                        "standardUnit": "元",
                        "standardScale": 2
                  },
                  "u_date1": 1624896000000
            }
      }
}
```

## 失败响应
```json
{
      "errorCode": 403,
      "errorMessage": "部门不能为空",
      "errorDetails": null,
      "code": null,
      "data": null
}
```

