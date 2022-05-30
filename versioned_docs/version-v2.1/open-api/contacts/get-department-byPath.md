# 根据部门路径获取部门信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/departments/getDepartmentByPath"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.6.0</b></a> -> 🐞 <b>成功响应</b>中增加 <b>'order'</b> 参数。<br/>
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **path**        | String | 部门路径   | 必填 | - | 部门名称全路径，例如“总公司/财务部” |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/departments/getDepartmentByPath?accessToken=z0wbwXPo6sf400&path=%E8%B4%A2%E5%8A%A1%E9%83%A8' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
      "value": {
            "id": "JOYbpjPP-E2Q00:pAwbwH_W7sec00", //部门ID
            "name": "财务部",                      //部门名称
            "parentId": "JOYbpjPP-E2Q00",         //上级部门ID
            "active": true,                       //是否启用
            "code": "1003",                       //部门编码
            "form":{                              //部门关联法人实体ID和成本中心ID
                "costCenter":"NzMcynfBJ43M00",    //成本中心ID
                "legalEntity":"11YcypdGzoEo00"    //法人实体ID
            },
            "order": 3                            //排序序号
      }
}
```