# 发票OCR识别+验真

提供发票OCR识别+验真的能力，返回验真通过的发票信息。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/invoice/multiple_items"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.22.0**](/updateLog/update-log#1220)
  - 🆕 新增了本接口。

</div>
</details>

:::caution
- 需要开通【**OCR智能识别**】和【**发票查验**】功能，方可使用本接口。
- 本接口限制 **QPS=1**（1次/秒）。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型      | 描述       | 是否必填 | 默认值  | 备注                                                                    |
| :--- |:--------|:---------|:-----|:-----|:----------------------------------------------------------------------|
| **fileName** | String  | 文件名      | 必填   | -    | [下载附件](/docs/open-api/attachment/attachment-download) 接口返回的 `key` 参数                                                                  |
| **fileUrl**  | String  | 文件url    | 必填   | -    | [下载附件](/docs/open-api/attachment/attachment-download) 接口返回的 `url` 参数  |
| **staffId**  | String  | 查验员工ID   | 必填   | -    | 可通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取               |
| **isExOcr**  | Boolean | OCR供应商类型 | 非必填  | true | `true` : 易道博识 &emsp; `false` : 企业所属环境默认供应商                            |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/invoice/multiple_items?accessToken=ID01kNRYIneBb1:djg8LshfUkfM00' \
--header 'Content-Type: application/json' \
--header 'Cookie: acw_tc=0a099d6e16690319121854026e987dd75b04d8a921a1db15d7bb391844204b' \
--data-raw '{
    "fileName":"发票222",
    "fileUrl":"https://files-dd.ekuaibao.com/openapi5237c317-26c8-499f-9f7d-e642e099b928-%E5%8F%91%E7%A5%A81?Expires=1669042023&OSSAccessKeyId=STS.NTDnJExi7Aouku9Zcjh729boC&Signature=nfMnJzEswPD2B74HaG0cuURTjXU%3D&security-token=CAIS8AF1q6Ft5B2yfSjIr5fxJfDxlbYW9q2eaVOIvmM%2FZLge1qfEoTz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapOJM3TtUFvzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAEi6hYnh2imaWSbfg6GN9D94nyzYpL5%2BQQU7vcQy6b%2B4dV6DClMX%2BIesQU7dLJ3CmZaIdUAmQFCUbwofXGjjufdRzHBbgbEpthFBpYDyUbrKJNN2u%2F9Kqya%2FMnc3OSzM0AE6p%2BQAEsLZLFoUrd94mkvzLDnIPh0piLVBWlpA6ohvA%3D%3D",
    "staffId":"djg8LshfUkfM00:ID_3kpneISgylw"
}'
```

## 成功响应

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="增值税发票" label="增值税发票" default>

```json
{
    "items":[
        {
            "master":{
                "pipeline":1,
                "grayver":"9.73.0.0-prd",
                "version":8,
                "active":false,            //发票主体是否已使用 true：未使用（爱发票、微信卡包、支付宝卡包等） false：已使用（绑定了单据或者随手记）
                "createTime":1666261337252,
                "updateTime":1667208702371,
                "name":"91068626",
                "nameSpell":"91068626",
                "code":"031001900204:91068626",
                "corporationId":"rGN3lum_4o00hM",
                "sourceCorporationId":null,
                "dataCorporationId":null,
                "id":"rGN3lum_4o00hM:031001900204:91068626", //发票ID
                "form":{                                     //发票数据
                    "E_税额":{
                        "standard":"18.34",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "E_是否抵扣":true,
                    "E_不计税金额":{
                        "standard":"305.66",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "E_system_收票状态":"NORECEIVE",
                    "E_system_发票主体_OFD":null,
                    "E_system_发票主体_PDF":null,
                    "E_system_发票主体_code":"031001900204",
                    "E_system_发票主体_name":"91068626",
                    "E_system_发票主体_cardId":null,
                    "E_system_发票主体_图片":"1-1667208696771-562.png",
                    "E_system_发票主体_备注":"",
                    "E_system_发票主体_方向":90,
                    "E_system_发票主体_来源":"OCR",
                    "E_system_发票主体_税额":{
                        "standard":"18.34",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "E_system_发票主体_验真":true,
                    "E_system_发票主体_复核人":"陈成雪",
                    "E_system_发票主体_开票人":"郝可可",
                    "E_system_发票主体_收款人":"任永兵",
                    "E_system_发票主体_校验码":"717829",
                    "E_system_发票主体_ifNormOpen":true,
                    "E_system_发票主体_encryptCode":null,
                    "E_system_发票主体_价税合计":{
                        "standard":"324.00",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "E_system_发票主体_发票代码":"031001900204",
                    "E_system_发票主体_发票号码":"91068626",
                    "E_system_发票主体_发票日期":1646323200000,
                    "E_system_发票主体_发票类别":"PAPER_NORMAL",
                    "E_system_发票主体_发票金额":{
                        "standard":"305.66",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "E_system_发票主体_识别范围":[
                        0,
                        0,
                        1072,
                        1674
                    ],
                    "E_system_票据来源_sourceEntityId":"ID01kotXPShdbp",
                    "E_system_发票主体_购买方名称":"深圳市步科电气有限公司",
                    "E_system_发票主体_销售方名称":"上海药谷商务酒店有限公司",
                    "E_system_发票主体_发票印刷号码":"91068626",
                    "E_system_发票主体_购买方地址电话":"",
                    "E_system_发票主体_销售方地址电话":"中国（上海）自由贸易试验区蔡伦路333号021-58555000",
                    "E_system_发票主体_购买方开户行及账号":"",
                    "E_system_发票主体_购买方纳税人识别号":"914403006670719829",
                    "E_system_发票主体_销售方开户行及账号":"工行漕河泾支行 1001266319880002945",
                    "E_system_发票主体_销售方纳税人识别号":"91310115794481239D"
                },
                "ledgerAmount":null,
                "ledgerAmountModel":null,
                "totalCount":1,
                "useCount":0,
                "entityId":"system_发票主体",
                "platformId":"system_发票平台",
                "source":"WRITE",
                "masterId":null,
                "index":0,
                "visibility":{
                    "fullVisible":true,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "visible":true,
                "ownerId":"",
                "operatorId":"rGN3lum_4o00hM:zAt3m1Aakfi5XM",
                "sourceId":"",
                "selfPlannedConfigs":null,
                "rigidControlPassed":true,
                "controlCalcVersion":0,
                "topDate":0,
                "topFlag":0,
                "flowCounts":{},
                "sourceMessage":""
            },
            "details":[           //发票明细数据
                {
                    "pipeline":1,
                    "grayver":"9.69.0.0-prd",
                    "version":6,
                    "active":false,
                    "createTime":1666261337259,
                    "updateTime":1666261736552,
                    "name":"*住宿服务*住宿费",
                    "nameSpell":"*ZHUSUFUWU*ZHUSUFEI",
                    "code":"ID01k6ciewufHV",
                    "corporationId":"rGN3lum_4o00hM",
                    "sourceCorporationId":null,
                    "dataCorporationId":null,
                    "id":"ID01k6ciewufHV",          //发票明细ID
                    "form":{
                        "E_system_发票明细_code":"ID01k6ciewufHV",
                        "E_system_发票明细_name":"*住宿服务*住宿费",
                        "E_system_发票明细_单价":{
                            "standard":"305.66",
                            "standardUnit":"元",
                            "standardScale":2,
                            "standardSymbol":"¥",
                            "standardNumCode":"156",
                            "standardStrCode":"CNY"
                        },
                        "E_system_发票明细_单位":"",
                        "E_system_发票明细_数量":"1",
                        "E_system_发票明细_税率":"6%",
                        "E_system_发票明细_税额":{
                            "standard":"18.34",
                            "standardUnit":"元",
                            "standardScale":2,
                            "standardSymbol":"¥",
                            "standardNumCode":"156",
                            "standardStrCode":"CNY"
                        },
                        "E_system_发票明细_金额":{
                            "standard":"305.66",
                            "standardUnit":"元",
                            "standardScale":2,
                            "standardSymbol":"¥",
                            "standardNumCode":"156",
                            "standardStrCode":"CNY"
                        },
                        "E_system_发票明细_规格型号":""
                    },
                    "ledgerAmount":null,
                    "ledgerAmountModel":null,
                    "totalCount":1,
                    "useCount":0,
                    "entityId":"system_发票明细",
                    "platformId":"system_发票平台",
                    "source":"WRITE",
                    "masterId":"rGN3lum_4o00hM:031001900204:91068626",
                    "index":0,
                    "visibility":{
                        "fullVisible":true,
                        "staffs":[],
                        "roles":[],
                        "departments":[],
                        "departmentsIncludeChildren":true
                    },
                    "visible":true,
                    "ownerId":"",
                    "operatorId":"rGN3lum_4o00hM:zAt3m1Aakfi5XM",
                    "sourceId":"",
                    "selfPlannedConfigs":null,
                    "rigidControlPassed":true,
                    "controlCalcVersion":0,
                    "topDate":0,
                    "topFlag":0,
                    "flowCounts":{},
                    "sourceMessage":""
                }
            ],
            "message":"该发票在单据[B22001240]中已经关联",
            "status":"NO_RESULT",
            "ischeck":false
        }
    ]
}
```
</TabItem>
<TabItem value="非增值税发票" label="非增值税发票">

```json
{
    "items":[
        {
            "master":{
                "pipeline":1,
                "grayver":"9.20.0.0:A",
                "version":22,
                "active":false,
                "createTime":1648718980295,
                "updateTime":1649670982660,
                "name":"ID_3CshUp9uhdg",
                "nameSpell":"ID_3CshUp9uhdg",
                "code":"ID_3CshUp9uhdg",
                "corporationId":"rGN3lum_4o00hM",
                "sourceCorporationId":null,
                "dataCorporationId":null,
                "id":"ID_3CshUp9uhdg",
                "form":{
                    "E_税率":"9.0000",
                    "E_税额":{
                        "standard":"45.66",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "E_是否抵扣":true,
                    "E_不计税金额":{
                        "standard":"507.34",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "E_system_收票状态":"NORECEIVE",
                    "E_system_发票主体_OFD":null,
                    "E_system_发票主体_PDF":null,
                    "E_system_火车票_号码":"X027731",
                    "E_system_火车票_车次":"G154",
                    "E_system_火车票_金额":{
                        "standard":"553.00",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "E_system_发票主体_图片":"火车票b-1649301648297-141.png",
                    "E_system_发票主体_方向":0,
                    "E_system_发票主体_来源":"OCR",
                    "E_system_火车票_上车车站":"上海虹桥",
                    "E_system_火车票_下车车站":"北京南",
                    "E_system_火车票_乘车时间":1554628380000,
                    "E_system_火车票_座位类型":"二等座",
                    "E_system_火车票_消费类型":"交通",
                    "E_system_发票主体_识别范围":[
                        0,
                        0,
                        1340,
                        852
                    ],
                    "E_system_火车票_乘车人姓名":"李慧容",
                    "E_system_票据来源_sourceEntityId":"ID_3CshUp9uddg"
                },
                "ledgerAmount":null,
                "ledgerAmountModel":null,
                "totalCount":1,
                "useCount":0,
                "entityId":"system_火车票",
                "platformId":"system_发票平台",
                "source":"WRITE",
                "masterId":null,
                "index":0,
                "visibility":{
                    "fullVisible":true,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "visible":true,
                "ownerId":"",
                "operatorId":"rGN3lum_4o00hM:zAt3m1Aakfi5XM",
                "sourceId":"",
                "selfPlannedConfigs":null,
                "rigidControlPassed":true,
                "controlCalcVersion":0,
                "topDate":0,
                "topFlag":0,
                "flowCounts":{},
                "sourceMessage":""
            },
            "details":[],
            "message":"该发票在单据[B22000185]中已经关联",
            "status":"NO_RESULT",
            "ischeck":false
        }
    ]
}
```
</TabItem>
</Tabs>

### 返回参数列表（部分）
| 字段名称 | 类型 | 是否必返回 | 备注 |
| :--- | :--- | :--- | :--- |
| **items**    | Array | 是 | 发票数据集合，可能一张图片包含多张发票 |
| **master**   | Object | 是 | 发票主体数据 |
| **&emsp; ∟ entityId**| String | 是 | 发票种类<br/>`system_其他`<br/>`system_出租车票`<br/>`system_医疗发票`<br/>`system_发票主体`<br/>`system_发票明细`<br/>`system_定额发票`<br/>`system_客运汽车发票`<br/>`system_机打发票`<br/>`system_消费小票`<br/>`system_火车票`<br/>`system_航空运输电子客票行程单`<br/>`system_过路费发票` |
| **&emsp; ∟ form**    | Object   | 是 | 发票主体数据 |
| **&emsp; &emsp; ∟ E\_system\_发票主体\_图片**    | String | 是 | 发票图片key |
| **&emsp; &emsp; ∟ E\_system\_发票主体\_发票代码** | String | 是 | 发票代码 |
| **&emsp; &emsp; ∟ E\_system\_发票主体\_发票号码** | String | 是 | 发票号码 |
| **&emsp; &emsp; ∟ E\_system\_发票主体\_发票类别** | String | 否 | 当 `entityId` = `system_发票主体` 时，发票的细分类别<br/>`DIGITAL_NORMAL`  : 增值税电子普通发票<br/>`PAPER_ROLL` : 增值税普通发票（卷式）<br/>`FULL_DIGITAl_NORMAL` : 电子发票（普通发票）<br/>`FULL_DIGITAl_SPECIAL` : 电子发票（增值税专用发票）<br/>`FULL_DIGITAl_PAPER` : 全电纸质发票（增值税专用发票）<br/>`PAPER_FEE` : 通行费发票<br/>`PAPER_NORMAL` : 增值税普通发票<br/>`DIGITAL_SPECIAL` : 增值税电子专用发票<br/>`PAPER_SPECIAL` : 增值税专用发票<br/>`PAPER_CAR` : 机动车销售统一发票<br/>`SECOND_CAR` : 二手车销售统一发票<br/>`BLOCK_CHAIN` : 区块链发票  |
| **&emsp; &emsp; ∟ E\_system\_发票主体\_价税合计** | Object | 是 | 发票金额 |
| **&emsp; &emsp; ∟ E\_system\_发票主体\_税额**    | Object | 是 | 发票主体税额 |
| **&emsp; &emsp; ∟ E\_system\_发票主体\_发票金额** | Object | 是 | 发票不含税金额 |
| **details**  | Array | 否 | 发票明细数据<br/>**增值税发票** 可能包含多条明细数据<br/>**非增值税发票** 明细数据为空 |
| **&emsp; ∟ form**    | Object   | 否 | 发票明细数据 |
| **&emsp; &emsp; ∟ E\_system\_发票明细\_税率** | Integer   | 否 | 发票明细税率 |
| **message**  | String | 是 | 当前发票返回的使用提示信息 |
| **status**   | String | 是 | 当前发票是否可以被编辑的状态 |
| **ischeck**  | Boolean | 是 | 当前发票是否可以使用<br/>`true` : 可以使用<br/>`false` : 不可以使用，具体原因可以看 `message` |

### 创建单据时封装发票信息
当查验发票可以使用时，发票绑定到单据上，需要维护单据上的发票信息
```json
{
    "form":{                                   //单据模板字段信息
        "title":"演示01",                      //单据标题
        "details":[                            //费用明细数组
            {
                "feeTypeId":"ID_3wfDvD5OpOg",  //费用类型ID
                "feeTypeForm":{                //费用明细字段信息
                    "amount":{                 //费用金额
                        "standard":"495.5",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "feeDate":1631808000000,   //消费日期
                    "invoice":"1",             //发票数量
                    "attachments":[            //附件
                    ],
                    "invoiceForm":{            //发票信息
                        "type":"exist",        //发票开票类型
                        "invoices":[           //发票关联信息
                            {
                                "itemIds":[    //发票明细ID
                                    "ID01kotXPShAmj",
                                    "ID01kotXPShACP",
                                    "ID01kotXPShATl",
                                    "ID01kotXPShB9R",
                                    "ID01kotXPShBqn",
                                    "ID01kotXPShBGT",
                                    "ID01kotXPShBXp",
                                    "ID01kotXPShCdV",
                                    "ID01kotXPShCur",
                                    "ID01kotXPShCKX",
                                    "ID01kotXPShD1t",
                                    "ID01kotXPShDhZ"
                                ],
                                "taxRate":0,     //发票主体税率
                                "invoiceId":"rGN3lum_4o00hM:012002000104:14504550:4",  //发票ID
                                "taxAmount":{    //可抵扣税额
                                    "standard":57.02,
                                    "standardUnit":"元",
                                    "standardScale":2,
                                    "standardSymbol":"¥",
                                    "standardNumCode":"156",
                                    "standardStrCode":"CNY"
                                }
                            }
                        ]
                    },
                    "invoiceType":"VATOrdinaryInvoice",  //发票类型
                    "consumptionReasons":"天津滨海高新区华苑产业区榕苑路15号7-A-801 13920827382"  //消费事由
                },
                "specificationId":"ID_3wfDvD5OpOg:expense:82a063ed956f3aa97d8256a7fa8d248eccd4123c"  //费用类型模板ID
            }
        ],
        "payeeId":"ID_3ppxNub8qUM",   //收款账户ID
        "expenseDate":1666886400000,  //报销日期
        "submitterId":"rGN3lum_4o00hM:zAt3m1Aakfi5XM",  //提交人ID
        "specificationId":"ID_3oIl2GCevJg:24a99bbab546bbfcfee9e4d15b0bff40c19f5e76",  //单据模板ID
        "expenseDepartment":"rGN3lum_4o00hM" //报销部门ID
    }
}
```

| 字段名称 | 类型 | 是否必填 | 备注 |
| :--- | :--- | :--- | :--- |
| **invoiceForm**    | Object | 否 | 发票字段信息 |
| **&emsp; ∟ type** | String | 是 | `unify` : 统一开票 &emsp; `wait` : 待开发票<br/>`exist` : 已有发票 &emsp; `noExist` : 无发票<br/>`noWrite` : 无需填写(当费用类型发票字段设置的不可编辑时，默认为此项) |
| **&emsp; ∟ invoices** | Array | 是 | 发票关联信息 |
| **&emsp; &emsp; ∟ invoiceId** | String | 是 | 发票ID |
| **&emsp; &emsp; ∟ itemIds**   | Array | 否 | 发票明细ID |
| **&emsp; &emsp; ∟ taxRate**   | Integer | 是 | 发票主体税率<br/>**增值税发票** 无主体税率，有明细税率<br/>**非增值税发票** 有主体税率，无发票明细 |
| **&emsp; &emsp; ∟ taxAmount** | Object | 是 | 可抵扣税额（发票金额 * 税率） |
| **invoiceType**    | String | 否 | [发票类型](/docs/open-api/flows/forms-state#发票类型)，当费用明细上绑定多个发票，取最新的发票类型进行赋值 |


## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议                           |
| :--- | :--- | :--- |:-------------------------------|
| **400** | - | id为：[bwa3wajigF0WH0]的企业没有发票查验接口权限，请联系管理员开通 | 请联系管理员开通【**OCR智能识别**】和【**发票查验**】功能                       | 
| **400** | - | 识别失败 | 请确认 `fileUrl`（文件url）是否正确且在有效期内 | 
| **400** | - | 人员不存在 | 请确认 `staffId` 是否正确且激活          | 
| **412** | - | JSON请求参数不正确 | 请确认接口必填参数是否都已传值且准确             | 






