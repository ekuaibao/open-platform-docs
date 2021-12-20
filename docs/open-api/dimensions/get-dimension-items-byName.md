# 根据名称获取自定义档案项

通过档案项的名称来获取符合的列表

{% httpverb "get" %} /api/openapi/v1/dimensions/getDimensionByName {% endhttpverb %}

> ⚠️ 注意：
>  * 此接口并不区分档案类别，需要在获取到本地后再进行分类。
>  * 通过dimensionId和[获取自定义档案类别](/dimensions/get-dimensions.html)接口返回的id关联。

#### Query Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String  | 认证token	| 必填  | - | [通过授权接口获取](/getting-started/auth.html) |
| **name** | String  |自定义档案值的名称 |必填| - | 不支持模糊搜索 |


<br/>
#### CURL:
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions/getDimensionByName?accessToken=hQgbxfJnlElc00&name=%E6%B5%8B%E8%AF%95%E9%A1%B9%E7%9B%AE' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```
<br/>

#### 成功响应:
```json
{
      "count": 1,
      "items": [
            {
                  "version": 1,
                  "active": true, // 是否有效
                  "createTime": 1597050357829, // 创建日期
                  "updateTime": 1597050357829, // 更新日期
                  "name": "台式电脑", // 档案值名称
                  "nameSpell": "TAISHIDIANNAO",
                  "code": "5-Desktop-PC", // 自定义档案值的编码
                  "corporationId": "JOYbpjPP-E2Q00", // 企业id
                  "parentId": "", // 档案的父级id
                  "id": "JOYbpjPP-E2Q00:desktopPC", // 档案值id
                  "dimensionId": "JOYbpjPP-E2Q00:固定资产类目", // 所属档案类别id
                  "orders": 1585212226451, // 排序
                  "visibility": {  // 可见范围
                        "fullVisible": false, // 是否全部可见。在非全部可见的情况下，仅白名单内的员工可见。
                        "staffs": [ // 员工白名单
                              "JOYbpjPP-E2Q00:y8gbpjP9OsnI00"
                        ],
                        "roles": [ // 角色白名单
                              "DA8bunLUKE2U00"
                        ],
                        "departments": [  // 部门白名单
                              "JOYbpjPP-E2Q00:-ZkbwJTotQi400",
                              "JOYbpjPP-E2Q00"
                        ],
                        "departmentsIncludeChildren": true
                  },
                  "payAccountIds": null  // 支付账户id
            }
      ]
}
```

#### 如果出现以下信息，表示没有对应名称的档案项信息:
```json

{
    "count": 0,
    "items": []
}

```

#### 失败响应:
```json

{
    "errorCode": 400,
    "errorMessage": "输入存在错误:\n- 缺少name参数",
    "errorDetails": null,
    "code": null,
    "data": null
}
```