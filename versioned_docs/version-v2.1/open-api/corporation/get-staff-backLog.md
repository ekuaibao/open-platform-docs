# 查询员工待办数量
通过员工的 `员工ID`、`工号`、`手机号` 查询员工待办事项的数量。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1.1/staffs/getBacklogCount/$`type`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.2.0**](/docs/open-api/notice/update-log#120) -> 🚀 接口升级 `v1.1` 版本，新增了响应数据中返回详细待办类型及数量。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **type** | String | 查询方式 | 必填 | - | `id` : 员工ID &emsp; `code` : 员工工号 &emsp; `cellphone` : 员工手机号 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	   | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **staffParam**  | String  | 查询的员工参数  | 必填 | - | 员工信息中的 `staffID` 、`code` 、`cellphone` 任意一个即可 | 

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/getBacklogCount/$id?accessToken=RCIbwHcnF0kg00&staffParam=JOYbpjPP-E2Q00:y8gbpjP9OsnI00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": {
    "count": 1,             //待办总数量
        "type": {           //待办类型细项
          "print": 1,       //待我打印
          "paying": 0,      //待我支付
          "carbonCopy": 0,  //抄送我的
          "sending": 0,     //待我寄送
          "peceving": 0,    //待我收单
          "approving": 1    //待我审批
        }
    }
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **403** | - | 未授权 | 请确认 `accessToken`（认证token）是否已过期<br/>请确认调用接口地址前缀与您企业所在的环境是否保持一致 | 
| **412** | - | 未查找到此员工信息 | 请确认 `staffParam`（查询的员工参数）是否正确或者员工是否存在 | 

