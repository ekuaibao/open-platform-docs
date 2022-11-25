# 更新单据
数据结构和创建单据接口一样，此接口后面的字段说明，请参考 [创建单据](/docs/open-api/flows/creat-and-save) 接口。

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2.2/flow/data/$`flowId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.11.0**](/docs/open-api/notice/update-log#1110)&emsp;-> 🐞 修复了 `editFlag` = `increment`（增量更新）时，`loanWrittenOff`（核销借款）参数不传，数据会被清空的BUG。<br/>
  [**1.11.0**](/docs/open-api/notice/update-log#1110)&emsp;-> 🚀 接口升级 `v2.2` 版本，修复了 **费用明细** 中，字段设置了 **必填条件配置** 时，校验不生效的BUG。<br/>
  [**1.10.0**](/docs/open-api/notice/update-log#1100)&emsp;-> 🐞 修复了业务对象 **赋值规则** 中配置了当前单据模板不存在的字段时更新单据报错的问题。<br/>
  [**1.9.0**](/docs/open-api/notice/update-log#190) &emsp; -> 🆕 新增了 `editFlag`（更新标志）参数，默认为 `cover`（全量覆盖）可配置为 `increment`（增量更新）。<br/>
  [**1.8.0**](/docs/open-api/notice/update-log#170) &emsp; -> 🐞 优化了审批日志描述：`editorId` 不传时，默认记录为 **OpenAPI** 修改了单据。<br/>
  &emsp;&emsp;&emsp;&emsp;-> 🐞 修复了多个字段配置多层级的【字段依赖性】后（例：A->B->C->D），**待审批、待支付** 状态更新单据时偶发报错的BUG。<br/>
  [**1.5.0**](/docs/open-api/notice/update-log#150) &emsp; -> 🐞 修复了 **待支付** 状态更新单据后，审批日志中无记录生成的BUG。<br/>
  [**1.4.0**](/docs/open-api/notice/update-log#140) &emsp; -> 🆕 新增了 `editorId`（单据修改人）参数，修复了部分情况下无法更新单据的BUG<br/>
  &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; ● `editorId` 传参时，审批日志记录为 **单据修改人** 修改了单据。<br/>
  &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; ● `editorId` 不传时，审批日志默认记录为 **节点审批人（会签节点任选其一）** 修改了单据。<br/>
  [**1.3.0**](/docs/open-api/notice/update-log#130) &emsp; -> 🚀 接口升级 `v2.1` 版本，新增了校验审批流节点是否配置【**允许审批人修改单据**】，支持【**`paying`（待支付）**】状态更新单据。<br/>
  &emsp; &emsp;&emsp;&emsp;-> 🐞 修复了单据模板中配置【**必须关联申请单**】，**关联申请** 字段设置【**允许关联多个申请事项**】后，提示 **“关联申请单不存在，请补充申请单ID！“** 的BUG。<br/>

  </div>
</details>

:::caution
- 本接口不支持在 **Ebot节点** 上使用，目前只支持修改 **`draft` 草稿、`approving` 审批中、`paying` 待支付** 状态且处于 **审批节点** 的单据，并且对应节点要勾选 **“允许审批人修改单据”** 配置。
- 使用 `editFlag` = `cover`（全量更新）时，单据中有核销借款数据，则 **`loanWrittenOff`（核销借款）参数必填，否则原数据会被清空**。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowId** | String  | 单据ID | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一) | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **editorId**    | String | 单据修改人 | 非必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |
| **editFlag**    | String | 更新标志   | 非必填 | cover | `cover` : 全量覆盖，**必填字段参数必传，不传的非必填字段清空对应字段值**<br/>`increment` : 增量更新，**目前只支持更新单据模板中配置的字段参数，不支持更新费用明细字段** |

## Body Parameters
不同表单类型参数各不相同，以下仅为示例，详见单据模板：

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**form**                                        | Object | 单据信息       | 必填  | - | 单据信息数据 |
|**&emsp; ∟ title**                             | String | 单据标题        | 必填 | - | 单据标题 |
|**&emsp; ∟ submitterId**                       | String | 单据提交人ID    | 必填  | - | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
|**&emsp; ∟ expenseDate**                       | String | 报销日期        | 必填  | - | 毫秒级时间戳 |
|**&emsp; ∟ expenseDepartment**                 | String | 报销部门ID      | 必填  | - | 通过 [获取部门列表](/docs/open-api/corporation/get-departments) 获取 |
|**&emsp; ∟ description**                       | String | 描述           | 非必填 | - | 描述 |
|**&emsp; ∟ payeeId**                           | String | 收款人信息ID    | 必填  | - | 通过 [获取收款账户](/docs/open-api/pay/get-payeeInfos) 获取 |
|**&emsp; ∟ specificationId**                   | String | 单据模板ID      | 必填  | - | 通过 [获取当前版本单据模板列表](/docs/open-api/forms/get-specifications-latest) 获取 **单据模板ID**<br/>然后通过 [根据模版ID获取模板信息](/docs/open-api/forms/get-template-byId) 获取 **更新单据的模板ID** |
|**&emsp; ∟ expenseLink**                       | String | 关联申请        | 非必填 | - | 需要关联的申请单ID |
|**&emsp; ∟ details**                           | Array  | 费用明细        | 必填  | - | 费用明细 |
|**&emsp; &emsp; ∟ feeTypeId**                  | String | 费用类型ID      | 必填  | - | 通过 [获取费用类型列表(包含停用)](/docs/open-api/feetype/get-feetypes-list) 获取 |
|**&emsp; &emsp; ∟ specificationId**            | String | 费用类型模板ID   | 必填  | - | 通过 [根据ID或CODE获取费用类型模板信息](/docs/open-api/feetype/get-feetypes) 获取 |
|**&emsp; &emsp; ∟ feeTypeForm**                | Object | 费用信息        | 必填  | - | 费用信息，具体传参请见获取费用模板接口返回值 |
|**&emsp; &emsp; &emsp; ∟ amount**              | Object | 报销金额        | 必填  | - | 报销金额 |
|**&emsp; &emsp; &emsp; ∟ feeDate**             | String | 费用日期        | 必填  | - | 毫秒级时间戳 |
|**&emsp; &emsp; &emsp; ∟ invoiceForm**         | Object | 发票相关信息     | 必填  | - | 根据单据模板决定 |
|**&emsp; &emsp; &emsp; ∟ type**                | String | 发票开票类型     | 必填  | - | 发票相关信息参数存在时有效<br/>`unify` : 统一开票 &emsp; `wait` : 待开发票<br/>`exist` : 已有发票 &emsp; `noExist` : 无发票<br/>`noWrite` : 无需填写(当费用类型发票字段设置的不可编辑时，默认为此项) |
|**&emsp; &emsp; &emsp; ∟ attachments**         | Array  | 发票附件        | 非必填 | - | **无法对发票附件进行验真查重或者OCR处理**<br/>需要先通过 [上传附件](/docs/open-api/attachment/attachment-upload) 上传数据，然后使用接口返回值为参数 |
|**&emsp; &emsp; &emsp; ∟ consumptionReasons**  | String | 消费事由        | 非必填 | - | 消费事由 |
|**&emsp; &emsp; &emsp; ∟ apportions**          | Array  | 分摊明细        | 非必填 | - | 根据单据模板决定 |
|**&emsp; &emsp; &emsp; &emsp; ∟ apportionForm**| Object |	分摊明细具体信息 | 非必填 | - | 分摊明细具体信息 |
|**params**                                      | Object | 单据其他信息     | 非必填 | - | 单据其他信息数据 |
|**&emsp; ∟ loanWrittenOff**                     | Array  | 核销借款信息     | 非必填 | - | 详细参数见下方示例<br/>**全量更新时该参数必填，否则原数据会被清空** |

:::tip
- 与系统上的保存单据功能一样，按格式组织数据，更新单据信息，更新成功后会返回该单据实例信息。
- 这边只列举常用参数解释，如果需要其他单据具体字段信息，可参考获取单据详情接口。
- 程序会校验请求参数及body数据格式是否正确：
    - 传参 **支持计算公式自动计算**，如果某个字段参数可以根据配置的计算公式在现有传参基础上计算出来结果参数，那么该字段可以 **不传值**；
    - 传参 **支持档案关系关联参数**，如果某个字段参数可以根据配置的档案关系在现有传参基础上查询出关联结果参数，那么该字段可以 **不传值**；
    - 报销单传参 **支持关联申请单自动赋值**，如果某个字段参数配置根据关联申请单自动赋值，那么该字段可以 **不传值**。
:::

## CURL

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cover" label="全量更新" default>

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.2/flow/data/$flowId?accessToken=ID_3DujXpr0kCg:xgJ3wajigF25H0&editorId=xgJ3wajigF25H0:ID_3zE5G_06Ww0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "form": {
        "title": "报销七月打车",
        "submitterId": "6Rk9l1WYNM0400:09496419662084319251",
        "expenseDate": 1562036472205,
        "expenseDepartment": "6Rk9l1WYNM0400:72157064",
        "description": "",
        "expenseLinks":[
            "ID_3twRddlb0$w"
        ] 
        "details": [
            {
                "feeTypeId": "6Rk9l1WYNM0400:taxi",                                 //费用类型ID
                "specificationId": "6Rk9l1WYNM0400:taxi:expense:3ff9bb327c504b4b",  //费用的报销或申请模板ID
                "feeTypeForm": {
                    "amount": {
                        "standard": "100",
                        "standardStrCode": "CNY",
                        "standardNumCode": "156",
                        "standardSymbol": "¥",
                        "standardUnit": "元",
                        "standardScale": 2
                    },
                    "feeDate": 1562036453462,
                    "invoiceForm": {
                        "type": "exist",
                        "attachments": [  //如果没有附件,传空[](附件先通过上传数据)
                            {
                                "key": "WechatIMG186-1562036466774-209.jpeg",
                                "fileName": "WechatIMG186.jpeg",
                                "fileId": "Hpc9mIvN7org00"
                            }
                        ]
                    },
                    "`apportions": [
                        {
                            "apportionForm": {
                                "apportionMoney": {
                                    "standard": "5000.00",
                                    "standardStrCode": "CNY",
                                    "standardNumCode": "156",
                                    "standardSymbol": "¥",
                                    "standardUnit": "元",
                                    "standardScale": 2
                                },
                                "apportionPercent": "50.00",
                                "expenseDepartment": "joQbMsJBw01c00:2J4bMvXHTY8U00",
                                "项目": "pIAbMPbmLw4s00"
                            },
                            "specificationId": "joQbMsJBw01c00:报销部门&项目分摊:3188695b6e1209edef0b4ef8d4f12e351442d066"
                        }
                    ],
                    "consumptionReasons": ""
                }
            }
        ],
        "payeeId":"tjc9pdqmsY5s00",
        "specificationId": "W709pbgZpoeY00:6d20266cf10554c266f76d6161eb5ceb5307a49d"
    }
    "params":{                                  //自定义字段
        "loanWrittenOff":[                      //表示核销借款
            {
                "loanInfoId":"KWYaYjurRo2000",  //借款包ID
                "title":"333",                  //借款单标题
                "repaymentDate":1591942260000,  //还款日期
                "fromApply":false,
                "flowId":"_LAaYjoV9sm000",      //借款单ID
                "hasImported":false,
                "amount":"3"                    //核销金额
            }
        ]
    }
}'
```

</TabItem>
<TabItem value="increment" label="增量更新">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.2/flow/data/$ID_3MlFO4F8adf?accessToken=ID_3M6negW0Tfv:xgJ3wajigF25H0&editFlag=increment&editorId=xgJ3wajigF25H0:dbc3wajigF1UH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "form": {
        "u_Z员工": "xgJ3wajigF25H0:dbc3wajigF1UH0",
        "u_Z开关": true,
        "u_Z金额": {
            "standard": "122.00",
            "standardUnit": "元",
            "standardScale": 2,
            "standardSymbol": "¥",
            "standardNumCode": "156",
            "standardStrCode": "CNY"
        }
    }
}'
```
</TabItem>
</Tabs>

:::tip
- 更新单据接口与创建单据接口参数格式一致，所有参数规则说明请参考创建单据接口里的说明
- 返回信息与 [创建单据](/docs/open-api/flows/creat-and-save) 接口一致
:::

## 成功响应
```json
{
    "value":"",
    "type":-1,
    "flow":{
        "version":1,
        "active":true,
        "createTime":1562862829309,
        "updateTime":1562862829309,
        "corporationId":"dNU9lELfXs0g00",
        "form":{
            "title":"报销七月打车",
            "submitterId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
            "expenseDate":1562036472205,
            "details":[
                {
                    "feeTypeId":"dNU9lELfXs0g00:office",
                    "specificationId":"dNU9lELfXs0g00:office:expense:2b43fb500eedb",
                    "feeTypeForm":{
                        "invoiceForm":{
                            "type":"noWrite",
                            "attachments":[

                            ]
                        },
                        "amount":{
                            "standard":"500.00",
                            "standardNumCode":"156",
                            "standardScale":2,
                            "standardStrCode":"CNY",
                            "standardSymbol":"¥",
                            "standardUnit":"元"
                        },
						"apportions": [
                            {
                                "apportionForm": {
                                    "apportionMoney": {
                                        "standard": "5000.00",
                                        "standardStrCode": "CNY",
                                        "standardNumCode": "156",
                                        "standardSymbol": "¥",
                                        "standardUnit": "元",
                                        "standardScale": 2
                                    },
                                    "apportionPercent": "50.00",
                                    "expenseDepartment": "joQbMsJBw01c00:2J4bMvXHTY8U00",
                                    "项目": "pIAbMPbmLw4s00"
                                },
                                "specificationId": "joQbMsJBw01c00:报销部门&项目分摊:3188695b6e1209edef0b4ef8d4f12e351442d066"
                            }
						],
                        "detailId":"swo9pY7cXo1g00"
                    }
                }
            ],
            "specificationId":"Ys49lCDmlgbc00:6ad521a290e74c85",
            "expenseLinks":[
                "ID_3twRddlb0$w"
            ],
            "writtenOffMoney":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "payMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "companyRealPay":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "expenseMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "code":"B19000017",
            "submitDate":1562862829291
        },
        "ownerId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
        "ownerDefaultDepartment":"dNU9lELfXs0g00",
        "state":"draft",
        "flowType":"freeflow",
        "formType":"expense",
        "logs":[],
        "actions":{
            "dNU9lELfXs0g00:97Y9lCBulQ4M00":[
                "freeflow.delete",
                "freeflow.edit",
                "freeflow.submit"
            ]
        },
        "id":"DQ09pY7cXo1400"
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 单据模板不存在 | `form.specificationId`（单据模板ID）错误，请确认单据模板ID是否为 **单据模板ID:小版本号** 的正确形式  | 
| **400** | - | 此节点未配置允许审批人修改单据选项，请检查审批流 | 请确认单据当前审批节点是否配置【允许审批人修改单据】  | 
| **403** | - | 您没有权限执行此操作 | 请确认 `editorId`（单据修改人）是否为单据审批人  | 
| **412** | - | 请填写 "****" 字段 | 请确认该字段是否必填，如果配置了字段依赖性或自动计算，确认按照逻辑可以计算得到值  | 


## 字段填写规则

### (1) 多收款人字段
单据的 `payPlan` 字段为 **多收款人** 模式的 **支付计划** 字段，传参示例如下：
- 更新单据中的参数与创建单据略有差异，`payPlan` 字段中需要传 `dataLinkId`（支付计划ID，即对应收款账户的那个费用明细实例ID）字段 <br/>
- 当多收款人为 **按明细/按收款信息汇总明细金额** 类型时，`E_system_支付计划_收款信息` 与对应的费用明细中的收款信息字段（`details` -> `feeTypeForm` -> `feeDetailPayeeId`）必须保持一致。<br/>


<Tabs>
<TabItem value="default" label="按明细" default>

```json
"multiplePayeesMode": true,                   //是否开启多收款人模式，开启后默认 <按明细> 类型
"payPlan": [                                  //支付计划，可传多条
    {
        "dataLinkId": "rJs3wxjZgeX5Tf",       //支付计划ID，即对应收款账户的那个费用明细实例ID
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
        "dataLinkId": "BKfxx4vIB8gLL2",
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
        "dataLinkId": "VOhqgoArhm0BwF",       //支付计划ID，即对应收款账户的那个费用明细实例ID
        "dataLinkForm": {                     //每条支付计划中的支付金额和收款信息，必须与费用明细中的一致。
            "E_system_支付计划_支付金额": {    //支付金额
                "standard": "11",
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
        "dataLinkId": "xfg4zLHetLByB3",
        "dataLinkForm": {
            "E_system_支付计划_支付金额": {
                "standard": "22",
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
        "dataLinkId": "soVJz1y5U6aGtk",       //支付计划ID，即对应收款账户的那个费用明细实例ID
        "dataLinkForm": {                     //每条支付计划中的支付金额和收款信息，必须与费用明细中的一致。
            "E_system_支付计划_支付金额": {    //支付金额
                "standard": "134",            //如果费用明细中存在多条收款人相同的明细，需要将对应明细的金额汇总传入。
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
        "dataLinkId": "XDNjomJtkZkh7q",
        "dataLinkForm": {
            "E_system_支付计划_支付金额": {
                "standard": "250",
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

### (2) 核销借款字段
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