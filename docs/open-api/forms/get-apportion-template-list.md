# 根据企业ID获取分摊模版列表

{% httpverb "get" %} /api/openapi/v2/specifications/apportion {% endhttpverb %}

> ⚠️ 注意：

> 只返回未停用、未删除的模版信息

#### Query Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String  | 认证token	| 必填 | - | [通过授权接口获取](/getting-started/auth.html) |

<br/>

#### CURL:
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/specifications/apportion?accessToken=f8QbuH2hwQ5E00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

<br/>

#### 成功响应:
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

