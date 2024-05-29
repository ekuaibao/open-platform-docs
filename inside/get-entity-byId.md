# 根据业务对象ID获取业务对象实体
获取某个业务对象实体信息。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/datalink/entity/byEntityId/$`entityId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **entityId** | String | 业务对象ID | 必填 | - | 通过 [获取业务对象](/docs/open-api/datalink/get-entity-list) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v2/datalink/entity/byEntityId/$ca0fa1576ca4c8d2c3c0?accessToken=ID01vx1u2Gy8Oj%3ATsI3tt8KjF4S7M' \
```

## 成功响应
```json
{
    "value": {
        "operateSource": "WRITE",
        "operatorId": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
        "pipeline": 1,
        "grayver": "9.101.0.0-prd",
        "dbVersion": 6,
        "threadId": "1058133",
        "version": 28,
        "active": true,
        "createTime": 1669803003864,
        "updateTime": 1696669538091,
        "name": "ZGY测试",
        "nameSpell": "ZGYCESHI",
        "corporationId": "TsI3tt8KjF4S7M",
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "ledgerIds": null,
        "plannedIds": null,
        "parentId": "",
        "code": "",
        "scoped": true,
        "source": "CUSTOM_CREATE",
        "multiCurrencyFlag": false,
        "actions": [
            {
                "id": "",
                "name": "停用/启用",
                "desc": "业务对象实例数据停启用状态切换",
                "allowedLayout": [],
                "type": "DEFAULT",
                "context": null,
                "createTime": 0,
                "active": true,
                "order": 0,
                "dataFilter": false,
                "conditions": []
            },
            {
                "id": "",
                "name": "详情",
                "desc": "点击可查看业务对象字段、台账等信息",
                "allowedLayout": [],
                "type": "DEFAULT",
                "context": null,
                "createTime": 0,
                "active": true,
                "order": 0,
                "dataFilter": false,
                "conditions": []
            },
            {
                "id": "",
                "name": "编辑",
                "desc": "点击可编辑业务对象实例数据字段信息",
                "allowedLayout": [],
                "type": "DEFAULT",
                "context": null,
                "createTime": 0,
                "active": true,
                "order": 0,
                "dataFilter": false,
                "conditions": []
            },
            {
                "id": "",
                "name": "更新",
                "desc": "重算业务对象数据实现下的台账信息",
                "allowedLayout": [],
                "type": "DEFAULT",
                "context": null,
                "createTime": 0,
                "active": true,
                "order": 0,
                "dataFilter": false,
                "conditions": []
            }
        ],
        "importOverrideStrategy": {
            "api": "CODE_DUPLI_OVERRIDE",
            "excel": "CODE_DUPLI_OVERRIDE"
        },
        "visibility": {
            "fullVisible": true,
            "staffs": [
                "TsI3tt8KjF4S7M:CSC3BLK0WwdD9M",
                "TsI3tt8KjF4S7M:ID_3qwQ411sslg",
                "TsI3tt8KjF4S7M:BwK3qyTA262t90",
                "TsI3tt8KjF4S7M:ID_3v_e_unqq10",
                "TsI3tt8KjF4S7M:1",
                "TsI3tt8KjF4S7M:egh3KRy6wx040_"
            ],
            "roles": [],
            "departments": [],
            "departmentsIncludeChildren": true
        },
        "type": "DIMENSION",
        "disableStrategy": "MANUAL_ADMIN",
        "maxUsageCount": 0,
        "writtenOffField": null,
        "fields": [
            {
                "name": "E_ca0fa1576ca4c8d2c3c0_name",
                "label": "名称",
                "type": "text",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": true,
                "systemField": false,
                "childrenOptional": {},
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 7
                },
                "regex": ""
            },
            {
                "name": "E_ca0fa1576ca4c8d2c3c0_code",
                "label": "编码",
                "type": "text",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": true,
                "systemField": false,
                "childrenOptional": {},
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 6
                },
                "regex": ""
            },
            {
                "name": "E_ca0fa1576ca4c8d2c3c0_Z业务文本1",
                "label": "Z业务文本1",
                "type": "text",
                "source": "dataLink",
                "optional": true,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "childrenOptional": {},
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 5
                },
                "regex": ""
            },
            {
                "name": "E_ca0fa1576ca4c8d2c3c0_Z业务数字1",
                "label": "Z业务数字1",
                "type": "number",
                "source": "dataLink",
                "optional": true,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "childrenOptional": {},
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 4
                },
                "scale": 0,
                "unit": ""
            },
            {
                "name": "E_ca0fa1576ca4c8d2c3c0_Z业务金额1",
                "label": "Z业务金额1",
                "type": "money",
                "source": "dataLink",
                "optional": true,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "childrenOptional": {},
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 3
                }
            },
            {
                "name": "E_ca0fa1576ca4c8d2c3c0_附件",
                "label": "附件",
                "type": "list",
                "source": "dataLink",
                "optional": true,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "childrenOptional": {},
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 2
                },
                "elemType": {
                    "type": "attachment"
                }
            },
            {
                "name": "E_ca0fa1576ca4c8d2c3c0_Z项目",
                "label": "项目",
                "type": "ref",
                "source": "dataLink",
                "optional": false,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "childrenOptional": {},
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 1
                },
                "entity": "basedata.Dimension.项目"
            },
            {
                "name": "E_ca0fa1576ca4c8d2c3c0_Z文本",
                "label": "Z文本",
                "type": "text",
                "source": "dataLink",
                "optional": true,
                "defaultValue": null,
                "formula": false,
                "index": false,
                "systemField": false,
                "childrenOptional": {},
                "calculation": {
                    "dependencies": [],
                    "dependenciesBy": [],
                    "order": 0
                },
                "regex": "none"
            } 
        ],
        "defaultMappingRuleId": null,
        "filterId": null,
        "id": "ca0fa1576ca4c8d2c3c0",
        "platformId": "ID01lcmb83nk6j",
        "details": null,
        "homePageVisibleIds": null,
        "homeVisibility": {
            "fullVisible": false,
            "staffs": [],
            "roles": [],
            "departments": [],
            "departmentsIncludeChildren": true
        },
        "exportVisibility": {
            "fullVisible": false,
            "staffs": [],
            "roles": [],
            "departments": [],
            "departmentsIncludeChildren": true
        },
        "ownerDepts": false,
        "showOnPage": true,
        "importMethod": [
            "excel",
            "api",
            "ebot",
            "flow",
            "directly"
        ],
        "allowRecordLog": true,
        "logFields": [
            "visibility",
            "E_ca0fa1576ca4c8d2c3c0_name",
            "active",
            "E_ca0fa1576ca4c8d2c3c0_code",
            "ownerId"
        ],
        "showBook": false,
        "allowAddSubType": true,
        "dataFilter": false
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **403** | - | 实体不存在 | 请确认 `entityId`（业务对象ID）是否存在 | 
