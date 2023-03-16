# 根据企业ID获取分摊模板列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/specifications/apportion"
/>

:::caution
- 只返回未停用、未删除的模板信息。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/specifications/apportion?accessToken=f8QbuH2hwQ5E00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "joQbMsJBw01c00:报销部门&项目分摊",
            "name": "报销部门&项目分摊",
            "type": "apportion"
        },
        {
            "id": "joQbMsJBw01c00:报销部门分摊",
            "name": "报销部门分摊",
            "type": "apportion"
        },
        {
            "id": "joQbMsJBw01c00:项目分摊",
            "name": "项目分摊",
            "type": "apportion"
        }
    ]
}
```

