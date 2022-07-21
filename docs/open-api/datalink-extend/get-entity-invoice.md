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

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids**   | Array  |  业务对象实例ID数组   | 非必填 | - | 通过 [根据单据编号或ID查询发票ID和明细ID](/docs/open-api/datalink-extend/get-flow-invoice) 获取<br/>发票实体保存在系统预置业务对象里 |
| **codes** | Array  |  业务对象实例CODE数组 | 非必填 | - | 按照业务对象实例的CODE查询详情<br/>发票实体保存在系统预置业务对象里 |
| **index** | Number |  开始索引           | 非必填 | - | 从 `1` 开始，不可为 `0` |
| **count** | Number |  查询数             | 非必填 | - | 每页查询数据量，最大不能超过 `100` |

:::tip
- 业务对象实例ID（即发票ID）可以通过[获取单据详情](/docs/open-api/flows/get-forms-details)接口或[根据单据编号或ID查询发票ID和明细ID](/docs/open-api/datalink-extend/get-flow-invoice)接口获取。
- 参数优先级 `ids` > `codes` > `index` 和 `count` ，多组参数均传值时，按优先级最高的开始生效。
- `ids` 、 `codes` 参数，可以为空：`[]`，但是不可传`[null]`，否则会报错。
- `ids` 、 `codes` 参数，接口没有校验参数是否在系统中存在，获取不到数据时，请检查参数的准确性。
- `ids` 、 `codes` 不填时， `index` 和 `count` 两个参数必填，只要传了 `index` 和 `count` 参数，成功响应中的 **“count”** 表示总数。
- `index` 和 `count` 不填时， `ids` 或 `codes` 参数必填，任意填写其一时，成功响应中的 **“count”** 表示有效参数量，而非总数。
:::


## objectId发票类型
可通过 [根据单据编号或ID查询发票ID和明细ID](/docs/open-api/datalink-extend/get-flow-invoice) 接口得到的 `invoiceType` 参数确定

| objectId | 发票类型 | 
| :--- | :--- |
| **invoice**         | 发票（包含下述 **发票类别**）|
| **other**           | 其他 |
| **taxi**            | 出租车票 |
| **fixed**           | 定额发票 |
| **passengerCar**    | 客运汽车发票 |
| **machinePrint**    | 机打发票 |
| **shopping**        | 消费小票 |
| **train**           | 火车票 |
| **flightItinerary** | 航空运输电子客票行程单 |
| **tolls**           | 过路费发票 |

## 发票类别(E\_system\_发票主体\_发票类别)介绍

:::tip
- `E_system_发票主体_发票类别` 是对 `invoice` 类型获取到的发票做补充解释
- **非增值税发票** 无法保存发票明细信息
:::

| 字段名 | 对应发票类型 |
| :---  | :---      |
| **DIGITAL_NORMAL**  | 增值税电子普票 |
| **DIGITAL_SPECIAL** | 增值税电子专票 |
| **PAPER_NORMAL**    | 增值税纸质普票 |
| **PAPER_SPECIAL**   | 增值税纸质专票 |
| **PAPER_CAR**       | 机动车专用发票 |
| **PAPER_ROLL**      | 卷式发票      |
| **PAPER_FEE**       | 通行费发票    |
| **BLOCK_CHAIN**     | 区块链发票    |
| **SECOND_CAR**      | 二手车发票    |

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
    "count":7,
    "items":[
        {
            "id":"gwobfjObAAno00:011001900711:07977720",
            "useCount":0,
            "totalCount":1,
            "ownerId":null,
            "visibility":{
                "fullVisible":true,
                "staff":[],
                "department":[],
                "role":[]
            },
            "E_税额":{
                "standard":"0.00",
                "standardUnit":"元",
                "standardScale":"2",
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_是否抵扣":true,
            "E_不计税金额":{
                "standard":"13.90",
                "standardUnit":"元",
                "standardScale":"2",
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票主体_PDF":null,
            "E_system_发票主体_code":"011001900711",
            "E_system_发票主体_name":"07977720",
            "E_system_发票主体_cardId":null,
            "E_system_发票主体_备注":"",
            "E_system_发票主体_来源":"UPLOAD",
            "E_system_发票主体_税额":{
                "standard":"0.00",
                "standardUnit":"元",
                "standardScale":"2",
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票主体_验真":true,
            "E_system_发票主体_encryptCode":null,
            "E_system_发票主体_价税合计":{
                "standard":"13.90",
                "standardUnit":"元",
                "standardScale":"2",
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票主体_发票代码":"011001900711",
            "E_system_发票主体_发票号码":"07977720",
            "E_system_发票主体_发票日期":1594828800000,
            "E_system_发票主体_发票类别":"DIGITAL_NORMAL",
            "E_system_发票主体_发票金额":{
                "standard":"13.90",
                "standardUnit":"元",
                "standardScale":"2",
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "E_system_发票主体_购买方名称":"北京腾讯方达制冷设备有限公司",
            "E_system_发票主体_销售方名称":"北京滴滴出行科技有限公司",
            "E_system_发票主体_购买方地址电话":"",
            "E_system_发票主体_购买方开户行及账号":"",
            "E_system_发票主体_购买方纳税人识别号":"91110116348294556H",
            "E_system_发票主体_销售方纳税人识别号":"91110108MA01G0FB09",
            "active":false,   //发票主体是否已使用 true：未使用（爱发票、微信卡包、支付宝卡包） false：已使用（绑定了单据或者随手记）
            "entityId":"system_发票主体",
            "entity":{
                "version":2,
                "active":true,  //表示发票主体所保存在的那个业务对象的停启用状态  true：启用  false：停用
                "createTime":1531810588185,
                "updateTime":1531810588185,
                "name":"发票主体",
                "nameSpell":"FAPIAOZHUTI",
                "code":"",
                "corporationId":"",
                "ledgerIds":null,
                "plannedIds":null,
                "parentId":"",
                "scoped":false,
                "type":"DIMENSION",
                "disableStrategy":"LIMIT_COUNT",
                "maxUsageCount":1,
                "writtenOffField":null,
                "fields":[
                    {
                        "name":"E_system_发票主体_验真",
                        "label":"开关",
                        "type":"switcher",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_收票状态",
                        "label":"收票状态",
                        "type":"text",
                        "source":"dataLink",
                        "optional":true,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_税额",
                        "label":"可抵扣税额",
                        "type":"money",
                        "source":"dataLink",
                        "optional":true,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_name",
                        "label":"名称",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_code",
                        "label":"编码",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_发票代码",
                        "label":"发票代码",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_发票号码",
                        "label":"发票号码",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_发票日期",
                        "label":"发票日期",
                        "type":"date",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        },
                        "withTime":false
                    },
                    {
                        "name":"E_system_发票主体_购买方名称",
                        "label":"购买方名称",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_购买方纳税人识别号",
                        "label":"购买方纳税人识别号",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_发票金额",
                        "label":"发票金额",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_税额",
                        "label":"税额",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_价税合计",
                        "label":"价税合计",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_销售方名称",
                        "label":"销售方名称",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_销售方纳税人识别号",
                        "label":"销售方纳税人识别号",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_来源",
                        "label":"来源",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_备注",
                        "label":"备注",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    },
                    {
                        "name":"E_system_发票主体_发票类别",
                        "label":"发票类别",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":-1
                        }
                    }
                ],
                "defaultMappingRuleId":null,
                "filterId":null,
                "id":"system_发票主体",
                "platformId":"system_发票平台",
                "details":[
                    "system_发票明细"
                ],
                "homePageVisibleIds":null,
                "homeVisibility":{
                    "fullVisible":false,
                    "staffs":null,
                    "roles":null,
                    "departments":null,
                    "departmentsIncludeChildren":true
                },
                "showOnPage":true,
                "importMethod":[
                    "excel",
                    "api"
                ],
                "allowRecordLog":false,
                "logFields":[],
                "allowAddSubType":true
            },
            "ledgers":[],
            "plans":[]
        }
    ]
}
```
</TabItem>
<TabItem value="taxi" label="taxi">

```json
{
    "count": 31,
    "items": [
        {
            "id": "1aQ9OEe5DwpE00",
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "staff": []
            },
            "E_是否抵扣": false,
            "E_system_出租车票_里程": "5.1",
            "E_system_出租车票_金额": {
                "standard": "20.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_图片": "applet-ekb-web2-1569486910464-77-.jpg",
            "E_system_发票主体_方向": 0,
            "E_system_发票主体_来源": "OCR",
            "E_system_出租车票_上车时间": 1567572840000,
            "E_system_出租车票_下车时间": 1567573440000,
            "E_system_出租车票_发票代码": "111001881002",
            "E_system_出租车票_发票号码": "95374220",
            "E_system_出租车票_消费类型": "交通",
            "E_system_发票主体_识别范围": [
                0,
                0,
                3024,
                4032
            ],
            "E_system_票据来源_sourceEntityId": "6wk9OEe5Dwpw00",
            "E_system_出租车票_发票所在地": "北京市",
            "active": true,
            "entityId": "system_出租车票"
        }
    ]
}
```
</TabItem>
<TabItem value="passengerCar" label="passengerCar">

```json
{
    "count": 3,
    "items": [
        {
            "id": "cjM94fu9z0bA00",
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "staff": []
            },
            "E_税率": "3.00",
            "E_税额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_是否抵扣": true,
            "E_不计税金额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_图片": "运单号-1557035037420-727.jpg",
            "E_system_发票主体_来源": "OCR",
            "E_system_发票主体_识别范围": [
                0,
                0,
                1080,
                1440
            ],
            "E_system_客运汽车发票_姓名": "汪线支付",
            "E_system_客运汽车发票_时间": 1556985600000,
            "E_system_客运汽车发票_金额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_票据来源_sourceEntityId": "oWw94fu9z0bs00",
            "E_system_客运汽车发票_出发车站": "5-110",
            "E_system_客运汽车发票_发票代码": "",
            "E_system_客运汽车发票_发票号码": "",
            "E_system_客运汽车发票_消费类型": "交通",
            "E_system_客运汽车发票_达到车站": "5-110",
            "active": false,
            "entityId": "system_客运汽车发票"
        }
    ]
}
```
</TabItem>
<TabItem value="train" label="train">

```json
{
    "count": 50,
    "items": [
        {
            "id": "eng9FeQ-ZgcI00",
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "staff": []
            },
            "E_税率": "9.00",
            "E_税额": {
                "standard": "5.70",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_是否抵扣": true,
            "E_不计税金额": {
                "standard": "63.30",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_火车票_号码": "Z206P068683",
            "E_system_火车票_车次": "D3072",
            "E_system_火车票_金额": {
                "standard": "69.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_图片": "无锡-南京-1566964561809-403.png",
            "E_system_发票主体_方向": 0,
            "E_system_发票主体_来源": "OCR",
            "E_system_火车票_上车车站": "无锡",
            "E_system_火车票_下车车站": "南京南",
            "E_system_火车票_乘车时间": 1560729420000,
            "E_system_火车票_座位类型": "二等座",
            "E_system_火车票_消费类型": "交通",
            "E_system_发票主体_识别范围": [
                0,
                0,
                359,
                270
            ],
            "E_system_火车票_乘车人姓名": "吴林",
            "E_system_票据来源_sourceEntityId": "ZdY9FeQ-ZgcE00",
            "active": true,
            "entityId": "system_火车票"
        }
    ]
}
```
</TabItem>
<TabItem value="flightItinerary" label="flightItinerary">

```json
{
    "count": 24,
    "items": [
        {
            "id": "byk9FBuqtsag00",
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "staff": []
            },
            "E_税率": "9.00",
            "E_税额": {
                "standard": "89.17",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_是否抵扣": true,
            "E_不计税金额": {
                "standard": "990.83",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_图片": "1-1567059449768-71.png",
            "E_system_发票主体_方向": 0,
            "E_system_发票主体_来源": "OCR",
            "E_system_发票主体_识别范围": [
                0,
                0,
                826,
                602
            ],
            "E_system_票据来源_sourceEntityId": "ON49FBuqtsa400",
            "E_system_航空运输电子客票行程单_票价": {
                "standard": "1080.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_税费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_金额": {
                "standard": "1130.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_保险费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_出发站": "2厦门",
            "E_system_航空运输电子客票行程单_到达站": "北京首都",
            "E_system_航空运输电子客票行程单_航班号": "HU7192",
            "E_system_航空运输电子客票行程单_验证码": "4934",
            "E_system_航空运输电子客票行程单_乘机时间": 1564549500000,
            "E_system_航空运输电子客票行程单_填开单位": "阿斯兰航空服务(上海)有限公司",
            "E_system_航空运输电子客票行程单_填开日期": 1564502400000,
            "E_system_航空运输电子客票行程单_座位等级": "P",
            "E_system_航空运输电子客票行程单_消费类型": "交通",
            "E_system_航空运输电子客票行程单_身份证号": "421023198903144161",
            "E_system_航空运输电子客票行程单_乘机人姓名": "襄蓓",
            "E_system_航空运输电子客票行程单_燃油附加费": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_民航发展基金": {
                "standard": "50.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_航空运输电子客票行程单_电子客票号码": "8802197409641",
            "E_system_航空运输电子客票行程单_销售单位代号": "HKK068,08688003",
            "active": true,
            "entityId": "system_航空运输电子客票行程单"
        }
    ]
}
```
</TabItem>
<TabItem value="tolls" label="tolls">

```json
{
    "count": 7,
    "items": [
        {
            "id": "jDY9oT6cz4cE00",
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "staff": []
            },
            "E_是否抵扣": false,
            "E_system_发票主体_图片": "applet-ekb-web2-1562569965530-1-.jpg",
            "E_system_发票主体_来源": "OCR",
            "E_system_过路费发票_入口": "机场南线出京",
            "E_system_过路费发票_出口": "03",
            "E_system_过路费发票_时间": 1561845180000,
            "E_system_过路费发票_金额": {
                "standard": "10.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_识别范围": [
                0,
                1753,
                3456,
                4535
            ],
            "E_system_票据来源_sourceEntityId": "vRc9oT6cz4cA00",
            "E_system_过路费发票_发票代码": "111001971071",
            "E_system_过路费发票_发票号码": "01122924",
            "E_system_过路费发票_消费类型": "交通",
            "active": true,
            "entityId": "system_过路费发票"
        }
    ]
}

```
</TabItem>
<TabItem value="fixed" label="fixed">

```json
{
    "count": 14,
    "items": [
        {
            "id": "oeo95UILncus00",
            "useCount": 0,
            "totalCount": 1,
            "ownerId": null,
            "visibility": {
                "fullVisible": true,
                "staff": []
            },
            "E_是否抵扣": false,
            "E_system_发票主体_图片": "xukai001-1557476625149-487.jpg",
            "E_system_发票主体_来源": "OCR",
            "E_system_定额发票_号码": "52416377",
            "E_system_定额发票_金额": {
                "standard": "10.00",
                "standardUnit": "元",
                "standardScale": "2",
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_system_发票主体_识别范围": [
                835,
                475,
                1304,
                812
            ],
            "E_system_定额发票_发票代码": "111001877011",
            "E_system_定额发票_消费类型": "交通",
            "E_system_票据来源_sourceEntityId": "0zk95UILncu400",
            "active": true,
            "entityId": "system_定额发票"
        }
    ]
}
```
</TabItem>
</Tabs>

## 失败响应
当 `index`（开始索引）= `0` 时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "当前页不能为0",
    "errorDetails": null,
    "code": null,
    "data": null
}
```




