# 删除委托授权

import Control from "../../../components/Control";

<Control
method="DELETE"
url="/api/openapi/v2/organization/delegate/approve/$`id`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 委托授权关系的id | 必填 | - | [委托关系数据id](/docs/open-api/delegate/get-delegate-byStaffId) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
curl --location --request DELETE 'https://app.ekuaibao.com/api/openapi/v2/organization/delegate/approve/$jSIcih1RiNHg00?accessToken=MwAcih69ycDo00'
```

## 成功响应
```json
{
  "id": "jSIcih1RiNHg00"
}
```

## 失败响应
```text
对应的委托关系不存在
```

