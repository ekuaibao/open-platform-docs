# 新增预算树

{% httpverb "post" %}  /api/openapi/v2/budgets/create {% endhttpverb %}

#### Query Parameters:

| 名称  | 类型  | 描述 | 是否必填 | 默认值 | 备注  |
| :--- | :--- | :--- |:---    |:---   | :--- |
| **accessToken** | String  | 认证token	| 必填 | - | [通过授权接口获取](/getting-started/auth.html) |

#### Body Parameters:

| 名称  | 类型  | 描述 | 是否必填 | 默认值 | 备注  |
| :--- | :--- | :--- |:---    |:---   | :--- |
|**budgetInfo**                    | Object  | 预算树信息    | 必填  | - | 预算树信息 |
|**budgetInfo/active**             | Boolean | 是否激活      | 必填  | false | `true`:发布 `false`:草稿 | 
|**budgetInfo/name**               | String  | 预算树名称    | 必填  | - | 预算树名称 | 
|**budgetInfo/corporationId**      | String  | 企业ID       | 必填  | - | [企业ID获取](/getting-started/origin.html) | 
|**budgetInfo/isCustom**           | Boolean | 是否自定义区间 | 必填  | false | `true`:自定义时间区间(需要`控制周期period`参数设置`null`)<br>`false`:周期控制,周期累计控制均为false | 
|**budgetInfo/isRollCalc**         | Boolean | 是否滚动预算   | 必填  | false | `true`:周期累计控制 `false`:周期控制 | 
|**budgetInfo/period**             | Object  | 预算年度      | 必填  | - | 预算年度 | 
|**budgetInfo/period/annual**      | String  | 年份         | 必填  | - | 例如:2021 | 
|**budgetInfo/period/period**      | String  | 控制周期      | 必填  | - | 年度内分割方式<br>`YEAR`:年度<br>`HALF_YEAR`:半年度<br>`SEASON`:按季度<br>`MONTH`:月度<br>`null`:非周期控制 | 
|**budgetInfo/period/startTime**   | Long    | 非周期控制开始时间 | 非必填  | 毫秒级时间戳 | 是否自定义区间参数`isCustom`为`true`时必填,为`false`时传`null` | 
|**budgetInfo/period/endTime**     | Long    | 非周期控制结束时间 | 非必填  | 毫秒级时间戳 | 是否自定义区间参数`isCustom`为`true`时必填,为`false`时传`null` | 
|**addNodes**                      | Array   | 追加节点信息      | 必填  | - | 添加预算包下子预算项 | 
|**addNodes/id**                   | String  | 预算节点ID       | 必填  | - | 不重复的唯一id,例如:可用毫秒级时间戳作为节点ID | 
|**addNodes/code**                 | String  | 节点编码         | 必填  | - | 子预算编码 | 
|**addNodes/content**              | Array   | 节点维度         | 必填  | - | 预算分解依据,例如根据"费用类型","部门"分解 | 
|**addNodes/content/dimensionType**| String  | 维度种类         | 必填  | - | `DEPART`:费用承担部门<br>`PROJECT`:扩展档案<br>`FEE_TYPE`:费用类型<br>`STAFF`:员工 | 
|**addNodes/content/dimensionId**  | String  | 维度种类的标识ID   | 必填  | - | DEPART:`expenseDepartment`<br>PROJECT:`项目`(档案名称,例如:项目)<br>FEE_TYPE:`feeTypeId`<br>STAFF:`submitterId`<br>参数为冒号之后的部分 | 
|**addNodes/content/mustLeaf**     | Boolean | 维度是否必定为叶节点(本部) | 必填  | false | `true`:非本级 `false`:本级<br>[表示维度类别是否为其子预算节点](\budget\question-answer.html) | 
|**addNodes/content/contentId**    | String  | 维度内容ID        | 必填  | - | 对应维度种类下的项id,例如:部门维度就是`部门id`,扩展档案维度就是`档案项id` | 
|**addNodes/moneys**               | Array   | 节点金额信息      | 必填  | - | 子预算项对应的预算金额 | 
|**addNodes/moneys/budgetMoney**   | String  | 预算金额         | 必填  | - | 预算金额,非最末级节点传`null`即可，由系统自动累加此维度下子预算额度求和 | 
|**addNodes/moneys/nodeId**        | String  | 预算节点id       | 必填  | - | 与上面预算节点id保持一致,即一个预算节点下包含`节点信息`和`预算金额`两部分属性 | 
|**addNodes/moneys/periodTime**    | String  | 第几个周期       | 必填  | - | 年度和自定义区间:`1` 半年度:`1`,`2` 季度:`1`,`2`,`3`,`4` 月度:`1~12` <br>根据控制周期类型填写,例如:预算树控制周期是按季度类型,每个子预算节点的`moneys`数组数据,就包含4个对象,表示每个季度对应的预算金额 | 
|**addNodes/control**              | String  | 节点控制方式      | 必填  | ALLOW | 当预算超额时的控制方式<br>`ALLOW`:允许提交单据<br>`FORBID`:禁止提交单据<br>`IGNORED`:什么都不做 | 
|**addNodes/nodeId**               | String  | 预算节点ID       | 必填  | - | 与上面预算节点id保持一致 | 
|**addNodes/parentId**             | String  | 父节点id        | 非必填  | - | 父节点id,为空表示根节点 | 
|**visibilities**                  | Array   | 节点负责人       | 非必填  | - | 负责人能在相关报销单和预算报表中查看该预算节点的进度 |
|**visibilities/nodeId**           | String  | 预算节点ID       | 非必填  | - | 与上面预算节点id保持一致 |
|**visibilities/staffIds**         | Array   | 人员ID          | 非必填  | - | 值为[员工id](/corporation/get-all-staffs.html) |
|**visibilities/roleDefIds**       | Array   | 角色ID          | 非必填  | - | 值为[角色id](/corporation/get-roles-group.html) |
|**editInChargers**                | Array   | 预算编制负责人    | 非必填  | - | 负责该节点的预算编制。如不填写则默认与上级节点相同,需开通`预算编制`功能方可见此字段 |
|**editInChargers/nodeId**         | String  | 预算节点ID       | 非必填  | - | 与上面预算节点id保持一致 |
|**editInChargers/staffIds**       | Array   | 人员ID          | 非必填  | - | 值为[员工id](/corporation/get-all-staffs.html) |
|**editInChargers/roleDefIds**     | Array   | 角色ID          | 非必填  | - | 值为[角色id](/corporation/get-roles-group.html) |
|**version**                       | Long    | 预算包版本       | 非必填  | - | 不填写此参数默认为`1` |

>⚠️ 注意：
> - “节点维度”如下图所示，是预算节点的划分依据。
> <br>&nbsp;&nbsp;`dimensionType(维度种类)` 传参见参数介绍，四种类型固定；
> <br>&nbsp;&nbsp;`dimensionId(维度种类的标识ID)`传参为对应维度种类的[全局字段名称](/forms/get-customs-param.md)；例如：
> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 职级预置: `E_system_rank`
> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 岗位预置: `E_system_post`
> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 成本中心预置: `E_system_costcenter`
> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 品类: `品类`
> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 法人实体: `法人实体`
> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 项目: `项目`
> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 提交人: `submitterId`
> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 费用承担部门: `expenseDepartment`
> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 费用类型: `feeTypeId`
> <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 自建的扩展档案字段，例如“国家”，传参为`u_国家`
> 
> ![image](/budget/images/节点维度信息.png)
> 
> - 如果只是创建预算树，不增加预算节点`addNodes`对象参数可不传，系统自动创建预算树根节点。
> - 系统中新建预算时“添加预算控制条件”表示预算树根节点的节点维度信息。示例见请求CURL。
> 
> ![image](/budget/images/添加预算控制条件.png)
> 
> ![image](/budget/images/预算树的控制条件释义.png)

<br/>

#### CURL:
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/budgets/create?accessToken=ID_3oSqGqf04lw:Urf3lsFgBp00gw' \
--header 'Content-Type: application/json' \
--data-raw '{
      "budgetInfo": {
            "active": true, // 是否发布
            "name": "测试预算-1013-10", //预算树名称
            "corporationId": "Urf3lsFgBp00gw",
            "isCustom": false, // 是否自定义区间
            "isRollCalc": false, // 是否滚动预算
            "period": {
                  "annual": "2021", //控制年度
                  "period": "SEASON", // 年度内分割方式，SEASON: 按季度, MONTH: 按月份, HALF_YEAR: 半年, YEAR: 整年, null: 非周期控制。
                  "startTime": null, // 非周期控制开始时间
                  "endTime": null // 非周期控制结束时间
            }
      },
       "addNodes": [ // 追加节点
        {
                  "id": "1634112660000",  //不重复的唯一id,例如:可用毫秒级时间戳作为节点ID
                  "code": "根节点",
                  "content": [  //节点维度信息，根节点可传空，也可添加预算树控制条件
                         {
                            "dimensionType": "STAFF",  //员工类型
                            "dimensionId": "submitterId",   
                            "mustLeaf": true,
                            "contentId": "Urf3lsFgBp00gw:AvT3lntT8zzpWw"
                         },
                         {
                              "dimensionType": "PROJECT",  //扩展档案
                              "dimensionId": "E_system_rank",  //系统字段示例：E_system_rank 职级预置  E_system_post 岗位预置
                              "mustLeaf": true,
                              "contentId": "ID_3oOKW5BiYh0"
                         }
                  ],
                  "moneys": [
                        {
                              "budgetMoney": null, //根节点传空，由系统自动累加子预算额度合计
                              "nodeId": "1634112660000",
                              "periodTime": "1"  //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": null,//根节点传空，由系统自动累加子预算额度合计
                              "nodeId": "1634112660000",
                              "periodTime": "2" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": null,//根节点传空，由系统自动累加子预算额度合计
                              "nodeId": "1634112660000",
                              "periodTime": "3" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": null,//根节点传空，由系统自动累加子预算额度合计
                              "nodeId": "1634112660000",
                              "periodTime": "4" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        }
                  ],
                  "control": "ALLOW", // 当预算超额时,控制方式(ALLOW:允许提交单据 FORBID:禁止提交单据 IGNORED:什么都不做)
                  "nodeId": "1634112660000", //与上面预算节点id保持一致
                  "parentId": "" // 父节点id为空就是根节点
            },
            {
                  "id": "1634112670000",//不重复的唯一id,例如:可用毫秒级时间戳作为节点ID
                  "code": "维度-1", 
                  "content": [
                        {
                              "dimensionType": "PROJECT",  //DEPART:费用承担部门 PROJECT:扩展档案 FEE_TYPE:费用类型 STAFF:员工
                              "dimensionId": "项目",  //DEPART:expenseDepartment PROJECT:项目(档案名称,例如:项目,法人实体) FEE_TYPE:feeTypeId STAFF:submitterId 参数为冒号之后的部分
                              "mustLeaf": true,  //true:非本级 false:本级
                              "contentId": "ID_3oOKW5BgYh0"  //对应维度种类下的项id,例如:部门维度就是部门id,扩展档案维度就是档案项id
                        }
                  ],
                  "moneys": [
                        {
                              "budgetMoney": null, //非最末级节点传空即可，由系统自动累加此维度下子预算额度合计
                              "nodeId": "1634112670000",
                              "periodTime": "1"  //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": null,//非最末级节点传空即可，由系统自动累加此维度下子预算额度合计
                              "nodeId": "1634112670000",
                              "periodTime": "2" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": null,//非最末级节点传空即可，由系统自动累加此维度下子预算额度合计
                              "nodeId": "1634112670000",
                              "periodTime": "3" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": null,//非最末级节点传空即可，由系统自动累加此维度下子预算额度合计
                              "nodeId": "1634112670000",
                              "periodTime": "4" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        }
                  ],
                  "control": "ALLOW", // 当预算超额时,控制方式(ALLOW:允许提交单据 FORBID:禁止提交单据 IGNORED:什么都不做)
                  "nodeId": "1634112670000",
                  "parentId": "1634112660000" // 父节点id为空就是根节点
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
                              "periodTime": "1"  //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": "22.00",//维度下没有子预算，需要传入预算金额
                              "nodeId": "1634112670001",
                              "periodTime": "2" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": "33.00",//维度下没有子预算，需要传入预算金额
                              "nodeId": "1634112670001",
                              "periodTime": "3" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": "44.00",//维度下没有子预算，需要传入预算金额
                              "nodeId": "1634112670001",
                              "periodTime": "4" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        }
                  ],
                  "control": "ALLOW", // 当预算超额时,控制方式(ALLOW:允许提交单据 FORBID:禁止提交单据 IGNORED:什么都不做)
                  "nodeId": "1634112670001",
                  "parentId": "1634112660000" // 父节点id为空就是根节点
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
                              "budgetMoney": "10.00",//维度下没有子预算，需要传入预算金额
                              "nodeId": "1634112670002",
                              "periodTime": "1"  //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": "20.00",//维度下没有子预算，需要传入预算金额
                              "nodeId": "1634112670002",
                              "periodTime": "2" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": "30.00",//维度下没有子预算，需要传入预算金额
                              "nodeId": "1634112670002",
                              "periodTime": "3" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        },
                        {
                              "budgetMoney": "40.00",//维度下没有子预算，需要传入预算金额
                              "nodeId": "1634112670002",
                              "periodTime": "4" //第几个周期，因为是按季度划分，所以有4个周期，即4个季度的预算金额
                        }
                  ],
                  "control": "ALLOW", // 节点控制方式（ALLOW：允许提交单据，FORBID：禁止提交单据）
                  "nodeId": "1634112670002",
                  "parentId": "1634112670000" // 父节点id为空就是根节点
            }
      ],
     "visibilities": [ // 节点负责人
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
      "editInChargers": [// 预算编制负责人
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

<br/>

#### 成功响应:
```json
{   
      "id": "dJEb_UkozIlI00"        //预算树ID
}
```

#### 失败响应:
参数传输错误， 返回此响应数据。
```json
{
   预算名称不可重复
}
```

<style>
    table {
		width: 100%; /*表格宽度*/
		border-collapse: collapse; /*使用单一线条的边框*/
		empty-cells: show; /*单元格无内容依旧绘制边框*/
		}
    /* 悬浮变色 */
	table tr:hover {
		background: #B2B2B2 !important;
		}
    /* 首列不换行 */
	table td:nth-child(1) {
		white-space: nowrap;
	}
	table td:nth-child(2) {
		white-space: nowrap;
	}
    /* 指定列宽度 */
    table th:nth-of-type(3) {
		width: 15%;
		white-space: nowrap;
	}
    table th:nth-of-type(4) {
		width: 8%;
		white-space: nowrap;
	}
    table th:nth-of-type(5) {
		width: 7%;
		white-space: nowrap;
	}
    table th:nth-of-type(6) {
		width: 30%;
		white-space: nowrap;
	}

</style>
