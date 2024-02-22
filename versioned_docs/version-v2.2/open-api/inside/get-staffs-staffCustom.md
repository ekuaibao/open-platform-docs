# 根据自定义字段查询员工信息

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1.1/staffs/staffCustom"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.16.0**](/updateLog/update-log#1160)
  - 🆕 新增了本接口。

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

| 名称 | 类型     | 描述 | 是否必填 | 默认值 | 备注 |
| :--- |:-------| :--- | :--- |:--- | :--- |
| **员工自定义字段名**| Object | 员工自定义字段名 | 必填 | - | 可通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 返回的 `staffCustomForm`（员工自定义字段）获取 |

## CURL
```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/staffCustom?accessToken=ID01oHJO0qquuj%3ADgM3w5DRQ401Iw' \
--header 'Content-Type: application/json' \
--data '{   //多个参数一起查询是【AND】关系，建议使用一个参数查询
    "u_test": "1221",
    "postType": "ID01kzYgKIe0AD",
    "u_测试1": "12211221",
    "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]"
}'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "JOYbpjPP-E2Q00:pt4bu1ZI9s2000",  //员工ID
            "name": "二号员工",                     //员工姓名
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
            "note": "备注",                                        //备注
            "staffCustomForm":{                                               //员工自定义字段
                "base":"[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",       //常驻地
                "postType":"ID01kzYgKIe0AD",                                  //岗位
                "rankType":"lUcctXntW82A00",                                  //职级
                "u_test": "1221",                                             //员工自定义字段
                "u_测试1": "12211221",
                "certificate": [                                              //证件信息
                    "JOYbpjPP-E2Q00:pt4bu1ZI9s2000:ID_CARD"
                ],
                "defaultDepartment.form.costCenter": "",
                "defaultDepartment.form.legalEntity": ""
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
| **400** | - | 查询参数不能为空 | 请确认 `Body Parameters` 是否传值 | 
| **403** | - | 未授权 | 请确认 `accessToken`（认证token）是否已过期<br/>请确认 **地址前缀** 与您的企业环境一致 | 


