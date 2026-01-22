import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Editor Core (Cursor, Selection, Decorators, Gutter)
// -----------------------------------------------------------------
export const editorConfig = (palette: ThemePalette) => {
  return {
    // --- 1. Base Editor (Background and Text) ---
    'editor.background': palette.bg.panel,
    'editor.foreground': palette.text.normal,

    // --- 1.1 Current Line Highlight ---
    // Strategy: Remove default border and use a very subtle background color for a clean look
    'editor.lineHighlightBackground': palette.bg.element + '60', // Very faint background
    'editor.lineHighlightBorder': palette.transparent, // Remove border

    // --- 2. Cursor ---
    // Recommendation: Use primary color for a modern and highly visible appearance on dark backgrounds
    'editorCursor.foreground': palette.primary.main,
    // Color of the character under the cursor: Use inverse color to ensure content remains readable
    'editorCursor.background': palette.text.inverse,

    // --- 3. Line Numbers ---
    // Regular line numbers: Dimmed
    'editorLineNumber.foreground': palette.text.subtle,
    // Current line number: Highlighted (Normal)
    'editorLineNumber.activeForeground': palette.text.normal,

    // --- 4. Selection & Highlights ---
    // Selection: Use Surface (low opacity primary color)
    'editor.selectionBackground': palette.primary.surface,
    // Unfocused selection: Fainter, or use a very low opacity gray
    'editor.inactiveSelectionBackground': palette.bg.element, // Or palette.primary.surface + '80'
    // Selection highlight (highlight other occurrences of the selected word)
    'editor.selectionHighlightBackground': palette.primary.surface,
    'editor.selectionHighlightBorder': palette.transparent, // Remove border for a clean look
    'editor.wordHighlightBackground': palette.primary.surface,
    'editor.wordHighlightStrongBackground': palette.primary.surface,

    // --- 5. Search & Find ---
    // Current match: Strong highlight (use Warning color or primary accent)
    // Strategy: Use yellow/orange to distinguish from selection (blue)
    'editor.findMatchBackground': palette.state.warning + '50',
    'editor.findMatchBorder': palette.state.warning,
    // Other matches: Subtle highlight
    'editor.findMatchHighlightBackground': palette.state.warning + '20',
    'editor.findMatchHighlightBorder': palette.transparent,
    // Search within selection
    'editor.findRangeHighlightBackground': palette.bg.element,

    // --- 6. Hover & Links ---
    'editor.hoverHighlightBackground': palette.bg.element,
    'editorLink.activeForeground': palette.primary.main,

    // --- 7. Whitespace & Guides ---
    // Whitespace characters (dots): Very faint, almost invisible
    'editorWhitespace.foreground': palette.border.subtle, // Extra transparency
    // Indent guides: Very faint
    'editorIndentGuide.background': palette.border.subtle,
    'editorIndentGuide.activeBackground': palette.border.muted, // Active level slightly brighter
    // Rulers
    'editorRuler.foreground': palette.border.subtle,

    // --- 8. Bracket Matching ---
    // Background frame for brackets next to the cursor
    'editorBracketMatch.background': palette.bg.element,
    'editorBracketMatch.border': palette.transparent,

    // Rainbow Brackets (Rainbowized color pairing)
    // Reuse theme colors to avoid introducing unnecessary colors
    'editorBracketHighlight.foreground1': palette.primary.main,
    'editorBracketHighlight.foreground2': palette.state.warning,
    'editorBracketHighlight.foreground3': palette.state.success,
    'editorBracketHighlight.foreground4': palette.secondary.text, // Or purple
    'editorBracketHighlight.unexpectedBracket.foreground': palette.state.error,

    // --- 9. Errors & Warnings (Diagnostic squiggles) ---
    // Error: Red
    'editorError.foreground': palette.state.error,
    // Warning: Yellow
    'editorWarning.foreground': palette.state.warning,
    // Info: Blue (Primary)
    'editorInfo.foreground': palette.primary.main,
    // Hint: Gray (Muted)
    'editorHint.foreground': palette.text.muted,

    // Unused code: Dimmed
    'editorUnnecessaryCode.opacity': '#00000080',

    // --- 10. Gutter (Line numbers and Git section on the left) ---
    // Background: Consistent with editor for seamless integration
    'editorGutter.background': palette.bg.panel,
    // Git status indicators
    'editorGutter.modifiedBackground': palette.state.warning,
    'editorGutter.addedBackground': palette.state.success,
    'editorGutter.deletedBackground': palette.state.error,
    // Folding controls
    'editorGutter.foldingControlForeground': palette.text.muted,

    // --- 11. Overview Ruler (Indicators on the vertical scrollbar) ---
    // Colors here should be opaque or high-contrast
    'editorOverviewRuler.border': palette.transparent, // No border needed
    'editorOverviewRuler.findMatchForeground': palette.state.warning,
    'editorOverviewRuler.rangeHighlightForeground': palette.bg.element,
    'editorOverviewRuler.errorForeground': palette.state.error,
    'editorOverviewRuler.warningForeground': palette.state.warning,
    'editorOverviewRuler.addedForeground': palette.state.success,
    'editorOverviewRuler.modifiedForeground': palette.state.warning,
    'editorOverviewRuler.deletedForeground': palette.state.error,

    // --- 12. Inlay Hints (TS types/parameter names) ---
    // Must be very low-key, not as prominent as code
    'editorInlayHint.background': palette.bg.element + '40', // Very faint background
    'editorInlayHint.foreground': palette.text.subtle,
    'editorInlayHint.typeBackground': palette.bg.element + '40',
    'editorInlayHint.typeForeground': palette.text.subtle,

    // --- 13. Copilot / Inline Edits (AI code suggestions) ---
    // Ghost Text
    // VS Code usually handles opacity automatically, but can be specified
    // 'editor.inlineSuggest.foreground': palette.text.muted,

    // Inline Edit (Diff view)
    'inlineEdit.gutterIndicator.background': palette.primary.main,
    'inlineEdit.originalBackground': palette.state.errorBg, // Old code background (red)
    'inlineEdit.modifiedBackground': palette.state.success + '20', // New code background (green)
    'inlineEdit.originalBorder': palette.transparent,
    'inlineEdit.modifiedBorder': palette.transparent,
  };
};
