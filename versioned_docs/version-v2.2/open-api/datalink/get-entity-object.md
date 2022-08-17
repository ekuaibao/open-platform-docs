# 获取业务对象实例信息
根据业务对象实例的 `id` 或者 `code` 查询对应数据。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/DATA_LINK/object/`entityId`/search"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **entityId** | String | 业务对象ID | 必填 | - | 通过 [获取业务对象](/docs/open-api/datalink/get-entity-list) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters（Body不能为空）

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids**   | Array  | 业务对象实例ID数组   | 非必填 | - | 通过 [获取业务对象实例列表](/docs/open-api/datalink/get-entity-info) 获取 |
| **codes** | Array  | 业务对象实例CODE数组 | 非必填 | - | 按照业务对象实例的CODE查询详情 |
| **index** | Number | 查询页数           | 非必填 | - | 从 `1` 开始，不可为 `0`<br/>**表示从第几页开始查询** |
| **count** | Number | 查询数             | 非必填 | - | 每页查询数据量，最大不能超过 `100` |

:::caution
 - 参数优先级 `ids` > `codes` > `index` 和 `count` ，多组参数均传值时，按优先级最高的开始生效。
 - `ids` 、 `codes` 参数，可以为空：`[]`，但是不可传`[null]`，否则会报错。
 - `ids` 、 `codes` 参数，接口没有校验参数是否在系统中存在，获取不到数据时，请检查参数的准确性。
 - `ids` 、 `codes` 不填时， `index` 和 `count` 两个参数必填，只要传了 `index` 和 `count` 参数，成功响应中的 **“count”** 表示总数。
 - `index` 和 `count` 不填时， `ids` 或 `codes` 参数必填，任意填写其一时，成功响应中的 **“count”** 表示有效参数量，而非总数。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/DATA_LINK/object/b41a0b811ce2ef06ac00/search?accessToken=6QMbyAcpng8I00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "index":1,
    "count":10,
    "ids":["6BQbyAlofQsA00"],
    "codes":[]
}'
```

## 成功响应
```json
{
    "count": 1,                         //对象数量
    "items": [                          //对象信息
        {
            "id": "6BQbyAlofQsA00",     //业务对象实例ID
            "ownerId": {                //负责人信息
                "version": 3,           //版本
                "active": true,         //是否有效
                "createTime": 1597050351322,
                "updateTime": 1597050351322,
                "nameSpell": "GONGHENG",
                "code": "1001",                          //编码
                "corporationId": "JOYbpjPP-E2Q00",       //企业ID
                "userId": "y8gbpjP9OsnI00",              //用户ID
                "id": "JOYbpjPP-E2Q00:y8gbpjP9OsnI00",   //员工ID
                "name": "一号员工",                       //员工名称
                "avatar": "",   
                "email": "",
                "cellphone": "18603000749",              //手机号
                "note": null,
                "departments": [                         //部门
                    "JOYbpjPP-E2Q00"
                ],
                "defaultDepartment": "JOYbpjPP-E2Q00",   //默认部门
                "external": false,
                "order": null
            },
            "visibility": {          //可见范围
                "fullVisible": true, //是否全部可见  true=全部， false=部分人员
                "staff": [],         //员工白名单
                "department": [],    //部门白名单
                "role": []           //角色白名单
            },
            "useCount": 0,           //已引用次数
            "totalCount": 0,         //最大引用次数
            "active": true,                      //是否停用
            "entityId": "b41a0b811ce2ef06ac00",  //业务对象ID
            "entity":{                           //业务对象数据
                "pipeline":1,
                "grayver":"9.16.0.0:A",
                "version":14,                //版本
                "active":true,               //是否启用
                "createTime":1639108010124,
                "updateTime":1647835213506,
                "name":"测试单据",            //业务对象数据名称
                "nameSpell":"CESHIDANJU",
                "corporationId":"djg8LshfUkfM00", //企业ID
                "sourceCorporationId":null,
                "dataCorporationId":null,
                "ledgerIds":[                //业务对象台账配置ID
                    "ID_3v7HGBq_dW0"
                ],
                "plannedIds":[               //业务对象执行计划配置ID
                    "ID_3BDK0O2lbe0"
                ],
                "parentId":"",
                "code":"",                   //编码
                "scoped":false,
                "multiCurrencyFlag":false,
                "importOverrideStrategy":{
                    "api":"CODE_DUPLI_OVERRIDE",
                    "excel":"CODE_DUPLI_OVERRIDE"
                },
                "visibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "type":"BILL",
                "disableStrategy":"MANUAL_ADMIN",
                "maxUsageCount":0,
                "writtenOffField":null,
                "fields":[                       //字段信息
                    {
                        "name":"E_a10dd7f32900de827800_name",
                        "label":"name",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":true,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":4
                        }
                    },
                    {
                        "name":"E_a10dd7f32900de827800_code",
                        "label":"code",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":true,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":3
                        }
                    },
                    {
                        "name":"E_a10dd7f32900de827800_test1",
                        "label":"test1",
                        "type":"text",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":2
                        }
                    },
                    {
                        "name":"E_a10dd7f32900de827800_money",
                        "label":"money",
                        "type":"money",
                        "source":"dataLink",
                        "optional":false,
                        "defaultValue":null,
                        "formula":false,
                        "index":false,
                        "systemField":false,
                        "calculation":{
                            "dependencies":[],
                            "dependenciesBy":[],
                            "order":1
                        }
                    }
                ],
                "defaultMappingRuleId":"ID_3tvPzlC0WgM", //默认映射规则ID
                "filterId":null,
                "id":"a10dd7f32900de827800",             //业务对象实例ID
                "platformId":"ID_3tvOoC0feMw",
                "details":null,
                "homePageVisibleIds":null,
                "homeVisibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "exportVisibility":{
                    "fullVisible":false,
                    "staffs":[],
                    "roles":[],
                    "departments":[],
                    "departmentsIncludeChildren":true
                },
                "ownerDepts":false,
                "showOnPage":true,
                "importMethod":[
                    "excel",
                    "api",
                    "ebot",
                    "flow",
                    "directly"
                ],
                "allowRecordLog":false,
                "logFields":[],
                "showBook":false,
                "allowAddSubType":true,
                "dataFilter":false
            },
            "E_b41a0b811ce2ef06ac00_code": "900925",                  //对象编码
            "E_b41a0b811ce2ef06ac00_name": "北京合思信息技术有限公司",  //对象名称
            "ledgers": [],
            "plans": []
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 未找到对应的业务对象 | 请确认 `entityId`（业务对象ID）是否存在 | 
