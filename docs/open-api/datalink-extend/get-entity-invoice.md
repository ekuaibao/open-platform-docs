# 获取发票主体信息

获取单据上的发票主体信息。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/INVOICE/object/`objectId`/search"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **objectId** | String | 发票类型 | 必填 | - | [见下面的发票类型表格](/docs/open-api/datalink-extend/get-entity-invoice#objectid发票类型) | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters（Body不能为空）

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注                                                                                                 |
| :--- | :--- | :--- | :--- |:--- |:---------------------------------------------------------------------------------------------------|
| **ids**   | Array  |  业务对象实例ID数组   | 非必填 | - | 通过 [根据单据编号或ID查询发票ID和明细ID](/docs/open-api/datalink-extend/get-flow-invoice) 获取<br/>发票实体保存在系统预置业务对象里 |
| **codes** | Array  |  业务对象实例CODE数组 | 非必填 | - | 按照业务对象实例的CODE查询详情<br/>发票实体保存在系统预置业务对象里<br/>格式：`发票代码:发票号码`（全电票没有发票代码）                               |
| **index** | Number |  开始索引           | 非必填 | - | 从 `1` 开始，不可为 `0`                                                                                   |
| **count** | Number |  查询数             | 非必填 | - | 每页查询数据量，最大不能超过 `100`                                                                               |

:::tip
- 业务对象实例ID（即发票ID）可以通过[获取单据详情](/docs/open-api/flows/get-forms-details)接口或[根据单据编号或ID查询发票ID和明细ID](/docs/open-api/datalink-extend/get-flow-invoice)接口获取。
- 参数优先级 `ids` > `codes` > `index` 和 `count` ，多组参数均传值时，按优先级最高的开始生效。
- `ids` 、 `codes` 参数，可以为空：`[]`，但是不可传`[null]`，否则会报错。
- `ids` 、 `codes` 参数，接口没有校验参数是否在系统中存在，获取不到数据时，请检查参数的准确性。
- `ids` 、 `codes` 不填时， `index` 和 `count` 两个参数必填，只要传了 `index` 和 `count` 参数，成功响应中的 **“count”** 表示总数。
- `index` 和 `count` 不填时， `ids` 或 `codes` 参数必填，任意填写其一时，成功响应中的 **“count”** 表示有效参数量，而非总数。
:::


### 发票类型(`objectId`)
可通过 [根据单据编号或ID查询发票ID和明细ID](/docs/open-api/datalink-extend/get-flow-invoice) 接口得到的 `invoiceType` 参数确定

| objectId               | 发票类型                                                                                    | 
|:-----------------------|:----------------------------------------------------------------------------------------|
| **invoice**            | 发票（详见 [发票类别](/docs/open-api/datalink-extend/get-entity-invoice#发票类别e_system_发票主体_发票类别)） |
| **other**              | 其他发票                                                                                    |
| **taxi**               | 出租车票                                                                                    |
| **fixed**              | 定额发票                                                                                    |
| **passengerCar**       | 客运汽车票                                                                                   |
| **machinePrint**       | 机打发票（机打电子发票、机打纸质发票）                                                                     |
| **shopping**           | 消费小票                                                                                    |
| **train**              | 铁路客票（火车票）                                                                               |
| **flightItinerary**    | 航空运输电子客票行程单                                                                             |
| **tolls**              | 过路费发票                                                                                   |
| **medical**            | 医疗发票（医疗电子发票、医疗纸质发票）                                                                     |
| **noTaxIncome**        | 财政票据（非税收入通用票据、非税收入一般缴款书、其他财政票据）                                                         |

### 发票类别(`E_system_发票主体_发票类别`)

:::tip
- `E_system_发票主体_发票类别` 是对 `invoice` 类型获取到的发票做补充解释
- **非增值税发票** 无法保存发票明细信息
:::

| 字段名                      | 对应发票类型          |
|:-------------------------|:----------------|
| **FULL_DIGITAl_NORMAL**       | 电子发票（普通发票）      |
| **FULL_DIGITAl_SPECIAL**      | 电子发票（增值税专用发票）   |
| **FULL_DIGITAl_PAPER**        | 全电纸质发票（增值税专用发票） |
| **FULL_DIGITAl_PAPER_NORMAL** | 全电纸质发票（增值税普通发票） |
| **DIGITAL_NORMAL**            | 增值税电子普通发票       |
| **DIGITAL_SPECIAL**           | 增值税电子专用发票       |
| **PAPER_NORMAL**              | 增值税普通发票         |
| **PAPER_ROLL**                | 增值税普通发票（卷式）     |
| **PAPER_SPECIAL**             | 增值税专用发票         |
| **PAPER_CAR**                 | 机动车销售统一发票       |
| **SECOND_CAR**                | 二手车销售统一发票       |
| **PAPER_FEE**                 | 通行费发票           |
| **BLOCK_CHAIN**               | 区块链电子发票         |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/INVOICE/object/invoice/search?accessToken=ID_3tm4Nah54dg:djg8LshfUkfM00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ids":["djg8LshfUkfM00:044031900111:69872971"],  //发票ID
    "codes":[],  
    "index":1,
    "count":10
}'
```

## 成功响应

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="invoice" label="invoice" default>

```json
{
    "count": 1,
    "items": [
        {
            "id": "djg8LshfUkfM00:044032100111:13415524",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_税额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_是否抵扣": false,
            "E_不计税金额": {
                "standard": "171.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_收票状态": "RECEIVE",
            "E_system_发票主体_PDF": null,
            "E_system_发票主体_code": "044032100111",
            "E_system_发票主体_name": "13415524",
            "E_system_发票主体_cardId": null,
            "E_system_发票主体_图片": "8月通讯费-1702629763512-970.pdf",
            "E_system_发票主体_备注": "业务号码:18620393295;账期:202208",
            "E_system_发票主体_方向": 0.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_发票主体_税额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_验真": true,
            "E_system_发票主体_验签": false,
            "E_system_发票主体_复核人": "向滔",
            "E_system_发票主体_开票人": "吴宏东",
            "E_system_发票主体_收款人": "李明慧",
            "E_system_发票主体_校验码": "732843",
            "E_system_发票主体_ifNormOpen": true,
            "E_system_发票主体_encryptCode": null,
            "E_system_发票主体_价税合计": {
                "standard": "171.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_发票代码": "044032100111",
            "E_system_发票主体_发票号码": "13415524",
            "E_system_发票主体_发票日期": 1662652800000,
            "E_system_发票主体_发票类别": "DIGITAL_NORMAL",
            "E_system_发票主体_发票金额": {
                "standard": "171.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_识别范围": [
                0.0,
                0.0,
                2000.0,
                1271.0
            ],
            "E_system_票据来源_sourceEntityId": "ID01vmWYuiSUaq",
            "E_system_发票主体_购买方名称": "北京合思信息技术有限公司",
            "E_system_发票主体_销售方名称": "中国联合网络通信有限公司深圳市分公司",
            "E_system_发票主体_发票印刷号码": "",
            "E_system_发票主体_是否有发票原件": true,
            "E_system_发票主体_购买方地址电话": "",
            "E_system_发票主体_销售方地址电话": "深圳市福田区深南大道4005号联通大厦,10010",
            "E_system_发票主体_购买方开户行及账号": "",
            "E_system_发票主体_购买方纳税人识别号": "91110108318283928K",
            "E_system_发票主体_销售方开户行及账号": "招商银行深圳福田支行 813581938310002",
            "E_system_发票主体_销售方纳税人识别号": "91440300892254961D",
            "active": false,  //发票主体是否已使用 true：未使用（爱发票、微信卡包、支付宝卡包） false：已使用（绑定了单据或者随手记）
            "updateTime": 1702629999615,
            "createTime": 1702629769082,
            "entityId": "system_发票主体",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 2,
                "active": true,  //表示发票主体所保存在的那个业务对象的停启用状态  true：启用  false：停用
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "发票主体",
                "nameSpell": "FAPIAOZHUTI",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_发票主体_销售方地址电话",
                        "label": "销售方地址电话",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_是否有发票原件",
                        "label": "是否有发票原件",
                        "type": "switcher",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票主体_购买方地址电话",
                        "label": "购买方地址电话",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_购买方开户行及账号",
                        "label": "购买方开户行及账号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_验签",
                        "label": "验签开关",
                        "type": "switcher",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票主体_验真",
                        "label": "开关",
                        "type": "switcher",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_收票状态",
                        "label": "收票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_税额",
                        "label": "可抵扣税额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票主体_name",
                        "label": "名称",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_code",
                        "label": "编码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_发票代码",
                        "label": "发票代码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_发票号码",
                        "label": "发票号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_发票日期",
                        "label": "发票日期",
                        "type": "date",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_发票主体_购买方名称",
                        "label": "购买方名称",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_购买方纳税人识别号",
                        "label": "购买方纳税人识别号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_发票金额",
                        "label": "发票金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票主体_税额",
                        "label": "税额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票主体_价税合计",
                        "label": "价税合计",
                        "type": "money",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票主体_销售方名称",
                        "label": "销售方名称",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_销售方纳税人识别号",
                        "label": "销售方纳税人识别号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_销售方开户行及账号",
                        "label": "销售方开户行及账号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_备注",
                        "label": "备注",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_发票类别",
                        "label": "发票类别",
                        "type": "text",
                        "source": "dataLink",
                        "optional": false,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_不计税金额",
                        "label": "不计税金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_税率",
                        "label": "税率",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_编号",
                        "label": "编号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_进销项标识",
                        "label": "进销项标识",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_发票状态",
                        "label": "发票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_发票主体",
                "platformId": "system_发票平台",
                "details": [
                    "system_发票明细"
                ],
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [
                    "excel",
                    "api"
                ],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23001249",
                "state": "approving",
                "title": "校验测试",
                "payeeId": "ID01ofdmgQHGaP",
                "payMoney": {
                    "standard": "117354.32",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1702629998692,
                "description": "",
                "expenseDate": 1702569600000,
                "submitterId": "djg8LshfUkfM00:ID01ojZ2n2e0PR",
                "expenseMoney": {
                    "standard": "117354.32",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "rejectionNum": "0",
                "reviewStatus": "ALL",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "onlyOwnerPrint": false,
                "specificationId": "ID01kevMNRa7Ib:a6aaa829961bab978f43d13b438419931f08b668",
                "writtenOffMoney": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "u_档案测试wy": "ID_3wPyOBMYex0",
                "u_部门测试wy": "djg8LshfUkfM00:hlS3ynoY432rBM",
                "expenseDepartment": "djg8LshfUkfM00",
                "voucherCreateTime": 0,
                "preApprovedNodeName": "提交人",
                "preNodeApprovedTime": 1702630003275,
                "ownerAndApproverPrintNodeFlag": false
            },
            "flowId": "ID01vmXWPHarK6"
        }
    ]
}
```
</TabItem>
<TabItem value="other" label="other">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01tN3JL0a3LN",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_税率": "0",
            "E_税额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_是否抵扣": false,
            "E_不计税金额": {
                "standard": "10.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_其他_日期": 1694880000000,
            "E_system_其他_金额": {
                "standard": "10.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_图片": "过路费-1697533250697-90.pdf",
            "E_system_发票主体_方向": 0.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_发票主体_验签": true,
            "E_system_发票主体_识别范围": [
                0.0,
                0.0,
                2000.0,
                1338.0
            ],
            "E_system_票据来源_sourceEntityId": "ID01tN3JL09YHZ",
            "E_system_发票主体_是否有发票原件": true,
            "active": false,
            "updateTime": 1697533265800,
            "createTime": 1697533253949,
            "entityId": "system_其他",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 2,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "其他",
                "nameSpell": "QITA",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_税率",
                        "label": "税率",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_收票状态",
                        "label": "收票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_税额",
                        "label": "可抵扣税额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_票据来源_sourceEntityId",
                        "label": "sourceEntityId",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_识别范围",
                        "label": "识别范围",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_图片",
                        "label": "图片",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_其他_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_其他_日期",
                        "label": "日期",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_其他",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [
                    "excel",
                    "api"
                ],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B22002154",
                "state": "rejected",
                "title": "测试2",
                "payeeId": "ID_3gUd$hcfAcQ",
                "payMoney": {
                    "standard": "625404.80",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "u_Z开关": true,
                "u_Z整数": "1",
                "u_Z文本": "",
                "u_Z日期": 1669824000000,
                "u_Z部门": "djg8LshfUkfM00:ID_3nFqq7r6mHg",
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1697533265448,
                "description": "",
                "expenseDate": 1671033600000,
                "submitterId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                "u_天数ZYY": "233.0",
                "expenseMoney": {
                    "standard": "625404.80",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "rejectionNum": "2",
                "reviewStatus": "PART",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "specificationId": "ID_3FBPgmNLdB0:3d825adfc568e99398ffa7a6ef45da11764509c7",
                "u_Z发票枚举": "NoTaxIncomeInvoice",
                "u_Z日期范围": {
                    "end": 1669824000000,
                    "start": 1669824000000
                },
                "u_Z枚举火车": "DW",
                "u_Z枚举航班": "FIRST",
                "u_Z枚举轮船": "SI",
                "u_Z法人实体": "ID01k7vJdRfL9J",
                "writtenOffMoney": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "expenseDepartment": "djg8LshfUkfM00",
                "voucherCreateTime": 0,
                "u_Z枚举纳税人": "SmallScaleTaxpayer"
            },
            "flowId": "ID01lCQBeif4PZ"
        }
    ]
}
```
</TabItem>
<TabItem value="taxi" label="taxi">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01t7pX8ylwkL",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_system_发票主体_OFD": null,
            "E_system_发票主体_PDF": null,
            "E_system_出租车票_城市": "宁波市",
            "E_system_出租车票_省份": "浙江省",
            "E_system_出租车票_里程": "32.9",
            "E_system_出租车票_金额": {
                "standard": "15.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_图片": "%E6%AD%A3%E5%B8%B81-1692860236227-673-1695365566591-372.jpg",
            "E_system_发票主体_方向": 90.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_出租车票_上车时间": 1679377200000,
            "E_system_出租车票_下车时间": 1679380140000,
            "E_system_出租车票_发票代码": "133022034001",
            "E_system_出租车票_发票号码": "19777479",
            "E_system_出租车票_消费类型": "交通",
            "E_system_出租车票_车牌号码": "B·T6823",
            "E_system_发票主体_识别范围": [
                0.0,
                0.0,
                3024.0,
                1247.0
            ],
            "E_system_票据来源_sourceEntityId": "ID01t7pX8ylw4f",
            "E_system_出租车票_发票所在地": "浙江省宁波市",
            "active": false,
            "updateTime": 1695365577476,
            "createTime": 1695365572661,
            "entityId": "system_出租车票",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 2,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "出租车票",
                "nameSpell": "CHUZUCHEPIAO",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_出租车票_车牌号码",
                        "label": "车牌号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_收票状态",
                        "label": "收票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_票据来源_sourceEntityId",
                        "label": "sourceEntityId",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_识别范围",
                        "label": "识别范围",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_图片",
                        "label": "图片",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_出租车票_发票代码",
                        "label": "发票代码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_出租车票_发票号码",
                        "label": "发票号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_出租车票_上车时间",
                        "label": "上车时间",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_出租车票_下车时间",
                        "label": "下车时间",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_出租车票_里程",
                        "label": "里程",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_出租车票_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_出租车票_发票所在地",
                        "label": "发票所在地",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_出租车票_消费类型",
                        "label": "消费类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_出租车票",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [
                    "excel",
                    "api"
                ],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23001131",
                "state": "approving",
                "title": "补充发票发票金额测试",
                "payeeId": "ID01qMYV3HLQ4v",
                "payMoney": {
                    "standard": "13440.27",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1695365377285,
                "description": "",
                "expenseDate": 1695312000000,
                "noTaxAmount": {
                    "standard": "1",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "submitterId": "djg8LshfUkfM00:fC0b0AI0tomg00",
                "expenseMoney": {
                    "standard": "13440.27",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "rejectionNum": "0",
                "reviewStatus": "NONE",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "onlyOwnerPrint": false,
                "specificationId": "ID01t6lbQxnvYz:21d80130ea0067f40cd71fe2ab2e962d2d738d7a",
                "writtenOffMoney": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "expenseDepartment": "djg8LshfUkfM00:ID_3uAfWoiclug",
                "voucherCreateTime": 0,
                "preApprovedNodeName": "提交人",
                "preNodeApprovedTime": 1695365381752,
                "u_实际补贴金额": {
                    "standard": "1",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "ownerAndApproverPrintNodeFlag": false
            },
            "flowId": "ID01t7nThulgaX"
        }
    ]
}
```
</TabItem>
<TabItem value="fixed" label="fixed">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01ry1IQSSacL",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_system_发票主体_OFD": null,
            "E_system_发票主体_PDF": null,
            "E_system_发票主体_图片": "_thumb_64023-副本-1690295988986-699.png",
            "E_system_发票主体_方向": 0,
            "E_system_发票主体_来源": "OCR",
            "E_system_定额发票_号码": "00053373",
            "E_system_定额发票_金额": {
                "standard": "1",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_识别范围": [
                0,
                0,
                200,
                150
            ],
            "E_system_定额发票_发票代码": "15101138J003",
            "E_system_定额发票_消费类型": "交通",
            "E_system_票据来源_sourceEntityId": "ID01ry1IQSS9Wf",
            "active": false,
            "updateTime": 1690296063096,
            "createTime": 1690295991469,
            "entityId": "system_定额发票",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 1,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "定额发票",
                "nameSpell": "DINGEFAPIAO",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_收票状态",
                        "label": "收票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_票据来源_sourceEntityId",
                        "label": "sourceEntityId",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_识别范围",
                        "label": "识别范围",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_图片",
                        "label": "图片",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_定额发票_发票代码",
                        "label": "发票代码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_定额发票_号码",
                        "label": "号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_定额发票_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_定额发票_消费类型",
                        "label": "消费类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_定额发票",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23000968",
                "state": "approving",
                "title": "分组测试11",
                "payeeId": "ID_3uTr9EypiW0",
                "payMoney": {
                    "standard": "261.80",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1690296060628,
                "description": "",
                "expenseDate": 1690214400000,
                "submitterId": "djg8LshfUkfM00:01kbVpDiu0qQ00",
                "expenseMoney": {
                    "standard": "261.80",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "reviewStatus": "NONE",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "onlyOwnerPrint": false,
                "specificationId": "ID_3A0$4Yitgy0:96797ae2daf50a51dfd1e58fcc24f4bed5f43f0a",
                "writtenOffMoney": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "expenseDepartment": "djg8LshfUkfM00:ID01oOe4qViWDB",
                "voucherCreateTime": 0,
                "preNodeApprovedTime": 1690296064080,
                "ownerAndApproverPrintNodeFlag": false
            },
            "flowId": "ID01ry1IQSTjB5"
        }
    ]
}
```
</TabItem>
<TabItem value="passengerCar" label="passengerCar">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01sjCK7t9r7p",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_税率": "0",
            "E_税额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_是否抵扣": false,
            "E_不计税金额": {
                "standard": "77.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_OFD": null,
            "E_system_发票主体_PDF": null,
            "E_system_发票主体_图片": "4-1692773541668-833.png",
            "E_system_发票主体_方向": 0.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_发票主体_识别范围": [
                0.0,
                0.0,
                824.0,
                564.0
            ],
            "E_system_客运汽车发票_姓名": "李*莹",
            "E_system_客运汽车发票_时间": 1692720000000,
            "E_system_客运汽车发票_金额": {
                "standard": "77.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_票据来源_sourceEntityId": "ID01sjCK7t9qAn",
            "E_system_客运汽车发票_出发车站": "沈阳",
            "E_system_客运汽车发票_发票代码": "121001871113",
            "E_system_客运汽车发票_发票号码": "03720884",
            "E_system_客运汽车发票_消费类型": "交通",
            "E_system_客运汽车发票_达到车站": "梅河口",
            "active": false,
            "updateTime": 1692773593172,
            "createTime": 1692773544742,
            "entityId": "system_客运汽车发票",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 1,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "客运汽车发票",
                "nameSpell": "KEYUNQICHEFAPIAO",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_收票状态",
                        "label": "收票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_票据来源_sourceEntityId",
                        "label": "sourceEntityId",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_识别范围",
                        "label": "识别范围",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_图片",
                        "label": "图片",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_客运汽车发票_发票代码",
                        "label": "发票代码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_客运汽车发票_发票号码",
                        "label": "发票号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_客运汽车发票_时间",
                        "label": "时间",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_客运汽车发票_出发车站",
                        "label": "出发车站",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_客运汽车发票_达到车站",
                        "label": "达到车站",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_客运汽车发票_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_客运汽车发票_姓名",
                        "label": "姓名",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_客运汽车发票_消费类型",
                        "label": "消费类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_税额",
                        "label": "可抵扣税额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_是否抵扣",
                        "label": "是否抵扣",
                        "type": "switcher",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_不计税金额",
                        "label": "不计税金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_税率",
                        "label": "税率",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_客运汽车发票",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23001049",
                "state": "approving",
                "title": "测试复核11",
                "payeeId": "ID01nuMQww5EOH",
                "payMoney": {
                    "standard": "11376.20",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1692773591677,
                "description": "",
                "expenseDate": 1692720000000,
                "submitterId": "djg8LshfUkfM00:ID_3ruBvlxx7m0",
                "expenseMoney": {
                    "standard": "11376.20",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "rejectionNum": "0",
                "reviewStatus": "NONE",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "onlyOwnerPrint": false,
                "specificationId": "ID01mNKcdZLNbF:9ad0d1e66d6df63bfee3531717c9be0909b24094",
                "writtenOffMoney": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "expenseDepartment": "djg8LshfUkfM00:ID01mW9MdufWyP",
                "voucherCreateTime": 0,
                "preApprovedNodeName": "提交人",
                "preNodeApprovedTime": 1692794199043,
                "ownerAndApproverPrintNodeFlag": false
            },
            "flowId": "ID01sjCJdrZw6j"
        }
    ]
}
```
</TabItem>
<TabItem value="machinePrint" label="machinePrint">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01s0ghjNSZjx",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_税率": "0",
            "E_税额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_是否抵扣": false,
            "E_不计税金额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_收票状态": "NORECEIVE",
            "E_system_发票主体_OFD": null,
            "E_system_发票主体_PDF": null,
            "E_system_发票主体_图片": "北京电子-1691765820428-902.png",
            "E_system_发票主体_方向": 0.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_机打发票_时间": 1690473600000,
            "E_system_机打发票_税额": {
                "standard": "1.36",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_机打发票_金额": {
                "standard": "16.50",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_机打发票_校验码": "52845648446867110267",
            "E_system_发票主体_ifNormOpen": true,
            "E_system_发票主体_识别范围": [
                0.0,
                0.0,
                1218.0,
                731.0
            ],
            "E_system_机打发票_发票代码": "111002009110",
            "E_system_机打发票_发票号码": "00024327",
            "E_system_机打发票_发票种类": "机打电子发票",
            "E_system_机打发票_所属城市": "",
            "E_system_机打发票_所属省份": "北京市",
            "E_system_票据来源_sourceEntityId": "ID01s0ghjNSYMv",
            "E_system_机打发票_是否有印章": 1,
            "E_system_机打发票_购买方名称": "麒麟软件有限公司",
            "E_system_机打发票_购买方税号": "91120116300669769Q",
            "E_system_机打发票_销售方名称": "北京北投静态交通投资运营有限责任公司",
            "E_system_机打发票_销售方税号": "91110112MA01F1G98X",
            "E_system_发票主体_是否有发票原件": false,
            "active": false,
            "updateTime": 1691765864367,
            "createTime": 1691765830190,
            "entityId": "system_机打发票",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 1,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "机打发票",
                "nameSpell": "JIDAFAPIAO",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_机打发票_发票种类",
                        "label": "发票种类",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_是否有发票原件",
                        "label": "是否有发票原件",
                        "type": "switcher",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_收票状态",
                        "label": "收票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_票据来源_sourceEntityId",
                        "label": "sourceEntityId",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_识别范围",
                        "label": "识别范围",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_图片",
                        "label": "图片",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_发票代码",
                        "label": "发票代码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_发票号码",
                        "label": "发票号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_时间",
                        "label": "时间",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_机打发票_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_机打发票_校验码",
                        "label": "校验码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_销售方名称",
                        "label": "销售方名称",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_销售方税号",
                        "label": "销售方税号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_购买方名称",
                        "label": "购买方名称",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_购买方税号",
                        "label": "购买方税号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_是否有印章",
                        "label": "是否有印章",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_所属省份",
                        "label": "所属省份",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_所属城市",
                        "label": "所属城市",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_税额",
                        "label": "可抵扣税额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_是否抵扣",
                        "label": "是否抵扣",
                        "type": "switcher",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_不计税金额",
                        "label": "不计税金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_税率",
                        "label": "税率",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_机打发票_税额",
                        "label": "税额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_机打发票",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23001027",
                "state": "draft",
                "title": "",
                "payMoney": {
                    "standard": "1266.50",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1691765864088,
                "description": "",
                "expenseDate": 1691683200000,
                "submitterId": "djg8LshfUkfM00:5mAaWF-w983s00",
                "expenseMoney": {
                    "standard": "1266.50",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "rejectionNum": "0",
                "reviewStatus": "NONE",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "specificationId": "ID01rzr4hcZjLV:f3b9b395021a874bcb4387d5539caf30625029d2",
                "writtenOffMoney": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "expenseDepartment": "djg8LshfUkfM00:GfEaWlxbwUj000",
                "voucherCreateTime": 0
            },
            "flowId": "ID01s0g8MHhExV"
        }
    ]
}
```
</TabItem>
<TabItem value="shopping" label="shopping">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01qBMNxDGFk3",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_system_发票主体_OFD": null,
            "E_system_发票主体_PDF": null,
            "E_system_发票主体_图片": "截屏2023-06-2009.43.30-1687263974676-578.png",
            "E_system_发票主体_方向": 0.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_消费小票_小计": {
                "standard": "100.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_消费小票_小费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_消费小票_币种": "",
            "E_system_消费小票_店名": "",
            "E_system_消费小票_折扣": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_消费小票_时间": 1687190400000,
            "E_system_消费小票_税费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_消费小票_金额": {
                "standard": "100.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_识别范围": [
                0.0,
                0.0,
                925.0,
                502.0
            ],
            "E_system_消费小票_消费类型": "Other",
            "E_system_票据来源_sourceEntityId": "ID01qBMNxDGEN1",
            "active": false,
            "updateTime": 1691488760596,
            "createTime": 1687264021979,
            "entityId": "system_消费小票",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 1,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "消费小票",
                "nameSpell": "CHUZUCHEPIAO",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_票据来源_sourceEntityId",
                        "label": "sourceEntityId",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_识别范围",
                        "label": "识别范围",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_图片",
                        "label": "图片",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_消费小票_店名",
                        "label": "店名",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_消费小票_时间",
                        "label": "时间",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_消费小票_小计",
                        "label": "小计",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_消费小票_税费",
                        "label": "税费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_消费小票_折扣",
                        "label": "折扣",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_消费小票_小费",
                        "label": "小费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_消费小票_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_消费小票_消费类型",
                        "label": "消费类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_消费小票",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23001021",
                "state": "paid",
                "title": "3333",
                "payDate": 1691498990723,
                "payPlan": [
                    {
                        "receiptId": [],
                        "dataLinkId": "ID01rUWtu8Ca75",
                        "dataLinkForm": {
                            "E_system_支付计划_支付金额": {
                                "standard": "1610.00",
                                "standardUnit": "元",
                                "standardScale": 2,
                                "standardSymbol": "¥",
                                "standardNumCode": "156",
                                "standardStrCode": "CNY"
                            },
                            "E_system_支付计划_收款信息": "ID01qMYV3HLQ4v"
                        },
                        "dataLinkTemplateId": null
                    }
                ],
                "payeeId": "ID01qMYV3HLQ4v",
                "payMoney": {
                    "standard": "1610.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1691488758986,
                "description": "",
                "expenseDate": 1691424000000,
                "flowEndTime": 1691498992652,
                "submitterId": "djg8LshfUkfM00:ID01qnMg5BcjV5",
                "expenseMoney": {
                    "standard": "1610.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "rejectionNum": "0",
                "reviewStatus": "NONE",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "onlyOwnerPrint": false,
                "paymentChannel": "OFFLINE",
                "specificationId": "ID01pdpVh7czDN:d18e758a0b1237753453b7cf8a94bb24797ae1b6",
                "writtenOffMoney": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "paymentAccountId": "ID01p4zRadPLd5",
                "expenseDepartment": "djg8LshfUkfM00",
                "voucherCreateTime": 0,
                "preApprovedNodeName": "出纳支付",
                "preNodeApprovedTime": 1691498990723,
                "timeToEnterPendingPayment": 1691489775161,
                "ownerAndApproverPrintNodeFlag": false
            },
            "flowId": "ID01rUWtu8Ca75"
        }
    ]
}
```
</TabItem>
<TabItem value="train" label="train">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01v59hQ4er7U",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_是否抵扣": false,
            "E_system_火车票_号码": "B054158",
            "E_system_火车票_车次": "G2563",
            "E_system_火车票_金额": {
                "standard": "443.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_图片": "北京火车票20231120-1701773404703-199.jpg",
            "E_system_发票主体_方向": 0.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_火车票_序列码": "10610310291123B054158",
            "E_system_火车票_上车车站": "北京南",
            "E_system_火车票_下车车站": "合肥南",
            "E_system_火车票_乘车时间": 1700644140000,
            "E_system_火车票_座位类型": "二等座",
            "E_system_火车票_消费类型": "交通",
            "E_system_发票主体_识别范围": [
                116.0,
                108.0,
                851.0,
                575.0
            ],
            "E_system_火车票_乘车人姓名": "高美丽",
            "E_system_票据来源_sourceEntityId": "ID01v59hQ4eqRo",
            "active": false,
            "updateTime": 1701773538303,
            "createTime": 1701773406745,
            "entityId": "system_火车票",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 1,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "铁路客票",
                "nameSpell": "HUOCHEPIAO",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_收票状态",
                        "label": "收票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_票据来源_sourceEntityId",
                        "label": "sourceEntityId",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_识别范围",
                        "label": "识别范围",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_图片",
                        "label": "图片",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_火车票_号码",
                        "label": "车票号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_火车票_乘车时间",
                        "label": "乘车时间",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_火车票_乘车人姓名",
                        "label": "乘车人姓名",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_火车票_上车车站",
                        "label": "上车车站",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_火车票_下车车站",
                        "label": "下车车站",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_火车票_车次",
                        "label": "车次",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_火车票_座位类型",
                        "label": "座位类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_火车票_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_火车票_消费类型",
                        "label": "消费类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_税额",
                        "label": "可抵扣税额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_是否抵扣",
                        "label": "是否抵扣",
                        "type": "switcher",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_不计税金额",
                        "label": "不计税金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_税率",
                        "label": "税率",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_火车票",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23001237",
                "state": "archived",
                "title": "单据发票明细-借款-自定义",
                "payeeId": "ID01ofdmgQHGaP",
                "payMoney": {
                    "standard": "784.97",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1701773535855,
                "description": "",
                "expenseDate": 1701705600000,
                "flowEndTime": 1701773542309,
                "submitterId": "djg8LshfUkfM00:ID01qnQZmVXG2j",
                "expenseMoney": {
                    "standard": "797.97",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "rejectionNum": "0",
                "reviewStatus": "PART",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "onlyOwnerPrint": false,
                "specificationId": "ID01v4jCNZWv7U:132b5a003e3948eebf5c5b7ae02291931a5a28c1",
                "writtenOffMoney": {
                    "standard": "13.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "u_自建应用ID": "ID01ss4G05eAfJ",
                "expenseDepartment": "djg8LshfUkfM00",
                "voucherCreateTime": 0,
                "preApprovedNodeName": "提交人",
                "preNodeApprovedTime": 1701773542303,
                "ownerAndApproverPrintNodeFlag": false
            },
            "flowId": "ID01v5acy0OMCy"
        }
    ]
}
```
</TabItem>
<TabItem value="flightItinerary" label="flightItinerary">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01s0g9CscDmv",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_税率": "0",
            "E_税额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_是否抵扣": false,
            "E_不计税金额": {
                "standard": "1200.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_OFD": null,
            "E_system_发票主体_PDF": null,
            "E_system_发票主体_图片": "机票-1691765585390-926.jpg",
            "E_system_发票主体_方向": 0.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_发票主体_识别范围": [
                0.0,
                0.0,
                1200.0,
                660.0
            ],
            "E_system_票据来源_sourceEntityId": "ID01s0g9CscD5Z",
            "E_system_航空运输电子客票行程单_票价": {
                "standard": "1120.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_税费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_金额": {
                "standard": "1250.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_保险费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_出发站": "T3西安-咸阳",
            "E_system_航空运输电子客票行程单_到达站": "北京-大兴",
            "E_system_航空运输电子客票行程单_航班号": "MU2113",
            "E_system_航空运输电子客票行程单_验证码": "2595",
            "E_system_航空运输电子客票行程单_乘机时间": 1679304600000,
            "E_system_航空运输电子客票行程单_填开单位": "国东商售溪程集有限公司西北分公",
            "E_system_航空运输电子客票行程单_填开日期": 1679241600000,
            "E_system_航空运输电子客票行程单_座位等级": "R",
            "E_system_航空运输电子客票行程单_消费类型": "交通",
            "E_system_航空运输电子客票行程单_身份证号": "142724198910140271",
            "E_system_航空运输电子客票行程单_乘机人姓名": "荆雄",
            "E_system_航空运输电子客票行程单_燃油附加费": {
                "standard": "80.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_民航发展基金": {
                "standard": "50.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_电子客票号码": "7812431511988",
            "E_system_航空运输电子客票行程单_销售单位代号": "SHA166,08677392",
            "active": false,
            "updateTime": 1691765864538,
            "createTime": 1691765597843,
            "entityId": "system_航空运输电子客票行程单",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 1,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "航空运输电子客票行程单",
                "nameSpell": "HANGKONGYUNSHUDIANZIKEPIAOXINGCHENGDAN",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_收票状态",
                        "label": "收票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_票据来源_sourceEntityId",
                        "label": "sourceEntityId",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_识别范围",
                        "label": "识别范围",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_图片",
                        "label": "图片",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_乘机人姓名",
                        "label": "乘机人姓名",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_身份证号",
                        "label": "发票号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_电子客票号码",
                        "label": "电子客票号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_验证码",
                        "label": "验证码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_填开日期",
                        "label": "填开日期",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_销售单位代号",
                        "label": "销售单位代号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_填开单位",
                        "label": "填开单位",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_票价",
                        "label": "票价",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_税费",
                        "label": "税费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_燃油附加费",
                        "label": "燃油附加费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_民航发展基金",
                        "label": "民航发展基金",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_保险费",
                        "label": "保险费",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_出发站",
                        "label": "出发站",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_到达站",
                        "label": "到达站",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_航班号",
                        "label": "航班号",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_乘机时间",
                        "label": "乘机时间",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_座位等级",
                        "label": "座位等级",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_航空运输电子客票行程单_消费类型",
                        "label": "消费类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_税额",
                        "label": "可抵扣税额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_是否抵扣",
                        "label": "是否抵扣",
                        "type": "switcher",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_不计税金额",
                        "label": "不计税金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_税率",
                        "label": "税率",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_航空运输电子客票行程单",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23001027",
                "state": "draft",
                "title": "",
                "payMoney": {
                    "standard": "1266.50",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1691765864088,
                "description": "",
                "expenseDate": 1691683200000,
                "submitterId": "djg8LshfUkfM00:5mAaWF-w983s00",
                "expenseMoney": {
                    "standard": "1266.50",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "rejectionNum": "0",
                "reviewStatus": "NONE",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "specificationId": "ID01rzr4hcZjLV:f3b9b395021a874bcb4387d5539caf30625029d2",
                "writtenOffMoney": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "expenseDepartment": "djg8LshfUkfM00:GfEaWlxbwUj000",
                "voucherCreateTime": 0
            },
            "flowId": "ID01s0g8MHhExV"
        }
    ]
}
```
</TabItem>
<TabItem value="tolls" label="tolls">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01v59mwmc9My",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_是否抵扣": false,
            "E_system_发票主体_图片": "六安车票过路费-1701773404703-99.jpg",
            "E_system_发票主体_方向": 0.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_过路费发票_入口": "",
            "E_system_过路费发票_出口": "合公路资有限责任司",
            "E_system_过路费发票_时间": 1701705600000,
            "E_system_过路费发票_金额": {
                "standard": "10.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_识别范围": [
                901.0,
                58.0,
                1665.0,
                969.0
            ],
            "E_system_票据来源_sourceEntityId": "ID01v59mwmc9w2",
            "E_system_过路费发票_发票代码": "134012371201",
            "E_system_过路费发票_发票号码": "02030479",
            "E_system_过路费发票_消费类型": "交通",
            "active": false,
            "updateTime": 1701773538303,
            "createTime": 1701773406479,
            "entityId": "system_过路费发票",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 2,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "过路费发票",
                "nameSpell": "GUOLUFEIFAPIAO",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_税率",
                        "label": "税率",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_收票状态",
                        "label": "收票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_税额",
                        "label": "可抵扣税额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_票据来源_sourceEntityId",
                        "label": "sourceEntityId",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_识别范围",
                        "label": "识别范围",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_图片",
                        "label": "图片",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_过路费发票_发票代码",
                        "label": "发票代码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_过路费发票_发票号码",
                        "label": "发票号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_过路费发票_时间",
                        "label": "时间",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_过路费发票_入口",
                        "label": "入口",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_过路费发票_出口",
                        "label": "出口",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_过路费发票_金额",
                        "label": "金额",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_过路费发票_消费类型",
                        "label": "消费类型",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_过路费发票",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [
                    "excel",
                    "api"
                ],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23001237",
                "state": "archived",
                "title": "单据发票明细-借款-自定义",
                "payeeId": "ID01ofdmgQHGaP",
                "payMoney": {
                    "standard": "784.97",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1701773535855,
                "description": "",
                "expenseDate": 1701705600000,
                "flowEndTime": 1701773542309,
                "submitterId": "djg8LshfUkfM00:ID01qnQZmVXG2j",
                "expenseMoney": {
                    "standard": "797.97",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "rejectionNum": "0",
                "reviewStatus": "PART",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "onlyOwnerPrint": false,
                "specificationId": "ID01v4jCNZWv7U:132b5a003e3948eebf5c5b7ae02291931a5a28c1",
                "writtenOffMoney": {
                    "standard": "13.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "u_自建应用ID": "ID01ss4G05eAfJ",
                "expenseDepartment": "djg8LshfUkfM00",
                "voucherCreateTime": 0,
                "preApprovedNodeName": "提交人",
                "preNodeApprovedTime": 1701773542303,
                "ownerAndApproverPrintNodeFlag": false
            },
            "flowId": "ID01v5acy0OMCy"
        }
    ]
}
```
</TabItem>
<TabItem value="medical" label="medical">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01ptP27kPF39",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_system_发票主体_OFD": null,
            "E_system_发票主体_PDF": null,
            "E_system_发票主体_图片": "医疗发票-1683621908156-322.PDF",
            "E_system_发票主体_方向": 0.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_医疗发票_交款人": "林逍逸",
            "E_system_医疗发票_校验码": "ac44",
            "E_system_医疗发票_发票种类": "医疗电子发票",
            "E_system_医疗发票_开票日期": 1673798400000,
            "E_system_医疗发票_票据代码": "35060122",
            "E_system_医疗发票_票据号码": "0032247496",
            "E_system_医疗发票_金额合计": {
                "standard": "218.77",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_识别范围": [
                0.0,
                0.0,
                2000.0,
                1338.0
            ],
            "E_system_票据来源_sourceEntityId": "ID01ptP27kPEMD",
            "active": false,
            "updateTime": 1683622004502,
            "createTime": 1683621916153,
            "entityId": "system_医疗发票",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 1,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "医疗发票",
                "nameSpell": "YILIAOFAPIAO",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_医疗发票_发票种类",
                        "label": "发票种类",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": true,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_收票状态",
                        "label": "收票状态",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_票据来源_sourceEntityId",
                        "label": "sourceEntityId",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_识别范围",
                        "label": "识别范围",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_发票主体_图片",
                        "label": "图片",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_医疗发票_票据代码",
                        "label": "票据代码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_医疗发票_票据号码",
                        "label": "票据号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_医疗发票_开票日期",
                        "label": "开票日期",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_医疗发票_金额合计",
                        "label": "金额合计",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_医疗发票_校验码",
                        "label": "校验码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_医疗发票_交款人",
                        "label": "交款人",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_医疗发票",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23000680",
                "state": "approving",
                "title": "1",
                "payeeId": "ID01oMCLEdp2hN",
                "payMoney": {
                    "standard": "218.77",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1683622002710,
                "description": "",
                "expenseDate": 1683561600000,
                "submitterId": "djg8LshfUkfM00:ID_3fPOXUnis24",
                "expenseMoney": {
                    "standard": "218.77",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "reviewStatus": "NONE",
                "E_system_rank": "ID_3jO6Ik87n3I",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "onlyOwnerPrint": false,
                "specificationId": "ID01pn1EC4Jb4z:f583daa6bb5be373f38c84e79cebc9fe1033307f",
                "writtenOffMoney": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "expenseDepartment": "djg8LshfUkfM00",
                "voucherCreateTime": 0,
                "preNodeApprovedTime": 1683622006256,
                "ownerAndApproverPrintNodeFlag": false
            },
            "flowId": "ID01ptOW9F38dN"
        }
    ]
}
```
</TabItem>
<TabItem value="noTaxIncome" label="noTaxIncome">

```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01sH5bQFNkoT",
            "masterId": null,
            "topDate": 0,
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "departmentsIncludeChildren": true,
                "staff": [],
                "department": [],
                "role": []
            },
            "E_system_发票主体_OFD": null,
            "E_system_发票主体_PDF": null,
            "E_system_发票主体_code": "44010223",
            "E_system_发票主体_name": "8008094070",
            "E_system_发票主体_图片": "发票&%%-￥（士大夫『2』【还好】）23咖啡壶特殊字符-1693994644037-477.pdf",
            "E_system_发票主体_方向": 0.0,
            "E_system_发票主体_来源": "OCR",
            "E_system_发票主体_验真": true,
            "E_system_发票主体_发票代码": "44010223",
            "E_system_发票主体_发票号码": "8008094070",
            "E_system_发票主体_识别范围": [
                0.0,
                0.0,
                2000.0,
                1338.0
            ],
            "E_system_票据来源_sourceEntityId": "ID01sH5bQFNjRR",
            "E_system_非税收入类票据_校验码": "7de274",
            "E_system_非税收入类票据_发票种类": "广州开发区水质监测中心",
            "E_system_非税收入类票据_开票日期": 1693238400000,
            "E_system_非税收入类票据_票据代码": "44010223",
            "E_system_非税收入类票据_票据号码": "8008094070",
            "E_system_非税收入类票据_金额合计": {
                "standard": "4161.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "active": false,
            "updateTime": 1693994718690,
            "createTime": 1693994666772,
            "entityId": "system_非税收入类票据",
            "entity": {
                "operateSource": "WRITE",
                "operatorId": null,
                "pipeline": 1,
                "grayver": "",
                "dbVersion": 0,
                "threadId": "",
                "version": 1,
                "active": true,
                "createTime": 1531810588185,
                "updateTime": 1531810588185,
                "name": "财政票据",
                "nameSpell": "FEISHUISHOURULEIPIAOJU",
                "corporationId": "",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "ledgerIds": null,
                "plannedIds": null,
                "parentId": "",
                "code": "",
                "scoped": false,
                "source": "OTHER",
                "multiCurrencyFlag": false,
                "actions": [
                    {
                        "id": "",
                        "name": "修改次数上限",
                        "desc": "业务对象被引用到上限制，超过后自动停用",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "详情",
                        "desc": "点击可查看业务对象字段、台账等信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "编辑",
                        "desc": "点击可编辑业务对象实例数据字段信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    },
                    {
                        "id": "",
                        "name": "更新",
                        "desc": "重算业务对象数据实现下的台账信息",
                        "allowedLayout": [],
                        "type": "DEFAULT",
                        "context": null,
                        "createTime": 0,
                        "active": true,
                        "order": 0,
                        "dataFilter": false,
                        "conditions": []
                    }
                ],
                "importOverrideStrategy": null,
                "visibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "type": "DIMENSION",
                "disableStrategy": "LIMIT_COUNT",
                "maxUsageCount": 1,
                "writtenOffField": null,
                "fields": [
                    {
                        "name": "E_system_非税收入类票据_票据代码",
                        "label": "票据代码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_非税收入类票据_票据号码",
                        "label": "票据号码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_非税收入类票据_校验码",
                        "label": "校验码",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_非税收入类票据_开票日期",
                        "label": "开票日期",
                        "type": "date",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "withTime": false
                    },
                    {
                        "name": "E_system_非税收入类票据_金额合计",
                        "label": "金额合计",
                        "type": "money",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        }
                    },
                    {
                        "name": "E_system_发票主体_来源",
                        "label": "发票导入方式",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    },
                    {
                        "name": "E_system_非税收入类票据_发票类别",
                        "label": "发票类别",
                        "type": "text",
                        "source": "dataLink",
                        "optional": true,
                        "defaultValue": null,
                        "formula": false,
                        "index": false,
                        "systemField": false,
                        "childrenOptional": {},
                        "calculation": {
                            "dependencies": [],
                            "dependenciesBy": [],
                            "order": -1
                        },
                        "regex": ""
                    }
                ],
                "defaultMappingRuleId": null,
                "filterId": null,
                "id": "system_非税收入类票据",
                "platformId": "system_发票平台",
                "details": null,
                "homePageVisibleIds": null,
                "homeVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "exportVisibility": {
                    "fullVisible": false,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "ownerDepts": false,
                "showOnPage": true,
                "importMethod": [],
                "allowRecordLog": false,
                "logFields": [],
                "showBook": false,
                "allowAddSubType": true,
                "dataFilter": false
            },
            "ledgers": [],
            "plans": [],
            "flowForm": {
                "code": "B23001079",
                "state": "approving",
                "title": "非税收发票验问题0906",
                "payeeId": "ID01stJzFhqTzp",
                "payMoney": {
                    "standard": "13133.41",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "voucherNo": "",
                "printCount": "0",
                "printState": "noPrint",
                "submitDate": 1693994717715,
                "description": "",
                "expenseDate": 1693929600000,
                "submitterId": "djg8LshfUkfM00:SgMb0AND7Mjo00",
                "expenseMoney": {
                    "standard": "13133.41",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "rejectionNum": "0",
                "reviewStatus": "PART",
                "voucherStatus": "未生成",
                "companyRealPay": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "onlyOwnerPrint": false,
                "specificationId": "ID01p3p4k8O9pt:c14834ee62b68e2c58eb7d78d9ad5f87d58fc420",
                "writtenOffMoney": {
                    "standard": "0.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "expenseDepartment": "djg8LshfUkfM00:ID_3uAfWoiclug",
                "voucherCreateTime": 0,
                "preApprovedNodeName": "提交人",
                "preNodeApprovedTime": 1693994723561,
                "ownerAndApproverPrintNodeFlag": false
            },
            "flowId": "ID01sH5f5Ui4I7"
        }
    ]
}
```
</TabItem>
</Tabs>

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 不支持的业务对象「xxxxx」 | 请确认 `objectId`（发票类型）是否在提供的列表内 | 
| **400** | - | 查询参数不能为空!!! | 请按照上面TIP注意事项正确传参 | 





