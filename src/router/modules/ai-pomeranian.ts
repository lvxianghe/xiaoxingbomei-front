import { RouteRecordRaw } from 'vue-router';

const pomeranianRoutes: RouteRecordRaw = {
  path: '/ai/pomeranian',
  name: 'AIPomeranian',
  component: () => import('@/views/ai/pomeranian/index.vue'),
  meta: {
    title: '小型博美',
    icon: 'Pet',
    requiresAuth: false,
    hideGridNav: true
  }
};

export default pomeranianRoutes; 