import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Peek View (快速查看引用/定义)
// -----------------------------------------------------------------
export const peekViewConfig = (palette: ThemePalette) => {
  return {
    // --- Container & Border (整体容器) ---
    // 边框：这是 Peek View 最重要的视觉特征。
    // 使用主色，让整个窗口像被主色"包裹"住一样，非常醒目。
    'peekView.border': palette.primary.main,

    // --- Title Area (顶部标题) ---
    // 背景：通常与 Result 列表背景一致
    'peekViewTitle.background': palette.bg.element,
    // 标题文字 (文件名)
    'peekViewTitleLabel.foreground': palette.text.normal,
    // 描述文字 (路径)
    'peekViewTitleDescription.foreground': palette.text.subtle,

    // --- Result List (左侧：引用列表) ---
    // 背景：使用 Element 层级
    'peekViewResult.background': palette.bg.element,
    // 文件名
    'peekViewResult.fileForeground': palette.text.normal,
    // 代码行号/预览文字
    'peekViewResult.lineForeground': palette.text.muted,

    // 选中项：主色高亮，强调当前选中的是哪一个引用
    'peekViewResult.selectionBackground': palette.primary.main, // 或者 palette.secondary.main
    'peekViewResult.selectionForeground': palette.text.inverse,

    // 搜索匹配高亮 (在列表中)
    'peekViewResult.matchHighlightBackground': palette.state.warning + '40',

    // --- Editor Area (右侧：代码预览) ---
    // 背景：建议使用比主编辑器更深一点的颜色 (bg.input)，制造"暗房"效果
    // 这样用户的注意力会自然集中在这个小窗口里的代码上
    'peekViewEditor.background': palette.bg.input,
    'peekViewEditorGutter.background': palette.bg.input, // 必须与编辑器背景一致

    // 匹配高亮 (代码中)
    // 这是你查找的那个变量/函数名
    'peekViewEditor.matchHighlightBackground': palette.primary.surface, // 或 primary.main + '40'
    'peekViewEditor.matchHighlightBorder': palette.transparent,

    // --- Sticky Scroll (Peek View 内的粘性滚动) ---
    // 保持与 Peek Editor 背景一致
    'peekViewEditorStickyScroll.background': palette.bg.input,
    'peekViewEditorStickyScrollGutter.background': palette.bg.input,
  };
};
