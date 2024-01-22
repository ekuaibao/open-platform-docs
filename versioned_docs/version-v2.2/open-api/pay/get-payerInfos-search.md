# 获取付款账户
根据 `付款账户ID`、`开户名称`、`银行卡号` 获取付款账户信息（支持分页）。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v4/payerInfos/search"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.24.0**](/docs/open-api/notice/update-log#1240) -> 🐞 修复了根据 `cardNos`（银行卡号）查询对应的付款账户信息时，查询条件不生效的BUG。<br/>
  [**1.6.0**](/docs/open-api/notice/update-log#160)&emsp;-> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token   | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **ids**         | String  | 付款账户ID   | 必填 | - | 可以无内容，多个值用英文逗号 `,` 进行分割 |
| **names**       | String  | 开户名称，非账户备注名称 | 必填 | - | 可以无内容，多个值用英文逗号 `,` 进行分割 |
| **cardNos**     | String  | 银行卡号     | 必填 | - | 可以无内容，多个值用英文逗号 `,` 进行分割 |
| **start**       | Number  | 开始查询索引  | 非必填 | 0 | 从 `0` 开始 |
| **count**       | Number  | 每页总数     | 非必填 | 100 | 最大不能超过 `100` |
| **active**      | Boolean | 账户是否启用  | 非必填 | true | `true` : 启用 &emsp; `false` : 停用 |

:::tip
- **`ids`、`names`、`cardNos` 三个参数可以无内容，不可不传参数名。**
  - 三个参数查询时是 `and` 的关系，均传参时需要对应同一个付款账户才能查出数据，所以查询时传任意其一即可。
  - **已停用** 的付款账户，需要 `ids`、`names`、`cardNos` 三个参数任意其一配合 `active = false` 查询。
- 分页时，每页 `10` 条数据，那么第一页对应的参数为 `start=0&count=10` ，第二页为 `start=10&count=10`。
:::

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v4/payerInfos/search?accessToken=ID01u8vU7V5leC%3ATdk3tgber501v0&ids=&names=&cardNos=&start=0&count=10&active=true'
```

## 成功响应
```json
{
    "count": 1,                       //查询结果总数量
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.30.0.0:A",
            "id": "ID_3GZoeLd1$bM",                   //付款账户ID
            "version": 1,
            "active": true,                           //是否启用（true：启用，false：停用）
            "createTime": 1653562879847,              //创建时间
            "updateTime": 1653562879847,              //更新时间
            "nameSpell": "ZHANGHUBEIZHUMINGCHENG",
            "corporationId": "Urf3lsFgBp00gw",        //企业ID
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "name": "账户备注名称",                    //账户备注名称  
            "code": "账户编码",                        //账户编码
            "accountName": "测试账户",                 //开户名称
            "accountNo": "12345",                     //银行卡号
            "type": "PUBLIC",                         //账户类型（PUBLIC：对公账户，PERSONAL：个人账户）
            "owner": "CORPORATION",                   //所属类型（INDIVIDUAL：个人，CORPORATION：企业）
            "sort": "BANK",                           //账号类别（BANK：银行卡，ALIPAY：支付宝，OVERSEABANK：海外账号，CHECK：支票，ACCEPTANCEBILL：承兑汇票，OTHER：其他，WALLET：钱包）
            "logs": [],
            "staffId": null,                          //个人账户时的所有者ID
            "bank": "商业银行",                       //银行名称
            "icon": "https://images.ekuaibao.com/bank/bank-other.svg",
            "asPayee": false,         //是否作为收款账户（true：是，false：否）
            "asPayer": true,          //是否作为付款账户（true：是，false：否）
            "channels": [             //支付方式（OFFLINE：线下支付）
                "OFFLINE"
            ],
            "visibility": {           //可见性
                "fullVisible": false, //是否全部可见（true：全部可见，false：指定人员可见）
                "staffs": [           //可见员工ID
                    "Urf3lsFgBp00gw:ID_3qJdVnbcX9w"
                ],
                "roles": [            //可见角色ID
                    "Urf3lsFgBp00gw:admin"
                ],
                "departments": [      //可见部门ID
                    "Urf3lsFgBp00gw:ID_3lvD_Gqk1Eg"
                ],
                "departmentsIncludeChildren": true  //可见部门是否包含子部门（true：是，false：否）
            },
            "advancedOption": null,
            "defaultChannel": "OFFLINE",       //默认支付方式（OFFLINE：线下支付）
            "bankLinkNo": "313100000013",      //银联号
            "certificateType": null,           //证件类型
            "certificateNo": null,             //证件号码
            "remark": "无备注",                //备注
            "branch": "北京银行",              //开户网点
            "province": "北京市",              //银行所在省
            "city": "北京市",                  //银行所在城市
            "unionIcon": null,
            "unionBank": null,
            "extensions": null
        }
    ]
}
```

### 支付方式(`channels`)类型
:::caution
- 仅供参考，实际需找支付人员确认
:::
| 类型 | 名称 |
| :--- | :--- | 
| **OFFLINE** | 线下支付 |
| **ANTALIPAY** | 企业付-支付宝 |
| **WXPAY** | 微信支付 |
| **CBSPAY** | CBS |
| **CMBCBS** | CBS超级直联 |
| **CMBSDC** | 招商银行超级直联 |
| **CMBCBC** | 招商银行云直联 |
| **CGBVC** | E商卡 |
| **CHANPAYV2** | 银企联支付-新 |
| **FDCPAY** | 樊登云账户 |
| **GALAXYCMB** | 星河互动线上支付 |
| **HSBCPAY** | 汇丰银行 |
| **HZBANK** | 杭州银行 |
| **HZBANKV2** | 杭州银行财资 |
| **JTPAY** | 聚通支付 |
| **MSBANK** | 民生银行 |
| **NBBANK** | 宁波银行 |
| **NSTC** | 九恒星 |
| **SPDMTS** | 浦发银行云资金 |
| **TMSPAY** | 财资大管家 |

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **404** | - | Error 404 Not Found | 请确认 **请求参数** 是否按要求填写完全 | 

