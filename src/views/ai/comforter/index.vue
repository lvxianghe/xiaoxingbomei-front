<template>
  <div class="comforter-container">
    <!-- 返回按钮 -->
    <button class="back-button" @click="goBack">
      <el-icon><ArrowLeft /></el-icon>
      <span>返回</span>
    </button>

    <!-- 欢迎屏幕 - 仅在游戏未开始时显示 -->
    <div v-if="!gameStarted" class="welcome-screen">
      <div class="welcome-content">
        <div class="welcome-title">哄哄模拟器</div>
        <div class="welcome-desc">测试你的哄人技能！每个选择都会影响好感度</div>
        
        <form @submit.prevent="startGame">
          <div class="name-input">
            <label>请输入对方名字：</label>
            <el-input 
              v-model="partnerName" 
              placeholder="甜甜" 
              maxlength="10"
            ></el-input>
          </div>
          
          <button type="submit" class="start-button">
            开始游戏
          </button>
        </form>
      </div>
    </div>

    <!-- 游戏主屏幕 - 仅在游戏开始后显示 -->
    <div v-if="gameStarted" class="comforter-card">
      <!-- 上半部分：左右布局 -->
      <div class="game-main-content">
        <!-- 左侧：场景演绎区 -->
        <div class="left-column">
          <div class="scene-section">
            <div class="scene-header">
              <div class="scene-icon">🎬</div>
              <div class="scene-title">当前场景</div>
            </div>
            <div class="scene-description">
              {{ currentScenario.description.replace('Ta', partnerName) }}
            </div>
            <div class="affection-change" v-if="lastEffect !== null">
              <span v-if="lastEffect < 0" class="heart-broken">💔</span>
              <span v-else-if="lastEffect > 0" class="heart-gain">❤️</span>
              <span v-else class="heart-neutral">💭</span>
              
              <span class="points-change" :class="{
                'negative': lastEffect < 0,
                'positive': lastEffect > 0,
                'neutral': lastEffect === 0
              }">
                好感度 {{ lastEffect > 0 ? '+' + lastEffect : lastEffect }}
              </span>
              <span class="current-points">(当前{{ affectionPoints }}/{{ maxAffectionPoints }})</span>
            </div>
          </div>
        </div>
        
        <!-- 右侧：选项操作区 -->
        <div class="right-column">
          <div class="options-section">
            <div class="options-header">
              <div class="options-icon">🤔</div>
              <div class="options-title">选项</div>
            </div>
            <div class="options-container">
              <button 
                v-for="(option, index) in currentScenario.options" 
                :key="index"
                class="game-button"
                @click="selectOption(option)"
              >
                {{ option.text }}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 下半部分：居中布局 -->
      <div class="game-bottom-content">
        <!-- 状态监控区 - 优化布局 -->
        <div class="status-section">
          <div class="progress-container">
            <div class="hearts-display">❤️×{{ remainingChances }}次</div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${(affectionPoints / maxAffectionPoints) * 100}%` }"></div>
              <div class="progress-label">好感度</div>
              <div class="progress-number">{{ affectionPoints }}/{{ maxAffectionPoints }}</div>
            </div>
            <div class="restart-button-mini" @click="confirmRestart">
              <el-icon><Refresh /></el-icon>
              重新开始
            </div>
          </div>
        </div>

        <!-- 危险警示栏 -->
        <div class="warning-section" v-if="affectionPoints < 20">
          <div class="warning-icon">⚠️</div>
          <div class="warning-text">注意！好感度低于10将直接结束游戏！</div>
        </div>
      </div>
    </div>

    <!-- 重新开始确认对话框 -->
    <el-dialog v-model="showRestartDialog" title="确认重新开始" width="300px">
      <span>确定要重新开始游戏吗？当前进度将丢失。</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showRestartDialog = false">取消</el-button>
          <el-button type="primary" @click="restartGame">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.comforter-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f7 0%, #ffecf2 100%);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  position: relative; /* 确保可以定位返回按钮 */
}

/* 返回按钮样式 */
.back-button {
  position: fixed;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.9);
  color: #e84393;
  border: 1px solid #ffcad4;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(253, 121, 168, 0.1);
  
  &:hover {
    background: #fff;
    box-shadow: 0 4px 15px rgba(253, 121, 168, 0.2);
    transform: translateY(-2px);
  }
  
  .el-icon {
    font-size: 16px;
  }
}

/* 欢迎屏幕样式 */
.welcome-screen {
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(253, 121, 168, 0.15),
              0 5px 15px rgba(255, 182, 193, 0.2);
  padding: 30px;
  text-align: center;
  animation: fadeIn 0.5s ease;
  
  .welcome-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  
  .welcome-title {
    font-size: 28px;
    font-weight: 700;
    color: #e84393;
    margin-bottom: 10px;
  }
  
  .welcome-desc {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .name-input {
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    
    label {
      display: block;
      margin-bottom: 8px;
      font-size: 16px;
      color: #333;
    }
  }
  
  .start-button {
    background: linear-gradient(90deg, #fd79a8, #e84393);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(232, 67, 147, 0.3);
    }
  }
}

.comforter-card {
  width: 100%;
  max-width: 900px; /* 增加宽度以适应左右布局 */
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(253, 121, 168, 0.15),
              0 5px 15px rgba(255, 182, 193, 0.2);
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.5s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #fd79a8, #e84393);
    border-radius: 5px 5px 0 0;
  }
  
  /* 上半部分左右布局 */
  .game-main-content {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    
    /* 左侧列 - 场景 */
    .left-column {
      flex: 1;
      min-width: 0; /* 确保flex项可以收缩 */
    }
    
    /* 右侧列 - 选项 */
    .right-column {
      flex: 1;
      min-width: 0; /* 确保flex项可以收缩 */
    }
  }
  
  /* 下半部分居中布局 */
  .game-bottom-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding-top: 10px;
    border-top: 1px dashed #ffcad4;
    
    .status-section {
      width: 100%;
      max-width: 600px;
    }
    
    .warning-section {
      width: 100%;
      max-width: 600px;
    }
  }
}

// 场景演绎区样式
.scene-section {
  background: #fff9fb;
  border-radius: 12px;
  padding: 18px;
  position: relative;
  border: 1px solid rgba(253, 121, 168, 0.2);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .scene-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px dashed rgba(253, 121, 168, 0.3);
    
    .scene-icon {
      font-size: 22px;
      margin-right: 10px;
    }
    
    .scene-title {
      font-size: 18px;
      font-weight: 600;
      color: #e84393;
      text-shadow: 0 1px 2px rgba(253, 121, 168, 0.1);
    }
  }
  
  .scene-description {
    font-size: 16px;
    line-height: 1.6;
    color: #4a4a4a;
    margin-bottom: 14px;
    padding: 15px;
    background: rgba(253, 121, 168, 0.05);
    border-radius: 8px;
    transition: all 0.5s ease;
    flex-grow: 1;
  }
  
  .affection-change {
    display: flex;
    align-items: center;
    animation: slideUp 0.5s ease;
    
    .heart-broken, .heart-gain, .heart-neutral {
      font-size: 18px;
      margin-right: 6px;
    }
    
    .points-change {
      font-weight: 600;
      margin-right: 5px;
      
      &.negative {
        color: #e53e3e;
      }
      
      &.positive {
        color: #38a169;
      }
      
      &.neutral {
        color: #718096;
      }
    }
    
    .current-points {
      font-size: 14px;
      color: #666;
    }
  }
}

// 选项区域样式
.options-section {
  background: #fff9fb;
  border-radius: 12px;
  padding: 18px;
  position: relative;
  border: 1px solid rgba(253, 121, 168, 0.2);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .options-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px dashed rgba(253, 121, 168, 0.3);
    
    .options-icon {
      font-size: 22px;
      margin-right: 10px;
    }
    
    .options-title {
      font-size: 18px;
      font-weight: 600;
      color: #e84393;
      text-shadow: 0 1px 2px rgba(253, 121, 168, 0.1);
    }
  }
  
  .options-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-grow: 1;
  }
  
  .game-button {
    background: #fff;
    border: 1px solid rgba(253, 121, 168, 0.3);
    border-radius: 10px;
    padding: 14px 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    font-size: 15px;
    line-height: 1.5;
    color: #4a4a4a;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(253, 121, 168, 0.05);
    
    &:hover {
      background: linear-gradient(135deg, #fff, #fff5f7);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(253, 121, 168, 0.1);
      border-color: rgba(253, 121, 168, 0.5);
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background: linear-gradient(to bottom, #fd79a8, #e84393);
        border-radius: 2px;
      }
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(253, 121, 168, 0.1);
    }
    
    &.selected {
      background: #fff5f7;
      border-color: #fd79a8;
      font-weight: 500;
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 4px;
        background: linear-gradient(to bottom, #fd79a8, #e84393);
        border-radius: 2px;
      }
    }
  }
}

// 状态监控区样式
.status-section {
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  width: 100%;
  
  .progress-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    
    .hearts-display {
      white-space: nowrap;
      font-size: 16px;
      color: #e84393;
      font-weight: 600;
      min-width: 80px;
    }
    
    .progress-bar {
      flex: 1;
      height: 24px;
      background: rgba(253, 121, 168, 0.1);
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
      
      .progress-fill {
        position: absolute;
        height: 100%;
        background: linear-gradient(90deg, #fd79a8, #e84393);
        border-radius: 12px;
        transition: width 0.3s ease;
      }
      
      .progress-label {
        position: absolute;
        top: 0;
        left: 15px;
        height: 100%;
        display: flex;
        align-items: center;
        color: white;
        font-weight: 600;
        font-size: 13px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }
      
      .progress-number {
        position: absolute;
        top: 0;
        right: 15px;
        height: 100%;
        display: flex;
        align-items: center;
        color: white;
        font-weight: 600;
        font-size: 13px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }
    }
    
    .restart-button-mini {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: #fff5f7;
      border: 1px solid rgba(253, 121, 168, 0.3);
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      color: #e84393;
      cursor: pointer;
      transition: all 0.3s ease;
      white-space: nowrap;
      min-width: 85px;
      
      &:hover {
        background: linear-gradient(135deg, rgba(253, 121, 168, 0.1), rgba(232, 67, 147, 0.1));
        transform: translateY(-2px);
        box-shadow: 0 3px 10px rgba(253, 121, 168, 0.15);
      }
      
      &:active {
        transform: translateY(0);
      }
      
      .el-icon {
        font-size: 14px;
      }
    }
  }
}

// 危险警示栏样式
.warning-section {
  display: flex;
  align-items: center;
  background: #ffefef;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ffcccc;
  animation: warning-pulse 2s infinite;
  
  .warning-icon {
    font-size: 18px;
    margin-right: 10px;
  }
  
  .warning-text {
    color: #e53e3e;
    font-size: 14px;
    font-weight: 500;
  }
}

@keyframes warning-pulse {
  0% { border-color: #ffcccc; }
  50% { border-color: #ff6b6b; }
  100% { border-color: #ffcccc; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

// 响应式调整
@media (max-width: 768px) {
  .comforter-container {
    padding: 15px;
  }
  
  .comforter-card, .welcome-screen {
    padding: 18px;
    gap: 16px;
    
    // 小屏幕上改为垂直布局
    .game-main-content {
      flex-direction: column;
      gap: 15px;
    }
  }
  
  .scene-section {
    padding: 15px;
    
    .scene-header {
      margin-bottom: 10px;
      
      .scene-icon {
        font-size: 20px;
      }
      
      .scene-title {
        font-size: 16px;
      }
    }
    
    .scene-description {
      font-size: 15px;
      padding: 8px;
    }
  }
  
  .options-section {
    gap: 10px;
    
    .game-button {
      padding: 12px;
    }
  }
  
  .status-section {
    .progress-container {
      .hearts-display {
        font-size: 15px;
        min-width: 70px;
      }
      
      .progress-bar {
        .progress-label, .progress-number {
          font-size: 12px;
        }
      }
      
      .restart-button-mini {
        font-size: 12px;
        padding: 5px 10px;
        min-width: 75px;
      }
    }
  }
}

@media (max-width: 480px) {
  .comforter-card {
    max-width: 100%;
  }
  
  .game-bottom-content {
    .status-section {
      .progress-container {
        flex-wrap: wrap;
        gap: 10px 5px;
        
        .hearts-display {
          order: 1;
          min-width: 70px;
        }
        
        .progress-bar {
          order: 3;
          width: 100%;
          margin-top: 5px;
        }
        
        .restart-button-mini {
          order: 2;
          margin-left: auto;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Refresh } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

// 获取路由实例
const router = useRouter()

// 游戏状态
const gameStarted = ref(false)
const partnerName = ref('甜甜')
const affectionPoints = ref(25)
const maxAffectionPoints = ref(100)
const remainingChances = ref(4)
const lastEffect = ref(null)
const scenarioIndex = ref(0)
const showRestartDialog = ref(false)

// 添加全局键盘事件处理Enter键
const handleKeyDown = (event) => {
  // 当按下Enter键且游戏尚未开始时
  if (event.key === 'Enter' && !gameStarted.value) {
    // 阻止默认行为以防止表单自动提交
    event.preventDefault()
    // 调用开始游戏方法
    startGame()
  }
}

// 组件挂载和卸载时添加/移除事件监听器
onMounted(() => {
  // 监听全局键盘事件
  window.addEventListener('keydown', handleKeyDown)
  
  // 获取输入框元素并添加独立的事件监听
  const inputElement = document.querySelector('.name-input .el-input__inner')
  if (inputElement) {
    inputElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        startGame()
      }
    })
  }
})

onUnmounted(() => {
  // 移除全局事件监听器
  window.removeEventListener('keydown', handleKeyDown)
})

// 返回上一页或AI中心页面
const goBack = () => {
  if (gameStarted.value && affectionPoints.value > 0) {
    ElMessageBox.confirm('确定要退出游戏吗？当前进度将丢失。', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      router.push('/ai')
    }).catch(() => {})
  } else {
    router.push('/ai')
  }
}

// 场景数据
const scenarios = [
  {
    description: '你捧着两杯奶茶跑向约会地点，发现Ta正在路灯下反复看表',
    options: [
      { text: '上气不接下气解释公交抛锚', effect: -5 },
      { text: '笑着递上奶茶："给最可爱的宝贝~"', effect: 10 },
      { text: '从背后突然拥抱', effect: -15 },
      { text: '若无其事地走过去，淡定道："正好准时"', effect: 0 }
    ]
  },
  {
    description: '吃饭时，Ta突然问你："如果有一天我变胖了，你还会喜欢我吗？"',
    options: [
      { text: '"我爱的是你这个人，不是你的外表"', effect: 5 },
      { text: '"那我们一起健身，保持好身材"', effect: -10 },
      { text: '"胖了就胖了，我也不瘦啊"', effect: 0 },
      { text: '温柔地笑："那我就有更多的你可以抱了"', effect: 15 }
    ]
  },
  {
    description: 'Ta和好友聚会回来，跟你抱怨说今天某个朋友很烦人',
    options: [
      { text: '"别理Ta了，Ta一直都这样"', effect: -5 },
      { text: '"怎么了宝贝，发生什么事了？"', effect: 10 },
      { text: '"hmm"（心不在焉）', effect: -20 },
      { text: '"我给你做了你最爱吃的甜点，尝尝解解气"', effect: 15 }
    ]
  }
]

// 计算当前场景
const currentScenario = computed(() => {
  return scenarios[scenarioIndex.value % scenarios.length]
})

// 开始游戏
const startGame = () => {
  if (!partnerName.value.trim()) {
    ElMessage.warning('请输入对方的名字')
    return
  }
  
  gameStarted.value = true
  lastEffect.value = null
}

// 选择选项
const selectOption = (option) => {
  // 更新好感度
  lastEffect.value = option.effect
  affectionPoints.value = Math.max(0, Math.min(maxAffectionPoints.value, affectionPoints.value + option.effect))
  
  // 检查游戏是否结束
  if (affectionPoints.value <= 0) {
    ElMessageBox.alert(`游戏结束！${partnerName.value}对你的好感度降至0。`, '游戏结束', {
      confirmButtonText: '重新开始',
      callback: () => restartGame()
    })
    return
  }
  
  if (affectionPoints.value >= maxAffectionPoints.value) {
    ElMessageBox.alert(`恭喜！你成功获得了${partnerName.value}的满好感度！`, '游戏胜利', {
      confirmButtonText: '太棒了',
      type: 'success'
    })
    return
  }
  
  // 进入下一个场景，并添加过渡延迟
  setTimeout(() => {
    // 显示一个"进入下一场景"的提示
    ElMessage({
      message: '进入下一个场景...',
      type: 'info',
      duration: 1000
    })
    
    // 移动到下一个场景
    scenarioIndex.value++
    
    // 重置最后效果显示
    setTimeout(() => {
      lastEffect.value = null
    }, 500)
  }, 1500)
}

// 确认重新开始
const confirmRestart = () => {
  showRestartDialog.value = true
}

// 重新开始游戏
const restartGame = () => {
  showRestartDialog.value = false
  gameStarted.value = false
  affectionPoints.value = 25
  remainingChances.value = 4
  lastEffect.value = null
  scenarioIndex.value = 0
}
</script> 