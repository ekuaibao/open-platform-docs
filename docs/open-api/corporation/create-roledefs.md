# 新增角色

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/roledefs"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.3.0**](/updateLog/update-log#130)
  - 🆕 新增了本接口。

</div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填  | -  | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name**          | String | 角色名称 | 必填   | - | 角色名称不能重复 |
| **scope**         | String | 角色类型 | 必填   | - | 角色类型，**传值规则见下方TIP** |
| **roleGroupId**   | String | 角色组ID | 非必填 | - | 未传参时，默认分配到 **[未分组]** 角色组<br/>通过 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 获取 |
| **sourceChannel** | String | 数据来源 | 必填   | - | `MANUAL` : 手动管理&emsp; `API` : API导入 |

:::tip
- 角色类型可分为三种：
  - 普通角色（固定值）
  - 部门角色（固定值）
  - 自定义档案角色（自定义档案名称+角色，如：项目角色、岗位预置角色），自定义档案名称可通过[获取自定义档案类别](/docs/open-api/dimensions/get-dimensions)获取
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/roledefs?accessToken=ID_3BKMdBchD7g:xgJ3wajigF25H0' \
--header 'content-type: application/json' \
--data-raw '{
    "name":"ZGY普通角色API",
    "scope":"普通角色",
    "roleGroupId":"xgJ3wajigF25H0:group:default",
    "sourceChannel":"MANUAL"  //MANUAL:手动管理   API:API导入
}'
```

## 成功响应
```json
{
    "value": {
        "id": "ID_3BKMdBcOV7g", //角色ID
        "name": "ZGY普通角色API" //角色名称
    }
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 此名称的角色已经存在，请更换名称 | 请确认 `name`（角色名称）是否已存在 | 
| **412** | - | 角色组不存在 | 请确认 `roleGroupId`（角色组ID）是否存在 | 


