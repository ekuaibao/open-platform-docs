# 操作单据
提供 **撤回单据**、**删除单据**、**变更申请** 操作。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/flow/data/$`flowId`/`action`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.21.0**](/docs/open-api/notice/update-log#1210) -> 🚀 接口升级 `v2.1` 版本，新增了支持申请单 **变更申请** 操作。<br/>
  </div>
</details>

:::caution
- **删除操作**：只能是 **`draft` 草稿** 和 **`rejected` 已驳回** 状态的单据可用。
- **撤回操作**：只能是 **`approving` 审批中** 状态的单据可用（**审批流需要配置『允许撤回单据』**）。
- **变更申请**：只能是 **`paid` 审批完成** 和 **`archived` 归档** 状态的申请单可用（**单据模板需要配置『审批完成后，允许变更申请』**）。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注                                                            |
| :--- | :--- | :--- | :--- |:--- |:--------------------------------------------------------------|
| **flowId** | String  | 单据ID          | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一)          |
| **action** | String  | 单据的action操作 | 必填 | - | `retract` : 撤回操作 &emsp; `delete` : 删除操作 &emsp; `alter` : 变更申请 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/flow/data/$PQIbuN0nmYc800/retract?accessToken=cWEbn1cA0kjU00'
```

## 成功响应
```json
{
    "value":"",
    "type":-1,
    "flow":{
        "version":1,
        "active":true,
        "createTime":1562862829309,
        "updateTime":1562862829309,
        "corporationId":"dNU9lELfXs0g00",
        "form":{
            "title":"api 测试加急",
            "submitterId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
            "expenseDate":1562036472205,
            "details":[
                {
                    "feeTypeId":"dNU9lELfXs0g00:office",
                    "specificationId":"dNU9lELfXs0g00:office:expense:2b43fb500eedb",
                    "feeTypeForm":{
                        "invoiceForm":{
                            "type":"noWrite",
                            "attachments":[

                            ]
                        },
                        "amount":{
                            "standard":"500.00",
                            "standardNumCode":"156",
                            "standardScale":2,
                            "standardStrCode":"CNY",
                            "standardSymbol":"¥",
                            "standardUnit":"元"
                        },
                        "detailId":"swo9pY7cXo1g00"
                    }
                }
            ],
            "specificationId":"Ys49lCDmlgbc00:6ad521a290e74c85",
            "writtenOffMoney":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "payMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "companyRealPay":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "expenseMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "code":"B19000017",
            "submitDate":1562862829291
        },
        "ownerId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
        "ownerDefaultDepartment":"dNU9lELfXs0g00",
        "state":"draft",
        "flowType":"freeflow",
        "formType":"expense",
        "logs":[

        ],
        "actions":{
            "dNU9lELfXs0g00:97Y9lCBulQ4M00":[
                "freeflow.delete",
                "freeflow.edit",
                "freeflow.submit"
            ]
        },
        "id":"DQ09pY7cXo1400"
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议           |
|:--------| :--- | :--- |:---------------|
| **400** | - | 单据处于变更过程中,不可再次变更 | 单据已处于草稿状态，无法变更申请   | 
| **400** | - | 关联的申请事项已关闭，无法使用 | 申请事项已关闭，无法变更申请 | 
| **403** | - | 您没有权限执行此操作。可能是由于：<br/>1、单据已被撤回或驳回。<br/>2、单据当前所处审批环节根据流程配置，不允许撤回。 | 请按照提示进行检查      | 
