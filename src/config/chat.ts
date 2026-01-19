import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Chat & Copilot (AI chat window)
// -----------------------------------------------------------------
export const chatConfig = (palette: ThemePalette) => {
  return {
    // --- Request (User's question) ---
    // Background of the entire input area
    'chat.requestBackground': palette.bg.panel,
    // Border of the input area
    'chat.requestBorder': palette.border.subtle,

    // --- Request Bubble (User message bubble) ---
    // Modern style: Give the user's message a subtle background to distinguish it from the AI's response.
    // Recommended: Use Element background (dark gray) or Primary Surface (light blue).
    'chat.requestBubbleBackground': palette.bg.element,
    'chat.requestBubbleHoverBackground': palette.bg.active,

    // Border for code blocks within the bubble
    'chat.requestCodeBorder': palette.border.muted,

    // --- Slash Commands (e.g., /fix, /doc) ---
    // Similar to a Tag/Badge design
    'chat.slashCommandBackground': palette.primary.surface, // Very faint primary background
    'chat.slashCommandForeground': palette.primary.main, // Primary text color

    // --- Avatars ---
    // The AI's avatar background usually uses the primary color for branding
    'chat.avatarBackground': palette.primary.main,
    'chat.avatarForeground': palette.text.inverse,

    // --- Inline Diff (Code changes within chat) ---
    // Must be consistent with the Diff Editor
    'chat.linesAddedForeground': palette.state.success,
    'chat.linesRemovedForeground': palette.state.error,

    // --- Edited Files List ---
    // Color of file names in the list when Copilot has modified files
    // Use Warning color to indicate an "edited/unsaved" state
    'chat.editedFileForeground': palette.state.warning,

    // --- Layout ---
    // Separator in history records
    'chat.checkpointSeparator': palette.border.subtle,
    // Sash border in management interfaces
    'chatManagement.sashBorder': palette.border.subtle,
  };
};
