<template>
  <!-- 一般vue项目都会使用vue-router -->
  <!-- 所以我们这里直接写一个 router-view -->
  <el-config-provider :locale="locale">
    <div id="app">
      <!-- 页面内容 -->
      <main class="app-content" :class="{ 'no-header': route.path.includes('/login') || route.path.includes('/register') || route.path === '/home' || route.path === '/' || route.path === '/digital-rain' || route.path === '/solar-system' || route.path === '/forbidden-city' || route.path === '/calendar' }">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </main>

      
      <!-- 错误处理模态框 -->
      <el-dialog
        v-model="errorDialogVisible"
        title="应用程序错误"
        width="30%"
        :before-close="resetError">
        <div class="error-content">
          <p>应用程序遇到了错误:</p>
          <pre>{{ errorMessage }}</pre>
          <p>您可以尝试重新加载页面或返回首页。</p>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="goToHome">返回首页</el-button>
            <el-button type="primary" @click="reloadPage">重新加载</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
// 导入需要的图标
import { HomeFilled, Promotion, ChatDotRound, Message, VideoPlay, Setting, Search } from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 不要导入GlobalGridNav

const locale = zhCn
const router = useRouter()
const route = useRoute()
const errorDialogVisible = ref(false)
const errorMessage = ref('')


// 全局错误处理
const handleGlobalError = (event) => {
  console.error('捕获到全局错误:', event)
  errorMessage.value = event.message || '未知错误'
  errorDialogVisible.value = true
  
  // 防止错误传播
  event.preventDefault()
  event.stopPropagation()
}

// 全局Promise错误处理
const handleUnhandledRejection = (event) => {
  console.error('捕获到未处理的Promise拒绝:', event)
  errorMessage.value = event.reason?.message || '未处理的Promise错误'
  errorDialogVisible.value = true
  
  // 防止错误传播
  event.preventDefault()
  event.stopPropagation()
}

// 生命周期挂载
onMounted(() => {
  // 添加全局错误处理
  window.addEventListener('error', handleGlobalError, true)
  window.addEventListener('unhandledrejection', handleUnhandledRejection)
})

// 生命周期卸载
onUnmounted(() => {
  // 移除全局错误处理
  window.removeEventListener('error', handleGlobalError, true)
  window.removeEventListener('unhandledrejection', handleUnhandledRejection)
})

// 重置错误状态
const resetError = () => {
  errorDialogVisible.value = false
  errorMessage.value = ''
}

// 返回首页
const goToHome = () => {
  resetError()
  router.push('/')
}

// 跳转到特定路径的方法
const navigateTo = (path: string) => {
  router.push(path)
}

// 重新加载页面
const reloadPage = () => {
  resetError()
  window.location.reload()
}
</script>

<style lang="less" scoped>
.app-container {
  /* ... 现有样式 ... */
  
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    
    .header-left {
      padding: 0 20px;
      
      .home-link {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: #6C7BFF;
        font-weight: 500;
        
        .el-icon {
          margin-right: 5px;
        }
        
        &:hover {
          color: #2CD9FF;
        }
      }
    }
    
    .nav-menu {
      display: flex;
      height: 100%;
      
      .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        height: 100%;
        min-width: 100px;
        cursor: pointer;
        transition: all 0.3s;
        position: relative;
        color: #606266;
        
        .el-icon {
          font-size: 24px;
          margin-bottom: 4px;
        }
        
        span {
          font-size: 14px;
        }
        
        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        &.active {
          color: #fff;
        }
        
        &.home {
          background: linear-gradient(135deg, #4B6EFF 0%, #2CD9FF 100%);
          &.active, &:hover {
            background: linear-gradient(135deg, #4B6EFF 0%, #2CD9FF 100%);
          }
        }
        
        &.redbook {
          background: linear-gradient(135deg, #FF4A6B 0%, #FF7CAD 100%);
          &.active, &:hover {
            background: linear-gradient(135deg, #FF4A6B 0%, #FF7CAD 100%);
          }
        }
        
        &.chatgpt {
          background: #2C3E50;
          &.active, &:hover {
            background: #2C3E50;
          }
        }
        
        &.wechat {
          background: #07C160;
          &.active, &:hover {
            background: #07C160;
          }
        }
        
        &.douyin {
          background: #333333;
          &.active, &:hover {
            background: #333333;
          }
        }
        
        &.admin {
          background: linear-gradient(135deg, #4B6EFF 0%, #2CD9FF 100%);
          &.active, &:hover {
            background: linear-gradient(135deg, #4B6EFF 0%, #2CD9FF 100%);
          }
        }
        
        &.search {
          background: linear-gradient(135deg, #13C2C2 0%, #5CDEDE 100%);
          &.active, &:hover {
            background: linear-gradient(135deg, #13C2C2 0%, #5CDEDE 100%);
          }
        }
      }
    }
    
    .header-right {
      padding: 0 20px;
    }
  }
  
  .app-content {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    
    &.no-header {
      /* 当没有顶部导航栏时，调整内容区域样式 */
      padding-top: 0;
      height: 100vh; /* 使内容区域占满整个视口高度 */
    }
  }
}

.error-content {
  text-align: center;
  
  pre {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    max-height: 200px;
    overflow: auto;
    margin: 10px 0;
    text-align: left;
    font-size: 12px;
  }
}
</style>