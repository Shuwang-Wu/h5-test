<!--
 * @Author: Shuwang_wu
 * @Date: 2024-06-05 10:57:05
 * @LastEditTime: 2024-06-12 10:24:36
 * @LastEditors: Shuwang_wu
 * @FilePath: \luban-h5\front-end\h5\README.md
 * @Description: please edit
-->
# 鲁班h5

includes

1. editor module
2. work list module
3. template list module
4. preview module

## Getting Started

[Read the Getting Started tutorial](https://ly525.github.io/luban-h5/en/getting-started/quick-start.html)

## 鲁班H5前端模块

包含

1. 编辑器模块
2. 作品列表模块
3. 模板列表模块
4. 预览模块、

## 快速开始

[快速上手指南](https://ly525.github.io/luban-h5/zh/getting-started/quick-start.html)

## 编码常见问题

- 关于函数名后没有空格报错
   再setting.json 增加如下配置

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```

- 行末自动添加逗号
   在.prettierrc.json 增加如下配置

```json
  "trailingComma": "none" // 结尾不加逗号
```
