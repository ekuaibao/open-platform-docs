# ~~更新预算节点~~

> ⚠️注意：
>
> 不推荐使用，接口废弃，不再更新。推荐使用【批量更新(新增/修改/删除)预算节点】接口。

更新指定预算节点的预算金额或负责人。

{% httpverb "put" %}  /api/openapi/v2/budgets/$`budgetId`/node/$`nodeId`/update {% endhttpverb %}

#### Path Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **budgetId** | String | 预算树id | 必填 |  - | [预算树id获取](/budget/get-budget-list.html) |
| **nodeId** | String | 要更新的预算节点id | 必填 | - | [预算节点id获取](/budget/get-budget-details.html) |

#### Query Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/getting-started/auth.html) |


#### Body Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
|**moneys**| Object | 预算节点信息 | 必填 | - | 第N个[周期](/budget/question-answer.html)的预算总额 | 
|**visibility**| Object | 节点的负责人 | 必填 |- | 负责人能在相关报销单和预算报表中查看该预算节点的进度 |
|**visibility/staffIds**| Array | 人员ID | 非必填  |- | 值为[员工id](/corporation/get-all-staffs.html) |
|**visibility/roleDefIds**| Array | 角色ID | 非必填  |- | 值为[角色id](/corporation/get-roles-group.html) |



<br/>
#### CURL:
```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/budgets/$u6wbqiMW0Yqo00/node/$1597314291146001/update?accessToken=f_kbtOJVVwdo00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "moneys":{
        "1":"10.00",  //第1个周期的预算金额，一共4个周期，所以是按季度控制，第一季度的预算金额
        "2":"20.00",  //第2个周期的预算金额，一共4个周期，所以是按季度控制，第二季度的预算金额
        "3":"30.00",  //第3个周期的预算金额，一共4个周期，所以是按季度控制，第三季度的预算金额
        "4":"40.00"   //第4个周期的预算金额，一共4个周期，所以是按季度控制，第四季度的预算金额
    },
    "visibility":{
        "staffIds":["zKIbl2WX4I8I00:h5wbhuSCoQh000"],
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
`budgetId` 不存在时， 返回此响应数据。

```json
{
    "value": {
        "success": false,
        "errmsg": "不存在的预算包"
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
		width: 20%;
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
		width: 25%;
		white-space: nowrap;
	}

</style>










