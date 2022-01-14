# 工具一：处理单据列表接口拉取单据的状态不一致问题
通过[获取单据列表](/docs/open-api/flows/get-forms-sequences)/[获取指定状态单据列表](/docs/open-api/flows/get-forms-sequences-byState)
获取到最新的单据状态可能会和系统上的单据状态不一致问题（系统上已“支付完成”，接口获取到的数据还是“支付中”状态），可通过此工具接口处理。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/flowDetails/stuckFlow"
/>

:::caution
- 每条异常单据只能调用一次本接口，重复调用无效。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **codes**       | String | 单据编号   | 必填  | - | 单据CODE，多个用英文逗号 `,` 分隔 |
| **isUpdate**    | String | 是否处理   | 非必填 | true | `true` : 处理<br/>`false` : 不处理，只返回异常单据信息 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/flowDetails/stuckFlow?accessToken=ID_3wb4Xco0gs0:bwa3wajigF0WH0&codes=B21000001&isUpdate=false'
```

## 成功响应
```json

```

## 失败响应
`codes` 单据编号不正确时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "单据不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
