---
slug: info
title: 概述
authors: [冯继成]
---

# 开始使用内部接口

本模块提供内部接口目录，便于查看内部接口。

---
## 企业通讯录
### [修改员工工号(全环境)](/docs/open-api/corporation/update-staffs-code)

---
## 通讯录同步
### [修改员工登录手机号](/docs/open-api/inside/update-staffs-phone)

---
## 单据模板
### [查询全局字段是否存在](/docs/open-api/inside/get-customs-param-checkProperty)

---
## 单据
### [根据ID获取单据详情(可返回关联数据)](/docs/open-api/inside/get-forms-details-linkdeData-byId)
### [根据ID获取单据详情(可返回关联数据)(新)](/docs/open-api/inside/get-forms-details-linkdeData-byId-new)

---
## 业务对象
### [创建业务对象台账](/docs/open-api/inside/inside-createLedger)
### [获取业务对象台账](/docs/open-api/inside/get-entity-leader)
### [获取业务对象实例信息(自定义字段)](/docs/open-api/inside/get-entity-object-searchAnslysis)

---
## 工具接口
### [处理EAI插件拉取不到单据最终态问题（已完成、单据当前状态）](/docs/open-api/inside/flowDetails-stuckFlow) 

### [处理EAI插件拉取不到单据中间态问题（待支付、支付中）](/docs/open-api/inside/setDataBase)

---
## 对外接口更新（暂不公布）

:::tip
- [新增或更新业务对象数据](/docs/open-api/datalink/update-entity-data)
  - [**1.6.3**](/docs/open-api/notice/update-log#163) 版本，业务对象、业务对象（多选）类型字段支持 `code` 传参。
- [修改员工信息](/docs/open-api/contacts/update-staffs) 
  - [**1.10.0**](/docs/open-api/notice/update-log#1100) 版本，支持非原生环境使用，需要研发添加 `redis` 的白名单。

:::

---

