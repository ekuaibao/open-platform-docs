# 获取当前版本单据模板列表

>⚠️ 注意：

>单据模板最后一次修改保存后的版本为当前版本，最后一次修改之前的版本都为历史版本。

{% httpverb "get" %} /api/openapi/v1/specifications/latestByType {% endhttpverb %}

#### Query Parameters:

|名称  |类型    |描述   |是否必填   |默认值  | 备注 |
| :--------- | :------ | :---------| :------| :------|:------|
| **accessToken**          | String  | 认证token	  | 必填   | - | [通过授权接口获取](/getting-started/auth.html) |
| **type**                 | String  | 单据类型	  | 必填   | - | `expense`:报销单 `loan`:借款单 `requisition`:申请单 `payment`:付款单 `custom`:通用审批单(基础单据) |
| **specificationGroupId** | String  | 单据模板组ID | 非必填 | - | 单据模板组ID |

<br/>

#### CURL:

```json
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/specifications/latestByType?accessToken=qUMbutefrU8U00&type=expense&specificationGroupId' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```
<br/>

#### 成功响应:
```json
{
    "items": [
        {
            "id": "C20bu2n6osbc00", // 模板ID
            "name": "差旅报销单", // 模板名称
            "active": true // 是否启用
        },
        {
            "id": "GQgbu2n6osbI00",
            "name": "日常报销单",
            "active": true
        },
        {
            "id": "Zvobu2n6osbQ00",
            "name": "团建报销",
            "active": true
        }
    ]
}
```

<style>
    table {
		width: 100%; /*表格宽度*/
		border-collapse: collapse; /*使用单一线条的边框*/
		empty-cells: show; /*单元格无内容依旧绘制边框*/
		}
    /* 悬浮变色 */
	table tr:hover {
		background: #B2B2B2 !important;
		}
    /* 首列不换行 */
	table td:nth-child(1) {
		white-space: nowrap;
	}
    /* 指定列宽度 */
	table th:nth-of-type(1) { 
		width: 20%;
		white-space: nowrap;
	}
    table th:nth-of-type(2) {
		width: 10%;
		white-space: nowrap;
	}
    table th:nth-of-type(3) {
		width: 20%;
		white-space: nowrap;
	}
    table th:nth-of-type(4) {
		width: 8%;
		white-space: nowrap;
	}
    table th:nth-of-type(5) {
		width: 7%;
		white-space: nowrap;
	}
    table th:nth-of-type(6) {
		width: 35%;
		white-space: nowrap;
	}

</style>

