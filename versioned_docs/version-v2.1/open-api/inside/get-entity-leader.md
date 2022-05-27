# 获取业务对象台账

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/datalink/byLedgerConfigId/$`ledgerConfigId`/byDataLinkId/$`dataLinkId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ledgerConfigId** | String | 业务对象台账配置ID | 必填 | - | 可通过[获取业务对象实例信息](/docs/open-api/datalink/get-entity-object)获取 |
| **dataLinkId**     | String | 业务对象实例ID    | 必填 | - | 可通过[获取业务对象实例信息](/docs/open-api/datalink/get-entity-object)获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/datalink/byLedgerConfigId/$ID_3v7HGBq_dW0/byDataLinkId/$ID_3v7IN7M5pT0?accessToken=ID_3BEqRpuUsy0:djg8LshfUkfM00'
```

## 成功响应
```json
{
    "count":3,                    //总数量
    "items":[
        {
            "id":"ID_3BEqPWzQyaw",    //业务对象台账ID
            "active":true,            //是否启用
            "amount":{                //执行金额
                "rate":"1",
                "budget":null,
                "foreign":null,
                "sysRate":null,
                "standard":"100",
                "budgetRate":null,
                "budgetUnit":null,
                "budgetScale":null,
                "foreignUnit":null,
                "budgetSymbol":null,
                "foreignScale":null,
                "standardUnit":"元",
                "budgetNumCode":null,
                "budgetStrCode":null,
                "foreignSymbol":null,
                "standardScale":"2",
                "foreignNumCode":null,
                "foreignStrCode":null,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "detail":{                             //关联消费信息
                "feeTypeId":"ID_3BDKWQqqq8g",      //费用明细ID
                "feeTypeForm":{                    //费用类型数据明细
                    "amount":{                     //费用金额
                        "standard":"100",          //本位币
                        "standardUnit":"元",       //本位币单位
                        "standardScale":2,         //本位币精度
                        "standardSymbol":"¥",      //本位币符号
                        "standardNumCode":"156",   //本位币数字代码
                        "standardStrCode":"CNY"    //本位币字母代码
                    },
                    "feeDate":1647792000000,       //消费时间(毫秒级时间戳)
                    "detailId":"tMUB7Hi2aItcS6",   //明细ID
                    "attachments":[                //附件 可用附件信息的数据通过调用【获取附件URL】接口来获取附件文件下载链接
                    ],
                    "invoiceForm":{                //发票信息(非必返回字段)
                        "type":"noWrite"           //发票类型
                    },
                    "consumptionReasons":"",       //消费原因
                    "u_测试费用导入":"ID_3v7IN7M5pT0" //自定义字段
                },
                "specificationId":"ID_3BDKWQqqq8g:expense:484c25ad502a1b0c4817ccd0b157430c9d20d2a4"   //费用类型模版ID
            },
            "flowId":"ID_3BEqPWzQgaw",          //单据ID
            "feeDate":1647792000000,            //消费时间(毫秒级时间戳)
            "grayver":"9.16.0.0:A",
            "version":1,
            "detailId":"tMUB7Hi2aItcS6",        //明细ID
            "pipeline":1,
            "totalNum":"0",
            "apportion":null,
            "feeTypeId":"ID_3BDKWQqqq8g",       //费用明细ID
            "createTime":1647842693505,
            "dataLinkId":"ID_3v7IN7M5pT0",      //业务对象实例ID
            "updateTime":1647842693505,
            "apportionId":null,
            "originalRate":"1",
            "standardRate":"1",
            "sumFieldName":"amount",            
            "corporationId":"djg8LshfUkfM00",   //企业ID
            "refDataLinkId":"",                 //关联业务对象实例ID 
            "groupDimension":"",
            "ledgerConfigId":"ID_3v7HGBq_dW0",  //业务对象台账配置ID
            "originalAmount":{                  //计划金额
                "rate":null,
                "budget":null,
                "foreign":null,
                "sysRate":null,
                "standard":"100",
                "budgetRate":null,
                "budgetUnit":null,
                "budgetScale":null,
                "foreignUnit":null,
                "budgetSymbol":null,
                "foreignScale":null,
                "standardUnit":"元",
                "budgetNumCode":null,
                "budgetStrCode":null,
                "foreignSymbol":null,
                "standardScale":"2",
                "foreignNumCode":null,
                "foreignStrCode":null,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "dataLinkEntityId":"a10dd7f32900de827800",    //业务对象ID
            "dataCorporationId":null,
            "sourceCorporationId":null,
            "code":"code1",
            "name":"测试1",
            "refActive":false
        },
        {
            "id":"ID_3BD$803fXY0",
            "active":true,
            "amount":{
                "rate":"1",
                "budget":null,
                "foreign":null,
                "sysRate":null,
                "standard":"123",
                "budgetRate":null,
                "budgetUnit":null,
                "budgetScale":null,
                "foreignUnit":null,
                "budgetSymbol":null,
                "foreignScale":null,
                "standardUnit":"元",
                "budgetNumCode":null,
                "budgetStrCode":null,
                "foreignSymbol":null,
                "standardScale":"2",
                "foreignNumCode":null,
                "foreignStrCode":null,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "detail":{
                "feeTypeId":"ID_3BDKWQqqq8g",
                "feeTypeForm":{
                    "amount":{
                        "standard":"123",
                        "standardUnit":"元",
                        "standardScale":2,
                        "standardSymbol":"¥",
                        "standardNumCode":"156",
                        "standardStrCode":"CNY"
                    },
                    "feeDate":1647792000000,
                    "detailId":"iKHhI2Whq82eEd",
                    "attachments":[
                    ],
                    "invoiceForm":{
                        "type":"noWrite"
                    },
                    "consumptionReasons":"",
                    "u_测试费用导入":"ID_3v7IN7M5pT0"
                },
                "specificationId":"ID_3BDKWQqqq8g:expense:484c25ad502a1b0c4817ccd0b157430c9d20d2a4"
            },
            "flowId":"ID_3BDLsqKTR9M",
            "feeDate":1647792000000,
            "grayver":"9.16.0.0:A",
            "version":1,
            "detailId":"iKHhI2Whq82eEd",
            "pipeline":1,
            "totalNum":"0",
            "apportion":null,
            "feeTypeId":"ID_3BDKWQqqq8g",
            "createTime":1647835196886,
            "dataLinkId":"ID_3v7IN7M5pT0",
            "updateTime":1647835196886,
            "apportionId":null,
            "originalRate":"1",
            "standardRate":"1",
            "sumFieldName":"amount",
            "corporationId":"djg8LshfUkfM00",
            "refDataLinkId":"",
            "groupDimension":"",
            "ledgerConfigId":"ID_3v7HGBq_dW0",
            "originalAmount":{
                "rate":null,
                "budget":null,
                "foreign":null,
                "sysRate":null,
                "standard":"123",
                "budgetRate":null,
                "budgetUnit":null,
                "budgetScale":null,
                "foreignUnit":null,
                "budgetSymbol":null,
                "foreignScale":null,
                "standardUnit":"元",
                "budgetNumCode":null,
                "budgetStrCode":null,
                "foreignSymbol":null,
                "standardScale":"2",
                "foreignNumCode":null,
                "foreignStrCode":null,
                "standardSymbol":"¥",
                "standardNumCode":"156",
                "standardStrCode":"CNY"
            },
            "dataLinkEntityId":"a10dd7f32900de827800",
            "dataCorporationId":null,
            "sourceCorporationId":null,
            "code":"code2",    //被关联编号
            "name":"测试2",     //被关联名称
            "refActive":true   //被关联业务对象是否启用（台账统计类型为[其他业务对象]时存在）
        }
    ]
}
```

## 失败响应
`dataLinkId`（业务对象实例ID）不存在时，报500错误，返回报文如下：
```text
服务器内部错误：查询返回结果过少
```


