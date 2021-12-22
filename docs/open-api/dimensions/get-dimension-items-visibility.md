# 获取自定义档案项(带可见范围)

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions/items/withVisibility"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	                          | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number  | 分页查询的起始序号，即从第几条数据开始查询  | 必填  | - | 从0开始 |
| **count**       | Number  | 查询数据条数                          | 必填  | - | 不能大于1000 | 
| **dimensionId** | String  | 档案类别id                           | 非必填 | - | [获取自定义档案类别](/docs/open-api/dimensions/get-dimensions)，通过此参数可查询指定档案类别下的档案项 |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items/withVisibility?accessToken=hQgbxfJnlElc00&start=0&count=100' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "count": 21,    //该类别档案项的数量
    "items": [
        {
            "id": "档案项id", 
            "name": "档案项名称", 
            "active": true,           //是否有效
            "code": "档案项编码", 
            "dimensionId": "所属档案类别id", 
            "parentId": "档案项的父级id",
            "visibility": {           //可见范围
                "fullVisible": true,  //是否全部可见。在非全部可见的情况下，仅白名单内的员工可见。
                "staffs": null,       //员工白名单
                "roles": null,        //角色白名单
                "departments": null,  //部门白名单
                "departmentsIncludeChildren": true
            }
        },
        {
            "id": "档案项id",
            "name": "档案项名称",
            "active": true,           //是否有效
            "code": "档案项编码",
            "dimensionId": "所属档案类别id",
            "parentId": "档案项的父级id",
            "visibility": {           //可见范围
                "fullVisible": false, //是否全部可见。在非全部可见的情况下，仅白名单内的员工可见。
                "staffs": [           //员工白名单
                    "员工id"
                ],
                "roles": [],          //角色白名单
                "departments": [],    //部门白名单
                "departmentsIncludeChildren": true
            }
        }
    ]
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "count参数不能大于1000",
    "errorDetails": null,
    "code": null,
    "data": null
}
```