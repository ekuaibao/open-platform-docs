# 更新自定义档案项

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1.1/dimensions/items/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.8.0**](/docs/open-api/notice/update-log#180) -> 🆕 新增了 `baseCurrencyId`（法人实体本位币）参数，使用此参数需要开通【**法人实体多币种**】功能，传参示例见CURL。<br/>
  [**1.5.0**](/docs/open-api/notice/update-log#150) -> 🚀 接口升级 `v1.1` 版本，新增 `type` 类型参数，支持 `id` 或 `code` 传参。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String  | 档案项ID或CODE | 必填| - | 通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 获取，**与 `type` 参数保持一致** |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **dimensionId**            | String  | 档案类别CODE | 非必填  | -     | **`type` = `code` 时必填，否则不传**<br/>此参数可避免系统内重复的档案项 `CODE` 报错<br/>通过 [获取自定义档案类别](/docs/open-api/dimensions/get-dimensions) 获取 |
| **name**                   | String  | 档案项名称	| 非必填  | -     | 档案项名称，最大不能超过300个字 |
| **code**                   | String  | 档案项编码	| 非必填  | -     | 档案项编码 |
| **visibility**             | Object  | 可见范围	    | 非必填  | -     | 可见范围  |
| **&emsp; ∟ fullVisible** | Boolean | 是否全部可见	| 非必填  | false | `true` : 全部可见 <br/>`false` : 非全部可见，以下**三个白名单至少必填一项**<br/>在非全部可见的情况下，仅白名单内的员工可见 |
| **&emsp; ∟ staffs**      | Array   | 员工白名单	| 非必填  | -     | **员工ID** 或 **CODE**，**与 `type` 参数保持一致**<br/>通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
| **&emsp; ∟ roles**       | Array   | 角色白名单	| 非必填  | -     | **角色ID** 或 [CODE](/docs/open-api/corporation/question-answer#问题三)，**与 `type` 参数保持一致**<br/>通过 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 获取 |
| **&emsp; ∟ departments** | Array   | 部门白名单	| 非必填  | -     | **部门ID** 或 **CODE**，**与 `type` 参数保持一致**<br/>通过 [获取部门列表](/docs/open-api/corporation/get-departments) 获取 |
| **parentId**             | String  | 父节点ID或CODE | 非必填  | -     | 根节点请填写 `""`，**与 `type` 参数保持一致**<br/>通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 获取 |

:::tip
- 系统预置档案有一些额外字段，详细字段传参见CURL里面的注释。
- **更新额外字段时，需要将对应档案的全部额外字段一起传入，否则未传的字段会被置空。**
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
        "baseCurrencyId":"156",                                        //法人实体本位币数字代码，取值见币种设置，只可传系统内配置好的本位币，无法修改已配置的本位币，需要开通【法人实体多币种】功能        
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
        "baseCurrencyId":"156",                                        //法人实体本位币数字代码，取值见币种设置，只可传系统内配置好的本位币，无法修改已配置的本位币，需要开通【法人实体多币种】功能        
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
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **204** | - | (响应需要判断 **HTTP状态码** 来确定是否成功，响应成功时无内容返回) | - |

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议                                               |
| :--- | :--- | :--- |:---------------------------------------------------|
| **400** | - | baseCurrencyId对应的本位币在企业不存在，请检查 | 请确认 `baseCurrencyId` 参数值对应的本位币在企业内是否配置             | 
| **400** | - | 类型为法人实体时，baseCurrencyId是必填参数，请检查 | 开通了【**法人实体多币种**】功能后，`baseCurrencyId` 是必填参数         | 
| **400** | - | 类型为code时dimensionId是必填参数，请检查 | `type` = `code` 时，`dimensionId`（档案类别CODE) 是必填参数    | 
| **400** | - | 根据code: [[CODE22]]不能找到唯一的档案项 | `type` = `code` 时，请确认 `parentId`（父节点CODE）是否正确      | 
| **403** | - | 法人实体的多币种不允许修改 | 法人实体的多币种一经配置不允许修改                                  | 
| **412** | - | 上级档案[ID_3yrzERx0Qf01]不存在        | `type` = `id` 时，请确认 `parentId`（父节点ID）是否正确          | 
| **412** | - | 根据code: [[100]]不能找到唯一的员工      | `type` = `code` 时，请确认 `staffs`（员工白名单）在系统中是否重复或者不存在 |
| **412** | - | 编码[CODE1]已经被占用      | 要修改的CODE已经存在启用的档案                                  |

