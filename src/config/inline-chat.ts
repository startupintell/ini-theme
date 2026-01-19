import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Inline Chat (Cmd+K Floating dialogue box)
// -----------------------------------------------------------------
export const inlineChatConfig = (palette: ThemePalette) => {
  return {
    // --- Container (Floating window container) ---
    // Background: Use Element level to lift it from the editor background
    'inlineChat.background': palette.bg.element,
    // Border: Subtle border to define the outline
    'inlineChat.border': palette.border.muted,
    // Shadow: Must have a shadow, otherwise it's hard to see the boundaries against the code background
    'inlineChat.shadow': palette.shadow.strong, // Use a heavier shadow
    // Text: Normal
    'inlineChat.foreground': palette.text.normal,

    // --- Input Field ---
    // Background: Use Input level for a sunken feel
    'inlineChatInput.background': palette.bg.input,
    // Border: Default border
    'inlineChatInput.border': palette.border.subtle,
    // Focus border: Highlight with primary color
    'inlineChatInput.focusBorder': palette.primary.main,
    // Placeholder text color
    'inlineChatInput.placeholderForeground': palette.text.subtle,

    // --- Inline Diff (Text changes within the input box) ---
    // Scenario: Differences shown when editing the prompt you just typed
    'inlineChatDiff.inserted': palette.state.success + '20', // Green background
    'inlineChatDiff.removed': palette.state.error + '20', // Red background
  };
};
