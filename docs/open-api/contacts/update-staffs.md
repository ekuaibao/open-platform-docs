# 修改员工信息

> ⚠️ 注意：
>
> 使用此接口更新的员工（包括在系统上创建的），更新后您将**无法在易快报界面上维护其通讯录**，只能通过接口更新信息和删除。

{% httpverb "put" %} /api/openapi/v1/staffs/update/$`staffId` {% endhttpverb %}

#### Path Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **staffId** | String  | 员工id | 必填 | - | 可以通过[获取员工列表](/corporation/get-all-staffs.html)获取 | 

#### Query Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String  | 认证token	| 必填  | - | [通过授权接口获取](/getting-started/auth.html) |

#### Body Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **name**                      | String  | 员工姓名          | 必填   | - | 员工姓名 |
| **code**                      | String  | 工号             | 非必填  | - | 工号 |
| **cellphone**                 | String  | 手机号           | 非必填  | - | 如果手机号为国外手机号，那么应为:"(区号)手机号" |
| **email**                     | String  | 邮箱	            | 非必填  | - | 可以不传，但是不可以传空字符串 |
| **note**                      | String  | 备注	            | 非必填  | - | 备注 |
| **defaultDepartment**         | String  | 默认部门id        | 非必填  | - | 默认部门id |
| **departments**               | Array   | 所在部门,至少1个	| 非必填  | - | 请确保默认部门在departments里。如果不在,系统会自动将departments的第一个元素视为默认部门 |
| **modifyAccountPhone**        | Boolean | 是否修改登录手机号	| 非必填  | false | `true`:修改登录手机号,修改的手机号为cellphone,不可修改成已注册企业的手机号 |
| **modifyAccountEmail**        | Boolean | 是否修改邮箱	    | 非必填  | false | `true`:修改邮箱 |
| **staffCustomForm**           | Object  | 自定义字段	    | 非必填  | - | 自定义字段 |
| **staffCustomForm/rankType**  | String  | 职级	            | 非必填  | - | [获取自定义档案项](/dimensions/get-dimension-items.html) |
| **staffCustomForm/postType**  | String  | 岗位	            | 非必填  | - | [获取自定义档案项](/dimensions/get-dimension-items.html) |
| **staffCustomForm/base**      | String  | 常驻地           | 非必填  | - | 参考格式:"[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]" |
| **staffCustomForm/u_字段名**   | String  | 自定义字段	    | 非必填  | - | 自定义字段,格式为"u\_字段名",例如:u\_项目 |

<br/>

#### CURL:
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/staffs/update/$JOYbpjPP-E2Q00:IIEbwYgR2E5M00?accessToken=z0wbwXPo6sf400' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "name": "李四",// 员工姓名
    "code": "",// 员工工号
    "cellphone": "",//手机号
    "email": "2777481917@qq.com",//邮箱
    "note": "notea",//备注
    "defaultDepartment": "JOYbpjPP-E2Q00:pAwbwH_W7sec00",// 默认部门
    "departments":[// 所在部门
      "JOYbpjPP-E2Q00:pAwbwH_W7sec00"
    ],
    "modifyAccountPhone": false,//是否修改员工手机号
    "modifyAccountEmail": false,//是否修改员工邮箱
    "staffCustomForm": {//员工自定义字段集合
        "rankType":"lUcctXntW82A00",//职级
        "postType":"ltUcxNyWSQ1o00",//岗位
        "base":"[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",//常驻地
        "u_数字字段":"1"//员工自定义字段
    }
}'
```
<br/>

#### 成功响应:
```json
{
      "value": {
            "id": "JOYbpjPP-E2Q00:IIEbwYgR2E5M00", // 员工ID
            "name": "李四", // 员工姓名
            "code": "", // 员工工号
            "departments": [ // 所在部门
                  "JOYbpjPP-E2Q00:pAwbwH_W7sec00"
            ],
            "defaultDepartment": "JOYbpjPP-E2Q00:pAwbwH_W7sec00", // 默认部门
            "cellphone": "", // 手机号
            "active": true, // true：正常，false：已离职
            "userId": "sQgbwYgR2E5s00", // 第三方ID
            "email": "2777481917@qq.com",
            "staffCustomForm":{//员工自定义字段集合
                "base":"[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",//常驻地
                "postType":"ltUcxNyWSQ1o00",//岗位
                "rankType":"lUcctXntW82A00",//职级
                "u_数字字段":"1"//员工自定义字段
            },
            "external": false // 是否外部员工
      }
}
```

#### 失败响应:
```json
{
      "errorCode": 400,
      "errorMessage": "员工名称不能为空",
      "errorDetails": null,
      "code": null,
      "data": null
}
```

<style>
    table {
		width: 100%; /*表格宽度*/
		border-collapse: collapse; /*使用单一线条的边框*/
		empty-cells: show; /*单元格无内容依旧绘制边框*/
		}
    /* 悬浮变色 */
	table tr:hover {
		background: #B2B2B2 !important;
		}
    /* 首列不换行 */
	table td:nth-child(1) {
		white-space: nowrap;
	}
	table td:nth-child(2) {
		white-space: nowrap;
	}
    /* 指定列宽度 */
    table th:nth-of-type(3) {
		width: 20%;
		white-space: nowrap;
	}
    table th:nth-of-type(4) {
		width: 8%;
		white-space: nowrap;
	}
    table th:nth-of-type(5) {
		width: 7%;
		white-space: nowrap;
	}
    table th:nth-of-type(6) {
		width: 35%;
		white-space: nowrap;
	}

</style>