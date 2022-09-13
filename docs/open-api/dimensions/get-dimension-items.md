# 获取自定义档案项(不带可见范围)

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions/items"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.11.0**](/docs/open-api/notice/update-log#1110)&emsp;-> 🐞 新增了 `orderBy` 和 `orderByType` 参数，成功响应数据可按照 `updateTime`（更新时间）正序排序。<br/>
  [**1.1.0**](/docs/open-api/notice/update-log#110) &emsp; -> 🐞 新增了 `startDate` 和 `endDate` 参数，根据 **更新时间** 过滤列表数据，并且返回值中增加 `createTime` 和 `updateTime` 参数。<br/>
  [**0.7.136**](/docs/open-api/notice/update-log#07136) -> 🆕 新增了支持按 `dimensionId`（档案类别ID）参数过滤数据。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	     | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **start**       | Number  | 分页查询的起始序号 | 必填  | - | 从第几条数据开始查询 |
| **count**       | Number  | 查询数据条数      | 必填  | - | 最大不能超过 `100` |
| **dimensionId** | String  | 档案类别ID       | 非必填 | - | 通过 [获取自定义档案类别](/docs/open-api/dimensions/get-dimensions) 获取，通过此参数可查询<br/>指定档案类别下的档案项 |
| **startDate**   | String | 查询开始时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **endDate**     | String | 查询结束时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **orderBy**     | String  | 排序字段    | 非必填 | - | `updateTime` : 更新时间 |
| **orderByType** | String  | 排序方式    | 非必填 | asc | `asc` ：正序<br/>`desc` ：倒序 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items?accessToken=ID01iWYs8eUjHV:xgJ3wajigF25H0&start=0&count=100&dimensionId=xgJ3wajigF25H0:项目&orderBy=updateTime&orderByType=desc'
```

## 成功响应
```json
{
    "count": 5,	                                  //档案值的数量
    "items": [
        {
            "id": "ID_3LRUarl0DDv",               //档案值ID
            "name": "项目5",                       //档案值名称
            "active": true,                       //是否有效
            "code": "CODE5",                      //档案值编码
            "dimensionId": "xgJ3wajigF25H0:项目",  //所属档案类别ID
            "parentId": "",                       //档案值的父级ID
            "updateTime": "2022-07-26 16:36:57",  //更新时间
            "createTime": "2022-07-26 16:36:11"   //创建时间
        },
        {
            "id": "ID_3LRUarl0BDv",
            "name": "项目4",
            "active": true,
            "code": "CODE4",
            "dimensionId": "xgJ3wajigF25H0:项目",
            "parentId": "ID_3D5RavkAWRM",
            "updateTime": "2022-07-26 16:34:23",
            "createTime": "2022-07-26 16:31:58"
        },
        {
            "id": "ID_3D5RavkAXRM",
            "name": "项目2",
            "active": true,
            "code": "CODE2",
            "dimensionId": "xgJ3wajigF25H0:项目",
            "parentId": "ID_3D5RavkAWRM",
            "updateTime": "2022-07-26 16:30:53",
            "createTime": "2022-04-11 15:08:53"
        },
        {
            "id": "ID_3LSIgzBllAv",
            "name": "项目3",
            "active": true,
            "code": "CODE3",
            "dimensionId": "xgJ3wajigF25H0:项目",
            "parentId": "",
            "updateTime": "2022-07-26 16:30:29",
            "createTime": "2022-07-26 16:22:41"
        },
        {
            "id": "ID_3D5RavkAWRM",
            "name": "项目1",
            "active": true,
            "code": "CODE1",
            "dimensionId": "xgJ3wajigF25H0:项目",
            "parentId": "",
            "updateTime": "2022-04-11 15:08:48",
            "createTime": "2022-04-11 15:08:48"
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | `{"count": 0,"items": []}` | 请确认 `dimensionId`（档案类别ID）是否正确，以及<br/>`startDate`（查询开始时间）和 `endDate`（查询结束时间）格式是否正确 | 
