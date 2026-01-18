import * as config from './config';
import { getPalette } from './palette';
import { ThemeConfig } from './type';

/**
 * Get theme name
 * @param type Theme variant type ('light' or 'dark')
 * @returns Theme name
 */
const getThemeName = (type: 'light' | 'dark') => {
  return `ini ${type === 'light' ? 'Light' : 'Dark'}`;
};

/**
 * Generate VS Code theme configuration object
 * @param type Theme variant type ('light' or 'dark')
 * @param config Theme customization options
 */
export const getTheme = (type: 'light' | 'dark', options: ThemeConfig = {}) => {
  // Get theme name
  const name = getThemeName(type);

  // Get dynamic palette
  const palette = getPalette(options)[type];

  // Get syntax highlight colors (pass configuration to support italics, etc.)
  const syntax = config.syntax(palette, options);

  return {
    $schema: 'vscode://schemas/color-theme',
    name,
    type,
    semanticHighlighting: true,
    tokenColors: syntax.tokenColors,
    semanticTokenColors: syntax.semanticTokenColors,
    colors: {
      // Base color configuration
      ...config.baseColors(palette),

      // Window border configuration
      ...config.windowBorder(palette),

      // Text color configuration
      ...config.textColors(palette),

      // Action color configuration
      ...config.actionColors(palette),

      // Action bar configuration
      ...config.actionBar(palette),

      // Gauge configuration
      ...config.gauge(palette),

      // Button and control color configuration
      ...config.buttonControl(palette),

      // Dropdown color configuration
      ...config.dropdown(palette),

      // Input color configuration
      ...config.input(palette),

      // Scrollbar color configuration
      ...config.scrollbar(palette),

      // Badge color configuration
      ...config.badge(palette),

      // Progress bar color configuration
      ...config.progressBar(palette),

      // List and tree control color configuration
      ...config.listTree(palette),

      // Activity bar configuration
      ...config.activityBar(palette),

      // Profiles and settings gear badge configuration
      ...config.profiles(palette),

      // Side bar configuration
      ...config.sideBar(palette),

      // Minimap configuration
      ...config.minimap(palette),

      // Editor groups and tabs configuration
      ...config.editorGroupTabs(palette),

      // Editor configuration
      ...config.editor(palette),

      // Diff editor configuration
      ...config.diffEditor(palette),

      // Git configuration
      ...config.git(palette),

      // SCM graph configuration
      ...config.scmGraph(palette),

      // Settings editor configuration
      ...config.settingsEditor(palette),

      // Breadcrumbs configuration
      ...config.breadcrumbs(palette),

      // Snippets configuration
      ...config.snippets(palette),

      // Symbol icon configuration
      ...config.symbolIcon(palette),

      // Notebook configuration
      ...config.notebook(palette),

      // Chat configuration
      ...config.chat(palette),

      // Inline chat configuration
      ...config.inlineChat(palette),

      // Interactive configuration
      ...config.interactive(palette),

      // Editor widget configuration
      ...config.editorWidget(palette),

      // Peek view configuration
      ...config.peekView(palette),

      // Merge conflict configuration
      ...config.mergeConflict(palette),

      // Panel configuration
      ...config.panel(palette),

      // Status bar configuration
      ...config.statusBar(palette),

      // Markdown configuration
      ...config.markdown(palette),

      // Agent configuration
      ...config.agent(palette),

      // Chart configuration
      ...config.chart(palette),

      // Comments view configuration
      ...config.commentsView(palette),

      // Terminal configuration
      ...config.terminal(palette),

      // Debug configuration
      ...config.debug(palette),

      // Debug icon configuration
      ...config.debugIcon(palette),

      // Testing configuration
      ...config.testing(palette),

      // Title bar configuration
      ...config.titleBar(palette),

      // Menu bar configuration
      ...config.menuBar(palette),

      // Command center configuration
      ...config.commandCenter(palette),

      // Notification configuration
      ...config.notification(palette),

      // Banner configuration
      ...config.bannerColors(palette),

      // Extensions configuration
      ...config.extensions(palette),

      // Quick picker configuration
      ...config.quickPicker(palette),

      // Welcome page configuration
      ...config.welcomePage(palette),

      // Keybinding label configuration
      ...config.keybindingLabel(palette),

      // Keybinding table configuration
      ...config.keybindingTable(palette),
    },
  };
};
