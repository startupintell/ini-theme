import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Keybinding Label (Shortcut keys labels - e.g., Cmd+C)
// -----------------------------------------------------------------
export const keybindingLabelConfig = (palette: ThemePalette) => {
  return {
    // --- Keycap Style ---

    // Background: Use Active level, looks like a pressed or raised key
    // For a cleaner style, this can also be set to transparent
    'keybindingLabel.background': palette.transparent,

    // Text: Subsidiary information, use Normal but could be Muted
    'keybindingLabel.foreground': palette.text.normal,

    // Border: Define the outline
    'keybindingLabel.border': palette.border.muted + '90',

    // Bottom border (3D effect):
    // 1. Flat: Match the border color
    // 2. 3D (Skeuomorphic): Use a darker color (e.g., border.muted)
    'keybindingLabel.bottomBorder': palette.border.muted,
  };
};
