# 新增费用类型默认导入项
用于把业务对象作为单据中【**费用明细**】的费用类型默认导入项，其在系统中的配置及使用详见[费用类型默认导入项](/docs/open-api/feetype/info#费用类型默认导入项)。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/feeTypeImportRule/defaultRule"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **sourceId** | String | 增加的业务对象ID  | 必填 | - | 格式为：dataLink_加业务对象ID，[业务对象ID获取](/docs/open-api/datalink/question-answer#问题一)<br/>例如：dataLink_b41a0b811ce2ef06ac00 |
| **title**    | String | 显示的业务对象名称 | 必填 | - | 为了方便区分，尽量不要与已导入的业务对象重名 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/feeTypeImportRule/defaultRule?accessToken=cCMbw_mKUs8c00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "sourceId": "dataLink_b41a0b811ce2ef06ac00",
    "title": "岸边项目测试"
}'
```

## 成功响应
```json
{
    "value": {
        "version": 1,                     //版本
        "active": true,                   //是否停用
        "createTime": 1599115678472,
        "updateTime": 1599115678472,
        "corporationId": "JOYbpjPP-E2Q00", //企业ID
        "name": "费用类型默认导入列表",      //名称
        "id": "DEFAULT_ID_JOYbpjPP-E2Q00", //ID
        "allowEdit": false,                //是否可编辑
        "formType": "expense",             //单据类型(expense：报销单; requisition：申请单)
        "ruleItems": [                     //规则集
            {
                "sourceId": "invoiceScan",
                "viewTitle": "(仅移动端)扫描发票",
                "filterId": null
            },
            {
                "sourceId": "invoiceWeChat",
                "viewTitle": "(仅移动端)微信发票",
                "filterId": null
            },
            {
                "sourceId": "invoiceManual",
                "viewTitle": "手录发票",
                "filterId": null
            },
            {
                "sourceId": "invoicePdf",
                "viewTitle": "(仅网页端)PDF发票",
                "filterId": null
            },
            {
                "sourceId": "excel",
                "viewTitle": "(仅网页端)EXCEL",
                "filterId": null
            },
            {
                "sourceId": "dataLink_b41a0b811ce2ef06ac00",
                "viewTitle": "岸边项目测试",
                "filterId": null
            }
        ]
    }
}
```

## 失败响应

:::caution
- 同一个业务对象ID只能添加一次，多次添加返回**“该业务对象导入已存在 : dataLink_xx”**。
:::

```json
{
    "errorCode": 400,
    "errorMessage": "无效的业务对象Id:dataLink_b e2ef06ac00",
    "errorDetails": null,
    "code": null,
    "data": null
}
```