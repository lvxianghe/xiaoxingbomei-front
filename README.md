# 小型博美AI 前端

## 项目介绍
作为我个人大模型应用开发学习，前端项目
”小型博美“是一个综合性AI服务平台，旨在为用户提供多种AI智能应用服务。
平台集成了智能聊天助手、情感安慰、智能客服、文档智能分析等多种功能模块，采用现代化前端技术栈开发，提供流畅、美观的用户界面和交互体验。

## 功能模块

平台当前包含以下AI功能模块：

- **小型博美** - 智能AI助手，提供自然语言交互和问答服务
- **哄哄模拟器** - 提供情感安慰和心理支持的AI模拟系统
- *智能客服* - 智能化的客户服务
- **ChatPDF** - 智能PDF文档分析和问答系统
- **更多功能模块** - 持续开发中...


## 设计
语雀地址：
### 整体架构设计
<img width="816" alt="image" src="https://github.com/user-attachments/assets/802d70c5-82ce-4cc9-884d-ffb085f150af" />

### 技术栈
 - nodejs：18.20.6
 - npm：10.8.2
 - pnpm：10.2.0
 - 脚手架工具：vite4
 - 框架：vue3
 - 状态管理器：pinia
 - 开发语言：typescript
 - UI：Element-Plus
 - Css样式：Less、Postcss
 - 代码规范：Eslint、prettier、StyleLint
 - 提交规范：CommitLint、Husky、LintStaged

### 工程目录

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
### 入口
<img width="1276" alt="image" src="https://github.com/user-attachments/assets/e2d4f690-9692-4416-a73c-17c5307649ed" />


### 小型博美
<img width="1280" alt="image" src="https://github.com/user-attachments/assets/079502b6-9607-4154-8fab-dc97f472bade" />


### 智能客服


### 哄哄模拟器
<img width="1280" alt="image" src="https://github.com/user-attachments/assets/c68fa188-8b53-49fd-97fc-aa6e33ff0533" />


### ChatPDF






