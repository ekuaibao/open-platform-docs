# 删除某档案关系下的档案项数据

{% httpverb "post" %} /api/openapi/v2/recordLink/del/$`id` {% endhttpverb %}

#### Path Parameters:

| 名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **id** | String  | 档案关系ID | 必填| - | [获取企业下档案关系列表](/recordLink/get-dimension-relation.html) | 


#### Query Parameters:

| 名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String  | 认证token	| 必填  | - | [通过授权接口获取](/getting-started/auth.html) |

#### Body Parameters:

| 名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **sourceValues**  | Array  | 源维度值	| 必填  | - | 通过[获取某档案关系下的档案项数据](/recordLink/get-dimension-relation-items.html)获取 |
| **purposeValues** | Array  | 目标维度值	| 必填  | - | 通过[获取某档案关系下的档案项数据](/recordLink/get-dimension-relation-items.html)获取 |

> ⚠️注意：

> 当填sourceValues时，以源维度删除相关档案关系,当填purposeValues时，以目标维度删除相关档案关系,当sourceValues和purposeValues都填时，以源维度和目标维度的交集删除相关档案关系

<br/>

#### CURL:
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v2/recordLink/del/$qyMbXMvgBgaU00?accessToken=73QbYDmzCc6I00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "sourceValues": [],
      "purposeValues": [
            "ltAbQUtfE03k00:NU8bdZALSsts00"
      ]
}'
```

<br/>

#### 成功响应:
```text
关系删除成功
```

#### 失败响应:
档案关系ID输入有误时：
```text
无效的档案关系ID
```
sourceValue与purposeValue参数传递错误时：
```text
没有可用的sourceValue与purposeValue！
```



















