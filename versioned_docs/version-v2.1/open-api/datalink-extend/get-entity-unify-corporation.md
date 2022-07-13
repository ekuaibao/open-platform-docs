# 获取统一开票方
获取的是【**档案设置**】下【**供应商档案**】中的信息。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/invoice/unify/corporation/list"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**0.7.131**](/docs/open-api/notice/update-log#07131) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request get 'http://app.ekuaibao.com/api/openapi/v1/invoice/unify/corporation/list?accessToken=T6IcqAnfM40400
```

## 成功响应
```json
{
    "items": [
        {
            "id": "LCccnaJWo4Xc00",     //开票方ID
            "version": 1,
            "active": true,
            "createTime": 1613705055537,
            "updateTime": 1613705055537,
            "name": "测试统一开票001",   //开票方名称
            "nameSpell": "CESHITONGYIKAIPIAO001",
            "code": "",
            "corporationId": "cWQc8EeLU41A00",
            "channel": "OFFLINE"
        }
    ]
}
```


