# 常见问题总结

---
## 问题一
### 出站消息字段配置
- 目前不支持 **费用明细里面的字段配置**（包括**费用明细ID**），获取不到数据。
- 目前不支持除了 **人员多选** 之外的其他多选字段配置（**部门多选**、**自定义档案多选**等）。
  
---
## 问题二
### 出站消息参数介绍
| 参数名称 | 参数含义 |
| --- | --- |
| **action**           | 通知类型 |
| **actionName**       | 通知类型名称 |
| **userInfo**         | 接收人信息<br/>例如：单据被A审批后流转到B，当前审批人（currentApprovers）是A，消息的接收人(userInfo)是B |
| **flowId**           | 单据ID |
| **nodeId**           | 节点ID |
| **currentApprovers** | 上一节点审批人 |
| **alterFlag**        | 变更标识 |
| **receiptState**     | 回单状态 |
| **reviewStatus**     | 复核状态 |
| **voucherStatus**    | 凭证状态 |
| **state**            | 审批状态 |

---
