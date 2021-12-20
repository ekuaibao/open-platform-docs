# 根据借款单 Id 获取借款包

{% httpverb "get" %} /api/openapi/v1/loans/getLoanInfoByFlowId/$`flowId` {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述                                                |备注   |
| :--------- | :------ | :-------------------------------------------------- |:----  |
| **accessToken** | String  |通过授权接口获取。      |必填    |
| **flowId** | String  |借款单id       |必填    |

#### 示例:
```json
	http://dd2.ekuaibao.com/api/openapi/v1/loans/getLoanInfoByFlowId/$xt0aYlzRI05w00?accessToken=sbEaYlxJkY2Q00

```
注意：flowId前缀有 $

#### Response(费用明细):
```json
 {
   "value": {//借款包信息
     "version": 1,
     "active": true,//是否有效
     "createTime": 1589272741621,
     "updateTime": 1589272741622,
     "corporationId": "nd8aNompiogg00",
     "ownerId": "nd8aNompiogg00:mFw8PzLLpI0800",
     "id": "g3MaYlA9mc5c00",//借款包 Id
     "total": 1000,//总金额
     "reserved": 0,//占用金额
     "remain": 1000,//余额
     "repayment": 0,//确认金额
     "state": "REPAID",//REPAID:待还款,PAID:已还清
     "flowId": "xt0aYlzRI05w00",//单据 ID
     "title": "借款单 11",//借款单标题
     "repaymentDate": 1591951080000,//还款日期
     "loanDate": 1589272680000,//借款日期
     "source": "LOAN",//借款来源, REQUISITION:申请;LOAN:借款-默认借款包是借款生成的
     "loanInfoRemind": false//是否借款提醒
   }
 }

```







