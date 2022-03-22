# 更新角色下员工信息

import Control from "@theme/Control";

<Control
method="PUT"
url="/api/openapi/v1/roledefs/$`roledefId`/staffs"
/>

:::caution
- 只有数据来源为【**[API导入](/docs/open-api/corporation/info#新建角色)**】的角色才能使用此接口更新角色。
:::

## Path Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **roledefId** | String | 角色ID | 必填 | - | 在易快报桌面端「系统设置」>「角色管理」处查看 |

## Query Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **accessToken** | String | 认证token  | 必填  | -  | [通过授权接口获取](/docs/open-api/getting-started/auth) |
| **staffBy**     | String | 员工参数格式 | 非必填 | id | `id` : 传入完整员工ID，格式：`企业id : userId`<br/>`sourceId` : 传入 userId <br/>`code` : 员工工号<br/>`cellphone` : 手机号<br/>`email` : 邮箱 |

## Body Parameters

| 名称 | 类型 | 描述 | 是否必填 | 默认值 | 备注 |
| :--- | :--- | :--- | :--- |:--- | :--- |
| **contents**          | Array   | 角色配置情况     | 必填   | - | 每一个元素对应「角色管理」界面右侧列表的一行 |
| **&emsp; ∟ pathType** | String | `name` 或 `code` 或 `id`  | 非必填 | name | 当 `pathType` = `name` 或不传时，`path` 传入部门或自定义档案项名称<br/>当 `pathType` = `code` 时，`path` 传入部门或自定义档案项编码<br/>当 `pathType` = `id` 时，`path` 传入部门或自定义档案项ID |
| **&emsp; ∟ path**     | Array  | 部门或自定义档案值 | 必填 | - | 传入内容参考pathType，传入对应类型的全路径参数<br/>[注意事项](/docs/open-api/corporation/question-answer)<br/>**角色类型为「普通角色」时非必填** |
| **&emsp; ∟ staffs**   | Array  | 员工集合         | 必填 | - | 值为[员工信息](/docs/open-api/corporation/get-all-staffs)<br/>**传入 `[]` 时会删除 `path` 值所对应的这条数据** |

:::tip
- 在系统上新建角色时，角色类型可按【部门】和【档案类别】划分，此接口中的 `path` 参数就传这个角色对应的类型值。
![image](images/新建角色.png)
:::

## CURL
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="id" label="id" default>

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/roledefs/$ID_3BJKZuv0Dow/staffs?accessToken=ID_3BFuV7KbNDw:bwa3wajigF0WH0&staffBy=id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "contents": [  //角色配置情况
        {
            "pathType": "name",                  //当pathType不传或者传name时，path传入部门名称或者自定义档案项名称
            "path": [
                "测试接口专用","部门1","部门1-1"  //部门名称全路径
            ],
            "staffs": [
                "bwa3wajigF0WH0:IqQ3wlg6bv9QGg", //员工ID
                "bwa3wajigF0WH0:qKZ3wlg6bv9OGg"
            ]
        },
        {
            "pathType": "code",                //当pathType传code时，path传入部门编码或者自定义档案项编码
            "path": [
                "GS001","BM002"                //部门编码全路径
            ],
            "staffs": [
                "bwa3wajigF0WH0:aRx3BagJH20mdg"  //员工ID
            ]
        },
        {
            "pathType": "id",                //当pathType传id时，path传入部门ID或者自定义档案项ID
            "path": [
                "bwa3wajigF0WH0","bwa3wajigF0WH0:ID_3wUvB7G2d3w" //部门ID全路径
            ],
            "staffs": [
                "bwa3wajigF0WH0:ID_3lokDfb1p5w"  //员工ID
            ]
        }
    ]
}'
```
</TabItem>
<TabItem value="sourceId" label="sourceId">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/roledefs/$ID_3BJKZuv0Dow/staffs?accessToken=ID_3BJKZuv8iow:bwa3wajigF0WH0&staffBy=sourceId' \
--header 'Content-Type: application/json' \
--data-raw '{
    "contents": [  //角色配置情况
        {
            "pathType": "name",                  //当pathType不传或者传name时，path传入部门名称或者自定义档案项名称
            "path": [
                "测试接口专用","部门1","部门1-1"  //部门名称全路径
            ],
            "staffs": [
                "IqQ3wlg6bv9QGg",                //员工USERID
                "qKZ3wlg6bv9OGg"
            ]
        },
        {
            "pathType": "code",                //当pathType传code时，path传入部门编码或者自定义档案项编码
            "path": [
                "GS001","BM002"                //部门编码全路径
            ],
            "staffs": [
                "aRx3BagJH20mdg"               //员工USERID
            ]
        },
        {
            "pathType": "id",                //当pathType传id时，path传入部门ID或者自定义档案项ID
            "path": [
                "bwa3wajigF0WH0","bwa3wajigF0WH0:ID_3wUvB7G2d3w" //部门ID全路径
            ],
            "staffs": [
                "ID_3lokDfb1p5w"             //员工USERID
            ]
        }
    ]
}'
```
</TabItem>
<TabItem value="code" label="code">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/roledefs/$ID_3BJKZuv0Dow/staffs?accessToken=ID_3BJKZuv8iow:bwa3wajigF0WH0&staffBy=code' \
--header 'Content-Type: application/json' \
--data-raw '{
    "contents": [  //角色配置情况
        {
            "pathType": "name",                  //当pathType不传或者传name时，path传入部门名称或者自定义档案项名称
            "path": [
                "测试接口专用","部门1","部门1-1"  //部门名称全路径
            ],
            "staffs": [
                "1001",                          //员工CODE（工号）
                "1002"
            ]
        },
        {
            "pathType": "code",                //当pathType传code时，path传入部门编码或者自定义档案项编码
            "path": [
                "GS001","BM002"                //部门编码全路径
            ],
            "staffs": [
                "1003"                         //员工CODE（工号）
            ]
        },
        {
            "pathType": "id",                //当pathType传id时，path传入部门ID或者自定义档案项ID
            "path": [
                "bwa3wajigF0WH0","bwa3wajigF0WH0:ID_3wUvB7G2d3w" //部门ID全路径
            ],
            "staffs": [
                "9458"                       //员工CODE（工号）
            ]
        }
    ]
}'
```
</TabItem>
<TabItem value="cellphone" label="cellphone">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/roledefs/$ID_3BJKZuv0Dow/staffs?accessToken=ID_3BJKZuv8iow:bwa3wajigF0WH0&staffBy=cellphone' \
--header 'Content-Type: application/json' \
--data-raw '{
    "contents": [  //角色配置情况
        {
            "pathType": "name",                  //当pathType不传或者传name时，path传入部门名称或者自定义档案项名称
            "path": [
                "测试接口专用","部门1","部门1-1"  //部门名称全路径
            ],
            "staffs": [
                "17600109458",                   //员工手机号
                "12341234123"
            ]
        },
        {
            "pathType": "code",                //当pathType传code时，path传入部门编码或者自定义档案项编码
            "path": [
                "GS001","BM002"                //部门编码全路径
            ],
            "staffs": [
                "18811110002"                  //员工手机号
            ]
        },
        {
            "pathType": "id",                //当pathType传id时，path传入部门ID或者自定义档案项ID
            "path": [
                "bwa3wajigF0WH0","bwa3wajigF0WH0:ID_3wUvB7G2d3w" //部门ID全路径
            ],
            "staffs": [
                "15810011001"                //员工手机号
            ]
        }
    ]
}'
```
</TabItem>
<TabItem value="email" label="email">

```json
curl --location --request PUT 'https://app.ekuaibao.com/api/openapi/v1/roledefs/$ID_3BJKZuv0Dow/staffs?accessToken=ID_3BJKZuv8iow:bwa3wajigF0WH0&staffBy=email' \
--header 'Content-Type: application/json' \
--data-raw '{
    "contents": [  //角色配置情况
        {
            "pathType": "name",                  //当pathType不传或者传name时，path传入部门名称或者自定义档案项名称
            "path": [
                "测试接口专用","部门1","部门1-1"  //部门名称全路径
            ],
            "staffs": [
                "youxiang1@123.com",             //员工邮箱
                "ddd@163.com"
            ]
        },
        {
            "pathType": "code",                //当pathType传code时，path传入部门编码或者自定义档案项编码
            "path": [
                "GS001","BM002"                //部门编码全路径
            ],
            "staffs": [
                "youxiang@123.com"             //员工邮箱
            ]
        },
        {
            "pathType": "id",                //当pathType传id时，path传入部门ID或者自定义档案项ID
            "path": [
                "bwa3wajigF0WH0","bwa3wajigF0WH0:ID_3wUvB7G2d3w" //部门ID全路径
            ],
            "staffs": [
                "youxiang3@123.com"          //员工邮箱
            ]
        }
    ]
}'
```
</TabItem>
</Tabs>





## 成功响应
:::caution
- 响应需要判断状态码来确定是否成功。
:::

```text
code 204
```

## 失败响应
参数非全路径或员工信息不正确时，报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "数据错误:[0:路径不存在[部门], 0:人员不存在[EAQbauUqXweI00:YCgbc2y8_Ivg00]]",
    "errorDetails": null,
    "code": null,
    "data": null
}
```

除了普通角色，`path`、`staffs` 不允许传 `null`，否则报错如下：
```json
{
    "errorCode": 412,
    "errorMessage": "参数staffs不能为空",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
```json
{
    "errorCode": 412,
    "errorMessage": "参数path不能为空",
    "errorDetails": null,
    "code": null,
    "data": null
}
```
