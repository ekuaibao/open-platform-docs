# 获取自定义档案项(所有字段值)
获取自定义档案项所有字段值，包括系统预置档案的额外字段值。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions/items/withAll"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.8.0**](/docs/open-api/notice/update-log#180) -> 🐞 **成功响应** 中可获取新增的 `channel`（数据来源）字段。<br/>
  [**1.0.0**](/docs/open-api/notice/update-log#100) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	     | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **start**       | Number  | 分页查询的起始序号 | 必填  | - | 从第几条数据开始查询 |
| **count**       | Number  | 查询数据条数      | 必填  | - | 最大不能超过 `100` |
| **dimensionId** | String  | 档案类别id       | 非必填 | - | 通过 [获取自定义档案类别](/docs/open-api/dimensions/get-dimensions) 获取，通过此参数可查询<br/>指定档案类别下的档案项 |

## CURL
```shell
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
            "name": "阿门",              //档案值名称
            "nameSpell": "AMEN",
            "code": "CODE3",             //档案值编码
            "corporationId": "f1Q9VElpo01s00",
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "parentId": "",                               //档案值的父级ID
            "id": "ID_3w0G92wfSCw",                       //档案值ID
            "dimensionId": "f1Q9VElpo01s00:成本中心预置",  //所属档案类别ID
            "channel": "MANUAL",                          //数据来源  MANUAL：系统创建  API：接口创建
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
                "baseCurrencyId": "",   //“法人实体”档案额外参数，法人实体本位币数字代码，开通【法人实体多币种】功能并配置后此参数才有值。
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

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 输入存在错误:<br/>- 缺少start参数 | 请确认 `start` （分页查询的起始序号）参数是否传入 | 

