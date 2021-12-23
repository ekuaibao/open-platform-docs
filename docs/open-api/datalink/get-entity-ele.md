# 饿了么

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/ELEM/object/`objectId`/search"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **objectId** | String | 扩展类型(order=订单) | 必填 | - | - |

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
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/ELM/object/order/search?accessToken=Ts0byCA-_A4M00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '
{
    "index":1,
    "count":10,
    "ids":["b41a0b811ce2ef06ac00"]
}'
```

## 成功响应
```json
{
    "count": 1,
    "items": [
        {
            "id": "68Ib7YRbTcr400",
            "ownerId": null,
            "visibility": { //可见性
                "fullVisible": true, //是否全员可见 true=全员； false=部分员工可见
                "staff": [], //员工白名单
                "department": [], //部门白名单
                "role": [] //角色白名单
            },
            "useCount": 0,
            "totalCount": 0,
            "active": true, //是否有效
            "entityId": "ce240b1facd3d8051c00", //实体ID
            "E_f7470b1fb59d17803000_code": "1sob7YOBKIiY00", //对象编码
            "E_f7470b1fb59d17803000_name": "饿了么&120", //对象名称
            "E_f7470b1fb59d17803000_stage": "requisition",
            "E_f7470b1fb59d17803000_state": "paid", //支付状态
            "E_f7470b1fb59d17803000_title": "饿了么阶梯价", //标题
            "E_f7470b1fb59d17803000_amount": {
                "standard": "120.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_f7470b1fb59d17803000_linkId": "Bpsb7YOBKIio00",
            "E_f7470b1fb59d17803000_ownerId": "xJcb7WNpckfs00:T9o8YYgddgaY00",
            "E_f7470b1fb59d17803000_detailId": "1sob7YOBKIiY00",
            "E_f7470b1fb59d17803000_linkType": "FLOW",
            "E_f7470b1fb59d17803000_feeTypeId": "954b7YGOqQnk00",
            "E_f7470b1fb59d17803000_travelers": [
                "xJcb7WNpckfs00:T9o8YYgddgaY00",
                "xJcb7WNpckfs00:6t0b7XuoBQ2o00",
                "xJcb7WNpckfs00:dGAb7XuoBQ3400",
                "xJcb7WNpckfs00:F-Yb7XuoBQ1Y00",
                "xJcb7WNpckfs00:Y08b7XuoBQ2c00",
                "xJcb7WNpckfs00:LY4b7XuoBQ1E00"
            ],
            "E_f7470b1fb59d17803000_detailType": "detail",
            "E_f7470b1fb59d17803000_entityType": "COST",
            "E_f7470b1fb59d17803000_printCount": "0",
            "E_f7470b1fb59d17803000_printState": "noPrint",
            "E_f7470b1fb59d17803000_settleTime": "NO_SETTLE",
            "E_f7470b1fb59d17803000_submitDate": 1592390399826,
            "E_f7470b1fb59d17803000_attachments": [],
            "E_f7470b1fb59d17803000_description": "",
            "E_f7470b1fb59d17803000_submitterId": "xJcb7WNpckfs00:T9o8YYgddgaY00",
            "E_f7470b1fb59d17803000_u_订票人": "xJcb7WNpckfs00:T9o8YYgddgaY00",
            "E_f7470b1fb59d17803000_settleStatus": "NO",
            "E_f7470b1fb59d17803000_billingStatus": "NO",
            "E_f7470b1fb59d17803000_apportionMoney": {
                "standard": "120.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_f7470b1fb59d17803000_requisitionDate": 1592323200000,
            "E_f7470b1fb59d17803000_requisitionMoney": {
                "standard": "120.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_f7470b1fb59d17803000_writtenOffAmount": {
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_f7470b1fb59d17803000_expenseDepartment": "xJcb7WNpckfs00:hjcb7XpLR4gY00",
            "E_f7470b1fb59d17803000_consumptionReasons": "",
            "E_f7470b1fb59d17803000_unwrittenOffAmount": {
                "standard": "120.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_f7470b1fb59d17803000_accountPropertyDate": 1592323200000,
            "E_f7470b1fb59d17803000_flowSpecificationId": "SEkb7YnBWU6o00:f58f95b54578fb94ef2f5d6221d9aeba00168af0", //单据模板ID
            "E_f7470b1fb59d17803000_accountPropertyMoney": {
                "standard": "120.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "E_f7470b1fb59d17803000_feeDetailSpecificationId": "954b7YGOqQnk00:requisition:9c05aba3e0c2f7e0af0d44801fe5eac883b88e51",
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