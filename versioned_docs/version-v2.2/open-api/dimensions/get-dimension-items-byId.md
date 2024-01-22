# 根据ID获取自定义档案项
通过档案项的 `id` 来获取对应的档案项信息。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions/getDimensionById"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.8.0**](/docs/open-api/notice/update-log#180) &emsp; -> 🐞 **成功响应** 中可获取新增的 `channel`（数据来源）字段。<br/>
  [**0.7.159**](/docs/open-api/notice/update-log#07159) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	   | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **id**          | String | 自定义档案值的ID | 必填  | - | 通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 获取 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions/getDimensionById?accessToken=ID_3uzKp$o07_w:Urf3lsFgBp00gw&id=Urf3lsFgBp00gw:desktopPC' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "value": {
        "pipeline": 1,
        "grayver": "8.8.0.0:A",
        "version": 1,
        "active": true,                    //是否有效
        "createTime": 1630465060738,       //创建日期
        "updateTime": 1630465060738,       //更新日期
        "name": "台式电脑",                 //档案值名称
        "nameSpell": "TAISHIDIANNAO",
        "code": "5-Desktop-PC",             //自定义档案值的编码
        "corporationId": "Urf3lsFgBp00gw",  //企业ID
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "parentId": "",                     //档案的父级ID
        "id": "Urf3lsFgBp00gw:desktopPC",   //档案值ID
        "dimensionId": "Urf3lsFgBp00gw:固定资产类目",  //所属档案类别ID
        "channel": "API",                   //数据来源  MANUAL：系统创建  API：接口创建
        "orders": 1585212226451,            //排序
        "visibility": {                     //可见范围
            "fullVisible": true,  //是否全部可见。在非全部可见的情况下，仅白名单内的员工可见。
            "staffs": [],         //员工白名单
            "roles": [],          //角色白名单
            "departments": [],    //部门白名单
            "departmentsIncludeChildren": true
        },
        "payAccountIds": [],        //“法人实体”档案额外参数，可用支付账户
        "form": {
            "taxpayerType": "",     //“法人实体”档案额外参数，纳税人类型，GeneralTaxpayer：一般纳税人；SmallScaleTaxpayer：小规模纳税人
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
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"value": null}` | 为空表示没有对应的档案项信息<br/>请确认 `id`（自定义档案值的ID）是否存在 | 
| **400** | - | 输入存在错误:<br/>- 缺少id参数 | 请确认 `id` （自定义档案值的ID）是否传入 | 

