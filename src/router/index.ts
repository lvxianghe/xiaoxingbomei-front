import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import aiRoutes from './modules/ai'
import pomeranianRoutes from './modules/ai-pomeranian'

// 配置路由
const routes: Array<RouteRecordRaw> = [
  // 默认路由重定向到AI页面
  {
    path: '/',
    redirect: '/ai'
  }
];

// 添加AI模块路由
routes.push(aiRoutes);
// 添加小型博美路由
routes.push(pomeranianRoutes);

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
      // 始终滚动到顶部
      return { top: 0 }
    },
});

// 路由前置守卫
router.beforeEach((to, _from, next) => {
    NProgress.start();
    // 设置页面标题
    document.title = `${to.meta.title || '小型博美'} - AI平台`;
        next();
});

router.afterEach((_to) => {
    try {
        NProgress.done();
    } catch (error) {
        console.error('路由afterEach处理出错:', error);
    }
});

export default router;
