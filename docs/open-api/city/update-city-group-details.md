# 更新城市组详情

{% httpverb "post" %}  /api/openapi/v1/cityGroup/detail/save {% endhttpverb %}


#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  |通过授权接口获取。      |必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |


#### Body Parameters:
| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **roleIds** | String []  | 角色id列表	      | 非必填	   | - | [通过查询角色组和角色获取](/corporation/get-roles-group.md) |
| **staffIds** | String []  | 人员id列表      | 非必填 | - | [通过获取员工列表获取](/corporation/get-all-staffs.md) |
| **cityIds** | String []  | 城市id列表	      | 必填 | - | [通过获取城市列表数据获取](/basedata/get-basedata-city.md) |
| **cityGroupId** | String  | 城市组id	      | 必填 | - | - |


<br/>
#### CURL:
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/detail/save?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "roleIds":[],
    "staffIds":[
        "AdMbpirnlY2Q00:Mksc4_e8ggjo00", "AdMbpirnlY2Q00:ksUbpirnlYg000"
    ],
    "cityIds":[  // 城市id列表
        "37", "153", "154"
    ],
    "cityGroupId":"wC0cPu1DNY1400"
}'
```

>⚠️ 注意：

>选择城市末级时需要把其父级直到顶级id传递过来, 如: 石家庄市区->石家庄市->河北省

<br/>


#### 成功响应:
```json
{
  "success": true,
  "message": "ok"
}
```
