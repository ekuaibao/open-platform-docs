# 批量新建自定义档案项

{% httpverb "post" %} /api/openapi/v1/dimensions/items/batch {% endhttpverb %}

#### Query Parameters:

| 名称 |类型 |描述 |是否必填 |默认值 | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String | 认证token	| 必填 | - | [通过授权接口获取](/getting-started/auth.html) |

#### Body Parameters:

| 名称 |类型 |描述 |是否必填 |默认值 | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **dimensionId**                            | String  | 档案类别id  | 必填  | - | 可通过[获取档案类别](/dimensions/get-dimensions.html)来获取 |
| **itemListRequest**                        | Array   | 档案项集合   | 必填  | - | 新增的档案项集合 |
| **itemListRequest/name**                   | String  | 档案值名称	| 必填  | - | 档案值名称,最大不能超过300个字 |
| **itemListRequest/code**                   | String  | 档案值编码	| 必填  | - | 档案值编码 |
| **itemListRequest/visibility**             | Object  | 可见范围	    | 非必填 | - | 可见范围 |
| **itemListRequest/visibility/fullVisible** | Boolean | 是否全部可见 | 非必填 | true | `true`:全部可见 `false`:非全部可见,此时白名单必填。在非全部可见的情况下，仅白名单内的员工可见 |
| **itemListRequest/visibility/staffs**      | Array   | 员工白名单	| 非必填 | - | 值为[员工id](/corporation/get-all-staffs.html) |
| **itemListRequest/visibility/roles**       | Array   | 角色白名单   | 非必填 | - | 值为[角色id](/corporation/get-roles-group.html) |
| **itemListRequest/visibility/departments** | Array   | 部门白名单   | 非必填 | - | 值为[部门id](/corporation/get-departments.html) |
| **itemListRequest/parentId**               | String  | 档案值父级id	| 必填   | - | 可通过[获取档案值](/dimensions/get-dimension-items.html)来获取。根节点请填写`""`<br>同一档案类别下至多可以有99个根节点。 |

<br/>

#### CURL:
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items/batch?accessToken=hQgbxfJnlElc00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "dimensionId":"U_gb_X4Yr8aY00:我是测试档案",
    "itemListRequest":[
        {
            "name":"批量接口一级四11",
            "code":"API2845",
            "visibility":{
                "fullVisible":false,
                "staffs":[
                    "ltAbQUtfE03k00:Ul0bKxHV6o3g00",
                    "ltAbQUtfE03k00:NU8bdZALSsts00"
                ],
                "roles":[
                    "ltAbQUtfE03k00:admin",
                    "xfwc6jcQbwgw00"
                ],
                "departments":[
                    "ltAbQUtfE03k00:zE8bTFJSqo1k00",
                    "ltAbQUtfE03k00"
                ]
            },
            "parentId":""
        },
        {
            "name":"批量接口二子1111",
            "code":"API282112",
            "visibility":{
                "fullVisible":true,
                "staffs":[

                ],
                "roles":[

                ],
                "departments":[

                ]
            },
            "parentId":"5Occ4lYCpM1400"
        },
        {
            "name":"批量接口二子111",
            "code":"API282111",
            "visibility":{
                "fullVisible":true,
                "staffs":[

                ],
                "roles":[

                ],
                "departments":[

                ]
            },
            "parentId":"5Occ4lYCpM1400"
        }
    ]
}'
```
<br/>

#### 成功响应:
```json
{
    "items":[
        {
            "id":"aFwc6_Ipx8p000",
            "dimensionId":"U_gb_X4Yr8aY00:我是测试档案",
            "code":"API2845",
            "name":"批量接口一级四11",
            "visibility":{
                "fullVisible":false,
                "staffs":[
                    "ltAbQUtfE03k00:Ul0bKxHV6o3g00",
                    "ltAbQUtfE03k00:NU8bdZALSsts00"
                ],
                "roles":[
                    "ltAbQUtfE03k00:admin",
                    "xfwc6jcQbwgw00"
                ],
                "departments":[
                    "ltAbQUtfE03k00:zE8bTFJSqo1k00",
                    "ltAbQUtfE03k00"
                ],
                "departmentsIncludeChildren":true
            },
            "parentId":"",
            "form":null
        },
        {
            "id":"r58c6_Ipx8p400",
            "dimensionId":"U_gb_X4Yr8aY00:我是测试档案",
            "code":"API282112",
            "name":"批量接口二子1111",
            "visibility":{
                "fullVisible":true,
                "staffs":[

                ],
                "roles":[

                ],
                "departments":[

                ],
                "departmentsIncludeChildren":true
            },
            "parentId":"5Occ4lYCpM1400",
            "form":null
        },
        {
            "id":"cWUc6_Ipx8p800",
            "dimensionId":"U_gb_X4Yr8aY00:我是测试档案",
            "code":"API282111",
            "name":"批量接口二子111",
            "visibility":{
                "fullVisible":true,
                "staffs":[

                ],
                "roles":[

                ],
                "departments":[

                ],
                "departmentsIncludeChildren":true
            },
            "parentId":"5Occ4lYCpM1400",
            "form":null
        }
    ]
}
```

#### 失败响应:
```json
{
    "errorCode": 500,
    "errorMessage": "上级档案不存在",
    "errorDetails": "java.lang.IllegalArgumentException: 上级档案不存在\n\t",
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
		width: 35%;
		white-space: nowrap;
	}

</style>
















