# 批量新建自定义档案项

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1.1/dimensions/items/batch"
/>

<details>
  <summary>v1.1版本特性</summary>
  <div>
    - 🐞 新增了当“fullVisible“为”false“时，对 ”staffs“、”roles“、”departments“三个参数的必填及有效性校验。
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **dimensionId**                 | String  | 档案类别ID  | 必填  | - | 可通过[获取档案类别](/docs/open-api/dimensions/get-dimensions)来获取 |
| **itemListRequest**             | Array   | 档案项集合   | 必填  | - | 新增的档案项集合 |
| **&emsp; ∟ name**              | String  | 档案值名称	| 必填  | - | 档案值名称，最大不能超过300个字 |
| **&emsp; ∟ code**              | String  | 档案值编码	| 必填  | - | 档案值编码 |
| **&emsp; ∟ visibility**        | Object  | 可见范围	| 非必填 | - | 可见范围 |
| **&emsp;&emsp; ∟ fullVisible** | Boolean | 是否全部可见 | 非必填 | true | `true` : 全部可见 <br/>`false` : 非全部可见，此时**三个白名单至少必填一项**<br/>在非全部可见的情况下，仅白名单内的员工可见 |
| **&emsp;&emsp; ∟ staffs**      | Array   | 员工白名单	| 非必填 | - | 值为[员工ID](/docs/open-api/corporation/get-all-staffs) |
| **&emsp;&emsp; ∟ roles**       | Array   | 角色白名单   | 非必填 | - | 值为[角色ID](/docs/open-api/corporation/get-roles-group) |
| **&emsp;&emsp; ∟ departments** | Array   | 部门白名单   | 非必填 | - | 值为[部门ID](/docs/open-api/corporation/get-departments) |
| **&emsp; ∟ parentId**          | String  | 档案值父级ID | 必填   | - | 可通过[获取档案值](/docs/open-api/dimensions/get-dimension-items)来获取。根节点请填写 `""` |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/batch?accessToken=hQgbxfJnlElc00' \
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

## 成功响应
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

## 失败响应
本接口是从数组第一个参数开始校验，参数有问题就报错打断，直到全部通过校验才调用成功：
```json
{
    "errorCode": 412,
    "errorMessage": "上级档案[3456]不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```




