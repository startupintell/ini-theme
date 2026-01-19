import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Side Bar (Explorer, Search, Git)
// -----------------------------------------------------------------
export const sideBarConfig = (palette: ThemePalette) => {
  return {
    // --- Container ---
    // Background: Usually use Panel level (neutral[900])
    'sideBar.background': palette.bg.panel,

    // Text: Side bar text shouldn't be too bright, use Muted or Normal
    'sideBar.foreground': palette.text.normal,

    // Border: Divider between side bar and editor (right border)
    'sideBar.border': palette.border.subtle,

    // Drop feedback: Background when dragging a view panel
    'sideBar.dropBackground': palette.primary.surface,

    // --- Title Area (Main title like "EXPLORER") ---
    // Background: Consistent with the container for a cleaner look
    'sideBarTitle.background': palette.bg.panel,
    'sideBarTitle.foreground': palette.text.normal,

    // Divider below the title: Set to transparent for a minimalist flat design
    'sideBarTitle.border': palette.transparent,

    // --- Section Headers (e.g., "OPEN EDITORS") ---
    // Background:
    // 1. Modern/Flat: Use palette.bg.panel (blends with the background)
    // 2. Classic: Use palette.bg.element (slightly lighter/darker strip)
    'sideBarSectionHeader.background': palette.bg.panel,

    // Text: Section headers are generally important, use Normal
    'sideBarSectionHeader.foreground': palette.text.normal,

    // Border: Divider at the top of a section header
    'sideBarSectionHeader.border': palette.transparent,

    // --- Sticky Scroll ---
    // Section headers pinning to the top when the list scrolls
    'sideBarStickyScroll.background': palette.bg.panel, // Same background as side bar when pinned
    'sideBarStickyScroll.border': palette.border.subtle, // Bottom edge line when pinned
    'sideBarStickyScroll.shadow': palette.shadow.scroll, // Shadow when pinned (usually transparent)

    // --- Activity Bar Top Border ---
    // Only appears when the Activity Bar is set to the top of the Side Bar
    'sideBarActivityBarTop.border': palette.border.subtle,
  };
};
