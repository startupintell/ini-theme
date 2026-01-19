import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Quick Picker (Command Palette / Quick Open - Cmd+P)
// -----------------------------------------------------------------
export const quickPickerConfig = (palette: ThemePalette) => {
  return {
    // --- Container ---
    // Background: Use Element level to lift it from the editor background
    'quickInput.background': palette.text.inverse,

    // Text: Normal
    'quickInput.foreground': palette.text.normal,

    // Title bar background (usually only visible during multi-step inputs)
    'quickInputTitle.background': palette.bg.element,

    // --- List Focus (Selected item) ---
    // Strategy: Use a solid primary color or a clear element highlight.
    // A blue or distinct bar is the clearest cursor when quickly browsing the list.
    'quickInputList.focusBackground': palette.bg.element,
    'quickInputList.focusForeground': palette.text.normal,
    'quickInputList.focusIconForeground': palette.text.normal,
  };
};
