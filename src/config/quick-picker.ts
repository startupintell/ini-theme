import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Quick Picker (命令面板 / Quick Open - Cmd+P)
// -----------------------------------------------------------------
export const quickPickerConfig = (palette: ThemePalette) => {
  return {
    // --- Container (容器) ---
    // 背景：使用 Element 层级，把它从编辑器背景中"托"起来
    'quickInput.background': palette.text.inverse,

    // 文字：正常
    'quickInput.foreground': palette.text.normal,

    // 标题栏背景 (通常只有在多步输入时才明显)
    'quickInputTitle.background': palette.bg.element,

    // --- List Focus (选中项) ---
    // 策略：使用实心主色。在快速浏览列表时，蓝色条是最清晰的光标。
    'quickInputList.focusBackground': palette.bg.element,
    'quickInputList.focusForeground': palette.text.normal,
    'quickInputList.focusIconForeground': palette.text.normal,
  };
};
