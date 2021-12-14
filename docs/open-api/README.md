# OpenAPI写作指南

该文档支持 MDX 语法，目前支持的格式为：

```
# 在文件开关添加该引用
import Control from "../components/Control";

# 需要显示 API 样式的地方，请使用 `<Control />` 组件，示例如下：

<Control
  method="POST"
  url="/pet/{petId}/uploadImage"
  description="uploads an image"
/>
```

## FAQ

### 如何添加文档到侧边栏?

在`sidebar.js`中`tutorialSidebar`添加

### 如何在表格中展示字段层级？

使用：`&emsp; ∟ `标识，例如：

| Name                         | Type   | In     | Description                     |
| ---------------------------- | ------ | ------ | ------------------------------- |
| `accept`                     | string | header | Setting to                      |
| `petId`                      | string | path   | petId                           |
| &emsp; ∟ `package_type`      | string | query  | The type of supported package.  |
| &emsp; &emsp; ∟ `visibility` | string | query  |                                 |
| `body`                       | object | body   | The description of the project. |
