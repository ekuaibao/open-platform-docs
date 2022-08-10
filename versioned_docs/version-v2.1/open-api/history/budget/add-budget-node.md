# 增加预算节点
向指定预算包的预算节点下增加新的子节点。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/budgets/$`budgetId`/node/$`nodeId`/add"
/>

:::danger
- 不推荐使用，接口废弃，不再更新维护。
- 推荐使用【[批量更新(新增/修改/删除)预算节点](/docs/open-api/budget/batch-pdate-budget-node)】接口。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String  | 预算包ID | 必填 | - | 通过 [获取预算包列表](/docs/open-api/budget/get-budget-list) 获取 |
| **nodeId**   | String  | 父节点ID | 必填 | - | 通过 [获取预算包详细信息](/docs/open-api/budget/get-budget-details) 获取 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

|名称 |描述 |类型 |是否必填 |默认值 |备注 |
|:------ |:--------- |:-----------|:-------|:-----------|:-------------|
|**budgetNode**                     | Object  | 预算节点信息            | 必填  | - | 新增的预算节点信息 | 
|**&emsp; ∟ id**                   | String  | 预算节点ID              | 必填  | - | 不重复的唯一ID，例如：可用毫秒级时间戳作为节点ID |
|**&emsp; ∟ code**                 | String  | 节点编码                | 必填  |- | 可传 `""`，**长度不能超过20个字符** |
|**&emsp; ∟ content**              | Array   | 节点维度                | 必填  |- | 一个节点对应一个维度 |
|**&emsp; &emsp; ∟ dimensionType** | String  | 维度种类                | 必填  | - | `DEPART` : 费用承担部门<br/>`PROJECT` : 扩展档案<br/>`FEE_TYPE` : 费用类型<br/>`STAFF` : 员工 |
|**&emsp; &emsp; ∟ dimensionId**   | String  | 维度种类的标识ID         | 必填  | - | 参数为冒号之后的部分：<br/>DEPART : `expenseDepartment`<br/>FEE_TYPE : `feeTypeId`<br/>PROJECT : 通过 [获取全局字段列表](/docs/open-api/forms/get-customs-param) 获取（档案名称，例如：`项目`）<br/>STAFF : `submitterId` |
|**&emsp; &emsp; ∟ mustLeaf**      | Boolean | 维度是否必定为叶子节点(本部) | 必填  | false | `true` : 非本级 &emsp; `false` : 本级<br/>[什么是“维度是否必定为叶子节点(本部)”？](/docs/open-api/budget/question-answer#问题一) |
|**&emsp; &emsp; ∟ contentId**     | String  | 维度内容ID              | 必填  | - | 对应维度种类下的项ID，例如：部门维度就是 **部门ID**，扩展档案维度就是 **档案项ID** |
|**&emsp; ∟ moneys**               | Array   | 节点金额                | 必填  |- | 预算金额，节点的 [周期](/docs/open-api/budget/question-answer#问题二) 数据不可省略 |
|**&emsp; &emsp; ∟ nodeId**        | String  | 预算节点ID              | 必填  | - | 与上面预算节点ID保持一致，即一个预算节点下包含 **节点信息** 和 **预算金额** 两部分属性 |
|**&emsp; &emsp; ∟ periodTime**    | String  | 第几个周期              | 必填  | - | 年度和自定义区间: `1`<br/>半年度: `1`、`2`<br/>季度: `1`、`2`、`3`、`4`<br/>月度: `1~12`<br/>根据控制周期类型填写，例如：预算包控制周期是 **季度** 类型，每个子预算节点的 `moneys` 数组数据，就包含4个对象，表示每个季度对应的预算金额 |
|**&emsp; &emsp; ∟ budgetMoney**   | Number  | 预算金额                | 必填  | - | 周期内的预算金额，不可为空 |
|**&emsp; ∟ control**              | String  | 预算节点的控制方式        | 必填  | ALLOW | 当预算超额时的控制方式<br/> `ALLOW` : 允许提交单据<br/>`FORBID` : 禁止提交单据<br/>`IGNORED` : 什么都不做 |
|**visibility**                     | Object  | 节点负责人              | 非必填 |- | 负责人能在相关报销单和预算报表中查看该预算节点的进度 |
|**&emsp; ∟ staffIds**             | Array   | 员工ID                 | 必填  |- | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
|**&emsp; ∟ roleDefIds**           | Array   | 角色ID                 | 非必填 |- | 通过 [获取部门列表](/docs/open-api/corporation/get-departments) 获取 |

:::tip
- **节点维度** 如下图所示，是预算节点的划分依据<br/>
 &emsp; `dimensionType（维度种类）` 传参见参数介绍，四种类型固定；<br/>
 &emsp; `dimensionId（维度种类的标识ID）` 传参为对应维度种类的 [全局字段名称](/docs/open-api/forms/get-customs-param)；例如：<br/>
 &emsp; &emsp; - 职级预置: `E_system_rank`<br/>
 &emsp; &emsp; - 岗位预置: `E_system_post`<br/>
 &emsp; &emsp; - 成本中心预置: `E_system_costcenter`<br/>
 &emsp; &emsp; - 品类: `品类`<br/>
 &emsp; &emsp; - 法人实体: `法人实体`<br/>
 &emsp; &emsp; - 项目: `项目`<br/>
 &emsp; &emsp; - 提交人: `submitterId`<br/>
 &emsp; &emsp; - 费用承担部门: `expenseDepartment`<br/>
 &emsp; &emsp; - 费用类型: `feeTypeId`<br/>
 &emsp; &emsp; - 自建的扩展档案字段，例如“国家”，传参为 `u_国家` <br/>

 ![image](../../budget/images/节点维度信息.png)
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00/node/$1597314178620/add?accessToken=f_kbtOJVVwdo00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "budgetNode":{                          //预算节点信息
        "id":"1634112670003",               //节点ID
        "code":"维度-2-1",                  //节点编码
        "content":[                         //节点维度信息，以何种类型分解预算
            {
                "dimensionType": "DEPART",  //部门类型
                "dimensionId": "expenseDepartment",
                "mustLeaf": true,
                "contentId": "Urf3lsFgBp00gw"
            }
        ],
        "moneys":[      
            {
                "nodeId":"1634112670003", 
                "periodTime":1,             //第1个预算周期金额
                "budgetMoney":"100"
            },
            {
                "nodeId":"1634112670003", 
                "periodTime":2,             //第2个预算周期金额
                "budgetMoney":"200"
            },
            {
                "nodeId":"1634112670003", 
                "periodTime":3,             //第3个预算周期金额
                "budgetMoney":"300"
            },
            {
                "nodeId":"1634112670003", 
                "periodTime":4,             //第4个预算周期金额
                "budgetMoney":"400"
            }
        ],
        "control":"ALLOW"   
    },
    "visibility":{              
        "staffIds":[
            "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
        ], 
        "roleDefIds":[] 
    }
}'
```

## 成功响应
```json
{
    "value": {
        "success": true,
        "errmsg": ""
    }
} 
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 不存在的预算包 | 请确认 `budgetId`（预算包ID）是否存在 |
| **400** | - | 节点金额数量不匹配 | 请确认节点周期金额是否完整，例如：季度控制，需要四个周期金额，只传了一个 |
