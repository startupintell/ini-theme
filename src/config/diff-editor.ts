import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Diff Editor (差异对比编辑器)
// -----------------------------------------------------------------
export const diffEditorConfig = (palette: ThemePalette) => {
  return {
    // --- Inserted Text (新增内容 - 绿色) ---
    // 单词级别的改动：透明度稍高，强调"具体改了什么"
    'diffEditor.insertedTextBackground': palette.state.success + '30', // 20%~30% opacity
    'diffEditor.insertedTextBorder': palette.transparent, // 现代风格去边框

    // 整行级别的改动：透明度极低，作为背景板
    'diffEditor.insertedLineBackground': palette.state.success + '15', // 10%~15% opacity
    // Gutter (行号区域) 的背景
    'diffEditorGutter.insertedLineBackground': palette.transparent, // 或者 palette.state.success + '10'

    // --- Removed Text (删除内容 - 红色) ---
    // 单词级别
    'diffEditor.removedTextBackground': palette.state.error + '30',
    'diffEditor.removedTextBorder': palette.transparent,

    // 整行级别
    'diffEditor.removedLineBackground': palette.state.error + '15',
    'diffEditorGutter.removedLineBackground': palette.transparent,

    // --- Layout & Structure (布局结构) ---
    // 两个编辑器中间的分割线
    'diffEditor.border': palette.border.subtle,

    // 对角线填充：当一边文件比另一边长时，空出来的区域
    'diffEditor.diagonalFill': palette.bg.element + '50', // 半透明条纹

    // --- Overview Ruler (右侧滚动条上的指示点) ---
    // 必须是不透明的颜色，否则在滚动条上看不清
    'diffEditorOverview.insertedForeground': palette.state.success,
    'diffEditorOverview.removedForeground': palette.state.error,

    // --- Unchanged Regions (折叠的未变动代码块) ---
    // VS Code 新功能：可以折叠未修改的代码
    'diffEditor.unchangedRegionBackground': palette.bg.app, // 看起来像"凹"进去的区域
    'diffEditor.unchangedRegionForeground': palette.text.muted,
    'diffEditor.unchangedCodeBackground': palette.bg.element + '40', // 未变动代码的背景（少用）
    'diffEditor.unchangedRegionShadow': palette.shadow.main, // 折叠块的阴影

    // --- Moved Text (代码移动/重构检测) ---
    // 场景：你把一个函数从第10行移到了第100行
    'diffEditor.move.border': palette.text.muted + '50', // 弱提示
    'diffEditor.moveActive.border': palette.primary.main, // 强提示 (当前选中的移动块)

    // --- Multi-file Diff Editor (多文件 Diff 视图) ---
    // 场景：在一个 Tab 里查看所有 Git 变更
    'multiDiffEditor.background': palette.bg.app, // 容器背景
    'multiDiffEditor.headerBackground': palette.bg.panel, // 文件名标题头
    'multiDiffEditor.border': palette.border.subtle, // 文件之间的分割线
  };
};
