# 获取业务对象实例列表(排序)
根据字段排序业务对象后返回列表数据。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/datalink/search/$`entityId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **entityId** | String | 业务对象ID | 必填 | - | 通过 [获取业务对象](/docs/open-api/datalink/get-entity-list) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称                         | 类型     | 描述     | 是否必填 | 默认值 | 备注                        |
|:---------------------------|:-------|:-------|:-----|:--- |:--------------------------|
| **query**                  | Object | 参数对象   | 必填   | - | 包含过滤和排序参数的对象              |
| **&emsp; ∟ filterBy**      | String | 查询过滤参数 | 必填   | - | 过滤参数                      |
| **&emsp; ∟ orderBy**       | Array  | 排序参数   | 必填   | - | 排序参数                      |
| **&emsp; &emsp; ∟ value**  | String | 排序字段   | 必填   | = | 格式：`form.E_业务对象ID_code`   |
| **&emsp; &emsp; ∟ order**  | String | 排序规则   | 必填   | = | `ASC`：升序 &emsp; `DESC`：降序 |

## CURL
```json
curl --location 'https://app.ekuaibao.com/api/openapi/v2/datalink/search/$bd0f8774d3b2f55117c0?accessToken=ID01oMxsLeIf0a%3ADgM3w5DRQ401Iw' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "filterBy": "(active.in(true))",
        "orderBy": [
            {
                "value": "form.E_bd0f8774d3b2f55117c0_code",
                "order": "DESC"
            }
        ]
    }
}'
```

## 成功响应
```json
{
    "items": {
        "data": [   //业务对象数据
            {
                "pipeline": 1,
                "grayver": "9.84.0.0-prd",
                "version": 2,
                "active": true,
                "createTime": 1670469114504,
                "updateTime": 1670469114509,
                "name": "12082测试",
                "nameSpell": "12082CESHI",
                "code": "asdfasd",
                "corporationId": "DgM3w5DRQ401Iw",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "id": "ID01loash4lPJ5",
                "form": {
                    "E_bd0f8774d3b2f55117c0_code": "asdfasd",
                    "E_bd0f8774d3b2f55117c0_name": "12082测试",
                    "E_bd0f8774d3b2f55117c0_个数": "1"
                },
                "ledgerAmount": null,
                "ledgerAmountModel": null,
                "totalCount": 0,
                "useCount": 0,
                "entityId": "bd0f8774d3b2f55117c0",
                "platformId": "ID01kEZFXEVbtB",
                "source": "API",
                "masterId": "",
                "index": 0,
                "visibility": {
                    "fullVisible": true,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "visible": true,
                "ownerId": "",
                "operatorId": null,
                "sourceId": "",
                "selfPlannedConfigs": [],
                "rigidControlPassed": true,
                "controlCalcVersion": 2,
                "topDate": 0,
                "topFlag": 0,
                "flowCounts": {},
                "sourceMessage": ""
            },
            {
                "pipeline": 1,
                "grayver": "9.84.0.0-prd",
                "version": 2,
                "active": true,
                "createTime": 1670466847718,
                "updateTime": 1670466847724,
                "name": "1208测试",
                "nameSpell": "1208CESHI",
                "code": "1208",
                "corporationId": "DgM3w5DRQ401Iw",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "id": "ID01lol3OaOeB1",
                "form": {
                    "E_bd0f8774d3b2f55117c0_code": "1208",
                    "E_bd0f8774d3b2f55117c0_name": "1208测试",
                    "E_bd0f8774d3b2f55117c0_个数": "1"
                },
                "ledgerAmount": null,
                "ledgerAmountModel": null,
                "totalCount": 0,
                "useCount": 0,
                "entityId": "bd0f8774d3b2f55117c0",
                "platformId": "ID01kEZFXEVbtB",
                "source": "API",
                "masterId": "",
                "index": 0,
                "visibility": {
                    "fullVisible": true,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "visible": true,
                "ownerId": "DgM3w5DRQ401Iw:AvT3lntT8zzpWw",
                "operatorId": null,
                "sourceId": "",
                "selfPlannedConfigs": [],
                "rigidControlPassed": true,
                "controlCalcVersion": 2,
                "topDate": 0,
                "topFlag": 0,
                "flowCounts": {},
                "sourceMessage": ""
            },
            {
                "pipeline": 1,
                "grayver": "9.95.0.0-prd",
                "version": 76,
                "active": true,
                "createTime": 1668066429144,
                "updateTime": 1676541811382,
                "name": "001",
                "nameSpell": "001",
                "code": "001",
                "corporationId": "DgM3w5DRQ401Iw",
                "sourceCorporationId": null,
                "dataCorporationId": null,
                "id": "ID01kF05bkGAB9",
                "form": {
                    "E_bd0f8774d3b2f55117c0_code": "001",
                    "E_bd0f8774d3b2f55117c0_name": "001",
                    "E_bd0f8774d3b2f55117c0_个数": "777"
                },
                "ledgerAmount": {
                    "E_ID01kEZFXF8biT_测试1台账_L": "285.00000000"
                },
                "ledgerAmountModel": {
                    "E_ID01kEZFXF8biT_测试1台账_L": {
                        "standard": "285.00",
                        "standardUnit": "元",
                        "standardScale": 2,
                        "standardSymbol": "¥",
                        "standardNumCode": "156",
                        "standardStrCode": "CNY"
                    }
                },
                "totalCount": 0,
                "useCount": 0,
                "entityId": "bd0f8774d3b2f55117c0",
                "platformId": "ID01kEZFXEVbtB",
                "source": "CALCULATION",
                "masterId": "",
                "index": 0,
                "visibility": {
                    "fullVisible": true,
                    "staffs": [],
                    "roles": [],
                    "departments": [],
                    "departmentsIncludeChildren": true
                },
                "visible": true,
                "ownerId": "",
                "operatorId": "DgM3w5DRQ401Iw:AvT3lntT8zzpWw",
                "sourceId": "",
                "selfPlannedConfigs": [],
                "rigidControlPassed": true,
                "controlCalcVersion": 45,
                "topDate": 0,
                "topFlag": 0,
                "flowCounts": {
                    "ID01kF1rbyyb9l": 0,
                    "ID01kFhKiRnHr1": 0,
                    "ID01kOSyUxQQph": 0,
                    "ID01n7V85rOrnN": 0,
                    "ID01nhH2bI4ODB": 0,
                    "ID01nhNh25iiOH": 0
                },
                "sourceMessage": ""
            }
        ],
        "total": 3  //查询到的业务对象总数
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议      |
| :--- | :--- | :--- |:----------|
| **412** | - | JSON请求参数不正确 | 请确认传参符合要求 |
