# 获取发票附件下载地址

可获取 **图片（PNG、JPG）、PDF、OFD、XML** 格式的发票附件下载地址。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/extension/INVOICE/url"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.27.0**](/updateLog/update-log#1270)
  - 🐞 修复了获取的OFD文件链接打开报错的BUG。

</div>
</details>

:::caution
- 图片链接有效期为一个小时，请勿永久保存。
:::

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **invoiceId** | Array | 发票ID集合 | 必填 | - | 通过 [根据单据编号或ID查询发票ID和明细ID](/docs/open-api/datalink-extend/get-flow-invoice)<br/>或 [根据单据ID获取单据详情](/docs/open-api/flows/get-forms-details) 获取 |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/extension/INVOICE/url?accessToken=ID01xNYeLzcMd9%3ATdk3tgber501v0' \
--header 'Content-Type: application/json' \
--data '{
    "invoiceId":[
        "ID01xO4jZjprrx",
        "ID01xO4NESQ6gD",
        "Tdk3tgber501v0:044002105112:13116949",
        "Tdk3tgber501v0::23312000000123878916:2",
        "Tdk3tgber501v0::24442000000074288816"
    ]
}'
```

## 成功响应
```json
{
    "items": [
        {
            "id": "ID01xO4NESQ6gD",  //票据ID
            //图片地址
            "url": "https://files-dd.ekuaibao.com/20240307-182514-1710496503756-911.jpg?Expires=1710500135&OSSAccessKeyId=STS.NTyZ6QiWLfCL5jAaSFesi8Ke3&Signature=byztZPRQVypmG9nzWJmNd8W7ndU%3D&x-oss-process=image%2Fcrop%2Cw_1650%2Ch_1665%2Cx_0%2Cy_0%2Cg_nw&security-token=CAIS8AF1q6Ft5B2yfSjIr5fMEYzlhIht0YGnN0zwhVMTafxF147O0Tz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapONcxKyfVrzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAGySjRbhraZT5FaeBUsYxuv9K%2FUHHU0qvlUZZkOi0hlGESLV%2Ff18noebArcxE1Qr8%2Bkpsis61jTlmwxt2acBtJQ7jMvOe2Rn4edU%2FBw8ajOZY6ZlYIj3%2F1dBJKnupl3O7IvAB%2BLpO8FVZ7Jf0fFlFJvyGO%2Bs0rkTYmoheDmf%2FgK8SAA",
            //图片缩略图，PDF、OFD、XML格式发票返回为空
            "thumbUrl": "https://files-dd.ekuaibao.com/20240307-182514-1710496503756-911.jpg?Expires=1710500135&OSSAccessKeyId=STS.NTyZ6QiWLfCL5jAaSFesi8Ke3&Signature=byztZPRQVypmG9nzWJmNd8W7ndU%3D&x-oss-process=image%2Fcrop%2Cw_1650%2Ch_1665%2Cx_0%2Cy_0%2Cg_nw&security-token=CAIS8AF1q6Ft5B2yfSjIr5fMEYzlhIht0YGnN0zwhVMTafxF147O0Tz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapONcxKyfVrzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAGySjRbhraZT5FaeBUsYxuv9K%2FUHHU0qvlUZZkOi0hlGESLV%2Ff18noebArcxE1Qr8%2Bkpsis61jTlmwxt2acBtJQ7jMvOe2Rn4edU%2FBw8ajOZY6ZlYIj3%2F1dBJKnupl3O7IvAB%2BLpO8FVZ7Jf0fFlFJvyGO%2Bs0rkTYmoheDmf%2FgK8SAA",
            "source": "ocr",         //票据来源
            "fileName": "20240307-182514-1710496503756-911.jpg",  //附件名称
            "region": [              //OCR识别范围
                0.0, 0.0, 1650.0, 1665.0
            ]
        },
        {
            "id": "ID01xO4jZjprrx",
            "url": "https://files-dd.ekuaibao.com/%E5%8F%91%E7%A5%A837-1710495952586-302.png?Expires=1710500135&OSSAccessKeyId=STS.NTyZ6QiWLfCL5jAaSFesi8Ke3&Signature=yab1cphADdyBa8pC%2FkU9hYNfvW0%3D&x-oss-process=image%2Fcrop%2Cw_675%2Ch_505%2Cx_0%2Cy_0%2Cg_nw&security-token=CAIS8AF1q6Ft5B2yfSjIr5fMEYzlhIht0YGnN0zwhVMTafxF147O0Tz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapONcxKyfVrzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAGySjRbhraZT5FaeBUsYxuv9K%2FUHHU0qvlUZZkOi0hlGESLV%2Ff18noebArcxE1Qr8%2Bkpsis61jTlmwxt2acBtJQ7jMvOe2Rn4edU%2FBw8ajOZY6ZlYIj3%2F1dBJKnupl3O7IvAB%2BLpO8FVZ7Jf0fFlFJvyGO%2Bs0rkTYmoheDmf%2FgK8SAA",
            "thumbUrl": "https://files-dd.ekuaibao.com/%E5%8F%91%E7%A5%A837-1710495952586-302.png?Expires=1710500135&OSSAccessKeyId=STS.NTyZ6QiWLfCL5jAaSFesi8Ke3&Signature=yab1cphADdyBa8pC%2FkU9hYNfvW0%3D&x-oss-process=image%2Fcrop%2Cw_675%2Ch_505%2Cx_0%2Cy_0%2Cg_nw&security-token=CAIS8AF1q6Ft5B2yfSjIr5fMEYzlhIht0YGnN0zwhVMTafxF147O0Tz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapONcxKyfVrzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAGySjRbhraZT5FaeBUsYxuv9K%2FUHHU0qvlUZZkOi0hlGESLV%2Ff18noebArcxE1Qr8%2Bkpsis61jTlmwxt2acBtJQ7jMvOe2Rn4edU%2FBw8ajOZY6ZlYIj3%2F1dBJKnupl3O7IvAB%2BLpO8FVZ7Jf0fFlFJvyGO%2Bs0rkTYmoheDmf%2FgK8SAA",
            "source": "ocr",
            "fileName": "发票37-1710495952586-302.png",
            "region": [
                0.0, 0.0, 675.0, 505.0
            ]
        },
        {
            "id": "Tdk3tgber501v0:044002105112:13116949",
            "url": "https://files-dd.ekuaibao.com/914406006886972209_4b113f8c5b2b431eb46fba682a0065ed-1706681744509-935-1709110959714-189.pdf?Expires=1710500135&OSSAccessKeyId=STS.NTyZ6QiWLfCL5jAaSFesi8Ke3&Signature=QEMaMOHAxUVc3KBhHR%2BKzUioaVw%3D&security-token=CAIS8AF1q6Ft5B2yfSjIr5fMEYzlhIht0YGnN0zwhVMTafxF147O0Tz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapONcxKyfVrzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAGySjRbhraZT5FaeBUsYxuv9K%2FUHHU0qvlUZZkOi0hlGESLV%2Ff18noebArcxE1Qr8%2Bkpsis61jTlmwxt2acBtJQ7jMvOe2Rn4edU%2FBw8ajOZY6ZlYIj3%2F1dBJKnupl3O7IvAB%2BLpO8FVZ7Jf0fFlFJvyGO%2Bs0rkTYmoheDmf%2FgK8SAA",
            "thumbUrl": "",
            "source": "ocr",
            "fileName": "914406006886972209_4b113f8c5b2b431eb46fba682a0065ed-1706681744509-935-1709110959714-189.pdf",
            "region": [
                0.0, 0.0, 2000.0, 1292.0
            ]
        },
        {
            "id": "Tdk3tgber501v0::23312000000123878916:2",
            "url": "https://files-dd.ekuaibao.com/ID01lb6vFqW1uT--23312000000123878916-MwK4Xw7kJiB1nP-1710496101950-498.xml?Expires=1710500135&OSSAccessKeyId=STS.NTyZ6QiWLfCL5jAaSFesi8Ke3&Signature=SaMJ0k5SSbdjIsdqpvtB5tuspv0%3D&security-token=CAIS8AF1q6Ft5B2yfSjIr5fMEYzlhIht0YGnN0zwhVMTafxF147O0Tz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapONcxKyfVrzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAGySjRbhraZT5FaeBUsYxuv9K%2FUHHU0qvlUZZkOi0hlGESLV%2Ff18noebArcxE1Qr8%2Bkpsis61jTlmwxt2acBtJQ7jMvOe2Rn4edU%2FBw8ajOZY6ZlYIj3%2F1dBJKnupl3O7IvAB%2BLpO8FVZ7Jf0fFlFJvyGO%2Bs0rkTYmoheDmf%2FgK8SAA",
            "thumbUrl": "",
            "source": "ocr",
            "fileName": "ID01lb6vFqW1uT--23312000000123878916-MwK4Xw7kJiB1nP-1710496101950-498.xml",
            "region": []
        },
        {
            "id": "Tdk3tgber501v0::24442000000074288816",
            "url": "https://files-dd.ekuaibao.com/1-29%E4%B8%9C%E8%8E%9E%E5%B0%8F%E5%8B%BA_24442000000074288816-1709626001532-733-1710495986051-669.ofd?Expires=1710500135&OSSAccessKeyId=STS.NTyZ6QiWLfCL5jAaSFesi8Ke3&Signature=G%2F7pTH6ZyT1f1novbyToCrJXAvw%3D&security-token=CAIS8AF1q6Ft5B2yfSjIr5fMEYzlhIht0YGnN0zwhVMTafxF147O0Tz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapONcxKyfVrzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAGySjRbhraZT5FaeBUsYxuv9K%2FUHHU0qvlUZZkOi0hlGESLV%2Ff18noebArcxE1Qr8%2Bkpsis61jTlmwxt2acBtJQ7jMvOe2Rn4edU%2FBw8ajOZY6ZlYIj3%2F1dBJKnupl3O7IvAB%2BLpO8FVZ7Jf0fFlFJvyGO%2Bs0rkTYmoheDmf%2FgK8SAA",
            "thumbUrl": "",
            "source": "ocr",
            "fileName": "1-29东莞小勺_24442000000074288816-1709626001532-733-1710495986051-669.ofd",
            "region": [
                0.0, 0.0, 2000.0, 1332.0
            ]
        }
    ]
}
```

## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"items": []}` | 返回空表示没有查询到实例数据<br/>请确认 `invoiceId`（发票ID集合）是否正确 | 
