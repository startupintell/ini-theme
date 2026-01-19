import { ThemePalette, ThemeConfig } from '../type';

export const syntaxConfig = (palette: ThemePalette, config: ThemeConfig = {}) => {
  const s = palette.syntax; // Shortened reference

  // Generate font style strings
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
    // 1. Semantic Token Colors (Modern semantic highlighting - highest priority)
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
      'variable.readonly': s.constant, // const variables
      property: s.property,
      'property.readonly': s.constant,

      parameter: s.parameter,

      string: s.string,
      number: s.constant,
      regexp: s.regex,
      operator: s.operator,
      keyword: { foreground: s.keyword, fontStyle: keywordStyle },

      // Special fixes
      comment: { foreground: s.comment, fontStyle: commentStyle },
      '*.defaultLibrary': s.class, // Math, Console, and other built-in libraries
    },

    // =========================================================================
    // 2. TextMate Token Colors (Legacy regex-based highlighting - fallback)
    // =========================================================================
    tokenColors: [
      // --- Comments ---
      {
        scope: ['comment', 'punctuation.definition.comment'],
        settings: { foreground: s.comment, fontStyle: commentStyle },
      },

      // --- Keywords (e.g., import, export, return, if) ---
      {
        scope: ['keyword', 'storage.type', 'storage.modifier'],
        settings: { foreground: s.keyword, fontStyle: keywordStyle },
      },

      // Special handling: Operators (=>, =, +) are sometimes treated as keywords, but we separate them
      {
        scope: ['keyword.operator'],
        settings: { foreground: s.operator, fontStyle: '' }, // Operators usually aren't italicized/bolded
      },

      // --- Functions (Definitions and calls) ---
      {
        scope: ['entity.name.function', 'support.function'],
        settings: { foreground: s.function },
      },

      // --- Classes / Types (Classes, Types, Interfaces) ---
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

      // --- Variables ---
      {
        scope: ['variable', 'meta.variable', 'variable.language'], // this, super
        settings: { foreground: s.variable },
      },

      // Constants (CONST_VAR)
      {
        scope: ['variable.other.constant'],
        settings: { foreground: s.constant },
      },

      // --- Parameters ---
      {
        scope: ['variable.parameter'],
        settings: { foreground: s.parameter },
      },

      // --- Object Properties (e.g., obj.prop) ---
      {
        scope: ['variable.other.object.property', 'meta.object-literal.key'],
        settings: { foreground: s.property },
      },

      // --- Strings ---
      {
        scope: ['string', 'punctuation.definition.string'],
        settings: { foreground: s.string },
      },

      // --- Constants (Numbers, Booleans) ---
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
        settings: { foreground: s.operator }, // Or subtle
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
        settings: { foreground: s.class }, // Or s.function
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
