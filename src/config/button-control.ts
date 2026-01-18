import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Button & Controls (按钮、复选框、单选框)
// -----------------------------------------------------------------
export const buttonControlConfig = (palette: ThemePalette) => {
  return {
    // --- Primary Button (主要按钮) ---
    // 提交、确定等核心操作
    'button.background': palette.primary.main,
    'button.foreground': palette.text.inverse,
    'button.border': palette.transparent, // 现代扁平风格通常无边框
    'button.hoverBackground': palette.primary.hover,

    // 分割线：用于拆分按钮（如 Git Commit 下拉箭头），使用悬停色作为自然的分割
    'button.separator': palette.primary.hover,

    // --- Secondary Button (次要按钮) ---
    // 取消、关闭等操作，使用中性色
    'button.secondaryBackground': palette.secondary.main,
    'button.secondaryForeground': palette.secondary.text,
    'button.secondaryHoverBackground': palette.secondary.hover,

    // --- Checkbox (复选框) ---
    // 背景：使用输入框背景 (凹陷感)
    'checkbox.background': palette.bg.input,
    // 勾选图标：使用主色或文本色
    'checkbox.foreground': palette.primary.main,
    // 边框：组件通用边框
    'checkbox.border': palette.border.muted,

    // 禁用状态
    'checkbox.disabled.background': palette.bg.active,
    'checkbox.disabled.foreground': palette.text.subtle,

    // 列表选中项中的复选框 (特殊场景)
    // 此时背景通常已经高亮，所以复选框背景需要适应
    'checkbox.selectBackground': palette.bg.element,
    'checkbox.selectBorder': palette.text.normal,

    // --- Radio (单选框) ---
    // 激活状态 (选中)
    'radio.activeBackground': palette.primary.main, // 选中变成实心主色圆
    'radio.activeForeground': palette.text.inverse, // 内部的圆点变成反色(白)
    'radio.activeBorder': palette.primary.main, // 边框也变主色

    // 未激活状态 (未选中)
    'radio.inactiveBackground': palette.bg.input, // 像输入框一样的空心圆
    'radio.inactiveForeground': palette.text.muted, // 内部无点，或灰色点
    'radio.inactiveBorder': palette.border.muted, // 灰色边框
    'radio.inactiveHoverBackground': palette.bg.element, // 悬停反馈
  };
};
