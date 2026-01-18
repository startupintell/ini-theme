import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Keybinding Label (快捷键标签 - 如 Cmd+C)
// -----------------------------------------------------------------
export const keybindingLabelConfig = (palette: ThemePalette) => {
  return {
    // --- Keycap Style (键帽样式) ---

    // 背景：使用 Active 层级，看起来像一个按下去或凸起的键
    // 如果你喜欢更干净的风格，也可以设为 transparent
    'keybindingLabel.background': palette.transparent,

    // 文字：次要信息，使用 Muted
    'keybindingLabel.foreground': palette.text.normal,

    // 边框：定义轮廓
    'keybindingLabel.border': palette.border.muted + '90',

    // 底部边框 (3D 效果)：
    // 1. Flat (扁平): 与 border 一致
    // 2. 3D (拟物): 使用更深的颜色 (如 border.muted)
    'keybindingLabel.bottomBorder': palette.border.muted,
  };
};
