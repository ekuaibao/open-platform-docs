# 更新自定义档案项
用于修改自定义档案项。

import Control from "../../../components/Control";

<Control
method="PUT"
url="/api/openapi/v1/dimensions/items/$`id`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String  | 档案项id | 必填| - | 可通过[获取自定义档案项](/docs/open-api/dimensions/get-dimension-items)获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name**                   | String  | 档案项名称	| 非必填  | -     | 档案项名称 |
| **code**                   | String  | 档案项编码	| 非必填  | -     | 档案项编码 |
| **visibility**             | Object  | 可见范围	    | 非必填  | -     | 可见范围  |
| **&emsp; ∟ fullVisible** | Boolean | 是否全部可见	| 非必填  | false | 在非全部可见的情况下，仅白名单内的员工可见。 |
| **&emsp; ∟ staffs**      | Array   | 员工白名单	| 非必填  | -     | 值为[员工id](/docs/open-api/corporation/get-all-staffs) |
| **&emsp; ∟ roles**       | Array   | 角色白名单	| 非必填  | -     | 值为[角色id](/docs/open-api/corporation/get-roles-group) |
| **&emsp; ∟ departments** | Array   | 部门白名单	| 非必填  | -     | 值为[部门id](/docs/open-api/corporation/get-departments) |
| **parentId**               | String  | 父节点id    | 非必填  | -     | 通过[获取自定义档案项](/docs/open-api/dimensions/get-dimension-items)来获取。根节点请填写`""` |

:::tip
- 系统预置档案有一些额外字段，详细字段传参见CURL里面的注释。
:::

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items/$XBUbxhnP5k8w00?accessToken=hQgbxfJnlElc00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "name": "档案项名称",
    "code": "档案项编码",
    "visibility": {
        "fullVisible": false,
        "staffs": [ "JOYbpjPP-E2Q00:y8gbpjP9OsnI00" ],
        "roles": [],
        "departments": []
    },
    "parentId": "Ak0btTcoEkrA00",
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

:::danger
- 响应需要判断状态码来确定是否成功。
:::

## 成功响应
```text
    code 204
```

## 失败响应
```json
{
    "errorCode": 412,
    "errorMessage": "编码为[档编码]的档案项找不到上级节点",
    "errorDetails": null,
    "code": null,
    "data": null
}
```


