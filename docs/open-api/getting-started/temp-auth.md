# 访问临时授权

import Control from "@theme/Control";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Control
method="POST"
url="/api/openapi/v1.1/provisional/getProvisionalAuth"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

- [**1.17.0**](/updateLog/update-log#1170)
  - 🆕 新增了 `pageType` = `edit` 类型，单据处于 **草稿、驳回** 状态时可 **编辑/提交**。
- [**1.15.0**](/updateLog/update-log#1150)
  - 🆕 新增了 `pageType` = `assistPlatform` 类型，进入合思 **协助授权链接** 页面。
- [**1.12.0**](/updateLog/update-log#1120)
  - 🆕 新增了 `pageType` = `payment` 类型，进入合思 **待我支付** 页面。
  - 🐞 更新了 `authType`（授权方式）支持 `payment`、`new`、`mall`、`backlogDetail` 类型。
- [**1.7.1**](/updateLog/update-log#171)
  - 🆕 新增了 `authType`（授权方式）参数，控制单点链接可用次数。
- [**1.5.0**](/updateLog/update-log#150)
  - 🐞 修复了被委托人审批会签节点的单据（`pageType` = `form`）时，无审批按钮的BUG。
- [**1.0.0**](/updateLog/update-log#100)
  - 🚀 接口升级 `v1.1` 版本，新增了 `pageType` = `frontPage` 类型，进入合思 **首页**。
- [**0.7.163**](/updateLog/update-log#07163)
  - 🆕 新增了 `approvalUrl`（审批完成后跳转地址）参数。

</div>
</details>

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token | 必填 | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |

## Body Parameters

| 名称 | 类型 | 描述        | 是否必填 | 默认值 | 备注                                                                                                                                                                                                                                                                                                                     |
| :--- | :--- |:----------| :--- |:--- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **uid**                     | String  | 员工ID      | 非必填 | - | 当 `userId` 非必填时 `uid` 必填                                                                                                                                                                                                                                                                                               |
| **userId**                  | String  | 第三方员工ID   | 非必填 | - | 当 `uid` 非必填时 `userId` 必填                                                                                                                                                                                                                                                                                               |
| **pageType**                | String  | 登录页面类型    | 必填  | - | `frontPage` : 首页<br/>`home` : 我的单据<br/>`approve` : 待我审批<br/>`payment` : 待我支付<br/>`form` : 单据详情页（**待我审批** 进入单据页面效果）<br/>`new` : 新建单据<br/>`edit` : 编辑/提交草稿、驳回的单据（**我的单据** 进入单据页面效果）<br/>`mall` : 商城（**不支持移动端**）<br/>`backlogDetail` : 查看待办详情，同时底部菜单<br/>显示指定审批按钮（**不支持移动端**）<br/>`assistPlatform` : 协助链接授权页面（**只支持移动端**） |
| **authType**                | String  | 授权方式      | 非必填 | - | `CODE` : 表示获得的单点链接仅可使用一次，不能二次使用<br/>**如果不传此参数则生成的URL链接在有效期内可无限次访问；此参数传 `CODE` 则生成的URL链接仅可访问一次**<br/>                                                                                                                                                                                                                   |
| **expireDate**              | String  | 授权有效期     | 必填   | - | 单位：秒，最大不能超过 `604800` 秒（7天）                                                                                                                                                                                                                                                                                             |
| **overdueTokenRedirect**    | String  | 重定向URL    | 非必填 | - | `expireDate` 过期后重定向到该地址<br/>不要携带特殊字符，例如：`#`                                                                                                                                                                                                                                                                            |
| **isApplet**                | Boolean | 是否跳转APP端  | 非必填 | `false` | `true` : 跳转APP端<br/>`false` : 跳转WEB端                                                                                                                                                                                                                                                                                   |
| **flowId**                  | String  | 单据ID      | 非必填 | - | 当「 `pageType` = `form` 或 `backlogDetail` 或 `edit` 」时必填，表示需要访问的单据详情页                                                                                                                                                                                                                                                    |
| **approvalUrl**             | String  | 审批完成后跳转地址 | 非必填 | - | 当「 `pageType` = `form` 或 `backlogDetail` 」时参数有效，表示单据审批完成后跳转的地址<br/>不要携带特殊字符，例如：`#`                                                                                                                                                                                                                                     |
| **action**                  | String  | 审批按钮类型    | 非必填 | - | 仅当「 `pageType` = `backlogDetail` 」时参数有效，表示审批待办时想要显示的按钮类型，多个值用 `,` 分隔<br/>**不传时根据当前单据状态显示默认审批按钮**<br/>**传值后只显示所传按钮，不会显示默认按钮**<br/>                                                                                                                                                                                                                                                         |
| **pathname**                | String  | 授权路径      | 非必填 | - | 当 `pageType` = `new` 时，填值视平台而定<br/>`/web/billentry.html` : WEB端<br/>`/applet/thirdparty.html` : APP端                                                                                                                                                                                                                   |
| **specificationOriginalId** | String  | 单据模板ID    | 非必填 | - | 当 `pageType` = `new` 时，此参数必填<br/>可通过 [获取当前版本单据模板列表](/docs/open-api/forms/get-specifications-latest) 获取<br/>**单据模板ID不包含 `:` 之后的小版本号**                                                                                                                                                                                                                                                                                            |
| **assistId**                | String  | 授权码ID     | 非必填 | - | 当 `pageType` = `assistPlatform` 时，此参数必填<br/>**通过出站消息获取**                                                                                                                                                                                                                                                               |

:::tip
 - `uid` 与 `userId` 只需要填写一个即可，若都填写，以 `uid` 为准进行操作；
 - 当 `pageType` = `form` 时，`flowId` 参数必填，`approvalUrl` 参数选填；
 - 当 `pageType` = `new` 时，`pathname`、`specificationOriginalId` 参数必填；
 - 当 `pageType` = `edit` 时，`flowId` 参数必填；
 - 当 `pageType` = `mall` 时，用户必须已开通商城，否则该接口会返回错误提示；<br/>
 且只需要传递 `uid`（或者 `userId` ）、 `isApplet` = `false`（不支持移动端）和 `expireDate` 3个参数即可，其他均可不传；
 - 当 `pageType` = `backlogDetail` 时，`isApplet` = `false`（不支持移动端），`flowId` 参数必填，`approvalUrl`、`action` 参数选填（`action` 不传时根据当前状态显示默认审批按钮，传值后只显示所传按钮，多个值用 `,` 分隔）。

 ![image](images/审批按钮显示效果.png)
 
 ![image](images/不传action时.png)
:::

### 审批按钮(`action`)类型

| action | 说明 |
| :--- | :--- |
| **freeflow.agree**        | 同意       |
| **freeflow.reject**       | 驳回       | 
| **freeflow.remind**       | 打印提醒    |
| **freeflow.printed**      | 打印       | 
| **freeflow.addnode**      | 转交       | 
| **freeflow.back**         | 回退       | 
| **freeflow.comment**      | 评论       | 
| **freeflow.modify**       | 修改       |  
| **freeflow.activate**     | 激活       | 
| **freeflow.receive**      | 确认收单    | 
| **freeflow.nullify**      | 作废       |
| **freeflow.pay**          | 支付       |
| **freeflow.addExpress**   | 添加寄送信息 |
| **freeflow.jumpExpress**  | 跳过寄送    |
| **freeflow.shiftApprove** | 转交审批    |
| **freeflow.addSignNode**  | 加签审批    |

## CURL

<Tabs>
<TabItem value="frontPage" label="首页" default>

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/provisional/getProvisionalAuth?accessToken=ID01vbeK5DmKUn%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "uid": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
    //"userId": "",        
    "pageType": "frontPage",
    // "authType": "CODE",    
    "expireDate": "86400",
    "overdueTokenRedirect": "https://app.ekuaibao.com/web/app.html",
    "isApplet": false
}'
```
</TabItem>
<TabItem value="home" label="我的单据">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/provisional/getProvisionalAuth?accessToken=ID01vbeK5DmKUn%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "uid": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
    //"userId": "", 
    "pageType": "home",
    // "authType": "CODE", 
    "expireDate": "86400",
    "overdueTokenRedirect": "https://app.ekuaibao.com/web/app.html",
    "isApplet": false
}'
```
</TabItem>
<TabItem value="approve" label="待我审批">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/provisional/getProvisionalAuth?accessToken=ID01vbogZ2j4Jx%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "uid": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
    //"userId": "", 
    "pageType": "approve",
    // "authType": "CODE", 
    "expireDate": "86400",
    "overdueTokenRedirect": "https://app.ekuaibao.com/web/app.html",
    "isApplet": false
}'
```
</TabItem>
<TabItem value="payment" label="待我支付">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/provisional/getProvisionalAuth?accessToken=ID01vbogZ2j4Jx%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "uid": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
    //"userId": "", 
    "pageType": "payment",
    // "authType": "CODE", 
    "expireDate": "86400",
    "overdueTokenRedirect": "https://app.ekuaibao.com/web/app.html",
    "isApplet": false
}'
```
</TabItem>
<TabItem value="form" label="单据详情">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/provisional/getProvisionalAuth?accessToken=ID01vbogZ2j4Jx%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "uid": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
    //"userId": "", 
    "pageType": "form",
    // "authType": "CODE", 
    "expireDate": "86400",
    "overdueTokenRedirect": "https://app.ekuaibao.com/web/app.html",
    "isApplet": false,
    "flowId": "ID01v88t2v84PY",
    "approvalUrl": "https://app.ekuaibao.com/web/app.html"
}'
```
</TabItem>
<TabItem value="new" label="新建单据">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/provisional/getProvisionalAuth?accessToken=ID01vbogZ2j4Jx%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "uid": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
    //"userId": "", 
    "pageType": "new",
    // "authType": "CODE", 
    "expireDate": "86400",
    "overdueTokenRedirect": "https://app.ekuaibao.com/web/app.html",
    "isApplet": false,
    "pathname": "/web/billentry.html",
    "specificationOriginalId": "ID01lk93AVICQv"
    
}'
```
</TabItem>
<TabItem value="edit" label="提交单据">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/provisional/getProvisionalAuth?accessToken=ID01vbogZ2j4Jx%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "uid": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
    //"userId": "", 
    "pageType": "edit",
    // "authType": "CODE", 
    "expireDate": "86400",
    "overdueTokenRedirect": "https://app.ekuaibao.com/web/app.html",
    "isApplet": false,
    "flowId": "ID01uCwngdzSTt"
}'
```
</TabItem>
<TabItem value="mall" label="商城">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/provisional/getProvisionalAuth?accessToken=ID01vbogZ2j4Jx%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "uid": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
    //"userId": "", 
    "pageType": "mall",
    // "authType": "CODE", 
    "expireDate": "86400",
    "overdueTokenRedirect": "https://app.ekuaibao.com/web/app.html",
    "isApplet": false
}'
```
</TabItem>
<TabItem value="backlogDetail" label="待办详情">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/provisional/getProvisionalAuth?accessToken=ID01vbogZ2j4Jx%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "uid": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
    //"userId": "", 
    "pageType": "backlogDetail",
    // "authType": "CODE", 
    "expireDate": "86400",
    "overdueTokenRedirect": "https://app.ekuaibao.com/web/app.html",
    "isApplet": false,
    "flowId": "ID01v88t2v84PY",
    "approvalUrl": "https://app.ekuaibao.com/web/app.html",
    "action": "freeflow.agree,freeflow.reject,freeflow.printed"
}'
```
</TabItem>
<TabItem value="assistPlatform" label="协助链接授权">

```json
curl --location 'https://app.ekuaibao.com/api/openapi/v1.1/provisional/getProvisionalAuth?accessToken=ID01vbogZ2j4Jx%3ATsI3tt8KjF4S7M' \
--header 'Content-Type: application/json' \
--data '{
    "uid": "TsI3tt8KjF4S7M:ID_3ruBvlxx7m0",
    //"userId": "", 
    "pageType": "assistPlatform",
    // "authType": "CODE",
    "expireDate": "86400",
    "overdueTokenRedirect": "https://app.ekuaibao.com/web/app.html",
    "isApplet": true,
    "assistId": "CX3Phg00005q0M"
}'
```
</TabItem>
</Tabs>

## 成功响应
<Tabs>
<TabItem value="frontPage" label="首页" default>

```json
{
    "value": {  //首页、我的单据、待我审批、待我支付、单据详情、新建单据、提交单据、待办详情
        "message": "https://app.ekuaibao.com/applet/thirdparty.html?accessToken=SGYqVpXcuhIIYQJkd0w2G0&ekbCorpId=34A73EyI8A0w00&pageType=home&overdueTokenRedirect=[https://www.ekuaibao.com](https://www.ekuaibao.com)", //第三方临时访问合思URL
        "code": "true" // 请求状态
    }
}
```
</TabItem>
<TabItem value="mall" label="商城">

```json
{
    "value": {
        "message": "https://mall-app.ekuaibao.com/wportal/?token={商城token}",
        "code": "true"
    }
}
```
</TabItem>
</Tabs>

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **200** | false | expireDate最多只能指定7天内的秒数！| `expireDate` 最大仅支持7天的秒数，即 `604800` 秒，请确认是否大于 `604800` 秒 | 
| **200** | - | 临时访问地址已过期，请重新获取访问临时授权 | `authType` = `CODE` 时，单点链接仅可使用一次，请确认是否重复使用单点链接 | 
