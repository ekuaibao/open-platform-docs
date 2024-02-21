# 获取单据抄送消息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/carbonCopy/getCarbonCopy"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**0.7.129**](/updateLog/update-log#07129)
  - 🆕 新增了本接口。

</div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token            | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **flowId**      | String | 单据ID               | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一) |
| **receiverId**  | String | 接收人（单据被抄送人）ID | 必填 | - | 通过 [查询员工](/docs/open-api/corporation/get-staff-ids) 获取 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/carbonCopy/getCarbonCopy?accessToken=FdAcjUU3HM0s00&flowId=J4ccjUq08pRU00&receiverId=FF0c6gsq-gl400:dIEbu2mgTs6o00' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "value": {
        "id": "O6YcjUq08pUw00",
        "version": 1,   
        "active": true, 
        "createTime": 1613618785090,
        "updateTime": 1613618785090,
        "corporationId":  "FF0c6gsq-gl400",             //企业ID
        "receiverId": "FF0c6gsq-gl400:dIEbu2mgTs6o00",  //接收人ID/单据被抄送人ID
        "senderId": null,                               //发送人ID/单据发送人ID
        "flowId": "J4ccjUq08pRU00",                     //单据ID
        "state": "UNREAD",                              //状态(READ=已读, UNREAD=未读)
        "type": "requisition"                           //单据类型
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - |  单据抄送消息不存在 | 请确认对应单据是否有抄送消息 |
