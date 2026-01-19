import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Welcome Page (Welcome / Get Started)
// -----------------------------------------------------------------
export const welcomePageConfig = (palette: ThemePalette) => {
  return {
    // --- Background ---
    // Strategy: Consistent with Editor background for an immersive feel.
    // Or use bg.app for a "framed" effect.
    'welcomePage.background': palette.bg.panel,

    // --- Tiles (Action cards like New File, Open Folder...) ---
    // Background: Use Element level to make them look like cards
    'welcomePage.tileBackground': palette.bg.element,
    // Hover: Lighten or provide interaction feedback
    'welcomePage.tileHoverBackground': palette.bg.active,
    // Border: Subtle outline
    'welcomePage.tileBorder': palette.border.muted,

    // --- Progress Bars (Walkthrough progress bars) ---
    // Progress bar foreground (completed part): Primary color
    'welcomePage.progress.foreground': palette.primary.main,
    // Progress bar background (uncompleted track): Dark gray
    'welcomePage.progress.background': palette.bg.active,

    // --- Walkthrough Elements ---
    // Step title
    'walkthrough.stepTitle.foreground': palette.text.normal,

    // Embedded editor background
    // Scenario: Small editors embedded in walkthroughs to demonstrate features
    // Strategy: Use bg.input (sunken look) to make it resemble a "code block"
    'walkThrough.embeddedEditorBackground': palette.bg.input,
  };
};
