export interface ThemePalette {
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
 * Represents the complete palette containing both light and dark variants
 */
export interface Palette {
  light: ThemePalette; // Light theme variant palette
  dark: ThemePalette; // Dark theme variant palette
}

/**
 * Configuration options for theme customization
 */
export interface ThemeConfig {
  italicComments?: boolean; // Enable italic style for comments
  italicKeywords?: boolean; // Enable italic style for keywords
  boldKeywords?: boolean; // Enable bold weight for keywords
  neutralScale?: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'; // Choice of neutral color palette
  primaryScale?: string; // Custom primary color scale (hex or name)
}
