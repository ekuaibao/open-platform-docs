# 获取企业当前生效的币种信息
此功能对应易快报的多币种功能，需要向系统管理员申请相关权限。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/currency/active"
/>

## Query Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 通过授权接口获取 | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'http://app.ekuaibao.com/api/openapi/v2/currency/active?accessToken=XRcbwWBTassg00'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "kTMacKJmPAfQ00",             //id
            "version": 1,                       //版本号
            "active": true,                     //是否有效
            "createTime": 1576493933499,        //创建时间
            "updateTime": 1576493933499,        //更新时间
            "corporationId": "JBwa4AZNzY0000",  //企业 Id
            "numCode": "997",                   //货币数字代码
            "strCode": "USN",                   //货币字符代码
            "scale": 2,                         //精度
            "name": "美元（次日）",               //货币名称
            "symbol": "$",                      //货币符号
            "unit": "美元",                      //货币单位
            "icon": "http://images.ekuaibao.com/currency/usn.png",//货币图标
            "rate": "10.00",                    //汇率
            "startTime": 1576493880000,         //汇率生效开始时间
            "endTime": 4638916800000,           //汇率生效结束时间
            "order": 1576493933499              //排序
        }
    ]
}
```
