# 更新自定义档案项

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1.1/dimensions/items/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.5.0</b></a> -> 🚀 接口升级 <b>v1.1</b> 版本，新增 <b>type</b> 类型参数，支持 <b>id</b> 或 <b>code</b> 传参。<br/>
  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String  | 档案项ID或CODE | 必填| - | 可通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 获取，**与 `type` 参数保持一致**。 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **dimensionId**            | String  | 档案类别CODE | 非必填  | -     | **`type` = `code` 时必填，否则不传。**<br/>此参数可避免系统内重复的档案项 `CODE` 报错。<br/>可通过 [获取档案类别](/docs/open-api/dimensions/get-dimensions) 来获取。 |
| **name**                   | String  | 档案项名称	| 非必填  | -     | 档案项名称，最大不能超过300个字 |
| **code**                   | String  | 档案项编码	| 非必填  | -     | 档案项编码 |
| **visibility**             | Object  | 可见范围	    | 非必填  | -     | 可见范围  |
| **&emsp; ∟ fullVisible** | Boolean | 是否全部可见	| 非必填  | false | `true` : 全部可见 <br/>`false` : 非全部可见，此时**三个白名单至少必填一项。**<br/>在非全部可见的情况下，仅白名单内的员工可见。 |
| **&emsp; ∟ staffs**      | Array   | 员工白名单	| 非必填  | -     | 值为 [员工ID](/docs/open-api/corporation/get-all-staffs) 或 CODE，**与 `type` 参数保持一致**。 |
| **&emsp; ∟ roles**       | Array   | 角色白名单	| 非必填  | -     | 值为 [角色ID](/docs/open-api/corporation/get-roles-group) 或 [CODE](/docs/open-api/corporation/question-answer#问题三)，**与 `type` 参数保持一致**。 |
| **&emsp; ∟ departments** | Array   | 部门白名单	| 非必填  | -     | 值为 [部门ID](/docs/open-api/corporation/get-departments) 或 CODE，**与 `type` 参数保持一致**。 |
| **parentId**             | String  | 父节点ID或CODE | 非必填  | -     | 通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 来获取。根节点请填写 `""`。<br/>**与 `type` 参数保持一致**。 |

:::tip
- 系统预置档案有一些额外字段，详细字段传参见CURL里面的注释。
:::

## CURL
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/$XBUbxhnP5k8w00?accessToken=hQgbxfJnlElc00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    //"dimensionId":"JOYbpjPP-E2Q00:项目",                 //档案类别ID，type = id 时，此参数不传
    "name": "档案项名称",
    "code": "档案项编码",
    "visibility": {
        "fullVisible": false,                              //非全部可见
        "staffs": [ "JOYbpjPP-E2Q00:y8gbpjP9OsnI00" ],     //员工ID
        "roles": [],                                       //角色ID
        "departments": []                                  //部门ID
    },
    "parentId": "Ak0btTcoEkrA00",                          //父节点ID
    //-----------------------------------------
    //系统预置档案额外参数如下，不用时不传即可：        
    "form":{
        //“项目” 档案额外参数
        "projectBase": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]", //项目所在地
        "projectInspector": "uIk3sePdIJ00v0:1102",                     //项目总监，值为员工ID或CODE，与 “type” 参数保持一致
        "projectManager": "uIk3sePdIJ00v0:AvT3lntT8zzpWw",             //项目经理，值为员工ID或CODE，与 “type” 参数保持一致
        "projectType": "ID_3sjnVFu0ZOw",                               //项目类型，值为【项目类型预置】档案实例ID或CODE，与 “type” 参数保持一致
        //-----------------------------------------
        //“职级预置”档案额外参数
        "rankType":"ID_3sjnv7SJeIw",                                   //职级类型，值为【职级类型预置】档案实例ID或CODE，与 “type” 参数保持一致
        //-----------------------------------------
        //“岗位预置”档案额外参数
         "postType":"ID_3sjQzq30UL0",                                  //岗位类型，值为【岗位类型预置】档案实例ID或CODE，与 “type” 参数保持一致
        //-----------------------------------------
        //“法人实体”档案额外参数
        "taxpayerType":"GeneralTaxpayer"                               //纳税人类型，GeneralTaxpayer：一般纳税人；SmallScaleTaxpayer：小规模纳税人
        //-----------------------------------------
    },
    //“法人实体”档案额外参数
    "payAccountIds":["uIk3sePdIJ00v0:BANK"],                            //可用支付账户
    //“法人实体”，“成本中心预置”档案额外参数
    "departments":["uIk3sePdIJ00v0"]                                    //所属部门ID或CODE，与 “type” 参数保持一致
}'
```
</TabItem>
<TabItem value="code" label="code">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items/$CODE11?accessToken=hQgbxfJnlElc00&type=code' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "dimensionId":"DA001",                                 //档案类别CODE，type = code 时，此参数必填
    "name": "档案项名称",
    "code": "档案项编码",
    "visibility": {
        "fullVisible": false,                              //非全部可见
        "staffs": [ "1001" ],                              //员工CODE（工号）
        "roles": [ "CODE2" ],                              //角色CODE
        "departments": [ "BM001" ]                         //部门CODE
    },
    "parentId": "CODE1",                                   //父节点CODE
    //-----------------------------------------
    //系统预置档案额外参数如下，不用时不传即可：        
    "form":{
        //“项目” 档案额外参数
        "projectBase": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]", //项目所在地
        "projectInspector": "1001",                                    //项目总监，值为员工ID或CODE，与 “type” 参数保持一致
        "projectManager": "1001",                                      //项目经理，值为员工ID或CODE，与 “type” 参数保持一致
        "projectType": "CODE1",                                        //项目类型，值为【项目类型预置】档案实例ID或CODE，与 “type” 参数保持一致
        //-----------------------------------------
        //“职级预置”档案额外参数
        "rankType":"CODE1",                                            //职级类型，值为【职级类型预置】档案实例ID或CODE，与 “type” 参数保持一致
        //-----------------------------------------
        //“岗位预置”档案额外参数
         "postType":"CODE1",                                           //岗位类型，值为【岗位类型预置】档案实例ID或CODE，与 “type” 参数保持一致
        //-----------------------------------------
        //“法人实体”档案额外参数
        "taxpayerType":"GeneralTaxpayer"                               //纳税人类型，GeneralTaxpayer：一般纳税人；SmallScaleTaxpayer：小规模纳税人
        //-----------------------------------------
    },
    //“法人实体”档案额外参数
    "payAccountIds":["uIk3sePdIJ00v0:BANK"],                            //可用支付账户
    //“法人实体”，“成本中心预置”档案额外参数
    "departments":["BM001"]                                             //所属部门ID或CODE，与 “type” 参数保持一致
}'
```
</TabItem>
</Tabs>

## 成功响应
:::caution
- 响应需要判断HTTP状态码来确定是否成功，响应成功时无内容返回。
:::

```text
code 204
```

## 失败响应
**父节点ID** 不存在时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "编码为[档编码]的档案项找不到上级节点",
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

`type` = `code` 时，不传 `dimensionId`（档案类别CODE) 报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "类型为code时dimensionId是必填参数，请检查",
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