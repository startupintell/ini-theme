import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Notifications (右下角通知气泡 & 通知中心)
// -----------------------------------------------------------------
export const notificationConfig = (palette: ThemePalette) => {
  return {
    // --- Toasts (右下角弹窗) ---
    // 背景：使用 Element 层级，比编辑器背景亮/深一点，形成悬浮感
    'notifications.background': palette.bg.panel,
    // 文字：正常
    'notifications.foreground': palette.text.normal,
    // 边框：定义卡片轮廓
    'notificationToast.border': palette.border.muted,

    // --- Notification Center (通知中心列表) ---
    // 整个通知中心的边框
    'notificationCenter.border': palette.border.muted,

    // 顶部标题栏 (Header)
    // 建议：稍微加深一点背景，区分"标题"和"内容"
    'notificationCenterHeader.background': palette.bg.active, // 或者 palette.bg.element
    'notificationCenterHeader.foreground': palette.text.normal,

    // 通知之间的分割线 (列表视图中)
    'notifications.border': palette.border.subtle,

    // --- Content Details (内容细节) ---
    // 链接颜色：主色
    'notificationLink.foreground': palette.primary.main,

    // --- Status Icons (状态图标) ---
    // 必须与全局状态色保持一致
    'notificationsErrorIcon.foreground': palette.state.error,
    'notificationsWarningIcon.foreground': palette.state.warning,
    'notificationsInfoIcon.foreground': palette.primary.main,
  };
};
