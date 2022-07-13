# 停用/启用收款账户

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2/payeeInfos/$`id`/disableOrEnableAccount"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 账户ID | 必填 | - | 通过 [获取收款账号](/docs/open-api/pay/get-payeeInfos) 获取 |   

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	 | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **active**      | String | 停用或启用标识 | 必填  | - | `true` : 启用 &emsp; `false` : 停用 |

## CURL
```shell
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/payeeInfos/$u0gbxl3vQw7k00/disableOrEnableAccount?accessToken=AE4bxj-ZAIa800&active=false' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "value": {
        "version": 1,                //版本号
        "active": false,             //是否启用
        "createTime": 1599203861784, //创建时间
        "updateTime": 1599203861784, //更新时间
        "nameSpell": "tiger.guoyj", 
        "code": "",                  //编码
        "corporationId": "JOYbpjPP-E2Q00", //企业ID
        "id": "u0gbxl3vQw7k00",      //账户ID
        "name": "tiger.guoyj",       //账户名
        "type": "PERSONAL",          //账户类型（PUBLIC：对公账户，PERSONAL：个人账户）
        "owner": "CORPORATION",      //所属类型（INDIVIDUAL：个人，CORPORATION：企业）
        "cardNo": "84745996999",     //银行卡号
        "logs": [                    //日志信息
            {
                "action": "CREATE",  //创建日志
                "operatorId": "API",
                "time": 1599203077165,
                "attributes": null
            },
            {
                "action": "EDIT",    //修改日志
                "operatorId": "API",
                "time": 1599203861762,
                "attributes": {
                    "changes": [
                        {
                            "field": "certificateType",
                            "newValue": null,
                            "oldValue": "01"
                        },
                        {
                            "field": "certificateNo",
                            "newValue": null,
                            "oldValue": "100999"
                        },
                        {
                            "field": "visibility",
                            "newValue": "部分员工可见：，，",
                            "oldValue": null
                        }
                    ]
                }
            }
        ],
        "sort": "BANK",
        "remark": "备注",
        "staffId": "",
        "visibility": {           //可见性
            "fullVisible": false, //是否全员可见
            "staffs": [
                "Y-8biCacIM5U00:ukMbeB_7-M3000"
            ],
            "roles": [
                "7pYbiCfk4IcY00",
                "Kv0biCfk4IcM00"
            ],
            "departments": [
                "Y-8biCacIM5U00"
            ],
            "departmentsIncludeChildren": true
        },
        "branch": "中国工商银行股份有限公司北京范家胡同支行", //支行名称
        "icon": "https://images.ekuaibao.com/bank/bank-gs.svg",
        "bank": "工商银行",                           //银行名称
        "province": "北京市",                         //银行所在省
        "city": "北京市",                             //银行所在城市
        "certificateType": null,                     //证件类别
        "certificateNo": null,                       //证件号
        "bankLinkNo": "102100020044",                //银联号
        "unionIcon": "https://images.ekuaibao.com/bank/bank-other.svg",
        "unionBank": null
    }
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "输入存在错误:\n- 开启或是停用参数不能为空",
    "errorDetails": null,
    "code": null,
    "data": null
}
```