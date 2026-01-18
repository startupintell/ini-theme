import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Side Bar (侧边栏 - Explorer, Search, Git)
// -----------------------------------------------------------------
export const sideBarConfig = (palette: ThemePalette) => {
  return {
    // --- Container (容器) ---
    // 背景：通常使用 Panel 层级 (neutral[900])
    'sideBar.background': palette.bg.panel,

    // 文字：侧边栏文字不宜太亮，使用 muted 或 normal
    'sideBar.foreground': palette.text.normal,

    // 边框：侧边栏与编辑器之间的分割线 (右侧边框)
    'sideBar.border': palette.border.subtle,

    // 拖拽反馈：当拖动整个 View 面板时的背景
    'sideBar.dropBackground': palette.primary.surface,

    // --- Title Area (顶部大标题：如 "EXPLORER") ---
    // 背景：保持与容器一致，更加简洁
    'sideBarTitle.background': palette.bg.panel,
    'sideBarTitle.foreground': palette.text.normal,

    // 标题底部的分割线：如果想要极致扁平，可以设为 transparent
    'sideBarTitle.border': palette.transparent,

    // --- Section Headers (分组头：如 "OPEN EDITORS") ---
    // 背景：
    // 1. Modern/Flat: 使用 palette.bg.panel (与背景融合)
    // 2. Classic: 使用 palette.bg.element (稍微亮一点/暗一点的条)
    'sideBarSectionHeader.background': palette.bg.panel,

    // 文字：分组标题通常比较重要，用 normal
    'sideBarSectionHeader.foreground': palette.text.normal,

    // 边框：分组头顶部的分割线
    'sideBarSectionHeader.border': palette.transparent,

    // --- Sticky Scroll (粘性滚动 - 新功能) ---
    // 当列表滚动时，分组头吸附在顶部的效果
    'sideBarStickyScroll.background': palette.bg.panel, // 吸附时背景与侧边栏一致
    'sideBarStickyScroll.border': palette.border.subtle, // 吸附时的下边缘线
    'sideBarStickyScroll.shadow': palette.shadow.scroll, // 吸附时的阴影 (通常设为透明)

    // --- Activity Bar Top Border ---
    // 仅当 Activity Bar 设置在 Side Bar 顶部时出现
    'sideBarActivityBarTop.border': palette.border.subtle,
  };
};
