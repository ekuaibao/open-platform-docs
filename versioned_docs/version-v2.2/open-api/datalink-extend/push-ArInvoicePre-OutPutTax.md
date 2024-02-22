# 上传待开具发票-销项开票

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/invoice/OutPutTax/pushArInvoicePre"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.23.0**](/updateLog/update-log#1230)
  - 🆕 新增了本接口。

</div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

##  Body Parameters

| 名称 | 类型 | 描述 | 是否必填  | 默认值  | 备注                                                                                                                         |
| :--- | :--- | :--- |:------|:-----|:---------------------------------------------------------------------------------------------------------------------------|
| **--**                                     | Array      | 外层数组        | 必填    | -    | 外层数组                                                                                                                       |     
|**&emsp; ∟ appid**                         | String     | 税神通appid     | 必填    | -    | 税神通appid                                                                                                                   |
|**&emsp; ∟ arInvoiceDetails**              | Array      | 商品明细集合     | 必填    | -    | 商品明细集合                                                                                                                     | 
|**&emsp; &emsp; ∟ billNumber**             | String     | 订单号、单据编号  | 必填    | -    | 订单号、单据编号                                                                                                                   |
|**&emsp; &emsp; ∟ detailRowNo**            | BigDecimal | 行序号          | 非必填   | -    | 行序号                                                                                                                        |
|**&emsp; &emsp; ∟ goodsCost**              | BigDecimal | 不含税金额      | 非必填   | -    | 不含税金额，**含税金额和不含税金额不能同时为`0`**                                                                                               |
|**&emsp; &emsp; ∟ goodsName**              | String     | 商品名称        | 必填    | -    | 商品名称                                                                                                                       |
|**&emsp; &emsp; ∟ goodsNum**               | BigDecimal | 商品数量        | 非必填   | -    | 商品数量                                                                                                                       |
|**&emsp; &emsp; ∟ goodsPrice**             | BigDecimal | 不含税单价      | 非必填   | -    | 不含税单价                                                                                                                      |
|**&emsp; &emsp; ∟ goodsPriceWithTax**      | BigDecimal | 含税单价        | 非必填   | -    | 含税单价                                                                                                                       |
|**&emsp; &emsp; ∟ goodsSpecification**     | String     | 规格型号        | 非必填   | -    | 规格型号                                                                                                                       |
|**&emsp; &emsp; ∟ goodsSum**               | BigDecimal | 含税金额        | 非必填   | -    | 含税金额，**含税金额和不含税金额不能同时为`0`**                                                                                                |
|**&emsp; &emsp; ∟ goodsUnit**              | String     | 单位           | 非必填   | -    | 单位                                                                                                                         |
|**&emsp; &emsp; ∟ goodsVat**               | BigDecimal | 税额           | 必填    | -    | 税额                                                                                                                         |
|**&emsp; &emsp; ∟ invRowType**             | BigDecimal | 发票行性质      | 非必填   | -    | `0` : 正常行&emsp;&emsp;`1` : 折扣行&emsp;&emsp;`2` : 被折扣行                                                                       |
|**&emsp; &emsp; ∟ preferPolicyName**       | String     | 优惠政策名称     | 非必填   | -    | 优惠政策名称                                                                                                                     |
|**&emsp; &emsp; ∟ preferPolicySign**       | String     | 优惠政策标识     | 非必填   | -    | 优惠政策标识                                                                                                                     |
|**&emsp; &emsp; ∟ taxTaxonomyCode**        | String     | 税收分类编码     | 非必填   | -    | 税收分类编码                                                                                                                     |
|**&emsp; &emsp; ∟ taxrate**                | BigDecimal | 税率           | 非必填   | `0`  | 税率                                                                                                                         |
|**&emsp; &emsp; ∟ zeroTaxSign**            | String     | 零税率标识      | 非必填   | -    | 零税率标识                                                                                                                      |
|**&emsp; ∟ billNumber**                    | String     | 订单号、单据编号 | 必填    | -    | 订单号、单据编号                                                                                                                   |
|**&emsp; ∟ buyerAddrtel**                  | String     | 购方地址电话     | 非必填   | -    | 购方地址电话                                                                                                                     |
|**&emsp; ∟ buyerBankno**                   | String     | 购方银行账号     | 非必填   | -    | 购方银行账号                                                                                                                     |
|**&emsp; ∟ buyerEmail**                    | String     | 购买方邮箱      | 非必填   | -    | 购买方邮箱                                                                                                                      |
|**&emsp; ∟ buyerName**                     | String     | 购方名称        | 必填    | -    | 购方名称                                                                                                                       |
|**&emsp; ∟ buyerPhone**                    | String     | 购方手机号       | 非必填   | -    | 购方手机号                                                                                                                      |
|**&emsp; ∟ buyerTaxno**                    | String     | 购方税号        | 必填    | -    | 购方税号                                                                                                                       |
|**&emsp; ∟ invoiceRemark**                 | String     | 备注           | 非必填   | -    | 备注                                                                                                                         |
|**&emsp; ∟ invoiceSpecial**                | String     | 发票特殊票种     | 非必填   | -    | 发票特殊票种                                                                                                                     |
|**&emsp; ∟ invoiceType**                   | String     | 发票类型代码     | 必填    | -    | `004` : 增值税专用发票<br/>`007` : 增值税普通发票<br/>`026` : 增值税电子发票<br/>`028` : 增值税电子专用发票<br/>`81` : 数电票(增值税专用发票)<br/>`82` : 数电票(普通发票) |
|**&emsp; ∟ maker**                         | String     | 开票人          | 必填    | -    | 开票人                                                                                                                        |
|**&emsp; ∟ payee**                         | String     | 收款人          | 必填    | -    | 收款人                                                                                                                        |
|**&emsp; ∟ reviewer**                      | String     | 复核人          | 必填    | -    | 复核人                                                                                                                        |
|**&emsp; ∟ sellerName**                    | String     | 销方名称        | 必填    | -    | 销方名称                                                                                                                       |
|**&emsp; ∟ sellerTaxno**                   | String     | 销方税号        | 必填    | -    | 销方税号                                                                                                                       |
|**&emsp; ∟ taxNo**                         | String     | 税号           | 必填    | -    | 税号                                                                                                                         |
|**&emsp; ∟ taxdiscCode**                   | String     | 税盘类型        | 必填    | -    | `swkey` : 税务UKEY<br/>`skfwq` : 税控服务器<br/>`QD` : 全电<br/>`jsp` : 金税盘                                                         |
|**&emsp; ∟ xhdwdh**                        | String     | 销方电话        | 非必填   | -    | 销方电话                                                                                                                       |
|**&emsp; ∟ xhdwdz**                        | String     | 销方地址        | 非必填   | -    | 销方地址                                                                                                                       |
|**&emsp; ∟ xhdwyh**                        | String     | 销方银行        | 非必填   | -    | 销方银行                                                                                                                       |
|**&emsp; ∟ xhdwzh**                        | String     | 销方银行账号     | 非必填   | -    | 销方银行账号                                                                                                                     |



## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v2/invoice/OutPutTax/pushArInvoicePre?accessToken=ID01w4CBe9Vjpd%3AxgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data '[
    {
        "appId": "8709113f-4f1a-407f-94ea-ad1fcca40d52",
        "arInvoiceDetails": [
            {
                "billNumber": "123",
                "detailRowNo": 0,
                "goodsCost": 0,
                "goodsName": "1",
                "goodsNum": "",
                "goodsPrice": "1",
                "goodsPriceWithTax": "1",
                "goodsSpecification": "",
                "goodsSum": 100,
                "goodsUnit": "",
                "goodsVat": 1,
                "invRowType": 0,
                "preferPolicyName": "",
                "preferPolicySign": "",
                "taxTaxonomyCode": "",
                "zeroTaxSign": ""
            }
        ],
        "billNumber": "123",
        "buyerAddrtel": "",
        "buyerBankno": "",
        "buyerEmail": "",
        "buyerName": "rsq",
        "buyerPhone": "",
        "buyerTaxNo": "91330183MA2B279AXM",
        "invoiceRemark": "",
        "invoiceSpecial": "",
        "invoiceType": "007",
        "maker": "rsq",
        "payee": "rsq",
        "reviewer": "rsq",
        "sellerName": "北京合思rsq测试",
        "sellerTaxno": "91110108318283928K",
        "taxNo": "91110108318283928K",
        "taxdiscCode": "jsp",
        "xhdwdh": "",
        "xhdwdz": "",
        "xhdwyh": "",
        "xhdwzh": ""
    }
]'
```

## 成功响应
```json
{
    "value": {
        "code": 200,
        "success": true,
        "msg": "导入成功，共创建：1张待开发票"
    }
}
```

### 返回参数列表
| 字段名称                                           | 类型      | 备注   |
|:-----------------------------------------------|:--------|:-----|
| **value**                                      | Object  | 响应信息 |
| **&emsp; ∟ code**                              | Integer | 状态码  |
| **&emsp; ∟ success**                           | Boolean | 是否成功 |
| **&emsp; ∟ msg**                               | String  | 返回信息 |

[//]: # (## 失败响应)

[//]: # ()
[//]: # (| HTTP状态码 | 错误码 | 描述 | 排查建议 |)

[//]: # (| :--- | :--- | :--- | :--- |)



