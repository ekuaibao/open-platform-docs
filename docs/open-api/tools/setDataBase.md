# 处理EAI插件拉取不到单据中间态问题（待支付、支付中）

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/docs/setDataBase/[`flowId`]"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **codes**       | String | 单据编号    | 必填  | - | 单据CODE，多个用英文逗号 `,` 分隔 |
| **isUpdate**    | String | 是否处理    | 非必填 | true | `true` : 处理<br/>`false` : 不处理，只返回异常单据信息 |
| **isForce**     | String | 是否重复触发 | 非必填 | false | `true` : 重复触发<br/>`false` : 不触发 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1.1/flowDetails/stuckFlow?accessToken=ID_3wb4Xco0gs0:bwa3wajigF0WH0&codes=B21000001&isUpdate=false'
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
