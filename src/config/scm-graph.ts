import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Source Control Graph (Git commit history graph)
// -----------------------------------------------------------------
export const scmGraphConfig = (palette: ThemePalette) => {
  return {
    // --- Graph Lines (Branch line colors) ---
    // This is a color cycle used to distinguish between multiple branches in parallel development.
    // Recommend using a rainbow-like palette to ensure distinct differences between adjacent lines.
    'scmGraph.foreground1': palette.primary.main, // 1. Blue (typical main branch color)
    'scmGraph.foreground2': palette.state.success, // 2. Green (Feature A)
    'scmGraph.foreground3': palette.state.warning, // 3. Orange (Feature B)
    'scmGraph.foreground4': palette.secondary.main || '#a855f7', // 4. Purple (Hotfix)
    'scmGraph.foreground5': palette.state.info, // 5. Cyan/Sky blue (Refactor)

    // --- History Item Hover (Tooltip when hovering over commit points) ---

    // Tooltip text
    'scmGraph.historyItemHoverLabelForeground': palette.text.inverse,

    // Line count statistics (Additions / Deletions)
    'scmGraph.historyItemHoverAdditionsForeground': palette.state.success, // +12 (Green)
    'scmGraph.historyItemHoverDeletionsForeground': palette.state.error, // -5 (Red)

    // --- Refs (Branch labels) ---
    // "main", "origin/main", "HEAD" labels shown next to commits

    // Local Ref (Local branches): e.g., "main", "dev"
    // Strategy: Use a highlight color as these are your primary targets
    'scmGraph.historyItemRefColor': palette.primary.main,

    // Remote Ref (Remote branches): e.g., "origin/main"
    // Strategy: Use a secondary color or different hue to distinguish local and remote refs
    'scmGraph.historyItemRemoteRefColor': palette.secondary.main || palette.text.muted,

    // Base Ref: Less common, typically used in Rebase scenarios
    'scmGraph.historyItemBaseRefColor': palette.state.warning,

    // --- Hover Default Label ---
    'scmGraph.historyItemHoverDefaultLabelForeground': palette.text.inverse,
    'scmGraph.historyItemHoverDefaultLabelBackground': palette.primary.main,
  };
};
