# 新增或更新账单数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/checking/importCheckingBill"
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
| **checkingBillId**        | String | 账期ID            | 必填 | - | 引用 [创建账期](/docs/open-api/checkingBill/create-checkingBill) 返回的ID |
| **categoryId**            | String | 品类（业务对象）ID  | 必填 | - | 通过 [获取供应商账户及其品类](/docs/open-api/checkingBill/get-supplier-account) 获取 `categoryIds` 中的ID |
| **checkingBillDetails**   | Array  | 账单明细          | 必填 | - | 要新增或修改的账单明细数据，**最大不能超过 `100` 条**|
| **&emsp; ∟ 对账单ID**     | String | 对账单ID          | 非必填 | - | 账单明细数据唯一标识，存在时更新账单明细，不在则新增账单明细 |
| **&emsp; ∟ ---**         | String | 品类模板中的其他字段显示名称 | 非必填 | - | 格式为 `{ "显示名称" : "字段值" }`<br/>**显示名称** 是[获取供应商账户及其品类](/docs/open-api/checkingBill/get-supplier-account) 响应信息 `categoryIds` 中的 `fields` 里面的 `label` 值 |



## CURL
```shell
curl --location 'https://release.ekuaibao.net/api/openapi/v1/checking/importCheckingBill?accessToken=ID01xCrcTXfOlp%3AID01wMzlJ6kcR9' \
--header 'accept: application/json' \
--header 'Content-Type: application/json' \
--data '{
    "checkingBillId": "ID01xCra1RWVeT", 
    "categoryId": "d711f575356f53c123c0", 
    "checkingBillDetails": [
        {
            "对账单ID": "ZGY001",
            "办公用品名称": "办公桌", 
            "编号": "0001",
            "数量": "100",
            "单价": "180",
            "总价": "18000",
            "合计": "18000",
            "出行人": "",
            "申请单号": "S24000785",
            "订单号": "ZGY采购办公桌-0001",
            "法人实体": "ID01xxjAKqlKFx",
            "订单执行状态": "未执行"
        }
    ]
}'
```

## 成功响应
```json
{
    "value": {
        "success": true,
        "msg": ""       //失败原因，成功时为空
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议     |
| :--- | :--- | :--- |:-------------------------------|
| **200** | - | 账期不存在， 请核查         | 请检查`checkingBillId`（供应商账户Id）是否正确     | 
| **200** | - | 供应商品类不存在，请核查     | 请检查`categoryId`（品类（业务对象）ID）是否正确     | 
| **200** | - | 账单明细不能为空            | 请检查`checkingBillDetails`（品类（业务对象）ID）是否为空     | 
| **200** | - | 账单明细单次不能超过100条    | 请检查`checkingBillDetails`（品类（业务对象）ID）是否超过 `100` 条     | 


