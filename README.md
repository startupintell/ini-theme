<div align="center">

# ini Theme

> The official theme for [ini.so](https://ini.so).

Designed to provide a focused, high-contrast, and aesthetically pleasing coding experience. Built on a refined Tailwind CSS color scale, it creates a "shipping-native" atmosphere perfect for long coding sessions.

  <a href="https://marketplace.visualstudio.com/items?itemName=startupintell.ini-theme">
    <img src="https://img.shields.io/visual-studio-marketplace/v/startupintell.ini-theme?style=for-the-badge&label=VS%20Marketplace" alt="VS Marketplace Version" />
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=startupintell.ini-theme">
    <img src="https://img.shields.io/visual-studio-marketplace/i/startupintell.ini-theme?style=for-the-badge&label=Installs" alt="VS Marketplace Installs" />
  </a>
  <a href="https://open-vsx.org/extension/startupintell/ini-theme">
    <img src="https://img.shields.io/open-vsx/v/startupintell/ini-theme?style=for-the-badge&label=Open%20VSX" alt="Open VSX Version" />
  </a>
  <a href="https://open-vsx.org/extension/startupintell/ini-theme">
    <img src="https://img.shields.io/open-vsx/dt/startupintell/ini-theme?style=for-the-badge" alt="Open VSX Installs" />
  </a>
</div>

## Design Philosophy

The ini Theme is built on a philosophy of **Cognitive Unloading**. We believe that a code editor should recede into the background, allowing the code itself to breathe. Our design is guided by three core principles:

### 1. Simplify（简化）

**Radical Subtraction.** We aggressively remove non-essential visual noise. If an element doesn't aid in understanding the code or the file structure, it is removed. Less decoration means more focus.

### 2. Subdue（弱化）

**Visual Hierarchy.** For elements that cannot be removed (like UI borders, scrollbars, or bracket pairs), we apply visual de-emphasis. By lowering the contrast of secondary elements, we create natural layers where the actual code sits at the highest elevation, while the UI supports it silently from the shadows.

### 3. Whitespace（留白）

**Structure via Geometry.** Instead of relying on heavy lines and boxes, we use alignment, spacing, and typography to define boundaries. We believe that proper leading and padding create a rhythm that makes long-term reading effortless.

## Compatibility

**Built for VS Code, Perfect for Cursor or Antigravity.**

Since `ini Theme` is built on the standard VS Code extension API, it works seamlessly across the entire ecosystem:

- **VS Code** (Official)
- **Cursor** (AI Code Editor)
- **Antigravity** (Google AI Code Editor)
- **Windsurf / Codium** (Open VSX)
- **GitHub Codespaces**
- **Gitpod**

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
- **Modern Aesthetic**: Modern, flat, and clean design following our "Simplify & Subdue" philosophy.
- **Markdown Enhancement**: Includes custom styles for a better markdown preview experience.

## Configuration

You can customize the theme through the following settings in VS Code:

- `ini.theme.italicComments`: Enable/disable italic for comments (Default: `true`).
- `ini.theme.italicKeywords`: Enable/disable italic for keywords (Default: `false`).
- `ini.theme.boldKeywords`: Enable/disable bold for keywords (Default: `false`).
- `ini.theme.neutralScale`: Choose the neutral color scale for backgrounds (Options: `slate`, `gray`, `zinc`, `neutral`, `stone`).
- `ini.theme.primaryScale`: Choose the primary accent color (Options: `black`, `blue`, `indigo`, `violet`, etc.).

> **Note**: After changing these settings, the extension will prompt you to reload the window to apply the changes.

## Installation

### Method 1: Extension View (Recommended)

1. Open VS Code / Cursor / Antigravity
2. Click the **Extensions** icon in the sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for `ini theme` or `startupintell.ini-theme`
4. Click **Install**
5. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
6. Type `Preferences: Color Theme` and select **ini Dark** or **ini Light**

### Method 2: Command Palette

1. Open VS Code / Cursor / Antigravity
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Type `ext install startupintell.ini-theme`
4. Press Enter to install
5. Select **ini Dark** or **ini Light** from the theme picker

### Method 3: Direct Links

- **VS Code / Cursor**: [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=startupintell.ini-theme)
- **Antigravity / Windsurf / Codium**: [Open VSX Registry](https://open-vsx.org/extension/startupintell/ini-theme)

### Method 4: Command Line

**VS Code / Cursor:**

```bash
code --install-extension startupintell.ini-theme
```

**Open VSX compatible editors:**

```bash
# Download and install manually from Open VSX
# Or use the editor's built-in extension manager
```

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
