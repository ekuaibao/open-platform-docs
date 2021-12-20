# 回写单据凭证信息
*支持批量回写单据凭证

{% httpverb "put" %} /api/openapi/v2/flow/data/erpVoucher {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述                                                |
| :--------- | :------ | :-------------------------------------------------- |
| **accessToken** | String  |必填，通过授权接口获取。      |


#### 示例:
```json
	http://wx2.ekuaibao.com/api/openapi/v2/flow/data/erpVoucher?accessToken=mZI9yS-iCo0400

```

#### body参数:
```json
{
    "voucher":[
         {
                  "flowId":"Ubw9yPgWLE6I00", //单据ID(必填)
                  "voucherNo":"201908080001", //单据凭证号(必填)
                  "voucherCreateTime":"1565175685575" //单据凭证生成时间(必填)
        },
        {
                "flowId":"QXo9yPgWLE7A00", //单据ID(必填)
                "voucherNo":"201908080002", //单据凭证号(必填)
                "voucherCreateTime":"1565175685575" //单据凭证生成时间(必填)
          }
     ] 
}
```

#### Response:
```json
{
    "value": true
}
```
