import { ThemePalette, ThemeConfig } from '../type';

export const syntaxConfig = (palette: ThemePalette, config: ThemeConfig = {}) => {
  const s = palette.syntax; // 简写

  // 生成字体样式字符串
  const getFontStyle = (italic?: boolean, bold?: boolean) => {
    const styles = [];
    if (italic) styles.push('italic');
    if (bold) styles.push('bold');
    return styles.join(' ') || '';
  };

  const commentStyle = getFontStyle(config.italicComments, false);
  const keywordStyle = getFontStyle(config.italicKeywords, config.boldKeywords);

  return {
    // =========================================================================
    // 1. Semantic Token Colors (现代语义高亮 - 优先级最高)
    // =========================================================================
    semanticTokenColors: {
      namespace: s.class,
      class: s.class,
      enum: s.class,
      interface: s.class,
      struct: s.class,
      typeParameter: s.class,
      type: s.class,

      function: s.function,
      method: s.function,
      macro: s.function,

      variable: s.variable,
      'variable.readonly': s.constant, // const 变量
      property: s.property,
      'property.readonly': s.constant,

      parameter: s.parameter,

      string: s.string,
      number: s.constant,
      regexp: s.regex,
      operator: s.operator,
      keyword: { foreground: s.keyword, fontStyle: keywordStyle },

      // 特殊修复
      comment: { foreground: s.comment, fontStyle: commentStyle },
      '*.defaultLibrary': s.class, // Math, Console 等内置库
    },

    // =========================================================================
    // 2. TextMate Token Colors (传统正则高亮 - 兜底兼容)
    // =========================================================================
    tokenColors: [
      // --- Comments (注释) ---
      {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: { foreground: s.comment, fontStyle: commentStyle },
      },

      // --- Keywords (关键字: import, export, return, if) ---
      {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: { foreground: s.keyword, fontStyle: keywordStyle },
      },

      // 特殊处理: Operator (=>, =, +) 有时被视为 keyword，但我们要分开
      {
        scope: ['keyword.operator'],
        settings: { foreground: s.operator, fontStyle: '' }, // 运算符通常不倾斜/加粗
      },

      // --- Functions (函数定义与调用) ---
      {
        scope: ['entity.name.function', 'support.function'],
        settings: { foreground: s.function },
      },

      // --- Classes / Types (类, 类型, 接口) ---
      {
        scope: [
          'entity.name.type',
          'entity.name.class',
          'support.class',
          'support.type',
          'new.expr entity.name.type', // new User()
        ],
        settings: { foreground: s.class },
      },

      // --- Variables (变量) ---
      {
        scope: ['variable', 'meta.variable', 'variable.language'], // this, super
        settings: { foreground: s.variable },
      },

      // 常量 (CONST_VAR)
      {
        scope: ['variable.other.constant'],
        settings: { foreground: s.constant },
      },

      // --- Parameters (参数) ---
      {
        scope: ['variable.parameter'],
        settings: { foreground: s.parameter },
      },

      // --- Object Properties (对象属性: obj.prop) ---
      {
        scope: ['variable.other.object.property', 'meta.object-literal.key'],
        settings: { foreground: s.property },
      },

      // --- Strings (字符串) ---
      {
        scope: ['string', 'punctuation.definition.string'],
        settings: { foreground: s.string },
      },

      // --- Constants (数字, 布尔值) ---
      {
        scope: ['constant.numeric', 'constant.language' /* true/false */],
        settings: { foreground: s.constant },
      },

      // --- HTML / JSX / XML ---
      {
        scope: ['entity.name.tag', 'support.class.component'], // <div>, <App>
        settings: { foreground: s.tag },
      },
      {
        scope: ['entity.other.attribute-name'], // class=, src=
        settings: { foreground: s.attribute },
      },
      {
        scope: ['punctuation.definition.tag'], // <, >, />
        settings: { foreground: s.operator }, // 或者 subtle
      },

      // --- CSS / SCSS ---
      {
        scope: ['support.type.property-name.css'], // width, color
        settings: { foreground: s.property },
      },
      {
        scope: ['support.constant.property-value.css'], // absolute, bold
        settings: { foreground: s.constant },
      },
      {
        scope: ['entity.other.attribute-name.class.css'], // .className
        settings: { foreground: s.class }, // 或者 s.function
      },
      {
        scope: ['entity.other.attribute-name.id.css'], // #id
        settings: { foreground: s.constant },
      },

      // --- JSON ---
      {
        scope: ['support.type.property-name.json'], // Keys
        settings: { foreground: s.property },
      },
      {
        scope: ['string.quoted.double.json'], // Values
        settings: { foreground: s.string },
      },

      // --- Markdown ---
      {
        scope: ['markup.heading'],
        settings: { foreground: s.class, fontStyle: 'bold' },
      },
      {
        scope: ['markup.list.numbered', 'markup.list.unnumbered'],
        settings: { foreground: s.operator },
      },
      {
        scope: ['markup.quote'],
        settings: { foreground: s.comment, fontStyle: 'italic' },
      },
      {
        scope: ['markup.inline.raw'], // `code`
        settings: { foreground: s.constant },
      },
      {
        scope: ['markup.underline.link', 'string.other.link'],
        settings: { foreground: s.function }, // Link text
      },
    ],
  };
};
