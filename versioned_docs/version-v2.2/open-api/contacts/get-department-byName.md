# 根据部门名称获取部门信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/departments/getDepartmentByName"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.6.0**](/updateLog/update-log#160)
  - 🐞 **成功响应** 中增加 `order`（排序序号）参数。

</div>
</details>

:::caution
- 由于不同路径存在重名部门，所以可返回多个。
- 本接口只能查询到 **启用** 的部门信息，如果需要查询已停用的部门信息，请通过 [获取部门列表(包含停用部门)](/docs/open-api/corporation/get-departments) 查询到全部的部门列表，再进行匹配。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **name**        | String | 部门名称   | 必填 | - | 在合思桌面端「系统设置」>「通讯录」处查看 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/departments/getDepartmentByName?accessToken=z0wbwXPo6sf400&name=%E8%B4%A2%E5%8A%A1%E9%83%A8' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "JOYbpjPP-E2Q00:pAwbwH_W7sec00", //部门ID
            "name": "财务部",                      //部门名称
            "parentId": "JOYbpjPP-E2Q00",         //上级部门ID
            "active": true,                       //是否启用
            "code": "1003",                       //部门编码
            "updateTime": "2022-01-11 17:43:59",  //更新时间
            "createTime": "2022-01-11 17:43:59",  //创建时间
            "form":{                              //部门关联法人实体ID和成本中心ID
                "costCenter":"NzMcynfBJ43M00",    //成本中心ID
                "legalEntity":"11YcypdGzoEo00"    //法人实体ID
            },
            "order": 3                            //排序序号
        }
    ]
}
```
