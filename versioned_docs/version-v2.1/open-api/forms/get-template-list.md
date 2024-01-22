# 根据企业ID获取单据模版列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/specifications"
/>

:::caution
- 只返回未停用、未删除的模版信息。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/specifications?accessToken=f8QbuH2hwQ5E00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "Kk09lCDmlg3Q00",  //单据模版ID
            "name": "日常报销单",     //单据模版名称
            "type": "expense"        //单据类型：requisition：申请单、 expense：报销单、 loan：借款单、 custom：通用审批单(基础单据)、 payment：付款单
        },
        {
            "id": "MZU9pMXIVQ8M00",
            "name": "通用基础单据",
            "type": "custom"
        },
        {
            "id": "MaU9pMXIVQ8I00",
            "name": "付款单",
            "type": "payment"
        },
        {
            "id": "g8E9lCDmlg3Y00",
            "name": "申请单",
            "type": "requisition"
        },
        {
            "id": "k1M9lCDmlg3M00",
            "name": "差旅报销单",
            "type": "expense"
        },
        {
            "id": "oTI9lCDmlg3U00",
            "name": "借款单",
            "type": "loan"
        },
        {
            "id": "sZc9lCDmlg4000",
            "name": "差旅申请单",
            "type": "requisition"
        }
    ]
}
```

