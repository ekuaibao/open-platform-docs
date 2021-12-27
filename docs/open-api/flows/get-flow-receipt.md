# 获取回单下载链接地址
根据单据id获取回单下载链接地址

import Control from "../../../components/Control";

<Control
method="GET"
url="/api/openapi/v1/flowDetails/getReceipt/$flowId"
/>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowId** | String | 单据的id | 必填 | - | 通过其他api接口获取或者出站消息 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken**    | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## CURL
```json
curl --location --request GET 'http://app.ekuaibao.com/api/openapi/v1/flowDetails/getReceipt/$Udscc9A3o8H800?accessToken=ID_3uUVAxi01Zw:PCx3rwm3aA00qM'
```

## 成功响应
```json
{
    "value": {
        "flowId": "Udscc9A3o8H800",
        "code": "B21000016",
        //receiptUrls 为临时下载地址时效：2小时
        "receiptUrls": [
            "https://vipimg.ekuaibao.com/a6878a64-a104-44e2-8fed-1147d2f28f8d-MjIwMzcyMTM5NjA%3D.pdf?e=1611655689&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:S6g-VdJA-eOlDXgCPbgDZXJ4LVI=",
            "https://vipimg.ekuaibao.com/f5c6476a-805c-44d7-a47f-7e374925a0d6-MjIwMzcyMTM5NjE%3D.pdf?e=1611655689&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:IKAhVkxtkFgXIl5UotcvAEI_oxo=",
            "https://vipimg.ekuaibao.com/a8dd973d-6817-4963-8b65-9d93384bf30b-MjIwMjc0MDIwMTI%3D.pdf?e=1611655689&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:hHsjpjsPlA8XK9sF0nRQvl3WSxQ="
        ]
    }
}
```

