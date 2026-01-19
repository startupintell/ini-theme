import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Base Colors (Global defaults)
// -----------------------------------------------------------------
export const baseColorsConfig = (palette: ThemePalette) => {
  return {
    // Focus border: Use the primary color to clearly indicate the current focus
    focusBorder: palette.primary.main,

    // Global default foreground: Main text color
    foreground: palette.text.normal,

    // Disabled foreground: Use the faintest text color (subtle)
    disabledForeground: palette.text.subtle,

    // Border for various widgets (e.g., find/replace boxes)
    'widget.border': palette.border.muted + '85',

    // Widget shadow: Using semi-transparent black is recommended for a natural look in both light and dark themes.
    // For a flat design, use palette.transparent instead.
    'widget.shadow': palette.shadow.main,

    // Text selection background (for sidebars, input fields, etc., outside the main editor)
    // Use the primary Surface color (very faint background)
    'selection.background': palette.primary.surface,

    // Descriptive text: Use the secondary text color (muted)
    descriptionForeground: palette.text.muted,

    // Global error text
    errorForeground: palette.state.error,

    // Default icon color: Usually secondary text color to avoid competing with content
    'icon.foreground': palette.text.muted,

    // Hover effect for resizable sashes: Use primary color for feedback
    'sash.hoverBorder': palette.primary.main,
  };
};
