# 启用/停用城市组

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/cityGroup/updateStatus/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**0.7.135**](/docs/open-api/notice/update-log#07135) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 城市组ID | 必填 | - | 通过[获取城市组列表](/docs/open-api/city/get-city-group)获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **status** | Boolean | 城市组状态 | 必填 | - | `true` : 启用 &emsp; `false` : 停用 |

## CURL
```json
curl --location --request PUT 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/updateStatus/$wC0cPu1DNY1400?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "status": false
}'
```

## 成功响应
```json
{
    "value": {
        "success": true,
        "message": ""
    }
}
```

## 失败响应
`id`（城市组ID）不正确时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "ID_3wAjiZJ1h8M1数据不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```