# 性能测试检查清单

## ⚡ 核心性能指标

### Lighthouse 评分目标
- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 90

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

## 📊 加载性能

### 首屏加载
- [ ] HTML 加载时间: < 1s
- [ ] CSS 加载时间: < 1s
- [ ] JavaScript 加载时间: < 2s
- [ ] 首屏渲染时间: < 3s

### 资源优化
- [ ] 图片格式：WebP/AVIF
- [ ] 图片懒加载：已实现
- [ ] 字体预加载：已配置
- [ ] CSS 内联关键样式
- [ ] JavaScript 代码分割

### 文件大小
- [ ] HTML: < 50KB
- [ ] CSS: < 100KB (gzip < 20KB)
- [ ] JavaScript: < 500KB (gzip < 150KB)
- [ ] 图片：单张 < 200KB

## 🎬 动画性能

### FPS 检查
- [ ] 动画帧率: ≥ 60fps
- [ ] 滚动流畅度: 无卡顿
- [ ] 悬停响应: < 100ms

### 动画优化
- [ ] 使用 `transform` 和 `opacity`
- [ ] 避免触发重排/重绘
- [ ] 使用 `will-change` 提示
- [ ] 减少同时动画数量

## 🔧 代码性能

### 构建优化
- [ ] Tree-shaking 生效
- [ ] 代码压缩
- [ ] 资源压缩（gzip/brotli）
- [ ] 生产环境优化

### 运行时性能
- [ ] 无内存泄漏
- [ ] 组件渲染优化
- [ ] 事件监听器清理
- [ ] 防抖/节流应用

## 📱 移动端性能

### 移动网络（3G）
- [ ] 首屏加载: < 5s
- [ ] 可交互时间: < 3s
- [ ] 资源加载优化

### 移动设备
- [ ] 低端设备流畅运行
- [ ] 电池消耗合理
- [ ] 内存使用正常

## 🛠️ 测试方法

### Chrome DevTools
```bash
# 1. 打开 DevTools (F12)
# 2. Performance 标签
# 3. 录制页面加载
# 4. 分析性能指标
```

### Lighthouse
```bash
# 1. Chrome DevTools > Lighthouse
# 2. 选择测试类型
# 3. 运行测试
# 4. 查看报告
```

### Network 分析
```bash
# 1. DevTools > Network
# 2. 刷新页面
# 3. 查看资源加载时间
# 4. 检查资源大小
```

## 📈 性能优化建议

### 已实施优化
- [ ] 图片懒加载
- [ ] 代码分割
- [ ] 字体优化
- [ ] CSS 优化
- [ ] JavaScript 压缩

### 待优化项
- [ ] 图片 CDN
- [ ] 服务端渲染（如需要）
- [ ] 缓存策略
- [ ] 预加载关键资源

---

**性能测试完成后，记录指标并优化未达标项。**


