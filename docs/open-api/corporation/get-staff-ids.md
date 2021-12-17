# 查询员工
通过员工的 `员工ID`、`工号`、`手机号`、`邮箱`、`第三方ID` 查询员工信息。<br/>
第三方ID根据平台不同而不同，例如企业微信轻应用的第三方ID为企业微信里的员工ID。易快报原生版本没有第三方ID。

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v1/staffs/getStaffIds"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

#### Body Parameters:

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **type**         | String | 查询方式    | 必填 | - | `STAFFID`:员工ID<br/>`CODE`:工号<br/>`CELLPHONE`:手机号<br/>`MAIL`:邮箱<br/>`USERID`:第三方ID |
| **conditionIds** | Array  | 要查询条件值 | 必填 | - | 支持多个 |

> ⚠️ 注意：
> 
> - 第三方ID指钉钉ID、企业微信open ID、云之家ID等;
> - 该接口只能查询到未停用的员工信息，如果需要查询已停用员工信息，请通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)查询到全部已停用的员工列表，再进行匹配

## CURL
```
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/staffs/getStaffIds?accessToken=RCIbwHcnF0kg00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "type": "STAFFID",
    "conditionIds":[
        "JOYbpjPP-E2Q00:pt4bu1ZI9s2000"
    ]
}'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "JOYbpjPP-E2Q00:pt4bu1ZI9s2000",  //员工ID
            "name": "二号员工",                      //员工名称
            "code": "1002",                         //员工编码
            "departments": [                        //所属部门ID集合
                    "JOYbpjPP-E2Q00:ZNEbwH_W7sc000",
                    "JOYbpjPP-E2Q00:pAwbwH_W7sec00",
                    "JOYbpjPP-E2Q00"
            ],
            "defaultDepartment": "JOYbpjPP-E2Q00:ZNEbwH_W7sc000", //默认部门ID
            "cellphone": "18603000748",                           //手机号
            "active": true,                                       //是否停用
            "userId": "-Nwbu1ZI9s1Y00",                           //第三方ID
            "email": "",
            "staffCustomForm":{                                              //员工自定义字段集合
                "base":"[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",//常驻地
                "postType":"ltUcxNyWSQ1o00",                                 //岗位
                "rankType":"lUcctXntW82A00",                                 //职级
                "u_数字字段":"1"                                              //员工自定义字段
            },
            "external": false   //是否外部员工
        }
    ]
}
```

## 失败响应
参数传值错误， 返回此响应结果
```json
{
    "errorCode": 400,
    "errorMessage": "查询conditionIds不能为空",
    "errorDetails": null,
    "code": null,
    "data": null
}
```