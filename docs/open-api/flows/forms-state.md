# 单据相关字段类型

#### 单据类型，对应单据详情中的formType字段

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **expense**     | String  | 报销单 |
| **requisition** | String  | 申请单 |
| **application** | String  | 申请事项 |
| **loan**        | String  | 借款单 |
| **repayment**   | String  | 还款记录 |
| **payment**     | String  | 付款单 |
| **receipt**     | String  | 收款单 |
| **permit**      | String  | 授权单 |
| **custom**      | String  | 通用审批单 |

#### 单据状态，对应单据详情中的State字段

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **draft** | String  | 草稿 |
| **pending** | String  | 提交中（预算计算）|
| **approving** | String  | 审批中 |
| **rejected** | String  | 已驳回 |
| **paying** | String  | 待支付，仅用于报销单和有借款的申请单。没有借款时，单据跳过待支付状态直接变成已完成。 |
| **PROCESSING** | String  | 支付中 |
| **paid** | String  | 已支付。审批完成，不是流程终结状态。 |
| **archived** | String  | 归档。完成的单据暂存用户首页列表显示。归档后放入"查看已完成"。 |
| **sending** | String  | 寄送中 |
| **receiving** | String  | 收单中 |

#### 发票类型，对应费用明细中的invoiceType字段:

| 字段名 | 类型 | 对应发票类型 |
| :--- | :--- | :--- |
| **VATSpecialInvoice** | String | 增值税专用发票 |
| **VATOrdinaryInvoice** | String | 增值税普通发票 |
| **VATElectronicInvoice** | String | 增值税电子普通发票  |
| **VATVolumeTicket** | String | 增值税普通发票（卷式） |
| **GoodsTransportInvoice** | String | 货物运输业增值税专用发票 |
| **MotorInvoice** | String | 机动车销售统一发票 |
| **SecondhandCarInvoice** | String | 二手车销售统一发票 |
| **BlockchainElectronicInvoice** | String | 区块链电子发票 |
| **AircraftInvoice** | String | 航空运输电子客票行程单 |
| **TollInvoice** | String | 通行费发票 |
| **RoadTollInvoice** | String | 过路费发票 |
| **PassengerCarInvoice** | String | 客运汽车票 |
| **TaxiInvoice** | String | 出租车票 |
| **TrainInvoice** | String | 火车票 |
| **MachinePrintInvoice** | String | 机打发票 |
| **QuotaInvoice** | String | 定额发票 |
| **OtherInvoice** | String | 其他发票 |
| **ShoppingInvoice** | String | 消费小票 |


<style>
    table {
		width: 100%; /*表格宽度*/
		border-collapse: collapse; /*使用单一线条的边框*/
		empty-cells: show; /*单元格无内容依旧绘制边框*/
		}
    /* 悬浮变色 */
	table tr:hover {
		background: #B2B2B2 !important;
		}
    /* 首列不换行 */
	table td:nth-child(1) {
		white-space: nowrap;
	}
	table td:nth-child(2) {
		white-space: nowrap;
	}
    /* 指定列宽度 */
	table th:nth-of-type(1) { 
		width: 20%;
		white-space: nowrap;
	}
    table th:nth-of-type(2) {
		width: 10%;
		white-space: nowrap;
	}
    table th:nth-of-type(3) {
		width: 70%;
		white-space: nowrap;
	}
</style>



