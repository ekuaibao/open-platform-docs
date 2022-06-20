# 获取自定义档案项(不带可见范围)

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions/items"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.1.0**](/docs/open-api/notice/update-log#110) &emsp; -> 🐞 新增了 `startDate` 和 `endDate` 参数，根据 **更新时间** 过滤列表数据，并且返回值中增加 `createTime` 和 `updateTime` 参数。<br/>
  [**0.7.136**](/docs/open-api/notice/update-log#07136) -> 🆕 新增了支持按 `dimensionId`（档案类别ID）参数过滤数据。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	     | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **start**       | Number  | 分页查询的起始序号 | 必填  | - | 从第几条数据开始查询 |
| **count**       | Number  | 查询数据条数      | 必填  | - | 最大不能超过 `100` |
| **dimensionId** | String  | 档案类别ID       | 非必填 | - | [获取自定义档案类别](/docs/open-api/dimensions/get-dimensions)，通过此参数可查询<br/>指定档案类别下的档案项 |
| **startDate**   | String | 查询开始时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **endDate**     | String | 查询结束时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items?accessToken=hQgbxfJnlElc00&start=0&count=100&startDate=2022-01-12 14:35:54&endDate=' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "count": 6,	                           //档案值的数量
    "items": [
        {
            "id": "JOYbpjPP-E2Q00:laptop", //档案值ID
            "name": "笔记本电脑",          //档案值名称
            "active": true,                //是否有效
            "code": "4-Laptop",            //档案值编码
            "dimensionId": "JOYbpjPP-E2Q00:固定资产类目", //所属档案类别ID
            "parentId": "",                 //档案值的父级ID
            "updateTime": "2022-02-10 11:16:33",
            "createTime": "2022-02-10 11:16:33"
        },
        {
            "id": "Ak0btTcoEkrA00",
            "name": "测试项目",
            "active": true,
            "code": "CODE1",
            "dimensionId": "JOYbpjPP-E2Q00:项目",
            "parentId": "",
            "updateTime": "2022-02-10 11:16:39",
            "createTime": "2022-02-10 11:16:39"
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
