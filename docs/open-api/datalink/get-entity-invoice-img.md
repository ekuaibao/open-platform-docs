# 发票图片

{% httpverb "post" %} /api/openapi/v2/extension/INVOICE/url {% endhttpverb %}

>⚠️ 注意：

>图片链接是临时的，请勿永久保存


#### Query Parameters:

| 名称             | 类型     | 描述        | 是否必填      | 默认值 | 备注                                         |
| :---------      | :------  | :------    | :------- |:---------| :------------------------------------------  |
| **accessToken** | String   | 认证token  | 必填      | - |  [通过授权接口获取](/getting-started/auth.html)  |


#### Body Parameters:

| 名称             | 类型     | 描述        | 是否必填      | 默认值 | 备注                                         |
| :---------      | :------  | :------    | :------- |:---------| :------------------------------------------  |
| **invoiceId** | Array<String>   | 发票id集合  | 必填      | - |  - |


<br/>
#### CURL:
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v2/extension/INVOICE/url?accessToken=ZyEbyCA-_Auk00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "invoiceId":["5-sbyDJSOI0800"]
}'
```
<br/>


#### 成功响应:
```json
{
    "items": [
        {
            "id": "5-sbyDJSOI0800", // 票据id
            "url": "https://ekuaibao.oss-cn-hangzhou.aliyuncs.com/1-1599549416718-134.png?Expires=1599556324&OSSAccessKeyId=STS.NU8hY9c2XvoJDXTV9y6CK8KQS&Signature=3c9%2BPXYvYpN4s5%2BhQSSvjpa%2FMx0%3D&x-oss-process=image%2Fcrop%2Cw_1080%2Ch_1920%2Cx_0%2Cy_0%2Cg_nw&security-token=CAIS8AF1q6Ft5B2yfSjIr5aNI%2BONju15wa2hRn7lsjksOsxn1476sTz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapOxKifYX0XzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAGY1ydps9DFvMZEx77hkbxIFUDb9eNChzdMArMvBfBZaHcgBMeJe1zbLZCHIpKBbkqNt7eJCj3JrQvVcfwSG7NnwlFbHebi68486IzfdBzsiOBGmwvRDcx9z%2FrmCZJmxu0BxE2JFb2N9BEx9d3QrfjWrvtb%2FVJxCkmXa3mdU0S1Ag%3D%3D",//图片地址
            "thumbUrl": "https://ekuaibao.oss-cn-hangzhou.aliyuncs.com/1-1599549416718-134.png?Expires=1599556324&OSSAccessKeyId=STS.NU8hY9c2XvoJDXTV9y6CK8KQS&Signature=3c9%2BPXYvYpN4s5%2BhQSSvjpa%2FMx0%3D&x-oss-process=image%2Fcrop%2Cw_1080%2Ch_1920%2Cx_0%2Cy_0%2Cg_nw&security-token=CAIS8AF1q6Ft5B2yfSjIr5aNI%2BONju15wa2hRn7lsjksOsxn1476sTz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapOxKifYX0XzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAGY1ydps9DFvMZEx77hkbxIFUDb9eNChzdMArMvBfBZaHcgBMeJe1zbLZCHIpKBbkqNt7eJCj3JrQvVcfwSG7NnwlFbHebi68486IzfdBzsiOBGmwvRDcx9z%2FrmCZJmxu0BxE2JFb2N9BEx9d3QrfjWrvtb%2FVJxCkmXa3mdU0S1Ag%3D%3D",//图片缩略图
            "source": "ocr", // 票据来源
            "fileName": "1-1599549416718-134.png",
            "region": [ // ocr识别范围
                0,
                0,
                1080,
                1920
            ]
        }
    ]
}

```