# 同步订单信息

同步第三方商城订单信息到费控。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/travel/costCenter/synTravelOrder"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.23.0**](/docs/open-api/notice/update-log#1230) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

##  Body Parameters

| 名称                                  | 类型     | 描述           | 是否必填 | 默认值 | 备注                                                                             |
|:------------------------------------|:-------|:-------------|:-----|:----|:-------------------------------------------------------------------------------| 
| **data**                            | Array  | 第三方商城订单数组    | 必填   | -   | 第三方商城订单数组                                                                      |
| **&emsp; ∟ initialOriginalOrderNo** | String | 商城拆分前的最原始订单号 | 非必填  | -   | 商城拆分前的最原始订单号	                                                                  |
| **&emsp; ∟ initialParentOrderNo**   | String | 商城拆分前的父订单号   | 非必填  | -   | 商城拆分前的父订单号	                                                                    |
| **&emsp; ∟ initialOrderNo**         | String | 商城拆分前的订单号	   | 非必填  | -   | 商城拆分前的订单号		                                                                    |
| **&emsp; ∟ originalOrderNo**        | String | 最原始票号	       | 非必填  | -   | 最原始票号		                                                                        |
| **&emsp; ∟ parentOrderNo**          | String | 父订单号	        | 非必填  | -   | 父订单号		                                                                         |
| **&emsp; ∟ travelInfoId**           | String | 行程id	        | 非必填  | -   | 行程id		                                                                         |
| **&emsp; ∟ orderNo**                | String | 订单号          | 非必填  | -   | 商城拆分后的订单号		                                                                    |
| **&emsp; ∟ orderSummary**           | String | 订单概述	        | 非必填  | -   | 取值：`出发地-达到地`	                                                                  |
| **&emsp; ∟ orderDate**              | String | 订单日期         | 非必填  | -   | 毫秒级时间戳	                                                                        |
| **&emsp; ∟ orderAmount**            | String | 订单金额         | 非必填  | -   | 取值：`实付金额`	                                                                     |
| **&emsp; ∟ orderStatus**            | String | 订单状态         | 非必填  | -   | 出票、改签、退票、确认订单、退订、离店	                                                           |
| **&emsp; ∟ ticketNumber**           | String | 票号           | 非必填  | -   | 票号	                                                                            |
| **&emsp; ∟ certificateType**        | String | 证件类型         | 非必填  | -   | 身份证、护照等	                                                                       |
| **&emsp; ∟ certificateInfo**        | String | 证件信息         | 非必填  | -   | 证件号	                                                                           |
| **&emsp; ∟ airlineCompany**         | String | 航空公司         | 非必填  | -   | 航空公司	                                                                          |
| **&emsp; ∟ flightNumber**           | String | 航班号          | 非必填  | -   | 航班号	                                                                           |
| **&emsp; ∟ placeOfDeparture**       | String | 出发地          | 非必填  | -   | 城市code	                                                                        |
| **&emsp; ∟ destination**            | String | 到达地          | 非必填  | -   | 城市code	                                                                        |
| **&emsp; ∟ departureTime**          | String | 出发时间         | 非必填  | -   | 出发时间	                                                                          |
| **&emsp; ∟ arrivalTime**            | String | 到达时间         | 非必填  | -   | 到达时间	                                                                          |
| **&emsp; ∟ departureAirport**       | String | 出发机场         | 非必填  | -   | 机场名字	                                                                          |
| **&emsp; ∟ arrivalAirport**         | String | 到达机场         | 非必填  | -   | 机场名字	                                                                          |
| **&emsp; ∟ cabinType**              | String | 舱位类型         | 非必填  | -   | 头等舱等	                                                                          |
| **&emsp; ∟ vehicleType**            | String | 车型           | 非必填  | -   | 经济型、舒适型、商务型、豪华型	                                                               |
| **&emsp; ∟ trainSeat**              | String | 火车席位         | 非必填  | -   | 一等座、二等座、卧铺等	                                                                   |
| **&emsp; ∟ hotelName**              | String | 酒店名称         | 非必填  | -   | 例如：`七天酒店`	                                                                     |
| **&emsp; ∟ hotelAddress**           | String | 酒店地址         | 非必填  | -   | 例如：`北京中关村七天酒店`	                                                                |
| **&emsp; ∟ roomType**               | String | 房型           | 非必填  | -   | 大床、标准等	                                                                        |
| **&emsp; ∟ departureStation**       | String | 出发车站         | 非必填  | -   | 例如：`北京西`	                                                                      |
| **&emsp; ∟ arrivalStation**         | String | 到达车站         | 非必填  | -   | 例如：`南昌站`	                                                                      |
| **&emsp; ∟ trainNumber**            | String | 火车车次         | 非必填  | -   | 例如：`G2020`、`K180`	                                                             |
| **&emsp; ∟ orderType**              | String | 订单类型         | 非必填  | -   | 通用：`common`<br/>酒店：`hotel`<br/>飞机：`flight`<br/>火车：`train`<br/>用车：`taxi`<br/>用餐：`meal`	 |
| **&emsp; ∟ bookingPeople**          | String | 订票人          | 非必填  | -   | 订票人saasid                                                                      |
| **&emsp; ∟ travelPeople**           | Array  | 出行人          | 非必填  | -   | saasid数组，例如：`["id1", "id2", "id3"]`                                            |
| **&emsp; ∟ accommodation**          | String | 住宿地          | 非必填  | -   | 城市code                                                                         |
| **&emsp; ∟ checkInDate**            | String | 入住日期         | 非必填  | -   | 毫秒级时间戳	                                                                        |
| **&emsp; ∟ departureDate**          | String | 离店日期         | 非必填  | -   | 毫秒级时间戳	                                                                        |
| **&emsp; ∟ orderCategory**          | String | 订单类别	        | 非必填  | -   | 主订单、改签、退订、（酒店）确认订单、退订、离店		                                                     |
| **&emsp; ∟ applicationNo**          | String | 申请单编号	       | 非必填  | -   | 有就传		                                                                          |
| **&emsp; ∟ isExcess**               | String | 是否超标         | 非必填  | -   | 是、否（汉字）	                                                                       |
| **&emsp; ∟ excessReason**           | String | 超标原因	        | 非必填  | -   | 超标原因		                                                                         |
| **&emsp; ∟ travelType**             | String | 出行类型         | 非必填  | -   | 因私、因公	                                                                         |
| **&emsp; ∟ paymentMethod**          | String | 支付方式         | 非必填  | -   | 个人支付、企业支付                                                                      |
| **&emsp; ∟ orderRemark**            | String | 订单备注	        | 非必填  | -   | 可为空	                                                                           |
| **&emsp; ∟ carNumber**              | String | 车牌号          | 非必填  | -   | 用车车牌号                                                                          |
| **&emsp; ∟ travelMode**             | String | 出行方式         | 非必填  | -   | 立即用车、预约用车、接机、送机、接站、送站、包车	                                                      |
| **&emsp; ∟ creativeTime**           | String | 创建时间         | 非必填  | -   | 订单创建时间	                                                                        |
| **&emsp; ∟ productStatus**          | String | 产品状态	        | 非必填  | -   | 不传，订单状态		                                                                      |
| **&emsp; ∟ ticketType**             | String | 票种类型         | 非必填  | -   | 国内或国际	                                                                         |
| **&emsp; ∟ tripCode**               | String | 行程代码         | 非必填  | -   | 三字码	                                                                           |
| **&emsp; ∟ cabinDetail**            | String | 舱位描述         | 非必填  | -   | 针对舱位、坐席或房间的附加描述信息	                                                             |
| **&emsp; ∟ ticketPrice**            | String | 票面价          | 非必填  | -   | 票面价	                                                                           |
| **&emsp; ∟ roomPrice**              | String | 房间价          | 非必填  | -   | 房间价	                                                                           |
| **&emsp; ∟ coupon**                 | String | 优惠金额         | 非必填  | -   | 优惠券金额	                                                                         |
| **&emsp; ∟ oilFee**                 | String | 燃油费          | 非必填  | -   | 燃油费	                                                                           |
| **&emsp; ∟ airportBuildFee**        | String | 机建费	         | 非必填  | -   | 机建费		                                                                          |
| **&emsp; ∟ taxTotalPrice**          | String | 税费小计         | 非必填  | -   | 先不传	                                                                           |
| **&emsp; ∟ ticketTotalPrice**       | String | 票面小计         | 非必填  | -   | 票价+服务费+基建燃油费	                                                                  |
| **&emsp; ∟ ticketSureTime**         | String | 出票时间	        | 非必填  | -   | 出票时间（确认时间）		                                                                   |
| **&emsp; ∟ totalPrice**             | String | 全价价格	        | 非必填  | -   | 先不传		                                                                          |
| **&emsp; ∟ roomQuantity**           | String | 房间数量         | 非必填  | -   | 房间数量	                                                                          |
| **&emsp; ∟ liveDay**                | String | 入住天数	        | 非必填  | -   | 入住天数		                                                                         |
| **&emsp; ∟ roomDays**               | String | 间夜数          | 非必填  | -   | 间夜数 = 入住天数 * 房间数量	                                                             |
| **&emsp; ∟ phoneNo**                | String | 出行人电话        | 非必填  | -   | 出行人电话（酒店没有）	                                                                   |
| **&emsp; ∟ invoiceSide**            | String | 开票方	         | 非必填  | -   | 开票方		                                                                          |
| **&emsp; ∟ productDetail**          | String | 产品具体内容	      | 非必填  | -   | 产品具体内容		                                                                       |
| **&emsp; ∟ productName**            | String | 产品名称         | 非必填  | -   | 产品名称	                                                                          |
| **&emsp; ∟ isInvoice**              | String | 是否已开票        | 非必填  | -   | 是否已开票	                                                                         |
| **&emsp; ∟ invoiceType**            | String | 开票类型         | 非必填  | -   | 开票类型	                                                                          |
| **&emsp; ∟ refundServiceFee**       | String | 退票服务费        | 非必填  | -   | 退票服务费（商城不传）	                                                                   |
| **&emsp; ∟ reBookingServiceFee**    | String | 改签服务费        | 非必填  | -   | 改签服务费（商城不传）	                                                                   |
| **&emsp; ∟ refund**                 | String | 应退金额	        | 非必填  | -   | 应退金额		                                                                         |
| **&emsp; ∟ rebookQueryFee**         | String | 改签金额         | 非必填  | -   | 改签金额（差价）	                                                                      |
| **&emsp; ∟ dealType**               | String | 支付科目         | 非必填  | -   | 个人或企业	                                                                         |
| **&emsp; ∟ payType**                | String | 结算方式	        | 非必填  | -   | 月结、现付		                                                                        |
| **&emsp; ∟ serviceFee**             | String | 服务费          | 非必填  | -   | 出票服务费	                                                                         |
| **&emsp; ∟ insuranceNumber**        | String | 保险份数         | 非必填  | -   | 保险份数	                                                                          |
| **&emsp; ∟ insuranceFee**           | String | 保险费	         | 非必填  | -   | 保险费		                                                                          |
| **&emsp; ∟ amount**                 | String | 应付金额	        | 非必填  | -   | 应付金额		                                                                         |
| **&emsp; ∟ realAmount**             | String | 实付金额	        | 非必填  | -   | 实付金额		                                                                         |
| **&emsp; ∟ personalAmount**         | String | 个人支付金额	      | 非必填  | -   | 个人支付金额		                                                                       |
| **&emsp; ∟ deliveryFee**            | String | 配送费	         | 非必填  | -   | 配送费		                                                                          |
| **&emsp; ∟ tripType**               | String | 出行人类型        | 非必填  | -   | 内部或外部，不传	                                                                      |
| **&emsp; ∟ bookingPlatform**        | String | 订票平台         | 非必填  | -   | 例如：`合思商城`	                                                                     |
| **&emsp; ∟ planGetOnTime**          | String | 计划出发时间	      | 非必填  | -   | 毫秒级时间戳		                                                                       |
| **&emsp; ∟ planGetOnDeparture**     | String | 计划上车地点	      | 非必填  | -   | 计划上车地点		                                                                       |
| **&emsp; ∟ planGetOffArrive	**      | String | 计划下车地点	      | 非必填  | -   | 计划下车地点		                                                                       |
| **&emsp; ∟ realGetOnDeparture**     | String | 实际出发地点	      | 非必填  | -   | 实际出发地点		                                                                       |
| **&emsp; ∟ realGetOffArrive**       | String | 实际到达地点		     | 非必填  | -   | 实际到达地点			                                                                      |
| **&emsp; ∟ extensionInfo**          | Object | 扩展字段         | 非必填  | -   | json格式	                                                                        |
| **&emsp; ∟ flightGrade**            | String | 机票舱等         | 非必填  | -   | 机票舱等                                                                           |
| **&emsp; ∟ trainGrade**             | String | 火车坐席         | 非必填  | -   | 火车坐席	                                                                          |
| **&emsp; ∟ discount**               | String | 机票折扣         | 非必填  | -   | 机票折扣	                                                                          |
| **&emsp; ∟ hotelStar**              | String | 酒店星级         | 非必填  | -   | 酒店星级	                                                                          |


## CURL
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="通用" label="通用" default>

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1/travel/costCenter/synTravelOrder?accessToken=ID01w4CBdVrKfJ%3AxgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data '{
    "data": [
        {
            "initialOriginalOrderNo": "G230814182114996665",
            "initialParentOrderNo": "G230814182114996665",
            "initialOrderNo": "G230814182114996665",
            "originalOrderNo": "G230814182114996665-G230814182114996665-null",
            "parentOrderNo": "G230814182114996665",
            "travelInfoId": null,
            "orderNo": "G230814182114996665-G230814182114996665-null",
            "orderSummary": null,
            "orderDate": 1692008474376,
            "orderAmount": null,
            "orderStatus": "已收款",
            "ticketNumber": "G230814182114996665",
            "certificateType": "其他",
            "certificateInfo": null,
            "airlineCompany": null,
            "flightNumber": null,
            "placeOfDeparture": null,
            "actualPlaceOfDeparture": null,
            "destination": null,
            "actualDestination": null,
            "departureTime": null,
            "arrivalTime": null,
            "departureAirport": null,
            "arrivalAirport": null,
            "cabinType": null,
            "vehicleType": null,
            "trainSeat": null,
            "hotelName": null,
            "hotelAddress": null,
            "roomType": null,
            "departureStation": null,
            "arrivalStation": null,
            "trainNumber": null,
            "orderType": "common",
            "bookingPeople": "xgJ3wajigF25H0:dbc3wajigF1UH0",
            "travelPeople": [
                "xgJ3wajigF25H0:dbc3wajigF1UH0"
            ],
            "accommodation": null,
            "actualAccommodation": null,
            "checkInDate": null,
            "departureDate": null,
            "orderCategory": "已收款",
            "applicationNo": "",
            "isExcess": "否",
            "excessReason": "",
            "travelType": "因公",
            "paymentMethod": "企业支付",
            "orderRemark": null,
            "carNumber": null,
            "travelMode": null,
            "creativeTime": 1692008474376,
            "productStatus": null,
            "ticketType": "国内",
            "tripCode": null,
            "cabinDetail": null,
            "ticketPrice": "920.00",
            "roomPrice": null,
            "coupon": "0.00",
            "oilFee": null,
            "airportBuildFee": null,
            "taxTotalPrice": null,
            "ticketTotalPrice": "920.00",
            "ticketSureTime": null,
            "totalPrice": null,
            "roomQuantity": null,
            "liveDay": null,
            "roomDays": null,
            "phoneNo": null,
            "invoiceSide": null,
            "productDetail": "迪克星之酒店永福度假村",
            "isInvoice": null,
            "invoiceType": null,
            "refundServiceFee": null,
            "reBookingServiceFee": null,
            "refund": "0.00",
            "rebookQueryFee": null,
            "dealType": null,
            "payType": "",
            "serviceFee": "0.00",
            "insuranceNumber": null,
            "insuranceFee": null,
            "amount": "920.00",
            "realAmount": "920.00",
            "deliveryFee": null,
            "tripType": null,
            "bookingPlatform": "合思商城",
            "planGetOnTime": null,
            "planGetOnDeparture": null,
            "planGetOffArrive": null,
            "realGetOnDeparture": null,
            "realGetOffArrive": null,
            "realCarType": null,
            "extensionInfo": null,
            "personalAmount": "0",
            "startTime": null,
            "endTime": null,
            "userId": null,
            "corporationId": null,
            "productName": "国际酒店",
            "costCenterList": null,
            "flightGrade": null,
            "trainGrade": null,
            "discount": null,
            "customDocuments": null,
            "productImg": null,
            "hotelUnsubscribeDetail": null,
            "legalEntity": null,
            "flightTripInfo": null
        }
    ]
}'
```
</TabItem>
<TabItem value="酒店" label="酒店">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1/travel/costCenter/synTravelOrder?accessToken=ID01w4CBdVrKfJ%3AxgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data '{
    "data": [
        {
            "initialOriginalOrderNo": "H230814192359771979",
            "initialParentOrderNo": "H230814192359771979",
            "initialOrderNo": "H230814192359771979",
            "originalOrderNo": "H230814192359771979-H230814192359771979-null",
            "parentOrderNo": "H230814192359771979",
            "travelInfoId": null,
            "orderNo": "H230814192359771979-H230814192359771979-null",
            "orderSummary": "天津",
            "orderDate": 1692012239806,
            "orderAmount": null,
            "orderStatus": "确认订单",
            "ticketNumber": "H230814192359771979",
            "certificateType": "",
            "certificateInfo": null,
            "airlineCompany": null,
            "flightNumber": null,
            "placeOfDeparture": null,
            "actualPlaceOfDeparture": null,
            "destination": null,
            "actualDestination": null,
            "departureTime": null,
            "arrivalTime": null,
            "departureAirport": null,
            "arrivalAirport": null,
            "cabinType": null,
            "vehicleType": null,
            "trainSeat": null,
            "hotelName": "维也纳酒店5.0天津市宝坻民政局东城北路店",
            "hotelAddress": "海滨街道/东城北路/五号",
            "roomType": "豪华大床房",
            "departureStation": null,
            "arrivalStation": null,
            "trainNumber": null,
            "orderType": "hotel",
            "bookingPeople": "xgJ3wajigF25H0:dbc3wajigF1UH0",
            "travelPeople": [
                "xgJ3wajigF25H0:dbc3wajigF1UH0"
            ],
            "accommodation": "120100",
            "actualAccommodation": "120100",
            "checkInDate": 1691942400000,
            "departureDate": 1692028800000,
            "orderCategory": "确认订单",
            "applicationNo": null,
            "isExcess": "否",
            "excessReason": "",
            "travelType": "因公",
            "paymentMethod": "企业支付",
            "orderRemark": null,
            "carNumber": null,
            "travelMode": null,
            "creativeTime": 1692012239806,
            "productStatus": null,
            "ticketType": "国内",
            "tripCode": null,
            "cabinDetail": null,
            "ticketPrice": null,
            "roomPrice": "261.00",
            "coupon": "0.00",
            "oilFee": null,
            "airportBuildFee": null,
            "taxTotalPrice": null,
            "ticketTotalPrice": "266.00",
            "ticketSureTime": null,
            "totalPrice": null,
            "roomQuantity": "1",
            "liveDay": "1",
            "roomDays": "1",
            "phoneNo": null,
            "invoiceSide": null,
            "productDetail": null,
            "isInvoice": null,
            "invoiceType": null,
            "refundServiceFee": null,
            "reBookingServiceFee": null,
            "refund": "0",
            "rebookQueryFee": null,
            "dealType": null,
            "payType": "",
            "serviceFee": "5.00",
            "insuranceNumber": null,
            "insuranceFee": null,
            "amount": "266.00",
            "realAmount": "266.00",
            "deliveryFee": null,
            "tripType": null,
            "bookingPlatform": "合思商城",
            "planGetOnTime": null,
            "planGetOnDeparture": null,
            "planGetOffArrive": null,
            "realGetOnDeparture": null,
            "realGetOffArrive": null,
            "realCarType": null,
            "extensionInfo": null,
            "personalAmount": "0",
            "startTime": null,
            "endTime": null,
            "userId": null,
            "corporationId": null,
            "productName": null,
            "flightGrade": null,
            "trainGrade": null,
            "discount": null,
            "productImg": null,
            "hotelUnsubscribeDetail": null,
            "legalEntity": "新界泵业（浙江）有限公司",
            "flightTripInfo": null
        }
    ]
}'
```
</TabItem>
<TabItem value="火车" label="火车">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1/travel/costCenter/synTravelOrder?accessToken=ID01w4CBdVrKfJ%3AxgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data '{
    "data": [
        {
            "initialOriginalOrderNo": "T230813205650292118",
            "initialParentOrderNo": "T230814185628705792",
            "initialOrderNo": "TR230814192419016198",
            "originalOrderNo": "T230813205650292118-E569372185101014A-714521338995408896",
            "parentOrderNo": "E569372185203002D",
            "travelInfoId": "",
            "orderNo": "TR230814192419016198-E569372185203002D-3-714521338995408896",
            "orderSummary": "苏州-上海",
            "orderDate": 1692012259729,
            "orderAmount": null,
            "orderStatus": "退票",
            "ticketNumber": "E569372185203002D",
            "certificateType": "中国大陆居民身份证",
            "certificateInfo": "441625199408264135",
            "airlineCompany": null,
            "flightNumber": null,
            "placeOfDeparture": "320500",
            "actualPlaceOfDeparture": "320500",
            "destination": "310100",
            "actualDestination": "310100",
            "departureTime": 1692014520000,
            "arrivalTime": 1692016560000,
            "departureAirport": null,
            "arrivalAirport": null,
            "cabinType": null,
            "vehicleType": null,
            "trainSeat": "二等座",
            "hotelName": null,
            "hotelAddress": null,
            "roomType": null,
            "departureStation": "苏州",
            "arrivalStation": "上海虹桥",
            "trainNumber": "G7123",
            "orderType": "train",
            "bookingPeople": "xgJ3wajigF25H0:dbc3wajigF1UH0",
            "travelPeople": [
                "xgJ3wajigF25H0:dbc3wajigF1UH0"
            ],
            "accommodation": null,
            "actualAccommodation": null,
            "checkInDate": null,
            "departureDate": null,
            "orderCategory": "退票",
            "applicationNo": "",
            "isExcess": "否",
            "excessReason": "",
            "travelType": "因公",
            "paymentMethod": "个人支付",
            "orderRemark": null,
            "carNumber": null,
            "travelMode": null,
            "creativeTime": 1692012259729,
            "productStatus": null,
            "ticketType": "国内",
            "tripCode": null,
            "cabinDetail": null,
            "ticketPrice": "38.00",
            "roomPrice": null,
            "coupon": "0.00",
            "oilFee": null,
            "airportBuildFee": null,
            "taxTotalPrice": null,
            "ticketTotalPrice": "38.00",
            "ticketSureTime": 1692012259729,
            "totalPrice": null,
            "roomQuantity": null,
            "liveDay": null,
            "roomDays": null,
            "phoneNo": "13559771737",
            "invoiceSide": null,
            "productDetail": null,
            "isInvoice": null,
            "invoiceType": null,
            "refundServiceFee": null,
            "reBookingServiceFee": null,
            "refund": "30.50",
            "rebookQueryFee": null,
            "dealType": null,
            "payType": "支付宝",
            "serviceFee": "0.00",
            "insuranceNumber": null,
            "insuranceFee": null,
            "amount": "0",
            "realAmount": "0",
            "deliveryFee": null,
            "tripType": null,
            "bookingPlatform": "合思商城",
            "planGetOnTime": null,
            "planGetOnDeparture": null,
            "planGetOffArrive": null,
            "realGetOnDeparture": null,
            "realGetOffArrive": null,
            "realCarType": null,
            "extensionInfo": null,
            "personalAmount": "0",
            "startTime": null,
            "endTime": null,
            "userId": null,
            "corporationId": null,
            "productName": null,
            "costCenterList": null,
            "flightGrade": null,
            "trainGrade": "二等座",
            "discount": null,
            "customDocuments": null,
            "productImg": null,
            "hotelUnsubscribeDetail": null,
            "legalEntity": null,
            "flightTripInfo": null
        }
    ]
}'
```
</TabItem>
<TabItem value="用餐" label="用餐">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1/travel/costCenter/synTravelOrder?accessToken=ID01w4CBdVrKfJ%3AxgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data '{
    "data": [
        {
            "initialOriginalOrderNo": "M230814195427289749",
            "initialParentOrderNo": "M230814195427289749",
            "initialOrderNo": "M230814195427289749",
            "originalOrderNo": "M230814195427289749-M230814195427289749-959034756039835648",
            "parentOrderNo": "M230814195427289749",
            "travelInfoId": null,
            "orderNo": "M230814195427289749-M230814195427289749-959034756039835648",
            "orderSummary": "广州",
            "orderDate": 1692014067478,
            "orderAmount": null,
            "orderStatus": "已完成",
            "ticketNumber": "M230814195427289749",
            "certificateType": "其他",
            "certificateInfo": null,
            "airlineCompany": null,
            "flightNumber": null,
            "placeOfDeparture": null,
            "actualPlaceOfDeparture": null,
            "destination": null,
            "actualDestination": null,
            "departureTime": 1692014067478,
            "arrivalTime": null,
            "departureAirport": null,
            "arrivalAirport": null,
            "cabinType": null,
            "vehicleType": null,
            "trainSeat": null,
            "hotelName": null,
            "hotelAddress": null,
            "roomType": null,
            "departureStation": null,
            "arrivalStation": null,
            "trainNumber": null,
            "orderType": "meal",
            "bookingPeople": "xgJ3wajigF25H0:dbc3wajigF1UH0",
            "travelPeople": [
                "xgJ3wajigF25H0:dbc3wajigF1UH0"
            ],
            "accommodation": "440100",
            "actualAccommodation": "440100",
            "checkInDate": null,
            "departureDate": null,
            "orderCategory": "已完成",
            "applicationNo": null,
            "isExcess": "否",
            "excessReason": "",
            "travelType": "因公",
            "paymentMethod": "企业支付",
            "orderRemark": null,
            "carNumber": null,
            "travelMode": null,
            "creativeTime": 1692014067478,
            "productStatus": null,
            "ticketType": "国内",
            "tripCode": null,
            "cabinDetail": null,
            "ticketPrice": "32.20",
            "roomPrice": null,
            "coupon": "0.00",
            "oilFee": null,
            "airportBuildFee": null,
            "taxTotalPrice": null,
            "ticketTotalPrice": "33.17",
            "ticketSureTime": null,
            "totalPrice": null,
            "roomQuantity": null,
            "liveDay": null,
            "roomDays": null,
            "phoneNo": "18612037663",
            "invoiceSide": null,
            "productDetail": null,
            "isInvoice": null,
            "invoiceType": null,
            "refundServiceFee": null,
            "reBookingServiceFee": null,
            "refund": "0",
            "rebookQueryFee": null,
            "dealType": null,
            "payType": "预存",
            "serviceFee": "0.00",
            "insuranceNumber": null,
            "insuranceFee": null,
            "amount": "33.17",
            "realAmount": "25.97",
            "deliveryFee": null,
            "tripType": null,
            "bookingPlatform": "合思商城",
            "planGetOnTime": null,
            "planGetOnDeparture": null,
            "planGetOffArrive": null,
            "realGetOnDeparture": null,
            "realGetOffArrive": null,
            "realCarType": null,
            "extensionInfo": null,
            "personalAmount": "-7.20",
            "startTime": null,
            "endTime": null,
            "userId": null,
            "corporationId": null,
            "productName": null,
            "costCenterList": null,
            "flightGrade": null,
            "trainGrade": null,
            "discount": null,
            "customDocuments": null,
            "productImg": null,
            "hotelUnsubscribeDetail": null,
            "legalEntity": null,
            "flightTripInfo": null
        }
    ]
}'
```
</TabItem>
<TabItem value="用车" label="用车">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1/travel/costCenter/synTravelOrder?accessToken=ID01w4CBdVrKfJ%3AxgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data '{
    "data": [
        {
            "initialOriginalOrderNo": "CH20230814183832760259",
            "initialParentOrderNo": "CH20230814183832760259",
            "initialOrderNo": "CH20230814183832760259",
            "originalOrderNo": "CH20230814183832760259-CH20230814183832760259-6363639078927648637",
            "parentOrderNo": "CH20230814183832760259",
            "travelInfoId": "ID01rZWP5AUL7x",
            "orderNo": "CH20230814183832760259-CH20230814183832760259-6363639078927648637",
            "orderSummary": "广东省深圳市宝安区沙井街道环镇路冠德石油水产加油站/沙井北环路/环镇路(路口)北侧-福永街道深圳宝安国际机场(机场地铁站A口旁)/深圳宝安国际机场T3航站楼",
            "orderDate": 1692009512595,
            "orderAmount": null,
            "orderStatus": "已完成",
            "ticketNumber": "CH20230814183832760259",
            "certificateType": "其他",
            "certificateInfo": null,
            "airlineCompany": null,
            "flightNumber": null,
            "placeOfDeparture": "440300",
            "actualPlaceOfDeparture": "440300",
            "destination": "440300",
            "actualDestination": "440300",
            "departureTime": 1692010143000,
            "arrivalTime": 1692012267000,
            "departureAirport": null,
            "arrivalAirport": null,
            "cabinType": null,
            "vehicleType": "经济型",
            "trainSeat": null,
            "hotelName": null,
            "hotelAddress": null,
            "roomType": null,
            "departureStation": null,
            "arrivalStation": null,
            "trainNumber": null,
            "orderType": "taxi",
            "bookingPeople": "xgJ3wajigF25H0:dbc3wajigF1UH0",
            "travelPeople": [
                "xgJ3wajigF25H0:dbc3wajigF1UH0"
            ],
            "accommodation": "440300",
            "actualAccommodation": null,
            "checkInDate": null,
            "departureDate": null,
            "orderCategory": "已完成",
            "applicationNo": "S23002990",
            "isExcess": "否",
            "excessReason": "",
            "travelType": "因公",
            "paymentMethod": "企业支付",
            "orderRemark": "",
            "carNumber": "粤BD15386",
            "travelMode": "立即用车",
            "creativeTime": 1692009513392,
            "productStatus": null,
            "ticketType": "国内",
            "tripCode": null,
            "cabinDetail": null,
            "ticketPrice": "68.64",
            "roomPrice": null,
            "coupon": "10.00",
            "oilFee": null,
            "airportBuildFee": null,
            "taxTotalPrice": null,
            "ticketTotalPrice": "78.64",
            "ticketSureTime": 1692009518000,
            "totalPrice": null,
            "roomQuantity": null,
            "liveDay": null,
            "roomDays": null,
            "phoneNo": "13243732975",
            "invoiceSide": null,
            "productDetail": null,
            "isInvoice": null,
            "invoiceType": null,
            "refundServiceFee": null,
            "reBookingServiceFee": null,
            "refund": "0.00",
            "rebookQueryFee": null,
            "dealType": null,
            "payType": "",
            "serviceFee": "0.00",
            "insuranceNumber": null,
            "insuranceFee": null,
            "amount": "78.64",
            "realAmount": "68.64",
            "deliveryFee": null,
            "tripType": null,
            "bookingPlatform": "合思商城",
            "planGetOnTime": 1692009573101,
            "planGetOnDeparture": "广东省深圳市宝安区沙井街道环镇路冠德石油水产加油站/沙井北环路/环镇路(路口)北侧",
            "planGetOffArrive": "福永街道深圳宝安国际机场(机场地铁站A口旁)/深圳宝安国际机场T3航站楼",
            "realGetOnDeparture": "广东省深圳市宝安区沙井街道沙井北环路沙井法治文化公园",
            "realGetOffArrive": "广东省深圳市宝安区福永街道领航高架桥深圳宝安国际机场",
            "realCarType": "经济型",
            "extensionInfo": null,
            "personalAmount": "0",
            "startTime": null,
            "endTime": null,
            "userId": null,
            "corporationId": null,
            "productName": null,
            "flightGrade": null,
            "trainGrade": null,
            "discount": null,
            "customDocuments": null,
            "productImg": null,
            "hotelUnsubscribeDetail": null,
            "legalEntity": "深圳市镭神智能系统有限公司",
            "flightTripInfo": null
        }
    ]
}'
```
</TabItem>
<TabItem value="飞机" label="飞机">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1/travel/costCenter/synTravelOrder?accessToken=ID01w4CBdVrKfJ%3AxgJ3wajigF25H0' \
--header 'Content-Type: application/json' \
--data '{
    "data": [
        {
            "initialOriginalOrderNo": "F230608140029111434",
            "initialParentOrderNo": "F230608140029111434",
            "initialOrderNo": "F230608182720493328",
            "originalOrderNo": "F230608140029111434-784-2321035238-5167802030034805189",
            "parentOrderNo": "784-2321035238",
            "travelInfoId": "ID01w4CBcASvTx",
            "orderNo": "F230608182720493328-784-2321122032-5167802030034805189",
            "orderSummary": "北京-成都",
            "orderDate": 1686220041315,
            "orderAmount": null,
            "orderStatus": "改签",
            "ticketNumber": "784-2321122032",
            "certificateType": "中国大陆居民身份证",
            "certificateInfo": "420111197910184115",
            "airlineCompany": "中国南方航空公司",
            "flightNumber": "CZ6183",
            "placeOfDeparture": "110100",
            "actualPlaceOfDeparture": "110100",
            "destination": "510100",
            "actualDestination": "510100",
            "departureTime": 1686369600000,
            "arrivalTime": 1686380700000,
            "departureAirport": "大兴国际机场",
            "arrivalAirport": "双流国际机场",
            "cabinType": "K",
            "vehicleType": null,
            "trainSeat": null,
            "hotelName": null,
            "hotelAddress": null,
            "roomType": null,
            "departureStation": null,
            "arrivalStation": null,
            "trainNumber": null,
            "orderType": "flight",
            "bookingPeople": "xgJ3wajigF25H0:dbc3wajigF1UH011",
            "travelPeople": [
                "xgJ3wajigF25H0:dbc3wajigF1UH011"
            ],
            "accommodation": "110100",
            "actualAccommodation": null,
            "checkInDate": null,
            "departureDate": null,
            "orderCategory": "改签",
            "applicationNo": "S23003597",
            "isExcess": "否",
            "excessReason": "",
            "travelType": "因公",
            "paymentMethod": "企业支付",
            "orderRemark": null,
            "carNumber": null,
            "travelMode": null,
            "creativeTime": 1686220041315,
            "productStatus": null,
            "ticketType": "国内",
            "tripCode": null,
            "cabinDetail": null,
            "ticketPrice": "870.00",
            "roomPrice": null,
            "coupon": "0.00",
            "oilFee": "0.00",
            "airportBuildFee": "0.00",
            "taxTotalPrice": null,
            "ticketTotalPrice": "0.00",
            "ticketSureTime": null,
            "totalPrice": 174.00,
            "roomQuantity": null,
            "liveDay": null,
            "roomDays": null,
            "phoneNo": "18381001018",
            "invoiceSide": null,
            "productDetail": null,
            "isInvoice": null,
            "invoiceType": null,
            "refundServiceFee": null,
            "reBookingServiceFee": "0.00",
            "refund": "0",
            "rebookQueryFee": null,
            "dealType": null,
            "payType": "",
            "serviceFee": "0.00",
            "insuranceNumber": "0",
            "insuranceFee": "0.00",
            "amount": "174.00",
            "realAmount": "174.00",
            "deliveryFee": null,
            "tripType": null,
            "bookingPlatform": "合思商城",
            "planGetOnTime": null,
            "planGetOnDeparture": null,
            "planGetOffArrive": null,
            "realGetOnDeparture": null,
            "realGetOffArrive": null,
            "realCarType": null,
            "extensionInfo": null,
            "personalAmount": "0",
            "startTime": null,
            "endTime": null,
            "userId": null,
            "corporationId": null,
            "productName": null,
            "flightGrade": "K",
            "trainGrade": null,
            "discount": "0.32",
            "productImg": null,
            "hotelUnsubscribeDetail": null,
            "legalEntity": "北京北冰洋食品有限公司",
            "flightTripInfo": [
                {
                    "segNo": 1,
                    "orderNo": "F230608182720493328",
                    "orgCity": "BJS",
                    "orgCityName": "北京",
                    "arrCity": "CTU_C",
                    "arrCityName": "成都",
                    "orgCode": "PKX",
                    "orgName": "大兴国际机场",
                    "arrCode": "CTU",
                    "arrName": "双流国际机场",
                    "orgTerminal": "",
                    "arrTerminal": "T2",
                    "orgDateTime": 1686369600000,
                    "arrDateTime": 1686380700000,
                    "flightNo": "CZ6183",
                    "carrierCode": "CZ",
                    "carrierName": "中国南方航空公司",
                    "cabinCode": "K",
                    "codeDes": "经济舱",
                    "classLevel": "Y",
                    "distance": 1697,
                    "planeStyle": "33G"
                }
            ]
        }
    ]
}'
```
</TabItem>
</Tabs>




## 成功响应
```json
{
    "value": "ok"
}
```

[//]: # (## 失败响应)

[//]: # ()
[//]: # (| HTTP状态码 | 错误码 | 描述 | 排查建议 |)

[//]: # (| :--- | :--- | :--- | :--- |)



