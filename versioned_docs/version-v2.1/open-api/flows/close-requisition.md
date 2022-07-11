# 关闭申请事项

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/requisition/closeRequisition/[`ids`]"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.8.0**](/docs/open-api/notice/update-log#180) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids**   | Array | 申请事项ID | 必填 | - | [获取申请事项](/docs/open-api/flows/get-requisition-all) |


## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [授权接口](/docs/open-api/getting-started/auth) 获取 |

## CURL
```shell
curl --location -g --request PUT 'https://app.ekuaibao.com/api/openapi/v1/requisition/closeRequisition/[ID_3BTtR548KcM,ID_3BTtR54K_cM]?accessToken=ID_3KGmoYP01Lv:dfX3BRy2ms0m6g'
```

## 成功响应
```json
{
    "value": "关闭申请事项，成功关闭了[2]条"
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | 关闭申请事项,传入的ids查询不到数据 | 确认申请事项ID是否正确或存在 | 
| **200** | - | 关闭申请事项，成功关闭了[0]条,未删除成功的原因为:<br/>1、code为[S22000005],id为[ID_3BTtR548KcM]的申请单已关闭或删除，无法使用。<br/>2、code为[S22000006],id为[ID_3BTtR54K_cM]的申请单已关闭或删除，无法使用。 | 确认申请事项是否已关闭或删除 | 
