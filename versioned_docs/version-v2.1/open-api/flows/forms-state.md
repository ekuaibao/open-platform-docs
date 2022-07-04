# 单据相关字段类型

## 单据类型(单据详情中的 formType 字段)

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| **expense**     | String  | 报销单 |
| **requisition** | String  | 申请单 |
| **application** | String  | 申请事项 |
| **loan**        | String  | 借款单 |
| **repayment**   | String  | 还款记录 |
| **payment**     | String  | 付款单 |
| **receipt**     | String  | 收款单 |
| **permit**      | String  | 授权单 |
| **custom**      | String  | 通用审批单 |

## 单据状态(单据详情中的 state 字段)

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| **draft**      | String  | 草稿 |
| **pending**    | String  | 提交中（预算计算，临时状态）|
| **approving**  | String  | 审批中 |
| **rejected**   | String  | 已驳回 |
| **paying**     | String  | 待支付，仅用于报销单和有借款的申请单。<br/>没有借款时，单据跳过待支付状态直接变成已完成。 |
| **`PROCESSING`** | String  | **支付中，非单据状态，属于业务状态** |
| **paid**       | String  | 已支付/审批完成，不是单据最终状态。 |
| **archived**   | String  | 归档，单据最终状态。<br/>审批完成的单据确认后表示归档（【我的单据】-【已完成单据】）。 |
| **sending**    | String  | 寄送中（单据到达“**寄送节点**”时处于此状态，需要开通【**异地单据寄收管理**】功能方可配置此节点类型） |
| **receiving**  | String  | 收单中（单据到达“**收单节点**”时处于此状态，需要开通【**异地单据寄收管理**】功能方可配置此节点类型）|

## 发票类型(费用明细中的 invoiceType 字段)

| 字段名 | 类型 | 对应发票类型 |
| :--- | :--- | :--- |
| **VATSpecialInvoice**     | String | 增值税专用发票 |
| **VATOrdinaryInvoice**    | String | 增值税普通发票 |
| **VATElectronicInvoice**  | String | 增值税电子普通发票  |
| **VATVolumeTicket**       | String | 增值税普通发票（卷式） |
| **GoodsTransportInvoice** | String | 货物运输业增值税专用发票 |
| **MotorInvoice**          | String | 机动车销售统一发票 |
| **SecondhandCarInvoice**  | String | 二手车销售统一发票 |
| **BlockchainElectronicInvoice** | String | 区块链电子发票 |
| **AircraftInvoice**       | String | 航空运输电子客票行程单 |
| **TollInvoice**           | String | 通行费发票 |
| **RoadTollInvoice**       | String | 过路费发票 |
| **PassengerCarInvoice**   | String | 客运汽车票 |
| **TaxiInvoice**           | String | 出租车票 |
| **TrainInvoice**          | String | 火车票 |
| **MachinePrintInvoice**   | String | 机打发票 |
| **QuotaInvoice**          | String | 定额发票 |
| **OtherInvoice**          | String | 其他发票 |
| **ShoppingInvoice**       | String | 消费小票 |

## 审批动作（审批日志中 action 字段）

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| **freeflow.submit**       |String  | 提交送审    |
| **freeflow.editApproving**|String  | 审批中修改  |
| **freeflow.delete**       |String  | 删除单据    |
| **freeflow.retract**      |String  | 撤回       |
| **freeflow.agree**        |String  | 同意       |
| **freeflow.reject**       |String  | 驳回       | 
| **freeflow.remind**       |String  | 打印提醒    |
| **freeflow.print**        |String  | 打印       | 
| **freeflow.addnode**      |String  | 转交       | 
| **freeflow.back**         |String  | 回退       | 
| **freeflow.comment**      |String  | 评论       | 
| **freeflow.modify**       |String  | 修改       |  
| **freeflow.activate**     |String  | 激活       | 
| **freeflow.receive**      |String  | 确认收单    | 
| **freeflow.nullify**      |String  | 作废       |
| **freeflow.pay**          |String  | 支付       |
| **freeflow.addExpress**   |String  | 添加寄送信息 |
| **freeflow.jumpExpress**  |String  | 跳过寄送    |
| **freeflow.shiftApprove** |String  | 转交审批    |
| **freeflow.addSignNode**  |String  | 加签审批    |



