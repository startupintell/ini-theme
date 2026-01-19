import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Snippets (Highlights for code snippet tabstops)
// -----------------------------------------------------------------
export const snippetsConfig = (palette: ThemePalette) => {
  return {
    // --- Tabstops (Fill-in-the-blank areas) ---
    // Scenario: The "to-be-modified" areas selected by the cursor after expanding a snippet (e.g., ${1:name})

    // Background: Use Active or Element background to mimic an "input field" feel
    'editor.snippetTabstopHighlightBackground': palette.bg.active, // Or palette.bg.element

    // Border: Subtle border to define the range
    'editor.snippetTabstopHighlightBorder': palette.border.subtle,

    // --- Final Tabstop (The end point) ---
    // Scenario: The $0 position in a snippet
    // Strategy: Usually doesn't need visual feedback; keep transparent to avoid distraction
    'editor.snippetFinalTabstopHighlightBackground': palette.transparent,
    'editor.snippetFinalTabstopHighlightBorder': palette.transparent,
  };
};
