# 发票OCR识别

发票OCR识别，返回识别到的发票信息。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/invoice/processImageByFileUrl"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.22.0**](/updateLog/update-log#1220)
  - 🆕 新增了本接口。

</div>
</details>

:::caution
- 需要开通【**OCR智能识别**】功能，方可使用本接口。
- 本接口限制 **QPS=1**（1次/秒）。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型      | 描述       | 是否必填 | 默认值  | 备注                                                                    |
| :--- |:--------|:---------|:-----|:-----|:----------------------------------------------------------------------|
| **fileUrl**  | String  | 文件url    | 必填   | -    | [下载附件](/docs/open-api/attachment/attachment-download) 接口返回的 `url` 参数  |

## CURL
```json
curl --location 'https://app.ekuaibao.com/api/openapi/v2/invoice/processImageByFileUrl?accessToken=ID01rqNsJlsk4K%3ATdk3tgber501v0' \
--header 'Content-Type: application/json' \
--data '{
    "fileUrl": "https://files-dd.ekuaibao.com/openapi3061cdf7-449c-4d52-83a7-dd73a7f74e79-%E5%8F%91%E7%A5%A81.png?Expires=1690925436&OSSAccessKeyId=STS.NTk4Qd6D5Si4Fy5W7yFqJK7Lv&Signature=QXGajJkJQjaiwny%2BgtvhzQZ%2F9bo%3D&security-token=CAIS8AF1q6Ft5B2yfSjIr5fef%2BvQ25sU5KvfRF%2BEszcsSv5mpPLnlDz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapOrThCDDlrzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAFJeoysR1d2IMxf%2FqMDvCkfUEmWjoYAjq6O9D2uvHFEE7U8MStoQ7nzmrYem7x16yKGDP6K0nY8dkiBNYXIjH%2FNRdzmGMdnR7wK%2BG%2BMs1HDwzKRDeCh7kp5LNQMXvPyk7YrFLLQJPPocIgi6qm%2BnsZQBTGXRScd5axdFgwYHFCfzw%3D%3D"
}'
```

## 成功响应

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="增值税发票" label="增值税发票" default>

```json
{
    "value": {
        "platform": "ruiqi",          //OCR服务平台
        "invoices": [
            {
                "type": "10100",      //发票类型
                "orientation": 0.0,
                "region": [
                    64.0,
                    0.0,
                    1776.0,
                    941.0
                ],
                "details": {
                    "code": "1100194130",                  //发票代码
                    "number": "33492912",                  //发票号码
                    "date": "2021年06月11日",              //开票日期
                    "pretax_amount": "95598.73",           //税前金额
                    "total": "103834.00",                  //总金额
                    "check_code": "",                      //校验码
                    "seller": "北京当代商城有限责任公司",    //销售方名称
                    "seller_tax_id": "91110108102068***K", //销售单位纳税人识别号
                    "buyer": "某某***(北京)餐饮管理有限公司",//购买方方名称
                    "buyer_tax_id": "911100006********2", //购买方纳税人识别号
                    "company_seal": 1,                    //是否有公司印章（0：没有； 1： 有）
                    "form_type": "第二联",                //发票是第几联
                    "form_name": "抵扣联",                //发票联次
                    "kind": "通讯",                      //发票消费类型
                    "ciphertext": "13</7>62>+/72-14++9549--+0/,310+2858/-/>99+215023>/>02+,21*<07432<9>1*/+0-158+954>>,9+*/532+2438*+97*>+2/>10+1/",//密码区,四行密码,每行以逗号隔开
                    "tax": "8235.27",                  //税额
                    "block_chain": 0,                  //区块链标识
                    "seller_addr_tel": "北京市海淀区中关村大街40号 62696804",              //销售方地址电话
                    "seller_bank_account": "建行北京中关村南大街支行 11001018300056000137",//销售方开户行及账号
                    "receiptor": "",                    //收款人
                    "reviewer": "",                     //复核人
                    "issuer": "刘京",                   //开票人
                    "service_name": "水冰雪",           //服务类型
                    "remark": "北京市海淀区中关村大街40号",//备注
                    "producer_stamp": "",               //监制单位
                    "title": "北京增值税专用发票",
                    "electronic_mark": 0,                  //是否电子票
                    "total_cn": "壹拾万叁仟捌佰叁拾肆圆整",  //价税合计（大写）
                    "item_names": "*水冰雪*水费,*电信服务*电话费,*经营租赁*租金,*企业管理服务*管理费",//项目名称
                    "number_confirm": "93492912"          //印刷体号码
                }
            }
        ],
        "isExpressImage": false
    }
}
```
</TabItem>
</Tabs>

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议                                                                            |
| :--- | :--- | :--- |:--------------------------------------------------------------------------------|
| **400** | - | 第三方出现问题请稍后再试 | 1.请确认要识别的 `文件url` 在浏览器预览正常<br/>2.请确认要识别的 `文件url` 是图片或PDF的链接<br/>3.供应商服务异常，请稍后再试 | 






