import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Integrated Terminal
// -----------------------------------------------------------------
export const terminalConfig = (palette: ThemePalette) => {
  return {
    // --- Viewport ---
    // Background: Consistent with Panel for a seamless look
    'terminal.background': palette.bg.panel,
    // Text: Default foreground
    'terminal.foreground': palette.text.normal,
    // Border: Divider for split terminals
    'terminal.border': palette.border.subtle,

    // --- Cursor & Selection ---
    // Keep consistent with the editor
    'terminalCursor.foreground': palette.primary.main,
    'terminalCursor.background': palette.text.inverse,
    'terminal.selectionBackground': palette.primary.surface,
    'terminal.inactiveSelectionBackground': palette.bg.element, // Or primary.surface + '80'
    'terminal.selectionForeground': null, // null means retain the original text color, only change the background

    // --- ANSI Colors (Core 16 colors) ---
    // Strategy: Directly map to the theme palette for consistency

    // Blacks (usually used for background or very dark text)
    'terminal.ansiBlack': palette.bg.element, // Slightly lighter black
    'terminal.ansiBrightBlack': palette.text.subtle, // Gray (for comments/non-essential info)

    // Reds (Error/Delete)
    'terminal.ansiRed': palette.state.error,
    'terminal.ansiBrightRed': palette.state.error, // Keep consistent

    // Greens (Success/Add/String)
    'terminal.ansiGreen': palette.state.success,
    'terminal.ansiBrightGreen': palette.state.success,

    // Yellows (Warning/Number)
    'terminal.ansiYellow': palette.state.warning,
    'terminal.ansiBrightYellow': palette.state.warning,

    // Blues (Directory/Function/Link)
    'terminal.ansiBlue': palette.primary.main,
    'terminal.ansiBrightBlue': palette.primary.main,

    // Magentas (Keyword/Purple)
    'terminal.ansiMagenta': palette.secondary.main || '#c084fc', // Purple
    'terminal.ansiBrightMagenta': palette.secondary.main || '#c084fc',

    // Cyans (Regex/Dark Blue/Cyan)
    'terminal.ansiCyan': palette.state.info, // Cyan/Sky Blue
    'terminal.ansiBrightCyan': palette.state.info,

    // Whites (Normal text)
    'terminal.ansiWhite': palette.text.normal,
    'terminal.ansiBrightWhite': palette.text.normal, // Sometimes set to a brighter white

    // --- Search & Find ---
    // Consistent with editor find
    'terminal.findMatchBackground': palette.state.warning + '50',
    'terminal.findMatchBorder': palette.state.warning,
    'terminal.findMatchHighlightBackground': palette.state.warning + '20',
    'terminal.findMatchHighlightBorder': palette.transparent,

    // --- Shell Integration (Command decorators - small dots on the left) ---
    // Default dot: Gray
    'terminalCommandDecoration.defaultBackground': palette.text.subtle,
    // Success dot: Green (e.g., exit code 0)
    'terminalCommandDecoration.successBackground': palette.state.success,
    // Error dot: Red (e.g., exit code 1)
    'terminalCommandDecoration.errorBackground': palette.state.error,
    // Guide line
    'terminalCommandGuide.foreground': palette.border.subtle,

    // --- Sticky Scroll ---
    // Terminals now support sticky scroll (displays the previous command)
    'terminalStickyScroll.background': palette.bg.panel,
    'terminalStickyScroll.border': palette.border.subtle,
    'terminalStickyScrollHover.background': palette.bg.element,

    // --- Terminal IntelliSense Icons ---
    // Icon colors shown when typing commands and triggering suggestions in the terminal

    // Git related
    'terminalSymbolIcon.branchForeground': palette.primary.main,
    'terminalSymbolIcon.gitCommitForeground': palette.text.muted,
    'terminalSymbolIcon.remoteForeground': palette.text.muted,

    // File system
    'terminalSymbolIcon.folderForeground': palette.primary.main,
    'terminalSymbolIcon.fileForeground': palette.text.normal,
    'terminalSymbolIcon.symbolicLinkFileForeground': palette.text.subtle,

    // Command arguments
    'terminalSymbolIcon.flagForeground': palette.state.warning, // -f, --force
    'terminalSymbolIcon.optionForeground': palette.state.warning,
    'terminalSymbolIcon.argumentForeground': palette.text.normal,
  };
};
