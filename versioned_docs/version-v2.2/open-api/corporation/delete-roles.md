# 删除角色下员工信息

import Control from "@theme/Control";

<Control
method="DELETE"
url="/api/openapi/v1/roledefs/$`roledefId`/staffs"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.8.0**](/docs/open-api/notice/update-log#180) -> 🆕 新增了本接口。<br/>

  </div>
</details>

:::caution
- 只有数据来源为【**[API导入](/docs/open-api/corporation/info#新建角色)**】的角色才能使用此接口更新角色。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **roledefId** | String | 角色ID | 必填 | - | 在易快报桌面端「系统设置」>「角色管理」处查看<br/>通过 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填  | -  | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request DELETE 'https://app.ekuaibao.com/api/openapi/v1/roledefs/$ID_3BJKZuv0Dow/staffs?accessToken=ID_3KGdB6S01Z0:bwa3wajigF0WH0'
```

## 成功响应
:::caution
- 响应需要判断 **HTTP状态码** 来确定是否成功，响应成功时无内容返回。
:::

```text
code 204
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **403** | - | 没有权限同步此角色 | 请确认所操作的角色数据来源是否为【**API导入**】 | 
| **412** | - | 找不到角色 | 请确认 `roledefId`（角色ID）是否正确或存在 | 
