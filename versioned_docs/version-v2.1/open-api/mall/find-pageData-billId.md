# 获取企业对账单列表

import Control from "@theme/Control";

<Control
method="POST"
url="/api/mall-openapi/open-api/finance/bill/findPageDataBillId"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.6.1**](/docs/open-api/notice/update-log#161) -> 🆕 新增了本接口。<br/>

  </div>
</details>

:::caution
- 本接口限制 **QPS=5**（每秒查询率为5次）。
:::

## Headers Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **Authorization** | String | 自建应用授权 | 必填 | - | 通过 [获取自建应用授权](/docs/open-api/getting-started/platform-auth) 获取 `accessToken`<br/>[传参格式](/docs/open-api/mall/question-answer#问题一) 固定为：`Bearer` + **空格** + `accessToken` | 

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **productTypeId**| Integer | 产品类型ID   | 非必填 | - | **不传时查询全部类型**<br/>`1` : 酒店 &emsp; `2` : 机票 &emsp; `3` : 火车 &emsp; `4` : 用车<br/>`5` : 餐饮 &emsp; `6` : 通用 &emsp; `7` : 保险 &emsp; `8` : 虚拟卡 &emsp; `10` : 企业购 |
| **startTime**    | Long    | 查询开始时间  | 必填 | - | 毫秒级时间戳，按对账单 **创建时间** 查询<br/>**查询开始时间和结束时间请在一个月内** |
| **endTime**      | Long    | 查询结束时间  | 必填 | - | 毫秒级时间戳，按对账单 **创建时间** 查询<br/>**查询开始时间和结束时间请在一个月内** |
| **page**         | Integer | 第几页       | 必填 | - | `page` ≥ `1` |
| **size**         | Integer | 每页数量     | 必填 | - | `0` < `size` ≤ `50` |
| **requestId**    | String  | 请求标识     | 必填 | - | 任意填写即可，用于接口查询出错时，记录日志 |

:::tip
- 分页时，每页获取10条数据，则参数为 `"page":1,"size":10`，下一页参数为 `"page":2,"size":10`。
:::

## CURL
:::caution
- 本接口地址前缀固定为：`https://unity.ekuaibao.com`
:::

```json
curl --location --request POST 'https://unity.ekuaibao.com/api/mall-openapi/open-api/finance/bill/findPageDataBillId' \
--header 'Authorization: Bearer akBNtNMJEbOvbRiIZjECmvKUHPPyQuuV' \
--header 'Content-Type: application/json' \
--data-raw '{
    "productTypeId":1,
    "startTime":1652085779586,
    "endTime":1654155750587,
    "page":1,
    "size":10,
    "requestId":"12345"
}'
```
## 成功响应
```json
{
    "status": "00000",     //"00000"表示成功，其余标识均为失败
    "msg": "请求成功",     //响应描述，例如："请求成功"
    "data": {              //企业对账单ID集合
        "totalCount": 8,   //总数量
        "items": [         //对账单ID，totalCount=0时，返回空数组
            171692490,
            171692606,
            171692856,
            171692857,
            171693066,
            171693080,
            171693083,
            171693124
        ]
    },
    "time": 30,            //接口响应时间(单位：毫秒)
    "requestId": "12345"   //请求标识
}
```

### 返回参数列表
| 字段名称 | 类型 | 是否必返回 | 备注 |
| :--- | :--- | :--- | :--- |
| **status**              | String | 是 | "00000"表示成功，其余标识均为失败 |
| **msg**                 | String | 是 | 响应描述，例如："请求成功" |
| **data**                | Data | 是 | 企业对账单ID集合 |
| **&emsp; ∟ totalCount**| Integer | 是 | 总数量 |
| **&emsp; ∟ items**     | List<Long\> | 是 | 对账单ID，totalCount=0时，返回空数组 |
| **time**                | Long | 是 | 接口响应时间(单位：毫秒) |
| **requestId**           | String | 是 | 请求标识 |

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **401** | - | 请先登录 | 请确认 `Authorization`（自建应用授权）是否失效或者传参错误 |
