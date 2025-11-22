# 🚀 Quick Start - Dark Mode

## For Users

### Toggle Theme
Click the **sun/moon icon** (☀️/🌙) in the:
- **Header** (top-right corner) - Available on all pages
- **Sidebar** (dashboard) - Quick access while working

### Features
- ✨ **Instant switching** - No page reload needed
- 💾 **Remembered** - Your choice is saved automatically
- 🎨 **Beautiful** - Professional design in both themes
- 📱 **Everywhere** - Works on all pages and devices

---

## For Developers

### Use Theme in Components

```tsx
import { useTheme } from '@/lib/ThemeProvider';

export function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
      <h1>Current: {theme}</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

### Style with Tailwind

```tsx
// Background colors
className="bg-white dark:bg-zinc-900"

// Text colors
className="text-zinc-900 dark:text-zinc-50"

// Borders
className="border-zinc-200 dark:border-zinc-800"

// Complete example
<div className="
  p-6 rounded-xl
  bg-white dark:bg-zinc-900
  text-zinc-900 dark:text-zinc-50
  border border-zinc-200 dark:border-zinc-800
  hover:shadow-lg transition-all
">
  Content
</div>
```

### Common Patterns

#### Button
```tsx
<button className="
  px-4 py-2 rounded-lg
  bg-orange-600 hover:bg-orange-700
  text-white
  transition-colors
">
  Click Me
</button>
```

#### Card
```tsx
<div className="
  p-6 rounded-xl
  bg-white dark:bg-zinc-900
  border border-zinc-200 dark:border-zinc-800
  shadow-sm hover:shadow-md
  transition-all
">
  Card Content
</div>
```

#### Input
```tsx
<input className="
  w-full px-4 py-2 rounded-lg
  bg-white dark:bg-zinc-800
  text-zinc-900 dark:text-zinc-50
  border border-zinc-300 dark:border-zinc-700
  focus:ring-2 focus:ring-orange-500
" />
```

---

## Color Reference

### Light Mode
- Background: `#ffffff`
- Text: `#09090b`
- Accent: `#ea580c`
- Border: `#e4e4e7`

### Dark Mode
- Background: `#09090b`
- Text: `#fafafa`
- Accent: `#ea580c`
- Border: `#27272a`

---

## Quick Tips

1. **Always use both variants**: `bg-white dark:bg-zinc-900`
2. **Test both themes**: Toggle and verify your changes
3. **Use semantic colors**: zinc for neutrals, orange for accents
4. **Smooth transitions**: Add `transition-colors` or `transition-all`
5. **Check contrast**: Ensure text is readable in both themes

---

## Troubleshooting

### Theme not working?
- Make sure you're using `dark:` prefix
- Check that component is inside `ThemeProvider`
- Clear cache: `rm -rf .next && npm run dev`

### Colors not updating?
- Verify Tailwind classes are correct
- Check `globals.css` for CSS variables
- Rebuild: `npm run build`

---

## Need More Help?

📖 **Full Documentation**: See `THEME.md`

🎨 **Visual Guide**: See `THEME_SHOWCASE.md`

📚 **User Guide**: See `README_DARK_MODE.md`

---

**Happy theming! 🌓**

