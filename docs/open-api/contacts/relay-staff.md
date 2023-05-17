# 员工离职交接
同系统中的 **离职交接** 功能。即在员工离职前，为需要他审批的单据指定新的审批人。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/flows/relay"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.18.0**](/docs/open-api/notice/update-log#1180)&emsp;-> 🐞 接口新增了 `entityIds`（业务对象ID）、`ids`（业务对象实例ID）参数，可交接指定业务对象下全部实例或指定实例数据的参与人和负责人。 <br/>
  [**1.4.0**](/docs/open-api/notice/update-log#140) &emsp; -> 🚀 接口升级 `v2.1` 版本，新增 `type` 类型参数，支持 `id` 或 `code` 传参。<br/>
  [**0.7.156**](/docs/open-api/notice/update-log#07156) -> 🆕 新增了本接口。<br/>

  </div>
</details>

:::caution
- 本接口只是实现离职前的交接工作，交接后还是需要通过【**[停启用员工](/docs/open-api/contacts/active-staffs)**】接口移除员工。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』的 `code` 在系统上允许为空和重复** |

## Body Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffId**             | String  | 操作人ID或CODE，**与 `type` 保持一致** | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |
| **originApproverId**    | String  | 离职人ID或CODE，**与 `type` 保持一致** | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |
| **relayApproverId**     | String  | 交接人ID或CODE，**与 `type` 保持一致** | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |
| **unboundInvoice**      | Boolean | 将待离职员工草稿及被驳回的单据<br/>删除、关联的发票解除关联 | 必填 | - | `true` : 解除 &emsp; `false` : 不解除<br/>**正常情况必填为`true`** |
| **shareWaitingInvoice** | Boolean | 将待开发票共享给新交接人                              | 必填 | - | `true` : 共享 &emsp; `false` : 不共享<br/>**正常情况必填为`true`** |
| **dataLinkFlag**        | Boolean | 如果是业务对象参与人、负责人、管理员，<br/>交接到新交接人下面 | 必填 | - | `true` : 交接 &emsp; `false` : 不交接<br/>**正常情况必填为`true`** |
| **entityIds**           | Array   | 业务对象ID                                         | 非必填 | - | `type` = `id` 且 `dataLinkFlag` = `true` 时有效 |
| **ids**                 | Array   | 业务对象实例ID                                      | 非必填 | - | `type` = `id` 且 `dataLinkFlag` = `true` 时有效 |

:::tip
- `entityIds` 与 `ids` 只在 `type` = `id` 且 `dataLinkFlag` = `true` 时有效；
  - 只传 `entityIds` 时，更新 **所传业务对象下的所有实例数据** 的参与人和负责人；
  - 只传 `ids` 时，只更新 **所传实例数据** 的参与人和负责人；
  - `entityIds` 与 `ids` 同时传入时，只更新 **两者取交集范围内的实例数据** 的参与人和负责人；
  - 传入这两个参数时，业务对象 **管理员** 仍会变更为新交接人。

:::

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
    "unboundInvoice": true,       //将待离职员工草稿及被驳回的单据删除、关联的发票解除关联，TRUE表示交接，FALSE表示不交接  必填为true
    "shareWaitingInvoice": true,  //将待开发票共享给新交接人，TRUE表示交接，FALSE表示不交接  必填为true
    "dataLinkFlag": true          //如果是业务对象负责人或者管理员，交接到新交接人下面，TRUE表示交接，FALSE表示不交接  必填为true
    "entityIds":["e70e7649f5774bb6bc00","f90e85e70e019eb8e000"], //业务对象ID
    "ids":["ID01w4CAUYA8eX","ID01w4CAJc0x1d"]                    //业务对象实体id
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
    "unboundInvoice": true,       //将待离职员工草稿及被驳回的单据删除、关联的发票解除关联，TRUE表示交接，FALSE表示不交接  必填为true
    "shareWaitingInvoice": true,  //将待开发票共享给新交接人，TRUE表示交接，FALSE表示不交接  必填为true
    "dataLinkFlag": true          //如果是业务对象负责人或者管理员，交接到新交接人下面，TRUE表示交接，FALSE表示不交接  必填为true
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

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 员工不存在staffId | 请确认 `staffId`（操作人ID或CODE）是否正确 | 
| **400** | - | 交接员工不存在relayApproverId | 请确认 `relayApproverId`（交接人ID或CODE）是否正确 | 
| **400** | - | 离职员工不存在originApproverId | 请确认 `originApproverId`（离职人ID或CODE）是否正确 | 
| **403** | - | 您没有权限执行此操作,需要『系统管理』权限 | 请确认 `staffId`（操作人ID或CODE）是否为**系统管理员** | 
