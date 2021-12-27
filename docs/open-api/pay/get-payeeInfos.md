### 获取企业收款账号

根据银行账号或者账户名称或者账户id来获取未停用的账号信息（支持翻页）。

{% httpverb "get" %} /api/openapi/v2/payeeInfos {% endhttpverb %}


#### Query Parameters:

| 名称       | 类型    | 描述                  | 是否必填      | 默认值 |  备注 |
| :--------- | :------ | :------------------ | :------ |:------ |:------ |
| **accessToken** | String   | 认证token  | 必填     | - | [通过授权接口获取](/getting-started/auth.html)  |
| **count** | Number  |每页总数      |  必填 | 0 | - |
| **start** | Number  |开始查询索引      |  必填 | 0 | - |
| **names** | String  |账户名称      |  非必填 | - | 多个值用英文逗号进行分割 |
| **cardNos** | String  |银行卡号      |  非必填 | - | 多个值用英文逗号进行分割 |
| **ids** | String  |账号id      |  非必填 | - | 多个值用英文逗号进行分割 |



> ⚠️注意：

> * 所有的请求参数都需要传，即使参数值为空也要带上参数。

> * 如果`names`、`cardNos`和`ids`都有值，则优先查询顺序为`ids` > `names` > `cardNos`，如果都没有值，则默认查询全部。

> * 该接口只返回企业未停用的账户信息。

> * 每页`10`条数据，那么第一页对应的参数为`count` = `10`，`start` = `0`,第二页为`count` = `10`，`start` = `10`

<br/>

#### CURL:
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/payeeInfos?accessToken=nGsbyxO8kgpE00&count=100&start=0&names&cardNos&ids' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```
<br/>

#### 成功响应:
```json
{
    "count": 2, // 查询结果总数
    "items": [
        {
            "sort": "ALIPAY",
            "id": "_iIaLyGGdM3I00", // 账号id
            "name": "He", // 账号名称
            "cardNo": "17000000000", // 卡号或钱包号
            "type": "个人账户", // 账户类型 [个人账户、对公账户]
            "createTime": 1588651544665, // 创建时间
            "province": "", // 开户省份
            "city": "", // 开户城市
            "bank": "支付宝", // 开户行
            "branch": "", // 开户网点
            "certificateType": null, // 证件类型
            "certificateNo": null, // 证件号码
            "bankLinkNo": null, // 银联号
            "unionBank": "", // 简洁录入开户行
            "bankName": "", // 海外银行名称(海外账号)
            "swiftCode": "", // 银行国际代码(海外账号)
            "bankCode": "", // 联行号(海外账号)
            "branchCode": "", // 支行号(海外账号)
            "visibility": {     //可见性
                        "fullVisible": true,    //是否全员可见(true=全部; false=部分)
                        "staffs": [],   //员工ID集
                        "roles": [],    //角色ID集
                        "departments": [],  //部门ID集
                        "departmentsIncludeChildren": true
            },
            "remark": "remark", //备注
            "operatorId": "PtgbQUtfE08400:dIEbu2mgTs6o00" //账户创建者ID
        },
        {
            "sort": "BANK",
            "id": "_KcaHhblbk0A00",
            "name": "张杰",
            "cardNo": "111",
            "type": "个人账户",
            "createTime": 1585017203965,
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
             "visibility": {     //可见性
                        "fullVisible": true,    //是否全员可见(true=全部; false=部分)
                        "staffs": [],   //员工ID集
                        "roles": [],    //角色ID集
                        "departments": [],  //部门ID集
                        "departmentsIncludeChildren": true
            },
            "remark": "remark", //备注
            "operatorId": "PtgbQUtfE08400:dIEbu2mgTs6o00" //账户创建者ID
        }
    ]
}
```


#### 失败响应:
请求链接中参数未完全填写， 则可能报以下错误。

```json
{
    "servlet": "org.glassfish.jersey.servlet.ServletContainer-500d9427",
    "message": "Not Found",
    "url": "/api/openapi/v2/payeeInfos",
    "status": "404"
}
```