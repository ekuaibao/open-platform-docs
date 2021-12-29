# 获取成本中心配置实例数据

使用之前请确保已经开通【**合思商城订购管理**】功能。

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/travel/costCenter/getInstanceData"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**        | String | 查询类型   | 必填  | - | `businessObject` : 业务对象 &emsp; `dimension` : 自定义档案  |
| **start**       | Number | 数据开始数 | 必填  | - | 默认填0 |
| **count**       | Number | 每页总数   | 必填  | - | 默认填0  |
| **keywords**    | String | 查询关键字 | 非必填 | - | 查询关键字  |


## CURL
```json
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

##失败响应
当该配置关闭或者无实例数据时，返回以下内容
```json
{
    "count": 0,
    "items": []
}
```
