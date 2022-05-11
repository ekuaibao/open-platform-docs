# 批量新增自定义档案项

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1.1/dimensions/items/batch"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.5.0  </b></a>&nbsp;&nbsp;&nbsp; -> 🆕 新增 <b>type</b> 类型参数，支持 <b>id</b> 或 <b>code</b> 传参。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.1.0  </b></a>&nbsp;&nbsp;&nbsp; -> 🚀 接口升级 <b>v1.1</b> 版本，新增了当 <b>fullVisible</b> = <b>false</b> 时，对 <b>staffs</b>、<b>roles</b>、<b>departments</b> 三个参数的必填及有效性校验。<br/>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>0.7.125</b></a> -> 🆕 新增了本接口。<br/>
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |


## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **dimensionId**                 | String  | 档案类别ID或CODE | 必填  | - | 可通过 [获取档案类别](/docs/open-api/dimensions/get-dimensions) 来获取，**与 `type` 参数保持一致**。 |
| **itemListRequest**             | Array   | 档案项集合   | 必填  | - | 新增的档案项集合 |
| **&emsp; ∟ name**              | String  | 档案值名称	| 必填  | - | 档案值名称，最大不能超过300个字 |
| **&emsp; ∟ code**              | String  | 档案值编码	| 必填  | - | 档案值编码 |
| **&emsp; ∟ visibility**        | Object  | 可见范围	| 非必填 | - | 可见范围 |
| **&emsp;&emsp; ∟ fullVisible** | Boolean | 是否全部可见 | 非必填 | true | `true` : 全部可见 <br/>`false` : 非全部可见，此时**三个白名单至少必填一项。**<br/>在非全部可见的情况下，仅白名单内的员工可见。 |
| **&emsp;&emsp; ∟ staffs**      | Array   | 员工白名单	| 非必填 | - | 值为 [员工ID](/docs/open-api/corporation/get-all-staffs) 或 CODE，**与 `type` 参数保持一致**。  |
| **&emsp;&emsp; ∟ roles**       | Array   | 角色白名单   | 非必填 | - | 值为 [角色ID](/docs/open-api/corporation/get-roles-group) 或 [CODE](/docs/open-api/corporation/question-answer#问题三)，**与 `type` 参数保持一致**。 |
| **&emsp;&emsp; ∟ departments** | Array   | 部门白名单   | 非必填 | - | 值为 [部门ID](/docs/open-api/corporation/get-departments) 或 CODE，**与 `type` 参数保持一致**。 |
| **&emsp; ∟ parentId**          | String  | 父节点ID或CODE | 必填 | - | 可通过 [获取档案值](/docs/open-api/dimensions/get-dimension-items) 来获取。根节点请填写 `""`。<br/>**与 `type` 参数保持一致**。 |

:::tip
- 系统预置档案有一些额外字段，详细字段传参见CURL里面的注释。
:::

## CURL
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/batch?accessToken=ID_3FGF$rF1IR0:bwa3wajigF0WH0&type=id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dimensionId":"bwa3wajigF0WH0:项目",                      //档案类别ID
    "itemListRequest":[
        {
            "name":"项目测试1",                               //档案项名称
            "code":"XMCS001",                                 //档案项编码
            "visibility":{                                    //可见范围
                "fullVisible":false,                          //是否全部可见
                "staffs": ["bwa3wajigF0WH0:ID_3lokDfb1p5w"],      //员工ID
                "roles": ["ID_3BJKZuv0Dow"],                      //角色ID
                "departments": ["bwa3wajigF0WH0:ID_3E8KASS74ag"]  //部门ID
            },
            "parentId":"",                                        //父节点ID
            //-----------------------------------------
            //系统预置档案额外参数如下，不用时不传即可：     
            "form":{
                //“项目”档案额外参数
                "projectBase": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //项目所在地
                "projectInspector": "bwa3wajigF0WH0:ID_3lokDfb1p5w",            //项目总监，值为员工ID或CODE，与 “type” 参数保持一致
                "projectManager": "bwa3wajigF0WH0:ID_3lokDfb1p5w",              //项目经理，值为员工ID或CODE，与 “type” 参数保持一致
                "projectType": "ID_3FB3TN25jU0",                                //项目类型，值为【项目类型预置】档案实例ID或CODE，与 “type” 参数保持一致
                //-----------------------------------------
                //”职级预置“档案额外参数
                "rankType":"ID_3D0v9XB1jpw",                                    //职级类型，值为【职级类型预置】档案实例ID或CODE，与 “type” 参数保持一致
                //-----------------------------------------
                //”岗位预置“档案额外参数
                "postType":"ID_3FB3TN25nU0",                                    //岗位类型，值为【岗位类型预置】档案实例ID或CODE，与 “type” 参数保持一致
                //-----------------------------------------
                //”法人实体“档案额外参数
                "taxpayerType":"GeneralTaxpayer"                                //纳税人类型，GeneralTaxpayer:一般纳税人；SmallScaleTaxpayer：小规模纳税人
             },
            //”法人实体“档案额外参数
            "payAccountIds":["bwa3wajigF0WH0:BANK"],          //可用支付账户
            //”法人实体“，“成本中心预置”档案额外参数
            "departments":["bwa3wajigF0WH0:ID_3E8KASS74ag"]   //所属部门ID或CODE，与 “type” 参数保持一致
        },
        {
            "name":"项目测试2",                               //档案项名称
            "code":"XMCS002",                                 //档案项编码
            "visibility":{                                    //可见范围
                "fullVisible":false,                          //是否全部可见
                "staffs": ["bwa3wajigF0WH0:ID_3lokDfb1p5w"],      //员工ID
                "roles": ["ID_3BJKZuv0Dow"],                      //角色ID
                "departments": ["bwa3wajigF0WH0:ID_3E8KASS74ag"]  //部门ID
            },
            "parentId":"ID_3yrzERx0Qf0"                           //父节点ID
        }
    ]
}'
```
</TabItem>
<TabItem value="code" label="code">

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/batch?accessToken=ID_3FGF$rF1IR0:bwa3wajigF0WH0&type=code' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dimensionId":"DA001",                                    //档案类别CODE
    "itemListRequest":[
        {
            "name":"项目测试1",                               //档案项名称
            "code":"XMCS001",                                 //档案项编码
            "visibility":{                                    //可见范围
                "fullVisible":false,                          //是否全部可见
                "staffs": ["1001"],                               //员工CODE（工号）
                "roles": ["CODE2"],                               //角色CODE
                "departments": ["BM001"]                          //部门CODE
            },
            "parentId":"",                                        //父节点CODE
            //-----------------------------------------
            //系统预置档案额外参数如下，不用时不传即可：     
            "form":{
                //“项目”档案额外参数
                "projectBase": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",  //项目所在地
                "projectInspector": "9458",                                     //项目总监，值为员工ID或CODE，与 “type” 参数保持一致
                "projectManager": "9458",                                       //项目经理，值为员工ID或CODE，与 “type” 参数保持一致
                "projectType": "CODE1",                                         //项目类型，值为【项目类型预置】档案实例ID或CODE，与 “type” 参数保持一致
                //-----------------------------------------
                //”职级预置“档案额外参数
                "rankType":"CODE1",                                             //职级类型，值为【职级类型预置】档案实例ID或CODE，与 “type” 参数保持一致
                //-----------------------------------------
                //”岗位预置“档案额外参数
                "postType":"CODE1",                                             //岗位类型，值为【岗位类型预置】档案实例ID或CODE，与 “type” 参数保持一致
                //-----------------------------------------
                //”法人实体“档案额外参数
                "taxpayerType":"GeneralTaxpayer"                                //纳税人类型，GeneralTaxpayer:一般纳税人；SmallScaleTaxpayer：小规模纳税人
             },
            //”法人实体“档案额外参数
            "payAccountIds":["bwa3wajigF0WH0:BANK"],          //可用支付账户
            //”法人实体“，“成本中心预置”档案额外参数
            "departments":["BM001"]                           //所属部门ID或CODE，与 “type” 参数保持一致
        },
        {
            "name":"项目测试2",                               //档案项名称
            "code":"XMCS002",                                 //档案项编码
            "visibility":{                                    //可见范围
                "fullVisible":false,                          //是否全部可见
                "staffs": ["1001"],                           //员工CODE（工号）
                "roles": ["CODE2"],                           //角色CODE
                "departments": ["BM001"]                      //部门CODE
            },
            "parentId":"CODE12"                               //父节点CODE
        }
    ]
}'
```
</TabItem>
</Tabs>

## 成功响应
```json
{
    "items": [
        {
            "id": "ID_3FGF$rF2wR0",
            "dimensionId": "bwa3wajigF0WH0:项目",
            "code": "XMCS001",
            "name": "项目测试1",
            "visibility": {
                "fullVisible": false,
                "staffs": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ],
                "roles": [
                    "ID_3BJKZuv0Dow"
                ],
                "departments": [
                    "bwa3wajigF0WH0:ID_3E8KASS74ag"
                ],
                "departmentsIncludeChildren": true
            },
            "parentId": "",
            "form": {
                "projectBase": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]",
                "projectInspector": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
                "projectManager": "bwa3wajigF0WH0:ID_3lokDfb1p5w",
                "projectType": "ID_3FB3TN25jU0"
            },
            "payAccountIds": null,
            "departments": null
        },
        {
            "id": "ID_3FGF$rF2xR0",
            "dimensionId": "bwa3wajigF0WH0:项目",
            "code": "XMCS002",
            "name": "项目测试2",
            "visibility": {
                "fullVisible": false,
                "staffs": [
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w"
                ],
                "roles": [
                    "ID_3BJKZuv0Dow"
                ],
                "departments": [
                    "bwa3wajigF0WH0:ID_3E8KASS74ag"
                ],
                "departmentsIncludeChildren": true
            },
            "parentId": "ID_3yrzERx0Qf0",
            "form": null,
            "payAccountIds": null,
            "departments": null
        }
    ]
}
```

## 失败响应
:::caution
- 本接口是从数组第一个参数开始校验，参数有问题就报错打断，直到全部通过校验才调用成功。 
:::

**父节点ID** 不存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "上级档案[ID_3yrzERx0Qf01]不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

**父节点CODE** 不存在时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "根据code: [[CODE22]]不能找到唯一的档案项",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

**档案项CODE** 重复时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "该档案项编码[XMCS001]导入重复",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

**员工CODE** 重复或者不存在时，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "根据code: [[100]]不能找到唯一的员工",
    "errorDetails": null,
    "code": null,
    "data": null
}
```


