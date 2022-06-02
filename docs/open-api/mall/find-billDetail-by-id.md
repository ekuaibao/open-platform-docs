# 获取企业对账单详情

import Control from "@theme/Control";

<Control
method="GET"
url="/mall-open-api/open-api/finance/bill/findBillDetailById"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **data**      | List<Long> | 对账单ID集合 | 必填 | - | 可通过[获取行程管理业务对象列表](/docs/open-api/datalink/get-tripManager-order)获取 |
| **requestId** | String     | 请求标识     | 必填 | - | 可通过[获取行程管理业务对象列表](/docs/open-api/datalink/get-tripManager-order)获取 |

:::tip
- 例如：**“行程管理”**的业务对象实例ID可以在单据详情里面获取到。

  ![image](images/行程业务对象ID获取.png)
  :::

## CURL
```json

```

## 成功响应
```json

```

## 失败响应
```json

```

