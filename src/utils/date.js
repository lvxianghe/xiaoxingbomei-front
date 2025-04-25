/**
 * 日期格式化工具
 * @param {Date} date 要格式化的日期
 * @param {String} format 格式化模板，例如 'YYYY-MM-DD HH:mm:ss'
 * @returns {String} 格式化后的日期字符串
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  if (!date) return '';
  if (typeof date === 'string') {
    date = new Date(date);
  }
  
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const padZero = (num) => String(num).padStart(2, '0');
  
  return format
    .replace(/YYYY/g, year)
    .replace(/MM/g, padZero(month))
    .replace(/DD/g, padZero(day))
    .replace(/HH/g, padZero(hours))
    .replace(/mm/g, padZero(minutes))
    .replace(/ss/g, padZero(seconds));
}

/**
 * 获取相对时间描述
 * @param {Date|String} date 日期
 * @returns {String} 相对时间描述，如"刚刚"、"5分钟前"等
 */
export function getRelativeTime(date) {
  if (!date) return '';
  if (typeof date === 'string') {
    date = new Date(date);
  }
  
  const now = new Date();
  const diff = now - date;
  
  // 小于1分钟
  if (diff < 60 * 1000) {
    return '刚刚';
  }
  
  // 小于1小时
  if (diff < 60 * 60 * 1000) {
    return `${Math.floor(diff / (60 * 1000))}分钟前`;
  }
  
  // 小于1天
  if (diff < 24 * 60 * 60 * 1000) {
    return `${Math.floor(diff / (60 * 60 * 1000))}小时前`;
  }
  
  // 小于30天
  if (diff < 30 * 24 * 60 * 60 * 1000) {
    return `${Math.floor(diff / (24 * 60 * 60 * 1000))}天前`;
  }
  
  // 大于30天，返回具体日期
  return formatDate(date, 'YYYY-MM-DD');
} 