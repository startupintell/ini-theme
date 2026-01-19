import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Panel (Bottom panel - Terminal, Output, Debug)
// -----------------------------------------------------------------
export const panelConfig = (palette: ThemePalette) => {
  return {
    // --- Container ---
    // Background: Use Panel level (consistent with editor) for a seamless canvas experience
    'panel.background': palette.bg.panel,

    // Border: Divider between Panel and Editor (top border)
    'panel.border': palette.border.subtle,

    // Drop feedback: Insertion position indicator when dragging titles
    'panel.dropBorder': palette.primary.main,

    // --- Panel Tabs (Title bar - TERMINAL, OUTPUT...) ---
    // Active text: Highlight/Normal color
    'panelTitle.activeForeground': palette.text.normal,
    // Active Indicator: Thin bottom border (modern style)
    'panelTitle.activeBorder': palette.primary.main,

    // Inactive text: Muted color
    'panelTitle.inactiveForeground': palette.text.muted,

    // Border below the title bar: Usually set to transparent to make tabs look floating
    // or set to border.subtle for clear segmentation
    'panelTitle.border': palette.border.subtle,

    // --- Badges (e.g., Problems: 2) ---
    // Consistent with Activity Bar Badges
    'panelTitleBadge.background': palette.primary.main,
    'panelTitleBadge.foreground': palette.text.inverse,

    // --- Inputs within Panel (Search/input boxes inside the panel) ---
    // Maintain global input field consistency
    'panelInput.border': palette.border.muted,

    // --- Panel Sections (When the panel is split into multiple areas) ---
    // Section dividers
    'panelSection.border': palette.border.subtle,
    // Drop background
    'panelSection.dropBackground': palette.primary.surface,

    // Section Header (Similar to SideBar section headers)
    'panelSectionHeader.background': palette.bg.active, // Slight distinction
    'panelSectionHeader.foreground': palette.text.normal,
    'panelSectionHeader.border': palette.border.subtle,

    // --- Output View (Specific colors for output view) ---
    // Usually consistent with Panel
    'outputView.background': palette.bg.panel,

    // --- Sticky Scroll ---
    // Consistent with Editor Sticky Scroll logic
    'panelStickyScroll.background': palette.bg.panel,
    'panelStickyScroll.border': palette.transparent, // Seamless
    'panelStickyScroll.shadow': palette.shadow.scroll,
    'outputViewStickyScroll.background': palette.bg.panel,
  };
};
