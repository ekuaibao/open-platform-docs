# 获取自定义档案项(所有字段值)
获取自定义档案项所有字段值，包括系统预置档案的额外字段值。

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions/items/withAll"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	     | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number  | 分页查询的起始序号 | 必填  | - | 从第几条数据开始查询 |
| **count**       | Number  | 查询数据条数      | 必填  | - | 最大不能超过 `1000` |
| **dimensionId** | String  | 档案类别id       | 非必填 | - | [获取自定义档案类别](/docs/open-api/dimensions/get-dimensions)，通过此参数可查询<br/>指定档案类别下的档案项 |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items/withAll?accessToken=ID_3w9Hs683BDM:f1Q9VElpo01s00&start=0&count=100&dimensionId=f1Q9VElpo01s00:成本中心预置'
```

## 成功响应
```json
{
    "count": 2,                          //档案值的数量
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.8.0.0:A",
            "version": 1,
            "active": true,              //是否有效
            "createTime": 1641881657097,
            "updateTime": 1641881657097,
            "name": "阿门",               //档案值名称
            "nameSpell": "AMEN",
            "code": "CODE3",             //档案值编码
            "corporationId": "f1Q9VElpo01s00",
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "parentId": "",                               //档案值的父级id
            "id": "ID_3w0G92wfSCw",                       //档案值id
            "dimensionId": "f1Q9VElpo01s00:成本中心预置",  //所属档案类别id
            "orders": 1641881657097,
            "visibility": {               //可见范围
                "fullVisible": true,      //是否全部可见。在非全部可见的情况下，仅白名单内的员工可见。
                "staffs": [],             //员工白名单
                "roles": [],              //角色白名单
                "departments": [],        //部门白名单
                "departmentsIncludeChildren": true   //子部门是否可见
            },
            "payAccountIds": [],        //“法人实体”档案额外参数，可用支付账户
            "form": {
                "taxpayerType": "GeneralTaxpayer",  //“法人实体”档案额外参数，纳税人类型，GeneralTaxpayer：一般纳税人；SmallScaleTaxpayer：小规模纳税人
                "postType": "",         //“岗位预置”档案额外参数，岗位类型，值为【岗位类型预置】档案实例ID
                "rankType": "",         //“职级预置”档案额外参数，职级类型，值为【职级类型预置】档案实例ID
                "baseCurrencyId": "",
                "projectBase": "",      //“项目” 档案额外参数，项目所在地
                "projectType": "",      //“项目” 档案额外参数，项目类型，值为【项目类型预置】档案实例ID
                "projectManager": "",   //“项目” 档案额外参数，项目经理，值为员工ID
                "projectInspector": ""  //“项目” 档案额外参数，项目总监，值为员工ID
            },
            "sourceCorpId": null,
            "taxpayerType": null,
            "permissions": [
                {
                    "name": "ALL",
                    "auth": true
                }
            ],
            "leaf": true
        }
    ]
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "输入存在错误:\n- 缺少start参数",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
