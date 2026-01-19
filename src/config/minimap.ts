import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Minimap
// -----------------------------------------------------------------
export const minimapConfig = (palette: ThemePalette) => {
  return {
    // --- Background ---
    // Key point: Must be consistent with editor.background (bg.panel).
    // This makes the Minimap look like it's floating on the right side of the code, rather than being a disconnected area.
    'minimap.background': palette.bg.panel,

    // --- Slider (Current viewport slider) ---
    // Use a "Ghost" style: very low opacity primary color, nearly invisible normally.
    'minimapSlider.background': palette.primary.main + '15', // Approx 10% opacity
    'minimapSlider.hoverBackground': palette.primary.main + '25',
    'minimapSlider.activeBackground': palette.primary.main + '40',

    // --- Highlights (Status highlights) ---
    // Search match: Use a prominent primary color
    'minimap.findMatchHighlight': palette.primary.main,

    // Selection highlight: Consistent with the selection color inside the editor (Surface)
    'minimap.selectionHighlight': palette.primary.surface,

    // Word selection highligh (highlighting other occurrences of a selected variable)
    // Can be slightly brighter than selectionHighlight or kept identical
    'minimap.selectionOccurrenceHighlight': palette.primary.surface,

    // --- Diagnostics (Diagnostic status) ---
    // Color dots on the Minimap for errors, warnings, and info
    'minimap.errorHighlight': palette.state.error,
    'minimap.warningHighlight': palette.state.warning,
    // Use primary or a dedicated info color if available.
    'minimap.infoHighlight': palette.primary.main,

    // --- Gutter / Git Status (Git status lines) ---
    // Git change indicators shown on the edge of the Minimap
    'minimapGutter.addedBackground': palette.state.success,
    'minimapGutter.modifiedBackground': palette.state.warning,
    'minimapGutter.deletedBackground': palette.state.error,

    // --- AI & Copilot ---
    // Area currently being edited by Copilot
    'minimap.chatEditHighlight': palette.primary.main,
    // Content inserted via Inline Chat
    'editorMinimap.inlineChatInserted': palette.state.success,
  };
};
