# 获取单据PDF文件流
根据单据ID获取单据打印模板生成的PDF文件流。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/flowDetails/getFlowsPdf/[`ids`]"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.6.0**](/updateLog/update-log#160) -> 🐞 优化了接口 **HTTP 500** 错误，获取的单据超过 **32M** 时输出报错信息。<br/>

  </div>
</details>

:::caution
- 要获取的单据（包含发票附件）**不能超过32M**，否则报错见“**失败响应**”。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids** | Array | 单据ID | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一)，**打印的单据必须所属于同一员工**<br/>示例：[ zKIbl2WX4I8I00 , I8I00zKIbl2WX4 , zKIbI00l2WX4I8 ] |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/flowDetails/getFlowsPdf/[yd4bn1Z-YM9000]?accessToken=cWEbn1cA0kjU00'
```

## 成功响应
一个PDF文件，文件名为单据ID，例如下图：

![单据pdf流](images/单据pdf流返回.png)

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **412** | - | 单据内容过大，请减少单据生成条数据，生成pdf文件出错:[ID_3GSEp0zevUw] | 当获取的单据（包含发票附件）超过32M时返回此提示，请减少单据生成条数据 |

### 获取单据失败如何处理？

![单据pdf流失败处理](images/获取单据PDF文件流失败处理.png)
