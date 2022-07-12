# 更新某档案关系下的档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/recordLink/edit/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.4.0**](/docs/open-api/notice/update-log#140) &emsp; -> 🐞 更新了校验逻辑，档案关系类型共六种，全都做参数校验，若传入已删除参数则报错<br/>
  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ● **未激活/已移除** 员工，不能进行任何档案关系数据操作。<br/>
  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; ● body参数里传多个值时，校验参数任意一个不存在则报错。<br/>
  &emsp; &emsp; &emsp; -> 🐞 无效果的更新返回信息提示。<br/>
  [**1.3.0**](/docs/open-api/notice/update-log#130) &emsp; -> 🚀 接口升级 `v2.1` 版本，新增 `type` 类型参数，支持 `id` 或 `code` 传参。<br/>
  &emsp; &emsp; &emsp; -> 🐞 `editFlag`（更新标志）默认值从 `cover` 改为 `increment`。<br/>
  [**0.7.126**](/docs/open-api/notice/update-log#07126) -> 🆕 新增了支持 **全量/增量** 更新档案关系数据。<br/>

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

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **type**                    | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |
| **editFlag**                | String | 更新标志   | 非必填 | increment | `increment`：增量新增 &emsp; `cover`：全量覆盖 |
| **editRecordLinks**         | Array  | 批量更新项 | 必填   | - | 批量更新项 |
| **&emsp; ∟ sourceValues**  | Array  | 源维度值   | 必填   | - | 源维度值 |
| **&emsp; ∟ purposeValues** | Array  | 目标维度值  | 必填   | - | 目标维度值 |

:::tip
- **增量新增**：在原数据中增量处理，原数据不变。
- **全量覆盖**：接口参数会覆盖原数据。 
:::

## CURL
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/edit/$ID_3BFuV7KbVDw?accessToken=ID_3BJKZuv8iow:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type":"id",               //参数类型，id时可不传
    "editFlag": "increment",   //increment：增量新增； cover：全量覆盖
    "editRecordLinks": [
        {
            "sourceValues": [   //以“员工和项目”档案关系为例，员工ID
                "bwa3wajigF0WH0:qKZ3wlg6bv9OGg","bwa3wajigF0WH0:IqQ3wlg6bv9QGg"
            ],
            "purposeValues": [  //项目ID
                "ID_3zYtLIa21gM","ID_3zYtLIa22gM"
            ]
        },
        {
            "sourceValues": [
                "bwa3wajigF0WH0:aRx3BagJH20mdg"
            ],
            "purposeValues": [
                "ID_3B9HDc30MOM","ID_3zYtLIa22gM"
            ]
        }
    ]
}'
```
</TabItem>
<TabItem value="code" label="code">

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/edit/$ID_3BFuV7KbVDw?accessToken=ID_3BJKZuv8iow:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "type":"code",             //参数类型，id时可不传
    "editFlag": "cover",       //increment：增量新增； cover：全量覆盖
    "editRecordLinks": [
        {
            "sourceValues": [   //以“员工和项目”档案关系为例，员工工号（CODE）
                "1003","9458"
            ],
            "purposeValues": [  //项目CODE
                "CODE1","CODE2"
            ]
        },
        {
            "sourceValues": [
                "1001"
            ],
            "purposeValues": [
                "CODE3"
            ]
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

当传入的档案关系已存在时（例如，同一组参数重复调用），报错如下：
:::caution
- **增量新增**：同一组参数重复调用会报错。
- **全量覆盖**：同一组参数重复调用一直都会成功。
:::

```text
传入的参数不需要更新档案关系  
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

当 `sourceValues`（源维度值）或 `purposeValues`（目标维度值）值停用时报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "[code]为[CODE3]的数据已停用或删除",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

员工档案关系，当操作的员工 **未激活/已移除** 时报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "[code]为[20220408]的员工未激活",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

