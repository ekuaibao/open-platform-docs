# 获取自定义档案类别
即合思桌面端 **档案设置 > 扩展档案** 界面列表中展示的那些档案大类。例如 **项目** 就是一个自定义档案类别。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	     | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **start**       | Number  | 分页查询的起始序号 | 必填 | - | 从第几条数据开始查询 |
| **count**       | Number  | 查询数据条数      | 必填 | - | 最大不能超过 `100` |

:::tip
- 分页的起始值是从0开始， 而不是传统的1开始。
:::

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions?accessToken=hQgbxfJnlElc00&start=0&count=100' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应

```json
{
    "count": 3, //档案总条数
    "items": [
        {
              "id": "JOYbpjPP-E2Q00:项目", //档案类别ID
              "name": "项目",	            //档案类别名称
              "active": true,	          //是否有效
              "code": "DA001"	          //档案类别编码
        },
        {
              "id": "JOYbpjPP-E2Q00:法人实体",
              "name": "法人实体",
              "active": true,
              "code": "FRST"
        },
        {
              "id": "JOYbpjPP-E2Q00:固定资产类目",
              "name": "固定资产类目",
              "active": true,
              "code": "assets"
        }
    ]
}
```

:::caution
- 成功响应时，`count` 参数返回的是档案类别总数量，不是查询条数。
- `items` 参数返回的是查询的数据。
:::

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 输入存在错误:<br/>- 缺少count参数 | 请确认 `count` （查询数据条数）是否传入 | 
