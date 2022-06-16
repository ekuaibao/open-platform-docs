# 批量更新(新增/修改/删除)预算节点
批量更新指定预算包的数据（节点、可见性等），对于草稿状态的也会返回记录，周期金额不可省略。

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v2.1/budgets/$`budgetId`/batchUpdate"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.5.0**](/docs/open-api/notice/update-log#150) -> 🚀 接口升级 `v2.1` 版本，新增 `type` 类型参数，支持 `id` 或 `code` 传参。<br/>
  [**1.1.1**](/docs/open-api/notice/update-log#111) -> 🐞 优化了接口校验逻辑，报错时会准确描述具体出错的节点和参数。<br/>

  </div>
</details>


## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **budgetId** | String  |预算包ID | 必填 | - | [预算包ID获取](/docs/open-api/budget/get-budget-list) |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**        | String | 参数类型   | 非必填 | id | `id` : 传id值 &emsp; `code` : 传code值<br/>**请保证 `code` 唯一，『员工』和『部门』的 `code` 在系统上允许为空和重复** |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**addNodes**                       | Array  | 追加节点                | 非必填  | - | 添加预算包下子预算项 | 
|**&emsp; ∟ id**                   | String | 预算节点ID               | 必填  | - | 不重复的唯一ID，例如：可用毫秒级时间戳作为节点ID | 
|**&emsp; ∟ code**                 | String | 节点编码                 | 必填  | - | 可传 `""`，**长度不能超过20个字符** | 
|**&emsp; ∟ content**              | Array  | 节点维度                 | 必填  | - | 预算分解依据，例如根据"费用类型"、"部门"分解<br/>**只有根节点允许有多个维度，其他子级节点有且仅有一个维度信息** | 
|**&emsp; &emsp; ∟ dimensionType** | String | 维度种类                 | 必填  | - | `DEPART` : 费用承担部门<br/>`PROJECT` : 扩展档案<br/>`FEE_TYPE` : 费用类型<br/>`STAFF` : 员工 | 
|**&emsp; &emsp; ∟ dimensionId**   | String | 维度种类的标识ID          | 必填  | - | 参数为冒号之后的部分：<br/>DEPART : `expenseDepartment`<br/>FEE_TYPE : `feeTypeId`<br/>PROJECT : 通过 [全局字段名称](/docs/open-api/forms/get-customs-param) 获取，见下方 **TIP**<br/>STAFF : `submitterId` | 
|**&emsp; &emsp; ∟ mustLeaf**      | boolean | 维度是否必定为叶子节点(本部) | 必填  | false | `true` : 非本级 &emsp; `false` : 本级<br/>[什么是“维度是否必定为叶子节点(本部)”？](/docs/open-api/budget/question-answer#问题一) | 
|**&emsp; &emsp; ∟ contentId**     | String | 维度内容ID               | 必填  | - | 对应维度种类下实例项的 **ID** 或 **CODE**，**与 `type` 参数保持一致**<br/>例如：部门维度就是 **部门ID/CODE**，扩展档案维度就是 **档案项ID/CODE** | 
|**&emsp; ∟ moneys**               | Array  | 节点金额                 | 必填  | - | 子预算项对应的预算金额 | 
|**&emsp; &emsp; ∟ budgetMoney**   | String | 预算金额                 | 必填  | - | [周期](/docs/open-api/budget/question-answer#问题二) 预算金额，非最末级节点传 `0` 即可，由系统自动累加此维度下子预算额度求和 | 
|**&emsp; &emsp; ∟ nodeId**        | String | 预算节点ID               | 必填  | - | 与上面预算节点ID保持一致，即一个预算节点下包含 **节点信息** 和 **预算金额** 两部分属性 | 
|**&emsp; &emsp; ∟ periodTime**    | String | 第几个周期                | 必填  | - | 年度和自定义区间: `1`<br/>半年度: `1`、`2`<br/>季度: `1`、`2`、`3`、`4`<br/>月度: `1~12`<br/>根据控制周期类型填写，例如：预算包控制周期是 **季度** 类型，每个子预算节点的 `moneys` 数组数据，就包含4个对象，表示每个季度对应的预算金额 | 
|**&emsp; ∟ overControllerRate**   | String  | 超标比例                | 非必填  | 100 | 预算超标比例（百分比），`1` ≤ 传参 ≤ `1000` | 
|**&emsp; ∟ control**              | String  | 节点控制方式             | 必填   | ALLOW | 当预算超额时的控制方式<br/> `ALLOW` : 允许单据提交，并显示警告<br/>`FORBID` : 禁止提交单据<br/>`IGNORED` : 允许单据提交，不显示警告 | 
|**&emsp; ∟ freeze**               | Boolean | 预算冻结                | 非必填 | false | `true` : 冻结 &emsp; `false` : 不冻结 | 
|**&emsp; ∟ nodeId**               | String | 预算节点ID               | 必填   | - | 与上面预算节点ID保持一致 | 
|**&emsp; ∟ parentId**             | String | 父节点ID                 | 必填 | - | [获取预算包详细信息](/docs/open-api/budget/get-budget-details) 返回值中的 `value` -> `budgetInfo` -> `tree` -> `id` | 
|**updateNodes**                    | Array  | 变更节点                 | 非必填 |- | 数据格式与 `addNodes`（追加节点）保持一致<br/>**节点维度无法变更，可不传**<br/>**节点预算金额不变更时，可不传** |
|**deleteNodes**                    | Array  | 删除节点                 | 非必填 |- | 预算节点ID |
|**visibilities**                   | Array  | 预算负责人数组            | 非必填 |- | 预算负责人能在相关报销单和预算报表中查看该预算节点的进度 |
|**&emsp; ∟ id**                    | String | 预算负责人配置ID           | 非必填 |- | 更新已有预算负责人时需要传入，新增的节点传 `""`<br/>[节点负责人配置ID获取](/docs/open-api/budget/get-budget-details) |
|**&emsp; ∟ corporationId**         | String | 企业ID                   | 非必填 |- | [企业ID获取](/docs/open-api/getting-started/origin)<br/> |
|**&emsp; ∟ budgetId**              | String | 预算包ID                 | 非必填 |- | [获取预算包列表](/docs/open-api/budget/get-budget-list) 中的ID<br/> |
|**&emsp; ∟ budgetVersion**         | String | 预算版本                 | 非必填 |- | [预算版本获取](/docs/open-api/budget/get-budget-details)<br/> |
|**&emsp; ∟ nodeId**                | String | 预算节点ID               | 非必填 |- | 要设置可见性的预算节点ID<br/>**配置 `visibilities`（预算负责人）时必填** |
|**&emsp; ∟ staffIds**              | Array  | 员工ID                  | 非必填 |- | 值为 [员工ID](/docs/open-api/corporation/get-all-staffs) 或 CODE，**与 `type` 参数保持一致**<br/>**传 `[]` 空数组表示清空原数据** |
|**&emsp; ∟ roleDefIds**            | Array  | 角色ID                  | 非必填 |- | 值为 [角色ID](/docs/open-api/corporation/get-roles-group) 或 [CODE](/docs/open-api/corporation/question-answer#问题三)，**与 `type` 参数保持一致**<br/>**传 `[]` 空数组表示清空原数据** |
|**editInChargers**                 | Array  | 预算编制人数组            | 非必填 |- | 负责该节点的预算编制<br/>需开通【**预算编制**】功能方可见此字段 |
|**&emsp; ∟ id**                    | String | 预算编制人配置ID           | 非必填 |- | 更新已有预算编制人时需要传入，新增的节点传 `""`<br/>[预算编制人配置ID获取](/docs/open-api/budget/get-budget-details) |
|**&emsp; ∟ corporationId**         | String | 企业ID                   | 非必填 |- | [企业ID获取](/docs/open-api/getting-started/origin)<br/> |
|**&emsp; ∟ budgetId**              | String | 预算包ID                 | 非必填 |- | [获取预算包列表](/docs/open-api/budget/get-budget-list) 中的ID<br/> |
|**&emsp; ∟ budgetVersion**         | String | 预算版本                 | 非必填 |- | [预算版本获取](/docs/open-api/budget/get-budget-details)<br/> |
|**&emsp; ∟ nodeId**                | String | 预算节点ID               | 非必填 |- | 要设置可见性的预算节点ID<br/>**配置 `editInChargers`（预算编制人）时必填** |
|**&emsp; ∟ staffIds**              | Array  | 员工ID                  | 非必填 |- | 值为 [员工ID](/docs/open-api/corporation/get-all-staffs) 或 CODE，**与 `type` 参数保持一致**<br/>**传 `[]` 空数组表示清空原数据** |
|**&emsp; ∟ roleDefIds**            | Array  | 角色ID                  | 非必填 |- | 值为 [角色ID](/docs/open-api/corporation/get-roles-group) 或 [CODE](/docs/open-api/corporation/question-answer#问题三)，**与 `type` 参数保持一致**<br/>**传 `[]` 空数组表示清空原数据** |
|**active**                         | Boolean | 是否为发布状态           | 必填  | false | `true` : 发布 &emsp; `false` : 草稿 <br/>**此参数作用于整个预算包，而非某个预算节点**|
|**publish**                        | Boolean | 当前更新是否立即发布      | 必填  | false | `true` : 立即<br/> `false` : 加入缓存（用于多次批量更新，每次更新不立即发布，等到最后一次更新完再发布）<br/>**参数为 `true` 时才会在系统中显示** |
|**version**                        | Long   | 当前预算包的版本          | 必填  |- | [预算版本获取](/docs/open-api/budget/get-budget-details) |

:::tip
- 除了 **变更预算包状态（发布/草稿）**场景外，`addNodes`（追加节点）、`updateNodes`（变更节点）、`deleteNodes`（删除节点）三个对象参数至少填写一个。
- **节点维度** 如下图所示，是预算节点的划分依据<br/>
  &emsp; `dimensionType（维度种类）` 传参见参数介绍，四种类型固定；<br/>
  &emsp; `dimensionId（维度种类的标识ID）` 传参为对应维度种类的 [全局字段名称](/docs/open-api/forms/get-customs-param)；例如：<br/>
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
:::

## CURL
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="新增预算节点(id)" label="新增预算节点(id)" default>

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.1/budgets/$ID_3D$8ov23ECg/batchUpdate?accessToken=ID_3EdP4O14_I0:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "addNodes":[
        {
            "id":"20220422-1",                 //节点ID
            "code":"批量新增-1",               //节点编码
            "content":[                        //节点维度，以何种类型分解预算，与同级预算要保持一致
                {
                    "dimensionType": "PROJECT",   //DEPART：费用承担部门，PROJECT：扩展档案，FEE_TYPE：费用类型，STAFF：员工
                    "dimensionId": "项目",        //DEPART：expenseDepartment，PROJECT：项目（档案名称，例如：项目、法人实体），FEE_TYPE：feeTypeId，STAFF：submitterId，参数为冒号之后的部分
                    "mustLeaf": true,             //true：非本级，false：本级
                    "contentId": "ID_3EdP4O159I0" //对应维度种类下实例项的ID，例如：部门维度就是部门ID，扩展档案维度就是档案项ID
                }
            ],
            "moneys":[                          //节点金额
                {
                    "budgetMoney":"0",          //非最末级节点传 0 即可，由系统自动累加此维度下子预算额度求和
                    "nodeId":"20220422-1",
                    "periodTime":"1"            //第几个周期
                },
                {
                    "budgetMoney":"0",
                    "nodeId":"20220422-1",
                    "periodTime":"2"
                },
                {
                    "budgetMoney":"0",
                    "nodeId":"20220422-1",
                    "periodTime":"3"
                },
                {
                    "budgetMoney":"0",
                    "nodeId":"20220422-1",
                    "periodTime":"4"
                }
            ],
            "control":"ALLOW",          //当预算超额时，控制方式(ALLOW：允许提交单据 FORBID：禁止提交单据 IGNORED：什么都不做)
            "freeze": false,            //预算冻结，默认值false，不冻结
            "nodeId":"20220422-1",      //节点ID
            "parentId":"20220419"       //父节点ID
        },
        {
            "id":"20220422-1-1",
            "code":"批量新增-1-子",
            "content":[
                {
                    "dimensionType": "PROJECT",     //DEPART：费用承担部门，PROJECT：扩展档案，FEE_TYPE：费用类型，STAFF：员工
                    "dimensionId": "E_system_post", //DEPART：expenseDepartment，PROJECT：项目（档案名称，例如：项目、法人实体），FEE_TYPE：feeTypeId，STAFF：submitterId，参数为冒号之后的部分
                    "mustLeaf": true,               //true：非本级，false：本级
                    "contentId": "ID_3Ah8fh60EEg"   //对应维度种类下实例项的ID，例如：部门维度就是部门ID，扩展档案维度就是档案项ID
                }
            ],
            "moneys":[
                {
                    "budgetMoney":"100",
                    "nodeId":"20220422-1-1",
                    "periodTime":"1"
                },
                {
                    "budgetMoney":"200",
                    "nodeId":"20220422-1-1",
                    "periodTime":"2"
                },
                {
                    "budgetMoney":"300",
                    "nodeId":"20220422-1-1",
                    "periodTime":"3"
                },
                {
                    "budgetMoney":"400",
                    "nodeId":"20220422-1-1",
                    "periodTime":"4"
                }
            ],
            "control":"ALLOW",      //当预算超额时，控制方式(ALLOW：允许提交单据 FORBID：禁止提交单据 IGNORED：什么都不做)
            "freeze": false,        //预算冻结，默认值false，不冻结
            "nodeId":"20220422-1-1",//节点ID
            "parentId":"20220422-1" //父节点ID
        }
    ],
    // "updateNodes":[],  //变更节点
    // "deleteNodes":[],  //删除节点
    "visibilities":[                          //预算负责人数组
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"1",              //预算版本
            "nodeId":"20220422-1",            //预算节点ID
            "staffIds":[                      //员工ID
                "bwa3wajigF0WH0:ID_3lokDfb1p5w"
            ],
            "roleDefIds":[]
        },
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"1",              //预算版本
            "nodeId":"20220422-1-1",          //预算节点ID
            "staffIds":[                      //员工ID
                "bwa3wajigF0WH0:ID_3lokDfb1p5w"
            ],
            "roleDefIds":[]
        }
    ],
    "editInChargers":[                        //预算编制人数组
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"1",              //预算版本
            "nodeId":"20220422-1",            //预算节点ID
            "staffIds":[                      //员工ID
                "bwa3wajigF0WH0:ID_3lokDfb1p5w"
            ],
            "roleDefIds":[]
        },
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"1",              //预算版本
            "nodeId":"20220422-1-1",          //预算节点ID
            "staffIds":[                      //员工ID
                "bwa3wajigF0WH0:ID_3lokDfb1p5w"
            ],
            "roleDefIds":[]
        }
    ],
    "active":true,       //是否为发布状态
    "publish":true,      //当前更新是否立即发布
    "version":1          //当前预算包的版本
}'
```
</TabItem>
<TabItem value="新增预算节点(code)" label="新增预算节点(code)" default>

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.1/budgets/$ID_3D$8ov23ECg/batchUpdate?accessToken=ID_3EdP4O14_I0:bwa3wajigF0WH0&type=code' \
--header 'Content-Type: application/json' \
--data-raw '{
    "addNodes":[
        {
            "id":"20220422-1",                 //节点ID
            "code":"批量新增-1",               //节点编码
            "content":[                        //节点维度，以何种类型分解预算，与同级预算要保持一致
                {
                    "dimensionType": "PROJECT",   //DEPART：费用承担部门，PROJECT：扩展档案，FEE_TYPE：费用类型，STAFF：员工
                    "dimensionId": "项目",        //DEPART：expenseDepartment，PROJECT：项目（档案名称，例如：项目、法人实体），FEE_TYPE：feeTypeId，STAFF：submitterId，参数为冒号之后的部分
                    "mustLeaf": true,             //true：非本级，false：本级
                    "contentId": "CODE1"          //对应维度种类下实例项的CODE，例如：部门维度就是部门CODE，扩展档案维度就是档案项CODE
                }
            ],
            "moneys":[                          //节点金额
                {
                    "budgetMoney":"0",          //非最末级节点传 0 即可，由系统自动累加此维度下子预算额度求和
                    "nodeId":"20220422-1",
                    "periodTime":"1"            //第几个周期
                },
                {
                    "budgetMoney":"0",
                    "nodeId":"20220422-1",
                    "periodTime":"2"
                },
                {
                    "budgetMoney":"0",
                    "nodeId":"20220422-1",
                    "periodTime":"3"
                },
                {
                    "budgetMoney":"0",
                    "nodeId":"20220422-1",
                    "periodTime":"4"
                }
            ],
            "control":"ALLOW",          //当预算超额时，控制方式(ALLOW：允许提交单据 FORBID：禁止提交单据 IGNORED：什么都不做)
            "freeze": false,            //预算冻结，默认值false，不冻结
            "nodeId":"20220422-1",      //节点ID
            "parentId":"20220419"       //父节点ID
        },
        {
            "id":"20220422-1-1",
            "code":"批量新增-1-子",
            "content":[
                {
                    "dimensionType": "PROJECT",     //DEPART：费用承担部门，PROJECT：扩展档案，FEE_TYPE：费用类型，STAFF：员工
                    "dimensionId": "E_system_post", //DEPART：expenseDepartment，PROJECT：项目（档案名称，例如：项目、法人实体），FEE_TYPE：feeTypeId，STAFF：submitterId，参数为冒号之后的部分
                    "mustLeaf": true,               //true：非本级，false：本级
                    "contentId": "CODE2"            //对应维度种类下实例项的CODE，例如：部门维度就是部门CODE，扩展档案维度就是档案项CODE
                }
            ],
            "moneys":[
                {
                    "budgetMoney":"100",
                    "nodeId":"20220422-1-1",
                    "periodTime":"1"
                },
                {
                    "budgetMoney":"200",
                    "nodeId":"20220422-1-1",
                    "periodTime":"2"
                },
                {
                    "budgetMoney":"300",
                    "nodeId":"20220422-1-1",
                    "periodTime":"3"
                },
                {
                    "budgetMoney":"400",
                    "nodeId":"20220422-1-1",
                    "periodTime":"4"
                }
            ],
            "control":"ALLOW",      //当预算超额时，控制方式(ALLOW：允许提交单据 FORBID：禁止提交单据 IGNORED：什么都不做)
            "freeze": false,        //预算冻结，默认值false，不冻结
            "nodeId":"20220422-1-1",//节点ID
            "parentId":"20220422-1" //父节点ID
        }
    ],
    // "updateNodes":[],  //变更节点
    // "deleteNodes":[],  //删除节点
    "visibilities":[                          //预算负责人数组
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"1",              //预算版本
            "nodeId":"20220422-1",            //预算节点ID
            "staffIds":[                      //员工CODE（工号）
                "1001"
            ],
            "roleDefIds":[]
        },
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"1",              //预算版本
            "nodeId":"20220422-1-1",          //预算节点ID
            "staffIds":[                      //员工CODE（工号）
                "1002"
            ],
            "roleDefIds":[]
        }
    ],
    "editInChargers":[                        //预算编制人数组
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"1",              //预算版本
            "nodeId":"20220422-1",            //预算节点ID
            "staffIds":[                      //员工CODE（工号）
                "1001"
            ],
            "roleDefIds":[]
        },
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"1",              //预算版本
            "nodeId":"20220422-1-1",          //预算节点ID
            "staffIds":[                      //员工CODE（工号）
                "1002"
            ],
            "roleDefIds":[]
        }
    ],
    "active":true,       //是否为发布状态
    "publish":true,      //当前更新是否立即发布
    "version":1          //当前预算包的版本
}'
```
</TabItem>
<TabItem value="更新预算节点(id)" label="更新预算节点(id)">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.1/budgets/$ID_3D$8ov23ECg/batchUpdate?accessToken=ID_3EnD3w6lOe0:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    // "addNodes":[],     //新增节点
    "updateNodes":[       //变更节点
        {
            "id":"20220419-1",       //节点ID
            "code":"维度-1-更新",    //节点编码
            "content":[],            //节点维度无法变更
            "moneys":[
                {
                    "budgetMoney":"111",  //更新节点预算金额
                    "nodeId":"20220419-1",
                    "periodTime":"1"      //第几个周期
                },
                {
                    "budgetMoney":"222",
                    "nodeId":"20220419-1",
                    "periodTime":"2"
                },
                {
                    "budgetMoney":"333",
                    "nodeId":"20220419-1",
                    "periodTime":"3"
                },
                {
                    "budgetMoney":"444",
                    "nodeId":"20220419-1",
                    "periodTime":"4"
                }
            ],
            "control":"ALLOW",      //当预算超额时，控制方式(ALLOW：允许提交单据 FORBID：禁止提交单据 IGNORED：什么都不做)
            "freeze": false,        //预算冻结，默认值false，不冻结
            "nodeId":"20220419-1",  //节点ID
            "parentId":"20220419"   //父节点ID
        }
    ],
    // "deleteNodes":[],                      //删除节点
    "visibilities":[                          //预算负责人数组
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"2",              //预算版本，节点变更后，版本 +1
            "nodeId":"20220419-1",            //预算节点ID
            "staffIds":[                      //员工ID
                "bwa3wajigF0WH0:ID_3lokDfb1p5w","bwa3wajigF0WH0:qKZ3wlg6bv9OGg"
            ],
            "roleDefIds":[]
        }
    ],
    "editInChargers":[                        //预算编制人数组
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"2",              //预算版本，节点变更后，版本 +1
            "nodeId":"20220419-1",            //预算节点ID
            "staffIds":[                      //员工ID
                "bwa3wajigF0WH0:ID_3lokDfb1p5w","bwa3wajigF0WH0:qKZ3wlg6bv9OGg"
            ],
            "roleDefIds":[]
        }
    ],
    "active":true,       //是否为发布状态
    "publish":true,      //当前更新是否立即发布
    "version":2          //当前预算包的版本，节点变更后，版本 +1
}'
```
</TabItem>
<TabItem value="更新预算节点(code)" label="更新预算节点(code)">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.1/budgets/$ID_3D$8ov23ECg/batchUpdate?accessToken=ID_3EnD3w6lOe0:bwa3wajigF0WH0&type=code' \
--header 'Content-Type: application/json' \
--data-raw '{
    // "addNodes":[],     //新增节点
    "updateNodes":[       //变更节点
        {
            "id":"20220419-1",       //节点ID
            "code":"维度-1-更新",    //节点编码
            "content":[],            //节点维度无法变更
            "moneys":[
                {
                    "budgetMoney":"111",  //更新节点预算金额
                    "nodeId":"20220419-1",
                    "periodTime":"1"      //第几个周期
                },
                {
                    "budgetMoney":"222",
                    "nodeId":"20220419-1",
                    "periodTime":"2"
                },
                {
                    "budgetMoney":"333",
                    "nodeId":"20220419-1",
                    "periodTime":"3"
                },
                {
                    "budgetMoney":"444",
                    "nodeId":"20220419-1",
                    "periodTime":"4"
                }
            ],
            "control":"ALLOW",      //当预算超额时，控制方式(ALLOW：允许提交单据 FORBID：禁止提交单据 IGNORED：什么都不做)
            "freeze": false,        //预算冻结，默认值false，不冻结
            "nodeId":"20220419-1",  //节点ID
            "parentId":"20220419"   //父节点ID
        }
    ],
    // "deleteNodes":[],                      //删除节点
    "visibilities":[                          //预算负责人数组
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"2",              //预算版本，节点变更后，版本 +1
            "nodeId":"20220419-1",            //预算节点ID
            "staffIds":[                      //员工CODE（工号）
                "1001","1002"
            ],
            "roleDefIds":[]
        }
    ],
    "editInChargers":[                        //预算编制人数组
        {
            "id":"",                          //更新已有预算负责人时需要传入，新增的节点传 ""
            "corporationId":"bwa3wajigF0WH0", //企业ID
            "budgetId":"ID_3D$8ov23ECg",      //预算包ID
            "budgetVersion":"2",              //预算版本，节点变更后，版本 +1
            "nodeId":"20220419-1",            //预算节点ID
            "staffIds":[                      //员工CODE（工号）
                "1001","1002"
            ],
            "roleDefIds":[]
        }
    ],
    "active":true,       //是否为发布状态
    "publish":true,      //当前更新是否立即发布
    "version":2          //当前预算包的版本，节点变更后，版本 +1
}'
```
</TabItem>
<TabItem value="冻结预算节点" label="冻结预算节点">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.1/budgets/$ID_3D$8ov23ECg/batchUpdate?accessToken=ID_3EnD3w6lOe0:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    // "addNodes":[],     //新增节点
    "updateNodes":[       //变更节点
        {
            "id":"20220419-1",        //节点ID
            "code":"维度-1-更新",     //节点编码
            "control":"ALLOW",        //当预算超额时，控制方式(ALLOW：允许提交单据 FORBID：禁止提交单据 IGNORED：什么都不做)
            "freeze": true,           //预算冻结，默认值false，不冻结
            "nodeId":"20220419-1",    //节点ID
            "parentId":"20220419"     //父节点ID
        }
    ],
    // "deleteNodes":[], //删除节点
    "active":true,       //是否为发布状态
    "publish":true,      //当前更新是否立即发布
    "version":2          //当前预算包的版本，节点变更后，版本 +1
}'
```
</TabItem>
<TabItem value="删除预算节点" label="删除预算节点">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.1/budgets/$ID_3D$8ov23ECg/batchUpdate?accessToken=ID_3Eo3_NB0Se0:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    // "addNodes":[],     //新增节点
    // "updateNodes":[],  //变更节点
    "deleteNodes":[       //删除节点
        "20220419-2","20220419-1-1"
    ],  
    "active":true,       //是否为发布状态
    "publish":true,      //当前更新是否立即发布
    "version":2          //当前预算包的版本，节点变更后，版本 +1
}'
```
</TabItem>
<TabItem value="变更预算包状态（发布/草稿）" label="变更预算包状态（发布/草稿）">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2.1/budgets/$ID_3D$8ov23ECg/batchUpdate?accessToken=ID_3Eo3_NB0Se0:bwa3wajigF0WH0' \
--header 'Content-Type: application/json' \
--data-raw '{
    // "addNodes":[],     //新增节点
    // "updateNodes":[],  //变更节点
    // "deleteNodes":[],  //删除节点
    "active":false,       //是否为发布状态
    "publish":true,       //当前更新是否立即发布
    "version":3           //当前预算包的版本，节点变更后，版本 +1
}'
```
</TabItem>
</Tabs>

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
当 `budgetId`（预算包ID）不存在时，报错如下：
```json
{
    "value": {
        "success": false,
        "errmsg": "不存在的预算树"
    }
}
```

当新增节点与同一层级节点维度不一致时，报错如下：
```json
{
    "value": {
        "success": false,
        "errmsg": "节点维度不统一, code=根节点"
    }
}
```

当 **参数必填却未填写** 或者 **父级参数存在，子级必填参数未填写** 时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "JSON请求参数不正确",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

当 `moneys` 字段数量与预算包设置周期数不匹配时，报错如下：
```json
{
    "value": {
        "success": false,
        "errmsg": "节点金额数量不匹配"
    }
}
```

当 `version`（预算版本）与当前预算包版本不相等时，报错如下：
```json
{
    "value": {
        "success": false,
        "errmsg": "该预算已经变更请重新获取最新数据"
    }
}
```

当 `parentId`（父节点ID）不存在，预算节点比较少时，直接返回如下报错；<br/>
当预算节点数据量大时，报错信息不返回，可通过 [获取预算异步执行结果](/docs/open-api/budget/get-BudgetInfo-State) 接口获取执行结果和报错信息：
```json
{
    "value": {
        "success": false,
        "errmsg": "节点ID为1634112670003的父节点ID不存在, 请确认参数"
    }
}
```

当 `content`（节点维度信息）参数输入错误，或者与同级维度类型不一致时，报错如下：
```json
{
    "value": {
        "success": false,
        "errmsg": "节点ID为1634112670004的维度信息错误, 请确认参数"
    }
}
```

当『员工』和『部门』的 `code` 在系统上不唯一时，传参重复的 `code` 或者 `code` 不存在，报错如下：
```json
{
    "errorCode": 400,
    "errorMessage": "根据code: [[1002]]不能找到唯一的员工",
    "errorDetails": null,
    "code": null,
    "data": null
}
```