import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Chart Colors (Used for trend charts in extension pages, etc.)
// -----------------------------------------------------------------
export const chartConfig = (palette: ThemePalette) => {
  return {
    // --- Text & Structure ---
    // Chart text (Axis values/labels)
    'charts.foreground': palette.text.normal,

    // Default line color (if no specific color is specified)
    'charts.lines': palette.text.muted,

    // Axis lines
    'chart.axis': palette.text.subtle, // e.g., x-axis, y-axis

    // Auxiliary reference lines (Grid/Guides)
    // Strategy: Must be very faint, only to assist reading
    'chart.guide': palette.border.subtle + '50', // Lower opacity

    // Main series line (Line Chart default)
    'chart.line': palette.primary.main,

    // --- Data Colors (Data series colors) ---
    // Strategy: Directly map global state colors to maintain semantic consistency
    'charts.red': palette.state.error,
    'charts.blue': palette.primary.main,
    'charts.green': palette.state.success,
    'charts.yellow': palette.state.warning,
    'charts.orange': palette.state.warning, // Use Warning if no dedicated orange color
    'charts.purple': palette.secondary.main || '#c084fc',
  };
};
