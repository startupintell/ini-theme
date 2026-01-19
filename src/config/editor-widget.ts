import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Editor Widget (Floating windows - Find/IntelliSense/Sticky Scroll)
// -----------------------------------------------------------------
export const editorWidgetConfig = (palette: ThemePalette) => {
  return {
    // --- General Widget (Generic widgets like Find/Replace box) ---
    // Background: Use Element level for a "floating card" effect
    'editorWidget.background': palette.bg.element,
    // Border: Subtle border
    'editorWidget.border': palette.border.muted,
    // Text: Normal
    'editorWidget.foreground': palette.text.normal,
    // Border of the resize bar (divider below the find box)
    'editorWidget.resizeBorder': palette.primary.main,

    // --- Suggest Widget (IntelliSense/Completion list) ---
    // Background: Floating layer
    'editorSuggestWidget.background': palette.bg.app,
    'editorSuggestWidget.border': palette.border.subtle,
    'editorSuggestWidget.foreground': palette.text.normal,

    // Selected Item
    // Strategy: Highlight with the primary color for the clearest feedback
    'editorSuggestWidget.selectedBackground': palette.primary.main,
    'editorSuggestWidget.selectedForeground': palette.text.inverse, // Inverse text
    'editorSuggestWidget.selectedIconForeground': palette.text.inverse, // Inverse icon

    // Match Highlights
    // When not selected: Use primary color text
    'editorSuggestWidget.highlightForeground': palette.primary.main,
    // When selected: Since the background is blue, highlight text needs to be white/inverse
    'editorSuggestWidget.focusHighlightForeground': palette.text.inverse,

    // Status bar (small text like "Read more..." at the bottom of the widget)
    'editorSuggestWidgetStatus.foreground': palette.text.muted,

    // --- Hover Widget (Mouse hover tips) ---
    // Similar to a Tooltip
    'editorHoverWidget.background': palette.text.inverse,
    'editorHoverWidget.border': palette.border.subtle,
    'editorHoverWidget.foreground': palette.text.normal,
    // Status bar (Hover sometimes has an action bar at the bottom)
    'editorHoverWidget.statusBarBackground': palette.text.inverse,
    // Highlighted parameter in parameter hints
    'editorHoverWidget.highlightForeground': palette.primary.main,

    // --- Sticky Scroll ---
    // Strategy: Seamless integration.
    // Make the lines pinned to the top look like part of the editor, not a separate header.
    'editorStickyScroll.background': palette.bg.panel, // Same as editor background
    'editorStickyScroll.border': palette.transparent, // Remove underline, or use muted thin line
    'editorStickyScroll.shadow': palette.shadow.scroll, // Shadow when scrolling
    // Hover effect to indicate it's clickable/jumpable
    'editorStickyScrollHover.background': palette.bg.element,
    // Gutter (line number area) should also be seamless
    'editorStickyScrollGutter.background': palette.bg.panel,

    // --- Ghost Text (AI/Copilot ghost text) ---
    // Must be very low-key
    'editorGhostText.foreground': palette.text.subtle,
    'editorGhostText.background': palette.transparent,
    'editorGhostText.border': palette.transparent,

    // --- Debug Exception Widget ---
    // The window that appears when code execution pauses due to an exception
    'debugExceptionWidget.background': palette.bg.element,
    'debugExceptionWidget.border': palette.state.error, // Highlight error with red border

    // --- Marker Navigation (Navigation bar when jumping between errors) ---
    // Small bar shown when using F8 to jump through errors
    'editorMarkerNavigation.background': palette.bg.element,
    // Color blocks for error/warning
    'editorMarkerNavigationError.background': palette.state.error,
    'editorMarkerNavigationWarning.background': palette.state.warning,
    'editorMarkerNavigationInfo.background': palette.primary.main,
    // Header background (can be slightly darker/lighter)
    'editorMarkerNavigationError.headerBackground': palette.state.error + '20',
    'editorMarkerNavigationWarning.headerBackground': palette.state.warning + '20',
    'editorMarkerNavigationInfo.headerBackground': palette.primary.main + '20',
  };
};
