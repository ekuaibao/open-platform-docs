---
order: 6
title: 更新日志
toc: false
timeline: true
---

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---
## 1.7.0

`2022-06-21`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.7`

- 🆕 新增 [获取自建应用列表](/docs/open-api/datalink/get-platform) 接口
- 🆕 新增 [获取单据列表(新)](/docs/open-api/flows/get-forms-details-byStaff) 接口
  - 由原来的 [根据员工ID批量获取单据详情](/docs/open-api/flows/get-forms-details-byStaff) 接口更名并改造而来，不影响原来的使用，并扩充了新功能。
    - 新增了 **报销单、收款单** 类型返回数据中 `writtenOffRecords`（核销借款记录）参数。
    - 新增了 **起止时间** 过滤参数，以及按照 `createTime` 、`updateTime` 、`submitDate` 、`payDate` 参数排序。
    - 新增了 `specificationId` (**单据模板ID**)过滤参数。
    - 新增了 `active` (**查询条件：单据是否删除**)过滤参数。
    - 新增了支持返回 `PROCESSING` (**支付中**)状态的单据。
    - 取消了 `powercode` (**功能授权码**)参数。
- ❌ 废弃 [获取单据列表(包含已删除单据)(废弃)](/docs/open-api/flows/get-forms-sequences) 接口。
- ❌ 废弃 [获取指定状态单据列表(包含已删除单据)(废弃)](/docs/open-api/flows/get-forms-sequences-byState) 接口。
- ❌ 废弃 [根据单据ID集合获取单据列表(废弃)](/docs/open-api/flows/get-forms-sequences-ids) 接口。
- 🚀 新增 [根据单据ID查询所有待办已办事项](/docs/open-api/flows/get-forms-details-byId) 接口 `v1.1` 版本
  - **成功响应** 中新增了 `action`（已办动作）参数。
  - 更新了 `state`（任务状态）参数介绍。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口
  - 修复了 **多收款人（按明细）** 类型，多个费用明细参数一致时，创建的单据无法支付的BUG。
  - 修复了 `code` 传值可以创建重复单据编号的BUG。
  - 修复了 `detailId` 传值可以创建重复费用明细ID的BUG。
  - 优化了 **HTTP 400** 报错
    - 单据必填文本、日期类型字段不传时，提示字段必填。
    - 审批节点配置审批人为【**手动选择**】时，无法直接提审，并提示。
- 🐞 更新 [更新单据](/docs/open-api/flows/update-form) 接口
  - 修复了多个字段配置多层级的【字段依赖性】后（例：A->B->C->D），**待审批、待支付** 状态更新单据时偶发报错的BUG。
- 🐞 更新 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details)、[根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 接口
  - **报销单、收款单** 类型返回数据中新增了 `writtenOffRecords`（核销借款记录）参数。
- 🐞 更新 [根据员工ID获取待审批单据](/docs/open-api/flows/get-approve-new) 接口
  - **成功响应** 中新增了 `count` 待办总数，用于分页。
- 🐞 更新 [根据模版ID获取模板信息](/docs/open-api/forms/get-template-byId) 接口
  - 修复了部分模板ID因为版本过多导致接口返回空的BUG。
- 🐞 更新[获取发票主体信息](/docs/open-api/datalink-extend/get-entity-invoice)接口
  - 优化 **发票类别介绍** 注意事项。
- 🐞 更新[获取发票图片链接地址](/docs/open-api/datalink-extend/get-entity-invoice-img)接口
  - 优化接口注意事项。
- 🐞 更新 所有接口的【**更新日志**】
  - 跳转方式优化，从 **新标签页打开** 调整为 **本页面内跳转**，并可准确跳转到对应文档版本。

---
## 1.6.3

`2022-06-13`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.7`
- 🆕 新增 [批量新增收款账户](/docs/open-api/pay/batch-new-payeeInfo) 接口。
- 🚀 新增 [新增收款账户](/docs/open-api/pay/new-payeeInfo)、[更新收款账户](/docs/open-api/pay/edit-payeeInfo) 接口 `v2.1` 版本
  - 新增了 `sort`（账号类别）参数，额外支持新增/更新 **支付宝**、**海外账号**、**微信**、**其他** 4种类型收款账户。
- 🐞 更新 [新增预算包](/docs/open-api/budget/add-budget)、[批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node) 接口
  - 新增了 `overControllerRate`（超标比例）接口参数和描述。
- 🐞 更新 [附件下载](/docs/open-api/attachment/attachment-download) 接口
  - 优化了接口 **HTTP 500** 错误，输出报错信息。

---
## 1.6.2

`2022-06-06`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.7`
- 🐞 更新 [获取自建应用授权](/docs/open-api/getting-started/platform-auth) 接口
  - 更新了 `appKey`（接入账号）、`appSecurity`（接入密码）接口参数备注和 **失败响应** 示例。
- 🐞 更新 [获取企业对账单列表](/docs/open-api/mall/find-pageData-billId)、[获取企业对账单详情](/docs/open-api/mall/find-billDetail-byId) 接口
  - 更新了接口路径。
- 🐞 更新 [获取业务对象实例信息](/docs/next/open-api/datalink/get-entity-object) 接口
  - 更新了接口 `index`（查询页数）参数备注。  
- 🐞 更新 [更新单据](/docs/open-api/flows/update-form) 接口
  - 更新了接口 **失败响应** 示例。

---
## 1.6.1

`2022-06-02`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.7`
- 🆕 新增 [获取自建应用授权](/docs/open-api/getting-started/platform-auth) 接口。
- 🆕 新增【**商城接口**】模块
  - 🆕 新增 [获取企业对账单列表](/docs/open-api/mall/find-pageData-billId) 接口。
  - 🆕 新增 [获取企业对账单详情](/docs/open-api/mall/find-billDetail-byId) 接口。
  - 🆕 新增 [商城接口-常见问题总结](/docs/next/open-api/mall/question-answer#问题一) 文档
    - 新增了 **问题一：如何使用 获取自建应用授权 获取的accessToken？**
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save)、[更新单据](/docs/open-api/flows/update-form) 接口
  - 更新了 `specificationId`（单据模板ID）参数备注。
- 🐞 更新 [根据编码获取自定义档案项](/docs/open-api/dimensions/get-dimension-items-byCode) 接口
  - 更新了 `code`（自定义档案值的编码）参数注意事项，**不支持中文**。
- 🐞 更新 [开始使用-常见问题总结](/docs/open-api/getting-started/question-answer#问题四) 文档
  - 新增了 **问题四：获取自建应用授权 时如何获取接入账号和密码？**

---
## 1.6.0

`2022-05-31`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.6`

- 🆕 新增 [获取付款账户](/docs/open-api/pay/get-payerInfos-search) 接口。
- 🆕 新增 [新增付款账户](/docs/open-api/pay/new-payerInfo) 接口。
- 🆕 新增 [更新付款账户](/docs/open-api/pay/edit-payerInfo) 接口。
- 🆕 新增 [停用/启用付款账户](/docs/open-api/pay/disableOrEnable-payerInfo) 接口。
- 🆕 新增 [根据员工ID获取待审批单据(新)](/docs/open-api/flows/get-approve-new) 接口。
- ❌ 废弃 [根据员工ID获取待审批单据(废弃)](/docs/open-api/flows/get-approve) 接口。
- 🚀 新增 [回写单据凭证信息](/docs/open-api/flows/voucher-write-back) 接口 `v2.1` 版本
  - 新增了业务校验只允许 **`paid` 已支付/审批完成** 状态回写单据凭证。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口
  - 新增了支持 **多收款人** 类型参数。
- 🐞 更新 [获取单据PDF文件流](/docs/open-api/flows/get-flows-pdf) 接口
  - 优化了接口 **HTTP 500** 错误，获取的单据超过 **32M** 时输出报错信息。
- 🐞 更新 [根据单据ID查询所有待办已办事项](/docs/open-api/flows/get-forms-details-byId) 接口
  - 新增了 `state`（任务状态）参数介绍。
- 🐞 更新 [获取业务对象实例列表](/docs/open-api/datalink/get-entity-info) 接口
  - 新增了 **成功响应** 中 `ledgerAmount`（台账金额）、`ledgerAmountModel`（台账金额字段）参数备注。
- 🐞 更新 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details)、[根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 接口
  - 新增了 **成功响应** 中 `paymentChannel`（支付方式）、`paymentAccountId`（付款账户ID）参数备注。
- 🐞 更新 [新增部门](/docs/open-api/contacts/add-departments) 、[批量新增部门](/docs/open-api/contacts/batch-add-departments) 、[修改部门信息](/docs/open-api/contacts/update-departments) 、[获取部门列表(包含停用部门)](/docs/open-api/corporation/get-departments) 、[根据部门名称获取部门信息](/docs/open-api/contacts/get-department-byName) 、[根据部门路径获取部门信息](/docs/open-api/contacts/get-department-byPath) 、[根据部门ID或编码获取部门信息](/docs/open-api/contacts/get-department-byPath) 、[停启用部门](/docs/open-api/contacts/active-departments) 接口
  - 新增了 **成功响应** 中 `order`（排序序号）字段。
- 🐞 更新 [配置出站消息](/docs/open-api/outbound-message/outbound-new) 文档
  - 新增了【**单据删除**】审批事件。
- 🐞 优化【**企业收付款账户**】模块
  - 更新了模块下 **全部** 接口文档的描述及排版。
- 🐞 优化【**单据**】模块
  - 更新了模块下 **部分** 接口注意事项的描述。

---
## 1.5.1

`2022-05-19`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.6`

- 🆕 新增 [获取随手记数据](/docs/open-api/flows/get-notes) 接口。
- 🆕 新增 [获取企业微信OpenUserId](/docs/open-api/tools/staffs-getOpenUserId) 接口。
- 🐞 更新 [修改员工信息](/docs/open-api/contacts/update-staffs) 接口
  - 更新了接口参数描述。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口
  - 新增了 **失败响应** 示例。
- 🐞 更新 [获取行程管理业务对象列表](/docs/open-api/datalink/get-tripManager-order)、[获取行程管理业务对象实例](/docs/open-api/datalink/get-tripManager-data) 接口
  - 更新了接口注意事项。
- 🐞 更新 [单据-常见问题总结](/docs/open-api/flows/question-answer#问题一) 文档
  - 更新了问题 “**如何获取单据ID？**” 获取方式介绍。
- 🐞 更新 [自建应用-常见问题总结](/docs/open-api/datalink/question-answer) 文档
  - 更新了所有路径描述和图片，与系统界面保持一致。
- 🐞 更新 [配置出站消息](/docs/open-api/outbound-message/outbound-new) 文档
  - 新增了 **消息中心** 类型介绍。
  - 更新了 **审批事件** 类型配置介绍 “**每个审批事件可被不同出站消息重复配置**”。
- 🐞 更新 **文档中部分图片**，与系统界面保持一致。

---
## 1.5.0

`2022-05-12`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.5-2`

- 🆕 【**所有接口**】增加了 **更新日志** 描述，方便查看接口上线版本和更新内容。
- 🚀 新增 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details)、[根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 接口 `v1.1` 版本 
  - 报销单类型返回数据中新增了费用明细关联的申请单ID（`expenseLink`）参数。
- 🚀 新增 [新增预算包](/docs/open-api/budget/add-budget)、[批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node) 接口 `v2.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🚀 新增 [更新自定义档案项](/docs/open-api/dimensions/update-dimension-items) 接口 `v1.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🐞 更新 [批量新增自定义档案项](/docs/open-api/dimensions/batch-creat-dimension-items) 接口 `v1.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🐞 更新 [新增或更新业务对象数据](/docs/open-api/datalink/update-entity-data) 接口
  - 新增了 **金额** 类型字段支持多币种，使用此功能需要开通【**币种设置**】功能。
- 🐞 更新 [访问临时授权](/docs/open-api/getting-started/temp-auth) 接口
  - 修复了被委托人审批会签节点的单据（ `pageType` = `form` ）时，无审批按钮的BUG。
- 🐞 更新 [修改员工信息](/docs/open-api/contacts/update-staffs) 接口
  - 修复了登录邮箱中包含大写字母，更新后无法登录的BUG。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口 `v2.1` 版本
  - 修复了单据配置 **必须关联申请单** 且 **关联申请** 字段已传值时，报 “**关联申请单不存在，请补充申请单ID！**” 的BUG。
  - 修复了业务对象类型字段 **联动赋值** 规则不生效的BUG。
- 🐞 更新 [更新单据](/docs/open-api/flows/update-form) 接口 `v2.1` 版本
  - 修复了 **待支付** 状态更新单据后，审批日志中无记录生成的BUG。
- 🐞 更新 [企业通讯录-常见问题总结](/docs/open-api/corporation/question-answer#问题三) 文档
  - 新增了问题总结“**如何在系统上获取角色的CODE？**”。

---
## 1.4.1

`2022-04-28`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.5-2`

- 🐞 更新 [通讯录同步-常见问题总结](/docs/open-api/contacts/question-answer) 文档
  - 新增了问题总结**“调用【修改员工信息】时，接口响应成功，但员工信息未修改成功？”**。
- 🐞 更新 [新增部门](/docs/open-api/contacts/add-departments)、[批量新增部门](/docs/open-api/contacts/batch-add-departments)、[新增员工](/docs/open-api/contacts/add-staffs)、[批量新增员工](/docs/open-api/contacts/batch-add-staffs) 接口
  - 更新了接口 **失败响应** 示例。
- 🐞 更新 [获取统一开票方](/docs/open-api/datalink-extend/get-entity-unify-corporation)、[获取统一开票信息](/docs/open-api/datalink-extend/get-entity-unify-invoice) 接口
  - 更新了接口描述。
- 🐞 更新 [外部服务回调审批接口](/docs/open-api/outbound-message/outbound-callback) 接口
  - 新增了 **失败响应** 报错场景注意事项。
- 🐞 更新 [根据单据ID集合获取单据列表](/docs/open-api/flows/get-forms-sequences-ids)、[根据员工ID获取待审批单据](/docs/open-api/flows/get-approve) 接口
  - 优化了接口 **HTTP 500** 错误，更新接口 **失败响应** 示例。
- 🐞 更新【**预算**】模块
  - 优化了模块下全部接口 **CURL** 传参示例，增加参数注释。
  - [批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node) 接口，按情景拆分 **CURL** 传参示例。

---
## 1.4.0

`2022-04-15`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.5-1`

- 🚀 新增 [修改员工自定义字段(所有平台)](/docs/open-api/contacts/update-staffs-customFields)、[停启用员工](/docs/open-api/contacts/active-staffs) 接口 `v1.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🚀 新增 [员工离职交接](/docs/open-api/contacts/relay-staff) 接口 `v2.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🐞 更新 [修改员工信息](/docs/open-api/contacts/update-staffs) 接口 `v1.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🐞 更新 [获取企业下档案项数据](/docs/open-api/recordLink/query-all-relation-items) 接口 `v2.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🐞 更新 [新增某档案关系下的档案项数据](/docs/open-api/recordLink/creat-dimension-relation-items)、[删除某档案关系下的档案项数据](/docs/open-api/recordLink/delete-dimension-relation-items)、[更新某档案关系下的档案项数据](/docs/open-api/recordLink/update-dimension-relation-items)、[编辑某档案关系下的档案项数据](/docs/open-api/recordLink/edit-dimension-relation-items) 接口 `v2.1` 版本
  - 更新了校验逻辑，档案关系类型共六种，全都做参数校验，若传入已删除参数则报错：
    - **未激活/已移除** 员工，不能进行任何档案关系数据操作。
    - body参数里传多个值时，校验参数任意一个不存在则报错。
  - 无效果的增删改返回信息提示。
- 🐞 更新 [根据单据ID集合获取单据列表](/docs/open-api/flows/get-forms-sequences-ids) 接口 
  - 优化了单据费用明细和发票过多导致的 **HTTP 504** 超时问题。
- 🐞 更新 [新增或更新业务对象数据](/docs/open-api/datalink/update-entity-data) 接口
  - 新增了 `editFlag`（更新标志）参数，默认为 `cover`（全量覆盖）可配置为 `increment`（增量更新）。
  - 新增了 **业务对象（多选）** 传参示例。
- 🐞 更新 [更新单据](/docs/open-api/flows/update-form) 接口 `v2.1` 版本
  - 新增了 `editorId`（单据修改人）参数，修复部分情况下无法更新单据的BUG。
    - `editorId` 传参时，审批日志记录为 **单据修改人** 修改了单据。
    - `editorId` 不传时，审批日志默认记录为 **节点审批人（会签节点任选其一）** 修改了单据。
- 🐞 更新 [批量新建自定义档案项](/docs/open-api/dimensions/batch-creat-dimension-items) 接口
  - 新增了系统预置档案额外参数描述。
- 🐞 更新 [新增员工](/docs/open-api/contacts/add-staffs)、[批量新增员工](/docs/open-api/contacts/batch-add-staffs) 接口
  - 更新了接口注意事项。
- 🐞 更新 [获取发票主体信息](/docs/open-api/datalink-extend/get-entity-invoice) 接口
  - 更新了 `objectId`（发票类型）参数描述，增加 **机打发票**、**消费小票** 类型。
---

## 1.3.1

`2022-03-31`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.4`

- 🐞 更新 [开始使用通讯录同步](/docs/open-api/contacts/info) 文档
  - 更新了开通【**通讯录同步**】功能描述。
- 🐞 更新 [开始使用-常见问题总结](/docs/open-api/getting-started/question-answer#问题三) 文档
  - 更新了【**重定向URL**】功能描述。
- 🐞 更新 [获取部门列表(包含停用部门)](/docs/open-api/corporation/get-departments)、[获取员工列表](/docs/open-api/corporation/get-all-staffs)、[获取已激活员工列表](/docs/open-api/corporation/get-all-auth-staffs) 接口
  - 更新了接口 **失败响应** 示例。
- 🐞 优化【**委托授权**】模块
  - 更新了模块下全部接口名称。

---
## 1.3.0

`2022-03-24`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.4`

- 🆕 新增 [新增角色](/docs/open-api/corporation/create-roledefs)、[更新角色](/docs/open-api/corporation/update-roledefs) 接口。
- 🚀 新增 [获取企业下档案关系列表](/docs/open-api/recordLink/get-dimension-relation)、[获取企业下档案项数据](/docs/open-api/recordLink/query-all-relation-items) 接口 `v2.1` 版本
  - 优化了报错输出。
- 🚀 新增 [新增某档案关系下的档案项数据](/docs/open-api/recordLink/creat-dimension-relation-items)、[删除某档案关系下的档案项数据](/docs/open-api/recordLink/delete-dimension-relation-items)、[更新某档案关系下的档案项数据](/docs/open-api/recordLink/update-dimension-relation-items)、[编辑某档案关系下的档案项数据](/docs/open-api/recordLink/edit-dimension-relation-items) 接口 `v2.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
  - **更新某档案关系下的档案项数据** 接口，更新 `editFlag`（更新标志）默认值，从 `cover` 改为 `increment`。
- 🚀 新增 [更新单据](/docs/open-api/flows/update-form) 接口 `v2.1` 版本
  - 新增了校验审批流节点是否配置【**允许审批人修改单据**】，支持【**`paying`（待支付）**】状态更新单据。
  - 修复了单据模板中配置【**必须关联申请单**】，**关联申请** 字段设置【**允许关联多个申请事项**】后，提示 **"关联申请单不存在，请补充申请单ID！"** 的BUG。
- 🆕 新增 [审批动作（审批日志中action字段）](/docs/open-api/flows/forms-state#审批动作审批日志中-action-字段)参数列表。
- 🐞 更新 [查询角色下员工信息](/docs/open-api/corporation/get-roles)、[更新角色下员工信息](/docs/open-api/corporation/update-roles) 接口
  - `staffBy`（员工参数格式）新增了支持 `code`、`cellphone`、`email` 3种参数类型。
  - **更新角色下员工信息** 接口兼容老版本：更新「**普通角色**」时 `path` 参数非必填。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口 `v2.1` 版本
  - 新增了只允许用 **单据模板**、**费用类型模板** 最新的模板ID创建单据的校验。
  - 修复了费用类型必填字段传 `""` 可通过校验的BUG，共16种数据类型。
  - 修复了申请单开启借款金额字段并配置了 **系统计算** 时，计算结果小数位超过2位的BUG。
  
---
## 1.2.2

`2022-03-14`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.3`

- 🆕 新增 [获取所有开户网点信息](/docs/open-api/pay/get-all-branch) 接口。
- 🐞 更新 [新增收款账户](/docs/open-api/pay/new-payeeInfo)、[更新收款账户](/docs/open-api/pay/edit-payeeInfo) 接口
  - 更新了 `branch`（开户网点）参数描述，支持通过系统配置设置 “**非必填**”。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口
  - 更新了参数描述 **“无法对发票附件进行验真查重或者OCR处理”**。
- 🐞 更新 [获取预算节点和子节点详细信息](/docs/open-api/budget/get-BudgetsDetails-ByPage) 接口
  - 更新了接口描述。
- 🐞 更新 [更新角色下员工信息](/docs/open-api/corporation/update-roles) 接口
  - 更新了接口参数描述。
- 🐞 更新 [批量新建自定义档案项](/docs/open-api/dimensions/batch-creat-dimension-items) 接口
  - 更新了接口失败响应信息。
- 🐞 更新 [新增或更新业务对象数据](/docs/open-api/datalink/update-entity-data) 接口
  - 更新了接口注意事项。

---
## 1.2.1

`2022-03-08`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.3`

- 🚀 新增 [修改员工信息](/docs/open-api/contacts/update-staffs) 接口 `v1.1` 版本
  - 员工自定义字段值的保存做增量更新（`v1` 版本为全量更新，不传的字段置空处理），并添加员工自定义字段真实性校验。
- 🐞 更新 【**员工**】 增删改查接口响应字段注释。
- 🐞 更新 [更新单据](/docs/open-api/flows/update-form)、[单据审批](/docs/open-api/flows/flow-approval) 接口
  - 更新了接口注意事项。  
- 🐞 更新 [新增收款账户](/docs/open-api/pay/new-payeeInfo)、[更新收款账户](/docs/open-api/pay/edit-payeeInfo) 接口
  - 更新了参数描述，与系统界面上的字段保持一致。

---  
## 1.2.0

`2022-03-08`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.3`

- 🆕 新增 [根据员工ID批量获取单据详情](/docs/open-api/flows/get-forms-details-byStaff) 接口。
- 🆕 新增 [获取申请事项](/docs/open-api/flows/get-requisition-all) 接口。
- 🆕 新增 [根据单据ID查询所有待办已办事项](/docs/open-api/flows/get-forms-details-byId) 接口。
- 🚀 新增 [更新自建应用](/docs/open-api/datalink/edit-platform) 接口 `v2.1` 版本
  - 新增了支持更新应用名称，对 `adminIds`（管理员ID）做参数真实性校验。
- 🚀 新增 [获取单据审批状态](/docs/open-api/flows/get-approve-state) 接口 `v1.1` 版本
  - 新增了能获取到已删除的单据，并且显示 “**已删除**” 状态。
- 🚀 新增 [删除城市组详情](/docs/open-api/city/delete-city-group-details) 接口 `v1.1` 版本
  - 新增了 `staffIds`（员工ID）与 `roleIds`（角色ID）列表不能同时为空的校验。
- 🚀 新增 [查询员工待办数量](/docs/open-api/corporation/get-staff-backLog) 接口 `v1.1` 版本
  - 新增了响应数据中返回详细待办类型及数量。
- 🚀 新增 [新增某档案关系下的档案项数据](/docs/open-api/recordLink/creat-dimension-relation-items) 接口 `v2.1` 版本
  - 修复了传其他类型自定义档案项ID（非档案关系配置的类型）可以创建成功数据的问题。
- 🐞 更新 [获取单据附件](/docs/open-api/flows/get-flows-attachment) 接口
  - 修复了无法把费用明细里的系统无法识别的充当发票的图片当附件处理返回的问题。
- 🐞 更新 [更新角色下员工信息](/docs/open-api/corporation/update-roles) 接口
  - 修复了接口 **HTTP 500** 报错问题，增加了 `path` 、`staffs` 不允许传 `null` 的校验。
- 🐞 更新 [获取收款账户](/docs/open-api/pay/get-payeeInfos) 接口
  - 新增了 `active`（账户是否启用）参数描述，并且响应数据中增加了 `active` 参数。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口 `v2.1` 版本
  - 修复了 **离职人员** 可以成功创建单据的问题。  

---
## 1.1.1

`2022-02-18`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.2`

- 🐞 更新 [批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node) 接口
  - 优化了接口校验逻辑，报错时会准确描述具体出错的节点和参数。
- 🐞 更新 [更新角色下员工信息](/docs/open-api/corporation/update-roles) 接口
  - 新增了 `pathType` 参数支持 `id` 类型。

---
## 1.1.0

`2022-02-11`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.2`

- 🚀 新增 [新建自定义档案项](/docs/open-api/dimensions/creat-dimension-items) 、[批量新建自定义档案项](/docs/open-api/dimensions/batch-creat-dimension-items) 接口 `v1.1` 版本
  - 新增了当 `fullVisible` = `false` 时，对 `staffs` 、`roles` 、`departments` 三个参数的必填及有效性校验。
- 🐞 更新 [获取员工列表](/docs/open-api/corporation/get-all-staffs)、[获取部门列表(包含停用部门)](/docs/open-api/corporation/get-departments)、[获取自定义档案项(不带可见范围)](/docs/open-api/dimensions/get-dimension-items)、[获取收款账户](/docs/open-api/pay/get-payeeInfos) 接口
  - 新增了 `startDate` 和 `endDate` 参数，根据 **更新时间** 过滤列表数据，并且返回值中增加 `createTime` 和 `updateTime` 参数。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口 `v2.1` 版本
  - 修复了部门类型字段设置取值规则为 **使用字段依赖性**，传值为档案关系中维护部门的子部门时，无法通过校验的BUG。<br/>
  - 修复了字段配置计算规则为 **从关联申请单中取值**，**关联申请** 字段为非必填但未传值时，无法通过校验的BUG。

---
## 1.0.5

`2022-02-09`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.1`

- 🐞 优化【**企业收付款账户**】模块下全部接口文档的描述及排版。
- 🐞 优化【**预算**】模块下全部接口文档的描述及排版。
- 🐞 优化【**通讯录同步**】模块下部分接口文档的描述及排版。

---
## 1.0.4

`2022-01-28`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.1`

- 🐞 优化【**自建应用**】模块下全部接口文档的描述及排版。
- 🐞 优化【**扩展中心**】模块下全部接口文档的描述及排版。
- 🐞 优化【**出站消息**】模块下全部接口文档的描述及排版。
  - 更新 [常见问题总结](/docs/open-api/outbound-message/question-answer) 文档，新增问题总结。
    - 出站消息字段配置。
    - 出站消息参数介绍。
- 🐞 优化【**委托授权**】模块下全部接口文档的描述及排版。

---
## 1.0.3

`2022-01-27`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.1`

- 🚀 新增 [获取全局字段列表](/docs/open-api/forms/get-customs-param) 接口 `v1.1` 版本
  - 新增了对 `type`（全局字段类型）的参数校验，非备注类型时，报错 **”type参数不合法“**。
- 🐞 更新 [根据员工ID获取待审批单据](/docs/open-api/flows/get-approve) 接口
  - 更新了接口参数描述，`count`（查询数据条数）最大不能超过 `1000` --> 最大不能超过 `100`。
- 🐞 更新 [上传附件](/docs/open-api/attachment/attachment-upload) 接口
  - 更新了 `name`（文件名称）参数描述，添加不支持的特殊字符。
- 🐞 更新 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 接口
  - 更新了 `active`（查询条件：员工是否启用）参数描述。
- 🐞 优化【**附件**】模块下全部接口文档的描述及排版。
- 🐞 优化【**城市管理**】模块下全部接口文档的描述及排版。
- 🐞 优化【**币种汇率**】模块下全部接口文档的描述及排版。
- 🐞 优化【**基础数据**】模块下全部接口文档的描述及排版。

---
## 1.0.2

`2022-01-25`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.1`

- 🐞 更新 [获取全局字段列表](/docs/open-api/forms/get-customs-param) 接口
  - 新增了 `type` 参数所对应全局字段的位置图片。
- 🐞 优化【**单据**】模块下部分接口的描述及排版。

---
## 1.0.1

`2022-01-24`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.1`

- 🐞 更新 [获取全局字段列表](/docs/open-api/forms/get-customs-param) 接口
  - 更新了 `type` 参数描述。
- 🐞 更新 [批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node) 接口
  - 更新了接口参数描述，新增了几种常见失败响应信息及导致原因。

---
## 1.0.0

`2022-01-19`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`代码版本：v9.1`

- 🆕 【**文档多版本**】上线。
- 🆕 新增 [根据模板组名称获取模板组信息](/docs/open-api/forms/get-specifications-byName) 接口。
- 🆕 新增 [获取自定义档案项(所有字段值)](/docs/open-api/dimensions/get-dimension-items-withAll) 接口。 
- 🆕 新增【**工具接口**】模块
  - 🆕 新增 [清空员工手机号和邮箱](/docs/open-api/tools/staffs-clearInfo) 接口。
- 🚀 新增 [创建单据](/docs/open-api/flows/creat-and-save) 接口 `v2.1` 版本
  - 修复了费用类型里的必填字段类型是 **自定义档案** 时，传 `“”` 可通过校验的BUG，增加了非空校验。
- 🚀 新增 [访问临时授权](/docs/open-api/getting-started/temp-auth) 接口 `v1.1` 版本
  - 新增了 `pageType` = `frontPage` 类型，进入易快报 **首页**。

---
## 0.7.165

`2022-01-13`

- 🆕 【**更新日志**】上线。

---
## 0.7.164

`2022-01-12`

- 🐞 更新 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details)、[根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 接口 
  - **申请单** 类型响应数据中新增了 `linkRequisitionInfo`（补充申请单的原单据ID）描述。
- 🐞 更新 [获取企业下档案项数据](/docs/open-api/recordLink/query-all-relation-items) 接口  
  - 新增了 `roleDefIds`（档案关系ID）、`orderBy`（结果排序字段）参数。
- 🐞 更新 [获取业务对象实例列表](/docs/open-api/datalink/get-entity-info) 接口
  - 更新了接口响应数据描述。

---
## 0.7.163

`2022-01-07`

- 🐞 更新 [访问临时授权](/docs/open-api/getting-started/temp-auth) 接口
  - 新增了 `approvalUrl`（审批完成后跳转地址）参数。
- 🐞 优化【**预算**】模块下前4个接口文档。
- 🐞 优化【**单据**】模块下17个接口文档。

---
## 0.7.162

`2022-01-07`

- 🆕 新增 [刷新授权(指定有效时间)](/docs/open-api/getting-started/refresh-auth-expireDate) 接口。
- 🐞 更新 [刷新授权](/docs/open-api/getting-started/refresh-auth) 接口
  - 修复了刷新后有效期为 **2个小时** 的错误描述，实际为 **32天**。

---
## 0.7.161

`2021-12-30`

- 🆕 新增 [获取已激活员工列表](/docs/open-api/corporation/get-all-auth-staffs) 接口。

---
## 0.7.160

`2021-12-28` 

- 🆕 新增 [根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 接口。
- 🐞 更新 [获取收款账户](/docs/open-api/pay/get-payeeInfos) 接口
  - 新增了 `active`（账户是否启用）参数过滤收款账户信息。

---
## 0.7.159
 
`2021-12-23`

- 🆕 新增 [根据ID获取自定义档案项](/docs/open-api/dimensions/get-dimension-items-byId) 接口。

---
## 0.7.158

`2021-12-21` 

- 🆕 新增 [获取指定状态单据列表(包含已删除单据)](/docs/open-api/flows/get-forms-sequences-byState) 接口。

---
## 0.7.157

`2021-12-10` 

- 🐞 更新 [配置出站消息](/docs/open-api/outbound-message/outbound-new) 文档
  - 新增了 **重试时间间隔** 和 **日志类型展示** 介绍。

---
## 0.7.156
 
`2021-12-02` 

- 🆕 新增 [员工离职交接](/docs/open-api/contacts/relay-staff) 接口。

---
## 0.7.155

`2021-11-24` 

- 🐞 更新 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 接口
  - 新增了 `active`（是否启用）参数过滤员工列表。

---
## 0.7.154

`2021-11-15` 

- 🆕 新增 [获取指定员工对应权限的预算节点列表](/docs/open-api/budget/get-BudgetsDetails-ByStaff) 接口。 

---
## 0.7.153

`2021-11-02` 

- 🆕 新增 [Postman使用](/docs/open-api/getting-started/postman-use) 文档。
- 🆕 新增 [获取业务对象执行计划](/docs/open-api/datalink/get-entity-plan) 接口。

---
## 0.7.152
 
`2021-10-29`    

- 🐞 更新 [新增或更新业务对象数据](/docs/open-api/datalink/update-entity-data) 接口
  - 更新了接口参数描述及注意事项。 

---
## 0.7.151

`2021-10-25`   

- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口 
  - 更新了接口参数描述。

---
## 0.7.150

`2021-10-21`   

- 🐞 更新 [配置出站消息](/docs/open-api/outbound-message/outbound-new) 文档
  - 新增了 **HTTP200**、**HTTP201** 成功状态码。

---
## 0.7.149

`2021-10-20`

- 🆕 新增 [修改员工自定义字段(所有平台)](/docs/open-api/contacts/update-staffs-customFields) 接口。	

---
## 0.7.148

`2021-10-15`     

- 🐞 更新 [新增预算包](/docs/open-api/budget/add-budget) 接口
  - 新增了接口注意事项。
- 🐞 优化【**预算**】模块下所有接口文档。

---
## 0.7.147

`2021-10-13`  

- 🐞 更新 [新增预算包](/docs/open-api/budget/add-budget) 接口
  - 更新了接口参数描述。

---
## 0.7.146

`2021-10-11`  

- 🆕 新增 [共享申请事项](/docs/open-api/flows/share-requisition) 接口。

---
## 0.7.145

`2021-10-09`     

- 🐞 更新 [开始使用-常见问题总结](/docs/open-api/getting-started/question-answer)
  - 新增了 **重定向URL功能** 介绍。

---
## 0.7.144

`2021-09-29`  

- 🐞 更新 [开始使用-常见问题总结](/docs/open-api/getting-started/question-answer)
  - 更新了新版应用中心获取 **接入账号** 和 **密码** 路径。

---
## 0.7.143

`2021-09-15`

- 🆕 新增 [新建自定义档案类别](/docs/open-api/dimensions/create-dimensions) 接口。

---
## 0.7.142

`2021-09-13` 

- 🐞 更新 [获取自定义档案项(不带可见范围)](/docs/open-api/dimensions/get-dimension-items) 接口
  - 更新了接口参数描述。

---
## 0.7.141

`2021-09-03` 

- 🆕 新增 [获取预算节点配置和路径信息](/docs/open-api/budget/search-budget-node) 接口。

---
## 0.7.140

`2021-08-25`  

- 🆕 新增 [获取员工自定义字段](/docs/open-api/contacts/get-allCustomeProperty) 接口。
- 🐞 更新 [新增员工](/docs/open-api/contacts/add-staffs)、[批量新增员工](/docs/open-api/contacts/batch-add-staffs) 接口
  - 新增了支持自定义字段保存。

---
## 0.7.139

`2021-08-19`   

- 🆕 新增 [获取企业对账单管理的子对账单](/docs/open-api/flows/get-flow-by-checkingId) 接口
  - 可根据对账单ID获取企业对账单管理的子对账单有哪些。

---
## 0.7.138
 
`2021-07-21`    

- 🆕 新增 [批量获取发票明细](/docs/open-api/datalink-extend/get-entity-invoic-details-batch) 接口。
- 🐞 更新 [新增或更新业务对象数据](/docs/open-api/datalink/update-entity-data) 接口
  - 新增了各类型字段值传参示例。
- 🐞 更新 [获取地址前缀](/docs/open-api/getting-started/origin) 接口
  - 新增了飞书地址前缀。

---
## 0.7.137

`2021-07-13`      

- 🐞 更新 [更新角色下员工信息](/docs/open-api/corporation/update-roles) 接口
  - 新增了 `pathType`（路径类型）参数。

---
## 0.7.136

`2021-06-29` 

- 🐞 更新 [获取自定义档案项(不带可见范围)](/docs/open-api/dimensions/get-dimension-items)、[获取自定义档案项(带可见范围)](/docs/open-api/dimensions/get-dimension-items-visibility) 接口
  - 新增了支持按 `dimensionId`（档案类别ID）参数过滤数据。

---
## 0.7.135

`2021-05-19` 

- 🆕 新增 [【城市管理】](/docs/open-api/city/info) 模块
  - 新增 [获取城市组列表](/docs/open-api/city/get-city-group) 接口。
  - 新增 [创建城市组](/docs/open-api/city/create-city-group) 接口。
  - 新增 [更新城市组](/docs/open-api/city/update-city-group) 接口。
  - 新增 [启用/停用城市组](/docs/open-api/city/update-city-group-status) 接口。
  - 新增 [获取城市组详情](/docs/open-api/city/get-city-group-details) 接口。
  - 新增 [更新城市组详情](/docs/open-api/city/update-city-group-details) 接口。
  - 新增 [删除城市组详情](/docs/open-api/city/delete-city-group-details) 接口。
- 🆕 新增 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 接口。

---
## 0.7.134

`2021-05-17`  

- 🆕 新增 [授权员工](/docs/open-api/contacts/auth-staffs) 接口
  - 批量 **激活/解除** 员工。

---
## 0.7.133

`2021-05-14` 

- 🐞 更新 [新增员工](/docs/open-api/contacts/add-staffs)、[批量新增员工](/docs/open-api/contacts/batch-add-staffs) 接口
  - 新增了控制发送邮件标识参数。

---
## 0.7.132

`2021-05-08`  

- 🐞 更新 [删除某档案关系下的档案项数据](/docs/open-api/recordLink/delete-dimension-relation-items) 接口
  - 新增了支持两种维度取交集删除。	
- 🐞 更新 [回写单据凭证信息](/docs/open-api/flows/voucher-write-back) 接口
  - 修复了回写凭证信息清除凭证号时，凭证状态、生成时间未能正确回写的BUG。

---
## 0.7.131

`2021-03-05`  

- 🆕 新增 [获取全局字段列表](/docs/open-api/forms/get-customs-param) 接口。	
- 🆕 新增 [获取统一开票信息](/docs/open-api/datalink-extend/get-entity-unify-invoice) 接口。	
- 🆕 新增 [获取统一开票方](/docs/open-api/datalink-extend/get-entity-unify-corporation) 接口。	

---
## 0.7.130

`2021-02-23`  	 

- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口
  - 新增了支持 **直接提审** 能力。

---
## 0.7.129

`2021-02-18` 

- 🆕 新增 [获取单据抄送消息](/docs/open-api/flows/get-carboncopy) 接口。

---
## 0.7.128

`2021-02-07` 

- 🐞 更新 [根据单据ID集合获取单据列表](/docs/open-api/flows/get-forms-sequences-ids)、[获取单据列表(包含已删除单据)](/docs/open-api/flows/get-forms-sequences) 接口
  - 相关单据响应中收款信息新增备注字段。	

---
## 0.7.127

`2021-01-14`	  

- 🆕 新增 [获取企业下档案项数据](/docs/open-api/recordLink/query-all-relation-items) 接口。	

---
## 0.7.126

`2021-01-07` 

- 🐞 更新 [更新某档案关系下的档案项数据](/docs/open-api/recordLink/update-dimension-relation-items) 接口
  - 新增了支持 **全量/增量** 更新档案关系数据。 

---
## 0.7.125

`2021-01-05` 

- 🆕 新增 [批量新增自定义档案项](/docs/open-api/dimensions/batch-creat-dimension-items) 接口。 
- 🆕 新增 [批量新增部门](/docs/open-api/contacts/batch-add-departments)	接口。	
- 🆕 新增 [批量新增员工](/docs/open-api/contacts/batch-add-staffs) 接口。	
- 🆕 新增 [编辑某档案关系下的档案项数据](/docs/open-api/recordLink/edit-dimension-relation-items) 接口。	

---
## 0.7.124

`2020-12-25` 

- 🆕 新增 [获取城市列表数据](/docs/open-api/basedata/get-basedata-city) 接口。	

---
## 0.7.123

`2020-12-17` 

- 🆕 新增 [获取行程管理业务对象列表](/docs/open-api/datalink/get-tripManager-order) 接口。	


