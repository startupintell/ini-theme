import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Keyboard Shortcuts Table (快捷键设置列表)
// -----------------------------------------------------------------
export const keybindingTableConfig = (palette: ThemePalette) => {
  return {
    // --- Header (表头) ---
    // 类似于 Excel 的列头
    // 策略：使用 Element 背景，比下方列表稍微深/亮一点
    'keybindingTable.headerBackground': palette.bg.element,

    // --- Alternating Rows (斑马纹背景) ---
    // 策略：使用极低透明度的背景色 (例如 4%~5%)
    // 这样能起到辅助阅读的作用，但又不会喧宾夺主
    'keybindingTable.rowsBackground': palette.bg.element + '0c', // 约 5% 不透明度
  };
};
