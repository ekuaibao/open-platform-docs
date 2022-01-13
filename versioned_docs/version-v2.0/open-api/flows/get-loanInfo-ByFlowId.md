# 根据单据ID获取借款包

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/loans/getLoanInfoByFlowId/$`flowId`"
/>

:::caution
- 此接口是支持借款单以及包含开通借款权限的申请单，只要是单据中有借款的单据都会有借款包。
:::

## Path Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowId** | String | 借款单ID | 必填 | - | 通过其他api接口或者[出站消息](/docs/open-api/outbound-message/outbound-new)获取 |

## Query Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 通过授权接口获取 | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/loans/getLoanInfoByFlowId/$2a8bsS2qFgck00?accessToken=TNQbsyYQV80I00'
```

## 成功响应(费用明细)
```json
{
    "value": {                         //借款包信息
        "version": 1,                  //版本信息
        "active": true,                //是否有效
        "createTime": 1589272741621,   //创建时间(毫秒级时间戳)
        "updateTime": 1589272741622,   //修改时间(毫秒级时间戳)
        "corporationId": "nd8aNompiogg00",//企业id
        "ownerId": "nd8aNompiogg00:mFw8PzLLpI0800",//借款包所属人员工id
        "id": "g3MaYlA9mc5c00",        //借款包id
        "total": 1000,                 //总金额
        "totalMoneyNode": {
            "standard": "1000",
            "standardUnit": "元",
            "standardScale": 2,
            "standardSymbol": "¥",
            "standardNumCode": "156",
            "standardStrCode": "CNY"
        },
        "reserved": 0,           //占用金额（未确认的还款的金额，还款申请提交中，出纳未确认收款）
        "remain": 1000,          //余额（剩余待还金额）
        "repayment": 0,          //确认金额（确认已还金额，出纳已确认收款）
        "state": "REPAID",       //REPAID：待还款，PAID：已还清
        "flowId": "xt0aYlzRI05w00",//单据ID
        "title": "借款单 11",     //借款单标题
        "repaymentDate": 1591951080000,//还款日期
        "loanDate": 1589272680000,//借款日期
        "source": "LOAN",         //借款来源, REQUISITION：申请，LOAN：借款-默认借款包是借款生成的
        "loanInfoRemind": false,  //是否借款提醒
        "config": {               //配置信息
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
单据中没找到对应的借款包，需要去检查单据是否已生成了借款记录（借款单流程已完成），或者检查下这个单据是否存在：
```json
{
    "errorCode": 400,
    "errorMessage": "根据借款单Id:8ZAbsRr6_QfA00, 获取不到对应的借款包,请核查",
    "errorDetails": null,
    "code": null,
    "data": null
}
```







