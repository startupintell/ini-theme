import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Status Bar (底部状态栏)
// -----------------------------------------------------------------
export const statusBarConfig = (palette: ThemePalette) => {
  return {
    // --- Standard State (默认状态) ---
    // 背景：使用 App 层级 (最深色)，作为界面的底框
    'statusBar.background': palette.bg.app,
    // 文字：使用 Muted，因为状态栏信息通常是次要的 (行号、编码格式)
    'statusBar.foreground': palette.text.muted,
    // 边框：与 Panel 分隔的顶部边框
    'statusBar.border': palette.border.subtle,

    // --- No Folder (未打开文件夹) ---
    // 通常保持与默认一致，或者稍微变色提示"空闲"
    'statusBar.noFolderBackground': palette.bg.app,
    'statusBar.noFolderForeground': palette.text.muted,
    'statusBar.noFolderBorder': palette.border.subtle,

    // --- Debugging State (调试模式) ---
    // 场景：按 F5 运行代码时。整个状态栏变色，提醒用户正在调试。
    // 颜色：使用 Warning (橙色) 或 Error (红色)
    'statusBar.debuggingBackground': palette.state.warning,
    'statusBar.debuggingForeground': palette.bg.app, // 橙底黑字，对比度高
    'statusBar.debuggingBorder': palette.transparent,

    // --- Remote Item (左下角远程连接图标) ---
    // 场景：SSH, WSL, Dev Containers
    // 颜色：使用主色，作为连接状态的"锚点"
    'statusBarItem.remoteBackground': palette.primary.main,
    'statusBarItem.remoteForeground': palette.text.inverse,
    'statusBarItem.remoteHoverBackground': palette.primary.hover,
    'statusBarItem.remoteHoverForeground': palette.text.inverse,

    // --- Items Interaction (点击项：如 Git 分支, Prettier) ---
    // 悬停：简单的背景高亮
    'statusBarItem.hoverBackground': palette.bg.element,
    'statusBarItem.hoverForeground': palette.text.normal,
    // 点击：加深
    'statusBarItem.activeBackground': palette.bg.active,

    // --- Error & Warning Items (错误/警告摘要) ---
    // 场景：左下角显示的 "0 Errors, 1 Warning"

    // Error Items:
    'statusBarItem.errorBackground': palette.transparent, // 保持背景透明，只变文字
    'statusBarItem.errorForeground': palette.state.error,
    'statusBarItem.errorHoverBackground': palette.bg.element,
    'statusBarItem.errorHoverForeground': palette.state.error,

    // Warning Items:
    'statusBarItem.warningBackground': palette.transparent,
    'statusBarItem.warningForeground': palette.state.warning,
    'statusBarItem.warningHoverBackground': palette.bg.element,
    'statusBarItem.warningHoverForeground': palette.state.warning,

    // --- Prominent Items (重要项) ---
    // 某些插件会把自己的状态设为 Prominent (虽然现在很少见了)
    'statusBarItem.prominentBackground': palette.bg.element,
    'statusBarItem.prominentForeground': palette.text.normal,
    'statusBarItem.prominentHoverBackground': palette.bg.active,

    // --- Offline State (离线) ---
    'statusBarItem.offlineBackground': palette.text.muted,
    'statusBarItem.offlineForeground': palette.bg.app,

    // --- Focus (键盘导航) ---
    'statusBar.focusBorder': palette.primary.main,
    'statusBarItem.focusBorder': palette.primary.main,
  };
};
