# 更新城市组详情

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/cityGroup/detail/save"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>
    <a href="https://docs.ekuaibao.com/docs/open-api/notice/update-log" target="_blank"><b>0.7.135</b></a> -> 🆕 新增了本接口。<br/>
  </div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |


## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **cityGroupId** | String | 城市组ID   | 必填  | - | 通过[获取城市组列表](/docs/open-api/city/get-city-group)获取 |
| **cityIds**     | Array  | 城市ID列表 | 必填   | - | 通过[获取城市列表数据](/docs/open-api/basedata/get-basedata-city)获取 |
| **staffIds**    | Array  | 人员ID列表 | 非必填 | - | 通过[获取员工列表](/docs/open-api/corporation/get-all-staffs)获取 |
| **roleIds**     | Array  | 角色ID列表 | 非必填 | - | 通过[查询角色组和角色](/docs/open-api/corporation/get-roles-group)获取 |

## CURL
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1/cityGroup/detail/save?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
    "cityGroupId":"wC0cPu1DNY1400",
    "cityIds":[  //城市ID列表
        "37", "153", "154"
    ],
    "staffIds":[
       "AdMbpirnlY2Q00:Mksc4_e8ggjo00", "AdMbpirnlY2Q00:ksUbpirnlYg000"
    ],
    "roleIds":[]
}'
```

:::tip
选择城市末级时需要把其父级直到顶级id传递过来，如: 石家庄市区（39）->石家庄市（38）->河北省（37）。
:::

## 成功响应
```json
{
    "success": true,
    "message": "ok"
}
```
