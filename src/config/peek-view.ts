import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Peek View (Quick view for references/definitions)
// -----------------------------------------------------------------
export const peekViewConfig = (palette: ThemePalette) => {
  return {
    // --- Container & Border ---
    // Border: The most important visual feature of the Peek View.
    // Use the primary color to "wrap" the entire window, making it highly prominent.
    'peekView.border': palette.primary.main,

    // --- Title Area ---
    // Background: Usually consistent with the results list background
    'peekViewTitle.background': palette.bg.element,
    // Title text (file name)
    'peekViewTitleLabel.foreground': palette.text.normal,
    // Description text (file path)
    'peekViewTitleDescription.foreground': palette.text.subtle,

    // --- Result List (Left side: list of references) ---
    // Background: Use Element level
    'peekViewResult.background': palette.bg.element,
    // File name
    'peekViewResult.fileForeground': palette.text.normal,
    // Line number / preview text
    'peekViewResult.lineForeground': palette.text.muted,

    // Selected item: Highlight with primary color to clearly show which reference is selected
    'peekViewResult.selectionBackground': palette.primary.main, // Or palette.secondary.main
    'peekViewResult.selectionForeground': palette.text.inverse,

    // Search match highlights (within the list)
    'peekViewResult.matchHighlightBackground': palette.state.warning + '40',

    // --- Editor Area (Right side: code preview) ---
    // Background: Suggest using a color slightly darker than the main editor (bg.input) for a "darkroom" effect.
    // This helps focus the user's attention on the code within the sub-window.
    'peekViewEditor.background': palette.bg.input,
    'peekViewEditorGutter.background': palette.bg.input, // Must match the editor background

    // Match highlights (within the code preview)
    // For the specific variable/function being inspected
    'peekViewEditor.matchHighlightBackground': palette.primary.surface, // Or primary.main + '40'
    'peekViewEditor.matchHighlightBorder': palette.transparent,

    // --- Sticky Scroll (within Peek View) ---
    // Consitent with Peek Editor background
    'peekViewEditorStickyScroll.background': palette.bg.input,
    'peekViewEditorStickyScrollGutter.background': palette.bg.input,
  };
};
