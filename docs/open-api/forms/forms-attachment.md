# 获取附件URL

{% httpverb "post" %} /api/openapi/v2/attachment/downloadurls?accessToken=JBI99_c0lQ7800 {% endhttpverb %}


#### 示例:
```json
	http://wx2.ekuaibao.com/api/openapi/v2/attachment/downloadurls?accessToken=JBI99_c0lQ7800

```

#### body参数:
```json
 [
    {
        "id": "Y_c99_a9zsdM00",//id对应单据详细信息中attachments节点中的fileId(必填)
        "key": "xxx",//key对应单据详细信息中attachments节点中的Key
        "expiration": 10//用户自定义，指获取到的url的过期时间，单位为秒
    }
]
```

#### Response:
```json
 [
    {
        "id": "Y_c99_a9zsdM00",
        "key": "data3-1558577344090-553.txt",
        "url": "https://vipimg.ekuaibao.com/data3-1558577344090-553.txt?e=1558597157&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:z5JtshnOjvfAtJ_bL2eXcilsHT8=",
        "thumbUrl": "https://vipimg.ekuaibao.com/data3-1558577344090-553.txt?imageView2/1/w/120/h/120&e=1558597157&token=hky7l9UOxMaLClIe5GV51aPS6KMpYBW2zLVpzfxi:h8d0zHQgxwquq5jbU2Li4jqBTx0="
    }
]
```
注：
1、url是下载的路径
2、thumbUrl是指缩略图的下载路径






