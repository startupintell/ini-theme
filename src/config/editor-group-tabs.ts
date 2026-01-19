import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Editor Groups & Tabs
// -----------------------------------------------------------------
export const editorGroupTabsConfig = (palette: ThemePalette) => {
  return {
    // --- Editor Group (Editor container) ---
    // Border: Divider between two editors when screen is split (Split View)
    'editorGroup.border': palette.border.subtle,

    // Drop feedback: Background when dragging a file into an editor area
    'editorGroup.dropBackground': palette.primary.surface,

    // Empty editor group: Background when no files are open
    'editorGroup.emptyBackground': palette.bg.panel,
    'editorGroup.focusedEmptyBorder': palette.primary.main, // Visible focus indicator even when empty

    // --- Header Container (Tab bar background) ---
    // Overall background of the tab bar: Usually darker/grayer than the editor to distinguish "toolbar" from "canvas"
    'editorGroupHeader.tabsBackground': palette.transparent,

    // No Tabs Mode: Background of the title area if tabs are hidden
    'editorGroupHeader.noTabsBackground': palette.bg.panel,

    // Divider between Header and Editor:
    // In modern design, if Active Tab and Editor backgrounds are the same, this is often transparent for a "seamless" look.
    // However, "subtle" can also be used for a classic clear division.
    'editorGroupHeader.border': palette.transparent, // Or palette.transparent

    // --- Active Tab (Current active tab within the focused group) ---
    // Background: Must match editor.background (bg.panel) to seem like an extension of the editor
    'tab.activeBackground': palette.bg.panel,
    // Text: Highlighted
    'tab.activeForeground': palette.text.normal,
    // Top highlight line
    'tab.activeBorderTop': palette.transparent,
    // Other borders: Usually removed
    'tab.activeBorder': palette.transparent,

    // --- Unfocused Active Tab (Current active tab in a non-focused group) ---
    // Scenario: Split screen with focus on the left; the right group's current tab is Unfocused Active.
    'tab.unfocusedActiveBackground': palette.bg.panel, // Maintain consistent background
    'tab.unfocusedActiveForeground': palette.text.muted, // Dimmed text to indicate it's not the current focus
    'tab.unfocusedActiveBorderTop': palette.border.muted, // Top line turns gray

    // --- Inactive Tab (Background tabs) ---
    // Background: Consistent with the Header background, visually "recessed"
    'tab.inactiveBackground': palette.transparent,
    // Text: Dimmed
    'tab.inactiveForeground': palette.text.muted,

    // --- Hover States ---
    'tab.hoverBackground': palette.bg.element,
    'tab.hoverForeground': palette.text.normal,

    // --- Tab Borders & Separators ---
    // Vertical divider between tabs: Modern style usually keeps this transparent
    'tab.border': palette.transparent,
    // Insertion indicator line when dragging tabs
    'tab.dragAndDropBorder': palette.primary.main,
    // Divider to the right of Pinned tabs
    'tab.lastPinnedBorder': palette.border.subtle,

    // --- Modified / Dirty State (Unsaved files) ---
    // Border changes: Often redundant due to the dot icon, but can be used for extra emphasis
    'tab.activeModifiedBorder': palette.border.focus, // Active & unsaved
    'tab.inactiveModifiedBorder': palette.border.muted, // Background & unsaved
    'tab.unfocusedActiveModifiedBorder': palette.border.muted,

    // --- Editor Pane (Overall editor pane) ---
    'editorPane.background': palette.bg.panel,
  };
};
