# 获取申请事项列表
根据员工ID和申请事项状态获取申请事项列表。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/requisition/getData"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.18.0**](/updateLog/update-log#1180) -> 🐞 接口 **成功响应** `details` 下新增了 `writtenOffAmount`（核销金额）、`unwrittenOffAmount`（未核销金额）字段，用于报销单【按申请明细分别报销】时关联使用。<br/>
  [**1.15.0**](/updateLog/update-log#1150) -> 🐞 接口 **成功响应** `details` 下新增了 `linkDetailEntityId`（费用明细实例ID）字段，用于报销单【按申请明细分别报销】时关联使用。<br/>
  [**1.12.0**](/updateLog/update-log#1120) -> 🐞 接口 **成功响应** 新增了 `details`（申请事项费用明细信息）字段。<br/>
  [**1.2.0**](/updateLog/update-log#120)&emsp;-> 🆕 新增了本接口。

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **staffId**     | String | 员工ID    | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |
| **start**       | Number | 分页查询的起始序号 | 必填 | 0 | 分页的起始值是从 `0` 开始， 而不是传统的 `1` 开始 |
| **count**       | Number | 查询数据条数      | 必填 | - | 最大不能超过 `100` |
| **state**       | String | 申请事项状态      | 必填 | ALL | `FORCE_CLOSED` : 自动关闭/强制关闭<br/>`MANUAL_CLOSED` : 手工关闭/OpenAPI关闭<br/>`PROCESS` : 进行中<br/>`ALL` : 全部状态 |

### 申请事项状态(`state`)场景
| `FORCE_CLOSED` 状态场景 | `MANUAL_CLOSED` 状态场景 |
| :--- | :--- |
| 【申请管理】管理员关闭申请（强制关闭） | 申请人关闭申请（手动关闭） |
| 报销金额≥申请金额时自动关闭         | OpenAPI 关闭申请 |
| 达到报销次数自动关闭               | 系统自动关闭了申请，原因：申请单被变更 |
| 关联报销单审批完成自动关闭          |  |
| 超时自动关闭（行客）               |  |

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
                        "writtenOffAmount": {  //核销金额
                            "standard": "0.00",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "unwrittenOffAmount": { //未核销金额
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
            "ignoreUsageSpecificationIds": [],
            "details": [
                {
                    "feeTypeId": "bwa3wajigF0WH0:teamBuilding",
                    "feeTypeForm": {
                        "amount": {
                            "standard": "100",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "writtenOffAmount": {  //核销金额
                            "standard": "0.00",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "unwrittenOffAmount": { //未核销金额
                            "standard": "100.00",
                            "standardUnit": "元",
                            "standardScale": 2,
                            "standardSymbol": "¥",
                            "standardNumCode": "156",
                            "standardStrCode": "CNY"
                        },
                        "detailId": "ID_3zE5G_00ww0",           //费用明细ID
                        "linkDetailEntityId": "ID01netPh7sdg5", //费用明细实例ID，用于报销单【按申请明细分别报销】时关联使用
                        "attachments": [],
                        "consumptionReasons": ""
                    },
                    "specificationId": "bwa3wajigF0WH0:teamBuilding:requisition:bd498ab4ec17d069d79f63ab22c7c55fcbbaa686"
                }
            ]
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
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | ID为'bwa3wajigF0WH0:ID_3lokDfb1p5w1'的员工不存在 | 请确认 `staffId`（员工ID）是否存在 | 


