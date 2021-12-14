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