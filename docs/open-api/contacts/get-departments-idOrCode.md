# 根据部门ID或编码获取部门信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/departments/$`idOrCode`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.6.0</b></a> -> 🐞 <b>成功响应</b>中增加 <b>'order'</b> 参数。<br/>
  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **idOrCode** | String | `部门ID` 或 `部门编码`| 必填 | - | 参数为 `部门ID` 或 `部门编码` | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**  | String | 认证token  | 必填   | -  | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **departmentBy** | String | 查询方式    | 非必填 | id | 固定值 : `id` 或者 `code`，与 `idOrCode` 参数对应 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/departments/$JOYbpjPP-E2Q00:pAwbwH_W7sec00?accessToken=z0wbwXPo6sf400&departmentBy=id' \
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
        "code": "1003"                        //部门编码
        "form":{                              //部门关联法人实体ID和成本中心ID
            "costCenter":"NzMcynfBJ43M00",    //成本中心ID
            "legalEntity":"11YcypdGzoEo00"    //法人实体ID
        },
      "order": 3                             //排序序号
    }
}
```

## 失败响应
```json
{
    "errorCode": 400,
    "errorMessage": "未找到对应部门",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

