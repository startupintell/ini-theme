import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Debug Icons (Breakpoint icons & Debug Toolbar control buttons)
// -----------------------------------------------------------------
export const debugIconConfig = (palette: ThemePalette) => {
  return {
    // --- Breakpoints (Red dots in the editor's left Gutter) ---

    // Active breakpoint: Red
    'debugIcon.breakpointForeground': palette.state.error,

    // Disabled breakpoint: Gray (indicates inactive)
    'debugIcon.breakpointDisabledForeground': palette.text.muted,

    // Unverified breakpoint: Hollow/Gray (usually means SourceMap not loaded)
    'debugIcon.breakpointUnverifiedForeground': palette.text.subtle,

    // --- Stack Frame Indicators (Indicators for "where the program is currently at") ---

    // Current paused line (Yellow arrow): Must be highly visible!
    'debugIcon.breakpointCurrentStackframeForeground': palette.state.warning,

    // Other lines in the call stack: Slightly dimmed
    'debugIcon.breakpointStackframeForeground': palette.text.muted,

    // --- Debug Toolbar (Floating media control bar) ---
    // Strategy: Follow common media control color semantics

    // Start / Continue (Play): Green
    'debugIcon.startForeground': palette.state.success,
    'debugIcon.continueForeground': palette.state.success,

    // Pause: Yellow/Orange
    'debugIcon.pauseForeground': palette.state.warning,

    // Stop / Disconnect: Red
    'debugIcon.stopForeground': palette.state.error,
    'debugIcon.disconnectForeground': palette.state.error,

    // Restart: Green (implies starting over)
    'debugIcon.restartForeground': palette.state.success,

    // Stepping: Blue (represents navigation/operation)
    'debugIcon.stepOverForeground': palette.primary.main,
    'debugIcon.stepIntoForeground': palette.primary.main,
    'debugIcon.stepOutForeground': palette.primary.main,
    'debugIcon.stepBackForeground': palette.primary.main,

    // --- Debug Console (Bottom debug console) ---

    // Log level colors
    'debugConsole.infoForeground': palette.state.info, // Blue
    'debugConsole.warningForeground': palette.state.warning, // Yellow
    'debugConsole.errorForeground': palette.state.error, // Red

    // Source file link (File name shown on the right)
    'debugConsole.sourceForeground': palette.text.subtle,

    // Input prompt (>)
    'debugConsoleInputIcon.foreground': palette.primary.main,
  };
};
