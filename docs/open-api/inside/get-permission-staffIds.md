# 查询商城管理员列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/staffs/getPermissionStaffIds"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.25.0**](/docs/open-api/notice/update-log#1250) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token      | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **permission**  | String | 管理员角色枚举值 | 必填 | - | `MALL_MANAGE` : 商城管理员 |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v1/staffs/getPermissionStaffIds?accessToken=ID01w4CBqwBQ4f%3AxgJ3wajigF25H0&permission=MALL_MANAGE'
```

## 成功响应
```json
{
    "items": [      //商城管理员列表
        "xgJ3wajigF25H0:AvX3B4CxjprN7w",
        "xgJ3wajigF25H0:dbc3wajigF1UH0",
        "rAy3nbzPcm1HY0:ID01ohbaGWASrd",
        "xgJ3wajigF25H0:ID01iOBVJdZiEf",
        "xgJ3wajigF25H0:ID01w4CBif7t4X"
    ]
}
```


