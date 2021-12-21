# 创建业务对象

{% httpverb "put" %}  /api/openapi/v2/datalink/createDataLinkEntity {% endhttpverb %}

#### Query Parameters:

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注  |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **accessToken** | String | 认证token  | 必填 | - | [通过授权接口获取](/getting-started/auth.html)  |

#### Body Parameters:
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **dataLinkEntityReq**                        | Object  | 业务对象数据                 | 必填  | -     | 业务对象字段配置数据 |
| **dataLinkEntityReq/platformId**             | String  | 所属扩展ID                  | 必填  | -     | 所属的自定义扩展ID |
| **dataLinkEntityReq/name**                   | String  | 业务对象名称                 | 必填  | -     | 业务对象名称 |
| **dataLinkEntityReq/scoped**                 | Boolean | 参与人配置                   | 必填  | false | `false`:全员参与<br>`true`:部分人员参与 |
| **dataLinkEntityReq/ownerDepts**             | Boolean | 参与人是否默认为负责人的所在部门 | 非必填 | false | `false`:否 `true`:是<br>业务对象”参与人配置“为”部分人员参与“时此参数才有效 |
| **dataLinkEntityReq/visibility**             | Object  | 参与人白名单                 | 非必填 | -     | 业务对象”参与人配置“为”部分人员参与“时此参数才有效 |
| **dataLinkEntityReq/visibility/fullVisible** | Boolean | 是否开启参与人白名单           | 非必填 | false | `true`:开启<br>`false`:关闭 |
| **dataLinkEntityReq/visibility/staffs**      | Array   | 员工白名单                   | 非必填 | -     | 值为[员工id](/corporation/get-all-staffs.html) |
| **dataLinkEntityReq/visibility/roles**       | Array   | 角色白名单                   | 非必填 | -     | 值为[角色id](/corporation/get-roles-group.html) |
| **dataLinkEntityReq/visibility/departments** | Array   | 部门白名单                   | 非必填 | -     | 值为[部门id](/corporation/get-departments.html) |
| **dataLinkEntityReq/visibility/<br>departmentsIncludeChildren** | Boolean | 子部门是否可见 | 非必填 | true | `true`:可见<br>`false`:不可见 |
| **dataLinkEntityReq/type**                   | String  | 业务对象类型                 | 必填   | -     | `DIMENSION`:基础档案<br>`BILL`:单据<br>`ORDER`:订单 |
| **dataLinkEntityReq/disableStrategy**        | String | 停用方式                     | 必填   | -     | `MANUAL_ADMIN`:管理员停启用<br>`LIMIT_COUNT`:限制引用次数 |
| **dataLinkEntityReq/maxUsageCount**          | Number | 最大引用次数                  | 非必填 | 0     | 该参数不可省略，可传""。仅当“限制引用次数”时有效 |
| **dataLinkEntityReq/importMethod**           | Array  | 导入方式                     | 必填   | -     | `excel`:Excel<br>`api`:API<br>`ebot`:EBot<br>`flow`:单据写入<br>`directly`:直接写入 |
| **dataLinkEntityReq/fieldMapping**           | Object | 业务对象赋值规则               | 必填   | -     | 设置业务对象字段赋值给单据字段的规则，参数格式见CURL示例 |
| **dataLinkEntityReq/fields**                 | Array  | 业务对象字段配置               | 必填   | -     | 业务对象字段配置信息 |
| **dataLinkEntityReq/fields/name**            | String  | 字段实际名称      | 非必填 | - | 字段实际名称，“名称”、“编码”两个系统字段此参数必填 |
| **dataLinkEntityReq/fields/label**           | String  | 字段显示名称      | 必填   | - | 字段显示名称 |
| **dataLinkEntityReq/fields/type**            | String  | 字段类型         | 必填   | - | `text`:文本<br>`number`:数字<br>`autoNumber`:自动编码<br>`date`:日期<br>`dateRange`:日期范围<br>`money`:金额<br>`switcher`:开关<br>`ref`:关联业务对象<br>`list`:多选 |
| **dataLinkEntityReq/fields/optional**        | Boolean | 字段是否必填      | 必填   | true | `false`:必填<br>`true`:选填 |
| **dataLinkEntityReq/fields/scale**           | Number  | 小数位数         | 非必填 | - | `type` 为 `number` 时必填 |
| **dataLinkEntityReq/fields/unit**            | String  | 单位            | 非必填 | - | `type` 为 `number` 时必填 |
| **dataLinkEntityReq/fields/rule**            | String  | 自动编号生成规则   | 非必填 | - | `type` 为 `autoNumber` 时必填。 请查看问题四，[了解具体编码规则](/datalink/question-answer.md) |
| **dataLinkEntityReq/fields/withTime**        | Boolean | 是否包含时间      | 非必填 | false | `type` 为 `date`或`dateRange` 时必填<br>`true`:包含<br>`false`:不包含|
| **dataLinkEntityReq/fields/entity**          | String  | 业务对象取值范围   | 非必填 | - | `type` 为 `ref` 时必填 |
| **dataLinkEntityReq/fields/formula**         | Boolean | 是否是自动计算类型 | 非必填 | false | `type` 为 `number`或`money`时有效<br>`true`:是<br>`false`:否 |
| **dataLinkEntityReq/fields/defaultValue**    | String  | 计算公式         | 非必填 | - | `formula` 为 `true` 时必填，计算公式内容 |

<br/>
#### CURL:
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/datalink/createDataLinkEntity?accessToken=ID_3s4wXvSfYiw:djg8LshfUkfM00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dataLinkEntityReq":{  //业务对象数据
        "platformId":"ID_3rGmfE$cfo0",  //所属扩展ID
        "name":"业务对象全部字段参数示例",  //业务对象名称
        "scoped":true,  //参与人权限，true：部分人员参与，false：全员参与
        "ownerDepts":true,  //参与人是否默认为负责人的所在部门,true：是，false：否  scoped=true时，此参数有效
        "visibility":{  //参与人白名单，scoped=true时，此参数有效
            "roles":[  //角色白名单  
                "qXE8Mmqokk8U00"  //角色id
            ],
            "staffs":[  //员工白名单 
                "djg8LshfUkfM00:ID_3kpneISgylw"  //员工id
            ],
            "departments":[  //部门白名单
                "djg8LshfUkfM00:WggaWlxmRk9U00"  //部门id
            ],
            "fullVisible":true,  //是否开启参与人白名单 true:开启 false:关闭
            "departmentsIncludeChildren":true  //子部门是否可见	true:可见 false:不可见
        },
        "type":"DIMENSION",  //业务对象类型   DIMENSION:基础档案，BILL:单据，ORDER:订单
        "disableStrategy":"LIMIT_COUNT",  //停用方式  MANUAL_ADMIN:管理员停启用,LIMIT_COUNT:限制引用次数
        "maxUsageCount":3,  //最大引用次数	该参数不可省略，可传""。仅当“限制引用次数”时有效
        "importMethod":[  //导入方式	`excel`:Excel,`api`:API,`ebot`:EBot,`flow`:单据写入,`directly`:直接写入
            "excel",
            "api",
            "ebot",
            "flow",
            "directly"
        ],
        "fields":[  //业务对象字段配置信息
            {
                "name":"name",  //字段实际名称，系统字段-必须为name
                "label":"名称",  //字段显示名称，不为空即可
                "type":"text",  //字段类型  文本
                "optional":false //字段是否必填，系统字段-必填  false：必填，true：选填
            },
            {
                "name":"code",  //字段实际名称，系统字段-必须为code
                "label":"编码",  //字段显示名称，不为空即可
                "type":"autoNumber",  //字段类型  自动编号
                "optional":false,  //字段是否必填，系统字段-必填  false：必填，true：选填
                "rule":"B{YY}{000000}" //自动编号规则 显示效果：B21001234
            },
            {
                "label":"文本",  //字段显示名称，不为空即可
                "type":"text",  //字段类型  文本
                "optional":false  //字段是否必填  false：必填，true：选填
            },
            {
                "label":"自动编号",  //字段显示名称，不为空即可
                "type":"autoNumber",  //字段类型  自动编号
                "optional":false,  //字段是否必填  false：必填，true：选填
                "rule":"自动编号-{YYYY}-{MM}-{00}"  //自动编号规则 显示效果：自动编号-2021-1220-04
            },
            {
                "label":"日期",  //字段显示名称，不为空即可
                "type":"date",  //字段类型 日期
                "optional":false,  //字段是否必填  false：必填，true：选填
                "withTime":false  //是否包含时间  false：不包含，true：包含
            },
            {
                "label":"日期范围",  //字段显示名称，不为空即可
                "type":"dateRange",  //字段类型 日期范围
                "optional":false,  //字段是否必填  false：必填，true：选填
                "withTime":true  //是否包含时间  false：不包含，true：包含
            },
            {
                "label":"数字",  //字段显示名称，不为空即可
                "type":"number",  //字段类型 数字
                "optional":true,  //字段是否必填  false：必填，true：选填
                "scale":0,  //小数位数
                "unit":"个"  //单位
            },
            {
                "label":"金额",  //字段显示名称，不为空即可
                "type":"money",  //字段类型 金额
                "optional":true  //字段是否必填  false：必填，true：选填
            },
            {
                "label":"开关",  //字段显示名称，不为空即可
                "type":"switcher",  //字段类型 开关
                "optional":false  //字段是否必填  false：必填，true：选填
            },
            {
                "label":"收款信息",  //字段显示名称，不为空即可
                "type":"ref",  //字段类型 关联业务对象 
                "optional":true,  //字段是否必填  false：必填，true：选填
                "entity":"pay.PayeeInfo"  //业务对象取值范围  此为收款信息
            },
            {
                "label":"业务对象",  //字段显示名称，不为空即可
                "type":"ref",  //字段类型 关联业务对象 
                "optional":true,  //字段是否必填  false：必填，true：选填
                "entity":"datalink.DataLinkEntity.f50d96e58839a2e8dc00"  //业务对象取值范围  此为自定义的业务对象，格式：datalink.DataLinkEntity.业务对象ID
            },
            {
                "label":"业务对象多选",  //字段显示名称，不为空即可
                "type":"list",  //字段类型 多选
                "optional":false,  //字段是否必填  false：必填，true：选填
                "elemType":{   //多选时的参数类型
                    "type":"ref",  //字段类型，关联业务对象
                    "entity":"datalink.DataLinkEntity.ab0d7c7dd27e4ad42c00"  //业务对象取值范围  此为自定义的业务对象，格式：datalink.DataLinkEntity.业务对象ID
                }
            },
            {
                "label":"自定义档案",  //字段显示名称，不为空即可
                "type":"ref",  //字段类型 关联业务对象 
                "optional":false,  //字段是否必填  false：必填，true：选填
                "entity":"basedata.Dimension.岗位预置"  //业务对象取值范围  此为自定义档案，系统预制的岗位档案
            },
            {
                "label":"城市",  //字段显示名称，不为空即可
                "type":"ref",  //字段类型 关联业务对象 
                "optional":false,  //字段是否必填  false：必填，true：选填
                "entity":"basedata.city"  //业务对象取值范围  此为系统预制的城市数据
            },
            {
                "label":"部门",  //字段显示名称，不为空即可
                "type":"ref",  //字段类型 关联业务对象 
                "optional":false,  //字段是否必填  false：必填，true：选填
                "entity":"organization.Department"  //业务对象取值范围  此为组织结构里面的部门信息
            },
            {
                "label":"人员",  //字段显示名称，不为空即可
                "type":"ref",  //字段类型 关联业务对象
                "optional":false,  //字段是否必填  false：必填，true：选填
                "entity":"organization.Staff"  //业务对象取值范围  此为组织结构里面的员工信息
            },
            {
                "label":"人员多选",  //字段显示名称，不为空即可
                "type":"list",  //字段类型 多选
                "optional":false,  //字段是否必填  false：必填，true：选填
                "elemType":{  //多选时的参数类型
                    "type":"ref",  //字段类型，关联业务对象
                    "entity":"organization.Staff"  //业务对象取值范围  此为组织结构里面的员工信息
                }
            },
            {
                "label":"自动计算",  //字段显示名称，不为空即可
                "type":"money",  //字段类型 金额，此为自动计算的结果值类型
                "optional":false,  //字段是否必填  false：必填，true：选填
                "formula":true,  //是否是自动计算类型，`true`:是 `false`:否
                "defaultValue":"`$金额`.本位币 * `$数字`"  //计算公式，值 = 金额字段 * 数字
            },
            {
                "label":"附件",  //字段显示名称，不为空即可
                "type":"list",  //字段类型 多选
                "elemType":{  //多选时的参数类型
                    "type":"attachment"  //字段类型，附件类型
                },
                "optional":true  //字段是否必填  false：必填，true：选填
            }
        ],
        "fieldMapping":{  //业务对象赋值规则
            "名称":[  //业务对象字段
                "title","u_文本2"  //单据字段  title：单据标题，u_文本2：自定义字段
            ],
            "部门":[  //业务对象字段
                "expenseDepartment"  //单据字段
            ]
        }
    }
}'
```

<br/>
#### 成功响应:
```json
{
    "value": {
        "pipeline": 1,
        "grayver": "9.7.0.0:A",
        "version": 3,
        "active": true,
        "createTime": 1637579408595,
        "updateTime": 1637579408595,
        "name": "业务对象全部字段参数示例",
        "nameSpell": "YEWUDUIXIANGQUANBUZIDUANCANSHUSHILI",
        "corporationId": "djg8LshfUkfM00",
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "ledgerIds": null,
        "plannedIds": null,
        "parentId": "",
        "code": "",
        "scoped": true,
        "visibility": {
            "fullVisible": true,
            "staffs": [
                "djg8LshfUkfM00:ID_3kpneISgylw"
            ],
            "roles": [
                "qXE8Mmqokk8U00"
            ],
            "departments": [
                "djg8LshfUkfM00:WggaWlxmRk9U00"
            ],
            "departmentsIncludeChildren": true
        },
        "type": "DIMENSION",
        "disableStrategy": "LIMIT_COUNT",
        "maxUsageCount": 3,
        "writtenOffField": null,
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
                "name": "E_f90dc12bc889cd11e000_文本",
                "label": "文本",
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
                "name": "E_f90dc12bc889cd11e000_自动编号",
                "label": "自动编号",
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
                "name": "E_f90dc12bc889cd11e000_日期",
                "label": "日期",
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
                "name": "E_f90dc12bc889cd11e000_日期范围",
                "label": "日期范围",
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
                "name": "E_f90dc12bc889cd11e000_数字",
                "label": "数字",
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
                        "自动计算"
                    ],
                    "order": 1
                },
                "scale": 0,
                "unit": "个"
            },
            {
                "name": "E_f90dc12bc889cd11e000_金额",
                "label": "金额",
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
                        "自动计算"
                    ],
                    "order": 0
                }
            },
            {
                "name": "E_f90dc12bc889cd11e000_开关",
                "label": "开关",
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
                "name": "E_f90dc12bc889cd11e000_收款信息",
                "label": "收款信息",
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
                "name": "E_f90dc12bc889cd11e000_业务对象",
                "label": "业务对象",
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
                "name": "E_f90dc12bc889cd11e000_业务对象多选",
                "label": "业务对象多选",
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
                "name": "E_f90dc12bc889cd11e000_自定义档案",
                "label": "自定义档案",
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
                "name": "E_f90dc12bc889cd11e000_城市",
                "label": "城市",
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
                "name": "E_f90dc12bc889cd11e000_部门",
                "label": "部门",
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
                "name": "E_f90dc12bc889cd11e000_人员",
                "label": "人员",
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
                "name": "E_f90dc12bc889cd11e000_人员多选",
                "label": "人员多选",
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
                "name": "E_f90dc12bc889cd11e000_自动计算",
                "label": "自动计算",
                "type": "money",
                "source": "dataLink",
                "optional": false,
                "defaultValue": "`$金额`.本位币 * `$数字`",
                "formula": true,
                "index": false,
                "systemField": false,
                "calculation": {
                    "dependencies": [
                        "数字",
                        "金额"
                    ],
                    "dependenciesBy": [],
                    "order": 3
                }
            },
            {
                "name": "E_f90dc12bc889cd11e000_附件",
                "label": "附件",
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
        ],
        "defaultMappingRuleId": "ID_3s4HO8Dddu0",
        "filterId": null,
        "id": "f90dc12bc889cd11e000",
        "platformId": "ID_3rGmfE$cfo0",
        "details": null,
        "homePageVisibleIds": null,
        "homeVisibility": {
            "fullVisible": false,
            "staffs": [],
            "roles": [],
            "departments": [],
            "departmentsIncludeChildren": true
        },
        "exportVisibility": {
            "fullVisible": false,
            "staffs": [],
            "roles": [],
            "departments": [],
            "departmentsIncludeChildren": true
        },
        "ownerDepts": true,
        "showOnPage": true,
        "importMethod": [
            "excel",
            "api",
            "ebot",
            "flow",
            "directly"
        ],
        "allowRecordLog": false,
        "logFields": [],
        "showBook": false,
        "allowAddSubType": true,
        "dataFilter": false
    }
}
```

#### 失败响应:
业务对象的 name 值需要保证其唯一性，否则会返回如下响应：
```text
业务对象名称重复，请修改！
```

<style>
    table {
		width: 100%; /*表格宽度*/
		border-collapse: collapse; /*使用单一线条的边框*/
		empty-cells: show; /*单元格无内容依旧绘制边框*/
		}
    /* 悬浮变色 */
	table tr:hover {
		background: #B2B2B2 !important;
		}
    /* 首列不换行 */
	table td:nth-child(1) {
		white-space: nowrap;
	}
    /* 指定列宽度 */
	table th:nth-of-type(1) { 
		width: 30%;
		white-space: nowrap;
	}
    table th:nth-of-type(2) {
		width: 10%;
		white-space: nowrap;
	}
    table th:nth-of-type(3) {
		width: 15% !important;
		white-space: nowrap;
	}
    table th:nth-of-type(4) {
		width: 8%;
		white-space: nowrap;
	}
    table th:nth-of-type(5) {
		width: 7%;
		white-space: nowrap;
	}
    table th:nth-of-type(6) {
		width: 20% !important;
		white-space: nowrap;
	}
</style>
