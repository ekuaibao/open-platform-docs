# 批量新增收款账户

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/payeeInfos/batch/create"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.20.0**](/docs/open-api/notice/update-log#1200) -> 🐞 接口支持传入 `customFields`（自定义字段），且响应信息中新增了该字段。<br/>
  [**1.14.0**](/docs/open-api/notice/update-log#1140) -> 🐞 新增了 `nationCode`（银行所在地区代码）参数描述。<br/>
  [**1.7.1**](/docs/open-api/notice/update-log#171)&emsp;-> 🐞 优化了接口支持部分账户校验不通过时，其他账户可继续新增成功。<br/>
  [**1.6.3**](/docs/open-api/notice/update-log#163)&emsp;-> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值   | 备注 |
| :--- | :--- | :--- |:-----|:------| :--- |
| **payeeInfoList**   | Array  | 收款账户集合 | 必填   | -     | 收款账户集合 |
| **&emsp; ∟ sort**            | String | 账号类别    | 非必填  | BANK  | `BANK` : 银行卡<br/>`ALIPAY` : 支付宝<br/>`OVERSEABANK` : 海外账号<br/>`WEIXIN` : 微信<br/>`OTHER` : 其他 |
| **&emsp; ∟ type**            | String | 账户类型    | 必填   | -     | `PUBLIC` : 对公账户 &emsp; `PERSONAL` : 个人账户 |
| **&emsp; ∟ owner**           | String | 所有者类型   | 必填   | -     | `INDIVIDUAL` : 个人 &emsp; `CORPORATION` : 企业 |
| **&emsp; ∟ staffId**         | String | 所有者ID    | 非必填  | -     | 当 `owner` = `INDIVIDUAL` 时 **必填**<br/>当 `owner` = `CORPORATION` 时 **非必填**<br/>通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
| **&emsp; ∟ name**            | String | 开户名称    | 必填   | -     | 开户名称 |
| **&emsp; ∟ cardNo**          | String | 账号       | 必填   | -     | 银行卡号<br/>支付宝账号<br/>银行账号(Account No.)<br/>微信账号<br/>账号 |
| **&emsp; ∟ bank**            | String | 银行名称<br/>**『银行卡』专属参数**    | 非必填  | -     | **可通过 `branch` 或 `bankLinkNo` 自动回填，<br/>需保证 `branch` 在 [开户网点](/docs/open-api/pay/get-all-branch) 内** |
| **&emsp; ∟ branch**          | String | 开户网点<br/>**『银行卡』专属参数**    | 必填   | -     | **`sort` = `BANK` 时，必填**。<br/>获取 [开户网点](/docs/open-api/pay/get-all-branch)<br/>可通过系统配置改为 ”**非必填**“，见下方**TIP** |
| **&emsp; ∟ bankLinkNo**      | String | 银联号<br/>**『银行卡』专属参数**      | 非必填  | -     | **当开户网点与合思系统不匹配时，<br/>可通过银联号匹配** |
| **&emsp; ∟ province**        | String | 银行所在省<br/>**『银行卡』专属参数**   | 非必填  | -     | **可通过 `branch` 或 `bankLinkNo` 自动回填，<br/>需保证 `branch` 在 [开户网点](/docs/open-api/pay/get-all-branch) 内** |
| **&emsp; ∟ city**            | String | 银行所在城市<br/>**『银行卡』专属参数** | 非必填  | -     | **可通过 `branch` 或 `bankLinkNo` 自动回填，<br/>需保证 `branch` 在 [开户网点](/docs/open-api/pay/get-all-branch) 内** |
| **&emsp; ∟ bankName**        | String | 银行名称<br/>**『海外账号』专属参数** | 非必填  | -     | 银行名称(Bank Name) |
| **&emsp; ∟ swiftCode**       | String | 银行国际代码<br/>**『海外账号』专属参数** | 必填   | -     | 银行国际代码(Swift Code) |
| **&emsp; ∟ nationCode**      | String | 银行所在地区代码<br/>**『海外账号』专属参数** | 必填   | -     | 银行所在地区代码(Nation Code)<br/>传参为 [国家地区代码](https://baike.baidu.com/item/%E4%B8%96%E7%95%8C%E5%90%84%E5%9B%BD%E5%92%8C%E5%9C%B0%E5%8C%BA%E5%90%8D%E7%A7%B0%E4%BB%A3%E7%A0%81/6560023?fromtitle=%E5%9B%BD%E5%AE%B6%E5%9C%B0%E5%8C%BA%E4%BB%A3%E7%A0%81&fromid=52038508&fr=aladdin#2 ) 的国家数字代码 |
| **&emsp; ∟ routingNumber**   | String | 汇款路线号码<br/>**『海外账号』专属参数** | 非必填  | -     | 汇款路线号码(Routing No.) |
| **&emsp; ∟ bankCode**        | String | 联行号<br/>**『海外账号』专属参数** | 非必填  | -     | 联行号(Bank Code) |
| **&emsp; ∟ branchCode**      | String | 支行号<br/>**『海外账号』专属参数** | 非必填  | -     | 支行号(Branch Code) |
| **&emsp; ∟ certificateType** | String | 证件类型    | 非必填  | -     | 详细信息见下方【[证件类型对照表](/docs/open-api/pay/new-payeeInfo#证件类型对照表)】|
| **&emsp; ∟ certificateNo**   | String | 证件号码    | 非必填  | -     | 证件号码 |
| **&emsp; ∟ remark**          | String | 备注信息    | 非必填  | -     | 备注信息 |
| **&emsp; ∟ customFields**    | Object | 自定义字段  | 非必填   | -     | 自定义字段 |
| **&emsp; ∟ visibility**                          | Object   | 可见范围       | 非必填  | -     | 可见范围对象，本参数不传，**默认为全员不可见**  |
| **&emsp;&emsp; ∟ fullVisible**                | Boolean | 是否全员可见    | 非必填  | false | `true` : 全员可见 &emsp; `false` : 部分可见<br/>部分可见则仅有白名单中可见 |
| **&emsp;&emsp; ∟ roles**                      | Array   | 角色白名单      | 非必填  | -     | 通过 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 获取 |
| **&emsp;&emsp; ∟ staffs**                     | Array   | 员工白名单      | 非必填  | -     | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
| **&emsp;&emsp; ∟ departments**                | Array   | 部门白名单      | 非必填  | -     | 通过 [获取部门列表](/docs/open-api/corporation/get-departments) 获取 |
| **&emsp;&emsp; ∟ departmentsIncludeChildren** | Boolean | 下属子部门是否可见 | 非必填  | true  | `true` : 可见 &emsp; `false` : 不可见 |

:::tip
- 新增收款账户最大不能超过 **100** 条。 
- 当 `branch`（开户网点）不确定且必填时，可填写 ”1“（branch不可为null），并保证 `bankLinkNo`（银联号）正确，系统会根据银联号自动回填开户网点。
- 当不需要线上支付时，可通过系统配置，关闭 “**开户网点**” 必填。

  ![image](images/允许开户网点为非必填项.png)
:::

### 证件类型对照表
#### 【个人账户】可选的证件类型
| 证件类型 | code |
| :--- | :--- |
| **居民身份证**                | 01 |
| **临时身份证**                | 02 |
| **护照**                     | 03 |
| **户口簿**                   | 04 |
| **军人身份证**                | 05 |
| **武装警察身份证**             | 06 |
| **港澳台居民往来内地通行证**     | 07 |
| **外交人员身份证**             | 08 |
| **外国人居留许可证**            | 09 |
| **边民出入境通行证**            | 10 |
| **其它**                     | 11 |
| **澳居民来往内地通行证(香港)**   | 47 |
| **港澳居民来往内地通行证(澳门)** | 48 |
| **湾居民来往大陆通行证**        | 49 |
| **纳税人识别号(TIN)**          | 54 |

#### 【对公账户】可选的证件类型
| 证件类型 | code |
| :--- | :--- |
| **其它**                     | 11 |
| **纳税人识别号(TIN)**          | 54 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/payeeInfos/batch/create?accessToken=ID_3IbD5IF0QWw:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "payeeInfoList": [                            //收款账户集合
        {
            "sort":"BANK",                        //账号类别        
            "type":"PERSONAL",                    //账户类型  
            "owner":"INDIVIDUAL",                 //所有者类型
            "staffId":"bwa3wajigF0WH0:ID_3lokDfb1p5w", //所有者ID                            
            "name":"银行卡-测试0613",                  //开户名称  
            "cardNo":"06131",                          //银行卡号    
            //"bank":"工商银行",                       //银行名称，此示例为通过“bankLinkNo”（银联号）自动回填                              
            "branch":"1",                              //开户网点，此示例为通过“bankLinkNo”（银联号）自动回填  
            "bankLinkNo":"402100007331",               //银联号
            //"province":"北京市",                     //银行所在省，此示例为通过“bankLinkNo”（银联号）自动回填          
            //"city":"北京市",                         //银行所在城市，此示例为通过“bankLinkNo”（银联号）自动回填              
            "certificateType":"11",                    //证件类型            
            "certificateNo":"110110198512042345",      //证件号码   
            "remark":"银行卡备注",                     //备注信息        
            "customFields": {                        //自定义字段  
                "u_是否超标": "11",
                "u_原因": "11"
            },
            "visibility":{                                      //可见性
                "fullVisible":false,                            //是否全员可见（true：全部可见，false：指定人员可见）
                "roles":["bwa3wajigF0WH0:leader"],              //可见角色ID
                "staffs":["bwa3wajigF0WH0:ID_3lokDfb1p5w"],     //可见员工ID
                "departments":["bwa3wajigF0WH0:ID_3E8KASS75ag"],//可见部门ID
                "departmentsIncludeChildren":true               //可见部门是否包含子部门（true：是，false：否）
            }
        },
        {
            "sort":"ALIPAY",                      //账号类别        
            "type":"PERSONAL",                    //账户类型  
            "owner":"INDIVIDUAL",                 //所有者类型
            "staffId":"bwa3wajigF0WH0:ID_3lokDfb1p5w", //所有者ID                                              
            "name":"支付宝-测试0610",                  //开户名称  
            "cardNo":"88131234",                       //支付宝账号
            "certificateType":"11",                    //证件类型            
            "certificateNo":"110110198512042345",      //证件号码   
            "remark":"支付宝备注",                     //备注信息       
            "customFields": {                        //自定义字段  
                "u_是否超标": "11",
                "u_原因": "11"
            },
            "visibility":{                                      //可见性
                "fullVisible":false,                            //是否全员可见（true：全部可见，false：指定人员可见）
                "roles":["bwa3wajigF0WH0:leader"],              //可见角色ID
                "staffs":["bwa3wajigF0WH0:ID_3lokDfb1p5w"],     //可见员工ID
                "departments":["bwa3wajigF0WH0:ID_3E8KASS75ag"],//可见部门ID
                "departmentsIncludeChildren":true               //可见部门是否包含子部门（true：是，false：否）
            }
        },
        {
            "sort":"OVERSEABANK",                 //账号类别        
            "type":"PERSONAL",                    //账户类型  
            "owner":"INDIVIDUAL",                 //所有者类型
            "staffId":"bwa3wajigF0WH0:ID_3lokDfb1p5w", //所有者ID                    
            "name":"海外账号0610",                     //开户名称  
            "cardNo":"7713123400610",                  //银行账号(Account No.)
            "bankName": "海外银行名称",                //银行名称(Bank Name)
            "swiftCode": "海外银行国际代码",           //银行国际代码(Swift Code)
            "nationCode": "840",                      //银行所在地区代码(Nation Code)，传参为国家数字代码，840：美国
            "routingNumber": "99999",                 //汇款路线号码(Routing No.)
            "bankCode": "88888",                      //联行号(Bank Code)
            "branchCode": "777777",                   //支行号(Branch Code)
            "certificateType":"11",                   //证件类型            
            "certificateNo":"110110198512042345",     //证件号码   
            "remark":"海外账号备注",                   //备注信息  
            "customFields": {                        //自定义字段  
                "u_是否超标": "11",
                "u_原因": "11"
            },
            "visibility":{                                      //可见性
                "fullVisible":false,                            //是否全员可见（true：全部可见，false：指定人员可见）
                "roles":["bwa3wajigF0WH0:leader"],              //可见角色ID
                "staffs":["bwa3wajigF0WH0:ID_3lokDfb1p5w"],     //可见员工ID
                "departments":["bwa3wajigF0WH0:ID_3E8KASS75ag"],//可见部门ID
                "departmentsIncludeChildren":true               //可见部门是否包含子部门（true：是，false：否）
            }
        },
        {
            "sort":"WEIXIN",                      //账号类别        
            "type":"PERSONAL",                    //账户类型  
            "owner":"INDIVIDUAL",                 //所有者类型
            "staffId":"bwa3wajigF0WH0:ID_3lokDfb1p5w", //所有者ID                                              
            "name":"微信-测试0610",                    //开户名称  
            "cardNo":"18712340610",                   //微信账号
            "certificateType":"11",                   //证件类型            
            "certificateNo":"110110198512042345",     //证件号码   
            "remark":"微信备注",                      //备注信息     
            "customFields": {                        //自定义字段  
                "u_是否超标": "11",
                "u_原因": "11"
            },
            "visibility":{                                      //可见性
                "fullVisible":false,                            //是否全员可见（true：全部可见，false：指定人员可见）
                "roles":["bwa3wajigF0WH0:leader"],              //可见角色ID
                "staffs":["bwa3wajigF0WH0:ID_3lokDfb1p5w"],     //可见员工ID
                "departments":["bwa3wajigF0WH0:ID_3E8KASS75ag"],//可见部门ID
                "departmentsIncludeChildren":true               //可见部门是否包含子部门（true：是，false：否）
            }
        },
        {
            "sort":"OTHER",                       //账号类别        
            "type":"PERSONAL",                    //账户类型  
            "owner":"INDIVIDUAL",                 //所有者类型
            "staffId":"bwa3wajigF0WH0:ID_3lokDfb1p5w", //所有者ID                                              
            "name":"其他-测试0613",                    //开户名称  
            "cardNo":"18712340610",                    //账号
            "certificateType":"11",                    //证件类型            
            "certificateNo":"110110198512042345",      //证件号码   
            "remark":"其他备注",                       //备注信息        
            "customFields": {                        //自定义字段  
                "u_是否超标": "11",
                "u_原因": "11"
            },
            "visibility":{                                      //可见性
                "fullVisible":false,                            //是否全员可见（true：全部可见，false：指定人员可见）
                "roles":["bwa3wajigF0WH0:leader"],              //可见角色ID
                "staffs":["bwa3wajigF0WH0:ID_3lokDfb1p5w"],     //可见员工ID
                "departments":["bwa3wajigF0WH0:ID_3E8KASS75ag"],//可见部门ID
                "departmentsIncludeChildren":true               //可见部门是否包含子部门（true：是，false：否）
            }
        }
    ]
}'
```

## 成功响应
```json
{
    "items": [
        {
            "sort": "BANK",                 //账号类别      
            "id": "ID_3IaKM9m0ayg",         //账号ID
            "name": "银行卡-测试0613",      //开户名称
            "cardNo": "06131",              //账号（银行卡号/支付宝账号/银行账号(Account No.)/微信账号/账号）
            "type": "个人账户",             //账户类型
            "createTime": 1655119178212,    //创建时间 
            "updateTime": 1655119178212,    //更新时间
            "visibility": {                 //可见性
                "fullVisible": false,       //是否全员可见
              "staffs": [                   //可见员工ID
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ],
                "roles": [                  //可见角色ID
                    "bwa3wajigF0WH0:leader"
                ],
                "departments": [            //可见部门ID
                    "bwa3wajigF0WH0:ID_3E8KASS75ag"
                ],
                "departmentsIncludeChildren": true  //下属子部门是否可见
            },
            "remark": "银行卡备注",           //备注
            "customFields": {                        //自定义字段  
                "u_是否超标": "11",
                "u_原因": "11"
            },
        },
        {
            "sort": "ALIPAY",
            "id": "ID_3IaKM9m0byg",
            "name": "支付宝-测试0610",
            "cardNo": "88131234",
            "type": "个人账户",
            "createTime": 1655119178271,
            "updateTime": 1655119178271,
            "visibility": {
                "fullVisible": false,
                "staffs": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ],
                "roles": [
                    "bwa3wajigF0WH0:leader"
                ],
                "departments": [
                    "bwa3wajigF0WH0:ID_3E8KASS75ag"
                ],
                "departmentsIncludeChildren": true
            },
            "remark": "支付宝备注",
            "customFields": {            
                "u_是否超标": "11",
                "u_原因": "11"
            },
        },
        {
            "sort": "OVERSEABANK",
            "id": "ID_3IaKM9m0cyg",
            "name": "海外账号0610",
            "cardNo": "7713123400610",
            "type": "个人账户",
            "createTime": 1655119178317,
            "updateTime": 1655119178317,
            "visibility": {
                "fullVisible": false,
                "staffs": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ],
                "roles": [
                    "bwa3wajigF0WH0:leader"
                ],
                "departments": [
                    "bwa3wajigF0WH0:ID_3E8KASS75ag"
                ],
                "departmentsIncludeChildren": true
            },
            "remark": "海外账号备注",
            "customFields": {        
                "u_是否超标": "11",
                "u_原因": "11"
            },
        },
        {
            "sort": "WEIXIN",
            "id": "ID_3IaKM9m0dyg",
            "name": "微信-测试0610",
            "cardNo": "18712340610",
            "type": "个人账户",
            "createTime": 1655119178356,
            "updateTime": 1655119178356,
            "visibility": {
                "fullVisible": false,
                "staffs": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ],
                "roles": [
                    "bwa3wajigF0WH0:leader"
                ],
                "departments": [
                    "bwa3wajigF0WH0:ID_3E8KASS75ag"
                ],
                "departmentsIncludeChildren": true
            },
            "remark": "微信备注",
            "customFields": {         
                "u_是否超标": "11",
                "u_原因": "11"
            },
        },
        {
            "sort": "OTHER",
            "id": "ID_3IaKM9m0eyg",
            "name": "其他-测试0613",
            "cardNo": "18712340610",
            "type": "个人账户",
            "createTime": 1655119178430,
            "updateTime": 1655119178430,
            "visibility": {
                "fullVisible": false,
                "staffs": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ],
                "roles": [
                    "bwa3wajigF0WH0:leader"
                ],
                "departments": [
                    "bwa3wajigF0WH0:ID_3E8KASS75ag"
                ],
                "departmentsIncludeChildren": true
            },
            "remark": "其他备注",
            "customFields": {        
                "u_是否超标": "11",
                "u_原因": "11"
            },
        }
    ]
}
```

## 失败响应
由于响应信息中返回的错误信息较长，下面只提供失败原因描述。

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 该账户已存在，无法创建 | 请确认 `name` 和 `cardNo` 在系统中是否存在  | 
| **400** | - | 缺少staffId参数 | `owner` = `INDIVIDUAL` 时，请确认`staffId`（所有者ID）是否传入 |
| **400** | - | 缺少开户行网点参数 | 请确认系统中是否勾选【允许开户网点为非必填项】，未勾选则该参数必填 |
| **400** | - | 开行网点不存在, 请联系管理员补充! | 请确认 `branch` 是否正确或者是否在 [开户网点](/docs/open-api/pay/get-all-branch) 中 |
| **400** | - | 证件类型输入有误 | 请确认 `certificateType` 是否在【[证件类型对照表](/docs/open-api/pay/new-payeeInfo#证件类型对照表)】中 |
| **400** | - | 批量新增收款账号列表大小必须为1-100之间 | 请确认传入的收款账户数量不超过100条 |

