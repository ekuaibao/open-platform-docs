# 获取当前版本单据模板列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/specifications/latestByType"
/>

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
            "id": "C20bu2n6osbc00", //单据模板ID
            "name": "差旅报销单",   //单据模板名称
            "active": true          //是否启用
        },
        {
            "id": "GQgbu2n6osbI00",
            "name": "日常报销单",
            "active": true
        },
        {
            "id": "Zvobu2n6osbQ00",
            "name": "团建报销",
            "active": true
        }
    ]
}
```


