import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Notebook (Jupyter Notebook interface)
// -----------------------------------------------------------------
export const notebookConfig = (palette: ThemePalette) => {
  return {
    // --- Canvas & General ---
    // Background: Use Panel level, consistent with the regular editor
    'notebook.editorBackground': palette.bg.panel,

    // --- Cell Editor (Code input area) ---
    // Background: Consistent with the canvas for a "seamless document" feel
    'notebook.cellEditorBackground': palette.bg.panel,
    // Border: Hidden by default for a clean look
    'notebook.cellBorderColor': palette.border.subtle, // Or transparent

    // --- Interaction ---
    // Hover: Subtly highlight the entire Cell
    'notebook.cellHoverBackground': palette.bg.element + '40', // Very faint background

    // Insertion indicator (Line between two Cells when hovering)
    // Strategy: Must be prominent to show exactly where the new Cell will be inserted
    'notebook.cellInsertionIndicator': palette.primary.main,

    // --- Focused Cell (The active cell) ---
    // Background: Sligthly changed to emphasize the current operation area
    'notebook.focusedCellBackground': palette.bg.active,
    // Border: The core focus indicator, use primary color
    'notebook.focusedCellBorder': palette.primary.main,
    // Editor border: Transparent for less visual clutter, or use a color for stronger isolation
    'notebook.focusedEditorBorder': palette.transparent,

    // Inactive Focus (Selected but not focused)
    'notebook.inactiveFocusedCellBorder': palette.border.muted,

    // Selected Cells
    'notebook.selectedCellBackground': palette.bg.active,
    'notebook.selectedCellBorder': palette.border.subtle,

    // --- Output Container (Output area below the code) ---
    // Strategy: Use Element background to distinguish Code section from Output section
    'notebook.outputContainerBackgroundColor': palette.bg.element,
    // Border: Divider at the top of the Output section
    'notebook.outputContainerBorderColor': palette.border.subtle,

    // --- Status Icons (Bottom right status bar) ---
    // Running: Blue/Primary
    'notebookStatusRunningIcon.foreground': palette.primary.main,
    // Success: Green
    'notebookStatusSuccessIcon.foreground': palette.state.success,
    // Error: Red
    'notebookStatusErrorIcon.foreground': palette.state.error,

    // --- Scrollbar ---
    // Notebooks sometimes have their own scrollbars
    'notebookScrollbarSlider.background': palette.bg.active,
    'notebookScrollbarSlider.hoverBackground': palette.text.muted,
    'notebookScrollbarSlider.activeBackground': palette.text.normal,

    // --- Misc ---
    // Symbol highlight (Search results)
    'notebook.symbolHighlightBackground': palette.bg.active,
    // Bottom toolbar separator for Cells
    'notebook.cellToolbarSeparator': palette.border.subtle,
    // Hover effect for cell status bar items
    'notebook.cellStatusBarItemHoverBackground': palette.bg.element,

    // Running status indicator in the right overview ruler
    'notebookEditorOverviewRuler.runningCellForeground': palette.primary.main,
  };
};
