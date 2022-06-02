# 创建单据
根据获取的单据模板和费用模板，按格式要求组织参数后，调用此接口保存单据信息。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/flow/data"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.6.0  </b></a>&nbsp;&nbsp;&nbsp; -> 🆕 新增了支持<b>多收款人</b>类型参数。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.5.0  </b></a>&nbsp;&nbsp;&nbsp; -> 🐞 修复了单据配置 <b>必须关联申请单</b> 且 <b>关联申请</b> 字段已传值时，报 “<b>关联申请单不存在，请补充申请单ID！</b>” 的BUG。<br/>
                                                                                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> 🐞 修复了业务对象类型字段 <b>联动赋值</b> 规则不生效的BUG。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.3.0  </b></a>&nbsp;&nbsp;&nbsp; -> 🆕 新增了只允许用 <b>单据模板</b>、<b>费用类型模板</b> 最新的模板ID创建单据的校验。<br/>
                                                                                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> 🐞 修复了费用类型必填字段传 <b>""</b> 可通过校验的BUG，共16种数据类型。<br/>
                                                                                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> 🐞 修复了申请单开启借款金额字段并配置了 <b>系统计算</b> 时，计算结果小数位超过2位的BUG。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.2.0  </b></a>&nbsp;&nbsp;&nbsp; -> 🐞 修复了 <b>离职人员</b> 可以成功创建单据的问题。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.1.0  </b></a>&nbsp;&nbsp;&nbsp; -> 🐞 修复了部门类型字段设置取值规则为 <b>使用字段依赖性</b>，传值为档案关系中维护部门的子部门时，无法通过校验的BUG。<br/>
                                                                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> 🐞 修复了字段配置计算规则为 <b>从关联申请单中取值</b>，<b>关联申请</b> 字段为非必填但未传值时，无法通过校验的BUG。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.0.0  </b></a>&nbsp;&nbsp;&nbsp; -> 🚀 接口升级 <b>v2.1</b> 版本，修复了费用类型里的必填字段类型是 <b>自定义档案</b> 时，传 <b>""</b> 可通过校验的BUG，增加了非空校验。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>0.7.130</b></a> -> 🆕 新增了支持 <b>直接提审</b> 能力。<br/>
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token                 | 必填   | -     | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **isCommit**    | Boolean | 单据是否直接提审            | 非必填  | false | `true` : 单据直接提审 &emsp; `false` : 单据保存草稿  |
| **isUpdate**    | Boolean | 直接提审失败时是否保存单据草稿 | 非必填  | false | `isCommit` 参数为 `true` 时该参数有效<br/>`true` : 提审失败时保存草稿<br/>`false` : 提审失败时不保存草稿 |

##  Body Parameters
不同表单类型参数各不相同，以下仅为示例，详见单据模板：

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**form**                                        | Object | 单据信息         | 必填  | - | 单据信息数据 |
|**&emsp; ∟ title**                              | String | 单据标题        | 必填   | - | 单据标题 |
|**&emsp; ∟ submitterId**                        | String | 单据提交人ID    | 必填   | - | 通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)获取 |
|**&emsp; ∟ expenseDate**                        | String | 报销日期        | 非必填 | 当前日期 | 毫秒级时间戳 |
|**&emsp; ∟ expenseDepartment**                  | String | 报销部门ID      | 非必填 | 提交人的默认部门 | 通过[获取部门列表](/docs/open-api/corporation/get-departments)获取 |
|**&emsp; ∟ description**                        | String | 描述           | 非必填 | - | 描述 |
|**&emsp; ∟ payeeId**                            | String | 收款人信息ID    | 必填   | - | 通过[获取收款账号信息](/docs/open-api/pay/get-payeeInfos)获取 |
|**&emsp; ∟ specificationId**                    | String | 单据模板ID      | 必填  | - | 通过[根据模版ID获取模板信息](/docs/open-api/forms/get-template-byId)获取 |
|**&emsp; ∟ expenseLink**                        | String | 关联申请        | 非必填 | - | 需要关联的申请单ID |
|**&emsp; ∟ details**                            | Array  | 费用明细        | 必填  | - | 费用明细 |
|**&emsp; &emsp; ∟ feeTypeId**                   | String | 费用类型ID      | 必填  | - | 通过[获取费用类型列表(包含停用)](/docs/open-api/feetype/get-feetypes-list)获取 |
|**&emsp; &emsp; ∟ specificationId**             | String | 费用类型模板ID   | 必填  | - | 通过[根据id或code获取费用类型模板信息](/docs/open-api/feetype/get-feetypes)获取 |
|**&emsp; &emsp; ∟ feeTypeForm**                 | Object | 费用信息        | 必填  | - | 费用信息，具体传参请见获取费用模板接口返回值 |
|**&emsp; &emsp; &emsp; ∟ amount**               | Object | 报销金额        | 必填  | - | 报销金额 |
|**&emsp; &emsp; &emsp; ∟ feeDate**              | String | 费用日期        | 必填  | - | 毫秒级时间戳 |
|**&emsp; &emsp; &emsp; ∟ invoiceForm**          | Object | 发票相关信息     | 非必填 | - | 根据单据模板决定 |
|**&emsp; &emsp; &emsp; ∟ feeDetailPayeeId**     | String | 收款信息ID      | 非必填 | - | **多收款人模式下，<按明细><按收款信息汇总明细金额>类型时必填**<br/>通过[获取收款账号信息](/docs/open-api/pay/get-payeeInfos)获取 |
|**&emsp; &emsp; &emsp; &emsp; ∟ type**          | String | 发票开票类型     | 必填  | - | 发票相关信息参数存在时有效<br/>`unify` : 统一开票 &emsp; `wait` : 待开发票<br/>`exist` : 已有发票 &emsp; `noExist` : 无发票<br/>`noWrite` : 无需填写(当费用类型发票字段设置的不可编辑时，默认为此项) |
|**&emsp; &emsp; &emsp; &emsp; ∟ attachments**   | Array  | 发票附件        | 非必填 | - | **无法对发票附件进行验真查重或者OCR处理**<br/>需要先通过[上传附件](/docs/open-api/attachment/attachment-upload)上传数据，然后使用接口返回值为参数 |
|**&emsp; &emsp; &emsp; ∟ consumptionReasons**   | String | 消费事由        | 非必填 | - | 消费事由 |
|**&emsp; &emsp; &emsp; ∟ apportions**           | Array  | 分摊明细        | 非必填 | - | 根据单据模板决定 |
|**&emsp; &emsp; &emsp; &emsp; ∟ apportionForm** |	Object | 分摊明细具体信息 | 非必填 | - | 分摊明细具体信息 |
|**params**                                      | Object | 核销借款信息     | 非必填 | - | 详细参数见下方示例 |

:::tip
- 与系统上的保存单据功能一样，按格式组织数据，保存单据信息，保存成功后，会返回该单据实例信息。
- 程序会校验请求参数及body数据格式是否正确：
  - 传参**支持计算公式自动计算**，如果某个字段参数可以根据配置的计算公式在现有传参基础上计算出来结果参数，那么该字段可以**不传值**；
  - 传参**支持求和公式自动计算**，如果某个金额字段参数可以根据配置的求和公式在现有金额参数上计算结果，那么该字段可以**不传值**；
  - 传参**支持档案关系关联参数**，如果某个字段参数可以根据配置的档案关系在现有传参基础上查询出关联结果参数，那么该字段可以**不传值**；
  - 报销单传参**支持关联申请单自动赋值**，如果某个字段参数配置根据关联申请单自动赋值，那么该字段可以**不传值**。
:::
  
## CURL
报销单示例：
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/flow/data?accessToken=ID_3tLWHTx0B8g:PCx3rwm3aA00qM' \
--header 'Content-Type: application/json' \
--data-raw '{
  "form":{
        "title":"测试日常报销单4",                     //单据标题
        "details":[                                   //费用明细
            {
                "feeTypeId":"PCx3rwm3aA00qM:hotel",   //费用类型ID
                "feeTypeForm":{                       //费用信息
                    "amount":{                        //报销金额
                        "standard":"335",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "apportions":[                    //分摊明细具体信息
                        {
                            "apportionForm":{
                                "项目":"ID_3rw$2RXfelM",          //项目
                                "apportionId":"ID_3tLTuqz9b6M",  //分摊明细ID
                                "apportionMoney":{               //分摊金额
                                    "standard":"335",
                                    "standardUnit":"元",
                                    "standardScale":2,
                                    "standardSymbol":"¥",
                                    "standardNumCode":"156",
                                    "standardStrCode":"CNY"
                                },
                                "apportionPercent":"100.00",                         //分摊百分比
                                "expenseDepartment":"PCx3rwm3aA00qM:ID_3rw$2RXc5lM"  //分摊部门
                            },
                            "specificationId":"PCx3rwm3aA00qM:报销部门&项目分摊:0234d1a99e67306c72df937ba8d4f7abb60e2c20"   //分摊方式ID
                        }
                    ],
                    "invoiceForm":{          //发票附件
                        "type":"exist",      //已有发票
                        "attachments":[      //如果没有附件,不传此字段(附件先通过“上传附件”接口上传数据)
                            {
                                "key":"OffLine-1639378118926-931.jpg",
                                "fileId":"ID_3tLTuqz8f6M",
                                "fileName":"OffLine.jpg"
                            }
                        ]
                    },
                    "feeDatePeriod":{        //自定义配置的日期范围字段
                        "end":1639324800000,
                        "start":1639324800000
                    },
                    "consumptionReasons":"123"  //消费事由
                },
                "specificationId":"PCx3rwm3aA00qM:hotel:expense:f9c75771191e4003f850fd9bf07eedd977459cc2"   //费用类型模板ID
            }
        ],
        "payeeId":"ID_3s4PKc13U$g", //收款账户ID
        "u_Z员工":"PCx3rwm3aA00qM:SUv3rzY$rz02t0",  
        "u_Z城市":"[{\"key\":\"2123\",\"label\":\"广东省/广州市/广州市区\"}]",
        "u_Z小数":"345.354",
        "u_Z开关":true,
        "u_Z整数":"3323",
        "u_Z文本":"测试2",
        "u_Z日期":1639324800000,
        "u_Z档案":"ID_3tLfV301eDw",
        "u_Z部门":"PCx3rwm3aA00qM",
        "u_Z附件":[
            {
                "key":"s-search-1639378172493-850.png",
                "fileId":"ID_3tLTuqz8w6M",
                "fileName":"s-search.png"
            }
        ],
        "description":"123",            //描述
        "expenseDate":1639324800000,    //报销日期
        "expenseLink":"ID_3twRddlb0$w", //关联申请单ID，如单据无需关联申请单，可不在form对象中添加该字段
        "submitterId":"PCx3rwm3aA00qM:VWf3rvZHCb0ghM",  //提交人ID
        "specificationId":"ID_3rwlFm523WM:2f01211a2447e29378d078e1219a51899eff7d36",    //单据模板ID
        "u_Z业务对象":"ID_3tLfV302QDw",
        "u_Z枚举发票":"MotorInvoice",
        "u_Z枚举火车":"SW",
        "u_Z枚举航班":"BUSINESS",
        "u_Z枚举轮船":"ER",
        "u_Z档案多选":[
            "ad0dbcd46cf6d0104c00",
            "dc0dbcd46cf6d0184c00",
            "dc0dbcd46cf6d01c4c00"
        ],
        "u_Z业务对象2":[
            {
                "dataLinkId":null,
                "dataLinkForm":{
                    "E_cb0dbe8855a794ff5800_code":"ZGY003",
                    "E_cb0dbe8855a794ff5800_name":"ZGY自定义3",
                    "E_cb0dbe8855a794ff5800_所在部门":"PCx3rwm3aA00qM"
                },
                "dataLinkTemplateId":"ID_3rW8lqul4Rw"
            }
        ],
        "expenseDepartment":"PCx3rwm3aA00qM"   //报销部门
    },
     "params":{                                //当需要添加核销借款时添加该参数
        "loanWrittenOff":[                     //表示报销单中的核销借款字段
            {
              "loanInfoId":"ID_3sJUjsRJUrw",   //借款包ID
              "title":"测试",                  //借款单标题
              "repaymentDate":1641724500000,   //还款日期
              "fromApply":false,
              "flowId":"ID_3seTcgi0qrg",       //借款单ID
              "hasImported":false,
              "amount":"222"                   //核销金额
            }
        ]
    }
}'
```

## 成功响应
```json
{
    "value": "",
    "type": -1,
    "flow": {
        "pipeline": 1,
        "grayver": "9.8.0.0:A",
        "version": 1,
        "active": true,
        "createTime": 1639392015626,
        "updateTime": 1639392015626,
        "corporationId": "PCx3rwm3aA00qM",
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "form": {
            "title": "测试日常报销单5",
            "details": [
                {
                    "feeTypeId": "PCx3rwm3aA00qM:hotel",
                    "feeTypeForm": {
                        "amount": {
                            "standard": "335",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "detailId": "txL8K9Xdy1QxLo",
                        "apportions": [
                            {
                                "apportionForm": {
                                    "项目": "ID_3rw$2RXfelM",
                                    "apportionId": "ID_3tLTuqz9b6M",
                                    "apportionMoney": {
                                        "standard": "335",
                                        "standardUnit": "元",
                                        "standardScale": 2,
                                        "standardSymbol": "¥",
                                        "standardNumCode": "156",
                                        "standardStrCode": "CNY"
                                    },
                                    "apportionPercent": "100.00",
                                    "expenseDepartment": "PCx3rwm3aA00qM:ID_3rw$2RXc5lM"
                                },
                                "specificationId": "PCx3rwm3aA00qM:报销部门&项目分摊:0234d1a99e67306c72df937ba8d4f7abb60e2c20"
                            }
                        ],
                        "invoiceForm": {
                            "type": "exist",
                            "attachments": [
                                {
                                    "key": "OffLine-1639378118926-931.jpg",
                                    "fileId": "ID_3tLTuqz8f6M",
                                    "fileName": "OffLine.jpg"
                                }
                            ]
                        },
                        "feeDatePeriod": {
                            "end": 1639324800000,
                            "start": 1639324800000
                        },
                        "consumptionReasons": "123"
                    },
                    "specificationId": "PCx3rwm3aA00qM:hotel:expense:f9c75771191e4003f850fd9bf07eedd977459cc2"
                }
            ],
            "payeeId": "ID_3s4PKc13U$g",
            "payMoney": {
                "standard": "113.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "u_Z员工": "PCx3rwm3aA00qM:SUv3rzY$rz02t0",
            "u_Z城市": "[{\"key\":\"2123\",\"label\":\"广东省/广州市/广州市区\"}]",
            "u_Z小数": "345.354",
            "u_Z开关": true,
            "u_Z整数": "3323",
            "u_Z文本": "测试2",
            "u_Z日期": 1639324800000,
            "u_Z档案": "ID_3tLfV301eDw",
            "u_Z部门": "PCx3rwm3aA00qM",
            "u_Z附件": [
                {
                    "key": "s-search-1639378172493-850.png",
                    "fileId": "ID_3tLTuqz8w6M",
                    "fileName": "s-search.png"
                }
            ],
            "voucherNo": "",
            "printCount": "0",
            "printState": "noPrint",
            "submitDate": 1639392015024,
            "description": "123",
            "expenseDate": 1639324800000,
            "expenseLink": "ID_3twRddlb0$w",
            "submitterId": "PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
            "specificationId": "ID_3rwlFm523WM:2f01211a2447e29378d078e1219a51899eff7d36",
            "u_Z业务对象": "ID_3tLfV302QDw",
            "u_Z枚举发票": "MotorInvoice",
            "u_Z枚举火车": "SW",
            "u_Z枚举航班": "BUSINESS",
            "u_Z枚举轮船": "ER",
            "u_Z档案多选": [
                "ad0dbcd46cf6d0104c00",
                "dc0dbcd46cf6d0184c00",
                "dc0dbcd46cf6d01c4c00"
            ],
            "u_Z业务对象2": [
                {
                    "dataLinkId": null,
                    "dataLinkForm": {
                        "E_cb0dbe8855a794ff5800_code": "ZGY003",
                        "E_cb0dbe8855a794ff5800_name": "ZGY自定义3",
                        "E_cb0dbe8855a794ff5800_所在部门": "PCx3rwm3aA00qM"
                    },
                    "dataLinkTemplateId": "ID_3rW8lqul4Rw"
                }
            ],
            "expenseDepartment": "PCx3rwm3aA00qM",
            "voucherCreateTime": 0,
            "u_总价": {
                "standard": "0.00",
                "standardStrCode": "CNY",
                "standardNumCode": "156",
                "standardSymbol": "¥",
                "standardUnit": "元",
                "standardScale": "2"
            },
            "quantity": "0",
            "writtenOffMoney": {
                "standard": "222.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "companyRealPay": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "voucherStatus": "未生成",
            "expenseMoney": {
                "standard": "335.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "code": "B21000008"
        },
        "ownerId": "PCx3rwm3aA00qM:VWf3rvZHCb0ghM",
        "ownerDefaultDepartment": "PCx3rwm3aA00qM",
        "state": "draft",
        "flowType": "freeflow",
        "formType": "expense",
        "logs": [],
        "actions": {
            "PCx3rwm3aA00qM:VWf3rvZHCb0ghM": [
                "freeflow.delete",
                "freeflow.edit",
                "freeflow.submit"
            ]
        },
        "invoiceRemind": false,
        "id": "ID_3tMDtL05ClM"  //单据ID
    }
}
```

## 失败响应
`form.specificationId`（单据模板ID）错误，需要确认单据模板ID是否为 “**单据模板ID:小版本号**” 的正确形式：
```json
{
    "errorCode": 400,
    "errorMessage": "单据模板不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

单据模板ID不是最新的，不允许创建单据，报错如下（请每次修改单据模板后都获取最新的模板ID再创建单据操作）：
```json
{
    "errorCode": 400,
    "errorMessage": "openapi单据数据保存，单据模板已删除, specificationId:ID_3zE5G_006w0:2d608a9b26944850c092953a92a214a84aff1da3",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

`form.details.specificationId`（费用类型模板ID）错误，需要确认费用类型模板ID是否为 “**费用类型模板ID:单据类型:小版本号**” 的正确形式：
```json
{
    "errorCode": 400,
    "errorMessage": "openapi单据数据保存，明细模板不存在, specificationId:ID_3BJKZuv0pow",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

费用类型模板ID不是最新的，不允许创建单据，报错如下（请每次修改费用类型模板后都获取最新的模板ID再创建单据操作）：
```json
{
    "errorCode": 400,
    "errorMessage": "openapi单据数据保存，明细模板已删除, specificationId:ID_3BJKZuv0pow:requisition:3f8fa0ca71fc1f33aceae7ad7d4cfa2fa845ac2c",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

必填字段没有传值时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "'u_业务对象'字段[业务对象]字段为必填，值不能为空",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

`submitterId` 字段所对应员工离职时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "提交人参数不合法，请检查该员工是否已离职",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

**业务对象** 类型字段配置的赋值规则中所选择的单据字段，在当前模板中不存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "单据数据包含不支持的字段：u_Z文本。",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

## 字段填写规则

### (1) 费用类型字段(details)  
单据中的 `details`，表达的是【费用明细】，是一个数组，支持多条，参考如下：
```json
"details": [
    {
        "feeTypeId": "6Rk9l1WYNM0400:taxi",
        "specificationId": "6Rk9l1WYNM0400:taxi:expense:3ff9bb327c504b4b",
        "feeTypeForm": {
        //费用类型中的字段//
        ······
        }
    },
    {
        "feeTypeId": "6Rk9l1WYNM0400:taxi",
        "specificationId": "6Rk9l1WYNM0400:taxi:expense:3ff9bb327c504b4b",
        "feeTypeForm": {
        //费用类型中的字段//
            "amount": {
                "standard": "128",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "apportions": [
                {
                    "apportionForm": {
                        "apportionId": "ID_3ts1jxUqsJM",
                        "apportionMoney": {
                            "standard": "28",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "apportionPercent": "21.88",
                        "expenseDepartment": "PCx3rwm3aA00qM:ID_3rw$2RXc5lM"
                    },
                    "specificationId": "PCx3rwm3aA00qM:报销部门分摊:6f120f348ae05715d4c243bce40440426ebaee14"
                },
                {
                    "apportionForm": {
                        "apportionId": "ID_3ts1jxUqtJM",
                        "apportionMoney": {
                            "standard":" 100",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "apportionPercent": "78.12",
                        "expenseDepartment": "PCx3rwm3aA00qM:ID_3rLjlEB09rg"
                    },
                    "specificationId": "PCx3rwm3aA00qM:报销部门分摊:6f120f348ae05715d4c243bce40440426ebaee14"
                }
            ],
            "attachments": [],
            "invoiceForm": {
                "type": "noWrite"
            },
            "feeDatePeriod": {
                "end": 1638979200000,
                "start": 1638979200000
            },
            "consumptionReasons": "123"
        }
    }
]
```
- `feeTypeId` : 费用类型 ID，即[获取费用类型列表(包含停用)](/docs/open-api/feetype/get-feetypes-list)中返回的 id。
- `specificationId` : 启用版本的费用类型报销(或申请)模板 ID，即[根据id或code获取费用类型模板信息](/docs/open-api/feetype/get-feetypes)中返回的 `expenseSpecificationId` 或 `requisitionSpecificationId`。

### (2) 金额类型字段
字段的「type」为【money】的，为金额类型字段，金额字段换算为本位币(人民币)传入，如需其他币种请联系易快报技术客服。
除「standard」外，其他参数请与示例保持一致，参考示例如下：
```json
"amount": {
    "standard": "100",
    "standardStrCode": "CNY",
    "standardNumCode": "156",
    "standardSymbol": "¥",
    "standardUnit": "元",
    "standardScale": 2
}
```

外币金额参数示例(所有参数均必填，且务必保证正确)：
```json
"amount": {
    "foreign": "100",         //外币金额值
    "foreignNumCode": "840",  //外币数字编码
    "foreignScale": 2,        //外币小数位
    "foreignStrCode": "USD",  //外币文本编码
    "foreignSymbol": "$",     //外币符号
    "foreignUnit": "美元",     //外币单位
    "rate": "8.00",           //外币汇率（自定义）
    "standard": "800",        //本币（人民币）金额，必须等于 外币 * 汇率（自定义） ,否则提交单据的时候会报错
    "standardNumCode": "156", //本币数字编码
    "standardScale": 2,       //本币小数位
    "standardStrCode": "CNY", //本币文本编码
    "standardSymbol": "¥",    //本币符号
    "standardUnit": "元",     //本币单位
    "sysRate": "8.00"         //外币汇率（系统配置）
}
```

### (3) 日期类型字段
字段的「type」为【date】的，为日期类型字段，以 Unix timestamp 格式传入：
```json
"u_日期": 1639324800000
```

### (4) 日期范围类型字段
字段的「type」为【dateRange】的，为日期范围类型字段，以 Unix timestamp 对象格式传入：
```json
"u_日期范围": {
    "start": 1562036426574,
    "end": 1562036426574
}
```

### (5) 附件类型字段
字段的「type」为【select】且「valueFrom」为【attachment】的，为附件类型字段，附件可通过[上传附件](/docs/open-api/attachment/attachment-upload)接口，先上传文件到服务器后，然后在请求回应中拿到上传附件的文件key等参数：
```json
"attachments": [
    {
        "key": "openapi04d91616-c6d0-4e98-a784-0b95c0c03a93-发票2.pdf",
        "fileId": "ID_3tcjusD0qHg",
        "fileName": "发票2.pdf"
    }
]
```

### (6) 部门类型字段
字段的「type」为【select】且「valueFrom」为【organization.Department】的，为部门类型字段，需传入部门 ID，可通过[获取部门列表](/docs/open-api/corporation/get-departments)接口获取：
```json
"u_Z部门": "PCx3rwm3aA00qM"
```

### (7) 员工类型字段
字段的「type」为【select】且「valueFrom」为【organization.Staff】的，为员工类型字段，需传入员工的 ID ，可通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)接口获取：
```json
"u_Z员工": "PCx3rwm3aA00qM:SUv3rzY$rz02t0"
```

### (8) 城市类型字段
字段的「type」为【select】且「valueFrom」为【basedata.city】的，为城市类型字段：
```json
"u_测试城市": "[{\"key\":\"3\",\"label\":\"北京市/东城区\"}]"
```

### (9) 枚举类型字段
字段的「type」为【select】，且「valueFrom」为【basedata.Enum.CabinType】或【basedata.Enum.TrainSeatType】或【basedata.Enum.CruiseCabinType】的，为枚举类型字段：
```json
"u_测试枚举": "ECONOMY"  //经济舱
```

### (10) 自定义档案类型字段
字段的「type」为【select】且「valueFrom」为【basedata.Dimension.\*\*】的(\*\*为自定义档案名称)，为自定义档案类型字段，需传入档案值的 ID ，可通过[获取自定义档案项](/docs/open-api/dimensions/get-dimension-items)接口获取：
```json
"u_Z档案": "ID_3tLfV301eDw"
```

### (11) 业务对象类型字段
字段的「type」为【select】且「valueFrom」为【datalink.DataLinkEntity.\*\*\*】的(\*\*\*为业务对象 ID)，为业务对象类型字段，需传入业务对象实例的 ID ，可通过[获取业务对象实例列表](/docs/open-api/datalink/get-entity-info)接口获取：
```json
"u_Z业务对象": "ID_3tLfV302QDw"
```

### (12) 发票(发票形式)字段
字段的「type」为【invoice】时，为发票(发票形式)字段，发票字段以对象传入，内容包括发票形式、发票文件：
```json
"invoiceForm": {
    "type": "exist",  //已有发票
    "attachments": [  //如果没有附件,不传此字段(附件先通过“上传附件”接口上传数据)
        {
            "key": "openapi04d91616-c6d0-4e98-a784-0b95c0c03a93-发票2.pdf",
            "fileId": "ID_3tcjusD0qHg",
            "fileName": "发票2.pdf"
        }
    ]
}
```
- type可选值: 
  - `unify` : 统一开票
  - `wait` : 待开发票
  - `exist` : 已有发票
  - `noExist` : 无发票
  - `noWrite` : 无需填写(当费用类型 发票字段设置的不可编辑时，默认为此项)

【**统一开票**】类型示例：
```json
"invoiceForm": {
    "type": "unify",  //统一开票
    "invoices": [],
    "invoiceCorporationId": "H50cghSyeQxw00"  //开票方企业ID，暂无接口可获取
}
```

- `attachments` 为发票文件，发票附件可通过[上传附件](/docs/open-api/attachment/attachment-upload)接口，先上传文件到服务器后，然后在请求回应中拿到上传附件的文件key等参数。
- 当 `invoiceForm` 整个对象都不传入时，会赋默认值「noWrite」(无需填写)。

### (13) 收款信息字段
字段的「type」为【select】且「valueFrom」为【pay.PayeeInfo】的，为收款信息字段，需传入收款信息的 ID，可通过[获取收款账号信息](/docs/open-api/pay/get-payeeInfos)接口获取：
```json
"payeeId": "ID_3s4PKc13U$g"
```

### (14) 关联申请字段
字段的「type」为【select】且「valueFrom」为【requisition.RequisitionInfo】的，为关联申请字段，需传入申请事项(申请单)的ID：
```json
"expenseLink": "ID_3twRddlb0$w"
```

### (15) 核销借款字段
字段的 `params` 里的 `loanWrittenOff` 为核销借款字段:
```json
"params": {
    "loanWrittenOff": [                     //表示报销单中的核销借款字段
        {
            "loanInfoId": "ID_3sJUjsRJUrw", //借款包ID
            "title": "测试",                //借款单标题
            "repaymentDate": 1641724500000, //还款日期
            "fromApply": false,
            "flowId": "ID_3seTcgi0qrg",     //借款单ID
            "hasImported": false,
            "amount": "222"                 //核销金额
        }
    ]
}
```

### (16) 费用分摊字段
单据中的 `apportions`，表达的是【费用分摊】，是一个数组，支持多条，参考如下：
```json
"apportions": [
   {
       "apportionForm": {        //费用分摊明细
           "apportionMoney": {   //分摊金额
               "standard": "5000",
               "standardStrCode": "CNY",
               "standardNumCode": "156",
               "standardSymbol": "¥",
               "standardUnit": "元",
               "standardScale": 2
            },
           "apportionPercent": "50.00",  //分摊比例（0.01~100.00）
           "expenseDepartment": "joQbMsJBw01c00:2J4bMvXHTY8U00", //报销部门
           "项目": "PvobMPbmLw3I00" //分摊项目ID
       },
      "specificationId": "joQbMsJBw01c00:报销部门&项目分摊:3188695b6e1209edef0b4ef8d4f12e351442d066"  //费用分摊模板ID
   }
]
```

- apportionMoney：为金额类型字段，金额字段换算为本位币(人民币)传入，如需其他币种请联系易快报技术客服，除「standard」外，其他内容请与示例保持一致。
- 项目：是自定义档案--项目中的档案项ID，即[获取自定义档案项(不带可见范围)](/docs/open-api/dimensions/get-dimension-items)中返回的ID。
- specificationId：费用分摊模板 ID，即[根据企业ID获取分摊模版列表](/docs/open-api/forms/get-apportion-template-list)中返回的ID。

### (17) 多收款人字段
单据的 `payPlan` 字段为 **多收款人** 模式的 **支付计划** 字段，传参示例如下：
- 使用 **多收款人** 功能，需要在单据模板中勾选 “**允许多收款人**”。<br/>
- 当多收款人为 **按明细/按收款信息汇总明细金额** 类型时，费用明细中的收款信息字段（`details`->`feeTypeForm`->`feeDetailPayeeId`）**必填**。<br/>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="default" label="按明细" default>

```json
"multiplePayeesMode": true,                   //是否开启多收款人模式，开启后默认 <按明细> 类型
"payPlan": [                                  //支付计划，可传多条
    {
        "dataLinkForm": {                     //每条支付计划中的支付金额和收款信息，必须与费用明细中的一致。
            "E_system_支付计划_支付金额": {    //支付金额
                "standard": "13",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_支付计划_收款信息": "ID_3zDKigh39zw" //收款信息，与费用明细中的（收款信息字段"feeDetailPayeeId"）对应
        }
    },
    {
        "dataLinkForm": {
            "E_system_支付计划_支付金额": {
                "standard": "25",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_支付计划_收款信息": "ID_3zDKigh0Izw"
        }
    }
]
```
</TabItem>
<TabItem value="payPlanMode" label="按金额">

```json
"multiplePayeesMode": true,                   //是否开启多收款人模式
"payPlanMode": true,                          //是否选择 <按金额> 类型  true: 按金额   false: 按明细
"payPlan": [                                  //支付计划，可传多条
    {
        "dataLinkForm": {                     //每条支付计划中的支付金额和收款信息，必须与费用明细中的一致。
            "E_system_支付计划_支付金额": {    //支付金额
                "standard": "13",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_支付计划_收款信息": "ID_3zDKigh39zw"      //收款信息
        }
    },
    {
        "dataLinkForm": {
            "E_system_支付计划_支付金额": {
                "standard": "25",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_支付计划_收款信息": "ID_3zDKigh0Izw"
        }
    }
]
```
</TabItem>
<TabItem value="payeePayPlan" label="按收款信息汇总明细金额">

```json
"multiplePayeesMode": true,                   //是否开启多收款人模式
"payeePayPlan": true,                         //是否选择 <按收款信息汇总明细金额> 类型   true: 按收款信息汇总明细金额   false: 按明细
"payPlan": [                                  //支付计划，可传多条
    {
        "dataLinkForm": {                     //每条支付计划中的支付金额和收款信息，必须与费用明细中的一致。
            "E_system_支付计划_支付金额": {    //支付金额
                "standard": "13",             //如果费用明细中存在多条收款人相同的明细，需要将对应明细的金额汇总传入。
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_支付计划_收款信息": "ID_3zDKigh39zw" //收款信息，与费用明细中的（收款信息字段"feeDetailPayeeId"）对应
        }
    },
    {
        "dataLinkForm": {
            "E_system_支付计划_支付金额": {
                "standard": "25",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_支付计划_收款信息": "ID_3zDKigh0Izw"
        }
    }
]
```
</TabItem>
</Tabs>

