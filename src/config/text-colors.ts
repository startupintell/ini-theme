import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Text Colors (文本内容 - Markdown/Welcome Page/Release Notes)
// -----------------------------------------------------------------
export const textColorsConfig = (palette: ThemePalette) => {
  return {
    // --- Block Quotes (引用块) ---
    // 背景：使用 Element 层级，比底色稍亮/稍显眼
    'textBlockQuote.background': palette.bg.element,

    // 边框：典型的设计是左侧有一条主色竖线
    'textBlockQuote.border': palette.primary.main,

    // --- Code Blocks (代码块) ---
    // 背景：使用 Input 层级 (通常比 Panel 更深)，制造“凹陷”的代码容器感
    'textCodeBlock.background': palette.bg.input,

    // --- Links (链接) ---
    // 常规态：使用主色
    'textLink.foreground': palette.primary.main,

    // 悬停/点击态：使用主色悬停色
    'textLink.activeForeground': palette.primary.hover,

    // --- Preformatted Text (内联代码/预格式化) ---
    // 例如 Markdown 中的 `code` 片段
    // 文字：保持正常阅读颜色，或使用主色文字 palette.primary.text
    'textPreformat.foreground': palette.text.normal,

    // 背景：轻微高亮，通常与 blockQuote 类似或更淡
    'textPreformat.background': palette.bg.element, // 或者用 palette.bg.active

    // 边框：弱边框包裹，增加精致感
    // 'textPreformat.border': palette.border.subtle,

    // --- Separators (分割线) ---
    // <hr> 标签的颜色
    'textSeparator.foreground': palette.border.muted,
  };
};
