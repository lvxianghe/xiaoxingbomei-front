import { RouteRecordRaw } from 'vue-router';

const aiRoutes: RouteRecordRaw = {
  path: '/ai',
  name: 'AI',
  component: () => import('@/views/ai/index.vue'),
  meta: {
    title: '大模型应用',
    icon: 'Connection',
    requiresAuth: false,
    // 不设置hideGridNav，让导航栏在AI中心显示
  }
};

export default aiRoutes; 