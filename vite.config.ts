import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// 依赖引入
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import ElementPlus from "unplugin-element-plus/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    // 获取当前工作目录
    const root = process.cwd();
    // 获取环境变量
    const env = loadEnv(mode, root);
    return {
        // 项目根目录
        root,
        // 项目部署的基础路径
        base: '/',
        publicDir: fileURLToPath(new URL('./public', import.meta.url)), // 无需处理的静态资源位置
        assetsInclude: fileURLToPath(new URL('./src/assets', import.meta.url)), // 需要处理的静态资源位置
        plugins: [
            // Vue模板文件编译插件
            vue(),
            // jsx文件编译插件
            vueJsx(),
            // 开启mock服务器
            viteMockServe({
                // 如果接口为 /mock/xxx 以 mock 开头就会被拦截响应配置的内容
                mockPath: 'mock', // 数据模拟需要拦截的请求起始 URL
                localEnabled: true, // 本地开发是否启用
                prodEnabled: false, // 生产模式是否启用
            }),
            // 开启ElementPlus自动引入CSS
            ElementPlus({}),
            // 自动引入组件及ICON
            AutoImport({
                resolvers: [IconsResolver(), ElementPlusResolver()],
                dts: fileURLToPath(
                    new URL("./types/auto-imports.d.ts", import.meta.url),
                ),
            }),
            // 自动注册组件
            Components({
                resolvers: [IconsResolver(), ElementPlusResolver()],
                dts: fileURLToPath(
                    new URL("./types/components.d.ts", import.meta.url),
                ),
            }),
            // 自动安装图标
            Icons({
                autoInstall: true,
            }),

        ],
        // 运行后本地预览的服务器
        server: {
            // 是否开启https
            https: false,
            // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
            host: true,
            // 开发环境预览服务器端口
            port: 7777,
            // 启动后是否自动打开浏览器
            open: false,
            // 是否开启CORS跨域
            cors: true,
            // 确保前端路由能够正确工作
            fs: {
                // 允许服务于上层目录
                allow: ['..'],
            },
            // SPA配置，确保前端路由正常工作
            historyApiFallback: {
                rewrites: [
                    // 所有未找到的路由都重定向到index.html
                    { from: /^\/.*/, to: '/index.html' }
                ]
            },
            // 代理服务器
            // 帮助我们开发时解决跨域问题
            proxy: {
                // 这里的意思是 以/api开头发送的请求都会被转发到 http://xxx:3000
                '/api': {
                    target: 'http://localhost:28922',
                    // 改变 Host Header
                    changeOrigin: true,
                    // 发起请求时将 '/api' 替换为 ''
                    rewrite: (path) => path.replace(/^\/api/, ''),
                    configure: (proxy, options) => {
                        proxy.on('proxyRes', (proxyRes, req, res) => {
                            const cookies = proxyRes.headers['set-cookie'];
                            if (cookies) {
                                const satoken = cookies.find(cookie => cookie.includes('satoken='));
                                if (satoken) {
                                    // 在响应中添加自定义头部
                                    proxyRes.headers['x-satoken'] = satoken.split(';')[0].replace('satoken=', '');
                                }
                            }
                        });
                    }
                },
                // AI路由不设置代理，让前端处理
            },
        },
        // 打包配置
        build: {
            // 关闭 sorcemap 报错不会映射到源码
            sourcemap: false,
            // 打包大小超出 400kb 提示警告
            chunkSizeWarningLimit: 400,
            rollupOptions: {
                // 打包入口文件 根目录下的 index.html
                // 也就是项目从哪个文件开始打包
                input: {
                    index: fileURLToPath(new URL('./index.html', import.meta.url)),
                },
                // 静态资源分类打包
                output: {
                    format: 'esm',
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                },
            },
        },
        // 配置别名
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '#': fileURLToPath(new URL('./types', import.meta.url)),
            },
        },
    };
});