import colors from './colors';
import { ThemePalette, Palette, ThemeConfig } from './type';

/**
 * Get theme palette
 * @param config Theme configuration
 * @returns Palette containing dark and light modes
 */
export const getPalette = (config: ThemeConfig = {}): Palette => {
  const neutralScale = config.neutralScale || 'neutral';
  const primaryScale = config.primaryScale || 'black'; // Default to black/white
  const borderSubtleColor = config.borderSubtleColor || 'light';

  // Get selected palette object, use default value if it doesn't exist
  const neutral = (colors[neutralScale as keyof typeof colors] || colors.neutral) as any;
  let primary = (colors[primaryScale as keyof typeof colors] || colors.black) as any;

  // Special handling for black/white mode
  const isBlackPrimary = primaryScale === 'black';

  // Helper function to get border subtle color based on config
  const getBorderSubtleColor = (theme: 'light' | 'dark'): string => {
    if (borderSubtleColor === 'transparent') {
      return theme === 'light' ? '#ffffff00' : '#00000000';
    }

    if (borderSubtleColor === 'medium') {
      // For dark theme, use corresponding dark value
      return theme === 'light' ? neutral[200] : neutral[700];
    }
    
    // Default to light (neutral-100 for light, neutral-800 for dark)
    return theme === 'light' ? neutral[100] : neutral[800];
  };

  // --- Light Theme Palette ---
  const light: ThemePalette = {
    transparent: '#ffffff00',

    // Primary brand colors (uses neutral-900 if primaryScale is set to 'black')
    primary: {
      main: isBlackPrimary ? neutral[900] : primary[600],
      hover: isBlackPrimary ? neutral[800] : primary[700],
      surface: isBlackPrimary ? neutral[900] + '10' : primary[500] + '15',
      text: isBlackPrimary ? neutral[950] : primary[700],
    },

    // Secondary/neutral interactive elements
    secondary: {
      main: neutral[200],
      hover: neutral[300],
      text: neutral[800],
      border: neutral[300],
    },

    // Background colors for various UI components
    bg: {
      app: neutral[50],
      panel: colors.white,
      element: neutral[100],
      input: colors.white,
      active: neutral[200],
    },

    // UI shadows and scroll indicators
    shadow: {
      main: '#00000015',
      strong: '#00000025',
      scroll: '#00000000',
    },

    // General text colors
    text: {
      normal: neutral[900],
      muted: neutral[500],
      subtle: neutral[400],
      inverse: colors.white,
    },

    // Border colors for dividers and focused elements
    border: {
      subtle: getBorderSubtleColor('light'),
      muted: neutral[300],
      focus: isBlackPrimary ? neutral[900] : primary[600],
    },

    // Feedback states (error, warning, success, etc.)
    state: {
      error: colors.red[600],
      warning: colors.amber[600],
      success: colors.emerald[600],
      info: colors.sky[600],
      errorBg: colors.red[50] + '80',
    },

    // Syntax highlighting colors for the editor
    syntax: {
      keyword: colors.fuchsia[600],
      function: colors.sky[600],
      class: colors.amber[600],
      variable: colors.zinc[800],
      parameter: colors.zinc[600],
      property: colors.zinc[600],
      string: colors.emerald[600],
      constant: colors.violet[600],
      regex: colors.red[600],
      tag: colors.blue[600],
      attribute: colors.violet[600],
      comment: colors.zinc[400],
      operator: colors.zinc[400],
    },
  };

  // --- Dark Theme Palette ---
  const dark: ThemePalette = {
    transparent: '#00000000',

    // Primary brand colors (uses neutral-50 if primaryScale is set to 'black')
    primary: {
      main: isBlackPrimary ? neutral[50] : primary[500],
      hover: isBlackPrimary ? neutral[200] : primary[400],
      surface: isBlackPrimary ? neutral[50] + '15' : primary[500] + '20',
      text: isBlackPrimary ? neutral[100] : primary[400],
    },

    // Secondary/neutral interactive elements
    secondary: {
      main: neutral[800],
      hover: neutral[700],
      text: neutral[200],
      border: neutral[600],
    },

    // Background colors for various UI components
    bg: {
      app: neutral[950],
      panel: neutral[900],
      element: neutral[800],
      input: colors.black + '40',
      active: neutral[800],
    },

    // UI shadows and scroll indicators
    shadow: {
      main: '#00000040',
      strong: '#00000080',
      scroll: '#00000000',
    },

    // General text colors
    text: {
      normal: neutral[200],
      muted: neutral[400],
      subtle: neutral[600],
      inverse: neutral[950],
    },

    // Border colors for dividers and focused elements
    border: {
      subtle: getBorderSubtleColor('dark'),
      muted: neutral[700],
      focus: isBlackPrimary ? neutral[50] : primary[500],
    },

    // Feedback states (error, warning, success, etc.)
    state: {
      error: colors.red[400],
      warning: colors.amber[400],
      success: colors.emerald[400],
      info: colors.sky[400],
      errorBg: colors.red[900] + '40',
    },

    // Syntax highlighting colors for the editor
    syntax: {
      keyword: colors.pink[400],
      function: colors.blue[400],
      class: colors.amber[400],
      variable: colors.zinc[100],
      parameter: colors.zinc[300],
      property: colors.zinc[300],
      string: colors.emerald[400],
      constant: colors.violet[400],
      regex: colors.rose[400],
      tag: colors.pink[400],
      attribute: colors.violet[400],
      comment: colors.zinc[500],
      operator: colors.zinc[500],
    },
  };

  return { light, dark };
};
