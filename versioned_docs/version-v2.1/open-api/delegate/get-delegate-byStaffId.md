# 根据发起人ID获取所有委托信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/organization/delegate/approve/$`staffId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffId** | String | 授权发起人id | 必填 | - | 值为[员工ID](/docs/open-api/corporation/get-staff-ids) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/organization/delegate/approve/$34A73EyI8A0w00:VV89AHfyJo2E00?accessToken=MwAcih69ycDo00'
```

## 成功响应
```json
{
    "items": [
        {
            "corporationId": "34A73EyI8A0w00",              //企业id
            "staffId": "34A73EyI8A0w00:VV89AHfyJo2E00",     //授权发起人id
            "delegateeId": "34A73EyI8A0w00:rgobwK3yUoqw00", //被委托人id
            "name": "委托授权",                              //授权名称
            "remark": "备注",                               //授权备注
            "startTime": 1612339282021,                     //授权开始时间
            "endTime": null,                                //授权结束时间
            "originalIds": [                                //授权模板源模板id集合
                "ms0cgHfmF1fU00",
                "U7IcgM1h6ZEo00"
            ],
            "id": "jSIcih1RiNHg00"                          //委托关系数据id
        },
        {
            "corporationId": "34A73EyI8A0w00",
            "staffId": "34A73EyI8A0w00:HiQbwK3q-Qsw00",
            "delegateeId": "34A73EyI8A0w00:qD0bKunErwug00",
            "name": "",
            "remark": "",
            "startTime": null,
            "endTime": null,
            "originalIds": [],
            "id": "f_0cfEDrblSY00"
        }
    ]
}
```
