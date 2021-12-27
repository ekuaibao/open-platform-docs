# 获取自定义档案类别
即易快报桌面端`档案设置 > 扩展档案`界面的列表中展示的那些档案大类。例如`项目`就是一个自定义档案类别。

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	                        | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number  | 分页查询的起始序号，即从第几条数据开始查询 | 必填 |  - | 从0开始 |
| **count**       | Number  | 查询数据条数                         | 必填 |  - | 查询数据条数 |

:::tip
- 分页的起始值是从0开始， 而不是传统的1开始。
:::

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions?accessToken=hQgbxfJnlElc00&start=0&count=100' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

:::tip
- 成功响应时，`count`参数返回的是档案类别总数量，不是查询条数；
- items参数返回的是查询的数量。
:::

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

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "输入存在错误:\n- 缺少count参数",
    "errorDetails": null,
    "code": null,
    "data": null
}
```