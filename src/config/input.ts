import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Input Control (Input fields, search boxes, validation states)
// -----------------------------------------------------------------
export const inputConfig = (palette: ThemePalette) => {
  return {
    // --- Basic Input Styles ---
    // Background: Use input level (usually neutral[950] or transparent black) to create a "sunken" visual effect
    'input.background': palette.bg.input,

    // Border: Default to muted border
    'input.border': palette.border.muted,

    // Text: Normal body color
    'input.foreground': palette.text.normal,

    // Placeholder: Must use subtle/muted colors to distinguish "prompts" from "content"
    'input.placeholderForeground': palette.text.subtle,

    // --- Input Options (Toggles like Aa, .*, \b inside the input box) ---
    // Active background: Use primary Surface color (very faint) to avoid interfering with text readability
    'inputOption.activeBackground': palette.primary.surface,

    // Active border: Use a primary color outline, the clearest indicator of active state
    'inputOption.activeBorder': palette.primary.main,

    // Active foreground (Icons): Change to primary color
    'inputOption.activeForeground': palette.primary.main, // Or palette.primary.text

    // Hover state: Use common Element hover background
    'inputOption.hoverBackground': palette.bg.element,

    // --- Validation: Error (e.g., invalid regex) ---
    // Background: Faint red (Error Color + Transparency)
    'inputValidation.errorBackground': palette.state.errorBg,
    // Text: Deep red
    'inputValidation.errorForeground': palette.state.error,
    // Border: Solid red
    'inputValidation.errorBorder': palette.state.error,

    // --- Validation: Warning (e.g., too many search results) ---
    // Background: Faint amber (transparency added via hex suffix or use defined warningBg)
    'inputValidation.warningBackground': palette.state.warning + '30',
    'inputValidation.warningForeground': palette.state.warning,
    'inputValidation.warningBorder': palette.state.warning,

    // --- Validation: Info ---
    // Background: Usually use Primary Surface (blue tones)
    'inputValidation.infoBackground': palette.primary.surface,
    'inputValidation.infoForeground': palette.primary.main,
    'inputValidation.infoBorder': palette.primary.main,
  };
};
