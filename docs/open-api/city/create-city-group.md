# 创建城市组

{% httpverb "post" %}  /api/openapi/v1/cityGroup/create {% endhttpverb %}


#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  |通过授权接口获取。      |必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |


#### Body Parameters:
| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **name** | String  | 名称      | 必填   | - | - |
| **desc** | String  | 描述      | 非必填 | - | - |


<br/>
#### CURL:
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/create?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "name": "openapi城市组",
      "desc": "通过openapi创建的城市组"
}'
```
<br/>


#### 成功响应:
```json
{
  "value": {
    "pipeline": 1,
    "id": "wC0cPu1DNY1400",
    "version": 1,
    "active": true, // 是否有效
    "createTime": 1621252554481,
    "updateTime": 1621252554481,
    "name": "openapi城市组",
    "desc": "通过openapi创建的城市组",
    "status": true, // 是否启用: true-启用, false-停用
    "cityGroup": [], // 城市组明细
    "corporationId": "AdMbpirnlY2Q00"
  }
}
```
