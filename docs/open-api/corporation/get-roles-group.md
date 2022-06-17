# 查询角色组和角色

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/roleDefGroups"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**0.7.135**](/docs/open-api/notice/update-log#07135) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/roleDefGroups?accessToken=RCIbwHcnF0kg00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items":[
        {
            "id":"rzI9NCATtI0800:group:default",
            "name":"角色组",
            "roleDefs":[
                {
                    "id":"4SY9_xt9Ww8400",
                    "name":"法人实体",
                    "sourceType":"basedata.Dimension"
                },
                {
                    "id":"CqkbKffGyspU00",
                    "name":"区域经理",
                    "sourceType":"basedata.Dimension"
                },
                {
                    "id":"0hI9_xt9Ww8c00",
                    "name":"项目负责人",
                    "sourceType":"basedata.Dimension"
                },
                {
                    "id":"rzI9NCATtI0800:admin",
                    "name":"主管理员ROM",
                    "sourceType":"organization.RoleDef"
                }
            ]
        },
        {
            "id":"Ccg9MI8FTI5400",
            "name":"职务",
            "roleDefs":[
                {
                    "id":"hjc9MI8FTI5800",
                    "name":"财务主管",
                    "sourceType":"organization.RoleDef"
                },
                {
                    "id":"0oc9MI8FTI5g00",
                    "name":"出纳",
                    "sourceType":"organization.RoleDef"
                },
                {
                    "id":"lIw9MI8FTI5k00",
                    "name":"经理",
                    "sourceType":"organization.RoleDef"
                },
                {
                    "id":"gpA9MI8FTI5c00",
                    "name":"人事",
                    "sourceType":"organization.RoleDef"
                }
            ]
        }
    ]
}
```
