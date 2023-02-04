# lowcode-ecology

阿里[lowcode-engine](https://lowcode-engine.cn/)生态项目，基于 antd 和 formily 组件库实现，包括 plugins、setters 和 materials。

## 开发

首先在项目根目录安装依赖：

```bash
// 根目录安装依赖
yarn bootstrap
```

## setters 和 plugins 开发

直接到 `packages/antd-setters` 和 `packages/antd-plugins` 中开发即可。具体效果可以通过启动 demo 项目进行调试。

demo 项目基于 umi4 实现，配置 alias 指向 packages 里面的包，修改 packages 里面的代码可以实现热更新调试。

```bash
// 在 demo 目录或者项目根目录执行 yarn start 启动 demo，打开lcoalhost:8000即可访问
yarn start
```

## Antd Materials

在 [assets.json](/demo/src/assets/assets.json) 文件注册物料：

```json
{
  "packages": [
    {
      "package": "@seatar/antd-materials",
      "version": "0.1.1",
      "library": "seatarAntdMaterials",
      "urls": [
        "https://unpkg.com/@seatar/antd-materials@latest/build/lowcode/view.js",
        "https://unpkg.com/@seatar/antd-materials@latest/build/lowcode/view.css"
      ],
      "editUrls": [
        "https://unpkg.com/@seatar/antd-materials@latest/build/lowcode/view.js",
        "https://unpkg.com/@seatar/antd-materials@latest/build/lowcode/view.css"
      ]
    }
  ],
  "components": [
    {
      "exportName": "seatarAntdMaterialsMeta",
      "npm": {
        "package": "@seatar/antd-materials",
        "version": "0.1.1"
      },
      "url": "https://unpkg.com/@seatar/antd-materials@latest/build/lowcode/meta.js",
      "urls": {
        "default": "https://unpkg.com/@seatar/antd-materials@latest/build/lowcode/meta.js"
      }
    }
  ]
}
```

[Antd Pro 系列组件详细文档](packages/antd-materials)

## Formily Materials

1. 安装 Formily Plugin

```bash
// plugin
npm install @seatar/antd-plugins
```

使用插件

```javascript
import { PluginFormily } from '@seatar/antd-plugins'
import { plugins } from '@alilc/lowcode-engine'

async function registerFormilyPlugins() {
  await plugins.register(PluginFormily)
}

registerFormilyPlugins()
```

2. 在 [assets.json](/demo/src/assets/assets.json) 文件注册物料：

```json
{
  "packages": [
    {
      "package": "@seatar/formily-materials",
      "version": "0.1.1",
      "library": "cedarFormilyMaterials",
      "urls": [
        "https://unpkg.com/@seatar/formily-materials@latest/build/lowcode/view.js",
        "https://unpkg.com/@seatar/formily-materials@latest/build/lowcode/view.css"
      ],
      "editUrls": [
        "https://unpkg.com/@seatar/formily-materials@latest/build/lowcode/view.js",
        "https://unpkg.com/@seatar/formily-materials@latest/build/lowcode/view.css"
      ]
    }
  ],
  "components": [
    {
      "exportName": "seatarFormilyMaterialsMeta",
      "npm": {
        "package": "@seatar/formily-materials",
        "version": "0.1.1"
      },
      "url": "https://unpkg.com/@seatar/formily-materials@latest/build/lowcode/meta.js",
      "urls": {
        "default": "https://unpkg.com/@seatar/formily-materials@latest/build/lowcode/meta.js"
      }
    }
  ]
}
```

[Formily 物料详细文档](packages/formily-materials)

## LICENSE

lowcode-ecology is open source software licensed as [MIT](https://github.com/cedar-low-code/lowcode-ecology/blob/main/LICENSE.md).
