# 更新某档案关系下的档案项数据

{% httpverb "post" %} /api/openapi/v2/recordLink/edit/$`id` {% endhttpverb %}

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
| **editFlag**                      | String | 更新标志	| 非必填  | cover | `increment`：增量新增`cover`：全量覆盖 |
| **editRecordLinks**               | Array  | 批量更新项	| 必填    | - | 批量更新项 |
| **editRecordLinks/sourceValues**  | Array  | 源维度值	| 必填    | - | 通过[获取某档案关系下的档案项数据](/recordLink/get-dimension-relation-items.html)获取 |
| **editRecordLinks/purposeValues** | Array  | 目标维度值	| 必填    | - | 通过[获取某档案关系下的档案项数据](/recordLink/get-dimension-relation-items.html)获取 |


> ⚠️注意：

> * 全量覆盖是指的填写的源维度值或目标维度值，会把原数据覆盖（如果填写的源维度值和目标维度值在原数据中都无法匹配到，将会覆盖掉之前全部的数据！）
> * 增量新增是指的填写的源维度值或目标维度值，会追加到原来的数据中，不会将原数据覆盖

<br/>

#### CURL:

```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v2/recordLink/edit/$4GAbXLhPP0go00?accessToken=9tIbZl52wUsI00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "editFlag": "increment", // increment=增量新增； cover=全量覆盖
      "editRecordLinks": [
            {
                  "sourceValues": [
                        "AvcbV9SQ4QvM00",
                        "EUAbQUBIQU1800"
                  ],
                  "purposeValues": [
                        "-VMbUQKZDw7800",
                        "240bTF2Fowo400"
                  ]
            },
            {
                  "sourceValues": [
                        "MoYbV9SQ4Qos00"
                  ],
                  "purposeValues": [
                        "-VMbUQKZDw7800"
                  ]
            }
      ]
}'
```
<br/>

#### 成功响应:

```text
关系更新成功
```

#### 失败响应:
```json
{
    "errorCode": 412,
    "errorMessage": "无效的档案关系ID",
    "errorDetails": null,
    "code": null,
    "data": null
}
```



















