import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Profiles (Profiles and Settings gear badge)
// -----------------------------------------------------------------
export const profilesConfig = (palette: ThemePalette) => {
  return {
    // --- Profile Badge (Badge on the gear icon) ---
    // Scenario: Displays "1" (indicates updates) or user avatar/initials.
    // Color: Consistent with other Activity Bar badges, use primary color.
    'profileBadge.background': palette.primary.main,
    'profileBadge.foreground': palette.text.inverse,

    // --- Profiles Sash Border (Divider in the Profiles editor) ---
    // Scenario: Drag-to-resize divider between columns in the "Profiles" management interface.
    // Color: Use the subtlest border color to avoid distracting from the content.
    'profiles.sashBorder': palette.border.subtle,
  };
};
