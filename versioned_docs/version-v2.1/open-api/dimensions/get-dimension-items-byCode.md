# 根据编码获取自定义档案项
通过档案项的 `code` 来获取对应的档案项信息列表。

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/dimensions/getDimensionByCode"
/>  

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.8.0**](/docs/open-api/notice/update-log#180) -> 🐞 **成功响应** 中可获取新增的 `channel`（数据来源）字段。<br/>

  </div>
</details>

:::caution
- 此接口并不区分档案类别，需要在获取到本地后再进行分类，通过 `dimensionId`（档案类别ID）区分。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token	     | 必填  | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **code**        | String  | 自定义档案值的编码 | 必填 | -  | 编码全名，**不支持中文** |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/dimensions/getDimensionByCode?accessToken=hQgbxfJnlElc00&code=CODE2' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
```json
{
    "count": 1,
    "items": [
        {
            "version": 1,
            "active": true,              //是否有效
            "createTime": 1597050357829, //创建日期
            "updateTime": 1597050357829, //更新日期
            "name": "台式电脑",          //档案值名称
            "nameSpell": "TAISHIDIANNAO",
            "code": "5-Desktop-PC",       //自定义档案值的编码
            "corporationId": "JOYbpjPP-E2Q00", //企业ID
            "parentId": "",                    //档案的父级ID
            "id": "JOYbpjPP-E2Q00:desktopPC",  //档案值ID
            "dimensionId": "JOYbpjPP-E2Q00:固定资产类目", //所属档案类别ID
            "channel": "MANUAL",               //数据来源  MANUAL：系统创建  API：接口创建
            "orders": 1585212226451,           //排序
            "visibility": {                    //可见范围
                "fullVisible": false,          //是否全部可见。在非全部可见的情况下，仅白名单内的员工可见。
                "staffs": [                    //员工白名单
                    "JOYbpjPP-E2Q00:y8gbpjP9OsnI00"
                ],
                "roles": [         //角色白名单
                    "DA8bunLUKE2U00"
                ],
                "departments": [   //部门白名单
                    "JOYbpjPP-E2Q00:-ZkbwJTotQi400",
                    "JOYbpjPP-E2Q00"
                ],
                "departmentsIncludeChildren": true
            },
            "payAccountIds": null  //支付账户ID
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"count": 0,"items": []}` | 为空表示没有对应的档案项信息<br/>请确认 `code`（自定义档案值的编码）是否存在 | 
| **400** | - | 输入存在错误:<br/>- 缺少code参数 | 请确认 `code`（自定义档案值的编码）是否传入 | 

