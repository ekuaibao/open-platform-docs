---
slug: tls
title: TSL支持通知
authors: [冯继成]
tags: [v2]
---

# 易快报关于TLS协议版本支持的通知

**易快报各平台将从2020年1月开始不再支持低版本的SSL加密协议(TLSv1.0、TLSv1.1)**

## 什么是HTTPS和TLS

- HTTP是不加密的明文web传输协议，危险；
- HTTPS＝HTTP+SSL/TLS，安全；
- SSL协议是HTTP的补充，使用加密等方法让HTTP传输更安全，版本有SSL 1.0、2.0和3.0（目前已经不支持）；
- TLS是基于SSL的升级版协议，目前版本发展为v1.0 v1.1 v1.2（目前支持中）；
- 易快报所有平台将在2020.1开始只支持TLSv1.2以上版本的加密协议；

## 不再支持低版本加密协议后和我有什么关系

- 使用低版本的操作系统/浏览器将无法正常访问易快报网站；
- 使用低版本客户端将无法登录易快报；
- 使用低版本TLS的插件和第三方程序将无法连接易快报服务；

## 怎么解决

- 更新到最新版的浏览器；(备注1)
- 保持更新最新版的客户端；
- 将系统和运行环境更新到支持的版本；(备注2)

## 备注1. 浏览器TLS支持信息

- 谷歌将从2020年1月开始在 Chrome 中完全禁用 TLS 1.0 和 1.1 协议；[谷歌](https://security.googleblog.com/2018/10/modernizing-transport-security.html)
- 微软将于2020年上半年在 Microsoft Edge 和 Internet Explorer 11 中完全禁用；[微软](https://blogs.windows.com/msedgedev/2018/10/15/modernizing-tls-edge-ie11/)
- 苹果将于2020年3月在 Safari 中禁用 TLS 1.0 和 1.1 协议；[苹果](https://webkit.org/blog/8462/deprecation-of-legacy-tls-1-0-and-1-1-versions/)
- 火狐将于2020年3月不再支持TLS 1.0和1.1协议。[火狐](https://blog.mozilla.org/security/2018/10/15/removing-old-versions-of-tls/)

## 备注2. 开发/运行环境TLS支持列表

|                                               | TLS1.0 | TLS1.1 | TLS1.2 |
| --------------------------------------------- | :----: | :----: | :----: |
| JDK 6                                         |   √    |   x    |   x    |
| JDK 7/8                                       |   √    |   √    |   √    |
| .NET 3.5                                      |   √    |   x    |   x    |
| .NET 4.0/4.5+                                 |   √    |   √    |   √    |
| Linux OpenSSL 0.9.8                           |   √    |   x    |   x    |
| Linux OpenSSL 1.0.1+                          |   √    |   √    |   √    |
| Windows xp/Vista & windows server 2003/2008   |   √    |   x    |   x    |
| Windows 7/8/10 & windows server 2008 R2/2012+ |   √    |   √    |   √    |
| IE 6/7/8/9                                    |   √    |   x    |   x    |
| IE 10/11 & Edge 13/14/15                      |   √    |   √    |   √    |
| Chrome 49+                                    |   √    |   √    |   √    |
| Safari 5/6                                    |   √    |   x    |   x    |
| Safari 7/8/9/10                               |   √    |   √    |   √    |
| Firefox 31+                                   |   √    |   √    |   √    |
| Android 2.x                                   |   √    |   x    |   x    |
| Android 4.0/4.1/4.2/4.3                       |   √    |   x    |   x    |
| Android 4.4.2+                                |   √    |   √    |   √    |
| Android 5/6/7                                 |   √    |   √    |   √    |
| Apple ATS 9/iOS 9 +                           |   √    |   √    |   √    |



