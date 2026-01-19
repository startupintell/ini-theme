import { ThemePalette } from '../type';

// -----------------------------------------------------------------
// Scrollbar Control (Minimalist/Invisible style)
// -----------------------------------------------------------------
export const scrollbarConfig = (palette: ThemePalette) => {
  return {
    // 1. Track (Track background)
    // Set to completely transparent. This removes the long background strip running across the screen,
    // making the code look like it's floating on the background.
    'scrollbar.background': palette.transparent,

    // 2. Shadow (Scroll shadow)
    // Set to transparent to remove the dark shadow line at the top/left when content scrolls.
    // This results in a very clean (Shadcn/Vercel style) interface.
    'scrollbar.shadow': palette.shadow.scroll, // Suggest setting to #00000000 in the Palette

    // 3. Slider - Resting (Default slider)
    // Key point: Use muted color + very low transparency (Hex '15' ≈ 8%, '20' ≈ 12%)
    // This makes it almost invisible normally, but still findable when looked for.
    'scrollbarSlider.background': palette.text.muted + '15',

    // 4. Slider - Hover (Hovered slider)
    // Deepen color when the mouse is nearby to provide interaction feedback.
    'scrollbarSlider.hoverBackground': palette.text.muted + '40',

    // 5. Slider - Active (Dragged slider)
    // Use the primary color or a darker gray while dragging to ensure the user knows they have grabbed it.
    // Using the Primary color enhances the sense of control.
    'scrollbarSlider.activeBackground': palette.primary.main + '60',
  };
};
