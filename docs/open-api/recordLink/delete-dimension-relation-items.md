# 删除某档案关系下的档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/recordLink/del/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.3.0  </b></a>&nbsp;&nbsp;&nbsp; -> 🚀 接口升级 <b>v2.1</b> 版本，新增 <b>type</b> 类型参数，支持 <b>id</b> 或 <b>code</b> 传参。<br/>
                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> 🐞 档案关系类型共六种，全都做参数校验，若传入已删除参数则报错<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● <b>未激活/已移除</b> 员工，不能进行任何档案关系数据操作。<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;● body参数里传多个值时，校验参数任意一个不存在则报错。<br/>
                                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> 🐞 无效果的删除返回信息提示。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>0.7.132</b></a> -> 🆕 新增了支持两种维度取交集删除。<br/>
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
    "sourceValues": [  //以“员工和项目”档案关系为例，员工ID
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
    "sourceValues": [  //以“员工和项目”档案关系为例，员工工号（CODE）
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

当传入的档案关系已删除时（例如，同一组参数重复调用），报错如下：
```text
传入的档案关系参数不存在，无法删除
```

当 `sourceValues`（源维度值）或 `purposeValues`（目标维度值）不存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "维度值[sss]对应的数据不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```







