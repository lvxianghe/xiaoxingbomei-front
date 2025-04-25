import { defineStore } from 'pinia'
import { login, getUserInfo } from '@/api/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    token: localStorage.getItem('token') || ''
  }),
  
  actions: {
    // 登录
    async storeUserLogin(loginData: {username: string, password: string}) {
      try {
        const res = await login({
          loginId: loginData.username,
          password: loginData.password,
          loginType: 1
        })
        
        // 根据实际响应格式判断是否登录成功
        if (res && (res.code === "请求成功" || res.message === "登录成功")) {
          if (res.data) {
            this.token = res.data
            localStorage.setItem('token', res.data)
          }
          return res
        } else {
          throw new Error((res && res.message) || '登录失败')
        }
      } catch (error) {
        throw error
      }
    },
    
    // 设置用户信息
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
    },
    
    // 登出
    logout() {
      this.token = ''
      this.userInfo = null
      localStorage.removeItem('token')
    }
  }
}) 