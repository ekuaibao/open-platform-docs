# 修改员工工号(全环境)

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/staffs/$`staffId`/code"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.10.0**](/docs/open-api/notice/update-log#1100) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffId** | String | 员工ID | 必填 | - | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **code** | String | 员工工号 | 必填 | - | 不能传入已被占用的 `code` |

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/staffs/$bwa3wajigF0WH0:20220408/code?accessToken=ID01icbEBYV1ev:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "code": "20220810111"
}'
```

## 成功响应
```json
{
    "value": {
        "id": "bwa3wajigF0WH0:20220408",        //员工ID
        "name": "赵六-改",                      //员工姓名
        "code": "20220810111",                  //员工工号
        "departments": [                        //所在部门
            "bwa3wajigF0WH0:ID_3zE5G_06Ow0"
        ],
        "defaultDepartment": "bwa3wajigF0WH0:ID_3zE5G_06Ow0", //默认部门ID
        "cellphone": "18820220408",             //手机号
        "active": true,                         //是否停用
        "userId": "20220408",                   //第三方ID
        "email": "18820220408@163.com",         //邮箱
        "external": false,                      //是否外部人员
        "note": "备注",                         //备注
        "staffCustomForm": {                    //员工自定义字段对象
            "rankType": "ID_3jO67GBsl3I",       //职级
            "postType": "ID_3pp9B5CUgPg",       //岗位
            "base": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //常驻地
            "u_张国阳001": "ID_3yrzERx1pf0"     //员工自定义字段
        },
        "updateTime": "2022-07-21 14:10:07",    //更新日期
        "createTime": "2022-04-08 17:02:31"     //创建日期
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 输入存在错误:- 缺少Entity | 请确认 `Body Parameters` 参数是否传参 | 
| **400** | - | 员工编号code不允许为空 | 请确认 `code` 是否传参 | 
| **400** | - | 员工编号只能包含汉字、数字、字母、@、-、_、. | 请确认 `code` 是否包含系统不支持的特殊字符 | 
| **400** | - | 不可操作已离职的员工 | 请确认 `staffId` 对应的员工是否已离职 | 
| **412** | - | 此工号已被姓名为1001-1的员工占用，工号不允许重复，请检查 | 请确认 `code` 是否已存在 | 
