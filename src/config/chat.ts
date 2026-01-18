import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Chat & Copilot (AI 对话窗口)
// -----------------------------------------------------------------
export const chatConfig = (palette: ThemePalette) => {
  return {
    // --- Request (用户的提问) ---
    // 整个输入区域的背景
    'chat.requestBackground': palette.bg.panel,
    // 输入区域的边框
    'chat.requestBorder': palette.border.subtle,

    // --- Request Bubble (用户消息气泡) ---
    // 现代风格：给用户的消息加一个淡淡的背景，与 AI 的回答区分开
    // 推荐：使用 Element 背景 (深灰)，或者 Primary Surface (淡蓝)
    'chat.requestBubbleBackground': palette.bg.element,
    'chat.requestBubbleHoverBackground': palette.bg.active,

    // 气泡内代码块的边框
    'chat.requestCodeBorder': palette.border.muted,

    // --- Slash Commands (指令标签 /fix /doc) ---
    // 类似于 Tag/Badge 的设计
    'chat.slashCommandBackground': palette.primary.surface, // 极淡的主色背景
    'chat.slashCommandForeground': palette.primary.main, // 主色文字

    // --- Avatars (头像) ---
    // AI 的头像背景通常用主色体现品牌感
    'chat.avatarBackground': palette.primary.main,
    'chat.avatarForeground': palette.text.inverse,

    // --- Inline Diff (聊天中的代码变更) ---
    // 必须与 Diff Editor 保持一致
    'chat.linesAddedForeground': palette.state.success,
    'chat.linesRemovedForeground': palette.state.error,

    // --- Edited FilesList (修改文件列表) ---
    // 当 Copilot 修改了文件，列表中显示的文件名颜色
    // 使用 Warning 色表示"已修改/未保存"的状态
    'chat.editedFileForeground': palette.state.warning,

    // --- Layout (布局) ---
    // 历史记录中的分割线
    'chat.checkpointSeparator': palette.border.subtle,
    // 管理界面的分割线
    'chatManagement.sashBorder': palette.border.subtle,
  };
};
