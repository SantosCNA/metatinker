# 部署指南

## GitHub Pages 部署

### 前置条件

1. 在 GitHub 上创建仓库（如果还没有）
2. 确保仓库名称与 `vite.config.ts` 中的 `base` 路径匹配

### 部署步骤

#### 1. 配置 GitHub Pages

1. 进入 GitHub 仓库
2. 点击 **Settings** → **Pages**
3. 在 **Source** 部分选择：
   - **Source**: `GitHub Actions`
4. 保存设置

#### 2. 推送代码到 GitHub

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: MetaTinker website"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送到 main 分支
git push -u origin main
```

#### 3. 自动部署

推送代码后，GitHub Actions 会自动：
1. 安装依赖
2. 构建项目
3. 部署到 GitHub Pages

部署完成后，网站将在以下地址可访问：
- `https://你的用户名.github.io/仓库名/`

### 配置说明

#### 修改 base 路径

如果仓库名称不是 `metatinker-website`，需要修改 `vite.config.ts`：

```typescript
base: process.env.NODE_ENV === 'production' ? '/你的仓库名/' : '/',
```

#### 使用自定义域名

1. 在仓库根目录创建 `CNAME` 文件
2. 添加你的域名，例如：`metatinker.ai`
3. 在域名 DNS 设置中添加 CNAME 记录指向 `你的用户名.github.io`

### 手动部署（可选）

如果需要手动部署：

```bash
# 构建项目
npm run build

# 将 dist 目录内容推送到 gh-pages 分支
# （需要安装 gh-pages: npm install -D gh-pages）
npx gh-pages -d dist
```

### 故障排查

#### 404 错误

- 检查 `vite.config.ts` 中的 `base` 路径是否正确
- 确保 GitHub Pages 设置中 Source 选择的是 `GitHub Actions`

#### 资源加载失败

- 检查所有资源路径是否使用相对路径
- 确保 `public` 目录中的文件正确复制到 `dist` 目录

#### 构建失败

- 检查 GitHub Actions 日志
- 确保所有依赖都已正确安装
- 检查 TypeScript 和 ESLint 错误

---

**部署完成后，网站将在几分钟内可用。**

