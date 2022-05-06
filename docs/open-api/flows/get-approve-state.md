# 获取单据审批状态
根据单据 ID 集合获取到当前单据执行到的审批流程信息。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1.1/approveStates/[`ids`]"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>1.2.0</b></a> -> 🚀 接口升级 <b>v1.1</b> 版本，新增了能获取到已删除的单据，并且显示 “<b>已删除</b>” 状态。<br/>
  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids** | Array | 单据ID集合 | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一)<br/>示例：[ zKIbl2WX4I8I00 , I8I00zKIbl2WX4 , zKIbI00l2WX4I8 ] |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1.1/approveStates/[ID_3zE5G_07ew0,ID_3zJ05rt0DY0]?accessToken=UvsbtOEHTsk000'
```

## 成功响应
```json
{
    "items": [
        {
            "flowId": "xxx",             //单据ID
            "stageName": "出纳支付",     //审批节点名称
            "operators": [              //审批人列表，来自员工信息
                {     
                    "id": "xxx",         //审批人ID
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
        },
        {
            "flowId": "ID_3zE5G_07ew0",
            "stageName": "已删除",
            "operators": [],
            "delegateData": []
        }
    ]
}
```

当 `ids` 对应的单据不存在时，返回空数组：
```json
{
  "items": []   //请检查对应的单据ID是否正确
}
```


