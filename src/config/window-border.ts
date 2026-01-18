import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Window Border (窗口边框 - macOS/Linux)
// -----------------------------------------------------------------
export const windowBorderConfig = (palette: ThemePalette) => {
  return {
    // macOS/现代风格倾向于去边框，此处设为透明以达到全屏沉浸效果
    'window.activeBorder': palette.transparent,
    'window.inactiveBorder': palette.transparent,
  };
};
