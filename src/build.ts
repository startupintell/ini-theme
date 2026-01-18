/**
 * VS Code 主题构建脚本
 *
 * 该脚本通过 palette 中的 Token 和主题映射逻辑，
 * 自动生成最终的主题 JSON 文件（light.json 和 dark.json）。
 */

import { getTheme } from './theme';
import * as fs from 'fs';
import * as path from 'path';

// 定义生成的 JSON 文件存放目录
const themesDir = path.join(__dirname, '../themes');

// 确保在写入之前目录已存在
if (!fs.existsSync(themesDir)) {
  fs.mkdirSync(themesDir, { recursive: true });
}

/**
 * 根据指定类型生成并写入单个主题文件
 * @param type 主题变体类型 ('light' 或 'dark')
 */
const writeTheme = (type: 'light' | 'dark') => {
  // 调用引擎生成对应类型的主题对象 (传入空对象作为默认配置)
  const theme = getTheme(type, {});

  // 构建输出文件的绝对路径
  const filePath = path.join(themesDir, `${type}.json`);

  // 将主题对象序列化为 JSON 并写入磁盘
  fs.writeFileSync(filePath, JSON.stringify(theme, null, 2));
  console.log(`成功生成: ${filePath}`);
};

// 执行构建流程：生成深色和浅色主题
writeTheme('dark');
writeTheme('light');
