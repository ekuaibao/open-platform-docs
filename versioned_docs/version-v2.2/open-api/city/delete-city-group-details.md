# 删除城市组详情

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1.1/cityGroup/detail/delete"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.2.0**](/updateLog/update-log#120) 
  - 🚀 接口升级 `v1.1` 版本，新增了 `staffIds`（员工ID）与 `roleIds`（角色ID）列表不能同时为空的校验。
- [**0.7.135**](/updateLog/update-log#07135) 
  - 🆕 新增了本接口。
</div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **cityGroupId** | String | 城市组ID   | 必填  | - | 通过 [获取城市组列表](/docs/open-api/city/get-city-group) 获取 |
| **staffIds**    | Array  | 人员ID列表 | 非必填 | - | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
| **roleIds**     | Array  | 角色ID列表 | 非必填 | - | 通过 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 获取 |

:::tip
- `staffIds`（员工ID）与 `roleIds`（角色ID）不能同时为空。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1.1/cityGroup/detail/delete?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "cityGroupId": "wC0cPu1DNY1400",
    "staffIds": [ 
        "AdMbpirnlY2Q00:-eAbCLexxI2k00" 
    ],
    "roleIds": []
}'
```

## 成功响应
```json
{
    "success": true,
    "message": "ok"
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 员工和角色不允许同时为空 | 请确认 `staffIds`（员工ID）与 `roleIds`（角色ID）不能同时为空 | 
| **400** | - | ID为'xxx:xxx'的员工不存在 | 请确认 `staffIds`（员工ID）或 `roleIds`（角色ID）在系统中是否存在 | 
| **400** | - | 根据参数staffIds和roleIds找不到需要删除的数据 | 请确认要删除的城市组数据与系统中的数据是否匹配 | 
