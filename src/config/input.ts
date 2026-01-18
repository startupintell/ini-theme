import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Input Control (输入框、搜索框、验证状态)
// -----------------------------------------------------------------
export const inputConfig = (palette: ThemePalette) => {
  return {
    // --- Basic Input Styles (基础外观) ---
    // 背景：使用 input 层级 (通常是 neutral[950] 或带透明度的黑)，形成视觉凹陷
    'input.background': palette.bg.input,

    // 边框：默认使用 muted 边框
    'input.border': palette.border.muted,

    // 文字：正文色
    'input.foreground': palette.text.normal,

    // 占位符：必须使用 subtle/muted 颜色，区分“提示”和“内容”
    'input.placeholderForeground': palette.text.subtle,

    // --- Input Options (输入框内的开关：Aa, .*, \b) ---
    // 激活态背景：使用主色的 Surface (极淡)，避免干扰文字阅读
    'inputOption.activeBackground': palette.primary.surface,

    // 激活态边框：使用主色描边，这是最清晰的状态指示
    'inputOption.activeBorder': palette.primary.main,

    // 激活态图标：变为主色
    'inputOption.activeForeground': palette.primary.main, // 或者 palette.primary.text

    // 悬停态：使用通用的 Element hover 背景
    'inputOption.hoverBackground': palette.bg.element,

    // --- Validation: Error (错误 - 如无效的正则) ---
    // 背景：淡红色 (Error Color + Transparency)
    'inputValidation.errorBackground': palette.state.errorBg,
    // 文字：深红色
    'inputValidation.errorForeground': palette.state.error,
    // 边框：实心红
    'inputValidation.errorBorder': palette.state.error,

    // --- Validation: Warning (警告 - 如搜索结果过多) ---
    // 背景：淡琥珀色 (手动拼接透明度，或者在 palette 中定义 warningBg)
    'inputValidation.warningBackground': palette.state.warning + '30',
    'inputValidation.warningForeground': palette.state.warning,
    'inputValidation.warningBorder': palette.state.warning,

    // --- Validation: Info (信息) ---
    // 背景：通常使用 Primary Surface (蓝色系)
    'inputValidation.infoBackground': palette.primary.surface,
    'inputValidation.infoForeground': palette.primary.main,
    'inputValidation.infoBorder': palette.primary.main,
  };
};
