# 获取业务对象执行计划

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/datalink/plan/getPlan/$`dataId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**0.7.153**](/docs/open-api/notice/update-log#07153) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **dataId** | String | 配置了台账和执行计划的业务对象实例ID | 必填 | - | 通过 [获取业务对象实例列表](/docs/open-api/datalink/get-entity-info) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/datalink/plan/getPlan/$ID_3mcOcKEYUeM?accessToken=ID_3qolNHi0KF0:Urf3lsFgBp00gw'
```

## 成功响应
```json
{
    "items": [
        {
            "PERCENTAGE": "100.00",  //执行金额/计划金额的百分比例
            "controlType": "RIGID",  //ALL:所有；RIGID:禁止单据继续关联；WEAKLY:显示风险提示；NONE:允许执行金额超过计划金额。当controlType=RIGID见RIGID_PERCENTAGE，同理controlType=WEAKLY见WEAKLY_PERCENTAGE，controlType=NONE时无
            "RIGID_PERCENTAGE": 100, //禁止单据继续关联百分比
            "WEAKLY_PERCENTAGE": 0,  //风险提示百分比
            "PLANNED": {             //计划金额
                "standard": "11.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "EXECUTE": {             //执行金额
                "standard": "11.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "BALANCE": {             //展示余额
                "standard": "0.00",
                "standardUnit": "元",
                "standardScale": 2,
                "standardSymbol": "¥",
                "standardNumCode": "156",
                "standardStrCode": "CNY"
            },
            "plannedName": "本位币",  //计划字段名称
            "executeName": "金额统计",//执行字段名称
            "name": "台账计划",       //执行计划名称
            "id": "ID_3qt4Qc4fvpg"   //执行计划ID
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **500** | - | 服务器内部错误：查询返回结果过少 | 请确认 `dataId`（业务对象实例ID）是否存在 | 

