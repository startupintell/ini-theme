import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Editor Groups & Tabs (编辑器组与标签页)
// -----------------------------------------------------------------
export const editorGroupTabsConfig = (palette: ThemePalette) => {
  return {
    // --- Editor Group (编辑器容器) ---
    // 边框：当拆分屏幕 (Split View) 时，两个编辑器之间的分割线
    'editorGroup.border': palette.border.subtle,

    // 拖拽反馈：拖动文件到编辑器区域时的背景
    'editorGroup.dropBackground': palette.primary.surface,

    // 空编辑器组：没有打开文件时的背景
    'editorGroup.emptyBackground': palette.bg.panel,
    'editorGroup.focusedEmptyBorder': palette.primary.main, // 即使空的时候也能看到焦点

    // --- Header Container (标签栏背景) ---
    // 标签栏的整体背景：通常比编辑器背景更深/更灰，以区分"工具栏"和"画布"
    'editorGroupHeader.tabsBackground': palette.transparent,

    // No Tabs Mode: 如果用户隐藏了标签页，标题栏的背景
    'editorGroupHeader.noTabsBackground': palette.bg.panel,

    // Header 与 Editor 的分割线：
    // 在现代设计中，如果 Active Tab 和 Editor 背景一样，这个线通常设为 transparent，
    // 实现"无缝连接"效果。但为了稳妥，也可以设为 subtle。
    'editorGroupHeader.border': palette.transparent, // 或者 palette.transparent

    // --- Active Tab (当前激活标签 - 在当前激活的组中) ---
    // 背景：必须与 editor.background (bg.panel) 一致，形成延伸感
    'tab.activeBackground': palette.bg.panel,
    // 文字：高亮
    'tab.activeForeground': palette.text.normal,
    // 顶部高亮线
    'tab.activeBorderTop': palette.transparent,
    // 底部/其他边框：通常去掉
    'tab.activeBorder': palette.transparent,

    // --- Unfocused Active Tab (当前激活标签 - 但焦点在另一个组) ---
    // 场景：你分屏了左右两个编辑器，焦点在左边，右边的那个当前标签就是 Unfocused Active。
    'tab.unfocusedActiveBackground': palette.bg.panel, // 依然保持背景一致
    'tab.unfocusedActiveForeground': palette.text.muted, // 文字变暗，表示"我不是当前焦点"
    'tab.unfocusedActiveBorderTop': palette.border.muted, // 顶部线变成灰色

    // --- Inactive Tab (后台标签) ---
    // 背景：与 Header 背景一致，视觉上"凹"下去
    'tab.inactiveBackground': palette.transparent,
    // 文字：暗淡
    'tab.inactiveForeground': palette.text.muted,

    // --- Hover States (悬停) ---
    'tab.hoverBackground': palette.bg.element,
    'tab.hoverForeground': palette.text.normal,

    // --- Tab Borders & Separators (标签分割线) ---
    // 标签之间的垂直分割线：现代风格通常设为透明
    'tab.border': palette.transparent,
    // 拖拽标签时的插入指示线
    'tab.dragAndDropBorder': palette.primary.main,
    // 固定(Pinned)标签右侧的分割线
    'tab.lastPinnedBorder': palette.border.subtle,

    // --- Modified / Dirty State (文件未保存) ---
    // 顶部边框变化：通常不需要，因为这时候标签上会有一个圆点图标。
    // 但如果想强调，可以让它变成主色。
    'tab.activeModifiedBorder': palette.border.focus, // 激活且未保存
    'tab.inactiveModifiedBorder': palette.border.muted, // 后台且未保存
    'tab.unfocusedActiveModifiedBorder': palette.border.muted,

    // --- Editor Pane (编辑器面板整体) ---
    'editorPane.background': palette.bg.panel,
  };
};
