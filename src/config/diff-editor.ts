import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Diff Editor
// -----------------------------------------------------------------
export const diffEditorConfig = (palette: ThemePalette) => {
  return {
    // --- Inserted Text (Green) ---
    // Word-level changes: Slightly higher opacity to emphasize "what exactly changed"
    'diffEditor.insertedTextBackground': palette.state.success + '30', // 20%~30% opacity
    'diffEditor.insertedTextBorder': palette.transparent, // Modern style without borders

    // Line-level changes: Very low opacity, serves as a background plate
    'diffEditor.insertedLineBackground': palette.state.success + '15', // 10%~15% opacity
    // Gutter background for inserted lines
    'diffEditorGutter.insertedLineBackground': palette.transparent, // Or palette.state.success + '10'

    // --- Removed Text (Red) ---
    // Word-level changes
    'diffEditor.removedTextBackground': palette.state.error + '30',
    'diffEditor.removedTextBorder': palette.transparent,

    // Line-level changes
    'diffEditor.removedLineBackground': palette.state.error + '15',
    'diffEditorGutter.removedLineBackground': palette.transparent,

    // --- Layout & Structure ---
    // Divider line between the two editors
    'diffEditor.border': palette.border.subtle,

    // Diagonal fill: Pattern for regions where one file is longer than the other
    'diffEditor.diagonalFill': palette.bg.element + '50', // Semi-transparent stripes

    // --- Overview Ruler (Indicators on the vertical scrollbar) ---
    // Must be opaque colors to be visible on the scrollbar
    'diffEditorOverview.insertedForeground': palette.state.success,
    'diffEditorOverview.removedForeground': palette.state.error,

    // --- Unchanged Regions (Folded unmodified code blocks) ---
    // VS Code feature that collapses unmodified code
    'diffEditor.unchangedRegionBackground': palette.bg.app, // Area that looks "recessed"
    'diffEditor.unchangedRegionForeground': palette.text.muted,
    'diffEditor.unchangedCodeBackground': palette.bg.element + '40', // Background for unmodified code (rarely used)
    'diffEditor.unchangedRegionShadow': palette.shadow.main, // Shadow for folded regions

    // --- Moved Text (Detection of code moves/refactoring) ---
    // Scenario: Moving a function from line 10 to line 100
    'diffEditor.move.border': palette.text.muted + '50', // Subtle indicator
    'diffEditor.moveActive.border': palette.primary.main, // Strong indicator (currently selected move block)

    // --- Multi-file Diff Editor ---
    // Scenario: Viewing all Git changes within a single Tab
    'multiDiffEditor.background': palette.bg.app, // Container background
    'multiDiffEditor.headerBackground': palette.bg.panel, // File name header
    'multiDiffEditor.border': palette.border.subtle, // Divider between files
  };
};
