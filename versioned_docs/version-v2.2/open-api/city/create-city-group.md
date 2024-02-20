# 创建城市组

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/cityGroup/create"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**0.7.135**](/updateLog/update-log#07135) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **name** | String | 名称 | 必填  | - | 城市组名称 |
| **desc** | String | 描述 | 非必填 | - | 城市组描述 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/cityGroup/create?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "name": "openapi城市组",
      "desc": "通过openapi创建的城市组"
}'
```

## 成功响应
```json
{
    "value": {
    "pipeline": 1,
    "id": "wC0cPu1DNY1400",  //城市组ID
    "version": 1,
    "active": true,          //是否有效
    "createTime": 1621252554481,
    "updateTime": 1621252554481,
    "name": "openapi城市组",
    "desc": "通过openapi创建的城市组",
    "status": true,          //是否启用: true-启用, false-停用
    "cityGroup": [],         //城市组明细
    "corporationId": "AdMbpirnlY2Q00"
    }
}
```
