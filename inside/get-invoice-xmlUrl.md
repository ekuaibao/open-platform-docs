# 获取发票xml原件链接地址

import Control from "@theme/Control";

<Control
method="POST"
url=" /api/openapi/v2/extension/INVOICE/xmlUrl"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**2.0.0**](/updateLog/update-log#200)
    - 🆕 新增了本接口。

</div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **invoiceId** | Array | 发票ID集合 | 必填 | - | 通过 [根据单据编号或ID查询发票ID和明细ID](/docs/open-api/datalink-extend/get-flow-invoice)<br/>或 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details) 获取 |

## CURL
```json
curl --location 'https://app.ekuaibao.com/api/openapi/v2/extension/INVOICE/xmlUrl?accessToken=ID01xdulJaycbR%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "invoiceId":["TsI3tt8KjF4S7M::23912000000001835706"]
}'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "TsI3tt8KjF4S7M::23912000000001835706",           //发票ID
            "xmlFileName": "数1-电子发票（普通发票）-1708573368114-87.xml",  //发票文件名称
            "xmlUrl": "https://files-dd.ekuaibao.com/%E6%95%B01-%E7%94%B5%E5%AD%90%E5%8F%91%E7%A5%A8%EF%BC%88%E6%99%AE%E9%80%9A%E5%8F%91%E7%A5%A8%EF%BC%89-1708573368114-87.xml?Expires=1708595178&OSSAccessKeyId=STS.NUMdaoBSteQLZvAp3718DEnQG&Signature=TtSai%2BrdoCsAimFEFS3MspwcKCM%3D&security-token=CAIS8AF1q6Ft5B2yfSjIr5b4L9vbr4xV0pOnWFDwlDNiPbdoqqv6pTz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapOLVE6%2BRFrzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAFi5l6MFXLG7OMtNXJsUwxEsK4wQRxEmaijDJ9a22FsXCKM%2BBHqdCBQ8nqDzUM%2FHp%2Ffbmfp1XEzJxx1OCoRydENIuvBtnzveAPu5LfcDFQfEC9kcPk4hqFsDGJtF6fbIXedGQ6etkdnCbzdG5pZROzzGn3nXU5qzgYvYHUD9Ny%2FFiAA",  //xml文件下载地址
            "ofdUrl": null    //ofd文件下载地址，暂不支持获取
        }
    ]
}
```
## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"items": []}` | 返回空表示没有查询到发票信息<br/>请确认 `invoiceId` 是否正确 | 

