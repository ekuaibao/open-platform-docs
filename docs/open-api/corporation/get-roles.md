# 查询角色下员工信息
获取某个角色下包含的员工信息

import Control from "@theme/Control";

<Control
method="GET"
url="/api/openapi/v1/roledefs/$`roledefId`"
/>

<details>
  <summary><b>更新日志</b></summary>
  <div>

  [**1.12.0**](/updateLog/update-log#1120) -> 🆕 新增了 `pathType`（查询角色路径信息类型）参数，支持 `id`、`name`、`code` 3种参数类型。<br/>
  [**1.3.0**](/updateLog/update-log#130)&emsp;-> 🆕 `staffBy`（员工参数格式）新增了支持 `code`、`cellphone`、`email` 3种参数类型。<br/>

  </div>
</details>

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **roledefId** | String | 角色ID | 必填 | - | 在合思桌面端「系统设置」>「角色管理」处查看<br/>通过 [查询角色组和角色](/docs/open-api/corporation/get-roles-group) 获取 | 

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token	      | 必填   | - | 通过 [获取授权](/docs/open-api/getting-started/auth) 获取 `accessToken` |
| **staffBy**     | String | 查询员工信息显示类型 | 非必填 | id | `id` : 显示完整员工ID，格式：`企业id : userId`<br/>`sourceId` : 只显示 userId<br/>`code` : 员工工号<br/>`cellphone` : 手机号<br/>`email` : 邮箱 |
| **pathType**    | String | 查询角色路径信息类型 | 非必填 | name | `id` : `path` 返回角色路径ID信息<br/>`name` : `path` 返回角色路径名称信息<br/>`code` : `path` 返回角色路径编码信息 |

:::tip
- 角色ID获取如下所示
![image](images/角色ID.png)
:::

## CURL
```shell
curl --location --request GET 'https://app.ekuaibao.com/api/openapi/v1/roledefs/$JOYbpjPP-E2Q00:leader?accessToken=RCIbwHcnF0kg00&staffBy=id&pathType=name' \
--header 'content-type: application/json' \
--header 'Accept: application/json'
```

## 成功响应
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
{
    "value": {
        "id": "ID_3z4Mx4Pdz4g",    //角色ID
        "name": "测试部门角色",    //角色名称
        "contents": [             //角色配置情况，每一个元素对应「角色管理」界面右侧列表的一行
            {
                "pathType": "name",//查询角色路径信息类型
                "path": [          //如果是普通角色，返回空数组。这个节点通过全路径信息来表示一个部门（部门角色）或自定义档案值（档案角色）
                    "测试接口专用",
                    "部门1",
                    "部门1-1"
                ],
                "staffs": [        //员工集合，根据“staffBy”显示员工对应的信息
                    "bwa3wajigF0WH0:ID_3lokDfb1p5w",
                    "bwa3wajigF0WH0:ID_3wlg6bv9UGg"
                ],
                "staffsType": "id" //查询员工信息显示类型
            },
            {
                "pathType": "id",  //不同传参返回不同的类型，这里为了方便展示放在一个成功响应里
                "path": [
                    "bwa3wajigF0WH0",
                    "bwa3wajigF0WH0:ID_3wUvB7G2d3w"
                ],
                "staffs": [
                    "bwa3wajigF0WH0:IqQ3wlg6bv9QGg"
                ],
                "staffsType": "id"
            },
            {
                "pathType": "code", //不同传参返回不同的类型，这里为了方便展示放在一个成功响应里
                "path": [
                    "GS001",
                    "BM003"
                ],
                "staffs": [
                    "bwa3wajigF0WH0:12"
                ],
                "staffsType": "id"
            }
        ]
    }
}
```
</TabItem>
<TabItem value="sourceId" label="sourceId">

```json
{
    "value": {
        "id": "ID_3z4Mx4Pdz4g",    //角色ID
        "name": "测试部门角色",    //角色名称
        "contents": [             //角色配置情况，每一个元素对应「角色管理」界面右侧列表的一行
            {
                "pathType": "name",
                "path": [          //如果是普通角色，返回空数组。这个节点通过全路径信息来表示一个部门（部门角色）或自定义档案值（档案角色）
                    "测试接口专用",
                    "部门1",
                    "部门1-1"
                ],
                "staffs": [        //员工集合，根据“staffBy”显示员工对应的信息
                    "ID_3lokDfb1p5w",
                    "qKZ3wlg6bv9OGg"
                ],
                "staffsType": "sourceId" //查询员工信息显示类型
            },
            {
                "pathType": "id",
                "path": [
                    "bwa3wajigF0WH0",
                    "bwa3wajigF0WH0:ID_3wUvB7G2d3w"
                ],
                "staffs": [
                    "IqQ3wlg6bv9QGg"
                ],
                "staffsType": "sourceId"
            }
        ]
    }
}
```
</TabItem>
<TabItem value="code" label="code">

```json
{
    "value": {
        "id": "ID_3z4Mx4Pdz4g",    //角色ID
        "name": "测试部门角色",    //角色名称
        "contents": [             //角色配置情况，每一个元素对应「角色管理」界面右侧列表的一行
            {
                "pathType": "name",
                "path": [          //如果是普通角色，返回空数组。这个节点通过全路径信息来表示一个部门（部门角色）或自定义档案值（档案角色）
                    "测试接口专用",
                    "部门1",
                    "部门1-1"
                ],
                "staffs": [        //员工集合，根据“staffBy”显示员工对应的信息
                    "9458",
                    "01170001"
                ],
                "staffsType": "code" //查询员工信息显示类型
            },
            {
                "pathType": "id",
                "path": [
                    "bwa3wajigF0WH0",
                    "bwa3wajigF0WH0:ID_3wUvB7G2d3w"
                ],
                "staffs": [
                    "1002"
                ],
                "staffsType": "code"
            }
        ]
    }
}
```
</TabItem>
<TabItem value="cellphone" label="cellphone">

```json
{
    "value": {
        "id": "ID_3z4Mx4Pdz4g",    //角色ID
        "name": "测试部门角色",    //角色名称
        "contents": [             //角色配置情况，每一个元素对应「角色管理」界面右侧列表的一行
            {
                "pathType": "name",
                "path": [          //如果是普通角色，返回空数组。这个节点通过全路径信息来表示一个部门（部门角色）或自定义档案值（档案角色）
                    "测试接口专用",
                    "部门1",
                    "部门1-1"
                ],
                "staffs": [        //员工集合，根据“staffBy”显示员工对应的信息
                    "17600109458",
                    "12341234123"
                ],
                "staffsType": "cellphone" //查询员工信息显示类型
            },
            {
                "pathType": "id",
                "path": [
                    "bwa3wajigF0WH0",
                    "bwa3wajigF0WH0:ID_3wUvB7G2d3w"
                ],
                "staffs": [
                    "18811110002"
                ],
                "staffsType": "cellphone" //查询员工信息显示类型
            }
        ]
    }
}
```
</TabItem>
<TabItem value="email" label="email">

```json
{
    "value": {
        "id": "ID_3z4Mx4Pdz4g",    //角色ID
        "name": "测试部门角色",    //角色名称
        "contents": [             //角色配置情况，每一个元素对应「角色管理」界面右侧列表的一行
            {
                "pathType": "name",
                "path": [          //如果是普通角色，返回空数组。这个节点通过全路径信息来表示一个部门（部门角色）或自定义档案值（档案角色）
                    "测试接口专用",
                    "部门1",
                    "部门1-1"
                ],
                "staffs": [        //员工集合，根据“staffBy”显示员工对应的信息
                    "ddd@163.com",
                    ""             //员工没有对应信息时返回空串
                ],
                "staffsType": "email" //查询员工信息显示类型
            },
            {
                "pathType": "id",
                "path": [
                    "bwa3wajigF0WH0",
                    "bwa3wajigF0WH0:ID_3wUvB7G2d3w"
                ],
                "staffs": [
                    "youxiang@123.com"
                ],
                "staffsType": "email" //查询员工信息显示类型
            }
        ]
    }
}
```
</TabItem>
</Tabs>

## 失败响应
| HTTP状态码 | 错误码 | 描述 | 排查建议 |
| :--- | :--- | :--- | :--- |
| **400** | - | 角色不存在 | 请确认 `roledefId`（角色ID）是否正确 | 
| **400** | - | pathType只支持id,name,code类型 | 请确认 `pathType` 传参符合要求 | 

