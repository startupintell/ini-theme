import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Testing (测试 Explorer & 代码覆盖率)
// -----------------------------------------------------------------
export const testingConfig = (palette: ThemePalette) => {
  return {
    // --- Icons (状态图标) ---
    // 运行按钮：通常在 Gutter 里的那个三角形
    'testing.runAction': palette.primary.main,

    // 核心状态色
    'testing.iconPassed': palette.state.success,
    'testing.iconFailed': palette.state.error,
    'testing.iconErrored': palette.state.error,
    'testing.iconQueued': palette.state.warning, // 等待中
    'testing.iconSkipped': palette.text.muted, // 跳过
    'testing.iconUnset': palette.text.subtle, // 未运行

    // --- Retired Icons (过期/陈旧状态) ---
    // 场景：代码改了，测试还没重跑。
    // 策略：使用对应颜色的 50% 透明度
    'testing.iconPassed.retired': palette.state.success + '80',
    'testing.iconFailed.retired': palette.state.error + '80',
    'testing.iconErrored.retired': palette.state.error + '80',
    'testing.iconQueued.retired': palette.state.warning + '80',
    'testing.iconSkipped.retired': palette.text.muted + '80',
    'testing.iconUnset.retired': palette.text.subtle + '80',

    // --- Peek View (测试结果详情弹窗) ---
    // 当你点击报错信息时弹出的那个窗口
    // 建议：使用 Error 色作为边框，因为通常你只会去 Peek 失败的测试
    'testing.peekBorder': palette.state.error,
    'testing.peekHeaderBackground': palette.bg.element + '50', // 头部背景

    // 消息详情的 Peek View
    'testing.messagePeekBorder': palette.state.info,
    'testing.messagePeekHeaderBackground': palette.bg.element + '50',

    // --- Inline Messages (编辑器内的报错装饰器) ---
    // 行内报错文字
    'testing.message.error.decorationForeground': palette.state.error,
    // 行内报错左侧的竖线 (Gutter Line)
    'testing.message.error.lineBackground': palette.state.error,
    // Info 消息
    'testing.message.info.decorationForeground': palette.text.muted,
    'testing.message.info.lineBackground': palette.primary.main,

    // --- Badges (行内报错的具体徽章) ---
    // 比如显示 "AssertionError" 的那个小胶囊
    'testing.message.error.badgeBackground': palette.state.error,
    'testing.message.error.badgeForeground': palette.text.inverse,
    'testing.message.error.badgeBorder': palette.transparent,

    // --- Coverage (代码覆盖率染色) ---
    // 警告：这里的背景色必须非常淡，否则会瞎眼。

    // Covered (已覆盖): 极淡的绿色背景
    'testing.coveredBackground': palette.state.success + '15', // 15% 透明度
    'testing.coveredBorder': palette.transparent, // 不要边框，太乱
    'testing.coveredGutterBackground': palette.state.success + '60', // Gutter 可以稍微深一点

    // Uncovered (未覆盖): 极淡的红色背景
    'testing.uncoveredBackground': palette.state.error + '15',
    'testing.uncoveredBorder': palette.transparent,
    'testing.uncoveredGutterBackground': palette.state.error + '60',

    // Uncovered Branch (未覆盖的分支): 通常是黄色 or 紫色
    'testing.uncoveredBranchBackground': palette.bg.element,

    // Coverage Count Badge (覆盖率统计数字)
    'testing.coverCountBadgeBackground': palette.bg.active,
    'testing.coverCountBadgeForeground': palette.text.normal,
  };
};
