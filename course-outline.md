# 《AgentScope-Java 深度实战：从零构建多 Agent 智能客服系统》

## 课程规格

| 维度 | 说明 |
|------|------|
| 总节数 | 41 节 |
| 输出形态 | 视频课（15-30 min/节）+ 图文专栏 |
| 技术栈 | JDK 21 + Spring Boot 3 + Maven + AgentScope 2.0 |
| 教学模型 | DeepSeek + DashScope 双模型 |
| 实战项目 | 多 Agent 智能客服系统（贯穿全课程） |
| 目标受众 | 有 Java 基础的 AI 应用开发者 |

---

## 模块一：入门篇 — 初识 AgentScope（第 1-7 节）

### 第 1 节：课程导览与环境搭建

- 课程全景介绍：五个模块学完能做什么
- JDK 21 安装与验证
- Maven 项目初始化 + Spring Boot 3 脚手架
- AgentScope BOM 引入与依赖管理
- IDE 配置（IntelliJ IDEA 推荐）
- DeepSeek API Key 申请与 DashScope API Key 申请
- 第一个空项目跑通验证

### 第 2 节：第一个 Agent：5 分钟跑通对话

- HarnessAgent 最小可用示例
- DeepSeek 模型配置（OpenAIChatModel + baseUrl）
- DashScope 模型配置（DashScopeChatModel）
- ModelRegistry 字符串引用方式
- 第一次 `agent.call()` 对话
- 图文：Spring Boot CommandLineRunner 启动示例

### 第 3 节：ReActAgent vs HarnessAgent 双层架构

- ReActAgent：无状态推理核心，Think → Act → Observe 循环
- HarnessAgent：工程化包装层，继承 ReActAgent
- 对比：能力矩阵（会话/工作区/压缩/子Agent/沙箱）
- 何时用 ReActAgent，何时用 HarnessAgent
- 代码演示：两者写法的差异

### 第 4 节：对话管理：call / streamEvents / observe

- `call()`：同步阻塞调用，返回完整回复
- `streamEvents()`：流式输出，`AgentEvent` 类型概览
  - `TEXT_BLOCK_DELTA`：增量文本
  - `TOOL_CALL_START` / `TOOL_CALL_END`：工具调用事件
  - `AGENT_STATE_SAVE`：状态持久化事件
- `observe()`：观察模式，不执行只分析
- 实战：流式输出到前端 SSE

### 第 5 节：RuntimeContext 与多用户并发

- RuntimeContext 结构：`sessionId` + `userId` + 元数据
- 单实例多会话并发模型
- sessionId 如何驱动会话恢复
- userId 级别的状态隔离
- 实战：三个用户同时对话同一个 Agent 实例

### 第 6 节：Workspace 工作区揭秘

- Workspace 目录结构全览
- AGENTS.md：Agent 人格定义文件
- MEMORY.md：长期记忆自动沉淀
- Skills 目录：按需加载的技能
- Subagents 目录：子 Agent 声明
- tools.json：工具白名单配置
- 实战：为客服 Agent 编写 AGENTS.md

### 第 7 节：上下文压缩（Compaction）

- 为什么需要压缩：Token 窗口有限
- CompactionConfig 配置：`triggerMessages` + `keepMessages`
- 压缩触发策略：消息数阈值、Token 数阈值
- 摘要生成机制：保留任务目标、关键发现、下一步
- MEMORY.md 长记忆沉淀：压缩时提炼事实写入
- 工具结果溢出到磁盘
- 实战：配置客服 Agent 的压缩策略

---

## 模块二：进阶篇 — 核心能力（第 8-16 节）

### 第 8 节：Tool 工具体系（上）

- Tool 概念：Agent 与外部世界的桥梁
- Tool 定义方式：`@Tool` 注解、函数式注册
- ToolKit 容器：聚合多个 Tool
- 参数 Schema 自动生成
- 模型如何决策调用哪个 Tool
- 实战：编写天气查询 Tool

### 第 9 节：Tool 工具体系（下）

- ToolGroup：按场景分组切换
- 异步 Tool 实现与回调
- Tool 执行超时与重试策略
- Tool 结果格式化注入对话
- Tool 调用安全：参数校验、异常处理
- 实战：为客服系统编写订单查询 Tool

### 第 10 节：Middleware 中间件体系

- 五个钩子位置：
  - `onAgent`：Agent 启动/结束
  - `onReasoning`：推理阶段前后
  - `onActing`：Tool 执行前后
  - `onModelCall`：模型调用前后
  - `onSystemPrompt`：系统提示词组装
- MiddlewareBase 抽象类
- 洋葱模型：多个 Middleware 的嵌套执行
- 内置 Middleware：OtelTracing、TaskReminder
- 实战：自定义日志 Middleware + 速率限制 Middleware

### 第 11 节：AgentState 与会话持久化

- AgentState 数据结构
- AgentStateStore 接口
- 四种后端对比：
  - InMemory：开发测试用
  - JsonFile：单机持久化
  - Redis：分布式共享
  - MySQL：企业级持久化
- 状态序列化与反序列化流程
- 会话恢复：同 sessionId 自动加载历史
- 实战：Redis 后端配置与跨实例会话共享

### 第 12 节：Permission 引擎与 HITL

- PermissionEngine 三态决策：allow / den / HITL
- 静态规则配置
- 动态分析：基于 Tool 类型 + 输入内容
- HITL（Human-in-the-Loop）回调机制
- 人工审批流程
- 实战：客服系统中的敏感操作审批（退款/改价）

### 第 13 节：RAG 知识库集成

- RAG 在 Agent 中的角色
- 向量检索：文档 Embedding + 相似度搜索
- 文档加载：PDF / Markdown / 网页
- 知识注入：检索结果拼入 System Prompt
- AgentScope RAG 扩展模块
- 实战：产品知识库接入客服系统

### 第 14 节：MCP 协议集成

- MCP（Model Context Protocol）概念
- MCP Server 连接与生命周期
- Tool 与 Resource 自动发现
- MCP vs 本地 Tool 的选择
- AgentScope MCP 客户端实现
- 实战：连接外部 MCP Server 扩展客服能力

### 第 15 节：多模态处理

- DataBlock 统一抽象（替代 1.x 的 ImageBlock/AudioBlock/VideoBlock）
- 图像处理：截图识别、图表分析
- 音频处理：语音转文字
- 视频处理：关键帧提取
- 多模态模型配置
- 实战：客服系统中的图片识别（用户上传截图）

### 第 16 节：Spring Boot 3 深度集成

- Agent 作为 Spring Bean：依赖注入管理
- 配置外部化：application.yml 管理 API Key、模型参数
- REST API 暴露：Controller 层包装 Agent 对话
- SSE 流式推送到前端
- Actuator + Micrometer 监控指标
- 实战：将客服 Agent 暴露为 REST API

---

## 模块三：高级篇 — 多 Agent 协作（第 17-24 节）

### 第 17 节：多 Agent 模式概览

- 五种协作模式对比：
  - Subagent：任务委托，隔离上下文
  - Supervisor：Agent-as-Tool，中心化调度
  - Routing：分类路由，各司其职
  - Handoffs：状态图流转，角色交接
  - Pipeline：顺序/并行/循环链
- 选型指南：什么场景用什么模式
- 实战预览：客服系统为什么选 Supervisor + Subagent

### 第 18 节：Subagent 声明与注册

- Markdown 文件定义方式：`workspace/subagents/*.md`
  - name、description、tools 白名单
- Java API 定义方式：ReActAgent builder
- AgentResourceLoader 加载流程
- 工具白名单：限定子 Agent 权限
- 实战：声明客服系统的三个子 Agent

### 第 19 节：agent_spawn：子 Agent 调度

- `agent_spawn` 工具的内部机制
- 同步模式：阻塞等待子 Agent 完成
- 后台模式：异步委托，后续查询结果
- 上下文隔离：子 Agent 持有独立对话
- 结果聚合：子 Agent 输出如何喂回主 Agent
- SubagentTool 源码速览
- 实战：Supervisor 动态调度子 Agent

### 第 20 节：Supervisor 模式

- Agent-as-Tool 实现原理
- `Toolkit.registration().subAgent()` 注册
- 多轮会话管理：`session_id` 传递
- `includeContents`：上下文透传策略
- Supervisor vs Subagent 模式对比
- 实战：客服主管 Agent 以 Supervisor 模式调度

### 第 21 节：A2A 分布式协作

- A2A（Agent-to-Agent）协议规范
- Nacos 服务发现注册
- 跨进程 Agent 通信
- 消息序列化与传输
- 实战：拆分为独立微服务的客服系统

### 第 22 节：Plan Mode 任务分解

- Plan Mode 理念：先规划再执行
- 任务分解：自然语言目标 → 步骤列表
- 执行阶段：逐步执行，观察结果
- 动态调整：执行失败后的重规划
- `HarnessAgent.enablePlanMode()` 配置
- 实战：让客服主管用 Plan Mode 处理复杂投诉

### 第 23 节：沙箱隔离

- Workspace 抽象层：解耦"做什么"与"在哪做"
- 本地文件系统沙箱
- Docker 容器沙箱
- Kubernetes Pod 沙箱
- E2B / Daytona 云端沙箱
- 沙箱预热池机制
- 实战：客服子 Agent 的 Docker 沙箱隔离

### 第 24 节：模型容错与降级

- 模型调用失败的重试策略
- Fallback 模型配置：主模型不可用时自动切换
- 断路器模式：连续失败后的熔断
- 超时控制
- 实战：DeepSeek 主模型 + DashScope 降级

---

## 模块四：实战篇 — 多 Agent 智能客服系统（第 25-30 节）

### 第 25 节：项目架构设计

- 系统总体架构图
- Agent 角色体系：
  - Supervisor（客服主管）
  - Intent Classifier（意图识别）
  - PreSale Agent（售前顾问）
  - AfterSale Agent（售后专员）
  - TechSupport Agent（技术支持）
  - Escalation Agent（升级处理）
- Spring Boot 项目模块划分
- 配置管理：多环境 profile
- 代码仓库初始化

### 第 26 节：Supervisor 客服主管实现

- Supervisor 的 System Prompt 设计
- 意图识别与任务分派逻辑
- 会话上下文管理
- 子 Agent 调度策略
- 结果汇总与回复生成
- 编码实现与测试

### 第 27 节：售前 + 售后 Agent 实现

- PreSale Agent：RAG 产品知识库检索、方案推荐
- AfterSale Agent：订单查询 Tool、退换货流程
- 子 Agent 间信息传递
- 各自 workspace 独立配置
- 编码实现与测试

### 第 28 节：技术支持 + 升级处理 Agent 实现

- TechSupport Agent：MCP 工具集成、技术文档检索
- Escalation Agent：HITL 人工介入触发、投诉升级流程
- Permission 引擎：敏感操作权限控制
- 编码实现与测试

### 第 29 节：完整流程联调

- 端到端测试场景设计：
  1. 用户咨询产品 → 售前推荐
  2. 用户下单购买 → 订单确认
  3. 用户申请售后 → 退换货处理
  4. 用户投诉升级 → 人工介入
- 全链路日志追踪
- 异常场景覆盖
- 性能测试与优化

### 第 30 节：部署与监控

- Docker 容器化：Dockerfile 编写
- Docker Compose 编排（Agent + Redis + MySQL + Nacos）
- Spring Boot Actuator 健康检查
- Micrometer 指标采集
- 日志聚合与链路追踪（OpenTelemetry）
- 生产环境 checklist

---

## 模块五：源码分析篇（第 31-41 节）

### 第 31 节：源码阅读方法论

- AgentScope 项目结构导航
  - `agentscope-core`：推理核心
  - `agentscope-harness`：工程化层
  - `agentscope-extensions`：扩展生态
- 关键包与核心类地图
- 源码调试技巧：断点、日志、单元测试
- 阅读路线建议

### 第 32 节：ReActAgent 推理循环源码

- `ReActAgent` 类结构
- Think → Act → Observe 状态机
- 模型调用流程：Prompt 组装 → API 请求 → 响应解析
- Tool 调用循环：检测 Tool Call → 执行 → 观察 → 继续推理
- 循环终止条件：模型输出纯文本 / 达到最大步数
- AgentState 在循环中的读写

### 第 33 节：HarnessAgent 与 Middleware 链源码

- `HarnessAgent` Builder 模式实现
- Middleware 洋葱模型源码：`MiddlewareBase` 的五个方法
- 中间件链的组装与执行顺序
- 钩子触发时机与上下文传递
- 内置 Middleware 源码走读：OtelTracing、TaskReminder
- HarnessAgent 如何包装 ReActAgent

### 第 34 节：Model 接口与多模型适配源码

- `ChatModel` 接口设计
- OpenAI 适配器：OpenAIChatModel 实现
- DashScope 适配器：DashScopeChatModel 实现
- Gemini / Anthropic / Ollama 适配器差异
- ModelRegistry 查找与缓存机制
- 请求/响应序列化与反序列化

### 第 35 节：Tool 调用机制源码

- `Tool` 接口与 `@Tool` 注解处理器
- 参数解析：JSON Schema → Java 类型映射
- 参数校验：必填、类型、范围
- `ToolKit` 注册与查找
- `TaskToolsBuilder`：主 Agent 工具的组装
- `SubagentTool`：子 Agent 作为 Tool 的特殊实现
- Tool 执行器的线程模型与超时处理

### 第 36 节：AgentStateStore 与会话持久化源码

- `AgentStateStore` 接口设计
- InMemory 实现：ConcurrentHashMap
- JsonFile 实现：文件锁、原子写入
- Redis 实现：序列化、TTL、分布式锁
- MySQL 实现：表结构、连接池、事务
- 状态序列化：Jackson 多态类型处理
- 会话恢复：`sessionId` → AgentState 的完整加载链

### 第 37 节：Workspace 体系源码

- `Workspace` 抽象：接口与实现分离
- AGENTS.md / MEMORY.md 的加载与解析
- Skills 目录扫描与匹配
- Subagents 目录的 Asset 加载
- 沙箱抽象层：LocalFileSystem → Docker → K8s
- 沙箱预热池：对象池模式实现
- 文件读取缓存与 read-before-edit 校验

### 第 38 节：上下文压缩实现源码

- `CompactionConfig`：配置模型
- 触发判断：消息数阈值 vs Token 数阈值
- 摘要 Prompt 构造：保留什么、丢弃什么
- `CompactionMiddleware` 在生命周期中的位置
- MEMORY.md 事实提取与写回
- 工具结果溢出：大文件卸载到磁盘引用
- 压缩前后对话恢复的一致性保证

### 第 39 节：Permission 引擎实现源码

- `PermissionEngine` 接口与实现
- 三态决策枚举：ALLOW / DENY / REQUIRE_HITL
- 静态规则匹配器：路径、类型、参数
- 动态分析器：输入内容敏感度评估
- HITL 回调链：审批请求 → 等待 → 响应
- Permission 在 Tool 调用链中的拦截位置
- 与 Middleware 的协作

### 第 40 节：Plan Mode 实现源码

- Plan Mode 入口：`HarnessAgent.enablePlanMode()`
- 任务分解器：目标 → 步骤列表的 Prompt 工程
- 执行器：逐步骤调用 Agent，收集结果
- 观察器：评估步骤结果，判断成功/失败
- 重规划器：失败步骤的替代方案生成
- Plan Mode 与 Middleware 的交互
- 完整循环的状态机

### 第 41 节：流式输出与事件系统源码

- `streamEvents()` 实现：Flux\<AgentEvent\> 的生成
- `AgentEvent` 类型体系：
  - TextBlockStart / TextBlockDelta / TextBlockEnd
  - ToolCallStart / ToolCallDelta / ToolCallEnd
  - AgentStateSave / AgentError
- 事件如何从 Model 响应流 → AgentEvent 流
- SSE（Server-Sent Events）推送实现
- Spring WebFlux 集成
- 前端消费事件的推荐模式

---

## 附录

### A. 开发环境 checklist

- JDK 21+
- Maven 3.9+
- IntelliJ IDEA 2024+
- DeepSeek API Key（https://platform.deepseek.com）
- DashScope API Key（https://dashscope.aliyun.com）
- Docker Desktop（沙箱章节需要）

### B. 每节配套资源

- 视频（15-30 分钟）
- 图文教程（3000-5000 字）
- 可运行代码（GitHub 仓库，每节一个 branch/tag）
- 课后练习（1-3 道实操题）

### C. 实战项目 Agent 角色总览

| Agent 角色 | 核心能力 | 对应章节 |
|---|---|---|
| Supervisor（客服主管） | 意图识别、任务分派、结果汇总 | §26 |
| Intent Classifier（意图识别） | 自然语言分类、路由决策 | §26 |
| PreSale Agent（售前顾问） | RAG 产品检索、方案推荐 | §27 |
| AfterSale Agent（售后专员） | 订单查询 Tool、退换货 | §27 |
| TechSupport Agent（技术支持） | MCP 工具、技术文档 | §28 |
| Escalation Agent（升级处理） | HITL 人工介入、投诉升级 | §28 |
