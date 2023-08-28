# 查询员工
通过员工的 `员工ID`、`工号`、`手机号`、`邮箱`、`第三方ID` 查询员工信息。<br/>

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/staffs/getStaffIds"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.20.0**](/docs/open-api/notice/update-log#1200) &emsp; -> 🐞 响应信息中新增了 `nickName`（员工别名）字段。<br/>
  [**1.19.0**](/docs/open-api/notice/update-log#1190) &emsp; -> 🐞 响应信息中新增了 `globalRoaming`（国际区号）字段。<br/>
  [**1.10.0**](/docs/open-api/notice/update-log#1100) &emsp; -> 🐞 新增了 `authState`（激活状态）成功响应返回参数。<br/>

  </div>
</details>

:::caution
- 本接口只能查询到 **启用** 的员工信息，如果需要查询已停用的员工信息，请通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 查询到全部已停用的员工列表，再进行匹配。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **type**         | String | 查询方式    | 必填 | - | `STAFFID` : 员工ID<br/>`CODE` : 工号<br/>`CELLPHONE` : 手机号<br/>`MAIL` : 邮箱<br/>`USERID` : 第三方ID |
| **conditionIds** | Array  | 要查询条件值 | 必填 | - | 支持多个，最多不能超过 `100`个|

:::tip
- 第三方ID指钉钉ID、企业微信open ID、云之家ID等，合思原生版本没有第三方ID。
:::

## CURL
```json
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
            "name": "二号员工",                     //员工姓名
            "nickName": "老四",                    //员工别名
            "code": "1002",                        //员工工号
            "departments": [                       //所属部门ID集合
                "JOYbpjPP-E2Q00:ZNEbwH_W7sc000",
                "JOYbpjPP-E2Q00:pAwbwH_W7sec00",
                "JOYbpjPP-E2Q00"
            ],
            "defaultDepartment": "JOYbpjPP-E2Q00:ZNEbwH_W7sc000", //默认部门ID
            "cellphone": "18603000748",                           //手机号
            "active": true,                                       //true：在职，false：已离职（账号逻辑删除，在系统上不可见）
            "userId": "-Nwbu1ZI9s1Y00",                           //第三方平台人员ID
            "email": "cmzhouxiaofeng@xxx.com.cn",                 //登录邮箱（大写字母全转换为小写字母）
            "showEmail": "Cmzhouxiaofeng@xxx.com.cn",             //员工个人信息显示邮箱（大写字母保持不变）
            "external": false,                                    //是否外部员工
            "authState": true,                                    //是否激活，表示账号是否可用
            "globalRoaming": "+86",                               //国际区号
            "note": "备注",                                       //备注
            "staffCustomForm":{                                               //员工自定义字段
                "base":"[{\"key\":\"7370\",\"label\":\"山西省/长治/上党区\"}]",//常驻地
                "postType":"ltUcxNyWSQ1o00",                                  //岗位
                "rankType":"lUcctXntW82A00",                                  //职级
                "u_数字字段":"1"                                              //员工自定义字段
            },
            "updateTime": "2022-08-05 14:59:19",      //更新时间
            "createTime": "2022-08-05 14:59:19"       //创建时间
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 查询conditionIds不能为空 | 请确认 `conditionIds` 是否传值 | 
| **403** | - | 未授权 | 请确认 `accessToken`（认证token）是否已过期<br/>请确认 **地址前缀** 与您的企业环境一致 | 


