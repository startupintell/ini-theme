import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Action Bar (Small toolbar in view title bars)
// -----------------------------------------------------------------
export const actionBarConfig = (palette: ThemePalette) => {
  return {
    // --- Toggled Background (Toggle button background when active) ---
    // Scenario: When buttons like "Aa" (Case sensitive) or ".*" (Regex) in the search box are pressed
    // Strategy: Use Active background to simulate a "button pressed" look or highlight
    'actionBar.toggledBackground': palette.bg.active, // Or palette.primary.surface
  };
};
