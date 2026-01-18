import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Debug Colors (调试视图与工具栏)
// -----------------------------------------------------------------
export const debugConfig = (palette: ThemePalette) => {
  return {
    // --- Toolbar (悬浮调试控制条 - 播放/暂停/步进) ---
    // 这是一个浮在编辑器顶部的工具条
    // 背景：使用 Element 层级，把它"托"起来
    'debugToolBar.background': palette.bg.element,
    // 边框：细微轮廓
    'debugToolBar.border': palette.border.muted,

    // --- Editor Highlights (编辑器内的行高亮) ---

    // Top Stack Frame: 当前程序暂停的那一行 (最重要!)
    // 策略：使用 Warning 色 (黄色) 的低透明度背景，模拟高亮笔效果
    'editor.stackFrameHighlightBackground': palette.state.warning + '20', // 20% 黄色

    // Focused Stack Frame: 你在调用堆栈里点击了其他层级，想看看之前的状态
    // 策略：使用更淡的黄色，或者绿色，区分"真实当前行"和"查看行"
    'editor.focusedStackFrameHighlightBackground': palette.state.success + '20',

    // --- Inline Values (行内变量值预览) ---
    // 场景：代码右侧显示的 "x = 5"
    // 策略：类似 Ghost Text，不应干扰代码阅读
    'editor.inlineValuesForeground': palette.text.subtle + '80', // 半透明文字
    'editor.inlineValuesBackground': palette.bg.element + '40', // 胶囊背景

    // --- Call Stack View (调用堆栈面板) ---

    // Exception Label: "Paused on exception"
    'debugView.exceptionLabelForeground': palette.text.inverse,
    'debugView.exceptionLabelBackground': palette.state.error, // 红色背景强调崩溃

    // State Label: "Running", "Paused"
    'debugView.stateLabelForeground': palette.text.inverse,
    'debugView.stateLabelBackground': palette.state.warning, // 黄色/橙色背景

    // Value Changed: 变量值发生变化时的高亮
    'debugView.valueChangedHighlight': palette.primary.main, // 蓝色高亮，表示"Update"

    // --- Token Syntax Highlighting (变量面板里的颜色) ---
    // 让变量面板看起来像代码一样色彩丰富

    'debugTokenExpression.name': palette.primary.main, // 变量名 (蓝色)
    'debugTokenExpression.value': palette.text.muted, // 变量值 (灰色)
    'debugTokenExpression.string': palette.state.success, // 字符串 (绿色)
    'debugTokenExpression.number': palette.state.warning, // 数字 (橙色/黄色)
    'debugTokenExpression.boolean': palette.primary.main, // 布尔值 (蓝色/紫色)
    'debugTokenExpression.type': palette.state.info, // 类型 (浅蓝)
    'debugTokenExpression.error': palette.state.error, // 错误 (红色)
  };
};
