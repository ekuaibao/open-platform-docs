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
## 1.5.0

`2022-05-10`

- 🆕 【**所有接口**】增加了 **更新日志** 描述，方便查看接口上线版本和更新内容。
- 🆕 新增 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details)、[根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 接口 `v1.1` 版本 
  - 报销单类型返回数据中新增了费用明细关联的申请单ID（`expenseLink`）参数。


---
## 1.4.1

`2022-04-28`

- 🐞 更新 [通讯录接口-常见问题总结](/docs/open-api/contacts/question-answer) 
  - 新增了问题“调用【修改员工信息】时，接口响应成功，但员工信息未修改成功？”。
- 🐞 更新 [新增部门](/docs/open-api/contacts/add-departments)、[批量新增部门](/docs/open-api/contacts/batch-add-departments)、[新增员工](/docs/open-api/contacts/add-staffs)、[批量新增员工](/docs/open-api/contacts/batch-add-staffs) 接口 **失败响应** 示例。
- 🐞 更新 [获取统一开票方](/docs/open-api/datalink-extend/get-entity-unify-corporation)、[获取统一开票信息](/docs/open-api/datalink-extend/get-entity-unify-invoice) 接口描述。
- 🐞 更新 [外部服务回调审批接口](/docs/open-api/outbound-message/outbound-callback) 接口
  - 新增了报错场景注意事项。
- 🐞 更新 [根据单据ID集合获取单据列表](/docs/open-api/flows/get-forms-sequences-ids)、[根据员工ID获取待审批单据](/docs/open-api/flows/get-approve) 接口
  - 优化了接口 **HTTP 500** 错误，更新接口 **失败响应** 示例。
- 🐞 更新【**预算**】模块下全部接口
  - 优化了 **CURL** 传参示例，增加参数注释。
  - [批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node) 接口，按情景拆分 **CURL** 传参示例。

---
## 1.4.0

`2022-04-15`

- 🆕 新增 [修改员工自定义字段(所有平台)](/docs/open-api/contacts/update-staffs-customFields)、[停启用员工](/docs/open-api/contacts/active-staffs) 接口 `v1.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🆕 新增 [员工离职交接](/docs/open-api/contacts/relay-staff) 接口 `v2.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🐞 更新 [修改员工信息](/docs/open-api/contacts/update-staffs) 接口 `v1.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🐞 更新 [获取企业下档案项数据](/docs/open-api/recordLink/query-all-relation-items) 接口 `v2.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
- 🐞 更新 [新增某档案关系下的档案项数据](/docs/open-api/recordLink/creat-dimension-relation-items)、[删除某档案关系下的档案项数据](/docs/open-api/recordLink/delete-dimension-relation-items)、[更新某档案关系下的档案项数据](/docs/open-api/recordLink/update-dimension-relation-items)、[编辑某档案关系下的档案项数据](/docs/open-api/recordLink/edit-dimension-relation-items) 接口 `v2.1` 版本，更新校验逻辑
  - 档案关系类型共六种，全都做参数校验，若传入已删除参数则报错：
    - **未激活/已移除** 员工，不能进行任何档案关系数据操作；
    - body参数里传多个值时，校验参数任意一个不存在则报错。
  - 无效果的增删改返回信息提示。
- 🐞 更新 [根据单据ID集合获取单据列表](/docs/open-api/flows/get-forms-sequences-ids) 接口 `v1` 版本
  - 优化了单据费用明细和发票过多导致的 **HTTP 504** 超时问题。
- 🐞 更新 [新增或更新业务对象数据](/docs/open-api/datalink/update-entity-data) 接口 `v2` 版本
  - 新增了 `editFlag`（更新标志）参数，默认为 `cover`（全量覆盖）可配置为 `increment`（增量更新）。
  - 新增了 **业务对象（多选）** 传参示例。
- 🐞 更新 [更新单据](/docs/open-api/flows/update-form) 接口 `v2.1` 版本
  - 新增了 `editorId`（单据修改人）参数，修复部分情况下无法更新单据的BUG。
    - `editorId` 传参时，审批日志记录为"**单据修改人**"修改了单据。
    - `editorId` 不传时，审批日志默认记录为"**节点审批人（会签节点任选其一）**"修改了单据。
- 🐞 更新 [批量新建自定义档案项](/docs/open-api/dimensions/batch-creat-dimension-items) 接口 `v2.1` 版本
  - 新增了系统预置档案额外参数描述。
- 🐞 更新 [新增员工](/docs/open-api/contacts/add-staffs)、[批量新增员工](/docs/open-api/contacts/batch-add-staffs) 接口
  - 更新了接口注意事项。
- 🐞 更新 [获取发票主体信息](/docs/open-api/datalink-extend/get-entity-invoice) 接口
  - 更新了 `objectId`（发票类型）参数描述，增加 **机打发票**、**消费小票** 类型。
---

## 1.3.1

`2022-03-31`

- 🐞 更新 开通 [通讯录接口](/docs/open-api/contacts/info) 功能描述。 
- 🐞 更新 [重定向URL](/docs/open-api/getting-started/question-answer#问题三) 参数描述。
- 🐞 更新 [获取部门列表(包含停用部门)](/docs/open-api/corporation/get-departments)、[获取员工列表](/docs/open-api/corporation/get-all-staffs)、[获取已激活员工列表](/docs/open-api/corporation/get-all-auth-staffs) 接口失败响应。
- 🐞 优化【**委托授权**】模块下全部接口名称。

---
## 1.3.0

`2022-03-24`

- 🆕 新增 [新增角色](/docs/open-api/corporation/create-roledefs)、[更新角色](/docs/open-api/corporation/update-roledefs)接口 `v1` 版本
- 🆕 新增 [获取企业下档案关系列表](/docs/open-api/recordLink/get-dimension-relation)、[获取企业下档案项数据](/docs/open-api/recordLink/query-all-relation-items) 接口 `v2.1` 版本
  - 优化报错输出。
- 🆕 新增 [新增某档案关系下的档案项数据](/docs/open-api/recordLink/creat-dimension-relation-items)、[删除某档案关系下的档案项数据](/docs/open-api/recordLink/delete-dimension-relation-items)、[更新某档案关系下的档案项数据](/docs/open-api/recordLink/update-dimension-relation-items)、[编辑某档案关系下的档案项数据](/docs/open-api/recordLink/edit-dimension-relation-items) 接口 `v2.1` 版本
  - 新增了 `type` 类型参数，支持 `id` 或 `code` 传参。
  - **更新某档案关系下的档案项数据** 接口，更新 `editFlag`（更新标志）默认值，从 `cover` 改为 `increment`。
- 🆕 新增 [更新单据](/docs/open-api/flows/update-form) 接口 `v2.1` 版本
  - 新增了校验审批流节点是否配置【**允许审批人修改单据**】，支持【**paying（待支付）**】状态更新单据。
  - 修复了单据模板中配置【**必须关联申请单**】，**关联申请** 字段设置【**允许关联多个申请事项**】后，提示"关联申请单不存在，请补充申请单ID！"的BUG。
- 🆕 新增 [审批动作（审批日志中action字段）](/docs/open-api/flows/forms-state#审批动作审批日志中-action-字段)参数列表。
- 🐞 更新 [查询角色下员工信息](/docs/open-api/corporation/get-roles)、[更新角色下员工信息](/docs/open-api/corporation/update-roles) 接口 `v1` 版本参数描述
  - `staffBy`（员工参数格式）新增了支持 `code`、`cellphone`、`email` 3种参数类型。
  - **更新角色下员工信息** 接口兼容老版本：更新「普通角色」时 `path` 参数非必填。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口 `v2.1` 版本
  - 新增了只允许用 **单据模板**、**费用类型模板** 最新的模板ID创建单据的校验。
  - 修复了费用类型必填字段传 `""` 可通过校验的BUG，共16种数据类型。
  - 修复了申请单开启借款金额字段并配置了 **系统计算** 时，计算结果小数位超过2位的BUG。
  
---
## 1.2.2

`2022-03-14`

- 🆕 新增 [获取所有开户网点信息](/docs/open-api/pay/get-all-branch) 接口。
- 🐞 更新 [新增收款账户](/docs/open-api/pay/new-account)、[更新收款账户](/docs/open-api/pay/edit-accounts) 接口参数描述
  - `branch`（开户网点）参数支持通过系统配置设置 “**非必填**”。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 参数描述
  - 无法对发票附件进行验真查重或者OCR处理。
- 🐞 更新 [获取预算节点和子节点详细信息](/docs/open-api/budget/get-BudgetsDetails-ByPage) 接口描述。
- 🐞 更新 [更新角色下员工信息](/docs/open-api/corporation/update-roles) 参数描述。
- 🐞 更新 [批量新建自定义档案项](/docs/open-api/dimensions/batch-creat-dimension-items) 报错信息。
- 🐞 更新 [新增或更新业务对象数据](/docs/open-api/datalink/update-entity-data) 注意事项。

---
## 1.2.1

`2022-03-08`

- 🆕 新增 [修改员工信息](/docs/open-api/contacts/update-staffs) 接口 `v1.1` 版本
  - 员工自定义字段值的保存做增量更新（v1版本为全量更新，不传的字段置空处理），并添加员工自定义字段真实性校验。
- 🐞 更新 **员工** 相关接口响应字段注释。
- 🐞 更新 [更新单据](/docs/open-api/flows/update-form)、[单据审批](/docs/open-api/flows/flow-approval) 接口注意事项。  
- 🐞 更新 [新增收款账户](/docs/open-api/pay/new-account)、[更新收款账户](/docs/open-api/pay/edit-accounts) 接口参数描述，与系统界面上的字段保持一致。

---  
## 1.2.0

`2022-03-08`

- 🆕 新增 [根据员工ID批量获取单据详情](/docs/open-api/flows/get-forms-details-byStaff) 接口。
- 🆕 新增 [获取申请事项](/docs/open-api/flows/get-requisition-all) 接口。
- 🆕 新增 [根据单据ID查询所有待办已办事项](/docs/open-api/flows/get-forms-details-byId) 接口。
- 🆕 新增 [更新自建应用](/docs/open-api/datalink/edit-platform) 接口 `v2.1` 版本
  - 新增了支持更新应用名称，对 `adminIds`（管理员ID）做参数真实性校验。
- 🆕 新增 [获取单据审批状态](/docs/open-api/flows/get-approve-state) 接口 `v1.1` 版本
  - 新增了能获取到已删除的单据，并且显示“已删除”状态。
- 🆕 新增 [删除城市组详情](/docs/open-api/city/delete-city-group-details) 接口 `v1.1` 版本
  - 新增了 `staffIds`（员工ID）与 `roleIds`（角色ID）列表不能同时为空的校验。
- 🆕 新增 [查询员工待办数量](/docs/open-api/corporation/get-staff-backLog) 接口 `v1.1` 版本
  - 新增了响应数据中返回详细待办类型及数量。
- 🆕 新增 [新增某档案关系下的档案项数据](/docs/open-api/recordLink/creat-dimension-relation-items) 接口 `v2.1` 版本
  - 修复了传其他类型自定义档案项ID（非档案关系配置的类型）可以创建成功数据的问题。
- 🐞 更新 [获取单据附件](/docs/open-api/flows/get-flows-attachment) 接口
  - 修复了无法把费用明细里的系统无法识别的充当发票的图片当附件处理返回的问题。
- 🐞 更新 [更新角色下员工信息](/docs/open-api/corporation/update-roles) 接口
  - 修复了接口 **HTTP 500** 报错问题，增加了 `path` 、`staffs` 不允许传 `null` 的校验。
- 🐞 更新 [获取收款账户](/docs/open-api/pay/get-payeeInfos) 接口
  - 新增了 `active`（查询条件：收款账户是否启用）参数描述，并且响应数据中增加了 `active` 参数。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口 `v2.1` 版本
  - 修复了 **离职人员** 可以成功创建单据的问题。  

---
## 1.1.1

`2022-02-18`

- 🐞 更新 [批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node) 接口
  - 优化接口校验逻辑，报错时会准确描述具体出错的节点和参数。
- 🐞 更新 [更新角色下员工信息](/docs/open-api/corporation/update-roles) 接口
  - `pathType` 参数支持 `id` 类型。

---
## 1.1.0

`2022-02-11`

- 🆕 新增 [新建自定义档案项](/docs/open-api/dimensions/creat-dimension-items) 、[批量新建自定义档案项](/docs/open-api/dimensions/batch-creat-dimension-items) 接口 `v1.1` 版本
  - 新增了当 `fullVisible` 为 `false` 时，对 `staffs` 、`roles` 、`departments` 三个参数的必填及有效性校验。
- 🐞 更新 [获取员工列表](/docs/open-api/corporation/get-all-staffs)、[获取部门列表(包含停用部门)](/docs/open-api/corporation/get-departments)、[获取自定义档案项(不带可见范围)](/docs/open-api/dimensions/get-dimension-items)、[获取收款账户](/docs/open-api/pay/get-payeeInfos) 接口
  - 新增接口参数 `startDate` 和 `endDate` 根据 **更新时间** 过滤列表数据，并且返回值中增加 `createTime` 和 `updateTime` 参数。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口
    - 修复了部门类型字段设置取值规则为“使用字段依赖性”，传值为档案关系中维护部门的子部门时，无法通过校验的BUG。<br/>
    - 修复了字段配置计算规则为“从关联申请单中取值”，“关联申请”字段为非必填但未传值时，无法通过校验的BUG。

---
## 1.0.5

`2022-02-09`

- 🐞 优化【**企业收付款账户**】模块下全部接口文档的描述及排版。
- 🐞 优化【**预算**】模块下全部接口文档的描述及排版。
- 🐞 优化【**通讯录同步**】模块下部分接口文档的描述及排版。

---
## 1.0.4

`2022-01-28`

- 🐞 优化【**自建应用**】模块下全部接口文档的描述及排版。
- 🐞 优化【**扩展中心**】模块下全部接口文档的描述及排版。
- 🐞 优化【**出站消息**】模块下全部接口文档的描述及排版。
   - 更新 [常见问题总结](/docs/open-api/outbound-message/question-answer) 文档，新增问题描述。
- 🐞 优化【**委托授权**】模块下全部接口文档的描述及排版。

---
## 1.0.3

`2022-01-27`

- 🆕 新增 [获取全局字段列表](/docs/open-api/forms/get-customs-param) 接口 `v1.1` 版本
  - 新增对 `type`（全局字段类型）的参数校验，非备注类型时，报错 **”type参数不合法“**。
- 🐞 更新 [获取指定员工的待审批单据](/docs/open-api/flows/get-approve) 接口
    - 修改接口参数描述，`count`（查询数据条数）最大不能超过 `1000` --> 最大不能超过 `100`。
- 🐞 更新 [上传附件](/docs/open-api/attachment/attachment-upload) 接口
    - 修改 `name`（文件名称）参数描述，添加不支持的特殊字符。
- 🐞 更新 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 接口
    - 增加 `active`（查询条件：员工是否启用）参数描述：
- 🐞 优化【**附件**】模块下全部接口文档的描述及排版。
- 🐞 优化【**城市管理**】模块下全部接口文档的描述及排版。
- 🐞 优化【**币种汇率**】模块下全部接口文档的描述及排版。
- 🐞 优化【**基础数据**】模块下全部接口文档的描述及排版。

---
## 1.0.2

`2022-01-25`

- 🐞 更新 [获取全局字段列表](/docs/open-api/forms/get-customs-param) 接口。
    - 添加 `type` 参数所对应的全局字段在系统中的位置。
- 🐞 优化【**单据**】模块下部分接口的描述及排版。

---
## 1.0.1

`2022-01-24`

- 🐞 更新 [获取全局字段列表](/docs/open-api/forms/get-customs-param) 接口。
    - 增加对 `type` 参数所对应的全局字段的使用场景描述。
- 🐞 更新 [批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node) 接口。
    - 优化接口参数，以及参数描述，添加了几种常见失败响应信息及原因描述。

---
## 1.0.0

`2022-01-19`

- 🆕 `文档多版本` 上线。
- 🆕 新增 [根据模板组名称获取模板组信息](/docs/open-api/forms/get-specifications-byName) 接口。
- 🆕 新增 [获取自定义档案项(所有字段值)](/docs/open-api/dimensions/get-dimension-items-withAll) 接口。 
- 🆕 新增【**工具接口**】模块。
  - 🆕 新增 [清空员工手机号和邮箱](/docs/open-api/tools/staffs-clearInfo) 接口。
- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口 `v2.1` 版本
  - 修复了费用类型里的必填字段类型是 `自定义档案` 时，传 `“”` 可通过校验的BUG，增加了非空校验。
- 🐞 更新 [访问临时授权](/docs/open-api/getting-started/temp-auth) 接口 `v1.1` 版本
  - 新增 `pageType` = `frontPage` 类型，进入易快报“首页”。

---
## 0.7.165

`2022-01-13`

- 🆕 `更新日志` 上线。

---
## 0.7.164

`2022-01-12`

- 🐞 更新 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details) / [根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 接口 增加响应参数描述：
  - "linkRequisitionInfo":"ID_3w0G92w8FCw" &emsp; &emsp; //补充申请单的原单据ID
- 🐞 更新 [获取企业下档案项数据](/docs/open-api/recordLink/query-all-relation-items) 接口  增加 `roleDefIds`（档案关系ID），`orderBy`（结果排序字段）参数。
- 🐞 更新 [获取全局字段列表](/docs/open-api/forms/get-customs-param) 接口，`Type` 参数增加校验，不属于固定值时返回不合法提示。
- 🐞 更新 [获取业务对象实例列表](/docs/open-api/datalink/get-entity-info) 接口，修改响应数据描述。

---
## 0.7.163

`2022-01-07`

- 🐞 更新 [访问临时授权](/docs/open-api/getting-started/temp-auth) 接口，增加 `approvalUrl` （审批完成后跳转地址）参数。
- 🐞 更新【**预算**】模块下前4个接口文档。
- 🐞 更新【**单据**】模块下17个接口文档。

---
## 0.7.162

`2022-01-07`

- 🆕 新增 [刷新授权(指定有效时间)](/docs/open-api/getting-started/refresh-auth-expireDate) 接口。
- 🐞 修复 [刷新授权](/docs/open-api/getting-started/refresh-auth) 接口中刷新后有效期为 `2个小时` 的错误描述，实际为 `32天`。

---
## 0.7.161

`2021-12-30`

- 🆕 新增 [获取已激活员工列表](/docs/open-api/corporation/get-all-auth-staffs) 接口。

---
## 0.7.160

`2021-12-28` 

- 🆕 新增 [根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 接口。
- 🐞 更新 [获取收款账号信息](/docs/open-api/pay/get-payeeInfos) 接口， 增加 `active`（是否停用）参数过滤收款账户信息。

---
## 0.7.159
 
`2021-12-23`

- 🆕 新增 [根据ID获取自定义档案项](/docs/open-api/dimensions/get-dimension-items-byId) 接口。

---
## 0.7.158

`2021-12-21` 

- 🆕 新增 [获取指定状态的单据列表](/docs/open-api/flows/get-forms-sequences-byState) 接口。

---
## 0.7.157

`2021-12-10` 

- 🐞 更新 [配置出站消息](/docs/open-api/outbound-message/outbound-new) 文档，增加 `重试时间间隔` 和 `日志类型展示` 介绍。

---
## 0.7.156
 
`2021-12-02` 

- 🆕 新增 [员工离职交接](/docs/open-api/contacts/relay-staff) 接口。

---
## 0.7.155

`2021-11-24` 

- 🐞 更新 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 接口，增加 `active`（是否停用）参数，过滤员工列表。

---
## 0.7.154

`2021-11-15` 

- 🆕 新增 [根据员工获取对应权限预算节点列表](/docs/open-api/budget/get-BudgetsDetails-ByStaff) 接口。 

---
## 0.7.153

`2021-11-02` 

- 🆕 新增 [Postman使用](/docs/open-api/getting-started/postman-use) 文档。
- 🆕 新增 [获取业务对象台账计划](/docs/open-api/datalink/get-entity-plan) 接口。

---
## 0.7.152
 
`2021-10-29`    

- 🐞 更新 [更新业务对象数据](/docs/open-api/datalink/update-entity-data) 接口参数及注意事项。 

---
## 0.7.151

`2021-10-25`   

- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口参数描述。

---
## 0.7.150

`2021-10-21`   

- 🐞 更新 [配置出站消息](/docs/open-api/outbound-message/outbound-new) ，增加 `HTTP200`、`HTTP201` 成功状态码。

---
## 0.7.149

`2021-10-20`

- 🆕 新增 [修改员工自定义字段(所有平台)](/docs/open-api/contacts/update-staffs-customFields) 接口。	

---
## 0.7.148

`2021-10-15`     

- 🐞 更新 [新增预算树](/docs/open-api/budget/add-budget) 接口。
- 🐞 更新【**预算**】模块下所有接口文档	。

---
## 0.7.147

`2021-10-13`  

- 🐞 更新 [新增预算树](/docs/open-api/budget/add-budget) 接口。

---
## 0.7.146

`2021-10-11`  

- 🆕 新增 [共享申请事项](/docs/open-api/flows/share-requisition) 接口。

---
## 0.7.145

`2021-10-09`     

- 🐞 更新 [常见问题总结](/docs/open-api/getting-started/question-answer)，新增重定向URL功能介绍。

---
## 0.7.144

`2021-09-29`  

- 🐞 更新 [常见问题总结](/docs/open-api/getting-started/question-answer)，更新新版应用中心获取接入账号和密码路径。

---
## 0.7.143

`2021-09-15`

- 🆕 新增 [新建档案类别](/docs/open-api/dimensions/create-dimensions) 接口。

---
## 0.7.142

`2021-09-13` 

- 🐞 更新 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items)  接口，支持分类查询。

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
  - 新增了路径类型（`pathType`）参数。

---
## 0.7.136

`2021-06-29` 

- 🐞 更新 [获取自定义档案项(不带可见范围)](/docs/open-api/dimensions/get-dimension-items)、[获取自定义档案项(带可见范围)](/docs/open-api/dimensions/get-dimension-items-visibility) 接口
  - 新增了支持按档案类别ID（`dimensionId`）参数过滤数据。

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


