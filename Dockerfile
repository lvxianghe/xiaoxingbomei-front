# 小型博美前端Vue项目多阶段构建Dockerfile
# 阶段1：构建阶段
FROM node:18 AS builder

# 设置工作目录
WORKDIR /app

# 安装pnpm
RUN npm install -g pnpm

# 复制package.json和锁文件
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY . .

# 构建项目
RUN pnpm run build

# 阶段2：运行阶段
FROM nginx:latest

# 复制nginx配置
COPY nginx.conf /etc/nginx/nginx.conf

# 从构建阶段复制dist文件到nginx的xiaoxingbomei子目录
COPY --from=builder /app/dist /usr/share/nginx/html/xiaoxingbomei

# 暴露端口
EXPOSE 7777

# 启动nginx
CMD ["nginx", "-g", "daemon off;"] 