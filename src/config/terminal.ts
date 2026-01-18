import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Integrated Terminal (集成终端)
// -----------------------------------------------------------------
export const terminalConfig = (palette: ThemePalette) => {
  return {
    // --- Viewport (视口) ---
    // 背景：与 Panel 保持一致，无缝衔接
    'terminal.background': palette.bg.panel,
    // 文字：默认前景
    'terminal.foreground': palette.text.normal,
    // 边框：分屏时的分割线
    'terminal.border': palette.border.subtle,

    // --- Cursor & Selection (光标与选区) ---
    // 保持与编辑器一致
    'terminalCursor.foreground': palette.primary.main,
    'terminalCursor.background': palette.text.inverse,
    'terminal.selectionBackground': palette.primary.surface,
    'terminal.inactiveSelectionBackground': palette.bg.element, // 或 primary.surface + '80'
    'terminal.selectionForeground': null, // null 表示保留文字原色，只改背景

    // --- ANSI Colors (核心 16 色) ---
    // 策略：直接映射到主题的 Palette，确保一致性

    // Blacks (通常用于背景或极暗的文字)
    'terminal.ansiBlack': palette.bg.element, // 稍微亮一点的黑
    'terminal.ansiBrightBlack': palette.text.subtle, // 灰色 (用于注释/非重要信息)

    // Reds (错误/删除)
    'terminal.ansiRed': palette.state.error,
    'terminal.ansiBrightRed': palette.state.error, // 保持一致

    // Greens (成功/新增/字符串)
    'terminal.ansiGreen': palette.state.success,
    'terminal.ansiBrightGreen': palette.state.success,

    // Yellows (警告/数字)
    'terminal.ansiYellow': palette.state.warning,
    'terminal.ansiBrightYellow': palette.state.warning,

    // Blues (目录/函数/链接)
    'terminal.ansiBlue': palette.primary.main,
    'terminal.ansiBrightBlue': palette.primary.main,

    // Magentas (关键字/紫色)
    'terminal.ansiMagenta': palette.secondary.main || '#c084fc', // 紫色
    'terminal.ansiBrightMagenta': palette.secondary.main || '#c084fc',

    // Cyans (正则/深蓝/青色)
    'terminal.ansiCyan': palette.state.info, // 青色/天蓝
    'terminal.ansiBrightCyan': palette.state.info,

    // Whites (普通文字)
    'terminal.ansiWhite': palette.text.normal,
    'terminal.ansiBrightWhite': palette.text.normal, // 有时设为更亮的白

    // --- Search & Find (查找) ---
    // 与编辑器查找保持一致
    'terminal.findMatchBackground': palette.state.warning + '50',
    'terminal.findMatchBorder': palette.state.warning,
    'terminal.findMatchHighlightBackground': palette.state.warning + '20',
    'terminal.findMatchHighlightBorder': palette.transparent,

    // --- Shell Integration (命令装饰器 - 左侧小圆点) ---
    // 默认点：灰色
    'terminalCommandDecoration.defaultBackground': palette.text.subtle,
    // 成功点：绿色 (如 exit code 0)
    'terminalCommandDecoration.successBackground': palette.state.success,
    // 失败点：红色 (如 exit code 1)
    'terminalCommandDecoration.errorBackground': palette.state.error,
    // 辅助线
    'terminalCommandGuide.foreground': palette.border.subtle,

    // --- Sticky Scroll (粘性滚动) ---
    // 终端现在也支持粘性滚动 (显示上一条命令)
    'terminalStickyScroll.background': palette.bg.panel,
    'terminalStickyScroll.border': palette.border.subtle,
    'terminalStickyScrollHover.background': palette.bg.element,

    // --- Terminal IntelliSense Icons (终端智能提示图标) ---
    // 当你在终端输入命令并触发建议时显示的图标颜色

    // Git 相关
    'terminalSymbolIcon.branchForeground': palette.primary.main,
    'terminalSymbolIcon.gitCommitForeground': palette.text.muted,
    'terminalSymbolIcon.remoteForeground': palette.text.muted,

    // 文件系统
    'terminalSymbolIcon.folderForeground': palette.primary.main,
    'terminalSymbolIcon.fileForeground': palette.text.normal,
    'terminalSymbolIcon.symbolicLinkFileForeground': palette.text.subtle,

    // 命令参数
    'terminalSymbolIcon.flagForeground': palette.state.warning, // -f, --force
    'terminalSymbolIcon.optionForeground': palette.state.warning,
    'terminalSymbolIcon.argumentForeground': palette.text.normal,
  };
};
