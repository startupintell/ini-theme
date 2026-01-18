import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Breadcrumbs (编辑器顶部的路径导航)
// -----------------------------------------------------------------
export const breadcrumbsConfig = (palette: ThemePalette) => {
  return {
    // --- Bar (导航条本身) ---
    // 背景：通常设为编辑器背景色，或者透明，以保持界面整洁
    'breadcrumb.background': palette.bg.panel,

    // 文字：默认必须低调 (Muted)
    // 这样它不会抢夺下方代码的视觉重点
    'breadcrumb.foreground': palette.text.muted,

    // --- Interaction (交互状态) ---
    // 聚焦 (Focus): 键盘导航选中时
    'breadcrumb.focusForeground': palette.text.normal,

    // 选中 (Active): 鼠标点击或下拉菜单打开时
    // 策略：高亮显示，确认当前操作路径
    'breadcrumb.activeSelectionForeground': palette.primary.main, // 或者 text.normal

    // --- Picker (点击后弹出的下拉菜单) ---
    // 背景：使用 Element 层级，悬浮在代码之上
    'breadcrumbPicker.background': palette.bg.element,
  };
};
