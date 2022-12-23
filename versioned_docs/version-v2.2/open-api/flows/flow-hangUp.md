# 单据暂挂

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/backlog/data/hangUp/[`flowIds`]"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.12.1**](/docs/open-api/notice/update-log#1121) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowIds** | String  | 单据ID | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一)，可传多个，用 `,` 分隔 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token    | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **staffId**     | String | 操作人ID     | 必填 | - | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取，此人必须拥有此待办的权限，本人或被委托人 |


## CURL
```json
curl --location -g --request PUT 'https://app.ekuaibao.com/api/openapi/v1/backlog/data/hangUp/[ID01lHtx4bPaTJ]?accessToken=ID01lHtw1JHHZB:ID01lCS5i0hgYv&staffId=ID01lCS5i0hgYv:ID01kU1mTv1mnJ'
```

## 成功响应
```json
{
    "value": {}
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | 无此待办的操作权限 | 请确认 `staffId` 有此待办的权限，本人或被委托人 | 
| **400** | - | 未设置指定人员 | 请确认 `staffId` 已传参且正确 | 
