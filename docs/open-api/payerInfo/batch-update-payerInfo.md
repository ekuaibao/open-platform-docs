# 批量更新开票信息

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2/payerinfo/batch/update"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.13.0**](/updateLog/update-log#1122)
  - 🆕 新增了本接口。

</div>
</details>

:::caution
- 本接口是从数组第一个参数开始校验，参数有问题就报错打断，直到全部通过校验才调用成功。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **--**                                             | Array  | 外层数组       | 必填  | - | 外层数组 |
| **&emsp; ∟ id**                                   | String | 开票信息ID      | 必填  | - | 通过 [获取开票信息列表](/docs/open-api/payerInfo/get-payerInfo-list) 获取 |
| **&emsp; ∟ name**                                 | String | 企业名称        | 必填  | - | 企业名称 |
| **&emsp; ∟ payerNo**                              | String | 纳税人识别号     | 必填  | - | 只能输入15、18、20位数字或大写字母 |
| **&emsp; ∟ addr**                                 | String | 地址           | 非必填 | - | 地址 |
| **&emsp; ∟ tel**                                  | String | 电话           | 非必填 | - | 只能输入数字、`+`、`-` 字符<br/>支持格式示例：<br/>- 固话：`国家代码(选填)-区号-7到8位固话号码` <br/>例：+86-010-40020021，010-40020020<br/>- 手机：`国家代码(选填)-11位手机号码`、<br/>&emsp;&emsp;&emsp;&emsp;`区号(选填)-11位手机号码` <br/>例：+86-13523458056 ，13523458056 ，10-13523458056 |
| **&emsp; ∟ bank**                                 | String | 开户行          | 非必填 | - | 开户行信息不能超过50个字 |
| **&emsp; ∟ account**                              | String | 企业账号        | 非必填 | - | 只能输入数字，不能超过32个数字 |
| **&emsp; ∟ historicalName**                       | String | 曾用企业名称     | 非必填 | - | 曾用企业名称 |
| **&emsp; ∟ historicalNameExpirationTime**         | Long   | 曾用企业名称失效时间 | 非必填 | - | 毫秒级时间戳 |
| **&emsp; ∟ remark**                               | String | 备注信息        | 非必填 | - | 备注信息 |
| **&emsp; ∟ visibility**                           | Object  | 可见范围       | 非必填 | - | 可见范围对象，不传则全员可见 |
| **&emsp;&emsp; ∟ fullVisible**                | Boolean | 是否全员可见    | 非必填 | - | `true` : 全员可见 &emsp; `false` : 部分可见<br/>部分可见则仅有白名单中可见 |
| **&emsp;&emsp; ∟ roles**                      | Array   | 角色白名单      | 非必填 | - | 通过 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 获取 |
| **&emsp;&emsp; ∟ staffs**                     | Array   | 员工白名单      | 非必填 | - | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
| **&emsp;&emsp; ∟ departments**                | Array   | 部门白名单      | 非必填 | - | 通过 [获取部门列表](/docs/open-api/corporation/get-departments) 获取 |
| **&emsp;&emsp; ∟ departmentsIncludeChildren** | Boolean | 下属子部门是否可见 | 非必填 | - | `true` : 可见 &emsp; `false` : 不可见 |

:::tip
- 更新开票信息最大不能超过 **100** 条。
:::

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/payerinfo/batch/update?accessToken=ID01mnm7lV2tt5:ID01kcrFoZWafR' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "id": "ID01mnlvfGWz4X",            //开票信息ID
        "name": "测试vis2-修改",            //企业名称
        "payerNo": "80082088203HOSE",      //纳税人识别号
        "addr": "虚拟地址23",               //地址
        "tel": "18412345678",              //电话
        "bank": "中国工商银行北京市分行营业部本级业务部1202021109900xxxxxx", //开户行
        "account": "8008208820155245",     //企业账号
        "historicalName": "曾用名北京合思信息有限责任公司2", //曾用企业名称
        "historicalNameExpirationTime": 1640966399000,    //曾用企业名称失效时间
        "remark": "备注",                  //备注信息
        "visibility": {                   //可见性，传 null 时默认保存此结构，全员可见
            "fullVisible": true,          //是否全员可见（true：全部可见，false：指定人员可见）
            "staffs": [],                 //可见员工ID
            "roles": [],                  //可见角色ID
            "departments": [],            //可见部门ID
            "departmentsIncludeChildren": true  //可见部门是否包含子部门（true：是，false：否）
        }
    },
    {
        "id": "ID01mnlvfGWyhp",             //开票信息ID
        "name": "测试vis-修改",             //企业名称
        "payerNo": "989999999999999",      //纳税人识别号
        "addr": "地址-改",                  //地址
        "tel": "18943299999",              //电话
        "bank": "阿斯蒂芬-改",              //开户行
        "account": "123129999",            //企业账号
        "historicalName": "曾用企业名称-改",//曾用企业名称
        "historicalNameExpirationTime": 1703820863000, //曾用企业名称失效时间
        "remark": "备注-改",               //备注信息
        "visibility": {                   //可见性，传 null 时默认保存此结构，全员可见
            "fullVisible": false,         //是否全员可见（true：全部可见，false：指定人员可见）
            "staffs": ["ID01kcrFoZWafR:RUMcqIymmE0g00"], //可见员工ID
            "roles": [],                  //可见角色ID
            "departments": [],            //可见部门ID
            "departmentsIncludeChildren": true  //可见部门是否包含子部门（true：是，false：否）
        }   
    }
]'
```

## 成功响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | "success": true | (见下方JSON示例) | - |

```json
{
    "value": {
        "success": true,  //表示更新成功
        "errors": {}
    }
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | "success": false | (见下方JSON示例) | - |

```json
{
    "value": {
        "success": false,
        "errors": {
            "0": {    //表示第几条数据，从0开始
                "name": "纳税人识别号或企业名称已存在"
            },
            "1": {    
                "id": "该企业开票信息不存在"
            },  
            "2": {
                "name": "name 不能为空",
                "payerNo": "payerNo 格式不正确",
                "account": "account 字符长度超过 32 字符",
                "bank": "bank 字符长度超过 50 字符",
                "tel": "tel 格式不正确",
                "visibility": "staffs:[xxxxxxxxxxx:xxxxxxxxxxxx]不在该企业中"
            }
        }
    }
}
```
