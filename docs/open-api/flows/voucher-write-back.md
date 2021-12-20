# 回写单据凭证信息

* 支持批量回写单据凭证

{% httpverb "put" %} /api/openapi/v2/flow/data/erpVoucher {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  |通过授权接口获取。      |必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |

#### Body Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
|**voucher**| Array | 凭证信息 | 必填（至少一条）| - | - |
|**voucher/flowId**| String | 单据ID | 必填 | - |  通过其他api接口获取或者出站消息 |
|**voucher/voucherNo**| String | 单据凭证号 | 必填 | - |  根据实际业务提供的凭证号,如果传空("")则删除该单据的凭证号 |
|**voucher/voucherCreateTime**| String | 单据凭证生成时间 | 必填 | - |  毫秒级时间戳 |
|**voucher/fiscalPeriod**| String | 会计期间 | 非必填 | - |  - |


<br/>
#### CURL:

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v2/flow/data/erpVoucher?accessToken=cWEbn1cA0kjU00' \
--header 'Content-Type: application/json' \
--data-raw '{
    "voucher":[
        {
            "flowId": "yd4bn1Z-YM9000",
            "voucherNo": "201908080001",
            "voucherCreateTime": "1565175685575"
        }
    ]
}
```
<br/>



#### 成功响应:

```json
{
    "value": true
}
```

#### 失败响应:

```json
请确保单据id是存在的。
{
    "errorCode": 412,
    "errorMessage": "不存在此单据[yd4bn1Z-YM900]",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
