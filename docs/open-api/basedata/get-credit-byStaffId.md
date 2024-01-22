# 查询员工信用分数

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/credit/byStaffId"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.25.0**](/docs/open-api/notice/update-log#1250) -> 🆕 新增了本接口。<br/>

  </div>
</details>

:::caution
- 使用该接口需要开通【**信用管理**】功能，并在 **`信用模型`** 模块首次保存，生成信用数据。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **staffId**     | String | 员工ID    | 必填  | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取  |


## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v2/credit/byStaffId?accessToken=ID01w4CBq8tWer%3AxgJ3wajigF25H0&staffId=xgJ3wajigF25H0%3Adbc3wajigF1UH0' \
```

## 成功响应

```json
{
    "value": {
        "code": "B",      //编码
        "point": 100,     //分数
        "level": "B",     //等级名称
        "description": "信用良好2",   //等级描述
        "updateTime": 1698128934234  //更新时间
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议                                            |
| :--- | :--- | :--- |:------------------------------------------------|
| **400** | - | 信用模型不存在 | 请确认是否开通【**信用管理**】功能，并在 **`信用模型`** 模块首次保存，生成信用数据 | 
| **400** | - | 未初始化信用分 | 请确认 `staffId`（员工ID）是否正确                         | 
