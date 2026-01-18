import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Menu Bar & Context Menu (顶部菜单栏 & 右键菜单)
// -----------------------------------------------------------------
export const menuBarConfig = (palette: ThemePalette) => {
  return {
    // --- Top Horizontal Menu Bar (顶栏上的 File Edit Selection...) ---
    // 鼠标悬停在 "File" 上时的背景：轻微的高亮块
    'menubar.selectionBackground': palette.bg.element,
    'menubar.selectionForeground': palette.text.normal,
    'menubar.selectionBorder': palette.transparent, // 现代风格去边框

    // --- Dropdowns & Context Menus (下拉/右键菜单容器) ---
    // 背景：使用 Element 层级，让它浮在编辑器上面
    'menu.background': palette.bg.element,
    // 边框：细边框定义轮廓
    'menu.border': palette.border.muted,
    // 文字：正常
    'menu.foreground': palette.text.normal,
    // 分割线 (Separator)：菜单项之间的横线
    'menu.separatorBackground': palette.border.subtle,

    // --- Menu Item Selection (菜单项选中/悬停态) ---
    // 策略：为了与 List (文件列表) 和 Command Palette 保持一致，
    // 这里推荐使用 Solid Primary (实心主色)。
    'menu.selectionBackground': palette.primary.main,
    'menu.selectionForeground': palette.text.inverse, // 反色文字
    'menu.selectionBorder': palette.transparent,
  };
};
