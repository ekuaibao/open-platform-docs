# 停用/启用付款账户

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v4/payerInfos/$`id`/disableOrEnableAccount"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.6.0**](/docs/open-api/notice/update-log#160) -> 🆕 新增了本接口。<br/>
    
  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 账户ID | 必填 | - | 通过 [获取付款账户](/docs/open-api/pay/get-payerInfos-search) 获取 |   

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	 | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **active**      | String | 停用或启用标识 | 必填  | false | `true` : 启用 &emsp; `false` : 停用 |

## CURL
```shell
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v4/payerInfos/$ID_3Hh7yim0bx0/disableOrEnableAccount?accessToken=ID_3HhzhrN0aU0:Urf3lsFgBp00gw&active=false'
```

## 成功响应
```json
{
    "value": {
        "pipeline": 1,
        "grayver": "9.30.0.0:A",
        "id": "ID_3Hh7yim0bx0",
        "version": 33,
        "active": false,                   //是否启用（true：启用，false：停用）
        "createTime": 1653907072694,
        "updateTime": 1653907072694,
        "nameSpell": "",
        "corporationId": "Urf3lsFgBp00gw",
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "name": "",
        "code": "",
        "accountName": "接口新增6-修改",
        "accountNo": "0530666",
        "type": "PUBLIC",
        "owner": "CORPORATION",
        "sort": "BANK",
        "logs": [],
        "staffId": null,
        "bank": "邮政银行",
        "icon": "https://images.ekuaibao.com/bank/bank-yz.svg",
        "asPayee": false,
        "asPayer": true,
        "channels": [
            "WXPAY",
            "OFFLINE"
        ],
        "visibility": {
            "fullVisible": false,
            "staffs": [
                "Urf3lsFgBp00gw:ID_3two5lv0D7M"
            ],
            "roles": [
                "Urf3lsFgBp00gw:leader"
            ],
            "departments": [
                "Urf3lsFgBp00gw:ID_3nLNQ_X0RQM"
            ],
            "departmentsIncludeChildren": true
        },
        "advancedOption": null,
        "defaultChannel": "OFFLINE",
        "bankLinkNo": "403431000017",
        "certificateType": null,
        "certificateNo": null,
        "remark": "备注",
        "branch": "中国邮政储蓄银行股份有限公司宜春市分行",
        "province": "江西省",
        "city": "宜春市",
        "unionIcon": null,
        "unionBank": null,
        "extensions": null
    }
}
```

## 失败响应
当传入要停用/启用的 **账户ID** 不正确时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "数据错误:",
    "errorDetails": null,
    "code": null,
    "data": null
}
```