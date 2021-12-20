# 启用自定义档案项

{% httpverb "put" %} /api/openapi/v1/dimensions/items/$`id`/enable {% endhttpverb %}

#### Path Parameters:

| 名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **id** | String  | 档案项id | 必填| - | 可通过[获取自定义档案项](/dimensions/get-dimensions-items.html)获取 | 

#### Query Parameters:

| 名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String  | 认证token	| 必填  | - | [通过授权接口获取](/getting-started/auth.html) |

#### Body Parameters:

| 名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **applyToSubtree** | Boolean  | 是否一并启用所有子级档案项 | 非必填  | false | `true`:启用`false`:不启用 |

> ⚠️ 注意：

>  `applyToSubtree`参数可以不填，但是body体`{}`必须存在

<br/>

#### CURL:
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/dimensions/items/$XBUbxhnP5k8w00/enable?accessToken=hQgbxfJnlElc00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
	"applyToSubtree": true
}'
```

> ⚠️ 注意：

> 返回需要判断状态码来确定是否成功

<br/>

#### 成功响应:
```text
code 204
```

#### 失败响应:
```json
{
      "errorCode": 412,
      "errorMessage": "档案项不存在",
      "errorDetails": null,
      "code": null,
      "data": null
}
```























