import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Settings Editor (图形化设置界面 - Ctrl+,)
// -----------------------------------------------------------------
export const settingsEditorConfig = (palette: ThemePalette) => {
  return {
    // --- Layout & Headers (布局与标题) ---
    // 分组标题 (如 "Text Editor", "Workbench")
    'settings.headerForeground': palette.text.normal,
    'settings.settingsHeaderHoverForeground': palette.primary.main, // 悬停变色
    'settings.headerBorder': palette.border.subtle, // 标题下方的分割线
    'settings.sashBorder': palette.border.subtle, // 左右分栏的拖拽线

    // --- Rows (设置项行) ---
    // 鼠标悬停时的背景
    'settings.rowHoverBackground': palette.transparent,

    // 键盘聚焦/点击时的背景
    'settings.focusedRowBackground': palette.transparent,

    // 聚焦时的上下边框 (通常设为透明，仅靠背景区分即可，现代风格不画线)
    'settings.focusedRowBorder': palette.transparent,

    // --- Modified Indicator (已修改指示器) ---
    // 位于设置项左侧的竖线，提示"你改过这个设置"
    // 策略：使用主色，表示"这是你的自定义配置"
    'settings.modifiedItemIndicator': palette.primary.main, // 或 palette.state.info

    // --- Inputs (输入框 - Text & Number) ---
    // 策略：与全局 input.* 保持一致

    // 文本框
    'settings.textInputBackground': palette.bg.input,
    'settings.textInputForeground': palette.text.normal,
    'settings.textInputBorder': palette.border.muted + '80',

    // 数字框 (VS Code 区分了数字和文本，但在主题里通常一样)
    'settings.numberInputBackground': palette.bg.input,
    'settings.numberInputForeground': palette.text.normal,
    'settings.numberInputBorder': palette.border.muted + '80',

    // --- Dropdowns (下拉菜单) ---
    // 策略：与全局 dropdown.* 保持一致
    'settings.dropdownBackground': palette.bg.input, // 或 bg.element
    'settings.dropdownForeground': palette.text.normal,
    'settings.dropdownBorder': palette.border.muted + '80',
    'settings.dropdownListBorder': palette.border.muted + '80', // 展开列表的边框

    // --- Checkboxes (复选框) ---
    // 策略：与全局 checkbox.* 保持一致
    'settings.checkboxBackground': palette.bg.input, // 未选中时的底色
    'settings.checkboxForeground': palette.text.normal, // 选中时的打钩颜色/填充色
    'settings.checkboxBorder': palette.text.normal, // 边框
  };
};
