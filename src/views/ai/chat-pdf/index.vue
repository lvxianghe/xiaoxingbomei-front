<template>
  <div class="chat-pdf-container">
    <!-- 顶部导航栏 -->
    <header class="header">
      <button class="back-button" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        <span>返回</span>
      </button>
      <h1 class="title">ChatPDF</h1>
      <div class="actions">
        <el-button type="primary" size="small" @click="clearConversation" :disabled="!pdfLoaded">
          <el-icon><Delete /></el-icon>
          清空对话
        </el-button>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <!-- 左侧侧边栏：显示已上传的PDF文件列表 -->
      <aside class="sidebar" v-if="pdfLoaded">
        <div class="sidebar-header">
          <h3>文档信息</h3>
        </div>
        <div class="pdf-info">
          <div class="pdf-preview">
            <el-icon size="40" color="#4b6cb7"><Document /></el-icon>
          </div>
          <div class="pdf-details">
            <h4>{{ pdfFile.name }}</h4>
            <p>{{ formatFileSize(pdfFile.size) }} · {{ pdfPageCount }}页</p>
          </div>
        </div>
      </aside>

      <!-- 右侧主要区域：对话或上传界面 -->
      <section class="content-area">
        <!-- PDF未上传时显示上传界面 -->
        <div v-if="!pdfLoaded" class="upload-container">
          <div class="upload-area" @dragover.prevent @drop.prevent="handleDrop">
            <el-upload
              class="upload-component"
              drag
              action=""
              :auto-upload="false"
              :show-file-list="false"
              :on-change="handleFileChange"
              accept=".pdf"
            >
              <el-icon class="upload-icon"><Upload /></el-icon>
              <div class="upload-text">
                <h3>拖动PDF文件到此处，或点击上传</h3>
                <p>支持单个PDF文件，最大20MB</p>
              </div>
            </el-upload>
          </div>
        </div>

        <!-- PDF已上传后显示聊天界面 -->
        <div v-else class="chat-container">
          <!-- 聊天消息区域 -->
          <div class="messages" ref="messagesContainer">
            <div 
              v-for="(message, index) in messages" 
              :key="index" 
              :class="['message', message.role === 'user' ? 'user-message' : 'assistant-message']"
            >
              <div class="message-avatar">
                <el-avatar :icon="message.role === 'user' ? UserFilled : ChatDotRound" :size="36" />
              </div>
              <div class="message-content">
                <div class="message-text" v-html="formatMessage(message.content)"></div>
                <div class="message-time">{{ formatTime(message.timestamp) }}</div>
              </div>
            </div>
            
            <!-- 加载动画 -->
            <div v-if="loading" class="loading-message">
              <div class="message-avatar">
                <el-avatar :icon="ChatDotRound" :size="36" />
              </div>
              <div class="message-content">
                <div class="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <!-- 输入框区域 -->
          <div class="input-area">
            <el-input
              v-model="userInput"
              type="textarea"
              :rows="2"
              placeholder="请输入问题..."
              resize="none"
              @keydown.enter.exact.prevent="sendMessage"
            />
            <el-button 
              type="primary" 
              :icon="Position" 
              circle 
              @click="sendMessage"
              :disabled="loading || !userInput.trim()"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="less" scoped>
.chat-pdf-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9fafb;
}

.header {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;

  .back-button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: #606266;
    cursor: pointer;
    font-size: 14px;
    gap: 4px;
    padding: 6px 10px;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f2f3f5;
    }
  }

  .title {
    flex: 1;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #303133;
    text-align: center;
  }

  .actions {
    display: flex;
    gap: 8px;
  }
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 250px;
  background-color: #fff;
  border-right: 1px solid #e4e7ed;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .sidebar-header {
    padding: 16px;
    border-bottom: 1px solid #e4e7ed;

    h3 {
      margin: 0;
      font-size: 16px;
      color: #303133;
    }
  }

  .pdf-info {
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;

    .pdf-preview {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    .pdf-details {
      h4 {
        margin: 0 0 4px;
        font-size: 14px;
        color: #303133;
        font-weight: 500;
        word-break: break-word;
      }

      p {
        margin: 0;
        font-size: 12px;
        color: #909399;
      }
    }
  }
}

.content-area {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.upload-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;

  .upload-area {
    width: 100%;
    max-width: 600px;
    padding: 32px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

    .upload-component {
      width: 100%;

      :deep(.el-upload-dragger) {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px dashed #dcdfe6;
        border-radius: 6px;
        background-color: #fafafa;
        transition: border-color 0.3s;

        &:hover {
          border-color: #409eff;
        }
      }
    }

    .upload-icon {
      font-size: 48px;
      color: #c0c4cc;
      margin-bottom: 16px;
    }

    .upload-text {
      text-align: center;

      h3 {
        margin: 0 0 8px;
        font-size: 16px;
        font-weight: 500;
        color: #606266;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: #909399;
      }
    }
  }
}

.chat-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;

  .messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .message {
      display: flex;
      gap: 12px;
      max-width: 85%;

      &.user-message {
        align-self: flex-end;
        flex-direction: row-reverse;

        .message-content {
          background-color: #ecf5ff;
          border-radius: 12px 4px 12px 12px;
        }
      }

      &.assistant-message {
        align-self: flex-start;

        .message-content {
          background-color: #fff;
          border-radius: 4px 12px 12px 12px;
        }
      }

      .message-avatar {
        flex-shrink: 0;
      }

      .message-content {
        padding: 12px 16px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

        .message-text {
          font-size: 14px;
          line-height: 1.5;
          color: #303133;

          :deep(p) {
            margin: 0 0 8px;

            &:last-child {
              margin-bottom: 0;
            }
          }

          :deep(a) {
            color: #409eff;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }

          :deep(pre) {
            background-color: #f5f7fa;
            padding: 12px;
            border-radius: 4px;
            overflow-x: auto;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
            font-size: 13px;
            line-height: 1.4;
            color: #4a4a4a;
            margin: 8px 0;
          }

          :deep(code) {
            background-color: #f5f7fa;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
            font-size: 13px;
            color: #c7254e;
          }

          :deep(ul), :deep(ol) {
            margin: 8px 0;
            padding-left: 24px;
          }

          :deep(li) {
            margin: 4px 0;
          }
        }

        .message-time {
          font-size: 11px;
          color: #909399;
          margin-top: 6px;
          text-align: right;
        }
      }
    }

    .loading-message {
      display: flex;
      gap: 12px;
      align-self: flex-start;

      .message-content {
        padding: 16px;
        background-color: #fff;
        border-radius: 4px 12px 12px 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

        .loading-dots {
          display: flex;
          gap: 4px;
          align-items: center;
          height: 24px;

          span {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #909399;
            animation: loading 1.4s infinite ease-in-out both;

            &:nth-child(1) {
              animation-delay: -0.32s;
            }

            &:nth-child(2) {
              animation-delay: -0.16s;
            }
          }
        }
      }
    }
  }

  .input-area {
    padding: 16px;
    background-color: #fff;
    border-top: 1px solid #e4e7ed;
    display: flex;
    gap: 12px;
    align-items: flex-end;

    .el-input {
      flex: 1;

      :deep(.el-textarea__inner) {
        resize: none;
        border-radius: 8px;
        padding: 8px 12px;
        min-height: 24px;
        max-height: 120px;
        transition: all 0.3s;
        line-height: 1.5;

        &:focus {
          box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
        }
      }
    }
  }
}

@keyframes loading {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.3;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .chat-container .messages .message {
    max-width: 90%;
  }
}
</style>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, Upload, Delete, Position, UserFilled, ChatDotRound, Document } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import * as pdfjsLib from 'pdfjs-dist'
import 'pdfjs-dist/web/pdf_viewer.css'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

// 配置PDF.js的worker路径
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

// 状态变量
const router = useRouter()
const pdfLoaded = ref(false)
const pdfFile = ref<File | null>(null)
const pdfContent = ref('')
const pdfPageCount = ref(0)
const messages = ref<Message[]>([])
const userInput = ref('')
const loading = ref(false)
const messagesContainer = ref<HTMLElement | null>(null)

// 初始化消息
onMounted(() => {
  // 添加系统欢迎消息
  messages.value = [
    {
      role: 'assistant',
      content: '欢迎使用ChatPDF！请上传一个PDF文件，我会帮你分析内容并回答相关问题。',
      timestamp: Date.now()
    }
  ]
})

// 返回上一页
const goBack = () => {
  router.push('/ai')
}

// 处理文件选择
const handleFileChange = async (file: any) => {
  // 文件类型验证
  if (file.raw.type !== 'application/pdf') {
    ElMessage.error('请上传PDF格式的文件')
    return
  }

  // 文件大小验证（20MB）
  if (file.raw.size > 20 * 1024 * 1024) {
    ElMessage.error('文件大小不能超过20MB')
    return
  }

  try {
    pdfFile.value = file.raw
    loading.value = true
    
    // 显示加载提示
    messages.value.push({
      role: 'assistant',
      content: '正在处理PDF文件，请稍候...',
      timestamp: Date.now()
    })
    
    // 滚动到底部
    await nextTick()
    scrollToBottom()
    
    // 读取PDF内容
    await parsePDF(file.raw)
    
    pdfLoaded.value = true
    loading.value = false
    
    // 更新最后一条消息为成功消息
    const lastIndex = messages.value.length - 1
    if (lastIndex >= 0 && messages.value[lastIndex].content.includes('正在处理PDF文件')) {
      messages.value[lastIndex] = {
        role: 'assistant',
        content: `我已成功读取PDF文件"${file.raw.name}"，共${pdfPageCount.value}页。现在您可以开始提问关于这个PDF的任何问题！`,
        timestamp: Date.now()
      }
    } else {
      // 添加成功消息
      messages.value.push({
        role: 'assistant',
        content: `我已成功读取PDF文件"${file.raw.name}"，共${pdfPageCount.value}页。现在您可以开始提问关于这个PDF的任何问题！`,
        timestamp: Date.now()
      })
    }
    
    // 滚动到底部
    await nextTick()
    scrollToBottom()
  } catch (error) {
    console.error('PDF解析错误:', error)
    ElMessage.error('PDF解析失败，请检查文件是否损坏或重试')
    loading.value = false
    
    // 更新最后一条消息为错误消息
    const lastIndex = messages.value.length - 1
    if (lastIndex >= 0 && messages.value[lastIndex].content.includes('正在处理PDF文件')) {
      messages.value[lastIndex] = {
        role: 'assistant',
        content: '抱歉，PDF解析失败，请检查文件是否损坏或重试上传。',
        timestamp: Date.now()
      }
    }
  }
}

// 处理拖放文件
const handleDrop = (e: DragEvent) => {
  e.preventDefault()
  if (e.dataTransfer && e.dataTransfer.files.length > 0) {
    const file = e.dataTransfer.files[0]
    if (file.type === 'application/pdf') {
      handleFileChange({ raw: file })
    } else {
      ElMessage.error('请上传PDF格式的文件')
    }
  }
}

// 解析PDF文件
const parsePDF = async (file: File): Promise<void> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target?.result as ArrayBuffer
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
        
        // 添加加载进度处理
        loadingTask.onProgress = ({ loaded, total }) => {
          const progress = Math.round((loaded / total) * 100)
          console.log(`PDF加载进度: ${progress}%`)
          
          // 更新加载消息（仅在控制台显示进度，避免频繁更新UI）
          if (progress % 25 === 0) { // 每25%更新一次消息
            const lastIndex = messages.value.length - 1
            if (lastIndex >= 0 && messages.value[lastIndex].content.includes('正在处理PDF文件')) {
              messages.value[lastIndex] = {
                role: 'assistant',
                content: `正在处理PDF文件，已完成${progress}%...`,
                timestamp: Date.now()
              }
            }
          }
        }
        
        const pdf = await loadingTask.promise
        pdfPageCount.value = pdf.numPages
        
        let textContent = ''
        
        // 提取所有页面的文本
        for (let i = 1; i <= pdf.numPages; i++) {
          // 更新进度消息
          const pageProgress = Math.round((i / pdf.numPages) * 100)
          if (pageProgress % 25 === 0) {
            const lastIndex = messages.value.length - 1
            if (lastIndex >= 0 && messages.value[lastIndex].content.includes('正在处理PDF文件')) {
              messages.value[lastIndex] = {
                role: 'assistant',
                content: `正在提取PDF文本，已处理${pageProgress}%...`,
                timestamp: Date.now()
              }
            }
          }
          
          const page = await pdf.getPage(i)
          const content = await page.getTextContent()
          
          // 改进文本提取，保留段落结构
          let lastY, lastFontSize
          let textItems = content.items
          let pageText = ''
          
          for (let j = 0; j < textItems.length; j++) {
            const item = textItems[j] as any
            if (lastY !== undefined && lastFontSize !== undefined) {
              const deltaY = lastY - item.transform[5]
              // 根据位置和字体大小判断是否换行或段落
              if (Math.abs(deltaY) > 5) { // Y轴差异较大，可能是段落
                pageText += '\n'
                if (Math.abs(deltaY) > 10 || item.fontName !== lastFontSize) {
                  pageText += '\n' // 额外空行表示可能是新段落
                }
              } else if (deltaY !== 0) { // Y轴有小差异，可能只是换行
                pageText += '\n'
              } else if (!pageText.endsWith(' ') && !item.str.startsWith(' ')) {
                // 同一行但没有空格，添加空格
                pageText += ' '
              }
            }
            
            pageText += item.str
            lastY = item.transform[5]
            lastFontSize = item.fontName
          }
          
          textContent += pageText + '\n\n'
        }
        
        pdfContent.value = textContent
        resolve()
      } catch (error) {
        reject(error)
      }
    }
    
    reader.onerror = (error) => {
      reject(error)
    }
    
    reader.readAsArrayBuffer(file)
  })
}

// 发送消息
const sendMessage = async () => {
  const message = userInput.value.trim()
  if (!message || loading.value) return
  
  // 添加用户消息
  messages.value.push({
    role: 'user',
    content: message,
    timestamp: Date.now()
  })
  
  // 清空输入框
  userInput.value = ''
  
  // 滚动到底部
  await nextTick()
  scrollToBottom()
  
  // 开始加载
  loading.value = true
  
  try {
    // 模拟AI响应（实际项目中应该调用后端API）
    setTimeout(() => {
      // 智能匹配PDF内容
      const searchResult = smartSearch(message)
      
      // 构建AI回复
      let aiResponse = ''
      
      if (searchResult.matches.length > 0) {
        // 找到相关内容
        const topMatch = searchResult.matches[0]
        
        let formattedMatches = ''
        for (let i = 0; i < Math.min(3, searchResult.matches.length); i++) {
          const match = searchResult.matches[i]
          formattedMatches += `\n\n**段落 ${i+1}：**\n"${match.text}"`
        }
        
        aiResponse = `根据PDF内容，我找到了以下相关信息：${formattedMatches}\n\n这些是PDF中与您问题最相关的部分，匹配度为${Math.round(topMatch.score * 100)}%。您还有其他问题吗？`
      } else if (searchResult.partialMatches.length > 0) {
        // 找到部分匹配
        const topPartialMatch = searchResult.partialMatches[0]
        aiResponse = `我在PDF中找到了一些可能相关的内容：\n\n"${topPartialMatch.text}"\n\n这些内容可能与您的问题相关，但匹配度不高。您可以尝试换一种方式提问，或者指定更具体的关键词。`
      } else {
        // 没有找到相关内容
        aiResponse = `我在PDF中没有找到与"${message}"相关的内容。这可能是因为：\n\n1. PDF中不包含这方面的信息\n2. 您的问题需要换一种表述方式\n3. 需要更具体的关键词\n\n请尝试换一种方式提问，或者询问PDF的其他方面。`
      }
      
      // 添加AI回复
      messages.value.push({
        role: 'assistant',
        content: aiResponse,
        timestamp: Date.now()
      })
      
      // 结束加载
      loading.value = false
      
      // 滚动到底部
      nextTick().then(scrollToBottom)
    }, 1500)
  } catch (error) {
    console.error('处理消息时出错:', error)
    ElMessage.error('处理消息时出错，请重试')
    loading.value = false
  }
}

// 智能搜索：将PDF内容分段并按相关性排序
const smartSearch = (query: string) => {
  // 将查询词转为小写并分词
  const queryLower = query.toLowerCase()
  const queryTerms = queryLower.split(/\s+/).filter(term => term.length > 2)
  
  // 分段
  const paragraphs = pdfContent.value.split(/\n{2,}/).filter(p => p.trim().length > 20)
  
  const results = {
    matches: [] as Array<{text: string, score: number}>,
    partialMatches: [] as Array<{text: string, score: number}>
  }
  
  // 为每个段落评分
  paragraphs.forEach(paragraph => {
    const paragraphLower = paragraph.toLowerCase()
    
    // 直接匹配完整查询
    if (paragraphLower.includes(queryLower)) {
      results.matches.push({
        text: formatHighlightedText(paragraph, queryLower),
        score: 1.0
      })
      return
    }
    
    // 计算匹配查询词的数量
    let matchedTerms = 0
    let totalScore = 0
    
    queryTerms.forEach(term => {
      if (paragraphLower.includes(term)) {
        matchedTerms++
        // 词频分数
        const termFrequency = (paragraphLower.match(new RegExp(term, 'g')) || []).length
        const normalizedFreq = Math.min(termFrequency / 5, 1) // 最多算5次
        totalScore += normalizedFreq
      }
    })
    
    const termScore = queryTerms.length > 0 ? matchedTerms / queryTerms.length : 0
    const finalScore = queryTerms.length > 0 ? totalScore / queryTerms.length : 0
    
    // 基于分数分类
    if (termScore >= 0.6 || finalScore >= 0.5) {
      results.matches.push({
        text: paragraph,
        score: finalScore
      })
    } else if (termScore > 0) {
      results.partialMatches.push({
        text: paragraph,
        score: finalScore
      })
    }
  })
  
  // 按分数排序
  results.matches.sort((a, b) => b.score - a.score)
  results.partialMatches.sort((a, b) => b.score - a.score)
  
  // 截取最长300个字符，避免结果过长
  results.matches = results.matches.map(match => ({
    ...match,
    text: truncateText(match.text, 300)
  }))
  
  results.partialMatches = results.partialMatches.map(match => ({
    ...match,
    text: truncateText(match.text, 300)
  }))
  
  return results
}

// 高亮显示匹配的文本
const formatHighlightedText = (text: string, query: string) => {
  // 简单处理，在实际生产环境中应使用更安全的方法
  return text.replace(new RegExp(query, 'gi'), match => `<strong>${match}</strong>`)
}

// 截取文本，保留完整句子
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  
  // 找到最后一个完整句子结束位置
  let end = maxLength
  while (end > 0 && !'.!?。！？'.includes(text[end])) {
    end--
  }
  
  // 如果没找到句子结束，就在词边界截断
  if (end === 0) {
    end = maxLength
    while (end < text.length && !text[end].match(/\s/)) {
      end--
    }
  }
  
  return text.substring(0, end + 1) + '...'
}

// 清空对话
const clearConversation = () => {
  if (pdfLoaded.value) {
    messages.value = [
      {
        role: 'assistant',
        content: `我已成功读取PDF文件"${pdfFile.value?.name}"，共${pdfPageCount.value}页。现在您可以开始提问关于这个PDF的任何问题！`,
        timestamp: Date.now()
      }
    ]
  } else {
    messages.value = [
      {
        role: 'assistant',
        content: '欢迎使用ChatPDF！请上传一个PDF文件，我会帮你分析内容并回答相关问题。',
        timestamp: Date.now()
      }
    ]
  }
}

// 格式化消息内容（支持Markdown）
const formatMessage = (content: string) => {
  const html = marked(content)
  return DOMPurify.sanitize(html)
}

// 格式化时间
const formatTime = (timestamp: number) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

// 格式化文件大小
const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// 滚动到底部
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// 监听消息变化，自动滚动到底部
watch(messages, () => {
  nextTick(scrollToBottom)
})
</script> 