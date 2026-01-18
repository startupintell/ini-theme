import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Badge (徽章/角标 - 通知数、搜索结果数)
// -----------------------------------------------------------------
export const badgeConfig = (palette: ThemePalette) => {
  return {
    // 背景：使用主色 (Brand Color)
    // 这是界面中为数不多应该"跳"出来的颜色。
    // 例如：在蓝色主题中是蓝色，在 Shadcn 黑白主题中是白色。
    'badge.background': palette.primary.main,

    // 文字：使用反色 (Inverse)
    // 确保可读性。例如：白底黑字，或蓝底白字。
    'badge.foreground': palette.text.inverse,
  };
};
