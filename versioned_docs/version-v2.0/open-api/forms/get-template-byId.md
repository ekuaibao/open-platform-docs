# 根据模版ID获取模板信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/specifications/byIds/[`ids`]"
/>

:::caution
- 只返回未停用、未删除的模版信息。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids** | Array | 单据模版ID集合 | 必填 | - | 支持多个，数组方式，可通过[获取当前版本单据模板列表](/docs/open-api/forms/get-specifications-latest)，<br/>[根据企业ID获取单据模版列表](/docs/open-api/forms/get-template-list)接口获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/specifications/byIds/[GQgbu2n6osbI00]?accessToken=qUMbutefrU8U00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "C20bu2n6osbc00:ebd338960d9053892b3fd86dfa6f31690d014de7", //模板ID
            "corporationId": "3Qobu2l0cs6k00",                               //企业ID
            "name": "差旅报销单",                                             //模板名称
            "state": "PUBLISHED",                                            //单据模版状态 (PUBLISHED:可用；DRAFT:草稿) 
            "form": [                       //单据模版下配置的字段
                {
                    "title": {
                        "label": "标题",    //字段显示名称
                        "type": "text",     //字段类型
                        "optional": false,  //是否选填
                        "maxLength": 14,    //最大长度
                        "minLength": 0      //最小长度
                    }
                },
                {
                    "submitterId": {
                        "label": "提交人",   //字段显示名称
                        "type": "select",   //字段类型
                        "optional": false,  //是否选填
                        "valueFrom": "organization.Staff" //该字段取值范围（取值的范围是从全局字段中查询的）
                    }
                },
                {
                    "expenseDate": {
                        "label": "报销日期",
                        "type": "date",
                        "optional": false
                    }
                },
                {
                    "expenseDepartment": {
                        "label": "报销部门",
                        "type": "select",
                        "optional": false,
                        "valueFrom": "organization.Department"
                    }
                },
                {
                    "payeeId": {
                        "label": "收款信息",
                        "type": "select",
                        "optional": false,
                        "valueFrom": "pay.PayeeInfo"
                    }
                },
                {
                    "description": {
                        "label": "描述",
                        "type": "text",
                        "optional": true,
                        "maxLength": 140,
                        "minLength": 0
                    }
                },
                {
                    "details": {
                        "label": "费用明细",
                        "type": "select",
                        "optional": false,
                        "valueFrom": "flow.FeeType"
                    }
                },
                {
                    "expenseLink": {
                        "label": "关联申请",
                        "type": "select",
                        "optional": true,
                        "valueFrom": "requisition.RequisitionInfo"
                    }
                }
            ],
            "flowType": "expense"
        },
        {
            "id": "GQgbu2n6osbI00:55d73bf2a46a1e4d0c9c0e728ab6c36c68484b01",
            "corporationId": "3Qobu2l0cs6k00",
            "name": "日常报销单",
            "state": "PUBLISHED",
            "form": [
                {
                    "title": {
                        "label": "标题",
                        "type": "text",
                        "optional": false,
                        "maxLength": 14,
                        "minLength": 0
                    }
                },
                {
                    "submitterId": {
                        "label": "提交人",
                        "type": "select",
                        "optional": false,
                        "valueFrom": "organization.Staff"
                    }
                },
                {
                    "expenseDate": {
                        "label": "报销日期",
                        "type": "date",
                        "optional": false
                    }
                },
                {
                    "expenseDepartment": {
                        "label": "报销部门",
                        "type": "select",
                        "optional": false,
                        "valueFrom": "organization.Department"
                    }
                },
                {
                    "payeeId": {
                        "label": "收款信息",
                        "type": "select",
                        "optional": false,
                        "valueFrom": "pay.PayeeInfo"
                    }
                },
                {
                    "description": {
                        "label": "描述",
                        "type": "text",
                        "optional": true,
                        "maxLength": 140,
                        "minLength": 0
                    }
                },
                {
                    "details": {
                        "label": "费用明细",
                        "type": "select",
                        "optional": false,
                        "valueFrom": "flow.FeeType"
                    }
                },
                {
                    "expenseLink": {
                        "label": "关联申请",
                        "type": "select",
                        "optional": true,
                        "valueFrom": "requisition.RequisitionInfo"
                    }
                }
            ],
            "flowType": "expense"       //单据模版类型
        }
    ]
}
```

## 失败响应
单据模版 ID 参数错误的情况下，返回如下响应数据：
```json
{
    "errorCode": 412,
    "errorMessage": "查询的模版不存在, 请输入有效的查询条件",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

