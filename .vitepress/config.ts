import { defineConfig } from 'vitepress'

// 侧边栏：五个模块
const sidebar = [
  {
    text: '模块一：入门篇 — 初识 AgentScope',
    collapsed: false,
    items: [
      { text: '第 1 节：课程导览与环境搭建', link: '/module-01/01-课程导览与环境搭建' },
      { text: '第 2 节：第一个 Agent：5 分钟跑通对话', link: '/module-01/02-第一个Agent-5分钟跑通对话' },
      { text: '第 3 节：ReActAgent vs HarnessAgent 双层架构', link: '/module-01/03-ReActAgent-vs-HarnessAgent双层架构' },
      { text: '第 4 节：对话管理：call / streamEvents / observe', link: '/module-01/04-对话管理' },
      { text: '第 5 节：RuntimeContext 与多用户并发', link: '/module-01/05-RuntimeContext与多用户并发' },
      { text: '第 6 节：Workspace 工作区揭秘', link: '/module-01/06-Workspace工作区揭秘' },
      { text: '第 7 节：上下文压缩（Compaction）', link: '/module-01/07-上下文压缩' },
    ]
  },
  {
    text: '模块二：进阶篇 — 核心能力',
    collapsed: true,
    items: [
      { text: '第 8 节：Tool 工具体系（上）', link: '/module-02/08-Tool工具体系-上' },
      { text: '第 9 节：Tool 工具体系（下）', link: '/module-02/09-Tool工具体系-下' },
      { text: '第 10 节：Middleware 中间件体系', link: '/module-02/10-Middleware中间件体系' },
      { text: '第 11 节：AgentState 与会话持久化', link: '/module-02/11-AgentState与会话持久化' },
      { text: '第 12 节：Permission 引擎与 HITL', link: '/module-02/12-Permission引擎与HITL' },
      { text: '第 13 节：RAG 知识库集成', link: '/module-02/13-RAG知识库集成' },
      { text: '第 14 节：MCP 协议集成', link: '/module-02/14-MCP协议集成' },
      { text: '第 15 节：多模态处理', link: '/module-02/15-多模态处理' },
      { text: '第 16 节：Spring Boot 3 深度集成', link: '/module-02/16-SpringBoot深度集成' },
    ]
  },
  {
    text: '模块三：高级篇 — 多 Agent 协作',
    collapsed: true,
    items: [
      { text: '第 17 节：多 Agent 模式概览', link: '/module-03/17-多Agent模式概览' },
      { text: '第 18 节：Subagent 声明与注册', link: '/module-03/18-Subagent声明与注册' },
      { text: '第 19 节：agent_spawn：子 Agent 调度', link: '/module-03/19-agent-spawn子Agent调度' },
      { text: '第 20 节：Supervisor 模式', link: '/module-03/20-Supervisor模式' },
      { text: '第 21 节：A2A 分布式协作', link: '/module-03/21-A2A分布式协作' },
      { text: '第 22 节：Plan Mode 任务分解', link: '/module-03/22-PlanMode任务分解' },
      { text: '第 23 节：沙箱隔离', link: '/module-03/23-沙箱隔离' },
      { text: '第 24 节：模型容错与降级', link: '/module-03/24-模型容错与降级' },
    ]
  },
  {
    text: '模块四：实战篇 — 多 Agent 智能客服系统',
    collapsed: true,
    items: [
      { text: '第 25 节：项目架构设计', link: '/module-04/25-项目架构设计' },
      { text: '第 26 节：Supervisor 客服主管实现', link: '/module-04/26-Supervisor客服主管实现' },
      { text: '第 27 节：售前 + 售后 Agent 实现', link: '/module-04/27-售前售后Agent实现' },
      { text: '第 28 节：技术支持 + 升级处理 Agent 实现', link: '/module-04/28-技术支持升级处理Agent实现' },
      { text: '第 29 节：完整流程联调', link: '/module-04/29-完整流程联调' },
      { text: '第 30 节：部署与监控', link: '/module-04/30-部署与监控' },
    ]
  },
  {
    text: '模块五：源码分析篇',
    collapsed: true,
    items: [
      { text: '第 31 节：源码阅读方法论', link: '/module-05/31-源码阅读方法论' },
      { text: '第 32 节：ReActAgent 推理循环源码', link: '/module-05/32-ReActAgent推理循环源码' },
      { text: '第 33 节：HarnessAgent 与 Middleware 链源码', link: '/module-05/33-HarnessAgent与Middleware链源码' },
      { text: '第 34 节：Model 接口与多模型适配源码', link: '/module-05/34-Model接口与多模型适配源码' },
      { text: '第 35 节：Tool 调用机制源码', link: '/module-05/35-Tool调用机制源码' },
      { text: '第 36 节：AgentStateStore 与会话持久化源码', link: '/module-05/36-AgentStateStore与会话持久化源码' },
      { text: '第 37 节：Workspace 体系源码', link: '/module-05/37-Workspace体系源码' },
      { text: '第 38 节：上下文压缩实现源码', link: '/module-05/38-上下文压缩实现源码' },
      { text: '第 39 节：Permission 引擎实现源码', link: '/module-05/39-Permission引擎实现源码' },
      { text: '第 40 节：Plan Mode 实现源码', link: '/module-05/40-PlanMode实现源码' },
      { text: '第 41 节：流式输出与事件系统源码', link: '/module-05/41-流式输出与事件系统源码' },
    ]
  },
]

export default defineConfig({
  title: 'AgentScope-Java 深度实战',
  description: '从零构建多 Agent 智能客服系统',
  lang: 'zh-CN',

  srcDir: 'articles',

  themeConfig: {
    nav: [
      { text: '课程大纲', link: '/../course-outline' },
      { text: '配套代码', link: 'https://github.com/liuee123/agent-scope-learn-ls-code' },
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/liuee123/agent-scope-learn-ls' },
    ],

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: '本节目录',
    },

    docFooter: {
      prev: '上一节',
      next: '下一节',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    editLink: {
      pattern: 'https://github.com/liuee123/agent-scope-learn-ls/edit/main/articles/:path',
      text: '在 GitHub 上编辑此页',
    },
  },

  markdown: {
    lineNumbers: true,
  },
})
