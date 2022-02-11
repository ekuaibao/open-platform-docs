# 获取收款账户
可以根据 `银行账户`、`账户名称`、`账户ID` 来获取收款账户信息（支持翻页）。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/payeeInfos"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token   | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number  | 开始查询索引  | 必填  | - | 从 `0` 开始 |
| **count**       | Number  | 每页总数     | 必填  | - | 最大不能超过 `1000` |
| **names**       | String  | 账户名称     | 非必填 | - | 多个值用英文逗号 `,` 进行分割 |
| **ids**         | String  | 账户ID      | 非必填 | - | 多个值用英文逗号 `,` 进行分割 |
| **cardNos**     | String  | 银行卡号     | 非必填 | - | 多个值用英文逗号 `,` 进行分割 |
| **active**      | Boolean | 账户是否启用  | 非必填 | true | `true` : 启用 &emsp; `false` : 停用 |
| **startDate**   | String | 查询开始时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **endDate**     | String | 查询结束时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |

:::tip
- **除 `avtive` 参数外，其他的请求参数都需要传，即使参数值为空也要带上参数。**
- 如果 `names`、`cardNos`、`ids` 都有值，则优先查询顺序为 `ids` > `names` > `cardNos`，都没有值则默认查询全部。
- 每页 `10` 条数据，那么第一页对应的参数为 `start=0&count=10` ，第二页为 `start=10&count=10`。
- `startDate` 查询规则是”大于等于“， `endDate` 查询规则是“小于等于”（”毫秒级时间戳“与“日期”转换的影响，导致取值结果往往是”小于“，没有等于）。
:::

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/payeeInfos?accessToken=ID_3uUlNBK01fM:PCx3rwm3aA00qM&count=100&start=0&names=&cardNos=&ids=&active=true&startDate=2022-01-17 18:08:07&endDate=' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "count": 2,                      //查询结果总数
    "items": [
        {
            "sort": "ALIPAY",        //分类（银行=BANK，支付宝=ALIPAY，海外=OVERSEABANK，支票=CHECK，承兑汇票=ACCEPTANCEBILL，其他=OTHER，钱包= WALLET）
            "id": "_iIaLyGGdM3I00",  //账户ID
            "name": "He",            //账户名称
            "cardNo": "17000000000", //卡号或钱包号
            "type": "个人账户",       //账户类型（个人账户、对公账户）
            "createTime": 1588651544665, //创建时间
            "updateTime": 1588651544665, //更新时间
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
            "bankCode": "",          //联行号（海外账户）
            "branchCode": "",        //支行号（海外账户）
            "visibility": {          //可见性
                "fullVisible": true, //是否全员可见（true=全部; false=部分）
                "staffs": [],        //员工ID集
                "roles": [],         //角色ID集
                "departments": [],   //部门ID集
                "departmentsIncludeChildren": true
            },
            "remark": "remark",                           //备注
            "operatorId": "PtgbQUtfE08400:dIEbu2mgTs6o00" //账户创建者ID
        },
        {
            "sort": "BANK",
            "id": "_KcaHhblbk0A00",
            "name": "张杰",
            "cardNo": "111",
            "type": "个人账户",
            "createTime": 1585017203965, //创建时间
            "updateTime": 1585017203965, //更新时间
            "province": "广东省",
            "city": "深圳市",
            "bank": "建设银行",
            "branch": "中国建设银行股份有限公司深圳招商支行",
            "certificateType": null,
            "certificateNo": "220182199502270011",
            "bankLinkNo": "105584000554",
            "unionBank": null,
            "bankName": "",
            "swiftCode": "",
            "bankCode": "",
            "branchCode": "",
             "visibility": {                    //可见性
                        "fullVisible": true,    //是否全员可见（true=全部; false=部分）
                        "staffs": [],           //员工ID集
                        "roles": [],            //角色ID集
                        "departments": [],      //部门ID集
                        "departmentsIncludeChildren": true
            },
            "remark": "remark",                           //备注
            "operatorId": "PtgbQUtfE08400:dIEbu2mgTs6o00" //账户创建者ID
        }
    ]
}
```

## 失败响应
请求参数未完全填写， 则可能报以下错误：
```json
{
    "servlet": "org.glassfish.jersey.servlet.ServletContainer-500d9427",
    "message": "Not Found",
    "url": "/api/openapi/v2/payeeInfos",
    "status": "404"
}
```

