# 获取申请事项
根据员工ID和状态查询申请事项列表接口。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/requisition/getData"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过[授权接口](/docs/open-api/getting-started/auth)获取 |
| **staffId**     | String | 员工ID    | 必填 | - | 通过[查询员工](/docs/open-api/corporation/get-staff-ids)获取 |
| **start**       | Number | 分页查询的起始序号 | 必填 | 0 | 分页的起始值是从 `0` 开始， 而不是传统的 `1` 开始 |
| **count**       | Number | 查询数据条数      | 必填 | - | 最大不能超过 `100` |
| **state**       | String | 申请事项状态      | 必填 | ALL | `FORCE_CLOSED` : 自动关闭<br/>`MANUAL_CLOSED` : 手工关闭<br/>`PROCESS` : 进行中<br/>`ALL` : 全部状态 |

## CURL
```shell
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/requisition/getData?accessToken=ID_3zDKigh3izw:bwa3wajigF0WH0&start=0&count=100&staffId=bwa3wajigF0WH0:ID_3lokDfb1p5w&state=PROCESS'
```

## 成功响应
```json
{
    "count": 2,                     //所查询状态类型的申请事项总数
    "items": [
        {
            "id": "ID_3zE5G_02rw0", //申请事项ID
            "code": "S22000002",    //申请单编号
            "name": "22",           //申请事项名称
            "state": "PROCESS",     //申请事项状态
            "title": "22",          //申请单标题
            "active": true,
            "flowId": "ID_3zE5G_02rw0",  //申请单ID
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
            "closeLog": null,
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
            "ignoreUsageSpecificationIds": []
        },
        {
            "id": "ID_3zE5G_00rw0",
            "code": "S22000001",
            "name": "11",
            "state": "PROCESS",
            "title": "11",
            "active": true,
            "flowId": "ID_3zE5G_00rw0",
            "grayver": "9.10.0.0:A",
            "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
            "related": [
                {
                    "id": "ID_3zE5G_00rw0",
                    "code": "S22000001",
                    "name": "11",
                    "rule": null,
                    "money": 100.0,
                    "state": "PROCESS",
                    "formType": "requisition",
                    "moneyNode": {
                        "standard": "100.00",
                        "standardUnit": "元",
                        "standardScale": 2,
                        "standardSymbol": "¥",
                        "standardNumCode": "156",
                        "standardStrCode": "CNY"
                    },
                    "submitDate": 1645690038668,
                    "isRequisition": true,
                    "specificationId": "ID_3zE5G_006w0",
                    "specificationName": "测试申请单"
                }
            ],
            "version": 1,
            "closeLog": null,
            "pipeline": 1,
            "nameSpell": "11",
            "changeLogs": [
                {
                    "action": "CREATE",
                    "reason": "申请单「11（S22000001）」审批通过",
                    "toStaffs": [],
                    "fromStaff": "",
                    "createTime": 1645690187000,
                    "operatorId": "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                }
            ],
            "createTime": 1645690186840,
            "updateTime": 1645690186840,
            "submitterId": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
            "corporationId": "bwa3wajigF0WH0",
            "applyCloseRule": "manual",
            "sharedOwnerIds": [],
            "requisitionDate": 1645632000000,
            "specificationId": "ID_3zE5G_006w0:8f9259a77ab79f3e6bef628d8b7da789da1c1c44",
            "expenseMoneyDone": 0,
            "requisitionMoney": 100.0,
            "dataCorporationId": null,
            "specificationName": "测试申请单",
            "expenseMoneyProcess": 0,
            "sourceCorporationId": null,
            "requisitionMoneyNode": {
                "standard": "100.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "ignoreUsageSpecificationIds": []
        }
    ]
}
```

查询的员工ID没有申请事项时，返回如下：
```json
{
    "count": 0,
    "items": []
}
```
## 失败响应
`staffId`（员工ID）不存在时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "ID为'bwa3wajigF0WH0:ID_3lokDfb1p5w1'的员工不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

