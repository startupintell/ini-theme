import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Text Colors (Text content - Markdown/Welcome Page/Release Notes)
// -----------------------------------------------------------------
export const textColorsConfig = (palette: ThemePalette) => {
  return {
    // --- Block Quotes ---
    // Background: Use Element level, slightly lighter/more prominent than the base color
    'textBlockQuote.background': palette.bg.element,

    // Border: Typically designed with a primary color vertical line on the left
    'textBlockQuote.border': palette.primary.main,

    // --- Code Blocks ---
    // Background: Use Input level (usually darker than Panel) to create a "sunken" code container feel
    'textCodeBlock.background': palette.bg.input,

    // --- Links ---
    // Regular state: Use primary color
    'textLink.foreground': palette.primary.main,

    // Hover/Active state: Use primary hover color
    'textLink.activeForeground': palette.primary.hover,

    // --- Preformatted Text (Inline code/pre-formatted) ---
    // e.g., `code` snippets in Markdown
    // Text: Maintain normal reading color, or use primary text color: palette.primary.text
    'textPreformat.foreground': palette.text.normal,

    // Background: Subtle highlight, usually similar to or lighter than blockQuote
    'textPreformat.background': palette.bg.element, // Or use palette.bg.active

    // Border: Weak border wrap to add a touch of refinement
    // 'textPreformat.border': palette.border.subtle,

    // --- Separators ---
    // Color of the <hr> tag
    'textSeparator.foreground': palette.border.muted,
  };
};
