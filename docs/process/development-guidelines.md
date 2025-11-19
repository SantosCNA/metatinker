# 开发规范（MVP-2 基准）

> 版本：v0.1（2025-11-13）  
> 维护人：元像AI Lab（MetaTinker）

## 技术栈要求

- **框架**：React 18 + TypeScript 5 + Vite 5  
- **样式**：Tailwind CSS 3.4（结合 CSS Modules / 自定义类）  
- **状态管理**：Zustand（按需加载，避免全局过度耦合）  
- **动效**：Framer Motion 10  
- **图标**：Lucide React  
- **代码质量**：ESLint（严格模式）+ Prettier + Husky（pre-commit）

## 文件结构规范

```
src/
├── components/
│   ├── ui/               # 基础无状态组件
│   ├── sections/         # 页面区块组件
│   └── layout/           # 布局与导航组件
├── data/                 # 结构化内容数据（TS）
├── pages/                # 页面入口
├── styles/               # 全局样式与主题工具
├── hooks/                # 自定义 Hooks
├── store/                # Zustand 状态管理
├── utils/                # 工具方法
└── config/               # 站点配置（导航、SEO、社交链接）
```

> 所有新增模块需在 PR 中更新 README 或对应文档。

## 代码约定

- TypeScript `strict: true`，禁止 `any` / `!` 非空断言。  
- 组件使用函数式写法，Props 必须声明接口。  
- Tailwind 类按「布局 → 尺寸 → 排版 → 颜色 → 状态」顺序书写。  
- 定制类统一写入 `src/styles/`，避免散落在组件。  
- 动效遵循 200ms 微交互 / 300ms 页面过渡规范。  
- 公共常量（配色、CTA 文案、自定义阴影）统一导出自 `src/utils/constants.ts`。

## Git 工作流

- 分支命名：`feature/*`、`style/*`、`fix/*`、`docs/*`。  
- Commit 信息遵循 `type: 描述`，示例：`feat: 初始化服务模块数据结构`。  
- Pull Request 模板需包含：变更描述 / 测试结果 / 风险提示 / Checklist。

## 质量保障

- 必须通过 `npm run lint`、`npm run typecheck`、`npm run test`（如有）后方可合并。  
- 关键页面需进行可访问性检查（颜色对比、键盘导航）。  
- Lighthouse 指标（移动端）需满足：Performance ≥ 90、Best Practices ≥ 95、Accessibility ≥ 90、SEO ≥ 95。

## 文档与沟通

- 重要决策需在 `docs/` 目录新增或更新说明。  
- 变更记录记录在 `CHANGELOG.md`（后续添加）。  
- 所有资产、文案更新需同步更新对应 checklist。

## 后续迭代 TODO

- [ ] 增加 PR 模板与 Issue 模板。  
- [ ] 集成 Playwright 视觉回归测试。  
- [ ] 引入 Storybook 作为组件展示平台。  
- [ ] 评估接入 i18n（第二阶段）。


