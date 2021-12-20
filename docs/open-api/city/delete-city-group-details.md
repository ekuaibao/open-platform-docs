# 删除城市组详情

{% httpverb "post" %}  /api/openapi/v1/cityGroup/detail/delete {% endhttpverb %}


#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  |通过授权接口获取。      |必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |


#### Body Parameters:
| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **roleIds** | String []  | 角色id列表	      | 非必填	   | - | [通过查询角色组和角色获取](/corporation/get-roles-group.md) |
| **staffIds** | String []  | 人员id列表      | 非必填 | - | [通过获取员工列表获取](/corporation/get-all-staffs.md) |
| **cityGroupId** | String  | 城市组id	      | 必填 | - | - |


<br/>
#### CURL:
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/detail/delete?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "roleIds": [],
    "staffIds": [ "AdMbpirnlY2Q00:-eAbCLexxI2k00" ],
    "cityGroupId": "wC0cPu1DNY1400"
}'
```
<br/>


#### 成功响应:
```json
{
  "success": true,
  "message": "ok"
}
```
