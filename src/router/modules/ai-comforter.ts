import { RouteRecordRaw } from 'vue-router';

const comforterRoutes: RouteRecordRaw = {
  path: '/ai/comforter',
  name: 'AIComforter',
  component: () => import('@/views/ai/comforter/index.vue'),
  meta: {
    title: '哄哄模拟器',
    icon: 'Connection',
    requiresAuth: false,
    hideGridNav: true
  }
};

export default comforterRoutes; 