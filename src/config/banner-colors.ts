import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Banner (Top full-width banner - e.g., Restricted Mode or Update notifications)
// -----------------------------------------------------------------
export const bannerColorsConfig = (palette: ThemePalette) => {
  return {
    // --- Background ---
    // Strategy: Use Primary Surface or Warning Surface.
    // This makes it very prominent in a dark interface, alerting the user immediately.
    // Solid Primary can also be used to add a sense of urgency.
    'banner.background': palette.bg.active, // Safer dark scheme
    // Alternatively: 'banner.background': palette.primary.main, // Aggressive highlight scheme

    // --- Foreground ---
    'banner.foreground': palette.text.normal,
    // If using a solid primary background, the foreground should be the inverse color
    // 'banner.foreground': palette.text.inverse,

    // --- Icon ---
    // Usually an Info or Warning icon on the left
    'banner.iconForeground': palette.primary.main,
    // If using a solid primary background, the icon should also be the inverse color
    // 'banner.iconForeground': palette.text.inverse,
  };
};
