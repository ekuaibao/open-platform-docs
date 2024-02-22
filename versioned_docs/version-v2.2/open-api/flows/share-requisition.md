# 共享申请事项

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/requisition/$`flowId`/share/[`staffIds`]"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**0.7.146**](/updateLog/update-log#07146)
  - 🆕 新增了本接口。

</div>
</details>

:::caution
- 被共享人员是 **全量更新**，不是增量更新，再次调用接口时不包含上一次的被共享人员的话，上一次的人员会被取消共享状态。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowId**   | String | 申请单单据ID | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一) |
| **staffIds** | Array  | 被共享员工ID | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |


## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **staffId**     | String | 共享员工ID | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |

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
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 申请事项不存在 | 请确认 `flowId`（申请单单据ID）和 `staffId`（共享员工ID）是否正确，`staffId` 是否停用 | 
| **400** | - | 共享对象不存在 | 请确认 `staffIds`（被共享员工ID）是否正确 | 


