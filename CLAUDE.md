# AgentScope-Java 深度实战 — 图文专栏

基于 VitePress 的课程文档站点。41 节系统课程，从零构建多 Agent 智能客服系统。

## 项目结构

```
agentscope-class/
├── articles/          # 课程文章（VitePress srcDir）
│   ├── index.md       # 首页
│   ├── module-01/     # 入门篇（第 1-7 节）
│   ├── module-02/     # 进阶篇（第 8-16 节）
│   ├── module-03/     # 高级篇（第 17-24 节）
│   ├── module-04/     # 实战篇（第 25-30 节）
│   └── module-05/     # 源码分析篇（第 31-41 节）
├── .vitepress/        # VitePress 配置
├── assets/            # 静态资源（图片等）
├── course-outline.md  # 课程大纲
└── docs/agents/       # Agent 技能配置（issue tracker、triage labels 等）
```

## 配套代码

课程代码已拆分到独立仓库：

🔗 **[agent-scope-learn-ls-code](https://github.com/liuee123/agent-scope-learn-ls-code)** — 包含每节课的可运行代码

```
agent-scope-learn-ls-code/
├── backend/           # Spring Boot + AgentScope Java 代码
└── frontend/          # 前端代码
```

## 本地开发

```bash
pnpm install
pnpm docs:dev          # 启动开发服务器 → http://localhost:5173
pnpm docs:build        # 构建生产版本
pnpm docs:preview      # 预览构建结果
```

## Agent Skills

### Issue tracker

Issues 存放在本仓库的 GitHub Issues 中。详见 `docs/agents/issue-tracker.md`。

### Triage labels

五个标准 triage 角色，使用默认标签名。详见 `docs/agents/triage-labels.md`。

### Domain docs

单上下文（single-context）—— `CLAUDE.md` + `docs/adr/` 位于仓库根目录。详见 `docs/agents/domain.md`。
