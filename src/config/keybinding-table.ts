import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Keyboard Shortcuts Table
// -----------------------------------------------------------------
export const keybindingTableConfig = (palette: ThemePalette) => {
  return {
    // --- Header ---
    // Similar to a spreadsheet column header
    // Strategy: Use Element background, slightly darker/lighter than the list below
    'keybindingTable.headerBackground': palette.bg.element,

    // --- Alternating Rows (Zebra striping) ---
    // Strategy: Use background color with very low opacity (e.g., 4%~5%)
    // This assists readability without being distracting
    'keybindingTable.rowsBackground': palette.bg.element + '0c', // Approx 5% opacity
  };
};
