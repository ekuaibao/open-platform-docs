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
## 0.7.165

`2022-01-13`

- 🆕 `更新日志` 上线。

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
- 🐞 更新“预算”模块下前4个接口文档。
- 🐞 更新“单据”模块下17个接口文档。

---
## 0.7.162

`2022-01-07`

- 🐞 修复 [刷新授权](/docs/open-api/getting-started/refresh-auth) 接口中刷新后有效期为 `2个小时` 的错误描述，实际为 `32天`。
- 🆕 新增 [刷新授权(指定有效时间)](/docs/open-api/getting-started/refresh-auth-expireDate) 接口。

---
## 0.7.161

`2021-12-30`

- 🆕 新增 [获取已激活员工列表](/docs/open-api/corporation/get-all-auth-staffs) 接口。

---
## 0.7.160

`2021-12-28` 

- 🐞 更新 [获取收款账号信息](/docs/open-api/pay/get-payeeInfos) 接口， 增加 `active`（是否停用）参数过滤收款账户信息。
- 🆕 新增 [根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode) 接口。

---
## 0.7.159
 
`2021-12-23`

- 🆕 新增 [根据ID获取自定义档案项](/docs/open-api/dimensions/get-dimension-items-byId) 接口。

---
## 0.7.158

`2021-12-21` 
- 🆕 新增 [获取指定状态的单据列表](/docs/v2.0/open-api/flows/get-forms-sequences-byState) 接口。

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

- 🆕 新增 [修改员工自定义字段](/docs/open-api/contacts/update-staffs-customFields) 接口。	

---
## 0.7.148

`2021-10-15`     

- 🐞 更新 [新增预算树](/docs/open-api/budget/add-budget) 接口。
- 🐞 更新“预算”模块下所有接口文档	。

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

- 🆕 新增 [查询预算包](/docs/open-api/budget/search-budget-node) 接口。

---
## 0.7.140

`2021-08-25`  
- 🆕 新增 [获取员工自定义字段](/docs/open-api/contacts/get-allCustomeProperty) 接口。
- 🐞 更新 [新增员工](/docs/open-api/contacts/add-staffs) 接口，支持自定义字段保存。

---
## 0.7.139

`2021-08-19`   

- 🆕 新增 [获取企业对账单管理的子对账单](/docs/open-api/flows/get-flow-by-checkingId)，根据对账单ID获取企业对账单管理的子对账单有哪些。

---
## 0.7.138
 
`2021-07-21`    

- 🐞 更新 [更新业务对象数据](/docs/open-api/datalink/update-entity-data)，新增字段类型值示例。
- 🆕 新增 [批量获取发票明细](/docs/open-api/datalink-extend/get-entity-invoic-details-batch) 接口。
- 🐞 更新 [获取地址前缀](/docs/open-api/getting-started/origin)，新增飞书地址前缀。

---
## 0.7.137

`2021-07-13`      

- 🐞 更新 [更新角色员工](/docs/open-api/corporation/update-roles) 接口，新增 `pathType` 字段。

---
## 0.7.136

`2021-06-29` 

- 🐞 更新 [更新自定义档案项](/docs/open-api/dimensions/update-dimension-items)，新增 `dimensionId` 字段。

---
## 0.7.135

`2021-05-19` 

- 🆕 新增 [城市管理](/docs/open-api/city/info)，新增城市管理模块，包括城市组相关接口。
- 🆕 新增 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 接口。

---
## 0.7.134

`2021-05-17`  

- 🆕 新增 [授权员工](/docs/open-api/contacts/auth-staffs)，批量激活/解除员工。

---
## 0.7.133

`2021-05-14` 

- 🐞 更新 [批量新增员工](/docs/open-api/contacts/batch-add-staffs)，新增控制发送邮件标识。
- 🐞 更新 [新增员工](/docs/open-api/contacts/add-staffs)，新增控制发送邮件标识。

---
## 0.7.132

`2021-05-08`  

- 🐞 更新 [删除某档案关系下的档案项数据](/docs/open-api/recordLink/delete-dimension-relation-items)，支持两种维度交集删除。	
- 🐞 更新 [回写单据凭证信息](/docs/open-api/flows/voucher-write-back)，修复回写凭证信息接口清除凭证号时，凭证状态、生成时间未能正确回写。

---
## 0.7.131

`2021-03-05`  

- 🆕 新增 [获取启用中的全局字段](/docs/open-api/forms/get-customs-param) 接口。	
- 🐞 更新 [统一开票](/docs/open-api/datalink-extend/get-entity-unify-invoice) 接口。	
- 🐞 更新 [统一开票方](/docs/open-api/datalink-extend/get-entity-unify-corporation) 接口。	

---
## 0.7.130

`2021-02-23`  	 

- 🐞 更新 [创建单据](/docs/open-api/flows/creat-and-save) 接口，新增 `直接提审` 能力。

---
## 0.7.129

`2021-02-18` 

- 🆕 新增 [获取单据抄送消息](/docs/open-api/flows/get-carboncopy) 接口。

---
## 0.7.128

`2021-02-07` 

- 🐞 更新 [通过id集合获取单据数据列表](/docs/v2.0/open-api/flows/get-forms-sequences-ids)，相关单据响应中收款信息新增备注字段。	
- 🐞 更新 [获取单据列表](/docs/v2.0/open-api/flows/get-forms-sequences)，相关单据响应中收款信息新增备注字段。	

---
## 0.7.127

`2021-01-14`	  

- 🆕 新增 [获取企业下档案项数据](/docs/open-api/recordLink/query-all-relation-items) 接口。	

---
## 0.7.126

`2021-01-07` 

- 🐞 更新 [更新某档案关系下的档案项目](/docs/open-api/recordLink/update-dimension-relation-items)，支持全量/增量编辑档案关系。 

---
## 0.7.125

`2021-01-05` 

- 🆕 新增 [批量新增自定义档案项](/docs/open-api/dimensions/batch-creat-dimension-items) 接口。 
- 🆕 新增 [批量新增部门](/docs/open-api/contacts/batch-add-departments)	接口。	
- 🆕 新增 [批量新增人员](/docs/open-api/contacts/batch-add-staffs) 接口。	
- 🆕 新增 [编辑档案关系](/docs/open-api/recordLink/edit-dimension-relation-items) 接口。	

---
## 0.7.124

`2020-12-25` 

- 🆕 新增 [获取城市数据](/docs/open-api/basedata/get-basedata-city) 接口。	

---
## 0.7.123

`2020-12-17` 

- 🆕 新增 [获取行程管理订单列表](/docs/open-api/datalink/get-tripManager-order) 接口。	


