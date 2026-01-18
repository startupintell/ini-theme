/**
 * Theme palette interface
 *
 * Defines all color configurations required for VS Code theme, including primary colors,
 * background colors, text colors, border colors, etc.
 * Each color value is a hexadecimal color string (e.g., "#ffffff" or "#ffffff00" with transparency).
 */
export interface ThemePalette {
  // Transparent color
  transparent: string;

  // Primary brand colors
  primary: {
    main: string; // Main brand color
    hover: string; // Hover state for primary elements
    surface: string; // Subtle background using primary color
    text: string; // Text color on primary background
  };

  // Secondary/Accent colors
  secondary: {
    main: string; // Secondary brand/accent color
    hover: string; // Hover state for secondary elements
    text: string; // Text color on secondary background
    border: string; // Border color for secondary elements
  };

  // Background colors
  bg: {
    app: string; // Main application background
    panel: string; // Sidebar or panel background
    element: string; // Standard UI element background
    input: string; // Input field background
    active: string; // Active or selection state background
  };

  // Text colors
  text: {
    normal: string; // Default text color
    muted: string; // Secondary/dimmed text color
    subtle: string; // Least prominent text color
    inverse: string; // Text on contrasting background
  };

  // Border colors
  border: {
    subtle: string; // Standard subtle border
    muted: string; // Very faint border
    focus: string; // Focus ring or highlight border
  };

  // Status/State colors
  state: {
    error: string; // Error state color
    warning: string; // Warning state color
    success: string; // Success state color
    info: string; // Information state color
    errorBg: string; // Background for error messages/badges
  };

  // Shadow and elevation
  shadow: {
    main: string; // Standard shadow
    strong: string; // Pronounced shadow
    scroll: string; // Shadow used for scroll indicators
  };

  // Colors for syntax highlighting
  syntax: {
    comment: string; // Comments (usually gray)
    keyword: string; // Keywords (if, return, import)
    function: string; // Function names/methods
    class: string; // Classes/types/interfaces
    variable: string; // Variables
    parameter: string; // Parameters (usually distinct from variables)
    string: string; // Strings
    constant: string; // Constants/numbers/booleans
    tag: string; // HTML/JSX tags (div, Component)
    attribute: string; // HTML/JSX attributes (class=, src=)
    property: string; // Object properties (json keys, object.prop)
    operator: string; // Operators (+, =, =>)
    regex: string; // Regular expressions
  };
}

/**
 * Complete palette interface
 *
 * Contains both light and dark theme variant palettes.
 * Used to generate complete VS Code theme configuration.
 */
export interface Palette {
  /**
   * Light theme palette
   */
  light: ThemePalette;

  /**
   * Dark theme palette
   */
  dark: ThemePalette;
}

/**
 * Configuration options for theme customization
 *
 * All options are optional and will use default values if not specified.
 */
export interface ThemeConfig {
  /**
   * Enable italic style for comments
   *
   * @default true
   */
  italicComments?: boolean;

  /**
   * Enable italic style for keywords
   *
   * @default false
   */
  italicKeywords?: boolean;

  /**
   * Enable bold weight for keywords
   *
   * @default false
   */
  boldKeywords?: boolean;

  /**
   * Neutral color scale selection
   *
   * Affects background colors and overall atmosphere.
   * Options: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
   *
   * @default 'neutral'
   */
  neutralScale?: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone';

  /**
   * Primary color scale selection
   *
   * Custom primary color, can be a color name (e.g., 'black', 'blue') or a hexadecimal color value.
   * Affects highlight colors, cursor, and other accent elements.
   *
   * @default 'black'
   */
  primaryScale?: string;

  /**
   * Border subtle color option
   *
   * Controls the intensity of subtle borders.
   * - 'light': Light border (neutral-100)
   * - 'medium': Medium border (neutral-200)
   * - 'transparent': Transparent border
   *
   * @default 'light'
   */
  borderSubtleColor?: 'light' | 'medium' | 'transparent';
}
