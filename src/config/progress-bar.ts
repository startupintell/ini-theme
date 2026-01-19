import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Progress Bar (Loading / long-running operations)
// -----------------------------------------------------------------
export const progressBarConfig = (palette: ThemePalette) => {
  return {
    // Color: Use primary color (Brand Color)
    // Regardless of the theme, the progress bar should use the most prominent "accent color".
    'progressBar.background': palette.primary.main,
  };
};
