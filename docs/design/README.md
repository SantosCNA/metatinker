# 设计资源清单

> 版本：v0.1（2025-11-13）  
> 维护人：元像AI Lab（MetaTinker）

## Figma 项目

- **项目名称**：MetaTinker Web MVP  
- **包含内容**：组件库、页面线框、响应式布局标注、交互动效说明  
- **访问说明**：请在 Figma 团队空间中查找 `MetaTinker · MVP` 项目，如需外部协作请联系维护人开通权限。

## 色板文件

- **文件**：`docs/design/Define-Color-Palette.make`  
- **来源**：Figma 导出的样式库（Define Color Palette 插件）  
- **用途**：可导入至 Figma / Sketch / XD 以快速复用官方色板；开发端参考 Tailwind `theme.extend.colors` 配置。  
- **更新流程**：
  1. 在 Figma 中调整色板并导出 `.make` 文件；
  2. 覆盖项目中的同名文件，并在提交记录中注明版本；
  3. 同步更新 `tailwind.config.js` 与 `docs/brand/brand-assets.md` 中的配色说明。

## 接下来

- [ ] 导出排版与组件样式的定义文件（如 `.json` 或 `.figstyles`）。  
- [ ] 生成动效规范文档并补充到本目录。


