# 获取当前版本单据模板列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/specifications/latestByType"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.20.0**](/docs/open-api/notice/update-log#1200) -> 🐞 响应信息中新增了 `visibility`（可见范围）字段。<br/>

  </div>
</details>

:::caution
- 单据模板最后一次修改保存后的版本为当前版本，最后一次修改之前的版本都为历史版本。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**          | String  | 认证token	  | 必填   | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **type**                 | String  | 单据类型	  | 必填   | - | `expense` : 报销单<br/>`loan` : 借款单<br/>`requisition` : 申请单<br/>`payment` : 付款单<br/>`custom` : 通用审批单(基础单据) |
| **specificationGroupId** | String  | 单据模板组ID | 非必填 | - | 单据模板组ID |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/specifications/latestByType?accessToken=qUMbutefrU8U00&type=expense&specificationGroupId' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "C20bu2n6osbc00",  //单据模板ID
            "name": "差旅报销单",    //单据模板名称
            "active": true,          //是否启用
            "visibility": {          //可见范围
                "fullVisible": false,
                "staffs": [
                    "xgJ3wajigF25H0:dbc3wajigF1UH0",
                    "xgJ3wajigF25H0:ID01iOBVJdZ93F",
                    "xgJ3wajigF25H0:ID01iOBVJdZiEf",
                    "xgJ3wajigF25H0:eTM3rQTD1y20vw",
                    "xgJ3wajigF25H0:ID_3Dvxff1n3kw"
                ],
                "roles": [],
                "departments": [],
                "departmentsIncludeChildren": true
            }
        },
        {
            "id": "GQgbu2n6osbI00",
            "name": "日常报销单",
            "active": true,
            "visibility": {
                "fullVisible": true,
                "staffs": [],
                "roles": [],
                "departments": [],
                "departmentsIncludeChildren": true
            }
        },
        {
            "id": "Zvobu2n6osbQ00",
            "name": "团建报销",
            "active": true,
            "visibility": {
                "fullVisible": true,
                "staffs": [],
                "roles": [],
                "departments": [],
                "departmentsIncludeChildren": true
            }
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"items": []}` | 为空表示没有查询到对应类型的单据模板 |
| **412** | - | type参数不合法 | 请确认 `type`（单据类型）是否为 **备注** 中提供固定值 |

