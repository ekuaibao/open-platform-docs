# 获取企业对账单详情

import Control from "@theme/Control";

<Control
method="POST"
url="/mall-open-api/open-api/finance/bill/findBillDetailById"
/>

## Headers Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **Authorization** | String | 自建应用授权 | 必填 | - | 通过 [获取自建应用授权](/docs/open-api/getting-started/platform-auth) 获取 `accessToken`<br/>传参格式固定为：`Bearer` + **空格** + `accessToken` |
## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **data**      | List<Long\> | 对账单ID集合 | 必填 | - |   |
| **requestId** | String     | 请求标识     | 必填 | - | 任意填写即可，用于接口查询出错时，记录日志 |

## CURL
:::caution
- 本接口地址前缀固定为：`https://unity.ekuaibao.com`
:::
```json
curl --location --request POST 'http://unity-test.dev.ekuaibao.cn/api/mall-openapi/open-api/finance/bill/findBillDetailById' \
--header 'content-type: application/json' \
--header 'Authorization: Bearer apsinfepfVezqLquexNXxFmMaxWEvwhM' \
--data-raw '{
    "data":[171692490,171692606],
    "requestId": "12344"
}'
```

## 成功响应
```json
{
    "status": "00000",                             //"00000" 表示成功 其余标识失败
    "msg": "请求成功",                              //响应描述
    "time": 17,                                   //响应时间(毫秒位单位)
    "requestId": "233455",                        //请求标识
    "data": [                                     //企业对账单详情集合
        {
            "id": 171692490,                      //对账单ID
            "productTypeId": 2,                   //产品类型ID,参数含义见下方【产品类型对照表】
            "productTypeName": "机票",             //产品类型名称
            "orderNo": "F220517145630828937",     //订单号
            "ticketStatusName": "出票",            //票证状态名称
            "businessStatusName": "正常",          //业务状态名称
            "applyNumber": null,                  //申请单号
            "applyName": null,                    //申请单标题
            "productCategoryName": "国内",         //航线类型/商品类目
            "travelName": "武汉 天河国际机场-重庆 江北国际机场",    //行程/车程/城市
            "travelNum": "CZ6175",                //航班号/火车车次/酒店名称/车牌号
            "departTime": "2022-05-31 07:25",     //飞机起飞时间、火车发车时间、酒店入住时间、用车实际上车时间
            "arriveTime": "2022-05-31 08:55",     //飞机落地时间、火车到达时间、酒店离店时间、用车实际下车时间
            "ticketGrade": "N",                   //舱位/席别/房型/规格型号
            "positionDesc": "经济舱",              //舱位描述/商品单位
            "confirmTime": "2022-05-17 15:00:04", //确认时间
            "roomNum": 0,                         //房间数量/商品数量
            "roomDays": 0,                        //入住天数
            "companyName": "【测试】玛格丽特",       //公司名称
            "employeeNo": null,                   //人员工号
            "booker": "余代恒",                    //预定人
            "bookerEndDept": "【测试】玛格丽特",     //预定人末级部门
            "bookerAllDept": "【测试】玛格丽特",     //预定人全部部门
            "bookingTime": "2022-05-17 14:56:30", //预定时间
            "payTime": "2022-05-17 14:57:12",     //支付时间（入账时间）
            "travelPeople": "余代恒",              //出行人/入住人
            "travelEmployeeNo": null,             //出行人工号
            "travelEndDept": "【测试】玛格丽特",     //出行人末级部门
            "travelAllDept": "【测试】玛格丽特",     //出行人全部部门
            "couponPrice": 0.00,                  //活动金额（保留两位小数）
            "fuelCost": 120.00,                   //燃油费（保留两位小数）
            "machineCost": 50.00,                 //机建费（保留两位小数）
            "taxationPrice": 170.00,              //税费小计（保留两位小数）
            "ticketPrice": 330.00,                //票面价/房价（保留两位小数）
            "servicePrice": 10.00,                //服务费（保留两位小数）
            "prePayMoney": 0.00,                  //预存支付金额（保留两位小数）
            "creditPayMoney": 510.00,             //授信支付金额（保留两位小数）
            "wechatPayMoney": 0.00,               //微信支付金额（保留两位小数）
            "alipayPayMoney": 0.00,               //支付宝支付金额（保留两位小数）
            "personPayMoney": 0.00,               //个人钱包支付金额（保留两位小数）
            "actualBackMoney": 0.00,              //客户实退金额（保留两位小数）
            "totalPrice": 510.00,                 //合计（保留两位小时）
            "endorseNo": "F220517145630828937",   //最原始订单号
            "parentOrderNo": "F220517145630828937", //父订单号
            "bookerNumber": null,                 //预定人工号
            "paymentMethod": "企业",               //付款方式
            "payWayName": "后结账户",               //支付账户
            "costUnderDep": "【测试】玛格丽特",      //成本归属部门
            "legalEntity": null                   //法人实体
        },
        {
            "id": 171692606,
            "productTypeId": 2,
            "productTypeName": "机票",
            "orderNo": "F220520122645161191",
            "ticketStatusName": "出票",
            "businessStatusName": "正常",
            "applyNumber": null,
            "applyName": null,
            "productCategoryName": "国内",
            "travelName": "北京 大兴国际机场-上海 虹桥国际机场",
            "travelNum": "CA1885",
            "departTime": "2022-09-07 15:00",
            "arriveTime": "2022-09-07 17:20",
            "ticketGrade": "G",
            "positionDesc": "超级经济舱",
            "confirmTime": "2022-05-20 12:26:45",
            "roomNum": 0,
            "roomDays": 0,
            "companyName": "【测试】玛格丽特",
            "employeeNo": null,
            "booker": "张志伟",
            "bookerEndDept": "【测试】玛格丽特",
            "bookerAllDept": "【测试】玛格丽特",
            "bookingTime": "2022-05-20 12:26:45",
            "payTime": "2022-05-20 12:26:47",
            "travelPeople": "李欢",
            "travelEmployeeNo": null,
            "travelEndDept": "部门1.1",
            "travelAllDept": "【测试】玛格丽特/部门1/部门1.1",
            "couponPrice": 0.00,
            "fuelCost": 0.00,
            "machineCost": 0.00,
            "taxationPrice": 0.00,
            "ticketPrice": 320.00,
            "servicePrice": 10.00,
            "prePayMoney": 0.00,
            "creditPayMoney": 330.00,
            "wechatPayMoney": 0.00,
            "alipayPayMoney": 0.00,
            "personPayMoney": 0.00,
            "actualBackMoney": 0.00,
            "totalPrice": 330.00,
            "endorseNo": "F220520122645161191",
            "parentOrderNo": "F220520122645161191",
            "bookerNumber": null,
            "paymentMethod": "企业",
            "payWayName": "后结账户",
            "costUnderDep": "【测试】玛格丽特",
            "legalEntity": null
        }
    ]
}
```

## 失败响应
出现下面错误时，请检查 `Authorization` 传参是否正确：
```json
{
  "errorCode": 401,
  "errorMessage": "请先登录",
  "errorDetails": null,
  "code": null,
  "data": null
}
```

出现下面错误时，请检查 `data` 、`requestId` 传参是否正确：
```json
{
    "status": "S500",
    "msg": "请求失败",
    "data": null,
    "requestId": null,
    "time": 1654161102727
}
```

`data` 所传对账单ID错误或不存在时，返回空：
```json
{
    "status": "00000",
    "msg": "请求成功",
    "data": [],
    "time": 17,
    "requestId": "233455"
}
```

## 返回参数列表
| 字段名称 | 类型 | 是否必返回 | 备注
| :--- | :--- | :--- | :--- |
| **status**    | String | 是 | "00000" 表示成功 其余标识失败 |
| **msg**       | String | 是 | 响应描述                    |
| **data**      | Data   | 是 | 企业账单集合                 |
| **time**      | Long   | 是 | 响应时间(毫秒位单位)          |
| **requestId** | String | 是 | 请求标识                    |

## 产品类型对照表
| productTypeId | 名称 
| :--- | :--- |
| **1**  | 酒店  | 
| **2**  | 机票  | 
| **3**  | 火车  | 
| **4**  | 用车  |
| **5**  | 餐饮  |
| **6**  | 通用  |
| **7**  | 保险  |
| **8**  | 虚拟卡 |
| **10** | 企业购 |

## 对账单详情（data）参数列表
| 字段名称 | 类型 | 是否必返回 | 备注
| :--- | :--- | :--- | :--- |
| **productTypeId**       | Integer     | 是 | 产品类型ID，见上方【产品类型对照表】 |
| **productTypeName**     | String      | 是 | 产品类型名称                 |
| **orderNo**             | String      | 是 | 订单号                      |
| **ticketStatusName**    | String      | 是 | 票证状态名称                 |
| **businessStatusName**  | String      | 是 | 业务状态名称                 |
| **applyNumber**         | String      | 否 | 申请单号                    |
| **applyName**           | String      | 否 | 申请单标题                   |
| **productCategoryName** | String      | 是 | 航线类型/商品类目             |
| **travelName**          | String      | 否 | 行程/车程/城市               |
| **travelNum**           | String      | 否 | 航班号/火车车次/酒店名称/车牌号 |
| **departTime**          | String      | 否 | 飞机起飞时间、火车发车时间、酒店入住时间、用车实际上车时间<br/>**yyyy-MM-dd HH:mm:ss** |
| **arriveTime**          | String      | 否 | 飞机落地时间、火车到达时间、酒店离店时间、用车实际下车时间<br/>**yyyy-MM-dd HH:mm:ss** |
| **ticketGrade**         | String      | 否 | 舱位/席别/房型/规格型号 |
| **positionDesc**        | String      | 否 | 舱位描述/商品单位 |
| **confirmTime**         | String      | 否 | 确认时间<br/>**yyyy-MM-dd HH:mm:ss** |
| **roomNum**             | Integer     | 否 | 房间数量/商品数量 |
| **roomDays**            | Integer     | 否 | 入住天数 |
| **companyName**         | String      | 是 | 公司名称 |
| **employeeNo**          | String      | 是 | 人员工号 |
| **booker**              | String      | 否 | 预定人 |
| **bookerEndDept**       | String      | 否 | 预定人末级部门 |
| **bookerAllDept**       | String      | 否 | 预定人全部部门 |
| **bookingTime**         | String      | 否 | 预定时间 |
| **payTime**             | String      | 否 | 支付时间（入账时间） |
| **travelPeople**        | String      | 否 | 出行人/入住人 |
| **travelEmployeeNo**    | String      | 否 | 出行人工号 |
| **travelEndDept**       | String      | 否 | 出行人末级部门   |
| **travelAllDept**       | String      | 否 | 出行人全部部门 |
| **couponPrice**         | BigDecimal  | 是 | 活动金额（保留两位小数） |
| **fuelCost**            | BigDecimal  | 是 | 燃油费（保留两位小数） |
| **machineCost**         | BigDecimal  | 是 | 机建费（保留两位小数） |
| **taxationPrice**       | BigDecimal  | 是 | 税费小计（保留两位小数） |
| **ticketPrice**         | BigDecimal  | 是 | 票面价/房价（保留两位小数） |
| **servicePrice**        | BigDecimal  | 是 | 服务费（保留两位小数） |
| **prePayMoney**         | BigDecimal  | 是 | 预存支付金额（保留两位小数） |
| **creditPayMoney**      | BigDecimal  | 是 | 授信支付金额（保留两位小数） |
| **wechatPayMoney**      | BigDecimal  | 是 | 微信支付金额（保留两位小数） |
| **alipayPayMoney**      | BigDecimal  | 是 | 支付宝支付金额（保留两位小数） |
| **personPayMoney**      | BigDecimal  | 是 | 个人钱包支付金额（保留两位小数） |
| **actualBackMoney**     | BigDecimal  | 是 | 客户实退金额（保留两位小数） |
| **totalPrice**          | BigDecimal  | 是 | 合计（保留两位小时） |
| **endorseNo**           | String      | 否 | 最原始订单号 |
| **parentOrderNo**       | String      | 否 | 父订单号 |
| **bookerNumber**        | String      | 否 | 预定人工号 |
| **paymentMethod**       | String      | 是 | 付款方式 |
| **payWayName**          | String      | 是 | 支付账户 |
| **costUnderDep**        | String      | 否 | 成本归属部门 |
| **legalEntity**         | String      | 否 | 法人实体 |

