# 获取权限配置员工列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/staffs/getPermissionStaffIds"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.25.0**](/docs/open-api/notice/update-log#1250) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述      | 是否必填 | 默认值 | 备注                                                              |
| :--- | :--- |:--------| :--- |:--- |:----------------------------------------------------------------|
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **permission**  | String | 权限配置枚举值 | 必填 | - | 不支持获取拥有【**单据权限**】的员工列表                 |

### 权限配置枚举值
| 权限配置             | 枚举值   |
|:-----------------|:------|
| **系统管理**         | `SYS_ADMIN` |
| **费用报表管理**       | `REPORT_VIEW` |
| **报销单管理**        | `EXPENSE_MANAGE` |
| **借款管理**         | `LOAN_MANAGE` |
| **申请管理**         | `REQUISITION_MANAGE` |
| **预算管理**         | `BUDGET_MANAGE` |
| **高级报表**         | `CUSTOM_REPORT_VIEW` |
| **结算方式管理**       | `SETTLEMENT_MANAGE` |
| **企业钱包管理**       | `CORP_WALLET_MANAGE` |
| **E商卡管理**        | `VIRTUAL_CARD_MANAGE` |
| **差旅管理**         | `TRIP_MANAGE` |
| **票据管理**         | `INVOICE_MANAGE` |
| **补充发票**         | `SUPPLEMENT_INVOICE` |
| **智能报表**         | `SMART_REPORT` |
| **审计日志**         | `AUDIT_ADMIN` |
| **账户管理-付款账户**    | `PAYMENT_ACCOUNT` |
| **账户管理-收款账户**    | `RECEIPT_ACCOUNT` |
| **支付数据管理**       | `PAYMENT_WORKBENCH` |
| **企业支付管理**       | `PAYMENT_MANAGEMENT` |
| **信用管理**         | `CREDIT_MANAGE` |
| **发票复核管理**       | `INVOICE_REVIEW` |
| **发票复核管理（费用明细）** | `INVOICE_REVIEW_QUICK_EXPENSE` |
| **商城管理**         | `MALL_MANAGE` |
| **消费事项**         | `CONSUMER_MATTERS` |
| **收款单管理**        | `RECEIPT_MANAGE` |
| **通讯录管理**        | `CONTACTS_MANAGE` |
| **对账结算管理**       | `CHECKING_BILL_MANAGE` |
| **对公付款管理**       | `CORP_PAYMENT_MANAGE` |
| **KA-对账结算**      | `KA_TOBACCO_CHECKING_MANAGER` |
| **扩展档案管理**       | `EXTEND_DIMENSION` |
| **进项抵扣管理**       | `INVOICE_DISCOUNT` |
| **销项开票管理**         | `OUTPUT_TAX_MANAGE` |
| **企业代报销**        | `CORP_AGENCY_EXPENSE` |
| **审批流管理**        | `FLOW_ADMIN` |
| **角色管理**         | `ROLE_ADMIN` |
| **档案关系管理**       | `RECORD_LINK_ADMIN` |
| **费用标准管理**       | `COST_CONTROL_ADMIN` |
| **费用类型管理**       | `FEE_TYPE_ADMIN` |
| **单据模板管理**       | `FORM_SPEC_ADMIN` |
| **发票使用规范管理**     | `INVOICE_USAGE_NORM` |
| **发票导入设置管理**     | `INVOICE_IMPORT_SET` |
| **发票价税分离管理**     | `INVOICE_PRICETAX_SEP` |
| **首页配置**         | `HOME_PAGE_ADMIN` |
| **BI报表**         | `BI_REPORT_VIEW` |
| **对公业务管理**       | `CORPORATE_BANKING` |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v1/staffs/getPermissionStaffIds?accessToken=ID01w4CBqwBQ4f%3AxgJ3wajigF25H0&permission=MALL_MANAGE'
```

## 成功响应
```json
{
    "items": [  //拥有【商城管理】权限的员工列表（权限范围配置了角色时，统一返回所有拥有此角色的员工ID）
        "xgJ3wajigF25H0:AvX3B4CxjprN7w",
        "xgJ3wajigF25H0:dbc3wajigF1UH0",
        "rAy3nbzPcm1HY0:ID01ohbaGWASrd",
        "xgJ3wajigF25H0:ID01iOBVJdZiEf",
        "xgJ3wajigF25H0:ID01w4CBif7t4X"
    ]
}
```


