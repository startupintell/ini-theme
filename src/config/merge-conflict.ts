import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Merge Conflicts (合并冲突 - Inline & 3-Way Editor)
// -----------------------------------------------------------------
export const mergeConflictConfig = (palette: ThemePalette) => {
  return {
    // --- 1. Inline Merge Conflicts (传统内联视图) ---
    // 界面中出现 <<<<<<< HEAD 的情况

    // Current (HEAD / 本地): 绿色
    'merge.currentHeaderBackground': palette.state.success + '40', // 标题背景
    'merge.currentContentBackground': palette.state.success + '15', // 内容背景

    // Incoming (Remote / 远程): 主色 (通常是蓝色)
    'merge.incomingHeaderBackground': palette.primary.main + '40',
    'merge.incomingContentBackground': palette.primary.main + '15',

    // Common (Ancestor / 共同祖先 - 较少见): 灰色
    'merge.commonHeaderBackground': palette.bg.element + '60',
    'merge.commonContentBackground': palette.bg.element + '20',

    // 边框: 现代风格通常去掉边框，或者设为透明
    'merge.border': palette.transparent,

    // --- 2. Overview Ruler (右侧滚动条指示点) ---
    // 必须是不透明颜色
    'editorOverviewRuler.currentContentForeground': palette.state.success,
    'editorOverviewRuler.incomingContentForeground': palette.primary.main,
    'editorOverviewRuler.commonContentForeground': palette.text.muted,
    // 解决后的注释状态
    'editorOverviewRuler.commentForeground': palette.text.normal,
    'editorOverviewRuler.commentUnresolvedForeground': palette.state.warning,

    // --- 3. Merge Editor (新的 3栏合并编辑器) ---

    // --- Changes (一般变更) ---
    // 基础变更背景 (类似 Diff)
    'mergeEditor.change.background': palette.bg.element + '30',
    'mergeEditor.change.word.background': palette.bg.element + '50', // 单词级高亮更明显
    // Base (底部基础视图) 的变更
    'mergeEditor.changeBase.background': palette.state.warning + '20',
    'mergeEditor.changeBase.word.background': palette.state.warning + '40',

    // --- Conflicts Status (冲突状态 - 核心) ---

    // Unhandled (未处理): 必须非常醒目!
    // Unfocused (没点中): 黄色边框警告
    'mergeEditor.conflict.unhandledUnfocused.border': palette.state.warning,
    // Focused (当前正在修): 红色边框或高亮主色
    'mergeEditor.conflict.unhandledFocused.border': palette.state.error,

    // Handled (已解决): 变淡或变绿
    'mergeEditor.conflict.handledUnfocused.border': palette.border.subtle, // 已解决就退居幕后
    'mergeEditor.conflict.handledFocused.border': palette.state.success, // 选中已解决的块

    // --- Layout & Decorations ---
    // 装饰器背景 (Input 1 vs Input 2)
    'mergeEditor.conflict.input1.background': palette.primary.main + '20', // Incoming
    'mergeEditor.conflict.input2.background': palette.state.success + '20', // Current

    // "Conflicting Lines" 文本背景
    'mergeEditor.conflictingLines.background': palette.state.error + '20',

    // Minimap (小地图)
    'mergeEditor.conflict.handled.minimapOverViewRuler': palette.state.success,
    'mergeEditor.conflict.unhandled.minimapOverViewRuler': palette.state.warning,
  };
};
