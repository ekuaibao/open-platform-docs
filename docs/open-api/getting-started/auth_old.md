# 获取授权

<!-- toc --> 
---
### 获取授权

{% httpverb "post" %} /api/openapi/v1/auth/$`verifyCode` {% endhttpverb %}

#### Path Parameters:

| 名称       | 类型    | 描述                                          |   备注   |
| :--------- | :------ | :-------------------------------------------|:------------------|
| **verifyCode** | String  |在易快报桌面端「企业管理」>「功能授权」>「开放接口」处，点击「获取验证码」取得。|     必填   |

⚠️ 注意：VerifyCode验证码有效期为2小时，且同一验证码只能使用一次。

![如何获取验证码](/img/getting-started/old_getToken1.png)
![如何获取验证码](/img/getting-started/old_getToken2.png)

#### Query Parameters:

| 名称       | 类型    | 描述                                           |   备注   |
| :--------- | :------ | :-------------------------------------------------- |:-------|
| **powerCode** | String  |如无特殊说明，传入219902即可。       |  必填 |

#### 示例:
```json
	https://dd2.ekuaibao.com/api/openapi/v1/auth/$AdbE3de?powerCode=219902

```

#### Response:
```json
{
	"value": {
		"accessToken": "u-E4PVy28Q0400", //Token为随机码
		"expireTime": 1531046137469, //授权码过期日期时间戳(默认32天后到期)
		"refreshToken": "asg4PVy28Q0800", //Token为随机码
		"corporationId": "企业ID"
	}
}

```

---
### 用户自定义授权码过期日期

{% httpverb "post" %}  /api/openapi/v1/auth/expireDate/$verifyCode {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述                          |  备注   |
| :--------- | :------ | :-------------------------- |:--------|
| **verifyCode** | String  |验证码可在钉钉中获取        |必填|
| **powerCode** | String  |第三方功能code，各功能对用的code值见附录，如无特殊说明，传入219902即可。         |必填|
| **expireDate** | String  |用户自定义授权码过期日期，单位为天       |必填|

注意：

     如果expireDate值为null或者为空字符串，直接返回错误。
	 如果用户自定义过期日期超过该功能的有效期，则过期日期为该功能到期日期。

#### 示例:
```json
	https://dd2.ekuaibao.com/api/openapi/v1/auth/expireDate/$FkWE9PS-?powerCode=219902&expireDate=10

```

#### Response:
```json
{
	"value":
	{
		"accessToken":"sdsdsdsdsd",//授权码
		"expireTime":12235684543236,//授权码过期日期时间戳(当前日期加上用户自定义时间)
		"refreshToken":"sdsdsdssx",//只有调用刷新有效期接口时需要传的code
		"corporationId":"ekuaibao"//企业id
	}
}
```

---


### 刷新授权
在授权码过期前，可使用此接口刷新有效期。如果accessToken已经过期，则无法刷新，只能重新获取。

{% httpverb "post" %} /api/openapi/v2/auth/refreshToken {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述                          |  备注   |
| :--------- | :------ | :-------------------------- |:--------|
| **accessToken** | String  |即将过期的Token。        |必填|
| **refreshToken** | String  |上次获取/刷新Token时拿到的refreshToken。        |必填|
| **powerCode** | String  |如无特殊说明，传入219902即可。       |必填|

注意:
		
		刷新后accessToken 和 refreshToken的值都会变化

#### 示例:
```json
	https://dd2.ekuaibao.com/api/openapi/v2/auth/refreshToken?accessToken=u-E4PVy28Q0400&refreshToken=asg4PVy28Q0800&powerCode=110202

```

#### Response:
```json
{
	"value":
		{
			"accessToken":"sdsdsdsdsd",//新的授权码(默认32天后到期)
			"expireTime":12235684543236,//授权码过期日期时间戳
			"refreshToken":"sdsdsdssx",//只有调用刷新有效期接口时需要传的code
			"corporationId":"ekuaibao"//企业id
		}
}

```

---


### 刷新授权期限接口，用户自定义授权码过期日期

{% httpverb "post" %}  /api/openapi/v2/auth/refreshToken/expireDate {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述                          |  备注   |
| :--------- | :------ | :-------------------------- |:--------|
| **accessToken** | String  |当前的授权码        |必填|
| **refreshToken** | String  |刷新期限时需要传的参数        |必填|
| **expireDate** | String  |用户自定义授权码日期，单位为天        |必填|
| **powerCode** | String  |如无特殊说明，传入219902即可，各功能对用的code值见附录       |必填|

注意:

		刷新后accessToken 和 refreshToken的值都会变化。
		如果expireDate值为null或者为空字符串，直接返回错误。
		如果用户自定义过期日期超过该功能的有效期，则过期日期为该功能到期日期。

#### 示例:
```json
	https://dd2.ekuaibao.com/api/openapi/v2/auth/refreshToken/expireDate?accessToken=YEA9dEmCoo0Q00&refreshToken=jm89dEmCoo0U00&expireDate=1&powerCode=219902
```

#### Response:
```json
{
    "value": {
        "accessToken": "jPk9dEmCoo1U00",//新的授权码
        "refreshToken": "FJI9dEmCoo1Y00",//只有调用刷新有效期接口时需要传的code
        "expireTime": 1559643971409,//授权码过期日期时间戳(当前日期加上用户自定义日期)
        "corporationId": "5mY8ntK6CM0800"//企业id
    }
}

```



