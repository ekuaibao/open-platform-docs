# 获取全局字段列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/property"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**        | String | 全局字段类型 | 必填  | flow.FlowForm | `flow.FlowForm` : 单据<br/>`datalink.form` : 业务对象<br/>`dimension.form` : 自定义档案<br/>`staff.form` : 员工<br/>`department.form` : 部门 | 

:::tip
- `type` 参数不是备注中的固定值时，返回的是默认的 `flow.FlowForm`（单据类型的全局字段列表）。
:::

## CURL
```shell
curl --location --request GET 'http://app.ekuaibao.com/api/openapi/v1/property?accessToken=ID_3sNZ1zd0jTw:PCx3rwm3aA00qM&type=department.form' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items":[
        {
            "name":"costCenter",
            "label":"成本中心",
            "active":true,
            "canAsDimension":true,
            "ability":"",
            "dataType":{
                "type":"ref",
                "entity":"basedata.Dimension.成本中心预置"
            }
        },
        {
            "name":"legalEntity",
            "label":"法人实体",
            "active":true,
            "canAsDimension":true,
            "ability":"",
            "dataType":{
                "type":"ref",
                "entity":"basedata.Dimension.法人实体"
            }
        }
    ]
}
```


