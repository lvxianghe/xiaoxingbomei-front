/// <reference types="vite/client" />

interface ImportMetaEnv {
    // 我们每次添加完新的环境变量就在此添加一次ts类型
    // 这样我们就能在使用 import.meta.env 时获得ts语法提示
    readonly VITE_APP_API_BASEURL: string;
    readonly VITE_APP_USE_MOCK: string;
    readonly VITE_APP_MOCK_BASEURL: string;
    readonly VITE_APP_AI_API_URL: string; // AI API服务器URL
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}