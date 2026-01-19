import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Status Bar (Bottom status bar)
// -----------------------------------------------------------------
export const statusBarConfig = (palette: ThemePalette) => {
  return {
    // --- Standard State ---
    // Background: Use App level (darkest), serving as the base frame of the interface
    'statusBar.background': palette.bg.app,
    // Text: Use Muted, as status bar information is usually secondary (line numbers, encoding)
    'statusBar.foreground': palette.text.muted,
    // Border: Top border separating from the Panel
    'statusBar.border': palette.border.subtle,

    // --- No Folder (When no folder is open) ---
    // Usually kept consistent with default, or slightly changed to indicate "idle"
    'statusBar.noFolderBackground': palette.bg.app,
    'statusBar.noFolderForeground': palette.text.muted,
    'statusBar.noFolderBorder': palette.border.subtle,

    // --- Debugging State ---
    // Scenario: When running code with F5. The entire status bar changes color to remind the user of debugging.
    // Color: Use Warning (orange) or Error (red)
    'statusBar.debuggingBackground': palette.state.warning,
    'statusBar.debuggingForeground': palette.bg.app, // High contrast: black text on orange background
    'statusBar.debuggingBorder': palette.transparent,

    // --- Remote Item (Remote connection icon in the bottom left) ---
    // Scenario: SSH, WSL, Dev Containers
    // Color: Use primary color as an "anchor" for connection status
    'statusBarItem.remoteBackground': palette.primary.main,
    'statusBarItem.remoteForeground': palette.text.inverse,
    'statusBarItem.remoteHoverBackground': palette.primary.hover,
    'statusBarItem.remoteHoverForeground': palette.text.inverse,

    // --- Items Interaction (Clickable items: e.g., Git branch, Prettier) ---
    // Hover: Simple background highlight
    'statusBarItem.hoverBackground': palette.bg.element,
    'statusBarItem.hoverForeground': palette.text.normal,
    // Click: Deepen
    'statusBarItem.activeBackground': palette.bg.active,

    // --- Error & Warning Items (Error/Warning summaries) ---
    // Scenario: "0 Errors, 1 Warning" displayed in the bottom left

    // Error Items:
    'statusBarItem.errorBackground': palette.transparent, // Keep background transparent, only change text
    'statusBarItem.errorForeground': palette.state.error,
    'statusBarItem.errorHoverBackground': palette.bg.element,
    'statusBarItem.errorHoverForeground': palette.state.error,

    // Warning Items:
    'statusBarItem.warningBackground': palette.transparent,
    'statusBarItem.warningForeground': palette.state.warning,
    'statusBarItem.warningHoverBackground': palette.bg.element,
    'statusBarItem.warningHoverForeground': palette.state.warning,

    // --- Prominent Items ---
    // Some extensions set their status to Prominent (rare nowadays)
    'statusBarItem.prominentBackground': palette.bg.element,
    'statusBarItem.prominentForeground': palette.text.normal,
    'statusBarItem.prominentHoverBackground': palette.bg.active,

    // --- Offline State ---
    'statusBarItem.offlineBackground': palette.text.muted,
    'statusBarItem.offlineForeground': palette.bg.app,

    // --- Focus (Keyboard navigation) ---
    'statusBar.focusBorder': palette.primary.main,
    'statusBarItem.focusBorder': palette.primary.main,
  };
};
