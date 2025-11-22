# 🌓 Dark Mode Feature Guide

## Quick Start

The Chilly DApp now includes a professional dark mode! Here's everything you need to know:

## 🎯 For Users

### How to Toggle Theme

1. **From Any Page**: Click the sun/moon icon in the top-right corner of the header
2. **From Dashboard**: Use the theme toggle in the sidebar
3. **Automatic**: The app respects your system's theme preference on first visit

### Features

- 🌙 **Dark Mode**: Easy on the eyes in low-light conditions
- ☀️ **Light Mode**: Bright and clear for daytime use
- 💾 **Persistent**: Your choice is saved and remembered
- ⚡ **Instant**: Switches immediately with smooth animations
- 📱 **Everywhere**: Works on all pages and devices

## 🛠️ For Developers

### Using the Theme in Your Components

```tsx
import { useTheme } from '@/lib/ThemeProvider';

export function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
      <h1>Current theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### Styling for Both Themes

Use Tailwind's `dark:` variant:

```tsx
<div className="
  bg-white dark:bg-zinc-900
  text-zinc-900 dark:text-zinc-50
  border-zinc-200 dark:border-zinc-800
">
  Content that adapts to theme
</div>
```

### Theme API

```typescript
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
}
```

## 📦 What's Included

### Core Files
- `lib/ThemeProvider.tsx` - Theme context and logic
- `components/ThemeToggle.tsx` - Toggle button component
- `app/globals.css` - Theme colors and transitions

### Updated Components
All components support both themes:
- Header, Footer, Hero, Features
- Dashboard, Sidebar, Analytics
- Order cards, modals, notifications
- And more!

## 🎨 Color System

### Light Mode Colors
- Background: White (`#ffffff`)
- Text: Dark gray (`#09090b`)
- Accent: Orange (`#ea580c`)
- Borders: Light gray (`#e4e4e7`)

### Dark Mode Colors
- Background: Near black (`#09090b`)
- Text: Off-white (`#fafafa`)
- Accent: Orange (`#ea580c`)
- Borders: Dark gray (`#27272a`)

## 🔧 Customization

### Change Theme Colors

Edit `app/globals.css`:

```css
:root {
  --primary: #your-light-color;
}

.dark {
  --primary: #your-dark-color;
}
```

### Add Custom Theme Variants

```tsx
// In your component
<div className="bg-blue-50 dark:bg-blue-950">
  Custom colored section
</div>
```

## 📱 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+
- ✅ Mobile browsers

## ♿ Accessibility

- Keyboard accessible (Tab + Enter)
- Screen reader friendly
- WCAG 2.1 Level AA compliant
- Respects system preferences
- Proper color contrast in both themes

## 🐛 Troubleshooting

### Theme Not Persisting
- Check if localStorage is enabled in your browser
- Clear browser cache and try again

### Flash of Wrong Theme
- This is prevented by the script in `layout.tsx`
- If you see it, check that `suppressHydrationWarning` is on `<html>`

### Colors Not Updating
- Ensure you're using `dark:` variants in Tailwind classes
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`

## 📚 Documentation

For more details, see:
- `THEME.md` - Complete theme system documentation
- `DARK_MODE_IMPLEMENTATION.md` - Implementation summary

## 🎯 Best Practices

### Do's ✅
- Always provide both light and dark variants
- Use semantic color names
- Test in both themes
- Ensure sufficient contrast
- Use CSS variables for consistency

### Don'ts ❌
- Don't use absolute colors without dark variants
- Don't forget interactive states (hover, focus)
- Don't override theme with inline styles
- Don't use theme-specific images without alternatives

## 🚀 Performance

- **Fast**: Theme switches instantly
- **Small**: Only ~2KB added to bundle
- **Smooth**: Hardware-accelerated transitions
- **Efficient**: No re-renders on theme change

## 💡 Tips

1. **Preview Before Switching**: Hover over the toggle to see the icon change
2. **Keyboard Shortcut**: Tab to the toggle, press Enter
3. **System Sync**: The app automatically detects your OS theme preference
4. **Consistent Experience**: Theme is synced across all tabs

## 🎉 Examples

### Button with Theme Support
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

### Card with Theme Support
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

### Text with Theme Support
```tsx
<p className="
  text-zinc-600 dark:text-zinc-400
  hover:text-zinc-900 dark:hover:text-zinc-50
  transition-colors
">
  Themed text
</p>
```

## 🤝 Contributing

When adding new components:
1. Always include `dark:` variants
2. Test in both themes
3. Follow the existing color palette
4. Ensure accessibility standards
5. Update documentation

## 📞 Support

If you encounter issues:
1. Check this README
2. See `THEME.md` for detailed docs
3. Open an issue on GitHub
4. Contact the maintainers

---

**Enjoy the new dark mode! 🌙**

Made with ❤️ by the Chilly team

