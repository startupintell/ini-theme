import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Markdown Alerts (Alert blocks in Markdown preview > [!NOTE])
// -----------------------------------------------------------------
export const markdownConfig = (palette: ThemePalette) => {
  return {
    // Note: Blue (General information)
    'markdownAlert.note.foreground': palette.state.info,
    // Or palette.primary.main

    // Tip: Green (Help/Tips)
    'markdownAlert.tip.foreground': palette.state.success,

    // Important: Purple (Emphasis)
    // If your theme doesn't have a purple, use the primary color or a deeper blue
    'markdownAlert.important.foreground': palette.secondary.main || '#a855f7',

    // Warning: Yellow (Warning)
    'markdownAlert.warning.foreground': palette.state.warning,

    // Caution: Red (Danger/Negative)
    'markdownAlert.caution.foreground': palette.state.error,
  };
};
