# 获取浙里办票平台发票数据

import Control from "@theme/Control";

<Control
method="POST"
url="/api/openapi/v2/invoice/$ZLBP/list"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**2.0.0**](/updateLog/update-log#200)
    - 🆕 新增了本接口。

</div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
|**invoiceType**        | String   | 发票种类           | 非必填  | - | 示例：`增值税专用发票` | 
|**payerNo**            | String   | 购买方税号         | 非必填  | - | 字段信息 | 
|**processedDate**      | String   | 开票日期           | 非必填  | - | 格式：yyyy-MM-dd | 
|**numberOfInvoice**    | String   | 发票号码           | 非必填  | - | 发票号码 | 
|**codeOfInvoice**      | String   | 发票代码           | 非必填  | - | 发票代码 | 
|**start**              | Int      | 分页查询的起始序号   | 必填    | - | 分页的起始值是从 `0` 开始， 而不是传统的 `1` 开始 | 
|**count**              | Int      | 查询数据条数        | 必填    | - | 最大不能超过 `100` | 

## CURL
```json
curl --location --request POST 'https://app.ekuaibao.com/api/openapi/v2/invoice/$ZLBP/list?accessToken=ID01uw7gqkKPwj:zYE3IoyvPx0040' \
--header 'Content-Type: application/json' \
--data-raw '{
    "invoiceType": "增值税专用发票",
    "payerNo": "91330681MA7F19UC27",
    "processedDate": "2023-09-26",
    "numberOfInvoice": "02630221",
    "codeOfInvoice": "3300232130",
    "start": 0,
    "count": 100
}'
```

## 成功响应
```json
{
    "count": 1,
    "items": [
        {
            "id": "ID01uwUW10NQT5",
            "active": true,
            "grayver": "1.2.7.0-prd",
            "payerNo": "91330681MA7F19UC27",
            "version": 2,
            "pipeline": 1,
            "threadId": "1586",
            "dbVersion": 2,
            "requestId": "zjbp6552dd98e4b00f79dc93dbaf",
            "attachment": {
                "key": "zlbp-f3cfc10c-5ccf-4312-833f-79a8f56fd84a-8de8e032c00a6953f3a7a7fde93969b4.ofd",
                "empty": false,
                "fileId": "ID01uwUW10NRq7",
                "fileName": "8de8e032c00a6953f3a7a7fde93969b4.ofd"
            },
            "createTime": 1699929496626,
            "handleStep": "DECRYPTDATA",
            "updateTime": 1699929496626,
            "decryptData": {
                "Payee": "王丽理",
                "Issuer": "王丽理",
                "xbrlId": "zjinv_spe_issuer",
                "Remarks": "",
                "Reviewer": "",
                "VoidMark": "N",
                "DateOfIssue": "2023-09-26",
                "NameOfSeller": "诸暨海亮后勤服务有限公司",
                "SecurityCode": "",
                "CodeOfInvoice": "3300232130",
                "TypeOfInvoice": "增值税专用发票",
                "TotalTaxAmount": "590.94",
                "IdentifyingCode": "69995434391259060960",
                "NameOfPurchaser": "浙江皓亮智享信息技术咨询有限公司",
                "NumberOfInvoice": "02630221",
                "LocationOfInvoice": "浙江省",
                "InvoiceIssuingSign": "",
                "SpecialInvoiceType": "",
                "UniqueCodeOfInvoice": "330023213002630221",
                "NumberOfInvoiceMachine": "661825083591",
                "TotalAmountExcludingTax": "9849.06",
                "TaxIncludedAmountInWords": "壹万零肆佰肆拾圆整",
                "AddressPhoneNumberOfSeller": "浙江省绍兴市诸暨市店口镇解放路386号 0575-89006381",
                "TaxIncludedAmountInFigures": "10440.00",
                "AddressPhoneNumberOfPurchaser": "浙江省诸暨市店口镇解放路386号",
                "EndOfIncomePeriodUnderAccrualBasis": "",
                "DepositBankAndAccountNumberOfSeller": "中国工商银行诸暨市支行 1211024009200139260",
                "DepositBankAndAccountNumberOfPurchaser": "中国工商银行诸暨大唐支行 1211025409100135865",
                "BeginningOfIncomePeriodUnderAccrualBasis": "",
                "InformationOfTaxableGoodsOrServicesDetailItemsTuple": [
                    {
                        "TaxRate": "6.00%",
                        "TaxAmount": "590.94",
                        "AmountExcludingTax": "9849.06",
                        "NatureOfInvoiceLine": "",
                        "TaxClassificationCode": "3049900000000000000",
                        "NameOfTaxableGoodsOrServices": "*现代服务*后勤服务"
                    }
                ],
                "TaxpayerIdentificationNumberUnifiedSocialCreditCodeOfSeller": "91330681MA2BFRQ360",
                "TaxpayerIdentificationNumberUnifiedSocialCreditCodeOfPurchaser": "91330681MA7F19UC27"
            },
            "originalData": {
                "envelope": "BIOquF8VZWm8zHYDWARc1p2yfcONg_3TCnqqBMjmTDNcb3gn8KLWTSzlfIoDPJQmZPz3W4F8tGlAC8W6R3qRd7mIFHZK0F6w09SuZiitJMIGcJcAGRiTf0vRLB_oKSE6N566IzK7qCTZuFVQ0GxCjuQ=",
                "fileName": "8de8e032c00a6953f3a7a7fde93969b4.ofd",
                "layoutFile": "GNfCLylOJO4XR3dOoWutY-HY9i0OzyljX6yD-W36Y7AdkoK9i5cy0xGznkNM_lF76V2QeEjsjVKVHFj3ZEaG6rTv22MeP5heHe8WEjDVvvhz0bFL4a9FUymaT-HazI2fvKcvGoG0m-P_LcDJFxXiNHBXkhTqm6mmf6pViTtDPwk5j3XfiBH_ftAR9CeBLLNW5Ao2hsh86HhpDV3MWTwZs6GKORCfD2CWjPcK6Kg12tuH9Ges64DqSV_FF9QdH_WF79h_WFY9ZGA_Bk6CQD4_ToEeXZSZrxSATEz6muiwa3mOLAedmjYLUiFaNDBRUeUkjUeGSCynJ6my6nbsNNZwXOq9XAm41pq9qVzujWyfGMb-GA9W8_2bFvkm6R0gtNkeQ0B-moztu3AQmzK-dWCCKrU0xFg_nylTP5IbQ1wrOhko5N-N-SNZ5arNiRNzbQfywSrM_GJdgF-Bb1xrjbeB1gu7MEALUMVV5M8hsJQgrBc50V7G66N_kJVFm-mWa3rcrSRwWu8sz4kEiYiGrdeb88gxcvDiz_EXtIlSCwtHMPR6IIpLAyzOvSZ-UmkVguCKJJQkTaVnWzZ1gTCyCjcYGxeyriyT_Q86SeC5bov3vCI9H6jxQnznElSY3xTsUso6EGpFxrx_LBAXp66Y7CDZU5WByl5CZKMFLhweqomImQZSrCH-IMbowXz0H6GstP9OFGd_-KApwT9ynlX80Az5Gbu3hMQb0TLWaRP61cKTXsaIzC8iwtpdavudr_lS9SPimcZBa87WeRkyBlGJJyBqJEihWz074nba9NI1Jb2BgdyvZph-HRA-Z8-cSRGGzYymv0e2-8XEMVTSCHzeovC5YS7hARid33oJFWK2S2kfG8gSwR9qNm-e1nOZLxWxBFb0oJ62NXontFFmjuB4LrnvpTdBUoD8KSLp1A7chvXYZpm2j38pzoPu_FUGibNlx_aR-K2-SpW4JsLWD0sB0x3D8AbQfwFkGTm_LU1NNf5IXpKhfRdMr9NZ-M_76TbhCuefQPw9yS1Y-yLoRPRnABTvZBY5NC18OxsQkv1x9hJCnf9RH4hT5uELOynfd0JBgdxU-yDj0Enn6JgiVTv34tTZ13HmQUyBdDny4nDXElae68LL7-pWnwiZDMILQC8vRD68vPbZmFW_HgKHD72IcCWPLjKCm0sQYPNPJ2rLMKAYHcj6W14Y1w76D1nQ9rRBV3CnlTy0wdZCl4H35Xi7YR6eum3XPteIKDccJV52hWABETIEuI4T-EsTGJhrOIsmg81JGs1mFubVqUaed8W4wfm7uTtNf5_o6IWIz2hYsSFkL4PQB5yaWsILMZ31Gt_xLEmuvrHaaN3aJk_kCAYxys0ulypWo14620XtEiLkc_wGr8CW3KhhjyTKyoqA8C-aDm38KwIL7iXLDoDTiXvnxxzhnBF2-apdv3J9kaLPdiECB6lFxWbOTsN394OlzyWxQyoKqRtryC89xFjoRQBQ6BMOb7wGcNRMWl6Bb1dms7rrAjRzn4JGeMs4TIbhODwYl2kn30sjUAKtpDkqo6kUkkQI9f2_AYgz87AqctZ8h3J6tHJv0XWr4fZw7xHiDWyINw8yzWu7Yl_GZ6a7LqYKjnPlccdxozKFcgbcKrN4iQsoNWTHcKeaBHhLV9qUsMh1exQ9OFdxJreTyjlSLaM5TA6q7a64gmAuD2wZlBQXelRk0QYC6AwX_FSkue9J2YLPbWyBgVVKo522U35N4LC8QFo3W0OH8_XEVv3N48zTDGcEZ-hLxoK2tiaheHkA8YU4VB923kFRLTRkevKX-_2lmyh7q8XxpCPMnoNVBdVtLovuOs2IwyFldOIMIoOlckkec_i9vi3O31QbK2paaM1oNXtfVvD2EfLaEJ5AKD5YA5o6wr-nbNZYetDlOqvcdnfeQXdob-XmJn6yNJ4LUM8k35QHGJyw7FG2cewa5TYPfvfjVQ7wRBN1UmsS2ORjnWUs8H5Aa6YM35cr2AKAl1HTaRhFvPNBp6a60LB3zdJsHpMTuDOWRyw_Tg4vZegmHJo1MCXTAdF8FOUc0HoeFsmZLIRVCv_M8oCcTxZpicz3Z6JkxhpUri8YRMAGCl6BsuV0BVv62sZRi8-Dwvuy-CcTXDl64eVMTMxTLfFyVcLiZBKRJQfER1GEGd194RqigKOCICKDKuK6flPn91SGdnY-HHvbTKuZ04-hUZSyfEUqAYq_KqiF3S4ftuP0eyTzzMD3s_hb_glzdx9Bbd0bj2RFi3xb4YYO-S5xCOB6Kr6uXkz325yoX4egbjgcs3btUmKqJ7W7-y3lbCs4QVmA24lNMmuyUaSLL3eaALFjHQCOJNLChbBOMMU0g6fzeOC9VXzaM-uKcit6p4njGOpCoJCvOHVNH1qvM73CW7geX15ds-XvWOt6yM6DpyuMdMt5Hp4AV-bZ1V3gFe4fTI78XThPSdhHCItbCJTqgvI1JNi3SNSMOkee6y7G_VZnLXPLJmK0Bl5YtqqD-qF4ckF1LlPgTFZRDAXTMo_HFktOaDvdkzigR0Ij8bfzG8jznzwyUQAGs7BkaF1veb7sCG85H4s63SWpEAEiCsp208X_1-f-FZbXPdQNF7N8CgNv2gJOrA-RmVaMKbPATwDc4rM1R5OQZDkC7j7bD7mh6ezQaeQsYzNuScREXxegzxyYudzjv50_z-Ey36iSHwPC-dViDcXrffyNz_NKH0z55ykL1r9AFiqPRP8C0PiQWd-qXbOruH5NUwiTEIlhLlM6xnMOfL9xKZz0WtNNTMOsGlpcHvE3tjOZx69OUlCH-Pno5mmUIAwlJdn5IHG_ENUl40X7plalGgOgwryh-cHVqyF4BZbHOJVBBERKT9IIKio1TIhCU_EwsYcch0PavA10LQaQiMqFVuod5tF0zijqI8AHK5a5wskSdIsc3_33c4ZnHQ7-Se8OfTFeXKjB7kgJ3CvvIpaMWe3zWdF6sBIcTj5zVng7PNqHsXNWPjoDKUEVPvLOvgGXbEGdlgmuLlIaEiOkV8FPE5Xw9gJG0WxIEvL3veOiusls12Yfx88Qvb7J7BkPZ9IYwoInDinnIHuty5g7A4ytis5PIUiYduHhV0JBdCMTTYPx6pfkoheGaias7Zc55yvKLsnPeEpWCg1-VIrx8yWxjyzeeE66-MIcLs2alGlzoE2FIe9rmyX0p-0uZBp0r-1g5oDiaMlg2nymixJjjGXhNsAC8WdwmZI1XYnK-qEaiEomy6s1jfHARfQRTrktGMey892oxXmnBhrRA6LBH1YCpT4_EiIENIJWRWrivt6RbIqFhdtPr0XaEQn9bFLR695yRljFBNOn6nW24OGEV0f52nh5VTWh56OxQR7B9r0hLGn2gF8e32O8ap-Z63HwVnGHTbZpQ67YKPujMvdfgM3hTHKn0F2qVmrSyKQGXXhHtKWxopyV_gF2w5gvubAVZvo16kmegMTUe5tFtoR0lg3kpWmjWJJ_YRXT4hMtZttLrg6T_HhyQQvhFgkR1cvh7F-EYijXz4kRVTa-ceJ4ek97MKmELGjwf7L0sMqZAQhiqGso051Zp6myk3cLSdiDju3__YidFWDhjdkepubTz9Mb5vrIbDKI66He1cyzyEQ0B5iRHZssSoVP5BqLawc73JvGvLC9K-0ZBRlZ5q8jd9eNOaKtbzxS-iBNqfc45T3Z0TNYJ9gDZiRiFp912lPLItMS9ibFxpr4mpcFyGKeMTdMPV_OO2zxgIyzmEtfnGuasKM1raESZ5VUEnVTXcbU7ix4i3U3THwSVBrAt2wYPbIygxFw5lM6QgbnkSBpnQ-Uc1EWVkhJlvvmx-Ll9EyVxiaFZKQplkWEyKm8lihQT_IEBa8udl2ZlkCO8TeVwi-nP6pwmkLaUAWZV428ws96m2ivT5RIt8rw1lNsvBSYcVaHDwqz_OH2RTjNy23Sc3YlWVKnM3LqM54YCn8wwkxzmEr8iSyJ4KGsy5YcuFA_4JatbDddvpBWUYiDpY-cTDPlP-1-BSKKSE93qjClHfWh4xJ-OxAh8UziTgeocQiGYlMtS3PbPaMAAypW38W0cxwpWcXX9we29eShhDszHECmwnt_mtbyfa-KCIKgHJIGO-N6OXV2V-h_fQChcb0GKo9Wvs1kPeiZ8HqjCNWcNzZMnScyxxKrvYKZnRF-AkdCIhLucIGVSLF0tTM7i22QxuJ_pKc1B0VEkSMMD5Bd_zuEOS8L2yUD3vJlqk0XWAMHF1fCfkToSebfs_HYIH72J2kz0EG5o7Yl-7GjeXmKo15J8f4TRUXhqREngtn3V8s4C6Z7kkmc-DHv2nVRGe1LwIkXu-P27KLi_INGkJWDx2B-J3Bx97dKhOyUgCDaCnvehwx8PivKgJ9ft2ZsOzPapvm2yCyLy2zLWeHYUCcDybsU5XxrTaKOLX4L6KNdDvmT9uwsljkLUEQgh9mxy0bKfcOX20awuI-oVi6jtYR4oRsz9HRAO99fdLMiFu1UaOmYAYZNyeelr7OqTpCXZIhtTferlJjfKD-ielmFFwQEaVRgaYY5XnmTco0nsoTEXxfcRxaY5tUJoGN4rOhw841qnh_pdNMapjr38oBWx2Sxj8PWvOJqTrCIbMK1dGsUdY31fEHmMkMRcRGltjSE-E6KaNgjZchuECVMnB_Ze0lxzschSU_U-GI_rXxQv8l9RjbghqnE6rQrteAekpqGLtNuy53EMa7lNJrOFf-Ao3ySbMYLZu5evHvL11dNsTJ3U1DLPeolNc0_3n24ZYrTF-Rs1K2vSQda7jIIcUdw2OSfsV9qLqqk3z6-iikF92M47PT70hoMIHbmGRoT2F0AuUIcTaZNsePre1wcGwKAjko8Wixbnznw0KKrw3RjGvy2ZBnuQrEk4BpjfxQBsWf-e8ciADphhVvrDcs6LnCo6w0pS1MF0npOViaL6Vgk5bGtF9YqOoRzV2-Ba17qbGDUuODEciT6E-8LTJSxIYTkfM1PrG_SHYEjKN4zRQV0Qsn77NUk3jQHCbAOTelN3LM3S2Mi1MiM6zD3C9CEkkzta6OurEz43Un0S77dTvuy44Oab3ZMojE2lt0-vvbQa2-zX5IqYu-kQ8WBmZGH3uMb-F8EhYCFj2jVUqjDMFcnK8jpdxMvWq6RsfsEkMUQz1KcD127CasaxkSknikFtKwq_hguchhdVORlFLKfkr1PTJBszYZUBi8X5IPCFMmetDK5Wf4XRGLoGgl6oQzuIeBKBjtBTosySgELFFNbSnfVkaXPjEOb6m5Z-zeu89xWKhE0dFVPaGhekuBJZt1iw2qPxsFTkbEtlLkhtXZpCPCzBSu8_yqp4Z8lm3rrE3pwsBpi9J8K8w2NtTpJWvdhi9ykvHpzv0GTxGnmZQenElR5mBT2bo5At1w-JkEF95o-DsO-B8OhimCXUYqnpopKPEj31GynuELq_Z1DopwLaKZzLD0_9AfQxLePQlOs7DUhrzWzAPkA-LtWYrMLnyzyWxgOGWevw3Ij195qMVafaTc-o4FI2E23Ht3eTAvIB-haRUAoJzyyxN1eTNjZsDiOifwrje2a9AoGvma-BrcpbYYBDw85OcPqjGUHfN4sUh7anJKv0YzP2StIJ695SDVDxu-D4EYkSVAylFfiEH8Jmu6VgXdl1J0pyOlCr_uau7KahOHNjM5jzvzoviz9XY3EWi83md3KH-i6yFpyWXLuh6ioqLNLyjGsOX6TTQ-8B7LhiLY34pBVMbJo5sKrpi9doQ6kDpWgGrmEo_GDOol_8LV-knXs9nJ3z8NVlOVDBS2SkqtZ1XSJm0cAXUSM4X9qst_gowpruVLPi0gJQRjEy5TUu9NM2YpGPvzM7T5FxqFWwacpBg447dy9-Qpb9uPYKw7_atIZhtqN2FUmEPiJBFMBDDBHjZMFalgOEwZxIXitpTF15X_1s-RSu6BoC9Ky6CD2dTHLhZi59LOFejio4pNBMpCyUBcqSykRFwdryEhpmlnE0oePoffHkOwWn1Erx801NA3zQq1-nLjPelTF-qYtQZ4j7yGnmjKPDhEK8DSaD3Ge-IZVIBmL2afUyFgTFQDRtezbr88-UOgKD9EZ3yfZSRQU6IXMObVAUXESoIi6ZaCu3qygKxWko8C5egxfpv671-krTWROleatkLgZsYXQsasfT_ZmHC6aBL-4MuV1kJmBdb13CotueyZ2U69OTAijs6ePDYHnLolmJEX8VSN1_5Zf_XTw1V_bBbXHulHbETBb9wZXjWmuJgJeyPmnlzeOVa1z460oeLbt6LRb1pOB-57Jf_ciBh0G6C-xmkpeYFSy5K0sHLskCIAoYsOMbcIuCNg6ZZPxRKXMYqs6wT6yN2IehfKM5qS1lLFZo_Q9GvFqWvU4xleUB82S2faepPPG9lusJiEhd-j2-orb5-cASZqZQiQ0kRrXpLTiTjxhx110sKlTueotRsXya9K-kmxAjJwUP3jFwlgLOTLA9bsXyK2opAYRxURU1mYv38_emWgFVDmqPNLEKUCVgECljGanyqL77DAg23lau5i5yd7fmjM3tv858XlFwhUC80_i6nUCr5EDCCxNRshTYO2kZqwWZrjKAZRVM-ggZe4Lk_tiqeTl20rb0maNftob9R9vnYoko06wrbOxJxC2WugTPgswI5nRKa0ppfZ57oyMo7guO7yDP50KV_73byEuQxhlSBpKsmG7wWtLHoWARinb1SCmWrI2hQvushDVnBhUg1b0WY7oRwlrNcz6EqaJlHY891BWiuFLJBP2mbOUbFRVGm1AFLKSHkdSidgvXXAfVfhvDffzweETPBj-B_cR6RRZ4d0X3q6Mwnnuhzk-4VIRBbQjPr71LJSMYPDwntF6O1jD2YIqKK8VN04mZ2l3LxHU05JfHdre8ApyPwK0vMmY5L2sQQORl0PiSD3OeQbNHd06-iwTWiuGQKWWBbJp8yY2xPiqhk1Q7dWV9GBayvKeoQ-EL4VUena60UaAcZ2kJTnPFJJgahYF4KXuAOJscnqTkTPX6lvWyF8fty4Ir352mRwBYuszamMgDFzGLiy6_peKUW8XQwSFO74Rb4Sk_Fh6tvvzwqyh2ljA3riIpP4zdZLw4MpO48PkIKYXvZloNoSs_TTPi_GQik969zJJp38FtFZHdQw595ZSJP3aCWMt-vPZWfP8CYMN15BojzRo2cec63tijsxL4QB0S4LkMyGJlSXp1OW-orBZU7oz1StG1OfYIJgxxeVpPa4IQ3jSqK7LB5ePNlqT2ToLsSXERi_bYBjxYCj59WfljnBdoBjVFYiYcjBC8Pyz3wGjS_yarsrXO7L9ZaUe6ZT4ljaKi_w08VTCKB-FkekDo1mLpC8-1oJ-Sv6RHPwPYO8zp7gEm3gxRKMZHlzkG2nsm6S5qQnL4li6QwAHq7ZD2ifrSYu3hOBZvW4QiDN7KLx2CEKC1JddlNrWm5ihjcT8gBGlHESsyNDjxnTI9OuOsNWQbXYwjFS21IH68-BSnv9MSKH_-JwvlQRVXlOe0jJHsnCT0t-QtVTLV1bKhHRd4s0g4cEcQkUKMzaqNaMrIa4zJsZBBAeNgmPVKp-tH0Ih4U9lIkn7aEhXiHRLTCLlYXKToqbCJBIlZJ6bHiSlSk7V0ByYD8wMEXoQFpLuQZphKcHXvA5jXII2HaNoPylm55fngHfnrPmeIB-wogiuZ447qEtPg-PnwQ5rAQTjVA-RihsEUaS7xDNM7wnvJHgqDQ65VRemzFKuj8gtkFw3oZRUK9Ia2V_og7MFP92NVIUX5QpMy2Ge8J2OzW-GDvqrE9-XxrVebNK-CCNfy2eaNzfq3dHijJB7Vwb1u2fjjutUNbSs7W5hbJzdsyxsCY70HGad_5_ZoZiSkZav3S-S0wApSfi9XYvpI9Yp6NPxontePMi8y55EFcbvbxRJ69nbJncbt1OzEotwLqu3ll6z2rs2Sf1DnvsEmh-AtZbLj2tloXsGkFHk-bzzTZarMWzFUhuL2VDHks4RLJMgcA7KBcOi7NGigPwpFRAcLv2ZhUtfK9CDJG3sfyZv9vSJDMJ-oe5lSw0uT8kYEbBvtyIogDfhKdHC6A0ohlIpic9zAyAheWAdsgcA9_F1MJNsM38XYNcA6YP1RhzI203rlk_dPi7FB0kmiCkxiVnd9oJ0wfSFXsHmR8mAHu_QCtHytZeAOmBIgqGEl0I_ANb4RaeGGnezp0rrD_FadJpfkqwY_DqfziSgIwGRycKb3glq9sl37KWVH2IWPYL6lRJD70oCIsfYQZBIcpm8AwWRn8Jrhc2jIRQnusejbkKIBflEvCYIcNbHpuhcOdEgohaVwRpic_GCV7HZZ50F3a-MxJ6oSuDZQf7ACMwp-otG6kwwZQwUyu1wQWRwowwDutCHHnr2v-NaPiQ8CSFnoQB1xlLrNsRDplIQ5Agbp-gbykOzBHntzRh3MDDNxA0XCwHUctDFOq-6SMlnXC1wOja5AiA9JiwIZTH5i3CUAPsFPweqS8JfM_I46I00hVuv_GJspLKYo427LwhY9CsCo33wdPjmo203rIZ8zAqHwxMvtDJQoPGR3Fj592y3O77DFKIvrd3JtaryN3IA78pZ0x6Sn8Q9JcLvK9FyNZJ4rTcUeHauts5Wm7fVwwo2jM-Cj9BGz2xhoJun_LkOrmybwa0rbub_mROrgmphZBP8_lvf7KLAOq1YDp_sP5iVdchTEpfzvxjF7TX0dddmy3BHBCC-rnRG58o4P6ltOUN9FYnaFHN8wdVJGh59Qf8qTJUCPI-Fd29jlowC60oOwcaUBeGcb7k_VpW_UjuL8loSKnmtzQZOg_p3PEGRj2C6ivo2aSMLfOXs_7km3q2XEtKGE5p7SZA4mzSXwdV0gRLYKvQMBimzra-lgozwTuSV0WbYSr17meutbgiHcRnvs0K_whhC_XBsi4sLGCyBRvjiUM0Tt65sPsBzkpFOsgbx86auK5FUGvs-cVhEMG0G-0QLOBd4HSUr38Fveg6F_EdhzXN2Tk0tm8VCfUBmeO3EQurbymNiw25Ifqo6pvH8WYi8DsVSzwr9oBbhInZFIZY4fu4TVNcX7vNbC_rJIyl7Q8bzOw1Y-B_4suKmKUZ_Ie74E53dFxlOXIG4ptvETCV1ibgd_L7MB5hvMeO702neCQu_LGTCcy67yDutgIExGo4DTmYMC0is77TqBpejjGRVUidB35pMy3X6DgNWZlAFmGyrQNd21WHrAsscNBD6tw5u0w6OXY69tbU6_1rgyZon4_wN91UyW7GsorhNcKnneiTTyRSqm7Gbwl2A6i-DhAKA1VJgNa-0tCa_9TMkClNhJLYU0PSNQVnLMu3GVW6lMxg9a-LEm_sTKIhFOoH1HYqKCWQStI4UbIpcvZ5iVNhkEEAbkcFIfLBoqVe1ABHoUrXHT7IobLDgKf85vzFqu2Rtk24CPb068S3H3e_3TyAeheKiKCyz4PSlhBXdukVr_St5cl0MqA7btKXXnQqthaBBOxpOB1khKIF8tF1HEYp13om4z7yf5gqFLdos3SzFzxaEsJlzoWbwAAV1WG-38gFqps6pOgQTFm1ySLgWGGbYKVvYFGtlLeeENKGnhPIDj2esW3FIpratofHbPI0eCV4wzCMWlTsYv7nkhNtdk5rwuzy7tBuVjnZlgqK2SxGhgTUBR5Fw4aNO4rvA7D4YrFq-wOdq_ikpGDwhYUEclkQMuGvU9Cij0L3FM1X26A3kvjzq3ZyJa-eCn1I5qBkep7GfyaHvP4swIiD8pFLu7G54lNFlXpsBeMdVKqga13aQ1OqMDNAuOSNmE052g9Ve9Er0J0_CMkKVFmtosjoe1LJN0tND1U9wdSk1Sf9sUBf1iBHVvY3E4udWJQc_osKOgjtPns8i9eJtDHxXmLug1zzgip4BjkeA_JAurzXlDFmdNko-Qr3qP_WBXmREjZ26T81LDfyvgGYuN9dYAJvOvY8raP8TWtnR_mbJETxzmcCyWdKwBbti2yCTcbftHgWvjs2LKi8Q361Qaq1RXfcqUdivaIORBaUeyxc2bTn-bi-wxgMZmfj1d3p3wEV-k1F6a0Mze2B5k3Lh39A_EiTO4DKa60jlOhrDGWKUPGj7Hsm7ZzZO5PxSpw87SwsJl6-51t-ZtxLWY8mrYCkj3bStdwMXpe7g8zAm7TQ9C4IC1-EIh3s7P-clLSYR58OC6t7Epi_sxxv6qtnSViYYRz3BXPX6AlbEs4A2U2hsHYIehxgVjjbNKOAh1hMl61nbBNMhsKaWMfaPv1Q6tIPS1o9ogt2BhXwUcvKtaRJAOe9jegYjc7zgbgotdF714PxwYEkdfxL-dnpUgiCb4klFtF8-yDZvy0JZjFl1aQutNXK8gsvtkrXsYDz2OVAjQlTVch-ouDr0HFynatTKnPMHhfwS5KPk3eWmDI-cXIjsLol3yj_SOO7Cq7plhAh6jR5QxIuVagBHlOmEJdn82llB7RTY8FKVUNOWS3Jqm_3JYY-VKgic91PeiQFxMmAXGc2RcAImWzGUtlnJIOp1LU3vsW8aBrsDLP5jOFCJ5t_NRbA3yXNdvuH_uPQYDvjQOduNYgOxhyScmSjSauPocM6TfxLxWmFq_ILajY9iQ8xOpUryc9XTNgbYyMLrNjsQW6xnKZda3ZXi6HFa_1wtT5Uu1iqclG9R2F34kr7LfY1n6Y00nrwapi3CIv8-gaHBa-Gmq0sx-r-CfH8EUjke3n165Rk4jJ-ZLaiJuQqkzS5mOQBfFs0jsygqaWCE0g8XJZotggRFuYWVnEm94f8DniVRDt3CdBatLcFGSNl097QEHBTUlx1dvjv82CWzv-_NExMZh2dUw9ctuWhjjU_d9OAGRvc91DQARt-JFcVRO_nNzCZAuEOPz7rDI5VmxD6YsWYpuz5Sw7tp5y95vOXkaUwhVMeA4UYK_lZQVBB6G5jnsMpYr-e5CpPjGCtJ9YMzz3SbrXErMpgreY4IKxwFFsXGYWom_oYLjPRPfXNT3rDL1bjRxLGEdClgMwAM2PZFIPcfhxXZJxmp7XSjK1YacL_cCtOOqfkN3J2n72HQnGsxneWbWkK7o-aYdm-eYNRok86S_UzLrPi0f0UQs24zqcCi2Ce0E2-7MEoAvN_WbfDrRp8BA6qnflXekcFsv2Uv2SiK209Tt0O-6UPaorUFMef9E-5CxPNiFHocadqieFBrcnmeSXySejl2psRyRXfirD6G1dTD1N-CpyHtifnyuGyOV7V3d0sa60LuDz6lw5cOvU7-SpTAi4F5e_b7UFPgA6rxMkWAYQmPoBf4VkbkxakTmraEG5Uw5RiGTswHOhq_hRskLgodl5F1oXmdn-_S_NW-Z0N_UrufMj46UrVjJQ-4ReeGcbJoM7DBjiD7IUK0eVTY7KIsHfypFeYwOZTlHO-mIoTcQ8zrSlKjULp2fAGnw9sFDmdwAYrIYeoB5tIzysvZjL2goZPRZXM80Yb0FVASl0qtItsdE4EFSQJphBHm0VRRm9AVmraBgGd4-Hb6mchJGJzdGAXFqWO-pXa9aMkzBMCiP_XUW35s9AKDs5LBjCXsnbGqIn-WPCFoQI7TciqUkrBJoBUUtRcG0mzlt-i1uZ90T5Mo0rUk3lpAOhJIDw-8m2BHVZv8NJdhoeI_yOhpaU9n_bN88sip_sWbHVYecOMOefgYSAgscx9CpIHBDv2sObX9MiMEpkgmj0gVBQhetQGJKBQ8c-ZiLQJWApuxVaM9SR9Gu_1gOLyd0bD_g0kxxk2zTvvbsmEfqrDd1RJyI1vE46mECXCW9dmVsNJ2n8yVSvY2PYRsVYyATvxSNO2AvbtmlWlI-_J0lk2mb93n3gIkH_PqdAtjwJ6JytdEnUJfid8-6zUghQG94zyiRACltFXwqNxx_FyFCoqmkXe1L7-iyUil4z-JivBQCcb3RF5YvydqoxUVAu3FlNjyu_-cyKax0kdw6V38iWXdoXK1x1nTEhHRGVWYiAPu9w0ygjRntqkcyKAaghjVk2X5kW71hAX9fWsdjewKmTFis-5xZ93TiN15r6tDbd1SSWzk6gmzhz3XUcXoq6qndWCSy52cYiXP0PRdD_gI960ZeFW6f-F6GcxN1dwayg9vK1dhUi85OYwiqbr9ASM1iDT5ICPuXjg7ySffY799myzMvj7mg0vThKHnb3185kLLJZvprgy8igTI17rlVZLeSfIXL7vq4cRRqvZ_O5vOMN61IwwZJKi0XI7_IuQeSVh6lgrwStDnwVVB-pNIMQlDzFLHa8wGlN7YGI-7tZsY0DEYPNSsSAIPFvzClRSDCTYkFD-fnydUzSxj759wJi3Qu3UnNff8C3w1u2mjWyIhSSrHIfpOhfkS8f4LrvOVPrvrSoiFbCImAHFVfPPqGyCrfqoaEtEEXoY-Cumz_CvHNs24tMcmD5KNLgyb0omwnM2Oz8cNIBHbQsatMsQhWrzJVAcM8z6S6DNob_r8TQoUE9HV8mGtVN7u-BvR-fYPviPl5xr3GEFY3QmPqGYNNP2q78Z2LfksUywHd0Vmb75XcQRLO9EkbD5EdgGTHLvTEwZ0beOP6Xf-b3tQlK5dHr_jTaTiDgxYaXs_Sa5-aRwnkIRQjjPkgB8wgiZkP3unh4xb0vXN7HWuWEDzfG5B30-DsaRf7-Fp8la0ctEbNeZAvTAbe_fxi9f9xS6ua47j5oBOVTEB6pxf_Y5Bn4cNLeele8hto5e0Etb-X08he9eQBTbiU0tPVedS3ouMzsTt6iRctfrglpX129wjTClhV3e2Z16FvCGFdt_dSRfjwTurAsDCyHIzo6PhtRoz5LEgG0XE-ld8JdP-n5t6rbc5-Dwn1aGtNVBXTPfEU2vKJnVgxmpTF132y4O-uNmWzXblZITJqeFSu0Vi5VeCjpEIxgpljn9yQW7JcY0hD7JogCzpWGtofm5bUvFiHqpFlsGt0KP-JN3us_7266fFx_VL-W9zoDO8Dh6msNg0Q_M-pc2JB91mhGdHAA44LVv8bti74hChl-fj3JYu9dmN3Ao-6EN7ztfPyKgNQxU8dy0USTDy-BkAU5PsldPA_s_U3KmnW8w6MZ7fwlxTLVJpeoRFeeBN2uHuFiXZtonjWy3CRlJYqYwrwu9JCIkaEENpkKXxruGWCCKl00GWfkl6fbi0btpmOk68C8d1qYAD9WpWbYLkeCaeatnKkMFiG06qx9KMcgavb0w554vgt7cJ_MpnP0bT7C20PEz2zQa81OyoK47BBZMk7ChAIhy0O5M3oZ3ogGqbBpUuooPVKkdsp6yY6kgShLDcUEm5G9-5AuJ2oZhNfewf0iVVC4aRRZpu6KLwqPyQXrkc-VIhk04nGAHlt4ZFw06-3jiULJNGhLMjXR6V3YCMLsYIESaGyoSN3PjhKjnnrBO-ootaD8cd4o_Q4J-wVh7EEtY3jfvrSQeodPUOmdb0-4Pnc6qcHkYqjFL8jAoOkf52SGSKvDaoqMayMPIGvb6WabxV5VfwbCId_hOGsGjwZFeWp0JEgmAmTrIk0GhuDP5pNvbmrgujjPEWfD6ZVY7C_3psHb2lQ3TzAeUrJ_S-cYRc8FXFmj5kvU3BBO7HXTdpk4VGAoIu62eGGBjK4XYOkHkl1_fkeQ6EUUote6MlDolti4EdR23UBMQ9svRBm6QznoiL6yjcp57EFHi7rKPAKaPZLCbZ9kFEno5sV8p-YnzjyxKHav07GEPtOYk_EPhYnx-ZLVSr6ljMn7I7oliO9r-PuvHHtUaIIZjVUVfjSJQZJ5WXnmLYSVHm5nwEP8zTTrBoFiZlii8JgvVsqm15Aq6O6cMIjhQiZlyDWXGAxBNKdryPhLoRUMWmsiLhcWbkFklJNUHd-23cVwVQRjRkJyfMxcVAscaLiq-YPeBWVq3sXCZg9FbBEPJ6UOI0fOTwMgRngf7EwhVIhG8usbRMoAJX2IDntO4Qguv0zhm9CkO0d7nq9LQOmdJWngQTmw6K0-a8LQXj-LOkqeQ4v9OWXVDeS_rBKvIc24UARr5SlmiPg3eU1CuA6f-7G3acGXd7b_Hha-rf-jA4jIWu_Dc-2krL-WH-zLJp5eIKZAwqjSJIAIE7HQCyBuGw-Om7Ga4n3sJ02IzvZAMsaAYu2YbKu-1H0_QMWEtUVK_IMiryv3dGnz0_L2eshvtcm6nm13O8TSf6Q4ff8ncPvON0TQ_8vXjUtF4ym5UOJvZJ_ucPNpvuzWeLy2nG_7vd62jMMkxeb8xoCVj6w_tOkFeeqenXE2dRJS7GowDs5obKrxH7T4xkV2QvpUfTrOs9H2WE-SPoKbRnHYS8bPjHqiGCgc0uIvf8QCzVrMRnO2Ul8S9FKXvnb3ue1V7FnvHTvCjHn2CecZ8bC7loKMWyxahv0CAwRizHaH8rw2LdjkBYjQ2C69cr9_DNWZuwVl7acgD41U7cw8-Ai-bsRCkhP2s9nrJvuDYI4QTm7T_7o6OeVWJnX12PMKVJeSK7yEpyh92U4t61kNPIEz8r2G-A0t3VFSV4hFZLGxR6dJqXCzKR4oIQGeCHDPcBL1MHXdWYipl87M0g5rO3SL9zgr_UpnYwW2HuEpgkvgpe2MLUb_3I7U7dr4JFKGoMUH5rXEh2ZFNA_en4uLbSJvZRwMvkC889stuZt9yvmBFIG4qtw-tXfO7c6l5rMTQRoPnmx5ArbIPC3OY3oxJf2e-IkfYfvCIGNXJVNFniXGdLi0sFQZbi16RMZfN5219Eo0HXS77zKzzZrk3sSoWdNgCe52RZ_6VDdpExgi3MDOhskfVyuOneF3KdlbnA0YisG0Ej78BNXfM3MoKnJELvajWkqvYK9Qc-rUCapAVnJVPLxfDRrj67FDosbxUJ3LYLgvqUwqATgzZU0bw6rVjDdtcMUt4RLFq8iVwC_JmtRJ7XKkgBnrcxn1Z9wq71BPhT3UPEk4P52mJk3s_BFeYViVL7tEJ-6G2ZyAtpzIeL8mv2XgUjjgzjlArTfug73iY1fGWUU9oDw38j7mcWyd6k73LDbYqd5y1XUubpHOFQs_pZTGeVTBMVqGAHRue_izxCliy7YvctrJKQsv0KCF4YOZIWg_eDLtlXJuSPglMoN0Eqtx-YS2DMBj2A_TtOexAEoQ-dXFOEhlPCFrRaL97M08982qhIsEG_i9KwL8BewEC-aKUSdHSEVTg8i06-7AZbx5F_9mN15nl9Vvt395F9c8NW8mvTm26djJbeiwmK9W-N4ikAnIzFzLFvdc_GpFM="
            },
            "corporationId": "zYE3IoyvPx0040",
            "processedDate": "2023-09-26",
            "invoicePlatform": "ZLBP",
            "dataCorporationId": null,
            "buyerAndSellerFlag": "ALL",
            "sourceCorporationId": null
        }
    ]
}
```
## 失败响应

| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | - | `{"items": []}` | 返回空表示没有查询到实例数据<br/>请确认参数是否正确 | 

