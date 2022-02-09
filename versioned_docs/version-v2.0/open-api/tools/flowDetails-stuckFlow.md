# 处理单据列表接口拉取单据的状态不一致问题
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
`isUpdate`（是否处理）参数传 true/false，均返回异常状态的单据信息：
```json
{
    "count": 2,
    "items": [
        {
            "id": "ID_3wlg6bv52Gg",               //单据ID
            "code": "B22000001",                  //单据编号
            "corporationId": "bwa3wajigF0WH0",    //企业ID
            "state": "rejected",                  //单据状态
            "updateTime": 1642404597341,          //更新日期
            "createTime": 1642403403188,          //创建日期
            "updateTimeString": "2022-01-17 15:29:57",  //格式化更新日期
            "createTimeString": "2022-01-17 15:10:03"   //格式化创建日期
        },
        {
            "id": "ID_3wlg6bv6EGg",
            "code": "B22000002",
            "corporationId": "bwa3wajigF0WH0",
            "state": "rejected",
            "updateTime": 1642404597362,
            "createTime": 1642403403310,
            "updateTimeString": "2022-01-17 15:29:57",
            "createTimeString": "2022-01-17 15:10:03"
        }
    ]
}
```

查询发现单据状态并未有异常时，返回如下：
```json
{
    "count": 0,
    "items": []
}

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
