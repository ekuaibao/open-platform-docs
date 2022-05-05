# 删除城市组详情

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1.1/cityGroup/detail/delete"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.0.x  </b></a>&nbsp;&nbsp;&nbsp; -> 🐞 新增了 “<b>staffIds</b>”（员工ID）与 “<b>roleIds</b>”（角色ID）列表不能同时为空的校验。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>0.7.135</b></a> -> 🆕 新增了本接口。<br/>
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **cityGroupId** | String | 城市组ID   | 必填  | - | 通过[获取城市组列表](/docs/open-api/city/get-city-group)获取 |
| **staffIds**    | Array  | 人员ID列表 | 非必填 | - | 通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)获取 |
| **roleIds**     | Array  | 角色ID列表 | 非必填 | - | 通过[查询角色组和角色](/docs/open-api/corporation/get-roles-group)获取 |

:::tip
- `staffIds`（员工ID）与 `roleIds`（角色ID）不能同时为空。
:::

## CURL
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1.1/cityGroup/detail/delete?accessToken=FsYc5j4FlclU00' \
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

## 成功响应:
```json
{
    "success": true,
    "message": "ok"
}
```

## 失败响应:
`staffIds`（员工ID）与 `roleIds`（角色ID）同时为空时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "员工和角色不允许同时为空",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

`staffIds`（员工ID）或 `roleIds`（角色ID）不存在时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "ID为'bwa3wajigF0WH0:ID_3lokDfb1p5w-'的员工不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

要删除的 `staffIds`（员工ID）或 `roleIds`（角色ID）与系统中的数据不匹配时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "根据参数staffIds和roleIds找不到需要删除的数据",
    "errorDetails": null,
    "code": null,
    "data": null
}
```