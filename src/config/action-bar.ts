import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Action Bar (视图标题栏的小工具条)
// -----------------------------------------------------------------
export const actionBarConfig = (palette: ThemePalette) => {
  return {
    // --- Toggled Background (激活状态的按钮背景) ---
    // 场景：搜索框里的 "Aa"(大小写敏感)、".*"(正则) 按钮被按下时
    // 策略：使用 Active 背景，模拟"按钮被按下"的凹陷感或高亮感
    'actionBar.toggledBackground': palette.bg.active, // 或者 palette.primary.surface
  };
};
