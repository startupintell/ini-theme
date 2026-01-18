import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Interactive Window (交互式窗口 / REPL / Jupyter Cells)
// -----------------------------------------------------------------
export const interactiveConfig = (palette: ThemePalette) => {
  return {
    // --- Active Focus (聚焦时的单元格边框) ---
    // 场景：你正在当前的 Cell 里打字。
    // 颜色：使用主色，明确指示输入焦点。
    'interactive.activeCodeBorder': palette.primary.main,

    // --- Inactive Focus (失焦时的单元格边框) ---
    // 场景：当前 Cell 依然被选中，但你的鼠标点到了侧边栏或者终端。
    // 颜色：使用失焦边框 (Muted) 或次要边框。
    // 这样既保留了位置标记，又告诉用户"现在键盘输入不在这里"。
    'interactive.inactiveCodeBorder': palette.border.muted, // 或者 palette.border.subtle
  };
};
