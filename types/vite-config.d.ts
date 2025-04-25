import { ServerOptions } from 'vite';

// 扩展Vite的ServerOptions类型
declare module 'vite' {
  interface ServerOptions {
    https?: boolean | object;
  }
} 