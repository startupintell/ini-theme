import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Git Decorations (Git 状态颜色 - 影响 Explorer 和 SCM 面板)
// -----------------------------------------------------------------
export const gitConfig = (palette: ThemePalette) => {
  return {
    // --- Basic States (基础状态) ---

    // Added / Untracked (新增/未追踪): 绿色
    // 场景：你新建了一个文件，还没提交。
    'gitDecoration.addedResourceForeground': palette.state.success,
    'gitDecoration.untrackedResourceForeground': palette.state.success,

    // Modified (已修改 - 工作区): 黄色/橙色
    // 场景：你改了代码，但还没 git add。
    // 使用 Warning 色，表示"Dirty"状态。
    'gitDecoration.modifiedResourceForeground': palette.state.warning,

    // Deleted (已删除): 红色
    // 场景：文件被删了 (通常只在 SCM 面板里看到横线划掉的文件名)。
    'gitDecoration.deletedResourceForeground': palette.state.error,

    // Renamed (重命名): 绿色或主色
    // 场景：git mv 后的文件。
    'gitDecoration.renamedResourceForeground': palette.state.success,

    // --- Staged States (暂存区状态 - git add 之后) ---
    // 策略：一旦暂存，意味着它准备好进入下一次 Commit 了。
    // 所以通常使用 Success (绿色) 来表示"已就绪"。

    // Staged Modified: 你改了文件，并且 git add 了。
    'gitDecoration.stageModifiedResourceForeground': palette.state.success,

    // Staged Deleted: 你删了文件，并且 git add 了。
    'gitDecoration.stageDeletedResourceForeground': palette.state.error,

    // --- Special States (特殊状态) ---

    // Ignored (被 .gitignore 忽略的文件): 灰色
    // 策略：必须比普通文字更淡 (Muted)，让它们在列表中"隐身"。
    'gitDecoration.ignoredResourceForeground': palette.text.subtle,

    // Conflicting (冲突): 红色或紫色
    // 场景：Merge 冲突。必须非常醒目！
    'gitDecoration.conflictingResourceForeground': palette.state.error,

    // Submodule (子模块): 次要文字
    'gitDecoration.submoduleResourceForeground': palette.text.muted,

    // --- Git Blame (行内 Blame 信息 - 插件或原生) ---
    // 场景：编辑器行尾显示的 "You, 2 days ago • Uncommitted changes"
    // 策略：极淡的幽灵文字，不要干扰代码阅读。
    'git.blame.editorDecorationForeground': palette.text.subtle + '50',
  };
};
