# 修改收款账户
根据收款账户的 ID 来修改该账户的收款信息。

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2/payeeInfos/$`id`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 账户ID | 必填 | - | 通过[获取收款账户](/docs/open-api/pay/get-payeeInfos)获取 |   

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | -  | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffId**         | String | 所有者id    | 非必填 | - | 当 `owner` = `INDIVIDUAL` 时必填；<br/>当 `owner` = `CORPORATION` 时非必填；<br/>可以通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)接口获取 |
| **type**            | String | 账户类型    | 必填 | -| `PUBLIC` : 对公账户<br/>`PERSONAL` : 个人账户 |
| **name**            | String | 账户名      | 必填 | - | 账户名称 |
| **cardNo**          | String | 银行卡号    | 必填 | - | 银行卡号 |
| **bank**            | String | 银行名称    | 必填 | - | 银行名称 |
| **branch**          | String | 支行名称    | 必填 | - | 支行名称 |
| **owner**           | String | 所属类型    | 必填 | - | `INDIVIDUAL` : 个人<br/>`CORPORATION` : 企业 |
| **city**            | String | 银行所在城市 | 非必填 | - | 银行所在城市 |
| **province**        | String | 银行所在省   | 非必填 | - | 银行所在省 |
| **bankLinkNo**      | String | 银联号      | 非必填 | - | 当支行名称与合思系统不匹配时，<br/>可通过银联号匹配 |
| **certificateType** | String | 证件类型    | 非必填 | - | 详细信息见下方【证件类型对照表】|
| **certificateNo**   | String | 证件号     | 非必填 | - | 证件号 |
| **remark**          | String | 备注       | 非必填 | - | 备注信息 |
| **visibility**                          | Object   | 可见范围       | 非必填 | - | 可见范围对象 |
| **&emsp; ∟ fullVisible**                | Boolean | 是否全员可见    | 必填 | - | `true` : 全员可见<br/>`false` : 部分可见<br/>部分可见则仅有白名单中可见 |
| **&emsp; ∟ roles**                      | Array   | 角色白名单      | 必填 | - | 值为[角色id](/docs/open-api/corporation/get-roles-group) |
| **&emsp; ∟ staffs**                     | Array   | 员工白名单      | 必填 | - | 值为[员工id](/docs/open-api/corporation/get-all-staffs) |
| **&emsp; ∟ departments**                | Array   | 部门白名单      | 必填 | - | 值为[部门id](/docs/open-api/corporation/get-departments) |
| **&emsp; ∟ departmentsIncludeChildren** | Boolean | 下属部门是否可见 | 必填 | - | `true` : 可见 &emsp; `false` : 不可见 |

### 证件类型对照表

| 证件类型 | code |
| :--- | :--- |
| 居民身份证                | 01 |
| 临时身份证                | 02 |
| 护照                     | 03 |
| 户口簿                   | 04 |
| 军人身份证                | 05 |
| 武装警察身份证             | 06 |
| 港澳台居民往来内地通行证     | 07 |
| 外交人员身份证             | 08 |
| 外国人居留许可证            | 09 |
| 边民出入境通行证            | 10 |
| 其它                     | 11 |
| 澳居民来往内地通行证(香港)   | 47 |
| 港澳居民来往内地通行证(澳门) | 48 |
| 湾居民来往大陆通行证        | 49 |
| 纳税人识别号(TIN)         | 54 |

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/payeeInfos/$u0gbxl3vQw7k00?accessToken=AE4bxj-ZAIa800' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "staffId":"qbY9qb2btg0800:8_c9qazkY8b800",
    "type":"PERSONAL",
    "name":"tiger.guoyj",
    "cardNo":"84745996999",
    "bank":"工商银行",
    "branch":"中国工商银行股份有限公司北京范家胡同支行",
    "owner":"CORPORATION",
    "city":"北京市",
    "province":"北京市",
    "bankLinkNo":"102100020044",
    "remark": "备注",
    "visibility":
        {
            "fullVisible": false,
            "roles": ["7pYbiCfk4IcY00", "Kv0biCfk4IcM00"],
            "staffs": ["Y-8biCacIM5U00:ukMbeB_7-M3000"],
            "departments": ["Y-8biCacIM5U00"],
            "departmentsIncludeChildren": true
        }
}'
```

## 成功响应
```json
{
    "value": {
        "version": 1,                //版本号
        "active": true,              //是否启用
        "createTime": 1599203861784, //创建时间
        "updateTime": 1599203861784, //更新时间
        "nameSpell": "tiger.guoyj", 
        "code": "",                  //编码
        "corporationId": "JOYbpjPP-E2Q00", //企业ID
        "id": "u0gbxl3vQw7k00",      //账户ID
        "name": "tiger.guoyj",       //账户名
        "type": "PERSONAL",          //账户类型（PUBLIC=对公账户,PERSONAL=个人账户）
        "owner": "CORPORATION",      //所属类型（INDIVIDUAL=个人，CORPORATION=企业）
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
        "bank": "工商银行",                            //银行名称
        "province": "北京市",                          //银行所在省
        "city": "北京市",                              //银行所在城市
        "certificateType": null,                      //证件类型 
        "certificateNo": null,                        //证件号码
        "bankLinkNo": "102100020044",                 //银联号
        "unionIcon": "https://images.ekuaibao.com/bank/bank-other.svg",
        "unionBank": null
    }
}
```

## 失败响应
当传入要修改的账户ID不正确时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "账户信息未找到",
    "errorDetails": null,
    "code": null,
    "data": null
}
```