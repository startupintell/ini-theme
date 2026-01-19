import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Extensions (Extension view)
// -----------------------------------------------------------------
export const extensionsConfig = (palette: ThemePalette) => {
  return {
    // --- Prominent Buttons ("Install" / "Reload") ---
    // Strategy: The most important click targets in the view must be highly visible.
    'extensionButton.prominentBackground': palette.primary.main,
    'extensionButton.prominentForeground': palette.text.inverse, // Inverse text
    'extensionButton.prominentHoverBackground': palette.primary.hover,

    // --- Secondary Buttons ("Manage" / "Disable") ---
    // Strategy: Use Element background, subtle appearance to avoid overwhelming the view with bright blocks.
    'extensionButton.background': palette.primary.main, // Or palette.bg.element
    'extensionButton.foreground': palette.text.inverse,
    'extensionButton.hoverBackground': palette.primary.hover,

    // Separator within buttons (e.g., for dropdown arrows)
    'extensionButton.separator': palette.primary.main + '50', // Or palette.primary.main + '50'

    // --- Badges (Remote / SSH markers) ---
    // Scenario: Blue badge indicating "installed on remote" in WSL or SSH mode
    'extensionBadge.remoteBackground': palette.primary.main,
    'extensionBadge.remoteForeground': palette.text.inverse,

    // --- Status Icons ---

    // Rating Star: Should definitely be yellow/gold
    'extensionIcon.starForeground': palette.state.warning,
    'mcpIcon.starForeground': palette.state.warning, // Star related to MCP protocol

    // Verified Publisher: Blue checkmark similar to Twitter/GitHub
    'extensionIcon.verifiedForeground': palette.primary.main,

    // Pre-release: Hinting that this is a beta version
    'extensionIcon.preReleaseForeground': palette.state.warning, // Warning color, suggesting potential instability

    // Sponsor: Heart icon
    'extensionIcon.sponsorForeground': palette.state.error, // Red/Pink

    // Private extensions
    'extensionIcon.privateForeground': palette.text.muted,
  };
};
