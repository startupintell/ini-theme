export interface ThemePalette {
  transparent: string;
  primary: {
    main: string;
    hover: string;
    surface: string;
    text: string;
  };
  secondary: {
    main: string;
    hover: string;
    text: string;
    border: string;
  };
  bg: {
    app: string;
    panel: string;
    element: string;
    input: string;
    active: string;
  };
  text: {
    normal: string;
    muted: string;
    subtle: string;
    inverse: string;
  };
  border: {
    subtle: string;
    muted: string;
    focus: string;
  };
  state: {
    error: string;
    warning: string;
    success: string;
    info: string;
    errorBg: string;
  };
  shadow: {
    main: string;
    strong: string;
    scroll: string;
  };

  // 语法高亮专用色;
  syntax: {
    comment: string; // 注释 (通常是灰色)
    keyword: string; // 关键字 (if, return, import)
    function: string; // 函数名/方法
    class: string; // 类/类型/接口
    variable: string; // 变量
    parameter: string; // 参数 (通常和变量区分开)
    string: string; // 字符串
    constant: string; // 常量/数字/布尔值
    tag: string; // HTML/JSX 标签 (div, Component)
    attribute: string; // HTML/JSX 属性 (class=, src=)
    property: string; // 对象属性 (json key, object.prop)
    operator: string; // 运算符 (+, =, =>)
    regex: string; // 正则表达式
  };
}

export interface Palette {
  light: ThemePalette;
  dark: ThemePalette;
}

export interface ThemeConfig {
  italicComments?: boolean;
  italicKeywords?: boolean;
  boldKeywords?: boolean;
  neutralScale?: 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone';
  primaryScale?: string;
}
