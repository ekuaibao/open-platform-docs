# 员工离职交接
同系统中的 **离职交接** 功能。即在员工离职前，为需要他审批的单据指定新的审批人。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/flows/relay"
/>

<details>
  <summary>v2.1版本特性</summary>
  <div>
    - 🆕 新增 “<b>type</b>” 类型参数，支持 ”<b>id</b>“ 或 ”<b>code</b>“ 传参。
  </div>
</details>

:::caution
- 本接口只是实现离职前的交接工作，交接后还是需要通过【**停启用员工**】接口移除员工。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』的 `code` 在系统上允许为空和重复** |

## Body Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffId**             | String  | 操作人ID或Code，**与 `type` 保持一致** | 必填 | - | 可通过[查询员工](/docs/open-api/corporation/get-staff-ids)接口获取 |
| **originApproverId**    | String  | 离职人ID或Code，**与 `type` 保持一致** | 必填 | - | 可通过[查询员工](/docs/open-api/corporation/get-staff-ids)接口获取 |
| **relayApproverId**     | String  | 交接人ID或Code，**与 `type` 保持一致** | 必填 | - | 可通过[查询员工](/docs/open-api/corporation/get-staff-ids)接口获取 |
| **unboundInvoice**      | Boolean | 将待离职员工草稿及被驳回的单据<br/>删除、关联的发票解除关联 | 必填 | - | `true` : 解除 &emsp; `false` : 不解除<br/>正常情况必填为`true` |
| **shareWaitingInvoice** | Boolean | 将待开发票共享给新交接人                              | 必填 | - | `true` : 共享 &emsp; `false` : 不共享<br/>正常情况必填为`true` |
| **dataLinkFlag**        | Boolean | 如果是业务对象负责人或者管理员，<br/>交接到新交接人下面    | 必填 | - | `true` : 交接 &emsp; `false` : 不交接<br/>正常情况必填为`true` |


## CURL

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/flows/relay?accessToken=ID_3Dlosos1_Gg:xgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data-raw '{
"staffId":"xgJ3wajigF25H0:dbc3wajigF1UH0",            //操作人
"originApproverId": "xgJ3wajigF25H0:kWA9VElpo00Y00",  //离职人
"relayApproverId": "xgJ3wajigF25H0:ID_3Be8RKT03bg",   //交接人
"unboundInvoice": true,       //将待离职员工草稿及被驳回的单据删除、关联的发票解除关联，TRUE表示交接,FALSE表示不交接  必填为true
"shareWaitingInvoice": true,  //将待开发票共享给新交接人，TRUE表示交接,FALSE表示不交接  必填为true
"dataLinkFlag": true          //如果是业务对象负责人或者管理员，交接到新交接人下面，TRUE表示交接,FALSE表示不交接  必填为true
}'
```
</TabItem>
<TabItem value="code" label="code">

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/flows/relay?accessToken=ID_3Dlosos1_Gg:xgJ3wajigF25H0&type=code' \
--header 'Content-Type: application/json' \
--data-raw '{
"staffId":"00001",                                    //操作人
"originApproverId": "00002",                          //离职人
"relayApproverId": "00005",                           //交接人
"unboundInvoice": true,       //将待离职员工草稿及被驳回的单据删除、关联的发票解除关联，TRUE表示交接,FALSE表示不交接  必填为true
"shareWaitingInvoice": true,  //将待开发票共享给新交接人，TRUE表示交接,FALSE表示不交接  必填为true
"dataLinkFlag": true          //如果是业务对象负责人或者管理员，交接到新交接人下面，TRUE表示交接,FALSE表示不交接  必填为true
}'
```
</TabItem>
</Tabs>

## 成功响应
```json
{
    "totalCount": 2,    //离职人待办数量
    "successCount": 2,  //交接成功的待办数量
    "failCount": 0,     //交接失败的待办数量
    "errors": {}
}
```

## 失败响应
请保证员工ID真实存在，否则会报如下错误：
```json
{
    "errorCode": 400,
    "errorMessage": "员工不存在staffId",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
`staffId(操作人)` 不是“系统管理”员的话，报如下错误：
```json
{
    "errorCode": 403,
    "errorMessage": "您没有权限执行此操作,需要『系统管理』权限",
    "errorDetails": null,
    "code": null,
    "data": null
}
```