# 获取单据附件
根据单据ID获取单据的附件数据信息（单据详情附件、费用明细附件、审批附件/评论附件、回单附件）。

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v1/flowDetails/attachment"
/>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | [通过授权接口获取](/docs/open-api/getting-started/auth) |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **flowIds** | Array | 单据ID | 必填 | - | [单据ID获取方式](/docs/open-api/flows/question-answer#问题一)，一次最多能查询 **100** 个单据<br/>例如：[ "1s8cfnyBH8Jw00" , "1s8cfnyBH8Jw01" ] |

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v1/flowDetails/attachment?accessToken=TNQbsyYQV80I00'
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "flowIds":["BXoci03_oQ5000","c3Aci0NWnkgc00","6_kcgINHfcbI00"]
}'
```

## 成功响应
```json
{
    "items":[
        {
            "flowId":"6_kcgINHfcbI00",                  //单据ID
            "flowCode":"B21000073",                     //单据编码
            "attachmentList":[
                {
                    "type":"flow.body",                 //单据详情附件
                    "attachmentUrls":[                  //附件列表
                        {
                            "key":"无发票号码-1611919507409-253.jpg",  //附件key
                            "url":"https://vipimg.ekuaibao.com/%E6%97%A0%E5%8F%91%E7%A5%A8%E5%8F%B7%E7%A0%81-1611919507409-253.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:oiv8FdEHZuO7LDQE-Qh8YdZS_8g=",//附件url
                            "fileId":"2u8cgINHfceI00",  //附件ID
                            "fileName":"无发票号码.jpg"  //附件名称
                        }
                    ]
                },
                {
                    "type":"flow.free",                //单据费用详情附件
                    "freeId":"r3gX9hMxRsvgAa",         //费用详情ID
                    "attachmentUrls":[                 //费用详情附件
                        {
                            "key":"无发票号码-1611919424372-705.jpg",
                            "url":"https://vipimg.ekuaibao.com/%E6%97%A0%E5%8F%91%E7%A5%A8%E5%8F%B7%E7%A0%81-1611919424372-705.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:KN9enR6649pNcF13Mq4S7Uuka50=",
                            "fileId":"-XYcgINHfcb800",
                            "fileName":"无发票号码.jpg"
                        }
                    ],
                    "invoiceUrls":[                    //发票文件
                        {
                            "key":"广东机打发票9000(1)-1611919551788-38.jpg",
                            "url":"https://vipimg.ekuaibao.com/%E5%B9%BF%E4%B8%9C%E6%9C%BA%E6%89%93%E5%8F%91%E7%A5%A89000%281%29-1611919551788-38.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:f4bcE63ecFlQ8wdyYW0UNwsJ9d0=",
                            "fileId":"YrMcgINHfcfc00",
                            "fileName":"广东机打发票9000(1).jpg"
                        }
                    ]
                },
                {
                    "type":"flow.approving",           //单据审批附件（包含评论附件）
                    "attachmentUrls":[
                        {
                            "key":"1111g_200_200-1611919723502-854.png",
                            "url":"https://vipimg.ekuaibao.com/1111g_200_200-1611919723502-854.png?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:wYhkcoRckh58zM3yuEl0s8-5blk=",
                            "fileId":"pR4cgINHfcoY00",
                            "fileName":"1111g_200_200.png"
                        },
                        {
                            "key":"222_200_200-1611919723502-680.png",
                            "url":"https://vipimg.ekuaibao.com/222_200_200-1611919723502-680.png?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:M0aRd9QQOnTaB5gPusibxGCz540=",
                            "fileId":"mTgcgINHfcoU00",
                            "fileName":"222_200_200.png"
                        }
                    ]
                },
                {
                    "type":"flow.receipt",            //单据回单地址
                    "receiptUrls":[
                        {
                            "url":"https://vipimg.ekuaibao.com/503cedde-d7d6-4115-b8ee-1aed222add21-MjIwMjczOTE3ODE%3D.pdf?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:OeWrlRnBSn8LQGlMz8reHTbn0vE=",
                            "key":"503cedde-d7d6-4115-b8ee-1aed222add21-MjIwMjczOTE3ODE=.pdf"
                        }
                    ]
                }
            ],
            "fromType":"expense"                      //单据类型
        },
        {
            "flowId":"BXoci03_oQ5000",
            "flowCode":"B21000085",
            "attachmentList":[
                {
                    "type":"flow.body",
                    "attachmentUrls":[
                        {
                            "key":"定额发票01-1612269865498-150.jpg",
                            "url":"https://vipimg.ekuaibao.com/%E5%AE%9A%E9%A2%9D%E5%8F%91%E7%A5%A801-1612269865498-150.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:EcJrAcZAIJ1ZJVj-Sv-ICJsZOUM=",
                            "fileId":"Wswci03_oQ4800",
                            "fileName":"定额发票01.jpg"
                        }
                    ]
                },
                {
                    "type":"flow.free",
                    "freeId":"OmLAQeEFpAJnVp",
                    "attachmentUrls":[
                        {
                            "key":"定额发票02-1612269762542-987.jpg",
                            "url":"https://vipimg.ekuaibao.com/%E5%AE%9A%E9%A2%9D%E5%8F%91%E7%A5%A802-1612269762542-987.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:N-vOMKLw6oLLILD9sCYmvnnUrDw=",
                            "fileId":"2i0ci03_oQ4000",
                            "fileName":"定额发票02.jpg"
                        }
                    ],
                    "invoiceUrls":[
                        {
                            "key":"深圳电子普票-1612269846131-83.png",
                            "url":"https://vipimg.ekuaibao.com/%E6%B7%B1%E5%9C%B3%E7%94%B5%E5%AD%90%E6%99%AE%E7%A5%A8-1612269846131-83.png?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:xDGJBYJo_w6S71nOvvRBfop9Q2o=",
                            "fileId":"FYQci03_oQ4400",
                            "fileName":"深圳电子普票.png"
                        }
                    ]
                }
            ],
            "fromType":"expense"
        },
        {
            "flowId":"c3Aci0NWnkgc00",
            "flowCode":"B21000086",
            "attachmentList":[
                {
                    "type":"flow.body",
                    "attachmentUrls":[
                        {
                            "key":"定额发票01-1612273739152-688.jpg",
                            "url":"https://vipimg.ekuaibao.com/%E5%AE%9A%E9%A2%9D%E5%8F%91%E7%A5%A801-1612273739152-688.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:ZNTBX4s9xxj7IRMg5UOLX8PriGI=",
                            "fileId":"ltgci0NWnkfo00",
                            "fileName":"定额发票01.jpg"
                        }
                    ]
                },
                {
                    "type":"flow.approving",
                    "attachmentUrls":[
                        {
                            "key":"定额发票06-1612319984830-684.jpg",
                            "url":"https://vipimg.ekuaibao.com/%E5%AE%9A%E9%A2%9D%E5%8F%91%E7%A5%A806-1612319984830-684.jpg?e=1612428089&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:4hupCJlaiDXThuXGdIWTomkv_Vs=",
                            "fileId":"j1Yci2bRCgw000",
                            "fileName":"定额发票06.jpg"
                        }
                    ]
                }
            ],
            "fromType":"expense"
        }
    ]
}
```

:::tip
响应数据中附件的 `key`、`fileId`、`fileName` 不是必返回的，有些附件可能没有这些字段。
:::

## 失败响应
单据不存在，一般是单据ID不对或者单据已经被删除了，请检查：
```json
{
    "items": []  //表示没查到数据
}
```

## 单据附件种类补充说明

| 字段名 | 对应附件来源类型 |
| :--- | :--- |
| **flow.body**      | 单据详情附件 |
| **flow.free**      | 单据费用详情附件 |
| **flow.approving** | 单据审批附件（包含评论附件） |
| **flow.receipt**   | 单据回单附件 |