import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Settings Editor (Graphical settings interface - Ctrl+,)
// -----------------------------------------------------------------
export const settingsEditorConfig = (palette: ThemePalette) => {
  return {
    // --- Layout & Headers ---
    // Section headers (e.g., "Text Editor", "Workbench")
    'settings.headerForeground': palette.text.normal,
    'settings.settingsHeaderHoverForeground': palette.primary.main, // Change color on hover
    'settings.headerBorder': palette.border.subtle, // Divider below headers
    'settings.sashBorder': palette.border.subtle, // Resizing line between sidebars

    // --- Rows (Setting items) ---
    // Background when mouse is hovering
    'settings.rowHoverBackground': palette.transparent,

    // Background when keyboard is focused or item is clicked
    'settings.focusedRowBackground': palette.transparent,

    // Top and bottom borders when focused (usually transparent, rely on background: modern style)
    'settings.focusedRowBorder': palette.transparent,

    // --- Modified Indicator ---
    // Vertical line on the left side of setting items, indicating "this setting has been modified"
    // Strategy: Use primary color to indicate "personal configuration"
    'settings.modifiedItemIndicator': palette.primary.main, // Or palette.state.info

    // --- Inputs (Text & Number) ---
    // Strategy: Keep consistent with global input.*

    // Text Input
    'settings.textInputBackground': palette.bg.input,
    'settings.textInputForeground': palette.text.normal,
    'settings.textInputBorder': palette.border.muted + '80',

    // Number Input (VS Code distinguishes between number and text, but usually same in themes)
    'settings.numberInputBackground': palette.bg.input,
    'settings.numberInputForeground': palette.text.normal,
    'settings.numberInputBorder': palette.border.muted + '80',

    // --- Dropdowns ---
    // Strategy: Keep consistent with global dropdown.*
    'settings.dropdownBackground': palette.bg.input, // Or bg.element
    'settings.dropdownForeground': palette.text.normal,
    'settings.dropdownBorder': palette.border.muted + '80',
    'settings.dropdownListBorder': palette.border.muted + '80', // Border of the expanded list

    // --- Checkboxes ---
    // Strategy: Keep consistent with global checkbox.*
    'settings.checkboxBackground': palette.bg.input, // Background when unchecked
    'settings.checkboxForeground': palette.text.normal, // Color of the checkmark when checked
    'settings.checkboxBorder': palette.text.normal, // Border color
  };
};
