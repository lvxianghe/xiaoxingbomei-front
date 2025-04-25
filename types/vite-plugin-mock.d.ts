import { ViteMockOptions } from 'vite-plugin-mock';

// 扩展vite-plugin-mock的类型定义
declare module 'vite-plugin-mock' {
  interface ViteMockOptions {
    localEnabled?: boolean;
    prodEnabled?: boolean;
  }
} 