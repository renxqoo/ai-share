---
name: requirement-delivery-flow
description: 在实现任何功能、修复 Bug、做重构、开发页面、接口或全栈改动之前使用
---

# Requirement Delivery Flow

## 概述

临时式开发只会制造返工。高质量交付必须走固定流水线：先明确需求，再定义结构，再开始实现，完成前必须验证。

**核心原则：** 没有 `Scope` 和 `Blueprint`，就不能开始写代码。

**开始时声明：** `我将使用 requirement-delivery-flow skill。`

## 铁律

```text
没有 Scope + Classification + Blueprint，就不能开始写代码
```

如果这三个阶段没有完成，就不能进入实现阶段。

## 何时必须停下澄清

遇到以下情况，不要猜，先停下：

- 用户目标不清楚
- 成功标准不清楚
- 入口或出口路径不清楚
- API 契约不清楚
- 改动范围不清楚
- 可能存在高风险副作用

如果风险较低，可以先明确写出假设，再继续。

## 流水线

你必须按顺序完成每个阶段，不能跳步。

### Phase 1: Scope

这一阶段只回答一件事：需求到底是什么。

至少整理：

- 目标
- 入口
- 预期结果
- 状态 / 分支
- 失败路径
- 依赖项：接口、权限、环境
- 是否需要国际化、测试、兼容性处理

如果需求复杂，先画 ASCII 结构或流程图。

### Phase 2: Classification

给当前需求选一个主类型：

- `ui`
- `api`
- `fullstack`
- `bugfix`
- `refactor`

即使是混合需求，也只选一个主类型。

### Phase 3: Blueprint

写代码前先定义实现骨架。

至少整理：

- 模块边界
- 文件拆分
- 数据流
- 状态流
- 路由 / 入口关系
- 测试范围

不要在没有骨架的情况下直接写大文件。

### Phase 4: Build

按层实现，不要混写。

- entry layer
- flow layer
- domain/data layer
- presentation layer
- config layer
- verification layer

默认实现顺序：

1. 先搭结构
2. 再接状态和数据
3. 再补错误、边界、文案
4. 最后补测试和验证

### Phase 5: Verify

至少检查：

- happy path
- error path
- 边界条件
- 回归风险
- 兼容性风险
- 测试结果

如果没有执行验证，就不能声称已经完成。

### Phase 6: Handoff

最后只汇报：

- 改了什么
- 如何验证
- 剩余风险 / 假设

## 类型路由

### `ui`

- 分离页面、弹窗、触发器、容器职责
- 能复用的 UI 优先复用
- 异步逻辑优先进 hooks / services
- 用户可见文案优先进 i18n
- 文件变大之前先拆分

### `api`

- route 保持轻量
- 业务逻辑放 service
- 持久化逻辑放 repository / data layer
- 统一规范 request / response / error 结构

### `fullstack`

- 先对齐前后端 contract
- 前后端不要各自发明字段
- 后端返回要能稳定映射到前端状态

### `bugfix`

1. 复现
2. 找根因
3. 最小修复
4. 回归验证

### `refactor`

- 先抽边界，再抽代码
- 优先抽共享 hooks、config、services、mappers、panels
- 抽象必须让下次改动更容易

## 兼容性关卡

当代码涉及以下能力时：

- `window`
- `document`
- `localStorage`
- `sessionStorage`
- `indexedDB`
- `WebSocket`
- 仅浏览器可用的 SDK

必须检查：

- SSR
- 构建期
- 运行时

必要时：

- 下沉到客户端执行
- 改为惰性初始化
- 增加 no-op fallback

## 红旗信号

如果你脑中出现这些想法，立刻停下：

- “我先写了再说”
- “结构很明显，不用想”
- “测试最后再补”
- “先把 happy path 做完”
- “一个大文件更快”
- “国际化先不做”
- “应该能跑”

这些都说明你已经偏离了流水线。

## 完成前检查清单

结束前确认：

- scope 已明确
- 主类型已选定
- 写代码前已有 blueprint
- 错误路径已处理
- 测试或其他验证已执行
- 风险 / 假设已说明

只要其中一项答案是否，就不能算完成。
