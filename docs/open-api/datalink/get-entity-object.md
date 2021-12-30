# 获取业务对象实例信息
根据业务对象实例的 `id` 或者 `code` 查询对应数据。

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/DATA_LINK/object/`entityId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **entityId** | String | 业务对象ID | 必填 | - | [获取业务对象](/docs/open-api/datalink/get-entity-list) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters（Body不能为空）

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids**   | Array  | 按照业务对象实例的id查询详情   | 非必填 | - | 业务对象实例id数组 |
| **codes** | Array  | 按照业务对象实例的code查询详情 | 非必填 | - | 业务对象实例code数组 |
| **index** | Number | 当前页                     | 非必填 | - | 当前页 |
| **count** | Number | 查询数                     | 非必填 | - | 每页查询数据量，最大不能超过 `1000` |

:::tip
 - 参数优先级 `ids` > `codes` > `index` 和 `count` ，多组参数均传值时，按优先级最高的开始生效。
 - `ids` 、 `codes` 参数，接口没有校验参数是否在系统中存在，获取不到数据时，请检查参数的准确性。
 - `ids` 、 `codes` 不填时， `index` 和 `count` 两个参数必填，只要传了index和count参数，成功响应中的“count”表示总数。
 - `index` 和 `count` 不填时， `ids` 或 `codes` 参数必填，任意填写其一时，成功响应中的“count”表示有效参数量，而非总数。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/DATA_LINK/object/b41a0b811ce2ef06ac00/search?accessToken=6QMbyAcpng8I00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '
{
    "index":1,
    "count":10,
    "ids":["6BQbyAlofQsA00"],
    "codes":[]
}'
```

## 成功响应
```json
{
    "count": 1, //对象数量
    "items": [  //对象信息
        {
            "id": "6BQbyAlofQsA00",   //业务对象ID
            "ownerId": {  //负责人信息
                "version": 3, //版本
                "active": true, //是否有效
                "createTime": 1597050351322,
                "updateTime": 1597050351322,
                "nameSpell": "GONGHENG",
                "code": "1001", //编码
                "corporationId": "JOYbpjPP-E2Q00", //企业ID
                "userId": "y8gbpjP9OsnI00", //用户ID
                "id": "JOYbpjPP-E2Q00:y8gbpjP9OsnI00", //员工ID
                "name": "一号员工", //员工名称
                "avatar": "",   
                "email": "",
                "cellphone": "18603000749", //手机号
                "note": null,
                "departments": [ //部门
                    "JOYbpjPP-E2Q00"
                ],
                "defaultDepartment": "JOYbpjPP-E2Q00", //默认部门
                "external": false,
                "order": null
            },
            "visibility": { // 可见范围
                "fullVisible": true, //是否全部可见  true=全部， false=部分人员
                "staff": [], //员工白名单
                "department": [], //部门白名单
                "role": [] //角色白名单
            },
            "useCount": 0,
            "totalCount": 0,
            "active": true, //是否停用
            "entityId": "b41a0b811ce2ef06ac00",
            "E_b41a0b811ce2ef06ac00_code": "900925", //对象编码
            "E_b41a0b811ce2ef06ac00_name": "北京合思信息技术有限公司", //对象名称
            "ledgers": [],
            "plans": []
        }
    ]
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "未找到对应的业务对象",
    "errorDetails": null,
    "code": null,
    "data": null
}
```