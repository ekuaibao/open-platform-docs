# 根据申请事项ID获取申请事项

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/requisition/requisition/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.15.0**](/docs/open-api/notice/update-log#1150) -> 🆕 新增了本接口。

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **id**          | String | 申请事项ID | 必填 | - | **申请事项ID = 申请单ID**<br/>可通过 [获取单据列表](/docs/open-api/flows/get-forms-details-byStaff)、[根据单据编号获取单据详情](/docs/open-api/flows/get-forms-details-byCode)、[获取申请事项列表](/docs/open-api/flows/get-requisition-all) 获取 |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v1/requisition/$ID_3zE5G_02rw0?accessToken=ID01w4CALPJ5Mj:bwa3wajigF0WH0'
```

## 成功响应
```json
{
    "id": "ID_3zE5G_02rw0", //申请事项ID = 申请单ID
    "code": "S22000002",    //申请单编号
    "name": "22",           //申请事项名称
    "state": "PROCESS",     //申请事项状态
    "title": "22",          //申请单标题
    "active": true,
    "flowId": "ID_3zE5G_02rw0",  //申请单ID = 申请事项ID
    "grayver": "9.10.0.0:A",
    "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",  //申请事项所有人
    "related": [  //关联单据
        {
            "id": "ID_3zE5G_02rw0",
            "code": "S22000002",
            "name": "22",
            "rule": null,
            "money": 20.0,
            "state": "PROCESS",
            "formType": "requisition",
            "moneyNode": {
                "standard": "20.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "submitDate": 1645690074335,
            "isRequisition": true,
            "specificationId": "ID_3zE5G_006w0",
            "specificationName": "测试申请单"
        },
        {
            "id": "ID_3zE5G_07ew0",
            "code": "B22000003",
            "name": "11-1",
            "rule": null,
            "money": 5.0,
            "state": "approving",
            "formType": "expense",
            "moneyNode": {
                "standard": "5.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "submitDate": 1645691125513,
            "isRequisition": false,
            "specificationId": "ID_3w9HsnE1fq0",
            "specificationName": "日常报销单"
        }
    ],
    "version": 9,
    "closeLog": null, //关闭日志
    "pipeline": 1,
    "nameSpell": "22",
    "changeLogs": [  //历史记录
        {
            "action": "CREATE",
            "reason": "申请单「22（S22000002）」审批通过",
            "toStaffs": [],
            "fromStaff": "",
            "createTime": 1645690187180,
            "operatorId": "bwa3wajigF0WH0:ID_3lokDfb1p5w"
        },
        {
            "action": "SHARE",
            "reason": "",
            "toStaffs": [
                "bwa3wajigF0WH0:ID_3wlg6bv9UGg"
            ],
            "fromStaff": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
            "createTime": 1645691438947,
            "operatorId": "bwa3wajigF0WH0:ID_3lokDfb1p5w"
        }
    ],
    "createTime": 1645690187123,
    "updateTime": 1645691438947,
    "submitterId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
    "corporationId": "bwa3wajigF0WH0",
    "applyCloseRule": "manual",
    "sharedOwnerIds": [         //被共享人ID
        "bwa3wajigF0WH0:ID_3wlg6bv9UGg"
    ],
    "requisitionDate": 1645632000000,
    "specificationId": "ID_3zE5G_006w0:8f9259a77ab79f3e6bef628d8b7da789da1c1c44",
    "expenseMoneyDone": 0,      //已报销金额
    "requisitionMoney": 20.0,   //申请总额
    "dataCorporationId": null,
    "specificationName": "测试申请单",
    "expenseMoneyProcess": 5.0, //报销中金额
    "sourceCorporationId": null,
    "requisitionMoneyNode": {
        "standard": "20.00",
        "standardUnit": "元",
        "standardScale": 2,
        "standardSymbol": "¥",
        "standardNumCode": "156",
        "standardStrCode": "CNY"
    },
    "ignoreUsageSpecificationIds": [],
    "details": [              //申请事项费用明细信息
        {
            "feeTypeId": "bwa3wajigF0WH0:office",  //费用类型ID
            "feeTypeForm": {  //费用明细字段
                "amount": {   //费用金额
                    "standard": "20.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "品类": "bwa3wajigF0WH0:paper",
                "detailId": "ID_3zE5G_02Bw0",           //费用明细ID
                "linkDetailEntityId": "ID01netPh7VTH1", //费用明细实例ID，用于报销单【按申请明细分别报销】时关联使用
                "quantity": "20",
                "unitPrice": {
                    "standard": "1",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                },
                "attachments": [],
                "consumptionReasons": ""
            },
            "specificationId": "bwa3wajigF0WH0:office:requisition:9a0d167c9a8deedcca0b39e42ef1a33d19824fa6"  //费用类型模板ID
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 申请事项ID不存在 | 请确认 `id`（申请事项ID）是否存在 | 


