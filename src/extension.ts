import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { getTheme } from './theme';
import { ThemeConfig } from './type';

/**
 * Activates the VS Code extension.
 * This function registers commands and configuration listeners to manage the ini Theme.
 *
 * @param context The extension context provided by VS Code.
 */
export const activate = (context: vscode.ExtensionContext) => {
  // Listen for changes in the theme configuration
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e: vscode.ConfigurationChangeEvent) => {
      // If any 'ini.theme' related configuration changes, regenerate the themes
      if (e.affectsConfiguration('ini.theme')) {
        generateThemes(context);
      }
    }),
  );

  // Register the 'Regenerate theme' command
  context.subscriptions.push(
    vscode.commands.registerCommand('ini.theme.regenerate', () => {
      generateThemes(context);
    }),
  );

  // Register the 'Apply dark theme' command
  context.subscriptions.push(
    vscode.commands.registerCommand('ini.theme.setDark', async () => {
      // Generate themes without showing a reload prompt yet
      await generateThemes(context, false);

      // Update the global workbench color theme setting to 'ini Dark'
      await vscode.workspace
        .getConfiguration()
        .update('workbench.colorTheme', 'ini Dark', vscode.ConfigurationTarget.Global);

      // Prompt to reload the window
      const action = await vscode.window.showInformationMessage(
        'ini Dark theme applied. Reload window to take effect?',
        'Reload',
        'Later',
      );

      if (action === 'Reload') {
        await vscode.commands.executeCommand('workbench.action.reloadWindow');
      }
    }),
  );

  // Register the 'Apply light theme' command
  context.subscriptions.push(
    vscode.commands.registerCommand('ini.theme.setLight', async () => {
      // Generate themes without showing a reload prompt yet
      await generateThemes(context, false);

      // Update the global workbench color theme setting to 'ini Light'
      await vscode.workspace
        .getConfiguration()
        .update('workbench.colorTheme', 'ini Light', vscode.ConfigurationTarget.Global);

      // Prompt to reload the window
      const action = await vscode.window.showInformationMessage(
        'ini Light theme applied. Reload window to take effect?',
        'Reload',
        'Later',
      );

      if (action === 'Reload') {
        await vscode.commands.executeCommand('workbench.action.reloadWindow');
      }
    }),
  );

  // Register the 'Set primary color scale' command
  context.subscriptions.push(
    vscode.commands.registerCommand('ini.theme.setPrimaryScale', async () => {
      // Available primary color scales
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

      // Get current primary scale from configuration
      const currentScale = vscode.workspace
        .getConfiguration('ini.theme')
        .get<string>('primaryScale', 'black');

      // Prompt the user to select a primary scale
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
        // Update the primary scale configuration
        await vscode.workspace
          .getConfiguration()
          .update('ini.theme.primaryScale', selected.value, vscode.ConfigurationTarget.Global);

        // Regenerate themes and reload
        await generateThemes(context, false);

        // Prompt to reload the window
        const action = await vscode.window.showInformationMessage(
          `Primary scale set to ${selected.label}. Reload window to take effect?`,
          'Reload',
          'Later',
        );

        if (action === 'Reload') {
          await vscode.commands.executeCommand('workbench.action.reloadWindow');
        }
      }
    }),
  );

  // Register the 'Set neutral color scale' command
  context.subscriptions.push(
    vscode.commands.registerCommand('ini.theme.setNeutralScale', async () => {
      // Available neutral color scales
      const neutralScales = ['slate', 'gray', 'zinc', 'neutral', 'stone'];

      // Get current neutral scale from configuration
      const currentScale = vscode.workspace
        .getConfiguration('ini.theme')
        .get<'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'>('neutralScale', 'neutral');

      // Prompt the user to select a neutral scale
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
        // Update the neutral scale configuration
        await vscode.workspace
          .getConfiguration()
          .update('ini.theme.neutralScale', selected.value, vscode.ConfigurationTarget.Global);

        // Regenerate themes and reload
        await generateThemes(context, false);

        // Prompt to reload the window
        const action = await vscode.window.showInformationMessage(
          `Neutral scale set to ${selected.label}. Reload window to take effect?`,
          'Reload',
          'Later',
        );

        if (action === 'Reload') {
          await vscode.commands.executeCommand('workbench.action.reloadWindow');
        }
      }
    }),
  );

  // Register the 'Set subtle border color' command
  context.subscriptions.push(
    vscode.commands.registerCommand('ini.theme.setBorderSubtleColor', async () => {
      const borderColors = ['light', 'medium', 'transparent'] as const;

      const currentColor = vscode.workspace
        .getConfiguration('ini.theme')
        .get<'light' | 'medium' | 'transparent'>('borderSubtleColor', 'light');

      const selected = await vscode.window.showQuickPick(
        borderColors.map((color) => ({
          label: color.charAt(0).toUpperCase() + color.slice(1),
          value: color,
          description: color === currentColor ? 'Current selected' : undefined,
        })),
        {
          placeHolder: `Select border color (Current: ${currentColor})`,
        },
      );

      if (selected) {
        await vscode.workspace
          .getConfiguration()
          .update('ini.theme.borderSubtleColor', selected.value, vscode.ConfigurationTarget.Global);

        await generateThemes(context, false);

        // Prompt to reload the window
        const action = await vscode.window.showInformationMessage(
          `Border color set to ${selected.label}. Reload window to take effect?`,
          'Reload',
          'Later',
        );

        if (action === 'Reload') {
          await vscode.commands.executeCommand('workbench.action.reloadWindow');
        }
      }
    }),
  );

  // Check and sync theme files on startup to ensure they match current configuration
  generateThemes(context, false);
};

/**
 * Retrieves the current theme configuration from VS Code workspace settings.
 *
 * @returns {ThemeConfig} An object containing all theme-related configurations.
 */
const getThemeConfig = (): ThemeConfig => {
  const config = vscode.workspace.getConfiguration('ini.theme');
  return {
    italicComments: config.get<boolean>('italicComments'),
    italicKeywords: config.get<boolean>('italicKeywords'),
    boldKeywords: config.get<boolean>('boldKeywords'),
    neutralScale: config.get<'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'>('neutralScale'),
    primaryScale: config.get<string>('primaryScale'),
    borderSubtleColor: config.get<'light' | 'medium' | 'transparent'>('borderSubtleColor'),
  };
};

/**
 * Dynamically generates theme JSON files based on the current configuration.
 *
 * @param context The extension context.
 * @param showReloadPrompt Whether to prompt the user to reload the window (defaults to true).
 */
const generateThemes = async (
  context: vscode.ExtensionContext,
  showReloadPrompt: boolean = true,
) => {
  const config = getThemeConfig();
  const themesDir = path.join(context.extensionPath, 'themes');

  try {
    // Create the themes directory if it doesn't exist
    if (!fs.existsSync(themesDir)) {
      fs.mkdirSync(themesDir, { recursive: true });
    }

    // Generate and write the Dark theme JSON file
    const darkTheme = getTheme('dark', config);
    fs.writeFileSync(path.join(themesDir, 'dark.json'), JSON.stringify(darkTheme, null, 2));

    // Generate and write the Light theme JSON file
    const lightTheme = getTheme('light', config);
    fs.writeFileSync(path.join(themesDir, 'light.json'), JSON.stringify(lightTheme, null, 2));

    // If needed, show an information message with a reload option
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
    // Show an error message if theme generation fails
    vscode.window.showErrorMessage(`Failed to generate themes: ${error}`);
  }
};
