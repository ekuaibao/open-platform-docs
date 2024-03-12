# 创建账期

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/checking/createCheckingBill"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**2.0.1**](/updateLog/update-log#201)
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
| **supplierAccountId** | String | 供应商账户ID | 必填 | - | 通过 [获取供应商账户及其品类](/docs/open-api/checkingBill/get-supplier-account) 获取 |
| **startTime**         |  Long  | 账期开始时间 | 必填 | - | 毫秒级时间戳 |
| **endTime**           |  Long  | 账期结束时间 | 必填 | - | 毫秒级时间戳 |


## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v1/checking/createCheckingBill?accessToken=ID01xCrcTXfOlp%3AID01wMzlJ6kcR9' \
--header 'accept: application/json' \
--header 'Content-Type: application/json' \
--data '{
    "supplierAccountId": "ID01xAMijokiHd", 
    "startTime": "1704038400000", 
    "endTime": "1706715599000" 
}'
```

## 成功响应
```json
{
    "value": {
        "success": true,            //是否创建成功
        "msg": "",                  //失败原因，成功时为空
        "id": "ID01xCra1RWS2H",     //账单id 
        "name": "2024-01",          //账单名称
        "code": "chailv0220240101"  //账单编码
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议     |
| :--- | :--- | :--- |:-------------------------------|
| **200** | - | 供应商账户Id不能为空         | 请检查`supplierAccountId`（供应商账户Id）是否填写     | 
| **200** | - | 供应商账户：XXXX不存在，请核查 | 请检查`supplierAccountId`（供应商账户Id）是否正确     | 
| **200** | - | 供应商账户「XXX」不可用       | 请检查`supplierAccountId`（供应商账户Id）是否启用     | 
| **200** | - | 供应商账户：ZGY测试账户不支持API写入 | 请检查`supplierAccountId`（供应商账户Id）的【账单导入方式】是否为【API写入】     | 
| **200** | - | 账期开始时间不能为空          | 请检查`startTime`（账期开始时间）是否填写     | 
| **200** | - | 账期结束时间不能为空          | 请检查`endTime`（账期结束时间）是否填写     | 


