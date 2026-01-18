/**
 * VS Code Theme Build Script
 *
 * This script automatically generates the final theme JSON files (light.json and dark.json)
 * using the Token and theme mapping logic from the palette.
 */

import { getTheme } from './theme';
import * as fs from 'fs';
import * as path from 'path';

// Define the directory where the generated JSON files will be stored
const themesDir = path.join(__dirname, '../themes');

// Ensure the directory exists before writing
if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir, { recursive: true });
}

/**
 * Generates and writes a single theme file based on the specified type
 * @param type Theme variant type ('light' or 'dark')
 */
const writeTheme = (type: 'light' | 'dark') => {
  // Call the engine to generate the theme object for the corresponding type (passing an empty object as default config)
  const theme = getTheme(type, {});

  // Construct the absolute path for the output file
  const filePath = path.join(themesDir, `${type}.json`);

  // Serialize the theme object to JSON and write it to disk
  fs.writeFileSync(filePath, JSON.stringify(theme, null, 2));
  console.log(`Successfully generated: ${filePath}`);
};

// Execute the build process: generate dark and light themes
writeTheme('dark');
writeTheme('light');
