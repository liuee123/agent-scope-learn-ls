# Issue tracker: GitHub

Issues 和 PRD 以 GitHub issues 形式存放。所有操作使用 `gh` CLI。

## 约定

- **创建 issue**：`gh issue create --title "..." --body "..."`。多行正文使用 heredoc。
- **查看 issue**：`gh issue view <number> --comments`，通过 `jq` 过滤评论并获取标签。
- **列出 issue**：`gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'`，配合 `--label` 和 `--state` 过滤器。
- **评论 issue**：`gh issue comment <number> --body "..."`
- **添加 / 移除标签**：`gh issue edit <number> --add-label "..."` / `--remove-label "..."`
- **关闭**：`gh issue close <number> --comment "..."`

从 `git remote -v` 推断仓库 —— `gh` 在 clone 目录内运行时会自动处理。

## Pull requests 作为 triage 入口

**PRs as a request surface: no。** _(设为 `yes` 则外部 PR 被视为 feature request；`/triage` 会读取此标志。)_

设为 `yes` 时，PR 与 issue 使用相同的标签和状态流转，使用 `gh pr` 等价命令：

- **查看 PR**：`gh pr view <number> --comments` 和 `gh pr diff <number>` 查看 diff。
- **列出待 triage 的外部 PR**：`gh pr list --state open --json number,title,body,labels,author,authorAssociation,comments`，只保留 `authorAssociation` 为 `CONTRIBUTOR`、`FIRST_TIME_CONTRIBUTOR` 或 `NONE` 的（丢弃 `OWNER`/`MEMBER`/`COLLABORATOR`）。
- **评论 / 标签 / 关闭**：`gh pr comment`、`gh pr edit --add-label`/`--remove-label`、`gh pr close`。

GitHub 的 issue 和 PR 共享编号空间，所以 `#42` 可能是两者之一 —— 先用 `gh pr view 42` 判断，失败则回退到 `gh issue view 42`。

## 当技能说"发布到 issue tracker"

创建 GitHub issue。

## 当技能说"获取相关 ticket"

运行 `gh issue view <number> --comments`。

## Wayfinding 操作

由 `/wayfinder` 使用。**map** 是一个 issue，**child** 为子 ticket。

- **Map**：标记为 `wayfinder:map` 的单个 issue，正文包含 Notes / Decisions-so-far / Fog。`gh issue create --label wayfinder:map`。
- **Child ticket**：作为 GitHub sub-issue 链接到 map 的 issue（通过 sub-issues 端点的 `gh api`）。如果 sub-issue 不可用，将 child 添加到 map 正文的 task list 中，并在 child 正文顶部写上 `Part of #<map>`。标签：`wayfinder:<type>`（`research`/`prototype`/`grilling`/`task`）。一旦被认领，ticket 分配给负责的开发者。
- **阻塞关系**：GitHub 的**原生 issue 依赖** —— 标准的、UI 可见的表示。通过 `gh api --method POST repos/<owner>/<repo>/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-db-id>` 添加依赖边，其中 `<blocker-db-id>` 是阻塞者的数字**数据库 id**（`gh api repos/<owner>/<repo>/issues/<n> --jq .id`，_不是_ `#number` 或 `node_id`）。GitHub 在 `issue_dependencies_summary.blocked_by` 中报告（仅开放阻塞者 —— 实时门控）。如果依赖功能不可用，回退到在 child 正文顶部写 `Blocked by: #<n>, #<n>`。当所有阻塞者关闭后，ticket 视为解除阻塞。
- **Frontier 查询**：列出 map 的开放 child（`gh issue list --state open`，限定在 map 的 sub-issue / task list 范围内），丢弃仍有开放阻塞者（`issue_dependencies_summary.blocked_by > 0`，或 `Blocked by` 行中有开放 issue）或已有 assignee 的；按 map 顺序取第一个。
- **认领**：`gh issue edit <n> --add-assignee @me` —— session 的第一个写操作。
- **解决**：`gh issue comment <n> --body "<answer>"`，然后 `gh issue close <n>`，最后将上下文指针（gist + 链接）追加到 map 的 Decisions-so-far。
