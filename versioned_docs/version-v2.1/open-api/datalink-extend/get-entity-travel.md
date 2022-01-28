# 获取【行程】业务对象数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/TRAVEL/object/`objectId`/search"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **objectId** | String | 行程类型 | 必填 | - | `travel` : 所有行程&emsp; `train` : 火车行程&emsp; `taxi` : 打车行程<br/>`hotel` : 酒店行程&emsp; `flight` : 机票行程 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids**   | Array  | 业务对象实例ID数组 | 非必填 | - | 按照[业务对象实例的ID](/docs/open-api/datalink/get-entity-info)查询详情 |
| **index** | Number |  开始索引           | 非必填 | - | 从 `1` 开始，不可为 `0` |
| **count** | Number |  查询数             | 非必填 | - | 每页查询数据量，最大不能超过 `1000` |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/TRAVEL/object/travel/search?accessToken=Ts0byCA-_A4M00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "index":1,
    "count":10,
    "ids":["0m4aN2sTKEv000"]
}'
```

## 成功响应
```json
{
    "count": 1,
    "items": [
        {
            "id": "0m4aN2sTKEv000",                    //业务对象ID
            "ownerId": {                               //负责人
                "version": 128,                        //版本号
                "active": true,                        //是否启用
                "createTime": 1577066928842,
                "updateTime": 1599061982830,
                "nameSpell": "MAXIAO",
                "code": "0650",                        //员工编码
                "corporationId": "jsw646Uwfo0400",     //企业ID
                "userId": "qy01773affcc89bfb79b68c7c3f3",             //用户ID
                "id": "jsw646Uwfo0400:qy01773affcc89bfb79b68c7c3f3",  //员工ID
                "name": "马骁",                        //员工名称
                "avatar": "https://wework.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7Bs0LwtRFOibzwibGKx05gZplOHKmNkeCqYTbO57kunGZLndVYIFEU1W3EA/0",
                "email": "endtiger@sina.com",
                "cellphone": "15764907096",            //手机号
                "note": "费控产品部",
                "departments": [                       //所属部门
                    "jsw646Uwfo0400:1634018471"
                ],
                "defaultDepartment": "jsw646Uwfo0400:1634018471", //默认部门
                "external": false,                     //是否外部人员
                "order": {
                    "jsw646Uwfo0400:1634018471": "0"
                }
            },
            "visibility": {
                "fullVisible": false,
                "staff": [],
                "department": [],
                "role": []
            },
            "useCount": 0,                 //使用数量
            "totalCount": 1,               //总数量
            "active": true,                //是否有效
            "entityId": "a90909923caa65007000",
            "E_fa1409923caa65001000_code": "TRIP0000000007",  //业务对象编码
            "E_fa1409923caa65001000_name": "辅导费",           //业务对象名称
            "E_fa1409923caa65001000_出发地": "[{\"key\":\"858\",\"label\":\"上海市区\"}]",
            "E_fa1409923caa65001000_同行人": [
                {
                    "version": 304,
                    "active": true,
                    "createTime": 1558663461693,
                    "updateTime": 1599061982830,
                    "nameSpell": "YANFENG",
                    "code": "0000275",
                    "corporationId": "jsw646Uwfo0400",
                    "userId": "qy01383acfcc5abfb09baabf8456",
                    "id": "jsw646Uwfo0400:qy01383acfcc5abfb09baabf8456",
                    "name": "严峰",
                    "avatar": "http://wework.qpic.cn/bizmail/kDBJlOrWCQMB2h0aTIxYIgPlcPzJNWiaEYBcSovOaHD97Ig87uiaSmsA/0",
                    "email": null,
                    "cellphone": "18217376879",
                    "note": null,
                    "departments": [
                        "jsw646Uwfo0400:1634021527"
                    ],
                    "defaultDepartment": "jsw646Uwfo0400:1634021527",
                    "external": false,
                    "order": null
                },
                {
                    "version": 332,
                    "active": true,
                    "createTime": 1535537754582,
                    "updateTime": 1599061982830,
                    "nameSpell": "YUHENGZHONG",
                    "code": "",
                    "corporationId": "jsw646Uwfo0400",
                    "userId": "qy01ec3a82ccfebfb19b3d851bd1",
                    "id": "jsw646Uwfo0400:YuHengZhong",
                    "name": "于恒忠",
                    "avatar": "http://wework.qpic.cn/bizmail/QCRMVrYlqzYk15RtjhJG9H7OicKp7H1KVeYicgL5FTyN6gsP4oS0PyRQ/0",
                    "email": null,
                    "cellphone": null,
                    "note": null,
                    "departments": [
                        "jsw646Uwfo0400:1634018450"
                    ],
                    "defaultDepartment": "jsw646Uwfo0400:1634018450",
                    "external": false,
                    "order": null
                },
                {
                    "version": 107,
                    "active": true,
                    "createTime": 1577721541334,
                    "updateTime": 1599061982830,
                    "nameSpell": "YUMENG",
                    "code": "",
                    "corporationId": "jsw646Uwfo0400",
                    "userId": "qy01ae3a77cc19bfb69bb04e305b",
                    "id": "jsw646Uwfo0400:qy01ae3a77cc19bfb69bb04e305b",
                    "name": "于梦",
                    "avatar": "https://wework.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7Bsib2UIxz8FJVVcHF4LY94VKqp4sfLzKFG9jn6EgrwoegIZIC76lcsf4w/0",
                    "email": null,
                    "cellphone": null,
                    "note": null,
                    "departments": [
                        "jsw646Uwfo0400:1634021552"
                    ],
                    "defaultDepartment": "jsw646Uwfo0400:1634021552",
                    "external": false,
                    "order": {
                        "jsw646Uwfo0400:1634018435": "0"
                    }
                }
            ],
            "E_fa1409923caa65001000_申请人": {
                "version": 128,
                "active": true,
                "createTime": 1577066928842,
                "updateTime": 1599061982830,
                "nameSpell": "MAXIAO",
                "code": "0650",
                "corporationId": "jsw646Uwfo0400",
                "userId": "qy01773affcc89bfb79b68c7c3f3",
                "id": "jsw646Uwfo0400:qy01773affcc89bfb79b68c7c3f3",
                "name": "马骁",
                "avatar": "https://wework.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7Bs0LwtRFOibzwibGKx05gZplOHKmNkeCqYTbO57kunGZLndVYIFEU1W3EA/0",
                "email": "endtiger@sina.com",
                "cellphone": "15764907096",
                "note": "费控产品部",
                "departments": [
                    "jsw646Uwfo0400:1634018471"
                ],
                "defaultDepartment": "jsw646Uwfo0400:1634018471",
                "external": false,
                "order": {
                    "jsw646Uwfo0400:1634018471": "0"
                }
            },
            "E_fa1409923caa65001000_目的地": "[{\"key\":\"2123\",\"label\":\"广州市区\"}]",
            "E_fa1409923caa65001000_出发日期": 1586188800000,
            "ledgers": [],
            "plans": []
        }
    ]
}
```

## 失败响应
`objectId` 不可传未支持的类型，否则报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "暂不支持此扩展类型查询",
    "errorDetails": null,
    "code": null,
    "data": null
}
```