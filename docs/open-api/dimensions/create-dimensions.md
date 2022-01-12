# 新建自定义档案类别

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v1/dimensions"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name**              | String  | 档案类别名称	    | 必填  | - | 档案类别名称不能重复 |
| **code**              | String  | 档案类别编码	    | 非必填 | - | 档案类别编码可为空，但不能重复 |

:::tip
- 当填写的 `name` 字段在系统中已存在，会忽略 `code` 参数，返回系统中已存在的档案类别id。
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
当 `code` 编码和 `name` 名称在系统中已存在时，会返回已创建的档案值id：
```json
{
  "id": "Urf3lsFgBp00gw:档案名称"   //档案值id
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



















