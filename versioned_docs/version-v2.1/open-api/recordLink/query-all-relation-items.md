# 获取企业下档案项数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.1/recordLink/queryAllRecordLink"
/>

<details>
  <summary>v2.1版本特性</summary>
  <div>
    - 🐞 优化报错输出。
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **roleDefIds** | Array  | 档案关系ID  | 非必填  | - | 通过[获取企业下档案关系列表](/docs/open-api/recordLink/get-dimension-relation)获取，通过传递此值，<br/>查询指定档案关系下全部数据 |
| **orderBy**    | String | 结果排序字段 | 非必填  | - | `updateTime` : 查询结果按更新时间倒序排列<br/>`createTime` : 查询结果按创建时间倒序排列 |
| **start**      | Int    | 查询开始值  | 非必填  | 0 | 从 `0` 开始 |
| **count**      | Int    | 查询记录数  | 必填    | - |  `0` < `count` ≤ `100` |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2.1/recordLink/queryAllRecordLink?accessToken=1A4cbPai0o1U00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "roleDefIds":["ID_3gUPXqx3j6I"],  //档案关系ID
      "orderBy":"updateTime",           //排序依据，更新时间倒序
      "start": 0,
      "count": 10
}'
```

## 成功响应
```json
{
    "value": {
        "total": 10,      //总记录数量
        "queryRecords": [
            {
                "roleDefId": "s4kbXGlvvAs000",               //角色关系ID
                "sourceValue": "gwobfjObAAno00:15000000034", //源数据ID
                "purposeValue": "gwobfjObAAno00"             //目标数据ID
            },
            {
                "roleDefId": "s4kbXGlvvAs000",
                "sourceValue": "gwobfjObAAno00:15000000034",
                "purposeValue": "gwobfjObAAno00:_GMb_D2wMQ7A00"
            },
            {
                "roleDefId": "s4kbXGlvvAs000",
                "sourceValue": "gwobfjObAAno00:B6sbACnWCgjU00",
                "purposeValue": "gwobfjObAAno00:_GMb_D2wMQ7A00"
            },
            {
                "roleDefId": "s4kbXGlvvAs000",
                "sourceValue": "gwobfjObAAno00:B6sbACnWCgjU00",
                "purposeValue": "gwobfjObAAno00"
            },
            {
                "roleDefId": "s4kbXGlvvAs000",
                "sourceValue": "gwobfjObAAno00:KpIbfkxLiU7800",
                "purposeValue": "gwobfjObAAno00:_GMb_D2wMQ7A00"
            },
            {
                "roleDefId": "s4kbXGlvvAs000",
                "sourceValue": "gwobfjObAAno00:KpIbfkxLiU7800",
                "purposeValue": "gwobfjObAAno00"
            },
            {
                "roleDefId": "s4kbXGlvvAs000",
                "sourceValue": "gwobfjObAAno00:TJAbw0PhCM3s00",
                "purposeValue": "gwobfjObAAno00:_GMb_D2wMQ7A00"
            },
            {
                "roleDefId": "s4kbXGlvvAs000",
                "sourceValue": "gwobfjObAAno00:TJAbw0PhCM3s00",
                "purposeValue": "gwobfjObAAno00"
            },
            {
                "roleDefId": "s4kbXGlvvAs000",
                "sourceValue": "gwobfjObAAno00:bFYbzd2EoMfA00",
                "purposeValue": "gwobfjObAAno00"
            },
            {
                "roleDefId": "s4kbXGlvvAs000",
                "sourceValue": "gwobfjObAAno00:bFYbzd2EoMfA00",
                "purposeValue": "gwobfjObAAno00:_GMb_D2wMQ7A00"
            }
        ]
    }
}
```

## 失败响应
`count` 大于 `100` 时报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "超过最大查询数量100！",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当查询的档案关系ID不存在或已删除时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "档案关系不存在或已删除！",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当查询的档案关系ID下无数据或 `start` 参数大于等于总记录数时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "档案关系不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

