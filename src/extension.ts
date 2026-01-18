import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { getTheme } from './theme';
import { ThemeConfig } from './type';

export function activate(context: vscode.ExtensionContext) {
  // 监听配置变化
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e: vscode.ConfigurationChangeEvent) => {
      if (e.affectsConfiguration('iniTheme')) {
        generateThemes(context);
      }
    }),
  );

  // 注册命令：重新生成主题
  context.subscriptions.push(
    vscode.commands.registerCommand('iniTheme.regenerate', () => {
      generateThemes(context);
    }),
  );

  // 注册命令：应用深色主题
  context.subscriptions.push(
    vscode.commands.registerCommand('iniTheme.setDark', async () => {
      await generateThemes(context, false);
      await vscode.workspace
        .getConfiguration()
        .update('workbench.colorTheme', 'ini Dark', vscode.ConfigurationTarget.Global);
      // 自动重新加载窗口以应用主题
      await vscode.commands.executeCommand('workbench.action.reloadWindow');
    }),
  );

  // 注册命令：应用浅色主题
  context.subscriptions.push(
    vscode.commands.registerCommand('iniTheme.setLight', async () => {
      await generateThemes(context, false);
      await vscode.workspace
        .getConfiguration()
        .update('workbench.colorTheme', 'ini Light', vscode.ConfigurationTarget.Global);
      // 自动重新加载窗口以应用主题
      await vscode.commands.executeCommand('workbench.action.reloadWindow');
    }),
  );

  // 注册命令：设置主色调
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
          description: scale === currentScale ? '当前选择' : undefined,
        })),
        {
          placeHolder: `选择主色调（当前：${currentScale}）`,
        },
      );

      if (selected) {
        await vscode.workspace
          .getConfiguration()
          .update('iniTheme.primaryScale', selected.value, vscode.ConfigurationTarget.Global);
        await generateThemes(context, false);
        // 自动重新加载窗口以应用主题
        await vscode.commands.executeCommand('workbench.action.reloadWindow');
      }
    }),
  );

  // 注册命令：设置中性色调
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
          description: scale === currentScale ? '当前选择' : undefined,
        })),
        {
          placeHolder: `选择中性色调（当前：${currentScale}）`,
        },
      );

      if (selected) {
        await vscode.workspace
          .getConfiguration()
          .update('iniTheme.neutralScale', selected.value, vscode.ConfigurationTarget.Global);
        await generateThemes(context, false);
        // 自动重新加载窗口以应用主题
        await vscode.commands.executeCommand('workbench.action.reloadWindow');
      }
    }),
  );

  // 初次启动检测并同步配置，确保生成的 JSON 是最新的
  generateThemes(context, false);
}

/**
 * 获取当前的配置对象
 */
function getThemeConfig(): ThemeConfig {
  const config = vscode.workspace.getConfiguration('iniTheme');
  return {
    italicComments: config.get<boolean>('italicComments'),
    italicKeywords: config.get<boolean>('italicKeywords'),
    boldKeywords: config.get<boolean>('boldKeywords'),
    neutralScale: config.get<'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'>('neutralScale'),
    primaryScale: config.get<string>('primaryScale'),
  };
}

/**
 * 动态生成主题 JSON
 * @param context 扩展上下文
 * @param showReloadPrompt 是否显示重新加载提示（默认：true）
 */
async function generateThemes(context: vscode.ExtensionContext, showReloadPrompt: boolean = true) {
  const config = getThemeConfig();
  const themesDir = path.join(context.extensionPath, 'themes');

  try {
    if (!fs.existsSync(themesDir)) {
      fs.mkdirSync(themesDir, { recursive: true });
    }

    // 生成深色主题
    const darkTheme = getTheme('dark', config);
    fs.writeFileSync(path.join(themesDir, 'dark.json'), JSON.stringify(darkTheme, null, 2));

    // 生成浅色主题
    const lightTheme = getTheme('light', config);
    fs.writeFileSync(path.join(themesDir, 'light.json'), JSON.stringify(lightTheme, null, 2));

    // 提示用户（仅在需要时显示）
    if (showReloadPrompt) {
      const action = await vscode.window.showInformationMessage(
        'ini Theme 已更新，是否立即重新加载窗口以应用更改？',
        '重新加载',
        '稍后',
      );

      if (action === '重新加载') {
        vscode.commands.executeCommand('workbench.action.reloadWindow');
      }
    }
  } catch (error) {
    vscode.window.showErrorMessage(`生成主题失败: ${error}`);
  }
}
