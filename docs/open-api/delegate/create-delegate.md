# 新增委托审批授权

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/organization/delegate/approve"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffId**     | String  | 授权发起人ID	   | 必填  | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |
| **delegateeId** | String  | 被委托人ID	       | 必填  | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |
| **name**        | String  | 授权名称	       | 非必填 | - | 授权名称 |
| **remark**      | String  | 备注	           | 非必填 | - | 备注 |
| **startTime**   | String  | 授权开始时间	   | 非必填 | - | 毫秒级时间戳 |
| **endTime**     | String  | 授权结束时间	   | 非必填 | - | 毫秒级时间戳 |
| **originalIds** | Array   | 授权单据模板ID集合  | 非必填 | - | 通过 [获取当前版本单据模板列表](/docs/open-api/forms/get-specifications-latest) 获取 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/organization/delegate/approve?accessToken=MwAcih69ycDo00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "staffId": "34A73EyI8A0w00:VV89AHfyJo2E00",     //授权发起人ID
    "delegateeId": "34A73EyI8A0w00:rgobwK3yUoqw00", //被委托人ID
    "name": "修改委托授权",                          //授权名称
    "remark": "备注",                               //授权备注
    "startTime": 1612339282021,                     //授权开始时间
    "endTime": null,                                //授权结束时间
    "originalIds": [                                //授权单据模板ID集合
        "ms0cgHfmF1fU00",
        "U7IcgM1h6ZEo00"
    ]
}'
```

## 成功响应
```json
{
    "id": "jSIcih1RiNHg00"  //委托关系数据ID
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "委托发起人与被委托人已存在委托关系",
    "errorDetails": null,
    "code": null,
    "data": null
}
```