# 查询员工证件信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1.1/staffs/certificate/$`staffId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.26.0**](/docs/open-api/notice/update-log#1260) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **staffId** | String | 员工ID或CODE | 必填 | - | **与 `type` 保持一致**，通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1.1/staffs/certificate/$Tdk3tgber501v0:88881009?accessToken=ID01uWvjfGaGXQ%3ATdk3tgber501v0&type=id'
```

## 成功响应
```json
{
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.102.0.0-prd",
            "dbVersion": 1,
            "threadId": "9964",
            "id": "Tdk3tgber501v0:88881009:ID_CARD",//证件信息ID
            "version": 1,
            "active": true,
            "createTime": 1700622634218,          //创建时间
            "updateTime": 1700622634218,          //更新时间
            "corporationId": "Tdk3tgber501v0",    //企业ID
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "staffId": "Tdk3tgber501v0:88881009", //员工ID
            "type": "ID_CARD",                    //证件类型，参数释义详见【新增或更新员工证件信息】接口
            "number": "130824199911110451",       //证件号码
            "validDate": 0,                       //证件有效期
            "extended": false,                    //是否长期有效，true：是  false：否
            "birthDate": 942249600000,            //出生日期，毫秒级时间戳
            "gender": "MALE",                     //性别，MALE：男  FEMALE：女
            "nationality": "",                    //国籍，参数释义详见【新增或更新员工证件信息】接口
            "issuancePlace": "",                  //签发地，参数释义详见【新增或更新员工证件信息】接口
            "modifyCount": 0,                     //更新次数，单一证件类型仅限更新1次
            "lastEngName": "",                    //英文姓(拼音)
            "firstEngName": ""                    //英文名(拼音)
        },
        {
            "pipeline": 1,
            "grayver": "9.102.0.0-prd",
            "dbVersion": 1,
            "threadId": "535",
            "id": "Tdk3tgber501v0:88881009:SERVICEMAN_CARD",
            "version": 1,
            "active": true,
            "createTime": 1700622667105,
            "updateTime": 1700622667105,
            "corporationId": "Tdk3tgber501v0",
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "staffId": "Tdk3tgber501v0:88881009",
            "type": "SERVICEMAN_CARD",
            "number": "234",
            "validDate": 0,
            "extended": true,
            "birthDate": 0,
            "gender": null,
            "nationality": "",
            "issuancePlace": "",
            "modifyCount": 0,
            "lastEngName": "ZHANG",
            "firstEngName": "FENG"
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议                                                       |
|:--------| :--- | :--- |:-----------------------------------------------------------|
| **412** | - | 未查找到此员工信息 | 请确认 `staffId`（员工ID或CODE）与 `type`（参数类型）保持一致 | 
