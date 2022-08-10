# 获取企业下档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/recordLink/queryAllRecordLink"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.4.0**](/docs/open-api/notice/update-log#140) &emsp; -> 🆕 新增 `type` 类型参数，支持 `id` 或 `code` 传参。<br/>
  [**1.3.0**](/docs/open-api/notice/update-log#130) &emsp; -> 🚀 接口升级 `v2.1` 版本，优化了报错输出。<br/>
  [**0.7.164**](/docs/open-api/notice/update-log#07164) -> 🆕 新增了 `roleDefIds`（档案关系ID）、`orderBy`（结果排序字段）参数。<br/>
  [**0.7.127**](/docs/open-api/notice/update-log#07127) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 返回id值 &emsp; `code` : 返回code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **roleDefIds** | Array  | 档案关系ID  | 非必填  | - | 通过 [获取企业下档案关系列表](/docs/open-api/recordLink/get-dimension-relation) 获取<br/>通过传递此值，查询指定档案关系下全部数据 |
| **orderBy**    | String | 结果排序字段 | 非必填  | - | `updateTime` : 查询结果按更新时间倒序排列<br/>`createTime` : 查询结果按创建时间倒序排列 |
| **start**      | Int    | 查询开始值  | 非必填  | 0 | 从 `0` 开始 |
| **count**      | Int    | 查询记录数  | 必填    | - |  `0` < `count` ≤ `100` |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/queryAllRecordLink?accessToken=ID_3Dlosos3tGg:bwa3wajigF0WH0&type=id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "roleDefIds":["ID_3BFuV7KbVDw"],   //档案关系ID
    "orderBy":"updateTime",            //排序依据，更新时间倒序
    "start": 0,
    "count": 10
}'
```

## 成功响应
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
{
    "value": {
        "total": 5,                                        //总记录数
        "queryRecords": [                                 
            {
                "roleDefId": "ID_3BFuV7KbVDw",             //档案关系ID
                "sourceValue": "bwa3wajigF0WH0:20220408",  //源维度值ID
                "purposeValue": "ID_3zYtLIa21gM"           //目标维度值ID
            },
            {
                "roleDefId": "ID_3BFuV7KbVDw",
                "sourceValue": "bwa3wajigF0WH0:IqQ3wlg6bv9QGg",
                "purposeValue": "ID_3zYtLIa22gM"
            },
            {
                "roleDefId": "ID_3BFuV7KbVDw",
                "sourceValue": "bwa3wajigF0WH0:aRx3BagJH20mdg",
                "purposeValue": "ID_3zYtLIa21gM"
            },
            {
                "roleDefId": "ID_3BFuV7KbVDw",
                "sourceValue": "bwa3wajigF0WH0:aRx3BagJH20mdg",
                "purposeValue": "ID_3zYtLIa22gM"
            },
            {
                "roleDefId": "ID_3BFuV7KbVDw",
                "sourceValue": "bwa3wajigF0WH0:qKZ3wlg6bv9OGg",
                "purposeValue": "ID_3zYtLIa21gM"
            }
        ]
    }
}
```
</TabItem>
<TabItem value="code" label="code">

```json
{
    "value": {
        "total": 5,                                        //总记录数
        "queryRecords": [
            {
                "roleDefId": "ID_3BFuV7KbVDw",             //档案关系ID
                "sourceValue": "20220408",                 //源维度值CODE
                "purposeValue": "CODE1"                    //目标维度值CODE
            },
            {
                "roleDefId": "ID_3BFuV7KbVDw",
                "sourceValue": "1002",
                "purposeValue": "CODE2"
            },
            {
                "roleDefId": "ID_3BFuV7KbVDw",
                "sourceValue": "1003",
                "purposeValue": "CODE1"
            },
            {
                "roleDefId": "ID_3BFuV7KbVDw",
                "sourceValue": "1003",
                "purposeValue": "CODE2"
            },
            {
                "roleDefId": "ID_3BFuV7KbVDw",
                "sourceValue": "1001",
                "purposeValue": "CODE1"
            }
        ]
    }
}
```
</TabItem>
</Tabs>

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 超过最大查询数量100！ | `count` 不允许大于 `100` | 
| **412** | - | 档案关系不存在或已删除！ | 请确认档案关系ID是否已删除 | 
| **412** | - | 档案关系不存在 | 请确认档案关系ID下是否有数据或 `start` 参数 ≥ 总记录数 | 



