# 获取已开具发票-销项开票

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/invoice/OutPutTax/getArInvoice"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.23.0**](/updateLog/update-log#1230) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

##  Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注                      |
| :--- | :--- | :--- | :--- |:--- |:------------------------| 
|**current**       | Integer    | 分页查询的当前页            | 必填  | `1` | 当前页，默认从 `1` 开始          |
|**size**          | Integer    | 每页查询数量                | 必填  | - | 最多不能超过 `100`            |
|**sellerTaxNo**   | String     | 销方税号                   | 必填  | - | 销方税号                    |
|**buyerName**     | String     | 购买方名称                 | 非必填 | - | 支持模糊查询                  |
|**buyerTaxNo**    | String     | 购买方税号                 | 非必填 | - | 购买方税号                   |
|**invoiceCode**   | String     | 发票代码                   | 非必填 | - | 支持模糊查询，数电票没有发票代码        |
|**invoiceNumber** | String     | 发票号码                   | 非必填 | - | 支持模糊查询                  |
|**startTime**     | String     | 开票（`invoiceDate`）开始时间  | 非必填 | - | 示例：2023-08-03 16:15:09  |
|**endTime**       | String     | 开票（`invoiceDate`）结束时间  | 非必填 | - | 示例：2023-08-03 16:15:20  |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v2/invoice/OutPutTax/getArInvoice?accessToken=ID01slyVlg14Xd%3AID01rc236q0Gv5' \
--header 'Content-Type: application/json' \
--data '{
    "current": 1,
    "size": 10,
    "sellerTaxNo": "00000105XX1MULXX00",
    "buyerName": "深圳市网旭科技有限公司西安分公司",
    "buyerTaxNo": "00000103MA6X5XXXXX",
    "invoiceCode": "",
    "invoiceNumber": "23322000000005646372",
    "startTime": "2023-08-03 16:15:09",
    "endTime": "2023-08-03 16:15:20"
}'
```

## 成功响应
```json
{
    "value": {
        "code": 200,
        "success": true,
        "data": {
            "records": [
                {
                    "id": "1687014475819970562",
                    "createUser": "1678971214676529154",
                    "createDept": "1678971214349373441",
                    "createTime": "2023-08-03 16:16:09",
                    "updateUser": "1678971214676529154",
                    "updateTime": "2023-08-03 16:16:09",
                    "status": 1,
                    "isDeleted": 0,
                    "tenantId": "HSKJ",
                    "processingRecordNo": "IM1687014001003786241",
                    "serialNo": "f87a6cce577a4d228c1a3dbeb62edc8d",
                    "invoiceCode": "",
                    "invoiceNum": "23322000000005646372",
                    "invoiceDate": "2023-08-03 16:15:09",
                    "invoiceType": "82",
                    "invoiceSpecial": "00",
                    "hsslbs": "0",
                    "buyerName": "深圳市网旭科技有限公司西安分公司",
                    "buyerTaxno": "00000103MA6X5XXXXX",
                    "buyerAddrtel": " ",
                    "buyerBankno": " null",
                    "buyerEmail": "xxxx@wangxutech.com",
                    "buyerPhone": "",
                    "buyerCode": "",
                    "sellerCode": "",
                    "sellerName": "南京某某国际旅游有限公司",
                    "sellerTaxno": "00000105XX1MULXX00",
                    "sellerAddrtel": "南京市建邺区云龙山路999号西侧X座999室 15800000000",
                    "sellerBankno": "null 125907967110365",
                    "xhdwdz": "南京市建邺区云龙山路999号西侧X座999室",
                    "xhdwdh": "010-53600000",
                    "xhdwyh": "招商银行南京分行南京新城科技园支行",
                    "xhdwzh": "125907967110365",
                    "invoiceCost": 241.98,
                    "invoiceVat": 14.52,
                    "invoiceSum": 256.5,
                    "invoiceRate": "0.06",
                    "discountCost": "",
                    "discountVat": "",
                    "discountSum": "",
                    "invoiceRemark": "",
                    "pdfUrl": "https://rocgw.jcsk100.com/external/d/v/jiangsu_23322000000005646372_2023080316150950Y443A3B_e6f3bc3ae625d7df4dd185f8143f9476_pdf",
                    "ofdUrl": "https://rocgw.jcsk100.com/external/d/v/jiangsu_23322000000005646372_2023080316150950Y443A3B_e6f3bc3ae625d7df4dd185f8143f9476_ofd",
                    "xmlUrl": "https://rocgw.jcsk100.com/external/d/v/jiangsu_23322000000005646372_2023080316150950Y443A3B_e6f3bc3ae625d7df4dd185f8143f9476_xml",
                    "ewmUrl": "",
                    "payee": "",
                    "reviewer": "",
                    "maker": "张三",
                    "qrcode": "",
                    "machineNum": "",
                    "invoicePwd": "",
                    "reason": "",
                    "invoiceCheckCode": "",
                    "invoiceMakeStatus": "1",
                    "invoiceMakeType": 0,
                    "invoiceStatus": 0,
                    "invoiceRed": 0,
                    "invoicePrintStatus": 0,
                    "sendStatus": 0,
                    "expressType": "",
                    "multiTaxRate": "",
                    "rebackState": 1,
                    "invoiceGoodsName": "",
                    "expressNo": "",
                    "expressUuid": "",
                    "oldInvoiceCode": "",
                    "oldInvoiceNum": "",
                    "oldInvoiceDate": "",
                    "oldInvoiceType": "",
                    "invoiceRedtableNo": "",
                    "oldSerialNo": "",
                    "systemFrom": "0",
                    "returnMsg": "",
                    "appid": "78bfa0a7-10e9-45a0-81fc-7dd7632e4760",
                    "sid": "f87a6cce577a4d228c1a3dbeb62edc8d",
                    "taxdiscCode": "QD",
                    "invoiceMonth": "202308",
                    "delTs": "",
                    "sslkjly": "",
                    "sslkjlyBz": "0",
                    "pphcSid": "",
                    "dataFrom": "0",
                    "fphcZt": "0",
                    "billNumber": "7000513",
                    "zfrq": "",
                    "yqbz": "1",
                    "qmbz": "Y",
                    "scbz": "0",
                    "pushEmail": 1,
                    "pushSms": 0,
                    "gwPdfUrl": "",
                    "sbbh": "",
                    "gmfZrrbs": "",
                    "qdbz": "0",
                    "retryDownload": 0,
                    "buyerAddr": "",
                    "buyerTel": "",
                    "buyerBankName": "",
                    "buyerBankNumber": "",
                    "isDisplay": 0,
                    "isSellerDisplay": "",
                    "qdFjxxList": "",
                    "tdyslxdm": "",
                    "sfzsgmfyhzh": "",
                    "sfzsxsfyhzh": "",
                    "cezslxdm": ""
                }
            ],
            "total": 1,
            "size": 10,
            "current": 1,
            "orders": [],
            "optimizeCountSql": true,
            "searchCount": true,
            "countId": "",
            "maxLimit": "",
            "pages": 1
        },
        "msg": "操作成功"
    }
}
```

### 返回参数列表
| 字段名称 | 类型      | 备注                                                                                                                                    |
| :--- |:--------|:--------------------------------------------------------------------------------------------------------------------------------------|
| **value**                                      | Object  | 响应信息                                                                                                                                  |
| **&emsp; ∟ code**                             | Integer | 状态码                                                                                                                                   |
| **&emsp; ∟ success**                          | Boolean | 是否成功                                                                                                                                  |
| **&emsp; ∟ msg**                              | String  | 返回消息                                                                                                                                  |
| **&emsp; ∟ data**                             | Object  | 已开票详情数据集合                                                                                                                             |
| **&emsp;&emsp; ∟ total**                      | Integer | 已开票数据量                                                                                                                                |
| **&emsp;&emsp; ∟ current**                    | Integer | 当前页                                                                                                                                   |
| **&emsp;&emsp; ∟ size**                       | Integer | 每页条数                                                                                                                                  |
| **&emsp;&emsp; ∟ pages**                      | Integer | 总页数                                                                                                                                   |
| **&emsp;&emsp; ∟ records**                    | Array   | 已开票数据详情                                                                                                                               |
| **&emsp;&emsp;&emsp; ∟ id**                   | Integer | 唯一id                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ createUser**           | Number  | 创建人                                                                                                                                   |
| **&emsp;&emsp;&emsp; ∟ createDept**           | Number  | 创建部门                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ createTime**           | String  | 创建时间                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ updateUser**           | Integer | 更新人                                                                                                                                   |
| **&emsp;&emsp;&emsp; ∟ updateTime**           | String  | 更新时间                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ status**               | Integer | 业务状态                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ isDeleted**            | Integer | 是否已删除                                                                                                                                 |
| **&emsp;&emsp;&emsp; ∟ tenantId**             | String  | 租户ID                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ processingRecordNo**   | String  | 开票记录号                                                                                                                                 |
| **&emsp;&emsp;&emsp; ∟ serialNo**             | String  | 发票唯一流水号                                                                                                                               |
| **&emsp;&emsp;&emsp; ∟ invoiceCode**          | String  | 发票代码                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ invoiceNum**           | String  | 发票号码                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ invoiceDate**          | String  | 开票日期                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ invoiceType**          | String  | 发票类型代码<br/>`004` : 增值税专用发票<br/>`007` : 增值税普通发票<br/>`026` : 增值税电子发票<br/>`028` : 增值税电子专用发票<br/>`81` : 数电票(增值税专用发票)<br/>`82` : 数电票(普通发票) |
| **&emsp;&emsp;&emsp; ∟ invoiceSpecial**       | String  | 发票特殊票种                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ buyerName**            | String  | 购方名称                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ buyerTaxno**           | String  | 购方税号                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ buyerAddrtel**         | String  | 购方地址电话                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ buyerBankno**          | String  | 购方银行账号                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ buyerEmail**           | String  | 购买方邮箱                                                                                                                                 |
| **&emsp;&emsp;&emsp; ∟ buyerPhone**           | String  | 购买方手机号                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ buyerCode**            | String  | 购方公司编码                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ sellerCode**           | String  | 销方公司编码                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ sellerName**           | String  | 销方名称                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ sellerTaxno**          | String  | 销方税号                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ sellerAddrtel**        | String  | 销方地址电话                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ sellerBankno**         | String  | 销方银行账号                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ xhdwdz**               | String  | 销货单位地址                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ xhdwdh**               | String  | 销货单位电话                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ xhdwyh **              | String  | 销货单位银行                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ xhdwzh**               | String  | 销货单位账号                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ invoiceCost**          | Number  | 合计金额                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ invoiceVat**           | Number  | 合计税额                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ invoiceSum**           | Number  | 价税合计                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ invoiceRate**          | String  | 票面税率                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ discountCost**         | Number  | 折扣金额                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ discountVat**          | Number  | 折扣税额                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ discountSum**          | Number  | 折扣价税合计                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ invoiceRemark**        | String  | 备注                                                                                                                                    |
| **&emsp;&emsp;&emsp; ∟ pdfUrl**               | String  | 电子发票pdf地址                                                                                                                             |
| **&emsp;&emsp;&emsp; ∟ ofdUrl**               | String  | 电子发票ofd地址                                                                                                                             |
| **&emsp;&emsp;&emsp; ∟ payee**                | String  | 收款人                                                                                                                                   |
| **&emsp;&emsp;&emsp; ∟ reviewer**             | String  | 复核人                                                                                                                                   |
| **&emsp;&emsp;&emsp; ∟ maker**                | String  | 开票人                                                                                                                                   |
| **&emsp;&emsp;&emsp; ∟ qrcode**               | String  | 二维码                                                                                                                                   |
| **&emsp;&emsp;&emsp; ∟ machineNum**           | String  | 机器编号                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ invoicePwd**           | String  | 密文                                                                                                                                    |
| **&emsp;&emsp;&emsp; ∟ reason**               | String  | 作废红冲原因                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ invoiceCheckCode**     | String  | 校验码                                                                                                                                   |
| **&emsp;&emsp;&emsp; ∟ invoiceMakeStatus**    | String  | 开票状态（`0` : 未开&emsp;&emsp;`1` : 已开）                                                                                                    |
| **&emsp;&emsp;&emsp; ∟ invoiceMakeType**      | Integer | 开票类型（`0` : 蓝票&emsp;&emsp;`1` : 红票）                                                                                                    |
| **&emsp;&emsp;&emsp; ∟ invoiceStatus**        | Integer | 发票状态（`0` : 正常&emsp;&emsp;`1` : 作废&emsp;&emsp;`2` : 被红冲）                                                                               |
| **&emsp;&emsp;&emsp; ∟ invoicePrintStatus**   | Integer | 发票打印状态（`0` : 未打印&emsp;&emsp;`1` : 发票已打印&emsp;&emsp;`2` : 清单已打印&emsp;&emsp;`3` : 打印完成）                                                 |
| **&emsp;&emsp;&emsp; ∟ sendStatus**           | Integer | 寄送状态（`0` : 未寄送&emsp;&emsp;`1` : 已寄送&emsp;&emsp;`2` : 二次寄送）                                                                            |
| **&emsp;&emsp;&emsp; ∟ expressType**          | String  | 邮寄方式（`0` : 自取&emsp;&emsp;`1` : 邮寄）                                                                                                    |
| **&emsp;&emsp;&emsp; ∟ multiTaxRate**         | Integer | 是否多税率（`0` : 单税率&emsp;&emsp;`1` : 多税率）                                                                                                 |
| **&emsp;&emsp;&emsp; ∟ rebackState**          | Integer | 回写状态（`0` : 未回写&emsp;&emsp;`1` : 已加工）                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ invoiceGoodsName**     | String  | 主要商品名称                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ expressNo**            | String  | 快递单号                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ expressUuid**          | String  | 快递uuid                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ oldInvoiceCode**       | String  | 原发票代码                                                                                                                                 |
| **&emsp;&emsp;&emsp; ∟ oldInvoiceNum**        | String  | 原发票号码                                                                                                                                 |
| **&emsp;&emsp;&emsp; ∟ oldInvoiceDate**       | String  | 原开票日期                                                                                                                                 |
| **&emsp;&emsp;&emsp; ∟ oldInvoiceType**       | String  | 原发票类型代码                                                                                                                               |
| **&emsp;&emsp;&emsp; ∟ oldSerialNo**          | String  | 原发票流水号（作废重开票标记）                                                                                                                       |
| **&emsp;&emsp;&emsp; ∟ invoiceRedtableNo**    | String  | 信息表编号                                                                                                                                 |
| **&emsp;&emsp;&emsp; ∟ systemFrom**           | String  | 系统来源                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ returnMsg**            | String  | 异步开票失败原因                                                                                                                              |
| **&emsp;&emsp;&emsp; ∟ appid**                | String  | 税神通appid                                                                                                                              |
| **&emsp;&emsp;&emsp; ∟ sid**                  | String  | 请求税神通sid                                                                                                                              |
| **&emsp;&emsp;&emsp; ∟ taxdiscCode**          | String  | 税盘类型                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ invoiceMonth**         | String  | 发票归属月份                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ delTs**                | String  | 删除的时间戳                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ sslkjly**              | String  | 小规模纳税人3%税率开具理由                                                                                                                        |
| **&emsp;&emsp;&emsp; ∟ sslkjlyBz**            | String  | 是否需要填写开具理由                                                                                                                            |
| **&emsp;&emsp;&emsp; ∟ pphcSid**              | String  | 普票直接红冲sid                                                                                                                             |
| **&emsp;&emsp;&emsp; ∟ dataFrom**             | String  | 数据来源                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ fphcZt**               | String  | 发票回传状态                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ billNumber**           | String  | 订单号、单据编号                                                                                                                              |
| **&emsp;&emsp;&emsp; ∟ zfrq**                 | String  | 作废日期                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ yqbz**                 | String  | 验签标志（`1` : 已验签&emsp;&emsp;`0` : 未验签）                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ qmbz**                 | String  | 签名标志（`Y` : 已签名&emsp;&emsp;`N` : 未签名）                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ scbz**                 | String  | 上传标志（`1` : 上传成功&emsp;&emsp;`0` : 上传失败）                                                                                                |
| **&emsp;&emsp;&emsp; ∟ pushEmail**            | Integer | 邮箱回传（`0` : 未发送&emsp;&emsp;`1` : 已发送&emsp;&emsp;`2` : 发送失败&emsp;&emsp;`3` : 无需推送）                                                      |
| **&emsp;&emsp;&emsp; ∟ gwPdfUrl**             | String  | 国网版式文件生成 url                                                                                                                          |
| **&emsp;&emsp;&emsp; ∟ buyerAddr**            | String  | 购方地址                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ buyerTel**             | String  | 购方电话                                                                                                                                  |
| **&emsp;&emsp;&emsp; ∟ buyerBankName**        | String  | 购方银行名称                                                                                                                                |
| **&emsp;&emsp;&emsp; ∟ buyerBankNumber**      | String  | 购方银行账号                                                                                                                                |


[//]: # (## 失败响应)

[//]: # ()
[//]: # (| HTTP状态码 | 错误码 | 描述 | 排查建议 |)

[//]: # (| :--- | :--- | :--- | :--- |)



