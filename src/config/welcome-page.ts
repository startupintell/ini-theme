import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Welcome Page (欢迎页 / Get Started)
// -----------------------------------------------------------------
export const welcomePageConfig = (palette: ThemePalette) => {
  return {
    // --- Background (整体背景) ---
    // 策略：与 Editor 背景一致，提供沉浸感。
    // 如果想要"画框"感，也可以用 bg.app。
    'welcomePage.background': palette.bg.panel,

    // --- Tiles (操作卡片：New File, Open Folder...) ---
    // 背景：使用 Element 层级，看起来像一张张卡片
    'welcomePage.tileBackground': palette.bg.element,
    // 悬停：变亮/交互反馈
    'welcomePage.tileHoverBackground': palette.bg.active,
    // 边框：细微轮廓
    'welcomePage.tileBorder': palette.border.muted,

    // --- Progress Bars (Walkthrough 进度条) ---
    // 进度条的前景 (已完成部分)：主色
    'welcomePage.progress.foreground': palette.primary.main,
    // 进度条的背景 (未完成轨道)：深灰
    'welcomePage.progress.background': palette.bg.active,

    // --- Walkthrough Elements (引导页元素) ---
    // 步骤标题
    'walkthrough.stepTitle.foreground': palette.text.normal,

    // 嵌入式编辑器背景
    // 场景：在引导里演示"如何修改设置"时，会嵌一个小编辑器
    // 策略：使用 bg.input (深坑)，让它看起来像是一个"代码块"
    'walkThrough.embeddedEditorBackground': palette.bg.input,
  };
};
