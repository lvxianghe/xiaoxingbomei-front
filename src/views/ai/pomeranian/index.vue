<template>
  <div 
    class="chat-container"
    :class="[
      `theme-${currentTheme}`,
      isDarkMode ? 'dark-mode' : '',
      `font-size-${currentFontSettings.size}`,
      `font-spacing-${currentFontSettings.spacing}`,
      `font-family-${currentFontSettings.family}`
    ]"
  >
    <!-- 侧边栏切换按钮 - 当侧边栏折叠时显示 -->
    <div class="sidebar-toggle" v-if="sidebarCollapsed" @click="toggleSidebar" title="展开侧边栏">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18l6-6-6-6"></path>
      </svg>
    </div>
    
    <!-- 侧边栏 -->
    <div class="sidebar" :class="{'sidebar-collapsed': sidebarCollapsed}">
      <div class="sidebar-header">
        <div class="logo">
          <div class="logo-icon">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#333333" stroke="none">
                <path d="M2330 5110 c-192 -19 -372 -56 -550 -112 -101 -32 -107 -33 -170 -21
                -147 28 -348 7 -490 -51 -264 -108 -459 -334 -531 -614 -10 -41 -19 -89 -19
                -106 0 -23 -18 -56 -66 -121 -643 -879 -672 -2055 -72 -2947 135 -202 343
                -428 533 -580 600 -480 1387 -662 2150 -498 228 50 562 179 584 226 16 35 14
                48 -10 78 -28 36 -58 34 -169 -15 -361 -156 -780 -224 -1165 -189 -470 44
                -875 200 -1254 483 -123 92 -366 335 -458 458 -196 262 -336 547 -412 841
                -165 638 -71 1296 266 1859 l77 130 26 -83 c34 -107 59 -154 107 -200 56 -55
                115 -78 199 -78 87 0 155 31 213 96 75 85 90 188 45 315 -21 60 -25 86 -21
                140 7 104 42 164 150 255 43 36 48 68 16 108 -27 34 -63 34 -120 -2 -165 -105
                -243 -352 -170 -542 26 -69 27 -116 1 -157 -27 -46 -72 -66 -132 -61 -69 7
                -99 39 -132 140 -117 352 30 722 353 892 119 62 199 81 346 81 117 0 139 -3
                219 -29 100 -33 140 -61 156 -112 17 -51 5 -99 -35 -139 -47 -46 -90 -53 -161
                -26 -70 26 -108 27 -134 1 -26 -26 -26 -81 -2 -103 10 -10 52 -29 93 -43 57
                -20 86 -25 126 -21 106 11 192 69 241 162 21 41 26 63 25 125 0 84 -16 130
                -64 185 -18 20 -30 37 -28 39 7 7 174 45 264 61 228 40 521 44 746 10 110 -17
                318 -61 327 -70 3 -3 -6 -18 -20 -33 -101 -108 -97 -291 10 -395 84 -82 207
                -104 329 -58 52 20 76 23 140 19 90 -5 143 -28 202 -87 88 -88 112 -211 67
                -340 -44 -125 -30 -227 40 -310 56 -65 113 -93 200 -99 166 -11 273 85 330
                294 l17 65 47 -73 c356 -561 467 -1246 305 -1888 -142 -564 -495 -1071 -976
                -1400 -48 -33 -89 -67 -93 -76 -19 -50 16 -104 68 -104 60 0 310 195 501 391
                203 209 338 400 465 661 415 849 326 1855 -234 2628 -55 77 -76 113 -76 136 0
                43 -33 169 -65 245 -62 147 -199 311 -337 399 -177 115 -433 166 -638 127 -63
                -12 -68 -12 -170 21 -124 40 -275 75 -420 97 -124 18 -469 27 -590 15z"/>
                <path d="M1735 2940 c-77 -40 -80 -48 -83 -282 -3 -230 0 -245 61 -292 49 -37
                102 -42 156 -14 83 43 86 51 89 286 3 203 3 208 -20 241 -51 76 -130 99 -203
                61z"/>
                <path d="M3245 2936 c-68 -42 -78 -70 -83 -233 -3 -78 -1 -172 3 -210 6 -62
                11 -71 49 -109 53 -53 105 -64 169 -36 24 11 55 35 68 53 24 33 24 38 24 246
                0 198 -1 213 -21 239 -54 73 -139 94 -209 50z"/>
                <path d="M2479 2295 c-25 -8 -66 -33 -91 -55 -144 -126 -116 -354 54 -441 21
                -11 38 -24 38 -29 0 -22 -43 -100 -76 -138 -19 -23 -60 -53 -92 -69 -48 -24
                -70 -28 -137 -28 -67 0 -89 4 -137 28 -96 47 -161 142 -174 254 -12 95 -75
                133 -129 78 -30 -29 -32 -73 -10 -160 56 -212 241 -355 461 -355 48 0 61 -4
                97 -34 165 -133 377 -137 546 -10 54 40 63 44 118 44 110 0 227 44 312 117 84
                71 149 207 152 318 2 52 -1 61 -25 82 -59 50 -110 13 -126 -91 -18 -114 -72
                -190 -173 -243 -71 -37 -187 -39 -262 -5 -63 29 -120 83 -151 144 -31 61 -30
                74 6 93 195 101 202 375 12 478 -62 34 -148 43 -213 22z m189 -817 c23 -18 42
                -35 42 -39 0 -15 -98 -44 -150 -44 -52 0 -150 29 -150 44 0 4 13 14 29 24 16
                9 51 41 78 70 l48 53 30 -37 c17 -21 49 -53 73 -71z"/>
              </g>
            </svg>
          </div>
          <span>小型博美</span>
        </div>
        <div class="header-buttons">
          <button class="exit-btn" @click="goToHome" title="返回首页">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>
          <button class="collapse-btn" @click="toggleSidebar" :title="sidebarCollapsed ? '展开侧边栏' : '收起侧边栏'">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6" v-if="!sidebarCollapsed"></path>
              <path d="M9 18l6-6-6-6" v-else></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="sidebar-actions">
        <button class="new-chat-btn" @click="startNewChat">
          <span class="btn-icon">+</span> 新建对话
        </button>
      </div>
      <div class="history-list">
        <div class="history-item" v-for="(item, index) in chatHistory" :key="index" @click="loadConversation(index)">
          <div class="history-content">
            <div class="history-title">{{ item.title }}</div>
            <div class="history-meta">
              <span class="history-time">{{ item.time }}</span>
              <div class="history-tags" v-if="item.tags && item.tags.length > 0">
                <span 
                  v-for="(tag, tagIndex) in limitTags(item.tags)" 
                  :key="tagIndex" 
                  class="history-tag"
                  :style="{ backgroundColor: getTagColor(tag) }"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
          <div class="history-actions">
            <button class="history-action-btn tag-btn" @click.stop="openTagSelector(index)" title="编辑会话">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
            <button class="history-action-btn export-btn" @click.stop="openExportMenu(index)" title="导出对话">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
            <button class="history-action-btn delete-history-btn" @click.stop="deleteHistory(index)" title="删除此对话">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="sidebar-footer">
        <button class="settings-btn" @click="openThemeSettings">
          <span class="btn-icon">⚙️</span> 个性化设置
        </button>
        <button class="profile-btn" @click="showToast('个人信息功能开发中')">
          <span class="btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </span>
          个人信息
        </button>
      </div>
    </div>
    
    <!-- 主内容区 -->
    <div class="main-content" :class="{'full-width': !showSidebar}">
      <!-- 聊天内容容器 -->
      <div 
        class="chat-content" 
        ref="chatContentRef"
        @scroll="handleScroll"
      >
        <!-- 欢迎信息 -->
        <div v-if="messages.length === 0" class="welcome-container">
          <div class="bot-avatar">
            <img src="/icons/pomeranian.svg" alt="小型博美" />
          </div>
          <div class="welcome-title">我是 小型博美, 很高兴见到你!</div>
          <div class="welcome-subtitle">我可以帮你写代码、读文件、写作各种创意内容，请把你的任务交给我吧~</div>
        </div>
        
        <!-- 消息列表 -->
        <div class="message-container" v-else>
          <div v-for="(message, index) in messages" :key="index" 
               :class="['message-item', message.role === 'user' ? 'user-message' : 'bot-message']">
            <div class="message-avatar">
              {{ message.role === 'user' ? '👤' : '🤖' }}
            </div>
            <div class="message-content">
              <!-- 思考内容区 -->
              <div v-if="message.thinking" class="message-thinking">
                <div class="thinking-header">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="16"></line>
                  </svg>
                  <span>思考过程</span>
                </div>
                <div class="thinking-content markdown-body" v-html="renderMarkdown(message.thinking)"></div>
              </div>
              <!-- 消息内容区 -->
              <div class="message-text markdown-body" v-html="renderMarkdown(message.content)"></div>
              <div class="message-time">{{ message.time }}</div>
            </div>
          </div>
          <div class="typing-indicator" v-if="isTyping">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
          </div>
        </div>
      </div>
      
      <!-- 激活的系统提示词显示区域 -->
      <div class="active-prompt-container" v-if="activeSystemPrompt">
        <div class="active-prompt-badge">
          <div class="active-prompt-header">
            <div class="active-prompt-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <div class="prompt-title-wrapper">
                <div class="prompt-label-row">
                  <span class="prompt-title-label">系统提示词</span>
                  <button class="active-prompt-close" @click="clearActiveSystemPrompt">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <span class="active-prompt-title" :title="activeSystemPrompt.name">{{ activeSystemPrompt.name }}</span>
                <div class="prompt-actions-row">
                  <div class="active-prompt-category" :style="{ backgroundColor: getPromptCategoryColor(activeSystemPrompt.category) }">
                    {{ getCategoryLabel(activeSystemPrompt.category) }}
                  </div>
                  <div v-if="activeSystemPrompt.functionToolId" class="active-prompt-tool-id" title="功能工具ID">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                    <span>{{ activeSystemPrompt.functionToolId }}</span>
                  </div>
                  <button class="active-prompt-toggle" @click="showActivePromptBadge = !showActivePromptBadge">
                    <span>{{ showActivePromptBadge ? '收起' : '展开' }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9" v-if="!showActivePromptBadge"></polyline>
                      <polyline points="18 15 12 9 6 15" v-else></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="active-prompt-content" v-if="showActivePromptBadge">
            <pre class="active-prompt-text">{{ activeSystemPrompt.content }}</pre>
          </div>
        </div>

      </div>
      <!-- 中央输入区域 -->
      <div class="chat-input-wrapper" :class="{
        'with-messages': messages.length > 0,
        'sidebar-expanded': !sidebarCollapsed
      }">
        <div class="chat-input-area">
          <div class="mode-selector-inner">
            <button class="mode-btn deep-think-btn" @click="isDeepThinking = !isDeepThinking" :class="{ 'active': isDeepThinking }" title="流式输出">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 10 10 0 0 0 0-18z"></path>
                <path d="M12 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 1 0 0-5"></path>
              </svg>
              <span>流式输出</span>
            </button>
            <button class="mode-btn web-search-btn" @click="showToast('联网搜索功能开发中')" title="联网搜索">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>联网搜索</span>
            </button>
            <button class="mode-btn cloud-model-btn" @click="useCloudModel = !useCloudModel" :class="{ 'active': useCloudModel }" title="云端大模型">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
              <span>云端大模型</span>
            </button>
          </div>
          
          <div class="input-row">
            <textarea 
              v-model="userInput" 
              class="chat-input" 
              placeholder="给 小型博美 发送消息" 
              @keydown.enter.prevent="sendMessage"
              rows="1"
              ref="inputRef"
            ></textarea>
            
            <div class="input-tools">
              <!-- 模型切换按钮 -->
              <button class="tool-btn model-switch-btn" @click="openModelSelector" title="模型切换">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </button>
              <button class="tool-btn prompt-library-btn" @click="openPromptLibrary" title="提示词库">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </button>
              <button class="tool-btn upload-btn" @click="openFileManager" title="管理文件">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </button>
              <button class="send-btn" @click="sendMessage" :disabled="!userInput.trim()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Toast 消息提示 -->
    <div class="toast-container" v-if="toast.show" :class="{ 'toast-show': toast.show }">
      <div class="toast-message">{{ toast.message }}</div>
    </div>
    
    <!-- 标签选择器弹出层 -->
    <div class="modal-overlay" v-if="showTagSelector" @mousedown="handleModalOverlayMouseDown" @mouseup="handleModalOverlayMouseUp">
      <div class="modal-container tag-selector" @click.stop>
        <div class="modal-header">
          <h3>编辑会话</h3>
          <button class="modal-close" @click="showTagSelector = false">×</button>
        </div>
        <div class="modal-body">
          <!-- 添加会话标题编辑 -->
          <div class="form-group mb-4">
            <label for="chatTitle" class="form-label mb-2 font-medium text-gray-700">会话标题</label>
            <input 
              type="text" 
              id="chatTitle" 
              v-model="editingChatTitle" 
              class="title-input" 
              placeholder="请输入会话标题"
            />
          </div>
          
          <div class="form-group mb-4">
            <label class="form-label mb-2 font-medium text-gray-700">选择标签</label>
            <div class="tags-container">
              <div 
                v-for="tag in availableTags" 
                :key="tag.id" 
                class="tag-item"
                :class="{ selected: isTagSelected(tag.name) }"
                @click="toggleTag(tag.name)"
                :style="{ borderColor: tag.color }"
              >
                <span class="tag-color" :style="{ backgroundColor: tag.color }"></span>
                <span class="tag-name">{{ tag.name }}</span>
                <span class="tag-check" v-if="isTagSelected(tag.name)">✓</span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="showTagSelector = false">取消</button>
          <button class="confirm-btn" @click="saveTagsToChat">保存</button>
        </div>
      </div>
    </div>
    
    <!-- 导出菜单弹出层 -->
    <div class="modal-overlay" v-if="showExportMenu" @mousedown="handleModalOverlayMouseDown" @mouseup="handleExportMenuOverlayMouseUp">
      <div class="modal-container export-menu" @click.stop>
        <div class="modal-header">
          <h3>导出对话</h3>
          <button class="modal-close" @click="showExportMenu = false">×</button>
        </div>
        <div class="modal-body">
          <div class="export-options">
            <div 
              v-for="format in exportFormats" 
              :key="format.id" 
              class="export-option"
              @click="exportConversation(format.id)"
            >
              <span class="export-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </span>
              <span class="export-format">{{ format.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 文件管理器弹出层 -->
    <div class="modal-overlay" v-if="showFileManager" @mousedown="handleModalOverlayMouseDown" @mouseup="handleFileManagerOverlayMouseUp">
      <div class="modal-container file-manager" @click.stop style="max-width: 700px; width: 90%;">
        <div class="modal-header">
          <h3>文件管理</h3>
          <button class="modal-close" @click="showFileManager = false">×</button>
        </div>
        <div class="modal-body">
          <div class="file-manager-toolbar">
            <div class="file-search">
              <input 
                type="text" 
                v-model="fileSearchQuery" 
                placeholder="搜索文件..." 
                class="file-search-input"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div class="file-filters">
              <button 
                :class="['filter-btn', currentFilter === 'all' ? 'active' : '']" 
                @click="currentFilter = 'all'"
              >
                全部
              </button>
              <button 
                :class="['filter-btn', currentFilter === 'accessible' ? 'active' : '']" 
                @click="currentFilter = 'accessible'"
              >
                AI可访问
              </button>
              <button 
                :class="['filter-btn', currentFilter === 'restricted' ? 'active' : '']" 
                @click="currentFilter = 'restricted'"
              >
                AI受限
              </button>
            </div>
            <button class="upload-file-btn" @click="openUploadModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              上传文件
            </button>
          </div>
          
          <div class="files-container">
            <div 
              v-for="file in filteredFiles" 
              :key="file.id" 
              :class="['file-item', selectedFile === file.id ? 'selected' : '']"
              @click="selectFile(file.id)"
            >
              <div class="file-icon">
                <svg v-if="file.type === 'pdf'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <rect x="8" y="12" width="8" height="2" rx="1"></rect>
                  <rect x="8" y="16" width="8" height="2" rx="1"></rect>
                </svg>
                <svg v-else-if="file.type === 'docx'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4285F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <svg v-else-if="file.type === 'xlsx'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34A853" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
              </div>
              <div class="file-details">
                <div class="file-name" :class="{ 'restricted': !file.aiAccessible }">
                  {{ file.name }}
                  <span v-if="!file.aiAccessible" class="restricted-badge">AI受限</span>
                </div>
                <div class="file-meta">
                  <span class="file-size">{{ formatFileSize(file.size) }}</span>
                  <span class="file-date">{{ file.uploadTime }}</span>
                </div>
                <div class="file-description">{{ file.description || '无描述' }}</div>
              </div>
              <div class="file-actions">
                <button class="file-action-btn toggle-access" @click.stop="toggleAccess(file.id)" :title="file.aiAccessible ? '设为AI受限' : '允许AI访问'">
                  <svg v-if="file.aiAccessible" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    <line x1="2" y1="2" x2="22" y2="22"></line>
                  </svg>
                </button>
                <button class="file-action-btn delete-file" @click.stop="deleteFile(file.id)" title="删除文件">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="no-files" v-if="filteredFiles.length === 0">
              没有匹配的文件
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="showFileManager = false">关闭</button>
        </div>
      </div>
    </div>
    
    <!-- 文件上传模态框 -->
    <div class="modal-overlay" v-if="showFileUploadModal" @mousedown="handleModalOverlayMouseDown" @mouseup="handleFileUploadOverlayMouseUp">
      <div class="modal-container file-upload-modal" @click.stop>
        <div class="modal-header">
          <h3>上传文件</h3>
          <button class="modal-close" @click="showFileUploadModal = false">×</button>
        </div>
        <div class="modal-body">
          <div class="file-upload-area">
            <div class="upload-dropzone">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <p>点击或拖拽文件至此处上传</p>
              <span class="upload-formats">支持的格式: PDF, Word, Excel, TXT</span>
            </div>
            
            <div class="upload-form">
              <div class="form-group">
                <label for="file-name">文件名称</label>
                <input type="text" id="file-name" v-model="newFile.name" placeholder="请输入文件名称" />
              </div>
              <div class="form-group">
                <label for="file-description">文件描述</label>
                <textarea id="file-description" v-model="newFile.description" placeholder="请输入文件描述（可选）" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="newFile.aiAccessible" />
                  允许AI访问该文件内容
                  <span class="hint">选中后，小型博美将可以读取和分析该文件内容</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="showFileUploadModal = false">取消</button>
          <button class="confirm-btn" @click="uploadFile">上传</button>
        </div>
      </div>
    </div>
    
    <!-- 主题设置弹出窗口 -->
    <div class="modal-overlay" v-if="showThemeSettings" @mousedown="handleModalOverlayMouseDown" @mouseup="handleThemeSettingsOverlayMouseUp">
      <div class="modal-container theme-settings" @click.stop style="max-width: 860px; width: 90%;">
        <div class="modal-header">
          <h3>个性化设置</h3>
          <button class="modal-close" @click="showThemeSettings = false">×</button>
        </div>
        <div class="modal-body">
          <div class="settings-layout">
            <div class="settings-column">
              <div class="theme-section">
                <div class="section-row">
                  <h4 class="section-title">主题风格</h4>
                  <div class="theme-options">
                    <div 
                      v-for="theme in themeOptions" 
                      :key="theme.id"
                      :class="['theme-option', currentTheme === theme.id ? 'selected' : '']"
                      @click="setTheme(theme.id)"
                    >
                      <div class="theme-preview" :style="{ background: theme.preview }"></div>
                      <div class="theme-name">{{ theme.name }}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="theme-section">
                <div class="section-row">
                  <h4 class="section-title">明暗模式</h4>
                  <div class="mode-toggle">
                    <button 
                      :class="['mode-btn', !isDarkMode ? 'active' : '']" 
                      @click="setDarkMode(false)"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                      </svg>
                      <span>浅色</span>
                    </button>
                    <button 
                      :class="['mode-btn', isDarkMode ? 'active' : '']" 
                      @click="setDarkMode(true)"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                      <span>深色</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div class="theme-section">
                <div class="font-settings">
                  <div class="font-setting section-row">
                    <span class="setting-label">字体大小</span>
                    <div class="setting-options">
                      <button 
                        :class="['option-btn', currentFontSettings.size === 'small' ? 'active' : '']"
                        @click="setFontSize('small')"
                      >
                        小
                      </button>
                      <button 
                        :class="['option-btn', currentFontSettings.size === 'medium' ? 'active' : '']"
                        @click="setFontSize('medium')"
                      >
                        中
                      </button>
                      <button 
                        :class="['option-btn', currentFontSettings.size === 'large' ? 'active' : '']"
                        @click="setFontSize('large')"
                      >
                        大
                      </button>
                    </div>
                  </div>
                  
                  <div class="font-setting section-row">
                    <span class="setting-label">字体间距</span>
                    <div class="setting-options">
                      <button 
                        :class="['option-btn', currentFontSettings.spacing === 'compact' ? 'active' : '']"
                        @click="setFontSpacing('compact')"
                      >
                        紧凑
                      </button>
                      <button 
                        :class="['option-btn', currentFontSettings.spacing === 'normal' ? 'active' : '']"
                        @click="setFontSpacing('normal')"
                      >
                        标准
                      </button>
                      <button 
                        :class="['option-btn', currentFontSettings.spacing === 'relaxed' ? 'active' : '']"
                        @click="setFontSpacing('relaxed')"
                      >
                        宽松
                      </button>
                    </div>
                  </div>
                  
                  <div class="font-setting section-row">
                    <span class="setting-label">字体风格</span>
                    <div class="setting-options">
                      <button 
                        :class="['option-btn', currentFontSettings.family === 'default' ? 'active' : '']"
                        @click="setFontFamily('default')"
                      >
                        默认
                      </button>
                      <button 
                        :class="['option-btn', currentFontSettings.family === 'serif' ? 'active' : '']"
                        @click="setFontFamily('serif')"
                      >
                        衬线
                      </button>
                      <button 
                        :class="['option-btn', currentFontSettings.family === 'mono' ? 'active' : '']"
                        @click="setFontFamily('mono')"
                      >
                        等宽
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="settings-column">
              <div class="theme-preview-section">
                <h4 class="section-title">预览效果</h4>
                <div 
                  class="preview-container"
                  :class="[
                    `theme-${currentTheme}`, 
                    isDarkMode ? 'dark-mode' : '',
                    `font-size-${currentFontSettings.size}`,
                    `font-spacing-${currentFontSettings.spacing}`,
                    `font-family-${currentFontSettings.family}`
                  ]"
                >
                  <div class="preview-header">
                    <div class="preview-logo">小型博美</div>
                    <div class="preview-controls"></div>
                  </div>
                  <div class="preview-message user">您好，请问如何优化我的提示词？</div>
                  <div class="preview-message bot">
                    要优化提示词，可以考虑以下几点：使用清晰具体的指示、提供上下文信息、设定合适的角色和格式要求、分步骤引导回答。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="resetThemeSettings">重置</button>
          <button class="confirm-btn" @click="applyThemeSettings">应用</button>
        </div>
      </div>
    </div>
    
    <!-- 提示词库弹出层 -->
    <div class="modal-overlay" v-if="showPromptLibrary" @mousedown="handleModalOverlayMouseDown" @mouseup="handlePromptLibraryOverlayMouseUp">
      <div class="modal-container prompt-library" @click.stop style="max-width: 900px; width: 90%; max-height: 80vh;">
        <div class="modal-header">
          <h3>系统提示词库</h3>
          <button class="modal-close" @click="showPromptLibrary = false">×</button>
        </div>
        <div class="modal-body" style="max-height: calc(80vh - 120px); overflow-y: auto;">
          <div class="prompt-library-toolbar">
            <div class="prompt-search">
              <input 
                type="text" 
                v-model="promptSearchQuery" 
                placeholder="搜索提示词..." 
                class="prompt-search-input"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="search-icon">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div class="prompt-filters">
              <button 
                :class="['filter-btn', currentPromptFilter === 'all' ? 'active' : '']" 
                @click="currentPromptFilter = 'all'"
              >
                全部
              </button>
              <button 
                :class="['filter-btn', currentPromptFilter === 'writing' ? 'active' : '']" 
                @click="currentPromptFilter = 'writing'"
              >
                写作
              </button>
              <button 
                :class="['filter-btn', currentPromptFilter === 'coding' ? 'active' : '']" 
                @click="currentPromptFilter = 'coding'"
              >
                编程
              </button>
              <button 
                :class="['filter-btn', currentPromptFilter === 'analysis' ? 'active' : '']" 
                @click="currentPromptFilter = 'analysis'"
              >
                分析
              </button>
              <button 
                :class="['filter-btn', currentPromptFilter === 'creativity' ? 'active' : '']" 
                @click="currentPromptFilter = 'creativity'"
              >
                创意
              </button>
              <button 
                :class="['filter-btn', currentPromptFilter === 'education' ? 'active' : '']" 
                @click="currentPromptFilter = 'education'"
              >
                教育
              </button>
            </div>
            <button class="add-prompt-btn" @click="openAddPromptModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              新增提示词
            </button>
          </div>
          
          <div class="prompts-container">
            <div class="prompts-grid">
              <div 
                v-for="prompt in filteredPrompts" 
                :key="prompt.id" 
                class="prompt-card"
                :style="{ borderColor: getPromptCategoryColor(prompt.category) }"
                @mouseover="(event) => showPromptPreview(prompt, event)"
                @mouseleave="hidePromptPreview()"
              >
                <div class="prompt-card-header" :style="{ backgroundColor: getPromptCategoryColor(prompt.category) }">
                  <span class="prompt-name">{{ prompt.name }}</span>
                  <div class="prompt-category-badge">{{ getCategoryLabel(prompt.category) }}</div>
                </div>
                <div class="prompt-card-body">
                  <div class="prompt-description">{{ prompt.description }}</div>
                  <div v-if="prompt.functionToolId" class="prompt-tool-id">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                    <span>{{ prompt.functionToolId }}</span>
                  </div>
                  <div class="prompt-tags">
                    <span v-for="(tag, index) in prompt.tags.slice(0, 3)" :key="index" class="prompt-tag">
                      {{ tag }}
                    </span>
                    <span v-if="prompt.tags.length > 3" class="prompt-tag-more">+{{ prompt.tags.length - 3 }}</span>
                  </div>
                </div>
                <div class="prompt-card-footer">
                  <div class="prompt-actions">
                    <button class="prompt-action-btn copy-btn" @click.stop="copyPromptToInput(prompt)" title="设置为系统提示词">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                      </svg>
                    </button>
                    <button class="prompt-action-btn edit-btn" @click.stop="editPrompt(prompt)" title="编辑提示词">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button class="prompt-action-btn delete-btn" @click.stop="deletePrompt(prompt.id)" title="删除提示词">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="no-prompts" v-if="filteredPrompts.length === 0">
              没有匹配的提示词
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 提示词预览提示 -->
    <div class="prompt-preview-tooltip" v-if="showPreview" :style="previewPosition">
      <div class="preview-header">内容预览</div>
      <div class="preview-content">{{ previewContent }}</div>
    </div>
    
    <!-- 新增/编辑提示词弹出层 -->
    <div class="modal-overlay" v-if="showPromptModal" @mousedown="handleModalOverlayMouseDown" @mouseup="handlePromptModalOverlayMouseUp">
      <div class="modal-container prompt-modal" @click.stop>
        <div class="modal-header">
          <h3>{{ isEditingPrompt ? '编辑提示词' : '新增提示词' }}</h3>
          <button class="modal-close" @click="showPromptModal = false">×</button>
        </div>
        <div class="modal-body">
          <div class="prompt-form">
            <div class="form-group">
              <label for="promptName">提示词名称</label>
              <input type="text" id="promptName" v-model="editingPrompt.name" placeholder="输入提示词名称">
            </div>
            
            <div class="form-group">
              <label for="promptCategory">类型</label>
              <select id="promptCategory" v-model="editingPrompt.category">
                <option value="writing">写作</option>
                <option value="coding">编程</option>
                <option value="analysis">分析</option>
                <option value="creativity">创意</option>
                <option value="education">教育</option>
                <option value="other">其他</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="promptDescription">简短描述</label>
              <input type="text" id="promptDescription" v-model="editingPrompt.description" placeholder="简短描述此提示词的用途">
            </div>
            
            <div class="form-group">
              <label for="promptTags">标签 (用逗号分隔)</label>
              <input type="text" id="promptTags" v-model="promptTagsInput" placeholder="例如: 专业,报告,工作">
            </div>
            
            <div class="form-group">
              <label for="functionToolId">功能工具ID</label>
              <input type="text" id="functionToolId" v-model="editingPrompt.functionToolId" placeholder="输入功能工具ID（可选）">
              <div class="field-hint">用于关联特定的功能工具，如果不需要可以留空</div>
            </div>
            
            <div class="form-group">
              <label for="promptContent">提示词内容</label>
              
              <textarea 
                id="promptContent" 
                v-model="editingPrompt.content" 
                placeholder="输入提示词内容..." 
                rows="8"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="showPromptModal = false">取消</button>
          <button class="confirm-btn" @click="savePrompt">保存</button>
        </div>
      </div>
    </div>
    
    <!-- 模型选择器弹出层 -->
    <div class="modal-overlay" v-if="showModelSelector" @mousedown="handleModalOverlayMouseDown" @mouseup="handleModelSelectorOverlayMouseUp">
      <div class="modal-container model-selector" @click.stop style="max-width: 600px; width: 90%;">
        <div class="modal-header">
          <h3>选择模型</h3>
          <button class="modal-close" @click="showModelSelector = false">×</button>
        </div>
        <div class="modal-body">
          <div class="models-container">
            <div 
              v-for="model in availableModels" 
              :key="model.id" 
              :class="['model-item', tempSelectedModel === model.id ? 'selected' : '']"
              @click="selectModel(model.id)"
            >
              <div class="model-icon" :style="{ backgroundColor: model.color }">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div class="model-details">
                <div class="model-name">{{ model.name }}</div>
                <div class="model-provider" v-if="model.provider">提供商: {{ model.provider }}</div>
                <div class="model-description">{{ model.description }}</div>
                <div class="model-tags">
                  <span 
                    v-for="(tag, tagIndex) in model.tags" 
                    :key="tagIndex" 
                    class="model-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
              <div class="model-select-indicator" v-if="tempSelectedModel === model.id">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="cancel-btn" @click="showModelSelector = false">取消</button>
          <button class="confirm-btn" @click="applyModelSelection">确认选择</button>
        </div>
      </div>
    </div>
    

    

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick, computed } from 'vue';
import { marked } from 'marked';

// 配置 marked
marked.setOptions({
  breaks: true, // 允许换行
  gfm: true,    // 启用GFM
  headerIds: false // 禁用自动添加id
});

// API基础URL
const API_BASE_URL = import.meta.env.VITE_APP_AI_API_URL || 'http://localhost:28928';

// 聊天消息
interface Message {
  role: 'user' | 'bot';
  content: string;
  time: string;
  thinking?: string; // 添加思考内容字段
}

// 历史记录
interface HistoryItem {
  id: number;
  title: string;
  time: string;
  tags?: string[]; // 添加标签字段
  exportedFormats?: string[]; // 添加导出格式记录
}

// 标签类型
interface Tag {
  id: number;
  name: string;
  color: string;
}

// 文件类型
interface FileItem {
  id: number;
  name: string;
  type: string;
  size: number;
  uploadTime: string;
  aiAccessible: boolean; // 是否允许AI访问该文件
  description?: string;
}

// 主题设置
interface ThemeOption {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
  preview: string; // CSS gradient for preview
}

// 提示词模板
interface PromptTemplate {
  id: number;
  name: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  usageCount: number;
  functionToolId?: string; // 新增功能工具ID字段
}

// 提示词评分
interface PromptEvaluation {
  clarity: number; // 清晰度
  specificity: number; // 具体度
  context: number; // 上下文
  conciseness: number; // 简洁度
  structure: number; // 结构性
  overall: number; // 总体评分
  suggestions: string[]; // 改进建议
}

// 字体设置
interface FontSetting {
  size: 'small' | 'medium' | 'large';
  spacing: 'compact' | 'normal' | 'relaxed';
  family: 'default' | 'serif' | 'mono';
}

const userInput = ref('');
const messages = ref<Message[]>([]);
const isTyping = ref(false);
const chatContentRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLTextAreaElement | null>(null);
const sidebarCollapsed = ref(false);
const useCloudModel = ref(false); // 是否使用云端大模型
const streamController = ref<AbortController | null>(null); // 用于控制流式请求
const isDeepThinking = ref(false); // 是否开启流式输出模式

// 后端服务器配置

// 主题设置相关状态
const showThemeSettings = ref(false);
const isDarkMode = ref(false);
const currentTheme = ref('default');
const currentFontSettings = ref<FontSetting>({
  size: 'medium',
  spacing: 'normal',
  family: 'default'
});

// 提示词工程工具相关状态
const showPromptEngineer = ref(false);
const currentPrompt = ref('');
const promptName = ref('');
const promptCategory = ref('general');
const promptTags = ref<string[]>([]);
const currentTemplateId = ref<number | null>(null);
const isEvaluating = ref(false);
const promptEvaluation = ref<PromptEvaluation>({
  clarity: 0,
  specificity: 0,
  context: 0,
  conciseness: 0,
  structure: 0,
  overall: 0,
  suggestions: []
});

// 预定义的主题
const themeOptions = ref<ThemeOption[]>([
  {
    id: 'default',
    name: '默认蓝',
    primaryColor: '#4665ee',
    secondaryColor: '#f0f0f3',
    backgroundColor: '#f7f7f9',
    textColor: '#333333',
    accentColor: '#FF6B95',
    preview: 'linear-gradient(to right, #4665ee, #6B8CFF)'
  },
  {
    id: 'emerald',
    name: '翡翠绿',
    primaryColor: '#10b981',
    secondaryColor: '#ecfdf5',
    backgroundColor: '#f8fafc',
    textColor: '#1e293b',
    accentColor: '#8b5cf6',
    preview: 'linear-gradient(to right, #10b981, #34d399)'
  },
  {
    id: 'sunset',
    name: '晚霞橙',
    primaryColor: '#f97316',
    secondaryColor: '#fff7ed',
    backgroundColor: '#fffbf5',
    textColor: '#431407',
    accentColor: '#3b82f6',
    preview: 'linear-gradient(to right, #f97316, #fb923c)'
  },
  {
    id: 'lavender',
    name: '薰衣草',
    primaryColor: '#8b5cf6',
    secondaryColor: '#f5f3ff',
    backgroundColor: '#faf5ff',
    textColor: '#581c87',
    accentColor: '#ec4899',
    preview: 'linear-gradient(to right, #8b5cf6, #a78bfa)'
  },
  {
    id: 'graphite',
    name: '石墨黑',
    primaryColor: '#334155',
    secondaryColor: '#f1f5f9',
    backgroundColor: '#f8fafc',
    textColor: '#0f172a',
    accentColor: '#6366f1',
    preview: 'linear-gradient(to right, #334155, #475569)'
  }
]);

// 文件管理相关状态
const showFileManager = ref(false);
const userFiles = ref<FileItem[]>([
  { 
    id: 1, 
    name: '产品说明书.pdf', 
    type: 'pdf', 
    size: 2560000, 
    uploadTime: '2023-06-15', 
    aiAccessible: true,
    description: '包含公司最新产品的详细说明和使用指南'
  },
  { 
    id: 2, 
    name: '员工手册.docx', 
    type: 'docx', 
    size: 1280000, 
    uploadTime: '2023-05-20', 
    aiAccessible: true,
    description: '公司员工手册，包含公司政策和规章制度'
  },
  { 
    id: 3, 
    name: '财务报表.xlsx', 
    type: 'xlsx', 
    size: 856000, 
    uploadTime: '2023-06-01', 
    aiAccessible: false,
    description: '公司2023年Q2财务报表（敏感资料）'
  }
]);
const selectedFile = ref<number | null>(null);
const currentFilter = ref('all'); // 'all', 'accessible', 'restricted'
const fileSearchQuery = ref('');
const showFileUploadModal = ref(false);
const newFile = ref<FileItem>({
  id: 0,
  name: '',
  type: '',
  size: 0,
  uploadTime: '',
  aiAccessible: true,
  description: ''
});

// 标签功能相关状态
const availableTags = ref<Tag[]>([
  { id: 1, name: '重要', color: '#FF6B95' },
  { id: 2, name: '工作', color: '#4665ee' },
  { id: 3, name: '学习', color: '#42b983' },
  { id: 4, name: '参考', color: '#f39c12' },
]);
const showTagSelector = ref(false);
const selectedHistoryItem = ref<number | null>(null);
const newTagName = ref('');
const selectedTags = ref<string[]>([]);
const editingChatTitle = ref(''); // 添加会话标题编辑变量

// 导出功能相关状态
const exportFormats = [
  { id: 'pdf', name: 'PDF 文件' },
  { id: 'markdown', name: 'Markdown 文件' },
  { id: 'txt', name: '文本文件' },
];
const showExportMenu = ref(false);

// 真实历史记录数据
const chatHistory = ref<HistoryItem[]>([]);

// Toast 消息状态
const toast = ref({
  show: false,
  message: ''
});

// 功能特点展示
const features = [
  {
    icon: '🔍',
    title: '知识库检索',
    description: '精准检索企业知识库，回答专业问题'
  },
  {
    icon: '💬',
    title: '多轮对话',
    description: '支持上下文理解与状态保持'
  },
  {
    icon: '📄',
    title: '文档处理',
    description: '自动解析多种格式文档并向量化'
  },
  {
    icon: '⚡',
    title: '流式响应',
    description: '实时打字效果，提升用户体验'
  }
];

// 显示 Toast 消息
const showToast = (message: string) => {
  toast.value.message = message;
  toast.value.show = true;
  
  // 3秒后自动关闭
  setTimeout(() => {
    toast.value.show = false;
  }, 3000);
};

// 自动调整输入框高度
const adjustTextareaHeight = () => {
  if (!inputRef.value) return;
  
  // 重置高度以便重新计算
  inputRef.value.style.height = 'auto';
  
  // 计算新的高度（最大高度为150px）
  const newHeight = Math.min(150, inputRef.value.scrollHeight);
  
  // 设置新高度
  inputRef.value.style.height = `${newHeight}px`;
};

// 监听输入内容变化，自动调整高度
watch(userInput, () => {
  nextTick(adjustTextareaHeight);
});

// 监听流式输出状态变化
watch(isDeepThinking, (newValue) => {
  // 不需要弹窗提示
});

// 切换侧边栏
const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
  // 本地存储用户偏好
  localStorage.setItem('sidebarCollapsed', String(sidebarCollapsed.value));
};

// 删除历史记录
const deleteHistory = async (index: number) => {
  try {
    const selectedChatId = chatHistory.value[index].id;
    
    // 向后端发送删除请求
    const response = await fetch(`${API_BASE_URL}/ai/chat/deleteChatHistoryList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatId: selectedChatId.toString()
      })
    });
    
    const result = await response.json();
    
    // 只有请求成功时才从本地删除
    if (result.code === "200") {
      // 从本地删除
      chatHistory.value.splice(index, 1);
      
      // 如果当前正在显示被删除的对话，则清空消息
      if (messages.value.length > 0) {
        messages.value = [];
      }
      
      showToast('已删除该对话');
    } else {
      // 请求失败
      showToast('删除失败: ' + (result.userMessage || result.message || '请求错误'));
      console.warn('删除会话请求失败:', result);
    }
  } catch (error) {
    console.error('删除会话请求错误:', error);
    showToast('删除失败，请检查网络连接');
  }
};

// 开始新对话
const startNewChat = async () => {
  // 立即清空当前消息，提供良好的用户体验
  messages.value = [];
  
  // 生成chatId
  const newChatId = Date.now().toString();
  console.log('生成新会话chatId:', newChatId);
  
  // 生成当前时间
  const currentDate = new Date();
  
  // 创建新会话的数据
  const newChatData = {
    chatId: newChatId,
    chatTittle: "新建会话", // 默认标题，使用chatTittle而不是title
    chatTag: [], // 默认无标签
    createTime: formatDateToFriendly(currentDate),
    updateTime: formatDateToFriendly(currentDate)
  };
  
  // 先在本地添加一个临时记录，提供即时反馈
  const tempHistoryItem: HistoryItem = {
    id: parseInt(newChatId),
    title: newChatData.chatTittle, // 使用chatTittle
    time: newChatData.updateTime,
    tags: []
  };
  
  chatHistory.value = [tempHistoryItem, ...chatHistory.value];
  selectedHistoryItem.value = 0; // 选中新创建的会话
  
  // 显示新建成功提示
  showToast('已创建新对话');
  
  // 在后台发送请求创建会话
  try {
    const response = await fetch(`${API_BASE_URL}/ai/chat/insertChatHistoryList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newChatData)
    });
    
    const result = await response.json();
    
    if (result.code === "200" && result.data) {
      console.log('新建会话成功，chatId:', newChatId);
      // 不要调用fetchAllChatHistory，这可能导致chatId变化
      // fetchAllChatHistory();
    } else {
      console.warn('新建会话请求失败，但用户界面已更新:', result.message);
    }
  } catch (error) {
    console.error('新建会话请求错误:', error);
    // 即使请求失败，用户仍然可以继续使用新会话，只是未保存到服务器
  }
};

// 将日期转换为友好格式（今天、昨天、x天前）
const formatDateToFriendly = (date: Date): string => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dateDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  // 计算天数差异
  const diffInDays = Math.floor((today.getTime() - dateDay.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return '今天';
  } else if (diffInDays === 1) {
    return '昨天';
  } else if (diffInDays < 7) {
    return `${diffInDays}天前`;
  } else {
    // 超过7天则返回具体日期，格式：YYYY-MM-DD
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }
};

// 将友好格式的日期转回实际日期字符串（用于发送到服务器）
const friendlyToActualDate = (friendlyDate: string): string => {
  const now = new Date();
  
  if (friendlyDate === '今天') {
    return now.toISOString().split('T')[0];
  } else if (friendlyDate === '昨天') {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
  } else if (friendlyDate.endsWith('天前')) {
    const days = parseInt(friendlyDate.replace('天前', ''), 10);
    const pastDate = new Date(now);
    pastDate.setDate(now.getDate() - days);
    return pastDate.toISOString().split('T')[0];
  }
  
  // 如果是日期格式，直接返回
  return friendlyDate;
};

// 获取当前时间
const getCurrentTime = () => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
};

// 发送消息并获取回复
const sendMessage = async () => {
  if (!userInput.value.trim()) return;
  
  const userMessage = userInput.value.trim();
  userInput.value = '';
  
  // 调整输入框高度
  nextTick(adjustTextareaHeight);
  
  // 获取当前时间
  const now = new Date();
  const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  
  // 检查是否已选择会话
  if (selectedHistoryItem.value === null) {
    // 如果没有选择会话，先创建一个新会话
    await startNewChat();
  }
  
  // 添加用户消息到消息列表
  messages.value.push({
    role: 'user',
    content: userMessage,
    time: timeStr
  });
  
  // 设置AI正在输入状态
  isTyping.value = true;
  
  // 滚动到底部
  nextTick(scrollToBottom);
  
  try {
    if (useCloudModel.value) {
      // 使用云端模型
      await chatWithServer(userMessage);
    } else {
      // 使用本地模拟回复
      await simulateResponse(userMessage);
    }
  } catch (error) {
    console.error('发送消息失败:', error);
    messages.value.push({
      role: 'bot',
      content: '抱歉，发生了错误，请稍后再试。',
      time: timeStr
    });
  } finally {
    // 确保不再显示打字中状态
    isTyping.value = false;
    nextTick(scrollToBottom);
  }
};

// 与服务器通信
const chatWithServer = async (prompt: string) => {
  try {
    // 准备查询参数
    const queryParams = new URLSearchParams({
      prompt: prompt
    });
    
    // 添加模型信息
    if (selectedModel.value) {
      const modelInfo = availableModels.value.find(m => m.id === selectedModel.value);
      if (modelInfo) {
        queryParams.append('modelProvider', modelInfo.provider);
        queryParams.append('modelName', modelInfo.name);
      }
    }
    
    // 添加系统提示词
    if (activeSystemPrompt.value) {
      queryParams.append('systemPrompt', activeSystemPrompt.value.content);
      // 添加系统提示词ID
      queryParams.append('systemPromptId', activeSystemPrompt.value.id.toString());
    }
    
    // 添加会话ID
    if (selectedHistoryItem.value !== null) {
      const currentChatId = chatHistory.value[selectedHistoryItem.value].id.toString();
      queryParams.append('chatId', currentChatId);
      console.log('使用会话ID:', currentChatId, '类型:', typeof chatHistory.value[selectedHistoryItem.value].id);
      
      // 调试chatHistory
      console.log('当前chatHistory:', JSON.stringify(chatHistory.value));
      console.log('selectedHistoryItem索引:', selectedHistoryItem.value);
    } else {
      console.error('未选择会话，无法发送消息');
      throw new Error('未选择会话');
    }
    
    // 创建AbortController以便需要时可以中止请求
    if (streamController.value) {
      streamController.value.abort();
    }
    streamController.value = new AbortController();
    
    // 获取当前时间
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    // 先添加一个空的回复消息，后续会更新它
    const messageIndex = messages.value.length;
    messages.value.push({
      role: 'bot',
      content: '',
      thinking: '',
      time: timeStr
    });
    
    // 发送消息时已设置isTyping = true，这里不需要重复设置
    
    // 准备查询参数
    queryParams.append('isStream', isDeepThinking.value ? 'true' : 'false');
    
    // 发送GET请求并处理流式响应
    const response = await fetch(`${API_BASE_URL}/ai/chat?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        'Accept': 'text/html, text/plain, */*'
      },
      signal: streamController.value.signal
    });
    
    // 检查响应状态
    if (!response.ok) {
      // 检查是否为JSON错误响应
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        if (errorData && errorData.code === "999") {
          throw new Error(errorData.userMessage || "当前功能不可用，请稍后再试");
        }
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // 直接从流中读取数据
    try {
      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');
      let responseText = '';
      
      // 如果没有reader，表示浏览器不支持流式响应
      if (!reader) {
        const text = await response.text();
        
        // 检查是否是JSON错误响应
        try {
          const errorData = JSON.parse(text);
          if (errorData && errorData.code === "999") {
            throw new Error(errorData.userMessage || "当前功能不可用，请稍后再试");
          }
        } catch (jsonError) {
          // 解析JSON出错，按文本处理
        }
        
        const parsedResponse = parseResponse(text);
        
        // 更新消息内容
        messages.value[messageIndex].content = parsedResponse.response;
        messages.value[messageIndex].thinking = parsedResponse.thinking;
        
        isTyping.value = false;
        return;
      }
      
      // 处理流式响应
      try {
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) {
            break;
          }
          
          // 解码并添加到响应文本
          const chunk = decoder.decode(value, { stream: true });
          responseText += chunk;
          
          console.log('收到数据块:', chunk); // 调试信息
          
          // 检查是否是JSON错误响应
          if (responseText.trim().startsWith('{"code":"999"')) {
            try {
              const errorData = JSON.parse(responseText);
              if (errorData && errorData.code === "999") {
                throw new Error(errorData.userMessage || "当前功能不可用，请稍后再试");
              }
            } catch (jsonError) {
              // 解析错误，继续处理
            }
          }
          
          // 解析当前累积的响应
          const parsedResponse = parseResponse(responseText);
          
          // 更新消息内容
          messages.value[messageIndex].content = parsedResponse.response;
          messages.value[messageIndex].thinking = parsedResponse.thinking;
          
          // 如果有内容了，且不是在思考中，则隐藏打字指示器
          // 如果只有思考内容，保持打字指示器显示
          const hasThinkingOnly = parsedResponse.thinking && !parsedResponse.response;
          if ((parsedResponse.response && !hasThinkingOnly) || 
              (parsedResponse.thinking && parsedResponse.thinking.includes('</think>'))) {
            isTyping.value = false;
          }
          
          // 滚动到底部
          scrollToBottom();
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('请求被中止');
        } else {
          throw error;
        }
      } finally {
        // 确保最后的解码
        const finalChunk = decoder.decode();
        if (finalChunk) {
          responseText += finalChunk;
          
          const parsedResponse = parseResponse(responseText);
          messages.value[messageIndex].content = parsedResponse.response;
          messages.value[messageIndex].thinking = parsedResponse.thinking;
        }
        
        isTyping.value = false;
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error('处理流响应失败:', error);
        showToast('连接服务器失败，请稍后再试');
        
        // 如果已经添加了消息，则更新为错误消息
        if (messages.value.length > 0 && messages.value[messages.value.length - 1].role === 'bot') {
          messages.value[messages.value.length - 1].content = '抱歉，与服务器通信失败，请稍后再试。';
        }
      }
      isTyping.value = false;
    }
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error('与服务器通信失败:', error);
      
      // 提取错误消息
      let errorMessage = '连接服务器失败，请稍后再试';
      
      // 检查是否包含用户友好的错误消息
      if (error.message && 
         (error.message.includes('当前功能不可用') || 
          error.message.includes('Exception'))) {
        errorMessage = error.message;
      }
      
      // 显示错误消息
      showToast(errorMessage);
      
      // 如果已经添加了消息，则更新为错误消息
      if (messages.value.length > 0 && messages.value[messages.value.length - 1].role === 'bot') {
        messages.value[messages.value.length - 1].content = `抱歉，${errorMessage}`;
      }
    }
    isTyping.value = false;
  }
};

// 模拟本地回复（现有功能）
const simulateResponse = async (input: string) => {
  // 延迟以模拟 API 响应时间
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const now = new Date();
  const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  
  let botResponse = '';
  let thinking = '';
  
  // 模拟回复逻辑
  if (input.includes('你好') || input.includes('嗨') || input.includes('hi') || input.includes('hello')) {
    thinking = '用户打招呼了，我应该礼貌地回应并表示愿意提供帮助。';
    botResponse = '你好！我是小型博美，很高兴为你服务。你有什么需要帮助的吗？';
  } else if (input.includes('功能') || input.includes('能做什么')) {
    thinking = '用户想了解我的功能，我应该详细列出我能做的事情。';
    botResponse = '我可以帮你写代码、读文件、回答问题、写作各种创意内容，还可以连接到你的知识库回答专业问题。请告诉我你需要什么帮助？';
  } else if (input.includes('知识库')) {
    thinking = '用户询问知识库功能，我应该解释这个特性的工作原理和优势。';
    botResponse = '我们的知识库功能允许您上传和索引公司文档，然后AI助手可以基于这些文档回答问题。支持多种格式如PDF、Word和Excel，并且会自动提取和向量化内容以实现语义搜索。';
  } else if (input.includes('markdown')) {
    thinking = '用户提到了Markdown，我应该展示一些Markdown格式的示例。';
    botResponse = '这是Markdown格式的示例：\n\n# 标题1\n## 标题2\n### 标题3\n\n- 列表项1\n- 列表项2\n\n```javascript\n// 代码示例\nfunction hello() {\n  console.log("Hello world!");\n}\n```\n\n**粗体文本** 和 *斜体文本*';
  } else {
    thinking = '这是一个一般性的问题，我将给出友好的回应，并告知用户这是演示模式。';
    botResponse = '感谢你的提问。在真实环境中，我会根据你的问题给出详细的回答。现在系统处于演示模式，如需更多帮助，请联系管理员开通完整功能。';
  }
  
  // 添加AI回复
  messages.value.push({
    role: 'bot',
    content: botResponse,
    thinking: thinking,
    time: timeStr
  });
  
  // 如果是新对话，可能需要创建会话
  if (selectedHistoryItem.value === null && messages.value.length === 2) {
    // 第一次对话时创建新会话
    const title = input.length > 20 ? input.substring(0, 20) + '...' : input;
    
    // 更新侧边栏显示
    const tempItem: HistoryItem = {
      id: Date.now(),
      title: title,
      time: '刚刚',
      tags: []
    };
    
    chatHistory.value = [tempItem, ...chatHistory.value];
    selectedHistoryItem.value = 0;
  }
};

// 用户控制滚动的标志
const userScrolling = ref(false);
const lastScrollTop = ref(0);

// 滚动到底部
const scrollToBottom = () => {
  // 如果用户正在手动滚动，则不执行自动滚动
  if (userScrolling.value) return;
  
  if (chatContentRef.value) {
    chatContentRef.value.scrollTop = chatContentRef.value.scrollHeight;
  }
};

// 检测用户滚动行为
const handleScroll = () => {
  if (!chatContentRef.value) return;
  
  // 获取当前滚动位置
  const currentScrollTop = chatContentRef.value.scrollTop;
  const maxScrollTop = chatContentRef.value.scrollHeight - chatContentRef.value.clientHeight;
  
  // 如果用户向上滚动或距离底部超过100px，标记为用户滚动
  if (currentScrollTop < lastScrollTop.value || (maxScrollTop - currentScrollTop) > 100) {
    userScrolling.value = true;
  }
  
  // 如果用户滚动到接近底部，恢复自动滚动
  if ((maxScrollTop - currentScrollTop) < 30) {
    userScrolling.value = false;
  }
  
  // 更新最后滚动位置
  lastScrollTop.value = currentScrollTop;
};

// 监听消息变化，自动滚动到底部
watch(messages, () => {
  nextTick(() => {
    scrollToBottom();
  });
});

// 返回首页
const goToHome = () => {
  // 使用Vue Router导航到首页
  window.location.href = '/ai';
  // 也可以使用router.push('/ai') 如果有引入router
};

// 获取标签颜色
const getTagColor = (tagName: string) => {
  const tag = availableTags.value.find(t => t.name === tagName);
  return tag ? tag.color : '#999';
};

// 更新会话
const updateChatHistory = async (chatId: number, updates: any) => {
  try {
    // 构建更新请求数据
    const updateData = {
      chatId: chatId.toString(),
      ...updates
    };
    
    // 发送更新请求
    const response = await fetch(`${API_BASE_URL}/ai/chat/updateChatHistoryList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });
    
    const result = await response.json();
    
    if (result.code === "200") {
      // 更新成功
      showToast('会话已更新');
      // 刷新会话列表
      fetchAllChatHistory();
      return true;
    } else {
      // 请求失败
      showToast('更新失败: ' + (result.userMessage || result.message || '请求错误'));
      console.warn('更新会话失败:', result);
      return false;
    }
  } catch (error) {
    console.error('更新会话请求错误:', error);
    showToast('更新失败，请检查网络连接');
    return false;
  }
};

// 保存标签到会话
const saveTagsToChat = async () => {
  if (selectedHistoryItem.value === null) return;
  
  const chatId = chatHistory.value[selectedHistoryItem.value].id;
  const tags = selectedTags.value;
  const title = editingChatTitle.value.trim();
  
  // 检查标题是否为空
  if (!title) {
    showToast('会话标题不能为空');
    return;
  }
  
  // 准备更新数据
  const updateData = {
    chatTittle: title,
    chatTag: tags,
    updateTime: formatDateToFriendly(new Date())
  };
  
  // 显示更新中提示
  showToast('正在更新会话...');
  
  // 调用通用更新函数
  const success = await updateChatHistory(chatId, updateData);
  
  if (success) {
    // 关闭选择器
    showTagSelector.value = false;
  }
};

// 打开标签选择器
const openTagSelector = (index: number) => {
  selectedHistoryItem.value = index;
  
  // 初始化已选标签
  if (chatHistory.value[index].tags) {
    selectedTags.value = [...chatHistory.value[index].tags];
  } else {
    selectedTags.value = [];
  }
  
  // 初始化会话标题
  editingChatTitle.value = chatHistory.value[index].title;
  
  showTagSelector.value = true;
};

// 检查标签是否已被选中
const isTagSelected = (tagName: string) => {
  return selectedTags.value.includes(tagName);
};

// 切换标签选择状态
const toggleTag = (tagName: string) => {
  if (isTagSelected(tagName)) {
    selectedTags.value = selectedTags.value.filter(t => t !== tagName);
  } else {
    selectedTags.value.push(tagName);
  }
};

// 添加自定义标签
const addCustomTag = () => {
  if (!newTagName.value.trim()) return;
  
  // 检查是否已存在同名标签
  if (!availableTags.value.some(t => t.name === newTagName.value)) {
    // 随机生成标签颜色
    const colors = ['#FF6B95', '#4665ee', '#42b983', '#f39c12', '#e74c3c', '#9b59b6', '#3498db'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // 添加到可用标签列表
    availableTags.value.push({
      id: availableTags.value.length + 1,
      name: newTagName.value,
      color: randomColor
    });
  }
  
  // 如果没有被选中，则选中该标签
  if (!isTagSelected(newTagName.value)) {
    selectedTags.value.push(newTagName.value);
  }
  
  // 清空输入框
  newTagName.value = '';
};

// 打开导出菜单
const openExportMenu = (index: number) => {
  selectedHistoryItem.value = index;
  showExportMenu.value = true;
};

// 导出对话
const exportConversation = (format: string) => {
  if (selectedHistoryItem.value === null) return;
  
  // 这里是模拟导出功能，实际应用中需要实现真正的导出逻辑
  const item = chatHistory.value[selectedHistoryItem.value];
  
  // 记录导出格式
  if (!item.exportedFormats) {
    item.exportedFormats = [];
  }
  if (!item.exportedFormats.includes(format)) {
    item.exportedFormats.push(format);
  }
  
  // 显示导出成功提示
  showToast(`对话已导出为${format.toUpperCase()}格式`);
  showExportMenu.value = false;
  
  // 实际应用中，这里应该生成并下载对应格式的文件
  // 例如使用 html2pdf 库生成 PDF，或者生成 markdown 文本并下载
};

// 加载对话
const loadConversation = async (index: number) => {
  try {
    const chatId = chatHistory.value[index].id;
    selectedHistoryItem.value = index;
    
    // 清空当前消息
    messages.value = [];
    
    // 显示加载提示
    showToast(`正在加载对话: ${chatHistory.value[index].title}`);
    
    // 发送请求获取聊天记录
    const response = await fetch(`${API_BASE_URL}/ai/chat/getChatHistoryById?chatId=${chatId}`);
    const result = await response.json();
    
    if (Array.isArray(result)) {
      // 将接口返回的数据转换为消息格式
      result.forEach(item => {
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        // 解析assistant消息中的思考内容
        let thinking = '';
        let content = item.chatContent;
        
        if (item.chatRole === 'assistant') {
          const parsedResponse = parseResponse(item.chatContent);
          content = parsedResponse.response;
          thinking = parsedResponse.thinking;
        }
        
        messages.value.push({
          role: item.chatRole === 'user' ? 'user' : 'bot',
          content: content,
          thinking: thinking,
          time: timeStr
        });
      });
      
      // 滚动到底部
      nextTick(scrollToBottom);
    } else {
      showToast('无法加载对话记录');
      console.error('获取聊天记录返回格式错误:', result);
    }
  } catch (error) {
    console.error('加载对话记录失败:', error);
    showToast('加载对话记录失败，请稍后再试');
  }
};

// 限制标签显示数量，避免换行
const limitTags = (tags: string[]) => {
  // 最多显示4个标签，确保在同一行内展示
  return tags.slice(0, 4);
};

// 打开文件管理器
const openFileManager = () => {
  showFileManager.value = true;
};

// 过滤文件
const filteredFiles = computed(() => {
  let result = userFiles.value;
  
  // 应用过滤器
  if (currentFilter.value === 'accessible') {
    result = result.filter(file => file.aiAccessible);
  } else if (currentFilter.value === 'restricted') {
    result = result.filter(file => !file.aiAccessible);
  }
  
  // 应用搜索
  if (fileSearchQuery.value) {
    const query = fileSearchQuery.value.toLowerCase();
    result = result.filter(file => 
      file.name.toLowerCase().includes(query) ||
      (file.description && file.description.toLowerCase().includes(query))
    );
  }
  
  return result;
});

// 格式化文件大小
const formatFileSize = (size: number) => {
  if (size < 1024) {
    return `${size} B`;
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  } else {
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }
};

// 选择文件
const selectFile = (id: number) => {
  selectedFile.value = id;
};

// 切换文件AI访问权限
const toggleAccess = (id: number) => {
  const fileIndex = userFiles.value.findIndex(file => file.id === id);
  if (fileIndex !== -1) {
    userFiles.value[fileIndex].aiAccessible = !userFiles.value[fileIndex].aiAccessible;
    showToast(`${userFiles.value[fileIndex].name} ${userFiles.value[fileIndex].aiAccessible ? '现在可被AI访问' : '现在对AI受限'}`);
  }
};

// 删除文件
const deleteFile = (id: number) => {
  const fileIndex = userFiles.value.findIndex(file => file.id === id);
  if (fileIndex !== -1) {
    const fileName = userFiles.value[fileIndex].name;
    userFiles.value = userFiles.value.filter(file => file.id !== id);
    showToast(`文件 ${fileName} 已删除`);
    
    if (selectedFile.value === id) {
      selectedFile.value = null;
    }
  }
};

// 打开上传文件模态框
const openUploadModal = () => {
  // 重置新文件表单
  newFile.value = {
    id: Date.now(),
    name: '',
    type: '',
    size: 0,
    uploadTime: '',
    aiAccessible: true,
    description: ''
  };
  showFileUploadModal.value = true;
};

// 上传文件（模拟）
const uploadFile = () => {
  if (!newFile.value.name) {
    showToast('请输入文件名称');
    return;
  }
  
  // 确定文件类型（模拟）
  if (newFile.value.name.endsWith('.pdf')) {
    newFile.value.type = 'pdf';
  } else if (newFile.value.name.endsWith('.docx') || newFile.value.name.endsWith('.doc')) {
    newFile.value.type = 'docx';
  } else if (newFile.value.name.endsWith('.xlsx') || newFile.value.name.endsWith('.xls')) {
    newFile.value.type = 'xlsx';
  } else {
    // 如果没有扩展名，添加默认扩展名
    if (!newFile.value.name.includes('.')) {
      newFile.value.name += '.pdf';
      newFile.value.type = 'pdf';
    } else {
      newFile.value.type = 'other';
    }
  }
  
  // 模拟随机文件大小 (100KB - 5MB)
  newFile.value.size = Math.floor(Math.random() * 5 * 1024 * 1024) + 100 * 1024;
  
  // 添加到文件列表
  userFiles.value.push({...newFile.value});
  
  showToast(`文件 ${newFile.value.name} 上传成功`);
  showFileUploadModal.value = false;
};

onMounted(() => {
  // 自动聚焦输入框
  if (inputRef.value) {
    inputRef.value.focus();
  }
  
  // 恢复侧边栏状态
  const savedState = localStorage.getItem('sidebarCollapsed');
  if (savedState) {
    sidebarCollapsed.value = savedState === 'true';
  }
  
  // 加载保存的主题设置
  loadSavedThemeSettings();
  
  // 监听全局点击事件
  document.body.addEventListener('click', () => {
    showPreview.value = false;
  });
  
  // 初始化输入框高度
  nextTick(adjustTextareaHeight);
  
  // 添加输入事件监听，实时调整高度
  if (inputRef.value) {
    inputRef.value.addEventListener('input', adjustTextareaHeight);
  }
  // 获取所有聊天历史
  fetchAllChatHistory();
  
  // 获取所有可用模型
  fetchAllModels();
  
  // 获取所有提示词
  fetchAllPrompts();
});

// 打开主题设置
const openThemeSettings = () => {
  showThemeSettings.value = true;
};

// 设置主题
const setTheme = (themeId: string) => {
  currentTheme.value = themeId;
};

// 设置明暗模式
const setDarkMode = (isDark: boolean) => {
  isDarkMode.value = isDark;
};

// 设置字体大小
const setFontSize = (size: 'small' | 'medium' | 'large') => {
  currentFontSettings.value.size = size;
};

// 设置字体间距
const setFontSpacing = (spacing: 'compact' | 'normal' | 'relaxed') => {
  currentFontSettings.value.spacing = spacing;
};

// 设置字体风格
const setFontFamily = (family: 'default' | 'serif' | 'mono') => {
  currentFontSettings.value.family = family;
};

// 重置主题设置
const resetThemeSettings = () => {
  currentTheme.value = 'default';
  isDarkMode.value = false;
  currentFontSettings.value = {
    size: 'medium',
    spacing: 'normal',
    family: 'default'
  };
};

// 应用主题设置
const applyThemeSettings = () => {
  // 保存设置到本地存储
  localStorage.setItem('pomeranian_theme', currentTheme.value);
  localStorage.setItem('pomeranian_darkMode', isDarkMode.value.toString());
  localStorage.setItem('pomeranian_fontSettings', JSON.stringify(currentFontSettings.value));
  
  showToast('个性化设置已应用');
  showThemeSettings.value = false;
};

// 加载已保存的主题设置
const loadSavedThemeSettings = () => {
  const savedTheme = localStorage.getItem('pomeranian_theme');
  const savedDarkMode = localStorage.getItem('pomeranian_darkMode');
  const savedFontSettings = localStorage.getItem('pomeranian_fontSettings');
  
  if (savedTheme) {
    currentTheme.value = savedTheme;
  }
  
  if (savedDarkMode) {
    isDarkMode.value = savedDarkMode === 'true';
  }
  
  if (savedFontSettings) {
    try {
      const parsedSettings = JSON.parse(savedFontSettings);
      currentFontSettings.value = {
        size: parsedSettings.size || 'medium',
        spacing: parsedSettings.spacing || 'normal',
        family: parsedSettings.family || 'default'
      };
    } catch (error) {
      console.error('Failed to parse saved font settings:', error);
    }
  }
};

// 预定义的提示词模板
const promptTemplates = ref<PromptTemplate[]>([]);

// 提示词库相关状态
const showPromptLibrary = ref(false);
const currentPromptFilter = ref('all');
const promptSearchQuery = ref('');
const showPromptModal = ref(false);
const isEditingPrompt = ref(false);
const showPreview = ref(false);
const previewContent = ref('');
const previewPosition = ref({ top: '50%', left: '50%' });
const promptTagsInput = ref('');
const editingPrompt = ref<PromptTemplate>({
  id: 0,
  name: '',
  description: '',
  content: '',
  category: 'general',
  tags: [],
  usageCount: 0,
  functionToolId: ''
});

// 当前激活的系统提示词
const activeSystemPrompt = ref<PromptTemplate | null>(null);
const showActivePromptBadge = ref(true);

// 模型选择器相关状态
// 模型选择器相关状态
const showModelSelector = ref(false);
const selectedModel = ref('');
const tempSelectedModel = ref(''); // 临时存储选择的模型，确认后才应用
const availableModels = ref([]);

// 添加模态蒙层的鼠标事件处理
const modalMouseDownTarget = ref(null);

// 处理模态蒙层的鼠标按下事件
const handleModalOverlayMouseDown = (event) => {
  // 记录鼠标按下的目标元素
  modalMouseDownTarget.value = event.target;
};

// 处理模态蒙层的鼠标松开事件
const handleModalOverlayMouseUp = (event) => {
  // 只有当鼠标按下和松开的是同一个元素，且是蒙层本身时，才关闭弹窗
  if (modalMouseDownTarget.value === event.target && event.target.classList.contains('modal-overlay')) {
    showTagSelector.value = false;
  }
  // 重置鼠标按下的目标
  modalMouseDownTarget.value = null;
};

// 处理导出菜单模态蒙层的鼠标松开事件
const handleExportMenuOverlayMouseUp = (event) => {
  // 只有当鼠标按下和松开的是同一个元素，且是蒙层本身时，才关闭弹窗
  if (modalMouseDownTarget.value === event.target && event.target.classList.contains('modal-overlay')) {
    showExportMenu.value = false;
  }
  // 重置鼠标按下的目标
  modalMouseDownTarget.value = null;
};

// 处理文件管理器模态蒙层的鼠标松开事件
const handleFileManagerOverlayMouseUp = (event) => {
  // 只有当鼠标按下和松开的是同一个元素，且是蒙层本身时，才关闭弹窗
  if (modalMouseDownTarget.value === event.target && event.target.classList.contains('modal-overlay')) {
    showFileManager.value = false;
  }
  // 重置鼠标按下的目标
  modalMouseDownTarget.value = null;
};

// 处理文件上传模态蒙层的鼠标松开事件
const handleFileUploadOverlayMouseUp = (event) => {
  // 只有当鼠标按下和松开的是同一个元素，且是蒙层本身时，才关闭弹窗
  if (modalMouseDownTarget.value === event.target && event.target.classList.contains('modal-overlay')) {
    showFileUploadModal.value = false;
  }
  // 重置鼠标按下的目标
  modalMouseDownTarget.value = null;
};

// 处理主题设置模态蒙层的鼠标松开事件
const handleThemeSettingsOverlayMouseUp = (event) => {
  // 只有当鼠标按下和松开的是同一个元素，且是蒙层本身时，才关闭弹窗
  if (modalMouseDownTarget.value === event.target && event.target.classList.contains('modal-overlay')) {
    showThemeSettings.value = false;
  }
  // 重置鼠标按下的目标
  modalMouseDownTarget.value = null;
};

// 处理提示词库模态蒙层的鼠标松开事件
const handlePromptLibraryOverlayMouseUp = (event) => {
  // 只有当鼠标按下和松开的是同一个元素，且是蒙层本身时，才关闭弹窗
  if (modalMouseDownTarget.value === event.target && event.target.classList.contains('modal-overlay')) {
    showPromptLibrary.value = false;
  }
  // 重置鼠标按下的目标
  modalMouseDownTarget.value = null;
};

// 处理提示词编辑模态蒙层的鼠标松开事件
const handlePromptModalOverlayMouseUp = (event) => {
  // 只有当鼠标按下和松开的是同一个元素，且是蒙层本身时，才关闭弹窗
  if (modalMouseDownTarget.value === event.target && event.target.classList.contains('modal-overlay')) {
    showPromptModal.value = false;
  }
  // 重置鼠标按下的目标
  modalMouseDownTarget.value = null;
};

// 打开提示词库
const openPromptLibrary = () => {
  showPromptLibrary.value = true;
};

// 过滤提示词库中的提示词
const filteredPrompts = computed(() => {
  let result = [...promptTemplates.value];
  
  // 按类别过滤
  if (currentPromptFilter.value !== 'all') {
    result = result.filter(prompt => prompt.category === currentPromptFilter.value);
  }
  
  // 按搜索关键字过滤
  if (promptSearchQuery.value.trim()) {
    const query = promptSearchQuery.value.toLowerCase();
    result = result.filter(prompt => 
      prompt.name.toLowerCase().includes(query) || 
      prompt.description.toLowerCase().includes(query) || 
      prompt.content.toLowerCase().includes(query) ||
      prompt.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  return result;
});

// 获取提示词类别的颜色
const getPromptCategoryColor = (category: string) => {
  const colorMap: {[key: string]: string} = {
    writing: '#FF6B95',
    coding: '#4665ee',
    analysis: '#42b983',
    creativity: '#f39c12',
    education: '#9b59b6',
    other: '#3498db'
  };
  
  return colorMap[category] || '#3498db';
};

// 获取提示词类别的标签
const getCategoryLabel = (category: string) => {
  const labelMap: {[key: string]: string} = {
    writing: '写作',
    coding: '编程',
    analysis: '分析',
    creativity: '创意',
    education: '教育',
    other: '其他'
  };
  
  return labelMap[category] || '其他';
};

// 显示提示词内容预览
const showPromptPreview = (prompt: PromptTemplate, event: MouseEvent) => {
  previewContent.value = prompt.content;
  
  // 计算预览框的位置
  const target = event.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  
  // 计算视窗大小
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // 默认宽高
  const previewWidth = 600;
  // 根据内容长度决定预览高度，但至少200px，最多500px
  const previewHeight = 500; // 使用固定最大高度，内部滚动
  
  // 确定左右位置 - 如果右侧空间不足则显示在左侧
  let left;
  if (rect.right + previewWidth + 20 < viewportWidth) {
    // 显示在右侧
    left = `${rect.right + 10}px`;
  } else {
    // 显示在左侧
    left = `${Math.max(10, rect.left - previewWidth - 10)}px`;
  }
  
  // 确定上下位置 - 尽量居中对齐，但不超出视窗
  let top = rect.top - 100; // 在卡片上方显示，留出空间
  top = Math.max(10, Math.min(viewportHeight - previewHeight - 10, top));
  
  // 设置预览框位置
  previewPosition.value = {
    top: `${top}px`,
    left: left,
    maxWidth: `${previewWidth}px`,
    height: `${previewHeight}px`
  };
  
  showPreview.value = true;
};

// 隐藏提示词内容预览
const hidePromptPreview = () => {
  showPreview.value = false;
};

// 复制提示词到输入框
const copyPromptToInput = (prompt: PromptTemplate) => {
  // 设置当前激活的系统提示词
  activeSystemPrompt.value = { ...prompt };
  showActivePromptBadge.value = true;
  showPromptLibrary.value = false;
  showPreview.value = false; // 确保关闭预览
  
  // 显示成功提示
  showToast(`已设置"${prompt.name}"为当前系统提示词`);
};

// 清除当前激活的系统提示词
const clearActiveSystemPrompt = () => {
  activeSystemPrompt.value = null;
  showActivePromptBadge.value = false;
  showToast('已清除系统提示词');
};

// 打开新增提示词模态框
const openAddPromptModal = () => {
  isEditingPrompt.value = false;
  editingPrompt.value = {
    id: Date.now(),
    name: '',
    description: '',
    content: '',
    category: 'writing',
    tags: [],
    usageCount: 0,
    functionToolId: ''
  };
  promptTagsInput.value = '';
  showPromptModal.value = true;
};

// 编辑提示词
const editPrompt = (prompt: PromptTemplate) => {
  isEditingPrompt.value = true;
  editingPrompt.value = { ...prompt };
  promptTagsInput.value = prompt.tags.join(',');
  showPromptModal.value = true;
};

// 保存提示词
const savePrompt = async () => {
  // 验证表单
  if (!editingPrompt.value.name.trim()) {
    showToast('请输入提示词名称');
    return;
  }
  
  if (!editingPrompt.value.content.trim()) {
    showToast('请输入提示词内容');
    return;
  }
  
  // 处理标签
  if (promptTagsInput.value.trim()) {
    editingPrompt.value.tags = promptTagsInput.value.split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
  } else {
    editingPrompt.value.tags = [];
  }
  
  // 显示保存中提示
  showToast(isEditingPrompt.value ? '正在更新提示词...' : '正在添加提示词...');
  
  // 保存到服务器
  const success = await savePromptToServer(editingPrompt.value);
  
  if (success) {
    if (isEditingPrompt.value) {
      // 更新现有提示词
      const index = promptTemplates.value.findIndex(p => p.id === editingPrompt.value.id);
      if (index !== -1) {
        promptTemplates.value[index] = { ...editingPrompt.value };
      }
    } else {
      // 添加新提示词
      promptTemplates.value.push({ ...editingPrompt.value });
    }
    
    // 关闭模态框
    showPromptModal.value = false;
  }
};

// 删除提示词
// 删除提示词
const deletePrompt = async (id: number | string) => {
  if (confirm('确定要删除这个提示词吗？')) {
    try {
      // 发送删除请求到后端API
      const response = await fetch(`${API_BASE_URL}/ai/prompt/deleteSystemPrompt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          promptId: id.toString()
        })
      });
      
      const result = await response.json();
      
      if (result.code === "200") {
        // 删除成功，从本地列表移除
        const index = promptTemplates.value.findIndex(p => p.id === id);
        if (index !== -1) {
          const promptName = promptTemplates.value[index].name;
          promptTemplates.value.splice(index, 1);
          showToast(`提示词"${promptName}"已删除`);
        }
      } else {
        // 删除失败
        console.warn('删除提示词失败:', result);
        showToast('删除提示词失败: ' + (result.userMessage || result.message || '请求错误'));
      }
    } catch (error) {
      console.error('删除提示词请求错误:', error);
      showToast('删除提示词失败，请检查网络连接');
    }
  }
};

// 监听提示词库显示状态
watch(showPromptLibrary, (newValue) => {
  if (!newValue) {
    // 当提示词库关闭时，确保预览也关闭
    showPreview.value = false;
  }
});

// 监听全局点击事件
onMounted(() => {
  document.body.addEventListener('click', () => {
    showPreview.value = false;
  });
});

// 获取所有聊天历史
const fetchAllChatHistory = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/ai/chat/getAllChatHistoryList`);
    const result = await response.json();
    
    if (result.code === "200" && result.data) {
      // 处理新的JSON数组格式数据
      const historyList = result.data;
      
      // 检查是否有数据
      if (!historyList || historyList.length === 0) {
        chatHistory.value = [];
        return;
      }
      
      // 直接处理JSON数组格式的数据
      const parsedItems: HistoryItem[] = historyList.map(item => {
        try {
          // 解析标签数组
          let tags: string[] = [];
          try {
            if (typeof item.chatTag === 'string') {
              tags = JSON.parse(item.chatTag);
            } else if (Array.isArray(item.chatTag)) {
              tags = item.chatTag;
            }
          } catch (e) {
            console.warn('无法解析标签:', item.chatTag);
            tags = [];
          }
          
          return {
            id: parseInt(item.chatId, 10),
            title: item.chatTittle || '新建会话',
            time: item.updateTime || item.createTime || '今天',
            tags: tags
          };
        } catch (err) {
          console.error('解析单个历史记录失败:', err);
          return null;
        }
      }).filter(item => item !== null); // 过滤掉解析失败的项
      
      chatHistory.value = parsedItems;
      console.log('成功加载聊天历史:', parsedItems.length, '条记录');
    } else {
      console.warn('获取聊天历史失败:', result.message);
      chatHistory.value = [];
    }
  } catch (error) {
    console.error('获取聊天历史接口错误:', error);
    chatHistory.value = [];
  }
};

// 解析消息内容，分离思考和回复
const parseResponse = (content: string) => {
  let thinking = '';
  let response = content;
  
  // 处理思考部分
  const thinkOpenTagIndex = content.indexOf('<think>');
  
  if (thinkOpenTagIndex !== -1) {
    // 找到开始标签
    const afterOpenTag = content.substring(thinkOpenTagIndex + 7); // <think> 长度为7
    
    // 检查是否有结束标签
    const thinkCloseTagIndex = afterOpenTag.indexOf('</think>');
    
    if (thinkCloseTagIndex !== -1) {
      // 完整的思考内容
      thinking = afterOpenTag.substring(0, thinkCloseTagIndex).trim();
      // 移除整个思考部分从响应中，包括标签
      response = content.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
    } else {
      // 只有开始标签，还没有结束标签
      thinking = afterOpenTag.trim();
      // 移除从开始标签到内容结束的部分
      response = content.substring(0, thinkOpenTagIndex).trim();
    }
  }
  
  return {
    thinking,
    response
  };
};

// 渲染Markdown内容
const renderMarkdown = (content: string) => {
  return marked(content);
};

// 从响应中提取chatId
const extractChatIdFromResponse = (responseText: string): string | null => {
  // 尝试使用正则表达式匹配chatId
  const chatIdRegex = /chatId[=:]\s*["']?(\d+)["']?/i;
  const match = responseText.match(chatIdRegex);
  
  if (match && match[1]) {
    console.log('从响应中提取到新的chatId:', match[1]);
    return match[1];
  }
  
  // 尝试检查是否包含JSON格式的数据
  try {
    // 寻找可能的JSON部分
    const jsonStart = responseText.indexOf('{');
    if (jsonStart !== -1) {
      // 尝试解析JSON
      const possibleJson = responseText.substring(jsonStart);
      const jsonObj = JSON.parse(possibleJson);
      
      // 检查常见的chatId字段位置
      if (jsonObj.chatId) return jsonObj.chatId.toString();
      if (jsonObj.data && jsonObj.data.chatId) return jsonObj.data.chatId.toString();
    }
  } catch (error) {
    // JSON解析失败，继续其他尝试
  }
  
  return null;
};

// 创建新的聊天会话
const createNewChatSession = (prompt: string, chatId: string) => {
  // 检查是否已经通过tempChatId创建了会话
  if (selectedHistoryItem.value !== null) {
    // 已经有选中的会话了，不需要再创建
    console.log('已有选中会话，不创建新会话');
    return;
  }
  
  // 检查是否已经存在这个chatId的会话
  const existingSession = chatHistory.value.find(item => item.id === parseInt(chatId, 10));
  if (existingSession) {
    console.log('已存在chatId为', chatId, '的会话，不重复创建');
    return;
  }
  
  // 第一次对话时创建新会话
  const title = prompt.length > 20 ? prompt.substring(0, 20) + '...' : prompt;
  
  // 更新侧边栏显示
  const tempItem: HistoryItem = {
    id: parseInt(chatId, 10),
    title: title,
    time: '刚刚',
    tags: []
  };
  
  chatHistory.value = [tempItem, ...chatHistory.value];
  selectedHistoryItem.value = 0;
  
  console.log('创建新会话成功，chatId:', chatId);
};

// 创建新的聊天历史记录
const insertChatHistory = async (title: string, chatId: string) => {
  try {
    // 格式化标题
    const formattedTitle = title.length > 20 ? title.substring(0, 20) + '...' : title;
    
    // 生成当前时间
    const currentDate = new Date();
    
    // 构建请求数据
    const chatData = {
      chatId: chatId,
      chatTittle: formattedTitle, // 注意后端使用的是chatTittle而不是title
      chatTag: [], // 默认无标签
      createTime: formatDateToFriendly(currentDate),
      updateTime: formatDateToFriendly(currentDate)
    };
    
    // 发送请求创建聊天历史
    const response = await fetch(`${API_BASE_URL}/ai/chat/insertChatHistoryList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(chatData)
    });
    
    const result = await response.json();
    
    if (result.code === "200") {
      // 创建成功，更新本地会话列表
      const tempItem: HistoryItem = {
        id: parseInt(chatId),
        title: formattedTitle,
        time: '刚刚',
        tags: []
      };
      
      chatHistory.value = [tempItem, ...chatHistory.value];
      selectedHistoryItem.value = 0;
      
      console.log('创建会话成功，chatId:', chatId);
      return true;
    } else {
      // 请求失败
      console.warn('创建会话失败:', result);
      showToast('创建会话失败: ' + (result.userMessage || result.message || '请求错误'));
      return false;
    }
  } catch (error) {
    console.error('创建会话请求错误:', error);
    showToast('创建会话失败，请检查网络连接');
    return false;
  }
};

// 根据模型提供商获取颜色
const getModelProviderColor = (provider: string) => {
  const colorMap: {[key: string]: string} = {
    openai: '#10b981', // 绿色
    ollama: '#8b5cf6', // 紫色
    default: '#64748b' // 默认灰色
  };
  
  return colorMap[provider.toLowerCase()] || colorMap.default;
};

// 从API获取模型列表
const fetchAllModels = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/ai/model/getAllModels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    
    const result = await response.json();
    
    if (result.code === "200" && result.data) {
      // 处理返回的模型数据
      const modelList = result.data;
      
      // 转换格式并设置颜色
      availableModels.value = modelList.map((model: any) => {
        // 从标签字符串中分割出标签数组
        const tags = model.modelTag ? model.modelTag.split(',') : [];
        
        return {
          id: model.modelName,
          name: model.modelName,
          description: model.modelDescription,
          color: getModelProviderColor(model.modelProvider),
          provider: model.modelProvider,
          tags: tags
        };
      });
      
      console.log('获取模型列表成功:', availableModels.value);
      
      // 如果没有选择模型，则默认选择第一个
      if (!selectedModel.value && availableModels.value.length > 0) {
        selectedModel.value = availableModels.value[0].id;
      }
    } else {
      // 请求失败
      console.warn('获取模型列表失败:', result);
      showToast('获取模型列表失败：' + (result.userMessage || result.message || '请求错误'));
    }
  } catch (error) {
    console.error('获取模型列表请求错误:', error);
    showToast('获取模型列表失败，请检查网络连接');
  }
};

// 打开模型选择器
const openModelSelector = () => {
  tempSelectedModel.value = selectedModel.value; // 初始化临时选择为当前选择
  showModelSelector.value = true;
};

// 选择模型
const selectModel = (modelId: string) => {
  tempSelectedModel.value = modelId;
};

// 应用模型选择
const applyModelSelection = () => {
  selectedModel.value = tempSelectedModel.value;
  showToast(`已切换到 ${availableModels.value.find(m => m.id === selectedModel.value)?.name} 模型`);
  showModelSelector.value = false;
};

// 处理模型选择器模态蒙层的鼠标松开事件
const handleModelSelectorOverlayMouseUp = (event) => {
  // 只有当鼠标按下和松开的是同一个元素，且是蒙层本身时，才关闭弹窗
  if (modalMouseDownTarget.value === event.target && event.target.classList.contains('modal-overlay')) {
    showModelSelector.value = false;
  }
  // 重置鼠标按下的目标
  modalMouseDownTarget.value = null;
};

// 从API获取所有提示词
const fetchAllPrompts = async () => {
  try {
    // 显示加载提示
    showToast('正在加载提示词库...');
    
    // 发送请求获取所有提示词
    const response = await fetch(`${API_BASE_URL}/ai/prompt/getAllSystemPrompt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    
    const result = await response.json();
    
    if (result.code === "200" && result.data) {
      // 清空当前提示词列表
      promptTemplates.value = [];
      
      // 处理返回的提示词数据
result.data.forEach((item: any) => {
  // 将标签字符串转换为数组
  const tags = item.promptTag ? item.promptTag.split(',').map((tag: string) => tag.trim()) : [];
  
  // 类型映射处理
  let category = 'other';
  const promptType = item.promptType || '';
  
  // 根据promptType映射为前端类别
  if (promptType.includes('写作') || promptType.includes('文章')) {
    category = 'writing';
  } else if (promptType.includes('编程') || promptType.includes('代码')) {
    category = 'coding';
  } else if (promptType.includes('分析') || promptType.includes('数据')) {
    category = 'analysis';
  } else if (promptType.includes('创意') || promptType.includes('创作')) {
    category = 'creativity';
  } else if (promptType.includes('教育') || promptType.includes('学习')) {
    category = 'education';
  }
  
  // 转换为应用内的提示词格式并添加到列表
  promptTemplates.value.push({
    id: item.promptId, // 使用后端返回的ID
    name: item.promptName,
    description: item.promptDescription,
    content: item.promptContent,
    category: category, // 使用映射后的类别
    tags: tags,
    usageCount: 0, // 默认为0
    functionToolId: item.functionToolId // 新增功能工具ID字段
  });
});
      
      console.log('成功加载提示词库:', promptTemplates.value);
    } else {
      console.warn('获取提示词失败:', result);
      showToast('获取提示词失败: ' + (result.userMessage || result.message || '请求错误'));
    }
  } catch (error) {
    console.error('获取提示词请求错误:', error);
    showToast('获取提示词失败，请检查网络连接');
  }
};

// 根据ID获取单个提示词
const getSystemPromptById = async (promptId: string): Promise<PromptTemplate | null> => {
  try {
    // 发送请求获取提示词详情
    const response = await fetch(`${API_BASE_URL}/ai/prompt/getSystemPromptById`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        promptId: promptId
      })
    });
    
    const result = await response.json();
    
    if (result.code === "200" && result.data) {
      const item = result.data;
      // 将标签字符串转换为数组
      const tags = item.promptTag ? item.promptTag.split(',').map((tag: string) => tag.trim()) : [];
      
      // 类型映射处理
      let category = 'other';
      const promptType = item.promptType || '';
      
      // 根据promptType映射为前端类别
      if (promptType.includes('写作') || promptType.includes('文章')) {
        category = 'writing';
      } else if (promptType.includes('编程') || promptType.includes('代码')) {
        category = 'coding';
      } else if (promptType.includes('分析') || promptType.includes('数据')) {
        category = 'analysis';
      } else if (promptType.includes('创意') || promptType.includes('创作')) {
        category = 'creativity';
      } else if (promptType.includes('教育') || promptType.includes('学习')) {
        category = 'education';
      }
      
      // 转换为应用内的提示词格式
      return {
        id: item.promptId,
        name: item.promptName,
        description: item.promptDescription,
        content: item.promptContent,
        category: category,
        tags: tags,
        usageCount: 0,
        functionToolId: item.functionToolId // 新增功能工具ID字段
      };
    } else {
      console.warn('获取提示词详情失败:', result);
      showToast('获取提示词详情失败: ' + (result.userMessage || result.message || '请求错误'));
      return null;
    }
  } catch (error) {
    console.error('获取提示词详情请求错误:', error);
    showToast('获取提示词详情失败，请检查网络连接');
    return null;
  }
};

// 将后端提示词类型映射到前端类别
const mapPromptTypeToCategory = (promptType: string): string => {
  const typeMap: {[key: string]: string} = {
    '写作': 'writing',
    '文章': 'writing',
    '编程': 'coding',
    '代码': 'coding',
    '分析': 'analysis',
    '数据': 'analysis',
    '创意': 'creativity',
    '创作': 'creativity',
    '教育': 'education',
    '学习': 'education',
    '客服': 'other',
    '对话': 'other',
    '旅游': 'other'
  };
  
  // 如果没有匹配项，返回other
  return typeMap[promptType] || 'other';
};

// 将前端类别映射回后端提示词类型
const mapCategoryToPromptType = (category: string): string => {
  const categoryMap: {[key: string]: string} = {
    'writing': '写作',
    'coding': '编程',
    'analysis': '分析',
    'creativity': '创意',
    'education': '教育',
    'other': '其他'
  };
  
  // 如果没有匹配项，返回"其他"
  return categoryMap[category] || '其他';
};

// 添加或更新提示词到后端
const savePromptToServer = async (prompt: PromptTemplate): Promise<boolean> => {
  try {
    
    // 构建提交数据
let promptType = '其他'; // 默认类型
const category = prompt.category;

// 从前端类别映射回后端类型
if (category === 'writing') {
  promptType = '写作';
} else if (category === 'coding') {
  promptType = '编程';
} else if (category === 'analysis') {
  promptType = '分析';
} else if (category === 'creativity') {
  promptType = '创意';
} else if (category === 'education') {
  promptType = '教育';
}

// 判断是新增还是编辑
const isUpdate = isEditingPrompt.value && prompt.id;
let apiUrl = `${API_BASE_URL}/ai/prompt/addSystemPrompt`;
let promptData: any = {
  promptName: prompt.name,
  promptType: promptType,
  promptDescription: prompt.description,
  promptTag: prompt.tags.join(','),
  promptContent: prompt.content,
  functionToolId: prompt.functionToolId || '' // 添加功能工具ID字段
};

// 如果是编辑模式，使用更新接口并添加promptId
if (isUpdate) {
  apiUrl = `${API_BASE_URL}/ai/prompt/updateSystemPrompt`;
  promptData.promptId = prompt.id.toString();
}
    
    // 发送请求
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(promptData)
    });
    
    const result = await response.json();
    
    // 检查响应码（新增接口可能返回"200"，更新接口返回"0"）
    if ((result.code === "0" || result.code === "200") && result.data) {
      // 成功，更新本地提示词的ID（新增时需要）
      if (!isUpdate) {
        prompt.id = result.data.promptId;
      }
      console.log('提示词保存成功:', result.data);
      showToast(result.message || (isUpdate ? '提示词更新成功' : '提示词添加成功'));
      return true;
    } else {
      console.warn('保存提示词失败:', result);
      showToast('保存提示词失败: ' + (result.message || '请求错误'));
      return false;
    }
  } catch (error) {
    console.error('保存提示词请求错误:', error);
    showToast('保存提示词失败，请检查网络连接');
    return false;
  }
};

// 添加模型相关状态
const showAddModelModal = ref(false);
const newModel = ref({
  modelName: '',
  modelProvider: '',
  modelDescription: '',
  modelTag: ''
});
const modelTagsInput = ref('');
const isEditingModel = ref(false); // 是否处于编辑模式

// 处理添加模型弹窗蒙层的鼠标松开事件
const handleAddModelModalOverlayMouseUp = (event) => {
  // 只有当鼠标按下和松开的是同一个元素，且是蒙层本身时，才关闭弹窗
  if (modalMouseDownTarget.value === event.target && event.target.classList.contains('modal-overlay')) {
    showAddModelModal.value = false;
  }
  // 重置鼠标按下的目标
  modalMouseDownTarget.value = null;
};

// 打开添加模型弹窗
const openAddModelModal = () => {
  // 重置表单数据，设置为新增模式
  isEditingModel.value = false;
  newModel.value = {
    modelName: '',
    modelProvider: '',
    modelDescription: '',
    modelTag: ''
  };
  modelTagsInput.value = '';
  showAddModelModal.value = true;
  showModelSelector.value = false; // 关闭模型选择器
};

// 编辑模型
const editModel = (model, event) => {
  // 设置为编辑模式
  isEditingModel.value = true;
  // 填充表单数据
  newModel.value = {
    modelName: model.name,
    modelProvider: model.provider,
    modelDescription: model.description,
    modelTag: model.tags.join(',')
  };
  modelTagsInput.value = model.tags.join(',');
  // 打开弹窗
  showAddModelModal.value = true;
  // 阻止事件冒泡，避免触发模型选择
  if (event) event.stopPropagation();
};

// 保存新模型或更新现有模型
const saveNewModel = async () => {
  try {
    // 验证表单
    if (!newModel.value.modelName) {
      showToast('请输入模型名称');
      return;
    }
    
    // 处理标签
    newModel.value.modelTag = modelTagsInput.value;
    
    // 根据是否为编辑模式，选择不同的API接口
    const apiUrl = isEditingModel.value ? 
      `${API_BASE_URL}/ai/model/updateModel` : 
      `${API_BASE_URL}/ai/model/addModel`;
    
    // 发送请求添加或更新模型
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newModel.value)
    });
    
    const result = await response.json();
    
    if (result.code === "200" && result.data) {
      console.log(isEditingModel.value ? '模型更新成功:' : '模型添加成功:', result.data);
      showToast(isEditingModel.value ? '模型更新成功' : '模型添加成功');
      
      // 关闭弹窗并刷新模型列表
      showAddModelModal.value = false;
      await fetchAllModels();
    } else {
      console.warn(isEditingModel.value ? '更新模型失败:' : '添加模型失败:', result);
      showToast((isEditingModel.value ? '更新模型失败: ' : '添加模型失败: ') + 
                (result.userMessage || result.message || '请求错误'));
    }
  } catch (error) {
    console.error(isEditingModel.value ? '更新模型请求错误:' : '添加模型请求错误:', error);
    showToast((isEditingModel.value ? '更新模型失败' : '添加模型失败') + '，请检查网络连接');
  }
};

// 新增确认删除模型的弹窗
const showDeleteModelConfirm = ref(false);
const modelToDelete = ref<any>(null);

// 显示删除确认弹窗
const confirmDeleteModel = (model: any, event: Event) => {
  modelToDelete.value = {
    modelProvider: model.provider,
    modelName: model.name
  };
  showDeleteModelConfirm.value = true;
  if (event) event.stopPropagation();
};

// 删除模型
const deleteModel = async () => {
  try {
    if (!modelToDelete.value) return;

    // 发送请求删除模型
    const response = await fetch(`${API_BASE_URL}/ai/model/deleteModel`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        modelProvider: modelToDelete.value.modelProvider,
        modelName: modelToDelete.value.modelName
      })
    });

    const result = await response.json();

    if (result.code === "200") {
      console.log('模型删除成功');
      showToast('模型删除成功');
      
      // 关闭确认弹窗并刷新模型列表
      showDeleteModelConfirm.value = false;
      await fetchAllModels();
      
      // 如果删除的是当前选中的模型，重置选择
      if (selectedModel.value === modelToDelete.value.modelName) {
        if (availableModels.value.length > 0) {
          selectedModel.value = availableModels.value[0].id;
        } else {
          selectedModel.value = '';
        }
      }
    } else {
      console.warn('删除模型失败:', result);
      showToast('删除模型失败: ' + (result.userMessage || result.message || '请求错误'));
    }
  } catch (error) {
    console.error('删除模型请求错误:', error);
    showToast('删除模型失败，请检查网络连接');
  }
};

// 取消删除
const cancelDeleteModel = () => {
  showDeleteModelConfirm.value = false;
  modelToDelete.value = null;
};

// 处理删除模型确认弹窗蒙层的鼠标松开事件
const handleDeleteModelConfirmOverlayMouseUp = (event) => {
  // 只有当鼠标按下和松开的是同一个元素，且是蒙层本身时，才关闭弹窗
  if (modalMouseDownTarget.value === event.target && event.target.classList.contains('modal-overlay')) {
    cancelDeleteModel();
  }
  // 重置鼠标按下的目标
  modalMouseDownTarget.value = null;
};

</script>

<style lang="less" scoped>
.chat-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
  font-family: var(--font-family, 'PingFang SC', 'Microsoft YaHei', sans-serif);
  color: var(--text-color, #333);
  background-color: var(--background-color, #f7f7f9);
  
  // 默认主题变量
  --primary-color: #4665ee;
  --secondary-color: #f7f7f9;
  --background-color: #f7f7f9;
  --text-color: #333333;
  --accent-color: #FF6B95;

  // 添加主题变量，跟随系统主题切换
  &.theme-default {
    --primary-color: #4665ee;
    --secondary-color: #f7f7f9; // 与背景色保持一致
    --background-color: #f7f7f9;
    --text-color: #333333;
    --accent-color: #FF6B95;
  }

  &.theme-emerald {
    --primary-color: #10b981;
    --secondary-color: #ecfdf5; // 调整回略深的次要颜色
    --background-color: #f0fbf5; // 调整为略带绿色调的背景
    --text-color: #064e3b; // 加深文本颜色
    --accent-color: #7c3aed; // 加深紫色强调色
  }

  &.theme-sunset {
    --primary-color: #f97316;
    --secondary-color: #fff1e6; // 更明显的橙色背景
    --background-color: #fffaf5; // 调整为略带橙色调的背景
    --text-color: #7c2d12; // 加深文本颜色
    --accent-color: #2563eb; // 更深的蓝色强调
  }

  &.theme-lavender {
    --primary-color: #8b5cf6;
    --secondary-color: #faf5ff; // 与背景色保持一致
    --background-color: #faf5ff;
    --text-color: #581c87;
    --accent-color: #ec4899;
  }

  &.theme-graphite {
    --primary-color: #334155;
    --secondary-color: #f1f5f9; // 更明显的背景色
    --background-color: #f8fafc;
    --text-color: #0f172a;
    --accent-color: #4f46e5; // 更亮的强调色
  }
  
  /* 根据字体设置调整 */
  &.font-size-small {
    font-size: 0.9rem;
  }
  
  &.font-size-medium {
    font-size: 1rem;
  }
  
  &.font-size-large {
    font-size: 1.1rem;
  }
  
  &.font-spacing-compact {
    line-height: 1.4;
  }
  
  &.font-spacing-normal {
    line-height: 1.6;
  }
  
  &.font-spacing-relaxed {
    line-height: 1.8;
  }
  
  &.font-family-default {
    --font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  }
  
  &.font-family-serif {
    --font-family: 'Noto Serif SC', serif;
  }
  
  &.font-family-mono {
    --font-family: 'Fira Code', 'Source Code Pro', monospace;
  }
  
  /* 深色模式 */
  &.dark-mode {
    --background-color: #1a1a1a;
    --secondary-color: #2a2a2a;
    --text-color: #f0f0f0;
    --sidebar-border-color: #333;
    
    .sidebar {
      background: var(--secondary-color);
      border-right-color: var(--sidebar-border-color);
      
      .sidebar-header {
        border-bottom-color: var(--sidebar-border-color);
      }
      
      .logo {
        color: #fff;
      }
      
      .history-item {
        &:hover {
          background: #333;
        }
      }
      
      .sidebar-footer {
        border-top-color: var(--sidebar-border-color);
      }
    }
    
    .message-content {
      background: #2a2a2a;
      color: #f0f0f0;
      
      .message-time {
        color: #aaa;
      }
    }
    
    .user-message .message-content {
      background: linear-gradient(135deg, #FF9A8B, #FF6B95); // 保持深色模式下用户消息背景也使用粉色系
    }
    
    .chat-input-area {
      background: #2a2a2a;
      border: 1px solid #333;
      
      .chat-input {
        color: #f0f0f0;
      }
    }
    
    .modal-container {
      background: #2a2a2a;
      color: #f0f0f0;
      
      .modal-header {
        border-bottom-color: #333;
      }
      
      .modal-footer {
        border-top-color: #333;
      }
    }
  }
}

/* 侧边栏切换按钮 */
.sidebar-toggle {
  position: fixed;
  left: 10px;
  top: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 30;
  border: none;
  color: #666;
  transition: all 0.2s;
  
  &:hover {
    background: #f0f0f3;
    color: #333;
    transform: scale(1.05);
  }
  
  svg {
    stroke: currentColor;
  }
}

/* 侧边栏样式 */
.sidebar {
  width: 260px;
  background: var(--background-color, #f7f7f9); // 使用与主页面相同的背景色
  border-right: 1px solid rgba(0, 0, 0, 0.12); // 加深边框颜色
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.03); // 添加轻微阴影增加层次感
  
  &.sidebar-collapsed {
    width: 0;
    margin-left: -10px;
    border: none;
  }
  
  .sidebar-header {
    padding: 12px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12); // 加深边框颜色
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50px;
    background: rgba(0, 0, 0, 0.02); // 轻微背景色区别
    
    .logo {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-color, #333); // 使用主题文本颜色
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 6px;
      
      .logo-icon {
        width: 24px;
        height: 24px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        
        svg {
          width: 100%;
          height: 100%;
        }
      }
      
      span {
        position: relative;
        top: 1px;
      }
    }
    
    .header-buttons {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: auto;
    }
    
    .exit-btn,
    .collapse-btn {
      background: transparent;
      border: none;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #666;
      transition: all 0.2s;
      
      &:hover {
        background: rgba(0, 0, 0, 0.05);
        color: #333;
      }
    }
    
    .exit-btn:hover {
      color: #e74c3c;
      background: rgba(231, 76, 60, 0.1);
    }
  }
  
  .sidebar-actions {
    padding: 12px;
    
    .new-chat-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 10px;
      background: linear-gradient(135deg, #FF9A8B, #FF6B95);
      color: white;
      border: none;
      border-radius: 16px;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 3px 8px rgba(255, 107, 149, 0.3);
      font-weight: 600;
      
      &:hover {
        background: linear-gradient(135deg, #FF8A7B, #FF5B85);
        transform: translateY(-1px);
        box-shadow: 0 4px 10px rgba(255, 107, 149, 0.4);
      }
      
      .btn-icon {
        margin-right: 6px;
        font-weight: bold;
        font-size: 1.1rem;
      }
    }
  }
  
  .history-list {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    
    .history-item {
      padding: 10px 12px;
      border-radius: 8px;
      margin-bottom: 6px;
      cursor: pointer;
      transition: background 0.2s;
      position: relative;
      border: 1px solid rgba(0, 0, 0, 0.04); // 添加轻微边框
      
      &:hover {
        background: rgba(0, 0, 0, 0.06); // 加深悬停效果
        border-color: rgba(0, 0, 0, 0.08); // 加深悬停时边框
      }
      
      .history-content {
        flex: 1;
        overflow: hidden;
        
        .history-title {
          font-size: 0.9rem;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-right: 80px;
          position: relative;
        }
        
        .history-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: nowrap;
          overflow: hidden;
          
          .history-time {
            font-size: 0.75rem;
            color: #888;
            flex-shrink: 0;
          }
          
          .history-tags {
            display: inline-flex;
            flex-wrap: nowrap;
            gap: 4px;
            overflow: hidden;
            
            .history-tag {
              font-size: 0.65rem;
              padding: 1px 5px;
              border-radius: 10px;
              color: white;
              white-space: nowrap;
              font-weight: 500;
              flex-shrink: 0;
            }
          }
        }
      }
      
      .history-actions {
        display: flex;
        position: absolute;
        top: 10px;
        right: 8px;
        gap: 3px;
        
        .history-action-btn {
          background: transparent;
          border: none;
          color: #999;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0.8;
          transition: all 0.2s;
          
          &:hover {
            background: rgba(0, 0, 0, 0.05);
            opacity: 1;
          }
          
          &.tag-btn:hover {
            background: rgba(255, 107, 149, 0.1);
            color: #FF6B95;
          }
          
          &.export-btn:hover {
            background: rgba(70, 101, 238, 0.1);
            color: #4665ee;
          }
          
          &.delete-history-btn:hover {
            background: rgba(255, 59, 48, 0.1);
            color: #ff3b30;
          }
        }
      }
    }
  }
  
  .sidebar-footer {
    padding: 12px;
    border-top: 1px solid rgba(0, 0, 0, 0.12); // 加深边框颜色
    background: rgba(0, 0, 0, 0.02); // 轻微背景色区别
    
    .settings-btn,
    .profile-btn {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 8px 10px;
      background: rgba(255, 255, 255, 0.7); // 轻微白色背景
      border: 1px solid rgba(0, 0, 0, 0.1); // 加深边框
      border-radius: 8px;
      font-size: 0.9rem;
      cursor: pointer;
      color: var(--text-color, #333); // 使用主题文本颜色
      
      &:hover {
        background: rgba(0, 0, 0, 0.06); // 加深悬停效果
        transform: translateY(-1px); // 轻微抬起效果
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); // 悬停时添加阴影
      }
      
      .btn-icon {
        margin-right: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    
    .settings-btn {
      margin-bottom: 8px;
    }
  }
}

/* 主内容区样式 */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.full-width {
    width: 100%;
  }
}

.chat-content {
  flex: 1;
  overflow-y: auto;
  padding: 0;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  padding-bottom: 150px; // 增加底部内边距，让聊天内容出现在更上方
  position: relative; // 添加相对定位作为输入框的定位基准
}

.welcome-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: -100px;
  
  .bot-avatar {
    margin-bottom: 20px;
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #FF9A8B, #FF6B95);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 20px rgba(255, 107, 149, 0.4);
    position: relative;
    overflow: hidden;
    
    img {
      width: 180px;
      height: 180px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -42%);
      filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));
    }
  }
  
  .welcome-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 16px;
    color: #333;
  }
  
  .welcome-subtitle {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    line-height: 1.5;
  }
}

.message-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px 120px; // 增加底部内边距
  
  .message-item {
    display: flex;
    margin-bottom: 24px;
    
    &.user-message {
      flex-direction: row-reverse;
      justify-content: flex-start; // 从右侧开始
      
      .message-avatar {
        margin-right: 0;
        margin-left: 12px;
      }
      
      .message-content {
        background-color: #e9efff;
        margin-right: 0;
        margin-left: auto; // 靠右对齐
        
        .message-text {
          color: #333333;
        }
      }
    }
    
    &.bot-message {
      justify-content: flex-start; // 从左侧开始
      
      .message-avatar {
        background: #f0f7ff;
      }
      
      .message-content {
        margin-left: 0;
        margin-right: auto; // 靠左对齐
      }
    }
    
    .message-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-right: 12px;
    }
    
    .message-content {
      flex: 0 1 auto; // 修改为自适应宽度
      min-width: 60px; // 设置最小宽度
      max-width: 80%; // 最大宽度为容器的80%
      width: fit-content; // 根据内容适应宽度
      padding: 12px 16px;
      border-radius: 12px;
      background-color: #f0f0f3;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      align-self: flex-start; // 确保与顶部对齐
      
      .message-time {
        font-size: 0.75rem;
        color: #888888;
        margin-top: 6px;
        text-align: right;
      }
      
      .message-text {
        font-size: 0.95rem;
        line-height: 1.5;
        color: #333333;
        word-break: break-word;
        white-space: pre-wrap;
        
        code {
          background-color: rgba(0, 0, 0, 0.05);
          padding: 2px 4px;
          border-radius: 4px;
          font-family: monospace;
        }
        
        pre {
          background-color: #f1f1f1;
          padding: 12px;
          border-radius: 8px;
          overflow-x: auto;
          margin: 10px 0;
          
          code {
            background-color: transparent;
            padding: 0;
          }
        }
      }
      
      /* 思考内容区域样式 */
      .message-thinking {
        margin-bottom: 12px;
        padding: 10px;
        background-color: #f9f5ff;
        border-radius: 8px;
        border-left: 3px solid #8b5cf6;
        font-size: 0.9rem;
        width: 100%; // 确保思考区域宽度为100%
        box-sizing: border-box; // 包含padding在内
        
        .thinking-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
          font-weight: 500;
          color: #8b5cf6;
          font-size: 0.85rem;
          
          svg {
            color: #8b5cf6;
          }
        }
        
        .thinking-content {
          color: #6b7280;
          line-height: 1.4;
        }
      }
    }
    
    &.user-message {
      flex-direction: row-reverse;
      
      .message-avatar {
        margin-right: 0;
        margin-left: 12px;
        background: #deeaff;
      }
      
      .message-content {
        background: linear-gradient(135deg, #FF9A8B, #FF6B95); // 使用与主题相匹配的渐变粉色系
        color: white;
        
        .message-time {
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
    
    &.bot-message {
      .message-avatar {
        background: #f0f7ff;
      }
    }
  }
  
  .typing-indicator {
    display: flex;
    padding: 12px 16px;
    background: white;
    border-radius: 12px;
    width: fit-content;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    
    .typing-dot {
      width: 8px;
      height: 8px;
      background: #888;
      border-radius: 50%;
      margin: 0 2px;
      animation: typing-dot 1.4s infinite ease-in-out both;
      
      &:nth-child(1) {
        animation-delay: -0.32s;
      }
      
      &:nth-child(2) {
        animation-delay: -0.16s;
      }
    }
  }
}

.chat-input-wrapper {
  position: absolute; // 相对于.chat-content绝对定位
  left: 50%; 
  transform: translateX(-50%); // 使用transform居中
  bottom: 20px;
  width: 100%;
  max-width: 700px; 
  margin: 0 auto; // 确保居中
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  z-index: 50; 
  
  // 根据侧边栏状态调整位置
  &.sidebar-expanded {
    // 移除 transform 位移，侧边栏展开时也保持中央位置
    margin-left: 0;
  }
  
  &.with-messages {
    position: absolute; // 改为绝对定位
    bottom: 20px;
  }
  
  .chat-input-area {
    display: flex;
    position: relative;
    flex-direction: column;
    background: white;
    border-radius: 12px;
    padding: 14px 16px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    margin: 0 20px; // 添加水平边距
    
    .mode-selector-inner {
      display: flex;
      margin-bottom: 10px;
      gap: 8px;
      
      .mode-btn {
        display: flex;
        align-items: center;
        padding: 6px 12px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.05);
        border: none;
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.2s;
        color: #333;
        
        svg {
          margin-right: 6px;
        }
        
        &.deep-think-btn {
          background-color: rgba(100, 80, 220, 0.1);
          color: #5140a7;
          
          svg {
            stroke: #5140a7;
          }
          
          &:hover {
            background-color: rgba(100, 80, 220, 0.2);
          }
          
          &.active {
            background-color: #5140a7;
            color: white;
            
            svg {
              stroke: white;
            }
          }
        }
        
        &.web-search-btn {
          background-color: rgba(14, 165, 233, 0.1);
          color: #0284c7;
          
          svg {
            stroke: #0284c7;
          }
          
          &:hover {
            background-color: rgba(14, 165, 233, 0.2);
          }
        }

        &.cloud-model-btn {
          background-color: rgba(25, 118, 210, 0.1);
          color: #1976d2;
          
          svg {
            stroke: #1976d2;
          }
          
          &:hover {
            background-color: rgba(25, 118, 210, 0.2);
          }
          
          &.active {
            background-color: #1976d2;
            color: white;
            
            svg {
              stroke: white;
            }
          }
        }
      }
    }
    
    .input-row {
      display: flex;
      align-items: flex-end;
      
      .chat-input {
        flex: 1;
        border: none;
        background: transparent;
        font-size: 1.05rem;
        resize: none;
        outline: none;
        line-height: 1.5;
        max-height: 220px; // 增加最大高度
        min-height: 60px; // 显著增加最小高度
        padding: 15px 0 15px 10px; // 增加内边距并添加左侧内边距
        overflow-y: auto;
        text-align: left; // 确保文本左对齐
      }
      
      .input-tools {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        align-self: flex-end;
        margin-left: 8px;
        
        .tool-btn {
          background: transparent;
          border: none;
          color: #666;
          padding: 6px 8px;
          margin-right: 6px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          
          &:hover {
            background: rgba(0, 0, 0, 0.05);
            color: #333;
          }
          
          /* 模型切换按钮特殊样式 */
          &.model-switch-btn {
            color: var(--accent-color);
            
            &:hover {
              background: rgba(255, 107, 149, 0.1);
              color: #FF5B85;
            }
          }
          
          /* 提示词库按钮特殊样式 */
          &.prompt-library-btn {
            color: var(--primary-color);
            
            &:hover {
              background: rgba(70, 101, 238, 0.1);
              color: #3a56d4;
            }
          }
          
          /* 文件管理按钮特殊样式 */
          &.upload-btn {
            color: #42b983; /* 翡翠绿色 */
            
            &:hover {
              background: rgba(66, 185, 131, 0.1);
              color: #35a574;
            }
          }
        }
        
        .send-btn {
          color: #4665ee;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 6px 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          
          &:hover {
            background: rgba(70, 101, 238, 0.1);
          }
          
          &:disabled {
            color: #ccc;
            cursor: not-allowed;
          }
          
          svg {
            stroke: currentColor;
          }
        }
      }
    }
  }
  
  // 添加免责声明文本
  &::after {
    content: "内容由 AI 生成，请仔细甄别";
    display: block;
    text-align: center;
    font-size: 12px;
    color: #999;
    margin-top: 10px;
    width: 100%;
    padding: 0 20px;
  }
}

/* Toast 样式 */
.toast-container {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, rgba(255, 154, 139, 0.95), rgba(255, 107, 149, 0.95)); // 使用与用户消息相同的渐变色，添加透明度
  color: white;
  padding: 12px 24px;
  border-radius: 12px; // 增加圆角
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  box-shadow: 0 8px 20px rgba(255, 107, 149, 0.3); // 柔和的阴影，与粉色系匹配
  max-width: 90%;
  
  &.toast-show {
    opacity: 1;
  }
  
  .toast-message {
    font-size: 1rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500; // 稍微加粗字体
  }
}

@keyframes typing-dot {
  0%, 80%, 100% { transform: scale(0.7); }
  40% { transform: scale(1); }
}

/* 弹出层样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
}

.modal-container {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  animation: modal-appear 0.3s ease-out;
  
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
    
    h3 {
      margin: 0;
      font-size: 1rem;
      color: #333;
      font-weight: 600;
    }
    
    .modal-close {
      background: transparent;
      border: none;
      font-size: 1.3rem;
      cursor: pointer;
      color: #888;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      
      &:hover {
        color: #333;
        background: #f0f0f3;
      }
    }
  }
  
  .modal-body {
    padding: 16px;
    overflow-y: auto;
  }
  
  .modal-footer {
    padding: 10px 16px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    
    button {
      padding: 6px 14px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s;
    }
    
    .cancel-btn {
      background: transparent;
      border: 1px solid #ddd;
      color: #666;
      
      &:hover {
        background: #f5f5f5;
      }
    }
    
    .confirm-btn {
      background: linear-gradient(135deg, #FF9A8B, #FF6B95); // 使用与提示框和用户消息相同的渐变色
      border: none;
      color: white;
      box-shadow: 0 2px 8px rgba(255, 107, 149, 0.3); // 添加轻微阴影
      
      &:hover {
        background: linear-gradient(135deg, #FF8A7B, #FF5B85); // 悬停时稍微深一点
        transform: translateY(-1px);
        box-shadow: 0 4px 10px rgba(255, 107, 149, 0.4);
      }
    }
    
    .add-model-btn {
      background: linear-gradient(135deg, #42b983, #2f9661);
      border: none;
      color: white;
      box-shadow: 0 2px 8px rgba(66, 185, 131, 0.3);
      margin-right: auto; // 将按钮推到左侧
      
      &:hover {
        background: linear-gradient(135deg, #3ca876, #278255);
        transform: translateY(-1px);
        box-shadow: 0 4px 10px rgba(66, 185, 131, 0.4);
      }
    }
  }
}

/* 标签选择器样式 */
.tag-selector {
  .tags-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 16px;
    
    .tag-item {
      display: flex;
      align-items: center;
      border: 1px solid #eee;
      border-left-width: 3px;
      border-radius: 6px;
      padding: 6px 10px;
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover {
        background: #f9f9f9;
      }
      
      &.selected {
        background: #f5f8ff;
      }
      
      .tag-color {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 8px;
      }
      
      .tag-name {
        flex: 1;
        font-size: 0.9rem;
      }
      
      .tag-check {
        color: #4665ee;
        font-weight: bold;
      }
    }
  }
  
  /* 标题输入框样式 */
  .title-input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background-color: #f9f9fb;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
    
    &:focus {
      outline: none;
      border-color: #4665ee;
      background-color: #fff;
      box-shadow: 0 0 0 3px rgba(70, 101, 238, 0.1);
    }
    
    &::placeholder {
      color: #aaa;
    }
  }
  
  .form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
}

/* 导出菜单样式 */
.export-menu {
  .export-options {
    display: flex;
    flex-direction: column;
    
    .export-option {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 8px;
      cursor: pointer;
      margin-bottom: 2px;
      
      &:hover {
        background: #f5f8ff;
      }
      
      .export-icon {
        margin-right: 12px;
        color: #4665ee;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .export-format {
        font-size: 0.95rem;
        color: #333;
      }
    }
  }
}

@keyframes modal-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .chat-container {
    flex-direction: column;
  }
  
  .sidebar-toggle {
    top: 10px;
    left: 10px;
  }
  
  .sidebar {
    width: 100%;
    height: auto;
    max-height: 300px;
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
    
    &.sidebar-collapsed {
      max-height: 0;
      padding: 0;
      margin: 0;
      border-bottom: none;
    }
  }
  
  .chat-input-wrapper {
    bottom: 20px;
    padding: 0 16px;
    
    &.with-messages {
      padding: 10px 16px;
    }
  }
}

@media (max-width: 992px) {
  .sidebar:not(.sidebar-collapsed) {
    width: 240px;
  }
}

@keyframes modal-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 文件管理器样式 */
.file-manager {
  .file-manager-toolbar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 16px;
    
    .file-search {
      flex: 1;
      min-width: 200px;
      position: relative;
      
      .file-search-input {
        width: 100%;
        padding: 8px 12px 8px 32px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 0.9rem;
        
        &:focus {
          outline: none;
          border-color: #4665ee;
        }
      }
      
      .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #888;
      }
    }
    
    .file-filters {
      display: flex;
      gap: 4px;
      
      .filter-btn {
        padding: 6px 12px;
        background: #f0f0f3;
        border: none;
        border-radius: 6px;
        font-size: 0.85rem;
        cursor: pointer;
        color: #666;
        
        &:hover {
          background: #e5e5e5;
        }
        
        &.active {
          background: #4665ee;
          color: white;
        }
      }
    }
    
    .upload-file-btn {
      padding: 6px 12px;
      background: #4665ee;
      color: white;
      border: none;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover {
        background: #3a56d4;
        transform: translateY(-1px);
      }
    }
  }
  
  .files-container {
    border: 1px solid #eee;
    border-radius: 6px;
    max-height: 400px;
    overflow-y: auto;
    
    .file-item {
      display: flex;
      align-items: flex-start;
      padding: 12px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: background 0.2s;
      position: relative;
      
      &:last-child {
        border-bottom: none;
      }
      
      &:hover {
        background: #f5f8ff;
      }
      
      &.selected {
        background: #e9efff;
      }
      
      .file-icon {
        margin-right: 12px;
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        margin-top: 2px;
      }
      
      .file-details {
        flex: 1;
        min-width: 0;
        
        .file-name {
          font-weight: 500;
          margin-bottom: 4px;
          font-size: 0.95rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-right: 60px;
          
          &.restricted {
            color: #888;
          }
          
          .restricted-badge {
            display: inline-block;
            font-size: 0.65rem;
            background: #EB5757;
            color: white;
            padding: 1px 5px;
            border-radius: 10px;
            margin-left: 6px;
            font-weight: bold;
            position: relative;
            top: -1px;
          }
        }
        
        .file-meta {
          display: flex;
          gap: 12px;
          margin-bottom: 4px;
          font-size: 0.8rem;
          color: #888;
          
          .file-size, .file-date {
            white-space: nowrap;
          }
        }
        
        .file-description {
          font-size: 0.85rem;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      
      .file-actions {
        position: absolute;
        top: 12px;
        right: 12px;
        display: flex;
        gap: 4px;
        
        .file-action-btn {
          background: transparent;
          border: none;
          width: 26px;
          height: 26px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #888;
          transition: all 0.2s;
          
          &:hover {
            background: rgba(0, 0, 0, 0.05);
            color: #333;
          }
          
          &.toggle-access:hover {
            color: #4665ee;
          }
          
          &.delete-file:hover {
            color: #EB5757;
          }
        }
      }
    }
    
    .no-files {
      padding: 30px;
      text-align: center;
      color: #888;
      font-size: 0.9rem;
    }
  }
}

/* 文件上传模态框样式 */
.file-upload-modal {
  max-width: 500px;
  
  .file-upload-area {
    .upload-dropzone {
      border: 2px dashed #ddd;
      border-radius: 8px;
      padding: 30px;
      text-align: center;
      margin-bottom: 20px;
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover {
        border-color: #4665ee;
        background: #f9f9ff;
      }
      
      svg {
        color: #888;
        margin-bottom: 10px;
      }
      
      p {
        font-size: 1rem;
        color: #333;
        margin: 0 0 8px;
      }
      
      .upload-formats {
        font-size: 0.8rem;
        color: #888;
      }
    }
    
    .upload-form {
      .form-group {
        margin-bottom: 14px;
        
        label {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 6px;
          color: #555;
        }
        
        input[type="text"], textarea {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.9rem;
          
          &:focus {
            outline: none;
            border-color: #4665ee;
          }
        }
        
        textarea {
          resize: vertical;
        }
        
        .checkbox-label {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          
          input[type="checkbox"] {
            margin-right: 8px;
          }
          
          .hint {
            font-size: 0.8rem;
            color: #888;
            margin-left: 22px;
          }
        }
      }
    }
  }
}

/* 主题设置弹出窗口样式 */
.theme-settings {
  .settings-layout {
    display: flex;
    gap: 20px;
    
    .settings-column {
      flex: 1;
      min-width: 0;
      
      &:first-child {
        flex: 0 0 55%;
      }
      
      &:last-child {
        flex: 0 0 45%;
      }
    }
  }

  .theme-section {
    margin-bottom: 12px;
    
    /* 隐藏字体设置标题 */
    &:nth-child(3) .section-title {
      display: none;
    }
    
    .section-row {
      display: flex;
      align-items: center;
      margin-bottom: 6px;
    }
    
    .section-title {
      font-size: 0.95rem;
      font-weight: bold;
      width: 70px;
      margin-right: 8px;
      margin-bottom: 0;
    }
    
    .theme-options {
      display: flex;
      gap: 8px;
      flex: 1;
      
      .theme-option {
        flex: 1;
        padding: 5px;
        border: 2px solid #ddd;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
        
        &.selected {
          border-color: #4665ee;
        }
        
        .theme-preview {
          width: 100%;
          height: 30px;
          border-radius: 4px;
          margin-bottom: 4px;
        }
        
        .theme-name {
          font-size: 0.85rem;
          color: #333;
          text-align: center;
        }
      }
    }
    
    .mode-toggle {
      display: flex;
      gap: 8px;
      flex: 1;
      
      .mode-btn {
        flex: 1;
        padding: 8px;
        border: 2px solid #ddd;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &.active {
          border-color: #4665ee;
        }
        
        svg {
          margin-right: 5px;
        }
      }
    }
    
    .setting-label {
      font-size: 0.85rem;
      font-weight: bold;
      width: 70px;
      margin-right: 8px;
    }
    
    .setting-options {
      display: flex;
      gap: 6px;
      flex: 1;
      
      .option-btn {
        flex: 1;
        padding: 8px;
        border: 2px solid #ddd;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 0.85rem;
        
        &.active {
          border-color: #4665ee;
        }
      }
    }
  }
}

/* 提示词库样式 */
.prompt-library {
  .prompt-library-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
    
    .prompt-search {
      position: relative;
      flex: 1; // 让搜索框占据剩余空间
      min-width: 200px;
      
      .prompt-search-input {
        width: 100%;
        padding: 8px 12px 8px 36px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 0.9rem;
        
        &:focus {
          outline: none;
          border-color: var(--primary-color);
        }
      }
      
      .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #888;
      }
    }
    
    .prompt-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      
      .filter-btn {
        padding: 6px 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        background: white;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.2s;
        
        &:hover {
          background: rgba(0, 0, 0, 0.05);
        }
        
        &.active {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
      }
    }
    
    .add-prompt-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 0.85rem;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
      
      &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
      
      svg {
        stroke: currentColor;
      }
    }
    
    /* 模型切换按钮样式 */
    .model-switch-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: var(--accent-color);
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 0.85rem;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
      
      &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
      }
      
      svg {
        stroke: currentColor;
      }
    }
  }
  
  .prompts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
    
    .prompt-card {
      border: 1px solid #eee;
      border-radius: 8px;
      overflow: hidden;
      transition: all 0.2s;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      cursor: pointer;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      
      .prompt-card-header {
        padding: 10px 12px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .prompt-name {
          font-weight: 600;
          font-size: 0.95rem;
          max-width: 180px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .prompt-category-badge {
          padding: 2px 6px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.2);
          font-size: 0.7rem;
          font-weight: 500;
        }
      }
      
      .prompt-card-body {
        padding: 12px;
        flex: 1;
        display: flex;
        flex-direction: column;
        
        .prompt-description {
          font-size: 0.85rem;
          margin-bottom: 8px;
          color: #666;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }
        
        .prompt-tool-id {
          font-size: 0.75rem;
          color: #888;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: #f8f9fa;
          border-radius: 12px;
          border: 1px solid #e9ecef;
          width: fit-content;
          
          svg {
            color: #6c757d;
          }
        }
        
        .prompt-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          
          .prompt-tag {
            font-size: 0.7rem;
            padding: 2px 6px;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.05);
            color: #666;
            white-space: nowrap;
          }
          
          .prompt-tag-more {
            font-size: 0.7rem;
            padding: 2px 6px;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.03);
            color: #888;
          }
        }
      }
      
      .prompt-card-footer {
        padding: 8px 12px;
        border-top: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .prompt-actions {
          display: flex;
          gap: 4px;
          
          .prompt-action-btn {
            background: transparent;
            border: none;
            width: 26px;
            height: 26px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #888;
            transition: all 0.2s;
            
            &:hover {
              background: rgba(0, 0, 0, 0.05);
              color: #333;
            }
            
            &.copy-btn:hover {
              color: var(--primary-color);
              background: rgba(70, 101, 238, 0.1);
            }
            
            &.edit-btn:hover {
              color: #4CAF50;
              background: rgba(76, 175, 80, 0.1);
            }
            
            &.delete-btn:hover {
              color: #F44336;
              background: rgba(244, 67, 54, 0.1);
            }
          }
        }
      }
    }
  }
  
  .no-prompts {
    text-align: center;
    padding: 30px;
    color: #888;
    font-style: italic;
  }
}

/* 提示词预览提示 */
.prompt-preview-tooltip {
  position: fixed;
  z-index: 1000;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 16px;
  width: 320px;
  max-height: 400px;
  overflow-y: auto;
  
  .preview-header {
    font-weight: 600;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;
  }
  
  .preview-content {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #333;
    white-space: pre-wrap;
  }
}

/* 提示词编辑模态框 */
.prompt-modal {
  .prompt-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      
      label {
        font-size: 0.9rem;
        font-weight: 500;
        color: #555;
      }
      
      input, textarea, select {
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 6px;
        font-size: 0.9rem;
        
        &:focus {
          outline: none;
          border-color: var(--primary-color);
        }
      }
      
      textarea {
        min-height: 120px;
        resize: vertical;
      }
    }
  }
}

/* 模型选择器样式 */
.model-selector {
  .models-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 60vh;
    overflow-y: auto;
    padding: 4px;
    
    .model-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      border: 1px solid #eee;
      border-radius: 12px;
      cursor: pointer;
      position: relative;
      transition: all 0.2s;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }
      
      &.selected {
        border-color: var(--primary-color);
        background: rgba(70, 101, 238, 0.05);
      }
      
      .model-icon {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      
      .model-details {
        flex: 1;
        overflow: hidden;
        
        .model-name {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 4px;
        }
        
        .model-provider {
          font-size: 0.85rem;
          color: #666;
          margin-bottom: 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .model-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          
          .model-tag {
            font-size: 0.7rem;
            padding: 3px 8px;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.05);
            color: #666;
          }
        }
      }
      
      .model-select-indicator {
        position: absolute;
        right: 16px;
        top: 16px;
        color: var(--primary-color);
      }
      
      .model-actions {
        position: absolute;
        right: 16px;
        bottom: 16px;
        display: flex;
        gap: 8px;
        
        .edit-model-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.9);
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          color: #555;
          
          &:hover {
            background-color: white;
            transform: scale(1.05);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            color: var(--primary-color);
          }
        }
        .delete-model-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.9);
          border: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          color: #555;
          
          &:hover {
            background-color: white;
            transform: scale(1.05);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            color: #EB5757;
          }
        }
      }
    }
  }
}

/* 添加模型弹出层样式 */
.add-model-modal {
  .model-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 70vh;
    overflow-y: auto;
    padding: 0 4px;
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      
      label {
        font-size: 0.9rem;
        font-weight: 500;
        color: #555;
      }
      
      input, textarea {
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 0.9rem;
        transition: all 0.2s;
        background-color: #f9f9fb;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
        
        &:focus {
          outline: none;
          border-color: #42b983;
          background-color: #fff;
          box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
        }
        
        &::placeholder {
          color: #aaa;
        }
      }
      
      textarea {
        min-height: 100px;
        resize: vertical;
      }
    }
  }
}

/* 删除模型确认弹窗样式 */
.delete-model-confirm {
  .confirm-message {
    font-size: 1rem;
    margin-bottom: 16px;
    text-align: center;
    
    strong {
      color: #EB5757;
    }
  }
  
  .confirm-warning {
    font-size: 0.9rem;
    color: #888;
    text-align: center;
    background-color: rgba(235, 87, 87, 0.1);
    padding: 8px 12px;
    border-radius: 8px;
    border-left: 3px solid #EB5757;
  }
  
  .modal-footer {
    .delete-btn {
      background: linear-gradient(135deg, #EB5757, #CC4444);
      border: none;
      color: white;
      box-shadow: 0 2px 8px rgba(235, 87, 87, 0.3);
      
      &:hover {
        background: linear-gradient(135deg, #DF4444, #BB3333);
        transform: translateY(-1px);
        box-shadow: 0 4px 10px rgba(235, 87, 87, 0.4);
      }
    }
  }
}

.field-hint {
  color: #888;
  font-size: 0.8rem;
  margin-top: 4px;
}

/* 激活的系统提示词显示区域 */
.active-prompt-container {
  position: fixed;
  top: 80px;
  right: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  padding: 0;
  max-width: 360px;
  z-index: 1000;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  .active-prompt-badge {
    display: flex;
    flex-direction: column;
    
    .active-prompt-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      background-color: #f8f9fa;
      
      .active-prompt-info {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        width: 100%;
        
        svg {
          color: var(--primary-color);
          flex-shrink: 0;
          margin-top: 4px;
        }
        
        .prompt-title-wrapper {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
          width: 100%;
          
          .prompt-label-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 6px;
            width: 100%;
            
            .prompt-title-label {
              font-size: 0.8rem;
              color: var(--primary-color);
              font-weight: 500;
              background-color: rgba(70, 101, 238, 0.08);
              padding: 4px 10px;
              border-radius: 4px;
              display: inline-block;
              letter-spacing: 0.3px;
              border: 1px solid rgba(70, 101, 238, 0.15);
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
            }
            
            .active-prompt-close {
              background: transparent;
              border: none;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              color: #777;
              transition: all 0.2s ease;
              
              &:hover {
                background: rgba(220, 53, 69, 0.1);
                color: #dc3545;
              }
            }
          }
          
          .active-prompt-title {
            font-weight: 600;
            font-size: 0.95rem;
            color: #333;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 8px;
          }
          
          .prompt-actions-row {
            display: flex;
            align-items: center;
            gap: 8px;
            
            .active-prompt-category {
              padding: 3px 8px;
              border-radius: 20px;
              font-size: 0.75rem;
              color: white;
              font-weight: 500;
              display: flex;
              align-items: center;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            .active-prompt-tool-id {
              padding: 3px 8px;
              border-radius: 20px;
              font-size: 0.75rem;
              color: #666;
              background: #f0f0f0;
              border: 1px solid #ddd;
              font-weight: 500;
              display: flex;
              align-items: center;
              gap: 4px;
              
              svg {
                color: #888;
                margin-top: 0;
              }
            }
            
            .active-prompt-toggle {
              background: transparent;
              border: none;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 3px;
              color: #666;
              font-size: 0.8rem;
              padding: 4px 8px;
              border-radius: 6px;
              transition: all 0.2s ease;
              white-space: nowrap;
              min-width: 60px;
              
              &:hover {
                background: rgba(0, 0, 0, 0.05);
                color: #333;
              }
              
              svg {
                transition: transform 0.2s ease;
                flex-shrink: 0;
                margin-top: 0;
              }
              
              span {
                display: inline-block;
              }
            }
          }
        }
      }
      
      .active-prompt-actions {
        display: none;
      }
    }
    
    .active-prompt-content {
      padding: 16px;
      background: white;
      
      .active-prompt-text {
        font-size: 0.9rem;
        line-height: 1.5;
        color: #444;
        max-height: 300px;
        overflow-y: auto;
        padding-right: 8px;
        margin: 0;
        font-family: inherit;
        white-space: pre-wrap;
        word-break: break-word;
        
        /* 自定义滚动条 */
        &::-webkit-scrollbar {
          width: 6px;
        }
        
        &::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        &::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
        
        &::-webkit-scrollbar-thumb:hover {
          background: #999;
        }
      }
    }
  }
}
</style> 
