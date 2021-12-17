---
slug: update-log
title: API更新日志
authors: [冯继成]
tags: [v2]
---

# 易快报openAPI更新日志

| 更新日期 | 所属模块 | 变更方式 | 接口名称 | 说明 |
| :--- | :--- | :---: | :--- | :--- | :--- |:--- |
| 2021-12-10 | 出站消息 | 更新 | [配置出站消息](/outbound-message/outbound-new.md) | 出站消息增加重试时间间隔和日志类型展示 |
| 2021-12-02 | 通讯录同步 | 新增 | [员工离职交接](/contacts/relay-staff.md) | 新增员工离职交接接口 |
| 2021-11-15 | 预算 | 新增 | [根据员工获取对应权限预算节点列表](/budget/get-BudgetsDetails-ByStaff.md) | 新增根据员工获取对应权限预算节点列表接口 |
| 2021-11-02 | 开始使用 | 新增 | [Postman使用](/getting-started/postman-use.md) | 新增Postman使用文档 |
| 2021-11-02 | 自定义扩展(原数据互联) | 新增 | [获取业务对象台账计划](/datalink/get-entity-plan.md) | 新增获取业务对象台账计划接口 |
| 2021-10-29 | 自定义扩展(原数据互联) | 更新 | [更新业务对象数据](/datalink/update-entity-data.md) | 更新接口参数及注意事项 |
| 2021-10-25 | 单据 | 更新 | [创建单据](/flows/creat-and-save.md) |  更新创建单据接口参数描述 |
| 2021-10-21 | 出站消息 | 更新 | [配置出站消息](/outbound-message/outbound-new.md) |  出站消息增加HTTP200,HTTP201成功状态码 |
| 2021-10-20 | 通讯录同步 | 新增 | [修改员工自定义字段](/contacts/update-staffs-customFields.md) |  新增修改员工自定义字段接口	|
| 2021-10-15 | 预算  | 更新  |  [新增预算树](/budget/add-budget.md)  |  更新预算模块下所有接口文档	|
| 2021-10-13 | 预算  | 更新  |  [新增预算树](/budget/add-budget.md)  |  更新新增预算树接口	|
| 2021-10-11 | 单据  | 新增  |  [共享申请事项](/flows/share-requisition.md)  |  新增共享申请事项接口	|
| 2021-10-09 | 开始使用  | 更新  |  [常见问题总结](/getting-started/question-answer.md)  |  新增重定向URL功能介绍	|
| 2021-09-29 | 开始使用  | 更新  |  [常见问题总结](/getting-started/question-answer.md)  |  更新新版应用中心获取接入账号和密码路径	|
| 2021-09-15 | 自定义档案  | 新增  |  [新建档案类别](/dimensions/create-dimensions.md)  |  新增创建自定义档案类别接口方法	|
| 2021-09-13 | 自定义档案  | 更新  |  [获取自定义档案项](/dimensions/get-dimension-items.md)  |  获取自定义档案项支持分类查询	|
| 2021-09-03 | 预算  | 新增  |  [查询预算包](/budget/search-budget-node.md)  |  新增查询预算包接口方法	|
| 2021-08-25 | 通讯录模块  | 新增  |  [获取员工自定义字段](/contacts/getAllCustomeProperty.md)  |  获取员工自定义字段	|
| 2021-08-25 | 通讯录模块  | 更新  |  [新增员工](/contacts/add-staffs.md)  |  新增员工支持自定义字段保存	|
| 2021-08-19 | 单据  | 新增  |  [获取企业对账单管理的子对账单](/flows/get-flow-by-checkingId.md)  |  根据对账单ID获取企业对账单管理的子对账单有哪些	|
| 2021-07-21 | 自定义扩展(原数据互联) |  更新   |  [更新业务对象数据](/datalink/update-entity-data.md)  |  新增字段类型值示例	|
| 2021-07-21 | 扩展中心     |  新增   |  [批量查询发票明细接口](/datalink/get-entity-invoic-details-batch.md)  |  新增批量查询发票明细接口	|
| 2021-07-21 | 开始使用     |  更新   |  [开始使用](/getting-started/origin.md)  |  新增飞书地址前缀	|
| 2021-07-13 | 企业通讯录     |  更新   |  [更新企业通讯录](/corporation/update-roles.md)  |  更新角色员工接口，新增pathType字段	|
| 2021-06-29 | 自定义档案     |  更新   |  [更新自定义档案项](/dimensions/update-dimension-items.md)  |  新增dimensionId字段	|
| 2021-05-19 | 城市管理     |  新增   |  [城市管理](/city/info.md)  |  新增城市管理模块，包括城市组相关接口	|
| 2021-05-19 | 企业通讯录    |  新增   |  [查询角色组和角色](/corporation/get-roles-group.md)  |  新增查询角色组和角色	|
| 2021-05-17 | 通讯录     |  新增   |  [授权员工](/contacts/auth-staffs.md)  |   批量激活/解除员工	|
| 2021-05-14 | 通讯录同步 | 更新   |  [批量新增员工](/contacts/batch-add-staffs.html)   |   新增控制发送邮件标识	|
| 2021-05-14 | 通讯录同步 | 更新   |  [新增员工](/contacts/add-staffs.html)   |   新增控制发送邮件标识	|
| 2021-05-08 | 档案关系 | 更新   |  [删除某档案关系下的档案项数据](/recordLink/delete-dimension-relation-items.html)   |   支持两种维度交集删除	|
| 2021-05-08 | 单据 | 更新   |  [回写单据凭证信息](/flows/voucher-write-back.html)   |   修复回写凭证信息接口清除凭证号时，凭证状态、生成时间未能正确回写 |
| 2021-03-05 | 单据模板 |  新增   |  [获取启用中的全局字段](/forms/get-customs-param.md) |   获取启用中的全局字段	|
| 2021-03-05 | 扩展中心 |  更新   |  [统一开票](/datalink/get-entity-unify-invoice.html) |   统一开票	|
| 2021-03-05 | 扩展中心 |  更新   |  [统一开票方](/datalink/get-entity-unify-corporation.html) |   统一开票方	|
| 2021-02-23 | 单据	 |  更新   |  [创建单据](/flows/creat-and-save.html) |   创建单据新增提供(直接提审)能力	|
| 2021-02-18 | 单据	 |  新增   |  [获取单据抄送消息](/flows/get-carboncopy.html) |   新增获取单据抄送消息	|
| 2021-02-07 | 单据	 |  更新   |  [通过id集合获取单据数据列表](/flows/get-forms-sequences-ids.html) |   相关单据响应中收款信息新增备注字段	|
| 2021-02-07 | 单据	 |  更新   |  [获取单据列表](/flows/get-forms-sequences.html) |   相关单据响应中收款信息新增备注字段	|
| 2021-01-14 | 档案关系	 |  新增   |  [获取企业的档案项数据](/recordLink/query-all-relation-items.html) |   全量查询档案关系	|
| 2021-01-07 | 档案关系	 |  更新   |  [更新某档案关系下的档案项目](/recordLink/update-dimension-relation-items.html) |   支持全量/增量编辑档案关系 |
| 2021-01-05 | 自定义档案	|  新增   |  [批量新增自定义档案项](/dimensions/batch-creat-dimension-items.html)  |   支持批量新增自定义档案项 |
| 2021-01-05 | 通讯录 |  新增  |  [批量新增部门](/contacts/batch-add-departments.html)		  |   支持批量新增部门	|
| 2021-01-05 | 通讯录	|  新增   |  [批量新增人员](/contacts/batch-add-staffs.html)  |   支持批量新增人员	|
| 2021-01-05 | 档案关系 |  新增   |  [编辑档案关系](/recordLink/edit-dimension-relation-items.html)   |   支持编辑已存在档案关系	|
| 2020-12-25 | 基础数据 |  新增   |  [获取城市数据](/basedata/get-basedata-city.html)   |   城市数据-全量查询接口	|
| 2020-12-17 | 自定义扩展 | 新增   |  [获取行程管理订单列表](/datalink/get-tripManager-order.html)   |   新增行程管理全量搜索功能	|


