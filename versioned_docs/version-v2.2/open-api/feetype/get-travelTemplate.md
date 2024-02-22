# 获取行程模版

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/specifications/byTravelTemplate"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.22.0**](/updateLog/update-log#1220)
  - 🆕 新增了本接口。

</div>
</details>



## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v2/specifications/byTravelTemplate?accessToken=ID01swZqg9Hr5Y%3ATdk3tgber501v0'
```

## 成功响应
```json
{
    "items": [
        {
            "corporationId": "TsI3tt8KjF4S7M",
            "version": "2.0",
            "name": "用车",
            "entityId": "b20dd823890c7da21800",
            "active": true,
            "components": [
                {
                    "field": "dataLinkId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": null
                    }
                },
                {
                    "field": "dataLinkTemplateId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": "ID_3twzygNZJxw"
                    }
                },
                {
                    "field": "dataLinkForm",
                    "type": "components",
                    "components": [
                        {
                            "field": "E_ac0dd823890c7d2a1800_住宿地",
                            "type": "city",
                            "multiple": true
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_入住日期",
                            "type": "long"
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_离店日期",
                            "type": "long"
                        }
                    ]
                }
            ]
        },
        {
            "corporationId": "TsI3tt8KjF4S7M",
            "version": "2.0",
            "name": "飞机",
            "entityId": "b30dd823890c7d5a1800",
            "active": true,
            "components": [
                {
                    "field": "dataLinkId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": null
                    }
                },
                {
                    "field": "dataLinkTemplateId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": "ID_3twzygNZrxw"
                    }
                },
                {
                    "field": "dataLinkForm",
                    "type": "components",
                    "components": [
                        {
                            "field": "E_ac0dd823890c7d2a1800_出发地",
                            "type": "city",
                            "multiple": true
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_目的地",
                            "type": "city",
                            "multiple": true
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_行程日期",
                            "type": "long"
                        }
                    ]
                }
            ]
        },
        {
            "corporationId": "TsI3tt8KjF4S7M",
            "version": "2.0",
            "name": "餐补",
            "entityId": "b60dd823890c7dba1800",
            "active": true,
            "components": [
                {
                    "field": "dataLinkId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": null
                    }
                },
                {
                    "field": "dataLinkTemplateId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": "ID_3twzygNZPxw"
                    }
                },
                {
                    "field": "dataLinkForm",
                    "type": "components",
                    "components": [
                        {
                            "field": "E_ac0dd823890c7d2a1800_住宿地",
                            "type": "city",
                            "multiple": true
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_入住日期",
                            "type": "long"
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_离店日期",
                            "type": "long"
                        }
                    ]
                }
            ]
        },
        {
            "corporationId": "TsI3tt8KjF4S7M",
            "version": "2.0",
            "name": "酒店",
            "entityId": "ba0dd823890c7d721800",
            "active": true,
            "components": [
                {
                    "field": "dataLinkId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": null
                    }
                },
                {
                    "field": "dataLinkTemplateId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": "ID_3twzygNZxxw"
                    }
                },
                {
                    "field": "dataLinkForm",
                    "type": "components",
                    "components": [
                        {
                            "field": "E_ac0dd823890c7d2a1800_住宿地",
                            "type": "city",
                            "multiple": true
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_入住日期",
                            "type": "long"
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_离店日期",
                            "type": "long"
                        }
                    ]
                }
            ]
        },
        {
            "corporationId": "TsI3tt8KjF4S7M",
            "version": "2.0",
            "name": "火车",
            "entityId": "d20dd823890c7d8a1800",
            "active": true,
            "components": [
                {
                    "field": "dataLinkId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": null
                    }
                },
                {
                    "field": "dataLinkTemplateId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": "ID_3twzygNZDxw"
                    }
                },
                {
                    "field": "dataLinkForm",
                    "type": "components",
                    "components": [
                        {
                            "field": "E_ac0dd823890c7d2a1800_出发地",
                            "type": "city",
                            "multiple": true
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_目的地",
                            "type": "city",
                            "multiple": true
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_行程日期",
                            "type": "long"
                        }
                    ]
                }
            ]
        },
        {
            "corporationId": "TsI3tt8KjF4S7M",
            "version": "2.0",
            "name": "通用",
            "entityId": "e20dd823890c7dd21800",
            "active": true,
            "components": [
                {
                    "field": "dataLinkId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": null
                    }
                },
                {
                    "field": "dataLinkTemplateId",
                    "type": "String",
                    "defaultValue": {
                        "type": "fixed",
                        "value": "ID_3twzygNZVxw"
                    }
                },
                {
                    "field": "dataLinkForm",
                    "type": "components",
                    "components": [
                        {
                            "field": "E_ac0dd823890c7d2a1800_住宿地",
                            "type": "city",
                            "multiple": true
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_入住日期",
                            "type": "long"
                        },
                        {
                            "field": "E_ac0dd823890c7d2a1800_离店日期",
                            "type": "long"
                        }
                    ]
                }
            ]
        }
    ]
}
```