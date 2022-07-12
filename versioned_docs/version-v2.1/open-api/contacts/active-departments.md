# 停启用部门

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/departments/disableOrEnableDepartment/$`departmentId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.6.0**](/docs/open-api/notice/update-log#160) -> 🐞 **成功响应** 中增加 `order`（排序序号）参数。<br/>

  </div>
</details>

:::caution
- 当停用部门时，其子孙部门也会被一并停用。
- 启用一个部门时并不会一并启用其所有子孙部门。
- 停用部门前，需要先确保没有任何员工属于该部门，否则调用接口失败。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **departmentId** | String | 部门ID | 必填 | - | 通过 [获取部门列表](/docs/open-api/corporation/get-departments) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	    | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` | 
| **active**      | Boolean | 停用或启用标识	| 必填  | - | `true` : 启用 &emsp; `false` : 停用 |

## CURL
```shell
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/departments/disableOrEnableDepartment/$JOYbpjPP-E2Q00:Ef0bwJTotQho00?accessToken=rv0bwKeAks4Y00&active=false' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "JOYbpjPP-E2Q00:Ef0bwJTotQho00",  //部门ID
            "name": "openapi",                      //部门名称
            "parentId": "JOYbpjPP-E2Q00",           //上级部门ID
            "active": false,                        //是否停用
            "code": "",                             //部门编码
            "form":{                                //部门关联法人实体ID和成本中心ID
                "costCenter":"NzMcynfBJ43M00",      //成本中心ID
                "legalEntity":"11YcypdGzoEo00"      //法人实体ID
            },
            "order": 4                              //排序序号
        }
    ]
}
```

## 失败响应
```json
{
    "errorCode": 412,
    "errorMessage": "要停用部门下的员工，才能停用此部门",
    "errorDetails": null,
    "code": null,
    "data": null
}
```


