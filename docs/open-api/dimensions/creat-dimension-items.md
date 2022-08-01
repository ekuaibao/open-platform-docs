# 新增自定义档案项

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1.1/dimensions/items"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.9.0**](/docs/open-api/notice/update-log#190) -> 🆕 修复了不传 `visibility`（可见范围）非必填参数报错的BUG。<br/>
  [**1.7.2**](/docs/open-api/notice/update-log#172) -> 🆕 新增了 `baseCurrencyId`（法人实体本位币）参数，使用此参数需要开通【**法人实体多币种**】功能，传参示例见CURL。<br/>
  [**1.1.0**](/docs/open-api/notice/update-log#110) -> 🚀 接口升级 `v1.1` 版本，新增了当 `fullVisible` = `fals` 时，对 `staffs`、`roles`、`departments` 三个参数的必填及有效性校验。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**accessToken**| String  | 认证token	| 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**dimensionId**           | String   | 档案类别ID	| 必填  | - | 通过 [获取自定义档案类别](/docs/open-api/dimensions/get-dimensions) 获取 |
|**name**                  | String   | 档案值名称	| 必填  | - | 档案值名称，最大不能超过300个字 |
|**code**                  | String   | 档案值编码	| 必填  | - | 档案值编码 |
|**visibility**            | Object   | 可见范围      | 非必填 | - | 可见范围 |
|**&emsp; ∟ fullVisible** | Boolean  | 是否全部可见   | 非必填 | true | `true` : 全部可见 <br/>`false` : 非全部可见，以下**三个白名单至少必填一项**<br/>在非全部可见的情况下，仅白名单内的员工可见 |
|**&emsp; ∟ staffs**      | Array    | 员工白名单	| 非必填 | - | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
|**&emsp; ∟ roles**       | Array    | 角色白名单	| 非必填 | - | 通过 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 获取 |
|**&emsp; ∟ departments** | Array    | 部门白名单    | 非必填 | - | 通过 [获取部门列表](/docs/open-api/corporation/get-departments) 获取 |
|**parentId**              | String   | 档案值父级ID  | 必填   | - | 通过 [获取自定义档案项](/docs/open-api/dimensions/get-dimension-items) 获取。如果是根节点应填写 `""` |

:::tip
- 系统预置档案有一些额外字段，详细字段传参见CURL里面的注释。
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1.1/dimensions/items?accessToken=hQgbxfJnlElc00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "dimensionId": "Urf3lsFgBp00gw:项目",  //档案类别ID
    "name": "项目2-1",                     //档案值名称	
    "code": "XM2001",                     //档案值编码	
    "visibility": {
        "fullVisible": true,              //是否全部可见
        "staffs": [],
        "roles": [],
        "departments": []
    },
    "parentId": "Ak0btTcoEkrA00",         //档案值父级ID
    //-----------------------------------------
    //系统预置档案额外参数如下，不用时不传即可：        
    "form":{
        //“项目” 档案额外参数
        "projectBase": "[{\"key\":\"8\",\"label\":\"北京市/海淀区\"}]", //项目所在地
        "projectInspector": "uIk3sePdIJ00v0:1102",                     //项目总监，值为员工ID
        "projectManager": "uIk3sePdIJ00v0:AvT3lntT8zzpWw",             //项目经理，值为员工ID
        "projectType": "ID_3sjnVFu0ZOw",                               //项目类型，值为【项目类型预置】档案实例ID
        //-----------------------------------------
        //“职级预置”档案额外参数
        "rankType":"ID_3sjnv7SJeIw",                                   //职级类型，值为【职级类型预置】档案实例ID
        //-----------------------------------------
        //“岗位预置”档案额外参数
         "postType":"ID_3sjQzq30UL0",                                  //岗位类型，值为【岗位类型预置】档案实例ID
        //-----------------------------------------
        //“法人实体”档案额外参数
        "baseCurrencyId":"156",                                        //法人实体本位币数字代码，取值见币种设置，只可传系统内配置好的本位币，需要开通【法人实体多币种】功能
        "taxpayerType":"GeneralTaxpayer"                               //纳税人类型，GeneralTaxpayer：一般纳税人；SmallScaleTaxpayer：小规模纳税人
        //-----------------------------------------
    },
    //“法人实体”档案额外参数
    "payAccountIds":["uIk3sePdIJ00v0:BANK"],                            //可用支付账户
    //“法人实体”，“成本中心预置”档案额外参数
    "departments":["uIk3sePdIJ00v0"]                                    //所属部门
}'
```

## 成功响应
```json
{
    "id": "XBUbxhnP5k8w00" // 档案值ID
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 上级档案不存在                     | 确认档案项父级ID参数是否正确 | 
| **412** | - | 该档案项名称[项目2-1]导入重复        | 确认档案项是否重复导入 | 
| **412** | - | 编码[XM2003]已经被占用             | 确认档案项编码是否已存在 | 
| **412** | - | 当 `fullVisible` 为 `false` 时，请指定 `departments`、`roles` 或 `staffs` 的值 | 当 `fullVisible` 为 `false` 时，确认 `departments` 、`roles` 、`staffs` 参数是否都为空 | 
| **412** | - | 参数staffs的值不存在或已被禁用[xxxx] | 确认 `departments` 、`roles` 、`staffs` 参数是否正确或已禁用 | 










