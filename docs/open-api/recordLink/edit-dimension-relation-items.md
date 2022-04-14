# 编辑某档案关系下的档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/recordLink/editSingle/$`id`"
/>

<details>
  <summary>v2.1版本特性</summary>
  <div>
    - 🆕 新增 “<b>type</b>” 类型参数，支持 ”<b>id</b>“ 或 ”<b>code</b>“ 传参。<br/>
    - 🐞 档案关系类型共六种，全都做参数校验，若传入已删除参数则报错。<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● <b>未激活/已移除</b> 员工，不能进行任何档案关系数据操作。<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● body参数里传多个值时，校验参数任意一个不存在则报错。<br/>
    - 🐞 无效果的编辑返回信息提示。
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
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |

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
            "oldSourceValue": "bwa3wajigF0WH0:qKZ3wlg6bv9OGg",  //以“员工和项目”档案关系为例，旧员工ID
            "oldPurposeValue": "ID_3zYtLIa21gM",                //旧项目ID 
            "newSourceValue": "bwa3wajigF0WH0:ID_3lokDfb1p5w",  //新员工ID
            "newPurposeValue": "ID_3B9HDc30MOM"                 //新项目ID
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
            "oldSourceValue": "1003",                           //以“员工和项目”档案关系为例，旧员工工号（CODE）
            "oldPurposeValue": "CODE1",                         //旧项目CODE
            "newSourceValue": "1001",                           //新员工工号（CODE）
            "newPurposeValue": "CODE2"                          //新项目CODE
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
档案关系已删除时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "档案关系ID:ID_3BfDMDHeZ20不存在或已删除！",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

档案关系不存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "无效的档案关系ID",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `oldSourceValue`（旧源维度值）和 `oldPurposeValue`（旧目标维度值）对应的旧档案关系不存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "旧档案关系不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `newSourceValue`（新源维度值）或 `newPurposeValue`（新目标维度值）对应的新档案关系已存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "新档案关系已经存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `oldSourceValue`（旧源维度值）或 `oldPurposeValue`（旧目标维度值），`newSourceValue`（新源维度值）或 `newPurposeValue`（新目标维度值）不存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "维度值[CODE12]对应的数据不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `newSourceValue`（新源维度值）或 `newPurposeValue`（新目标维度值）值停用时报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "[code]为[CODE3]的数据已停用或删除",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

员工档案关系，当操作的员工（`newSourceValue`（新源维度值）或 `newPurposeValue`（新目标维度值））**未激活/已移除** 时报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "[code]为[20220408]的员工未激活",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

