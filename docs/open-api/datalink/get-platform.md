# 获取自建应用列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/datalink/getPlatform"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.7.0**](/updateLog/update-log#170) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填   | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **start**       | Number | 数据开始数  | 非必填  | 0 | 数据开始数 |
| **count**       | Number | 每页总数    | 非必填 | 20 | 最大不能超过 `100` |

:::tip
- 只返回 **启用** 的自建应用，如果自建应用已停用，则不返回。
- `start=0&count=10` 代表每页10条数据，第一页数据开始于 `start = 0` ，则第二页数据开始于 `start = 10`。
:::

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/datalink/getPlatform?accessToken=ID_3IKBuO50jT0:xgJ3wajigF25H0&start=0&count=10' \
--header 'content-type: application/json'
```

## 成功响应
```json
{
    "count": 2,
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.20.0.0:A",
            "version": 3,
            "active": true,                         //是否启用
            "createTime": 1649405531157,            //创建时间
            "updateTime": 1649748781020,            //更新时间
            "name": "测试",                         //应用名称
            "nameSpell": "CESHI",
            "code": "",
            "corporationId": "xgJ3wajigF25H0",      //企业ID
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "icon": null,                           //应用图标
            "id": "ID_3D5AKtl07$g",                 //应用ID
            "importMethod": [],                     //数据导入方式
            "adminIds": [                           //管理员ID
                "xgJ3wajigF25H0:dbc3wajigF1UH0",
                "xgJ3wajigF25H0:Xfi3D10oPJ6DqM"
            ],
            "type": "DATA_LINK",                    //应用类别(DATA_LINK：业务对象)
            "groupType": "NORMAL",                  //应用类型(NORMAL：正常类型)
            "properties": null,                     //属性
            "desc": "",                             //备注
            "source": "CUSTOM_CREATE"               //来源（CUSTOM_CREATE：用户自建）
        },
        {   //“消费明细” 数据为系统预置应用。
            "pipeline": 1,
            "grayver": "9.8.0.0:A",
            "version": 1,
            "active": true,                         //是否启用
            "createTime": 1641969769414,            //创建时间
            "updateTime": 1641969769414,            //更新时间    
            "name": "消费明细",                      //应用名称
            "nameSpell": "XIAOFEIMINGXI",
            "code": "",
            "corporationId": "xgJ3wajigF25H0",      //企业ID
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "icon": null,                           //应用图标
            "id": "ID_3w9HsnE2jq0",                 //应用ID
            "importMethod": [],                     //数据导入方式
            "adminIds": [],                         //管理员ID
            "type": "DETAILS",                      //应用类别(DETAILS：明细<系统预置类型>)
            "groupType": "SPECIAL",                 //应用类型(SPECIAL：特殊类型)
            "properties": null,                     //属性
            "desc": "",                             //备注
            "source": "CUSTOM_CREATE"               //来源（CUSTOM_CREATE：用户自建）
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | count参数不能大于100 | `count`（每页总数）不允许大于 `100`  | 


