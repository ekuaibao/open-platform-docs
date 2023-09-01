# 获取外部部门列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/departments/external/department"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.23.0**](/docs/open-api/notice/update-log#1230) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	    | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **start**       | Number | 分页查询的起始序号 | 必填 | - | 分页的起始值是从 `0` 开始， 而不是传统的 `1` 开始 |
| **count**       | Number | 查询数据条数      | 必填 | - | 最大不能超过 `100` |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v1/departments/external/department?accessToken=ID01w4CBf6GhmT%3AxgJ3wajigF25H0&start=0&count=10'
```

## 成功响应
```json
{
    "count": 2,
    "items": [
        {
            "id": "xgJ3wajigF25H0:ID_3wajigF2aH0:external",
            "name": "外部人员",
            "parentId": "",
            "active": true,
            "code": "",
            "updateTime": "2022-01-12 14:42:56",
            "createTime": "2022-01-12 14:42:56",
            "form": null,
            "order": 0
        },
        {
            "id": "xgJ3wajigF25H0:ID01w4CBfaWeTB:external",
            "name": "外部1",
            "parentId": "xgJ3wajigF25H0:ID_3wajigF2aH0:external",
            "active": true,
            "code": "002",
            "updateTime": "2023-08-23 18:03:21",
            "createTime": "2023-08-23 18:03:21",
            "form": null,
            "order": 0
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **403** | - | 未授权 | 请确认 `accessToken`（认证token）是否已过期<br/>请确认 **地址前缀** 与您的企业环境一致 | 

