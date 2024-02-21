# 根据自定义字段查询部门信息

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/departments/departmentCustom"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.16.0**](/updateLog/update-log#1160)
  - 🆕 新增了本接口。

</div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称           | 类型     | 描述       | 是否必填 | 默认值 | 备注                                                                             |
|:-------------|:-------|:---------| :--- |:--- |:-------------------------------------------------------------------------------|
| **部门自定义字段名** | Object | 部门自定义字段名 | 必填 | - | 可通过 [获取部门列表](/docs/open-api/corporation/get-departments) 返回的 `form`（部门自定义字段）获取 |

## CURL
```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1/departments/departmentCustom?accessToken=ID01oMxsLeIgRM%3ADgM3w5DRQ401Iw' \
--header 'Content-Type: application/json' \
--data '{
    "costCenter": "ID01krmp8S5JiD"
}'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "DgM3w5DRQ401Iw:pAwbwH_W7sec00", //部门ID
            "name": "财务部",                      //部门名称
            "parentId": "DgM3w5DRQ401Iw",         //上级部门ID
            "active": true,                       //是否启用
            "code": "1003",                       //部门编码
            "updateTime": "2022-01-11 17:43:59",  //更新时间
            "createTime": "2022-01-11 17:43:59",  //创建时间
            "form":{                              //部门关联法人实体ID和成本中心ID
                "costCenter":"ID01krmp8S5JiD",    //成本中心ID
                "legalEntity":"11YcypdGzoEo00"    //法人实体ID
            },
            "order": 3                            //排序序号
        }
    ]
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 查询参数不能为空 | 请确认 `Body Parameters` 是否传值 | 
| **403** | - | 未授权 | 请确认 `accessToken`（认证token）是否已过期<br/>请确认 **地址前缀** 与您的企业环境一致 | 


