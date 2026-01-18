import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Banner (顶部通栏横幅 - 如受限模式/更新提示)
// -----------------------------------------------------------------
export const bannerColorsConfig = (palette: ThemePalette) => {
  return {
    // --- Background (背景) ---
    // 策略：使用 Primary Surface (主色背景) 或者 Warning Surface。
    // 这让它在深色界面中非常显眼，用户一眼就能看到顶部多了一条东西。
    // 也可以直接用 Solid Primary (实心主色) 增加紧迫感。
    'banner.background': palette.bg.active, // 稳妥的深色方案
    // 或者 'banner.background': palette.primary.main, // 激进的高亮方案

    // --- Foreground (文字) ---
    'banner.foreground': palette.text.normal,
    // 如果背景是实心主色，这里应该用反色
    // 'banner.foreground': palette.text.inverse,

    // --- Icon (图标) ---
    // 通常是左侧的一个 Info 或 Warning 图标
    'banner.iconForeground': palette.primary.main,
    // 如果背景是实心主色，图标也应该是反色
    // 'banner.iconForeground': palette.text.inverse,
  };
};
