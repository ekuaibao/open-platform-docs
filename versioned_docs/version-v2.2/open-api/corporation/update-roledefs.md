# 更新角色

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/roledefs/$`roledefId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.3.0**](/updateLog/update-log#130) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **roledefId** | String | 角色ID | 必填 | - | 在合思桌面端「系统设置」>「角色管理」处查看<br/>通过 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | -  | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **name**        | String | 角色名称   | 必填 | - | 角色名称不能重复 |

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/roledefs/$ID_3BKMdBcP07g?accessToken=ID_3BKMdBcO$7g:xgJ3wajigF25H0&name=ZGY职级预置角色1' \
--header 'Content-Type: text/plain' \
--header 'content-type: application/json'
```

## 成功响应
```json
{
    "value": {
        "pipeline": 1,
        "grayver": "9.16.0.0:A",
        "id": "ID_3BKMdBcP07g",  //角色ID
        "version": 8,            //版本号
        "active": true,          //是否启用
        "createTime": 1648024446623,
        "updateTime": 1648024446623,
        "name": "ZGY职级预置角色1",          //角色名称
        "nameSpell": "ZGYZHIJIYUZHIJIAOSE", //名称拼音
        "corporationId": "xgJ3wajigF25H0",  //企业ID
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "roleGroupId": "xgJ3wajigF25H0:group:default",  //角色组ID
        "scope": {                                      //角色类型
            "name": "职级预置角色",                      //角色类型名称
            "properties": {                             //角色类型配置
                "职级预置": "basedata.Dimension.职级预置"
            }
        },
        "locked": false,
        "code": "CODE10",                    //角色编号
        "type": "ROLE",                      //类型
        "sourceType": "basedata.Dimension",  
        "sourceTypeValue": "basedata.Dimension.职级预置",
        "sourceName": "ZGY职级预置角色1",
        "purposeType": "organization.Staff",
        "purposeTypeValue": null,
        "purposeName": "ZGY职级预置角色1(反)",
        "sourceChannel": "MANUAL",          //角色数据来源，MANUAL:手动管理  API:API导入
        "sourcePlat": null,
        "sourceId": null,
        "suffixName": null
    }
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 此名称的角色已经存在，请更换名称 | 请确认 `name`（角色名称）是否已存在 | 


