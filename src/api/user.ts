import { post, get } from '@/http/request';
import request from '@/http/request'

export type LoginRequest = {
    username: string;
    password: string;
};
// 刷新登录信息需要的参数
export type reLoginRequest = {
    accessToken: string;
};
export type LoginResponse = {
    username: string;
    roles: string[];
    accessToken: string;
};
// 定义的接口
export const userLogin = async (data?: LoginRequest) => {
    return post<LoginResponse>({}, '/login', data);
};

export const refreshUserInfo = async (data?: reLoginRequest) => {
    return post<LoginResponse>({}, '/getUserInfo', data);
};

// 用户登录接口
export function login(data: {
  loginId: string;
  password: string;
  loginType: number;
}) {
  console.log('Login API called with data:', data);
  
  return request({
    url: '/auth/login',
    method: 'post',
    data,
    withCredentials: true // 确保请求发送和接收 cookies
  })
}

// 其他用户相关接口...
export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

// 在现有代码中添加注册函数
export function register(data: any) {
  return request({
    url: '/auth/register',
    method: 'post',
    data
  })
}
