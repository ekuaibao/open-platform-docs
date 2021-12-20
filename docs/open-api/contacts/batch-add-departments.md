# 批量新增部门

{% httpverb "post" %} /api/openapi/v1/departments/batch/create {% endhttpverb %}

#### Query Parameters:

|名称 |类型 |描述 |是否必填 |默认值 | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String | 认证token	| 必填 | - | [通过授权接口获取](/getting-started/auth.html) |

#### Body Parameters:

|名称 |类型 |描述 |是否必填 |默认值 | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **departmentList**            | Array     | 新增部门的集合 | 必填  | - | 新增部门的集合 |
| **departmentList/code**       | String    | 部门编码      | 必填  | - | 可传""，不可传重复的值 |
| **departmentList/name**       | String    | 部门名称      | 必填  | - | 不可传""，不可传重复的值 |
| **departmentList/parentId**   | String    | 上级部门ID    | 必填  | - | 根部门为"" |
| **departmentList/order**      | Number    | 排序         | 非必填 | 0 | code为空,order相同时,按创建时间排序<br>code为空,order不同时,按order排序<br>code不为空时,按code排序 |

<br/>
#### CURL:
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/departments/batch/create?accessToken=rv0bwKeAks4Y00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "departmentList":[
        {
            "code":"233434342121111",
            "name":"事业部11111",
            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",
            "order":0
        },
        {
            "code":"233434342121311111",
            "name":"事业部11112",
            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",
            "order":0
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
            "id":"U_gb_X4Yr8aY00:YSYc6_Ipx8uI00",
            "name":"事业部11111",
            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",
            "active":true,
            "form":{//部门关联法人实体id和成本中心id
                "costCenter":"NzMcynfBJ43M00",//成本中心ID
                "legalEntity":"11YcypdGzoEo00"//法人实体ID
            },
            "code":"233434342121111"
        },
        {
            "id":"U_gb_X4Yr8aY00:Ty8c6_Ipx8uM00",
            "name":"事业部11112",
            "parentId":"U_gb_X4Yr8aY00:NTIc6przKo2s00",
            "active":true,
            "form":{//部门关联法人实体id和成本中心id
                "costCenter":"NzMcynfBJ43M00",//成本中心ID
                "legalEntity":"11YcypdGzoEo00"//法人实体ID
            },
            "code":"233434342121311111"
        }
    ]
}
```

#### 失败响应：
```json
{
      "errorCode": 400,
      "errorMessage": "该级目录名称「事业部11111」已存在",
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
    /* 指定列宽度 */
	table th:nth-of-type(1) { 
		width: 25%;
		white-space: nowrap;
	}
    table th:nth-of-type(2) {
		width: 10%;
		white-space: nowrap;
	}
    table th:nth-of-type(3) {
		width: 15%;
		white-space: nowrap;
	}
    table th:nth-of-type(4) {
		width: 9%;
		white-space: nowrap;
	}
    table th:nth-of-type(5) {
		width: 8%;
		white-space: nowrap;
	}
    table th:nth-of-type(6) {
		width: 33%;
		white-space: nowrap;
	}
</style>