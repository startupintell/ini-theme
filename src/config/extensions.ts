import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Extensions (插件扩展视图)
// -----------------------------------------------------------------
export const extensionsConfig = (palette: ThemePalette) => {
  return {
    // --- Prominent Buttons ("Install" / "Reload" - 强调按钮) ---
    // 策略：这是整个视图里最重要的点击目标，必须醒目。
    'extensionButton.prominentBackground': palette.primary.main,
    'extensionButton.prominentForeground': palette.text.inverse, // 反色文字
    'extensionButton.prominentHoverBackground': palette.primary.hover,

    // --- Secondary Buttons ("Manage" / "Disable" - 次要按钮) ---
    // 策略：使用 Element 背景，低调处理，避免满屏都是亮色块。
    'extensionButton.background': palette.primary.main, // 或者 palette.bg.element
    'extensionButton.foreground': palette.text.inverse,
    'extensionButton.hoverBackground': palette.primary.hover,

    // 按钮中间的分割线 (如下拉菜单箭头)
    'extensionButton.separator': palette.primary.main + '50', // 或者 palette.primary.main + '50'

    // --- Badges (Remote / SSH 标记) ---
    // 场景：在 WSL 或 SSH 模式下，显示"安装在远程"的蓝色角标
    'extensionBadge.remoteBackground': palette.primary.main,
    'extensionBadge.remoteForeground': palette.text.inverse,

    // --- Status Icons (状态图标) ---

    // 评分星星 (Star): 毫无疑问应该是黄色/金色
    'extensionIcon.starForeground': palette.state.warning,
    'mcpIcon.starForeground': palette.state.warning, // MCP 协议相关的星星

    // 已验证厂商 (Verified Publisher): 类似推特/GitHub 的蓝V
    'extensionIcon.verifiedForeground': palette.primary.main,

    // 预发布版本 (Pre-release): 提示这是测试版
    'extensionIcon.preReleaseForeground': palette.state.warning, // 警告色，提示不稳定

    // 赞助 (Sponsor): 爱心图标
    'extensionIcon.sponsorForeground': palette.state.error, // 红色/粉色

    // 私有插件 (Private)
    'extensionIcon.privateForeground': palette.text.muted,
  };
};
