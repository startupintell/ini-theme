import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Markdown Alerts (Markdown 预览里的提示块 > [!NOTE])
// -----------------------------------------------------------------
export const markdownConfig = (palette: ThemePalette) => {
  return {
    // Note: 蓝色 (通用信息)
    'markdownAlert.note.foreground': palette.state.info,
    // 或者 palette.primary.main

    // Tip: 绿色 (帮助/技巧)
    'markdownAlert.tip.foreground': palette.state.success,

    // Important: 紫色 (强调)
    // 如果你的主题没有紫色，可以用主色或更深的蓝色
    'markdownAlert.important.foreground': palette.secondary.main || '#a855f7',

    // Warning: 黄色 (警告)
    'markdownAlert.warning.foreground': palette.state.warning,

    // Caution: 红色 (危险/负面)
    'markdownAlert.caution.foreground': palette.state.error,
  };
};
