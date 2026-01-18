import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Debug Icons (断点图标 & 调试工具栏控制按钮)
// -----------------------------------------------------------------
export const debugIconConfig = (palette: ThemePalette) => {
  return {
    // --- Breakpoints (编辑器左侧 Gutter 里的红点) ---

    // 激活的断点: 红色
    'debugIcon.breakpointForeground': palette.state.error,

    // 禁用的断点: 灰色 (表示非激活)
    'debugIcon.breakpointDisabledForeground': palette.text.muted,

    // 未验证的断点: 空心/灰色 (通常意味着 SourceMap 没加载)
    'debugIcon.breakpointUnverifiedForeground': palette.text.subtle,

    // --- Stack Frame Indicators (指示"程序走到哪了") ---

    // 当前暂停的那一行 (黄色箭头): 必须醒目!
    'debugIcon.breakpointCurrentStackframeForeground': palette.state.warning,

    // 调用堆栈里的其他行: 稍微暗淡一点
    'debugIcon.breakpointStackframeForeground': palette.text.muted,

    // --- Debug Toolbar (悬浮播放控制条) ---
    // 策略：遵循通用的媒体控制颜色语义

    // Start / Continue (播放): 绿色
    'debugIcon.startForeground': palette.state.success,
    'debugIcon.continueForeground': palette.state.success,

    // Pause (暂停): 黄色/橙色
    'debugIcon.pauseForeground': palette.state.warning,

    // Stop / Disconnect (停止): 红色
    'debugIcon.stopForeground': palette.state.error,
    'debugIcon.disconnectForeground': palette.state.error,

    // Restart (重载): 绿色 (意味着重新开始)
    'debugIcon.restartForeground': palette.state.success,

    // Stepping (单步调试): 蓝色 (代表导航/操作)
    'debugIcon.stepOverForeground': palette.primary.main,
    'debugIcon.stepIntoForeground': palette.primary.main,
    'debugIcon.stepOutForeground': palette.primary.main,
    'debugIcon.stepBackForeground': palette.primary.main,

    // --- Debug Console (底部调试控制台) ---

    // 日志级别颜色
    'debugConsole.infoForeground': palette.state.info, // 蓝色
    'debugConsole.warningForeground': palette.state.warning, // 黄色
    'debugConsole.errorForeground': palette.state.error, // 红色

    // 源文件链接 (右侧显示的文件名)
    'debugConsole.sourceForeground': palette.text.subtle,

    // 输入提示符 (>)
    'debugConsoleInputIcon.foreground': palette.primary.main,
  };
};
