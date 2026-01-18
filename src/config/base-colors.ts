import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Base Colors (全局基础)
// -----------------------------------------------------------------
export const baseColorsConfig = (palette: ThemePalette) => {
  return {
    // 聚焦边框：使用主色，确保用户知道当前焦点在哪里
    focusBorder: palette.primary.main,

    // 全局默认前景色：主要文字颜色
    foreground: palette.text.normal,

    // 禁用状态文字：使用最淡的文字色 (subtle)
    disabledForeground: palette.text.subtle,

    // 组件 (如查找/替换框) 的边框
    'widget.border': palette.border.muted + '85',

    // 组件阴影：建议直接用半透明黑，无论明暗主题这都是最自然的
    // 如果想要平扁化设计(Flat Design)，可以设为 tokens.transparent
    'widget.shadow': palette.shadow.main,

    // 文本选区背景 (非编辑器内，而是侧边栏输入框等地方)
    // 使用主色的 Surface (极淡背景)
    'selection.background': palette.primary.surface,

    // 描述性文字：使用次要文字色 (muted)
    descriptionForeground: palette.text.muted,

    // 全局错误文字
    errorForeground: palette.state.error,

    // 图标默认颜色：通常使用次要文字色，避免喧宾夺主
    'icon.foreground': palette.text.muted,

    // 拖动分割线 (Sash) 悬停时：使用主色反馈
    'sash.hoverBorder': palette.primary.main,
  };
};
