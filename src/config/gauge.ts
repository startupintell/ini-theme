import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Gauge (Gauges/Progress bars - common in extensions)
// -----------------------------------------------------------------
export const gaugeConfig = (palette: ThemePalette) => {
  return {
    // --- Structure ---
    // Track background (unfilled portion)
    'gauge.background': palette.bg.active, // Or bg.element

    // Border (usually not needed, keep it flat)
    'gauge.border': palette.transparent,

    // --- Normal State ---
    // Fill color
    'gauge.foreground': palette.primary.main,

    // --- Warning State ---
    // Scenario: High CPU load, or coverage below threshold
    // Fill color: Yellow
    'gauge.warningForeground': palette.state.warning,
    // Track background: Keep consistent, or slightly yellow-tinted (not recommended, too busy)
    'gauge.warningBackground': palette.bg.active,

    // --- Error State ---
    // Scenario: Build failed, or critical issues
    // Fill color: Red
    'gauge.errorForeground': palette.state.error,
    // Track background
    'gauge.errorBackground': palette.bg.active,
  };
};
