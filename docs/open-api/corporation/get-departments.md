# 获取部门列表(包含停用部门)

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/departments"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	                       | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number | 分页查询的起始序号,即从第几条数据开始查询 | 必填 | - | 从0开始 |
| **count**       | Number | 查询数据条数                         | 必填 | - | 最大不能超过1000 |

> ⚠️ 注意：
> 
> 分页的起始值是从0开始， 而不是传统的1开始

## CURL
```
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/departments?accessToken=RCIbwHcnF0kg00&start=0&count=200' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "count": 3, //数据总条数
    "items": [
          {
                "id": "JOYbpjPP-E2Q00:pAwbwH_W7sec00",  //部门id
                "name": "财务部",                        //部门名称
                "parentId": "JOYbpjPP-E2Q00",		    //父级部门id
                "active": true,		                    //部门是否已停用
                "form":{                                //部门关联法人实体id和成本中心id
                    "costCenter":"NzMcynfBJ43M00",      //成本中心ID
                    "legalEntity":"11YcypdGzoEo00"      //法人实体ID
                },
                "code": "1003"	                        //部门编码
          },
          {
                "id": "JOYbpjPP-E2Q00",
                "name": "恒达",
                "parentId": "",
                "active": true,
                "form":{                                 //部门关联法人实体id和成本中心id
                    "costCenter":"NzMcynfBJ43M00",       //成本中心ID
                    "legalEntity":"11YcypdGzoEo00"       //法人实体ID
                },
                "code": "1242"
          },
          {
                "id": "JOYbpjPP-E2Q00:ZNEbwH_W7sc000",
                "name": "人事部",
                "parentId": "JOYbpjPP-E2Q00",
                "active": true,
                "form":{                                  //部门关联法人实体id和成本中心id
                  "costCenter":"NzMcynfBJ43M00",          //成本中心ID
                  "legalEntity":"11YcypdGzoEo00"          //法人实体ID
                },
                "code": "1002"
          }
     ]
}
```

## 失败响应
`start`传参大于等于实际部门总数据量时，会得到如下响应，只显示总数据量“count“，不显示部门信息
```json
{
    "count": 3,
	"items": []
}
```
当`accessToken`失效时，得到如下回应
```json
{
    "errorCode": 403,
    "errorMessage": "未授权",
    "errorDetails": null,
    "code": null,
    "data": null
}
```