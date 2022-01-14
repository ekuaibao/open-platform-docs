# 获取业务对象实例列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/datalink"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填   | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **entityId**    | String | 业务对象ID  |  必填  | - | 通过[获取业务对象](/docs/open-api/datalink/get-entity-list)接口获取 |
| **start**       | Number | 数据开始数  | 必填   | 0 | 数据开始数 |
| **count**       | Number | 每页总数    | 必填   | 0 | 最大不能超过 `1000` |
| **startDate**   | String | 查询开始时间 | 非必填 | - | 按业务对象实例更新时间查询，格式：yyyy-MM-dd HH:mm:ss |
| **endDate**     | String | 查询结束时间 | 非必填 | - | 按业务对象实例更新时间查询，格式：yyyy-MM-dd HH:mm:ss |

:::tip
 - 只返回未停用的业务对象，如果业务对象已停用，则不返回。
 - `startDate` 查询规则是”大于等于“， `endDate` 查询规则是“小于等于”（”毫秒级时间戳“与“日期”转换的影响，导致取值结果往往是”小于“，没有等于）。
 - `start=0&count=10` 代表每页10条数据，第一页数据开始于 `start = 0` 开始，则第二页数据开始于 `start = 10`。
:::

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/datalink?accessToken=cxEbrzNJSA3A00&entityId=26d60b5d6dd47f435000&count=10&start=0'
```

## 成功响应
```json
{
    "count": 2,                                //总记录数
    "items": [
        {
            "id": "smcbSWavrE2c00",            //业务对象实例id
            "version": 3,                      //版本数
            "active": true,                    //是否启用
            "createTime": 1604995509639,
            "updateTime": 1604995509639,
            "name": "北京",                     //业务对象实例名称
            "nameSpell": "BEIJING",             //业务对象实例名称大写
            "code": "110",                      //业务对象实例编码
            "corporationId": "joQbMsJBw01c00",  //企业id
            "form": {                           //自定义业务对象实例参数表单数据
                "E_8c500bdb8c4de2404000_pen": "joQbMsJBw01c00:FHMbOsCZegmw00",            //自定义业务对象实例员工参数
                "E_8c500bdb8c4de2404000_city": "[{\"key\":\"497\",\"label\":\"沈阳市\"}]", //自定义业务对象实例城市参数
                "E_8c500bdb8c4de2404000_code": "110",           //自定义业务对象实例编码参数
                "E_8c500bdb8c4de2404000_name": "北京",          //自定义业务对象实例文本参数
                "E_8c500bdb8c4de2404000_time": 1604937600000,   //自定义业务对象实例时间参数
                "E_8c500bdb8c4de2404000_money": {               //自定义业务对象实例金额参数
                    "standard": "99.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                }
            },
            "ledgerAmount": null,
            "ledgerAmountModel": null,
            "totalCount": 0,   //总数量
            "useCount": 0,     //用户数量
            "entityId": "8c500bdb8c4de2404000", //业务对象业务对象id
            "platformId": "66wbMPbmLwsE00", 
            "source": "EXCEL", //来源
            "masterId": null, 
            "index": 0, 
            "visibility": {           //“参与人”配置
                "fullVisible": true,
                "staffs": null,       //参与人ID
                "roles": null,        //角色ID
                "departments": null,  //部门ID
                "departmentsIncludeChildren": true
            },
            "visible": true,   //是否全部人员可见
            "ownerId": "",     //“负责人”ID
            "operatorId": "joQbMsJBw01c00:gwUbMbLvg4pA00", //操作人ID
            "sourceId": "",    //来源ID
            "flowCounts": {} 
        },
        {
            "id": "soobSWavrE2g00",
            "version": 3,
            "active": true,
            "createTime": 1604995509693,
            "updateTime": 1604995509693,
            "name": "上海",
            "nameSpell": "SHANGHAI",
            "code": "120",
            "corporationId": "joQbMsJBw01c00",
            "form": {
                "E_8c500bdb8c4de2404000_pen": "joQbMsJBw01c00:gwUbMbLvg4pA00",
                "E_8c500bdb8c4de2404000_city": "[{\"key\":\"2147\",\"label\":\"深圳市\"}]",
                "E_8c500bdb8c4de2404000_code": "120",
                "E_8c500bdb8c4de2404000_name": "上海",
                "E_8c500bdb8c4de2404000_time": 1604937600000,
                "E_8c500bdb8c4de2404000_money": {
                    "standard": "88.00",
                    "standardUnit": "元",
                    "standardScale": 2,
                    "standardSymbol": "¥",
                    "standardNumCode": "156",
                    "standardStrCode": "CNY"
                }
            },
            "ledgerAmount": null,
            "ledgerAmountModel": null,
            "totalCount": 0,
            "useCount": 0,
            "entityId": "8c500bdb8c4de2404000",
            "platformId": "66wbMPbmLwsE00",
            "source": "EXCEL",
            "masterId": null,
            "index": 0,
            "visibility": {
                "fullVisible": true,
                "staffs": null,
                "roles": null,
                "departments": null,
                "departmentsIncludeChildren": true
            },
            "visible": true,
            "ownerId": "",
            "operatorId": "joQbMsJBw01c00:gwUbMbLvg4pA00",
            "sourceId": "",
            "flowCounts": {}
        }
    ]
}
```

## 失败响应
请确保 `业务对象ID` 真实存在，否则会返回如下响应：
```text
26d60b5d6dd47f4350100 对应的业务对象不存在
```

