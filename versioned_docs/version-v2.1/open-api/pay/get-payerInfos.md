# 获取付款账户列表
获取企业下的所有付款账户，包括 **已停用** 的付款账户。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/paymentAccounts"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/paymentAccounts?accessToken=cxEbrzNJSA3A00'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "ID_3GZoeLd1$bM",         //付款账户ID
            "name": "账户备注名称",         //账户备注名称
            "code": "账户编码",             //账户编码
            "detail": {                     //账户的银行信息
                "name": "测试账户",         //开户名称
                "number": "12345",          //银行卡号
                "bank": "商业银行",         //银行名称
                "branch": "北京银行",       //开户网点
                "province": "北京市",       //银行所在省
                "city": "北京市",           //银行所在城市
                "visibility": {            //可见性
                    "fullVisible": false,  //是否全部可见（true：全部可见，false：指定人员可见）
                    "staffs": [            //可见员工ID
                        "Urf3lsFgBp00gw:ID_3qJdVnbcX9w"
                    ],
                    "roles": [             //可见角色ID
                        "Urf3lsFgBp00gw:admin"
                    ],
                    "departments": [       //可见部门ID
                        "Urf3lsFgBp00gw:ID_3lvD_Gqk1Eg"
                    ],
                    "departmentsIncludeChildren": true  //可见部门是否包含子部门（true：是，false：否）
                }
            },
            "active": true,                //是否启用（true：启用，false：停用）
            "sort": "BANK",                //账号类别（BANK：银行卡，ALIPAY：支付宝，OVERSEABANK：海外账号，CHECK：支票，ACCEPTANCEBILL：承兑汇票，OTHER：其他，WALLET：钱包）
            "visibility": {
                "fullVisible": false,
                "staffs": [
                    "Urf3lsFgBp00gw:ID_3qJdVnbcX9w"
                ],
                "roles": [
                    "Urf3lsFgBp00gw:admin"
                ],
                "departments": [
                    "Urf3lsFgBp00gw:ID_3lvD_Gqk1Eg"
                ],
                "departmentsIncludeChildren": true
            },
            "remark": "无备注"           //备注
        },
        {
            "id": "Urf3lsFgBp00gw:CASH",
            "name": "",
            "code": "CASH",
            "detail": {
                "name": "默认现金账户",
                "number": "",
                "bank": "其他",
                "branch": "",
                "province": "",
                "city": "",
                "visibility": {
                    "fullVisible": true,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                }
            },
            "active": false,
            "sort": "OTHER",
            "visibility": {
                "fullVisible": true,
                "staffs": [],
                "roles": [],
                "departments": [],
                "departmentsIncludeChildren": true
            },
            "remark": null
        }
    ]
}
```


