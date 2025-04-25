<template>
  <div class="app-wrapper">
    <!-- 导航栏已移除 -->
    
    <!-- 主内容区域 -->
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// 简化脚本
</script>

<style lang="less" scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
  padding: 0;
  background: #f5f7fa;
}
</style> 