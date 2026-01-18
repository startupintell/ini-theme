// -----------------------------------------------------------------
// Dropdown Control (下拉菜单 - Terminal/Output/Debug)

import { ThemePalette } from '../type';

// -----------------------------------------------------------------
export const dropdownConfig = (palette: ThemePalette) => {
  return {
    // --- Closed State (收起状态) ---
    // 背景：与输入框保持一致，形成“可输入/可交互”的统一视觉语言
    'dropdown.background': palette.bg.input,

    // 边框：带透明度的淡灰色
    'dropdown.border': palette.border.muted + '80',

    // 文字：正常正文色
    'dropdown.foreground': palette.text.normal,

    // --- Open State (展开列表) ---
    // 列表背景：改为纯白背景，保持极致扁平化
    'dropdown.listBackground': palette.bg.panel,
  };
};
