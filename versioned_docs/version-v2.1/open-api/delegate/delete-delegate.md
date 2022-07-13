# 删除委托审批授权

import Control from "@theme/Control";

<Control
method="DELETE"
url="/api/openapi/v2/organization/delegate/approve/$`id`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 委托关系数据ID | 必填 | - | 通过 [根据发起人ID获取委托审批授权数据](/docs/open-api/delegate/get-delegate-byStaffId) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request DELETE 'https://app.ekuaibao.com/api/openapi/v2/organization/delegate/approve/$jSIcih1RiNHg00?accessToken=MwAcih69ycDo00'
```

## 成功响应
```json
{
    "id": "jSIcih1RiNHg00"  //被删除的委托关系数据ID
}
```

## 失败响应
**委托关系数据ID** 参数传值错误时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "对应的委托关系不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

