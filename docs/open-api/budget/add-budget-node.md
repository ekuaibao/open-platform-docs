# ~~增加预算节点~~

> ⚠️注意：
> 
> 不推荐使用，接口废弃，不再更新。推荐使用【批量更新(新增/修改/删除)预算节点】接口。

向指定的预算树的预算节点下增加新的子节点。

{% httpverb "post" %}  /api/openapi/v2/budgets/$`budgetId`/node/$`nodeId`/add {% endhttpverb %}

#### Path Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **budgetId** | String  | 预算树id | 必填 | - | [预算树id获取](/budget/get-budget-list.html) |
| **nodeId**   | String  | 父节点id | 必填 | - | [预算节点id获取](/budget/get-budget-details.html) |

#### Query Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String  | 认证token	| 必填 | - | [通过授权接口获取](/getting-started/auth.html) |

#### Body Parameters:

|名称 |描述 |类型 |是否必填 |默认值 |备注 |
|:------ |:--------- |:-----------|:-------|:-----------|:-------------|
|**budgetNode**                      | Object  | 预算节点信息 | 必填  | - | 新增的预算节点信息 | 
|**budgetNode/id**                   | String  | 预算节点id | 必填  | - | 不重复的唯一id,例如:可用毫秒级时间戳作为节点ID |
|**budgetNode/code**                 | String  | 节点编码 | 必填  |- | 可传`""` |
|**budgetNode/content**              | Array   | 节点维度  | 必填 |- | 一个节点对应一个维度 |
|**budgetNode/content/dimensionType**| String  | 维度种类 | 必填  | - | `DEPART`:费用承担部门<br>`PROJECT`:扩展档案<br>`FEE_TYPE`:费用类型<br>`STAFF`:员工 |
|**budgetNode/content/dimensionId**  | String  | 维度种类的标识ID | 必填  | - | DEPART:`expenseDepartment`<br>PROJECT:`项目`(档案名称,例如:项目)<br>FEE_TYPE:`feeTypeId`<br>STAFF:`submitterId`<br>参数为冒号之后的部分 |
|**budgetNode/content/mustLeaf**     | Boolean | 维度是否必定为叶节点(本部)  | 必填  | false | `true`:非本级 `false`:本级<br>[表示维度类别是否为其子预算节点](\budget\question-answer.html) |
|**budgetNode/content/contentId**    | String  | 维度内容id  | 必填  | - | 对应维度种类下的项id,例如:部门维度就是`部门id`,扩展档案维度就是`档案项id` |
|**budgetNode/moneys**               | Array   | 节点金额 | 必填  |- | 预算金额,节点的[周期](/budget/question-answer.html)数据不可省略 |
|**budgetNode/moneys/nodeId**        | String  | 预算节点id | 必填  | - | 与上面预算节点id保持一致,即一个预算节点下包含`节点信息`和`预算金额`两部分属性 |
|**budgetNode/moneys/periodTime**    | String  | 第几个周期 | 必填  | - | 年度和自定义区间:`1` 半年度:`1`,`2` 季度:`1`,`2`,`3`,`4` 月度:`1~12` <br>根据控制周期类型填写,例如:预算树控制周期是按季度类型,每个子预算节点的`moneys`数组数据,就包含4个对象,表示每个季度对应的预算金额 |
|**budgetNode/moneys/budgetMoney**   | Number  | 预算金额 | 必填  | - | 周期内的预算金额,不可为空 |
|**budgetNode/control**              | String  | 预算节点的控制方式  | 必填  | ALLOW | 当预算超额时的控制方式<br>`ALLOW`:允许提交单据<br>`FORBID`:禁止提交单据<br>`IGNORED`:什么都不做 |
|**visibility**                      | Object  | 节点负责人 | 非必填  |- | 负责人能在相关报销单和预算报表中查看该预算节点的进度 |
|**visibility/staffIds**             | Array   | 人员ID | 必填  |- | 值为[员工id](/corporation/get-all-staffs.html) |
|**visibility/roleDefIds**           | Array   | 角色ID | 非必填  |- | 值为[角色id](/corporation/get-roles-group.html) |

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

<br/>

#### CURL:

```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00/node/$1597314178620/add?accessToken=f_kbtOJVVwdo00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "budgetNode":{   //预算节点信息
        "id":"1634112670003",   //节点id
        "code":"维度-2-1",  //节点编码
        "content":[       //节点维度信息，以何种类型分解预算
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
                "periodTime":1,  //第1个预算周期金额
                "budgetMoney":"100"
            },
            {
                "nodeId":"1634112670003", 
                "periodTime":2,  //第2个预算周期金额
                "budgetMoney":"200"
            },
            {
                "nodeId":"1634112670003", 
                "periodTime":3,  //第3个预算周期金额
                "budgetMoney":"300"
            },
            {
                "nodeId":"1634112670003", 
                "periodTime":4,  //第4个预算周期金额
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
<br/>


#### 成功响应:
```json
{
    "value": {
        "success": true,
        "errmsg": ""
    }
} 
```


#### 失败响应:

参数传输错误， 返回此响应数据。
```json
{
    "errorCode": 400,
    "errorMessage": "不存在的预算包",
    "errorDetails": null,
    "code": null,
    "data": null
}
```


节点周期金额不全，例如季度控制，需要四个周期金额，只传了一个，报如下错误
```json
{
  "value": {
      "success": false,
      "errmsg": "节点金额数量不匹配"
  }
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
