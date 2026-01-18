import {
  actionColorsConfig,
  actionBarConfig,
  activityBarConfig,
  agentConfig,
  badgeConfig,
  bannerColorsConfig,
  baseColorsConfig,
  breadcrumbsConfig,
  buttonControlConfig,
  chartConfig,
  chatConfig,
  commentsViewConfig,
  commandCenterConfig,
  debugConfig,
  debugIconConfig,
  diffEditorConfig,
  dropdownConfig,
  editorConfig,
  editorGroupTabsConfig,
  editorWidgetConfig,
  extensionsConfig,
  gaugeConfig,
  gitConfig,
  inlineChatConfig,
  inputConfig,
  interactiveConfig,
  keybindingLabelConfig,
  keybindingTableConfig,
  listTreeConfig,
  markdownConfig,
  menuBarConfig,
  mergeConflictConfig,
  minimapConfig,
  notebookConfig,
  notificationConfig,
  panelConfig,
  peekViewConfig,
  profilesConfig,
  progressBarConfig,
  quickPickerConfig,
  scmGraphConfig,
  scrollbarConfig,
  settingsEditorConfig,
  sideBarConfig,
  snippetsConfig,
  statusBarConfig,
  symbolIconConfig,
  terminalConfig,
  testingConfig,
  textColorsConfig,
  titleBarConfig,
  welcomePageConfig,
  windowBorderConfig,
} from './config';
import { syntaxConfig } from './config/syntax';
import { getPalette } from './palette';
import { ThemeConfig } from './type';

/**
 * 获取主题名称
 * @param type 主题变体类型 ('light' 或 'dark')
 * @returns 主题名称
 */
const getThemeName = (type: 'light' | 'dark') => {
  return `ini ${type === 'light' ? 'Light' : 'Dark'}`;
};

/**
 * 生成 VS Code 主题配置对象
 * @param type 主题变体类型 ('light' 或 'dark')
 * @param config 主题自定义选项
 */
export const getTheme = (type: 'light' | 'dark', config: ThemeConfig = {}) => {
  // 获取主题名称
  const name = getThemeName(type);

  // 获取动态调色板
  const palette = getPalette(config)[type];

  // 获取语法高度颜色 (传入配置以支持斜体等)
  const syntax = syntaxConfig(palette, config);

  return {
    $schema: 'vscode://schemas/color-theme',
    name,
    type,
    semanticHighlighting: true,
    tokenColors: syntax.tokenColors,
    semanticTokenColors: syntax.semanticTokenColors,
    colors: {
      // 基础颜色配置
      ...baseColorsConfig(palette),

      // 窗口边框配置
      ...windowBorderConfig(palette),

      // 文本颜色配置
      ...textColorsConfig(palette),

      // 操作颜色配置
      ...actionColorsConfig(palette),

      // 操作栏配置
      ...actionBarConfig(palette),

      // 仪表盘配置
      ...gaugeConfig(palette),

      // 按钮和控件颜色配置
      ...buttonControlConfig(palette),

      // 下拉菜单颜色配置
      ...dropdownConfig(palette),

      // 输入框颜色配置
      ...inputConfig(palette),

      // 滚动条颜色配置
      ...scrollbarConfig(palette),

      // 徽章颜色配置
      ...badgeConfig(palette),

      // 进度条颜色配置
      ...progressBarConfig(palette),

      // 列表和树控件颜色配置
      ...listTreeConfig(palette),

      // 活动栏配置
      ...activityBarConfig(palette),

      // 配置文件与设置齿轮角标配置
      ...profilesConfig(palette),

      // 侧边栏配置
      ...sideBarConfig(palette),

      // Minimap 配置
      ...minimapConfig(palette),

      // 编辑器组与标签页配置
      ...editorGroupTabsConfig(palette),

      // 编辑器配置
      ...editorConfig(palette),

      // 差异对比编辑器配置
      ...diffEditorConfig(palette),

      // Git 配置
      ...gitConfig(palette),

      // SCM 图谱配置
      ...scmGraphConfig(palette),

      // 设置编辑器配置
      ...settingsEditorConfig(palette),

      // 面包屑配置
      ...breadcrumbsConfig(palette),

      // 代码片段配置
      ...snippetsConfig(palette),

      // 符号图标配置
      ...symbolIconConfig(palette),

      // Notebook 配置
      ...notebookConfig(palette),

      // 聊天配置
      ...chatConfig(palette),

      // 内联聊天配置
      ...inlineChatConfig(palette),

      // 交互式窗口配置
      ...interactiveConfig(palette),

      // 编辑器小部件配置
      ...editorWidgetConfig(palette),

      // Peek View 配置
      ...peekViewConfig(palette),

      // 合并冲突配置
      ...mergeConflictConfig(palette),

      // 面板配置
      ...panelConfig(palette),

      // 状态栏配置
      ...statusBarConfig(palette),

      // Markdown 配置
      ...markdownConfig(palette),

      // Agent 配置
      ...agentConfig(palette),

      // 图表配置
      ...chartConfig(palette),

      // 评论视图配置
      ...commentsViewConfig(palette),

      // 终端配置
      ...terminalConfig(palette),

      // 调试配置
      ...debugConfig(palette),

      // 调试图标配置
      ...debugIconConfig(palette),

      // 测试配置
      ...testingConfig(palette),

      // 标题栏配置
      ...titleBarConfig(palette),

      // 菜单栏配置
      ...menuBarConfig(palette),

      // 控制中心配置
      ...commandCenterConfig(palette),

      // 通知中心配置
      ...notificationConfig(palette),

      // 横幅配置
      ...bannerColorsConfig(palette),

      // 扩展配置
      ...extensionsConfig(palette),

      // 快速选择
      ...quickPickerConfig(palette),

      // 欢迎页配置
      ...welcomePageConfig(palette),

      // 快捷键标签配置
      ...keybindingLabelConfig(palette),

      // 快捷键表格配置
      ...keybindingTableConfig(palette),
    },
  };
};
