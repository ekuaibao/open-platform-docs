# 评论单据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2.2/flow/data/comment/$`flowId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.22.0**](/updateLog/update-log#1220)
  - 🆕 新增了本接口。

</div>
</details>


## Path Parameters

| 名称         | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
|:-----------| :--- | :--- | :--- |:--- | :--- |
| **flowId** | String  | 单据ID | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一) |

## Query Parameters

| 名称 | 类型 | 描述      | 是否必填 | 默认值 | 备注 |
| :--- | :--- |:--------| :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **staffId** | String | 评论员工    | 必填 | - | 通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |

## Body Parameters

| 名称                             | 类型      | 描述        | 是否必填 | 默认值 | 备注                                                                                                                 |
|:-------------------------------|:--------|:----------|:-----|:----|:-------------------------------------------------------------------------------------------------------------------|
| **params**                     | Object  | 评论参数      | 必填   | -   | 评论参数                                                                                                               |
| **&emsp; ∟ comment**           | String  | 评论内容      | 必填   | -   | 评论中@其他员工传参示例：`"请 {staffId} {staffId} 查看"`<br/>`staffId` 可通过 [获取员工列表](/docs/open-api/corporation/get-all-staffs) 获取 |
| **&emsp; ∟ attachments**       | Array   | 评论附件      | 非必填  | -   | 通过 [上传附件](/docs/open-api/attachment/attachment-upload) 获取                                                          |
| **&emsp; &emsp; ∟ key**        | String  | 文件key     | 必填   | -   | [上传附件](/docs/open-api/attachment/attachment-upload) 接口返回的 `key` 字段                                                 |
| **&emsp; &emsp; ∟ fileName**   | String  | 文件名称      | 必填   | -   | [上传附件](/docs/open-api/attachment/attachment-upload) 接口返回的 `fileName` 字段                                            |
| **&emsp; &emsp; ∟ fileId**     | String  | 文件id      | 必填   | -   | [上传附件](/docs/open-api/attachment/attachment-upload) 接口返回的 `fileId` 字段                                              |
| **&emsp; ∟ keepItSecret**      | Boolean | 是否仅被@的人可见 | 非必填  | -   | `true` : 是 &emsp;&emsp; `false` : 否                                                                                |
| **name**                       | String  | 评论动作固定值   | 必填   | -   | 必填为 `freeflow.comment`                                                                                             |

## CURL
```json
curl --location 'https://app.ekuaibao.com/api/openapi/v2.2/flow/data/comment/$ID01w4CB9r1o1F?accessToken=ID01w4CBaTfKVh%3Abwa3wajigF0WH0&staffId=bwa3wajigF0WH0%3AID_3lokDfb1p5w' \
--header 'Content-Type: application/json' \
--data '{
    "params": {
        "comment": "全电发票 {bwa3wajigF0WH0:ID01irfEujUR9t} {bwa3wajigF0WH0:ID01irfEujURX1}",
        "attachments": [
            {
                "key": "openapic6d3a829-67a9-4aa4-90f9-fb2e43a1c358-全电发票.pdf",
                "fileName": "全电发票.pdf",
                "fileId": "ID01w4CBaVB927"
            }
        ],
        "keepItSecret": false
    },
    "name": "freeflow.comment"
}'
```

## 成功响应
```json
{
    "id": "评论成功"
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述               | 排查建议                    |
|:--------| :--- |:-----------------|:------------------------|
| **400** | - | staffId不能为空!!!   | 请确认 `staffId`（评论员工）是否传参 | 
| **400** | - | staffId不存在       | 请确认 `staffId`（评论员工）是否正确 | 
| **400** | - | 评论太过频繁           | 请不要在短时间内频繁调用本接口         | 
| **412** | - | 评论内容不能为空         | 请确认 `comment`（评论内容）是否传参 | 
| **412** | - | JSON请求参数不正确      | 请确认所有必填字段是否传参           | 
