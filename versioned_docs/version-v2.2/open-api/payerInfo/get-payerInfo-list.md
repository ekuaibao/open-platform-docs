# 获取开票信息列表

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v2/payerinfo/list"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

[**1.13.0**](/docs/open-api/notice/update-log#1122) -> 🆕 新增了本接口。<br/>

  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | -  | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v2/payerinfo/list?accessToken=ID01mjXV51aneL:ZrZ3BRy2ms0g6g'
```

## 成功响应
```json
{
    "items": [
        {
            "pipeline": 1,
            "grayver": "9.95.0.0-prd",
            "id": "ID01mjYkgH8y5N",
            "version": 1,                     //版本号
            "active": true,                   //是否启用（true：启用，false：停用）
            "createTime": 1673430378740,      //创建时间
            "updateTime": 1673430378740,      //更新时间
            "corporationId": "ZrZ3BRy2ms0g6g",//企业ID
            "sourceCorporationId": null,      
            "dataCorporationId": null,
            "name": "北京合思信息有限公司",     //企业名称
            "payerNo": "80082088200HOSE",     //纳税人识别号
            "account": "12345678900",         //企业账号
            "bank": "中国工商银行浙江省分行营业部本级业务部120202110990010xxxx", //开户行
            "tel": "8008208820",              //电话
            "addr": "虚拟地址",                //地址
            "remark": "测试开票信息",          //备注
            "visibility": {                   //可见范围
                "fullVisible": true,          //是否全部可见（true：全部可见，false：指定人员可见）
                "staffs": [],                 //可见员工ID
                "roles": [],                  //可见角色ID
                "departments": [],            //可见部门ID
                "departmentsIncludeChildren": true    //可见部门是否包含子部门（true：是，false：否）
                },
            "historicalName": "曾用名北京合思信息有限责任公司",  //曾用企业名称
            "historicalNameExpirationTime": 1640966399000  //曾用企业名称失效时间
        } 
    ]
}
```
