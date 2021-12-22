# 获取自定义档案项(不带可见范围)

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions/items"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	                         | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number  | 分页查询的起始序号，即从第几条数据开始查询 | 必填  | - | 从0开始 |
| **count**       | Number  | 查询数据条数                         | 必填  | - | 不能大于1000 |
| **dimensionId** | String  | 档案类别id                          | 非必填 | - | [获取自定义档案类别](/docs/open-api/dimensions/get-dimensions)，通过此参数可查询指定档案类别下的档案项 |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items?accessToken=hQgbxfJnlElc00&start=0&count=100' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "count": 6,	// 档案值的数量
    "items": [
        {
            "id": "JOYbpjPP-E2Q00:laptop", // 档案值id
            "name": "笔记本电脑",           // 档案值名称
            "active": true,                // 是否有效
            "code": "4-Laptop",            // 档案值编码
            "dimensionId": "JOYbpjPP-E2Q00:固定资产类目", // 所属档案类别id
            "parentId": ""                 // 档案值的父级id
        },
        {
            "id": "Ak0btTcoEkrA00",
            "name": "测试项目",
            "active": true,
            "code": "CODE1",
            "dimensionId": "JOYbpjPP-E2Q00:项目",
            "parentId": ""
    }
    ]
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "输入存在错误:\n- 缺少start参数",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
