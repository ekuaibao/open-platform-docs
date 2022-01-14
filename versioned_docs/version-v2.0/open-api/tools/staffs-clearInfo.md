# 工具二：清空员工手机号和邮箱

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/staffs/clearInfo"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**  | String | 认证token | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **type**         | String | 参数类型   | 必填  | - | `STAFFID` : 员工ID &emsp; `CODE` : 工号 |
| **conditionIds** | Array  | 员工参数   | 非必填 | - | 多个之间用英文逗号 `,` 分隔 |

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/staffs/clearInfo?accessToken=ID_3weW2Al1Ujw:ASEcF6nhyNlA00&type=CODE&conditionIds=1234,2234' 
```

## 成功响应
```json

```

## 失败响应
`conditionIds` 不存在时，报错如下：
```json

```
