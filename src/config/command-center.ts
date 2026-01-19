import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Command Center (Search/Command entry in the middle of the title bar)
// -----------------------------------------------------------------
export const commandCenterConfig = (palette: ThemePalette) => {
  return {
    // --- Default State ---
    // Background: Use Element level, looks like a dark capsule button
    'commandCenter.background': palette.bg.element,
    // Text: Normal
    'commandCenter.foreground': palette.text.normal,
    // Border: Subtle outline
    'commandCenter.border': palette.border.subtle,

    // --- Active/Hover State ---
    // On hover or click: Darken/lighten background
    'commandCenter.activeBackground': palette.bg.active,
    'commandCenter.activeForeground': palette.text.normal,
    // Active border: Use primary or Focus border, emphasizing "ready to input"
    'commandCenter.activeBorder': palette.border.focus,

    // --- Inactive Window State ---
    // When switching to another application, fade it out to reduce visual noise
    'commandCenter.inactiveForeground': palette.text.muted,
    'commandCenter.inactiveBorder': palette.border.subtle + '40', // Lower opacity

    // --- Debugging State ---
    // Background changes to light orange, echoing the Status Bar at the bottom, indicating "debugging"
    // Note: This shouldn't be too bright to avoid interfering with title bar text legibility
    'commandCenter.debuggingBackground': palette.state.warning + '20',
  };
};
