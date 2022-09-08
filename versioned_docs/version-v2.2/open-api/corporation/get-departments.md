# 获取部门列表(包含停用部门)

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/departments"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.11.0**](/docs/open-api/notice/update-log#1110)&emsp;-> 🐞 优化了成功响应数据按照 `updateTime`（更新时间）正序排序。<br/>
  [**1.6.0**](/docs/open-api/notice/update-log#160) -> 🐞 **成功响应** 中增加 `order`（排序序号）参数。<br/>
  [**1.1.0**](/docs/open-api/notice/update-log#110) -> 🐞 新增了 `startDate` 和 `endDate` 参数，根据 **更新时间** 过滤列表数据，并且返回值中增加 `createTime` 和 `updateTime` 参数。<br/>

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

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/departments?accessToken=RCIbwHcnF0kg00&start=0&count=20&startDate=2022-01-21 15:29:18&endDate=' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "count": 3, //数据总条数
    "items": [
          {
                "id": "JOYbpjPP-E2Q00:pAwbwH_W7sec00",  //部门ID
                "name": "财务部",                       //部门名称
                "parentId": "JOYbpjPP-E2Q00",		    //父级部门ID
                "active": true,		                    //部门是否已停用
                "updateTime": "2022-02-10 18:16:48",
                "createTime": "2022-01-21 15:29:07",
                "form":{                                //部门关联法人实体ID和成本中心ID
                    "costCenter":"NzMcynfBJ43M00",      //成本中心ID
                    "legalEntity":"11YcypdGzoEo00"      //法人实体ID
                },
                "order": 6,                             //排序序号
                "code": "1003"	                        //部门编码
          },
          {
                "id": "JOYbpjPP-E2Q00",
                "name": "恒达",
                "parentId": "",
                "active": true,
                "updateTime": "2022-01-21 15:29:28",
                "createTime": "2022-01-21 15:29:28",
                "form":{                                 //部门关联法人实体ID和成本中心ID
                    "costCenter":"NzMcynfBJ43M00",       //成本中心ID
                    "legalEntity":"11YcypdGzoEo00"       //法人实体ID
                },
                "order": 3,                              //排序序号
                "code": "1242"
          },
          {
                "id": "JOYbpjPP-E2Q00:ZNEbwH_W7sc000",
                "name": "人事部",
                "parentId": "JOYbpjPP-E2Q00",
                "active": true,
                "updateTime": "2022-02-10 18:16:48",
                "createTime": "2022-01-21 15:29:07",
                "form":{                                  //部门关联法人实体ID和成本中心ID
                  "costCenter":"NzMcynfBJ43M00",          //成本中心ID
                  "legalEntity":"11YcypdGzoEo00"          //法人实体ID
                },
                "order": 8,                               //排序序号
                "code": "1002"
          }
     ]
}
```

`start` 传参大于等于实际部门总数据量时，会得到如下响应，只显示总数据量“count“，不显示部门信息：
```json
{
    "count": 3,
	"items": []
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **403** | - | 未授权 | 请确认 `accessToken`（认证token）是否已过期<br/>请确认 **地址前缀** 是否与您的企业环境一致 | 

