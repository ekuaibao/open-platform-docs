# 修改委托授权

import Control from "../../../components/Control";

<Control
method="PUT"
url="/api/openapi/v2/organization/delegate/approve"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id**          | String  | 委托关系数据id     | 必填   | - | [委托关系数据id](/docs/open-api/delegate/get-delegate-byStaffId) |
| **staffId**     | String  | 授权发起人id	   | 必填  | - | 即委托人[员工ID](/docs/open-api/corporation/get-staff-ids) |
| **delegateeId** | String  | 被委托人id	       | 必填  | - | 即被委托人[员工ID](/docs/open-api/corporation/get-staff-ids) |
| **name**        | String  | 授权名称	       | 非必填 | - | 授权名称 |
| **remark**      | String  | 备注	           | 非必填 | - | 备注 |
| **startTime**   | String  | 授权开始时间	   | 非必填 | - | 毫秒级时间戳 |
| **endTime**     | String  | 授权结束时间	   | 非必填 | - | 毫秒级时间戳 |
| **originalIds** | Array   | 授权单据模板ID集合  | 非必填 | - | 授权[单据模板ID](/docs/open-api/forms/get-specifications-latest)集合 |
## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/organization/delegate/approve?accessToken=MwAcih69ycDo00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "jSIcih1RiNHg00",                         //委托关系数据id    
    "staffId": "34A73EyI8A0w00:VV89AHfyJo2E00",     //授权发起人id
    "delegateeId": "34A73EyI8A0w00:rgobwK3yUoqw00", //被委托人id
    "name": "修改委托授权",                          //授权名称
    "remark": "备注",                               //授权备注
    "startTime": 1612339282021,                    //授权开始时间
    "endTime": null,                               //授权结束时间
    "originalIds": [                               //授权模板源模板id集合
        "ms0cgHfmF1fU00",
        "U7IcgM1h6ZEo00"
    ]
}'
```

## 成功响应
```json
{
    "value": {
        "corporationId": "34A73EyI8A0w00",
        "staffId": "34A73EyI8A0w00:VV89AHfyJo2E00",
        "delegateeId": "34A73EyI8A0w00:rgobwK3yUoqw00",
        "name": "修改委托授权",
        "remark": "备注",
        "startTime": 1612339282021,
        "endTime": null,
        "originalIds": [
            "ms0cgHfmF1fU00",
            "U7IcgM1h6ZEo00"
        ],
        "id": "jSIcih1RiNHg00"
    }
}
```

## 失败响应
```text
存在非法的人员id  //被委托人id错误
```