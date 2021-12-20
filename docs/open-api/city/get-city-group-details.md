# 城市组详情

{% httpverb "post" %}  /api/openapi/v1/cityGroup/detail/search {% endhttpverb %}


#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  |通过授权接口获取。      |必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |


#### Body Parameters:
| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **cityGroupId** | String  | 城市组id      | -	   | - | - |
| **keyword** | String  | 搜索关键字      | 非必填 | - | 人员名称或角色名称 |


<br/>
#### CURL:
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/detail/search?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "cityGroupId": "wC0cPu1DNY1400",
      "keyword": null
}'
```
<br/>


#### 成功响应:
```json
{
  "count": 1,
  "items": [
    {
      "roleIds": [
        "KtEcDd3_nNS000"
      ],
      "staffIds": [
        "AdMbpirnlY2Q00:HEQbpirnlYgk00"
      ],
      "cityIds": [ //城市id列表
        "1", "2", "19", "20"
      ]
    }
  ]
}
```
