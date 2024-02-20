# 创建业务对象台账

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/datalink/ledger/createLedger"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.1.0**](/updateLog/update-log#110) -> 🚀 接口升级 `v2.1` 版本，新增了 `sumFieldName`（统计字段）、`statisticsEntityId`（关联业务对象ID）、`ataLinkEntityId`（业务对象ID）校验。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **sumFieldName**     | String | 台账统计的字段 | 必填 | - |  |
| **sumFieldLabel**    | String | 台账名称 | 必填 | - |  |
| **sumFieldType**     | String | 统计字段的类型 | 必填 | - | `NUMBER`：数字 &emsp; `MONEY`：金额 &emsp; `LEDGER`：台账 |
| **unit**             | String | 统计字段的单位 | 非必填 | - |  |
| **statisticsEntityId** | String | 关联业务对象ID | 非必填 | - | `statisticsSource` = `DATA_LINK` 时，必填 |
| **dataLinkEntityId** | String | 业务对象ID | 必填 | - |  |
| **statisticsSource** | String | 统计来源 | 必填 | - | `MASTER`：单据<br/>`DETAILS`：费用明细<br/>`DATA_LINK`： 其他业务对象 |
| **billRefFieldName** | String | 关联业务对象字段 | 非必填 | - | 单据全局业务对象字段，`name` 对应值 |
| **filter** | Object | 过滤条件 | 非必填 | - |  |
| **&emsp; ∟ template** | String | 模板 | 必填 | - | `simple` |
| **&emsp; ∟ expressions** | Array | 过滤表达式 | 非必填 | - |  |
| **&emsp; &emsp; ∟ left** | String | 过滤表达式左侧 | 非必填 | - | `feeTypeId`：费用类型ID<br/>`specificationId`：单据模板ID<br/>`state`：单据状态<br/>`feeTypeForm.invoiceForm.type`：费用明细发票状态<br/>`xxx`：任意字段值（例如：title-标题） |
| **&emsp; &emsp; ∟ operator** | String | 过滤条件 | 非必填 | - | `in` ：指定单据状态或模板类型等<br/>`>、>=、<、<=、=、<>` ：金额、数字类型字段 |
| **&emsp; &emsp; ∟ right** | String | 过滤表达式右侧 | 非必填 | - | 见**CURL**示例 |
| **&emsp; &emsp; ∟ includeChildren** | String | 按left的类型 | 非必填 | - |  |
| **&emsp; &emsp; ∟ isSearchInMaster** | String | 按left的类型 | 非必填 | - |  |
| **&emsp; &emsp; ∟ fromWhere** | String | 过滤来源 | 非必填 | - | `MASTER`：单据<br/>`DETAILS`：费用明细<br/>`DATA_LINK`： 其他业务对象  |

## CURL
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="单据" label="单据" default>

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/datalink/ledger/createLedger?accessToken=ID_3xpRfa80Nmw:Urf3lsFgBp00gw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sumFieldName": "quantity",          //汇总字段标识
    "sumFieldLabel": "dengjaac_006",     //汇总字段名称
    "sumFieldType": "NUMBER",            //统计单据的哪个字段
    "unit": "个",
    "dataLinkEntityId": "e45b0cc602a30f865400",  //业务对象ID
    "statisticsSource": "MASTER",
    "billRefFieldName": "u_时间管理",     //自定义全局字段（业务对象字段）
    "filter": {
        "template": "simple",
        "expressions": [                 //限定统计的单据类型为：
            {
                "left": "specificationId",   //单据模板ID
                "operator": "in",
                "right": [
                    "3Zccokvg3I0000:personalCost"  
                ],
                "includeChildren": true,
                "fromWhere": "MASTER"        //单据：MASTER，明细：DETAILS，业务对象：DATA_LINK
            },
            {
                "left": "state",    //单据状态
                "operator": "in",
                "right": [
                    "waitingPay",   //待支付
                    "archived",     //已完成
                    "receiving",    //待收单
                    "paying",       //支付中
                    "rejected",     //驳回
                    "draft",        //待提交
                    "sending",      //待寄送
                    "pending",      //提交中（预算计算）
                    "approving"     //审批中
                ],
                "includeChildren": false,
                "fromWhere": "MASTER"  //单据：MASTER，明细：DETAILS，业务对象：DATA_LINK
            },
            {
                "left":"taxAmount",   //限定单据或费用明细字段值，该字段条件只有在 statisticsSource = MASTER/DETAILS 时生效
                "operator":">",       //判断条件（>、>=、<、<=、=、<>）
                "right":[
                    "1"
                ],
                "includeChildren":false,
                "fromWhere":"MASTER",  //单据：MASTER，明细：DETAILS，业务对象：DATA_LINK
                "type":"money",
                "isSearchInMaster":false
            }
        ]
    }
}'
```
</TabItem>
<TabItem value="费用明细" label="费用明细">

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/datalink/ledger/createLedger?accessToken=ID_3xpRfa80Nmw:Urf3lsFgBp00gw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sumFieldName": "quantity",
    "sumFieldLabel": "dengjaac_006",
    "sumFieldType": "NUMBER", 
    "unit": "个",
    "dataLinkEntityId": "e45b0cc602a30f865400",
    "statisticsSource": "DETAILS",
    "billRefFieldName": "u_时间管理",
    "filter": {
        "template": "simple",
        "expressions": [
            {
                "left": "specificationId",   //单据模板ID
                "operator": "in",
                "right": [
                    "3Zccokvg3I0000:personalCost"
                ],
                "includeChildren": true,
                "fromWhere": "DETAILS"        //单据：MASTER，明细：DETAILS，业务对象：DATA_LINK
            },
            {
                "left": "state",    //单据状态
                "operator": "in",
                "right": [
                    "waitingPay",   //待支付
                    "archived",     //已完成
                    "receiving",    //待收单
                    "paying",       //支付中
                    "rejected",     //驳回
                    "draft",        //待提交
                    "sending",      //待寄送
                    "pending",      //提交中（预算计算）
                    "approving"     //审批中
                ],
                "includeChildren": false,
                "fromWhere": "DETAILS"  //单据：MASTER，明细：DETAILS，业务对象：DATA_LINK
            },
            {
                "left": "feeTypeForm.invoiceForm.type",    //费用明细票据状态
                "operator": "in",
                "right": [
                    "exist",   //已有发票
                    "noExist", //无发票
                    "wait",    //待开发票
                    "unify",   //统一发票
                    "noWrite"  //无需填写
                ],
                "includeChildren": false,
                "fromWhere": "DETAILS"  //单据：MASTER，明细：DETAILS，业务对象：DATA_LINK
            },
            {
                "left":"taxAmount",   //限定单据或费用明细字段值，该字段条件只有在 statisticsSource = MASTER/DETAILS 时生效
                "operator":">",       //判断条件（>、>=、<、<=、=、<>）
                "right":[
                    "1"
                ],
                "includeChildren":false,
                "fromWhere":"DETAILS",  //单据：MASTER，明细：DETAILS，业务对象：DATA_LINK
                "type":"money",
                "isSearchInMaster":false
            }
        ]
    }
}'
```
</TabItem>
<TabItem value="业务对象" label="业务对象">

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/datalink/ledger/createLedger?accessToken=ID_3xpRfa80Nmw:Urf3lsFgBp00gw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sumFieldName": "E_25010caea1b9049e4400_合同金额",
    "sumFieldLabel": "dengjaac_006",    //台账名称
    "sumFieldType": "NUMBER",           //统计字段的类型（数字：NUMBER，金额：MONEY）
    "unit": "个",
    "dataLinkEntityId": "e45b0cc602a30f865400",
    "statisticsEntityId":"25010caea1b9049e4400",
    "statisticsSource": "DATA_LINK",    //单据：MASTER，明细：DETAILS，业务对象：DATA_LINK
    "billRefFieldName": "E_25010caea1b9049e4400_日期测试", //关联业务对象字段中包含该业务对象的字段
    "filter": {
        "template": "simple",
        "expressions": [
            {
                "left":"E_25010caea1b9049e4400_合同金额", //限定业务对象字段值需符合给定条件,该字段条件只有在 statisticsSource = DATA_LINK 时生效，业务对象中的字段类型为（Number、Money）
                "operator":"<",                          //判断条件（>、>=、<、<=、=、<>）
                "right":[
                   "1"
                ],
                "includeChildren":false,
                "fromWhere":"DATA_LINK",               //单据：MASTER，明细：DETAILS，业务对象：DATA_LINK
                "type":"number",
                "isSearchInMaster":false
            }
        ]
    }
}'
```
</TabItem>
</Tabs>


## 成功响应
```json
{
    "id": "ID_3iAfJsI0v28"  //创建的台账ID
}
```

