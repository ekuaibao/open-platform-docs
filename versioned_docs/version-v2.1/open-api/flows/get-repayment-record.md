# 根据还款记录ID获取还款信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/loan/repaymentRecord/[`ids`]"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.7.1**](/docs/open-api/notice/update-log#171) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters
| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **ids**         | Array   | 还款记录ID集合 | 必填 | - | 可以通过出站消息获取<br/>示例：[ zKIbl2WX4I8I00 , I8I00zKIbl2WX4 , zKIbI00l2WX4I8 ] |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location -g --request GET 'https://app.ekuaibao.com/api/openapi/v1/loan/repaymentRecord/[ID_3HV7_Hq1zKw]?accessToken=ID_3JxnLl1078M:bwa3wajigF0WH0'
```

## 成功响应

```json
{
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.31.0.0:A",
            "id": "ID_3HV7_Hq1zKw",       //还款记录ID
            "version": 1,
            "active": true,
            "createTime": 1654583439073,
            "updateTime": 1654583439075,  //还款时间
            "corporationId": "bwa3wajigF0WH0",
            "sourceCorporationId": null,
            "dataCorporationId": null,
            "ownerId": "bwa3wajigF0WH0:ID_3lokDfb1p5w", //借款人ID
            "repaymentType": "OBTAIN",      //执行操作，见下面的参数介绍
            "amount": 10.0,                 //操作金额
            "loanInfoId": "ID_3HV7_Hq1yKw", //借款包ID
            "totalProfitAndLoss": null,
            "foreignAmount": null,          //外币金额
            "chargeAgainstMark": false,     //是否冲销标记
            "attachments": [],              //附件
            "formType": "requisition",      //单据类型
            "flowId": "ID_3BPNpAnjCGw",     //单据ID
            "title": "迭代测试-不传2"       //借款名称
        }
    ]
}
```

### `repaymentType`(执行操作)参数介绍
| 参数  | 备注 |
| :--- | :--- |
| **OBTAIN**     | 获得借款 |
| **WRITEOFF**   | 核销还款 |
| **MANUAL**     | 手动还款 |
| **CASHIER**    | 强制还款 |
| **SHIFT**      | 转交 |
| **SHARE**      | 共享 |
| **CANCEL_SHARE**   | 取消共享 |
| **CONFIRM_SHARE**  | 确认共享 |
| **REJECT_SHARE**   | 拒绝共享 |
| **DELAY**     | 推迟 |
| **TRANSFER**  | 发起转交 |
| **CONFIRM**   | 确认转交 |
| **REFUSE**    | 拒绝转交 |
| **CHARGEAGAINST** | 冲销 |
| **REVISE**    | 手动修改借款 |

## 失败响应
还款记录ID错误时，返回空：
```json
{
    "items": []
}
```

