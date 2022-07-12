# 根据借款包ID获取借款包信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/loan/loanInfo/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.7.1**](/docs/open-api/notice/update-log#171) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 借款包ID | 必填 | - | 可以通过出站消息获取 |

## Query Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 通过授权接口获取 | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/loan/loanInfo/$ID_3HV7_Hq1yKw?accessToken=ID_3JxzF8U0aA0:bwa3wajigF0WH0'
```

## 成功响应
```json
{
    "value": {                                 //借款包信息
        "pipeline": 1,                         
        "grayver": "9.32.0.0:A",               
        "version": 2,                         
        "active": true,                        //是否有效
        "createTime": 1654583438870,           //创建时间(毫秒级时间戳)
        "updateTime": 1655370021141,           //更新时间(毫秒级时间戳)
        "corporationId": "bwa3wajigF0WH0",     //企业ID
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w", //借款包所属人员工ID
        "id": "ID_3HV7_Hq1yKw",                //借款包ID
        "total": "10.0",                       //总金额
        "totalMoneyNode": {
            "standard": "10.0",
            "standardUnit": "元",
            "standardScale": 2,
            "standardSymbol": "¥",
            "standardNumCode": "156",
            "standardStrCode": "CNY"
        },
        "reserved": 10.0,                      //占用金额（未确认还款的金额，还款申请提交中，出纳未确认收款）
        "remain": 0.0,                         //余额（剩余待还金额）
        "repayment": 0,                        //确认金额（确认已还金额，出纳已确认收款）
        "overage": null,
        "state": "REPAID",                     //REPAID：待还款，PAID：已还清
        "flowId": "ID_3BPNpAnjCGw",            //单据ID
        "title": "迭代测试-不传2",              //借款单标题
        "repaymentDate": 9007199254740991,     //还款日期
        "loanDate": 1647446400000,             //借款日期
        "source": "REQUISITION",               //借款来源, REQUISITION：申请单，LOAN：借款（默认借款包是借款生成的）
        "sharedOwnerIds": [],
        "notConfirmOwnerIds": [],
        "loanInfoRemind": false,               //是否借款提醒
        "config": {                            //配置信息
            "isLimitRepaymentDate": false,     //是否限制还款日期  
            "allowModifyRepaymentDateConfig": null, //允许修改还款日期配置
            "limitRepaymentDateRange": null,   //还款日期范围
            "foreignCurrency": false,          //外币
            "writtenOffMaxTimes": null,        //注销最长时间
            "autoShare": null,
            "allShare": null,
            "ability": "loan"
        },
        "foreignCurrencyLoan": null,
        "foreignRemain": null,
        "foreignReserved": null,
        "foreignRepayment": null,
        "foreignOverage": null,
        "totalProfitAndLoss": null,
        "delayCount": 0,
        "writtenOffRemainTimes": null,
        "budgetRemain": null,
        "transfer": false,
        "code": "S22000038",                    //单据编号
        "transferId": null,
        "infoType": "GENERAL",
        "realArrivalDate": 1655370021165
    }
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 根据借款包Id:ID_3HV7_Hq1yKw1, 获取不到对应的借款包,请核查 | 确认借款包ID是否正确 | 








