import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Interactive Window (Interactive Window / REPL / Jupyter Cells)
// -----------------------------------------------------------------
export const interactiveConfig = (palette: ThemePalette) => {
  return {
    // --- Active Focus (Cell border when focused) ---
    // Scenario: You are currently typing within the active Cell.
    // Color: Use primary color to clearly indicate input focus.
    'interactive.activeCodeBorder': palette.primary.main,

    // --- Inactive Focus (Cell border when unfocused) ---
    // Scenario: The current Cell is still selected, but focus has moved to a sidebar or terminal.
    // Color: Use an unfocused border color (Muted) or subtle border.
    // This keeps the position marked while informing the user that keyboard input is directed elsewhere.
    'interactive.inactiveCodeBorder': palette.border.muted, // Or palette.border.subtle
  };
};
