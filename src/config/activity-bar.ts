import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Activity Bar (Icon navigation on the far left or top)
// -----------------------------------------------------------------
export const activityBarConfig = (palette: ThemePalette) => {
  return {
    // --- Vertical Activity Bar (Classic vertical layout) ---

    // Background: Use App level (darkest), serving as the "border" of the interface
    'activityBar.background': palette.bg.panel,

    // Border: Divider separating from the Side Bar, usually very subtle
    'activityBar.border': palette.border.subtle,

    // Icon color (Active): Use the brightest text color
    // Design tip: Avoid making icons colorful (Primary); white/highlighted neutral is cleanest
    'activityBar.foreground': palette.text.normal,

    // Icon color (Inactive): Use Muted or Subtle to let them recede into the background
    'activityBar.inactiveForeground': palette.text.muted,

    // Active Indicator: The bright line on the left/right
    'activityBar.activeBorder': palette.primary.main,

    // Active item background:
    // 1. Set to Transparent (Recommended): Modern style, rely only on Icon highlight and Border indicator.
    // 2. Set to Element background: Traditional button style.
    'activityBar.activeBackground': palette.transparent,

    // Focus border (during keyboard navigation)
    'activityBar.activeFocusBorder': palette.primary.main,

    // Feedback color when dragging items
    'activityBar.dropBorder': palette.primary.main,

    // --- Top Activity Bar (Horizontal layout at the top) ---
    // Takes effect when the Activity Bar is moved above the Side Bar

    'activityBarTop.background': palette.bg.app,
    'activityBarTop.foreground': palette.text.normal,
    'activityBarTop.inactiveForeground': palette.text.muted,

    // In top mode, active items usually look like "Tabs", so a background color is preferred
    'activityBarTop.activeBackground': palette.bg.element,
    'activityBarTop.activeBorder': palette.primary.main, // Bottom highlight line
    'activityBarTop.dropBorder': palette.primary.main,

    // --- Badges (Notification badges) ---
    // Standard badge (e.g., search result count) -> Use primary color
    'activityBarBadge.background': palette.primary.main,
    'activityBarBadge.foreground': palette.text.inverse,

    // Warning badge (e.g., ESLint warnings) -> Use Warning color
    'activityWarningBadge.background': palette.state.warning,
    'activityWarningBadge.foreground': palette.bg.app, // Warning colors are usually bright, pair with dark text

    // Error badge (e.g., code errors) -> Use Error color
    'activityErrorBadge.background': palette.state.error,
    'activityErrorBadge.foreground': palette.text.inverse,
  };
};
