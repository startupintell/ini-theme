import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Comments View (评论列表视图 - 通常用于 GitHub PR 插件)
// -----------------------------------------------------------------
export const commentsViewConfig = (palette: ThemePalette) => {
  return {
    // --- Unresolved (未解决的评论) ---
    // 状态：Actionable (需要处理)
    // 策略：使用主色或 Warning 色，提示用户"这里还有活没干完"
    'commentsView.unresolvedIcon': palette.primary.main, // 或者 palette.state.warning

    // --- Resolved (已解决的评论) ---
    // 状态：Done (完成)
    // 策略：使用 Muted，降低视觉权重。既然解决了，就不需要抢眼了。
    'commentsView.resolvedIcon': palette.text.muted, // 或者 palette.state.success
  };
};
