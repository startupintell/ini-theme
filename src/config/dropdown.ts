// -----------------------------------------------------------------
// Dropdown Control (Dropdown menus - Terminal/Output/Debug)

import { ThemePalette } from '../type';

// -----------------------------------------------------------------
export const dropdownConfig = (palette: ThemePalette) => {
  return {
    // --- Closed State ---
    // Background: Consistent with input fields to create a unified "input/interactive" visual language
    'dropdown.background': palette.bg.input,

    // Border: Subtle gray with transparency
    'dropdown.border': palette.border.muted + '80',

    // Text: Normal body text color
    'dropdown.foreground': palette.text.normal,

    // --- Open State (Expanded list) ---
    // List background: Use panel background to maintain a clean appearance
    'dropdown.listBackground': palette.bg.panel,
  };
};
