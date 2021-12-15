---
id: support
title: 互联卡片
---

## 00 ｜背景知识

在开始开发互联卡片之前，首先要快速熟悉下易快报全局字段/单据模板的概念。

:::tip
如果你对易快报单据/全局字段很熟悉，可以忽略这步
:::

易快报的核心业务是依靠单据在审批流上流转来完成实际的业务需求。那么单据实体是怎么来的？

![image](/img/block-ui/image.png)

在 👆 图中 一张单据的被创建，引用了单据模板，单据模板引用了全局字段。按照这个路径，想要扩展单据的能力需要提供更强大的全局字段的能力。
在这个前提下，互联卡片字段以广泛链接和灵活的布局能力提供了更多想象力。

### 互联卡片的工作机制

![image](/img/block-ui/互联卡片的工作机制.png)

## 01 ｜互联卡片开发

从互联卡片的工作机制图中，要上手开发互联卡片需要解决一些问题：

- 编辑器是如何发布全局字段的？
- 编辑器是如何和自建应用约定接口的？
- 自建应用是如何响应单据实体的？两者是如何建立联系的？
- 编辑器在开发阶段如何调试？
  从 👆 几个问题入手，最后把整个过程串联来完成互联卡片的开发

### 编辑器是如何发布全局字段的？

首先在易快报应用中心中创建应用

![image](/img/block-ui/编辑器是如何发布全局字段的-1.png)

![image](/img/block-ui/编辑器是如何发布全局字段的-2.png)

进入自建应用，进入功能设置的互联卡片

![image](/img/block-ui/编辑器是如何发布全局字段的-3.png)

新建卡片

![image](/img/block-ui/编辑器是如何发布全局字段的-4.png)

经过一系列配置之后，点击卡片发布按钮

![image](/img/block-ui/互联卡片-1.png)

![image](/img/block-ui/互联卡片-2.png)

这里需要添加全局字段名称，成功发布之后。回到易快报字段设置

![image](/img/block-ui/互联卡片-3.png)

:::tip
这个流程阐述了，互联卡片全局字段是如何被创建出来的。成功创建之后就可以在单据模板上引用来完成业务诉求
:::

### 自建应用是如何响应单据实体的？两者是如何建立联系的？

在创建互联卡片的过程中需要填写「请求地址」

![image](/img/block-ui/互联卡片-4.png)

这个地址向当前互联卡片提供数据，这里简称为「服务地址」，当此互联卡片被渲染时，会向「服务地址」发起请求约定数据。

当选择带有互联卡片字段的单据模板来创建一个单据

![image](/img/block-ui/互联卡片-5.png)

单据中有互联卡片字段，向服务端请求渲染该卡片的 DSL ，服务端根据互联卡片配置的「服务地址」请求与卡片约定好的字段，完成 DSL 转换与拼装，下发给单据完成业务渲染。

### 编辑器是如何和自建应用约定接口的

上个问题解决了如何向互联卡片提供数据的问题，那么如何约定数据？

在互联卡片编辑阶段，可以添加各种 Block UI 组件

![image](/img/block-ui/互联卡片-6.png)

在这里为组件提供了唯一识别 Code，这个 Code 作为 key 用于实际业务发生是被替换的识别 Key，Code 可以修改。以上图为例，约定当前文本 Key 为：cli_a197491255308c，当卡片被渲染的过程中会向卡片配置的地址发起请求，按照当前约定该请求地址应返回：

```json
{
  "cli_a197491255308c": "即将被替换的业务数据"
}
```

渲染器会把 「服务地址」返回的数据做拼装和替换，完成 DSL 下发
作为开发者，我知道了如何响应这个请求和约定字段了，下一步如何约定 Key 对应的 Value ？
每次添加组件的之后，右侧会有组件属性，组件可选择和配置的属性是该组件的枚举属性，会被自动保存到模板中，

![image](/img/block-ui/互联卡片-7.png)

markdown 组件选中后可配置属性为：code 与文本

code=key

文本=Value

编辑器中输入的文本仅作为预览效果，接口中返回的 Value 将对其进行覆盖

### WebHook 鉴权

在自建应用创建时会自动生成应用凭证，凭证包括 App ID、App Secret 两部分。在互联卡片中请求第三方服务，或第三方服务请求易快报开放接口时，都会使用 App ID、App Secret 生成 jwtToken 或者解析验证 jwtToken 是否正确。下面介绍第三方服务调用易快报和易快报调用第三方服务的步骤：

### 第三方服务调用易快报开放接口，鉴权使用方式

在调用开发接口之前，根据应用凭证中的 App ID（对应请求参数 appKey），App Secret（对应请求参数 appSecret)，获取 accessToken，以便调用接口时鉴权。

**请求示例：**

```shell
curl --location --request POST 'https://unity.ekuaibao.com/api/realms/auth/' \
--header 'cache-control: no-cache' \
--header 'content-type: application/json' \
--data-raw '{
        "appKey":"bkwHYtOOabROJ905ChCjf26YPca0UH7U",
        "appSecret":"SMvswAFzoySRJeEjjGk3yPsCTw00Vt7C"
}'

```

**响应示例：**

```json
{
  "value": {
    "accessToken": "CfxhApWajSZAMNJKTHkIbWdebcDTCVec",
    "timeout": 7200
  }
}
```

#### 调用开放接口

获取授权后，第三方服务即可以访问开发接口。
**请求示例：**

```json
curl --location -g --request GET 'https://unity.ekuaibao.com/api/openapi/v1/approveStates/[ID_3mwGw71md1M2,1]?corporationId=FDgbMN7S4coM00' \
--header 'Authorization: Bearer qMuqnLtLvlGvGGCoMdUehhisXUrDmKYi' \
```

:::tip

1. header 下 Authorization 格式为：Bearer+空格+jwtToken, 其中 jwtToken 为调用获取授权接口后应用中心返回的。
2. corporationId： 企业 Id
3. 无需区分环境，统一调用应用中心（<https://unity.ekuaibao.com>）地址，由应用中心转发调用开放接口。

:::

**响应示例：**

```json
{
  "items": [
    {
      "flowId": "xxx", // 单据id
      "stageName": "出纳支付", // 审批节点名称
      "operators": [
        {
          // 审批人列表，来自员工信息
          "id": "xxx", // 审批人id
          "name": "王大锤", // 审批人姓名
          "code": "15091" // 审批人工号
        }
      ]
    }
  ]
}
```

#### 易快报调用第三方服务，服务方鉴权验证实现方式

##### 获取 token

获取 header 下的 Authorization，去掉字符前缀 Bearer+空格，剩余字符串即 jwtToken。
header 下 Authorization 格式与上个步骤介绍生成一样：Bearer+空格+jwtToken, 其中 jwtToken 即为需要验签的 token。

##### token 验签

使用应用凭证中的 App Secret 进行验签，可结合自身编程语言提供的 jwtToken 函数库进行解析，下面提供 Kotlin 语言和 Java 语言示例：

##### Kotlin 语言验签 jwtToken 示例

```kotlin
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.Keys
import javax.crypto.SecretKey

//token为上一步中获取字符串
fun verifyJwtToken(token: String) {
    val appSecret = "tlWobWzfGzwVNOJQHXTmQNxmMandTt" //对应应用凭证中的App Secret
    val key: SecretKey = Keys.hmacShaKeyFor(appSecret.toByteArray(StandardCharsets.UTF_8))
    Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token)
}
```

##### Java 语言验签 jwtToken 示例

```java
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;

//token为上一步中获取字符串
private void verifyJwtToken(String token) {
    String appSecret = "tlWobWzfGzwVNOJQHXTmQNxmMandTt"; //对应应用凭证中的App Secret
    SecretKey key = Keys.hmacShaKeyFor(appSecret.getBytes(StandardCharsets.UTF_8));
    Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
}
```

## 编辑器在开发阶段如何调试？

互联卡片在编辑过程中，提供可调试链接

![image](/img/block-ui/互联卡片-8.png)

进入调试链接之后

![image](/img/block-ui/互联卡片-9.png)
