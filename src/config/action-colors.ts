import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Action Colors (Toolbar and Action Lists)
// -----------------------------------------------------------------
export const actionColorsConfig = (palette: ThemePalette) => {
  return {
    // --- Toolbar (Interaction with toolbar icons) ---
    // Hover background: Provide subtle feedback on hover
    'toolbar.hoverBackground': palette.transparent,

    // Hover outline: Modern flat design usually keeps this transparent to avoid unsightly borders
    'toolbar.hoverOutline': palette.transparent,

    // Active background: Use Active level, deeper/more noticeable than hover
    'toolbar.activeBackground': palette.bg.active,

    // --- Editor Action List (Quick Fix/Lightbulb menu) ---
    // Background: As a popup (Widget), use Element background
    'editorActionList.background': palette.bg.element,

    // List text
    'editorActionList.foreground': palette.text.normal,

    // Focused item background: Highlight with primary color, similar to dropdown selection state
    'editorActionList.focusBackground': palette.primary.main,

    // Focused item text: Use inverse color (e.g., white text on blue background)
    'editorActionList.focusForeground': palette.text.inverse,
  };
};
