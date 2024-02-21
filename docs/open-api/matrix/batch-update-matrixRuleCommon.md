# 批量更新矩阵明细中单个公共属性字段

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/matrix/updateRuleCommonBatch"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.27.0**](/updateLog/update-log#1270)
  - 🆕 新增了本接口。

</div>
</details>

:::caution
- 该接口仅支持批量更新单个字段，如果接口同时传了条件字段和结果维度特有条件字段，则只有特有条件字段生效
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	    | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters
**目前支持的字段类型：员工、部门、自定义档案、费用类型、城市（同单据传参格式）、金额、数字**

| 名称         | 类型     | 描述    | 是否必填 | 默认值 | 备注       |
|:-----------|:-------|:------| :--- |:----|:---------|
| **baseId**                     | String | 矩阵ID         | 必填  | -  | 通过 [获取企业下所有审批矩阵](/docs/open-api/matrix/get-matrixs) 获取 |
| **ruleIds**                    | Array  | 矩阵明细ID集合  | 必填  | -  | 通过 [根据矩阵ID获取矩阵明细](/docs/open-api/matrix/get-matrix-byId) 获取 |
| **rule**                       | Object | 条件字段配置信息 | 非必填  | -  | 与 `resultRule`（结果字段）不能同时存在 |
| **&emsp; ∟ fieldConfigId**    | String | 条件字段配置ID	| 必填  | -  | 最大不能超过 `100` |
| **&emsp; ∟ ids**              | Array  | 条件字段匹配值	| 必填  | -  | 条件字段匹配值具体信息 |
| **&emsp;&emsp; ∟ id**         | String | 匹配值ID	    | 必填  | -  | 条件字段匹配值ID |
| **resultRule**                 | Object | 结果字段信息    | 非必填  | -  | 与 `rule`（条件字段）不能同时存在  |
| **&emsp; ∟ resultConfigId**   | String | 结果字段配置ID   | 必填  | -  | 结果字段配置ID |
| **&emsp; ∟ rule**             | Object | 特有条件配置信息  | 必填  | -  | 特有条件配置信息 |
| **&emsp; &emsp; ∟ fieldConfigId**  | String | 特有条件配置ID | 必填  | -  | 特有条件配置ID |
| **&emsp; &emsp; ∟ ids**       | Array  | 特有条件字段匹配值  | 必填  | -  | 特有条件字段匹配值 |
| **&emsp; &emsp; &emsp; ∟ id** | String | 特有条件匹配值ID	| 必填  | -  | 特有条件匹配值ID |

## CURL

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="condition field" label="更新条件维度字段" default>

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v2/matrix/updateRuleCommonBatch?accessToken=ID01wiQRnmMuUn%3APCx3rwm3aA00qM' \
--header 'Content-Type: application/json' \
--data-raw '{
    "baseId": "ID01wg5CyS5pg3",     //矩阵ID
    "ruleIds": [                    //矩阵明细ID集合
        "ID01wg5CyS5UGX",
        "ID01wg5CyS5Xm7"
    ],
    "rule": {                       //条件字段配置信息
        "fieldConfigId": "ID01wfTnL9iwCb",
        "ids": [
            {
                "id": "PCx3rwm3aA00qM:SUv3rzY$rz02t0"     //匹配值ID
            }
        ]
    }
}'
```
</TabItem>
<TabItem value="specific condition field" label="更新结果维度特有条件字段">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v2/matrix/updateRuleCommonBatch?accessToken=ID01wiQRnmMuUn%3APCx3rwm3aA00qM' \
--header 'Content-Type: application/json' \
--data-raw '{
    "baseId": "ID01wg5CyS5pg3",     //矩阵ID
    "ruleIds": [                    //矩阵明细ID集合
        "ID01wg5CyS5UGX",
        "ID01wg5CyS5Xm7"
    ],
    "resultRule": {                                         //结果字段信息
        "resultConfigId": "ID01wh7WjsCSSz",                 //结果字段配置ID   
        "rule": {                                           //特有条件配置信息
            "fieldConfigId": "ID01wiTo7NjUM7",              //特有条件配置ID
            "ids": [                                        //特有条件匹配值
                {
                    "id": "PCx3rwm3aA00qM:7IYaGDtLkE0800"   //匹配值
                }
            ]
        }
    }
}'
```
</TabItem>
</Tabs>



## 成功响应
```json
{
  "value": true
}
```

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
|:--------| :--- |:---|:-----|
| **412** | - | JSON请求参数不正确  | 请检查传参格式层级是否正确  |

