# 删除城市组详情

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/cityGroup/detail/delete"
/>

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

## CURL
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/detail/delete?accessToken=FsYc5j4FlclU00' \
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

#### 成功响应:
```json
{
    "success": true,
    "message": "ok"
}
```
