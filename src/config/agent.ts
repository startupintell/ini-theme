import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Agent Session (AI 助手会话列表 - Copilot Chat)
// -----------------------------------------------------------------
export const agentConfig = (palette: ThemePalette) => {
  return {
    // --- Read Indicator (未读/更新指示器) ---
    // 场景：历史会话列表中，提示"这个会话有新回复"的小圆点
    // 策略：使用主色，醒目但不过分干扰
    'agentSessionReadIndicator.foreground': palette.primary.main,

    // --- Selected Badge Border (选中会话中的徽章边框) ---
    // 场景：当你点击了一个会话，里面显示的标签(Badge)的边框
    // 策略：通常不需要强边框，设为透明或极淡的颜色即可
    'agentSessionSelectedBadge.border': palette.border.subtle, // 或 transparent

    // 失焦状态 (Unfocused)
    'agentSessionSelectedUnfocusedBadge.border': palette.border.subtle,
  };
};
