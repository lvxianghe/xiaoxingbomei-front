<template>
  <div class="ai-container">
    <div class="grid-layout">
      <!-- 小型博美模块 - 作为第一个AI入口 -->
      <div class="grid-item pomeranian" @click="navigateTo('/ai/pomeranian')">
        <div class="content">
          <div class="pomeranian-preview">
            <div class="crayon-border">
              <div class="star star1">★</div>
              <div class="star star2">★</div>
              <div class="star star3">★</div>
              <div class="dog-icon">🐶</div>
            </div>
          </div>
          <span>小型博美</span>
          <div class="description">智能AI助手</div>
        </div>
      </div>
      
      <!-- 哄哄模拟器模块 - 待开发 -->
      <div class="grid-item comforter coming-soon-item" @click="showModuleUnderDevelopment('更多AI功能')">
        <div class="content">
          <div class="comforter-icon">💕</div>
          <span>更多AI功能</span>
          <div class="description">持续开发中</div>
        </div>
      </div>
      
      <!-- 智能客服模块 -->
      <div class="grid-item customer-service" @click="showModuleUnderDevelopment('更多AI功能')">
        <div class="content">
          <div class="service-icon">🎭</div>
          <span>更多AI功能</span>
          <div class="description">持续开发中</div>
        </div>
      </div>
      
      <!-- ChatPDF模块 - 待开发 -->
      <div class="grid-item chat-pdf coming-soon-item" @click="showModuleUnderDevelopment('更多AI功能')">
        <div class="content">
          <div class="pdf-icon">📄</div>
          <span>更多AI功能</span>
          <div class="description">持续开发中</div>
        </div>
      </div>
      
      <!-- 更多即将推出模块 -->
      <div class="grid-item coming-soon">
        <div class="content">
          <div class="coming-soon-icon">🔮</div>
          <span>更多AI功能</span>
          <div class="description">持续开发中</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ai-container {
  min-height: 100vh;
  background: #f0f2f5;
  padding: 20px;

  .grid-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px);
    gap: 20px;
    max-width: 1400px;
    margin: 0 auto;

    .grid-item {
      border-radius: 24px;
      cursor: pointer;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.1);
        opacity: 0;
        transition: opacity 0.3s;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

        &::before {
          opacity: 1;
        }
      }

      &:active {
        transform: scale(0.98);
      }

      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        
        span {
          font-size: 20px;
          font-weight: 500;
        }

        .description {
          font-size: 14px;
          opacity: 0;
          margin-top: 8px;
          transform: translateY(20px);
          transition: all 0.3s;
        }
      }

      &:hover {
        .description {
          transform: translateY(0);
          opacity: 0.8;
        }
      }
    }

    // 小型博美模块 - 占据2x2的格子
    .pomeranian {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
      background: linear-gradient(135deg, #ffcce6 0%, #ffd6f1 100%);
      border: 4px solid #000;
      
      .content {
        position: relative;
        
        .pomeranian-preview {
          position: relative;
          width: 150px;
          height: 150px;
          margin-bottom: 10px;
          
          .crayon-border {
            width: 100%;
            height: 100%;
            border: 4px dashed #000;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background: #fff3f8;
            box-shadow: 0 0 0 8px #ffadd2, 0 0 0 12px #000;
            
            .star {
              position: absolute;
              color: #ff85c0;
              font-size: 24px;
              text-shadow: 2px 2px 0 #000;
              animation: twinkle 2s infinite alternate;
              
              &.star1 {
                top: 10px;
                left: 10px;
                animation-delay: 0s;
              }
              
              &.star2 {
                top: 10px;
                right: 10px;
                animation-delay: 0.3s;
              }
              
              &.star3 {
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                animation-delay: 0.6s;
              }
            }
            
            .dog-icon {
              font-size: 60px;
              filter: drop-shadow(3px 3px 0 #000);
              animation: bounce 2s infinite alternate;
            }
          }
        }
        
        span {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-weight: bold;
          font-size: 28px;
          color: #000;
          text-shadow: 2px 2px 0 #ff85c0;
        }
        
        .description {
          color: #000;
          opacity: 0.8;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-size: 16px;
        }
      }
      
      &:hover {
        .crayon-border {
          transform: rotate(3deg);
        }
        
        .dog-icon {
          animation: bounce 1s infinite alternate;
        }
      }
    }

    // 待开发模块样式
    .coming-soon {
      grid-column: 4 / 5;
      grid-row: 2 / 3;
      background: linear-gradient(135deg, #a7b4c7 0%, #c8d6e5 100%);
      border: 2px dashed #6c7a89;
      
      .content {
        .coming-soon-icon {
          font-size: 60px;
          margin-bottom: 16px;
          opacity: 0.8;
          animation: pulse 2s infinite alternate;
        }
        
        span {
          color: #2c3e50;
          font-size: 24px;
          font-weight: 500;
        }
        
        .description {
          color: #34495e;
        }
      }
    }
    
    // 哄哄模拟器模块样式 - 待开发状态
    .comforter {
      grid-column: 3 / 4;
      grid-row: 1 / 2;
      
      &.coming-soon-item {
        background: linear-gradient(135deg, #a7b4c7 0%, #c8d6e5 100%);
        border: 2px dashed #6c7a89;
      
      .content {
        .comforter-icon {
          font-size: 60px;
          margin-bottom: 16px;
            opacity: 0.8;
            animation: pulse 2s infinite alternate;
        }
        
        span {
            color: #2c3e50;
            font-size: 24px;
            font-weight: 500;
        }
        
        .description {
            color: #34495e;
          }
        }
      }
    }
    
    // 智能客服模块样式 - 待开发状态
    .customer-service {
      grid-column: 4 / 5;
      grid-row: 1 / 2;
      background: linear-gradient(135deg, #a7b4c7 0%, #c8d6e5 100%);
      border: 2px dashed #6c7a89;
      
      .content {
        .service-icon {
          font-size: 60px;
          margin-bottom: 16px;
          opacity: 0.8;
          animation: pulse 2s infinite alternate;
        }
        
        span {
          color: #2c3e50;
          font-size: 24px;
          font-weight: 500;
        }
        
        .description {
          color: #34495e;
        }
      }
    }
    
    // ChatPDF模块样式 - 待开发状态
    .chat-pdf {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
      
      &.coming-soon-item {
        background: linear-gradient(135deg, #a7b4c7 0%, #c8d6e5 100%);
        border: 2px dashed #6c7a89;
      
      .content {
        .pdf-icon {
          position: relative;
            font-size: 60px;
          margin-bottom: 16px;
            opacity: 0.8;
            animation: pulse 2s infinite alternate;
          
          &:after {
            content: '💬';
            position: absolute;
            font-size: 24px;
            bottom: -10px;
            right: -15px;
              opacity: 0.8;
          }
        }
        
        span {
            color: #2c3e50;
            font-size: 24px;
            font-weight: 500;
        }
        
        .description {
            color: #34495e;
        }
        }
      }
    }
  }
}

@keyframes twinkle {
  0% { opacity: 0.5; transform: scale(1); }
  100% { opacity: 1; transform: scale(1.2); }
}

@keyframes bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.05); opacity: 1; }
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
  100% { transform: scale(1.15); }
}

@keyframes floating {
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .ai-container .grid-layout {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    
    .pomeranian {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
    
    .comforter, .customer-service {
      grid-column: span 1;
      grid-row: auto;
    }
    
    .chat-pdf {
      grid-column: 1 / 3;
      grid-row: auto;
    }
    
    .coming-soon {
      grid-column: 1 / 3;
      grid-row: auto;
    }
  }
}

@media (max-width: 480px) {
  .ai-container .grid-layout {
    grid-template-columns: 1fr;
    
    .pomeranian, .coming-soon {
      grid-column: 1;
      grid-row: auto;
    }
  }
}
</style>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

// 导航到指定路径
const navigateTo = (path: string) => {
  try {
    console.log('导航到:', path)
    router.push(path)
  } catch (error) {
    console.error('导航错误:', error)
  }
}

// 显示模块正在开发中的提示
const showModuleUnderDevelopment = (moduleName: string) => {
  ElMessage({
    message: `${moduleName}功能正在开发中，敬请期待！`,
    type: 'info',
    duration: 3000
  })
}
</script> 