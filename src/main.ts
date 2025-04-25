import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from '@/store'; // ++
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'highlight.js/styles/github-dark.css'
import './styles/reset.less';

const app = createApp(App);

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router);
app.use(pinia); // ++
app.use(ElementPlus);
app.mount('#app');