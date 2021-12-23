# 获取企业下档案项数据

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/recordLink/queryAllRecordLink"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **start** | Int  | 记录开始值 | 非必填  | 0 | 从0开始 |
| **count** | Int  | 查询记录数 | 必填    | - | 每次查询最大数量不可超过100 |

## CURL
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v2/recordLink/queryAllRecordLink?accessToken=1A4cbPai0o1U00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
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
```json
{
    "errorCode": 412,
    "errorMessage": "超过最大查询数量100！",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当`start`参数大于等于总记录数时，会报如下错误：
```json
{
    "errorCode": 412,
    "errorMessage": "档案关系不存在",
    "errorDetails": null,
    "code": null,
    "data": null
}
```