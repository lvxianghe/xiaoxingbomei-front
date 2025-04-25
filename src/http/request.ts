import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import { getMessageInfo } from './status';

interface BaseResponse<T = any> {
    code: number | string;
    message: string;
    data: T;
    status?: number | string;
}

const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true // 确保所有请求都发送 cookie
});
// axios实例拦截请求
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 优先使用 localStorage 中的 satoken
        const satoken = localStorage.getItem('satoken');
        if (satoken) {
            // 添加到请求头
            config.headers['satoken'] = satoken;
            // 或者添加到 Cookie 头
            // config.headers['Cookie'] = `satoken=${satoken}`;
        } else {
            // 如果没有 satoken，尝试使用普通 token
            const token = localStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);
// axios实例拦截响应
service.interceptors.response.use(
    (response: AxiosResponse) => {
        // 从自定义头部中提取 satoken
        const satoken = response.headers['x-satoken'];
        if (satoken) {
            localStorage.setItem('satoken', satoken);
            console.log('Saved satoken to localStorage:', satoken);
        }
        
        if (response.status === 200) {
            return response.data;
        }
        ElMessage({
            message: getMessageInfo(response.status),
            type: 'error',
        });
        return response.data;
    },
    // 请求失败
    (error: any) => {
        const { response } = error;
        if (response) {
            ElMessage({
                message: getMessageInfo(response.status),
                type: 'error',
            });
            return Promise.reject(response.data);
        }
        ElMessage({
            message: '网络连接异常,请稍后再试!',
            type: 'error',
        });
    }
);

// 此处相当于二次响应拦截
// 为响应数据进行定制化处理
const requestInstance = <T = any>(config: AxiosRequestConfig): Promise<T> => {
    const conf = config;
    return new Promise((resolve, reject) => {
        service.request<any, AxiosResponse<BaseResponse>>(conf).then((res: AxiosResponse<BaseResponse>) => {
            const data = res.data; // 如果data.code为错误代码返回message信息
            if (data.code != 0) {
                ElMessage({
                    message: data.message,
                    type: 'error',
                });
                reject(data.message);
            } else {
                ElMessage({
                    message: data.message,
                    type: 'success',
                }); // 此处返回data信息 也就是 api 中配置好的 Response类型
                resolve(data.data as T);
            }
        });
    });
};
export function get<T = any, U = any>(config: AxiosRequestConfig, url: string, parms?: U): Promise<T> {
    return requestInstance({ ...config, url, method: 'GET', params: parms });
}
export function post<T = any, U = any>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
    return requestInstance({ ...config, url, method: 'POST', data: data });
}

export function put<T = any, U = any>(config: AxiosRequestConfig, url: string, parms?: U): Promise<T> {
    return requestInstance({ ...config, url, method: 'PUT', params: parms });
}
export function del<T = any, U = any>(config: AxiosRequestConfig, url: string, data: U): Promise<T> {
    return requestInstance({ ...config, url, method: 'DELETE', data: data });
}

// 一般的后端返回的数据结构
// {
//     'code': 1,
//     'message': '成功',
//     'data': {
//         'id': 1,
//         'name': '张三',
//         'age': 18,
//         'sex': 1,
//         'address': '北京市',
//         'createTime': '2021-08-30 15:49:16',
//         'updateTime': '2021-08-30 15:49:16',
//         'deleteTime': null,
//         'createBy': 1,
//         'updateBy': 1,
//     }

// }

export default service;
