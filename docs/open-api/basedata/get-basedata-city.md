# 获取城市列表数据

{% httpverb "post" %} /api/openapi/v1/city/getCityList {% endhttpverb %}

#### Query Parameters:

| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **accessToken** | String  | 通过授权接口获取 |必填   | - |  [通过授权接口获取](/getting-started/auth.html)  |


#### Body Parameters:
| 名称       | 类型    | 描述            | 是否必填   | 默认值  |备注                                         |
| :--------- | :------ | :------------- |:--------- |:------ | :------------------------------------------  |
| **name** | String  | 名称 | 非必填   | - | 省市县名称，可模糊查询，不用带省市县后缀，例如“北京” |
| **code** | String  | 编码 | 非必填 | - | 省市县编码，国标 |
| **parentId** | String  | 父级编号 | 非必填 | - | 省市县的父级编号，易快报系统中定义，非国标 |

> ⚠️ 注意：
>
>  `name`、`code`、`parentId`三个参数是并且的关系， 查询时任选其一填写即可。

<br/>
#### CURL:
```json
curl --location --request POST 'http://app.ekuaibao.com/api/openapi/v1/city/getCityList?accessToken=FsYc5j4FlclU00' \
--header 'content-type: application/json' \
--header 'Accept: application/json' \
--data-raw '{
      "name": "南昌",
      "code": "",
      "parentId": ""
}'
```
<br/>


#### 成功响应:
```json
{
      "items": [
            {
                  "id": "1353",                     //编号
                  "version": 4,
                  "active": true,
                  "createTime": 1505372614205,
                  "updateTime": 1505372614205,
                  "name": "江西省",                 //名称
                  "nameSpell": "JIANGXISHENG",      //拼音
                  "code": "360000",                 //编码
                  "corporationId": "",              
                  "enName": "Jiangxisheng",         //英文名称
                  "enFullName": "Jiangxi, China",    //英文全称
                  "fullName": "中国, 江西省",           //中文全称
                  "country": "国内",                   
                  "parentId": "",                   //父级编号
                  "treeLevel": 0,
                  "extendInfo": {
                        "trainCode": null,
                        "airportCode": null,
                        "cityExtendCode": null
                  },
                  "haveFlight": false,
                  "haveTrain": false,
                  "flightList": [],
                  "trainList": [],
                  "isLast": false,                  //是否末级 true=是；false=否
                  "isRuleNode": false,
                  "children": [                     //当前所属子级
                        {
                              "id": "1354",         
                              "version": 5,
                              "active": true,
                              "createTime": 1505372614205,
                              "updateTime": 1505372614205,
                              "name": "南昌市",
                              "nameSpell": "NANCHANGSHI",
                              "code": "360100",
                              "corporationId": "",
                              "enName": "Nanchang",
                              "enFullName": "Nanchang, Jiangxi, China",
                              "fullName": "中国, 江西省, 南昌市",
                              "country": "国内",
                              "parentId": "1353",
                              "treeLevel": 1,
                              "extendInfo": {
                                    "trainCode": [
                                          "nch:南昌",
                                          "ncx:南昌西"
                                    ],
                                    "airportCode": [
                                          "KHN:昌北国际机场"
                                    ],
                                    "cityExtendCode": "1501"
                              },
                              "haveFlight": false,
                              "haveTrain": false,
                              "flightList": [],
                              "trainList": [],
                              "isLast": false,
                              "isRuleNode": true,
                              "children": [
                                    {
                                          "id": "1364",
                                          "version": 4,
                                          "active": true,
                                          "createTime": 1505372614207,
                                          "updateTime": 1505372614207,
                                          "name": "进贤县",
                                          "nameSpell": "JINXIANXIAN",
                                          "code": "360124",
                                          "corporationId": "",
                                          "enName": "Jinxianxian",
                                          "enFullName": "Jinxianxian, Nanchangshi, Jiangxi, China",
                                          "fullName": "中国, 江西省, 南昌市, 进贤县",
                                          "country": "国内",
                                          "parentId": "1354",
                                          "treeLevel": 3,
                                          "extendInfo": {
                                                "trainCode": [
                                                      "jxi:进贤",
                                                      "jxn:进贤南"
                                                ],
                                                "airportCode": [
                                                      "KHN:昌北国际机场"
                                                ],
                                                "cityExtendCode": "1501"
                                          },
                                          "haveFlight": false,
                                          "haveTrain": false,
                                          "flightList": [],
                                          "trainList": [],
                                          "isLast": true,
                                          "isRuleNode": false,
                                          "children": []
                                    },
                                    {
                                          "id": "1363",
                                          "version": 4,
                                          "active": true,
                                          "createTime": 1505372614206,
                                          "updateTime": 1505372614206,
                                          "name": "安义县",
                                          "nameSpell": "ANYIXIAN",
                                          "code": "360123",
                                          "corporationId": "",
                                          "enName": "Anyixian",
                                          "enFullName": "Anyixian, Nanchangshi, Jiangxi, China",
                                          "fullName": "中国, 江西省, 南昌市, 安义县",
                                          "country": "国内",
                                          "parentId": "1354",
                                          "treeLevel": 3,
                                          "extendInfo": {
                                                "trainCode": [
                                                      "nch:南昌",
                                                      "ncx:南昌西"
                                                ],
                                                "airportCode": [
                                                      "KHN:昌北国际机场"
                                                ],
                                                "cityExtendCode": "1501"
                                          },
                                          "haveFlight": false,
                                          "haveTrain": false,
                                          "flightList": [],
                                          "trainList": [],
                                          "isLast": true,
                                          "isRuleNode": false,
                                          "children": []
                                    },
                                    {
                                          "id": "1361",
                                          "version": 4,
                                          "active": true,
                                          "createTime": 1505372614206,
                                          "updateTime": 1505372614206,
                                          "name": "新建区",
                                          "nameSpell": "XINJIANQU",
                                          "code": "360112",
                                          "corporationId": "",
                                          "enName": "Xinjianqu",
                                          "enFullName": "Xinjianqu, Nanchangshi, Jiangxi, China",
                                          "fullName": "中国, 江西省, 南昌市, 新建区",
                                          "country": "国内",
                                          "parentId": "1354",
                                          "treeLevel": 3,
                                          "extendInfo": {
                                                "trainCode": [
                                                      "nch:南昌",
                                                      "ncx:南昌西"
                                                ],
                                                "airportCode": [
                                                      "KHN:昌北国际机场"
                                                ],
                                                "cityExtendCode": "1501"
                                          },
                                          "haveFlight": false,
                                          "haveTrain": false,
                                          "flightList": [],
                                          "trainList": [],
                                          "isLast": true,
                                          "isRuleNode": false,
                                          "children": []
                                    },
                                    {
                                          "id": "1362",
                                          "version": 4,
                                          "active": true,
                                          "createTime": 1505372614206,
                                          "updateTime": 1505372614206,
                                          "name": "南昌县",
                                          "nameSpell": "NANCHANGXIAN",
                                          "code": "360121",
                                          "corporationId": "",
                                          "enName": "Nanchangxian",
                                          "enFullName": "Nanchangxian, Nanchangshi, Jiangxi, China",
                                          "fullName": "中国, 江西省, 南昌市, 南昌县",
                                          "country": "国内",
                                          "parentId": "1354",
                                          "treeLevel": 3,
                                          "extendInfo": {
                                                "trainCode": [
                                                      "nch:南昌",
                                                      "ncx:南昌西"
                                                ],
                                                "airportCode": [
                                                      "KHN:昌北国际机场"
                                                ],
                                                "cityExtendCode": "1501"
                                          },
                                          "haveFlight": false,
                                          "haveTrain": false,
                                          "flightList": [],
                                          "trainList": [],
                                          "isLast": true,
                                          "isRuleNode": false,
                                          "children": []
                                    },
                                    {
                                          "id": "1356",
                                          "version": 4,
                                          "active": true,
                                          "createTime": 1505372614206,
                                          "updateTime": 1505372614206,
                                          "name": "东湖区",
                                          "nameSpell": "DONGHUQU",
                                          "code": "360102",
                                          "corporationId": "",
                                          "enName": "Donghuqu",
                                          "enFullName": "Donghuqu, Nanchangshi, Jiangxi, China",
                                          "fullName": "中国, 江西省, 南昌市, 东湖区",
                                          "country": "国内",
                                          "parentId": "1354",
                                          "treeLevel": 3,
                                          "extendInfo": {
                                                "trainCode": [
                                                      "nch:南昌",
                                                      "ncx:南昌西"
                                                ],
                                                "airportCode": [
                                                      "KHN:昌北国际机场"
                                                ],
                                                "cityExtendCode": "1501"
                                          },
                                          "haveFlight": false,
                                          "haveTrain": false,
                                          "flightList": [],
                                          "trainList": [],
                                          "isLast": true,
                                          "isRuleNode": false,
                                          "children": []
                                    },
                                    {
                                          "id": "1358",
                                          "version": 4,
                                          "active": true,
                                          "createTime": 1505372614206,
                                          "updateTime": 1505372614206,
                                          "name": "青云谱区",
                                          "nameSpell": "QINGYUNPUQU",
                                          "code": "360104",
                                          "corporationId": "",
                                          "enName": "Qingyunpuqu",
                                          "enFullName": "Qingyunpuqu, Nanchangshi, Jiangxi, China",
                                          "fullName": "中国, 江西省, 南昌市, 青云谱区",
                                          "country": "国内",
                                          "parentId": "1354",
                                          "treeLevel": 3,
                                          "extendInfo": {
                                                "trainCode": [
                                                      "nch:南昌",
                                                      "ncx:南昌西"
                                                ],
                                                "airportCode": [
                                                      "KHN:昌北国际机场"
                                                ],
                                                "cityExtendCode": "1501"
                                          },
                                          "haveFlight": false,
                                          "haveTrain": false,
                                          "flightList": [],
                                          "trainList": [],
                                          "isLast": true,
                                          "isRuleNode": false,
                                          "children": []
                                    },
                                    {
                                          "id": "1357",
                                          "version": 4,
                                          "active": true,
                                          "createTime": 1505372614206,
                                          "updateTime": 1505372614206,
                                          "name": "西湖区",
                                          "nameSpell": "XIHUQU",
                                          "code": "360103",
                                          "corporationId": "",
                                          "enName": "Xihuqu",
                                          "enFullName": "Xihuqu, Nanchangshi, Jiangxi, China",
                                          "fullName": "中国, 江西省, 南昌市, 西湖区",
                                          "country": "国内",
                                          "parentId": "1354",
                                          "treeLevel": 3,
                                          "extendInfo": {
                                                "trainCode": [
                                                      "nch:南昌",
                                                      "ncx:南昌西"
                                                ],
                                                "airportCode": [
                                                      "KHN:昌北国际机场"
                                                ],
                                                "cityExtendCode": "1501"
                                          },
                                          "haveFlight": false,
                                          "haveTrain": false,
                                          "flightList": [],
                                          "trainList": [],
                                          "isLast": true,
                                          "isRuleNode": false,
                                          "children": []
                                    },
                                    {
                                          "id": "1355",
                                          "version": 5,
                                          "active": true,
                                          "createTime": 1505372614205,
                                          "updateTime": 1505372614205,
                                          "name": "南昌市区",
                                          "nameSpell": "NANCHANGSHIQU",
                                          "code": "360101",
                                          "corporationId": "",
                                          "enName": "Nanchangshiqu",
                                          "enFullName": "Nanchang, Jiangxi, China",
                                          "fullName": "中国, 江西省, 南昌市, 南昌市区",
                                          "country": "国内",
                                          "parentId": "1354",
                                          "treeLevel": 3,
                                          "extendInfo": {
                                                "trainCode": [
                                                      "nch:南昌",
                                                      "ncx:南昌西"
                                                ],
                                                "airportCode": [
                                                      "KHN:昌北国际机场"
                                                ],
                                                "cityExtendCode": "1501"
                                          },
                                          "haveFlight": false,
                                          "haveTrain": false,
                                          "flightList": [],
                                          "trainList": [],
                                          "isLast": true,
                                          "isRuleNode": false,
                                          "children": []
                                    },
                                    {
                                          "id": "1360",
                                          "version": 4,
                                          "active": true,
                                          "createTime": 1505372614206,
                                          "updateTime": 1505372614206,
                                          "name": "青山湖区",
                                          "nameSpell": "QINGSHANHUQU",
                                          "code": "360111",
                                          "corporationId": "",
                                          "enName": "Qingshanhuqu",
                                          "enFullName": "Qingshanhuqu, Nanchangshi, Jiangxi, China",
                                          "fullName": "中国, 江西省, 南昌市, 青山湖区",
                                          "country": "国内",
                                          "parentId": "1354",
                                          "treeLevel": 3,
                                          "extendInfo": {
                                                "trainCode": [
                                                      "qsh:青山"
                                                ],
                                                "airportCode": [
                                                      "KHN:昌北国际机场"
                                                ],
                                                "cityExtendCode": "1501"
                                          },
                                          "haveFlight": false,
                                          "haveTrain": false,
                                          "flightList": [],
                                          "trainList": [],
                                          "isLast": true,
                                          "isRuleNode": false,
                                          "children": []
                                    },
                                    {
                                          "id": "1359",
                                          "version": 4,
                                          "active": true,
                                          "createTime": 1505372614206,
                                          "updateTime": 1505372614206,
                                          "name": "湾里区",
                                          "nameSpell": "WANLIQU",
                                          "code": "360105",
                                          "corporationId": "",
                                          "enName": "Wanliqu",
                                          "enFullName": "Wanliqu, Nanchangshi, Jiangxi, China",
                                          "fullName": "中国, 江西省, 南昌市, 湾里区",
                                          "country": "国内",
                                          "parentId": "1354",
                                          "treeLevel": 3,
                                          "extendInfo": {
                                                "trainCode": [
                                                      "nch:南昌",
                                                      "ncx:南昌西"
                                                ],
                                                "airportCode": [
                                                      "KHN:昌北国际机场"
                                                ],
                                                "cityExtendCode": "1501"
                                          },
                                          "haveFlight": false,
                                          "haveTrain": false,
                                          "flightList": [],
                                          "trainList": [],
                                          "isLast": true,
                                          "isRuleNode": false,
                                          "children": []
                                    }
                              ]
                        }
                  ]
            }
      ]
}
```
