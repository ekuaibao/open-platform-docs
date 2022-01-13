# 爱客CRM

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/IKCRM/object/`objectId`/search"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **objectId** | String  | 扩展类型 | 必填 | - | `business` : 商机 &emsp; `contract` : 合同 &emsp; `client` : 客户 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |


## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **index** | Number | 当前页        | 必填  | - | 当前页 |
| **count** | Number | 查询数        | 必填  | - | 查询数 |
| **ids**   | Array  | 业务对象实例id | 非必填 | - | 按照业务对象实例的id查询详情 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/IKCRM/object/contract/search?accessToken=Ts0byCA-_A4M00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "index":1,
    "count":10,
    "ids":["0h89iAv3CQvQ00"]
}'
```

## 成功响应
```json
{
    "count": 3,
    "items": [
        {
            "id": "0h89iAv3CQvQ00", //业务对象ID
            "ownerId": {
                "version": 415, //版本号
                "active": false, //是否启用
                "createTime": 1528769087502,
                "updateTime": 1590745417952,
                "nameSpell": "LULEILEI",
                "code": "", //编码
                "corporationId": "jsw646Uwfo0400", //企业ID
                "userId": "qy01e03a61cc5fbfb29be61c66fe", //用户ID
                "id": "jsw646Uwfo0400:LuLeiLei", //员工ID
                "name": "卢垒垒", //员工名称
                "avatar": "https://wework.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7BsibLvVBr0clKgKjaZWudCpfR5hEpibyFMTQx6Bc1TlbLgicAMWkPq4FYLE/0",
                "email": null,
                "cellphone": "15252461049", //手机号
                "note": null,
                "departments": [ //所属部门
                    "jsw646Uwfo0400:1634019321"
                ],
                "defaultDepartment": "jsw646Uwfo0400:1634019321", //默认部门
                "external": false, //是否外部员工
                "order": null
            },
            "visibility": { //可见性
                "fullVisible": false, //是否全员可见； true=全员; false=部门员工可见
                "staff": [], //员工白名单
                "department": [], //部门白名单
                "role": [] //角色白名单
            },
            "useCount": 0, //使用数
            "totalCount": 0, //总数量
            "active": true, //是否有效
            "entityId": "xvw9iA35msbc00",
            "E_xvw9iA35msbc00_code": "2579487", //业务对象编码
            "E_xvw9iA35msbc00_name": "合同1", //业务对象名称
            "E_xvw9iA35msbc00_客户ID": "44160961",
            "E_xvw9iA35msbc00_总金额": {
                "standard": "11.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_xvw9iA35msbc00_合同状态": "未开始",
            "E_xvw9iA35msbc00_客户名称": "客户3",
            "E_xvw9iA35msbc00_签约日期": 1560873600000,
            "E_xvw9iA35msbc00_未收款金额": {
                "standard": "11.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
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

