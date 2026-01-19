import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Menu Bar & Context Menu (Top Menu Bar & Right-click Menu)
// -----------------------------------------------------------------
export const menuBarConfig = (palette: ThemePalette) => {
  return {
    // --- Top Horizontal Menu Bar (File, Edit, Selection... on the top bar) ---
    // Background when hovering over "File": A subtle highlight block
    'menubar.selectionBackground': palette.bg.element,
    'menubar.selectionForeground': palette.text.normal,
    'menubar.selectionBorder': palette.transparent, // Modern borderless style

    // --- Dropdowns & Context Menus (Dropdown/Context menu container) ---
    // Background: Use Element level to lift it above the editor
    'menu.background': palette.bg.element,
    // Border: Subtle border to define the outline
    'menu.border': palette.border.muted,
    // Text: Normal
    'menu.foreground': palette.text.normal,
    // Separator: Horizontal line between menu items
    'menu.separatorBackground': palette.border.subtle,

    // --- Menu Item Selection (Selected/Hovered menu item) ---
    // Strategy: To maintain consistency with the List (file tree) and Command Palette,
    // using a Solid Primary color is recommended here.
    'menu.selectionBackground': palette.primary.main,
    'menu.selectionForeground': palette.text.inverse, // Inverse text color
    'menu.selectionBorder': palette.transparent,
  };
};
