# 获取自定义档案项(带可见范围)

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions/items/withVisibility"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**0.7.136**](/docs/open-api/notice/update-log#07136) -> 🆕 新增了支持按 `dimensionId`（档案类别ID）参数过滤数据。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	     | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **start**       | Number  | 分页查询的起始序号 | 必填  | - | 从第几条数据开始查询 |
| **count**       | Number  | 查询数据条数      | 必填  | - | 最大不能超过 `100` | 
| **dimensionId** | String  | 档案类别ID       | 非必填 | - | 通过 [获取自定义档案类别](/docs/open-api/dimensions/get-dimensions) 获取，通过此参数可查询<br/>指定档案类别下的档案项 |

## CURL
```shell
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
                "departmentsIncludeChildren": true  //子部门是否可见
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
                "departmentsIncludeChildren": true  //子部门是否可见
            }
        }
    ]
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "count参数不能大于100",
    "errorDetails": null,
    "code": null,
    "data": null
}
```