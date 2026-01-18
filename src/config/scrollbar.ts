import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Scrollbar Control (滚动条 - 极简/隐形风格)
// -----------------------------------------------------------------
export const scrollbarConfig = (palette: ThemePalette) => {
  return {
    // 1. Track (轨道背景)
    // 设为完全透明。这样就没有那条贯穿屏幕的长条背景了，
    // 代码就像是浮在背景上一样。
    'scrollbar.background': palette.transparent,

    // 2. Shadow (滚动阴影)
    // 设为透明。去掉滚动内容时顶部/左侧出现的黑色阴影线。
    // 这会让界面看起来非常干净 (Shadcn/Vercel 风格)。
    'scrollbar.shadow': palette.shadow.scroll, // 建议在 Palette 中设为 #00000000

    // 3. Slider - Resting (静态滑块)
    // 关键点：使用 muted 颜色 + 极低的透明度 (Hex '15' ≈ 8%, '20' ≈ 12%)
    // 这样它平时几乎看不见，但你仔细看还能找到位置。
    'scrollbarSlider.background': palette.text.muted + '15',

    // 4. Slider - Hover (悬停滑块)
    // 当鼠标靠近想要去抓滚动条时，加深颜色，提供交互反馈。
    'scrollbarSlider.hoverBackground': palette.text.muted + '40',

    // 5. Slider - Active (拖拽滑块)
    // 正在拖拽时，可以使用主色调或者更深的灰色，确保用户知道抓住了。
    // 这里使用 Primary 色会让操作感更强。
    'scrollbarSlider.activeBackground': palette.primary.main + '60',
  };
};
