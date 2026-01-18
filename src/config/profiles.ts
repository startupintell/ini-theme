import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Profiles (配置文件与设置齿轮角标)
// -----------------------------------------------------------------
export const profilesConfig = (palette: ThemePalette) => {
  return {
    // --- Profile Badge (齿轮图标上的角标) ---
    // 场景：显示 "1" (有更新) 或用户头像/首字母。
    // 颜色：与 Activity Bar 的其他角标保持一致，使用主色。
    'profileBadge.background': palette.primary.main,
    'profileBadge.foreground': palette.text.inverse,

    // --- Profiles Sash Border (配置文件编辑器分割线) ---
    // 场景：当你打开 "Profiles" 管理界面时，不同列之间的拖动分割线。
    // 颜色：使用最淡的边框色，避免干扰内容。
    'profiles.sashBorder': palette.border.subtle,
  };
};
