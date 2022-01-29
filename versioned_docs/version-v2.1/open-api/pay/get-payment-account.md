# 获取付款账户
用来获取当前企业下的所有企业付款账户，包括已停用的付款账户。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/paymentAccounts"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/paymentAccounts?accessToken=cxEbrzNJSA3A00'
```

## 成功响应
```json
{
	"items": [
		{
			"id": "-nUafoDS-4k000",              //账户ID
			"name": "中国工商银行付款账户",        //账户名称
			"code": "codeo4tk",                  //账户编码
			"detail": {                          //账户的银行信息
					"name": "收款x4o2bj38",      //户名
					"number": "6293883278322371711",  //银行账号
					"bank": "中国工商银行",            //开户行
					"branch": "中国工商银行股份有限公司北京海淀西区支行营业室", //开户网点
					"province": "北京市",             //开户省份
					"city": "北京市"                  //开户城市
			},
			"active": false,            //是否停用（true：未停用 false：已停用）
			"sort": "BANK",             //分类（银行=BANK，支付宝=ALIPAY，海外=OVERSEABANK，支票=CHECK，承兑汇票=ACCEPTANCEBILL，其他=OTHER，钱包= WALLET）
			"visibility":{              //可见性
                "fullVisible":true,		//是否全员可见（true=全部; false=部分）
                "staffs":null,			//员工ID集
                "roles":null,			//角色ID集
                "departments":null,		//部门ID集
                "departmentsIncludeChildren":true 
            },
			"remark": "备注"
		},
		{
			"id": "JOYbpjPP-E2Q00:CASH",
			"name": "",
			"code": "CASH",
			"detail": null,
			"active": true,
			"sort": "OTHER",
			"remark": "备注"
		}
    ]
}
```


