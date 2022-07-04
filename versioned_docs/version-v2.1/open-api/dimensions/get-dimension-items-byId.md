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

  [**0.7.159**](/docs/open-api/notice/update-log#07159) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	   | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **id**          | String | 自定义档案值的ID | 必填  | - | 可通过[获取自定义档案项](/docs/open-api/dimensions/get-dimension-items)获取 |

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
        "orders": 1585212226451,            //排序
        "visibility": {                     //可见范围
            "fullVisible": true,  //是否全部可见。在非全部可见的情况下，仅白名单内的员工可见。
            "staffs": [],         //员工白名单
            "roles": [],          //角色白名单
            "departments": [],    //部门白名单
            "departmentsIncludeChildren": true
        },
        "payAccountIds": null,    //支付账户ID
        "form": null,
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

**如果出现以下信息，表示没有对应 `id` 的档案项信息：**
```json
{
    "value": null
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "输入存在错误:\n- 缺少id参数",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
