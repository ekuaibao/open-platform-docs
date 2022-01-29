# 获取成本中心配置

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/travel/costCenter/getCostCenterConfig"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/travel/costCenter/getCostCenterConfig?accessToken=ZgQc4GFXqQb400'
```

## 成功响应
```json
{
    "value": {
        "hasDimension": true,     //是否配置自定义档案
        "hasBusinessObject": true //是否配置业务对象
    }
}
```
