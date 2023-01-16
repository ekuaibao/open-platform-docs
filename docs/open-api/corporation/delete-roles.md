# 删除角色下员工信息

import Control from "@theme/Control";

<Control
method="DELETE"
url="/api/openapi/v1.1/roledefs/$`roledefId`/staffs"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.13.0**](/docs/open-api/notice/update-log#1122)&emsp;-> 🚀 接口升级 `v1.1` 版本，开放了接口可以删除数据来源为 **【手动管理】** 的角色数据的权限，系统页面仍保留无法手动删除数据来源为 **【API导入】** 的角色数据。<br/>
  [**1.8.0**](/docs/open-api/notice/update-log#180) &emsp; -> 🆕 新增了本接口。<br/>

  </div>
</details>

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
curl --location --request DELETE 'https://app.ekuaibao.com/api/openapi/v1.1/roledefs/$ID_3BJKZuv0Dow/staffs?accessToken=ID_3KGdB6S01Z0:bwa3wajigF0WH0'
```

## 成功响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **204** | - | (响应需要判断 **HTTP状态码** 来确定是否成功，响应成功时无内容返回) | - |

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 找不到角色 | 请确认 `roledefId`（角色ID）是否正确或存在 | 
