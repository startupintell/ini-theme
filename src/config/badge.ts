import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Badge (Badges/Status indicators - notification counts, search result counts)
// -----------------------------------------------------------------
export const badgeConfig = (palette: ThemePalette) => {
  return {
    // Background: Use primary color (Brand Color)
    // This is one of the few colors in the interface that should "pop".
    // For example: Blue in a blue theme, white in a Shadcn black-and-white theme.
    'badge.background': palette.primary.main,

    // Text: Use inverse color
    // Ensure readability. For example: Black text on a white background, or white text on a blue background.
    'badge.foreground': palette.text.inverse,
  };
};
