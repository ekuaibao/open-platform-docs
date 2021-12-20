# 创建单据

根据获取的单据模板和费用模板，按格式组织数据后，调用此接口保存单据信息
#### 创建单据流程：
![创建单据流程](\forms\mind.svg)

{% httpverb "post" %} /api/openapi/v2/flow/data {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **accessToken** | String  |必填，通过授权接口获取。      |

注：与业务画面上的保存单据功能一样，按格式组织数据，保存单据信息。
保存成功后，会返回该实例。
程序会校验请求参数及body数据格式是否正确。

#### 示例:
```json
	http://wx2.ekuaibao.com/api/openapi/v2/flow/data?accessToken=SIw9lEj3rc0800

```

#### body参数:
```json
{
  "form": {
      "title": "这里是单据标题",
      "submitterId": "6Rk9l1WYNM0400:09496419662084319251", 
      "expenseDate": 1562036472205,
      "expenseDepartment": "6Rk9l1WYNM0400:72157064", 
      "description": "这里是描述",
      "details": [
        {
        "feeTypeId": "6Rk9l1WYNM0400:taxi",//费用类型ID
        "specificationId": "6Rk9l1WYNM0400:taxi:expense:3ff9bb327c504b4b",//费用的报销或申请模板ID 
        "feeTypeForm": {
            "amount": {
              "standard": "100",
              "standardStrCode": "CNY",
              "standardNumCode": "156",
              "standardSymbol": "¥",
              "standardUnit": "元",
              "standardScale": 2
            },
            "feeDate": 1562036453462, 
            "invoiceForm": {
              "type": "exist",//wait 待开发票;exist已有发票;noExist 无发票;noWrite 无需填写(当费用类型发票字段设置的不可编辑时，默认为此项)
              "attachments": []//发票附件，暂未支持
              },
              "consumptionReasons": "这里是消费事由",
              "attachments": [
              {
                 "key": "WechatIMG186-1562036466774-209.jpeg",
                 "fileName": "WechatIMG186.jpeg",
                 "fileId": "Hpc9mIvN7org00"
              }
              ]
          }
        } 
      ],
      "payeeId":"tjc9pdqmsY5s00",//收款信息ID
      "specificationId": "W709pbgZpoeY00:6d20266cf10554c266f76d6161eb5ceb5307a49d"
  },
  "params":{
                "loanWrittenOff":[ //核销借款
                    {
                        "loanInfoId":"KWYaYjurRo2000", //借款包id
                        "title":"333", //借款单标题
                        "repaymentDate":1591942260000,// 还款日期
                        "fromApply":false,
                        "flowId":"_LAaYjoV9sm000", //借款单 Id
                        "hasImported":false,
                        "amount":"3" //核销金额
                    }
                ]
            }
}
```
*expenseLink 为关联申请字段，如单据无需关联申请，可不在 form 对象中添加该字段 

*specificationId 为启用版本的单据模板 ID，即「获取单据模板实例」中返回的 id

#### Response:
```json
{
    "value":"",
    "type":-1,
    "flow":{
        "version":1,
        "active":true,
        "createTime":1562862829309,
        "updateTime":1562862829309,
        "corporationId":"dNU9lELfXs0g00",
        "form":{
            "title":"api 测试加急",
            "submitterId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
            "expenseDate":1562036472205,
            "details":[
                {
                    "feeTypeId":"dNU9lELfXs0g00:office",
                    "specificationId":"dNU9lELfXs0g00:office:expense:2b43fb500eedb",
                    "feeTypeForm":{
                        "invoiceForm":{
                            "type":"noWrite",
                            "attachments":[

                            ]
                        },
                        "amount":{
                            "standard":"500.00",
                            "standardNumCode":"156",
                            "standardScale":2,
                            "standardStrCode":"CNY",
                            "standardSymbol":"¥",
                            "standardUnit":"元"
                        },
                        "detailId":"swo9pY7cXo1g00"
                    }
                }
            ],
            "specificationId":"Ys49lCDmlgbc00:6ad521a290e74c85",
            "writtenOffMoney":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "payMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "companyRealPay":{
                "standard":"0.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "expenseMoney":{
                "standard":"500.00",
                "standardStrCode":"CNY",
                "standardNumCode":"156",
                "standardSymbol":"¥",
                "standardUnit":"元",
                "standardScale":"2"
            },
            "code":"B19000017",
            "submitDate":1562862829291
        },
        "ownerId":"dNU9lELfXs0g00:97Y9lCBulQ4M00",
        "ownerDefaultDepartment":"dNU9lELfXs0g00",
        "state":"draft",
        "flowType":"freeflow",
        "formType":"expense",
        "logs":[

        ],
        "actions":{
            "dNU9lELfXs0g00:97Y9lCBulQ4M00":[
                "freeflow.delete",
                "freeflow.edit",
                "freeflow.submit"
            ]
        },
        "id":"DQ09pY7cXo1400"
    }
}
```
\*末尾返回 id 字段，为该单据的 id，在之后的「获取审批流程实例」、「提交单据」步骤需使用

###字段填写规则

#####a) 消费类型字段(details):
单据中的 details，表达的是「费用明细」，是一个数组，支持多条 参考如下:
```json
"details": [
    {
      "feeTypeId": "6Rk9l1WYNM0400:taxi",
      "specificationId": "6Rk9l1WYNM0400:taxi:expense:3ff9bb327c504b4b", 
      "feeTypeForm": {
        //费用中的字段//
      }
    }, 
    {
      "feeTypeId": "6Rk9l1WYNM0400:taxi",
      "specificationId": "6Rk9l1WYNM0400:taxi:expense:3ff9bb327c504b4b", 
      "feeTypeForm": {
      //费用中的字段//
      }
    },
]
```
\*feeTypeId:填入费用模板的 ID，即「获取费用模板实例」中返回的 id *specificationId:填入启用版本的费用报销(或申请)模板 ID，即「获取费用模板实例」中返回的
expenseSpecificationId 或 requisitionSpecificationId

#####b) 金额类型字段

字段的「type」为【money】的，为金额类型字段 金额字段换算为本位币(人民币)传入，如需其他币种请联系易快报技术 客 服
除「standard」外，其他内容请与示例保持一致
参考示例如下:
```json
"amount": {
    "standard": "100",
    "standardStrCode": "CNY", 
    "standardNumCode": "156", 
    "standardSymbol": "¥", 
    "standardUnit": "元", 
    "standardScale": 2
}
```

#####c) 日期类型字段

字段的「type」为【date】的，为日期类型字段 以 Unix timestamp 格式传入

#####d) 日期范围类型字段

字段的「type」为【dateRange】的，为日期范围类型字段 以 Unix timestamp 格式传入;
以对象传入
参考示例如下:
```json
"u_日期范围": {
    "start": 1562036426574,
    "end": 1562036426574
}
```
在 standard 中，填入金额即可，其他参数请与示例保持一致

#####e) 附件类型字段【暂不支持】 

字段的「type」为【select】，且「valueFrom」为【attachment】的，为附件类 型字段

#####f) 部门类型字段 

字段的「type」为【select】，且「valueFrom」为【organization.Department】 的，为部门类型字段
部门字段需传入部门的 id
部门 id 可通过「获取部门列表」接口获取


#####g) 员工类型字段 
字段的「type」为【select】，且「valueFrom」为【organization.Staff】的，为 员工类型字段
部门字段需传入员工的 id
部门 id 可通过「获取员工列表」或「查询员工」接口获取


#####h) 城市类型字段【暂不支持】 

字段的「type」为【select】，且「valueFrom」为【basedata. city】的，为城市 类型字段

#####i) 枚举类型字段【暂不支持】 

字段的「type」为【select】，且「valueFrom」为【basedata.Enum.CabinType】 或【basedata.Enum.TrainSeatType】或【basedata.Enum.CruiseCabinType】的， 为城市类型字段

#####j) 自定义档案类型字段 

字段的「type」为【select】，且「valueFrom」为【basedata.Dimension.**】的 (**为自定义档案名称)，为自定义档案类型字段 自定义档案字段需传入档案值的 ID
档案值的 ID 可通过「获取自定义档案值」接口获取


#####k) 扩展类型字段 

字段的「type」为【select】，且「valueFrom」为【datalink.DataLinkEntity.***】 的(***为业务对象实例 I)，为扩展类型字段 扩展类型字段，需传入业务对象实例的 ID
业务对象实例 id 可通过「根据业务对象 ID 获取对应的业务对象实例信息」接 口获取


#####l) 发票(发票形式)字段 

字段的「type」为【invoice】时，为发票(发票形式)字段 发票字段以对象传入，内容包括发票形式、发票文件 暂不支持统一开票
参考示例如下:
```json
"invoiceForm": {
  "type": " exist ",
  "attachments": []
}
```
\*tyep的可选值包括:wait 待开发票 exist已有发票 noExist 无发票 noWrite 无需填写(当费用类型 发票字段设置的不可编辑时，默认为此项)

\*attachments 为发票文件，因暂不支持附件的上传，此处默认为空

\*当 invoiceForm 整个对象都不传入时，会附默认值「无需填写」(noWrite)

#####m) 收款信息字段 

字段的「type」为【select】，且「valueFrom」为【pay.PayeeInfo】的，为收款 信息字段
收款信息字段需传入收款信息的 ID 可通过「根据银行账号或者账户名称获取账号信息」接口，获取收款信息 ID， 支持全量查询


#####n) 关联申请字段【暂不支持】 

字段的「type」为【select】，且「valueFrom」为【requisition.RequisitionInfo】 的，为关联申请字段
关联申请字段需传入申请事项(申请单)的 ID

#####o) 核销借款字段【暂不支持】

#####p) 费用分摊字段【暂不支持】