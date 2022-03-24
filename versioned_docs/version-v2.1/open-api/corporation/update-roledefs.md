# 更新角色

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/roledefs/$`roledefId`"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **roledefId** | String | 角色ID | 必填 | - | 在易快报桌面端「系统设置」>「角色管理」处查看 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | -  | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **name**        | String | 角色名称   | 必填 | - | 角色名称不能重复 |

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/roledefs/ID_3BKMdBcP07g?accessToken=ID_3BKMdBcO$7g:xgJ3wajigF25H0&name=ZGY职级预置角色1' \
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
        "name": "ZGY职级预置角色1",     //角色名称
        "nameSpell": "ZGYZHIJIYUZHIJIAOSE", //名称拼音
        "corporationId": "xgJ3wajigF25H0", //企业ID
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "roleGroupId": "xgJ3wajigF25H0:group:default",  //角色组ID
        "scope": {    //角色类型
            "name": "职级预置角色",  //角色类型名称
          "properties": {         //角色类型配置
            "职级预置": "basedata.Dimension.职级预置"
          }
        },
        "locked": false,
        "code": "CODE10", //角色编号
        "type": "ROLE",  //类型
        "sourceType": "basedata.Dimension",  //角色类型来源
        "sourceTypeValue": "basedata.Dimension.职级预置",
        "sourceName": "ZGY职级预置角色1",
        "purposeType": "organization.Staff",
        "purposeTypeValue": null,
        "purposeName": "ZGY职级预置角色1(反)",
        "sourceChannel": "MANUAL",
        "sourcePlat": null,
        "sourceId": null,
        "suffixName": null
    }
}
```

## 失败响应
角色名称已存在时，报错如下：
```json
{
  "errorCode": 412,
  "errorMessage": "此名称的角色已经存在，请更换名称",
  "errorDetails": null,
  "code": null,
  "data": null
}
```

