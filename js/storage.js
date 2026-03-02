// RAG优化策略工坊 - 本地存储管理
// 处理学习进度、掌握状态等数据的持久化

/**
 * 安全的 localStorage 操作包装器
 */
const SafeStorage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn('读取存储数据失败:', error);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn('保存存储数据失败:', error);
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('删除存储数据失败:', error);
      return false;
    }
  }
};

/**
 * 存储键名常量
 */
const STORAGE_KEYS = {
  MASTERED_ITEMS: 'rag_workshop_mastered',
  LEARNING_PROGRESS: 'rag_workshop_progress',
  QUIZ_RESULTS: 'rag_workshop_quiz_results',
  LAST_VISITED: 'rag_workshop_last_visited',
  SETTINGS: 'rag_workshop_settings'
};

/**
 * 掌握状态管理
 */
function loadMasteredItems() {
  return SafeStorage.get(STORAGE_KEYS.MASTERED_ITEMS, []);
}

function saveMastered(itemId, isMastered) {
  const masteredItems = loadMasteredItems();
  const itemIdNum = parseInt(itemId);
  
  if (isMastered) {
    // 添加到已掌握列表（去重）
    if (!masteredItems.includes(itemIdNum)) {
      masteredItems.push(itemIdNum);
    }
  } else {
    // 从已掌握列表中移除
    const index = masteredItems.indexOf(itemIdNum);
    if (index > -1) {
      masteredItems.splice(index, 1);
    }
  }
  
  SafeStorage.set(STORAGE_KEYS.MASTERED_ITEMS, masteredItems);
  
  // 触发进度更新事件
  window.dispatchEvent(new CustomEvent('masteredChanged', {
    detail: { itemId: itemIdNum, isMastered }
  }));
}

function isMastered(itemId) {
  const masteredItems = loadMasteredItems();
  return masteredItems.includes(parseInt(itemId));
}

function getMasteredCount() {
  return loadMasteredItems().length;
}

/**
 * 学习进度管理
 */
function loadProgress() {
  return SafeStorage.get(STORAGE_KEYS.LEARNING_PROGRESS, {
    currentItem: 1,
    visitedItems: [],
    totalTime: 0,
    lastStudyDate: null
  });
}

function saveProgress(progressData) {
  const currentProgress = loadProgress();
  const updatedProgress = { ...currentProgress, ...progressData };
  SafeStorage.set(STORAGE_KEYS.LEARNING_PROGRESS, updatedProgress);
}

function markItemVisited(itemId) {
  const progress = loadProgress();
  const itemIdNum = parseInt(itemId);
  
  if (!progress.visitedItems.includes(itemIdNum)) {
    progress.visitedItems.push(itemIdNum);
  }
  
  progress.currentItem = Math.max(progress.currentItem, itemIdNum);
  progress.lastStudyDate = new Date().toISOString();
  
  saveProgress(progress);
}

function getVisitedCount() {
  const progress = loadProgress();
  return progress.visitedItems.length;
}

/**
 * 测试结果管理
 */
function loadQuizResults() {
  return SafeStorage.get(STORAGE_KEYS.QUIZ_RESULTS, {});
}

function saveQuizResult(itemId, isCorrect, selectedOption, correctOption) {
  const results = loadQuizResults();
  const itemIdNum = parseInt(itemId);
  
  if (!results[itemIdNum]) {
    results[itemIdNum] = [];
  }
  
  results[itemIdNum].push({
    timestamp: new Date().toISOString(),
    isCorrect,
    selectedOption,
    correctOption
  });
  
  SafeStorage.set(STORAGE_KEYS.QUIZ_RESULTS, results);
}

function getQuizStats(itemId = null) {
  const results = loadQuizResults();
  
  if (itemId) {
    // 获取特定项目的测试统计
    const itemResults = results[parseInt(itemId)] || [];
    const correct = itemResults.filter(r => r.isCorrect).length;
    const total = itemResults.length;
    return { correct, total, accuracy: total > 0 ? (correct / total) * 100 : 0 };
  } else {
    // 获取总体测试统计
    let totalCorrect = 0;
    let totalAttempts = 0;
    
    Object.values(results).forEach(itemResults => {
      totalAttempts += itemResults.length;
      totalCorrect += itemResults.filter(r => r.isCorrect).length;
    });
    
    return {
      correct: totalCorrect,
      total: totalAttempts,
      accuracy: totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0
    };
  }
}

/**
 * 最后访问记录
 */
function saveLastVisited(page, itemId = null) {
  const data = {
    page,
    itemId: itemId ? parseInt(itemId) : null,
    timestamp: new Date().toISOString()
  };
  SafeStorage.set(STORAGE_KEYS.LAST_VISITED, data);
}

function getLastVisited() {
  return SafeStorage.get(STORAGE_KEYS.LAST_VISITED, null);
}

/**
 * 用户设置管理
 */
function loadSettings() {
  return SafeStorage.get(STORAGE_KEYS.SETTINGS, {
    theme: 'light',
    autoAdvance: false,
    showHints: true,
    studyReminder: false
  });
}

function saveSetting(key, value) {
  const settings = loadSettings();
  settings[key] = value;
  SafeStorage.set(STORAGE_KEYS.SETTINGS, settings);
}

/**
 * 数据导出和导入
 */
function exportData() {
  const data = {
    mastered: loadMasteredItems(),
    progress: loadProgress(),
    quizResults: loadQuizResults(),
    settings: loadSettings(),
    exportDate: new Date().toISOString(),
    version: '1.0'
  };
  
  return JSON.stringify(data, null, 2);
}

function importData(jsonData) {
  try {
    const data = JSON.parse(jsonData);
    
    if (data.mastered) {
      SafeStorage.set(STORAGE_KEYS.MASTERED_ITEMS, data.mastered);
    }
    if (data.progress) {
      SafeStorage.set(STORAGE_KEYS.LEARNING_PROGRESS, data.progress);
    }
    if (data.quizResults) {
      SafeStorage.set(STORAGE_KEYS.QUIZ_RESULTS, data.quizResults);
    }
    if (data.settings) {
      SafeStorage.set(STORAGE_KEYS.SETTINGS, data.settings);
    }
    
    return true;
  } catch (error) {
    console.error('导入数据失败:', error);
    return false;
  }
}

/**
 * 数据清理
 */
function clearAllData() {
  const confirmed = confirm('确定要清除所有学习数据吗？此操作不可恢复。');
  if (confirmed) {
    Object.values(STORAGE_KEYS).forEach(key => {
      SafeStorage.remove(key);
    });
    
    // 刷新页面以重置状态
    window.location.reload();
  }
}

/**
 * 统计信息
 */
function getOverallStats() {
  const masteredCount = getMasteredCount();
  const visitedCount = getVisitedCount();
  const quizStats = getQuizStats();
  const progress = loadProgress();
  
  return {
    mastered: masteredCount,
    visited: visitedCount,
    totalItems: 40, // 从 WordRoots.length 获取
    masteredPercentage: (masteredCount / 40) * 100,
    visitedPercentage: (visitedCount / 40) * 100,
    quizAccuracy: quizStats.accuracy,
    totalQuizAttempts: quizStats.total,
    lastStudyDate: progress.lastStudyDate,
    totalStudyTime: progress.totalTime
  };
}

/**
 * 学习建议
 */
function getStudyRecommendations() {
  const stats = getOverallStats();
  const recommendations = [];
  
  if (stats.masteredPercentage < 25) {
    recommendations.push({
      type: 'learning',
      title: '建议使用学习模式',
      description: '系统学习基础概念，建立知识框架'
    });
  }
  
  if (stats.visitedPercentage > 50 && stats.masteredPercentage < 30) {
    recommendations.push({
      type: 'review',
      title: '建议加强复习',
      description: '使用闪卡模式巩固已学内容'
    });
  }
  
  if (stats.quizAccuracy < 70 && stats.totalQuizAttempts > 10) {
    recommendations.push({
      type: 'practice',
      title: '建议多做练习',
      description: '重点练习测试正确率较低的策略'
    });
  }
  
  if (stats.masteredPercentage > 80) {
    recommendations.push({
      type: 'advanced',
      title: '考虑深入学习',
      description: '可以开始实际项目应用或学习更高级的RAG技术'
    });
  }
  
  return recommendations;
}

// 如果在浏览器环境中，将函数挂载到全局对象
if (typeof window !== 'undefined') {
  // 核心功能
  window.loadMasteredItems = loadMasteredItems;
  window.saveMastered = saveMastered;
  window.isMastered = isMastered;
  window.getMasteredCount = getMasteredCount;
  
  window.loadProgress = loadProgress;
  window.saveProgress = saveProgress;
  window.markItemVisited = markItemVisited;
  window.getVisitedCount = getVisitedCount;
  
  window.saveQuizResult = saveQuizResult;
  window.getQuizStats = getQuizStats;
  
  window.saveLastVisited = saveLastVisited;
  window.getLastVisited = getLastVisited;
  
  window.loadSettings = loadSettings;
  window.saveSetting = saveSetting;
  
  // 高级功能
  window.exportData = exportData;
  window.importData = importData;
  window.clearAllData = clearAllData;
  window.getOverallStats = getOverallStats;
  window.getStudyRecommendations = getStudyRecommendations;
}

// 如果在 Node.js 环境中，导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    loadMasteredItems,
    saveMastered,
    isMastered,
    getMasteredCount,
    loadProgress,
    saveProgress,
    markItemVisited,
    getVisitedCount,
    saveQuizResult,
    getQuizStats,
    saveLastVisited,
    getLastVisited,
    loadSettings,
    saveSetting,
    exportData,
    importData,
    clearAllData,
    getOverallStats,
    getStudyRecommendations
  };
}