import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Command Center (标题栏中间的搜索/命令入口)
// -----------------------------------------------------------------
export const commandCenterConfig = (palette: ThemePalette) => {
  return {
    // --- Default State (默认状态) ---
    // 背景：使用 Element 层级，看起来像一个深色的胶囊按钮
    'commandCenter.background': palette.bg.element,
    // 文字：正常
    'commandCenter.foreground': palette.text.normal,
    // 边框：细微轮廓
    'commandCenter.border': palette.border.subtle,

    // --- Active/Hover State (交互状态) ---
    // 鼠标悬停或点击时：背景加深/变亮
    'commandCenter.activeBackground': palette.bg.active,
    'commandCenter.activeForeground': palette.text.normal,
    // 激活边框：使用主色或 Focus 边框，强调"准备输入"
    'commandCenter.activeBorder': palette.border.focus,

    // --- Inactive Window State (窗口失焦) ---
    // 当你切换到浏览器时，让它变淡，不抢视觉
    'commandCenter.inactiveForeground': palette.text.muted,
    'commandCenter.inactiveBorder': palette.border.subtle + '40', // 降低不透明度

    // --- Debugging State (调试模式) ---
    // 背景变更为淡橙色，与底部的 Status Bar 呼应，提示"正在调试"
    // 注意：这里不能太亮，否则会干扰标题栏的文字阅读
    'commandCenter.debuggingBackground': palette.state.warning + '20',
  };
};
