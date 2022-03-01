# 新增某档案关系下的档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/recordLink/add/$`id`"
/>

<details>
  <summary>v2.1版本特性</summary>
  <div>
    - 🐞 修复了传其他类型自定义档案项ID（非档案关系配置的类型）可以创建成功数据的问题。
  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 档案关系ID | 必填 | - | [获取企业下档案关系列表](/docs/open-api/recordLink/get-dimension-relation) | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **sourceValues**  | Array  | 源维度值	| 必填  | - | 源维度值 |
| **purposeValues** | Array  | 目标维度值	| 必填  | - | 目标维度值 |

:::tip
- 关于源维度值和目标维度值的区分：
![images](images/源维度与目标维度.png)
:::

## CURL
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v2.1/recordLink/add/$qyMbXMvgBgaU00?accessToken=73QbYDmzCc6I00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "sourceValues": [   //例如 “项目和预算项”的档案关系，源维度值传“项目”分类下的项目ID
            "ltAbQUtfE03k00:taxi","ltAbQUtfE03k00:communication"  
      ],
      "purposeValues": [  //例如 “项目和预算项”的档案关系，目标维度值传“预算项”分类下的预算项ID
            "ltAbQUtfE03k00:dIEbu2mgTs6o00","ltAbQUtfE03k00:NU8bdZALSsts00"
      ]
}'
```

## 成功响应
```text
关系新增成功
```

## 失败响应
当 `sourceValue`（源维度值）与 `purposeValue`（目标维度值）参数输入错误或者写反时，会报如下错误：
```json
{
    "errorCode": 412,
    "errorMessage": "没有可用的sourceValue与purposeValue！",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

传其他类型自定义档案项ID，例如：“项目”与“员工”的档案关系，项目传值是其他自定义档案项ID时（例如：岗位），报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "编辑关系，双向关系必须存在有效值！",
    "errorDetails": null,
    "code": null,
    "data": null
}
```


