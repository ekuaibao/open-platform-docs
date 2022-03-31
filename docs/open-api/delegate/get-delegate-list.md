# 获取企业下所有委托审批授权数据

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/organization/delegate/approve"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/organization/delegate/approve?accessToken=cCMbw_mKUs8c00' \
```

## 成功响应
```json
{
    "items": [
        {
            "corporationId": "34A73EyI8A0w00",             //企业ID
            "staffId": "34A73EyI8A0w00:VV89AHfyJo2E00",    //授权发起人ID
            "delegateeId": "34A73EyI8A0w00:rgobwK3yUoqw00",//被委托人ID
            "name": "委托授权",                            //授权名称
            "remark": "备注",                              //授权备注
            "startTime": 1612339282021,                   //授权开始时间
            "endTime": null,                              //授权结束时间
            "originalIds": [                              //授权的单据源模板ID集合
                "ms0cgHfmF1fU00",
                "U7IcgM1h6ZEo00"
            ],
            "id": "jSIcih1RiNHg00"                        //委托关系数据ID
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
