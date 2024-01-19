# 停启用审批矩阵

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2/matrix/active/$`id`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.27.0**](/docs/open-api/notice/update-log#1270) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **id** | String | 审批矩阵ID | 必填 | - | 通过 [获取企业下所有审批矩阵](/docs/open-api/matrix/get-matrixs) 获取 |


## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **active**      | Boolean | 停用或启用标识	| 必填 | - | `true`：启用&emsp; &emsp;`false`：停用 |
| **accessToken** | String | 认证token	    | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |



## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/matrix/active/$ID01wh4O1Yl1Cv?active=true&accessToken=ID01wiXBgNwwbR%3APCx3rwm3aA00qM'
```

## 成功响应
```json
{
    "value":{
        "pipeline": 1,
        "grayver": "9.95.0.0-prd",
        "dbVersion": 0,
        "threadId": "",
        "id": "ID01p4Q9vzOnAr",                 //审批矩阵ID
        "version": 3,
        "active": true,                         //是否有效（或者理解为是否被删除） true：有效，false：无效
        "createTime": 1682322635458,            //创建时间(毫秒级时间戳)
        "updateTime": 1682322659786,            //更新时间(毫秒级时间戳)
        "name": "测试矩阵",                      //审批矩阵名称
        "nameSpell": "CESHIJUZHEN",             //名称大写拼音
        "corporationId": "Tdk3tgber501v0",      //企业ID
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "fieldConfig": [                        //条件字段配置
            {
                "id": "ID01p4Qa2pkden",         //条件字段配置ID
                "type": "organization.Staff",   //条件字段类型
                "field": "submitterId",         //条件字段名称
                "operator": "=",                //逻辑运算符：金额字段、数字字段逻辑符可选≥><≤，其他字段默认为等于
                "containChild": false           //是否包含子级
            },
            {
                "id": "ID01p4Qa2pkduT",
                "type": "flow.FeeType",
                "field": "feeTypeId",
                "operator": "=",
                "containChild": false
            },
            {
                "id": "ID01p4Qa2pkdLp",
                "type": "organization.Department",
                "field": "expenseDepartment",
                "operator": "=",
                "containChild": false
            }
        ],
        "resultConfig": [                         //结果字段配置
            {
                "id": "ID01p4Qa2pkeir",           //结果字段配置ID
                "name": "业务审批",                //结果字段配置名称
                "fieldConfig": [                 //特有条件配置
                    {
                        "id": "ID01p4Qa2pke1V",    //特有条件配置字段ID  
                        "type": "flow.MoneyModel", //特有条件配置字段类型
                        "field": "expenseMoney",   //特有条件配置字段名称  
                        "operator": ">=",          //逻辑运算符：金额字段、数字字段逻辑符可选≥><≤，其他字段默认为等于
                        "containChild": false      //是否包含子级
                    }
                ]
            },
            {
                "id": "ID01p4Qa2pkePt",
                "name": "财务审批",
                "fieldConfig": [
                    {
                        "id": "ID01p4Qa2pkeyX",
                        "type": "flow.MoneyModel",
                        "field": "expenseMoney",
                        "operator": "<=",
                        "containChild": false
                    }
                ]
            },
            {
                "id": "ID01p4Qa2pkf5Z",
                "name": "财务审批2",
                "fieldConfig": []
            }
        ],
        "indexVersion": 1,
        "ownerId": "Tdk3tgber501v0:AvT3lntT8zzpWw",     //所属员工ID
        "editorId": "Tdk3tgber501v0:AvT3lntT8zzpWw"     //编辑员工ID
    }
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
|:--------| :--- |:---|:-----|
| **400** | - | 无效的审批矩阵  | 请检查**【审批矩阵ID】**是否正确  |
