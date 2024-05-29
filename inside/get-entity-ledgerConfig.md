# 获取业务对象台账字段

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/datalink/ledger/ledgerEntityId/$`entityId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **entityId** | String | 业务对象ID | 必填 | - | 通过 [获取业务对象](/docs/open-api/datalink/get-entity-list) 获取 |


## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/datalink/ledger/ledgerEntityId/$d1102ef381c4fb15cbc0?accessToken=ID01uxhO1GK8Ps%3ATdk3tgber501v0'
```

## 成功响应
```json
{
    "items": [
        {
            "operateSource": "WRITE",
            "operatorId": "Tdk3tgber501v0:AvT3lntT8zzpWw",  //操作人
            "pipeline": 1,
            "grayver": "9.102.0.0-prd",
            "dbVersion": 2,
            "threadId": "709",
            "id": "ID01s6bfGjqPrp",                //台账字段配置ID
            "version": 2,
            "active": true,
            "createTime": 1692080122421,
            "updateTime": 1699943398068,
            "corporationId": "Tdk3tgber501v0",
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "staffId": "Tdk3tgber501v0:AvT3lntT8zzpWw",
            "name": "报销金额",                   //台账字段名称
            "dataLinkEntityId": "d1102ef381c4fb15cbc0",
            "configSourceEntityId": "",
            "statisticsSource": "MASTER",
            "billRefFieldName": "u_业务2",       //通过「单据/费用明细/发票」中的业务对象字段，判断关联「本业务对象」
            "filter": {                          //过滤条件
                "template": "simple",
                "expressions": []
            },
            "sumFieldName": "expenseMoney",      //统计「单据/费用明细/发票」的哪个字段
            "priorityApportion": false,
            "sumFieldLabel": "报销金额",         //汇总字段名称
            "propertyName": "E_ID01s6bfGjqPrp_报销金额_L",  //业务对象中的台账属性字段，用于保存台账汇总值
            "unit": null,
            "sumFieldType": "MONEY",            //汇总字段类型，MONEY：金额
            "billDimensionConfig": null,
            "statisticsEntityId": null,
            "isLock": false
        },
        {
            "operateSource": "WRITE",
            "operatorId": "Tdk3tgber501v0:AvT3lntT8zzpWw",
            "pipeline": 1,
            "grayver": "9.102.0.0-prd",
            "dbVersion": 1,
            "threadId": "637",
            "id": "ID01uxhZo2pyft",
            "version": 1,
            "active": true,
            "createTime": 1699943392331,
            "updateTime": 1699943392331,
            "corporationId": "Tdk3tgber501v0",
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "staffId": "Tdk3tgber501v0:AvT3lntT8zzpWw",
            "name": "已完成报销金额",
            "dataLinkEntityId": "d1102ef381c4fb15cbc0",
            "configSourceEntityId": "",
            "statisticsSource": "MASTER",
            "billRefFieldName": "u_业务2",
            "filter": {
                "template": "simple",
                "expressions": [
                    {
                        "type": null,
                        "left": "specificationId",      //限定统计的单据模板的类型
                        "operator": "in",
                        "right": [
                            "ID01nrAmUbaQtF"
                        ],
                        "strictRight": {
                            "specificationId": [],
                            "specificationGroupId": [
                                "ID01nrAmUbaQtF"
                            ]
                        },
                        "includeChildren": true,
                        "fromWhere": "MASTER",
                        "entity": "",
                        "isSearchInMaster": false
                    },
                    {
                        "type": null,
                        "left": "state",               //限定统计的单据的状态
                        "operator": "in",
                        "right": [
                            "archived"
                        ],
                        "strictRight": {},
                        "includeChildren": false,
                        "fromWhere": "MASTER",
                        "entity": "",
                        "isSearchInMaster": false
                    }
                ]
            },
            "sumFieldName": "expenseMoney",
            "priorityApportion": false,
            "sumFieldLabel": "已完成报销金额",
            "propertyName": "E_ID01uxhZo2pyft_已完成报销金额_L",
            "unit": null,
            "sumFieldType": "MONEY",
            "billDimensionConfig": null,
            "statisticsEntityId": null,
            "isLock": false
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述     | 排查建议                       |
|:--------| :--- |:-------|:---------------------------|
| **200** | - | 返回数据为空 | 请确认 `entityId`（业务对象ID）是否正确 |

