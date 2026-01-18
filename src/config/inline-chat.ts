import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Inline Chat (Cmd+K 悬浮对话框)
// -----------------------------------------------------------------
export const inlineChatConfig = (palette: ThemePalette) => {
  return {
    // --- Container (悬浮窗口容器) ---
    // 背景：使用 Element 层级，把它从编辑器背景中"托"起来
    'inlineChat.background': palette.bg.element,
    // 边框：细微的边框定义轮廓
    'inlineChat.border': palette.border.muted,
    // 阴影：必须有阴影，否则在同色系代码背景上看不清边界
    'inlineChat.shadow': palette.shadow.strong, // 使用较重的阴影
    // 文字：正常
    'inlineChat.foreground': palette.text.normal,

    // --- Input Field (输入框) ---
    // 背景：使用 Input 层级 (深坑)，产生凹陷感
    'inlineChatInput.background': palette.bg.input,
    // 边框：默认边框
    'inlineChatInput.border': palette.border.subtle,
    // 聚焦边框：主色高亮
    'inlineChatInput.focusBorder': palette.primary.main,
    // 占位符
    'inlineChatInput.placeholderForeground': palette.text.subtle,

    // --- Inline Diff (输入框内的文本变更) ---
    // 场景：当你编辑你刚才输入的 Prompt 时显示的差异
    'inlineChatDiff.inserted': palette.state.success + '20', // 绿色背景
    'inlineChatDiff.removed': palette.state.error + '20', // 红色背景
  };
};
