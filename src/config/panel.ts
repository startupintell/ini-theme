import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Panel (底部面板 - Terminal, Output, Debug)
// -----------------------------------------------------------------
export const panelConfig = (palette: ThemePalette) => {
  return {
    // --- Container (容器) ---
    // 背景：使用 Panel 层级 (与编辑器一致)，创造无缝画布体验
    'panel.background': palette.bg.panel,

    // 边框：Panel 与 Editor 之间的分割线 (顶部边框)
    'panel.border': palette.border.subtle,

    // 拖拽反馈：拖动标题时的插入位置提示
    'panel.dropBorder': palette.primary.main,

    // --- Panel Tabs (标题栏 - TERMINAL, OUTPUT...) ---
    // 激活文字：高亮/正常色
    'panelTitle.activeForeground': palette.text.normal,
    // 激活指示线：底部细线条 (现代风格)
    'panelTitle.activeBorder': palette.primary.main,

    // 未激活文字：暗淡色
    'panelTitle.inactiveForeground': palette.text.muted,

    // 标题栏底部分割线：通常设为 transparent，让 Tab 看起来悬浮在内容之上
    // 或者设为 border.subtle 以明确划分区域
    'panelTitle.border': palette.border.subtle,

    // --- Badges (角标 - 如 Problems: 2) ---
    // 与 Activity Bar Badge 保持一致
    'panelTitleBadge.background': palette.primary.main,
    'panelTitleBadge.foreground': palette.text.inverse,

    // --- Inputs within Panel (面板内的搜索框/输入框) ---
    // 保持全局输入框一致性
    'panelInput.border': palette.border.muted,

    // --- Panel Sections (当面板被拆分成多个区域时) ---
    // 区域分割线
    'panelSection.border': palette.border.subtle,
    // 拖拽背景
    'panelSection.dropBackground': palette.primary.surface,

    // Section Header (类似 SideBar 的分组头)
    'panelSectionHeader.background': palette.bg.active, // 稍微区分一下
    'panelSectionHeader.foreground': palette.text.normal,
    'panelSectionHeader.border': palette.border.subtle,

    // --- Output View (输出视图特定颜色) ---
    // 通常与 Panel 保持一致
    'outputView.background': palette.bg.panel,

    // --- Sticky Scroll (粘性滚动) ---
    // 与 Editor Sticky Scroll 逻辑一致
    'panelStickyScroll.background': palette.bg.panel,
    'panelStickyScroll.border': palette.transparent, // 无缝
    'panelStickyScroll.shadow': palette.shadow.scroll,
    'outputViewStickyScroll.background': palette.bg.panel,
  };
};
