### 修改收款账户

根据收款账户的id来修改该账户的收款信息。

{% httpverb "put" %} /api/openapi/v2/payeeInfos/$`id` {% endhttpverb %}

#### Path Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **id** | String |账户ID | 必填 | - | 通过[获取账号信息](/pay/get-payeeInfos.html)查询要修改的账户，在查询结果里面获取对应的id |   



#### Query Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken**  | String    | 认证token	     | 必填    | -  | [通过授权接口获取](/getting-started/auth.html) |



#### Body Parameters:
|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **staffId** | String  | 人员id | 非必填 | - | 当`owner`字段为`CORPORATION`时非必填，可以通过[获取员工列表](/corporation/get-all-staffs.html)接口获取| 
| **type** | String  | 账户类型 | 必填 | - | PUBLIC对公账户，PUBLIC个人账户 | 
| **name** | String  | 账户名 | 必填 | - | - | 
| **cardNo** | String | 银行卡号| 必填 | - | -  | 
| **bank** | String  | 银行名称 | 必填 | - | - | 
| **branch** | String  | 支行名称 | 必填 | - | - | 
| **owner** | String  | 所属类型 | 必填 | - | INDIVIDUAL个人，CORPORATION企业 | 
| **city** | String  | 银行所在城市 | 非必填 | - | - | 
| **province** | String | 银行所在省 | 非必填 | - | -  | 
| **bankLinkNo** | String  | 银联号 | 非必填 | - | - | 
| **remark** | String   | 备注 | 非必填 | -  | - |
| **visibility** | Object  | 可见范围 | 非必填 | - | - |
| **visibility/fullVisible** | Boolean  | 是否全员可见 | 必填 | - | 部分可见则仅有白名单中可见 |
| **visibility/roles** | Array  | 角色白名单 | 必填 | - | - |
| **visibility/staffs** | Array  | 员工白名单 | 必填 | - | - |
| **visibility/departments** | Array  | 部门白名单 | 必填 | - | - |
| **visibility/departmentsIncludeChildren** | Boolean  | - | 必填 | - | - |



<br/>
#### CURL:
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
<br/>


#### 成功响应:
```json
{
      "value": {
            "version": 1,   //版本号
            "active": true, //是否有效
            "createTime": 1599203861784, //创建时间
            "updateTime": 1599203861784, //更新时间
            "nameSpell": "tiger.guoyj", 
            "code": "", //编码
            "corporationId": "JOYbpjPP-E2Q00", //企业ID
            "id": "u0gbxl3vQw7k00", //账户ID
            "name": "tiger.guoyj", //账户名
            "type": "PERSONAL", //账户类型（PUBLIC=对公账户,PERSONAL=个人账户）
            "owner": "CORPORATION", //所属类型（INDIVIDUAL=个人，CORPORATION=企业）
            "cardNo": "84745996999", //银行卡号
            "logs": [
                  {
                        "action": "CREATE",
                        "operatorId": "API",
                        "time": 1599203077165,
                        "attributes": null
                  },
                  {
                        "action": "EDIT",
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
            "visibility": { //可见性
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
            "bank": "工商银行", //银行名称
            "province": "北京市", //银行所在省
            "city": "北京市", //银行所在城市
            "certificateType": null, //证件类型
            "certificateNo": null, //证件号码
            "bankLinkNo": "102100020044", //银联号
            "unionIcon": "https://images.ekuaibao.com/bank/bank-other.svg",
            "unionBank": null
      }
}
```


#### 失败响应:
```json
{
      "errorCode": 412,
      "errorMessage": "账户信息未找到",
      "errorDetails": null,
      "code": null,
      "data": null
}
```