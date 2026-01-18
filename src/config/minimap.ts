import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Minimap (代码小地图)
// -----------------------------------------------------------------
export const minimapConfig = (palette: ThemePalette) => {
  return {
    // --- Background (背景) ---
    // 关键点：必须与 editor.background (bg.panel) 一致。
    // 这样 Minimap 看起来就是浮在代码右侧的，而不是被割裂出去的一块区域。
    'minimap.background': palette.bg.panel,

    // --- Slider (当前视口滑块) ---
    // 使用 "Ghost" 风格：极低透明度的主色，平时几乎隐形。
    'minimapSlider.background': palette.primary.main + '15', // 约 10% 不透明度
    'minimapSlider.hoverBackground': palette.primary.main + '25',
    'minimapSlider.activeBackground': palette.primary.main + '40',

    // --- Highlights (状态高亮) ---
    // 搜索匹配：使用醒目的主色
    'minimap.findMatchHighlight': palette.primary.main,

    // 选区高亮：与编辑器内的选区一致 (Surface)
    'minimap.selectionHighlight': palette.primary.surface,

    // 相同词高亮 (比如选中了一个变量，其他同名变量的高亮)
    // 可以稍微比 selectionHighlight 亮一点点，或者保持一致
    'minimap.selectionOccurrenceHighlight': palette.primary.surface,

    // --- Diagnostics (诊断状态) ---
    // 错误/警告/信息在小地图上的颜色点
    'minimap.errorHighlight': palette.state.error,
    'minimap.warningHighlight': palette.state.warning,
    // Info 通常没有定义在 state 里，可以用 primary 或 sky 色
    // 假设 palette.state.info 存在，或者回退到 primary
    'minimap.infoHighlight': palette.primary.main,

    // --- Gutter / Git Status (Git 状态线) ---
    // 显示在小地图边缘的 Git 变更指示器
    'minimapGutter.addedBackground': palette.state.success,
    'minimapGutter.modifiedBackground': palette.state.warning,
    'minimapGutter.deletedBackground': palette.state.error,

    // --- AI & Copilot ---
    // Copilot 正在编辑的区域
    'minimap.chatEditHighlight': palette.primary.main,
    // Inline Chat 插入的内容
    'editorMinimap.inlineChatInserted': palette.state.success,
  };
};
