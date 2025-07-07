# 小型博美 AI 前端项目

**小型博美** 是一个综合性AI服务平台，旨在为用户提供多种AI智能应用服务。这是前端项目，提供现代化的Web界面。

## 🚀 技术栈

- **运行环境**: Node.js 18.20.6
- **包管理**: pnpm 10.2.0
- **构建工具**: Vite 4
- **框架**: Vue 3
- **状态管理**: Pinia
- **开发语言**: TypeScript
- **UI组件**: Element Plus
- **样式**: Less、PostCSS
- **代码规范**: ESLint、Prettier、StyleLint

## 📦 部署说明

### 🌟 Docker 快速部署（推荐）

**部署步骤**

1. **启动前端服务**
   ```bash
   # 进入前端目录
   cd xiaoxingbomei-front
   
   # 构建并启动前端服务
   docker-compose -f docker-compose-frontend.yml up --build -d
   ```

2. **验证服务状态**
   ```bash
   # 查看容器状态
   docker-compose -f docker-compose-frontend.yml ps
   
   # 访问测试：http://localhost:7777
   ```

### 🔄 前后端联合部署

```bash
# 1. 先启动后端服务
cd xiaoxingbomei-back
docker-compose -f docker-compose-backend.yml up --build -d

# 2. 再启动前端服务
cd ../xiaoxingbomei-front
docker-compose -f docker-compose-frontend.yml up --build -d
```

### 传统部署方式

1. 安装对应版本的Node.js
2. 在项目根目录执行：
   ```bash
   pnpm install
   npm run dev
   ```

## 🎨 效果展示

### 入口页面
![入口页面](https://github.com/user-attachments/assets/987ad65d-f246-4e67-9f09-8e491c947a23)

### 模型管理
![模型管理](https://github.com/user-attachments/assets/d5f1daef-7dcf-4fe3-a3c8-2e49db01b3ab)

### AI对话
![AI对话](https://github.com/user-attachments/assets/9c0d212a-66b3-4cb9-a4a3-d2ecc8e35707)

### 提示词工程
![提示词工程1](https://github.com/user-attachments/assets/07a37e9b-0fd4-42fd-bd86-353ef832d91a)
![提示词工程2](https://github.com/user-attachments/assets/332c2c00-ce5c-416a-a858-5a6f632dbf20)

### RAG功能
![RAG功能1](https://github.com/user-attachments/assets/0f468406-0c3a-47d7-8ba9-d27626467c1b)
![RAG功能2](https://github.com/user-attachments/assets/c050e26e-165c-4c9f-b27f-dd0379fc63ec)

### 多模态
![多模态1](https://github.com/user-attachments/assets/72084cf7-1188-4135-89d8-5cce627eaf40)
![多模态2](https://github.com/user-attachments/assets/fdeef08b-b457-4790-b5fc-f15364004e7a)

### Function Calling/MCP
![Function Calling1](https://github.com/user-attachments/assets/c6938bb9-b4df-4430-bbd9-e2be13a83c72)
![Function Calling2](https://github.com/user-attachments/assets/287a3a20-cc95-4a4f-8b75-49198bcc00a6)
![Function Calling3](https://github.com/user-attachments/assets/634fffdd-3cbf-453d-862c-c91bf42c0cc6)

---

**⭐ 如果这个项目对你有帮助，请给个Star！**

