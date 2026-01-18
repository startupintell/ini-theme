import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { getTheme } from './theme';
import { ThemeConfig } from './type';

export const activate = (context: vscode.ExtensionContext) => {
  // Listen for configuration changes
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e: vscode.ConfigurationChangeEvent) => {
      if (e.affectsConfiguration('iniTheme')) {
        generateThemes(context);
      }
    }),
  );

  // Register command: Regenerate theme
  context.subscriptions.push(
    vscode.commands.registerCommand('iniTheme.regenerate', () => {
      generateThemes(context);
    }),
  );

  // Register command: Apply dark theme
  context.subscriptions.push(
    vscode.commands.registerCommand('iniTheme.setDark', async () => {
      await generateThemes(context, false);

      await vscode.workspace
        .getConfiguration()
        .update('workbench.colorTheme', 'ini Dark', vscode.ConfigurationTarget.Global);

      // Auto reload window to apply theme
      await vscode.commands.executeCommand('workbench.action.reloadWindow');
    }),
  );

  // Register command: Apply light theme
  context.subscriptions.push(
    vscode.commands.registerCommand('iniTheme.setLight', async () => {
      await generateThemes(context, false);
      await vscode.workspace
        .getConfiguration()
        .update('workbench.colorTheme', 'ini Light', vscode.ConfigurationTarget.Global);

      // Auto reload window to apply theme
      await vscode.commands.executeCommand('workbench.action.reloadWindow');
    }),
  );

  // Register command: Set primary color scale
  context.subscriptions.push(
    vscode.commands.registerCommand('iniTheme.setPrimaryScale', async () => {
      const primaryScales = [
        'black',
        'blue',
        'indigo',
        'violet',
        'pink',
        'rose',
        'red',
        'orange',
        'amber',
        'yellow',
        'lime',
        'green',
        'emerald',
        'teal',
        'cyan',
        'sky',
      ];

      const currentScale = vscode.workspace
        .getConfiguration('iniTheme')
        .get<string>('primaryScale', 'black');

      const selected = await vscode.window.showQuickPick(
        primaryScales.map((scale) => ({
          label: scale.charAt(0).toUpperCase() + scale.slice(1),
          value: scale,
          description: scale === currentScale ? 'Current selected' : undefined,
        })),
        {
          placeHolder: `Select primary scale (Current: ${currentScale})`,
        },
      );

      if (selected) {
        await vscode.workspace
          .getConfiguration()
          .update('iniTheme.primaryScale', selected.value, vscode.ConfigurationTarget.Global);
        await generateThemes(context, false);
        // Auto reload window to apply theme
        await vscode.commands.executeCommand('workbench.action.reloadWindow');
      }
    }),
  );

  // Register command: Set neutral color scale
  context.subscriptions.push(
    vscode.commands.registerCommand('iniTheme.setNeutralScale', async () => {
      const neutralScales = ['slate', 'gray', 'zinc', 'neutral', 'stone'];

      const currentScale = vscode.workspace
        .getConfiguration('iniTheme')
        .get<'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'>('neutralScale', 'neutral');

      const selected = await vscode.window.showQuickPick(
        neutralScales.map((scale) => ({
          label: scale.charAt(0).toUpperCase() + scale.slice(1),
          value: scale,
          description: scale === currentScale ? 'Current selected' : undefined,
        })),
        {
          placeHolder: `Select neutral scale (Current: ${currentScale})`,
        },
      );

      if (selected) {
        await vscode.workspace
          .getConfiguration()
          .update('iniTheme.neutralScale', selected.value, vscode.ConfigurationTarget.Global);

        await generateThemes(context, false);

        // Auto reload window to apply theme
        await vscode.commands.executeCommand('workbench.action.reloadWindow');
      }
    }),
  );

  // Initial detection and configuration sync on startup to ensure generated JSON is up to date
  generateThemes(context, false);
};

/**
 * Get current configuration object
 */
const getThemeConfig = (): ThemeConfig => {
  const config = vscode.workspace.getConfiguration('iniTheme');
  return {
    italicComments: config.get<boolean>('italicComments'),
    italicKeywords: config.get<boolean>('italicKeywords'),
    boldKeywords: config.get<boolean>('boldKeywords'),
    neutralScale: config.get<'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'>('neutralScale'),
    primaryScale: config.get<string>('primaryScale'),
  };
};

/**
 * Dynamically generate theme JSON
 * @param context Extension context
 * @param showReloadPrompt Whether to show reload prompt (default: true)
 */
const generateThemes = async (
  context: vscode.ExtensionContext,
  showReloadPrompt: boolean = true,
) => {
  const config = getThemeConfig();
  const themesDir = path.join(context.extensionPath, 'themes');

  try {
    if (!fs.existsSync(themesDir)) {
      fs.mkdirSync(themesDir, { recursive: true });
    }

    // Generate dark theme
    const darkTheme = getTheme('dark', config);
    fs.writeFileSync(path.join(themesDir, 'dark.json'), JSON.stringify(darkTheme, null, 2));

    // Generate light theme
    const lightTheme = getTheme('light', config);
    fs.writeFileSync(path.join(themesDir, 'light.json'), JSON.stringify(lightTheme, null, 2));

    // Prompt user (only when needed)
    if (showReloadPrompt) {
      const action = await vscode.window.showInformationMessage(
        'ini Theme has been updated. Reload window now to apply changes?',
        'Reload',
        'Later',
      );

      if (action === 'Reload') {
        vscode.commands.executeCommand('workbench.action.reloadWindow');
      }
    }
  } catch (error) {
    vscode.window.showErrorMessage(`Failed to generate themes: ${error}`);
  }
};
