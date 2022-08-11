# 获取随手记数据
根据指定员工ID查询随手记数据。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/withNotes/search"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.5.1**](/docs/open-api/notice/update-log#151) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	      | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **staffId**     | String  | 员工ID           | 必填  | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |
| **start**       | Number  | 分页查询的起始序号  | 必填  | - | 分页的起始值是从 `0` 开始 |
| **count**       | Number  | 查询数据条数      | 必填  | - | 最大不能超过 `100` |
| **stage**       | String  | 随手记类型        | 非必填  | expense | `expense` : 报销<br/>`requisition` : 申请 |
| **startTime**   | String  | 查询开始时间      | 非必填 | - | 按数据 **创建时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **endTime**     | String  | 查询结束时间      | 非必填 | - | 按数据 **创建时间** 查询，格式：yyyy-MM-dd HH:mm:ss |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/withNotes/search?accessToken=ID_3GeTr663LRw:bwa3wajigF0WH0&staffId=bwa3wajigF0WH0:ID_3lokDfb1p5w&stage=expense&start=1&count=100&startTime=&endTime='
```

## 成功响应
```json
{
    "count": 2,              //查询到的随手记总数
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.27.0.0:A",
            "version": 6,
            "active": true,
            "createTime": 1652759177414,  //创建时间
            "updateTime": 1652784352805,  //更新时间
            "name": "CODE1-1&2",                 
            "nameSpell": "CODE1-1&2",
            "code": "ID_3Gdmy$77eRM",
            "corporationId": "bwa3wajigF0WH0",  
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "id": "ID_3Gdmy$77eRM",     //随手记数据ID
            "form": {                   //随手记数据
                "code": "ID_3Gdmy$77eRM",
                "name": "CODE1-1&200",  //名称，格式：费用类型名称&费用金额
                "stage": "expense",     //随手记类型
                "state": "draft",       //状态
                "amount": {             //费用金额
                    "standard": "200",  
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "feeDate": 1635696000000,     //消费日期
                "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",  //所属员工
                "detailId": "ID_3Gdmy$77eRM", 
                "linkType": "NOTES",
                "feeTypeId": "ID_3BJKZuv0pow", //费用类型ID
                "detailType": "detail",
                "attachments": [               //附件
                    {
                        "key": "发票-1652774426618-205.jpg",
                        "fileId": "ID_3GdAvBl2TBM",
                        "fileName": "发票.jpg"
                    }
                ],
                "invoiceForm": {              //发票信息
                    "type": "exist",          //发票类型，exist：已有发票，noWrite：无需填写
                    "invoices": [             //发票关联信息
                        {
                            "itemIds": [      //发票明细ID
                                "ID_3Ettl$U0JSg"
                            ],
                            "taxRate": 0,     //税率
                            "invoiceId": "bwa3wajigF0WH0:011002100511:35889578",  //发票ID
                            "taxAmount": {    //可抵扣税额
                                "standard": 0,
                                "standardUnit": "元",
                                "standardScale": 2,
                                "standardSymbol": "¥",
                                "standardNumCode": "156",
                                "standardStrCode": "CNY"
                            }
                        }
                    ]
                },
                "consumptionReasons": "测试1",  //消费事由
                "specificationId": "ID_3BJKZuv0pow:expense:c30eed4cd82619ad6c176089789444d0ea2dd2ea"  //费用类型模板ID
            },
            "ledgerAmount": null,
            "ledgerAmountModel": null,
            "totalCount": 1,
            "useCount": 0,
            "entityId": "ba0e026b717a0135a000",
            "platformId": "ID_3w9HsnE0Oq0",
            "source": "WRITE",  //来源
            "masterId": null,
            "index": 0,
            "visibility": {
                "fullVisible": true,
                "staffs": [],
                "roles": [],
                "departments": [],
                "departmentsIncludeChildren": true
            },
            "visible": true,
            "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
            "operatorId": null,
            "sourceId": "",
            "selfPlannedConfigs": null,
            "rigidControlPassed": true,
            "controlCalcVersion": 0,
            "flowCounts": {},
            "sourceMessage": ""
        },
        {
            "pipeline": 1,
            "grayver": "9.27.0.0:A",
            "version": 5,
            "active": true,
            "createTime": 1652759057997,
            "updateTime": 1652784352805,
            "name": "随手记费用&1",
            "nameSpell": "SUISHOUJIFEIYONG&1",
            "code": "ID_3Gdmy$76uRM",
            "corporationId": "bwa3wajigF0WH0",
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "id": "ID_3Gdmy$76uRM",
            "form": {
                "code": "ID_3Gdmy$76uRM",
                "name": "随手记费用&1",
                "stage": "expense",
                "state": "draft",
                "amount": {
                    "standard": "1",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "feeDate": 1652716800000,
                "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
                "detailId": "ID_3Gdmy$76uRM",
                "linkType": "NOTES",
                "feeTypeId": "bwa3wajigF0WH0:notes",
                "detailType": "detail",
                "attachments": [
                    {
                        "key": "charge-1652774444387-225.png",
                        "fileId": "ID_3GdAvBl2YBM",
                        "fileName": "charge.png"
                    }
                ],
                "invoiceForm": {
                    "type": "noWrite",
                    "invoices": []
                },
                "consumptionReasons": "测试2",
                "specificationId": "bwa3wajigF0WH0:notes:expense:cd212835ca7d10f418badcae457decab2d8aabd8"
            },
            "ledgerAmount": null,
            "ledgerAmountModel": null,
            "totalCount": 1,
            "useCount": 0,
            "entityId": "ba0e026b717a0135a000",
            "platformId": "ID_3w9HsnE0Oq0",
            "source": "WRITE",
            "masterId": null,
            "index": 0,
            "visibility": {
                "fullVisible": true,
                "staffs": [],
                "roles": [],
                "departments": [],
                "departmentsIncludeChildren": true
            },
            "visible": true,
            "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
            "operatorId": null,
            "sourceId": "",
            "selfPlannedConfigs": null,
            "rigidControlPassed": true,
            "controlCalcVersion": 0,
            "flowCounts": {},
            "sourceMessage": ""
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | count参数不能大于100 | `count`（查询数据条数）不允许大于 `100`  | 
| **400** | - | 数据查询异常 | 请确认 `start`（分页查询的起始序号）是否小于实际总数据量  | 
