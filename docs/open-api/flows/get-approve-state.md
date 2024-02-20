# 获取单据审批状态
根据单据 ID 集合获取当前单据所处于的审批节点名称。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/approveStates/[`ids`]"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.11.3**](/updateLog/update-log#1113) -> 🚀 接口升级 `v2` 版本，更新了 `rejected`（已驳回）状态的单据，`stageName` 从 **尚未提交** 改为 **拒绝**。<br/>
  [**1.7.2**](/updateLog/update-log#172)&emsp;-> 🐞 修复了 **会签** 节点响应数据中返回全部审批人列表的问题，实际应只返回待审批人列表。<br/>
  [**1.2.0**](/updateLog/update-log#120)&emsp;-> 🚀 接口升级 `v1.1` 版本，新增了能获取到已删除的单据，并且显示 **已删除** 状态。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids** | Array | 单据ID集合 | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一)<br/>示例：[ zKIbl2WX4I8I00 , I8I00zKIbl2WX4 , zKIbI00l2WX4I8 ] |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/approveStates/[ID_3zE5G_07ew0,ID_3zJ05rt0DY0]?accessToken=UvsbtOEHTsk000'
```

## 成功响应
:::tip
- 由于接口是从缓存中获取数据，缓存更新偶尔会有不到1秒的延迟，单据执行动作后建议等待几秒再调接口查询。
:::

```json
{
    "items": [
        {
            "flowId": "xxx",             //单据ID
            "stageName": "出纳支付",     //审批节点名称
            "operators": [              //待审批人员列表，来自员工信息
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
        },
        {
            "flowId": "ID01lc8ik1zc5x",
            "stageName": "尚未提交",
            "operators": [],
            "delegateData": []
        },
        {
            "flowId": "ID01l8FxSJxa5V",
            "stageName": "拒绝",
            "operators": [],
            "delegateData": []
        }
    ]
}
```

### 审批节点名称(`stageName`)
| 单据状态 | stageName |
|:--- |:--- |
| `draft`（草稿）、`pending`（提交中） | **尚未提交** |
| `rejected`（已驳回）               | **拒绝** |
| `paid`（已支付/审批完成）、`archived`（归档） | **完成** |
| 其他状态的单据 | 当前单据所处的 **节点名称** |

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - |  `{"items": []}` | 返回空表示对应的单据不存在<br/>请确认 `ids`（单据ID）是否正确 |
