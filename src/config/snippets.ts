import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Snippets (代码片段填空高亮)
// -----------------------------------------------------------------
export const snippetsConfig = (palette: ThemePalette) => {
  return {
    // --- Tabstops (中间的填空项) ---
    // 场景：展开代码片段后，光标选中的那些"待修改"区域 (如 ${1:name})

    // 背景：使用 Active 或 Element 背景，模拟一个"输入框"的感觉
    'editor.snippetTabstopHighlightBackground': palette.bg.active, // 或者 palette.bg.element

    // 边框：细边框，明确范围
    'editor.snippetTabstopHighlightBorder': palette.border.subtle,

    // --- Final Tabstop (最终结束点) ---
    // 场景：Snippet 里的 $0 位置
    // 策略：通常不需要视觉反馈，保持透明，以免干扰视线
    'editor.snippetFinalTabstopHighlightBackground': palette.transparent,
    'editor.snippetFinalTabstopHighlightBorder': palette.transparent,
  };
};
