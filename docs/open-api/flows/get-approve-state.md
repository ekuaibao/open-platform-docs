# 获取单据审批状态
根据单据 ID 集合获取到当前单据执行到的审批流程信息。

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/approveStates/[`ids`]"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids** | Array | 单据ID集合 | 必填 | - | 通过其他api接口或者出站消息获取<br/>示例：`[zKIbl2WX4I8I00,I8I00zKIbl2WX4,zKIbI00l2WX4I8]` |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 通过授权接口获取 | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/approveStates/[yd4bn1Z-YM9000,ID_3sJUVscs$_w]?accessToken=UvsbtOEHTsk000'
```

## 成功响应
```json
{
    "items": [
        {
            "flowId": "xxx",            //单据id
            "stageName": "出纳支付",     //审批节点名称
            "operators": [              //审批人列表，来自员工信息
                {     
                    "id": "xxx",         //审批人id
                    "name": "王大锤",    //审批人姓名
                    "code": "15091"      //审批人工号
                }
            ],
            "delegateData": []
        },
        {
            "flowId": "ID_3seTcgi0qrg",
            "stageName": "完成",
            "operators": [],
            "delegateData": []
        }
    ]
}
```

## 失败响应
```json
{
  "items": []   //请检查对应的单据id是否正确
}
```