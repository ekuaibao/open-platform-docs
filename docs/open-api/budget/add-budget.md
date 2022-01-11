# 新增预算树

import Control from "../../../components/Control";

<Control
method="POST"
url="/api/openapi/v2/budgets/create"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**budgetInfo**                     | Object  | 预算树信息               | 必填   | - | 预算树信息 |
|**&emsp; ∟ active**               | Boolean | 是否激活                 | 必填   | false | `true` : 发布 &emsp; `false` : 草稿 | 
|**&emsp; ∟ name**                 | String  | 预算树名称               | 必填   | - | 预算树名称 | 
|**&emsp; ∟ corporationId**        | String  | 企业ID                  | 必填   | - | [企业ID获取](/docs/open-api/getting-started/origin) | 
|**&emsp; ∟ isCustom**             | Boolean | 是否自定义区间            | 必填   | false | `true` : 自定义时间区间(需要 `控制周期period` 参数设置 `null` )<br/> `false` : 周期控制，周期累计控制均为 false | 
|**&emsp; ∟ isRollCalc**           | Boolean | 是否滚动预算             | 必填   | false | `true` : 周期累计控制 &emsp; `false` : 周期控制 | 
|**&emsp; ∟ period**               | Object  | 预算年度                | 必填   | - | 预算年度 | 
|**&emsp; &emsp; ∟ annual**        | String  | 年份                   | 必填   | - | 例如 : 2021 | 
|**&emsp; &emsp; ∟ period**        | String  | 控制周期                | 必填   | - | 年度内分割方式：<br/> `YEAR` : 年度<br/>`HALF_YEAR` : 半年度<br/>`SEASON` : 季度<br/> `MONTH` : 月度<br/>`null` : 非周期控制 | 
|**&emsp; &emsp; ∟ startTime**     | Long    | 非周期控制开始时间        | 非必填 | - | 毫秒级时间戳，是否自定义区间参数：<br/> `isCustom` 为 `true` 时必填，为 `false` 时传 `null` | 
|**&emsp; &emsp; ∟ endTime**       | Long    | 非周期控制结束时间        | 非必填 | - | 毫秒级时间戳，是否自定义区间参数：<br/> `isCustom` 为 `true` 时必填，为 `false` 时传 `null` | 
|**addNodes**                       | Array   | 追加节点信息            | 必填   | - | 添加预算包下子预算项 | 
|**&emsp; ∟ id**                   | String  | 预算节点ID              | 必填   | - | 不重复的唯一ID，例如：可用毫秒级时间戳作为节点ID | 
|**&emsp; ∟ code**                 | String  | 节点编码                | 必填   | - | 子预算编码 | 
|**&emsp; ∟ content**              | Array   | 节点维度                | 必填   | - | 预算分解依据，例如根据"费用类型"、"部门"分解 | 
|**&emsp; &emsp; ∟ dimensionType** | String  | 维度种类                | 必填   | - | `DEPART` : 费用承担部门<br/>`PROJECT` : 扩展档案<br/>`FEE_TYPE` : 费用类型<br/>`STAFF` : 员工 | 
|**&emsp; &emsp; ∟ dimensionId**   | String  | 维度种类的标识ID         | 必填   | - | 参数为冒号之后的部分：<br/>DEPART : `expenseDepartment`<br/>FEE_TYPE : `feeTypeId`<br/>PROJECT : `项目` (档案名称，例如：项目)<br/>STAFF : `submitterId` | 
|**&emsp; &emsp; ∟ mustLeaf**      | Boolean | 维度是否必定为叶子节点(本部) | 必填   | false | `true` : 非本级 &emsp; `false` : 本级<br/>[表示维度类别是否为其子预算节点](/docs/open-api/budget/question-answer) | 
|**&emsp; &emsp; ∟ contentId**     | String  | 维度内容ID              | 必填   | - | 对应维度种类下的项ID，例如：部门维度就是 `部门ID` ，扩展档案维度就是 `档案项ID` | 
|**&emsp; ∟ moneys**               | Array   | 节点金额信息             | 必填   | - | 子预算项对应的预算金额 | 
|**&emsp; &emsp; ∟ budgetMoney**   | String  | 预算金额                | 必填   | - | 预算金额，非最末级节点传 `null` 即可，由系统自动累加此维度下子预算额度求和 | 
|**&emsp; &emsp; ∟ nodeId**        | String  | 预算节点ID              | 必填   | - | 与上面预算节点ID保持一致，即一个预算节点下包含 `节点信息` 和 `预算金额` 两部分属性 | 
|**&emsp; &emsp; ∟ periodTime**    | String  | 第几个周期               | 必填   | - | 年度和自定义区间: `1`<br/>半年度: `1`，`2`<br/>季度: `1`，`2`，`3`，`4`<br/>月度: `1~12`<br/>根据控制周期类型填写，例如：预算树控制周期是按季度类型，每个子预算节点的 `moneys` 数组数据，就包含4个对象，表示每个季度对应的预算金额 | 
|**&emsp; ∟ control**              | String  | 节点控制方式             | 必填   | ALLOW | 当预算超额时的控制方式<br/> `ALLOW` : 允许提交单据<br/>`FORBID` : 禁止提交单据<br/>`IGNORED` : 什么都不做 | 
|**&emsp; ∟ nodeId**               | String  | 预算节点ID              | 必填   | - | 与上面预算节点ID保持一致 | 
|**&emsp; ∟ parentId**             | String  | 父节点ID                | 非必填 | - | 父节点ID，为空表示根节点 | 
|**visibilities**                   | Array   | 节点负责人              | 非必填 | - | 负责人能在相关报销单和预算报表中查看该预算节点的进度 |
|**&emsp; ∟ nodeId**               | String  | 预算节点ID              | 非必填 | - | 与上面预算节点ID保持一致 |
|**&emsp; ∟ staffIds**             | Array   | 人员ID                 | 非必填 | - | 值为[员工ID](/docs/open-api/corporation/get-all-staffs) |
|**&emsp; ∟ roleDefIds**           | Array   | 角色ID                 | 非必填 | - | 值为[角色ID](/docs/open-api/corporation/get-roles-group) |
|**editInChargers**                 | Array   | 预算编制负责人           | 非必填 | - | 负责该节点的预算编制，如不填写则默认与上级节点相同。<br/>需开通 `预算编制` 功能方可见此字段 |
|**&emsp; ∟ nodeId**               | String  | 预算节点ID              | 非必填 | - | 与上面预算节点ID保持一致 |
|**&emsp; ∟ staffIds**             | Array   | 人员ID                 | 非必填 | - | 值为[员工ID](/docs/open-api/corporation/get-all-staffs) |
|**&emsp; ∟ roleDefIds**           | Array   | 角色ID                 | 非必填 | - | 值为[角色ID](/docs/open-api/corporation/get-roles-group) |
|**version**                       | Long    | 预算包版本               | 非必填 | 1 | 不填写此参数默认为 `1` |

:::tip
 - “节点维度”如下图所示，是预算节点的划分依据<br/>
 &emsp; `dimensionType(维度种类)` 传参见参数介绍，四种类型固定；<br/>
 &emsp; `dimensionId(维度种类的标识ID)` 传参为对应维度种类的[全局字段名称](/docs/open-api/forms/get-customs-param)；例如：<br/>
 &emsp; &emsp; - 职级预置 : `E_system_rank` <br/>
 &emsp; &emsp; - 岗位预置 : `E_system_post` <br/>
 &emsp; &emsp; - 成本中心预置 : `E_system_costcenter `<br/>
 &emsp; &emsp; - 品类 : `品类` <br/>
 &emsp; &emsp; - 法人实体 : `法人实体` <br/>
 &emsp; &emsp; - 项目 : `项目` <br/>
 &emsp; &emsp; - 提交人 : `submitterId` <br/>
 &emsp; &emsp; - 费用承担部门 : `expenseDepartment` <br/>
 &emsp; &emsp; - 费用类型 : `feeTypeId` <br/>
 &emsp; &emsp; - 自建的扩展档案字段，例如“国家”，传参为 `u_国家` <br/>

  ![image](images/节点维度信息.png)

 - 如果只是创建预算树，不增加预算节点 `addNodes` 对象参数可不传，系统自动创建预算树根节点。
 - 系统中新建预算时“添加预算控制条件”表示预算树根节点的节点维度信息。示例见请求CURL。

 ![image](images/添加预算控制条件.png)

 ![image](images/预算树的控制条件释义.png)
:::

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/budgets/create?accessToken=ID_3oSqGqf04lw:Urf3lsFgBp00gw' \
--header 'Content-Type: application/json' \
--data-raw '{
    "budgetInfo": {
        "active": true,             //是否发布
        "name": "测试预算-1013-10", //预算树名称
        "corporationId": "Urf3lsFgBp00gw",
        "isCustom": false,         //是否自定义区间
        "isRollCalc": false,       //是否滚动预算
        "period": {
            "annual": "2021",      //控制年度
            "period": "SEASON",    //年度内分割方式，SEASON: 按季度, MONTH: 按月份, HALF_YEAR: 半年, YEAR: 整年, null: 非周期控制。
            "startTime": null,     //非周期控制开始时间
            "endTime": null        //非周期控制结束时间
        }
    },
    "addNodes": [                   //追加节点
        {
            "id": "1634112660000",  //不重复的唯一ID，例如:可用毫秒级时间戳作为节点ID
            "code": "根节点",
            "content": [            //节点维度信息，根节点可传空，也可添加预算树控制条件
                 {
                     "dimensionType": "STAFF",  //员工类型
                     "dimensionId": "submitterId",   
                     "mustLeaf": true,
                     "contentId": "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
                 },
                 {
                      "dimensionType": "PROJECT",      //扩展档案
                      "dimensionId": "E_system_rank",  //系统字段示例：E_system_rank 职级预置  E_system_post 岗位预置
                      "mustLeaf": true,
                      "contentId": "ID_3oOKW5BiYh0"
                 }
            ],
            "moneys": [
                {
                    "budgetMoney": null,   //根节点传空，由系统自动累加子预算额度合计
                    "nodeId": "1634112660000",
                    "periodTime": "1"      //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": null,   //根节点传空，由系统自动累加子预算额度合计
                    "nodeId": "1634112660000",
                    "periodTime": "2"      //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": null,   //根节点传空，由系统自动累加子预算额度合计
                    "nodeId": "1634112660000",
                    "periodTime": "3"      //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": null,   //根节点传空，由系统自动累加子预算额度合计
                    "nodeId": "1634112660000",
                    "periodTime": "4"      //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                }
            ],
            "control": "ALLOW",            //当预算超额时,控制方式(ALLOW:允许提交单据 FORBID:禁止提交单据 IGNORED:什么都不做)
            "nodeId": "1634112660000",     //与上面预算节点ID保持一致
            "parentId": ""                 //父节点ID为空就是根节点
        },
        {
            "id": "1634112670000",         //不重复的唯一ID，例如:可用毫秒级时间戳作为节点ID
            "code": "维度-1", 
            "content": [
                {
                    "dimensionType": "PROJECT",    //DEPART:费用承担部门 PROJECT:扩展档案 FEE_TYPE:费用类型 STAFF:员工
                    "dimensionId": "项目",         //DEPART:expenseDepartment PROJECT:项目(档案名称,例如:项目,法人实体) FEE_TYPE:feeTypeId STAFF:submitterId 参数为冒号之后的部分
                    "mustLeaf": true,              //true:非本级 false:本级
                    "contentId": "ID_3oOKW5BgYh0"  //对应维度种类下的项ID，例如:部门维度就是部门ID，扩展档案维度就是档案项ID
                }
            ],
            "moneys": [
                {
                    "budgetMoney": null,         //非最末级节点传空即可，由系统自动累加此维度下子预算额度合计
                    "nodeId": "1634112670000",
                    "periodTime": "1"            //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": null,         //非最末级节点传空即可，由系统自动累加此维度下子预算额度合计
                    "nodeId": "1634112670000",
                    "periodTime": "2"            //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": null,         //非最末级节点传空即可，由系统自动累加此维度下子预算额度合计
                    "nodeId": "1634112670000",
                    "periodTime": "3"            //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": null,         //非最末级节点传空即可，由系统自动累加此维度下子预算额度合计
                    "nodeId": "1634112670000",
                    "periodTime": "4"            //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                }
            ],
            "control": "ALLOW",                  //当预算超额时,控制方式(ALLOW:允许提交单据 FORBID:禁止提交单据 IGNORED:什么都不做)
            "nodeId": "1634112670000",
            "parentId": "1634112660000"          //父节点ID为空就是根节点
        },
        {
            "id": "1634112670001",
            "code": "维度-2",
            "content": [
                {
                    "dimensionType": "PROJECT",
                    "dimensionId": "项目",
                    "mustLeaf": true,
                    "contentId": "ID_3mwUvA4ib1M"
                }
            ],
            "moneys": [
                {
                    "budgetMoney": "11.00",  //维度下没有子预算，需要传入预算金额
                    "nodeId": "1634112670001",
                    "periodTime": "1"        //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": "22.00",  //维度下没有子预算，需要传入预算金额
                    "nodeId": "1634112670001",
                    "periodTime": "2"        //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": "33.00",  //维度下没有子预算，需要传入预算金额
                    "nodeId": "1634112670001",
                    "periodTime": "3"        //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": "44.00",  //维度下没有子预算，需要传入预算金额
                    "nodeId": "1634112670001",
                    "periodTime": "4"        //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                }
            ],
            "control": "ALLOW",             //当预算超额时,控制方式(ALLOW:允许提交单据 FORBID:禁止提交单据 IGNORED:什么都不做)
            "nodeId": "1634112670001",
            "parentId": "1634112660000"     //父节点ID为空就是根节点
        },
        {
            "id": "1634112670002",
            "code": "维度-1-1",
            "content": [
                {
                    "dimensionType": "DEPART",
                    "dimensionId": "expenseDepartment",
                    "mustLeaf": true,
                    "contentId": "Urf3lsFgBp00gw"
                }
            ],
            "moneys": [
                {
                    "budgetMoney": "10.00",  //维度下没有子预算，需要传入预算金额
                    "nodeId": "1634112670002",
                    "periodTime": "1"        //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": "20.00",  //维度下没有子预算，需要传入预算金额
                    "nodeId": "1634112670002",
                    "periodTime": "2"        //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": "30.00",  //维度下没有子预算，需要传入预算金额
                    "nodeId": "1634112670002",
                    "periodTime": "3"        //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                },
                {
                    "budgetMoney": "40.00",  //维度下没有子预算，需要传入预算金额
                    "nodeId": "1634112670002",
                    "periodTime": "4"        //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                }
            ],
            "control": "ALLOW",              //节点控制方式（ALLOW：允许提交单据，FORBID：禁止提交单据）
            "nodeId": "1634112670002",
            "parentId": "1634112670000"      //父节点ID为空就是根节点
        }
    ],
    "visibilities": [                        //节点负责人
        {
            "nodeId": "1634112660000",
            "staffIds": [
                "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
            ],
            "roleDefIds": []
        },
        {
            "nodeId": "1634112670000",
            "staffIds": [
                "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
            ],
            "roleDefIds": []
        },
        {
            "nodeId": "1634112670001",
            "staffIds": [
                "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
            ],
            "roleDefIds": []
        },
        {
            "nodeId": "1634112670002",
            "staffIds": [
                "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
            ],
            "roleDefIds": []
        }
    ],
    "editInChargers": [  //预算编制负责人
        {
            "nodeId": "1634112660000",
            "staffIds": [
                "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
            ],
            "roleDefIds": []
        },
        {
            "nodeId": "1634112670000",
            "staffIds": [
                "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
            ],
            "roleDefIds": []
        },
        {
            "nodeId": "1634112670001",
            "staffIds": [
                "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
            ],
            "roleDefIds": []
        },
        {
            "nodeId": "1634112670002",
            "staffIds": [
                "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
            ],
            "roleDefIds": []
        }
    ],
    "version":1
}'
```

## 成功响应
```json
{   
    "id": "dJEb_UkozIlI00"        //预算树ID
}
```

## 失败响应
预算树名称重复时，返回此响应结果：
```text
预算名称不可重复
```