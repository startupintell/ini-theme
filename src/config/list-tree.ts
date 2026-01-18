import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// List & Tree Control (文件树、搜索列表、快速打开)
// -----------------------------------------------------------------
export const listTreeConfig = (palette: ThemePalette) => {
  return {
    // --- Active Selection (当前聚焦且选中的项) ---
    // 背景：使用主色。这是用户当前正在处理的文件/项。
    'list.activeSelectionBackground': palette.primary.main + '10',
    // 文字：使用反色 (如蓝底白字，或白底黑字)
    'list.activeSelectionForeground': palette.text.normal,
    // 图标：也强制变为反色，保证对比度
    'list.activeSelectionIconForeground': palette.text.normal,

    // --- Inactive Selection (选中但失焦) ---
    // 场景：你点击了文件，然后光标移回了编辑器。此时侧边栏的文件依然是“选中”的，但变成了灰色。
    'list.inactiveSelectionBackground': palette.bg.app, // 或者 palette.secondary.main
    'list.inactiveSelectionForeground': palette.text.normal,
    'list.inactiveSelectionIconForeground': palette.text.muted,

    // --- Hover (悬停) ---
    // 鼠标滑过时的反馈
    'list.hoverBackground': palette.primary.main + '10',
    'list.hoverForeground': palette.text.normal,

    // --- Focus (键盘移动焦点但不选中) ---
    // 场景：在列表中按上下键移动，但还没按 Enter。
    'list.focusBackground': palette.bg.element, // 通常与 Hover 一致
    'list.focusForeground': palette.text.normal,
    // 聚焦时的边框：现代风格通常设为透明，或者使用极细的 Primary 边框
    'list.focusOutline': palette.transparent,
    // 如果同时选中且聚焦，通常去掉边框，依靠背景色区分
    'list.focusAndSelectionOutline': palette.transparent,

    // --- Drag and Drop (拖拽) ---
    // 拖拽文件时的背景高亮
    'list.dropBackground': palette.primary.surface,
    // 拖拽插入位置的线条颜色
    'list.dropBetweenBackground': palette.primary.main,

    // --- Search Highlights (搜索匹配文字) ---
    // 普通匹配文字：使用主色文字
    'list.highlightForeground': palette.primary.text,
    // 选中项中的匹配文字
    'list.focusHighlightForeground': palette.primary.text,
    'list.activeSelectionHighlightForeground': palette.primary.text,

    // --- List Filter Widget (列表内直接打字搜索出现的弹窗) ---
    'listFilterWidget.background': palette.bg.element,
    'listFilterWidget.outline': palette.border.focus,
    'listFilterWidget.noMatchesOutline': palette.state.error,
    'listFilterWidget.shadow': palette.shadow.main,

    // --- Tree Guides (树状结构缩进线) ---
    // 默认缩进线：极淡
    'tree.indentGuidesStroke': palette.border.subtle,
    // 悬停/非激活时的缩进线
    'tree.inactiveIndentGuidesStroke': palette.border.subtle, // 或者 transparent

    // --- Errors & Warnings (文件名变红/变黄) ---
    'list.errorForeground': palette.state.error,
    'list.warningForeground': palette.state.warning,
    // 无效项 (如未解析的路径)
    'list.invalidItemForeground': palette.text.muted,

    // --- Table (表格视图 - 较少用) ---
    // 奇数行背景 (斑马纹)：通常设为透明保持干净，需要时设为极淡灰色
    'tree.tableOddRowsBackground': palette.transparent,
  };
};
