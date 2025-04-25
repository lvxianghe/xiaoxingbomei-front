# 小型博美AI前端项目

这是一个基于Vue 3 + TypeScript开发的多功能AI服务平台，集成了多种智能AI应用场景，为用户提供便捷、智能的服务体验。

## 项目介绍

小型博美AI平台是一个综合性AI服务平台，旨在为用户提供多种AI智能应用服务。平台集成了智能聊天助手、情感安慰、文档智能分析等多种功能模块，采用现代化前端技术栈开发，提供流畅、美观的用户界面和交互体验。

## 功能模块

平台当前包含以下AI功能模块：

- **小型博美** - 智能AI助手，提供自然语言交互和问答服务
- **哄哄模拟器** - 提供情感安慰和心理支持的AI模拟系统
- **ChatPDF** - 智能PDF文档分析和问答系统
- **更多功能模块** - 持续开发中...

## 技术栈

- **前端框架**：Vue 3 + TypeScript
- **UI组件库**：Element Plus
- **路由管理**：Vue Router 4
- **状态管理**：Pinia
- **构建工具**：Vite 4
- **CSS预处理器**：Less
- **HTTP客户端**：Axios
- **进度指示器**：NProgress

# 文档
语雀地址：
# 架构设计
## 版本
 - nodejs：18.20.6
 - npm：10.8.2
 - pnpm：10.2.0


## 技术点
 - 包管理：pnpm
 - 脚手架工具：vite4
 - 框架：vue3
 - 状态管理器：pinia
 - 开发语言：typescript
 - UI：Element-Plus
 - Css样式：Less、Postcss
 - 代码规范：Eslint、prettier、StyleLint
 - 提交规范：CommitLint、Husky、LintStaged
 - 企业级中后台最佳模版：vite4+Pinia+Vue3+Element-Plus、TypeScript
 - Package.json：每个依赖项具体配置和作用
 - 打包优化最佳配置：Vite.config.ts、dist目录最优解、chunk分包和拆包
 - 图标库的依赖加载：unplugin-icons/vite
 - 依赖按需加载： unplugin-auto-import/vite，可自动导入使用到的vue、vue-router、pinia api等依赖
 - 组件按需导入：unplugin-vue-component，无论是第三方UI组件还是自定义组件都可实现自动按需导入以及TS语法提示，全局引入组件库，使用起来非常方便，缺点是产物体积大，对性能要求较高的项目不友好；按需引入可以减少体积
 - 脚手架工具：如何从0到1开发一个脚手架，类比业界的vue-cli、create-react-app
 - vscode使用技巧、代码、浏览器调试技巧

## 工程目录

| 备注                 | 层级1      | 层级2       | 层级3    | 层级4 |
| -------------------- | ---------- | ----------- | -------- | ----- |
| git钩子配置          | .husky/    |             |          |       |
| 项目打包后的目录     | dist/      |             |          |       |
| 数据请求模拟         | mock/      |             |          |       |
| 不经过打包的静态资源 | public/    |             |          |       |
| ts类型定义           | type/      |             |          |       |
| 自定义指令           | directive/ |             |          |       |
| 项目资源             | src/       |             |          |       |
| ajax http请求管理    |            | api/        |          |       |
| 经过打包的静态资源   |            | assets/     |          |       |
| 通用组件             |            | components/ |          |       |
| 通用组件状态逻辑函数 |            | hooks/      |          |       |
| 项目路由管理         |            | router/     |          |       |
| 项目状态管理         |            | store/      |          |       |
| 项目通用样式         |            | styles/     |          |       |
| 工具函数             |            | utils/      |          |       |
| axios函数            |            |             | request/ |       |
| 页面组件             |            | views/      |          |       |
|                      |            |             |          |       |


## AI模块截图

### AI中心
![AI中心页面](https://github.com/user-attachments/assets/98613bd8-cae3-41d8-94fb-f0f918ce35b3)

### 小型博美
智能AI助手，提供自然语言交互和问答服务

### 哄哄模拟器
提供情感安慰和心理支持的AI模拟系统

### ChatPDF
智能PDF文档分析和问答系统





