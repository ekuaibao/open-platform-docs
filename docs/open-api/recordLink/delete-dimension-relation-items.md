# 删除某档案关系下的档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/recordLink/del/$`id`"
/>

<details>
  <summary>v2.1版本特性</summary>
  <div>
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
| **sourceValues**  | Array | 源维度值   | 必填 | - | 通过[获取某档案关系下的档案项数据](/docs/open-api/recordLink/get-dimension-relation-items)获取 |
| **purposeValues** | Array | 目标维度值 | 必填 | - | 通过[获取某档案关系下的档案项数据](/docs/open-api/recordLink/get-dimension-relation-items)获取 |

:::tip
- 当填 `sourceValues` 时，以源维度删除相关档案关系；
- 当填 `purposeValues` 时，以目标维度删除相关档案关系；
- 当 `sourceValues` 和 `purposeValues` 都填时，以源维度和目标维度的交集删除相关档案关系。
:::

## CURL
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/del/$ID_3BFuV7KbVDw?accessToken=ID_3BJKZuv8iow:bwa3wajigF0WH0&type=id' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "sourceValues": [
       "bwa3wajigF0WH0:qKZ3wlg6bv9OGg","bwa3wajigF0WH0:IqQ3wlg6bv9QGg","bwa3wajigF0WH0:aRx3BagJH20mdg"
    ],
    "purposeValues": []
}'
```
</TabItem>
<TabItem value="code" label="code">

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/del/$ID_3BFuV7KbVDw?accessToken=ID_3BJKZuv8iow:bwa3wajigF0WH0&type=code' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "sourceValues": [
       "1001","1002","1003"
    ],
    "purposeValues": []
}'
```
</TabItem>
</Tabs>

## 成功响应
```text
关系删除成功
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

当 `sourceValues`（源维度值）或 `purposeValues`（目标维度值）参数输入错误或者写反时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "没有可用的sourceValue与purposeValue！",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

