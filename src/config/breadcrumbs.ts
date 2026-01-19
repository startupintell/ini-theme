import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Breadcrumbs (File path navigation at the top of the editor)
// -----------------------------------------------------------------
export const breadcrumbsConfig = (palette: ThemePalette) => {
  return {
    // --- Bar (The breadcrumb bar itself) ---
    // Background: Usually set to the editor background or transparent to maintain a clean interface
    'breadcrumb.background': palette.bg.panel,

    // Text: Must be subtle (Muted) by default
    // This ensures it doesn't distract from the code below
    'breadcrumb.foreground': palette.text.muted,

    // --- Interaction ---
    // Focus: When selected during keyboard navigation
    'breadcrumb.focusForeground': palette.text.normal,

    // Active Selection: When clicked or when the dropdown menu is open
    // Strategy: Highlight to confirm the current operation path
    'breadcrumb.activeSelectionForeground': palette.primary.main, // Or palette.text.normal

    // --- Picker (Dropdown menu that appears when clicked) ---
    // Background: Use Element level, floating above the code
    'breadcrumbPicker.background': palette.bg.element,
  };
};
