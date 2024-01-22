# 单据相关字段类型

## 单据类型(单据详情中的 `formType` 字段)

| 名称                    | 类型 | 描述        |
|:----------------------| :--- |:----------|
| **expense**           | String  | 报销单       |
| **requisition**       | String  | 申请单       |
| **application**       | String  | 申请事项      |
| **loan**              | String  | 借款单       |
| **repayment**         | String  | 还款记录      |
| **payment**           | String  | 付款单       |
| **receipt**           | String  | 收款单       |
| **permit**            | String  | 授权单       |
| **custom**            | String  | 通用审批单     |
| **corpPayment**       | String  | 对公付款单     |
| **reimbursement**     | String  | 报账单、发票录入单 |

## 单据状态(单据详情中的 `state` 字段)

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| **draft**      | String  | 草稿 |
| **nullify**    | String  | 已作废**（不同于“已删除”）** |
| **pending**    | String  | 提交中（预算计算，临时状态）|
| **approving**  | String  | 审批中 |
| **rejected**   | String  | 已驳回 |
| **paying**     | String  | 待支付，用于开启了出纳支付节点且发生支付动作的单据<br/>没有发生支付时，单据状态直接变成已完成 |
| **`PROCESSING`** | String  | **支付中，非单据状态，属于业务状态** |
| **paid**       | String  | 已支付/审批完成，不是单据最终状态 |
| **archived**   | String  | 归档，单据最终状态<br/>审批完成的单据确认后表示归档（【我的单据】-【已完成单据】） |
| **sending**    | String  | 寄送中（单据到达“**寄送节点**”时处于此状态，需要开通【**异地单据寄收管理**】功能方可配置此节点类型）|
| **receiving**  | String  | 收单中（单据到达“**收单节点**”时处于此状态，需要开通【**异地单据寄收管理**】功能方可配置此节点类型）|

## 审批动作(审批日志中 `action` 字段)

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| **freeflow.submit**       | String  | 提交送审    |
| **freeflow.editApproving**| String  | 审批中修改  |
| **freeflow.delete**       | String  | 删除单据    |
| **freeflow.retract**      | String  | 撤回       |
| **freeflow.agree**        | String  | 同意       |
| **freeflow.reject**       | String  | 驳回       | 
| **freeflow.remind**       | String  | 打印提醒    |
| **freeflow.print**        | String  | 打印       | 
| **freeflow.addnode**      | String  | 转交       | 
| **freeflow.back**         | String  | 回退       | 
| **freeflow.comment**      | String  | 评论       | 
| **freeflow.modify**       | String  | 修改       |  
| **freeflow.activate**     | String  | 激活       | 
| **freeflow.receive**      | String  | 确认收单    | 
| **freeflow.nullify**      | String  | 作废       |
| **freeflow.pay**          | String  | 支付       |
| **freeflow.addExpress**   | String  | 添加寄送信息 |
| **freeflow.jumpExpress**  | String  | 跳过寄送    |
| **freeflow.shiftApprove** | String  | 转交审批    |
| **freeflow.addSignNode**  | String  | 加签审批    |
| **freeflow.select.approver**  | String  | 选择审批人 |
| **freeflow.alter**        | String  | 单据变更 |

## 枚举档案
### 航班舱型
| 名称 | 编码 |
| :--- | :--- |
| 经济舱 | ECONOMY |
| 商务舱 | BUSINESS |
| 头等舱 | FIRST |

### 火车席别
| 名称 | 编码 |
| :--- | :--- |
| 硬座 | YZ   |
| 软座 | RZ   |
| 硬卧 | YW   |
| 软卧 | RW   |
| 一等座  | YD   |
| 二等座  | ED   |
| 商务座  | SW   |
| 高级软卧 | GJRW |
| 高铁动卧 | DW   |
| 动卧    | DW2  |
| 新空调硬座 | XKTYZ   |
| 新空调硬卧 | XKTYW   |
| 新空调软卧 | XKTRW   |
| 软卧代软座 | RWDRZ   |

### 轮船舱型
| 名称 | 编码 |
| :--- | :--- |
| 一等舱 | YI  |
| 二等舱 | ER  |
| 三等舱 | SAN |
| 四等舱 | SI  |

### 发票类型
| 名称 | 编码 |
| :--- | :--- |
| 增值税专用发票 | VATSpecialInvoice |
| 增值税普通发票 | VATOrdinaryInvoice | 
| 机动车销售统一发票 | MotorInvoice |
| 货物运输业增值税专用发票 | GoodsTransportInvoice |
| 二手车销售统一发票 | SecondhandCarInvoice | 
| 增值税电子普通发票 | VATElectronicInvoice |
| 增值税普通发票（卷式）| VATVolumeTicket |
| 通行费发票 | TollInvoice |
| 区块链电子发票 | BlockchainElectronicInvoice |
| 火车票 | TrainInvoice |
| 出租车票 | TaxiInvoice |
| 定额发票 | QuotaInvoice |
| 客运汽车票 | PassengerCarInvoice |
| 航空运输电子客票行程单 | AircraftInvoice |
| 过路费发票 | RoadTollInvoice |
| 其他发票 | OtherInvoice |
| 消费小票 | ShoppingInvoice |
| 电子发票（普通发票）| FullDigitalNormal |
| 电子发票（增值税专用发票）| FullDigitalSpecial |
| 增值税电子专用发票 | VATElectronicSpecialInvoice | 

### 纳税人类型
| 名称 | 编码 |
| :--- | :--- |
| 一般纳税人 | GeneralTaxpayer |
| 小规模纳税人 | SmallScaleTaxpayer |






