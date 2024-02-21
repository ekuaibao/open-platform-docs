# 获取企业商品授权信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/charge/powers/list"
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
| **accessToken**  | String | 认证token    | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v1/charge/powers/list?accessToken=ID01rThj8ursd8%3ATdk3tgber501v0'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "ID_3tg2GH31y50",                //购买记录唯一标识
            "createTime": "2021-12-07 11:06:36",   //创建时间
            "updateTime": "2023-08-08 11:24:11",   //更新时间
            "createUserId": null,                  //创建人
            "corporationId": "Tdk3tgber501v0",     //企业ID
            "powerCode": "110101",                 //应用编码
            "chargeInfoId": "ID_3tg2GH31x50",      //应用信息ID
            "state": "using",                      //状态
            "autoAdd": true,                       
            "chargeInfo": {                        //应用信息
                "type": "peoples",
                "id": "ID_3tg2GH31x50",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "110101",
                "expireTime": "2026-01-30 23:59:59",//应用到期日期
                "paymentStatus": null,
                "sumPeople": 99999,                 
                "usedPeople": 14
            },
            "power": {
                "id": "82ba8428-b096-4b5f-8e23-8a439f643325",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "基础功能",                   //应用名称
                "code": "110101",
                "chargeType": "peoplesCount",
                "isDefault": true,
                "allowSetAuto": true,
                "isVisible": true,
                "authorizeType": "FREE"
            },
            "histories": null
        },
        {
            "id": "ID_3tg2GH31C50",
            "createTime": "2021-12-07 11:06:36",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "110202",
            "chargeInfoId": "ID_3tg2GH31B50",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID_3tg2GH31B50",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "110202",
                "expireTime": "2026-01-30 23:59:59",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "25a99e54-63cb-4779-bdab-a78be3a207bc",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "预算费控",
                "code": "110202",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": true,
                "authorizeType": "BYTIME"
            },
            "histories": null
        },
        {
            "id": "ID01oTu8dhwTef",
            "createTime": "2021-12-07 11:06:36",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "110208",
            "chargeInfoId": "ID01oTu8dhwSXJ",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID01oTu8dhwSXJ",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "110208",
                "expireTime": "2026-01-30 23:59:59",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "7da99537-7a67-4987-8eb7-249cea310918",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "多币种",
                "code": "110208",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": true,
                "authorizeType": "BYTIME"
            },
            "histories": null
        },
        {
            "id": "ID01nq6SUboyxV",
            "createTime": "2023-02-22 16:21:02",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "110404",
            "chargeInfoId": "ID01nq6SUboyhp",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID01nq6SUboyhp",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "110404",
                "expireTime": "2026-01-30 23:59:59",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "09c2f740-862d-11e7-bae6-02a44d6f4149",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "费用标准",
                "code": "110404",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": true,
                "authorizeType": "BYTIME"
            },
            "histories": null
        },
        {
            "id": "ID01nDpzZNblrF",
            "createTime": "2023-03-02 15:15:15",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "110405",
            "chargeInfoId": "ID01nDpzZNblb9",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID01nDpzZNblb9",
                "createTime": "2023-05-31 11:51:00",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "110405",
                "expireTime": "2026-06-30 11:51:00",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "efba9069-1d08-11e8-9b92-02a44d78cd59",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "出站消息",
                "code": "110405",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": true,
                "authorizeType": "BYTIME"
            },
            "histories": null
        },
        {
            "id": "ID01nDpzZNbjQz",
            "createTime": "2023-03-02 15:15:15",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "110407",
            "chargeInfoId": "ID01nDpzZNbjA3",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID01nDpzZNbjA3",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "110407",
                "expireTime": "2026-01-30 23:59:59",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "c22b7216-1fb2-11e9-a40c-0a580af40f09",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "OCR智能票据识别",
                "code": "110407",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": true,
                "authorizeType": "BYTIME"
            },
            "histories": null
        },
        {
            "id": "ID01nDpzZNbonl",
            "createTime": "2023-03-02 15:15:15",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "111000",
            "chargeInfoId": "ID01nDpzZNbo6P",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID01nDpzZNbo6P",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "111000",
                "expireTime": "2026-01-30 23:59:59",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "9d527b2e-84c1-406a-a8fa-b7331a757947",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "E-Bot",
                "code": "111000",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": true,
                "authorizeType": "BYTIME"
            },
            "histories": null
        },
        {
            "id": "ID01nDpzZNbpYr",
            "createTime": "2023-03-02 15:15:15",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "219902",
            "chargeInfoId": "ID01nDpzZNbpHV",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID01nDpzZNbpHV",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "219902",
                "expireTime": "2026-01-30 23:59:59",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "1ea76630-d421-11e7-8f43-02a44da297e6",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "开放接口",
                "code": "219902",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": true,
                "authorizeType": "BYTIME"
            },
            "histories": null
        },
        {
            "id": "ID_3tg2GH31G50",
            "createTime": "2021-12-07 11:07:03",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "219903",
            "chargeInfoId": "ID_3tg2GH31F50",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID_3tg2GH31F50",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "219903",
                "expireTime": "2026-01-30 23:59:59",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "efba9069-1d08-11e8-9b92-02a44d78c16a",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "通讯录接口",
                "code": "219903",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": true,
                "authorizeType": "FREE"
            },
            "histories": null
        },
        {
            "id": "ID_3tg2GH31J50",
            "createTime": "2021-12-07 11:07:15",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "219904",
            "chargeInfoId": "ID_3tg2GH31I50",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID_3tg2GH31I50",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "219904",
                "expireTime": "2026-01-30 23:59:59",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "5b782bfb-d7c6-11ea-8edf-98039b776d5a",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "开放接口(新)",
                "code": "219904",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": true,
                "authorizeType": "BYTIME"
            },
            "histories": null
        },
        {
            "id": "ID01nDpzZNbnjh",
            "createTime": "2023-03-02 15:15:15",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "219906",
            "chargeInfoId": "ID01nDpzZNbn2L",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID01nDpzZNbn2L",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "219906",
                "expireTime": "2026-01-30 23:59:59",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "aefcb74d-4365-11eb-b018-005056995a15",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "API通讯录&手动维护",
                "code": "219906",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": true,
                "authorizeType": "BYTIME"
            },
            "histories": null
        },
        {
            "id": "ID01oHKqVA68xx",
            "createTime": "2023-04-10 20:02:18",
            "updateTime": "2023-08-08 11:24:11",
            "createUserId": null,
            "corporationId": "Tdk3tgber501v0",
            "powerCode": "TICKET_AUDIT_switch",
            "chargeInfoId": "ID01oHKqVA68h1",
            "state": "using",
            "autoAdd": false,
            "chargeInfo": {
                "type": "date",
                "id": "ID01oHKqVA68h1",
                "createTime": "2021-12-07 11:06:36",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "corporationId": "Tdk3tgber501v0",
                "powerCode": "TICKET_AUDIT_switch",
                "expireTime": "2026-01-30 23:59:59",
                "paymentStatus": "PAID",
                "sumPeople": null,
                "usedPeople": null
            },
            "power": {
                "id": "9sQbJwMPzsiU00",
                "createTime": "2023-08-08 11:24:11",
                "updateTime": "2023-08-08 11:24:11",
                "createUserId": null,
                "name": "单据审批",
                "code": "TICKET_AUDIT_switch",
                "chargeType": "date",
                "isDefault": false,
                "allowSetAuto": false,
                "isVisible": false,
                "authorizeType": "BYTIME"
            },
            "histories": null
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议                                                  |
| :--- | :--- | :--- |:------------------------------------------------------|
| **403** | - | 未授权 | 请确认 `accessToken`（认证token）是否已过期<br/>请确认 **地址前缀** 与您的企业环境一致 |

