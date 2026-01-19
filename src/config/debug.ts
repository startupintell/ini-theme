import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Debug Colors (Debug view and toolbar)
// -----------------------------------------------------------------
export const debugConfig = (palette: ThemePalette) => {
  return {
    // --- Toolbar ---
    // A toolbar that floats at the top of the editor
    // Background: Use Element level to lift it from the content
    'debugToolBar.background': palette.bg.element,
    // Border: Subtle outline
    'debugToolBar.border': palette.border.muted,

    // --- Editor Highlights ---

    // Top Stack Frame: The line where the program is currently paused (Most important!)
    // Strategy: Use a low-opacity Warning color (yellow) background, mimicking a highlighter effect
    'editor.stackFrameHighlightBackground': palette.state.warning + '20', // 20% Yellow

    // Focused Stack Frame: When you click on other levels in the call stack to inspect previous states
    // Strategy: Use a fainter yellow or green to distinguish between the "actual current line" and the "inspected line"
    'editor.focusedStackFrameHighlightBackground': palette.state.success + '20',

    // --- Inline Values (Inline variable value previews) ---
    // Scenario: "x = 5" displayed to the right of code lines
    // Strategy: Similar to Ghost Text, should not interfere with reading the code
    'editor.inlineValuesForeground': palette.text.subtle + '80', // Semi-transparent text
    'editor.inlineValuesBackground': palette.bg.element + '40', // Capsule background

    // --- Call Stack View ---

    // Exception Label: "Paused on exception"
    'debugView.exceptionLabelForeground': palette.text.inverse,
    'debugView.exceptionLabelBackground': palette.state.error, // Red background to emphasize crashes

    // State Label: "Running", "Paused"
    'debugView.stateLabelForeground': palette.text.inverse,
    'debugView.stateLabelBackground': palette.state.warning, // Yellow/Orange background

    // Value Changed: Highlight when a variable's value changes
    'debugView.valueChangedHighlight': palette.primary.main, // Blue highlight, indicating an "Update"

    // --- Token Syntax Highlighting (Colors in the variables panel) ---
    // Makes the variables panel as colorful and readable as the code itself

    'debugTokenExpression.name': palette.primary.main, // Variable name (Blue)
    'debugTokenExpression.value': palette.text.muted, // Variable value (Gray)
    'debugTokenExpression.string': palette.state.success, // String (Green)
    'debugTokenExpression.number': palette.state.warning, // Number (Orange/Yellow)
    'debugTokenExpression.boolean': palette.primary.main, // Boolean (Blue/Purple)
    'debugTokenExpression.type': palette.state.info, // Type (Light blue)
    'debugTokenExpression.error': palette.state.error, // Error (Red)
  };
};
