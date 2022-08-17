# 根据单据ID获取借款包信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/loans/getLoanInfoByFlowId/$`flowId`"
/>

:::caution
- 本接口支持借款单以及包含开通借款权限的申请单，只要是有借款的单据都会有借款包。
:::

## Path Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowId** | String | 借款单ID | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一) |

## Query Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 通过授权接口获取 | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/loans/getLoanInfoByFlowId/$2a8bsS2qFgck00?accessToken=TNQbsyYQV80I00'
```

## 成功响应
```json
{
    "value": {                            //借款包信息
        "version": 1,                     //版本信息
        "active": true,                   //是否有效
        "createTime": 1589272741621,      //创建时间(毫秒级时间戳)
        "updateTime": 1589272741622,      //更新时间(毫秒级时间戳)
        "corporationId": "nd8aNompiogg00",//企业ID
        "ownerId": "nd8aNompiogg00:mFw8PzLLpI0800",//借款包所属人员工ID
        "id": "g3MaYlA9mc5c00",           //借款包ID
        "total": 1000,                    //总金额
        "totalMoneyNode": {
            "standard": "1000",
            "standardUnit": "元",
            "standardScale": 2,
            "standardSymbol": "¥",
            "standardNumCode": "156",
            "standardStrCode": "CNY"
        },
        "reserved": 0,                   //占用金额（未确认还款的金额，还款申请提交中，出纳未确认收款）
        "remain": 1000,                  //余额（剩余待还金额）
        "repayment": 0,                  //确认金额（确认已还金额，出纳已确认收款）
        "state": "REPAID",               //REPAID：待还款，PAID：已还清
        "flowId": "xt0aYlzRI05w00",      //单据ID
        "title": "借款单 11",            //借款单标题
        "repaymentDate": 1591951080000,  //还款日期
        "loanDate": 1589272680000,       //借款日期
        "source": "LOAN",                //借款来源, REQUISITION：申请单，LOAN：借款（默认借款包是借款生成的）
        "loanInfoRemind": false,         //是否借款提醒
        "config": {                      //配置信息
            "isLimitRepaymentDate": true,           //是否限制还款日期
            "allowModifyRepaymentDateConfig": null, //允许修改还款日期配置
            "limitRepaymentDateRange": null,        //还款日期范围
            "foreignCurrency": null,                //外币
            "writtenOffMaxTimes": null,             //注销最长时间
            "ability": "loan" 
        },
        "foreignCurrencyLoan": null,
        "foreignRemain": null,
        "foreignReserved": null,
        "foreignRepayment": null,
        "totalProfitAndLoss": null,
        "delayCount": 0,
        "writtenOffRemainTimes": null,
        "budgetRemain": null,
        "transfer": false,
        "transferId": null
    }
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 根据借款单Id:8ZAbsRr6_QfA00, 获取不到<br/>对应的借款包,请核查 | 请确认单据是否已生成了借款记录（借款单流程已完成）<br/>请确认 `flowId`（借款单ID）是否正确 | 








