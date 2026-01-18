import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Action Colors (工具栏与操作列表)
// -----------------------------------------------------------------
export const actionColorsConfig = (palette: ThemePalette) => {
  return {
    // --- Toolbar (工具栏图标交互) ---
    // 悬停背景：使用 Element 层级 (neutral[800])，提供轻微的方形背景反馈
    'toolbar.hoverBackground': palette.transparent,

    // 悬停轮廓：现代扁平化设计通常设为透明，避免出现难看的边框
    'toolbar.hoverOutline': palette.transparent,

    // 按下背景：使用 Active 层级，比悬停更深/更明显
    'toolbar.activeBackground': palette.bg.active,

    // --- Editor Action List (快速修复/灯泡菜单) ---
    // 背景：作为一个弹出层(Widget)，使用 Element 背景
    'editorActionList.background': palette.bg.element,

    // 列表文字
    'editorActionList.foreground': palette.text.normal,

    // 聚焦项背景：使用主色高亮，类似于下拉菜单的选中态
    'editorActionList.focusBackground': palette.primary.main,

    // 聚焦项文字：使用反色 (如蓝底白字)
    'editorActionList.focusForeground': palette.text.inverse,
  };
};
