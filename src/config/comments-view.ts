import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Comments View (Comments list view - usually for GitHub PR extensions)
// -----------------------------------------------------------------
export const commentsViewConfig = (palette: ThemePalette) => {
  return {
    // --- Unresolved ---
    // Status: Actionable (requires attention)
    // Strategy: Use primary or Warning color to hint that "there is still work to be done here"
    'commentsView.unresolvedIcon': palette.primary.main, // Or palette.state.warning

    // --- Resolved ---
    // Status: Done
    // Strategy: Use Muted to decrease visual prominence. Since it's resolved, it no longer needs to be eye-catching.
    'commentsView.resolvedIcon': palette.text.muted, // Or palette.state.success
  };
};
