# 更新付款账户
根据付款账户的 `ID` 修改付款信息。

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v4/payerInfos/$`id`"
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
| **accessToken** | String | 认证token | 必填 | -  | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **sort**            | String | 账号类别    | 非必填 | OTHER | `BANK` : 银行卡 &emsp; `OTHER` : 其它 |
| **type**            | String | 账户类型    | 非必填 | PUBLIC | `PUBLIC` : 对公账户 |
| **name**            | String | 开户名称    | 必填 | - | 开户名称 |
| **cardNo**          | String | 银行卡号    | 必填 | - | 银行卡号 |
| **bank**            | String | 银行名称    | 非必填 | - | 银行名称，**可通过 `branch` 或 `bankLinkNo` 自动回填，<br/>需保证 `branch` 在 [开户网点](/docs/open-api/pay/get-all-branch) 内** |
| **branch**          | String | 开户网点    | 非必填 | - | **`sort` = `BANK` 时，必填**。获取 [开户网点](/docs/open-api/pay/get-all-branch) |
| **bankLinkNo**      | String | 银联号      | 非必填 | - | **当开户网点与易快报系统不匹配时，可通过银联号匹配** |
| **province**        | String | 银行所在省   | 非必填 | - | 银行所在省，**可通过 `branch` 或 `bankLinkNo` 自动回填，需保证 `branch` 在 [开户网点](/docs/open-api/pay/get-all-branch) 内** |
| **city**            | String | 银行所在城市 | 非必填 | - | 银行所在城市，**可通过 `branch` 或 `bankLinkNo` 自动回填，需保证 `branch` 在 [开户网点](/docs/open-api/pay/get-all-branch) 内** |
| **remark**          | String | 备注信息    | 非必填 | - | 备注信息 |
| **channels**        | Array  | 支付方式    | 必填 | - | 参考 [支付方式类型](/docs/open-api/pay/get-payerInfos-search#支付方式channels类型参考需找支付人员确认) |
| **visibility**                          | Object   | 可见范围       | 非必填 | - | 可见范围对象 |
| **&emsp; ∟ fullVisible**                | Boolean | 是否全员可见    | 必填 | - | `true` : 全员可见 &emsp; `false` : 部分可见<br/>部分可见则仅有白名单中可见 |
| **&emsp; ∟ roles**                      | Array   | 角色白名单      | 必填 | - | 通过 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 获取 |
| **&emsp; ∟ staffs**                     | Array   | 员工白名单      | 必填 | - | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
| **&emsp; ∟ departments**                | Array   | 部门白名单      | 必填 | - | 通过 [获取部门列表](/docs/open-api/corporation/get-departments) 获取 |
| **&emsp; ∟ departmentsIncludeChildren** | Boolean | 下属子部门是否可见 | 必填 | - | `true` : 可见 &emsp; `false` : 不可见 |

:::tip
- 当 `branch`（开户网点）不确定时，可填写 ”1“（branch不可为null），并保证 `bankLinkNo`（银联号）正确，系统会根据银联号自动回填开户网点。
:::

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v4/payerInfos/$ID_3Hh7yim0bx0?accessToken=ID_3HhzhrN0aU0:Urf3lsFgBp00gw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sort": "BANK",                 //账号类别
    "type":"PUBLIC",                //账户类型       
    "name": "接口新增6-修改",       //开户名称
    "cardNo": "0530666",           //银行卡号
    // "bank":"工商银行",          //银行名称，此示例为通过“bankLinkNo”（银联号）自动回填                
    "branch":"1",                  //开户网点，此示例为通过“bankLinkNo”（银联号）自动回填       
    //"province":"北京市",         //银行所在省，此示例为通过“bankLinkNo”（银联号）自动回填                    
    //"city":"北京市",             //银行所在城市，此示例为通过“bankLinkNo”（银联号）自动回填                        
    "bankLinkNo": "403431000017",  //银联号
    "remark":"备注",               //备注信息
    "channels": [                  //支付方式
        "OFFLINE","WXPAY"
    ],
    "visibility":{                  //可见性
        "fullVisible":false,        //是否全员可见（true：全部可见，false：指定人员可见）
        "roles":["Urf3lsFgBp00gw:leader"],              //可见角色ID
        "staffs":["Urf3lsFgBp00gw:ID_3two5lv0D7M"],     //可见员工ID
        "departments":["Urf3lsFgBp00gw:ID_3nLNQ_X0RQM"],//可见部门ID
        "departmentsIncludeChildren":true               //可见部门是否包含子部门（true：是，false：否）
    }
}'
```

## 成功响应
```json
{
    "value": {
        "pipeline": 1,
        "grayver": "9.30.0.0:A",
        "id": "ID_3Hh7yim0bx0",
        "version": 19,
        "active": true,
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

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 账户信息未找到 | 请确认 `id`（账户ID）是否正确 | 
