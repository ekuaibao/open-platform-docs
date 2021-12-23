# ~~删除预算节点~~

> ⚠️注意：
>
> 不推荐使用，接口废弃，不再更新。推荐使用【批量更新(新增/修改/删除)预算节点】接口。

删除指定的预算节点。

{% httpverb "post" %}  /api/openapi/v2/budgets/$`budgetId`/node/$`nodeId`/del {% endhttpverb %}

#### Path Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **budgetId** | String  | 预算树id | 必填 | - | [预算树id获取](/budget/get-budget-list.html) |
| **nodeId** | String  | 要删除的节点id | 必填 | - | [预算节点id获取](/budget/get-budget-details.html) |

#### Query Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String  | 认证token	| 必填 | - | [通过授权接口获取](/getting-started/auth.html) |

<br/>
#### CURL:
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00/node/$1597314291146001/del?accessToken=f_kbtOJVVwdo00' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```
<br/>

#### 成功响应:
```json
{
    "value": {
        "success": true,
        "errmsg": ""
    }
} 
```



#### 失败响应:
`budgetId` 不存在时，返回此响应数据。

```json
{
    "value": {
        "success": false,
        "errmsg": "不存在的预算包"
    }
}
```