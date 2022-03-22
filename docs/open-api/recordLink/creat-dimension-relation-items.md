# 新增某档案关系下的档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/recordLink/add/$`id`"
/>

<details>
  <summary>v2.1版本特性</summary>
  <div>
    - 🐞 修复了传其他类型自定义档案项ID（非档案关系配置的类型）可以创建成功数据的问题。<br/>
    - 🆕 新增 “type” 类型参数，支持 ”id“ 或 ”code“ 传参。
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
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许重复** |

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
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/add/$ID_3BFuV7KbVDw?accessToken=ID_3BFuV7KbNDw:bwa3wajigF0WH0&type=id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sourceValues": [   //例如：“员工和项目”的档案关系，源维度值传某个员工的ID或者CODE
        "bwa3wajigF0WH0:qKZ3wlg6bv9OGg","bwa3wajigF0WH0:IqQ3wlg6bv9QGg"
    ],
    "purposeValues": [  //例如：“员工和项目”的档案关系，目标维度值传某个项目的ID或者CODE
        "ID_3zYtLIa21gM","ID_3zYtLIa22gM"
    ]
}'
```
</TabItem>
<TabItem value="code" label="code">

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/add/$ID_3BFuV7KbVDw?accessToken=ID_3BFuV7KbNDw:bwa3wajigF0WH0&type=code' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sourceValues": [   //例如：“员工和项目”的档案关系，源维度值传某个员工的ID或者CODE
        "1001","1002","1003"
    ],
    "purposeValues": [  //例如：“员工和项目”的档案关系，目标维度值传某个项目的ID或者CODE
        "CODE1","CODE2","CODE3"
    ]
}'
```
</TabItem>
</Tabs>

## 成功响应
```text
关系新增成功
```

## 失败响应
档案关系不存在或已删除时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "档案关系ID:ID_3BfDMDHeZ20不存在或已删除！",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `sourceValues`（源维度值）与 `purposeValues`（目标维度值）参数写反时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "没有可用的sourceValue与purposeValue！",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `sourceValues`（源维度值）或 `purposeValues`（目标维度值）参数不存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "编辑关系，双向关系必须存在有效值！",
    "errorDetails": null,
    "code": null,
    "data": null
}
```


