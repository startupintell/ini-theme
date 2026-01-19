import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Window Border (macOS/Linux)
// -----------------------------------------------------------------
export const windowBorderConfig = (palette: ThemePalette) => {
  return {
    // macOS and modern styles tend to be borderless. Set to transparent for a full-screen immersive effect.
    'window.activeBorder': palette.transparent,
    'window.inactiveBorder': palette.transparent,
  };
};
