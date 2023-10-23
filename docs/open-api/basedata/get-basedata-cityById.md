# 根据ID查询城市信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/city/getCity"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.24.0**](/docs/open-api/notice/update-log#1240) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称              | 类型 | 描述      | 是否必填 | 默认值 | 备注                                                              |
|:----------------| :--- |:--------| :--- |:--- |:----------------------------------------------------------------|
| **accessToken** | String  | 认证token |必填   | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **id**          | String  | 城市ID    |必填   | - | 通过 [获取城市列表数据](/docs/open-api/basedata/get-basedata-city) 获取     |


## CURL
```shell
curl --location 'https://app.ekuaibao.com/api/openapi/v1/city/getCity?accessToken=ID01tN5BpzT47Y%3ATdk3tgber501v0&id=1'
```

## 成功响应
```json
{
    "value": {
        "pipeline": 1,
        "grayver": "9.64.0.0-prd",
        "dbVersion": 0,
        "threadId": "",
        "id": "1",                      //城市ID
        "version": 26,
        "active": true,
        "createTime": 1505372614157,
        "updateTime": 1505372614157,
        "name": "北京",                 //城市名称  
        "nameSpell": "BEIJINGSHI",      //城市拼音
        "code": "110100",               //城市编码
        "corporationId": "",
        "sourceCorporationId": null,
        "dataCorporationId": null,
        "enName": "Beijing",            //英文名称
        "enFullName": "Beijing, China", //英文全称
        "fullName": "中国, 北京市",      //中文全称
        "country": "国内",              //国家
        "hoseCityCode": "110100",
        "parentId": "",                 //父级编号
        "treeLevel": 0,
        "extendInfo": {
            "trainCode": [
                "bjb:北京北",
                "bjd:北京东",
                "bji:北京",
                "bjn:北京南",
                "bjx:北京西",
                "cpb:昌平北",
                "myb:密云北"
            ],
            "airportCode": [
                "PEK:首都国际机场",
                "NAY:南苑机场"
            ],
            "cityExtendCode": "0101",
            "hoseMallCityCode": "NULL",
            "yeegoFlightCityCode": "BJS"
        },
        "haveFlight": true,
        "haveTrain": true,
        "flightList": [
            {
                "code": "PEK",
                "name": "首都国际机场",
                "cityFlightCode": null
            },
            {
                "code": "PKX",
                "name": "大兴国际机场",
                "cityFlightCode": null
            }
        ],
        "trainList": [
            {
                "code": "BJP",
                "name": "北京"
            },
            {
                "code": "VAP",
                "name": "北京北"
            },
            {
                "code": "BOP",
                "name": "北京东"
            },
            {
                "code": "VNP",
                "name": "北京南"
            },
            {
                "code": "BXP",
                "name": "北京西"
            },
            {
                "code": "IPP",
                "name": "北京大兴"
            },
            {
                "code": "NKP",
                "name": "南口"
            },
            {
                "code": "NGP",
                "name": "南观村"
            },
            {
                "code": "MUP",
                "name": "密云北"
            },
            {
                "code": "MAP",
                "name": "庙城"
            },
            {
                "code": "LPP",
                "name": "落坡岭"
            },
            {
                "code": "KZP",
                "name": "康庄"
            },
            {
                "code": "HCP",
                "name": "黄村"
            },
            {
                "code": "GSP",
                "name": "孤山口"
            },
            {
                "code": "GGP",
                "name": "高各庄"
            },
            {
                "code": "GVP",
                "name": "官高"
            },
            {
                "code": "DXX",
                "name": "大兴"
            },
            {
                "code": "DHP",
                "name": "大灰厂"
            },
            {
                "code": "VBP",
                "name": "昌平北"
            },
            {
                "code": "BVP",
                "name": "北宅"
            },
            {
                "code": "AAP",
                "name": "百里峡"
            },
            {
                "code": "ILP",
                "name": "八达岭"
            },
            {
                "code": "ADP",
                "name": "安定"
            },
            {
                "code": "AOP",
                "name": "燕山"
            },
            {
                "code": "YNP",
                "name": "延庆"
            },
            {
                "code": "TAP",
                "name": "通州西"
            },
            {
                "code": "LGP",
                "name": "良各庄"
            },
            {
                "code": "HRP",
                "name": "怀柔"
            },
            {
                "code": "HBP",
                "name": "怀柔北"
            },
            {
                "code": "CPP",
                "name": "昌平"
            },
            {
                "code": "HJA",
                "name": "厚街"
            },
            {
                "code": "HAU",
                "name": "淮安东"
            },
            {
                "code": "FGP",
                "name": "雁栖湖"
            },
            {
                "code": "TOP",
                "name": "通州"
            },
            {
                "code": "QEP",
                "name": "乔庄东"
            },
            {
                "code": "HKP",
                "name": "黄土店"
            },
            {
                "code": "HVP",
                "name": "黑山寺"
            },
            {
                "code": "GKP",
                "name": "古北口"
            },
            {
                "code": "IWP",
                "name": "大兴机场"
            },
            {
                "code": "DRB",
                "name": "东二道河"
            },
            {
                "code": "IYQ",
                "name": "东城南"
            },
            {
                "code": "ZIP",
                "name": "张辛"
            },
            {
                "code": "ZOP",
                "name": "珠窝"
            },
            {
                "code": "AFP",
                "name": "云居寺"
            },
            {
                "code": "YHP",
                "name": "沿河城"
            },
            {
                "code": "YAP",
                "name": "雁翅"
            },
            {
                "code": "EEP",
                "name": "斜河涧"
            },
            {
                "code": "WSP",
                "name": "魏善庄"
            },
            {
                "code": "TZP",
                "name": "统军庄"
            },
            {
                "code": "SOP",
                "name": "顺义"
            },
            {
                "code": "SWP",
                "name": "上万"
            },
            {
                "code": "SRP",
                "name": "石景山南"
            },
            {
                "code": "ODP",
                "name": "三家店"
            },
            {
                "code": "SVP",
                "name": "三合庄"
            },
            {
                "code": "SHP",
                "name": "沙河"
            },
            {
                "code": "SEP",
                "name": "十渡"
            },
            {
                "code": "QHP",
                "name": "清华园"
            },
            {
                "code": "PYP",
                "name": "平峪"
            }
        ],
        "isRuleNode": true,
        "isLast": false        //是否末级 true=是；false=否
    }
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议                 |
|:--------| :--- | :--- |:---------------------|
| **400** | - | 查询结果不存在 | 请确认 `ID`（城市ID）参数是否正确 | 