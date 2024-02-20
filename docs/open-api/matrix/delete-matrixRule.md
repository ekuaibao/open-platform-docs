# 批量删除规则明细

import Control from "@theme/Control";

<Control
method="DELETE"
url="/api/openapi/v2/matrix/deleteRule"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.27.0**](/updateLog/update-log#1270) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	    | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称         | 类型     | 描述    | 是否必填 | 默认值 | 备注       |
|:-----------|:-------|:------| :--- |:----|:---------|
| **baseId**  | String | 审批矩阵ID      | 必填 | - | 通过 [获取企业下所有审批矩阵](/docs/open-api/matrix/get-matrixs) 获取 |
| **ruleIds** | Array  | 矩阵明细ID集合  | 必填  | - | 通过 [根据矩阵ID获取矩阵明细](/docs/open-api/matrix/get-matrix-byId) 获取 |


## CURL
```json
curl --location --request DELETE 'https://app.ekuaibao.com/api/openapi/v2/matrix/deleteRule?accessToken=ID01wiXBgNwwbR%3APCx3rwm3aA00qM' \
--header 'Content-Type: application/json' \
--data '{
    "baseId": "ID01wh4O1Yl1Cv",
    "ruleIds": [
        "ID01wh7Wjx8IZV","ID01wj0ccQcqoT"
    ]
}'
```

## 成功响应
```json
{
  "value": true
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
|:--------| :--- |:---|:-----|
| **400** | - | 未找到规则信息，请检查规则Id是否拼写正确  | 请检查矩阵明细Id是否正确  |
