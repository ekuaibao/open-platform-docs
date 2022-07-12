# 新增自定义档案类别

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/dimensions"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**0.7.143**](/docs/open-api/notice/update-log#07143) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name**              | String  | 档案类别名称	    | 必填  | - | 档案类别名称不能重复 |
| **code**              | String  | 档案类别编码	    | 非必填 | - | 档案类别编码可为空，但不能重复 |

:::tip
- 当填写的 `name` 字段在系统中已存在，会忽略 `code` 参数，返回系统中已存在的档案类别ID。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/dimensions?accessToken=ID_3mBvtR901YM:Urf3lsFgBp00gw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "code":"01",
    "name":" 档案名称"
}'
```

## 成功响应
当 `code` 编码和 `name` 名称在系统中已存在时，会返回已创建的档案值ID：
```json
{
    "id": "Urf3lsFgBp00gw:档案名称"   //档案值ID
}
```

## 失败响应
当 `code` 编码在系统中已存在时创建失败并返回如下类似内容：
```json
{
    "errorCode": 412,
    "errorMessage": "此编码已经被占用",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
当 `name` 名称为空时返回如下类似内容：
```json
{
    "errorCode": 400,
    "errorMessage": "请填写显示名称",
    "errorDetails": null,
    "code": null,
    "data": null
}
```



















