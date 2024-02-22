---
slug: info
title: 概述
authors: [冯继成]
---

# 开始使用内部接口

本模块提供内部接口目录，便于查看内部接口。

---
## 开始使用
### [获取自建应用授权(旧)](/docs/open-api/getting-started/platform-auth)

---
## 企业通讯录
### [修改员工工号(全环境)](/docs/open-api/corporation/update-staffs-code)
### [根据自定义字段查询员工信息(易桥专用)](/docs/open-api/inside/get-staffs-staffCustom)
### [根据自定义字段查询部门信息(易桥专用)](/docs/open-api/inside/get-departments-deptCustom)
### [获取权限配置员工列表](/docs/open-api/inside/get-permission-staffIds)

---
## 通讯录同步
### [修改员工登录手机号](/docs/open-api/inside/update-staffs-phone)
### [新增员工/部门扩展字段(易桥专用)](/docs/open-api/inside/create-custom-field-staffOrDepearment)

---
## 单据模板
### [查询全局字段是否存在(自动化专用)](/docs/open-api/inside/get-customs-param-checkProperty)

---
## 单据
### [根据ID获取单据详情(可返回关联数据)--(电子档案专用)](/docs/open-api/inside/get-forms-details-linkdeData-byId)
### [根据ID获取单据详情(可返回关联数据)(新)--(电子档案专用)](/docs/open-api/inside/get-forms-details-linkdeData-byId-new)

---
## 发票
### [获取浙里办票平台发票数据](/docs/open-api/inside/get-invoice-ZLBP-list)
### [获取发票xml原件链接地址](/docs/open-api/inside/get-invoice-xmlUrl)

---
## 业务对象
### [根据业务对象ID获取业务对象实体](/docs/open-api/inside/get-entity-byId)
### [获取业务对象台账字段](/docs/open-api/inside/get-entity-ledgerConfig)
### [创建业务对象台账字段](/docs/open-api/inside/inside-createLedger)
### [获取业务对象台账数据(自动化专用)](/docs/open-api/inside/get-entity-ledger)
### [获取业务对象实例列表(条件查询)--(自动化专用)](/docs/open-api/inside/get-entity-object-searchAnslysis)
### [获取业务对象实例列表(排序)--(自动化专用)](/docs/open-api/inside/get-entity-object-search-order)
### [获取【行程管理/订单管理】业务对象数据](/docs/open-api/inside/get-entity-travelManager)

---
## 基础数据
### [根据ID查询城市信息](/docs/open-api/basedata/get-basedata-cityById)
### [根据单据编号查询CBS7银行信息](/docs/open-api/inside/get-cbs7-byCode)

---
## 工具接口
### [处理EAI插件拉取不到单据最终态问题(已完成、单据当前状态)](/docs/open-api/inside/flowDetails-stuckFlow)
### [处理EAI插件拉取不到单据中间态问题(待支付、支付中)](/docs/open-api/inside/setDataBase)
### [新增或更新企微单点原生授权配置信息(易桥专用)](/docs/open-api/inside/create-yibridge-byqyweixin)

---
## 对外接口更新（暂不公布）

:::tip
- [新增或更新业务对象数据](/docs/open-api/datalink/update-entity-data)
  - [**1.6.3**](/updateLog/update-log#163) 
    - 业务对象、业务对象（多选）类型字段支持 `code` 传参。 —— @邓加昌
  
- [修改员工信息](/docs/open-api/contacts/update-staffs) 
  - [**1.10.0**](/updateLog/update-log#1100) 
    - 支持非原生环境使用，需要研发添加 `redis` 白名单。 —— @郭敏

- [创建单据](/docs/open-api/flows/creat-and-save)
  - [**2.0.0**](/updateLog/update-log#200) 
    - **Query Parameters** 增加 `needDetailId `（是否自定义明细ID，默认为 `false`）参数，为 `true` 时支持调用方传明细ID。 —— @郑永欠
    - 新增了支持 **提交人联动赋值**，全局开关，默认关闭。 —— @苏强

- [外部服务回调审批](/docs/open-api/outbound-message/outbound-callback)
  - 2022年11月28日上线该参数，`ebotNodeOnly`（是否仅审批EBot节点，默认为 `false`）为 `true` 时可审批人工节点（仅支持 `action` = `accept` 的同意动作），为 `false` 时仅审批EBot节点。

:::

---

