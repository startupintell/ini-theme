import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Testing (Testing Explorer & Code Coverage)
// -----------------------------------------------------------------
export const testingConfig = (palette: ThemePalette) => {
  return {
    // --- Icons (Status icons) ---
    // Run button: Often the triangle icon in the Gutter
    'testing.runAction': palette.primary.main,

    // Core status colors
    'testing.iconPassed': palette.state.success,
    'testing.iconFailed': palette.state.error,
    'testing.iconErrored': palette.state.error,
    'testing.iconQueued': palette.state.warning, // Waiting
    'testing.iconSkipped': palette.text.muted, // Skipped
    'testing.iconUnset': palette.text.subtle, // Not run

    // --- Retired Icons (Outdated status) ---
    // Scenario: The code has changed, but tests have not been re-run.
    // Strategy: Use 50% opacity of the corresponding color
    'testing.iconPassed.retired': palette.state.success + '80',
    'testing.iconFailed.retired': palette.state.error + '80',
    'testing.iconErrored.retired': palette.state.error + '80',
    'testing.iconQueued.retired': palette.state.warning + '80',
    'testing.iconSkipped.retired': palette.text.muted + '80',
    'testing.iconUnset.retired': palette.text.subtle + '80',

    // --- Peek View (Test result details popup) ---
    // The window that pops up when you click on error messages
    // Recommendation: Use the Error color for the border since you're typically Peeking failed tests
    'testing.peekBorder': palette.state.error,
    'testing.peekHeaderBackground': palette.bg.element + '50', // Header background

    // Peek View for message details
    'testing.messagePeekBorder': palette.state.info,
    'testing.messagePeekHeaderBackground': palette.bg.element + '50',

    // --- Inline Messages (Error decorators within the editor) ---
    // Inline error text
    'testing.message.error.decorationForeground': palette.state.error,
    // Vertical line on the left of inline errors (Gutter Line)
    'testing.message.error.lineBackground': palette.state.error,
    // Info messages
    'testing.message.info.decorationForeground': palette.text.muted,
    'testing.message.info.lineBackground': palette.primary.main,

    // --- Badges (Specific badges for inline errors) ---
    // e.g., the small capsule displaying "AssertionError"
    'testing.message.error.badgeBackground': palette.state.error,
    'testing.message.error.badgeForeground': palette.text.inverse,
    'testing.message.error.badgeBorder': palette.transparent,

    // --- Coverage (Code coverage coloring) ---
    // Caution: Background colors here must be very faint to avoid visual fatigue.

    // Covered: Very faint green background
    'testing.coveredBackground': palette.state.success + '15', // 15% Opacity
    'testing.coveredBorder': palette.transparent, // No border, too much clutter
    'testing.coveredGutterBackground': palette.state.success + '60', // Gutter can be slightly deeper

    // Uncovered: Very faint red background
    'testing.uncoveredBackground': palette.state.error + '15',
    'testing.uncoveredBorder': palette.transparent,
    'testing.uncoveredGutterBackground': palette.state.error + '60',

    // Uncovered Branch: Usually yellow or purple
    'testing.uncoveredBranchBackground': palette.bg.element,

    // Coverage Count Badge (Coverage statistics)
    'testing.coverCountBadgeBackground': palette.bg.active,
    'testing.coverCountBadgeForeground': palette.text.normal,
  };
};
