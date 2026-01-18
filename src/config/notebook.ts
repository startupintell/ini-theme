import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Notebook (Jupyter 笔记本界面)
// -----------------------------------------------------------------
export const notebookConfig = (palette: ThemePalette) => {
  return {
    // --- Canvas & General (整体画布) ---
    // 背景：使用 Panel 层级，保持与普通编辑器一致
    'notebook.editorBackground': palette.bg.panel,

    // --- Cell Editor (代码输入区) ---
    // 背景：保持与画布一致，创造"无缝文档"的感觉
    'notebook.cellEditorBackground': palette.bg.panel,
    // 边框：平时不显示边框，保持整洁
    'notebook.cellBorderColor': palette.border.subtle, // 或者 transparent

    // --- Interaction (交互状态) ---
    // 悬停：轻微高亮整个 Cell
    'notebook.cellHoverBackground': palette.bg.element + '40', // 极淡的背景

    // 插入指示器 (鼠标在两个 Cell 之间时的横线)
    // 策略：必须醒目，告诉用户"新 Cell 会插在这里"
    'notebook.cellInsertionIndicator': palette.primary.main,

    // --- Focused Cell (选中的单元格) ---
    // 背景：稍微变色，强调当前操作区
    'notebook.focusedCellBackground': palette.bg.active,
    // 边框：这是焦点指示的核心，使用主色
    'notebook.focusedCellBorder': palette.primary.main,
    // 编辑器边框：如果想要更强的隔离感，可以加色，否则透明
    'notebook.focusedEditorBorder': palette.transparent,

    // 失焦但选中 (Inactive Focus)
    'notebook.inactiveFocusedCellBorder': palette.border.muted,

    // 多选 (Selected Cells)
    'notebook.selectedCellBackground': palette.bg.active,
    'notebook.selectedCellBorder': palette.border.subtle,

    // --- Output Container (代码下方的输出结果) ---
    // 策略：使用 Element 背景，区分 Code 和 Output
    'notebook.outputContainerBackgroundColor': palette.bg.element,
    // 边框：Output 顶部的分割线
    'notebook.outputContainerBorderColor': palette.border.subtle,

    // --- Status Icons (状态栏图标 - 右下角) ---
    // 运行中 (Running): 蓝色/主色
    'notebookStatusRunningIcon.foreground': palette.primary.main,
    // 成功 (Success): 绿色
    'notebookStatusSuccessIcon.foreground': palette.state.success,
    // 错误 (Error): 红色
    'notebookStatusErrorIcon.foreground': palette.state.error,

    // --- Scrollbar (独立滚动条) ---
    // Notebook 有时有自己的滚动条
    'notebookScrollbarSlider.background': palette.bg.active,
    'notebookScrollbarSlider.hoverBackground': palette.text.muted,
    'notebookScrollbarSlider.activeBackground': palette.text.normal,

    // --- Misc ---
    // 搜索高亮
    'notebook.symbolHighlightBackground': palette.bg.active,
    // Cell 底部工具栏分割线
    'notebook.cellToolbarSeparator': palette.border.subtle,
    // 状态栏 Item 悬停
    'notebook.cellStatusBarItemHoverBackground': palette.bg.element,

    // 右侧概览条的运行状态指示
    'notebookEditorOverviewRuler.runningCellForeground': palette.primary.main,
  };
};
