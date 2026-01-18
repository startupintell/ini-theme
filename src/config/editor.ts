import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Editor Core (编辑器核心 - 光标、选区、装饰器、Gutter)
// -----------------------------------------------------------------
export const editorConfig = (palette: ThemePalette) => {
  return {
    // --- 1. Base Editor (基础背景与文字) ---
    'editor.background': palette.bg.panel,
    'editor.foreground': palette.text.normal,

    // --- 1.1 Current Line (当前行高亮) ---
    // 策略：去掉默认的边框，改用极淡的背景色，保持界面清爽
    'editor.lineHighlightBackground': palette.bg.element + '60', // 极淡背景
    'editor.lineHighlightBorder': palette.transparent, // 去掉边框

    // --- 2. Cursor (光标) ---
    // 推荐：使用主色，在深色背景下非常醒目且现代
    'editorCursor.foreground': palette.primary.main,
    // 光标下的字符颜色：使用反色，确保光标覆盖住文字时依然能看清
    'editorCursor.background': palette.text.inverse,

    // --- 3. Line Numbers (行号) ---
    // 普通行号：暗淡
    'editorLineNumber.foreground': palette.text.subtle,
    // 当前行号：高亮 (Normal)
    'editorLineNumber.activeForeground': palette.text.normal,

    // --- 4. Selection & Highlights (选区与高亮) ---
    // 选区：使用 Surface (低透明度主色)
    'editor.selectionBackground': palette.primary.surface,
    // 失焦选区：更淡，或者设为透明度极低的灰色
    'editor.inactiveSelectionBackground': palette.bg.element, // 或 palette.primary.surface + '80'
    // 相同词高亮 (光标停在变量上，其他同名变量高亮)
    'editor.selectionHighlightBackground': palette.bg.app,
    'editor.selectionHighlightBorder': palette.transparent, // 去掉边框，保持干净
    'editor.wordHighlightBackground': palette.bg.app,
    'editor.wordHighlightStrongBackground': palette.bg.app,

    // --- 5. Search & Find (查找替换) ---
    // 当前匹配项：强高亮 (使用 Warning 色或者高亮的主色)
    // 策略：为了区分"选区(蓝)"，搜索通常用"黄/橙"
    'editor.findMatchBackground': palette.state.warning + '50',
    'editor.findMatchBorder': palette.state.warning,
    // 其他匹配项：弱高亮
    'editor.findMatchHighlightBackground': palette.state.warning + '20',
    'editor.findMatchHighlightBorder': palette.transparent,
    // 搜索范围限制 (Find in Selection)
    'editor.findRangeHighlightBackground': palette.bg.element,

    // --- 6. Hover & Links (悬停与链接) ---
    'editor.hoverHighlightBackground': palette.bg.element,
    'editorLink.activeForeground': palette.primary.main,

    // --- 7. Whitespace & Guides (辅助线) ---
    // 空白符 (点)：极淡，几乎隐形
    'editorWhitespace.foreground': palette.border.subtle + '50', // 再加透明度
    // 缩进线：极淡
    'editorIndentGuide.background': palette.border.subtle,
    'editorIndentGuide.activeBackground': palette.border.muted, // 激活的层级稍亮
    // 标尺 (Ruler)
    'editorRuler.foreground': palette.border.subtle,

    // --- 8. Bracket Matching (括号匹配) ---
    // 光标在括号旁时的背景框
    'editorBracketMatch.background': palette.bg.element,
    'editorBracketMatch.border': palette.transparent,

    // 括号彩色配对 (Rainbow Brackets)
    // 循环使用主题色，避免引入杂乱的颜色
    'editorBracketHighlight.foreground1': palette.primary.main,
    'editorBracketHighlight.foreground2': palette.state.warning,
    'editorBracketHighlight.foreground3': palette.state.success,
    'editorBracketHighlight.foreground4': palette.secondary.text, // 或 purple
    'editorBracketHighlight.unexpectedBracket.foreground': palette.state.error,

    // --- 9. Errors & Warnings (诊断波浪线) ---
    // Error: 红
    'editorError.foreground': palette.state.error,
    // Warning: 黄
    'editorWarning.foreground': palette.state.warning,
    // Info: 蓝 (Primary)
    'editorInfo.foreground': palette.primary.main,
    // Hint: 灰 (Muted)
    'editorHint.foreground': palette.text.muted,

    // 未使用的代码 (Unused Code) -> 变透明
    'editorUnnecessaryCode.opacity': '#00000080', // 变暗

    // --- 10. Gutter (左侧槽：行号与Git区域) ---
    // 背景：与编辑器一致 (无缝融合)
    'editorGutter.background': palette.bg.panel,
    // Git 状态指示条
    'editorGutter.modifiedBackground': palette.state.warning,
    'editorGutter.addedBackground': palette.state.success,
    'editorGutter.deletedBackground': palette.state.error,
    // 折叠图标
    'editorGutter.foldingControlForeground': palette.text.muted,

    // --- 11. Overview Ruler (滚动条上的指示点) ---
    // 这里的颜色需要是不透明的 (Opaque)，或者高对比度的
    'editorOverviewRuler.border': palette.transparent, // 不需要边框
    'editorOverviewRuler.findMatchForeground': palette.state.warning,
    'editorOverviewRuler.rangeHighlightForeground': palette.bg.element,
    'editorOverviewRuler.errorForeground': palette.state.error,
    'editorOverviewRuler.warningForeground': palette.state.warning,
    'editorOverviewRuler.addedForeground': palette.state.success,
    'editorOverviewRuler.modifiedForeground': palette.state.warning,
    'editorOverviewRuler.deletedForeground': palette.state.error,

    // --- 12. Inlay Hints (内联提示 TS类型/参数名) ---
    // 必须非常低调，不能像代码一样显眼
    'editorInlayHint.background': palette.bg.element + '40', // 极淡背景
    'editorInlayHint.foreground': palette.text.subtle,
    'editorInlayHint.typeBackground': palette.bg.element + '40',
    'editorInlayHint.typeForeground': palette.text.subtle,

    // --- 13. Copilot / Inline Edits (AI 代码建议) ---
    // 幽灵文字 (Ghost Text)
    // 通常 VS Code 会自动处理 opacity，但也可以指定
    // 'editor.inlineSuggest.foreground': palette.text.muted,

    // Inline Edit (Diff 视图)
    'inlineEdit.gutterIndicator.background': palette.primary.main,
    'inlineEdit.originalBackground': palette.state.errorBg, // 旧代码背景 (红)
    'inlineEdit.modifiedBackground': palette.state.success + '20', // 新代码背景 (绿)
    'inlineEdit.originalBorder': palette.transparent,
    'inlineEdit.modifiedBorder': palette.transparent,
  };
};
