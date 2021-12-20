# 新建自定义档案项

{% httpverb "post" %} /api/openapi/v1/dimensions/items {% endhttpverb %}

#### Query Parameters:

| 名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
|**accessToken**| String  | 认证token	| 必填  | - | [通过授权接口获取](/getting-started/auth.html) |

#### Body Parameters:

| 名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
|**dimensionId**           | String   | 档案类别id	| 必填  | - | 可通过[获取自定义档案类别](/dimensions/get-dimensions.html)来获取 |
|**name**                  | String   | 档案值名称	| 必填  | - | 档案值名称,最大不能超过300个字 |
|**code**                  | String   | 档案值编码	| 必填  | - | 档案值编码 |
|**visibility**            | Object   | 可见范围      | 非必填 | - | 可见范围 |
|**visibility/fullVisible**| Boolean  | 是否全部可见   | 非必填 | true | `true`:全部可见 `false`:非全部可见,此时白名单必填<br>在非全部可见的情况下，仅白名单内的员工可见 |
|**visibility/staffs**     | Array    | 员工白名单	| 非必填 | - | 值为[员工id](/corporation/get-all-staffs.html) |
|**visibility/roles**      | Array    | 角色白名单	| 非必填 | - | 值为[角色id](/corporation/get-roles-group.html) |
|**visibility/departments**| Array    | 部门白名单    | 非必填 | - | 值为[部门id](/corporation/get-departments.html) |
|**parentId**              | String   | 档案值父级id  | 必填   | - | 可通过[获取自定义档案项](/dimensions/get-dimension-items.html)来获取。如果是根节点应填写`""` |

>⚠️ 注意：

> 系统预置档案有一些额外字段，详细字段传参见CURL里面的注释。

<br/>

#### CURL:
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items?accessToken=hQgbxfJnlElc00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "dimensionId": "Urf3lsFgBp00gw:项目",  //档案类别id
    "name": "项目2-1",   //档案值名称	
    "code": "XM2001",   //档案值编码	
    "visibility": {
        "fullVisible": true,  //是否全部可见
        "staffs": [],
        "roles": [],
        "departments": []
    },
    "parentId": "Ak0btTcoEkrA00",  //档案值父级id
    //-----------------------------------------
    //系统预置档案额外参数如下，不用时不传即可：        
    "form":{
        //“项目” 档案额外参数
        "projectBase": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //项目所在地
        "projectInspector": "uIk3sePdIJ00v0:1102",                     //项目总监，值为员工ID
        "projectManager": "uIk3sePdIJ00v0:AvT3lntT8zzpWw",             //项目经理，值为员工ID
        "projectType": "ID_3sjnVFu0ZOw",                               //项目类型，值为【项目类型预置】档案实例ID
        //-----------------------------------------
        //“职级预置”档案额外参数
        "rankType":"ID_3sjnv7SJeIw",                                   //职级类型，值为【职级类型预置】档案实例ID
        //-----------------------------------------
        //“岗位预置”档案额外参数
         "postType":"ID_3sjQzq30UL0",                                  //岗位类型，值为【岗位类型预置】档案实例ID
        //-----------------------------------------
        //“法人实体”档案额外参数
        "taxpayerType":"GeneralTaxpayer"                               //纳税人类型，GeneralTaxpayer：一般纳税人；SmallScaleTaxpayer：小规模纳税人
        //-----------------------------------------
    },
    //“法人实体”档案额外参数
    "payAccountIds":["uIk3sePdIJ00v0:BANK"],                            //可用支付账户
    //“法人实体”，“成本中心预置”档案额外参数
    "departments":["uIk3sePdIJ00v0"]                                    //所属部门
}'
```

<br/>

#### 成功响应:
```json
{
    "id": "XBUbxhnP5k8w00" // 档案值id
}
```

#### 失败响应:
当档案值父级id参数错误时
```json
{
    "errorCode": 412,
    "errorMessage": "编码为[XM2001]的档案项找不到上级节点",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当重复导入时
```json
{
    "errorCode": 412,
    "errorMessage": "该档案项名称[项目2-1]导入重复",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当档案值编码已存在时
```json
{
    "errorCode": 412,
    "errorMessage": "编码[XM2003]已经被占用",
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
		width: 15%;
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
		width: 50%;
		white-space: nowrap;
	}

</style>

















