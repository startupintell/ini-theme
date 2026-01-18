import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Title Bar (顶部标题栏)
// -----------------------------------------------------------------
export const titleBarConfig = (palette: ThemePalette) => {
  return {
    // --- Active Window (当前激活窗口) ---
    // 背景：使用 App 层级 (最深色)，与 Activity Bar 融为一体
    'titleBar.activeBackground': palette.bg.panel,

    // 文字：标题栏文字通常是文件名或工作区名，属于辅助信息，用 Muted
    'titleBar.activeForeground': palette.text.normal,

    // 边框：底部分割线
    // 如果你想让标题栏和编辑器融为一体，可以设为 transparent
    // 但通常保留一条细线以划分"拖拽区域"和"标签页"
    'titleBar.border': palette.border.subtle,

    // --- Inactive Window (失焦/后台窗口) ---
    // 场景：你点击了浏览器，VS Code 变成了后台窗口。
    // 策略：背景保持不变 (避免闪烁)，只把文字变暗，降低视觉干扰。
    'titleBar.inactiveBackground': palette.bg.panel,
    'titleBar.inactiveForeground': palette.text.muted,
  };
};
