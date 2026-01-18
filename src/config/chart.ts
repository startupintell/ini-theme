import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Chart Colors (图表颜色 - 用于扩展页趋势图等)
// -----------------------------------------------------------------
export const chartConfig = (palette: ThemePalette) => {
  return {
    // --- Text & Structure (文字与结构) ---
    // 图表文字 (坐标值/标签)
    'charts.foreground': palette.text.normal,

    // 默认线条颜色 (如果没有指定具体颜色)
    'charts.lines': palette.text.muted,

    // 坐标轴线 (Axis)
    'chart.axis': palette.text.subtle, // 比如 x轴 y轴

    // 辅助参考线 (Grid/Guides)
    // 策略：必须极淡，只是为了辅助读数
    'chart.guide': palette.border.subtle + '50', // 降低不透明度

    // 主折线 (Line Chart default)
    'chart.line': palette.primary.main,

    // --- Data Colors (数据序列颜色) ---
    // 策略：直接映射全局状态色，保持语义统一
    'charts.red': palette.state.error,
    'charts.blue': palette.primary.main,
    'charts.green': palette.state.success,
    'charts.yellow': palette.state.warning,
    'charts.orange': palette.state.warning, // 如果没有专用橙色，可用 Warning
    'charts.purple': palette.secondary.main || '#c084fc',
  };
};
