import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Activity Bar (活动栏 - 最左侧/顶部的图标导航)
// -----------------------------------------------------------------
export const activityBarConfig = (palette: ThemePalette) => {
  return {
    // --- Vertical Activity Bar (经典垂直布局) ---

    // 背景：使用 App 层级 (最深色)，作为界面的"边框"
    'activityBar.background': palette.bg.panel,

    // 边框：与 Side Bar 的分割线，通常极淡
    'activityBar.border': palette.border.subtle,

    // 图标颜色 (激活)：使用最亮的文字色
    // 设计建议：尽量不要让图标变彩色 (Primary)，白色/高亮色最干净
    'activityBar.foreground': palette.text.normal,

    // 图标颜色 (未激活)：使用 Muted 或 Subtle，让它们退居幕后
    'activityBar.inactiveForeground': palette.text.muted,

    // 激活指示条：左侧/右侧的那条亮线
    'activityBar.activeBorder': palette.primary.main,

    // 激活项背景：
    // 1. 设为 Transparent (推荐)：现代风格，只靠 Icon 高亮和 Border 指示。
    // 2. 设为 Element 背景：传统按钮风格。
    'activityBar.activeBackground': palette.transparent,

    // 焦点边框 (键盘操作时)
    'activityBar.activeFocusBorder': palette.primary.main,

    // 拖拽时的反馈色
    'activityBar.dropBorder': palette.primary.main,

    // --- Top Activity Bar (顶部横向布局) ---
    // 当你把 Activity Bar 移到 Side Bar 上方时生效

    'activityBarTop.background': palette.bg.app,
    'activityBarTop.foreground': palette.text.normal,
    'activityBarTop.inactiveForeground': palette.text.muted,

    // 顶部模式下，激活项通常是一个"Tab"，所以给一个背景色更好看
    'activityBarTop.activeBackground': palette.bg.element,
    'activityBarTop.activeBorder': palette.primary.main, // 底部高亮线
    'activityBarTop.dropBorder': palette.primary.main,

    // --- Badges (通知角标) ---
    // 标准角标 (如：搜索结果数) -> 使用主色
    'activityBarBadge.background': palette.primary.main,
    'activityBarBadge.foreground': palette.text.inverse,

    // 警告角标 (如：ESLint 警告) -> 使用 Warning 色
    'activityWarningBadge.background': palette.state.warning,
    'activityWarningBadge.foreground': palette.bg.app, // 警告色通常是亮色，配深色文字

    // 错误角标 (如：代码错误) -> 使用 Error 色
    'activityErrorBadge.background': palette.state.error,
    'activityErrorBadge.foreground': palette.text.inverse,
  };
};
