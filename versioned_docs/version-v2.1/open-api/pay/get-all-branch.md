# 获取所有开户网点信息
获取易快报所有开户网点信息（Excel表格）的下载链接（在1小时内有效）。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/banks/getAllBranch"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String  | 认证token   | 必填  | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```shell
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/banks/getAllBranch?accessToken=ID_3ARKNqG1XUg:PCx3rwm3aA00qM'
```

## 成功响应

```json
{
    "code": "A200",  //状态码
    "msg": null,
    "url": "https://files-dd.ekuaibao.com/%E7%BD%91%E7%82%B9%E4%BF%A1%E6%81%AF%E5%AF%BC%E5%87%BA_20220310_2316_eadf9c9c-74ec-438d-94d8-c58c27602086.xlsx?Expires=1647246198&OSSAccessKeyId=STS.NV7D2CiVmAFqgYX1KcYYUvACW&Signature=vqCTqf4zsX6nVmILqxJa6rNc%2FKs%3D&security-token=CAIS8AF1q6Ft5B2yfSjIr5WCD4j3hIlM9oSaZX%2Fp1Us2VdZ5mYTotTz2IHlPdHZhBekYtPszmW9Z6%2FsdlqF%2BSIJETEbNapPacheEYUTzDbDasumZsJYm6vT8a0XxZjf%2F2MjNGZabKPrWZvaqbX3diyZ32sGUXD6%2BXlujQ%2Fbr4NwdGbZxZASjaidcD9p7PxZrrNRgVUHcLvGwKBXn8AGyZQhKwlMk1zojtf7lmpTMtUuE0ALAp7VL99irEP%2BNdNJxOZpzadCx0dFte7DJuCwqsEERpPgn0PUao2ib447MXgQO%2BXScOu%2FT6cZ0MBRpwUXA2EKANZEagAEsUkQ57zVRRGMrdKgCaXe5kZCZc85Sm0IXmPjiLR7lvCb6t42mZigZRgb5liBTCfO%2B5XiJyFgpIe7yJ3QUkaNhN1qlO5ivI9JVO7c2ycrq0kJb21MwL%2BRvYcUEGuhQLb%2Bn1G%2Bpq8wClfv2YcTR6Otfp1igSZjIlIOQlvNpTwGpYg%3D%3D"
}
```
| code | msg | url | 含义 | 
| :--- | :--- | :--- | :--- |
|**A200**| null                        | 下载链接 | 返回的下载链接中的文件是最新的网点信息（链接时效1小时） |
|**A200**| 生成文件中，2分钟后重试         | null | 表示文件生成中，预计2分钟后可重试 |
|**A201**| 未导出过数据为空               | null | 表示当前环境从未导出过网点，现在开始生成数据，预计5分钟后可重试 |
|**A202**| 上次导出任务文件失败，重新生成文件 | null | 表示上次生成文件时出现异常，数据重新生成，预计5分钟后可重试 |
|**A203**| 下载链接为空，重新生成文件       | null | 表示上次生成文件成功，但不存在下载链接，数据重新生成，预计5分钟后可重试 |
|**A204**| 网点存在更新                  | null | 表示上次生成文件后，存在网点数据更新，文件将重新生成，预计5分钟后可重试 |






