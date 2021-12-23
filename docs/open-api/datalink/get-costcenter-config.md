# 获取成本中心配置

使用之前请确保已经开通`合思商城订购管理`功能

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/travel/costCenter/getCostCenterConfig"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/travel/costCenter/getCostCenterConfig?accessToken=ZgQc4GFXqQb400'
```

## 成功响应
```json
{
    "value": {
        "hasDimension": true, // 是否配置自定义档案
        "hasBusinessObject": true // 是否配置业务对象
    }
}
```
