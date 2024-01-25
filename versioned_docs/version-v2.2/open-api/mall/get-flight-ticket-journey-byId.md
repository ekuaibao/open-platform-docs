# 查询机票状态
用户下单飞机票生成订单后，可通过本接口查询订单里机票的状态和行程信息。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/mall-openapi/open-api/flight/ticket/journey/query"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.10.1**](/docs/open-api/notice/update-log#1101) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Headers Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **Authorization** | String | 自建应用授权 | 必填 | - | 通过 [获取自建应用授权](/docs/open-api/getting-started/platform-auth) 获取 `accessToken`<br/>[传参格式](/docs/open-api/mall/question-answer#问题一) 固定为：`Bearer` + **空格** + `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **queryCode** | String | 查询参数 | 必填 | - | 由订单号、票号、出行人ID拼接而成，或直接取用<br/>【订单管理】-【订单列表】-【飞机】-【订单明细编号】字段的值<br/>传参格式：`订单号-票号-出行人ID`<br/>&emsp; 订单号：`F220809124019111111`<br/>&emsp; 票号：`880-6732111111`<br/>&emsp; 出行人ID：`708209280670888888`<br/>组装后：`F220809124019111111-880-6732111111-708209280670888888` |
| **requestId** | String | 请求标识 | 必填 | - | 任意填写即可，用于接口查询出错时，记录日志 |

## CURL
:::caution
- 本接口地址前缀固定为：`https://unity.ekuaibao.com`
:::
```json
curl --location --request POST 'https://unity.ekuaibao.com/api/mall-openapi/open-api/flight/ticket/journey/query' \
--header 'Authorization: Bearer SRpJkQrMjBEGIooyqDkyxqWKtEusNzxd' \
--header 'Content-Type: application/json' \
--data-raw '{
    "queryCode":"F220526203422857777-245-245-5492817202439277777",
    "requestId":"12345"
}'
```

## 成功响应
```json
{
    "code":200,
    "errorCode":null,
    "errorMsg":null,
    "data":[
        {
            "ticketNo":"245-245",
            "ticketStatus":2,
            "ticketStatusDesc":"已出票",
            "flightNo":"MU5100",
            "journeyCity":"北京-上海",
            "journeyCityCode":"BJS-SHA"
        },
        {
            "ticketNo":"245-245",
            "ticketStatus":4,
            "ticketStatusDesc":"改期成功",
            "flightNo":"MU9991",
            "journeyCity":"上海-中国澳门",
            "journeyCityCode":"SHA-MFM"
        }
    ],
    "requestId":"testRequestId",
    "time":252
}
```

当 `queryCode`（查询参数）传参错误或不存在时，返回空：
```json
{
    "code":null,
    "errorCode":500,
    "errorMsg":"订单信息不存在",
    "data":null,
    "requestId":"testRequestId",
    "time":1
}
```

### 返回参数列表
| 字段名称 | 类型 | 是否必返回 | 备注 |
| :--- | :--- | :--- | :--- |
| **code**      | Integer | 否 | 状态码，`200` 表示成功，**请求失败时为空** |
| **errorCode** | Integer | 否 | 错误码<br/>`401` 表示授权已失效<br/>`500` 表示其他情况下的请求异常，如参数格式错误、订单信息不存在等<br/>**请求成功时为空** |
| **errorMsg**  | String  | 否 | 失败原因，示例：`人员信息不存在` |
| **requestId** | String  | 是 | 请求标识 |
| **time**      | Long    | 是 | 接口响应时间(单位：毫秒) |
| **data**      | List | 否 | 客票行程信息集合，存在多航段的情况，故此字段为集合类型，**请求失败时为空** |
| **&emsp; ∟ ticketNo**         | String  | 是 | 票号，示例：`000-2233777777` |
| **&emsp; ∟ ticketStatus**     | Integer | 是 | 客票状态，见【**客票状态对照表**】，示例：`1` |
| **&emsp; ∟ ticketStatusDesc** | String  | 是 | 客票状态文字描述，示例：`未出票` |
| **&emsp; ∟ flightNo**         | String  | 是 | 航班号，示例：`CA1885` |
| **&emsp; ∟ journeyCity**      | String  | 是 | 行程的城市信息，示例：`北京-上海` |
| **&emsp; ∟ journeyCityCode**  | String  | 是 | 行程的城市代码，示例：`BJS-SHA` |

### 客票状态对照表
| ticketStatus | 名称 |
| :--- | :--- |
| **1**  | 未出票   | 
| **2**  | 已出票   | 
| **3**  | 退票成功 | 
| **31** | 申请退票 |
| **32** | 退票驳回 |
| **33** | 退票中   |
| **4**  | 改期成功 |
| **41** | 申请改期 |
| **42** | 改期驳回 |
| **43** | 改期中   |
| **5**  | 已使用   |

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | 401 | 请先登录 | 请确认 `Authorization`（自建应用授权）是否失效或者传参错误 |
| **200** | 500 | 查询参数不能为空! | 请确认 `queryCode`（查询参数）是否为空 |
| **200** | 500 | 查询参数格式错误! | 请确认 `queryCode`（查询参数）格式是否正确 |
| **200** | 500 | 人员id不能为空 | 请确认 `queryCode`（查询参数）格式是否正确，且出行人ID不能为空 |
| **200** | 500 | 订单信息不存在 | 请确认 `queryCode`（查询参数）是否正确 |
