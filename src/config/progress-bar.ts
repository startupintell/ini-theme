import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Progress Bar (进度条 - 加载/长耗时操作)
// -----------------------------------------------------------------
export const progressBarConfig = (palette: ThemePalette) => {
  return {
    // 颜色：使用主色 (Brand Color)
    // 无论是蓝色主题还是黑白主题，进度条都应该使用那个最显著的"强调色"。
    'progressBar.background': palette.primary.main,
  };
};
