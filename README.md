# 引言
想要做一名懂前端的后端开发，借鉴主流app及互联网服务，全面提升自己的技术能力
 - 搜索引擎：百度、谷歌
 - im：微信、chatgpt
 - 搜索推荐系统/社交帖子音视频：小红书、抖音
 - 系统管理：企业通用后台管理系统

互联网大厂企业级中台系统，前端技术模版

通过此项目可以达到以下能力：

1.从0到1构建一个企业级中台管理系统脚手架

2.能够独立从0到1负责企业级中台管理系统

3.推进和落地团队前端研发规范

4.在企业中能够独当一面

# 文档
语雀地址：[https://www.yuque.com/lvxianghe-tzsng/lvxianghe/zw4spv69ydxdoy7k?singleDoc#](https://www.yuque.com/lvxianghe-tzsng/lvxianghe/zw4spv69ydxdoy7k?singleDoc# ) 《前端脚手架》

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


# 进度
## 登录
![image](https://github.com/user-attachments/assets/57420628-8f21-4e71-8d22-0cdc79993edd)

## 主页面
![image](https://github.com/user-attachments/assets/0b2cd9c7-d04e-446f-ba19-adde9dbc943f)

## 抖音（仿）
![image](https://github.com/user-attachments/assets/266cc4ee-efdf-4189-bdab-4a43f351b4bf)

## 微信（仿）
![image](https://github.com/user-attachments/assets/6fdaa57a-e1b3-4456-ab99-ef87639c0a3d)

## 小红书（仿）
![image](https://github.com/user-attachments/assets/afdb5413-834a-4487-b3ea-53ffc7676152)

## chatGPT（仿）
![image](https://github.com/user-attachments/assets/98613bd8-cae3-41d8-94fb-f0f918ce35b3)

## 后台管理
![image](https://github.com/user-attachments/assets/b4bd07c4-5543-476f-b3d3-2db21120b5e6)

## 搜索引擎（仿百度谷歌）
![image](https://github.com/user-attachments/assets/a5ce5925-805b-4668-b13b-70f769f2b8ec)





