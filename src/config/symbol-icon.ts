import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Symbol Icons (大纲/面包屑/智能提示里的符号图标)
// -----------------------------------------------------------------
export const symbolIconConfig = (palette: ThemePalette) => {
  return {
    // --- Data Types (数据类型) ---
    'symbolIcon.stringForeground': palette.state.success, // 字符串: 绿色
    'symbolIcon.numberForeground': palette.state.info, // 数字: 青色/蓝色
    'symbolIcon.booleanForeground': palette.primary.main, // 布尔: 主色(蓝)
    'symbolIcon.arrayForeground': palette.text.normal, // 数组: 通常跟随变量色或白色
    'symbolIcon.objectForeground': palette.text.normal, // 对象
    'symbolIcon.nullForeground': palette.text.muted, // Null: 灰色

    // --- Executables (可执行体: 函数/方法) ---
    // 策略：使用次要色 (紫色/品红)，区分于普通变量
    'symbolIcon.methodForeground': palette.secondary.main || '#c084fc',
    'symbolIcon.functionForeground': palette.secondary.main || '#c084fc',
    'symbolIcon.constructorForeground': palette.secondary.main || '#c084fc',

    // --- Entities (实体: 类/接口/结构) ---
    // 策略：使用 Warning 色 (黄色/橙色)，这是 IDE 的经典配色
    'symbolIcon.classForeground': palette.state.warning,
    'symbolIcon.interfaceForeground': palette.state.warning,
    'symbolIcon.structForeground': palette.state.warning,
    'symbolIcon.enumeratorForeground': palette.state.warning,
    'symbolIcon.typeParameterForeground': palette.state.warning,
    'symbolIcon.eventForeground': palette.state.warning, // 事件(闪电图标)

    // --- Storage (存储: 变量/字段/属性) ---
    // 策略：使用主色 (蓝色)，代表最基础的数据单元
    'symbolIcon.variableForeground': palette.primary.main,
    'symbolIcon.fieldForeground': palette.primary.main,
    'symbolIcon.propertyForeground': palette.primary.main,
    'symbolIcon.constantForeground': palette.primary.main, // 常量
    'symbolIcon.enumeratorMemberForeground': palette.primary.main, // 枚举成员
    'symbolIcon.keyForeground': palette.primary.main, // JSON Key

    // --- Containers & Meta (容器与元数据) ---
    // 策略：使用文本色 or 灰色，避免喧宾夺主
    'symbolIcon.moduleForeground': palette.text.normal,
    'symbolIcon.namespaceForeground': palette.text.normal,
    'symbolIcon.packageForeground': palette.text.normal,
    'symbolIcon.libraryForeground': palette.text.normal,

    // Snippet (代码片段)
    // 策略：这通常是用户最想找的东西，或者最不想找的东西
    // 使用白色或 muted 区分于语法符号
    'symbolIcon.snippetForeground': palette.text.normal,

    // Others
    'symbolIcon.textForeground': palette.text.muted, // 纯文本
    'symbolIcon.fileForeground': palette.text.muted, // 文件
    'symbolIcon.folderForeground': palette.text.muted, // 文件夹
    'symbolIcon.referenceForeground': palette.text.subtle,

    // Syntax Tokens
    'symbolIcon.operatorForeground': palette.text.subtle, // 运算符
    'symbolIcon.keywordForeground': palette.secondary.main || palette.text.normal,

    // Units & Colors (CSS)
    'symbolIcon.unitForeground': palette.text.normal,
    'symbolIcon.colorForeground': palette.text.normal,
  };
};
