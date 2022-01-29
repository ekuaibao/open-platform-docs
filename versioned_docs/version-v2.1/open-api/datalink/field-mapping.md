# 配置业务对象赋值规则

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/fieldMapping/dataLink"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth)  |


## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name**                  | String | 赋值规则名称  | 必填 | -  | 赋值规则名称 |
| **remark**                | String | 备注        | 非必填 | - | 备注 |
| **sourceEntityId**        | String | 业务对象ID   | 必填 | -  | [业务对象ID](/docs/open-api/datalink/get-entity-list) |
| **fields**                | Object | 赋值字段     | 必填 | -  | 赋值字段  |
| **&emsp; ∟ sourceField** | Object | 赋值源字段    | 必填 | -  | 为业务对象的字段 `name` 值，[获取方式](/docs/open-api/datalink/get-entity-list)  |
| **&emsp; ∟ targetField** | Object | 赋值目标字段  | 必填 | -  | 请查看[问题五](/docs/open-api/datalink/question-answer#问题五)，了解如何获取目标字段 |

:::tip
赋值源字段为该业务对象实体字段，该字段以 `name` 值为唯一标识，所以配置默认赋值规则时也以此作为 `sourceField` 参数。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/fieldMapping/dataLink?accessToken=cxEbrzNJSA3A00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "赋值规则1",
    "remark": "这里是赋值规则备注",
    "sourceEntityId":"ea9d0b6e522a25878000",
    "fields":[
        {
            "sourceField":"E_ea9d0b6e522a25878000_name",
            "targetField":"title"
        }
    ]
}'
```

## 成功响应
```json
{
    "value": {
        "success": true,           //设置成功
        "id": "6CobsxKBzk8g00",    //赋值规则ID
        "errorMessage": null
    }
}
```

## 失败响应
注意规则设置中的源字段或目标字段的真实性，否则会返回如下报错信息：
```json
{
    "value": {
        "success": false,                                                  //设置失败
        "id": "",
        "errorMessage": "无效的赋值规则目标字段:E_ea9d0b6e522a25878000_name" //失败信息
    }
}
```

