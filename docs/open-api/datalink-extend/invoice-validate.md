# 发票四要素验真

使用发票四要素验真发票，返回验真通过的发票信息。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/invoice/validate"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.22.0**](/updateLog/update-log#1220)
  - 🆕 新增了本接口。

</div>
</details>

:::caution
- 需要开通【**发票查验**】功能，方可使用本接口。
- 本接口限制 **QPS=1**（1次/秒）。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称       | 类型     | 描述     | 是否必填 | 默认值 | 备注                                                                             |
|:---------|:-------|:-------|:-----|:----|:-------------------------------------------------------------------------------|
| **fpdm** | String | 发票代码   | 必填   | -   | 发票代码                                                                           |
| **fphm** | String | 发票号码   | 必填   | -   | 发票号码                                                                           |
| **kprq** | String | 开票日期   | 必填   | -   | 日期格式 : `yyyyMMdd`                                                              |
| **fpje** | Number | 发票金额   | 非必填  | -   | 必填的发票类型和取值字段：<br/>`不计税金额` : 增值税专用发票、增值税电子专用发票、机动车销售统一发票<br/>`车价合计` : 二手车销售统一发票 |
| **jym**  | String | 校验码后6位 | 非必填  | -   | 必填的发票类型：<br/>增值税普通发票、增值税普通发票（卷式）、增值税电子普通发票、<br/>增值税电子普通发票（通行费）                 |

## CURL
```json
curl --location 'https://app.ekuaibao.com/api/openapi/v2/invoice/validate?accessToken=ID01rqNsJlskSi%3ATdk3tgber501v0' \
--header 'Content-Type: application/json' \
--data '{
    "fpdm": "032002100204",
    "fphm": "37898106",
    "kprq": "20220110",
    "fpje": "100",
    "jym": "266895"
}'
```

## 成功响应

```json
{
    "value": {
        "phone": null,
        "invcode": "032002100204",
        "invno": "37898106",
        "invdate": 20220110,
        "invamt": "520.75",
        "invtaxamt": "31.25",
        "invtaxamt4Calc": 31.25,
        "invsumamt": "552.00",
        "source": "BW",
        "payee": "冶春餐饮股份有限公司",
        "payeetaxno": "913210005691135521",
        "payer": "奥力通起重机(北京)有限公司",
        "payertaxno": "9111011233024848XY",
        "invtype": "PAPER_NORMAL",
        "marker": "",
        "itemdata": "[{\"name\":\"*餐饮服务*餐费\",\"amount\":\"520.75\",\"taxRate\":\"6%\",\"tax\":\"31.25\",\"number\":\"\",\"price\":\"\",\"unit\":\"\",\"model\":\"\"}]",
        "status": "UNLOCK",
        "rawdata": "{\"times\":12,\"fpdm\":\"032002100204\",\"data\":{\"xfsbh\":\"913210005691135521\",\"gfmc\":\"奥力通起重机(北京)有限公司\",\"gmfyhzh\":\"北京农村商业银行股份有限公司张家湾支行 071200010300025588\",\"xhqdBz\":\"N\",\"tspzDm\":\"\",\"dq\":\"江苏\",\"xsfdzdh\":\"扬州市丰乐下街8号051487368018\",\"jshjcn\":\"伍佰伍拾贰元整\",\"se\":31.25,\"kprq\":\"2022-01-10 00:00:00\",\"bz\":\"\",\"kjlx\":\"1\",\"fpztDm\":\"0\",\"sbbh\":\"539903816894\",\"gfsbh\":\"9111011233024848XY\",\"fpdm\":\"032002100204\",\"fplx\":\"04\",\"gmfdzdh\":\"北京市通州区永乐店经济开发区恒业北七街6号院1懂102 13811758030\",\"xsfyhzh\":\"交通银行扬州文昌阁支行395068500018010055163\",\"jshj\":552.0,\"je\":520.75,\"xfmc\":\"冶春餐饮股份有限公司\",\"hwxx\":[{\"ggxh\":\"\",\"jldw\":\"\",\"dj\":\"\",\"mxxh\":1,\"lslbs\":\"\",\"se\":31.25,\"ysse\":\"31.25\",\"mc\":\"*餐饮服务*餐费\",\"sl\":\"\",\"je\":520.75,\"slv\":0.06,\"ysslv\":\"6%\",\"spbm\":\"3070401000000000000\"}],\"fphm\":\"37898106\",\"jym\":\"15619570964484266895\"},\"fplx\":\"04\",\"kprq\":\"2022-01-10 00:00:00\",\"success\":true,\"je\":100,\"time\":\"2023-07-21 16:46:41\",\"fphm\":\"37898106\",\"jym\":\"266895\"}",
        "verify": "DONE",
        "remark": "",
        "thirdId": "qxy",
        "pdf": null,
        "card_id": null,
        "encrypt_code": null,
        "buyerAddressPhone": "北京市通州区永乐店经济开发区恒业北七街6号院1懂102 13811758030",
        "buyerAccount": "北京农村商业银行股份有限公司张家湾支行 071200010300025588",
        "jym": "266895",
        "sellerAddrTel": "扬州市丰乐下街8号051487368018",
        "sellerBankAccount": "交通银行扬州文昌阁支行395068500018010055163",
        "receiptor": "",
        "reviewer": "",
        "issuer": "",
        "invoiceVerify": true,
        "numberConfirm": "",
        "fullElectricInvoiceNo": ""
    }
}
```

### 返回参数列表
| 字段名称                                   | 类型      | 是否必返回 | 备注                                                                                       |
|:---------------------------------------|:--------|:------|:-----------------------------------------------------------------------------------------|
| **value**                              | Object  | 是     | 发票数据                                                                                     |
| **&emsp; ∟ phone**                     | String  | 否     | 手机号                                                                                      |
| **&emsp; ∟ invcode**                   | String  | 是     | 发票代码                                                                                     |
| **&emsp; ∟ invno**                     | String  | 是     | 发票号码                                                                                     |
| **&emsp; ∟ invdate**                   | Number  | 是     | 开票日期                                                                                     |
| **&emsp; ∟ invamt**                    | String  | 是     | 金额                                                                                       |
| **&emsp; ∟ invtaxamt**                 | String  | 是     | 发票税额                                                                                     |
| **&emsp; ∟ invtaxamt4Calc**            | Number  | 是     | 发票税额                                                                                     |
| **&emsp; ∟ invsumamt**                 | String  | 是     | 发票总额                                                                                     |
| **&emsp; ∟ source**                    | String  | 是     | 发票来源                                                                                     |
| **&emsp; ∟ payee**                     | String  | 是     | 销售方                                                                                      |
| **&emsp; ∟ payeetaxno**                | String  | 是     | 销售方纳税人识别号                                                                                |
| **&emsp; ∟ payer**                     | String  | 是     | 购买方                                                                                      |
| **&emsp; ∟ payertaxno**                | String  | 是     | 购买方纳税人识别号                                                                                |
| **&emsp; ∟ invtype**                   | String  | 是     | 参数释义可参考：[发票类别](/docs/open-api/datalink-extend/get-entity-invoice#发票类别e_system_发票主体_发票类别) |
| **&emsp; ∟ marker**                    | String  | 否     | 开票人                                                                                      |
| **&emsp; ∟ itemdata**                  | String  | 是     | 发票明细                                                                                     |
| **&emsp; ∟ status**                    | String  | 是     | 发票状态（`LOCK` : 锁定；`UNLOCK` : 未锁定；`FINISH` : 报销完成）                                         |
| **&emsp; ∟ rawdata**                   | String  | 是     | 发票原始数据                                                                                   |
| **&emsp; ∟ verify**                    | String  | 是     | 发票是否验证（`DONE`）                                                                           |
| **&emsp; ∟ remark**                    | String  | 否     | 备注                                                                                       |
| **&emsp; ∟ thirdId**                   | String  | 是     | 第三方发票id                                                                                  |
| **&emsp; ∟ pdf**                       | String  | 否     | PDF地址                                                                                    |
| **&emsp; ∟ card_id**                   | String  | 否     | 发票卡券的 `card_id`                                                                          |
| **&emsp; ∟ encrypt_code**              | String  | 否     | 发票卡券的加密 `code` 和 `card_id` 共同构成一张发票卡券的唯一标识                                               |
| **&emsp; ∟ buyerAddressPhone**         | String  | 是     | 购方地址、电话                                                                                  |
| **&emsp; ∟ buyerAccount**              | String  | 是     | 购方开户行与账号                                                                                 |
| **&emsp; ∟ jym**                       | String  | 是     | 校验码                                                                                      |
| **&emsp; ∟ sellerAddrTel**             | String  | 是     | 销售方地址电话                                                                                  |
| **&emsp; ∟ sellerBankAccount**         | String  | 是     | 销售方开户行及账号                                                                                |
| **&emsp; ∟ receiptor**                 | String  | 否     | 收款人                                                                                      |
| **&emsp; ∟ reviewer**                  | String  | 否     | 复核人                                                                                      |
| **&emsp; ∟ issuer**                    | String  | 否     | 开票人                                                                                      |
| **&emsp; ∟ invoiceVerify**             | Boolean | 是     | 是否验真                                                                                     |
| **&emsp; ∟ numberConfirm**             | String  | 否     | 发票印刷号码                                                                                   |
| **&emsp; ∟ fullElectricInvoiceNo**     | String  | 否     | 全电票发票号码                                                                                  |

## 失败响应

| HTTP状态码 | 错误码 | 描述           | 排查建议             |
| :--- | :--- |:-------------|:-----------------|
| **400** | - | 查验成功所查发票不一致  | 请确认发票四要素和校验码是否正确 | 
| **400** | - | 查验成功所查发票不存在  | 请确认发票四要素和校验码是否正确 | 






