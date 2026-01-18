import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Gauge (仪表/进度条 - 常见于扩展插件)
// -----------------------------------------------------------------
export const gaugeConfig = (palette: ThemePalette) => {
  return {
    // --- Structure (结构) ---
    // 轨道背景 (未填充部分)
    'gauge.background': palette.bg.active, // 或者 bg.element

    // 边框 (通常不需要，保持扁平化)
    'gauge.border': palette.transparent,

    // --- Normal State (正常状态) ---
    // 填充颜色
    'gauge.foreground': palette.primary.main,

    // --- Warning State (警告状态) ---
    // 场景：CPU 负载高，或覆盖率低于阈值
    // 填充颜色: 黄色
    'gauge.warningForeground': palette.state.warning,
    // 轨道背景: 保持一致，或者稍微带点黄色调 (不推荐，太乱)
    'gauge.warningBackground': palette.bg.active,

    // --- Error State (错误状态) ---
    // 场景：构建失败，或严重问题
    // 填充颜色: 红色
    'gauge.errorForeground': palette.state.error,
    // 轨道背景
    'gauge.errorBackground': palette.bg.active,
  };
};
