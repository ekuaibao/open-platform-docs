# 共享申请事项

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/requisition/$`flowId`/share/[`staffIds`]"
/>

:::caution
被共享人员是全量更新，不是增量更新，第二次调用接口时不包含第一次调用时的被共享人员的话，第一次的人员会被取消共享状态。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注                                                                  |
| :--- | :--- | :--- | :--- |:--- |:--------------------------------------------------------------------|
| **flowId**   | String | 申请单单据id | 必填 | - | [通过获取单据列表接口获取](/docs/v2.0/open-api/flows/get-forms-sequences)或者出站消息 |
| **staffIds** | Array  | 被共享员工id | 必填 | - | [通过获取员工列表接口获取](/docs/open-api/corporation/get-all-staffs)           |


## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **staffId**     | String | 共享员工id | 必填 | - | [通过获取员工列表接口获取](/docs/open-api/corporation/get-all-staffs) |

## CURL
```shell
curl --location -g --request PUT 'https://app.ekuaibao.com/api/openapi/v1/requisition/$ID_3nuAVmk3r9w/share/[Urf3lsFgBp00gw:ID_3ow_Xyy0MzM]?accessToken=ID_3oHBMwn017g:Urf3lsFgBp00gw&staffId=Urf3lsFgBp00gw:AvT3lntT8zzpWw'
```

## 成功响应
```json
{
    "value": true
}
```

## 失败响应
当`flowId`和共享员工id`staffId`不正确时，请检查：
```json
{
    "errorCode": 400,
    "errorMessage": "申请事项不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当`staffIds`不正确时，请检查被共享员工id：
```json
{
    "errorCode": 400,
    "errorMessage": "共享对象不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
