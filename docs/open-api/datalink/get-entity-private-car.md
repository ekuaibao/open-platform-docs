# 私车公用

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/PRIVATE_CAR/object/`objectId`/search"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **objectId** | String | 扩展类型(drivingRecord=行程记录） | 必填 | - | - |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **index** | Number | 当前页                   | 必填  | - | - |
| **count** | Number | 查询数                   | 必填  | - | - |
| **ids**   | Array  | 按照业务对象实例的id查询详情 | 非必填 | - | - |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/PRIVATE_CAR/object/drivingRecord/search?accessToken=Ts0byCA-_A4M00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '
{
    "index":1,
    "count":10,
    "ids":[]
}'
```

## 成功响应
```json
{
    "count": 1,
    "items": [
        {
            "id": "uzobyZz2qgcc00", //业务对象ID
            "ownerId": null,
            "visibility": { //可见性信息
                "fullVisible": false, //是否全部可见  true=全部， false=部分人员
                "staff": [
                    {
                        "version": 3,
                        "active": true,
                        "createTime": 1597050351322,
                        "updateTime": 1597050351322,
                        "nameSpell": "GONGHENG",
                        "code": "1001", //员工编码
                        "corporationId": "JOYbpjPP-E2Q00", //企业ID
                        "userId": "y8gbpjP9OsnI00", //用户ID
                        "id": "JOYbpjPP-E2Q00:y8gbpjP9OsnI00", //员工ID
                        "name": "一号员工", //员工名称
                        "avatar": "",
                        "email": "",
                        "cellphone": "18603000749", //手机号
                        "note": null,
                        "departments": [ //所属部门
                            "JOYbpjPP-E2Q00"
                        ],
                        "defaultDepartment": "JOYbpjPP-E2Q00", //默认部门
                        "external": false, //是否外部人员
                        "order": null
                    }
                ],
                "department": [],
                "role": []
            },
            "useCount": 0, //使用次数
            "totalCount": 1, //总数量
            "active": true, //是否停用
            "entityId": "48e50b8a6c88d3873c00", //实体编码
            "E_48e50b8a6c88d3873c00_code": "dXIbyZxFNYuc00", //对象编码
            "E_48e50b8a6c88d3873c00_name": "一号员工", //对象名称
            "E_48e50b8a6c88d3873c00_备注": "hello",
            "E_48e50b8a6c88d3873c00_出发地": {
                "name": "",
                "time": 1599640932093,
                "remark": null,
                "address": "北京市海淀区海淀街道互联网金融中心",
                "location": {
                    "lat": 39.97919,
                    "lng": 116.31326
                },
                "replenish": null,
                "attachments": null,
                "orignalLocation": {
                    "lat": 39.97919,
                    "lng": 116.31326
                }
            },
            "E_48e50b8a6c88d3873c00_目的地": {
                "name": "",
                "time": 1599640993461,
                "remark": null,
                "address": "北京市海淀区海淀街道互联网金融中心",
                "location": {
                    "lat": 39.97919,
                    "lng": 116.31326
                },
                "replenish": null,
                "attachments": null,
                "orignalLocation": {
                    "lat": 39.97919,
                    "lng": 116.31326
                }
            },
            "E_48e50b8a6c88d3873c00_途经地": [
                {
                    "name": "",
                    "time": 1599640939260,
                    "remark": "开始行走",
                    "address": "北京市海淀区海淀街道互联网金融中心",
                    "location": {
                        "lat": 39.97919,
                        "lng": 116.31326
                    },
                    "replenish": null,
                    "attachments": null,
                    "orignalLocation": {
                        "lat": 39.97919,
                        "lng": 116.31326
                    }
                },
                {
                    "name": "",
                    "time": 1599640956276,
                    "remark": "行走结束",
                    "address": "北京市海淀区海淀街道互联网金融中心",
                    "location": {
                        "lat": 39.97919,
                        "lng": 116.31326
                    },
                    "replenish": null,
                    "attachments": null,
                    "orignalLocation": {
                        "lat": 39.97919,
                        "lng": 116.31326
                    }
                }
            ],
            "E_48e50b8a6c88d3873c00_修改原因": "",
            "E_48e50b8a6c88d3873c00_结束时间": 1599640993461,
            "E_48e50b8a6c88d3873c00_行驶日期": 1599640932093,
            "E_48e50b8a6c88d3873c00_补助标准": {
                "standard": "300.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_48e50b8a6c88d3873c00_补助金额": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_48e50b8a6c88d3873c00_起始时间": 1599640932093,
            "E_48e50b8a6c88d3873c00_行驶总时间": "61368",
            "E_48e50b8a6c88d3873c00_行驶总里程": "0.00",
            "E_48e50b8a6c88d3873c00_是否管理员修改": "",
            "ledgers": [],
            "plans": []
        }
    ]
}
```

## 失败响应
`objectId` 不可传未支持的类型，否则返回一下内容：
```json
{
    "errorCode": 400,
    "errorMessage": "暂不支持此扩展类型查询",
    "errorDetails": null,
    "code": null,
    "data": null
}
```