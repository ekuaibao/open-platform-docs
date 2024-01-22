# 根据单据编号查询CBS7银行信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/cbs7/queryByCode"
/>

## Query Parameters

| 名称              | 类型 | 描述      | 是否必填 | 默认值 | 备注                                                              |
|:----------------| :--- |:--------| :--- |:--- |:----------------------------------------------------------------|
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **code**        | String | 单据编号    | 必填 | - | 通过系统页面获取                                                        |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/cbs7/queryByCode?accessToken=ID01uWjylbhPyC%3ATdk3tgber501v0&code=B23000001' \
```

## 成功响应
```json
{
    "payAccountCode": "110935993410888",        //支付账户编码
    "receivingAccountCode": "6214830199267195", //收款账户编码
    "paymentAmount": {                          //支付金额
        "standard": "1.00",
        "standardUnit": "元",
        "standardScale": 2,
        "standardSymbol": "¥",
        "standardNumCode": "156",
        "standardStrCode": "CNY"
    },
    "paymentBankTypeBank": "招商银行",         //支付银行类别
    "businessSerialNumber": "AP0000136713",    //业务流水号
    "businessReferenceNumber": "cwiR_wMnR4KNs77c4DsPPg", //业务参考号
    "paymentCompletionTime": 1695627997147     //支付完成时间
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述   | 排查建议                 |
|:--------| :--- |:-----|:---------------------|
| **200** | - | 响应为空 | 请确认 `code`（单据编号）是否正确 |

