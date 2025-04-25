import { RouteRecordRaw } from 'vue-router';

const chatPDFRoutes: RouteRecordRaw = {
  path: '/ai/chat-pdf',
  name: 'AIChatPDF',
  component: () => import('@/views/ai/chat-pdf/index.vue'),
  meta: {
    title: 'ChatPDF',
    icon: 'Document',
    requiresAuth: false,
    hideGridNav: true
  }
};

export default chatPDFRoutes; 