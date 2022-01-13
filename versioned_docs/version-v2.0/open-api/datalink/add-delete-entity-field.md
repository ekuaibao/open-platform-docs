# 增删业务对象字段

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/datalink/editEntityFields/$`platformId`/$`entityId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **platformId** | String | 扩展ID    | 必填 | - | 请查看问题一，[了解如何获取](/docs/open-api/datalink/question-answer) |
| **entityId**   | String | 业务对象ID | 必填 | - | 请查看问题一，[了解如何获取](/docs/open-api/datalink/question-answer) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **delfields**                 | Array   | 删除的数据       | 非必填 | -     | 数组为要删除的字段label列表 |
| **addfields**                 | Array   | 添加的数据       | 非必填 | -     | 数组为要添加的字段label列表 |
| **&emsp; ∟ label**           | String  | 字段名称         | 必填  | -     | 字段名称 |
| **&emsp; ∟ type**            | String  | 字段类型         | 必填  | -     | `text` : 文本 &emsp; `number` : 数字 &emsp; `autoNumber` : 自动编码<br/>`date` : 日期 &emsp; `dateRange` : 日期范围 &emsp; `money` : 金额<br/>`switcher` : 开关 &emsp; `list` : 多选 &emsp; `ref` : 关联业务对象 |
| **&emsp; ∟ optional**        | Boolean | 字段是否必填      | 必填  | true  | `true` : 选填 &emsp; `false` : 必填 |
| **&emsp; ∟ scale**           | Number  | 小数位数         | 非必填 | -     | `type` 为 `number` 时必填 |
| **&emsp; ∟ unit**            | String  | 单位            | 非必填 | -     | `type` 为 `number` 时必填 |
| **&emsp; ∟ rule**            | String  | 自动编号生成规则   | 非必填 | -     | `type` 为 `autoNumber` 时必填。 请查看问题四，[了解具体编码规则](/docs/open-api/datalink/question-answer) |
| **&emsp; ∟ withTime**        | Boolean | 是否包含时间      | 非必填 | false | `type` 为 `date` 或 `dateRange` 时必填<br/> `true` : 包含 &emsp; `false` : 不包含|
| **&emsp; ∟ entity**          | String  | 业务对象取值范围   | 非必填 | -     | `type` 为 `ref` 时必填 |
| **&emsp; ∟ formula**         | Boolean | 是否是自动计算类型 | 非必填 | false | `type` 为 `number` 或`money`时有效<br/>`true` : 是 &emsp; `false` : 否 |
| **&emsp; ∟ defaultValue**    | String  | 计算公式         | 非必填 | -     | `formula` 为 `true` 时必填，计算公式内容 |

:::caution
 - `addfields.entity` 暂不支持调用接口获取，如果不知道准确的取值，可以通过问题五[获取目标字段值](/docs/open-api/datalink/question-answer)类似方式查看请求取得。
 - `delfields` 和 `addfields` 二者不能同时为空。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/datalink/editEntityFields/$ID_3rGmfE$cfo0/$f90dc12bc889cd11e000?accessToken=ID_3s9EkyX3nuw:djg8LshfUkfM00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "delfields":["文本","自动编号","日期","日期范围","数字","金额","开关","收款信息","业务对象","业务对象多选","自定义档案","城市","部门","人员","人员多选","自动计算","附件"],
    "addfields":[
        {
            "label":"文本1",  //字段显示名称，不为空即可
            "type":"text",  //字段类型  文本
            "optional":false  //字段是否必填  false：必填，true：选填
        },
        {
            "label":"自动编号1",  //字段显示名称，不为空即可
            "type":"autoNumber",  //字段类型  自动编号
            "optional":false,  //字段是否必填  false：必填，true：选填
            "rule":"自动编号-{YYYY}-{MM}-{00}"  //自动编号规则 显示效果：自动编号-2021-1220-04
        },
        {
            "label":"日期1",  //字段显示名称，不为空即可
            "type":"date",  //字段类型 日期
            "optional":false,  //字段是否必填  false：必填，true：选填
            "withTime":false  //是否包含时间  false：不包含，true：包含
        },
        {
            "label":"日期范围1",  //字段显示名称，不为空即可
            "type":"dateRange",  //字段类型 日期范围
            "optional":false,  //字段是否必填  false：必填，true：选填
            "withTime":true  //是否包含时间  false：不包含，true：包含
        },
        {
            "label":"数字1",  //字段显示名称，不为空即可
            "type":"number",  //字段类型 数字
            "optional":true,  //字段是否必填  false：必填，true：选填
            "scale":0,  //小数位数
            "unit":"个"  //单位
        },
        {
            "label":"金额1",  //字段显示名称，不为空即可
            "type":"money",  //字段类型 金额
            "optional":true  //字段是否必填  false：必填，true：选填
        },
        {
            "label":"开关1",  //字段显示名称，不为空即可
            "type":"switcher",  //字段类型 开关
            "optional":false  //字段是否必填  false：必填，true：选填
        },
        {
            "label":"收款信息1",  //字段显示名称，不为空即可
            "type":"ref",  //字段类型 关联业务对象 
            "optional":true,  //字段是否必填  false：必填，true：选填
            "entity":"pay.PayeeInfo"  //业务对象取值范围  此为收款信息
        },
        {
            "label":"业务对象1",  //字段显示名称，不为空即可
            "type":"ref",  //字段类型 关联业务对象 
            "optional":true,  //字段是否必填  false：必填，true：选填
            "entity":"datalink.DataLinkEntity.f50d96e58839a2e8dc00"  //业务对象取值范围  此为自定义的业务对象，格式：datalink.DataLinkEntity.业务对象ID
        },
        {
            "label":"业务对象多选2",  //字段显示名称，不为空即可
            "type":"list",  //字段类型 多选
            "optional":false,  //字段是否必填  false：必填，true：选填
            "elemType":{   //多选时的参数类型
                "type":"ref",  //字段类型，关联业务对象
                "entity":"datalink.DataLinkEntity.ab0d7c7dd27e4ad42c00"  //业务对象取值范围  此为自定义的业务对象，格式：datalink.DataLinkEntity.业务对象ID
            }
        },
        {
            "label":"自定义档案1",  //字段显示名称，不为空即可
            "type":"ref",  //字段类型 关联业务对象 
            "optional":false,  //字段是否必填  false：必填，true：选填
            "entity":"basedata.Dimension.岗位预置"  //业务对象取值范围  此为自定义档案，系统预制的岗位档案
        },
        {
            "label":"城市1",  //字段显示名称，不为空即可
            "type":"ref",  //字段类型 关联业务对象 
            "optional":false,  //字段是否必填  false：必填，true：选填
            "entity":"basedata.city"  //业务对象取值范围  此为系统预制的城市数据
        },
        {
            "label":"部门1",  //字段显示名称，不为空即可
            "type":"ref",  //字段类型 关联业务对象 
            "optional":false,  //字段是否必填  false：必填，true：选填
            "entity":"organization.Department"  //业务对象取值范围  此为组织结构里面的部门信息
        },
        {
            "label":"人员1",  //字段显示名称，不为空即可
            "type":"ref",  //字段类型 关联业务对象
            "optional":false,  //字段是否必填  false：必填，true：选填
            "entity":"organization.Staff"  //业务对象取值范围  此为组织结构里面的员工信息
        },
        {
            "label":"人员多选1",  //字段显示名称，不为空即可
            "type":"list",  //字段类型 多选
            "optional":false,  //字段是否必填  false：必填，true：选填
            "elemType":{  //多选时的参数类型
                "type":"ref",  //字段类型，关联业务对象
                "entity":"organization.Staff"  //业务对象取值范围  此为组织结构里面的员工信息
            }
        },
        {
            "label":"自动计算1",  //字段显示名称，不为空即可
            "type":"money",  //字段类型 金额，此为自动计算的结果值类型
            "optional":false,  //字段是否必填  false：必填，true：选填
            "formula":true,  //是否是自动计算类型，`true`:是 `false`:否
            "defaultValue":"`$金额1`.本位币 * `$数字1`"  //计算公式，值 = 金额字段 * 数字
        },
        {
            "label":"附件1",  //字段显示名称，不为空即可
            "type":"list",  //字段类型 多选
            "elemType":{  //多选时的参数类型
                "type":"attachment"  //字段类型，附件类型
            },
            "optional":true  //字段是否必填  false：必填，true：选填
        }
    ]
}'
```

## 成功响应
```json
{
    "value": {
        "platformId": "ID_3rGmfE$cfo0",
        "entityId": "f90dc12bc889cd11e000",
        "name": "业务对象全部字段参数示例",
        "corporationId": "djg8LshfUkfM00",
        "fields": [
            {
                "name": "E_f90dc12bc889cd11e000_name",
                "label": "名称",
                "type": "text",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": true,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 18
                }
            },
            {
                "name": "E_f90dc12bc889cd11e000_code",
                "label": "编码",
                "type": "autoNumber",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": true,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 17
                },
                "rule": "B{YY}{000000}"
            },
            {
                "name": "E_f90dc12bc889cd11e000_文本1",
                "label": "文本1",
                "type": "text",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 16
                }
            },
            {
                "name": "E_f90dc12bc889cd11e000_自动编号1",
                "label": "自动编号1",
                "type": "autoNumber",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 15
                },
                "rule": "自动编号-{YYYY}-{MM}-{00}"
            },
            {
                "name": "E_f90dc12bc889cd11e000_日期1",
                "label": "日期1",
                "type": "date",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 14
                },
                "withTime": false
            },
            {
                "name": "E_f90dc12bc889cd11e000_日期范围1",
                "label": "日期范围1",
                "type": "dateRange",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 13
                },
                "withTime": true
            },
            {
                "name": "E_f90dc12bc889cd11e000_数字1",
                "label": "数字1",
                "type": "number",
                "source": "dataLink",
                "optional": true,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [
                        "自动计算1"
                    ],
                    "order": 0
                },
                "scale": 0,
                "unit": "个"
            },
            {
                "name": "E_f90dc12bc889cd11e000_金额1",
                "label": "金额1",
                "type": "money",
                "source": "dataLink",
                "optional": true,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [
                        "自动计算1"
                    ],
                    "order": 1
                }
            },
            {
                "name": "E_f90dc12bc889cd11e000_开关1",
                "label": "开关1",
                "type": "switcher",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 12
                }
            },
            {
                "name": "E_f90dc12bc889cd11e000_收款信息1",
                "label": "收款信息1",
                "type": "ref",
                "source": "dataLink",
                "optional": true,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 11
                },
                "entity": "pay.PayeeInfo"
            },
            {
                "name": "E_f90dc12bc889cd11e000_业务对象1",
                "label": "业务对象1",
                "type": "ref",
                "source": "dataLink",
                "optional": true,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 10
                },
                "entity": "datalink.DataLinkEntity.f50d96e58839a2e8dc00"
            },
            {
                "name": "E_f90dc12bc889cd11e000_业务对象多选2",
                "label": "业务对象多选2",
                "type": "list",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 9
                },
                "elemType": {
                    "type": "ref",
                    "entity": "datalink.DataLinkEntity.ab0d7c7dd27e4ad42c00"
                }
            },
            {
                "name": "E_f90dc12bc889cd11e000_自定义档案1",
                "label": "自定义档案1",
                "type": "ref",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 8
                },
                "entity": "basedata.Dimension.岗位预置"
            },
            {
                "name": "E_f90dc12bc889cd11e000_城市1",
                "label": "城市1",
                "type": "ref",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 7
                },
                "entity": "basedata.city"
            },
            {
                "name": "E_f90dc12bc889cd11e000_部门1",
                "label": "部门1",
                "type": "ref",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 6
                },
                "entity": "organization.Department"
            },
            {
                "name": "E_f90dc12bc889cd11e000_人员1",
                "label": "人员1",
                "type": "ref",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 5
                },
                "entity": "organization.Staff"
            },
            {
                "name": "E_f90dc12bc889cd11e000_人员多选1",
                "label": "人员多选1",
                "type": "list",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 4
                },
                "elemType": {
                    "type": "ref",
                    "entity": "organization.Staff"
                }
            },
            {
                "name": "E_f90dc12bc889cd11e000_自动计算1",
                "label": "自动计算1",
                "type": "money",
                "source": "dataLink",
                "optional": false,
                "defaultValue": "`$金额1`.本位币 * `$数字1`",
                "formula": true,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [
                        "金额1",
                        "数字1"
                    ],
                    "dependenciesBy": [],
                    "order": 3
                }
            },
            {
                "name": "E_f90dc12bc889cd11e000_附件1",
                "label": "附件1",
                "type": "list",
                "source": "dataLink",
                "optional": true,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 2
                },
                "elemType": {
                    "type": "attachment"
                }
            }
        ]
    }
}
```

## 失败响应

`addfields`列表中的字段以`label`为关键字，需要保证其唯一性，否则会返回如下响应：
```text
新增字段label重名[价格]，请输入有效字段名称
```

`delfields`列表中的字段以`label`为关键字，需要保证其真实性，否则会返回如下响应：
```text
删除的字段label不存在[名称, 编码]，请输入有效字段名称
```