# 🔍 RAG优化策略工坊

> 40个核心策略，掌握RAG优化的完整体系

## 简介

RAG优化策略工坊是一个交互式知识学习网站，基于最新RAG技术发展，系统梳理了 **40个核心优化策略**。涵盖查询优化、分块策略、索引技术、检索方法、生成优化、数据优化六大核心领域，从查询重写到多模态检索，帮助你系统学习检索增强生成的优化技术。

## 功能特性

- **📖 系统学习** — 40个策略按6大核心领域分类
- **🃏 闪卡复习** — 卡片式记忆法，高效巩固所学
- **📑 知识索引** — 按主题浏览，快速定位策略
- **📊 学习进度** — 追踪学习状态，掌握学习节奏
- **📱 PWA支持** — 支持离线访问，随时随地学习

## 知识覆盖

涵盖 **6大核心领域**：
- **查询优化** — 查询重写、意图识别、查询扩展等
- **分块策略** — 语义分块、递归分块、滑动窗口等
- **索引技术** — 向量索引、混合索引、层次索引等
- **检索方法** — 语义检索、混合检索、多模态检索等
- **生成优化** — 提示工程、上下文压缩、忠实性验证等
- **数据优化** — 数据清洗、知识图谱、增量更新等

## 技术栈

- 纯前端实现（HTML + CSS + JavaScript）
- ES6 模块化架构
- PWA（Service Worker + Manifest）
- 响应式设计，适配移动端

## 快速开始

```bash
# 克隆项目
git clone https://github.com/bellchen/rag-optimization-workshop.git

# 使用任意静态服务器启动
cd rag-optimization-workshop
npx serve .
```

## 项目结构

```
rag-optimization-workshop/
├── index.html          # 首页
├── learn.html          # 学习页
├── flashcard.html      # 闪卡复习页
├── roots.html          # 知识索引页
├── root-detail.html    # 索引详情页
├── progress.html       # 学习进度页
├── css/
│   └── minimal.css     # 样式文件
├── js/
│   ├── siteConfig.js   # 站点配置
│   ├── storage.js      # 本地存储管理
│   └── wordData.js     # 策略数据
├── manifest.json       # PWA配置
└── sw.js               # Service Worker
```

## 许可证

MIT
