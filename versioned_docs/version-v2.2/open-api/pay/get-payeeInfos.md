# 获取收款账户
根据 `收款账户ID`、`开户名称`、`银行卡号` 获取收款账户信息（支持分页）。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2.1/payeeInfos"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.20.0**](/docs/open-api/notice/update-log#1200)&emsp;-> 🐞 响应信息中新增了 `customFields`（自定义字段）。<br/>
  [**1.18.0**](/docs/open-api/notice/update-log#1180)&emsp;-> 🚀 接口升级 `v2.1` 版本，接口 **成功响应** 中新增了 `nationCode`（银行所在地区代码（海外账户））参数，参数介绍见 [新增收款账户](/docs/open-api/pay/new-payeeInfo)。<br/>
  [**1.11.0**](/docs/open-api/notice/update-log#1110)&emsp;-> 🐞 新增了 `orderBy` 和 `orderByType` 参数，接口【**成功响应**】数据可按照 `updateTime`（更新时间）排序。<br/>
  [**1.8.0**](/docs/open-api/notice/update-log#180) &emsp; -> 🐞 修复了获取 `WEIXIN`（微信）、`OTHER`（其他）类型收款账户时，`certificateType`（证件类型 ）、`certificateNo`（证件号码）返回空的BUG。<br/>
  [**1.2.0**](/docs/open-api/notice/update-log#120) &emsp; -> 🆕 新增了 `active` 参数描述，并且接口 **成功响应** 中增加了 `active` 参数。<br/>
  [**1.1.0**](/docs/open-api/notice/update-log#110) &emsp; -> 🆕 新增了 `startDate` 和 `endDate` 参数，根据 **更新时间** 过滤列表数据，并且返回值中增加 `createTime` 和 `updateTime` 参数。<br/>
  [**0.7.160**](/docs/open-api/notice/update-log#07160) -> 🆕 新增了 `active`（账户是否启用）参数过滤收款账户信息。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token   | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **ids**         | String  | 收款账户ID   | 必填 | - | 可以无内容，多个值用英文逗号 `,` 进行分割 |
| **names**       | String  | 开户名称     | 必填 | - | 可以无内容，多个值用英文逗号 `,` 进行分割 |
| **cardNos**     | String  | 银行卡号     | 必填 | - | 可以无内容，多个值用英文逗号 `,` 进行分割 |
| **start**       | Number  | 开始查询索引  | 必填  | - | 从 `0` 开始 |
| **count**       | Number  | 每页总数     | 必填  | - | 最大不能超过 `100` |
| **active**      | Boolean | 账户是否启用  | 非必填 | false | `true` : 启用 &emsp; `false` : 停用 |
| **startDate**   | String | 查询开始时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **endDate**     | String | 查询结束时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **orderBy**     | String  | 排序字段    | 非必填 | - | `updateTime` : 更新时间 |
| **orderByType** | String  | 排序方式    | 非必填 | asc | `asc` ：正序 &emsp; `desc` ：倒序 |

:::tip
- `active` 参数传值分三种情况：
    - `active` 参数和值均 `不传`，返回企业下 **全部** 收款账户（包括停用）。
    - `active` 值传 `空串` 或 `false` 或 `非true外任意值`，返回企业下全部 **停用** 的收款账户。
    - `active` 值传 `true`，返回企业下全部 **启用** 的收款账户。
- **`ids`、`names`、`cardNos` 三个参数可以无内容，不可不传参数名。**
  - 三个参数查询时是 `or` 的关系，优先查询顺序为 `ids` > `names` > `cardNos`，都没有值则默认查询全部。
  - **已停用** 的收款账户，需要 `ids`、`names`、`cardNos` 三个参数任意其一配合 `active = false` 查询。
- 分页时，每页 `10` 条数据，那么第一页对应的参数为 `start=0&count=10` ，第二页为 `start=10&count=10`。
- `startDate` 查询规则是 **大于等于**， `endDate` 查询规则是 **小于等于**（**毫秒级时间戳** 与 **日期** 转换的影响，导致取值结果往往是 **小于**，没有 **等于**）。
:::

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/payeeInfos?accessToken=ID01iWYs8eUjHV:xgJ3wajigF25H0&start=0&count=100&names&cardNos&ids&active=true&orderBy=updateTime&orderByType=desc'
```

## 成功响应
```json
{
    "count": 2,                      //查询结果总数
    "items": [
        {
            "sort": "ALIPAY",        //账户类别（BANK：银行卡，ALIPAY：支付宝，OVERSEABANK：海外账号，CHECK：支票，ACCEPTANCEBILL：承兑汇票，OTHER：其他，WALLET：钱包）
            "id": "_iIaLyGGdM3I00",  //收款账户ID
            "name": "He",            //开户名称
            "cardNo": "17000000000", //银行卡号或钱包号
            "type": "个人账户",      //账户类型（个人账户、对公账户）
            "createTime": 1645605250592, //创建时间
            "updateTime": 1645605250592, //更新时间
            "province": "",          //开户省份
            "city": "",              //开户城市
            "bank": "支付宝",        //开户行
            "branch": "",            //开户网点
            "certificateType": null, //证件类型
            "certificateNo": null,   //证件号码
            "bankLinkNo": null,      //银联号
            "unionBank": "",         //简洁录入开户行
            "bankName": "",          //海外银行名称（海外账户）
            "swiftCode": "",         //银行国际代码（海外账户）
            "nationCode": "",        //银行所在地区代码（海外账户），参数介绍见【新增收款账户】
            "bankCode": "",          //联行号（海外账户）
            "branchCode": "",        //支行号（海外账户）
            "visibility": {          //可见性
                "fullVisible": true, //是否全部可见（true：全部可见，false：指定人员可见）
                "staffs": [],        //可见员工ID
                "roles": [],         //可见角色ID
                "departments": [],   //可见部门ID
                "departmentsIncludeChildren": true  //可见部门是否包含子部门（true：是，false：否）
            },
            "remark": "remark",                           //备注
            "active": true,                               //账户状态，true：启用，false：停用
            "operatorId": "PtgbQUtfE08400:dIEbu2mgTs6o00", //账户创建者ID
            "customFields": {                             //自定义字段
                "u_原因": "22",
                "u_是否超标": "11"
            }
        },
        {
            "sort": "OVERSEABANK",
            "id": "ID01ptA3IGvCYn",
            "name": "海外账户",
            "cardNo": "111",
            "type": "个人账户",
            "createTime": 1644398058965, //创建时间
            "updateTime": 1644398058965, //更新时间
            "province": "",
            "city": "",
            "bank": "海外",
            "branch": "",
            "certificateType": null,
            "certificateNo": null,
            "bankLinkNo": null,
            "unionBank": "",
            "bankName": "11",
            "swiftCode": "111",
            "nationCode": "090",
            "bankCode": "12345",
            "branchCode": "111",
            "visibility": {             //可见性
                "fullVisible": true,    //是否全部可见（true：全部可见，false：指定人员可见）
                "staffs": [],           //可见员工ID
                "roles": [],            //可见角色ID
                "departments": [],      //可见部门ID
                "departmentsIncludeChildren": true  //可见部门是否包含子部门（true：是，false：否）
            },
            "remark": "remark",                           //备注
            "active": true,                               //账户状态，true：启用  false：停用
            "operatorId": "API",                          //账户创建者ID
            "customFields": {                             //自定义字段
                "u_原因": "22",
                "u_是否超标": "11"
            }
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **404** | - | Error 404 Not Found | 请确认 **请求参数** 是否按要求填写完全 | 

