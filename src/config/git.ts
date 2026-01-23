import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Git Decorations (Git status colors - affects Explorer and SCM panel)
// -----------------------------------------------------------------
export const gitConfig = (palette: ThemePalette) => {
  return {
    // --- Basic States ---

    // Added / Untracked: Green
    // Scenario: You created a new file but haven't committed it yet.
    'gitDecoration.addedResourceForeground': palette.state.success,
    'gitDecoration.untrackedResourceForeground': palette.state.success,

    // Modified (Working Directory): Yellow/Orange
    // Scenario: You've modified code but haven't run git add yet.
    // Use Warning color to indicate a "dirty" state.
    'gitDecoration.modifiedResourceForeground': palette.state.warning,

    // Deleted: Red
    // Scenario: File has been deleted (usually shown with a strikethrough in the SCM panel).
    'gitDecoration.deletedResourceForeground': palette.state.error,

    // Renamed: Green or primary color
    // Scenario: A file after git mv.
    'gitDecoration.renamedResourceForeground': palette.state.success,

    // --- Staged States (After git add) ---
    // Strategy: Once staged, it means it's ready for the next commit.
    // So usually Success (green) is used to indicate "ready".

    // Staged Modified: You modified the file and ran git add.
    'gitDecoration.stageModifiedResourceForeground': palette.state.success,

    // Staged Deleted: You deleted the file and ran git add.
    'gitDecoration.stageDeletedResourceForeground': palette.state.error,

    // --- Special States ---

    // Ignored (Files ignored by .gitignore): Gray
    // Strategy: Must be fainter than normal text (Muted) to make them "invisible" in the list.
    'gitDecoration.ignoredResourceForeground': palette.text.muted,

    // Conflicting: Red or Purple
    // Scenario: Merge conflicts. Must be very prominent!
    'gitDecoration.conflictingResourceForeground': palette.state.error,

    // Submodule: Secondary text
    'gitDecoration.submoduleResourceForeground': palette.text.muted,

    // --- Git Blame (Inline Blame info - from extensions or native) ---
    // Scenario: "You, 2 days ago • Uncommitted changes" displayed at the end of a line in the editor
    // Strategy: Extremely faint ghost text, avoid interfering with code reading.
    'git.blame.editorDecorationForeground': palette.text.subtle + '50',
  };
};
