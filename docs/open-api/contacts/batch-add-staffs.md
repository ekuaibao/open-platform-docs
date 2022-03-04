# 批量新增员工
当员工新增到企业后，该员工可通过 **快捷登录**（短信验证码登录）的方式进入易快报，或者通过 **忘记密码** 来设置密码。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/staffs/batch/create"
/>

:::caution
- 当新增员工的手机号与一个已停用的员工相同，那么系统将启用已停用的员工并更新其员工信息，而不会创建一个新员工。
- 使用此接口新增的员工，您将 **无法在易快报界面上维护其通讯录**，只能通过接口更新信息和删除。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffList**                    | Array  | 批量新增的员工     | 必填  | - | 员工信息数组 |
| **&emsp; ∟ name**               | String | 员工姓名          | 必填  | - | 员工姓名 |
| **&emsp; ∟ code**               | String | 工号             | 非必填 | - | 工号 |
| **&emsp; ∟ cellphone**          | String | 手机号           | 必填   | - | 如果手机号为国外手机号，那么应为 : "(区号)手机号" |
| **&emsp; ∟ email**              | String | 邮箱             | 非必填 | - | 可以不传，但是不可以传 `""` |
| **&emsp; ∟ note**               | String | 备注             | 非必填 | - | 备注 |
| **&emsp; ∟ defaultDepartment**  | String | 默认部门ID        | 必填  | - | 请确保默认部门在 `departments` 里。如果不在，系统会自动将departments的第一个元素视为默认部门 |
| **&emsp; ∟ departments**        | Array  | 所在部门ID，至少1个 | 必填  | - | 兼职部门，请确保至少包含默认部门 |
| **&emsp; ∟ userid**             | String | 第三方平台的ID     | 非必填 | - | 如需要同步钉钉、企业微信等第三方平台人员，需要加上此参数 |
| **&emsp; ∟ useSendEmail**       | Boolean| 是否禁止发送邮件通知 | 非必填 | false | `true` : 禁止 &emsp; `false` : 不禁止 |
| **&emsp; ∟ staffCustomForm**    | Object | 自定义字段         | 非必填  | - | 自定义字段 |
| **&emsp;&emsp; ∟ rankType**  | String    | 职级档案项ID       | 非必填  | - | [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) |
| **&emsp;&emsp; ∟ postType**  | String    | 岗位档案项ID       | 非必填  | - | [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) |
| **&emsp;&emsp; ∟ base**      | String    | 常驻地            | 非必填  | - | 参考格式 : "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]" |
| **&emsp;&emsp; ∟ u_字段名**   | String    | 自定义字段         | 非必填  | - | 自定义字段，格式为"u\_字段名"，例如 : u\_项目 |

:::tip
- `base`（常驻地）参数拼接说明：<br/>
  通过 **[获取城市列表数据](/docs/open-api/basedata/get-basedata-city)** 接口获取数据后，找到对应城市。
  - `id` 对应 `key`
  - `fullName` 对应 `label`

![城市字段拼接示例](images/城市字段拼接示例.png)
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/staffs/batch/create?accessToken=ID_3tKTH780aqg:Tdk3tgber501v0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "staffList":[
        {
            "name":"批量新增-5",  //员工姓名
            "code":"P1005",      //工号
            "cellphone":"18888881005",      //手机号
            "email":"18888881005@163.com",  //邮箱
            "note":"批量新增",               //备注
            "defaultDepartment":"Tdk3tgber501v0:ID_3tgaWMa0hjg",  //默认部门ID
            "departments":[  //兼职部门，请确保至少包含默认部门
                "Tdk3tgber501v0:ID_3tgaWMa0hjg"  
            ],
            "userid":"P1005",  //第三方平台的ID	
            "useSendEmail":true,  //是否禁止发送邮件通知  true:禁止 false:不禁止
            "staffCustomForm":{  //员工自定义字段
                    "rankType":"ID_3tqvxwgjK6w",  //职级，值为职级档案项ID，一级        
                    "postType":"ID_3tqvxwgjF6w",  //岗位，值为岗位档案项ID，经理
                    "base":"[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //常驻地
                    "u_花名":"法外狂徒",  //花名
                    "u_项目":"ID_3tqvxwgjD6w"  //项目，米哈游项目
            }
        },
        {
            "name":"批量新增-6",  //员工姓名
            "code":"P1006",      //工号
            "cellphone":"18888881006",      //手机号
            "email":"18888881006@163.com",  //邮箱
            "note":"批量新增",               //备注
            "defaultDepartment":"Tdk3tgber501v0:ID_3tgaWMa0hjg",  //默认部门ID
            "departments":[  //兼职部门，请确保至少包含默认部门
                "Tdk3tgber501v0:ID_3tgaWMa0hjg"  
            ],
            "userid":"P1006",  //第三方平台的ID	
            "useSendEmail":true,  //是否禁止发送邮件通知  true:禁止 false:不禁止
            "staffCustomForm":{  //员工自定义字段
                "rankType":"ID_3tqvxwgjK6w",  //职级，值为职级档案项ID，一级        
                "postType":"ID_3tqvxwgjF6w",  //岗位，值为岗位档案项ID，经理
                "base":"[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //常驻地
                "u_花名":"法外狂徒",  //花名
                "u_项目":"ID_3tqvxwgjD6w"  //项目，米哈游项目
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
            "id": "Tdk3tgber501v0:P1005",  //员工ID
            "name": "批量新增-5",          //员工姓名
            "code": "P1005",              //员工工号
            "departments": [              //部门集合
                "Tdk3tgber501v0:ID_3tgaWMa0hjg"
            ],
            "defaultDepartment": "Tdk3tgber501v0:ID_3tgaWMa0hjg",  //默认部门
            "cellphone": "18888881005",                            //手机号
            "active": true,                                        //员工状态
            "userId": "P1005",                                     //第三方ID
            "email": "18888881005@163.com",                        //邮箱
            "external": false,                                     //是否外部人员
            "note": "批量新增",                                     //备注
            "staffCustomForm": {                                   //员工自定义字段
                "rankType": "ID_3tqvxwgjK6w",                      //职级
                "postType": "ID_3tqvxwgjF6w",                      //岗位
                "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //常驻地
                "u_花名": "法外狂徒",
                "u_项目": "ID_3tqvxwgjD6w"
            }
        },
        {
            "id": "Tdk3tgber501v0:P1006",
            "name": "批量新增-6",
            "code": "P1006",
            "departments": [
                "Tdk3tgber501v0:ID_3tgaWMa0hjg"
            ],
            "defaultDepartment": "Tdk3tgber501v0:ID_3tgaWMa0hjg",
            "cellphone": "18888881006",
            "active": true,
            "userId": "P1006",
            "email": "18888881006@163.com",
            "external": false,
            "note": "批量新增",
            "staffCustomForm": {
                "rankType": "ID_3tqvxwgjK6w",
                "postType": "ID_3tqvxwgjF6w",
                "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",
                "u_花名": "法外狂徒",
                "u_项目": "ID_3tqvxwgjD6w"
            }
        }
    ]
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
