# 获取授权(平台级、租户级)

import Control from "@theme/Control";

<Control
  method="POST"
  url="/auth/openApi/v3/getAccessToken"
/>

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **appKey**       | String | 接入账号 | 必填 | - | [获取接入账号，见问题一](/docs/open-api/getting-started/question-answer) |
| **appSecurity**  | String | 接入密码 | 必填 | - | [获取接入密码，见问题一](/docs/open-api/getting-started/question-answer) |

## CURL
```json
curl --location 'https://open.hosecloud.com/auth/openApi/v3/getAccessToken' \
--header 'Content-Type: application/json' \
--data '{
    "appKey": "xxxx-xxxx-xxxx-xxxx-xxxx",
    "appSecurity": "xxxx-xxxx-xxxx-xxxx-xxxx"
}'
```

## 成功响应
```json
{
    "code": "200",     //响应状态码
    "msg": "操作成功",  //响应信息
    "data": {          //响应数据
        "corpId": "1NUaicKTEw0000",    //企业ID
        "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJsb2dpblR5cGUiOiJsb2dpbiIsImxvZ2luSWQiOiIwLXdidzNlY3pnMmcwMCIsInJuU3RyIjoiMGpzWmtQTWpoV3BmbWdyb1pHdm1GZ0dPZFpBUmxqbk8iLCJjb3Jwb3JhdGlvbklkIjoiMU5VYWljS1RFdzAwMDAiLCJ1c2VySWQiOiIwLXdidzNlY3pnMmcwMCIsImV4dEluZm8iOnsiZW52IjoiaG90Zml4In0sImV4cCI6MTY3ODgwMjIzMSwic2NvcGUiOiJ0ZW5hbnQiLCJ2ZXJzaW9uIjoxLCJzaG9ydFRlcm1Ub2tlbiI6ZmFsc2V9.mYd8R_QmprZhArMQ_cnM7K5ASSKx6N96JZt0XqHYOpLpwEHxFgsEoTZpc_TJYw1C63xZcyTKGR9XIUGEuqxwljkJ_PhE3t7SV4l30ZUId6SgvkHg-dDINk2WJvitOK4PauIBwPiI8kr94p-ltqnsXjBJFCQ7bA8wyP9qUCDTRWtXLPjqrSmcoweNNF2Wl2LvnbYMQYbM-ZS5pr8f_J2hVZG9l3l2YMo-VTOskT2IK8cl_V86ZaohYFMRIfmSSt_9jBgj4cD2uaJ3Z9-QRQZz2kxuTZAgiVmy8xHJiJ7OXSkqxJOJGF4nSIKoh77553uuCOWYGK8kf8IMpA-fpjlnlw",  //授权码，后续所有模块开发需要依赖此返回值
        "refreshToken": "Z98ZLuCRK2NWAWqxYVn8h4wzg8Aj7sLA2PlmMrGwLsYnBQyjZHjM89EVmoAT",  //调用【刷新授权】接口时需要传的token
        "expiresTime": 1678802231576,  //授权码过期日期时间戳(默认2小时后到期)
        "scope": "tenant"              //鉴权等级（tenant：租户级  platform：平台级）
    }
}
```

## 失败响应
| HTTP状态码 | code | msg | data | 排查建议 | 
| :--- | :--- | :--- | :--- | :--- |
| **200** | 403 | 密钥无效 | "" | 请确认 `appKey`（接入账号）和 `appSecurity`（接入密码）是否正确 |
| **200** | 500 | system error | null | 请确认 `appKey`（接入账号）和 `appSecurity`（接入密码）是否传参 |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="403" label="403" default>

```json
{
    "code": "403",
    "msg": "密钥无效",
    "data": ""
}
```
</TabItem>
<TabItem value="500" label="500">

```json
{
    "code": "500",
    "msg": "system error",
    "data": null,
    "traceId": "03ccfaa793524e4ea9dc568090267bca"  //研发用于排查问题使用
}
```
</TabItem>
</Tabs>




