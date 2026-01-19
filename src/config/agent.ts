import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Agent Session (AI Assistant Sessions - Copilot Chat)
// -----------------------------------------------------------------
export const agentConfig = (palette: ThemePalette) => {
  return {
    // --- Read Indicator (Unread/Update indicator) ---
    // Scenario: Small dot in the history list indicating "this session has a new reply"
    // Strategy: Use the primary color - prominent but not overly distracting
    'agentSessionReadIndicator.foreground': palette.primary.main,

    // --- Selected Badge Border (Badge border in selected sessions) ---
    // Scenario: Border of badges shown within a selected session
    // Strategy: Usually doesn't need a strong border; set to transparent or a very subtle color
    'agentSessionSelectedBadge.border': palette.border.subtle, // Or transparent

    // Unfocused state
    'agentSessionSelectedUnfocusedBadge.border': palette.border.subtle,
  };
};
