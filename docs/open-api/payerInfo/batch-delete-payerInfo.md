# 批量删除开票信息

import Control from "@theme/Control";

<Control
method="DELETE"
url="/api/openapi/v2/payerinfo/batch/delete"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.13.0**](/docs/open-api/notice/update-log#1122) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **--**            | Array  |  外层数组    | 必填  | - | 外层数组 |
| **&emsp; ∟ id**  | String | 开票信息ID   | 必填  | - | 通过 [获取开票信息列表](/docs/open-api/payerInfo/get-payerInfo-list) 获取 |


## CURL
```json
curl --location --request DELETE 'https://app.ekuaibao.com/api/openapi/v2/payerinfo/batch/delete?accessToken=ID01mljw71AF1J:ID01kcrFoZWafR' \
--header 'Content-Type: application/json' \
--data-raw '[
    "ID01m8tjDMhTht",
    "ID01jRq1CMVhi7",
    "ID_3HduWA1i8o0"
]'
```

## 成功响应
删除成功，返回对应的开票信息ID
```json
{
    "items": [
        "ID01m0a05hIY7Z",
        "ID01k7ZtsA6oJF"
    ]
}
```

所传开票信息ID不存在或已删除时，返回空
```json
{
    "items": []
}
```

