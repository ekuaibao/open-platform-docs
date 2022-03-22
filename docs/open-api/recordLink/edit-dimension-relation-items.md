# 编辑某档案关系下的档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/recordLink/editSingle/$`id`"
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
| **recordLinks**               | Array   | 批量更新项   | 必填 | - | 批量更新项 |
| **&emsp; ∟ oldSourceValue**  | String  | 旧源维度值   | 必填 | - | 通过[获取某档案关系下的档案项数据](/docs/open-api/recordLink/get-dimension-relation-items)获取 |
| **&emsp; ∟ oldPurposeValue** | String  | 旧目标维度值 | 必填 | - | 通过[获取某档案关系下的档案项数据](/docs/open-api/recordLink/get-dimension-relation-items)获取 |
| **&emsp; ∟ newSourceValue**  | String  | 新源维度值   | 必填 | - | 新源维度值 |
| **&emsp; ∟ newPurposeValue** | String  | 新目标维度值 | 必填 | - | 新目标维度值 |

## CURL
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/editSingle/$ID_3BFuV7KbVDw?accessToken=ID_3BKtCKGf_k0:bwa3wajigF0WH0&type=id' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "recordLinks": [
        {
            "oldSourceValue": "bwa3wajigF0WH0:qKZ3wlg6bv9OGg",   
            "oldPurposeValue": "ID_3zYtLIa21gM",                 
            "newSourceValue": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
            "newPurposeValue": "ID_3B9HDc30MOM"
        }
    ]
}'
```
</TabItem>
<TabItem value="code" label="code">

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/editSingle/$ID_3BFuV7KbVDw?accessToken=ID_3BKtCKGf_k0:bwa3wajigF0WH0&type=code' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "recordLinks": [
        {
            "oldSourceValue": "1003",   
            "oldPurposeValue": "CODE1",         
            "newSourceValue": "1001",
            "newPurposeValue": "CODE2"
        }
    ]
}'
```
</TabItem>
</Tabs>

## 成功响应
```text
关系更新成功
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

当 `oldSourceValue`（旧源维度值）或 `oldPurposeValue`（旧目标维度值）参数不存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "旧档案关系不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```


