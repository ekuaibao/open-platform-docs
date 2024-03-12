# 获取供应商账户及其品类

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/checking/supplier/account/list"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**2.0.1**](/updateLog/update-log#201)
    - 🆕 新增了本接口。

</div>
</details>

:::caution
- 只可获取到【账单导入方式】为【API写入】的供应商账户
  ![image](images/账单导入方式为API写入.png)
:::
## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v1/checking/supplier/account/list?accessToken=ID01xAMgbEsLLN%3AID01wMzlJ6kcR9'
```

## 成功响应
```json
{
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.201.0.0-prd",
            "dbVersion": 6,
            "threadId": "1507",
            "id": "ID01xAMijokiHd",     //供应商账户Id
            "version": 6,               //版本号
            "active": true,             //是否停用 true:未停用；false:已停用
            "createTime": 1709808882186,    //供应商账户创建时间
            "updateTime": 1709808882186,    //供应商账户更新时间
            "name": "ZGY测试",            //供应商账户名称
            "nameSpell": "ZGYCESHI",        //供应商账户名拼音
            "code": "chailv02",         //供应商账户编码
            "corporationId": "ID01wMzlJ6kcR9",  //企业ID
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "supplierArchiveId": "ID01xx6aAxzIAL",      //供应商Id
            "categoryIds": [                //品类（业务对象实体）列表
                {
                    "id": "ee11f575356f53e523c0",       //品类（业务对象）id
                    "code": "",                         //品类（业务对象）编码
                    "name": "ZGY测试-ZGY测试品类",        //品类（业务对象）名称
                    "type": "NEW_SETTLEMENT",           //类别
                    "active": true,                     //是否启用
                    "fields": [                         //字段列表
                        {
                            "name": "E_ee11f575356f53e523c0_name",  //字段名称，业务对象字段唯一标示
                            "type": "text",             //类型: text文本、date时间、dateRange时间段、number数字、money金额、switcher开关、ref引用类型
                            "index": true,
                            "label": "办公用品名称",      //显示名称，账单写入时的账单抬头
                            "regex": "",
                            "source": "dataLink",
                            "formula": false,
                            "optional": false,          //是否选填
                            "calculation": {
                                "order": 11,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": false,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_ee11f575356f53e523c0_code",
                            "type": "text",
                            "index": true,
                            "label": "编号",
                            "regex": "",
                            "source": "dataLink",
                            "formula": false,
                            "optional": false,
                            "calculation": {
                                "order": 10,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": false,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_ee11f575356f53e523c0_数量",
                            "type": "number",
                            "unit": "",
                            "index": false,
                            "label": "数量",
                            "scale": 0,
                            "source": "dataLink",
                            "formula": false,
                            "optional": false,
                            "calculation": {
                                "order": 9,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": false,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_ee11f575356f53e523c0_单价",
                            "type": "money",
                            "index": false,
                            "label": "单价",
                            "source": "dataLink",
                            "formula": false,
                            "optional": false,
                            "calculation": {
                                "order": 8,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": false,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_ee11f575356f53e523c0_总价",
                            "type": "money",
                            "index": false,
                            "label": "总价",
                            "source": "dataLink",
                            "formula": false,
                            "optional": false,
                            "calculation": {
                                "order": 7,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": false,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_system_checking_settlementAmount",
                            "type": "money",
                            "index": false,
                            "label": "合计",
                            "source": "dataLink",
                            "formula": false,
                            "optional": false,
                            "calculation": {
                                "order": 6,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": true,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_system_checking_travelers",
                            "type": "list",
                            "index": false,
                            "label": "出行人",
                            "source": "dataLink",
                            "formula": false,
                            "elemType": {
                                "type": "ref",
                                "entity": "organization.Staff"
                            },
                            "optional": false,
                            "calculation": {
                                "order": 5,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": true,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_system_checking_requisitionCode",
                            "type": "text",
                            "index": false,
                            "label": "申请单号",
                            "regex": "",
                            "source": "dataLink",
                            "formula": false,
                            "optional": false,
                            "calculation": {
                                "order": 4,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": true,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_system_checking_orderNo",
                            "type": "text",
                            "index": false,
                            "label": "订单号",
                            "regex": "",
                            "source": "dataLink",
                            "formula": false,
                            "optional": false,
                            "calculation": {
                                "order": 3,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": true,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_system_checking_legalEntity",
                            "type": "ref",
                            "index": false,
                            "label": "法人实体",
                            "entity": "basedata.Dimension.法人实体",
                            "source": "dataLink",
                            "formula": false,
                            "optional": true,
                            "calculation": {
                                "order": 2,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": false,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_system_checking_orderStatus",
                            "type": "text",
                            "index": false,
                            "label": "订单执行状态",
                            "regex": "",
                            "source": "dataLink",
                            "formula": false,
                            "optional": false,
                            "calculation": {
                                "order": 1,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": true,
                            "defaultValue": null,
                            "childrenOptional": {}
                        },
                        {
                            "name": "E_system_checking_reconciliationId",
                            "type": "text",
                            "index": false,
                            "label": "对账单ID",
                            "regex": "",
                            "source": "dataLink",
                            "formula": false,
                            "optional": false,
                            "calculation": {
                                "order": 0,
                                "dependencies": [],
                                "dependenciesBy": []
                            },
                            "systemField": true,
                            "defaultValue": null,
                            "childrenOptional": {}
                        }
                    ],
                    "scoped": true,
                    "source": "OTHER",
                    "actions": [
                        {
                            "id": "",
                            "desc": "业务对象被引用到上限制，超过后自动停用",
                            "name": "修改次数上限",
                            "type": "DEFAULT",
                            "order": 0,
                            "active": true,
                            "context": null,
                            "conditions": [],
                            "createTime": 0,
                            "dataFilter": false,
                            "allowedLayout": []
                        },
                        {
                            "id": "",
                            "desc": "点击可查看业务对象字段、台账等信息",
                            "name": "详情",
                            "type": "DEFAULT",
                            "order": 0,
                            "active": true,
                            "context": null,
                            "conditions": [],
                            "createTime": 0,
                            "dataFilter": false,
                            "allowedLayout": []
                        },
                        {
                            "id": "",
                            "desc": "点击可编辑业务对象实例数据字段信息",
                            "name": "编辑",
                            "type": "DEFAULT",
                            "order": 0,
                            "active": true,
                            "context": null,
                            "conditions": [],
                            "createTime": 0,
                            "dataFilter": false,
                            "allowedLayout": []
                        },
                        {
                            "id": "",
                            "desc": "重算业务对象数据实现下的台账信息",
                            "name": "更新",
                            "type": "DEFAULT",
                            "order": 0,
                            "active": true,
                            "context": null,
                            "conditions": [],
                            "createTime": 0,
                            "dataFilter": false,
                            "allowedLayout": []
                        }
                    ],
                    "details": null,
                    "grayver": "9.201.0.0-prd",
                    "version": 2,
                    "filterId": null,
                    "parentId": "",
                    "pipeline": 1,
                    "showBook": false,
                    "threadId": "3250",
                    "dbVersion": 1,
                    "ledgerIds": null,
                    "logFields": [],
                    "nameSpell": "ZGYCESHI-ZGYCESHIPINLEI",
                    "createTime": 1709809666089,
                    "dataFilter": false,
                    "operatorId": "ID01wMzlJ6kcR9:xvq3BT52I2X9IM",
                    "ownerDepts": false,
                    "plannedIds": null,
                    "platformId": "ID01xx6nOx2wWz",
                    "showOnPage": true,
                    "updateTime": 1709809666089,
                    "visibility": {
                        "roles": [],
                        "staffs": [],
                        "departments": [],
                        "fullVisible": false,
                        "departmentsIncludeChildren": true
                    },
                    "importMethod": [
                        "excel",
                        "api"
                    ],
                    "corporationId": "ID01wMzlJ6kcR9",
                    "maxUsageCount": 1,
                    "operateSource": "WRITE",
                    "allowRecordLog": false,
                    "homeVisibility": {
                        "roles": [],
                        "staffs": [],
                        "departments": [],
                        "fullVisible": false,
                        "departmentsIncludeChildren": true
                    },
                    "allowAddSubType": true,
                    "disableStrategy": "LIMIT_COUNT",
                    "writtenOffField": null,
                    "exportVisibility": {
                        "roles": [],
                        "staffs": [],
                        "departments": [],
                        "fullVisible": false,
                        "departmentsIncludeChildren": true
                    },
                    "dataCorporationId": null,
                    "multiCurrencyFlag": false,
                    "homePageVisibleIds": null,
                    "sourceCorporationId": null,
                    "defaultMappingRuleId": null,
                    "importOverrideStrategy": null
                }
            ],
            "settlementType": "PRIECHARGE",     //供应商账户类型 CREDIT:授信;PRIECHARGE:预存
            "supplierArchiveType": "TRAVEL_ONE",    //供应商类型 新滴滴:DIDI_NEW,老滴滴:DIDI,其他:OTHER,差旅壹号:TRAVEL_ONE,阿里商旅:ALI_TRIP,大唐商旅:DT_TRIP,携程商旅:XC_TRIP,吉利商旅:GEELY_TRIP,同程商旅:TC_TRIP
            "period": "MONTH",                  //结算周期：WEEK:周,BIWEEKLY:双周,MONTH:月,SEASON:季度,HALFYEAR:半年,YEAR:年,IRREGULAR:不定期
            "creditAmount": {                   //授信额度
                "standard": "0.00",
                "standardStrCode": "CNY",
                "standardNumCode": "156",
                "standardSymbol": "¥",
                "standardUnit": "元",
                "standardScale": "2",
                "rate": null,
                "sysRate": null,
                "foreign": null,
                "foreignStrCode": null,
                "foreignNumCode": null,
                "foreignSymbol": null,
                "foreignUnit": null,
                "foreignScale": null,
                "budget": null,
                "budgetStrCode": null,
                "budgetNumCode": null,
                "budgetSymbol": null,
                "budgetUnit": null,
                "budgetScale": null,
                "budgetRate": null
            },
            "balanceAmount": {                  //剩余可用额度
                "standard": "0.00",
                "standardStrCode": "CNY",
                "standardNumCode": "156",
                "standardSymbol": "¥",
                "standardUnit": "元",
                "standardScale": "2",
                "rate": null,
                "sysRate": null,
                "foreign": null,
                "foreignStrCode": null,
                "foreignNumCode": null,
                "foreignSymbol": null,
                "foreignUnit": null,
                "foreignScale": null,
                "budget": null,
                "budgetStrCode": null,
                "budgetNumCode": null,
                "budgetSymbol": null,
                "budgetUnit": null,
                "budgetScale": null,
                "budgetRate": null
            },
            "billingDay": "1",          //账单日
            "repaymentDay": "25",       //还款日
            "recordedAmount": {         //已入账金额
                "standard": "0.00",
                "standardStrCode": "CNY",
                "standardNumCode": "156",
                "standardSymbol": "¥",
                "standardUnit": "元",
                "standardScale": "2",
                "rate": null,
                "sysRate": null,
                "foreign": null,
                "foreignStrCode": null,
                "foreignNumCode": null,
                "foreignSymbol": null,
                "foreignUnit": null,
                "foreignScale": null,
                "budget": null,
                "budgetStrCode": null,
                "budgetNumCode": null,
                "budgetSymbol": null,
                "budgetUnit": null,
                "budgetScale": null,
                "budgetRate": null
            },
            "unrecordedAmount": {           //未入账金额 
                "standard": "0.00",
                "standardStrCode": "CNY",
                "standardNumCode": "156",
                "standardSymbol": "¥",
                "standardUnit": "元",
                "standardScale": "2",
                "rate": null,
                "sysRate": null,
                "foreign": null,
                "foreignStrCode": null,
                "foreignNumCode": null,
                "foreignSymbol": null,
                "foreignUnit": null,
                "foreignScale": null,
                "budget": null,
                "budgetStrCode": null,
                "budgetNumCode": null,
                "budgetSymbol": null,
                "budgetUnit": null,
                "budgetScale": null,
                "budgetRate": null
            },
            "description": "",          //描述
            "splitRules": [             //拆分规则-发票抬头信息
                {
                    "entityField": "u_对账法人实体",          //法人实体name
                    "entityFieldLabel": "对账法人实体",       //法人实体label
                    "corpPayerInfoId": "ID01wMGGqzv8VF",    //发票抬头ID
                    "legalEntityId": null,                  //法人实体ID
                    "tel": null,                            //电话
                    "receiverName": null,                   //接收人姓名
                    "email": null,                          //邮箱
                    "mailingAddress": null                  //邮寄地址
                }
            ],
            "invoiceTypeInfos": [                   //发票/费用类型信息
                {
                    "feeTypeId": "ID01wMzlJ6kcR9:office",       //费用类型Id
                    "invoiceCategorys": [                       //发票类别
                        "INVOICE",
                        "INVOICE_TAXI"
                    ]
                },
                {
                    "feeTypeId": "ID01xxuEV7oPOn",              //费用类型Id
                    "invoiceCategorys": [                       //发票类别
                        "INVOICE_TRAIN",
                        "INVOICE_ROAD_TOLL"
                    ]
                }
            ],
            "importMethod": "directly",                     //导入方式， directly：API写入
            "billPeriod": null,                             //账期设置， 非必填
            "isReconciliation": true,                       //是否对账
            "isSettlement": true                            //是否结算
        }
    ]
}
```

