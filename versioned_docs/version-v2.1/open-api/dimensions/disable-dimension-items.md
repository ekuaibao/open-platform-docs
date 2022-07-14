# 停用自定义档案项

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1.1/dimensions/items/$`id`/disable"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.7.2**](/docs/open-api/notice/update-log#172) -> 🚀 接口升级 `v1.1` 版本，新增 `type` 类型参数，支持 `id` 或 `code` 传参。<br/>

  </div>
</details>

:::caution
- 所有子级档案项也会被一并停用。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String  | 档案项ID或CODE | 必填| - | 通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 获取，**与 `type` 参数保持一致** |

#### Query Parameters:

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token   | 必填   | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **type**        | String | 参数类型     | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值 |
| **dimensionId** | String | 档案类别CODE | 非必填 | - | **`type` = `code` 时必填，否则不传**<br/>此参数可避免系统内重复的档案项 `CODE` 报错<br/>通过 [获取自定义档案类别](/docs/open-api/dimensions/get-dimensions) 获取 |

## CURL
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```shell
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/$ID_3FB3TN259U0/disable?accessToken=ID_3K5pCMV0QHv:bwa3wajigF0WH0&type=id'
```
</TabItem>
<TabItem value="code" label="code">

```shell
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/$XM001/disable?accessToken=ID_3K5pCMV0QHv:bwa3wajigF0WH0&type=code&dimensionId=DA001'
```
</TabItem>
</Tabs>

## 成功响应
:::caution
- 响应需要判断 **HTTP状态码** 来确定是否成功，响应成功时无内容返回。
:::

```text
code 204 
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 类型为code时dimensionId是必填参数，请检查 | `type` = `code` 时，`dimensionId` 必填 | 
| **400** | - | 根据code: [CODE2]不能找到唯一的档案项     | `type` = `code` 时，确认 `id`（档案项CODE）是否正确或存在 | 
| **400** | - | 根据code: [DA0011]不能找到唯一档案       | `type` = `code` 时，确认 `dimensionId`（档案类别CODE）是否正确或存在 | 
| **412** | - | 档案项不存在                           | `type` = `id` 时，确认 `id`（档案项ID）是否正确或存在 | 

















