# 批量更新(新增/修改/删除)预算节点
批量更新指定预算包的数据（节点、可见性等），对于草稿状态的也会返回记录，周期金额不可省略。

import Control from "../../../components/Control";

<Control
method="PUT"
url="/api/openapi/v2/budgets/$`budgetId`/batchUpdate"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String  |预算树id | 必填 | - | [预算树id获取](/docs/open-api/budget/get-budget-list) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**addNodes**                       | Array  | 追加节点                | 非必填  | - | 添加预算包下子预算项 | 
|**&emsp; ∟ id**                   | String | 预算节点ID               | 必填  | - | 不重复的唯一id,例如:可用毫秒级时间戳作为节点ID | 
|**&emsp; ∟ code**                 | String | 节点编码                 | 必填  | - | 子预算编码 | 
|**&emsp; ∟ content**              | Array  | 节点维度                 | 必填  | - | 预算分解依据,例如根据"费用类型","部门"分解 | 
|**&emsp; &emsp; ∟ dimensionType** | String | 维度种类                 | 必填  | - | `DEPART` : 费用承担部门 &emsp; `PROJECT` : 扩展档案<br/>`FEE_TYPE` : 费用类型 &emsp; `STAFF` : 员工 | 
|**&emsp; &emsp; ∟ dimensionId**   | String | 维度种类的标识ID          | 必填  | - | 参数为冒号之后的部分<br/>DEPART : `expenseDepartment`<br/>PROJECT : `项目`(档案名称,例如:项目)<br/>FEE_TYPE : `feeTypeId` &emsp; STAFF : `submitterId` | 
|**&emsp; &emsp; ∟ mustLeaf**      | boolean | 维度是否必定为叶节点(本部) | 必填  | false | `true` : 非本级 `false` : 本级<br/>[表示维度类别是否为其子预算节点](/docs/open-api/budget/question-answer) | 
|**&emsp; &emsp; ∟ contentId**     | String | 维度内容ID               | 必填  | - | 对应维度种类下的项id,例如:部门维度就是`部门id`,扩展档案维度就是`档案项id` | 
|**&emsp; ∟ moneys**               | Array  | 节点金额                 | 必填  | - | 子预算项对应的预算金额 | 
|**&emsp; &emsp; ∟ budgetMoney**   | String | 预算金额                 | 必填  | - | 预算金额,非最末级节点传`0`即可，由系统自动累加此维度下子预算额度求和 | 
|**&emsp; &emsp; ∟ nodeId**        | String | 预算节点id               | 必填  | - | 与上面预算节点id保持一致,即一个预算节点下包含`节点信息`和`预算金额`两部分属性 | 
|**&emsp; &emsp; ∟ periodTime**    | String | 第几个周期                | 必填  | - | 年度和自定义区间:`1` 半年度:`1`,`2` 季度:`1`,`2`,`3`,`4` 月度:`1~12` <br/>根据控制周期类型填写,例如:预算树控制周期是按季度类型,每个子预算节点的`moneys`数组数据,就包含4个对象,表示每个季度对应的预算金额 | 
|**&emsp; ∟ control**              | String | 节点控制方式              | 必填  | - | 当预算超额时的控制方式<br/>`ALLOW`:允许提交单据<br/>`FORBID`:禁止提交单据<br/>`IGNORED`:什么都不做 | 
|**&emsp; ∟ freeze**               | Boolean | 预算冻结                | 非必填 | false | `true` : 冻结 &emsp; `false` : 不冻结 | 
|**&emsp; ∟ nodeId**               | String | 预算节点ID               | 必填   | - | 与上面预算节点id保持一致 | 
|**&emsp; ∟ parentId**             | String | 父节点id                 | 非必填 | - | 父节点id | 
|**updateNodes**                    | Array  | 变更节点                 | 非必填 |- | 数据格式与追加节点保持一致,节点维度无法变更 |
|**deleteNodes**                    | Array  | 删除节点                 | 非必填 |- | 预算节点id |
|**visibilities**                   | Array  | 节点负责人数组            | 非必填 |- | 负责人能在相关报销单和预算报表中查看该预算节点的进度,负责人删除时也要在这里体现 |
|**visibilities/visibility**        | Object | 节点负责人对象            | 非必填 |- | 节点负责人对象 |
|**&emsp; &emsp; ∟ id**            | String | 节点负责人配置ID           | 非必填 |- | 更新已有节点负责人时需要传入,新增的节点传"",[节点负责人配置ID获取](/docs/open-api/budget/get-budget-details) |
|**&emsp; &emsp; ∟ corporationId** | String | 企业ID                   | 非必填 |- | [企业ID获取](/docs/open-api/getting-started/origin) |
|**&emsp; &emsp; ∟ budgetId**      | String | 预算树ID                 | 非必填 |- | 预算树ID |
|**&emsp; &emsp; ∟ budgetVersion** | String | 预算版本                 | 非必填 |- | [预算版本获取](/docs/open-api/budget/get-budget-details) |
|**&emsp; &emsp; ∟ nodeId**        | String | 预算节点ID               | 非必填 |- | 要设置可见性的预算节点ID |
|**&emsp; &emsp; ∟ staffIds**      | Array  | 人员ID                  | 非必填 |- | 值为[员工id](/docs/open-api/corporation/get-all-staffs) |
|**&emsp; &emsp; ∟ roleDefIds**    | Array  | 角色ID                  | 非必填 |- | 值为[角色id](/docs/open-api/corporation/get-roles-group) |
|**active**                         | Boolean | 是否为发布状态           | 必填  | false | `true` : 发布 &emsp; `false` : 草稿 |
|**publish**                        | Boolean | 当前更新是否立即发布      | 必填  | false | `true` : 立即<br/>`false` : 加入缓存(用于多次批量更新,每次更新是否立即发布,还是最后一次更新完再发布) |
|**version**                        | Long   | 当前预算包的版本          | 必填  |- | [预算版本获取](/docs/open-api/budget/get-budget-details) |

:::tip
 - `addNodes 追加节点`、`updateNodes 变更节点`、`deleteNodes 删除节点`三个参数至少任意一个必填
 - “节点维度”如下图所示，是预算节点的划分依据:<br/>
   &emsp;  `dimensionType(维度种类)` 传参见参数介绍，四种类型固定；<br/>
   &emsp;  `dimensionId(维度种类的标识ID)`传参为对应维度种类的[全局字段名称](/docs/open-api/forms/get-customs-param)；例如：<br/>
   &emsp; &emsp; - 职级预置: `E_system_rank`<br/>
   &emsp; &emsp; - 岗位预置: `E_system_post`<br/>
   &emsp; &emsp; - 成本中心预置: `E_system_costcenter`<br/>
   &emsp; &emsp; - 品类: `品类`<br/>
   &emsp; &emsp; - 法人实体: `法人实体`<br/>
   &emsp; &emsp; - 项目: `项目`<br/>
   &emsp; &emsp; - 提交人: `submitterId`<br/>
   &emsp; &emsp; - 费用承担部门: `expenseDepartment`<br/>
   &emsp; &emsp; - 费用类型: `feeTypeId`<br/>
   &emsp; &emsp; - 自建的扩展档案字段，例如“国家”，传参为`u_国家`

 ![image](images/节点维度信息.png)
:::

## CURL
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00/batchUpdate?accessToken=f_kbtOJVVwdo00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "addNodes":[
        {
            "id":"1634112670003",  //节点id
            "code":"批量新增",  //节点编码
            "content":[   //节点维度,以何种类型分解预算
                {
                    "dimensionType":"STAFF",  //以提交人类型
                    "dimensionId":"submitterId",
                    "mustLeaf":true,
                    "contentId":"Urf3lsFgBp00gw:Fmd3oQU9lg00q0"
                }
            ],
            "moneys":[  //节点金额
                {
                    "budgetMoney":"0", 
                    "nodeId":"1634112670003",
                    "periodTime":"1"  //第几个周期
                },
                {
                    "budgetMoney":"0",
                    "nodeId":"1634112670003",
                    "periodTime":"2"
                },
                {
                    "budgetMoney":"0",
                    "nodeId":"1634112670003",
                    "periodTime":"3"
                },
                {
                    "budgetMoney":"0",
                    "nodeId":"1634112670003",
                    "periodTime":"4"
                }
            ],
            "control":"ALLOW",  
            "freeze": false,  //预算冻结，默认值false，不冻结
            "nodeId":"1634112670003",
            "parentId":"1634112670002"
        },
        {
            "id":"1634112670004",
            "code":"批量新增-子",
            "content":[
                {
                    "dimensionType":"STAFF",
                    "dimensionId":"submitterId",
                    "mustLeaf":true,
                    "contentId":"Urf3lsFgBp00gw:ID_3ow_Xyy0MzM"
                }
            ],
            "moneys":[
                {
                    "budgetMoney":"19",
                    "nodeId":"1634112670004",
                    "periodTime":"1"
                },
                {
                    "budgetMoney":"29",
                    "nodeId":"1634112670004",
                    "periodTime":"2"
                },
                {
                    "budgetMoney":"39",
                    "nodeId":"1634112670004",
                    "periodTime":"3"
                },
                {
                    "budgetMoney":"49",
                    "nodeId":"1634112670004",
                    "periodTime":"4"
                }
            ],
            "control":"ALLOW",
            "freeze": false,  //预算冻结，默认值false，不冻结
            "nodeId":"1634112670004",
            "parentId":"1634112670003"
        }
    ],
    "updateNodes":[
        {
            "id":"1634112670001",
            "code":"批量更新",
            "content":[  //节点维度无法变更
            ],
            "moneys":[
                {
                    "budgetMoney":"119",
                    "nodeId":"1634112670001",
                    "periodTime":"1"
                },
                {
                    "budgetMoney":"229",
                    "nodeId":"1634112670001",
                    "periodTime":"2"
                },
                {
                    "budgetMoney":"339",
                    "nodeId":"1634112670001",
                    "periodTime":"3"
                },
                {
                    "budgetMoney":"449",
                    "nodeId":"1634112670001",
                    "periodTime":"4"
                }
            ],
            "control":"ALLOW",
            "freeze": true,  //预算冻结，默认值false，不冻结
            "nodeId":"1634112670001",
            "parentId":"1634112660000"
        }
    ],
    "deleteNodes":[],
    "visibilities":[
        {
            "visibility" :  {
                "id":"",
                "corporationId":"Urf3lsFgBp00gw",
                "budgetId":"ID_3o_V3Um0XZ0",
                "budgetVersion":"1",
                "nodeId":"1634112670003",
                "staffIds":[
                    "Urf3lsFgBp00gw:Jbz3lxSOC60290"
                ],
                "roleDefIds":[]
            }
        },
        {
            "visibility" :  {
                "id":"",
                "corporationId":"Urf3lsFgBp00gw",
                "budgetId":"ID_3o_V3Um0XZ0",
                "budgetVersion":"1",
                "nodeId":"1634112670004",
                "staffIds":[
                    "Urf3lsFgBp00gw:Jbz3lxSOC60290"
                ],
                "roleDefIds":[]
            }
        }
    ],
    "active":true,
    "publish":true,
    "version":1
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
`budgetId` 不存在时，返回此响应数据：
```json
{
    "value": {
        "success": false,
        "errmsg": "不存在的预算包"
    }
}
```





