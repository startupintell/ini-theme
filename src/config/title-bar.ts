import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Title Bar (Top title bar)
// -----------------------------------------------------------------
export const titleBarConfig = (palette: ThemePalette) => {
  return {
    // --- Active Window ---
    // Background: Use App level (darkest), merging with Activity Bar
    'titleBar.activeBackground': palette.bg.panel,

    // Text: Title bar text is usually file name or workspace name, subsidiary information, use Normal but could be Muted
    'titleBar.activeForeground': palette.text.normal,

    // Border: Bottom divider line
    // Setting to transparent allows the title bar to merge with the editor
    // Keep a thin line to distinguish between the "draggable area" and the "tabs area"
    'titleBar.border': palette.border.subtle,

    // --- Inactive Window (Background window) ---
    // Scenario: Clicking on the browser makes VS Code a background window.
    // Strategy: Keep background the same (avoid flickering), just dim the text to reduce visual distraction.
    'titleBar.inactiveBackground': palette.bg.panel,
    'titleBar.inactiveForeground': palette.text.muted,
  };
};
