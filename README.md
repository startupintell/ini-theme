# ini Theme for VS Code

The official VS Code theme for [ini.so](https://ini.so). Designed to provide a focused, high-contrast, and aesthetically pleasing coding experience that aligns with the ini.so design language.

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=startupintell.ini-theme">
    <img src="https://img.shields.io/visual-studio-marketplace/v/startupintell.ini-theme?style=flat-square&label=VS%20Marketplace" alt="VS Marketplace Version" />
  </a>
  <a href="https://open-vsx.org/extension/startupintell/ini-theme">
    <img src="https://img.shields.io/open-vsx/v/startupintell/ini-theme?style=flat-square&label=Open%20VSX" alt="Open VSX Version" />
  </a>
  <a href="https://github.com/startupintell/ini-theme/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/startupintell/ini-theme?style=flat-square" alt="License" />
  </a>
</p>

## Themes

### ini Dark

A "Cosmic" inspired dark theme optimized for long coding sessions. It uses deep zinc backgrounds with vibrant neon accents for high readability.

### ini Light

A "Paper" inspired light theme. Clean, crisp, and low-glare. Perfect for bright environments or documentation writing.

## Features

- **Highly Customizable**: Adjust color scales, font styles (italic/bold), and more via settings.
- **Semantic Highlighting**: Full support for semantic token coloring, distinguishing clearly between variables, parameters, and properties.
- **Tailwind Palette**: Built on a refined Tailwind CSS color scale for consistent UI harmony.
- **Detailed UI Customization**: Extensive customization for Workbench, Terminal, Git Graph, and Interactive Windows.
- **Modern Aesthetic**: Modern, flat, and clean design with subtle borders for a focused experience.
- **Markdown Enhancement**: Includes custom styles for a better markdown preview experience.

## Configuration

You can customize the theme through the following settings in VS Code:

- `iniTheme.italicComments`: Enable/disable italic for comments (Default: `true`).
- `iniTheme.italicKeywords`: Enable/disable italic for keywords (Default: `false`).
- `iniTheme.boldKeywords`: Enable/disable bold for keywords (Default: `false`).
- `iniTheme.neutralScale`: Choose the neutral color scale for backgrounds (Options: `slate`, `gray`, `zinc`, `neutral`, `stone`).
- `iniTheme.primaryScale`: Choose the primary accent color (Options: `black`, `blue`, `indigo`, `violet`, etc.).

> **Note**: After changing these settings, the extension will prompt you to reload the window to apply the changes.

## Installation

### via VS Code

1. Open VS Code.
2. Press `Ctrl+P` (or `Cmd+P` on Mac).
3. Type `ext install startupintell.ini-theme`.
4. Select **ini Dark** or **ini Light** from the theme picker.

### via Marketplace

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=startupintell.ini-theme)
- [Open VSX Registry](https://open-vsx.org/extension/startupintell/ini-theme)

## Development

This theme is built using TypeScript. It uses a custom build script to generate standard VS Code JSON files from a semantic configuration system.

### Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Build the theme (generates ./themes/*.json)
pnpm build

# 3. Debug
# Press F5 in VS Code to open a new window with the theme loaded.
```

## Publishing

We use `dotenv-cli` to manage tokens securely.

1. **Configure Secrets**
   Create a `.env` file in the root directory (do not commit this file):

   ```env
   VSCE_PAT=your_azure_devops_token
   OVSX_PAT=your_open_vsx_token
   ```

2. **Publish Commands**

   Visual Studio Marketplace:

   ```bash
   npx dotenv-cli -- npx @vscode/vsce publish
   ```

   Open VSX Registry:

   ```bash
   npx dotenv-cli -- npx ovsx publish
   ```

Built with ❤️ by [ini.so](https://ini.so).
