# 获取全局字段列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/property"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填    | -               | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**        | String | 全局字段类型 | 非必填  | `flow.FlowForm` | `flow.FlowForm` : 单据<br/>`datalink.form` : 业务对象<br/>`dimension.form` : 自定义档案<br/>`staff.form` : 人员全局字段<br/>`department.form` : 部门 | 

## CURL
```json
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

## 失败响应
`type` 参数不是备注中的固定值时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "type参数不合法",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

