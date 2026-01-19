import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Notifications (Notification toasts in the bottom right & Notification Center)
// -----------------------------------------------------------------
export const notificationConfig = (palette: ThemePalette) => {
  return {
    // --- Toasts (Popups in the bottom right) ---
    // Background: Use Element level, slightly lighter/darker than the editor background for a floating feel
    'notifications.background': palette.bg.panel,
    // Text: Normal
    'notifications.foreground': palette.text.normal,
    // Border: Define the card outline
    'notificationToast.border': palette.border.muted,

    // --- Notification Center (List view of notifications) ---
    // Border for the entire Notification Center
    'notificationCenter.border': palette.border.muted,

    // Header at the top of the Notification Center
    // Suggestion: Slightly darken background to distinguish "Header" from "Content"
    'notificationCenterHeader.background': palette.bg.active, // Or palette.bg.element
    'notificationCenterHeader.foreground': palette.text.normal,

    // Border between notifications (within the list view)
    'notifications.border': palette.border.subtle,

    // --- Content Details ---
    // Link color: Primary color
    'notificationLink.foreground': palette.primary.main,

    // --- Status Icons ---
    // Must be consistent with global state colors
    'notificationsErrorIcon.foreground': palette.state.error,
    'notificationsWarningIcon.foreground': palette.state.warning,
    'notificationsInfoIcon.foreground': palette.primary.main,
  };
};
