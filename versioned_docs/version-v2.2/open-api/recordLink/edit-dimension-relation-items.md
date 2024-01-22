# 编辑某档案关系下的档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/recordLink/editSingle/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.4.0**](/docs/open-api/notice/update-log#140) &emsp; -> 🐞 更新了校验逻辑，档案关系类型共六种，全都做参数校验，若传入已删除参数则报错<br/>
  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ● **未激活/已移除** 员工，不能进行任何档案关系数据操作。<br/>
  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ● body参数里传多个值时，校验参数任意一个不存在则报错。<br/>
  &emsp; &emsp; &emsp; -> 🐞 无效果的编辑返回信息提示。<br/>
  [**1.3.0**](/docs/open-api/notice/update-log#130) &emsp; -> 🆕 新增 `type` 类型参数，支持 `id` 或 `code` 传参。<br/>
  [**0.7.125**](/docs/open-api/notice/update-log#07125) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 档案关系ID | 必填 | - | 通过 [获取企业下档案关系列表](/docs/open-api/recordLink/get-dimension-relation) 获取 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **recordLinks**               | Array   | 批量更新项   | 必填 | - | 批量更新项 |
| **&emsp; ∟ oldSourceValue**  | String  | 旧源维度值   | 必填 | - | 通过 [获取某档案关系下的档案项数据](/docs/open-api/recordLink/get-dimension-relation-items) 获取 |
| **&emsp; ∟ oldPurposeValue** | String  | 旧目标维度值 | 必填 | - | 通过 [获取某档案关系下的档案项数据](/docs/open-api/recordLink/get-dimension-relation-items) 获取 |
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
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | 关系更新成功 | - |

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 档案关系ID:ID_3BfDMDHeZ20不存在或已删除！| 请确认 `id`（档案关系ID）是否已删除 | 
| **412** | - | 无效的档案关系ID | 请确认 `id`（档案关系ID）是否存在 | 
| **412** | - | 旧档案关系不存在 | 请确认 `oldSourceValue`（旧源维度值）和 `oldPurposeValue`（旧目标维度值）对应的旧档案关系是否存在 | 
| **412** | - | 新档案关系已经存在 | 请确认 `newSourceValue`（新源维度值）或 `newPurposeValue`（新目标维度值）对应的新档案关系是否已存在 | 
| **412** | - | 维度值[CODE12]对应的数据不存在 | 请确认 `oldSourceValue`（旧源维度值）或 `oldPurposeValue`（旧目标维度值），`newSourceValue`（新源维度值）或 `newPurposeValue`（新目标维度值）是否存在 | 
| **412** | - | [code]为[CODE3]的数据已停用或删除 | 请确认 `newSourceValue`（新源维度值）或 `newPurposeValue`（新目标维度值）是否停用 | 
| **412** | - | [code]为[20220408]的员工未激活 | 包含员工类型的档案关系，请确认传参的员工（`newSourceValue`（新源维度值）或 `newPurposeValue`（新目标维度值））是否激活或移除 |

