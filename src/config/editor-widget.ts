import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Editor Widget (悬浮窗 - 查找/提示/粘性滚动)
// -----------------------------------------------------------------
export const editorWidgetConfig = (palette: ThemePalette) => {
  return {
    // --- General Widget (通用挂件 - 如查找替换框) ---
    // 背景：使用 Element 层级，产生"悬浮卡片"的效果
    'editorWidget.background': palette.bg.element,
    // 边框：细边框
    'editorWidget.border': palette.border.muted,
    // 文字：正常
    'editorWidget.foreground': palette.text.normal,
    // 大小调整条的边框 (查找框下方的分割线)
    'editorWidget.resizeBorder': palette.primary.main,

    // --- Suggest Widget (智能提示/补全列表) ---
    // 背景：悬浮层
    'editorSuggestWidget.background': palette.bg.app,
    'editorSuggestWidget.border': palette.border.subtle,
    'editorSuggestWidget.foreground': palette.text.normal,

    // 选中项 (Selected Item)
    // 策略：使用主色高亮，这是最清晰的交互反馈
    'editorSuggestWidget.selectedBackground': palette.primary.main,
    'editorSuggestWidget.selectedForeground': palette.text.inverse, // 反色文字
    'editorSuggestWidget.selectedIconForeground': palette.text.inverse, // 反色图标

    // 匹配文字高亮 (Match Highlights)
    // 未选中时：使用主色文字
    'editorSuggestWidget.highlightForeground': palette.primary.main,
    // 选中时：因为背景变蓝了，高亮文字需要变白(反色)
    'editorSuggestWidget.focusHighlightForeground': palette.text.inverse,

    // 状态栏 (提示框底部的 "Read more..." 等小字)
    'editorSuggestWidgetStatus.foreground': palette.text.muted,

    // --- Hover Widget (鼠标悬停提示) ---
    // 类似于 Tooltip
    'editorHoverWidget.background': palette.text.inverse,
    'editorHoverWidget.border': palette.border.subtle,
    'editorHoverWidget.foreground': palette.text.normal,
    // 状态栏 (Hover 底部有时会有操作栏)
    'editorHoverWidget.statusBarBackground': palette.text.inverse,
    // 参数提示中的高亮参数
    'editorHoverWidget.highlightForeground': palette.primary.main,

    // --- Sticky Scroll (粘性滚动) ---
    // 策略：无缝融合 (Seamless)。
    // 让吸附在顶部的代码行看起来依然属于编辑器的一部分，而不是一个独立的 Header。
    'editorStickyScroll.background': palette.bg.panel, // 与编辑器背景一致
    'editorStickyScroll.border': palette.transparent, // 去掉下划线，或者用 muted 极细线
    'editorStickyScroll.shadow': palette.shadow.scroll, // 滚动时的阴影
    // 悬停时稍微变色，提示这是可点击跳转的
    'editorStickyScrollHover.background': palette.bg.element,
    // Gutter (行号区域) 也要无缝
    'editorStickyScrollGutter.background': palette.bg.panel,

    // --- Ghost Text (AI/Copilot 幽灵文字) ---
    // 必须非常低调
    'editorGhostText.foreground': palette.text.subtle,
    'editorGhostText.background': palette.transparent,
    'editorGhostText.border': palette.transparent,

    // --- Debug Exception Widget (异常中断弹窗) ---
    // 当代码报错暂停时出现的窗口
    'debugExceptionWidget.background': palette.bg.element,
    'debugExceptionWidget.border': palette.state.error, // 红色边框强调错误

    // --- Marker Navigation (跳转错误时的导航条) ---
    // 按 F8 跳转错误时显示的小条
    'editorMarkerNavigation.background': palette.bg.element,
    // 错误/警告的色块
    'editorMarkerNavigationError.background': palette.state.error,
    'editorMarkerNavigationWarning.background': palette.state.warning,
    'editorMarkerNavigationInfo.background': palette.primary.main,
    // 标题头背景 (可以稍微深一点/亮一点)
    'editorMarkerNavigationError.headerBackground': palette.state.error + '20',
    'editorMarkerNavigationWarning.headerBackground': palette.state.warning + '20',
    'editorMarkerNavigationInfo.headerBackground': palette.primary.main + '20',
  };
};
