import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Symbol Icons (Symbol icons in the outline, breadcrumbs, and IntelliSense)
// -----------------------------------------------------------------
export const symbolIconConfig = (palette: ThemePalette) => {
  return {
    // --- Data Types ---
    'symbolIcon.stringForeground': palette.state.success, // String: Green
    'symbolIcon.numberForeground': palette.state.info, // Number: Cyan/Blue
    'symbolIcon.booleanForeground': palette.primary.main, // Boolean: Primary color (Blue)
    'symbolIcon.arrayForeground': palette.text.normal, // Array: Usually follows variable color or white
    'symbolIcon.objectForeground': palette.text.normal, // Object
    'symbolIcon.nullForeground': palette.text.muted, // Null: Gray

    // --- Executables (Functions/Methods) ---
    // Strategy: Use secondary color (Purple/Magenta) to distinguish from ordinary variables
    'symbolIcon.methodForeground': palette.secondary.main || '#c084fc',
    'symbolIcon.functionForeground': palette.secondary.main || '#c084fc',
    'symbolIcon.constructorForeground': palette.secondary.main || '#c084fc',

    // --- Entities (Classes/Interfaces/Structs) ---
    // Strategy: Use Warning color (Yellow/Orange), a classic IDE color scheme
    'symbolIcon.classForeground': palette.state.warning,
    'symbolIcon.interfaceForeground': palette.state.warning,
    'symbolIcon.structForeground': palette.state.warning,
    'symbolIcon.enumeratorForeground': palette.state.warning,
    'symbolIcon.typeParameterForeground': palette.state.warning,
    'symbolIcon.eventForeground': palette.state.warning, // Event (Lightning bolt icon)

    // --- Storage (Variables/Fields/Properties) ---
    // Strategy: Use primary color (Blue), representing the most basic data units
    'symbolIcon.variableForeground': palette.primary.main,
    'symbolIcon.fieldForeground': palette.primary.main,
    'symbolIcon.propertyForeground': palette.primary.main,
    'symbolIcon.constantForeground': palette.primary.main, // Constant
    'symbolIcon.enumeratorMemberForeground': palette.primary.main, // Enum member
    'symbolIcon.keyForeground': palette.primary.main, // JSON Key

    // --- Containers & Meta ---
    // Strategy: Use text color or gray to avoid being too distracting
    'symbolIcon.moduleForeground': palette.text.normal,
    'symbolIcon.namespaceForeground': palette.text.normal,
    'symbolIcon.packageForeground': palette.text.normal,
    'symbolIcon.libraryForeground': palette.text.normal,

    // Snippet
    // Strategy: These are either exactly what the user is looking for, or not at all.
    // Use white or muted to distinguish from syntax symbols.
    'symbolIcon.snippetForeground': palette.text.normal,

    // Others
    'symbolIcon.textForeground': palette.text.muted, // Plain text
    'symbolIcon.fileForeground': palette.text.muted, // File
    'symbolIcon.folderForeground': palette.text.muted, // Folder
    'symbolIcon.referenceForeground': palette.text.subtle,

    // Syntax Tokens
    'symbolIcon.operatorForeground': palette.text.subtle, // Operator
    'symbolIcon.keywordForeground': palette.secondary.main || palette.text.normal,

    // Units & Colors (CSS)
    'symbolIcon.unitForeground': palette.text.normal,
    'symbolIcon.colorForeground': palette.text.normal,
  };
};
