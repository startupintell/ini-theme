import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Merge Conflicts (Inline & 3-Way Editor)
// -----------------------------------------------------------------
export const mergeConflictConfig = (palette: ThemePalette) => {
  return {
    // --- 1. Inline Merge Conflicts (Traditional inline view) ---
    // Cases like <<<<<<< HEAD in the editor

    // Current (HEAD / Local): Green
    'merge.currentHeaderBackground': palette.state.success + '40', // Header background
    'merge.currentContentBackground': palette.state.success + '15', // Content background

    // Incoming (Remote): Primary color (usually blue)
    'merge.incomingHeaderBackground': palette.primary.main + '40',
    'merge.incomingContentBackground': palette.primary.main + '15',

    // Common (Ancestor - less common): Gray
    'merge.commonHeaderBackground': palette.bg.element + '60',
    'merge.commonContentBackground': palette.bg.element + '20',

    // Border: Modern style usually removes borders or sets them to transparent
    'merge.border': palette.transparent,

    // --- 2. Overview Ruler (Indicators on the vertical scrollbar) ---
    // Must be opaque colors
    'editorOverviewRuler.currentContentForeground': palette.state.success,
    'editorOverviewRuler.incomingContentForeground': palette.primary.main,
    'editorOverviewRuler.commonContentForeground': palette.text.muted,
    // Note status after resolution
    'editorOverviewRuler.commentForeground': palette.text.normal,
    'editorOverviewRuler.commentUnresolvedForeground': palette.state.warning,

    // --- 3. Merge Editor (New 3-column merge editor) ---

    // --- Changes ---
    // Base change background (similar to Diff)
    'mergeEditor.change.background': palette.bg.element + '30',
    'mergeEditor.change.word.background': palette.bg.element + '50', // Word-level highlight is more pronounced
    // Changes in the Base view (bottom section)
    'mergeEditor.changeBase.background': palette.state.warning + '20',
    'mergeEditor.changeBase.word.background': palette.state.warning + '40',

    // --- Conflict Status (Core section) ---

    // Unhandled: Must be very prominent!
    // Unfocused (not selected): Yellow border warning
    'mergeEditor.conflict.unhandledUnfocused.border': palette.state.warning,
    // Focused (currently being resolved): Red border or highlighted primary color
    'mergeEditor.conflict.unhandledFocused.border': palette.state.error,

    // Handled (resolved): Fade out or turn green
    'mergeEditor.conflict.handledUnfocused.border': palette.border.subtle, // Resolved items step back
    'mergeEditor.conflict.handledFocused.border': palette.state.success, // Currently selected resolved block

    // --- Layout & Decorations ---
    // Decorator background (Input 1 vs Input 2)
    'mergeEditor.conflict.input1.background': palette.primary.main + '20', // Incoming
    'mergeEditor.conflict.input2.background': palette.state.success + '20', // Current

    // "Conflicting Lines" text background
    'mergeEditor.conflictingLines.background': palette.state.error + '20',

    // Minimap
    'mergeEditor.conflict.handled.minimapOverViewRuler': palette.state.success,
    'mergeEditor.conflict.unhandled.minimapOverViewRuler': palette.state.warning,
  };
};
