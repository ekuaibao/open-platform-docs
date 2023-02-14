# 新增员工/部门扩展字段

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/property/addPropertySet"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**useField**                | String   | 字段所属类型   | 必填  | - | `STAFF`：员工<br/>`DEPARTMENT`：部门 | 
|**properties**              | Array   | 字段信息       | 必填  | - | 字段信息 | 
|**&emsp; ∟ cnLabel**        | String  | 字段显示名称   | 必填  | - | 字段显示名称 | 
|**&emsp; ∟ enLabel**        | String  | 字段英文名称   | 非必填 | - | 字段英文名称 | 
|**&emsp; ∟ canAsDimension** | Boolean | 是否自定义档案 | 非必填 | - | 是否自定义档案 | 
|**&emsp; ∟ dataType**       | Object  | 数据类型      | 必填  | - | 数据类型 | 
|**&emsp;&emsp; ∟ type**     | String  | 字段类别      | 必填  | - | 所支持类别：<br/>`text`：文本 &emsp;&emsp; `number`：数字 &emsp;&emsp; `money`：金额<br/>`date`：日期 &emsp;&emsp; `ref`：引用类型 | 
|**&emsp;&emsp; ∟ entity**   | String  | 引用对象      | 非必填 | - | `type` = `ref` 时必填，可参考"CURL示例"<br/> 格式为：**basedata.Dimension.+档案类别名称** |
|**&emsp;&emsp; ∟ unit**     | String  | 单位         | 非必填 | - | `type` = `number` 时选填，可参考"CURL示例"<br/>如：`kg`、`cm` 等 | 
|**&emsp;&emsp; ∟ scale**    | Number  | 小数位数      | 非必填 | - | `type` = `number` 时必填，可参考"CURL示例" | 

:::tip
- 数据类型有多种情况，可参考"CURL示例"。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/property/addPropertySet?accessToken=ID01n2I9j5xWjR:PCx3rwm3aA00qM' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "useField": "STAFF",          //字段所属类型
    "properties":[
        {
            "cnLabel":"档案项目测试01",                 //字段显示名称
            "enLabel": "dims01",                      //字段英文名称
            "canAsDimension":true,                    //是否自定义档案
            "dataType":{                              //数据类型
                "type":"ref",                         //字段类别
                "entity":"basedata.Dimension.法人实体" //自定义档案 
            }
        },
        {
            "cnLabel":"文本01",
            "enLabel": "text01",
            "canAsDimension":false,
            "dataType":{
                "type":"text"  //文本
            }
        },
        {
            "cnLabel":"数字01",
            "enLabel": "number01",
            "canAsDimension":false,
            "dataType":{
                "type":"number",//数字
                "unit":"kg",    //单位
                "scale": 2    //小数位数
            }
        },
        {
            "cnLabel":"金额01",
            "enLabel": "money01",
            "canAsDimension":false,
            "dataType":{
                "type":"money" //金额
            }
        },
        {
            "cnLabel":"日期01",
            "enLabel": "date_01",
            "canAsDimension":false,
            "dataType":{
                "type":"date" //日期
            }
        }
    ]
}'
```

## 成功响应
```json
{
    "items": [
      "档案项目测试01",
      "文本01",
      "数字01",
      "金额01",
      "日期01"
    ]
}
```
## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 名称为［文本03］的字段已存在 | 请确认［文本03］的字段是否已存在 | 
| **400** | - | [number1]为不支持的数据类型    | 请确认 `type`（字段类别）参数是否在所支持类别中<br/>或所对应的其他必填参数是否填写或填写错误 | 

