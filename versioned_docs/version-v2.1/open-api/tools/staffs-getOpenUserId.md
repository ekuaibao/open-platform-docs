# 获取企业微信OpenUserId
通过企业微信的员工明文userId获取加密后的OpenUserId。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/staffs/getOpenUserId"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.5.1**](/docs/open-api/notice/update-log#151) -> 🆕 新增了本接口。<br/>

  </div>
</details>

:::caution
- 仅 **2021年11月** 之后的，且经过开通【**通讯录接口**】定制化改造的新企微版客户适用此接口。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**  | String | 认证token    | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

##  Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**ids**| Array | 企微明文userId | 必填  | - | 企微明文userId数组，**最大数量不能超过 `100`** |

## CURL
```shell
curl --location --request POST 'https://wx2.ekuaibao.com/api/openapi/v1/staffs/getOpenUserId?accessToken=ID_3GjSy1OEUwM:dAY3noVGjy4s7w' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ids":["id1","id2"]
}'
```

## 成功响应

```json
{
    "items":[
        {
            "userid":"userID",          //企微的明文userId
            "open_userid":"open_userid" //易快报获取到的open_userid
        }
    ]
}
```

## 失败响应
暂无。
