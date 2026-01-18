import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Source Control Graph (Git 提交历史图谱)
// -----------------------------------------------------------------
export const scmGraphConfig = (palette: ThemePalette) => {
  return {
    // --- Graph Lines (分支线颜色) ---
    // 这是一个颜色循环，用于区分并行开发的多个分支。
    // 建议使用彩虹色系，确保相邻的线颜色差异明显。
    'scmGraph.foreground1': palette.primary.main, // 1. 蓝色 (主分支通常色)
    'scmGraph.foreground2': palette.state.success, // 2. 绿色 (Feature A)
    'scmGraph.foreground3': palette.state.warning, // 3. 橙色 (Feature B)
    'scmGraph.foreground4': palette.secondary.main || '#a855f7', // 4. 紫色 (Hotfix)
    'scmGraph.foreground5': palette.state.info, // 5. 青色/天蓝 (Refactor)

    // --- History Item Hover (悬停在提交点上的 Tooltip) ---

    // Tooltip 文字
    'scmGraph.historyItemHoverLabelForeground': palette.text.inverse,

    // 增删行数统计 (Additions / Deletions)
    'scmGraph.historyItemHoverAdditionsForeground': palette.state.success, // +12 (绿)
    'scmGraph.historyItemHoverDeletionsForeground': palette.state.error, // -5 (红)

    // --- Refs (分支标签) ---
    // 显示在 Commit 旁边的 "main", "origin/main", "HEAD" 标签

    // Local Ref (本地分支): 比如 "main", "dev"
    // 策略：使用高亮色，因为这是你直接操作的对象
    'scmGraph.historyItemRefColor': palette.primary.main,

    // Remote Ref (远程分支): 比如 "origin/main"
    // 策略：使用次要颜色或不同色相，区分本地和远程
    'scmGraph.historyItemRemoteRefColor': palette.secondary.main || palette.text.muted,

    // Base Ref (基础引用): 较少见，通常用于 Rebase 场景
    'scmGraph.historyItemBaseRefColor': palette.state.warning,

    // --- Hover Default Label (默认标签样式) ---
    'scmGraph.historyItemHoverDefaultLabelForeground': palette.text.inverse,
    'scmGraph.historyItemHoverDefaultLabelBackground': palette.primary.main,
  };
};
