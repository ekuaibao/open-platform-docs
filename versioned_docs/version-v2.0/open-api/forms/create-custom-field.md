# 创建自定义字段(全局字段)

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/property/addPropertySet"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

#### Body Parameters:

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**properties**                   | Array   | 字段信息      | 必填  | - | 字段信息 | 
|**&emsp; ∟ label**             | String  | 字段名称      | 必填  | - | 字段名称 | 
|**&emsp; ∟ canAsDimension**    | Boolean | 是否自定义档案 | 非必填 | false | 是否自定义档案 | 
|**&emsp; ∟ dataType**          | Object  | 数据类型      | 必填  | - | 数据类型 | 
|**&emsp;&emsp; ∟ type**     | String  | 字段类别      | 必填  | - | 可参考"示例" | 
|**&emsp;&emsp; ∟ entity**   | String  | 引用对象      | 非必填 | - | `type` = `ref` 时必填，可参考"CURL示例" | 
|**&emsp;&emsp; ∟ elemType** | Object  | 附件信息      | 非必填 | - | `type` = `list` 时必填，可参考"CURL示例" | 
|**&emsp;&emsp; ∟ unit**     | String  | 单位         | 非必填 | - | `type` = `number` 时选填，可参考"CURL示例"<br/>如：`kg`、`cm` 等 | 
|**&emsp;&emsp; ∟ scale**    | Number  | 小数位数      | 非必填 | - | `type` = `number` 时必填，可参考"CURL示例" | 

:::tip
- 数据类型有多种情况，注意甄别，可参考"CURL示例"。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/property/addPropertySet?accessToken=f8QbuH2hwQ5E00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "properties":[
        {
            "label":"自定义扩展测试",
            "canAsDimension":false,
            "dataType":{
                "type":"ref",
                "entity":"datalink.DataLinkEntity.99280b7abde4c9c19800" //自定义扩展
            }
        },
        {
            "label":"档案项目",
            "canAsDimension":true,
            "dataType":{
                "type":"ref",
                "entity":"basedata.Dimension.项目" //自定义档案
            }
        },
        {
            "label":"文本1",
            "canAsDimension":false,
            "dataType":{
                "type":"text"  //文本
            }
        },
        {
            "label":"数字1",
            "canAsDimension":false,
            "dataType":{
                "type":"number",//数字
                "unit":"kg",    //单位
                "scale": 3      //小数位数
            }
        },
        {
            "label":"金额1",
            "canAsDimension":false,
            "dataType":{
                "type":"money" //金额
            }
        },
        {
            "label":"日期1",
            "canAsDimension":false,
            "dataType":{
                "type":"date" //日期
            }
        },
        {
            "label":"日期范围1",
            "canAsDimension":false,
            "dataType":{
                "type":"dateRange" //日期范围
            }
        },
        {
            "label":"开关1",
            "canAsDimension":false,
            "dataType":{
                "type":"boolean" //开关
            }
        },
        {
            "label":"附件1",
            "canAsDimension":false,
            "dataType":{
                "type":"list",
                "elemType":{
                    "type":"attachment" //附件
                }
            }
        },
        {
            "label":"部门1",
            "canAsDimension":true,
            "dataType":{
                "type":"ref",
                "entity":"organization.Department" //部门
            }
        },
        {
            "label":"员工1",
            "canAsDimension":true,
            "dataType":{
                "type":"ref",
                "entity":"organization.Staff" //员工
            }
        },
        {
            "label":"城市1",
            "canAsDimension":false,
            "dataType":{
                "type":"ref",
                "entity":"basedata.city" //城市
            }
        },
        {
            "label":"枚举1",
            "canAsDimension":false,
            "dataType":{
                "type":"ref",
                "entity":"basedata.Enum.CabinType" //枚举
            }
        }
    ]
}'
```

## 成功响应
:::caution
- 响应需要判断状态码来确定是否成功。
:::

```text
code 204
```

## 失败响应
`type` 参数值所对应的其他必填参数未填写或填写错误时，返回如下响应数据：
```json
{
    "errorCode": 400,
    "errorMessage": "[ref]为不支持的数据类型",
    "errorDetails": null,
    "code": null,
    "data": null
}
```