# 根据企业ID获取单据模板列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/specifications"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.27.0**](/docs/open-api/notice/update-log#1270) -> 🐞 新增了支持返回 `corpPayment`（对公付款单）、`reimbursement`（报账单、发票录入单）类型的单据模板。 <br/>

  </div>
</details>


:::caution
- 只返回未停用、未删除的模板信息。
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
            "id": "Kk09lCDmlg3Q00",  //单据模板ID
            "name": "日常报销单",     //单据模板名称
            "type": "expense"        //单据类型  requisition：申请单、 expense：报销单、 loan：借款单、 custom：通用审批单(基础单据)、 payment：付款单、corpPayment：对公付款单、reimbursement：报账单/发票录入单
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
        },
        {
            "id": "ID01vve2SdYWHdcorpPayment",
            "name": "对公付款单",
            "type": "corpPayment"  //对公付款单
        },
        {
            "id": "ID01vvdUEZ379J",
            "name": "发票录入单",     
            "type": "reimbursement" //发票录入单
        },
        {
            "id": "ID01vvdUEZ37GL",
            "name": "报账单",
            "type": "reimbursement" //报账单
        }
    ]
}
```

