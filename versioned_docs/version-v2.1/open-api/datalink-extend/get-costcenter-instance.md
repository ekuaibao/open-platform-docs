# 获取成本中心配置实例数据

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/travel/costCenter/getInstanceData"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **type**        | String | 查询类型   | 必填  | - | `businessObject` : 业务对象 &emsp; `dimension` : 自定义档案  |
| **start**       | Number | 数据开始数 | 必填  | 0 | 从 `0` 开始 |
| **count**       | Number | 查询数量   | 必填  | 0 | 查询数量 |
| **keywords**    | String | 查询关键字 | 非必填 | - | 查询关键字 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/travel/costCenter/getInstanceData?accessToken=ZgQc4GFXqQb400&type=businessObject&start=0&count=10'
```

## 成功响应

```json
{
    "count": 4,
    "items": [
        {
            "id": "znQbFnPjMksw00",
            "name": "北京市/海淀区",
            "code": "TRIP202009290000000026"
        },
        {
            "id": "zNQbsxFdDYtQ00",
            "name": "北京市/海淀区 - 广东省/深圳市/深圳市区",
            "code": "TRIP202008200000000026"
        },
        {
            "id": "z7YbpZfy3Qts00",
            "name": "北京市/海淀区 - 重庆市/重庆市区",
            "code": "TRIP202008120000000008"
        },
        {
            "id": "ykUc0y-IUYms00",
            "name": "华北大区 - 华北大区",
            "code": "TRIP202012100000000063"
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | "count": 0,<br/>"items": [] | 返回空表示没有查询到实例数据，请确认所传参数是否正确 | 
