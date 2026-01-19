import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// List & Tree Control (File tree, search results, quick open)
// -----------------------------------------------------------------
export const listTreeConfig = (palette: ThemePalette) => {
  return {
    // --- Active Selection (Items currently focused and selected) ---
    // Background: Use primary color. This is the item the user is currently working with.
    'list.activeSelectionBackground': palette.primary.main + '10',
    // Text: Use a color that contrasts well with the background
    'list.activeSelectionForeground': palette.text.normal,
    // Icon: Also ensure icons have good contrast
    'list.activeSelectionIconForeground': palette.text.normal,

    // --- Inactive Selection (Selected but not focused) ---
    // Scenario: You click a file, then click back into the editor. The side bar file remains "selected" but turns gray.
    'list.inactiveSelectionBackground': palette.bg.app, // Or palette.secondary.main
    'list.inactiveSelectionForeground': palette.text.normal,
    'list.inactiveSelectionIconForeground': palette.text.muted,

    // --- Hover ---
    // Visual feedback when moving the mouse over items
    'list.hoverBackground': palette.primary.main + '10',
    'list.hoverForeground': palette.text.normal,

    // --- Focus (Keyboard movement without selection) ---
    // Scenario: Navigating the list with arrow keys before pressing Enter.
    'list.focusBackground': palette.bg.element, // Usually consistent with Hover
    'list.focusForeground': palette.text.normal,
    // Focus outline: Modern style usually keeps this transparent or uses a very thin Primary border
    'list.focusOutline': palette.transparent,
    // When both selected and focused, usually remove the outline and rely on background color
    'list.focusAndSelectionOutline': palette.transparent,

    // --- Drag and Drop ---
    // Background highlight when dragging files
    'list.dropBackground': palette.primary.surface,
    // Line color indicating insertion point during drag
    'list.dropBetweenBackground': palette.primary.main,

    // --- Search Highlights (Matching text within the list) ---
    // Regular matching text: Use primary text color
    'list.highlightForeground': palette.primary.text,
    // Matching text in focused items
    'list.focusHighlightForeground': palette.primary.text,
    'list.activeSelectionHighlightForeground': palette.primary.text,

    // --- List Filter Widget (Popup when typing inside a list to filter) ---
    'listFilterWidget.background': palette.bg.element,
    'listFilterWidget.outline': palette.border.focus,
    'listFilterWidget.noMatchesOutline': palette.state.error,
    'listFilterWidget.shadow': palette.shadow.main,

    // --- Tree Guides (Indentation lines) ---
    // Default indentation lines: Very subtle
    'tree.indentGuidesStroke': palette.border.subtle,
    // Indentation lines when hovering/inactive
    'tree.inactiveIndentGuidesStroke': palette.border.subtle, // Or transparent

    // --- Errors & Warnings (File names turning red/yellow) ---
    'list.errorForeground': palette.state.error,
    'list.warningForeground': palette.state.warning,
    // Invalid items (e.g., unresolved paths)
    'list.invalidItemForeground': palette.text.muted,

    // --- Table (Table views - less common) ---
    // Odd row background (Zebra striping): Usually transparent for a clean look
    'tree.tableOddRowsBackground': palette.transparent,
  };
};
