# 获取部门列表(包含停用部门) 

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/departments"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.11.0**](/docs/open-api/notice/update-log#1110)&emsp;-> 🐞 新增了 `orderBy` 和 `orderByType` 参数，接口【**成功响应**】数据可按照 `updateTime`（更新时间）排序。<br/>
  [**1.6.0**](/docs/open-api/notice/update-log#160) &emsp; -> 🐞 **成功响应** 中增加 `order`（排序序号）参数。<br/>
  [**1.1.0**](/docs/open-api/notice/update-log#110) &emsp; -> 🐞 新增了 `startDate` 和 `endDate` 参数，根据 **更新时间** 过滤列表数据，并且返回值中增加 `createTime` 和 `updateTime` 参数。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	    | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **start**       | Number | 分页查询的起始序号 | 必填 | - | 分页的起始值是从 `0` 开始， 而不是传统的 `1` 开始 |
| **count**       | Number | 查询数据条数      | 必填 | - | 最大不能超过 `100` |
| **startDate**   | String | 查询开始时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **endDate**     | String | 查询结束时间 | 非必填 | - | 按数据 **更新时间** 查询，格式：yyyy-MM-dd HH:mm:ss |
| **orderBy**     | String  | 排序字段    | 非必填 | - | `updateTime` : 更新时间 |
| **orderByType** | String  | 排序方式    | 非必填 | asc | `asc` ：正序 &emsp; `desc` ：倒序 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/departments?accessToken=ID01iWYs8eUjHV:xgJ3wajigF25H0&start=0&count=100&orderBy=updateTime&orderByType=desc'
```

## 成功响应
```json
{
    "count": 3,                                     //数据总条数
    "items": [
        {
            "id": "xgJ3wajigF25H0:ID_3zE5G_06Pw0",  //部门ID
            "name": "大槐树风俗酒店",                //部门名称
            "parentId": "xgJ3wajigF25H0",		    //父级部门ID
            "active": true,                         //部门是否已停用
            "code": "001-22",                       //部门编码
            "updateTime": "2022-08-25 15:22:53",    //更新时间
            "createTime": "2022-02-24 16:18:46",    //创建时间
            "form": {                               //部门关联法人实体ID和成本中心ID
                "costCenter": "NzMcynfBJ43M00",     //成本中心ID
                "legalEntity": "ID01iWYs8eNzK7"     //法人实体ID
            },
            "order": 1                              //排序序号
        },
        {
            "id": "xgJ3wajigF25H0:ID_3FQR$Yx0zWM",
            "name": "自助餐",
            "parentId": "xgJ3wajigF25H0:ID_3DEQAWZ1iHM",
            "active": true,
            "code": "001-3-8",
            "updateTime": "2022-05-12 18:14:12",
            "createTime": "2022-05-12 18:14:12",
            "form": {
                "costCenter": "NzMcynfBJ43M00",
                "legalEntity": "ID01iWYs8eNzK7"
            },
            "order": 8
        },
        {
            "id": "xgJ3wajigF25H0:ID_3FQR$Yx0xWM",
            "name": "火锅店",
            "parentId": "xgJ3wajigF25H0:ID_3DEQAWZ1iHM",
            "active": true,
            "code": "001-3-7",
            "updateTime": "2022-05-12 18:13:55",
            "createTime": "2022-05-12 18:13:55",
            "form": {
                "costCenter": "NzMcynfBJ43M00",
                "legalEntity": "ID01iWYs8eNzK7"
            },
            "order": 7
        },
        {
            "id": "xgJ3wajigF25H0",
            "name": "洪洞大槐树",
            "parentId": "",
            "active": true,
            "code": "001",
            "updateTime": "2022-02-24 16:16:29",
            "createTime": "2022-01-12 14:42:48",
            "form": {
                "costCenter": "NzMcynfBJ43M00",
                "legalEntity": "ID01iWYs8eNzK7"
            },
            "order": 0
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"count": 3,"items": []}` | `count` 大于 `0` 但返回部门信息为空时，<br/>请确认 `start`（分页查询的起始序号）是否小于实际员工总数据量 |
| **403** | - | 未授权 | 请确认 `accessToken`（认证token）是否已过期<br/>请确认 **地址前缀** 是否与您的企业环境一致 | 

