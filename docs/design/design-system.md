# 设计系统规范（MVP-2）

> 版本：v0.1（2025-11-13）  
> 维护人：元像AI Lab（MetaTinker）  
> 说明：本规范与 Figma 项目「MetaTinker · MVP」保持联动，所有更新需同步两端。

## 1. 布局与栅格

- **容器宽度**：`1200px`（Desktop），`960px`（Tablet），`100%`（Mobile）  
- **栅格系统**：12 列栅格，列间距 `24px`，外边距 `32px`（Desktop） / `20px`（Tablet） / `16px`（Mobile）  
- **垂直间距**：基于 8px 步进（8 / 12 / 16 / 24 / 32 / 48 / 64 / 96）  
- **模块规范**：
  - Hero：上下间距 `120px`（Desktop），`96px`（Tablet），`72px`（Mobile）  
  - Section：标题上 `64px`、正文下 `48px`  
  - 卡片：内部 padding `32px`（Desktop），`24px`（Tablet），`20px`（Mobile）

## 2. 色彩系统

- **深色背景**：`#0F172A`（主背景）  
- **主色**：`#6366F1`（Button / 强调）、`#8B5CF6`（高亮）、`#3B82F6`（点缀）  
- **辅助色**：`#06D6A0`（成功/正向）、`#FBBF24`（提醒）  
- **文本色**：`#F8FAFC`（主文字）、`#CBD5E1`（次文字）、`#94A3B8`（提示）  
- **表面色**：`#1E293B`（卡片）、`#334155`（浮层）  
- **梯度**：
  - Hero：`linear-gradient(135°, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)`
  - CTA：`linear-gradient(90°, #6366F1, #8B5CF6, #06D6A0)`
  - 卡片：`linear-gradient(145°, rgba(30,41,59,0.85), rgba(15,23,42,0.95))`

> 开发同步：Tailwind `theme.extend.colors` 与 `backgroundImage` 已配置。

## 3. 字体与排版

- **中英文正文字体**：`Inter` / `PingFang SC` / `Microsoft YaHei`  
- **标题字体**：`Space Grotesk` / `Alibaba PuHuiTi`  
- **等宽字体**：`JetBrains Mono` / `Fira Code`
- **字号层级（Desktop）**：
  - H1：48 / 56 / 0  
  - H2：36 / 44 / 0  
  - H3：28 / 36 / 0  
  - Lead：20 / 32 / 0  
  - Body：16 / 28 / 0  
  - Small：14 / 24 / 0  
  - Micro：12 / 18 / 0
- **响应式调整**：Tablet -1 级、Mobile -2 级（Figma 自动样式中已设置）。

## 4. 元件规范

- **按钮**：
  - Primary：霓虹渐变背景 + 发光阴影 `0 0 30px rgba(99,102,241,0.45)`  
  - Secondary：透明背景 + 1px 半透明描边 + Hover 渐变描边  
  - Icon Button：直径 `48px`，内部图标 `Lucide 20px`
- **标签（Tag）**：圆角 `9999px`，侧边描边透明度 40%，内边距 `8px 16px`
- **卡片（Card）**：
  - 圆角 `12px`，玻璃拟态背景 `rgba(30,41,59,0.6)`，边框 `1px rgba(255,255,255,0.08)`  
  - 投影 `0 25px 45px rgba(15, 23, 42, 0.55)`  
  - Hover：`translateY(-4px)` + `shadow-glow`
- **标注（Badge）**：高度 `28px`，字体 `12px`，颜色与状态对应（主色/成功/警示）。

## 5. 动效与微交互

- **通用时长**：微交互 `200ms`，页面过渡 `300ms`，进入动画 `400ms`  
- **Hero 粒子层**：默认 `opacity 0.35`，Hover `0.45`  
- **按钮 Hover**：放大 `1.05`，阴影增强，背景亮度提升 `10%`  
- **卡片 Hover**：Y 轴上移 `4px`、阴影增强、描边渐变  
- **时间轴 / 步骤**：滚动进入时逐项淡入，每项延迟 `60ms`

> 动效详情见 `docs/design/motion-guidelines.md`（后续补充）。

## 6. 断点与响应式

- **Mobile**：`< 640px`  
- **Tablet**：`640px - 1024px`  
- **Desktop**：`1024px - 1440px`  
- **Wide**：`> 1440px`（主容器最大宽度控制在 1200px，背景元素可扩展）

布局调整原则：
- 移动端使用纵向堆叠，保留玻璃拟态感但简化阴影  
- Tablet 两列布局，间距 `24px`  
- Desktop 三列或四列栅格，根据内容密度调整。

## 7. 图标与插画

- 图标库：`Lucide`（线性风格），线宽 1.5px，单色 `#F8FAFC`（浅背景使用 `#0F172A`）  
- 插画风格：抽象科技感 + 渐变光效，可使用 Figma 中提供的矢量素材  
- Eva 数字人：2D 角色插画，需保持与 Figma 素材一致，提供 PNG 与 SVG 两种格式。

## 8. 导出规范

- PNG（透明背景）：Hero 装饰、粒子动画帧  
- SVG：图标、插画、Logo  
- JSON（未来）：动效关键帧（Framer Motion 参数）  
- 视频/动图：动效展示（MP4/WebM）

## 9. 更新流程

1. 在 Figma 中更新组件或样式，发布最新版本。  
2. 导出相关资源（色板、图标、动效），覆盖 `docs/design/` 对应文件。  
3. 在 Git 记录中说明更新内容，并同步 README（必要时）。  
4. 通知研发同步 Tailwind / 组件实现。

---

> 下一步计划：补齐动效说明、组件状态图、文案对齐规范。


