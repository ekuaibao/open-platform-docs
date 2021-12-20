# 单据状态详情

#### State Parameters:

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **draft** | String  |草稿      |
| **pending** | String  |提交中（预算计算）     |
| **approving** | String  |审批中    |
| **rejected** | String  |已驳回     |
| **paying** | String  |待支付，仅用于报销单和有借款的申请单。没有借款时，单据跳过待支付状态直接变成已完成。     |
| **PROCESSING** | String  |支付中  |
| **paid** | String  |已支付。审批完成，不是流程终结状态。     |
| **archived** | String  |归档。完成的单据暂存用户首页列表显示。归档后放入"查看已完成"。     |
| **sending** | String  |寄送中     |
| **receiving** | String  |收单中     |







