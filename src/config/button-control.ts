import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Button & Controls (Buttons, Checkboxes, Radio Buttons)
// -----------------------------------------------------------------
export const buttonControlConfig = (palette: ThemePalette) => {
  return {
    // --- Primary Button ---
    // Core actions like Submit, Confirm
    'button.background': palette.primary.main,
    'button.foreground': palette.text.inverse,
    'button.border': palette.transparent, // Modern flat style usually has no border
    'button.hoverBackground': palette.primary.hover,

    // Separator: Used to split buttons (e.g., Git Commit dropdown arrow)
    'button.separator': palette.primary.hover,

    // --- Secondary Button ---
    // Actions like Cancel, Close, using neutral colors
    'button.secondaryBackground': palette.secondary.main,
    'button.secondaryForeground': palette.secondary.text,
    'button.secondaryHoverBackground': palette.secondary.hover,

    // --- Checkbox ---
    // Background: Use input background (sunken feel)
    'checkbox.background': palette.bg.input,
    // Check icon: Use primary color or text color
    'checkbox.foreground': palette.primary.main,
    // Border: Common component border
    'checkbox.border': palette.border.muted,

    // Disabled state
    'checkbox.disabled.background': palette.bg.active,
    'checkbox.disabled.foreground': palette.text.subtle,

    // Checkbox within an selected list item (special scenario)
    // Background is already highlighted here, so the checkbox needs to adapt
    'checkbox.selectBackground': palette.bg.element,
    'checkbox.selectBorder': palette.text.normal,

    // --- Radio Button ---
    // Active state (selected)
    'radio.activeBackground': palette.primary.main, // Becomes a solid primary color circle
    'radio.activeForeground': palette.text.inverse, // Dot inside becomes inverse color (white)
    'radio.activeBorder': palette.primary.main, // Border also becomes primary color

    // Inactive state (unselected)
    'radio.inactiveBackground': palette.bg.input, // Hollow circle like an input box
    'radio.inactiveForeground': palette.text.muted, // No dot inside, or gray dot
    'radio.inactiveBorder': palette.border.muted, // Gray border
    'radio.inactiveHoverBackground': palette.bg.element, // Hover feedback
  };
};
